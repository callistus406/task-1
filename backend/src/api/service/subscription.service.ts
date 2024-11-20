import {
  createSubscription,
  deleteSubscription,
  findSubscription,
  findSubscriptions,
} from "../../db/repository/subscription.respositry";
import { IQuery, ISubscription } from "../../@types/types";
import { createCustomError } from "../../middlewares/customErrorHandler";
import { mongooseType } from "../../@types/express";
import { isValidObjectId } from "mongoose";

export const subscribeToPlanService = async (data: ISubscription) => {
  const response = await createSubscription(data);

  if (!response)
    throw createCustomError("Unable to process request.Please try again", 500);
  return response;
};

export const findSubscriptionsService = async (
  query: IQuery,
  userId: mongooseType
) => {
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

  const response = await findSubscriptions(preparedQuery, userId, skip);
  return response;
};
export const unSubscribeService = async (
  subscriptionId: string,
  userId: mongooseType
) => {
  const isFound = await findSubscription(subscriptionId, userId);
  if (!subscriptionId || !isValidObjectId(subscriptionId)) {
    throw createCustomError("Invalid subscription ID.", 422);
  }

  if (!isFound) throw createCustomError("Record not found", 404);

  const response = await deleteSubscription(subscriptionId, userId);
  if (response.deletedCount === 0)
    throw createCustomError("Unable to complete request", 500);

  return "Subscription cancelled";
};
