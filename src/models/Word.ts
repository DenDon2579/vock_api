import { Schema, model } from 'mongoose';
import Translation from './Translation';
import TestResult from './TestResult';

export default new Schema({
  englishWord: { type: String, required: true },
  type: { type: String, required: true, default: 'notLearning' },
  translations: { type: [Translation], required: true },
  progress: { type: Number, required: true, default: 0 },
  lastResults: { type: [TestResult], required: true, default: [] },
  lastTestTime: { type: Date, required: true },
});
