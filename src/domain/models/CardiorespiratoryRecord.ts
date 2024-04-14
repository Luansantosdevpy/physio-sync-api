import mongoose, { Schema } from 'mongoose';
import ICardiorespiratoryRecord from "../interfaces/modelInterfaces/cardioresporatoryRecordInterface";

const medicalDataSchema = new Schema<ICardiorespiratoryRecord>({
    SBP: { type: Number, required: true },
    HR: { type: Number, required: true },
    RR: { type: Number, required: true },
    SpO2: { type: Number, required: true },
    Weight: { type: Number, required: true },
    BMI: { type: Number, required: true },
    WaistToHipRatio: { type: Number, required: true },
    O2Saturation: { type: Number, required: true },
    Height: { type: Number, required: true },
    Hydration: { type: String, required: true },
    Cyanosis: { type: String, required: true },
    PeripheralPerfusion: { type: String, required: true },
    Jaundice: { type: String, required: true },
    Airway: { type: String, required: true },
    RespiratoryPattern: { type: String, required: true },
    RespiratoryDepth: { type: String, required: true },
    InspirationExpirationRatio: { type: Number, required: true },
  }, { collection: 'cardiorespiratoryInterface' });
  
  const CardiorespiratoryRecord = mongoose.model<ICardiorespiratoryRecord>('CardiorespiratoryInterface', medicalDataSchema);
  
  export default CardiorespiratoryRecord;