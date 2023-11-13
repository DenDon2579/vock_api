"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    userName: String,
    age: Number,
    sex: String,
});
exports.User = (0, mongoose_1.model)('User', userSchema);
