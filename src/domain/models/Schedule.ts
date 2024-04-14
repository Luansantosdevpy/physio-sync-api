import mongoose, { Schema } from 'mongoose';
import ISchedule from '../interfaces/modelInterfaces/scheduleInterface';

const scheduleSchema = new Schema(
  {
    date: { type: String, required: true },
    hour: { type: String, required: true },
    patient: { type: String, required: true },
    physiotherapist: { type: String },
    subcategory: { type: String, required: true },
    additionalObservations: { type: String },
    scheduleStatus: { type: Boolean },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: 'schedules' }
);

const Schedule = mongoose.model<ISchedule>('Schedule', scheduleSchema);

export default Schedule;