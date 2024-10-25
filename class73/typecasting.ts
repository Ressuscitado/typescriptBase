/*Type Casting (as) <> / type assertion
O operador as no TypeScript é usado para realizar type casting/type assertion, ou seja, "forçar" o compilador a interpretar uma variável como um tipo específico. Ele é útil quando sabemos que um valor73_1 terá um certo tipo, mas o TypeScript não consegue inferi-lo automaticamente. 

O as ajuda a contornar limitações de inferência do TypeScript, mas deve ser usado com CAUTELA, já que ele "ignora" a verificação rigorosa de tipos, podendo levar a erros em tempo de execução se usado incorretamente, ele NÃO muda o tipo de dado, apenas permite que o compilador interprete o valor como um tipo específico.

IMPORTANTE:  Type casting é mais comum em outras linguagens de programação, onde pode envolver uma conversão REAL de valor. Dendo que o Type assertion nessas outras linguagens de programação não envolve uma conversão real de valor e essa seria a diferenças entre eles. Mas no TYPESCRIPT não tem diferença, em todos os casos casting ou assetion, ele não faz a conversão real de valor, ele apenas força o compilador a interpreta o valor como um tipo específico. Por isso é intercambiável os nomes em TS.

Por isso o ideal é chamar TYPE ASSERTION em vez de casting. Pois é oq o TS faz.*/

let valor73_173: any = "Olá, TypeScript!";
let comprimento73: number = (valor73_173 as string).length;

console.log(comprimento73); // Saída: 16

/* Type casting/type assertion (as) usando o <> angle bracket
O operador de type casting em TypeScript também pode ser feito com a sintaxe <> (conhecida como angle bracket), que é uma alternativa ao as. Aqui está um exemplo simples usando <> para conversão de tipos:*/
let valor73_1: any = "Olá, TypeScript!";
let comprimento73_1: number = (<string>valor73_1).length;

console.log(comprimento73_1); // Saída: 16

/*Um exemplo que não daria erro devido ao as <>, pois o length retorna um numero, mesmo que a operação seja em torno de uma string */
const carro73: unknown = 'Corolla';
const tamanhoString73: number = (<string>carro73).length;
console.log(`O tamanho da string é ${tamanhoString73}`);
console.log(tamanhoString73);

/*Cenários que usamos o as <> type casting / type assertion

1-Trabalhar com tipos amplos ou desconhecidos (any ou unknown): Quando uma variável tem um tipo amplo ou desconhecido, o type casting ajuda a tratá-la como um tipo específico para acessar suas propriedades ou métodos.

let valor: any = "texto";
let comprimento: number = (valor as string).length;

2-Manipular elementos DOM: Ao acessar elementos HTML pelo document.getElementById, é comum usar type casting / type assertion para especificar o tipo do elemento (como HTMLInputElement) e acessar suas propriedades.

const entrada = document.getElementById("inputId") as HTMLInputElement;

3-Converter entre interfaces compatíveis: Se duas interfaces compartilham algumas propriedades, é possível usar type casting / type assertion para tratá-las como o mesmo tipo.

interface Usuario { nome: string; idade: number; }
interface Cliente { nome: string; idade: number; idCliente: string; }
let usuario: Usuario = { nome: "João", idade: 30 };
let cliente = usuario as Cliente;


Diferença entre as<> e Alias

as: É um operador de type casting / type assertion que informa ao compilador que você está ciente do tipo da variável e deseja tratá-la como um tipo específico. Por exemplo:

let valor: any = "Texto";
let comprimento: number = (valor as string).length;


Alias de Tipo: É uma maneira de dar um nome a um tipo. Isso é feito usando a palavra-chave type ou interface. Por exemplo:

type Usuario = {
    nome: string;
    idade: number;
};

const usuario: Usuario = {
    nome: "João",
    idade: 30,
};


--> O as é usado para converter tipos e garantir que o compilador trate uma variável como um tipo específico, mas não muda seu tipo realmente.

--> Aliases são usados para definir novos tipos ou interfaces com nomes personalizados.*/



