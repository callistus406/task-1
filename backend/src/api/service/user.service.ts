import {
  findUserProfile,
  updateUserProfile,
} from "../../db/repository/user.repository";
import { mongooseType } from "../../@types/express";
import { IUpdateProfile } from "../../@types/types";
import { createCustomError } from "../../middlewares/customErrorHandler";

export const userProfileService = async (userId: mongooseType) => {
  const profile = await findUserProfile(userId);

  return profile;
};
export const updateProfileService = async (
  data: IUpdateProfile,
  userId: mongooseType
) => {
  const profile = await updateUserProfile(data, userId);

  if (!profile) throw createCustomError("Unable to update profile", 500);
  return "Profile updated!";
};
