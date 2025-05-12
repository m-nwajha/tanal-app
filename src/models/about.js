import mongoose, { Schema } from 'mongoose';

const aboutSchema = new Schema(
  {
    PageDescription: { type: String, required: true },
    betweenLines: {
      description: { type: String, required: true },
      images: {
        img1: { type: String, required: true },
        img2: { type: String, required: true },
        img3: { type: String, required: true }
      },
      whyTanal: [
        {
          id: { type: Number, required: true },
          title: { type: String, required: true },
          description: { type: String, required: true },
          iconName: { type: String, required: true }
        }
      ]
    }
  },
  { timestamps: true }
);

export default mongoose.models.About || mongoose.model('About', aboutSchema);
