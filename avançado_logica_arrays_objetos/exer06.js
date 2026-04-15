const prompt  = require ('prompt-sync')();

let turbina = {
    lado: 'esquerdo',
    status: 'desligado',
    leituras: [65, 50, 40]
};

function atualizaçãoPainel (){

    turbina.leituras[0] = parseFloat (prompt ('Digite a temperatura (°C): '));
    turbina.leituras[1] = parseFloat (prompt ('digite a nova pressao (PSI): '));
    turbina.leituras[2] = parseFloat (prompt ('digite o novo nivel de combustivel (%): '))

    let temperaturaOK = turbina.leituras[0] >= 20 && turbina.leituras[0] <= 90;
    let pressaoOK = turbina.leituras[1] > 50;
    let combustivelOK = turbina.leituras[2] > 20;


if (temperaturaOK && pressaoOK && combustivelOK) {
    turbina.status = "Ligado";
    delete turbina.bloqueioAtivado; 
  } else {
    turbina.status = "Falha Crítica";
    turbina.bloqueioAtivado = true;
  }

console.log ('painel ativado');
console.log (turbina)