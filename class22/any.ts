/*ANY é o valor padrão quando não definimos nenhum tipo para uma variável nem atribuimos um valor para q ele possa inferir como no ocorre no JS, ele pode ser qualquer coisa. Não é recomendado seu uso explicito, mas também não é recomendado usar TIPOS para absolutamente tudo no TS, segundo a documentação do Typescript podemos usar menos tipagens doq imaginamos ser necessário, em casos de variáveis simples, que fazem uma coisa apenas podemos não definir seu tipo explicitamente, podemos deixar ele inferir como JS mediante ao valor que definimos.*/

//Aqui ele criou como ANY e mesmo após atribuir uma string ele continua como ANY pois na criação da variável não definimos tipo nem valor.
let nome;
nome = 'Igor';
//nesse caso ele entende que é um number dinamicamente igual no JS
let idade = 15;
//Nesse caso ele entende que é uma string dinamicamente igual no JS
let nome2 = 'Igor';

//Usando o any explicitamente, perceba que mesmo atribuindo uma string ele trata com ANY. Ele basicamente desativa o sistema de tipos do TypeScript para a variável em questão.
let qualquerCoisa: any = 'Igor';

//QUANDO USAR ANY?

/*Integração com Código JavaScript Legado
Quando você está integrando um código TypeScript com bibliotecas JavaScript existentes que não possuem tipos definidos, você pode usar any para evitar erros de tipo temporários até que você crie definições de tipo apropriadas.*/

/*Manipulação de Dados Dinâmicos
Se você está lidando com dados que não têm um formato fixo ou que podem variar bastante, como objetos de resposta de APIs onde a estrutura não é bem definida, any pode ser útil*/
function processData(data: any) {
    console.log(data);
}

processData({ name: "Igor", age: 26 });
processData("Uma string qualquer");

/*Formulários
Em formulários, especialmente quando você está lidando com entradas dinâmicas e não sabe quais tipos de dados espera receber, any pode ser uma escolha prática.*/
function handleSubmit(formData: any) {
    // Aqui você pode ter acesso a dados de diferentes tipos.
    console.log(formData);
}

handleSubmit({ name: "Igor", age: 26 });
handleSubmit(["um", "array", "de", "strings"]);


/*Alternativas ao Uso de any

-Tipos Específicos/próprios: Sempre que possível, defina tipos específicos em vez de usar any.

-Union Types: Use tipos de união (string | number | ...) quando você sabe que a variável pode ser de mais de um tipo.

-Generics: Se você precisa de flexibilidade, considere usar generics para manter a segurança de tipo.*/

