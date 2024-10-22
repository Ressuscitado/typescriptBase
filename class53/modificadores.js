"use strict";
class Estudante53 {
    constructor(codigo, nome) {
        this.codigo = codigo;
        this.nome = nome;
    }
}
const estudante53 = new Estudante53(1, 'Igor Artus');
console.log(estudante53.codigo);
console.log(estudante53.nome);
class Estudante53Privado {
    constructor(codigo, nome, idade) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }
    retornarDados53() {
        return [this.codigo, this.nome, this.idade];
    }
}
const estudante53Privado = new Estudante53Privado(1, 'Igor Artus', 26);
console.log(estudante53Privado.retornarDados53());
class Estudante53Protected {
    constructor(codigo, nome, idade) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }
}
class Estudante53ProtectedExt extends Estudante53Protected {
    constructor(codigo, nome, idade, curso) {
        super(codigo, nome, idade);
        this.curso = curso;
    }
    retornarDados53() {
        return [this.codigo, this.nome, this.idade, this.curso];
    }
}
const Estudante53ProtectedExt1 = new Estudante53ProtectedExt(2, 'protected', 26, 'engenharia');
console.log(Estudante53ProtectedExt1.retornarDados53());
class Funcionario53 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const funcionario53 = new Funcionario53(new Date(1995, 11, 17));
console.log(funcionario53.dataNascimento);
const funcionario53_1 = new Funcionario53(new Date(2000, 12, 20));
console.log(funcionario53_1.dataNascimento);
class funcionario53_2 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
        this.dataNascimento = dataNascimento;
    }
}
class funcionario53_3 {
    constructor(nome, codigo) {
        this.nome = nome;
        this.codigoFunc = codigo;
    }
}
const func53 = new funcionario53_3('Igor', 1);
console.log(func53);
func53.nome = 'Igor Artus';
console.log(func53);
const funcionario53_4 = {
    codigoFuncionario: 30,
    nomeEmpregado: 'Mokona'
};
console.log(funcionario53_4);
const funcionario53_5 = {
    codigoFuncionario: 40,
    nomeEmpregado: 'Tedy'
};
funcionario53_5.nomeEmpregado = 'Igor';
funcionario53_5.codigoFuncionario = 50;
console.log(funcionario53_5);
const funcionario53_6 = {
    codigoFuncionario: 30,
    nomeEmpregado: 'Mokona'
};
