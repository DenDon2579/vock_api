"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var Dictionary_1 = require("./Dictionary");
var userSchema = new mongoose_1.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true },
    dictionary: { type: Dictionary_1.Dictionary, required: true },
});
exports.User = (0, mongoose_1.model)('User', userSchema);
