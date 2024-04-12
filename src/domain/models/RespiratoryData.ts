import mongoose, { Schema } from 'mongoose';
import IRespiratoryData from '../interfaces/modelInterfaces/respiratoryDataInterface';

const respiratoryDataSchema = new Schema<IRespiratoryData>({
  RespiratoryRate: { type: String, required: true },
  Cough: { type: String, required: true },
  SecretionAppearance: { type: String, required: true },
  LungAuscultation: { type: String, required: true },
  Notes: { type: String },
}, { collection: 'respiratoryData' });

const RespiratoryData = mongoose.model<IRespiratoryData>('RespiratoryData', respiratoryDataSchema);

export default RespiratoryData;