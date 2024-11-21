"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(err.messege);
};
exports.errorHandler = errorHandler;
