function multiplicacao( a:number, b:number): number {
  return a * b;
}

function saudacao( nome: string): string {
  return `Olá, ${nome}` ;
}
const resultadoMultiplicação = multiplicacao(5, 3)
const mensagemSaudacao = saudacao("João")

console.log(`Resultado da multiplicação: ${resultadoMultiplicação}`);
console.log(`${mensagemSaudacao}`)