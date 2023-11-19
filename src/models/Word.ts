import { Schema, model } from 'mongoose';
import Translation from './Translation';

export default new Schema({
  englishWord: { type: String, required: true },
  type: { type: String, required: true, default: 'notLearning' },
  translations: { type: [Translation], required: true },
  progress: { type: Number, required: true, default: 0 },
  // lastResults: { type: Number },
});
