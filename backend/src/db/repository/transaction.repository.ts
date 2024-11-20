import TransactionModel from "../models/transaction.model";
import { mongooseType } from "../../@types/express";
import { createCustomError } from "../../middlewares/customErrorHandler";
import { IQuery } from "../../@types/types";
import mongoose from "mongoose";

export const depositMoney = async (data: {
  userId: mongooseType;
  amount: number;
  walletId: mongooseType;
}) => {
  try {
    const transaction = await TransactionModel.create({
      wallet: data.walletId,
      user: data.userId,
      amount: data.amount,
      type: "DEPOSIT",
      status: "PENDING",
    });

    return transaction;
  } catch (error) {
    throw createCustomError("Error processing deposit:", 500);
  }
};
export const withdrawMoney = async (data: {
  userId: mongooseType;
  amount: number;
  walletId: mongooseType;
}) => {
  try {
    const transaction = await TransactionModel.create({
      wallet: data.walletId,
      user: data.userId,
      amount: data.amount,
      type: "WITHDRAWAL",
      status: "PENDING",
    });

    return transaction;
  } catch (error) {
    console.log(error);
    throw createCustomError("Error processing request", 500);
  }
};

export const findAllTransactions = async (
  query: IQuery,
  userId: mongooseType,
  skip?: number
) => {
  const totalDocuments = await TransactionModel.countDocuments();
  const response = await TransactionModel.find({ user: userId }).populate("user","email first_name last_name")
    .sort({ [query.sort]: query.sortDirection as any })
    .skip(skip)
    .limit(query.size)
    .exec();

  return {
    success: true,
    transactions: response,
    page: query.page,
    size: query.size,
    total: totalDocuments,
    pages: Math.ceil(totalDocuments / query.size),
  };
};
export const adminFindAllTransactions = async (
  query: IQuery,
  skip?: number
) => {
  const totalDocuments = await TransactionModel.countDocuments();
  const response = await TransactionModel.find({}).populate("user","email first_name last_name")
    .sort({ [query.sort]: query.sortDirection as any })
    .skip(skip)
    .limit(query.size)
    .exec();

  return {
    success: true,
    transactions: response,
    page: query.page,
    size: query.size,
    total: totalDocuments,
    pages: Math.ceil(totalDocuments / query.size),
  };
};

export const findTransaction = async (
  transactionId: mongooseType,
  userId: mongooseType
) => {
  const response = await TransactionModel.find({
    user: userId,
    _id: transactionId,
  });
  return response;
};

export const adminFindTransaction = async (transactionId: mongooseType) => {
  const response = await TransactionModel.findOne({
    _id: transactionId,
  }).populate("user", "first_name last_name email");
  return response;
};
export const adminFindTransactionById = async (transactionId: mongooseType) => {
  const response = await TransactionModel.findOne({ _id: transactionId });
  return response;
};

export const getDepositsAndWithdrawals = async () => {
  return await TransactionModel.aggregate([
    {
      $match: { type: { $in: ["DEPOSIT", "WITHDRAWAL"] } },
    },
    {
      $group: {
        _id: "$type",
        totalAmount: { $sum: "$amount" },
        count: { $sum: 1 },
      },
    },
  ]);
};



export const getTransactionAnalytics = async () => {
  const analytics = await TransactionModel.aggregate([
    {
      $group: {
        _id: {
          type: "$type",
          status: "$status",
        },
        totalAmount: { $sum: "$amount" },
        count: { $sum: 1 }, 
      },
    },
    {
      $group: {
        _id: "$_id.type",
        statuses: {
          $push: {
            status: "$_id.status",
            totalAmount: "$totalAmount",
            count: "$count",
          },
        },
        totalAmountByType: { $sum: "$totalAmount" },
        totalCountByType: { $sum: "$count" },
      },
    },
  ]);

  return analytics;
};

export const getTransactionUserAnalytics = async (userId: mongooseType) => {
  const matchStage:any = userId ? { $match: { user: new mongoose.Types.ObjectId(userId) } } : {};

  const analytics = await TransactionModel.aggregate([
    matchStage, 
    {
      $group: {
        _id: {
          type: "$type",
          status: "$status",
        },
        totalAmount: { $sum: "$amount" }, 
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: "$_id.type",
        statuses: {
          $push: {
            status: "$_id.status",
            totalAmount: "$totalAmount",
            count: "$count",
          },
        },
        totalAmountByType: { $sum: "$totalAmount" },
        totalCountByType: { $sum: "$count" },
      },
    },
  ]);

  return analytics;
};



export const getUserTransactionCounts = async (userId: mongooseType) => {
  try {
    const userObjectId = new mongoose.Types.ObjectId(userId);

    const counts = await TransactionModel.aggregate([
      { $match: { user: userObjectId } }, 
      {
        $group: {
          _id: {
            type: "$type", 
            status: "$status",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const result = {
      deposits: 0,
      withdrawals: 0,
      pending: 0,
    };

    counts.forEach((item:any) => {
      if (item._id.type === "DEPOSIT") result.deposits += item.count;
      if (item._id.type === "WITHDRAWAL") result.withdrawals += item.count;
      if (item._id.status === "PENDING") result.pending += item.count;
    });

    return result;
  } catch (error) {
    console.error("Error fetching transaction counts:", error);
    throw error;
  }
};

export const adminGetUserTransactionCounts = async () => {
  try {
    // const userObjectId = new mongoose.Types.ObjectId(userId);

    const counts = await TransactionModel.aggregate([
    
      {
        $group: {
          _id: {
            type: "$type", 
            status: "$status",
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const result = {
      deposits: 0,
      withdrawals: 0,
      pending: 0,
    };

    counts.forEach((item:any) => {
      if (item._id.type === "DEPOSIT") result.deposits += item.count;
      if (item._id.type === "WITHDRAWAL") result.withdrawals += item.count;
      if (item._id.status === "PENDING") result.pending += item.count;
    });

    return result;
  } catch (error) {
    console.error("Error fetching transaction counts:", error);
    throw error;
  }
};
