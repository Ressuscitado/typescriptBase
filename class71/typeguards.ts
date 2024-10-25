/*TYPEOF ele verifica os tipos principais que existem no TS, retornando o nome do tipo, por exemplo string ou number, O que é: É um operador utilizado para verificar o tipo primitivo de uma variável.
*/
//EX01 
const texto71 = "Olá";
const numero71 = 42;

console.log(typeof texto71);  // "string"
console.log(typeof numero71);  // "number"

//EX02
function detalhesFunc71(funcionario: string | number) {
    if (typeof (funcionario) === 'string') {
        console.log(`O nome do funcionario é: ${funcionario}`);
    } else if (typeof (funcionario) === 'number') {
        console.log(`O ID do funcionario é: ${funcionario}`);
    }
}
const func70_1 = detalhesFunc71('Igor');
console.log(func70_1);
const func70_2 = detalhesFunc71(1);
console.log(func70_2);

/*INSTANCEOF, É um operador utilizado para verificar se um objeto é uma instância de uma determinada CLASSE ou CONSTRUTOR.
Uso: objeto instanceof Classe*/

//EX01
class Animal71 {}
const dog71 = new Animal71();

console.log(dog71 instanceof Animal71); // true
console.log(dog71 instanceof Object);  // true (toda instância é também um objeto)

//EX02
const formatoData71 = (valor: Date | string) => {
    if (valor instanceof Date) {
        console.log('É uma instancia de Date');
        return valor.toUTCString();
    }

    console.log('É uma string e agora esta sendo convertida para Date');

    return new Date(valor).toUTCString();
};
console.log(formatoData71(new Date('2022-04-01')));
console.log(formatoData71('2022-04-01'));
/*Se valor for um objeto Date, ele chama o método toUTCString() para converter a data em uma string que representa a data em formato UTC (Tempo Universal Coordenado) e a retorna.

Se valor não for um objeto Date, a função assume que ele é uma string representando uma data. Em seguida, cria um novo objeto Date usando a string como argumento.
A função chama toUTCString() no novo objeto Date e retorna a string no formato UTC.*/

/*IN Operator*
O operador in é utilizado apenas para verificar a existência de CHAVES (ou PROPRIEDADES) em objetos. Ele não é usado para verificar valores. */
const pessoa71 = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo"
};

// Verificando se a propriedade "nome" existe no objeto "pessoa"
if ("nome" in pessoa71) {
    console.log("A propriedade 'nome' existe no objeto pessoa.");
} else {
    console.log("A propriedade 'nome' não existe no objeto pessoa.");
}
// Verificando se a propriedade "altura" existe no objeto "pessoa"
if ("altura" in pessoa71) {
    console.log("A propriedade 'altura' existe no objeto pessoa.");
} else {
    console.log("A propriedade 'altura' não existe no objeto pessoa.");
}

//OF Operator
/*O operador of é usado para iterar sobre os VALORES de objetos iteráveis, como arrays. Não pode ser usado diretamente em objetos simples para verificar chaves ou propriedades.*/
const numeros71 = [1, 2, 3, 4, 5];

for (const numero of numeros71) {
    console.log(numero); // Exibe os valores: 1, 2, 3, 4, 5
}

/*
IN é utilizado para verificar a existência de chaves em objetos.

OF é utilizado em laços de repetição para iterar sobre os valores de arrays ou objetos iteráveis.
*/

//INCLUDES Operator
/*includes()
O método includes() verifica se um array contém um determinado elemento e retorna um valor booleano (true ou false).*/
const frutas71 = ["maçã", "banana", "laranja"];

const temBanana71 = frutas71.includes("banana");
console.log(temBanana71); // true

const temUva71 = frutas71.includes("uva");
console.log(temUva71); // false

//INSTANCEOF Operator mais exemplos com classes em funções como parametros
/*Carro71 e Moto71 estão sendo usados dentro do parametro da função para dizer que o parametro aceita instancias dessas duas classes, você está dizendo que o parâmetro da função pode ser um objeto que é uma instância de uma dessas classes.*/

class Carro71 {
    constructor(public nome: string, public marca: string) {}
}
class Moto71 {
    constructor(public nome: string, public ano: number) {}
}
/*passando as classes como se fossem "tipos", assim as instancias delas podem ser passadas para dentro da função, e o instanceof verifica se o objeto passado é uma instância da classe. Estou falando que os argumentos podem apenas ser instancias de ambas as classes passadas no parametro da função, o instanceof verifica se o objeto passado é uma instância da classe somente assim deixando usarmos as propriedades dessas classes.*/
function detalhesVeiculos71(veiculo: Carro71 | Moto71) {
    if (veiculo instanceof Carro71) {
        console.log(`O nome do Carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`);
    } else if (veiculo instanceof Moto71) {
        console.log(`O nome da Moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`);
    } else {
        console.log('Não é instancia da classe');
    }
}
const carro71 = new Carro71("Fiat", 'Honda');
detalhesVeiculos71(carro71);

const moto71 = new Moto71("Honda", 2022);
detalhesVeiculos71(moto71);
/*Ele aceita pq tem as propriedades das classes, mas não é uma instancia por isso cai no ELSE */
detalhesVeiculos71({ nome: "Teste", ano: 2092 });//N é instancia da classe


