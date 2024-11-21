"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log({ 'url': req.url, 'method': req.method, 'params': req.params, 'timestamp': req.timestamp });
    next();
};
exports.logger = logger;
