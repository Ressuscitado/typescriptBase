"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator92 = void 0;
const modules_1 = require("../modules");
const modules_2 = __importDefault(require("../modules"));
console.log((0, modules_1.somar92)(1, 2));
console.log((0, modules_1.subtrair92)(1, 2));
console.log((0, modules_1.multiplicar92)(1, 2));
console.log((0, modules_2.default)(1, 2));
class EmailValidator92 {
    isValid(s) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);
    }
}
exports.EmailValidator92 = EmailValidator92;
