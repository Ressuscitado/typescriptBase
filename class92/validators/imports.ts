/*Utilizando as funções em outro arquivo importando elas com
o IMPORT e o FROM
--> Podemos utilizar o AS para definir um apelido para o nome da importação conforme exemplo abaixo*/

import {somar92, subtrair92, multiplicar92, Validator92 as ApelidoValidator92} from "../modules";
import dividir92 from "../modules";//import com default

console.log(somar92(1, 2));
console.log(subtrair92(1, 2));
console.log(multiplicar92(1, 2));
console.log(dividir92(1, 2));

export class EmailValidator92 implements ApelidoValidator92 {
    isValid(s: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(s);//Esse test retorna true ou false e verifica se a string esta de acordo com o padrão definido no regex
    }
}
//export {EmailValidator92}; poderia ser assim tbm