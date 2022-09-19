"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var createTestSchema = joi_1["default"].object({
    name: joi_1["default"].string().required(),
    pdfUrl: joi_1["default"].string().required().uri(),
    categoryId: joi_1["default"].number().required(),
    teacherDisciplineId: joi_1["default"].number().required()
});
var testsSchema = {
    createTestSchema: createTestSchema
};
exports["default"] = testsSchema;
