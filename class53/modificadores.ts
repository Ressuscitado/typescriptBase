/*Public é o padrão que todas classes tem, pode ser acessado por todos, 
Private só pode ser acessado dentro da classe, 
Protected pode ser acessado dentro da classe e nas classes filhas.*/

//Modificador public
class Estudante53 {
    codigo: number;
    nome: string;

    constructor(codigo: number, nome: string) {
        this.codigo = codigo;
        this.nome = nome;
    }
}
const estudante53 = new Estudante53(1, 'Igor Artus');
console.log(estudante53.codigo);
console.log(estudante53.nome);

//Modificador private, só pode ser acessada pela classe principal.
class Estudante53Privado {
    codigo: number;
    nome: string;
    private idade: number;

    constructor(codigo: number, nome: string, idade: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }
    retornarDados53() {
        return [this.codigo, this.nome, this.idade];
    }
}
const estudante53Privado = new Estudante53Privado(1, 'Igor Artus', 26);
console.log(estudante53Privado.retornarDados53());//aqui mostra a idade certinho.
//console.log(estudante53Privado.idade); aqui se tentarmos acessar diretamente vai dar erro.

//Modificador protected
class Estudante53Protected {
    codigo: number;
    nome: string;
    protected idade: number;

    constructor(codigo: number, nome: string, idade: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.idade = idade;
    }
}
class Estudante53ProtectedExt extends Estudante53Protected {
    //perceba que acessamos normalmente o atributo protected aqui "idade".
    private curso: string;

    constructor(codigo: number, nome: string, idade: number, curso: string) {
        super(codigo, nome, idade);
        this.curso = curso;
    }
    retornarDados53() {
        return [this.codigo, this.nome, this.idade, this.curso];
    }
}

const Estudante53ProtectedExt1 = new Estudante53ProtectedExt(2, 'protected', 26, 'engenharia');
console.log(Estudante53ProtectedExt1.retornarDados53());
//console.log(Estudante53ProtectedExt1.idade); Daria erro, pois só pode ser acessada diretamente
//dentro da classe pai e filha, não fora delas.

//Ex modificador READONLY, ela é definida apenas no momento da sua instanciação. 
//Após isso não conseguimos mais mudar nada dela.

class Funcionario53 {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}
//conseguimos dar uma data de nascimento normalmente
const funcionario53 = new Funcionario53(new Date(1995, 11, 17));
console.log(funcionario53.dataNascimento);
//funcionario53.dataNascimento = new Date(1996, 11, 17); aqui daria erro ao tentar dar outra data
//Para conseguir só instanciando outra variavel, a mesma não daria para sobrescrever.
const funcionario53_1 = new Funcionario53(new Date(2000, 12, 20));
console.log(funcionario53_1.dataNascimento);

//EX modificador Readonly com um unico elemento, quando tem só um elemento podemos definir diretamente no construtor.
class funcionario53_2 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}
//EX modificador Readonly com mais de um elemento
class funcionario53_3 {
    nome: string;
    readonly codigoFunc: number;

    constructor(nome: string, codigo: number) {
        this.nome = nome;
        this.codigoFunc = codigo;
    }
}
const func53 = new funcionario53_3('Igor', 1);
console.log(func53);
func53.nome = 'Igor Artus';//tudo certo mudar pois n é readonly
//func53.codigoFunc = 2; Daria erro pois não posso mudar o readonly
console.log(func53);

//Ex usando uma Interface publica e depois transformando em readonly
interface Ifuncionario53 {
    codigoFuncionario: number;
    nomeEmpregado: string;
}
const funcionario53_4: Readonly<Ifuncionario53> = {
    codigoFuncionario: 30,
    nomeEmpregado: 'Mokona'
}
//funcionario53_4.nomeEmpregado = 'Igor'; Daria erro pois ja definimos como READONLY.
console.log(funcionario53_4);
//aqui sem o modificador readonly, podemos mudar normalmente
const funcionario53_5: Ifuncionario53 = {
    codigoFuncionario: 40,
    nomeEmpregado: 'Tedy'
}
funcionario53_5.nomeEmpregado = 'Igor';
funcionario53_5.codigoFuncionario = 50;
console.log(funcionario53_5);

//EX usando TYPE, transformando em readonly, perceba também que podemos criar o type, e ainda 
//dar outro type para o type ja criado: Readonly<Funcionario53_6>
//dar um tipo a um tipo.
type Funcionario53_6 = {
    codigoFuncionario: number;
    nomeEmpregado: string;
};

const funcionario53_6: Readonly<Funcionario53_6> = {
    codigoFuncionario: 30,
    nomeEmpregado: 'Mokona'
};

// Isso causaria um erro, pois o objeto é somente leitura
// funcionario53_4.codigoFuncionario = 40;  // Erro!

