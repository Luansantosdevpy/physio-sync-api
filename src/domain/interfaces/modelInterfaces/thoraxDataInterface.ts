import { Document } from "mongoose";

export default interface IThoraxData extends Document {
    Format: string;
    Tone: string;
    VentilationType: string;
    VentilationMethod: string;
    AdditionalNotes: string;
    MusclePattern: string;
    RespiratoryRate: string;
    AccessoryMuscles: string;
    Abdomen: string;
    AbdominalSigns: string;
    AbdominalSymptoms: string;
    Palpation: string;
    ChestMobility: string;
    ChestExpansion: string;
  }