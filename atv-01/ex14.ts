type Pessoa = {
    nome: string;
    idade: number;
    profissao: string;
};

function descreverPessoa(pessoa: Pessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e trabalha como ${pessoa.profissao}.`;
}

console.log(descreverPessoa({ nome: "Ana", idade: 21, profissao: "Analista" }));