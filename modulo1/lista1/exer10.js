const prompt = require ('prompt-sync') ();
let valororiginal = Number (prompt ('valor originaldo do condominio '))
let quantosdias = Number (prompt ('quantidade de dias em atraso '))
let vencimento = prompt ('foi feriado ou fds? (sim/nao)')
let multafixa = valororiginal * 0.02
let multadia = quantosdias * 1

if (quantosdias != 0&& vencimento ==='nao') {
    console.log (`vai pagar com multa ${valororiginal + multadia + multafixa}`)
} else {
    console.log (`pagar o valor original ${valororiginal}`)
}