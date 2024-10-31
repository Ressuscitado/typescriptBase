/*Generic Constraints
--> Permitem trabalhar com todo e qualquer tipo de dado
--> Podemos restringir certos tipos usando constraints
--> Palavra chave Extends
--> As constraints são úteis quando queremos que a função trabalhe com tipos genéricos, mas queremos garantir que esses tipos cumpram certos requisitos.*/

interface Pessoa84 {
    nome: string;
    idade: number;
}
/*O tipo T é genérico e pode representar qualquer tipo, mas a constraint T extends Pessoa84 restringe T para aceitar apenas tipos que tenham, no mínimo, as propriedades de Pessoa84. Ou seja, qualquer tipo/interface/const/let que for passado para obterPessoaMaiorIdade84 precisa ter as propriedades nome: string e idade: number.*/
function obterPessoaMaiorIdade84<T extends Pessoa84>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas84: Pessoa84[] = [
    { nome: 'Igor', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Joaquim', idade: 30 },
    { nome: 'Ana', idade: 36 }
];
const pessoa25Maior84 = obterPessoaMaiorIdade84(pessoas84, 25);
console.log(...pessoa25Maior84);

//outro exemplo de constraints
interface Produto84 {
    nome: string;
    preco: number;
}

function adicionarProdutoAoCarrinho84<T extends Produto84, U extends number>(produto84: T, quantidade84: U) {
    return {
        produto84,
        quantidade84,
        total84: produto84.preco * quantidade84,
    };
}

const produto84 = { nome: 'Camiseta', preco: 30 };
const carrinho84 = adicionarProdutoAoCarrinho84(produto84, 3);
console.log(carrinho84);

/*OBS:
Ao declarar <T> uma única vez (por exemplo, <T>(numero: T, string: T)), o TypeScript interpreta que todos os parâmetros de tipo T devem ser do mesmo tipo. Com isso, o tipo T não se adaptaria a cada parâmetro separadamente; em vez disso, ele espera que ambos sejam do mesmo tipo em qualquer chamada específica da função.

Quando queremos mais de uma opção genérica para um parâmetro, podemos usar o <T, U>(item: T, item2: U). Assim ele pode assumir 
sempre 2 tipos diferentes.*/

//Podemos restringir um Genereic por outro Genereic
function prop84<T, K extends keyof T>(obj: T, chave84: K) {
    return obj[chave84];
}
const pessoa84_ = { nome: 'Igor', idade: 23 };
const nome84 = prop84(pessoa84_, 'nome');
console.log(nome84);