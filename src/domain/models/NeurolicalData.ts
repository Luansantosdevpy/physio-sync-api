import mongoose, { Schema } from 'mongoose';
import INeurologicalData from '../interfaces/modelInterfaces/neurologicalDataInterface';

const neurologicalDataSchema = new Schema<INeurologicalData>({
  InspectionStatic: { type: String, required: true },
  InspectionDynamic: { type: String, required: true },
  AdM: { type: String, required: true },
  Tone: { type: String, required: true },
  Force: { type: String, required: true },
  Palpation: { type: String, required: true },
  Sensitivity: { type: String, required: true },
  Balance: { type: String, required: true },
  Coordination: { type: String, required: true },
  Gait: { type: String, required: true },
}, { collection: 'neurologicalData' });

const NeurologicalData = mongoose.model<INeurologicalData>('NeurologicalData', neurologicalDataSchema);

export default NeurologicalData;