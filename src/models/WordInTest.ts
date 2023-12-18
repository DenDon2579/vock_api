import { Schema } from 'mongoose';

export default new Schema({
  isAnswered: { type: Boolean, required: true, default: false },
  progressType: {
    type: String,
    enum: ['success', 'fail', 'notChange'],
  },
  progressBefore: { type: Number, required: true },
  progressAfter: { type: Number },
});
