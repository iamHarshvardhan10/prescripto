import mongoose from "mongoose";
import mailSender from "../utils/mailSender.js";
import otpTemplate from "../mail/templates/emailVerificationTemplates.js";


const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otpViaEmail: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5 * 60
    }
})


const sendVerificationEmail = async (email, otpViaEmail) => {
    try {
        const mailResponse = await mailSender(email, "OTP Verification Email", otpTemplate(otpViaEmail))
        console.log(mailResponse.response)
    } catch (error) {
        console.log(error.message)
        throw error;
    }
}



// PRE HOOK
otpSchema.pre("save", async function (next) {
    console.log('New Document Saved To database')
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otpViaEmail)
    }
})

const OTP = mongoose.model('OTP', otpSchema);
export default OTP;