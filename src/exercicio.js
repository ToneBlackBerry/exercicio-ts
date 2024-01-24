"use strict";
function multiplicacao(a, b) {
    return a * b;
}
function saudacao(nome) {
    return `Olá, ${nome}`;
}
const resultadoMultiplicação = multiplicacao(5, 3);
const mensagemSaudacao = saudacao("João");
console.log(`Resultado da multiplicação: ${resultadoMultiplicação}`);
console.log(`${mensagemSaudacao}`);
