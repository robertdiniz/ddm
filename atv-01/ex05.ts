let notas: number[] = [63, 75, 91, 100];
let soma: number = notas.reduce((acc, nota) => acc + nota, 0);
let media: number = soma / notas.length;
console.log(`A média das notas é: ${media}`);