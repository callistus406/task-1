import TransactionModel from "../models/transaction.model";
import { mongooseType } from "../../@types/express";
import { createCustomError } from "../../middlewares/customErrorHandler";
import { IQuery } from "../../@types/types";

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
    console.log(error)
    throw createCustomError("Error processing request", 500);
  }
};

export const findAllTransactions = async (
  query: IQuery,
  userId: mongooseType,
  skip?: number
) => {
  const totalDocuments = await TransactionModel.countDocuments();
  const response = await TransactionModel.find({ user: userId })
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
  const response = await TransactionModel.find({  })
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
export const adminFindTransactionById = async (transactionId: mongooseType) => {
  const response = await TransactionModel.findOne({ _id: transactionId });
  return response;
};
