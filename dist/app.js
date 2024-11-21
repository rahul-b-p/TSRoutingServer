"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
//using middleware at app level
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
app.use('/getRouter', routers_1.getRouter);
app.use('/setRouter', routers_1.setRouter);
const port = 3000;
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});
