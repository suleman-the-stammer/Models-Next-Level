

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase : true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase : true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Password is Required "],
         
        },
        fullName : {
            type: String, 
            required: true,
            trim: true
        },
        watchHistory : {
            type: Schema.Types.ObjectId,
            ref: 'Video'
        },
        refreshToken: {
            type: String,

        }
    },
    {
        timestamps: true
    }
)

export const User  = mongoose.model("User" , userSchema)

