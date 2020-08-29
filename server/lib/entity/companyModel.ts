import * as mongoose from "mongoose";
const Schema = mongoose.Schema;

const schema = new Schema(
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

module.exports = mongoose.model("Company", schema);
