"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authRouter_js_1 = __importDefault(require("./authRouter.js"));
var testsRouter_js_1 = __importDefault(require("./testsRouter.js"));
var indexRouter = (0, express_1.Router)();
indexRouter.use(authRouter_js_1["default"]);
indexRouter.use("/tests", testsRouter_js_1["default"]);
exports["default"] = indexRouter;
