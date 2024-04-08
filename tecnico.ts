import { funcionario } from "./funcionario";

class assistenteTecnico extends funcionario {
  constructor(nome: string, salario: number) {
    super(nome, salario);
  }
}

const tec = new assistenteTecnico("rafael", 1900);
console.log(
  `O Bonus salarial do funcionario foi de ${tec.bonusSalarial()} Reais`
);
console.log(`O Salario foi de ${tec.salario} Reais`);
console.log(`O Nome do funcionario é ${tec.nome}`);
console.log(`O Nome do funcionario é ${tec.adicionalNoturno() + tec.ganhoAnual()}`);

// b. sabendo que os Assistentes Técnicos possuem um bônus salarial e que os Assistentes
// Administrativos possuem um turno (dia ou noite) e um adicional noturno, crie as classes
// Tecnico e Administrativo e sobrescreva o método ganhoAnual() de ambas as classes
// (Administrativo e Tecnico).
