"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var client_1 = __importDefault(require("@prisma/client"));
require("./setup.js");
var PrismaClient = client_1["default"].PrismaClient;
var client = new PrismaClient();
exports["default"] = client;
