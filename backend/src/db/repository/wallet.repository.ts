import { createCustomError } from "../../middlewares/customErrorHandler";
import { mongooseType } from "../../@types/express";
import { ICreateWallet } from "../../@types/types";
import WalletModel from "../models/wallet.model";

export const createWallet = async (data: ICreateWallet) => {
  const response = await WalletModel.create(data);
  return response;
};
export const findUserWallet = async (walletId: mongooseType) => {
  try {
    const response = await WalletModel.findById({_id:walletId}).populate(
      "user",
      "first_name email last_name"
    );

    if (!response) return null;

    return response;
  } catch (error) {
    console.log(error)
    throw createCustomError("Could not retrieve wallet information", 500);
  }
};
export const findWalletByUser = async (userId: mongooseType) => {
  try{
    const response = await WalletModel.findOne({ user: userId }).populate(
      "user",
      "first_name email last_name"
    );

    if (!response) return null;

    return response;
  } catch (error) {
    throw createCustomError("Could not retrieve wallet information", 500);
  }
};

export const findWallet = async (userId: mongooseType) => {
  const wallet = await WalletModel.findOne({ user: userId });
  return wallet;
};
