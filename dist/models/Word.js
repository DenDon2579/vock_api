"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Word = void 0;
var mongoose_1 = require("mongoose");
// const wordSchema = new Schema({
//   englishWord: { type: String, required: true },
//   type: { type: String, required: true, default: 'notLearning' },
//   translations: { type: [Translation], required: true },
//   progress: { type: Number, required: true, default: 0 },
//   //TODO:
//   lastResults: { type: Number },
// });
var wordSchema = new mongoose_1.Schema({
    englishWord: { type: String, required: true },
    translation: { type: String, required: true },
    progress: { type: Number, required: true, default: 0 },
});
exports.Word = (0, mongoose_1.model)('Word', wordSchema);
