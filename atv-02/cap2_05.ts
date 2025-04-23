let idadePessoa: number = 15;

if ( idadePessoa < 16){
    console.log("Não pode votar!");
} else if ( idadePessoa >= 16 && idadePessoa < 18 ){
    console.log("Voto facultativo!");
} else if ( idadePessoa >= 18 && idadePessoa <= 70 ){
    console.log("Voto obrigatório!");
} else {
    console.log("Voto opcional!");
}