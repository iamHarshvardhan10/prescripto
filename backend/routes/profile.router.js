import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { isAdmin, isDoctor, isUser } from '../middleware/verifyAccount.js';
import { deleteDoctorAccount, deleteUserProfile, getUserDetails, updateDoctorProfile, updateUserImage, updateUserProfile } from '../controllers/profile.controllers.js';


const router = express.Router();

// ###################################
//      USER                         #
// ###################################
// UPDATE PROFILE
router.put('/update-user-profile', verifyUser, isUser, updateUserProfile)

// DELETE USER
router.delete('/deleteUser', verifyUser, isUser, deleteUserProfile)

// UPDATE IMAGE URL FOR USER AND DOCTOR ALSO
router.put('/updateImage', verifyUser, updateUserImage)

// GET USER DETAILS
router.get('/getUserDetails', verifyUser, isUser, getUserDetails)


// ################################
//   DOCTOR                       #
// ################################


// DOCTOR DELETE ACCOUNT 
router.delete('/deleteDoctor', verifyUser, isDoctor, deleteDoctorAccount)

// DOCTOR UPDATE ACCOUNT
router.put('/doctorUpdateProfile', verifyUser, isDoctor, updateDoctorProfile)

export default router;