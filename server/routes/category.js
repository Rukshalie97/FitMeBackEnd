import express from 'express';
import { categoryRegister, getAllCategory } from '../controllers/categoryController.js';
const router = express.Router();

router.post('/', categoryRegister);
router.get('/', getAllCategory);

export default router;