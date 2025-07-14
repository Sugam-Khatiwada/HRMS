import express from 'express';
import { verifyToken, authorizationRoles } from '../middleware/verifytoken.js';
import { changePassword,registerUser,loginUser  } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/register',verifyToken,authorizationRoles("Admin"), registerUser);
router.post('/login', loginUser);
router.post('/change-password', verifyToken, changePassword);




export default router;
