import { Document } from "mongoose";

export default interface INeurologicalData extends Document {
    InspectionStatic: string;
    InspectionDynamic: string;
    AdM: string;
    Tone: string;
    Force: string;
    Palpation: string;
    Sensitivity: string;
    Balance: string;
    Coordination: string;
    Gait: string;
  }