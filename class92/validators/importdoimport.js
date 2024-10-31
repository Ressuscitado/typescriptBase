"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const imports_1 = require("./imports");
let emailCorreto92 = "exemplo@email.com";
let emailIncorreto92 = "exemplo@email";
let validator92 = new imports_1.EmailValidator92();
console.log(validator92.isValid(emailCorreto92));
console.log(validator92.isValid(emailIncorreto92));
