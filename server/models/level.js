import mongoose from 'mongoose';

const levelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model('Level', levelSchema);
