import { Document } from "mongoose";

export default interface IRespiratoryData extends Document {
    RespiratoryRate: string;
    Cough: string;
    SecretionAppearance: string;
    LungAuscultation: string;
    Notes: string;
  }