/*Exemplo com o operador & (Interseção)
O operador & combina duas ou mais interfaces em um único tipo que contém todos os membros de ambas as interfaces.*/
interface Pessoa68 {
    nome: string;
  }
  
  interface Funcionario68 {
    salario: number;
  }
  
  // Criamos um tipo que é a interseção entre Pessoaa e Funcionario
  type PessoaaFuncionario68 = Pessoa68 & Funcionario68;
  
  const colaborador68: PessoaaFuncionario68 = {
    nome: "Igor",
    salario: 5000,
  };
  
  console.log(colaborador68.nome);   // "Igor"
  console.log(colaborador68.salario); // 5000

  /*Exemplo com o operador | (União)
O operador | cria um tipo que pode ser qualquer um dos tipos combinados, ou seja, pode ter os membros de uma das interfaces ou de ambas.*/
interface Pessoaa_1 {
    nome: string;
  }
  
  interface Funcionario68_1 {
    salario: number;
  }
  
  // Criamos um tipo que é a união entre Pessoaa e Funcionario
  type PessoaaOuFuncionario68_1 = Pessoaa_1 | Funcionario68_1;
  
  const colaborador68_1: PessoaaOuFuncionario68_1 = { nome: "Igor", salario: 5000 };
  const colaborador68_2: PessoaaOuFuncionario68_1 = { salario: 5000 };
  
  // Ambos os objetos são válidos, pois podem ser um ou outro, ou ambos
  console.log(colaborador68_1);   // "Igor"
  console.log(colaborador68_2.salario); // 5000
  
//Com F2 eu mudo o nome globalmente, com o crtl+f eu mudo localmente