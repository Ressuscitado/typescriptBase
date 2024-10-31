/*
Generic INTERFACE
--> Lista de parametros do tipo genérico
--> Código flexível e reutilizável
 */
interface Pair88<T, U> {
    first: T;
    second: U;
}
const myPair88: Pair88<number, string> = {
    first: 1,
    second: 'hello'
}
console.log(myPair88);

/*Criando uma interface generica para uma API em caso real, 
Vamos usar essa API bem famosa para testes gratuitos:

https://jsonplaceholder.typicode.com/todos/1

usando essa API que retorna algo como:
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
Perceba que temos muitos tipos de dados diferentes*/
interface FetchResponse88<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}

async function fetchJason88<T>(url: string): Promise<FetchResponse88<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJason88<{title: string}>("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.title);
})();
/*
1.
interface FetchResponse88<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}
Explicação da Interface
FetchResponse88<T>: Essa interface define a estrutura que um objeto de resposta (response) deve seguir ao ser retornado pela função fetchJason88. O uso de <T> indica que essa interface é genérica, permitindo que o tipo de data seja determinado no momento em que a função é usada.

data: T: Representa o corpo da resposta, que pode ser de qualquer tipo (T). Esse tipo será definido ao chamar a função fetchJason88, o que torna a interface flexível para diferentes estruturas de dados de resposta.

status: number: Representa o código de status HTTP da resposta (como 200 para sucesso, 404 para não encontrado, etc.), que é sempre um número.

statusText: string: Uma breve descrição do código de status (como "OK" para o código 200), retornada pelo servidor.

headers: Record<string, string>: Um objeto que representa os cabeçalhos da resposta HTTP. Record<string, string> é uma estrutura de objeto onde as chaves são strings (nomes dos cabeçalhos) e os valores também são strings (conteúdo de cada cabeçalho).

2. 
async function fetchJason88<T>(url: string): Promise<FetchResponse88<T>> {
    const response = await fetch(url);
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();
    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
Explicação Detalhada da Função
async function fetchJason88<T>(url: string): Promise<FetchResponse88<T>>

Declara a função fetchJason88 como async, permitindo que ela use await internamente para operações assíncronas.

<T>: A função é genérica, aceitando um tipo T, que será definido quando a função for chamada. Esse tipo T será o tipo de dados que a função retorna em data.

url: string: A função recebe um argumento url do tipo string, que é o endereço da API que a função vai chamar.

: Promise<FetchResponse88<T>>: A função retorna uma Promise que resolve em um objeto do tipo FetchResponse88<T>, seguindo a estrutura da interface FetchResponse88.
const response = await fetch(url);

Usa a função fetch para fazer uma requisição HTTP para o url fornecido.
A fetch retorna uma Promise que resolve em uma Response assim que a requisição termina. await pausa a execução da função async até que a Promise retorne a Response.
Coletando os Cabeçalhos:

const headers: Record<string, string> = {};
response.headers.forEach((value, key) => {
    headers[key] = value;
});
headers: Record<string, string> = {};: Declara um objeto vazio headers para armazenar os cabeçalhos.

response.headers.forEach((value, key) => {...}): Itera sobre cada cabeçalho da resposta. response.headers é um Headers que contém pares key-value.

headers[key] = value;: Para cada cabeçalho, armazena o valor em headers, onde key é o nome do cabeçalho e value é o conteúdo do cabeçalho.

Convertendo a Resposta para JSON:

const data = await response.json();
Usa response.json() para extrair o conteúdo JSON da resposta HTTP, transformando-o em um objeto JavaScript. await espera a conversão.

Retornando o Objeto:

return {
    data: data as T,
    status: response.status,
    statusText: response.statusText,
    headers
};
data: data as T: Converte data para o tipo genérico T, assegurando que data siga o tipo definido ao chamar a função.

status: response.status: Insere o código de status HTTP da resposta.

statusText: response.statusText: Insere a descrição do status HTTP da resposta.

headers: Insere os cabeçalhos da resposta.

3. 
Chamada da Função e Exemplo de Uso com uma Função Auto-executável

(async () => {
    const response = await fetchJason88<{title: string}>("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.title);
})();
Explicação da Chamada e Uso
Função auto-executável async:

A função auto-executável (async () => {...})(); cria uma função assíncrona e a executa imediatamente, permitindo o uso de await fora de uma função comum.
Chamando fetchJason88<{title: string}>

fetchJason88<{title: string}> chama a função passando {title: string} como o tipo T. Aqui, T é definido como um objeto com uma propriedade title do tipo string. Isso significa que data no retorno terá a estrutura { title: string }.
URL https://jsonplaceholder.typicode.com/todos/1

Faz uma requisição para essa URL, que retorna um JSON semelhante a { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }.

Acessando e Exibindo response.data.title
console.log(response.data.title); exibe o valor de title da resposta JSON, que é "delectus aut autem". */






/*. FUNÇÃO AUTO EXECUTAVEL ASSINCRONA (async () => { ... })();


Uma função auto-executável, também chamada de IIFE (Immediately Invoked Function Expression), é uma função que é declarada e chamada imediatamente, sem a necessidade de nomeá-la explicitamente ou chamá-la mais tarde. O formato (async () => { ... })(); representa essa ideia, sendo que, por ser uma função async, permite o uso de await dentro de seu corpo.

Estrutura da Função Auto-executável Assíncrona

(async () => {
    // Corpo da função: aqui podem ser feitas operações assíncronas usando await.
})();

Aqui está o que cada parte faz:

(async () => { ... }): Define uma função async anônima (ou seja, sem nome). Colocar essa função dentro de parênteses (...) faz com que o JavaScript interprete-a como uma EXPRESSÃO e não uma declaração de função.
(): Os parênteses depois da função anônima invocam (ou executam) essa função imediatamente após sua definição.
Vantagem de usar uma Função Auto-executável Assíncrona
Execução imediata: Em vez de precisar definir uma função e chamá-la depois, essa construção executa o código imediatamente.
Uso de await fora de uma função comum: Como await só funciona dentro de uma função async, essa abordagem permite que await seja usado diretamente.*/

/*
RECORD<K, V> em TypeScript
É um Tipo Utilitário:
O tipo Record<K, V> em TypeScript é uma maneira de criar um objeto que mapeia um conjunto de chaves (K) para valores (V).
A notação Record<string, string> indica que o objeto deve ter chaves do tipo string e valores também do tipo string. Portanto, ele é essencialmente um "registro" de pares de chave-valor. 

Record<Chave, Valor> é um tipo utilitário que cria um objeto onde todas as chaves têm um tipo específico (Chave) e todos os valores têm outro tipo específico (Valor). No caso Record<string, string>, estamos definindo um objeto onde:

Todas as chaves são string, representando os nomes dos cabeçalhos HTTP.
Todos os valores são string, representando o valor associado a cada cabeçalho.
Por que Record<string, string> é útil para Headers?
No contexto dos cabeçalhos HTTP:

Cada cabeçalho tem um nome (Content-Type, Authorization, etc.), que é uma string.
Cada cabeçalho tem um valor (application/json, Bearer token123, etc.), que também é uma string.
Record<string, string> é adequado para armazenar esses pares nome-valor dos cabeçalhos, garantindo que ambos sejam string.*/