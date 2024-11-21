"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
//using middleware at router level
exports.router.use(middlewares_1.logger);
exports.router.get('/', middlewares_1.logger, (req, res) => {
    res.send({ messege: 'Hello World', timestamp: req.timestamp });
});
exports.router.get('/:content', (req, res) => {
    res.status(206).send(req.params.content);
});
