import Category from '../models/category.js';
//import bcrypt from 'bcrypt';
//import { createError } from './../utils/error.js';
//import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const categoryRegister = async (req, res) => {
  const categoryData = req.body;
  const newCategory = new Category(categoryData);
  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getAllCategory = async (req, res, next) => {
  try {
    const category = await Category.find();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};