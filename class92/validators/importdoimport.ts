import { EmailValidator92 } from "./imports";

let emailCorreto92 = "exemplo@email.com";
let emailIncorreto92 = "exemplo@email";
let validator92 = new EmailValidator92();
console.log(validator92.isValid(emailCorreto92));
console.log(validator92.isValid(emailIncorreto92));