/*Uma interface é um contrato que define a estrutura de um objeto. Interfaces podem ser estendidas, o que permite que você crie uma nova interface que herda de uma ou mais interfaces existentes.*/

// Definindo uma interface 'Pessoa'
interface Pessoa65 {
    nome: string;
    idade: number;
    // Método opcional
    apresentar?(): void;
}

// Usando a interface 'Pessoa'
const pessoa65: Pessoa65 = {
    nome: "Alice",
    idade: 30,
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};
// Chamando o método
pessoa65.apresentar && pessoa65.apresentar();
/*O método apresentar é opcional na interface Pessoa65, como indicado pelo símbolo ?. Isso significa que, ao criar um objeto do tipo Pessoa65, você pode escolher não definir esse método.
Usando pessoa65.apresentar && pessoa65.apresentar();, você verifica primeiro se pessoa65.apresentar existe (ou seja, se não é undefined ou null). Se existir, então o método será chamado.
Com essa verificação, se apresentar não estiver definido, a parte à direita do && (ou seja, pessoa65.apresentar()) não será executada, evitando o erro. */

//Interface extensível
interface Animal65 {
    nome: string;
}

interface Cachorro65 extends Animal65 {
    raca: string;
}

const meuCachorro65: Cachorro65 = {
    nome: "Rex",
    raca: "Labrador"
};
console.log(meuCachorro65);

//Interface com IMPLEMENTS numa classe
/*
Interfaces: Você precisa declarar as propriedades no construtor da classe, pois a interface não fornece implementação nem valores padrão.

Classes Abstratas: Você pode chamar super() para passar os parâmetros ao construtor da classe pai, evitando a necessidade de declarar as propriedades novamente. 
*/
interface IAnimal65 {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}
//deve implementar todos as propriedades da interface assim como a função
class Gato65 implements IAnimal65 {
    constructor(public nome: string, public idade: number, public estaVivo: boolean) {}
    
    comer(tipoComida: string): void {
        console.log(`O ${this.nome} esta vivo ${this.estaVivo},e  come ${tipoComida}`);
    }
}
const gato65 = new Gato65("Garfield", 5, true);
gato65.comer("Carne");



/*Um type Alias é uma definição de tipo que pode ser usada para descrever a estrutura de um objeto, mas também pode ser usado para definir tipos primitivos, uniões, tuplas e muito mais. Types são mais flexíveis do que interfaces em alguns aspectos.*/

// Definindo um type alias 'Endereco'
type Endereco65 = {
    rua: string;
    cidade: string;
    cep: string;
};

// Usando o tipo 'Endereco'
const meuEndereco65: Endereco65 = {
    rua: "Av. Paulista",
    cidade: "São Paulo",
    cep: "01311-000"
};
console.log(meuEndereco65);

//Type Com Interseção
type Animal65_1 = {
    nome: string;
};

type Cachorro65_1 = Animal65_1 & {
    raca: string;
};

const meuCachorro65_1: Cachorro65_1 = {
    nome: "Rex",
    raca: "Labrador"
};
console.log(meuCachorro65_1);


/* Diferenças entre Interface e Type

Extensibilidade:
Interface: Pode ser estendida usando extends.
Type: Pode ser composto usando uniões (|) e interseções (&).

Implementação:
Interface: Pode ser implementada por classes.
Type: Não pode ser implementado, mas pode ser usado em tipos de objetos.

Possibilidade de mesclar:
Interface: Interfaces podem ser mescladas (declaradas várias vezes e mescladas automaticamente).
Type: Tipos não podem ser mesclados da mesma maneira.

Usos:
Interface: Mais adequada para definir a forma de um objeto ou classe.
Type: Mais flexível e pode ser usado para definir qualquer tipo, incluindo tipos primitivos, uniões e tuplas.*/

//INTERFACE JUNTO COM TYPES
// Definindo a interface 'Pessoa65'
interface Pessoa65 {
    nome: string;
    idade: number;
}

// Definindo o type 'PessoaFisica65' que usa a interface 'Pessoa65'
type PessoaFisica65 = Pessoa65 & {
    cpf: string; // Adicionando CPF para pessoa física
    dataNascimento: Date; // Adicionando data de nascimento
};

// Definindo o type 'PessoaJuridica65' que usa a interface 'Pessoa65'
type PessoaJuridica65 = Pessoa65 & {
    cnpj: string; // Adicionando CNPJ para pessoa jurídica
    razaoSocial: string; // Adicionando razão social
};

// Criando uma instância de 'PessoaFisica65'
const pessoaFisica65: PessoaFisica65 = {
    nome: "Alice",
    idade: 30,
    cpf: "123.456.789-00",
    dataNascimento: new Date("1993-05-15"),
};

// Criando uma instância de 'PessoaJuridica65'
const pessoaJuridica65: PessoaJuridica65 = {
    nome: "Empresa XYZ",
    idade: 10,
    cnpj: "12.345.678/0001-99",
    razaoSocial: "Empresa XYZ Ltda.",
};

// Função para exibir informações da pessoa
function exibirInformacoes65(pessoa65: Pessoa65) {
    // Verificando se é PessoaFisica65 ou PessoaJuridica65
    if ('cpf' in pessoa65) {
        // Se a propriedade 'cpf' estiver presente, trata-se de uma Pessoa Física
        const pf65 = pessoa65 as PessoaFisica65; // Fazendo um type assertion
        console.log(`Pessoa Física: ${pf65.nome}, Idade: ${pf65.idade}, CPF: ${pf65.cpf}, Data de Nascimento: ${pf65.dataNascimento.toLocaleDateString()}`);
    } else if ('cnpj' in pessoa65) {
        // Se a propriedade 'cnpj' estiver presente, trata-se de uma Pessoa Jurídica
        const pj65 = pessoa65 as PessoaJuridica65; // Fazendo um type assertion
        console.log(`Pessoa Jurídica: ${pj65.nome}, Idade: ${pj65.idade}, CNPJ: ${pj65.cnpj}, Razão Social: ${pj65.razaoSocial}`);
    } else {
        console.log("Tipo de pessoa desconhecido.");
    }
}

// Usando a função com as instâncias
exibirInformacoes65(pessoaFisica65);  // Saída: Pessoa Física: Alice, Idade: 30, CPF: 123.456.789-00, Data de Nascimento: 15/05/1993
exibirInformacoes65(pessoaJuridica65); // Saída: Pessoa Jurídica: Empresa XYZ, Idade: 10, CNPJ: 12.345.678/0001-99, Razão Social: Empresa XYZ Ltda.

/*Explicação do type assertion (as):

const pf65 = pessoa65 as PessoaFisica65;
const pj65 = pessoa65 as PessoaJuridica65;

Se a verificação anterior retornar true, o código entra no bloco do if e faz uma type assertion (as PessoaFisica65).
Isso informa ao TypeScript que você tem certeza de que pessoa65 é do tipo PessoaFisica65. Assim, você pode acessar as propriedades específicas desse tipo, como cpf e dataNascimento, sem que o TypeScript gere um erro.
Importante: A type assertion não altera o objeto em si; é apenas uma forma de informar ao TypeScript sobre a natureza do objeto, permitindo que você utilize suas propriedades com segurança.*/