import express from 'express';
import { login, register, sendOtp } from '../controllers/auth.controllers.js';
import { verifyUser } from '../middleware/verifyUser.js';


const router = express.Router();

// TEST ROUTE
router.post('/get-test', (req, res) => {
    try {
        const { text } = req.body;
        console.log('HELLO THIS JUST TESTING ROUTE')

        return res.status(200).json({
            message: 'Get Success',
            success: true,
            text
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error',
            success: false
        })
    }
})

// SEND OTP
router.post('/send-otp', sendOtp)

// REGISTER
router.post('/register', register)


// LOGIN
router.post('/login', login)


// VERIFY USER 
// router.get('/verifyuser', verifyUser, (req, res) => {
//     const user = { "name": "harsh", "age": "23" }

//     return res.status(200).json({
//         message: "Success",
//         user,
//         success: true
//     })
// })

export default router;