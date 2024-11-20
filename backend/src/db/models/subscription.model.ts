import mongoose from "mongoose";
export interface SubscriptionPoJo {
  user: mongoose.Types.ObjectId; 
  plan: mongoose.Types.ObjectId; 
  amount: number;
  startDate: Date;
  endDate: Date;
}

export interface SubscriptionDoc extends SubscriptionPoJo, Document {}
export type SubscriptionModel = mongoose.Model<SubscriptionDoc>;
export type SubscriptionDocLean = mongoose.LeanDocument<SubscriptionDoc>;

const SubscriptionSchema = new mongoose.Schema<SubscriptionPoJo>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "UserRecord", required: true },
    plan: { type: mongoose.Schema.Types.ObjectId, ref: "InvestmentPlan", required: true },
    amount: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Subscription = mongoose.model<SubscriptionDoc, SubscriptionModel>("Subscription", SubscriptionSchema);

export default Subscription;
