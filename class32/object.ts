/*
Object: Representa valores que não são primitivos.
Primitivos --> number, string, boolean, bigint, symbol, null, undefined
Object é a melhor forma de representar dados. Podem ser anônimos ou nomeados

objetc(minusculo) --> Qualquer valor que não seja primitivo.
Object(maiusculo) --> A funcionalidade disponível em todos os objetos.
{}(vazio) --> Objeto que não possui propriedade própria.*/

//EX 01, uso basico de object
let pessoaIgor = {
    nome: 'Igor',
    idade: 26,
    profissao: 'Software Engineer'
};
console.log(pessoaIgor);

//EX 02, object como parametros de função
function onboarding(funcionario: { nome: string }) {
    return `Ola ${funcionario.nome}`;
}
console.log(onboarding({ nome: 'Igor Artus'}));

//EX 03, object nomeados
interface Pessoa {
    nome: string;
    funcao: string;
};

function onboarding2(pessoa: Pessoa) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}!`;
};
console.log(onboarding2({ nome: 'Igor Artus', funcao: 'Software Engineer'}));

//EX 04, object com type alias
type PessoaIgor = {
    nome: string;
    funcao: string;
    linguagem: string;
};
function onboarding3(pessoa: PessoaIgor) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}!`;
};
console.log(onboarding3({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript'}));

//EX 05, object com optional(?)
interface Pessoa2 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;//optional
};
function onboarding4(pessoa: Pessoa2) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}!`;
};
console.log(onboarding4({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript'}));

//EX 06, propriedade READONLY
/*O modificador readonly em TypeScript faz com que a propriedade seja somente leitura, ou seja, ela pode ser atribuída apenas no momento da criação do objeto ou na inicialização da propriedade, e não pode ser modificada posteriormente.

interface Pessoa3 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;
};
let pessoa: Pessoa3 = { nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript', email: 'a@a.com' };

Isso vai funcionar:
pessoa.nome = 'Outro Nome'; // Ok
pessoa.linguagem = 'JavaScript'; // Ok

Isso causaria um erro:
pessoa.email = 'b@b.com'; // Erro: Cannot assign to 'email' because it is a read-only property.

O readonly garante que a propriedade não possa ser modificada depois de ser definida, o que pode ser útil em casos onde você quer garantir a imutabilidade de certos dados no objeto, como o email neste caso.
*/
interface Pessoa3 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string;//aplicando o readonly
};
function onboarding5(pessoa: Pessoa3) {
    return `Ola ${pessoa.nome}, sua função é ${pessoa.funcao}! Linguagem: ${pessoa.linguagem}! Seu email é: ${pessoa.email}`;
};
console.log(onboarding5({ nome: 'Igor Artus', funcao: 'Software Engineer', linguagem: 'TypeScript', email: 'a@a.com'}));

//EX 07, tipos de extensões (heranças)
interface Mae {
    nome: string;
};

interface Pai {
    sobrenome: string;
};

interface Filho extends Mae, Pai {
    idade: number;

};

const filho: Filho = {
    nome: 'Igor',
    sobrenome: 'Artus',
    idade: 26
}
console.log(filho);

//EX 08, Tipos de interseções
interface Cachorro {
    tipo: string;
};
interface Gato {
    tipo: string;
};

type Animal = Cachorro & Gato;

//EX 09, objetos GENERICS <T>, essa é a forma que fazemos normalmente, pode ser qualquer letra, mas normalmente é com o T maiusculo dentro do <>.
type Usuario = {
    nome: string;
    email: string;
};
type Admin = {
    nome: string;
    email: string;
    admin: true;
};
//objeto
const usuario: Usuario = {
    nome: 'Igor Artus',
    email: 'a@a.com'
};
//objeto
const admin: Admin = {
    nome: 'Igor Artus',
    email: 'a@a.com',
    admin: true
};

//usando o GENERICS<T>, estou falando que a função vai aceitar as informações tanto de usuario quanto de admin.
function acessarSistema22<T>(userqualquer: T): T {
    return userqualquer;
};
//Passando objetos diferentes e com types diferentes
console.log(acessarSistema22<Usuario>(usuario));
console.log(acessarSistema22<Admin>(admin));


/*function acessarSistema5(usuario: Usuario): Usuario {
    return usuario;
};
console.log(acessarSistema5(usuario));*/


/*export {} é usada para sinalizar que o arquivo é um módulo. Ao usar TypeScript ou JavaScript em modo de módulos (ECMAScript modules), qualquer arquivo que contenha uma instrução export ou import é tratado como um módulo, o que isola seu escopo e impede variáveis, funções e classes de serem acessíveis globalmente.*/

/*
No TypeScript, quando estamos declarando tipos (como um type ou uma interface), o separador entre as propriedades pode ser tanto vírgula quanto ponto e vírgula, e ambos funcionarão corretamente:
type Pessoa = {
    nome: string;        // Ponto e vírgula é permitido em anotações de tipo TypeScript
    idade: number;
    profissao: string;
};

// ou

type Pessoa2 = {
    nome: string,
    idade: number,
    profissao: string,
};
*/