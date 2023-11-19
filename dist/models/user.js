"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var Dictionary_1 = __importDefault(require("./Dictionary"));
var userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    dictionary: { type: Dictionary_1.default, required: true },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
// englishWord: { type: String, required: true },
//   type: { type: String, required: true, default: 'notLearning' },
//   translations: { type: [Translation], required: true },
//   progress: { type: Number, required: true, default: 0 },
