/*Diferentemente de static, o uso de abstract precisa ser explicitamente colocado no nome da classe se você estiver definindo uma classe abstrata. Ou seja, classes abstratas devem ser marcadas com abstract para indicar que elas não podem ser instanciadas diretamente e que podem conter métodos abstratos*/

// Definição de uma classe abstrata 'Forma'
abstract class Forma {
    // Construtor da classe abstrata 'Forma'
    constructor(public cor: string) {
        console.log(`Criando uma forma de cor: ${cor}`);
    }

    // Método abstrato: precisa ser implementado pelas subclasses
    abstract calcularArea(): number;

    // Método concreto: pode ser compartilhado por todas as subclasses mas n precisa ser implementado pelas subclasses pois já foi implementado aqui.
    descrever(): void {
        console.log(`Esta é uma forma geométrica de cor ${this.cor}.`);
    }
}

// Subclasse 'Circulo' que estende a classe abstrata 'Forma'
class Circulo extends Forma {
    constructor(public raio: number, cor: string) {
        // Chama o construtor da classe base 'Forma' passando o parâmetro 'cor'
        super(cor);
    }

    // Implementação do método abstrato
    calcularArea(): number {
        return Math.PI * this.raio * this.raio;
    }
}

// Subclasse 'Retangulo' que estende a classe abstrata 'Forma'
class Retangulo extends Forma {
    constructor(public largura: number, public altura: number, cor: string) {
        // Chama o construtor da classe base 'Forma' passando o parâmetro 'cor'
        super(cor);
    }

    // Implementação do método abstrato
    calcularArea(): number {
        return this.largura * this.altura;
    }
}

// Criando instâncias das subclasses
const circulo = new Circulo(5, 'vermelho');
const retangulo = new Retangulo(10, 20, 'azul');

// Usando métodos concretos e abstratos
circulo.descrever(); // Saída: Criando uma forma de cor: vermelho. Esta é uma forma geométrica de cor vermelho.
console.log(circulo.calcularArea()); // Saída: 78.5398 (área do círculo)

retangulo.descrever(); // Saída: Criando uma forma de cor: azul. Esta é uma forma geométrica de cor azul.
console.log(retangulo.calcularArea()); // Saída: 200 (área do retângulo)
/*O fato de o método descrever não precisar ser implementado nas subclasses, apesar de estar em uma classe abstrata, é devido à sua definição como um método concreto (um método com implementação) e não como abstrato.

Vamos entender por partes:
Classe abstrata:

Uma classe abstrata em TypeScript (ou em outras linguagens orientadas a objetos) pode conter tanto métodos abstratos quanto métodos concretos.
Métodos abstratos são aqueles que não possuem implementação na classe abstrata. Eles servem como uma "obrigação" para as subclasses que herdam da classe abstrata implementá-los.
Métodos concretos, por outro lado, já têm uma implementação na classe abstrata, e as subclasses não são obrigadas a sobrescrevê-los (embora possam, se necessário).

Métodos abstratos:
Um método marcado com abstract é uma espécie de "esqueleto", ou seja, a classe abstrata apenas define o nome e o tipo de retorno do método, mas não fornece a lógica. Isso significa que todas as subclasses são obrigadas a implementar esse método.
Exemplo do método abstrato calcularArea() na classe Forma:

abstract calcularArea(): number;

Métodos concretos:
Métodos que não são marcados como abstract possuem implementação completa e, por isso, não precisam ser implementados nas subclasses. Eles são herdados com sua implementação já definida.
Exemplo do método concreto descrever():

descrever(): void {
    console.log(`Esta é uma forma geométrica de cor ${this.cor}.`);
}
Como descrever tem uma implementação concreta, as subclasses Circulo e Retangulo não precisam obrigatoriamente implementar ou sobrescrever esse método.*/