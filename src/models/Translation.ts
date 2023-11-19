import { Schema, model } from 'mongoose';
export default new Schema({
  pos: { type: String, enum: ['noun', 'verb'], required: true },
  words: {
    type: [
      {
        popularity: { type: Number, required: true },
        text: { type: String, required: true },
      },
    ],
    required: true,
  },
});
