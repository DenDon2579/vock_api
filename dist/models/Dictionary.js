"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Word_1 = __importDefault(require("./Word"));
exports.default = new mongoose_1.Schema({
    words: { type: [Word_1.default], required: true },
});
