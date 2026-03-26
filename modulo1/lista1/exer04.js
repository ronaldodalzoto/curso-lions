const prompt = require ('prompt-sync') ();
let distancia = Number (prompt('distancia percorrida (em Km)'));
let quantidade = Number (prompt('quantidade de combustivel consumido (em L)'));

let mediatotal = distancia / quantidade
console.log (mediatotal)
if (mediatotal < 10) {
    console.log ('alerta: veiculo consumindo muito combustivel. necessario agendar revisao mecanica') 
} else {
    console.log ('consumo dentro do padrao operacional')
}