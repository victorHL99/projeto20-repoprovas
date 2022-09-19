"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var testsController_js_1 = __importDefault(require("../controllers/testsController.js"));
var schemaValidate_js_1 = __importDefault(require("../middlewares/schemaValidate.js"));
var tokenValidate_js_1 = __importDefault(require("../middlewares/tokenValidate.js"));
var testsSchema_js_1 = __importDefault(require("../schemas/testsSchema.js"));
var testsRouter = (0, express_1.Router)();
testsRouter.post("/create", (0, schemaValidate_js_1["default"])(testsSchema_js_1["default"].createTestSchema), tokenValidate_js_1["default"], testsController_js_1["default"].createTest);
exports["default"] = testsRouter;
