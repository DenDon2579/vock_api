"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
exports.default = (function (lastTestDate) {
    var todayDate = luxon_1.DateTime.fromISO(luxon_1.DateTime.now().toISODate());
    var delta = lastTestDate.diff(todayDate, 'days').toObject().days;
    if (delta !== undefined) {
        return Math.abs(delta);
    }
    return -1;
});
