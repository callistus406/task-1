import mongoose, { Schema, Document, Model } from "mongoose";

export interface InvestmentPlanPoJo {
  name: string;
  description?: string;
  minimumAmount: number;
  interestRate: number;
  durationInMonths: number;
  createdBy: mongoose.Types.ObjectId; 
}

export interface InvestmentPlanDoc extends InvestmentPlanPoJo, Document {}
export type InvestmentPlanModel = Model<InvestmentPlanDoc>;
export type InvestmentPlanDocLean = mongoose.LeanDocument<InvestmentPlanDoc>;

const InvestmentPlanSchema = new Schema<InvestmentPlanPoJo>(
  {
    name: { type: String, required: true },
    description: { type: String },
    minimumAmount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    durationInMonths: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
  },
  { timestamps: true }
);


const InvestmentPlan = mongoose.model<InvestmentPlanDoc, InvestmentPlanModel>(
  "InvestmentPlan",
  InvestmentPlanSchema
);

export default InvestmentPlan;
