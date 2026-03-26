const prompt = require ('prompt-sync')();

let estaçao = {
    id: 'sensor-01',
    local: 'laboratorio',
    temperatura: []
};

let leitura1 = Number (prompt ('digite a temperatura'));
let leitura2 = Number (prompt ('digite a temperatua'));
let leitura3 = Number (prompt ('digite a temperatura'));

estaçao.temperatura.push (leitura1);
estaçao.temperatura.push (leitura2);
estaçao.temperatura.push (leitura3);

let soma = estaçao.temperatura[0] + estaçao.temperatura[1] + estaçao.temperatura[2];
let media = soma/3;

if (media > 35) {
    estaçao.alerta = true;
    console.log (`PERIGO: MEDIA DE TEMPERATUTA EXTREMA (${media.toFixed(1)} graus) detectado no ${estaçao.local}`);
} else {
    estaçao.alerta = false
    console.log ('Temperatura dentro da normalidade.');
}

console.log ('\n--- Dados Finais da Estaçao ---')
console.log (estaçao)