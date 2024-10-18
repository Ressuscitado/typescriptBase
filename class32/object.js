"use strict";
let pessoaIgor = {
    nome: 'Igor',
    idade: 26,
    profissao: 'Software Engineer'
};
console.log(pessoaIgor);
function onboarding(funcionario) {
    return `Ola ${funcionario.nome}`;
}
console.log(onboarding({ nome: 'Igor Artus' }));
;
function onboarding2(pessoa) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}!`;
}
;
console.log(onboarding2({ nome: 'Igor Artus', funcao: 'Software Engineer' }));
function onboarding3(pessoa) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}!`;
}
;
console.log(onboarding3({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript' }));
;
function onboarding4(pessoa) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}!`;
}
;
console.log(onboarding4({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript' }));
;
function onboarding5(pessoa) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}! Seu email é: ${pessoa.email}`;
}
;
console.log(onboarding5({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript', email: 'a@a.com' }));
;
;
;
const filho = {
    nome: 'Igor',
    sobrenome: 'Artus',
    idade: 26
};
console.log(filho);
;
;
const usuario = {
    nome: 'Igor Artus',
    email: 'a@a.com'
};
const admin = {
    nome: 'Igor Artus',
    email: 'a@a.com',
    admin: true
};
function acessarSistema22(userqualquer) {
    return userqualquer;
}
;
console.log(acessarSistema22(usuario));
console.log(acessarSistema22(admin));
