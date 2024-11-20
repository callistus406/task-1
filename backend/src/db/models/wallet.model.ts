import mongoose, { Schema, Document, Model } from "mongoose";

export interface WalletPoJo {
  user: mongoose.Types.ObjectId; 
  balance: number; 
  transactions: mongoose.Types.ObjectId[]; 
}

export interface WalletDoc extends WalletPoJo, Document {}
export type WalletModel = Model<WalletDoc>;
export type WalletDocLean = mongoose.LeanDocument<WalletDoc>;

const WalletSchema = new Schema<WalletPoJo>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true }, 
    balance: { type: Number, default: 0 }, 
    transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }], 
  },
  { timestamps: true }
);

// Create the Wallet model
const Wallet = mongoose.model<WalletDoc, WalletModel>("Wallet", WalletSchema);

export default Wallet;
