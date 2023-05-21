import express from 'express';
import { personalWorkoutRegister, getAllPersonalWorkout } from '../controllers/personalWorkoutController.js';

const router = express.Router();

router.post('/', personalWorkoutRegister);
router.get('/', getAllPersonalWorkout);

export default router;
