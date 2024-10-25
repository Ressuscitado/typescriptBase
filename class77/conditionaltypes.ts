//Nesse exemplo abaixo pode ser tanto string quanto number dependendo do input.
type DataNascimento77 = string;
type Idade77 = number;

//generics e ternário
type InformacaoPessoa77<T> = T extends number ? number : string;

const dataNascimento77: InformacaoPessoa77<DataNascimento77> = '24/05/2005';
console.log(dataNascimento77);

const idade77: InformacaoPessoa77<Idade77> = 18;
console.log(idade77);


//EX de filtragem usando conditionals type
/*Aqui, define um tipo chamado FormatoArquivos, que pode ser um dos formatos de arquivo especificados.*/
type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';
/*Este tipo genérico verifica se o tipo T é 'mp4' ou 'mp3'. Se for, ele retorna T; caso contrário, retorna never.*/
type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

/*Aqui, você aplica a função de filtragem ao tipo FormatoArquivos. O resultado será um tipo que só aceita 'mp4' ou 'mp3'. Portanto, ArquivoAudio será equivalente a 'mp4' | 'mp3'.*/
type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

/*Você declara uma constante arquivoAudio do tipo ArquivoAudio, atribuindo a ela o valor 'mp3', que é um valor válido de acordo com o tipo filtrado.*/
const arquivoAudio: ArquivoAudio = 'mp3';
console.log(arquivoAudio);