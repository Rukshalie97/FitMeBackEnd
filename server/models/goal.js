import mongoose from 'mongoose';

const goalSchema = new mongoose.Schema(
  {
    goal_category: { type: String, required: true },
    
    
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Goal', goalSchema);
