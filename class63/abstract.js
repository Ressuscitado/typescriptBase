"use strict";
class Forma {
    constructor(cor) {
        this.cor = cor;
        console.log(`Criando uma forma de cor: ${cor}`);
    }
    descrever() {
        console.log(`Esta é uma forma geométrica de cor ${this.cor}.`);
    }
}
class Circulo extends Forma {
    constructor(raio, cor) {
        super(cor);
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }
}
class Retangulo extends Forma {
    constructor(largura, altura, cor) {
        super(cor);
        this.largura = largura;
        this.altura = altura;
    }
    calcularArea() {
        return this.largura * this.altura;
    }
}
const circulo = new Circulo(5, 'vermelho');
const retangulo = new Retangulo(10, 20, 'azul');
circulo.descrever();
console.log(circulo.calcularArea());
retangulo.descrever();
console.log(retangulo.calcularArea());
