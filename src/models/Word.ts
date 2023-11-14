import { Schema, model } from 'mongoose';
import { Translation } from './Translation';
// const wordSchema = new Schema({
//   englishWord: { type: String, required: true },
//   type: { type: String, required: true, default: 'notLearning' },
//   translations: { type: [Translation], required: true },
//   progress: { type: Number, required: true, default: 0 },
//   //TODO:
//   lastResults: { type: Number },
// });

const wordSchema = new Schema({
  englishWord: { type: String, required: true },
  translation: { type: String, required: true },
  progress: { type: Number, required: true, default: 0 },
});

export const Word = model('Word', wordSchema);
