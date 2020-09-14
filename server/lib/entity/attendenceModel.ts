import * as mongoose from "mongoose";
import Attendence from "../interfaces/attendence.interface";
import { Schema } from "mongoose";

const attendenceSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "userModel",
  },
  currentAddress: {
    type: String,
  },
  remark: {
    type: String,
  },
  userPic: {
    type: String,
  },
  iPAddress: {
    type: String,
  },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  ClockIn: {
    type: String,
  },
  ClockOut: {
    type: String,
  },
});
const attendenceModel = mongoose.model<Attendence & mongoose.Document>(
  "Attendence",
  attendenceSchema
);

export default attendenceModel;
