import { Document } from "mongoose";

export default interface ICardiorespiratoryRecord extends Document {
    SBP: number;
    HR: number;
    RR: number;
    SpO2: number;
    Weight: number;
    BMI: number;
    WaistToHipRatio: number;
    O2Saturation: number;
    Height: number;
    Hydration: string;
    Cyanosis: string;
    PeripheralPerfusion: string;
    Jaundice: string;
    Airway: string;
    RespiratoryPattern: string;
    RespiratoryDepth: string;
    InspirationExpirationRatio: number;
  }