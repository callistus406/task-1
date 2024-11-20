import { mongooseType } from "../../@types/express";
import { IQuery, ISubscription } from "../../@types/types";
import SubscriptionModel from "../models/subscription.model";

export const createSubscription = async (
  data: ISubscription,
) => {

  const response = await SubscriptionModel.create({...data,plan:data.investmentPlan});
  return response;
};

export const findSubscriptions = async (
  query: IQuery,
  userId: mongooseType,
  skip?: any
) => {
  const totalDocuments = await SubscriptionModel.countDocuments();
  const subscriptions = await SubscriptionModel.find({ user: userId })
    .sort({ [query.sort]: query.sortDirection as any }).populate("plan","name")
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
  const subscriptions = await SubscriptionModel.find({})
    .populate("user", "first_name last_name email")
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

export const findSubscriptionByInvestmentId = async (id: mongooseType) => {
  const response = await SubscriptionModel.findOne({
    plan: id,
  });
  return response;
};

export const getSubscriptionsByUser = async () => {
  return await SubscriptionModel.aggregate([
    {
      $group: {
        _id: "$user",
        totalSubscriptions: { $sum: 1 },
        totalAmount: { $sum: "$amount" },
        averageSubscriptionAmount: { $avg: "$amount" },
        maxSubscriptionAmount: { $max: "$amount" }, 
        minSubscriptionAmount: { $min: "$amount" }, 
      },
    },
    {
      $lookup: {
        from: "userrecords", 
        localField: "_id",
        foreignField: "_id",
        as: "userInfo",
      },
    },
    {
      $project: {
        _id: 0,
        userId: "$_id",
        userName: { $arrayElemAt: ["$userInfo.name", 0] },
        totalSubscriptions: 1,
        totalAmount: 1,
        averageSubscriptionAmount: 1,
        maxSubscriptionAmount: 1,
        minSubscriptionAmount: 1,
      },
    },
    {
      $sort: {
        totalSubscriptions: -1,
      },
    },
  ]);
};
