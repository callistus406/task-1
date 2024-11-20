import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import { IQuery, ISubscription } from "../../@types/types";
import {
  findSubscriptionsService,
  subscribeToPlanService,
  unSubscribeService,
} from "../service/subscription.service";
// import { subscriptionValidation } from "src/middlewares/validator.mw"
import {
  investmentPlanValidation,
  subscriptionValidation,
} from "../../middlewares/validator.mw";
import { mongooseType, Request, Response } from "../../@types/express";

export const subscribeTPlanCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const data = req.body as {
      investmentPlan: mongooseType;
      amount: number;
      startDate: Date;
      endDate: Date;
    };
    const { userId } = req.user;
    const response = await subscribeToPlanService({ ...data, user: userId });

    res.status(200).json({ success: true, payload: response });
  }),
];

export const findSubScriptionsCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
      const data = req.query as IQuery;
      
      const size = Number(req.query?.size) || 10;
      const page = Number(req.query?.page) || 1;
  
      const sort = req.query?.sort;
      const sortParam = typeof sort === "string" ? sort : "createdAt";
  
      const sortDirectionRaw = req.query?.sortDirection;
      const sortDirection = sortDirectionRaw === "asc" ? 1 : -1;
    const response = await findSubscriptionsService(  {    size,
        page,
        sort: sortParam,
        sortDirection,},userId);

    res.status(200).json({ success: true, payload: response });
  }),
];
export const unSubscribeCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const { userId } = req.user;
    const subscriptionId = req.params.subscriptionId;
    const response = await unSubscribeService(subscriptionId, userId);

    res.status(200).json({ success: true, payload: response });
  }),
];
