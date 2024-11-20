import { createCustomError } from "../../middlewares/customErrorHandler";
import {
  IInvestmentPlan,
  IQuery,
  IUpdateInvestmentPlan,
} from "../../@types/types";
import {
  createInvestment,
  deleteInvestmentPlan,
  findInvestmentPlan,
  findInvestments,
  getInvestmentStatistics,
  updateInvestmentPlan,
} from "../../db/repository/investment.repository";
import { mongooseType } from "../../@types/express";
import { createSubscription } from "../../db/repository/subscription.respositry";
import { isValidObjectId } from "mongoose";

export const createInvestmentService = async (
  data: IInvestmentPlan,
  userId: mongooseType
) => {
  const response = await createInvestment(data, userId);

  if (!response) throw createCustomError("Unable to create record", 500);

  return response;
};

export const findInvestmentsService = async (query: IQuery) => {
  const size = Number(query?.size) || 10;
  const page = Number(query?.page) || 1;
  const sort = query?.sort || "_id";
  const sortDirection = Number(query?.sortDirection) || -1;

  const preparedQuery: IQuery = {
    ...query,
    size,
    page,
    sort,
    sortDirection,
  };

  const skip = (page - 1) * size;

  const response = await findInvestments(preparedQuery, skip);

  return response;
};
// export const findInvestmentsService = async (query:IQuery) => {
//     let size = Number(query?.size);
//     let page = Number(query?.page);
//     const sort = query?.sort;
//     const sortDirection = Number(query?.sortDirection) || -1;

//     page = page || 1;
//     size = size || 10;
//     const skip = (page - 1) * size;
//     const response = await findInvestments({...query,sort:sort,sortDirection:sortDirection}, skip);
//     return response;

// }
export const findInvestmentService = async (investmentId: string) => {
  if (!investmentId || !isValidObjectId(investmentId)) {
    throw createCustomError("Invalid transaction ID.", 422);
  }
  const response = await findInvestmentPlan(investmentId);
  return response;
};

export const updateInvestmentPlanService = async (
  data: IUpdateInvestmentPlan,
  investmentId: string
) => {
  if (!investmentId || !isValidObjectId(investmentId)) {
    throw createCustomError("Invalid transaction ID.", 422);
  }
  const isFound = await findInvestmentPlan(investmentId);
  if (!isFound) throw createCustomError("Unable to  find record", 500);

  await updateInvestmentPlan(data, investmentId);

  return "Record Updated!";
};
export const getInvestmentStatisticsService = async () => {
  const response = await getInvestmentStatistics();

  return response;
};
