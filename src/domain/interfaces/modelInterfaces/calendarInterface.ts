import { Document } from "mongoose";

export default interface ISchedule extends Document {
    client_id: string;
    subcategory_id: string;
    dateAndTime: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }