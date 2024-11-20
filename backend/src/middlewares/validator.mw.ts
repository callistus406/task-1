import {
  body,
  matchedData,
  query,
  validationResult,
  check,
} from "express-validator";

import { NextFunction, Request, Response } from "../@types/express";
import mongoose from "mongoose";


export const validateResult = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array()[0] as any; 
    return res.status(422).json({
      success: false,
      error:  firstError.msg,
      
    });
  }

  req.data = matchedData(req); 
  next();
};


export const registerValidation = [
  body("first_name").isString().notEmpty().withMessage("First name is required"),
  body("last_name").isString().notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("phone")
    .isString()
    .matches(/^\+234\d{10}$/)
    .withMessage("Phone number must start with '+234' followed by 10 digits."),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must include at least one uppercase letter, one lowercase letter, and one number"
    ),
  validateResult,
];

export const validateVerifyOtp = [
  body("otp")
    .isString()
    .notEmpty()
    .withMessage("OTP is required")
    .matches(/^\d{6}$/)
    .withMessage("OTP must be exactly 6 digits"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  validateResult,
];

export const emailValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  validateResult,
];

export const userValidationRules = () => [
  body("first_name").isString().notEmpty().withMessage("First name is required"),
  body("last_name").isString().notEmpty().withMessage("Last name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("identityNumber").notEmpty().withMessage("Identity number is required"),
  body("phone")
    .isString()
    .matches(/^\+234\d{10}$/)
    .withMessage("Phone number must start with '+234' followed by 10 digits."),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must include at least one uppercase letter, one lowercase letter, and one number"
    ),
  validateResult,
];

export const investmentPlanValidation = [
  body("name").isString().notEmpty().withMessage("Name is required"),
  body("description").optional().isString().withMessage("Description must be a string"),
  body("minimumAmount")
    .isNumeric()
    .withMessage("Minimum amount must be a number")
    .custom((value) => value > 0)
    .withMessage("Minimum amount must be greater than 0"),
  body("interestRate")
    .isNumeric()
    .withMessage("Interest rate must be a number")
    .custom((value) => value > 0 && value <= 100)
    .withMessage("Interest rate must be between 0 and 100"),
  body("durationInMonths")
    .isInt({ min: 1 })
    .withMessage("Duration must be a positive integer"),
  // body("createdBy")
  //   .isString()
  //   .isMongoId()
  //   .withMessage("CreatedBy must be a valid MongoDB ObjectId"),
  validateResult,
];

export const updateProfileValidation = [
  body("first_name").optional().isString().withMessage("First name must be a string"),
  body("last_name").optional().isString().withMessage("Last name must be a string"),
  body("phone")
    .optional()
    .isString()
    .matches(/^\+234\d{10}$/)
    .withMessage("Phone number must start with '+234' followed by 10 digits."),
  validateResult,
];

export const filterQueryValidator = [
  query("page").optional().isNumeric().withMessage("Invalid page number"),
  query("size").optional().isNumeric().withMessage("Invalid page size"),
  query("sort").optional().isString().withMessage("Invalid sort field"),
  query("sortDirection")
    .optional()
    .isIn([-1, 1])
    .withMessage("Invalid sort direction"),
  validateResult,
];

export const idValidation = [
  query("id").isMongoId().withMessage("Invalid ID"),
  validateResult,
];

export const subscriptionValidation = [
  body("investmentPlan")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    .withMessage("Invalid investment plan ID."),
  body("amount")
    .isNumeric()
    .withMessage("Amount must be a number.")
    .custom((value) => value >= 1)
    .withMessage("Amount must be at least 1."),
  body("startDate")
    .isISO8601()
    .withMessage("Start date must be a valid ISO 8601 date."),
  body("endDate")
    .isISO8601()
    .withMessage("End date must be a valid ISO 8601 date.")
    .custom((value, { req }) => {
      const startDate = new Date(req.body.startDate);
      const endDate = new Date(value);
      if (startDate >= endDate) {
        throw new Error("End date must be after the start date.");
      }
      return true;
    }),
  validateResult,
];

export const loginValidation = [
  body("email")
    .isString()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage(
      "Password must have at least one uppercase, one lowercase letter, and one digit."
    ),
  validateResult,
];
