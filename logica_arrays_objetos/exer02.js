const prompt = require ('prompt-sync')();

let estoqueTamanhos = ([10, 15, 8])
let camisetasPvendidas = Number (prompt ('camisetas P vendidas hj:'));

estoqueTamanhos [0] = estoqueTamanhos[0] - camisetasPvendidas
if (estoqueTamanhos[0] < 5) {
    console.log ('alerta: estoque de camisetas P está crítico!')
} else {console.log (`estoque atualizado. quantidade restante do tamanho P: ${estoqueTamanhos[0]}.`)}


//resoluçao do professor abaixo

import PromptSync from 'prompt-sync';
const promtp = PromptSync()

let vendido = 0
let estoque = [10, 15, 8]

vendeu = Number (prompt ('quantas camisetas do tamanho P foram vendidas hj? '))

estoque[0] = estoque[0] - vendido

if (estoque(0) < 5){
    console.log('alerta: estoque de luvas tamanho P está critico!')
} else {
    console.log('estoque atualizado. quantidade restante do tamanho P: ${estoque[0]}')
}