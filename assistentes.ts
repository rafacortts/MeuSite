import { funcionario } from "./funcionario";

funcionario;

 export class Assistente extends funcionario {
  matricula: number;
  constructor(nome: string, salario: number, matricula: number) {
    super(nome, salario);
    this.matricula = matricula; 
  }

  getMatricula(): number {
    return this.matricula;
  }
  setMatricula(matricula: number): void {
    this.matricula = matricula;
  }
}

let ass = new Assistente("Rafael", 1500, 255.333);

console.log(`O Meu ganho anual foi de ${ass.ganhoAnual()}`);
console.log(`O Nome do funcionario é ${ass.nome}`);
console.log(`O Salário do funcionario é de ${ass.salario} `);
console.log(`O Salário do funcionario é de ${ass.getMatricula()} `);


