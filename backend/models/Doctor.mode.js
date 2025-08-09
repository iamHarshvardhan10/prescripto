import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    specialization: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true
    },
    experience: {
        type: String,
    },
    availability: [
        {
            day: String,
            from: String,
            to: String
        }
    ],
    available: {
        type: Boolean,
        required: true
    }
})