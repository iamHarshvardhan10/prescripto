import express from 'express'
import { isAdmin } from '../middleware/verifyAccount.js';
import { getAllUserDetails, getUserById } from '../controllers/admin.controllers.js';
import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();


// ####################################
//               USER                 #
// ####################################


router.get('/getAllUser', verifyUser, isAdmin, getAllUserDetails)


// GET USER
router.get('/getuser/:userId', verifyUser, isAdmin, getUserById)











export default router;