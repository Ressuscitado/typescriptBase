"use strict";
const pessoa65 = {
    nome: "Alice",
    idade: 30,
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa65.apresentar && pessoa65.apresentar();
