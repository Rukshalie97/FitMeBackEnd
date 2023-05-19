import express from 'express';
import { goalRegister, getAllGoal } from '../controllers/goalController.js';
const router = express.Router();

router.post('/', goalRegister);
router.get('/', getAllGoal);

export default router;