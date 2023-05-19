import express from 'express';
import { genderRegister, getAllGender } from '../controllers/genderController.js';
const router = express.Router();

router.post('/', genderRegister);
router.get('/', getAllGender);

export default router;