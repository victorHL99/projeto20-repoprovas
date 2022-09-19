"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var supertest_1 = __importDefault(require("supertest"));
var app_1 = __importDefault(require("../src/app"));
var database_1 = __importDefault(require("../src/config/database"));
var EMAIL = "".concat(new Date().getTime(), "@test.com"); // random email
var PASSWORD = '12345678';
var login = {
    email: EMAIL,
    password: PASSWORD
};
var signup = {
    email: EMAIL,
    password: PASSWORD,
    confirmPassword: PASSWORD
};
beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["TRUNCATE TABLE users CASCADE"], ["TRUNCATE TABLE users CASCADE"])))];
            case 1:
                _a.sent();
                return [4 /*yield*/, database_1["default"].$executeRaw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["TRUNCATE TABLE sessions CASCADE"], ["TRUNCATE TABLE sessions CASCADE"])))];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe("Signin Tests suite", function () {
    // sucess case
    it("should carry out login", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(signup)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(login)];
                case 2:
                    response = _a.sent();
                    expect(response.statusCode).toBe(200);
                    expect(response.text).not.toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - email not found
    it("should not carry out login with a wrong email", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(login)];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(401);
                    expect(response.text).toEqual('Email or password incorrect');
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - wrong password
    it("should not carry out login with a wrong password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signup').send(signup)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(__assign(__assign({}, login), { password: '123456789' }))];
                case 2:
                    response = _a.sent();
                    expect(response.statusCode).toBe(401);
                    expect(response.text).toEqual('Email or password incorrect');
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - wrong email format
    it("should not carry out login with a wrong email format", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(__assign(__assign({}, login), { email: 'test' }))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(422);
                    expect(response.text).toEqual('"email" must be a valid email');
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - password is empty
    it("should not carry out login with a empty password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(__assign(__assign({}, login), { password: '' }))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(422);
                    expect(response.text).toEqual('"password" is not allowed to be empty');
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - email is empty
    it("should not carry out login with a empty email", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(__assign(__assign({}, login), { email: '' }))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(422);
                    expect(response.text).toEqual('"email" is not allowed to be empty');
                    return [2 /*return*/];
            }
        });
    }); });
    // fail case - email and password are empty
    it("should not carry out login with a empty email and password", function () { return __awaiter(void 0, void 0, void 0, function () {
        var response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, supertest_1["default"])(app_1["default"]).post('/signin').send(__assign(__assign({}, login), { email: '', password: '' }))];
                case 1:
                    response = _a.sent();
                    expect(response.statusCode).toBe(422);
                    expect(response.text).toEqual("\"email\" is not allowed to be empty, \"password\" is not allowed to be empty");
                    return [2 /*return*/];
            }
        });
    }); });
});
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database_1["default"].$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
var templateObject_1, templateObject_2;
