import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { isUser } from '../middleware/verifyAccount.js';
import { deleteUserProfile, updateUserImage, updateUserProfile } from '../controllers/profile.controllers.js';


const router = express.Router();

// UPDATE PROFILE
router.put('/update-user-profile', verifyUser, isUser, updateUserProfile)

// DELETE USER
router.delete('/deleteUser', verifyUser, isUser, deleteUserProfile)

// UPDATE IMAGE URL
router.put('/updateImage', verifyUser, isUser, updateUserImage)


export default router;