"use strict";
class Produtos49 {
    exibirProdutos49(...produtos) {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}
const departamentoInfo = new Produtos49();
console.log('Produtos em estoque:');
departamentoInfo.exibirProdutos49('Mouse', 'Teclado', 'Monitor', 'Headset');
