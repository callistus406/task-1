import { Request, Response } from "../../@types/express";
import { asyncWrapper } from "../../middlewares/asyncWrapper.mw";
import { dashboardService } from "../service/dasboard.service";

export const adminDashboardCtrl = [
  asyncWrapper(async (req: Request, res: Response) => {
    const response = await dashboardService();

    res.status(200).json({ success: true, payload: response });
  }),
];
