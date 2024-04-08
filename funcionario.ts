// Implemente a classe Funcionario com nome, salario e os métodos
// addAumento(double valor), ganhoAnual() e exibeDados() - imprime os valores do funcionário.

// a. crie a classe Assistente, que também é um funcionário, e que possui um número de
// matrícula (faça os métodos GET e SET). Sobrescreva o método exibeDados().

// b. sabendo que os Assistentes Técnicos possuem um bônus salarial e que os Assistentes
// Administrativos possuem um turno (dia ou noite) e um adicional noturno, crie as classes
// Tecnico e Administrativo e sobrescreva o método ganhoAnual() de ambas as classes
// (Administrativo e Tecnico).

 export class funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  bonusSalarial():number{
    return 0.3 * this.salario
  }

  adicionalNoturno():number{
    return 0.10 * this.salario 
  }

  addAumento():number{
    return 0.7 * this.salario
    
  }

  ganhoAnual():number{
    return  12 * this.salario
    
  }

  exibeDados() {
    console.log(`
    ${this.nome} , ${this.salario}`)
  }
}
