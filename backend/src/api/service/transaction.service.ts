import { createCustomError } from "../../middlewares/customErrorHandler";
import { mongooseType } from "../../@types/express";
import {
  findUserWallet,
  findWallet,
} from "../../db/repository/wallet.repository";
import {
  adminFindAllTransactions,
  adminFindTransaction,
  adminFindTransactionById,
  adminGetUserTransactionCounts,
  depositMoney,
  findAllTransactions,
  findTransaction,
  getTransactionAnalytics,
  getTransactionUserAnalytics,
  getUserTransactionCounts,
  withdrawMoney,
} from "../../db/repository/transaction.repository";
import { IQuery } from "../../@types/types";
import { isValidObjectId } from "mongoose";
import { transcode } from "buffer";
import { transactionNotificationTemplate } from "../../utils/templates_files/transactionTemplate";
import sendMail from "../../utils/sendMail";

export const depositMoneyService = async (
  userId: mongooseType,
  amount: number
) => {
  if (!amount) throw createCustomError("Amount is required", 422);
  if (isNaN(amount)) throw createCustomError("Amount must be numeric", 422);

  if (amount <= 0)
    throw createCustomError("Deposit amount must be greater than zero.", 422);

  const wallet = await findWallet(userId);
  if (!wallet) throw createCustomError("Wallet not found.", 404);

  const transaction = await depositMoney({
    userId,
    amount,
    walletId: wallet._id,
  });
  return "Deposit request submitted successfully.";
};
export const findAllTransactionService = async (
  query: IQuery,
  userId: mongooseType
) => {
  const size = Number(query?.size) || 10;
  const page = Number(query?.page) || 1;
  const sort = query?.sort || "_id";
  const sortDirection = Number(query?.sortDirection) || -1;

  const preparedQuery: IQuery = {
    ...query,
    size,
    page,
    sort,
    sortDirection,
  };
  const skip = (page - 1) * size;
  const response = await findAllTransactions(preparedQuery, userId, skip);
  return response;
};
export const adminFindAllTransactionService = async (
  query: IQuery,
  userId: mongooseType
) => {
  const size = Number(query?.size) || 10;
  const page = Number(query?.page) || 1;
  const sort = query?.sort || "_id";
  const sortDirection = Number(query?.sortDirection) || -1;

  const preparedQuery: IQuery = {
    ...query,
    size,
    page,
    sort,
    sortDirection,
  };
  const skip = (page - 1) * size;
  const response = await adminFindAllTransactions(preparedQuery, skip);
  return response;
};
export const findTransactionService = async (
  transactionId: mongooseType,
  userId: mongooseType
) => {
  const response = await findTransaction(transactionId, userId);
  return response;
};
export const adminFindTransactionService = async (
  transactionId: mongooseType
) => {
  if (!transactionId || !isValidObjectId(transactionId)) {
    throw createCustomError("Invalid transaction ID.", 422);
  }

  const response = await adminFindTransaction(transactionId);
  return response;
};

export const adminHandleTransactionService = async (
  transactionId: mongooseType,
  adminId: mongooseType,
  action: string
) => {
  const state = ["approve", "reject"];
  if (!state.includes(action.toLowerCase())) {
    throw createCustomError(`Must be either of the following: ${state.join(", ")}`, 422);
  }
  if (!action) {
    throw createCustomError("Action is required.", 422);
  }
  if (!transactionId || !isValidObjectId(transactionId)) {
    throw createCustomError("Invalid transaction ID.", 422);
  }

  const transaction = await adminFindTransactionById(transactionId);
  if (!transaction) throw createCustomError("Transaction not found.", 404);
  if (transaction.status !== "PENDING") {
    throw createCustomError("Transaction is not pending.", 400);
  }

  if (!["DEPOSIT", "WITHDRAWAL"].includes(transaction.type)) {
    throw createCustomError("Invalid transaction type.", 400);
  }

  let status;

  if (action === "approve") {
    transaction.status = "APPROVED";
    transaction.admin = adminId;

    const wallet = await findUserWallet(transaction.wallet);
    if (!wallet) throw createCustomError("Wallet not found.", 404);

    if (transaction.type === "DEPOSIT") {
      wallet.balance += transaction.amount;
    } else if (transaction.type === "WITHDRAWAL") {
      if (wallet.balance < transaction.amount) {
        throw createCustomError(
          "Insufficient wallet balance for withdrawal.",
          400
        );
      }
      wallet.balance -= transaction.amount;
    }

    await transaction.save();
    await wallet.save();
    status = "APPROVED";
  } else if (action === "reject") {
    transaction.status = "REJECTED";
    transaction.admin = adminId;
    await transaction.save();
    status = "REJECTED";
  } else {
    throw createCustomError("Invalid action provided.", 400);
  }

  const userEmail = (transaction.user as any)?.email;
  const userName = (transaction.user as any)?.last_name;

  const successMessage = `Transaction ${action}d successfully.`;

  setImmediate(async () => {
    try {
      await sendMail({
        subject: `Transaction ${status}`,
        userEmail,
        cb: transactionNotificationTemplate,
        emailInfo: {
          userName,
          transactionType: transaction.type,
          amount: transaction.amount,
          status,
        },
      });
    } catch (error) {
      console.error("Error sending email:", error.message);
    }
  });

  return successMessage;
};


export const requestWithdrawalService = async (
  userId: mongooseType,
  amount: number
) => {
  if (!amount) throw createCustomError("Amount is required", 422);
  if (isNaN(amount)) throw createCustomError("Amount must be numeric", 422);
  if (amount <= 0)
    throw new Error("Withdrawal amount must be greater than zero.");
  const wallet = await findWallet(userId);
  if (!wallet) throw createCustomError("Wallet not found.", 404);
  if (wallet.balance < amount)
    throw createCustomError("Insufficient balance.", 400);
  const transaction = await withdrawMoney({
    userId,
    amount,
    walletId: wallet._id,
  });

  return "Withdrawal request submitted successfully.";
};

export const adminHandleWithdrawalApprovalService = async (
  transactionId: mongooseType,
  adminId: mongooseType,
  action: "APPROVE" | "REJECT"
) => {
  const transaction = await adminFindTransactionById(transactionId);
  if (!transaction) throw createCustomError("Transaction not found.", 404);
  if (transaction.status !== "PENDING")
    throw createCustomError("Transaction is not pending.", 400);

  if (transaction.type !== "WITHDRAWAL")
    throw createCustomError(
      "Only withdrawal transactions can be managed.",
      400
    );

  if (action === "APPROVE") {
    const wallet = await findUserWallet(transaction.wallet);
    if (!wallet) throw createCustomError("Wallet not found.", 404);
    if (wallet.balance < transaction.amount)
      throw createCustomError("Insufficient balance in the wallet.", 400);

    wallet.balance -= transaction.amount;
    await wallet.save();

    transaction.status = "APPROVED";
    transaction.admin = adminId;
    await transaction.save();

    return "Withdrawal approved and wallet updated.";
  } else if (action === "REJECT") {
    transaction.status = "REJECTED";
    transaction.admin = adminId;
    await transaction.save();

    return "Withdrawal request rejected.";
  }
};

export const getTransactionAnalyticsService = async () => {
  const response = await getTransactionAnalytics();

  return response;
};
export const getTransactionUserAnalyticsService = async (
  userId: mongooseType
) => {
  const response = await getTransactionUserAnalytics(userId);

  return response;
};
export const getUserTransactionCountsService = async (userId: mongooseType) => {
  const response = await getUserTransactionCounts(userId);

  return response;
};
export const adminGetUserTransactionCountsService = async () => {
  const response = await adminGetUserTransactionCounts();

  return response;
};
