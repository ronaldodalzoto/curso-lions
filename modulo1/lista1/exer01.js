const prompt = require ('prompt-sync') ()
let custo = (prompt('custo de produçao:'));
let venda = (prompt('valor de venda:')); 

let lucro = venda - custo;

if (lucro < 500) {
    console.log ("atençao: margem de lucro perigosamente baixa");
} else {
    console.log (`margem de lucro saudavel R${lucro} ` )}