//A criar a função soma que recebe 2 números e retorna a soma deles
//B criar a função subtração que recebe 2 números e retorna a subtração deles
//C criar a função divisão 
//D criar a função multiplicação
//E executar a soma, subtração, multiplicação e divisão imprimindo o resultado deles

const sub = require ("../simple-function/calculadoraSub")

const mult = require ("../simple-function/calculadoraMult")


let resultsub = sub.subtracao(2, 1)
let resultsub2 = sub.subtracaov2(2, 1)
let resultmult = mult.multiplicacao(2, 2)
console.log (resultsub)
console.log (resultmult)