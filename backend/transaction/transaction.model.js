import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "entertainment",
        "food",
        "health and fitness",
        "bills and utilities",
        "grocery",
        "feul",
        "rent",
        "other",
      ],
    },
    type: {
      type: String,
      required: true,
      enum: ["income", "expenses"],
    },
    description: {
      type: String,
      trim: true,
      minlength: 10,
      maxlength: 1000,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TransactionTable = mongoose.model("Transaction", transactionSchema);

export default TransactionTable;
