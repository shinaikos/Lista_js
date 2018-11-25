//13. [Vetores] Escreva um programa em JavaScript que compute a união de dois vetores.
//union([7, 8, 9], [8, 7, 6, 5, 4, 3, 2, 1]); \\ Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9]

const vetor1 = [7, 8, 9]
const vetor2 = [8, 7, 6, 5, 4, 3, 2, 1]
const todos = vetor2.concat(vetor1)

console.log(todos)

/*
8. [Vetores] Escreva um programa JavaScript que remove os itens duplicados em um
vetor. Obs.: ignore o caso sensitivo dos itens, ou seja, não diferencie caracteres
maiúsculos de minúsculos.
*/

var novaArr = todos.filter(function(este, i) {
    return todos.indexOf(este) == i;
})
console.log(novaArr)