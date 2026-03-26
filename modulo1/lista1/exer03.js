const prompt = require ('prompt-sync') ();
let cotas = Number (prompt("quantas cotas possui ?"));
let dividendo = Number (prompt("valor do dividendo por cota: "));

let rendimentototal = cotas * dividendo;

if (rendimentototal >= 100){
    console.log ('voce ja tem saldo sufuciente para comprar uma nova cota e reinvestir!');
    } else {
        console.log (`rendimento recebido: R$ {valor}. acumule mais para reinvestir.`);
    }