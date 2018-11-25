// 2. [Controle/Repetição] Escreva um programa JavaScript que some os múltiplos de 3 e
// 5 menores do que 1000.



let vetorA =[]
for(let i = 1; i <= 1000; i++) {
    vetorA.push(i)
}

let vetorB =[]
vetorA.forEach(function(a){
    
    if(a%3 === 0){
        vetorB.push(a)
        //console.log(`${a} é multiplo de 3`)
    }if(a%5 === 0){
        vetorB.push(a)
        //console.log(`${a} é multiplo de 5`)
    }
}
)
console.log(vetorB)

//soma dos vetores
var t = 0;
for(var i=0;i < vetorB.length;i++) {
	t += parseFloat(vetorB[i]);
}
console.log(t)