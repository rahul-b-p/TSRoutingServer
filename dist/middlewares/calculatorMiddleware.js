"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validCalculatorRequest = void 0;
const validCalculatorRequest = (req, res, next) => {
    const { val1, val2, operator } = req.body;
    if (typeof val1 != "number" || typeof val2 != "number") {
        res.status(400).send('Invalid Operands');
    }
    else if (operator != '*' && operator != '-' && operator != '+' && operator != '/') {
        res.status(400).send('Invalid Operator');
    }
    else {
        next();
    }
};
exports.validCalculatorRequest = validCalculatorRequest;
