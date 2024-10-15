"use strict";
let pessoa;
pessoa = ['Igor Artus', 'Software Engineer', 26];
console.log(pessoa);
pessoa = ['Igor Artus', 'Software Engineer', 56];
console.log(pessoa[0]);
console.log(pessoa[1]);
console.log(pessoa[2]);
let pessoa2 = ['Igor Artus', 'Software Engineer', 26];
console.log(pessoa2);
let listafrutas = ['🍌', '🍎', '🍍', '🍉'];
console.log(listafrutas);
listafrutas.push('🍌', '🍎', '🍍', '🍉', '🍌', '🍎', '🍍', '🍉');
console.log(listafrutas);
console.log(...listafrutas);
let listaTupla2 = ['frutas', true, ...listafrutas];
console.log(listaTupla2);
function listarPessoas(nome, idade) {
    return [nome, idade];
}
let resultado = listarPessoas(['Igor', 'Divani'], [26, 57]);
console.log(resultado);
function listarPessoas1(nome, idade) {
    return [nome, idade];
}
let resultado1 = listarPessoas1(['Igor'], [26]);
console.log(resultado1);
function criarPessoa(...nome) {
    return [nome];
}
console.log(criarPessoa('Igor', 'artus', 'artus'));
console.log(criarPessoa('Igor', 'artus'));
function exemploRest(...parametros) {
    console.log(parametros);
}
exemploRest('A', 'B', 'C');
exemploRest('Igor', 'Artus');
function listarNomes(primeiro, ...restantes) {
    console.log(`Primeiro nome: ${primeiro}`);
    console.log(`Restantes: ${restantes.join(', ')}`);
}
listarNomes('Igor', 'Artus', 'Silva', 'Joaquim');
