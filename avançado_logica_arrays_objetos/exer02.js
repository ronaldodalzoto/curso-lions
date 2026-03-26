const prompt  = require ('prompt-sync')();

let atleta = {
    nome: 'ronaldinho gaucho',
    pesoatual: 72,
    meta: 'performance',
    maratona: [25, 30, 40] 
};

let hoje = Number (prompt('distancia de hj: '));

let anterior = atleta.maratona [2];
atleta.maratona.push (hoje);

let media = (atleta.maratona[1] + atleta.maratona[2] + atleta.maratona [3]) /3;

if (media > 20 && atleta.meta === 'emagrecimento') {
    atleta.pesoatual = atleta.pesoatual - 1;
    atleta.selo = 'meta atingida';

} else if (atleta.meta === 'performance' && hoje > anterior){
    atleta.selo = 'novo recorde pessoal';
}
console.log (atleta);


