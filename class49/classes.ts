//Classes com operador rest, instanciamos e podemos usar as funções criadas dentro da classe.
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