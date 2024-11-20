import { Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import { createCustomError } from "../../middlewares/customErrorHandler";
import { validateResult } from "../../middlewares/validator.mw";
import UsersModel from "../../db/models/user.model";
import { comparePasswords } from "../../utils/bcrypt";
import constants from "../../utils/constants";
import { mongooseType } from "../../@types/express";
import {
  findUserByEmail,
  findUserById,
} from "../../db/repository/user.repository";
import config from "../../config/config";
import {
  findUserWallet,
  findWalletByUser,
} from "../../db/repository/wallet.repository";

export const logoutService = async (userId: mongooseType) => {
  const foundUser = await findUserById(userId);
  if (!foundUser) {
    throw createCustomError("Unable to process request", 400);
  }
  await foundUser.updateOne({ $set: { refreshToken: [] } });
  return true;
};

export const loginService = async (email: string, password: string) => {
  // if (req.cookies["X-Refresh-Token"])
  //   throw createCustomError("You're already logged in", 400);

  const user = await findUserByEmail(email);

  // console.log(user);
  if (!user) throw createCustomError("Invalid credentials", 404);

  const wallet = await findWalletByUser(user._id);
  const isMatch = await comparePasswords(password, user.hashed_password);
  if (!isMatch) throw createCustomError("Invalid email or password", 400);

  if (!user.is_verified)
    throw createCustomError(
      "Your account is not verified. Please request and OTP to verify your account",
      400
    );

  const payload = {
    email: user.email,
    userId: user._id,
    role: user.role,
    walletId: wallet ? wallet._id : null,
  };

  const accessToken = jwt.sign(
    { user: payload },
    constants.jwt.accessTokenSecret,
    { expiresIn: "1d" }
  );
  const refreshToken = jwt.sign(
    { _id: user._id, role: user.role },
    constants.jwt.refreshTokenSecret,
    {
      expiresIn: "1d",
    }
  );

  let newRefreshTokenArray = user.refresh_token.filter(
    (rt) => rt !== refreshToken
  );
  newRefreshTokenArray = [...newRefreshTokenArray, refreshToken];

  user.refresh_token = newRefreshTokenArray;
  await user.save();
  return {
    user: payload,
    token: accessToken,
  };
};
