"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routers_1 = require("./routers");
const middlewares_1 = require("./middlewares");
const app = (0, express_1.default)();
const port = 3000;
//using middleware at app level
app.use(middlewares_1.addTimestamp);
app.use(middlewares_1.logger);
// using body parser inbuilt middleware of express
app.use(express_1.default.json());
// using routers
app.use('/getRouter', routers_1.getRouter);
app.use('/setRouter', routers_1.setRouter);
app.use('/postRouter', routers_1.postRouter);
app.use(middlewares_1.errorHandler);
app.listen(port, () => {
    console.log(`Server Running at ${port}`);
});
