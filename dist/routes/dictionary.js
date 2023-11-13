"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dictionaryRouter = (0, express_1.Router)();
dictionaryRouter
    .get('/', function (req, res) {
    res.send('dictionary root');
})
    .get('/words', function (req, res) {
    res.send('words');
});
exports.default = dictionaryRouter;
