import { Schema, model } from 'mongoose'

export interface Address {
    line1: string,
    line2: string,
    city: string,
    postcode: string,
    state: string,
    country: string
}

export interface Customer {
    firstName: string,
    lastName: string,
    email: string,
    address: Address
}

const CustomerSchema = new Schema<Customer>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    address: new Schema<Address>({
        line1: { type: String, required: true },
        line2: { type: String, required: true },
        city: { type: String, required: true },
        postcode: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true }
    })
}, { timestamps: true })

export  const customerModel =  model<Customer>('customer', CustomerSchema)
export const  anonymizedCustomerModel = model<Customer>('customers_anonymized', CustomerSchema) // yikes