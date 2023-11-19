import { Schema, model } from 'mongoose';
import Word from './Word';

export default new Schema({
  words: { type: [Word], required: true },
});
