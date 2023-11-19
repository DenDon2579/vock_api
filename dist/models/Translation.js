"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
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
