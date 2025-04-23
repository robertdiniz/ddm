let numeroInicial: number = 1;
let somaPares: number = 0;

while (numeroInicial <= 20) {
    if (numeroInicial % 2 === 0) {
        somaPares += numeroInicial;
    }
    numeroInicial++;
}

console.log(`A soma dos números foi de: ${somaPares}`);