"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var learningRouter = (0, express_1.Router)();
learningRouter
    .get('/buildTest', function (req, res) {
    res.send('build test');
})
    .get('/startTest', function (req, res) {
    res.send('start test');
})
    .post('/saveAnswer', function (req, res) {
    res.send('save answer');
})
    .post('/finishTest', function (req, res) {
    res.send('finish test');
});
exports.default = learningRouter;
