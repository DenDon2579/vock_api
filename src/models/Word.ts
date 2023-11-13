import { Schema, model } from 'mongoose';
import { Translation } from './Translation';
const wordSchema = new Schema({
  englishWord: { type: String, required: true },
  type: { type: String, required: true, default: 'notLearning' },
  translations: { type: [Translation], required: true },
  progress: { type: Number, required: true, default: 0 },
  //TODO:
  lastResults: { type: Number },
});

export const Word = model('User', wordSchema);
