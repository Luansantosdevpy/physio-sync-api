import { Request, Response } from "express";
import Logger from "../../infrastructure/log/logger";
import { validationResult } from "express-validator";
import { HttpStatusCode } from "axios";
import { inject, injectable } from "tsyringe";
import AuthService from "../../application/services/authService";
import NotFoundError from "../../application/exceptions/notFoundError";
import BadRequestError from "../../application/exceptions/badRequestError";

@injectable()
export default class AuthController {
    constructor(
        @inject(AuthService)
        public readonly authService: AuthService
    ){}

    public login = async(req: Request, res: Response): Promise<Response> => {
        try {
            Logger.debug('AuthController - login - call authService.login');

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res
                .status(HttpStatusCode.UnprocessableEntity)
                .send(errors.array());
            }

            Logger.debug('CategoryController - login - call authService.login');
            const user = await this.authService.login(req.body);
      
            return res.status(HttpStatusCode.Ok).json({ data: user });
        } catch (error) {
            if (error instanceof NotFoundError) {
                return res
                  .status(HttpStatusCode.NotFound)
                  .json({ error: error.message });
              }
              
            Logger.error(`RegistrationFormController - findAll - error: ${error}`);
            return res
              .status(HttpStatusCode.InternalServerError)
              .json({ error: 'Internal Server Error.' });
        }
    }

    public create = async(req: Request, res: Response): Promise<Response> => {
        try {
            Logger.debug('AuthController - create - call authService.create');

            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res
                .status(HttpStatusCode.UnprocessableEntity)
                .send(errors.array());
            }

            Logger.debug('CategoryController - create - call authService.create');
            const user = await this.authService.create(req.body);
      
            return res.status(HttpStatusCode.Ok).json({ data: user });
        } catch (error) {
            if (error instanceof BadRequestError) {
                return res
                  .status(HttpStatusCode.NotFound)
                  .json({ error: error.message });
              }
              
            Logger.error(`RegistrationFormController - findAll - error: ${error}`);
            return res
              .status(HttpStatusCode.InternalServerError)
              .json({ error: 'Internal Server Error.' });
        }
    }
}