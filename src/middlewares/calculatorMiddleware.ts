import { Request, Response, NextFunction } from "express";
import { calculatorRequestBody } from "../types";

export const validCalculatorRequest = (req: Request<{}, any, calculatorRequestBody>, res: Response, next: NextFunction) => {
    const { val1, val2, operator } = req.body
    if (typeof val1 != "number" || typeof val2 != "number") {
        res.status(400).send('Invalid Operands');
    }
    else if (operator != '*' && operator != '-' && operator != '+' && operator != '/'){
        res.status(400).send('Invalid Operator');
    }
    else{
        next();
    }
}