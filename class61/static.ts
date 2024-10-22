/*Quando uma classe ou método é estático, significa que podemos acessar ele diretamente chamando a classe ou o método, sem precisar instanciar um objeto (new). Se não for static para usarmos teriamos que instanciar.

Exemplo de uma construção padrão sem Static*/
class Calculadora61 {
    // Propriedade 'pi' agora pertence a cada instância da classe.
    pi: number = 3.14159;

    // Método 'calcularArea' agora é de instância, ou seja, pertence a cada objeto criado.
    calcularArea(raio: number): number {
        return this.pi * raio * raio;
    }
}
// Criando um objeto da classe 'Calculadora'
const minhaCalculadora61 = new Calculadora61();

// Acessando a propriedade e o método através do objeto.
console.log(minhaCalculadora61.pi); // Saída: 3.14159
console.log(minhaCalculadora61.calcularArea(5)); // Saída: 78.53975


//Exemplo com static
class Calculadora61_2 {
    // A propriedade estática 'pi' pertence à classe, e não à instância.
    // Isso significa que podemos acessá-la sem precisar criar um objeto da classe.
    static pi: number = 3.14159;

    // Método estático que calcula a área de um círculo.
    // Como é estático, pode ser acessado diretamente pela classe.
    static calcularArea(raio: number): number {
        return this.pi * raio * raio; // Usa a propriedade estática 'pi'
    }
}

// Acessando a propriedade estática diretamente da classe, sem instanciar.
console.log(Calculadora61_2.pi); // Saída: 3.14159

// Chamando o método estático diretamente pela classe.
console.log(Calculadora61_2.calcularArea(5)); // Saída: 78.53975

/*
Em TypeScript, não é possível declarar uma classe inteira como static. O modificador static só pode ser aplicado a membros individuais da classe, como métodos e propriedades. Isso significa que você precisa declarar cada membro como static de forma explícita, um por um, para que eles sejam acessíveis diretamente pela classe.
*/