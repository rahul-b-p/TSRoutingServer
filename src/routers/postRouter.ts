import { Request, Router } from "express";
import { calculatorRequestBody } from "../types";

export const router = Router();

router.post('/calculator', (req: Request<{}, any, calculatorRequestBody>, res) => {
    const { val1, val2, operator } = req.body;

    let result: number | string
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