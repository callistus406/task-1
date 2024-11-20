import { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

import { IRegistration } from "../../@types/types";
import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import { createCustomError } from "../../middlewares/customErrorHandler";
import { validateResult } from "../../middlewares/validator.mw";
import UsersModel, { UserPoJo } from "../../db/models/user.model";
import { comparePasswords, hashPassword } from "../../utils/bcrypt";
import constants from "../../utils/constants";
import {
  generateToken,
  generateUserSecrete,
  verifyUserToken,
} from "../../utils/otpGenerator";
import sendMail from "../../utils/sendMail";
import emailOTPTemplate from "../../utils/templates_files/emailVerificationTemplate";
import { createUser, findUserByEmail, findUserByIdAndUpdate, findUserOtpSecrete, updateUserAccount } from "../../db/repository/user.repository";
import { findUser } from "../../db/repository/user.repository";
import config from "../../config/config";
import { createWallet } from "../../db/repository/wallet.repository";


export const registrationService = async (data: IRegistration) => {
  

const isFound = await findUser(data.email,data.phone)
  if (isFound) throw createCustomError("Duplicate entry detected", 409);

  const hashedPassword = await hashPassword(data.password);
  if (!hashedPassword)
    throw createCustomError(
      "Unable to to process request.Please try again",
      500
    );
  const secrete = generateUserSecrete();
  const token = generateToken(secrete);

  const isCreated = await createUser({
    email: data.email,
    first_name: data.first_name,
    last_name: data.last_name,
    role: 1002  ,
    hashed_password: hashedPassword,
    otp_secrete: secrete,
    phone:data.phone
    
  })


  if (!isCreated) {
    throw createCustomError(
      "Unable to create account.Please try again ",
      500
    );
  }
  //create wallet

  const response = await createWallet({ user: isCreated._id })
  if (!response) {
    //log event
  } 

   
  return {
    success: true,
    token,
    payload:
      `Registration successful. An OTP has been sent to the provided Email address. If you don't receive one, please check your spam box or request for a new one`,
  }



}




export const verifyOtpService = async (otp:string,email:string) => {
    const isFound = await findUserOtpSecrete(email)
    if (!isFound) throw createCustomError("Invalid account information", 404);
    const isValid = verifyUserToken(otp, isFound.otp_secrete);

    if (!isValid) throw createCustomError("Invalid OTP", 400);
  const isUpdated = await updateUserAccount(email);

    if (!isUpdated)
      throw createCustomError(
        "Unable to process request.Please try again",
        500
      );
  return {
    
    payload:
      "Your OTP has been successfully verified, and your account has been approved",
  }
  }


export const requestOtpService = async (email:string) => {
  
const isFound = await findUserByEmail(email)

    if (!isFound) {
      throw createCustomError(
        "This account is not recognized in our system. Please check your email and try again",
        404
      );
    }

    const secrete = generateUserSecrete();
    const token = generateToken(secrete);
  const response = await findUserByIdAndUpdate(isFound._id, secrete);
  //TODO:handle this error
  
  return{otp:token,message: "An OTP (One-Time Password) has been sent to you email"}
    
  }

