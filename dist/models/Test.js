"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var WordInTest_1 = __importDefault(require("./WordInTest"));
exports.default = new mongoose_1.Schema({
    words: { type: [WordInTest_1.default], required: true },
    inFinished: { type: Boolean, required: true, default: false },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
});
