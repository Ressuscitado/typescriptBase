"use strict";
class Calculadora61 {
    constructor() {
        this.pi = 3.14159;
    }
    calcularArea(raio) {
        return this.pi * raio * raio;
    }
}
const minhaCalculadora61 = new Calculadora61();
console.log(minhaCalculadora61.pi);
console.log(minhaCalculadora61.calcularArea(5));
class Calculadora61_2 {
    static calcularArea(raio) {
        return this.pi * raio * raio;
    }
}
Calculadora61_2.pi = 3.14159;
console.log(Calculadora61_2.pi);
console.log(Calculadora61_2.calcularArea(5));
