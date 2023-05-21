import Goal from '../models/goal.js';
//import bcrypt from 'bcrypt';
//import { createError } from './../utils/error.js';
//import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const goalRegister = async (req, res) => {
  const goalData = req.body;
  const newGoal = new Goal(goalData);
  try {
    await newGoal.save();
    res.status(201).json(newGoal);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getAllGoal= async (req, res, next) => {
  try {
    const goal = await Goal.find();
    res.status(200).json(goal);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};