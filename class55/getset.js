"use strict";
class Quadrado55 {
    constructor() {
        this._largura = 6;
        this._altura = 12;
    }
    get calcularQuadrado55() {
        return this._largura * this._altura;
    }
}
console.log(new Quadrado55().calcularQuadrado55);
class Pessoa55 {
    retornarNome55(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa55 = new Pessoa55();
pessoa55.retornarNome55('Igor Artus');
console.log(pessoa55.nome);
class Estudante55 {
    constructor() {
        this._nome = 'Igor';
    }
    get nomeEstudante() {
        return this._nome;
    }
}
const estudante55 = new Estudante55();
console.log(estudante55.nomeEstudante);
class Estudante55_2 {
    constructor(nomeEstudante, semesterEstudante, cursoEstudante) {
        this._nome = nomeEstudante;
        this._semester = semesterEstudante;
        this._curso = cursoEstudante;
    }
    get cursos() {
        return this._curso;
    }
    set cursos(setCurso) {
        this._curso = setCurso;
    }
}
const estudante55_2 = new Estudante55_2('Igor', 1, 'contabilidade');
console.log(estudante55_2);
estudante55_2.cursos = 'Engenharia de Software';
console.log(estudante55_2);
