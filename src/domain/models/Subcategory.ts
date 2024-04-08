import mongoose, { Schema } from 'mongoose';
import ISubcategory from '../interfaces/modelInterfaces/subcategoryInterface';

const categorySchema = new Schema(
  {
    subcategory_name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  },
  { collection: 'subcategories' }
);

const Subcategory = mongoose.model<ISubcategory>('Subcategory', categorySchema);

export default Subcategory;
