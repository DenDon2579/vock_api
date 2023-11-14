"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Translation = void 0;
var mongoose_1 = require("mongoose");
var translationSchema = new mongoose_1.Schema({
    translation: { type: String, required: true },
    type: { type: String, enum: ['noun', 'verb'], required: true },
});
exports.Translation = (0, mongoose_1.model)('User', translationSchema);
