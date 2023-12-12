import { Schema, model } from 'mongoose';

export default new Schema({
  progressType: {
    type: String,
    enum: ['success', 'fail', 'notChange'],
    required: true,
  },
  progressBefore: { type: Number, required: true },
  progressAfter: { type: Number, required: true },
  endTime: { type: Date, required: true },
});
