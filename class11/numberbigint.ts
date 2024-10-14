let number1: number = 10.6;
let number2: number = 0x89CF10;
let number3: number = 0o577;
let number4: number = 0b01101010;

console.log('Number - ponto Flutuante:',number1);
console.log('Number - ponto Hexadecimal:',number2);
console.log('Number - ponto Octal:',number4);
console.log('Number - ponto Binário:',number3);

let big1: bigint = 900955645644n;
let big2: bigint = 0b0000000000000000000000010000000000n;
let big3: bigint = 0x45632145654123n;
let big4: bigint = 0o123456000000000n;

console.log('Bigint... Normal', big1);
console.log('Bigint... Binário', big2);
console.log('Bigint... Hexadecimal', big3);
console.log('Bigint... Octal', big4);
console.log(typeof(big1));