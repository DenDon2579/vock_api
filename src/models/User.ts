import { Schema, model, ObjectId } from 'mongoose';
import Dictionary from './Dictionary';

const userSchema = new Schema({
  uid: String,
  userName: { type: String, required: true },
  email: { type: String, required: true },
  dictionary: { type: Dictionary, required: true },
});

export const User = model('User', userSchema);

//   englishWord: { type: String, required: true },
//   type: { type: String, required: true, default: 'notLearning' },
//   translations: { type: [Translation], required: true },
//   progress: { type: Number, required: true, default: 0 },
