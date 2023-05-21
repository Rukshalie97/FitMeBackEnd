import mongoose from 'mongoose';

const genderSchema = new mongoose.Schema(
  {
    gender_category: { type: String, required: true },
    icon: { type: String, required: true },
    
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Gender', genderSchema);
