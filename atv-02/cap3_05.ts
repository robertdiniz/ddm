const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Bruno", notas: [5, 6, 5] },
    { nome: "Carlos", notas: [7, 7, 7] }
];

function verificarAprovacao(alunos) {
    for (const aluno of alunos) {
        const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / aluno.notas.length;

        if (media >= 7) {
            console.log(`${aluno.nome} - Média ${media.toFixed(2)} - Situação: Aprovado`);
        } else {
            console.log(`${aluno.nome} - Média ${media.toFixed(2)} - Situação: Reprovado`);
        }
    }
}

verificarAprovacao(alunos);
