"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
require("express-async-errors");
// import middlewares
var errorHandlerMiddleware_js_1 = __importDefault(require("./middlewares/errorHandlerMiddleware.js"));
// import routes
var index_js_1 = __importDefault(require("./routes/index.js"));
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(index_js_1["default"]);
app.use(errorHandlerMiddleware_js_1["default"]);
exports["default"] = app;
