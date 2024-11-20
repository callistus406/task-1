import mongoose from "mongoose";

export type UserRole = "INVESTOR"| "ADMIN";


export interface UserPoJo {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: number;
  hashed_password: string;
  is_verified: boolean;
  otp_secrete: string;
  notification_token: string;
  refresh_token: string[];
}

export interface UserDoc extends UserPoJo, mongoose.Document {}
export type UserModel = mongoose.Model<UserDoc>;
export type UserDocLean = mongoose.LeanDocument<UserDoc>;

const schema = new mongoose.Schema<UserPoJo>(
  {
    email: { type: String, required: true, unique: true },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,

      required: true,
    },

    phone: {
      type: String,

      required: true,
    },

    hashed_password: {
      type: String,
      required: true,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    role: {
      type: Number,
      enum: [1002, 4451],
      required: true,
    },
    otp_secrete: {
      type: String,
      required: false,
    },
    notification_token: {
      type: String,
    },

    refresh_token: [String],
  },
  { timestamps: true }
);

const model = mongoose.model<UserDoc, UserModel>("UserRecord", schema);

export default model;
