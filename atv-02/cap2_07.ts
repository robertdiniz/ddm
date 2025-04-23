let nome: string = "Robert";
let nota1: number = 7.5;
let nota2: number = 6.5;
let nota3: number = 8.0;
let frequencia: number = 80;

let media: number = (nota1 + nota2 + nota3) / 3;

if (frequencia < 75) {
    console.log(`Aluno ${nome} reprovado por falta!`);
}  else {
    if (media >= 7) {
        console.log(`Aluno ${nome} aprovado com média ${media.toFixed(2)}!`);
    } else if (media >= 5 && media < 7) {
        console.log(`Aluno ${nome} em recuperação com média ${media.toFixed(2)}!`);
    } else {
        console.log(`Aluno ${nome} reprovado com média ${media.toFixed(2)}!`);
    }
}