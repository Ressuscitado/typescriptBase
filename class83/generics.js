"use strict";
function retornarNumeroRand83(items) {
    let numeroRand83 = Math.floor(Math.random() * items.length);
    return items[numeroRand83];
}
let numeros83 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornarNumeroRand83(numeros83));
function retornarStringRand83(items) {
    let stringRand83 = Math.floor(Math.random() * items.length);
    return items[stringRand83];
}
let frutas83 = ['Banana', 'Maça', 'Abacaxi', 'Melancia'];
console.log(retornarStringRand83(frutas83));
function retornarElementoRand83(items) {
    let elementoRand83 = Math.floor(Math.random() * items.length);
    return items[elementoRand83];
}
let frutas83_2 = ['Banana', 'Macã', 'Abacaxi', 'Melancia'];
let numeros83_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornarElementoRand83(frutas83_2));
console.log(retornarElementoRand83(numeros83_2));
