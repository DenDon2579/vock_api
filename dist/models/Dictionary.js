"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dictionary = void 0;
var mongoose_1 = require("mongoose");
var Word_1 = require("./Word");
var dictionarySchema = new mongoose_1.Schema({
    words: { type: [Word_1.Word], required: true },
});
exports.Dictionary = (0, mongoose_1.model)('User', dictionarySchema);
