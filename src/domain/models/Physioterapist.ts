import { Schema, model } from 'mongoose';
import IPhysio from '../interfaces/modelInterfaces/physioterapistInterface';

const PhysioSchema: Schema = new Schema({
  name: { type: String, required: true },
  profession: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Physio = model<IPhysio>('physio', PhysioSchema);

export default Physio;