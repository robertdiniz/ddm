let alunos: Aluno[] = [
    { nome: "Carlos", matricula: 12345, ativo: true },
    { nome: "Maria", matricula: 67890, ativo: false },
    { nome: "João", matricula: 54321, ativo: true }
];
  
for (const aluno of alunos) {
    if (aluno.ativo) {
        console.log(`Aluno ativo: ${aluno.nome}`);
    }
}