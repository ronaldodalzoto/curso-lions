const prompt = require ('prompt-sync')();

let estoqueTamanhos = ([10, 15, 8])
let camisetasPvendidas = Number (prompt ('camisetas P vendidas hj:'));

estoqueTamanhos [0] = estoqueTamanhos[0] - camisetasPvendidas
if (estoqueTamanhos[0] < 5) {
    console.log ('alerta: estoque de camisetas P está crítico!')
} else {console.log (`estoque atualizado. quantidade restante do tamanho P: ${estoqueTamanhos[0]}.`)}
