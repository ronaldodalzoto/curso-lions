const prompt = require ('prompt-sync') ()
let horas = parseFloat(prompt ('quantidade de horas estimadas'));
let ong = prompt('cliente é uma ong (sim/nao)');

let valortotal = horas *45

if (valortotal > 5000 && ong === "sim") {
    valortotal = valortotal *0.90
    console.log ('valor final com desconto: R$' + valortotal)
} else {
    console.log ('valor total: R$' + valortotal)
}