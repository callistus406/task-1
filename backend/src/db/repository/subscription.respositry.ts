import { mongooseType } from "../../@types/express";
import { IQuery, ISubscription } from "../../@types/types";
import SubscriptionModel from "../models/wallet.model";

export const createSubscription = async (
  data: ISubscription,
  skip?: number
) => {
  const response = await SubscriptionModel.create(data);
  return response;
};

export const findSubscriptions = async (
  query: IQuery,
  userId: mongooseType,
  skip?: any
) => {
  const totalDocuments = await SubscriptionModel.countDocuments();
  const subscriptions = await SubscriptionModel.find({ user: userId })
    .sort({ [query.sort]: query.sortDirection as any })
    .skip(skip)
    .limit(query.size)
    .exec();


  return {
    success: true,
    subscriptions,
    page: query.page,
    size: query.size,
    total: totalDocuments,
    pages: Math.ceil(totalDocuments / query.size),
  };
};
export const adminFindSubscriptions = async (
  query: IQuery,
 
  skip?: any
) => {
  const totalDocuments = await SubscriptionModel.countDocuments();
  const subscriptions = await SubscriptionModel.find({  })
    .sort({ [query.sort]: query.sortDirection as any })
    .skip(skip)
    .limit(query.size)
    .exec();


  return {
    success: true,
    subscriptions,
    page: query.page,
    size: query.size,
    total: totalDocuments,
    pages: Math.ceil(totalDocuments / query.size),
  };
};

export const deleteSubscription = async (
  subscriptionId: string,
  userId: mongooseType
) => {
  const response = await SubscriptionModel.deleteOne({
    _id: subscriptionId,
    user: userId,
  });
  return response;
};

export const findSubscription = async (
  subscriptionId: string,
  userId: mongooseType
) => {
  const response = await SubscriptionModel.findOne({
    _id: subscriptionId,
    user: userId,
  });
  return response;
};
