const aluno = {
    nome: "Maria",
    idade: 21,
    curso: "Análise e Desenvolvimento de Sistemas"
};

for (const chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`);
}