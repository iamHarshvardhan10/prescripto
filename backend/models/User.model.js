import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: false,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
    },
    address: {
        type: String,
    },
    account_type: {
        type: String,
        enum: ['User', 'Doctor', 'Admin'],
        required: true
    },
    gender: {
        type: String
    },
    dob: {
        type: String,

    },
    about: {
        type: String,
    }
}, { timestamps: true })


const User = mongoose.model('User', userSchema);

export default User;