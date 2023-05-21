import mongoose from 'mongoose';

const personalWorkoutSchema = new mongoose.Schema(
  {
    
    exercise: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
    
    
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('personalWorkout', personalWorkoutSchema);
