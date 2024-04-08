import { Document } from "mongoose";

export default interface ISubcategory extends Document {
    subcategory_name: string;
    category: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  }