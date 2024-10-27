/*SATISFIES
O satisfies e a anotação de tipo direta em TypeScript(Definir um tipo e atribuir ele a algo) têm propósitos semelhantes(iguais), pois ambos validam a conformidade de um objeto com um tipo definido, mas não impõem restrições sobre a mutabilidade dos valores ou a imutabilidade das propriedades. Todavia o Satisfies é mais incisivo, ele olha mais profundamente.

O operador satisfies em TypeScript é utilizado para garantir que um valor satisfaça um tipo específico, permitindo que o TypeScript infira tipos mais específicos, enquanto ainda realiza a verificação do tipo que queremos garantir. Ele é útil para trabalhar com tipos complexos onde você quer que o tipo do valor permaneça mais restrito, mas ainda compatível com o tipo maior */

/*Como satisfies Preserva Tipos Literais:
Quando você usa satisfies, o TypeScript verifica se o objeto atende a um tipo específico, mas os valores dos tipos literais são mantidos na sua forma literal durante a validação inicial.
Por exemplo, se você define um objeto com um tipo literal, o TypeScript não o rebaixa para um tipo mais genérico (como string ou number), mantendo os valores como literais.

type Config = {
  host: "localhost" | "127.0.0.1";
  port: 8080;
};

const config = {
  host: "localhost",
  port: 8080,
} satisfies Config;

Neste caso, config.host é tratado como o literal "localhost" e não apenas como string como a notação literal faria(simplesmente atribuir o tipo criado a algo const exemplo: type;).

Alterações Posteriores:
No entanto, depois que o objeto é criado, você pode alterar os valores das propriedades. Por exemplo, você pode mudar config.host para qualquer string, não se limitando aos valores literais que você definiu inicialmente.
Portanto, a "preservação" se refere ao tipo no momento da definição, mas não impede que você altere esses valores posteriormente.
*/


/*Nesse caso abaixo, satisfies permite que config tenha um tipo mais restritivo ({ host: "localhost"; port: 8080; }), enquanto ainda confirma que ele é compatível com o tipo Config.*/
type Config81 = {
    host: string;
    port: number;
};
// Acima, as propriedades `host` e `port` são inferidas como `string` e `number`, respectivamente
const config81 = {
    host: "localhost",
    port: 8080
} satisfies Config81;
// Acima, as propriedades `host` e `port` são inferidas como `Localhost` e `8080`, respectivamente devido ao satisfies
//mas se eu quiser mudar as propriedades, eu posso fazer ainda normalmente depois:
const host81: typeof config81.host = "example.com"; // Válido
const port81: typeof config81.port = 3000; // Válido
console.log(host81, port81); // Imprime: example.com 3000
console.log(typeof host81, typeof port81);
/*Acima, as propriedades `host` e `port` são inferidas como `example.com` e `3000`, respectivamente devido ao satisfies, 
mas se dermos um typeof ele irá mostrar ainda STRING E NUMBER como os tipos, isso ocorre pois o satisfies considera eles como tipos literais(example.com e 3000) apenas até a compilação, após compilado e for EXECUTADO eles assumem novamente o tipo genérico mais próximo.(A não ser que tenhamos mudado realmente o tipo de outras maneiras fixas.) O typeof sempre mostrará os tipos como string e number em tempo de execução, porque o TypeScript não mantém informações sobre a literalidade após a compilação.
*/

//Usando a NOTAÇÂO LITERAL, ele deixa genérico.
type Config81_ = {
    host: string;
    port: number;
};
// Acima, as propriedades `host` e `port` são inferidas como `string` e `number`, respectivamente
const config81_: Config81_ = {
    host: "localhost",
    port: 8080
};
// Acima, as propriedades `host` e `port` tbm são inferidas como `string` e `number`, respectivamente.
/*Sem Validação Estrita em Tempo de Execução: Isso significa que, mesmo que você defina um objeto com valores literais, eles são tratados como genéricos e não há validação, somente verifica o tipo genérico, string, number etc quando usamos types em notação literal.*/



//Outro exemplo do satisfies
type Colors81 = "red" | "green" | "blue";
const colors81 = ["red", "green"] satisfies Colors81[];
// colors é inferido como ("red" | "green")[]

//outro exemplo do satisfies
type Role81 = "admin" | "user" | "guest";
const user81 = {
  name: "Alice",
  role: "admin",
} satisfies { name: string; role: Role81 };


//Exemplo do satisfies onde fica mais claro quando usar de maneira mais prática

type NomeCidade81 = 'São Paulo' | 'Rio de Janeiro' | 'Belo Horizonte';
type CidadeCoordenadas81 = {
    x: number;
    y: number;
};
type Cidade81 = NomeCidade81 | CidadeCoordenadas81;

type Pessoa81 = {
    localNascimento: Cidade81;
    residenciaAtual: Cidade81;
};
/*
Abaixo daria erro, pois toupercase é um método só pra strings, e CIDADE pode ser tanto numero quanto string, por isso usando aqui só o tipo faria dar erro, pois ele não faria uma verificação mais profunda considerando os tipos de tipos, nesses casos podemos utilizar o satisfies.

const pessoa81: Pessoa81 = {
    localNascimento: 'São Paulo',
    residenciaAtual: { x : 10, y: 20 },
};
console.log(pessoa81.localNascimento.toUpperCase());

Ao tentar usar toUpperCase() em pessoa81.localNascimento, daria erro porque localNascimento pode ser um objeto de coordenadas (que não possui esse método), então o TypeScript não permite essa chamada.
*/
const pessoa81 = {
    localNascimento: 'São Paulo',
    residenciaAtual: { x : 10, y: 20 },
} satisfies Pessoa81;

console.log(pessoa81.localNascimento.toUpperCase());
/*Ao usar satisfies, você garante que o objeto pessoa81 está em conformidade com a estrutura de Pessoa81, validando as propriedades em tempo de compilação.
Isso permite que você mantenha a chamada toUpperCase() sem erro, pois, na verificação, o TypeScript sabe que localNascimento é uma string literal válida (neste caso, 'São Paulo').

Resumo das Diferenças:

Sem satisfies: A anotação direta do tipo, como em const pessoa81: Pessoa81, permite que você declare explicitamente que pessoa81 deve ter a forma de Pessoa81, mas não valida corretamente a compatibilidade de tipos e os métodos que podem ser chamados nas propriedades.

Com satisfies: A validação é realizada de forma mais precisa, permitindo que o TypeScript verifique se a estrutura do objeto é compatível com o tipo Pessoa81 e ainda mantendo a capacidade de chamar métodos apropriados nas propriedades. Isso ajuda a evitar erros em tempo de execução.
O satisfies é particularmente útil em cenários onde você pode ter múltiplos tipos que uma propriedade pode assumir (como no seu exemplo com Cidade81), permitindo uma validação mais robusta em comparação com a anotação de tipo direta.*/



//Outro exemplo prático do satisfies

type Connection81 = {};

//Declare serve para declarar algo que pode ser usado em outro lugar ou outro momento, sem precisar implementar na hora. O que é útil para a estruturação de projetos que interagem com APIs ou bibliotecas externas.
declare function createConnection81(
    host: string,
    port: string,
    reconnect: boolean,
    poolsize: number
): Connection81;

type Configuration81 = {
    host: string;
    port: string | number;
    tryReconnect: boolean | (() => boolean);
    poolsize?: number;
};
const config = {
    host: "localhost",
    port: 8080,
    tryReconnect: () => true,
    poolsize: 10,
} satisfies Configuration81;

function connect81() {
    //desestruturação para extrair as propriedades host, port e tryReconnect do objeto config
    let { host, port, tryReconnect } = config;

    createConnection81(host, `${port}`, tryReconnect(), 10);
}
/*satisfies Configuration81: A expressão satisfies é utilizada para garantir que o objeto config está em conformidade com a estrutura e os tipos definidos em Configuration81. O TypeScript irá verificar se todas as propriedades necessárias estão presentes e se seus tipos correspondem.*/