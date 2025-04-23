interface Aluno {
    nome: string;
    matricula: number;
    ativo: boolean;
}
  
let aluno1: Aluno = {
    nome: "Carlos",
    matricula: 12345,
    ativo: true
};
console.log(`Nome: ${aluno1.nome}, Matrícula: ${aluno1.matricula}, Ativo: ${aluno1.ativo}`);