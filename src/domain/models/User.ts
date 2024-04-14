import { Schema, model } from 'mongoose';
import IUser from '../interfaces/modelInterfaces/userInterface';

const UserSchema: Schema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  password_confirmation: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = model<IUser>('User', UserSchema);

export default User;