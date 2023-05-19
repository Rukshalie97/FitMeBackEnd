import express from 'express';
import { userRegister, getProfileData } from '../controllers/userController.js';
const router = express.Router();

router.post('/', userRegister);
router.get('/:id', getProfileData);

export default router;