function identificarTipo(valor: string | number): void {
    if (typeof valor === "string") {
      console.log("É uma string:", valor);
    } else {
      console.log("É um número:", valor);
    }
  }
identificarTipo("Olá");
identificarTipo(42);