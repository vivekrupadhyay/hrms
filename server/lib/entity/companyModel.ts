import * as mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "ACTIVE",
    },
  },
  { timestamps: true }
);
const companyModel = mongoose.model<Company & mongoose.Document>(
  "Company",
  companySchema
);
export default companyModel;
