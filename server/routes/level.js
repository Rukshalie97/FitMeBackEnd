import express from 'express';
import { levelRegister, getAllLevel } from '../controllers/levelController.js';
const router = express.Router();

router.post('/', levelRegister);
router.get('/', getAllLevel);

export default router;