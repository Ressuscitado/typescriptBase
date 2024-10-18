/*
Null: Ausência intencional de valor, vazio ou inexistente. É interpretado como objeto. Null é convertido a 0 em operações primitivas.
Indica a ausência de um valor para uma variável.
*/
let variavelTeste = null;
console.log(variavelTeste);//Saida --> null
console.log(typeof(variavelTeste));//Saida --> object

/*Undefined: Variáveis que não são inicializadas. É interpretado como um tipo. Undefined é convertio a NaN(not a number) em operações primitivas.
Indica a ausência da própra variável.
*/
//o ts entende implicitamente que é undefined ao usar a variável não inicializada
let variavelTeste2;
console.log(variavelTeste2);//Saida --> undefined
console.log(typeof(variavelTeste2));//Saida --> undefined


// Null VS Undefined
console.log(variavelTeste == variavelTeste2);//Saida --> true
console.log(variavelTeste === variavelTeste2);//Saida --> false