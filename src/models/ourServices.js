import mongoose, { Schema } from 'mongoose';

const serviceItemSchema = new Schema(
  {
    id: { type: Number, required: true },
    img: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
  },
  { _id: false }
);

const ourServicesSchema = new Schema(
  {
    OUR_SERVICES: [serviceItemSchema]
  },
  { timestamps: true }
);

export default mongoose.models.OurServices ||
  mongoose.model('OurServices', ourServicesSchema);
