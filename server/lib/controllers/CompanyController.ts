import * as express from "express";
import Controller from "../interfaces/controller.interface";
import companyModel from "../entity/companyModel";

class CompanyController implements Controller {
  public path = "/api/company";
  public router = express.Router();
  private company = companyModel;
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.post(`${this.path}`, this.createCompany);
    this.router.get(`${this.path}`, this.getAll);
  }
  private getAll = async (
    request: express.Request,
    response: express.Response
  ) => {
    this.company.find().then((company) => {
      response.send(company);
    });
  };
  private createCompany = async (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
  ) => {
    const companyData: Company = request.body;
    if (await this.company.findOne({ code: companyData.code })) {
      next(
        response.send({
          code: 409,
          message: "Company code already exist.",
        })
      );
    } else {
      const company = this.company.create({ ...companyData });
      response.send({
        code: 200,
        message: "Company created successfully.",
      });
    }
  };
}
export default CompanyController;
