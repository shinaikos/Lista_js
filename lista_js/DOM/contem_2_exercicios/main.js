alterarPlanoFundo = (function(){
    document.querySelector("body").style.backgroundColor = "red"
    document.querySelector("button").style.backgroundColor = "red"
})()

pegarValores = function(){
    let x = document.querySelector("#FN").value
    alert(`primeiro nome é: ${x}`)
    let y =document.querySelector("#LN").value
    alert(`sobrenome é ${y}`)
}

