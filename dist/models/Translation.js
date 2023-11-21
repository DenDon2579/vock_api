"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
    pos: { type: String, required: true },
    text: { type: String, required: true },
    popularity: { type: Number, required: true },
});
