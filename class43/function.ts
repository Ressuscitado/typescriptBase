//function padrão
function somar43(a: number, b: number): number {
    return a + b;
}
console.log(somar43(2, 3));

//Function anônima
const somar43anonima = function (a: number, b: number): number {
    return a + b;
}
console.log(somar43anonima(3, 3));

//Function arrow
const saudar43 = (nome: string) => {
    return `Ola ${nome}`;
}
console.log(saudar43('Igor'));
//Function arrow em 1 linha
const saudar43umalinha = (nome: string) => `Ola ${nome}`;
console.log(saudar43umalinha('Igor'));

//Function com construtor
const saudar43construtor = new Function('nome', 'return `Ola ${nome}`');
console.log(saudar43construtor('Igor'));

//Function com optional parameter (?)
//Os parametro opcionais devem estar po ultimo, se eles não receberem arghumento, eles ficam como undefined
function pessoa43(nome: string, idade: number, email?: string) {
    console.log(`Ola Nome: ${nome}, vc tem Idade: ${idade}`);

    if (email !== undefined) {
        console.log(`E seu email: ${email}`);
    }
}
pessoa43('Igor', 25);//2 argumentos
pessoa43('Igor', 25, '4lGv0@example.com'); // 3 argumentos

////Function com optional parameter (?) exemplo 02
function log43(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleDateString();
    console.log(horaLog, mensagem, usuarioId || 'Nenhum usuário logado'); //perceba uso do OU ||
}

log43('Login efetuado', 3);
log43('Login efetuado');

//Function com TYPE usando o rest parameter (...)
/*
Pessoa43type não é um array, é um objeto com as propriedades nome, idade, e email. Mas quando você usa o rest parameter (...pessoa: Pessoa43type[]), você está dizendo que a função pode receber vários objetos do tipo Pessoa43type, e o rest parameter irá agrupar todos esses argumentos em um array de Pessoa43type. O rest parameter sempre trabalha com arrays.
*/
type Pessoa43type = {
    nome: string;
    idade?: number;
    email?: string;
}
function pessoa43type(...pessoa: Pessoa43type[]): Pessoa43type[] {
    return pessoa;
}
const pessoa430: Pessoa43type = { nome: "Igor", idade: 30, email: "igor@example.com" };
const pessoa4300: Pessoa43type = { nome: "Maria" };

const result = pessoa43type(pessoa430, pessoa4300);
console.log(result);

//function com rest parameter com o type padrão number
function somarNumeros43(...numeros: number[]): number {
    let total = 0;
    numeros.forEach(numero => total += numero);
    return total;
}
console.log(somarNumeros43(1, 2, 3, 4, 5));
console.log(somarNumeros43(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//Function com default parameter
/*
Caso o usuário na chamada da função não passe um argumento, podemos deixar um valor padrão para aquele parametro. Assim como o rest o default por convenção deve vir ao final de todos os parametros. */

function desconto43(preco: number, desconto: number = 0.08): number {
    return preco * (1 - desconto);//lógica de desconto
}
//cuidado pois posso passar manualmente um desconto fora do padrão
console.log(desconto43(100, 0.15));
console.log(desconto43(100));

//Function com default parameter exemplo 02
function exibirMsg43(nome: string, msg: string = 'Ola amado') {
    return `${msg} ${nome}`;
}
console.log(exibirMsg43('Igor'));
console.log(exibirMsg43('Igor', 'Bom dia'));


