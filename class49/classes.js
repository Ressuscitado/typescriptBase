"use strict";
class Produtos49 {
    exibirProdutos49(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInfo = new Produtos49();
console.log('Produtos em estoque:');
departamentoInfo.exibirProdutos49('Mouse', 'Teclado', 'Monitor', 'Headset');
class Pessoa49 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto49() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa49 = new Pessoa49('Igor', 'Artus');
console.log(pessoa49.nomeCompleto49());
class Estudante49 {
}
const estudante49 = new Estudante49();
estudante49.codigoEstudante = 1;
estudante49.nomeEstudante = 'Igor';
console.log(estudante49.codigoEstudante);
console.log(estudante49.nomeEstudante);
class Estudante49_1 {
    constructor(codifoEstudante, nomeEstudante) {
        this.codigoEstudante = codifoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
    listarEstudante49_1() {
        console.log(this.codigoEstudante);
        console.log(this.nomeEstudante);
    }
}
const estudante49_1 = new Estudante49_1(2, 'Artus');
estudante49_1.listarEstudante49_1();
