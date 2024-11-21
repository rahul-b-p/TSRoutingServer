"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = exports.setRouter = exports.getRouter = void 0;
var getRouter_1 = require("./getRouter");
Object.defineProperty(exports, "getRouter", { enumerable: true, get: function () { return getRouter_1.router; } });
var setRouter_1 = require("./setRouter");
Object.defineProperty(exports, "setRouter", { enumerable: true, get: function () { return setRouter_1.router; } });
var postRouter_1 = require("./postRouter");
Object.defineProperty(exports, "postRouter", { enumerable: true, get: function () { return postRouter_1.router; } });
