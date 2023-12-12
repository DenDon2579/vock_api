import { Schema } from 'mongoose';

export default new Schema({
  progressType: {
    type: String,
    enum: ['success', 'fail', 'notChange'],
  },
  progressBefore: { type: Number, required: true },
  progressAfter: { type: Number },
});
