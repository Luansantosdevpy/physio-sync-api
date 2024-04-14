import mongoose, { Schema } from 'mongoose';
import IThoraxData from '../interfaces/modelInterfaces/thoraxDataInterface';

const thoraxDataSchema = new Schema<IThoraxData>({
  Format: { type: String, required: true },
  Tone: { type: String, required: true },
  VentilationType: { type: String, required: true },
  VentilationMethod: { type: String, required: true },
  AdditionalNotes: { type: String },
  MusclePattern: { type: String, required: true },
  RespiratoryRate: { type: String, required: true },
  AccessoryMuscles: { type: String, required: true },
  Abdomen: { type: String, required: true },
  AbdominalSigns: { type: String, required: true },
  AbdominalSymptoms: { type: String, required: true },
  Palpation: { type: String, required: true },
  ChestMobility: { type: String, required: true },
  ChestExpansion: { type: String, required: true },
}, { collection: 'thoraxData' });

const ThoraxData = mongoose.model<IThoraxData>('ThoraxData', thoraxDataSchema);

export default ThoraxData;