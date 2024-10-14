"use strict";
let frutas1 = ['🍌', '🍎', '🍍', '🍉'];
console.log(frutas1[1]);
let frutas2 = ['🍌', '🍎', '🍍', '🍉'];
console.log(frutas2[2]);
let idiomas = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
let frutas = ['🍌', '🍎', '🍍', '🍉'];
console.log(frutas.length);
let listaNumeros = [1, 2, 3, 4, 5, 6];
listaNumeros = [...listaNumeros, 7, 8, 9, 10];
console.log(listaNumeros);
let linguagens = new Array('JavaScript', 'TypeScript', 'Python', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
funcaoLinguagens(linguagens);
