"use strict";
function obterPessoaMaiorIdade84(pessoas, idade) {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}
const pessoas84 = [
    { nome: 'Igor', idade: 23 },
    { nome: 'Maria', idade: 18 },
    { nome: 'Joaquim', idade: 30 },
    { nome: 'Ana', idade: 36 }
];
const pessoa25Maior84 = obterPessoaMaiorIdade84(pessoas84, 25);
console.log(...pessoa25Maior84);
function adicionarProdutoAoCarrinho84(produto84, quantidade84) {
    return {
        produto84,
        quantidade84,
        total84: produto84.preco * quantidade84,
    };
}
const produto84 = { nome: 'Camiseta', preco: 30 };
const carrinho84 = adicionarProdutoAoCarrinho84(produto84, 3);
console.log(carrinho84);
function prop84(obj, chave84) {
    return obj[chave84];
}
const pessoa84_ = { nome: 'Igor', idade: 23 };
const nome84 = prop84(pessoa84_, 'nome');
console.log(nome84);
