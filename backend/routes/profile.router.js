import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { isUser } from '../middleware/verifyAccount.js';
import { deleteUserProfile, updateUserProfile } from '../controllers/profile.controllers.js';


const router = express.Router();


router.put('/update-user-profile', verifyUser, isUser, updateUserProfile)



router.delete('/deleteUser', verifyUser, isUser, deleteUserProfile)



export default router;