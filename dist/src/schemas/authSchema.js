"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var joi_1 = __importDefault(require("joi"));
var authSchemaSignup = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(6).required(),
    confirmPassword: joi_1["default"].string().min(6).required().valid(joi_1["default"].ref('password')).messages({
        'any.only': 'Passwords do not match'
    })
});
var authSchemaSignin = joi_1["default"].object({
    email: joi_1["default"].string().email().required(),
    password: joi_1["default"].string().min(6).required()
});
var authSchema = {
    authSchemaSignup: authSchemaSignup,
    authSchemaSignin: authSchemaSignin
};
exports["default"] = authSchema;
