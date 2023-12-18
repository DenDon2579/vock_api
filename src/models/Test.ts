import { Schema } from 'mongoose';
import WordInTest from './WordInTest';

export default new Schema({
  words: { type: [WordInTest], required: true },
  stage: {type: Number, reqired: true},
  isFinished: { type: Boolean, required: true, default: false },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
});
