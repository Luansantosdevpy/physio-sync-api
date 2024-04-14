import { injectable } from 'tsyringe';
import Logger from '../../log/logger';
import AuthRepositoryInterface from '../../../domain/interfaces/repositories/authRepositoryInterface';
import IUser from '../../../domain/interfaces/modelInterfaces/userInterface';
import User from '../../../domain/models/User';

@injectable()
export default class AuthRepository implements AuthRepositoryInterface {
  public create = async (newUser: Partial<IUser>): Promise<IUser> => {
    Logger.debug(
      `AuthRepository - create - execute [newUser: ${newUser}]`
    );
    const user = await User.create({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      password_confirmation: newUser.password_confirmation,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return user;
  };

  public getUserByEmail = async (email: string): Promise<IUser | null> => {
    Logger.debug(`AuthRepository - findByName - name: ${email}`);
    return await User.findOne({ email: email });
  };
}
