import PersonalWorkout from '../models/personalWorkout.js';

export const personalWorkoutRegister = async (req, res) => {
  const personalWorkoutData = req.body;
  const newPersonalWorkout = new PersonalWorkout(personalWorkoutData);
  try {
    await newPersonalWorkout.save();
    res.status(201).json(newPersonalWorkout);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getAllPersonalWorkout = async (req, res, next) => {
  try {
    const personalWorkouts = await PersonalWorkout.find();
    res.status(200).json(personalWorkouts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
