import mongoose, { Schema } from 'mongoose';

const helloSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

export default mongoose.models.Hello || mongoose.model('Hello', helloSchema);
