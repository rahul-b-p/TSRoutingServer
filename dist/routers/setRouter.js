"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/', (req, res) => {
    throw new Error('Application Error'); //error handler
    res.send('hi');
});
exports.router.get('/time', (req, res) => {
    res.send({ timestamp: req.timestamp });
});
