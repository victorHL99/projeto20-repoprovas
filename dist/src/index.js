"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var chalk_1 = __importDefault(require("chalk"));
var app_1 = __importDefault(require("./app"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var port = +process.env.PORT || 9000;
app_1["default"].listen(port, function () {
    console.log('');
    console.log(chalk_1["default"].green.bold("Server is up and running on port ".concat(port)));
    console.log(chalk_1["default"].yellow.bold("Mode: ".concat(process.env.MODE || 'not defined -> DEV')));
    console.log(chalk_1["default"].yellow("Verbose: ".concat(process.env.VERBOSE || 'false')));
    console.log('---------------------------------------');
});
