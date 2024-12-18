import { createInvestment } from "../../db/repository/investment.repository";
import { mongooseType, Request, Response } from "../../@types/express";
import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import { IQuery, IUpdateInvestmentPlan } from "../../@types/types";
import {
  adminFindAllTransactionService,
  adminFindTransactionService,
  adminGetUserTransactionCountsService,
  adminHandleTransactionService,
  adminHandleWithdrawalApprovalService,
  depositMoneyService,
  findAllTransactionService,
  getTransactionAnalyticsService,
  getTransactionUserAnalyticsService,
  getUserTransactionCountsService,
  requestWithdrawalService,
} from "../service/transaction.service";

export const depositMoneyCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const { amount } = req.body;
    const response = await depositMoneyService(userId, amount);
    res.status(200).json({ success: true, payload: response });
  }),
];

export const findAllTransactionCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const data = req.query as IQuery;
    const response = await findAllTransactionService(data, userId);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const adminFindAllTransactionCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const data = req.query as IQuery;
    const response = await adminFindAllTransactionService(data, userId);

    res.status(200).json({ success: true, payload: response });
  }),
];

export const adminHandleTransactionCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { transactionId } = req.params;
    const action = req.body.action;
    const userId = req.user.userId;
    const response = await adminHandleTransactionService(
      transactionId,
      userId,
      action
    );

    res.status(200).json({ success: true, payload: response });
  }),
];
export const requestWithdrawalCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const amount = req.body.amount;
    const userId = req.user.userId;
    const response = await requestWithdrawalService(userId, amount);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const adminHandleWithdrawalApprovalCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const transactionId = req.params.transactionId as unknown as mongooseType;
    const userId = req.user.userId;
    const action = req.body.action;
    const response = await adminHandleTransactionService(
      transactionId,
      userId,
      action
    );

    res.status(200).json({ success: true, payload: response });
  }),
];
export const adminFindTransactionCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const transactionId = req.params.transactionId as unknown as mongooseType;

    const response = await adminFindTransactionService(transactionId);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const getTransactionAnalyticsCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const response = await getTransactionAnalyticsService();

    res.status(200).json({ success: true, payload: response });
  }),
];
export const getTransactionUserAnalyticsCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const response = await getTransactionUserAnalyticsService(userId);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const getUserTransactionCountsServiceCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const response = await getUserTransactionCountsService(userId);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const adminGetUserTransactionCountsServiceCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const response = await adminGetUserTransactionCountsService();

    res.status(200).json({ success: true, payload: response });
  }),
];
