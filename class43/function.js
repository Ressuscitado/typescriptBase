"use strict";
function somar43(a, b) {
    return a + b;
}
console.log(somar43(2, 3));
const somar43anonima = function (a, b) {
    return a + b;
};
console.log(somar43anonima(3, 3));
const saudar43 = (nome) => {
    return `Ola ${nome}`;
};
console.log(saudar43('Igor'));
const saudar43umalinha = (nome) => `Ola ${nome}`;
console.log(saudar43umalinha('Igor'));
const saudar43construtor = new Function('nome', 'return `Ola ${nome}`');
console.log(saudar43construtor('Igor'));
function pessoa43(nome, idade, email) {
    console.log(`Ola Nome: ${nome}, vc tem Idade: ${idade}`);
    if (email !== undefined) {
        console.log(`E seu email: ${email}`);
    }
}
pessoa43('Igor', 25);
pessoa43('Igor', 25, '4lGv0@example.com');
function log43(mensagem, usuarioId) {
    const horaLog = new Date().toLocaleDateString();
    console.log(horaLog, mensagem, usuarioId || 'Nenhum usuário logado');
}
log43('Login efetuado', 3);
log43('Login efetuado');
function pessoa43type(...pessoa) {
    return pessoa;
}
const pessoa430 = { nome: "Igor", idade: 30, email: "igor@example.com" };
const pessoa4300 = { nome: "Maria" };
const result = pessoa43type(pessoa430, pessoa4300);
console.log(result);
function somarNumeros43(...numeros) {
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
}
console.log(somarNumeros43(1, 2, 3, 4, 5));
console.log(somarNumeros43(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
function desconto43(preco, desconto = 0.08) {
    return preco * (1 - desconto);
}
console.log(desconto43(100, 0.15));
console.log(desconto43(100));
function exibirMsg43(nome, msg = 'Ola amado') {
    return `${msg} ${nome}`;
}
console.log(exibirMsg43('Igor'));
console.log(exibirMsg43('Igor', 'Bom dia'));
