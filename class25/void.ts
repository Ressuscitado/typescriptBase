/*
Void é o oposto de ANY, ele não retorna nada
Usado em funções, para ser usado em variáveis o "strictNullChecks"
deve estar desabilitado no tsconfig.json, assim da pra dar o tipo void  e o resultado como null.
*/
//Função Void implicita(não tem return) e se tiver funciona o return serve só para parar a função
function semRetorno() {
    console.log('Funcionou');
}
//Função Void explicita
function semRetorno2():void {
    console.log('Funcionou');
}
//função string implicita
function comRetorno() {
    return 'Funcionou';
}
