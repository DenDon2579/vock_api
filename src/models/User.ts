import { Schema, model } from 'mongoose';
import { Dictionary } from './Dictionary';
const userSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  dictionary: { type: Dictionary, required: true },
});

export const User = model('User', userSchema);
