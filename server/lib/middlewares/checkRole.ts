import { Request, Response, NextFunction } from "express";
import userModel from "../entity/userModel";
import User from "../interfaces/user.interface";

export const checkRole = (roles: string[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    let user: User;
    try {
      const id = res.locals.jwtPayload._id;
      const userRepository = await userModel.findOne(id);

      if (roles.indexOf(userRepository.role) === 0) next();
      else res.status(401).send({ auth: false, message: "No token provided." });
    } catch (e) {
      res.status(401).send(e);
    }
  };
};
