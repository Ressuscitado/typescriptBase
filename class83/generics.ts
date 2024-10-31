/*GENERICS<T>
--> Reutilizável e generalizada para funções, interfaces e classes
--> Variedade de tipos de dados
--> Funções, classes e interfaces podem consumir esses componentes e
usarem seus próprios tipos.
--> Flexível e escalável a longo prazo
*/
//Entendendo o cenário para usar Generics
function retornarNumeroRand83(items: number[]): number {
    let numeroRand83 = Math.floor(Math.random() * items.length);
    return items[numeroRand83];
}
let numeros83 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornarNumeroRand83(numeros83));

//Observe essa outra função extremamente parecida abaixo
function retornarStringRand83(items: string[]): string {
    let stringRand83 = Math.floor(Math.random() * items.length);
    return items[stringRand83];
}
let frutas83 = ['Banana', 'Maça', 'Abacaxi',  'Melancia'];
console.log(retornarStringRand83(frutas83));

/*Perceba que uma usam number e retorna number, e outra usa
string e retorna string, mas tirando isso TODA a lógica é
igual, ai esta um cenário que podemos usar generics. Nesse ex abaixo
usaremos generics na função, e oq será genérico nela será o TIPO
de dados em cada vez que chamarmos a função. Generics sempre usa 
esse T(poderia ser outra letra, mas por padrão é o T) */
function retornarElementoRand83<T>(items: T[]): T {
    let elementoRand83 = Math.floor(Math.random() * items.length);
    return items[elementoRand83];
}

let frutas83_2 = ['Banana', 'Macã', 'Abacaxi',  'Melancia'];
let numeros83_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(retornarElementoRand83<string>(frutas83_2));
console.log(retornarElementoRand83<number>(numeros83_2));