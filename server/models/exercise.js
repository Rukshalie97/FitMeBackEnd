import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: String, required: true },
    video: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
    gender: { type: mongoose.Schema.Types.ObjectId, ref: 'Gender' },
    goal: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal' },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Exercise', exerciseSchema);
