//2. [Vetores] Escreva um programa JavaScript que ordene de maneira decrescente, os
//elementos de um vetor numérico.

const vetor2 = [8, 7,12,13,5,6,7, 6, 5, 4, 3, 2, 1]
console.log(vetor2.sort(function(a, b){return b-a}))