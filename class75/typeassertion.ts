/*Type Assertion as <> é a mesma coisa que type casting no TS, ele permite que o compilador interprete uma variável como um tipo específico, mas sem alterar seu tipo original.

type Assertion <> em outras linguagens de programação, faz a mesma coisa,  permite que o compilador interprete uma variável como um tipo específico, mas sem alterar seu tipo original.
Ao contrário do type casting, que em outras linguagens de programação ele REALMENTE MUDA o tipo de variável. Mas no TS conforme dito isso n ocorre. Por isso o ideal é que usando TS sempre chamar (as) <> como Type assertion, pois remete ao seu real uso em outras linguagens de programação, visto que o TS n fas o casting(mudar realmente o tipo de variável).*/

/*Tanto o as quanto o <> (type assertion) e o operador ! (non-null assertion) podem fazer com que o TypeScript não verifique o tipo da variável ou a nulidade, apenas aceitar que seja do tipo que estamos falando que é, o que pode levar a erros em tempo de execução se usados de forma inadequada.*/

//Nesse exemplo estamos atribuindo a uma segunda constante o valor da primeira constante e que seja de um tipo,com o uso do (as)<>, logo ele deve ter as propriedades obrigatórias no TIPO.
type Humano75_ = {
    nome: string;
    idade: number;
    idioma: string
}
const humano75_ = {
    idade: 30,
    idioma: 'English',
    nome: 'Igor'
}
const humano75_1_ = humano75_ as Humano75_;
console.log(humano75_1_.nome.toUpperCase());

/*OBSERVAÇÂO: Esse exemplo abaixo é o mesmo exemplo acima mas sem a menção de umas das propriedades obrigatórias no TIPO, ele não apresenta erro aqui no VSCODE, mas ao compilar ele gerara erro, pois não estamos usando a propriedade nome do TIPO Humano75, apenas duas propriedades, mas ele iria nos informar desse erro só em tempo de compilação, por isso não é aconselhavel usar o (as) <>, e se usar tomar muito cuidado. Ele faz o TS ignorar a verificação de tipos pois estamos atestanto manualmente que é daquele tipo, e dara erro durante a compilação causando erros no código.
type Humano75 = {
    nome: string;
    idade: number;
    idioma: string
}
const humano75 = {
    idade: 30,
    idioma: 'English'
}
const humano75_1 = humano75 as Humano75;
console.log(humano75_1.nome.toUpperCase());

Para contornar isso o correto seria ja na primeira constate usar o type mesmo e não como assertion as <> no final de tudo, pois fazendo assim o TS aponta o erro antes de executarmos e ja mostra que o código esta errado, por exemplo:
type Humano75teste = {
    nome: string;
    idade: number;
    idioma: string
}
Assim ele aprensetaria erro ja aqui pois sem o AS ele verifica o TIPO, e vera que tem coisa faltando.
const humano75teste: Humano75teste = {
    idade: 30,
    idioma: 'English'
}
const humano75_1teste = humano75teste;
console.log(humano75_1teste.nome.toUpperCase());
*/

