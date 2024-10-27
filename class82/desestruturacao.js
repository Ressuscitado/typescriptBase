"use strict";
const pessoa82 = {
    nome82: "Alice",
    idade82: 30,
    cidade82: "São Paulo"
};
const { nome82, idade82, cidade82 } = pessoa82;
console.log(nome82);
console.log(idade82);
console.log(cidade82);
const pessoa82_ = {
    nome82_: "Alice",
    idade82_: 30
};
const { nome82_: nomePessoa82, idade82_: idadePessoa82 } = pessoa82_;
console.log(nomePessoa82);
console.log(idadePessoa82);
const pessoa821 = {
    nome821: "Alice"
};
const { nome821, idade821 = 25 } = pessoa821;
console.log(nome821);
console.log(idade821);
const numerosDes82 = [1, 2, 3, 4, 5];
const [primeiroDes82, segundoDes82, terceiroDes82] = numerosDes82;
console.log(primeiroDes82);
console.log(segundoDes82);
console.log(terceiroDes82);
const numerosIgnorar82 = [1, 2, 3, 4, 5];
const [, , terceiroIgnorar82, quartoIgnorar82] = numerosIgnorar82;
console.log(terceiroIgnorar82);
console.log(quartoIgnorar82);
const numerosRest82 = [1, 2, 3, 4, 5];
const [primeiroRest82, ...restoRest82] = numerosRest82;
console.log(primeiroRest82);
console.log(restoRest82);
const usuarioFunc82 = {
    idFunc82: 1,
    nomeFunc82: "Alice",
    emailFunc82: "alice@example.com"
};
function mostrarUsuarioFunc82({ nomeFunc82, emailFunc82 }) {
    console.log(`Nome: ${nomeFunc82}, Email: ${emailFunc82}`);
}
mostrarUsuarioFunc82(usuarioFunc82);
const numerosFunc82 = [10, 20, 30];
function somarFunc82([aFunc82, bFunc82]) {
    return aFunc82 + bFunc82;
}
console.log(somarFunc82(numerosFunc82));
const pessoaAninhada82 = {
    nomeAninhada82: "Alice",
    enderecoAninhada82: {
        cidadeAninhada82: "São Paulo",
        estadoAninhada82: "SP"
    }
};
const { nomeAninhada82, enderecoAninhada82: { cidadeAninhada82, estadoAninhada82 } } = pessoaAninhada82;
console.log(nomeAninhada82);
console.log(cidadeAninhada82);
console.log(estadoAninhada82);
