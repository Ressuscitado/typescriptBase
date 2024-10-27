/* Mapped Types (Partial, Omit, Readonly...etc)
Pode ser usado com tipo e interface,
O foco seria não ficar repetindo código, por exemplo:
interface Pessoa79 {
    nome: string;
    idade: number;
    email: string;
}
type PessoaOpcional79 = {
    nome?: string;
    idade?: number;
    email?: string;
}
Perceba que no exemplo temos um tipo com as mesmas propriedades da interface, não vamos associar a interface ao tipo pois se fizermos assim o tipo não poderia ser opcional, pois ele deveria implementar todas as propriedades da interface, , nesses casos para não ter que ficar digitando cada uma das propriedades, e colocando o ? podemos usar o Mapped Types, conforme abaixo:
*/

interface Pessoa79 {
    nome: string;
    idade: number;
    email: string;
}
//aqui abaixo ele faz um loop for de todas chaves das propriedades da interface e ainda sendo opcionais(?), tudo isso numa linha.
type PessoaOpcional79 = {
    [P in keyof Pessoa79]?: Pessoa79[P];//Mapped Type
/*o correto seria usar o PARTIAL 
type PessoaOpcional79 = Partial<Pessoa79>;
Ele faz literalmente oq fizemos ali só que melhor, o exemplo acima é só para entendermos como funciona por baixo dos panos */
}
const pessoa79: Pessoa79 = {
    nome: 'Artus',
    idade: 20,
    email: 'a@a.com'
}
const pessoaOpcicional79: PessoaOpcional79 = {
    nome: 'Artus'
}
console.log(pessoaOpcicional79);

//Ex usando PARTIAL Mapped Type, que é mais recomendado pois já é nativo do TS sem ter que fazer aquele loop for dentro.
interface Pessoa79_ {
    nome: string;
    idade: number;
    email: string;
}
type PessoaOpcional79_ = Partial<Pessoa79_>;
//PARTIAL torna todas as propriedades de um tipo ou interface opcionais.
const pessoa79_: Pessoa79_ = {
    nome: 'Artus',
    idade: 20,
    email: 'a@a.com'
}
const pessoaOpcicional79_: PessoaOpcional79_ = {
    nome: 'Artus'
}
console.log(pessoaOpcicional79_);

//Exemplo usando Omit mapped type, que omite uma propriedade ou mais de uma de uma interface ou tipo. 
interface Funcionario79 {
    nome: string;
    idade: number;
    email: string;
    cargo: string;
}
type FuncionarioOpcional79 = Omit<Funcionario79, 'cargo' | 'email'>;
const funcionario79: FuncionarioOpcional79 = {
    nome: 'Artus',
    idade: 20,
}
console.log(funcionario79);
//Ex readonly mapped tyṕe que faz com que após dar um valor a propriedade não pode mais ser alterada

type exemploRead79 = {
    nome: string;
    idade: number;
    email: string;
    cargo: string;
}
//aqui nós demos o readonly a todas as propriedades daquele tipo acima.
type exemploRead79_ = Readonly<exemploRead79>;
const exemploRead79_1: exemploRead79_ = {
    nome: 'Artus',
    idade: 20,
    email: 'a@a.com',
    cargo: 'Developer'
}
//Daria erro pois virou readonly, 
//exemploRead79_1.cargo = 'programmer';