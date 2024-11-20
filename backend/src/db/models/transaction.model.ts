import mongoose, { Schema, Document, Model } from "mongoose";

export interface TransactionPoJo {
  wallet: mongoose.Types.ObjectId; 
  user: mongoose.Types.ObjectId;
  amount: number; 
  type: "DEPOSIT" |"WITHDRAWAL"; 
  status: "PENDING" | "APPROVED"| "REJECTED"; 
  admin?: mongoose.Types.ObjectId; 
}

export interface TransactionDoc extends TransactionPoJo, Document {}
export type TransactionModel = Model<TransactionDoc>;
export type TransactionDocLean = mongoose.LeanDocument<TransactionDoc>;

const TransactionSchema = new Schema<TransactionPoJo>(
  {
    wallet: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet", required: true }, 
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    amount: { type: Number, required: true }, 
    type: { type: String, enum: ["DEPOSIT", "WITHDRAWAL"], required: true }, 
    status: { type: String, enum: ["PENDING", "APPROVED", "REJECTED"], default: "PENDING" }, 
    admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  },
  { timestamps: true }
);

const Transaction = mongoose.model<TransactionDoc, TransactionModel>("Transaction", TransactionSchema);

export default Transaction;
