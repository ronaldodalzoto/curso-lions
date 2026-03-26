const prompt = require ('prompt-sync') ();
let distancia = Number (prompt ('distancia da entrega (em Km)?'));
let urgente = prompt ('a entrega é urgente ou de risco? (sim/nao)');

let valorbase = 20 + (distancia * 1.5);

if (distancia > 100 || urgente === 'sim') {
    valorbase = valorbase + 15;
    console.log ('taxa extra de R$ 15,00 aplicado (distancia ou urgencia).')
} else {
    console.log (`custo total do frete: R$ ${valorbase}`)
}