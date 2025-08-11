import OTP from "../models/OTP.model.js";
import User from "../models/User.model.js";
import otpGenerator from 'otp-generator'


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