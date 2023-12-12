"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Translation_1 = __importDefault(require("./Translation"));
var TestResult_1 = __importDefault(require("./TestResult"));
exports.default = new mongoose_1.Schema({
    englishWord: { type: String, required: true },
    type: { type: String, required: true, default: 'notLearning' },
    translations: { type: [Translation_1.default], required: true },
    progress: { type: Number, required: true, default: 0 },
    lastResults: { type: [TestResult_1.default], required: true, default: [] },
});
