import numeros from "./numeros.js"

// let numeros = [10, 20, 30, 40, 50]

function calcularMedia(){

    let soma = 0
    
    for(let i = 0; i < numeros.length; i = i + 1){

        soma = soma + numeros[i]


        numeros.forEach (num) => {
            soma = soma + num
        })

        return soma / numeros.length
    }

    numeros.
}