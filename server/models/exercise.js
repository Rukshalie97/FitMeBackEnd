import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    duration: { type: String, required: true },
    video: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    level: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Exercise', exerciseSchema);
