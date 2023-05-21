import Level from '../models/level.js';
//import bcrypt from 'bcrypt';
//import { createError } from './../utils/error.js';
//import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const levelRegister = async (req, res) => {
  const levelData = req.body;
  const newLevel = new Level(levelData);
  try {
    await newLevel.save();
    res.status(201).json(newLevel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getAllLevel= async (req, res, next) => {
  try {
    const level = await Level.find();
    res.status(200).json(level);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};