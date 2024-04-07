import mongoose, { Document } from 'mongoose';

export default interface IClient extends Document {
    name: string
    age: number
    email: string
    phone_number: string
    education: string
    marital_status: string
    profession: string
    emergency_contact: string
    sex: string
    height: number
    weight: number
    address: string
    postal_code: string
    address_number: number
    complement: string
    province: string
    city: string
    uf: string
    children: number
    createdAt: Date
    updatedAt: Date
  }