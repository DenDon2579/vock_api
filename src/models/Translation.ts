import { Schema, model } from 'mongoose';
export default new Schema({
  pos: { type: String, required: true },
  text: { type: String, required: true },
  popularity: { type: Number, required: true },
});
