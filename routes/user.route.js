import express from 'express';
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from '../controller/user.controller.js';

const router = express.Router();

router.post('/user', createUser);
router.get('/users',getAllUser);
router.get('/user/:id', getUserById);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;