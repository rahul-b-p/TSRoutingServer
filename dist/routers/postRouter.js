"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
exports.router = (0, express_1.Router)();
exports.router.post('/calculator', middlewares_1.validCalculatorRequest, (req, res) => {
    const { val1, val2, operator } = req.body;
    let result;
    switch (operator) {
        case '+':
            result = val1 + val2;
            break;
        case "-":
            result = val1 - val2;
            break;
        case "*":
            result = val1 * val2;
            break;
        case "/":
            result = val1 / val2;
            break;
        default:
            result = 'Invalid Operator';
            break;
    }
    res.status(200).send({ result });
    console.log(req.body);
});
