"use strict";
const texto71 = "Olá";
const numero71 = 42;
console.log(typeof texto71);
console.log(typeof numero71);
function detalhesFunc71(funcionario) {
    if (typeof (funcionario) === 'string') {
        console.log(`O nome do funcionario é: ${funcionario}`);
    }
    else if (typeof (funcionario) === 'number') {
        console.log(`O ID do funcionario é: ${funcionario}`);
    }
}
const func70_1 = detalhesFunc71('Igor');
console.log(func70_1);
const func70_2 = detalhesFunc71(1);
console.log(func70_2);
class Animal71 {
}
const dog71 = new Animal71();
console.log(dog71 instanceof Animal71);
console.log(dog71 instanceof Object);
const formatoData71 = (valor) => {
    if (valor instanceof Date) {
        console.log('É uma instancia de Date');
        return valor.toUTCString();
    }
    console.log('É uma string e agora esta sendo convertida para Date');
    return new Date(valor).toUTCString();
};
console.log(formatoData71(new Date('2022-04-01')));
console.log(formatoData71('2022-04-01'));
const pessoa71 = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo"
};
if ("nome" in pessoa71) {
    console.log("A propriedade 'nome' existe no objeto pessoa.");
}
else {
    console.log("A propriedade 'nome' não existe no objeto pessoa.");
}
if ("altura" in pessoa71) {
    console.log("A propriedade 'altura' existe no objeto pessoa.");
}
else {
    console.log("A propriedade 'altura' não existe no objeto pessoa.");
}
const numeros71 = [1, 2, 3, 4, 5];
for (const numero of numeros71) {
    console.log(numero);
}
const frutas71 = ["maçã", "banana", "laranja"];
const temBanana71 = frutas71.includes("banana");
console.log(temBanana71);
const temUva71 = frutas71.includes("uva");
console.log(temUva71);
class Carro71 {
    constructor(nome, marca) {
        this.nome = nome;
        this.marca = marca;
    }
}
class Moto71 {
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
function detalhesVeiculos71(veiculo) {
    if (veiculo instanceof Carro71) {
        console.log(`O nome do Carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`);
    }
    else if (veiculo instanceof Moto71) {
        console.log(`O nome da Moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`);
    }
    else {
        console.log('Não é instancia da classe');
    }
}
const carro71 = new Carro71("Fiat", 'Honda');
detalhesVeiculos71(carro71);
const moto71 = new Moto71("Honda", 2022);
detalhesVeiculos71(moto71);
detalhesVeiculos71({ nome: "Teste", ano: 2092 });
