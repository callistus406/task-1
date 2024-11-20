import { createCustomError } from '../../middlewares/customErrorHandler';
import { IInvestmentPlan, IQuery, IUpdateInvestmentPlan } from '../../@types/types';
import UserModel  from './../models/user.model';
import InvestmentPlanModel from '../models/investment.model';
import { mongooseType } from '../../@types/express';


export const createInvestment = async (data:IInvestmentPlan,userId: mongooseType) => {
    //TODO: find a way to make investments unique
    const response = await InvestmentPlanModel.create({...data,createdBy:userId});

    return response;   
    
}
    

export const findInvestments = async (query: IQuery, skip?: number) => {
    const totalInvestments = await InvestmentPlanModel.countDocuments(query);
  
    const investments = await InvestmentPlanModel.find(query)
      .sort({ [query.sort]: query.sortDirection as any })
      .skip(skip)
      .limit(query.size);
  
    return {
      success: true,
      investments,
      page: query.page,
      size: query.size,
      total: totalInvestments,
      pages: Math.ceil(totalInvestments / query.size),
    };
  };
    

export const findInvestmentPlan = async (investmentId: string) => {
    const response = await InvestmentPlanModel.findOne({ _id: investmentId })
    if (!response) return null
    return response
  
}
//TODO:Validate this
   export const deleteInvestmentPlan = async (investmentId: string) => {
    const response = await InvestmentPlanModel.deleteOne({ _id: investmentId })
    if (!response) return null
    return response
  
}
    

export const updateInvestmentPlan = async (data:IUpdateInvestmentPlan,investmentId: string) => {
    const response = await InvestmentPlanModel.updateOne({ _id: investmentId },        { $set: { ...data } },
        { new: true })
    if (!response) return null
    return response
  
}
    