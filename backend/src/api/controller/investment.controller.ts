import { createInvestment } from "../../db/repository/investment.repository";
import { Request, Response } from "../../@types/express";
import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import {
  filterQueryValidator,
  idValidation,
  investmentPlanValidation,
} from "../../middlewares/validator.mw";
import {
  findInvestmentService,
  findInvestmentsService,
  updateInvestmentPlanService,
} from "../service/investment.service";
import { IUpdateInvestmentPlan } from "../../@types/types";

export const adminCreateInvestment = [
  ...investmentPlanValidation,
  asyncWrapper(async (req: Request, res: Response) => {
    const data = req.body as {
      name: string;
      description?: string;
      minimumAmount: number;
      interestRate: number;
      durationInMonths: number;
    };
    const { userId } = req.user;
    const response = await createInvestment(
      { ...data, createdBy: userId },
      userId
    );

    res.status(201).json({ success: true, payload: response });
  }),
];

export const adminFindInvestments = [
  asyncWrapper(async (req: Request, res: Response) => {
    const size = Number(req.query?.size) || 10;
    const page = Number(req.query?.page) || 1;

    const sort = req.query?.sort;
    const sortParam = typeof sort === "string" ? sort : "createdAt";

    const sortDirectionRaw = req.query?.sortDirection;
    const sortDirection = sortDirectionRaw === "asc" ? 1 : -1;

    const response = await findInvestmentsService({
      size,
      page,
      sort: sortParam,
      sortDirection,
    });

    res.status(200).json({ success: true, payload: response });
  }),
];

export const adminFindInvestment = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { investmentId } = req.params;
    const { userId } = req.user;

    const response = await findInvestmentService(investmentId);

    res.status(200).json({ success: true, payload: response });
  }),
];

export const adminUpdateInvestment = [
  asyncWrapper(async (req: Request, res: Response) => {
    const data = req.body as IUpdateInvestmentPlan;
    const { investmentId } = req.params;

    const response = await updateInvestmentPlanService(data, investmentId);

    res.status(200).json({ success: true, payload: response });
  }),
];
