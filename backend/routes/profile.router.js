import express from 'express'
import { verifyUser } from '../middleware/verifyUser.js';
import { isUser } from '../middleware/verifyAccount.js';
import { updateUserProfile } from '../controllers/profile.controllers.js';


const router = express.Router();


router.put('/update-user-profile' , verifyUser , isUser , updateUserProfile)







export default router;