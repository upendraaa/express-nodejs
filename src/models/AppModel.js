import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Creating schema and setting default date value
 */
export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    phone:{
        type: Number
    },
    createdDate:{
        type:Date,
        default:Date.now
    }
})