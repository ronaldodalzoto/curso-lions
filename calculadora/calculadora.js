const prompt = require ('prompt - sync') ()

function somar (resultado, num){
    return resultado + num 
}

function subtrair (resultado, num){
    return resultado - num 
}

function multiplicar (resultado, num){
    return resultado * num 
}

function dividir (resultado, num){
    return resultado / num 
}

function porcentagem (resultado, num){
    return (resultado * num) / 100
} 


console.log ('qual operaçao vc deseja realizar? n[1] - somar')