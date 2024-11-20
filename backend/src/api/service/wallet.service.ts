import { findUserWallet } from "../../db/repository/wallet.repository";
import { mongooseType } from "../../@types/express";

export const findWalletService = async (walletId: mongooseType) => {
  const response = await findUserWallet(walletId);
  return response;
};
