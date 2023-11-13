import { Schema, model } from 'mongoose';
const translationSchema = new Schema({
  translation: { type: String, required: true },
  type: { type: String, enum: ['noun', 'verb'], required: true },
});

export const Translation = model('User', translationSchema);
