import { Schema, model } from 'mongoose';
import { Word } from './Word';
const dictionarySchema = new Schema({
  words: { type: [Word], required: true },
});

export const Dictionary = model('User', dictionarySchema);
