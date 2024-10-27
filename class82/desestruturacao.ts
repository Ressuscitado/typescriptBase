/* Desestruturação de Objetos
A desestruturação no TypeScript (assim como no JavaScript) permite que você "extraia" propriedades de um objeto ou elementos de um array e os trate como variáveis independentes.*/
const pessoa82 = {
    nome82: "Alice",
    idade82: 30,
    cidade82: "São Paulo"
};

// Desestruturando o objeto
const { nome82, idade82, cidade82 } = pessoa82;

console.log(nome82); // "Alice"
console.log(idade82); // 30
console.log(cidade82); // "São Paulo"

/*Usando Alias
Você pode renomear variáveis durante a desestruturação.*/
const pessoa82_ = {
    nome82_: "Alice",
    idade82_: 30
};

// Usando alias
const { nome82_: nomePessoa82, idade82_: idadePessoa82 } = pessoa82_;

console.log(nomePessoa82); // "Alice"
console.log(idadePessoa82); // 30

/*Desestruturação com Valores Padrão
Se uma propriedade não existir, você pode fornecer um valor padrão.*/
type Pessoa821 = {
    nome821: string;
    idade821?: number; // Propriedade opcional
};

const pessoa821: Pessoa821 = {
    nome821: "Alice"
};

// Desestruturando o objeto com valor padrão
const { nome821, idade821 = 25 } = pessoa821;

console.log(nome821); // "Alice"
console.log(idade821); // 25 

/*Desestruturação de Arrays
Exemplo Básico*/
const numerosDes82 = [1, 2, 3, 4, 5];

// Desestruturando o array
const [primeiroDes82, segundoDes82, terceiroDes82] = numerosDes82;

console.log(primeiroDes82); // 1
console.log(segundoDes82); // 2
console.log(terceiroDes82); // 3

//ignorando elementos
const numerosIgnorar82 = [1, 2, 3, 4, 5];

// Ignorando o primeiro e o segundo elementos
const [, , terceiroIgnorar82, quartoIgnorar82] = numerosIgnorar82;

console.log(terceiroIgnorar82); // 3
console.log(quartoIgnorar82); // 4

/*Usando Rest Operator/spread*/
const numerosRest82 = [1, 2, 3, 4, 5];

// Coletando o restante dos elementos
const [primeiroRest82, ...restoRest82] = numerosRest82;

console.log(primeiroRest82); // 1
console.log(restoRest82); // [2, 3, 4, 5]

/*Desestruturação em Parâmetros de Função
Exemplo com Objetos*/

/*Quando você cria um objeto TS com const, let, ou var, o separador entre as propriedades deve ser uma vírgula (,) e não um ponto e vírgula. Pois são identicos os JavaScript, não estamos aplicando tipagem, nesse contexto sem tipagem nem interface PRECISAMOS usar virgulas*/
const usuarioFunc82 = {
    idFunc82: 1,
    nomeFunc82: "Alice",
    emailFunc82: "alice@example.com"
};

// Desestruturando diretamente nos parâmetros
/*No caso dos parâmetros de função, essa estrutura não é um objeto real js; é uma anotação de TIPO do TypeScript aplicada para definir o formato esperado do argumento. O TypeScript permite essa anotação de tipo nos parâmetros para validar a estrutura do objeto que será passado na chamada da função. Como as anotações de tipo/interface permitem o uso de ponto e vírgula (;) entre propriedades, isso se torna válido dentro dos parâmetros de função*/
function mostrarUsuarioFunc82({ nomeFunc82, emailFunc82 }: { nomeFunc82: string; emailFunc82: string }) {
    console.log(`Nome: ${nomeFunc82}, Email: ${emailFunc82}`);
}

mostrarUsuarioFunc82(usuarioFunc82); // "Nome: Alice, Email: alice@example.com"
/*
Definição da Função
function mostrarUsuarioFunc82(...): Aqui você está definindo uma função chamada mostrarUsuarioFunc82.
2. Parâmetro Desestruturado
({ nomeFunc82, emailFunc82 }: { nomeFunc82: string; emailFunc82: string })

{ nomeFunc82, emailFunc82 }: Este é um exemplo de desestruturação de objeto. Os {} estão dizendo que a função espera receber um objeto e, em vez de passar esse objeto completo, você pode passar apenas suas propriedades diretamente.
Desestruturação: Ao usar a desestruturação, você está extraindo as propriedades nomeFunc82 e emailFunc82 do objeto que será passado como argumento. Isso permite que você use essas propriedades diretamente no corpo da função, sem precisar referenciá-las pelo objeto.
:: Esse símbolo é usado para anotação de tipo em TypeScript. Ele indica que o que vem a seguir é o tipo do parâmetro. No caso, a parte que vem após os : define que o objeto que está sendo desestruturado deve ter as propriedades nomeFunc82 e emailFunc82, ambas do tipo string.

{ nomeFunc82: string; emailFunc82: string }: Isso é a definição do tipo do parâmetro desestruturado. Ele especifica que a função espera receber um objeto que deve conter duas propriedades:

nomeFunc82: deve ser do tipo string.
emailFunc82: deve ser do tipo string. 

Estrutura da Anotação de Tipo
Quando você define um tipo de objeto em TypeScript, você pode usar duas formas para separar as propriedades dentro de um tipo, ponto e virgula (;) ou só virgula (,):

Usando ponto e vírgula (;):
Este é um formato mais comum quando você está declarando múltiplas propriedades em um tipo. O ponto e vírgula serve para separar as declarações de cada propriedade.
Exemplo:

{ nomeFunc82: string; emailFunc82: string }
Aqui, você está dizendo que o objeto deve ter duas propriedades: nomeFunc82 do tipo string e emailFunc82 também do tipo string. Cada uma dessas declarações é separada por ponto e vírgula.
Usando vírgula (,):

Você também pode usar vírgulas para separar as propriedades. Isso é uma questão de preferência, e ambos os métodos são válidos.
Exemplo:

{ nomeFunc82: string, emailFunc82: string }
Este exemplo é equivalente ao anterior e seria perfeitamente válido.

Por que usar ponto e vírgula?

Clareza: Algumas pessoas preferem usar ponto e vírgula por questões de clareza, especialmente em objetos que podem ter muitos campos. O ponto e vírgula pode ajudar a destacar melhor o final de uma declaração de propriedade.

Consistência: Em outras partes do TypeScript (como em interfaces ou tipos complexos), é comum usar ponto e vírgula. Isso ajuda a manter um estilo consistente ao escrever código.*/

/*Exemplo com Arrays*/
const numerosFunc82 = [10, 20, 30];

// Desestruturando diretamente nos parâmetros
function somarFunc82([aFunc82, bFunc82]: number[]) {
    return aFunc82 + bFunc82;
}
console.log(somarFunc82(numerosFunc82)); // 30


/*Desestruturação de Objetos Aninhados*/
const pessoaAninhada82 = {
    nomeAninhada82: "Alice",
    enderecoAninhada82: {
        cidadeAninhada82: "São Paulo",
        estadoAninhada82: "SP"
    }
};

// Desestruturando objeto aninhado
const { nomeAninhada82, enderecoAninhada82: { cidadeAninhada82, estadoAninhada82 } } = pessoaAninhada82;

console.log(nomeAninhada82); // "Alice"
console.log(cidadeAninhada82); // "São Paulo"
console.log(estadoAninhada82); // "SP"



