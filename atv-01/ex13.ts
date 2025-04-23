type Produto = {
    nome: string;
    emEstoque: boolean;
};
  
function filtrarProdutosDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.emEstoque);
}
  
let produtos: Produto[] = [
    { nome: "Caneta", emEstoque: true },
    { nome: "Lápis", emEstoque: false },
    { nome: "Caderno", emEstoque: true }
];    
console.log(filtrarProdutosDisponiveis(produtos));