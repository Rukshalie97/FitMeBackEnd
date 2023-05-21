import express from 'express';
import { exerciseRegister, getByCategoryId, getAllExercise } from '../controllers/exerciseController.js';
const router = express.Router();

router.post('/', exerciseRegister);
router.get('/:id', getByCategoryId);
router.get('/', getAllExercise);


export default router;