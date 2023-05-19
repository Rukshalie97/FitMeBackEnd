import Gender from '../models/gender.js';
import bcrypt from 'bcrypt';
import { createError } from './../utils/error.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const genderRegister = async (req, res) => {
  const genderData = req.body;
  const newGender = new Gender(genderData);
  try {
    await newGender.save();
    res.status(201).json(newGender);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getAllGender= async (req, res, next) => {
  try {
    const gender = await Gender.find();
    res.status(200).json(gender);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};