import mongoose, { Schema } from 'mongoose';
import IScheduling from '../interfaces/modelInterfaces/calendarInterface';

const schedulingSchema = new Schema(
  {
    client_id: { type: String, required: true },
    subcategory_id: { type: String, required: true },
    dateAndTime: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: 'scheduling' }
);

const Scheduling = mongoose.model<IScheduling>('Scheduling', schedulingSchema);

export default Scheduling;
