"use strict";
const pessoa65 = {
    nome: "Alice",
    idade: 30,
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
pessoa65.apresentar && pessoa65.apresentar();
const meuCachorro65 = {
    nome: "Rex",
    raca: "Labrador"
};
console.log(meuCachorro65);
class Gato65 {
    constructor(nome, idade, estaVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }
    comer(tipoComida) {
        console.log(`O ${this.nome} esta vivo ${this.estaVivo},e  come ${tipoComida}`);
    }
}
const gato65 = new Gato65("Garfield", 5, true);
gato65.comer("Carne");
const desenvoldor65 = {
    id: '123',
    nome: 'Artus',
    salario: '5000',
    liguagemProgramacao: 'TypeScript'
};
console.log(desenvoldor65);
const meuEndereco65 = {
    rua: "Av. Paulista",
    cidade: "São Paulo",
    cep: "01311-000"
};
console.log(meuEndereco65);
const meuCachorro65_1 = {
    nome: "Rex",
    raca: "Labrador"
};
console.log(meuCachorro65_1);
const pessoaFisica65 = {
    nome: "Alice",
    idade: 30,
    cpf: "123.456.789-00",
    dataNascimento: new Date("1993-05-15"),
};
const pessoaJuridica65 = {
    nome: "Empresa XYZ",
    idade: 10,
    cnpj: "12.345.678/0001-99",
    razaoSocial: "Empresa XYZ Ltda.",
};
function exibirInformacoes65(pessoa65) {
    if ('cpf' in pessoa65) {
        const pf65 = pessoa65;
        console.log(`Pessoa Física: ${pf65.nome}, Idade: ${pf65.idade}, CPF: ${pf65.cpf}, Data de Nascimento: ${pf65.dataNascimento.toLocaleDateString()}`);
    }
    else if ('cnpj' in pessoa65) {
        const pj65 = pessoa65;
        console.log(`Pessoa Jurídica: ${pj65.nome}, Idade: ${pj65.idade}, CNPJ: ${pj65.cnpj}, Razão Social: ${pj65.razaoSocial}`);
    }
    else {
        console.log("Tipo de pessoa desconhecido.");
    }
}
exibirInformacoes65(pessoaFisica65);
exibirInformacoes65(pessoaJuridica65);
