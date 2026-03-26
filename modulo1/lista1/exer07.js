const prompt = require ('prompt-sync') ();
let quantidadeatual = Number (prompt ('quantidade atual em estoque: '));
let quantidademinima = Number (prompt ('quantidade minima de segurança: '));

if (quantidadeatual < quantidademinima) {
    let necessidadedecompra = quantidademinima - quantidadeatual;
    console.log (`alerta: estoque abaixo do permitido!`)
    console.log (`é necessario comprar mais ${necessidadedecompra} unidades `)
} else {
    console.log (`estoque em nivel seguro`)    
}