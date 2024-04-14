import IUser from '../modelInterfaces/userInterface';

export default interface AuthRepositoryInterface {
  create(user: IUser): Promise<IUser>;
  getUserByEmail(email: string): Promise<IUser | null>;
}
