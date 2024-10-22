"use strict";
class Animal59 {
    mover(distancia = 0) {
        console.log(`Animal andando ${distancia}m`);
    }
}
class Cachorro59 extends Animal59 {
    latir() {
        console.log('Au au');
    }
}
const cachorro59 = new Cachorro59();
cachorro59.latir();
cachorro59.mover(10);
class Pessoa59 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        console.log(`Ola, eu sou ${this.retornarNomeCompleto()}`);
    }
}
class Funcionario59 extends Pessoa59 {
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    retornarNomeCompleto_02() {
        return `${super.retornarNomeCompleto()} - ${this.funcao}`;
    }
}
const funcionario59 = new Funcionario59('Guilherme', 'Artus', 'Desenvolvedor');
funcionario59.apresentarPessoa();
funcionario59.retornarNomeCompleto();
console.log(funcionario59.retornarNomeCompleto_02());
