//Ex de uma classe filha herdando da classe pai (extends).
class Animal59 {
    mover(distancia = 0) {
        console.log(`Animal andando ${distancia}m`);
    }
}
class Cachorro59 extends Animal59 {
    latir() {
        console.log('Au au');
    }
}
const cachorro59 = new Cachorro59();
cachorro59.latir();
cachorro59.mover(10);

/*Ex 02, Quando você usa modificadores de acesso (private, public, protected) nos parâmetros do construtor, TypeScript automaticamente cria as propriedades da classe e as inicializa com os valores passados para o construtor. Isso elimina a necessidade de declarar explicitamente as variáveis antes do construtor e atribuí-las dentro dele
class Pessoa59 {
    // As propriedades 'nome' e 'sobrenome' são automaticamente criadas e inicializadas
    constructor(private nome: string, private sobrenome: string) {
        // Atribuição implícita, não é necessário fazer essa atribuição manualmente do this abaixo, o TS infere isso automaticamente
        // this.nome = nome;
        // this.sobrenome = sobrenome;
    }
usar parâmetros do construtor com modificadores de acesso, como public, private, ou protected, é uma prática bastante comum e recomendada em TypeScript. Ela simplifica o código, reduz a repetição e torna o código mais conciso e fácil de manter.

Precisamos sempre colocar o tipo de modificador, PUBLIC, PRIVATE ou PROTECTED, mesmo que o modificador for ser PUBLIC se eu não colocar ele o TS não entende que ele sera uma variavel fora do parametro do construtor, ele ira pensar que é um parametro usado só dentro dele. Por isso quando não definimos explicitamente a variável e vamos fazer isso no construtor, SEMPRE devemos colocar o modificador mesmo sendo PUBLIC.
*/
class Pessoa59 {
    //usando parâmetros de acesso do construtor, ele cria a variavel 'nome' e 'sobrenome' e ainda faz o this implicitamente.
    constructor(private nome: string, private sobrenome: string) {}

    retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa(): void {
        console.log(`Ola, eu sou ${this.retornarNomeCompleto()}`);
    }
}

class Funcionario59 extends Pessoa59 {
    constructor(nome: string, sobrenome: string, private funcao: string) {
        super(nome, sobrenome);
        /*O super é usado em uma subclasse para chamar o construtor da classe pai (superclasse). Ele é obrigatório quando uma classe filha herda de outra classe e você deseja garantir que o construtor da classe base seja chamado, passando os parâmetros necessários. 
        Mas e o private com super?
Quando você usa super dentro de uma classe filha, o que está acontecendo é que você está chamando o construtor da classe base, onde a variável privada foi definida. O construtor da classe pai é responsável por inicializar as propriedades (incluindo as private), e por isso ele consegue manipular essas variáveis privadas. O super não "autoriza" o acesso direto a variáveis privadas. O que acontece é que o construtor da classe pai, ao ser chamado via super, é responsável por inicializar essas variáveis*/
    }
    retornarNomeCompleto_02(): string {
        return `${super.retornarNomeCompleto()} - ${this.funcao}`;
    }
}
const funcionario59 = new Funcionario59('Guilherme', 'Artus', 'Desenvolvedor');
funcionario59.apresentarPessoa();
funcionario59.retornarNomeCompleto();
console.log(funcionario59.retornarNomeCompleto_02());

/*Usando o super na classe filha Funcionario59 para inicializar as propriedades nome e sobrenome, que são privadas na classe pai Pessoa59. Como está chamando os métodos da classe pai (retornarNomeCompleto() e apresentarPessoa()) na classe filha, ainda temos acesso às informações privadas de forma indireta.*/