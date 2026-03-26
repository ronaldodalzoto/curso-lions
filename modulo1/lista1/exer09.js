const prompt = require ('prompt-sync') ();
let valortotalemvendas = Number (prompt ('qual o valor de venda em eletronicos esse mes? '));
let comissao = 0

if (valortotalemvendas >= 20000){
    comissao = valortotalemvendas * 0.05
} else {
    comissao = valortotalemvendas * 0.02
}
console.log ('a sua comissao foi R$ '+ comissao)