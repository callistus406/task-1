import UserModel from "../models/user.model"
import { ISaveUser, IUpdateProfile } from "../../@types/types";
import { mongooseType } from "../../@types/express";


export const createUser = async (data: ISaveUser) => {
    
    const response = await UserModel.create(data);

    return response;   
    
}
export const findUser = async (email:string,phone:string) => {
    
     const response = await UserModel.findOne({
        $or: [
          { email: email },
          { phone: phone },
        ],
      }).lean();

    return response;   
    
}
export const findUserOtpSecrete = async (email: string) => {
    
    const response = await UserModel.findOne({ email }).select("otp_secrete");


    return response;   
    
}
export const updateUserAccount = async (email: string) => {
    
    const response = await UserModel.findOneAndUpdate(
        { email: email },
        { is_active: true, is_verified: true },
        { new: true }
      );
  

    return response;   
    
}
export const findUserByIdAndUpdate = async (userId:string,secrete: string) => {
    
    const response =     await UserModel.findByIdAndUpdate(
        { _id: userId },
        { otp_secrete: secrete },
        { new: true }
      );

    return response;   
    
}
export const findUserByEmail = async (email: string) => {
    
    const response = await UserModel.findOne({ email });

    return response;   
    
}
export const findUserById = async (userId: mongooseType) => {
    
    const response = await UserModel.findOne({ _id:userId });

    return response;   
    
}

export const findUserProfile = async (userId: mongooseType) => {
    
    const response = await UserModel.findOne({ _id:userId }).select("-refresh_token -otp_secrete -createdAt -updatedAt -hashed_password",);

    return response;   
}
export const updateUserProfile = async (data:IUpdateProfile,userId: mongooseType) => {
    
    const response = await UserModel.findOneAndUpdate(
        { _id: userId },
        { $set: { ...data } },
        { new: true }
      );
    return response;   
    
}
    export const updateRefToken = async (data:IUpdateProfile,userId: string) => {
    
    const response = await UserModel.findOneAndUpdate(
        { _id: userId },
        { $set: { ...data } },
        { new: true }
      );
    return response;   
    
}
    