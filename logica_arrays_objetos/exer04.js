const prompt = require ('prompt-sync')();

let filaProjetos = [];
let empresa = prompt ('nomeEmpresa ') ;
let valor = Number (prompt ('valorEstimadoProjeto '))

let cliente  ={
    cliete: empresa,
    valor: valor
}
filaProjetos.push(cliente);
let urgente = prompt ('o projeto tem prazo de entrega urgente? (sim/nao)')

if (urgente == 'sim' && filaProjetos [0]. valor > 3000) {
    filaProjetos [0].valor = filaProjetos[0].valor*1.15
}

console.log (filaProjetos)
