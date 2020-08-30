import * as express from "express";
import Controller from "../interfaces/controller.interface";
import attendenceModel from "../entity/attendenceModel";
import Attendence from "../interfaces/attendence.interface";

class AttendenceController implements Controller {
  public path = "/api/attenedence";
  public router = express.Router();
  private attendence = attendenceModel;
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}/clockin`, this.clockIn);
    this.router.post(`${this.path}/clockout`, this.clockOut);
  }
  private clockIn = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const clockInData: Attendence = request.body;
    const clockin = await this.attendence.create({ ...clockInData });
    const savedAttendence = await clockin.save();
    response.send({
      status: 200,
      message: "Your clock-in successful.",
      savedAttendence,
    });
  };
  private clockOut = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const clockOutData: Attendence = request.body;
    const clockout = await this.attendence.create({ ...clockOutData });
    const savedAttendence = await clockout.save();
    response.send({
      status: 200,
      message: "Your clock-out successful.",
      savedAttendence,
    });
  };
}
export default AttendenceController;
