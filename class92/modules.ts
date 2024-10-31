/*
MODULES
--> Pode conter declarações e códigos
--> Executado dentro do seu próprio escopo, suas variáveis, metodos e funções são visíveis dentro do módulo e não globalmente
--> Eles não são visíveis fora  do módulo, mas podem ser exportados
--> Colocar EXPORT na declaração do modulo, ex: export function somar92, ou após ter concluido a função, fora dela colocamos export {somar92} e pronto, esta pronto pra ser exportada,  e na outra pasta que vamos importar usar o IMPORT e o nome do módulo que vamos importar, 
por ex: import {somar92, subtrair92, multiplicar92, dividir92} from "./modules";
Assim podemos utilizar elas em outras partes do código
--> Para funcionar MODULES temos que dentro no tsconfig.json adicionar "module": "commonjs"
*/

export function somar92(a: number, b: number): number {
    return a + b;
}

function subtrair92(a: number, b: number): number {
    return a - b;
}
export {subtrair92};//ex de export tbm válido

export function multiplicar92(a: number, b: number): number {
    return a * b;
}
/*o export default function dividir92(), essa palavra DEFAULT
simplesmente faz com que nos imports não precisemos usar o {},
podemos chamar diretamente pelo nome e após o FROM. */
export default function dividir92(a: number, b: number): number {
    return a / b;
}

//ex com interface
export interface Validator92 {
    isValid(s: string): boolean;
}
/*Não precisa usar function dentro de uma interface em TypeScript para definir métodos. O TypeScript permite que você defina apenas a assinatura dos métodos em interfaces, sem a necessidade de especificar a palavra-chave function.*/