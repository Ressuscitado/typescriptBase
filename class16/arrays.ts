//Arrays com colchetes(muito mais utilizado), perceba que emojis são strings 
let frutas1: string[] = ['🍌', '🍎', '🍍',  '🍉'];
console.log(frutas1[1]);

//Arrays object, usamos o nome do objeto mesmo, com a letra inicial maiúscula representando o objeto e não o type, e dentro dos <> o type.
let frutas2: Array<string> = ['🍌', '🍎', '🍍',  '🍉'];
console.log(frutas2[2]);

//Push
let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);

//length
let frutas: Array<string> = ['🍌', '🍎', '🍍',  '🍉'];
console.log(frutas.length);

//spread operetor ...
let listaNumeros: Array<number> = [1, 2, 3, 4, 5, 6];
listaNumeros = [...listaNumeros, 7, 8, 9, 10];
console.log(listaNumeros);

//Outra forma de definir arrays com new
let linguagens: string[] = new Array('JavaScript', 'TypeScript', 'Python', 'C#');

//Iterando sobre arrays
function funcaoLinguagens(linguagens: string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);      
    }
}
funcaoLinguagens(linguagens);


