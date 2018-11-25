// 4. [Controle/Repetição] Escreva uma estrutura de repetição que irá iterar de 0 até 15.
//Para cada iteração, verifique se o atual número é par ou ímpar e exiba a seguinte
//mensagem no documento HTML: 0 é par, 1 é ímpar, 2 é par . . .


const i = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
i.forEach(function(a){
    if(a%2 === 0){
        console.log(`${a} é par`)
    }if(a%2 !== 0){
        console.log(`${a} é impar`)
    }
}
)

