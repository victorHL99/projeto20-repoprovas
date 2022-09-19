"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var authController_js_1 = __importDefault(require("../controllers/authController.js"));
var schemaValidate_js_1 = __importDefault(require("../middlewares/schemaValidate.js"));
var authSchema_js_1 = __importDefault(require("../schemas/authSchema.js"));
var authRouter = (0, express_1.Router)();
authRouter.post("/signup", (0, schemaValidate_js_1["default"])(authSchema_js_1["default"].authSchemaSignup), authController_js_1["default"].signup);
authRouter.post("/signin", (0, schemaValidate_js_1["default"])(authSchema_js_1["default"].authSchemaSignin), authController_js_1["default"].signin);
exports["default"] = authRouter;
