import { Document } from "mongoose";

export default interface IPhysio extends Document {
    name: string;
    email: string;
    profession: string;
    password: string;
    phone_number: string;
    createdAt: string;
    updatedAt: string;
}