/*
Any: O TS não verifica o tipo de dado, pode dar erro.
Unknown: O TS verifica o tipo de dado, mesmo inicialmente não sabendo. Quando não sabemos realmente o tipo de dado o ideal é utilizar o unknown.
*/
let valorVariavel: unknown;
valorVariavel = 3;
valorVariavel = 'Ola';
valorVariavel = true;
console.log(typeof(valorVariavel));//ira aparecer Boolean


/*Isso vai dar erro, unknown não pode ser atribuido a uma variável que já tenha um tipo definido.
let valorVariavel2: unknown;

let valor1: number = valorVariavel2;
*/

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;
//Não da erro pois o any não verifica que tipo é, ou seja ele pensa que estamos trabalhando com number pois usamos o tofixed, mesmo que talvez não estejamos, isso pode dar vários erros por isso any deve ser evitado.
console.log(algumaCoisaAny.toFixed(2));
//console.log(algumaCoisaUnknown.toFixed(2));
//aqui acima daria erro, pois o unknown verifica o tipo, e como não sabemos o tipo de dado pode acabar sendo uma string por ex, e uma string não tem o método tofixed. Para contornar isso podemos usar um IF.

if(typeof algumaCoisaUnknown === 'number'){
    console.log(algumaCoisaUnknown.toFixed(2))
} else {
    console.log('Não é numero');
}