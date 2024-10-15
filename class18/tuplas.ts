//Tupla simples, ela suporta diferentes tipos de dados, mas quando definidos dessa forma abaixo, sempre tem tamanho e tipo definidos e não podem mudar, nem no posicionamento nem no tamanho, apenas no conteudo. Se usarmos o push, ela iria aumentar de tamanho, mas não seria uma boa prática, pq o código poderia se perder já que o tamanho foi definido na criação, nesse caso seria melhor optar por um array com multi types.
let pessoa: [string, string, number];
// daria erro pois precisa começar com string--> pessoa = [36, 'Software Engineer', 26];
pessoa = ['Igor Artus', 'Software Engineer', 26];
console.log(pessoa);


//acessando dados especificos da tupla
pessoa = ['Igor Artus', 'Software Engineer', 56];
console.log(pessoa[0]);
console.log(pessoa[1]);
console.log(pessoa[2]);

//Tuplas com Labels,  é conhecida como rótulos opcionais. Esses rótulos não alteram o comportamento da tupla, mas servem como uma documentação adicional no código, parecem OBJETOS{} mas Os rótulos fornecidos (nome, cargo, idade) são apenas para documentação e maior clareza. Não podem ser usados para acessar os elementos visto que são tuplas[].
let pessoa2: [nome: string, cargo: string, idade: number] = ['Igor Artus', 'Software Engineer', 26];
console.log(pessoa2);

//Tuplas com spread operator..., se tivermos 50 itens de frutas não teriamos que escrever STRING 50 VEZES, usando dessa forma com o spread e o tipo de dado ...string[], ele entende que os itens serão todos frutas e aceita uma tamanho variável ao contrário do primeiro exemplo que tem tamanho fixo. não haverá problema com o push, pois a tupla foi definida para permitir um número indefinido de strings após o primeiro elemento, graças ao uso do operador ...string[]
let listafrutas: [string, ...string[]] = ['🍌', '🍎', '🍍',  '🍉'];
//Quando você usa apenas console.log(listafrutas), o console.log imprime o array completo ou a tupla inteira como uma única unidade.
console.log(listafrutas);
listafrutas.push('🍌', '🍎', '🍍',  '🍉', '🍌', '🍎', '🍍',  '🍉');
console.log(listafrutas);
//Se você usar o operador de espalhamento (...) no console.log, ele irá desestruturar a tupla ou array em elementos individuais:
console.log(...listafrutas);

//Listas heterogêneas de tupla, podemos reaproveitar listas ja feitas
let listaTupla2: [string, boolean, ...string[]] = ['frutas', true, ...listafrutas];
console.log(listaTupla2);

//Uso de função com tuplas
//function listarPessoas(nome: string, idade: number) isso aqui é diferente do abaixo, isso é só os types de uma função, agora abaixo é uma função que os parametros esperam arrays apenas, e podem ser mais de um para cada.
function listarPessoas(nome: string[], idade: number[]) {
    return [nome, idade];
}
let resultado = listarPessoas(['Igor', 'Divani'], [26, 57]);
console.log(resultado);

//Uso de função com tuplas, aqui esperam apenas 1 de cada.
function listarPessoas1(nome: [string], idade: [number]) {
    return [nome, idade];
}

let resultado1 = listarPessoas1(['Igor'], [26]);
console.log(resultado1);

//Usando type próprio com operador ou |, para termos duas opções distintas na hora de criar uma tupla
type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeMeio: string, sobrenome: string];

//O Rest operator ex (...nome: Nome) ou sem criar type próprio (..nome: string[]) se caracteriza pelo uso do spread operator (...) no parâmetro, permite que você passe os argumentos separadamente, e o TypeScript vai automaticamente agrupá-los em uma tupla que corresponda a uma das variações definidas no tipo Nome.
function criarPessoa(...nome: Nome) {
    return [nome];
}
console.log(criarPessoa('Igor', 'artus', 'artus'));
console.log(criarPessoa('Igor', 'artus'));

// REST PARAMETER
/*
O Rest Parameter (ou Parâmetro Rest) em JavaScript e TypeScript é uma sintaxe que permite que uma função receba um número indefinido de argumentos como um array. Com ele, você pode passar múltiplos argumentos para uma função sem precisar especificar a quantidade exata de parâmetros na assinatura da função.

O rest parameter é representado pela sintaxe ... (três pontos) e é sempre o último parâmetro de uma função. Ele é chamado "rest" porque captura o "restante" dos argumentos após os parâmetros nomeados (se houver).
 */

//Eu posso passar mais de 1 valor mesmo tendo só 1 parametro dentro da função
function exemploRest(...parametros: string[]) {
    console.log(parametros);
}

exemploRest('A', 'B', 'C'); // ["A", "B", "C"]
exemploRest('Igor', 'Artus'); // ["Igor", "Artus"]

//Outro exemplo de REST parameter com spread operator
function listarNomes(primeiro: string, ...restantes: string[]) {
    console.log(`Primeiro nome: ${primeiro}`);
    console.log(`Restantes: ${restantes.join(', ')}`);
}

listarNomes('Igor', 'Artus', 'Silva', 'Joaquim'); 
// Primeiro nome: Igor
// Restantes: Artus, Silva, Joaquim




//TUPLAS VS ARRAYS
/*Tuplas têm tamanho fixo e tipos específicos por posição, uma estrutura rigida. Úteis para dados heterogêneos e ordenados, como [string, number]. Onde tenho controle rígido da entrada de dados.
Arrays têm tamanho variável úteis para lista dinâmicas.

Não é aconselhável aumentar o tamanho de uma tupla após ela ser criada, pois a principal característica da tupla é ter um tamanho e tipos fixos para cada posição. Pra tupla a exceção para aumentar seu tamanho seria um spread operator por exemplo ...string[] para uma lista incremental com elementos do mesmo tipo. O push aumenta mas pode dar erros futuros e deixar o código perdido, visto que a tupla não esperava mais dados fora os definidos originalmente.

Se você precisa de uma coleção que pode crescer ou mudar de tamanho, usar um array é a escolha mais adequada desde o início.*/

/*
ARRAY ----> let pessoa: string[] = ['oi', 'oi'];
TUPLA ----> let pessoa1: [string] = ['oi']; 
*/

/*
SPREAD OPERATOR

Quando o ... (spread operator) é usado fora da lista de parâmetros de uma função, ele desempenha o papel de espalhar os itens de um array ou de um objeto. O spread operator "desempacota" os elementos de arrays ou objetos em um contexto onde são esperados vários valores!

Spread em Arrays: Desempacota os elementos de um array para outro array ou contexto.
Spread em Objetos: Copia ou combina propriedades de objetos.
console.log() com Spread: Passa os elementos de um array ou tupla como argumentos individuais para o console.log().
Spread DENTRO de Funções(não no parametro): Passa elementos de arrays como argumentos individuais.
Rest Parameter(spread dentro do parametro da função): Captura múltiplos argumentos em uma função e os coloca em um array, mesmo que tenha só um parametro a função, caso tenha mais de um parametro o REST deve ser o ultimo de todos.  ex function nome(...nome: string[]).

 */