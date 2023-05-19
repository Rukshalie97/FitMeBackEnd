import Exercise from '../models/exercise.js';
import bcrypt from 'bcrypt';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const exerciseRegister = async (req, res) => {
  const exercise = req.body;
  const newExercise = new Exercise(exercise);
  try {
    await newExercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};


export const getByCategoryId = async (req, res, next) => {
  try {
    const category = await Exercise.find({category:req.params.id})
    .populate('category');
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
