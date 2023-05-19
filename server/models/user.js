import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  { name:{ type: String},
    gender: { type: String, required: true },
    goal: { type: String, required: true,},
    birthday: { type: String, required: true },
    height: { type: String },
    weight: { type: String, required: true },
    goal_weight: { type: String, required: true },
    level: { type: String},
    interest: { type: String},
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('User', userSchema);
