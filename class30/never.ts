/*
Never: Não contém valores, não podemos atribuir valores ao tipo never. Usamos ele quando queremos representar um determinado tipo de função que sempre gera erro. Famosas Throw exceptions. Representar um tipo de valor que nunca ocorrerá.
*/
function error1(message: string): never {
    throw new Error(message);
}
console.log(error1('Mensagem de erro - 01'));


/*
const loop = function loop() {
    while(true) {
        console.log('Mureno');
    }
}
console.log(loop());

Exemplo de função que é atribuida automaticamente como never, pois ela nunca ira parar e nunca teremos um retorno dela
*/

/*VOID VS NEVER

void:
Uma função é tipada como void quando ela não retorna nenhum valor significativo, mas completa sua execução normalmente.
Isso significa que, embora a função não tenha um valor de retorno, ela pode terminar sem problemas.

never:
never é utilizado quando o TypeScript sabe que uma função nunca vai completar sua execução. Isso ocorre em dois cenários principais:
Quando a função lança uma exceção e, portanto, nunca chega ao fim.
Quando a função entra em um loop infinito ou faz algo que impede o código de continuar normalmente.*/

