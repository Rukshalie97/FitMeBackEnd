import express from 'express';
import { exerciseRegister, getByCategoryId } from '../controllers/exerciseController.js';
const router = express.Router();

router.post('/', exerciseRegister);
router.get('/:id', getByCategoryId);

export default router;