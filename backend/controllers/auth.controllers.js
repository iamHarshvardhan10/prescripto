import OTP from "../models/OTP.model.js";
import User from "../models/User.model.js";
import otpGenerator from 'otp-generator'
import bcrypt from 'bcrypt'


// SEND OTP
export const sendOtp = async (req, res) => {
    try {
        const { email } = req.body;

        const checkUserExist = await User.findOne({ email });

        if (checkUserExist) {
            return res.status(401).json({
                success: false,
                message: 'User Already registered'
            })
        }

        var otpViaEmail = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        })
        const result = await OTP.findOne({ otpViaEmail: otpViaEmail })
        console.log("Result is Generate OTP Func")
        console.log("OTP", otpViaEmail)
        console.log("Result", result)
        while (result) {
            otpViaEmail = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
            })
        }
        const otpPayload = { email, otpViaEmail }
        const otpBody = await OTP.create(otpPayload)
        console.log("OTP Body", otpBody)
        res.status(200).json({
            success: true,
            message: `OTP Sent Successfully`,
            otpViaEmail,
        })

    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}



// REGISTER

export const register = async (req, res) => {
    try {
        console.log('check 1')
        // DESTRUCTURE REQ FROM BODY
        const { firstName, lastName, email, password, confirmPassword, phone_number, otp, account_type } = req.body;

        console.log('check 2')
        // VALIDATE ALL FIELDS
        if (!firstName || !lastName || !email || !password || !confirmPassword || !phone_number || !otp || !account_type) {
            return res.status(404).json({
                message: 'All Fields Required',
                success: false
            })
        }
        console.log('check 3')
        // CHECK PASSWORD AND CONFIRMPASSWORD 
        if (password !== confirmPassword) {
            return res.status(404).json({
                message: 'Password and Confirm Password are should be same',
                success: false
            })
        }
        console.log('check 4')
        // CHECK EXISTING USER
        const checkExistUser = await User.findOne({ email })
        if (checkExistUser) {
            return res.status(404).json({
                message: 'Already Register with email! Please Login',
                success: false
            })
        }
        console.log('check 5')
        // CHECK RECENT OTP
        const recentOtp = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
        console.log('recent OTP ', recentOtp)
        console.log('check 6')

        if (recentOtp.length == 0 || otp != recentOtp[0].otpViaEmail) {
            return res.status(404).json({
                message: 'Invalid OTP',
                success: false
            })
        }
        console.log('check 7')
        // HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword)
        console.log('check 8')
        // CREATE USER
        const user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phone_number,
            account_type
        })
        console.log('check 9')

        return res.status(200).json({
            message: 'User Created Successfully',
            success: true,
            user
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false,
            error: error.message
        })
    }
}

// LOGIN

export const login = async (req, res) => {
    try {
        // DESTRCUTRE FROM REQ BODY
        // VALIDATE ALL FIELDS
        // CHECK USER 
        // DE HASH PASSWORD 
        // TOKEN GENERATE 
        // AND STORE IN USER 
        // COOKIE
    } catch (error) {
        return res.status(500).json({
            message: 'Internal Server Error',
            success: false
        })
    }
}