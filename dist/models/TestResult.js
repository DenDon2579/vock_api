"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    progressType: {
        type: String,
        enum: ['success', 'fail', 'notChange'],
        required: true,
    },
    progressBefore: { type: Number, required: true },
    progressAfter: { type: Number, required: true },
    endTime: { type: Date, required: true },
});
