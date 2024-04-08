import { Schema, model } from 'mongoose';
import IClient from '../interfaces/modelInterfaces/clientInterface';

const ClientSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: true },
  education: { type: String },
  marital_status: { type: String },
  profession: { type: String },
  emergency_contact: { type: String },
  sex: { type: String },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  address: { type: String, required: true },
  postal_code: { type: String, required: true },
  address_number: { type: Number, required: true },
  complement: { type: String },
  province: { type: String, required: true },
  city: { type: String, required: true },
  uf: { type: String, required: true },
  children: { type: Number },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Client = model<IClient>('Client', ClientSchema);

export default Client;