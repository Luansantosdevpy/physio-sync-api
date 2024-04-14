import { inject, injectable } from "tsyringe";
import jwt, { SignOptions } from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserLogin from "../../domain/interfaces/inputInterfaces/userLoginInterface";
import Logger from "../../infrastructure/log/logger";
import NotFoundError from "../exceptions/notFoundError";
import AuthRepositoryInterface from "../../domain/interfaces/repositories/authRepositoryInterface";
import IUser from "../../domain/interfaces/modelInterfaces/userInterface";
import BadRequestError from "../exceptions/badRequestError";
import User from "../../domain/models/User";

@injectable()
class AuthService {
    private secretKey = process.env.SECRET_KEY!;
    constructor (
        @inject('AuthRepositoryInterface')
        public readonly authRepository: AuthRepositoryInterface 
    ) {}
    async login(user: UserLogin): Promise<string> {
        Logger.debug('AuthService - login - find user by email');
        const userDb = await this.authRepository.getUserByEmail(user.email);

        if (!userDb) {
            throw new NotFoundError('Not found user with this email');
        }

        const verifyPassword = bcrypt.compare(userDb.password, user.password);

        if (!verifyPassword) {
            // change error type
            throw new Error('Passwords not match');
        }
        const options: SignOptions = {
            algorithm: 'HS512',
            expiresIn: '1h',
        };
        const token = jwt.sign({userId: userDb._id}, this.secretKey, options);

        return token;
    }

    async create(user: IUser): Promise<IUser> {
        Logger.debug('AuthService - create - verify if email exists');
        const userExists = await this.authRepository.getUserByEmail(user.email);

        if (userExists) {
            throw new BadRequestError('Email already exists');
        }

        const password_hashed = await bcrypt.hash(user.password!, 10);
        const password_conf_hashed = await bcrypt.hash(user.password_confirmation!, 10);

        const userCreate = new User({
            name: user.name,
            email: user.email,
            password: password_hashed,
            password_confirmation: password_conf_hashed
          });

        Logger.debug('AuthService - create - call authRepository.create');
        const userCreated = await this.authRepository.create(userCreate);

        return userCreated;
    }
}

export default AuthService;