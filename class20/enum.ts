/*ENUMS
-Não são recomendados para serem usados com frequencia, sempre optar por outras soluções e deixar eles como ultima
-São em caixa alta desde a primeira letra e devem estar no singular
-Podem ser Strings ou Numeros
-Facilidade em mudar valores
-Reduz erros
-Funciona somente em tempo de compilação
-O tempo de execução (compile-time) será mais preciso e rápido
-Permite criar constantes, assim como constantes personalizadas
-São estáticos, não poder ser modificados em tempo de execução
-Ao passar para JS gera muito código, deixa o sistema mais lento e o código mais verboso
-JS não possui ENUMS ja o TS tem.*/ 

//Enum numeric é o MAIS ideal para trabalhar
enum Idioma {
    Portugues,
    Ingles,
    Espanhol,
    Mandarim
}
console.log(Idioma);
/*Terminal
{
  '0': 'Portugues',
  '1': 'Ingles',
  '2': 'Espanhol',
  '3': 'Mandarim',
  Portugues: 0,
  Ingles: 1,
  Espanhol: 2,
  Mandarim: 3
} Perceba que ele atribui valores numéricos como chaves para cada item */

//Enum String não é recomendado para ser usado
enum Dia {
    Segund = 'SEG',
    Terca = 'TER',
    Quarta = 'QUA',
    Quinta = 'QUI',
    Sexta = 'SEX',
    Sabado = 'SAB',
    Doming = 'DOM'
}
console.log(Dia);
/*No terminal ficaria
{
  Segunda: 'SEG',
  Terca: 'TER',
  Quarta: 'QUA',
  Quinta: 'QUI',
  Sexta: 'SEX',
  Sabado: 'SAB',
  Domingo: 'DOM'
} Perceba que os valores nós que atribuimos ao contrário do numeric */

const enum Comida {
    Hamburguer,
    Pizza,
    Churrasco,
    Frango
}

//Cenários que são utilizados:
/*Enums são ótimos quando você tem um conjunto fixo de valores que estão semanticamente relacionados e que representam uma escolha limitada de opções, como estados de um sistema, tipos de ações ou categorias. */
enum StatusPedido {
    Pendente,
    Enviado,
    Entregue,
    Cancelado
}

let statusAtual: StatusPedido = StatusPedido.Pendente;
console.log(statusAtual);

/*Se você precisar adicionar uma nova função (role), como "Editor", basta adicionar ao enum Role e alterar a função acessarSistema conforme necessário. Enums garantem consistência em todo o código.*/
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}

function acessarSistema(role: Role) {
    if (role === Role.Admin) {
        console.log("Acesso total concedido.");
    } else if (role === Role.User) {
        console.log("Acesso limitado concedido.");
    }
}

/*Usar enums em parâmetros de função garante que você restringe os valores aceitos para opções específicas. Isso aumenta a segurança de tipos e diminui erros.*/
enum Tamanho {
    Pequeno,
    Médio,
    Grande
}

function escolherTamanho(tamanho: Tamanho) {
    if (tamanho === Tamanho.Grande) {
        console.log("Você escolheu o tamanho grande.");
    }
}

escolherTamanho(Tamanho.Médio);
// escolherTamanho("Extra Grande"); // Erro!

/*Se você tem a necessidade de alternar entre números e strings para o mesmo conjunto de valores, enums numéricos são úteis, porque TypeScript gera automaticamente um mapeamento reverso.*/
enum Dia {
    Domingo = 0,
    Segunda = 1,
    Terça = 2
}

let dia: Dia = Dia.Segunda;
console.log(dia); // 1
console.log(Dia[1]); // "Segunda"

/*Se você está lidando apenas com um pequeno conjunto de valores constantes que não precisam de conversão entre números e strings, considere usar literal types ou const objects em vez de enums. Essas abordagens são mais leves e simples.*/
type Role1 = "ADMIN" | "USER" | "GUEST";

function acessarSistema1(role: Role1) {
    if (role === "ADMIN") {
        console.log("Acesso total concedido.");
    }
}
//Exemplo com const objects:
const Role2 = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST"
} as const;

function acessarSistema2(role: typeof Role2[keyof typeof Role2]) {
    if (role === Role2.Admin) {
        console.log("Acesso total concedido.");
    }
}
/*Em resumo, as const é uma ferramenta no TypeScript que ajuda a reforçar a segurança de tipo e a imutabilidade dos valores definidos. Mesmo que o TypeScript infira corretamente os tipos em muitos casos, o uso de as const é uma boa prática para garantir que você tenha controle total sobre os valores permitidos em seu código, assim ele não trata os valores como strings e sim como literal strings(mesmo que ele ja faça isso por baixo dos panos), é uma camada a mais de segurança.*/
