//Classes com operador rest, instanciamos e podemos usar as funções criadas dentro da classe.
//Toda classe em TS por padrão é publica, logo n precisa da palavra reservada public
class Produtos49 {
    public exibirProdutos49(...produtos: string[]) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInfo: Produtos49 = new Produtos49();
console.log('Produtos em estoque:');
departamentoInfo.exibirProdutos49('Mouse', 'Teclado', 'Monitor', 'Headset');

//EX 01 classes
class Pessoa49 {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto49(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa49 = new Pessoa49('Igor', 'Artus');
console.log(pessoa49.nomeCompleto49());

//EX 02 sem construtor, não recomendado usar o (!), ele é nós dizendo ao TS que garantimos a incialização da variável corretamente.
class Estudante49 {
    codigoEstudante!: number;
    nomeEstudante!: string;
}

const estudante49 = new Estudante49();
estudante49.codigoEstudante = 1;
estudante49.nomeEstudante = 'Igor';
console.log(estudante49.codigoEstudante);
console.log(estudante49.nomeEstudante);

//exemplo 03 com construtor
class Estudante49_1 {
    codigoEstudante!: number;
    nomeEstudante!: string;
    
    constructor(codifoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codifoEstudante;
        this.nomeEstudante = nomeEstudante;   
    }
    listarEstudante49_1(): void {
        console.log(this.codigoEstudante);
        console.log(this.nomeEstudante);
    }
}
const estudante49_1 = new Estudante49_1(2, 'Artus');
estudante49_1.listarEstudante49_1();