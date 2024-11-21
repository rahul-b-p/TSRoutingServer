"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimestamp = void 0;
const addTimestamp = (req, res, next) => {
    req.timestamp = Date.now();
    next();
};
exports.addTimestamp = addTimestamp;
