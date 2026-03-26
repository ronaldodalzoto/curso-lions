const prompt  = require ('prompt-sync')();

let hamburger = {
    cliente: prompt ('digite o nome do cliente: '),
    base:30, 
    quantidadeLanches: Number (prompt ('digite a quantidade de lanches comprados: ')),
    ingredientesExtras: [], 
}
let extra1 = prompt ('digite o primeiro extra: ');
let extra2 = prompt ('digite o segundo extra: ');

let valorextra1 = Number (prompt ('valor do extra1: '));
let valorextra2 = Number (prompt ('valor do extra2: '));

hamburger.ingredientesExtras.push (extra1, extra2);

let valortotal = (hamburger.base + valorextra1 + valorextra2) * hamburger.quantidadeLanches;

if (hamburger.ingredientesExtras.length == 2 && hamburger.quantidadeLanches >2) {
    valortotal = (valortotal * 0.8);
}
console.log (hamburger);
console.log ('valor total a pagar: ' + valortotal);