const prompt  = require ('prompt-sync')();

let nota = Number (prompt ('qual a nota obtida? '));
let classificaçao;
switch (true) {
    case (nota >= 90 && nota <= 100):
        classificaçao = 'nota A';
        console.log ('nota A');
        break;
    case (nota >= 80 && nota <= 89):
        classificaçao = 'nota B';
        console.log ('nota B');
        break;
    case (nota >= 70 && nota <= 79):
        classificaçao = 'nota C';
        console.log ('nota C');
        break;
    case (nota >= 60 && nota <= 69):
        classificaçao = 'nota D';
        console.log ('nota D');
        break;
    case (nota >= 0 && nota <= 59):
        classificaçao = 'nota F';
        console.log ('nota F');
        break;

    default:
        console.log ('nota invalida')
};


    if (classificaçao === 'nota A' || classificaçao === 'nota B' || classificaçao === 'nota C') {
        console.log ('resultado: aprovado!');

    } else if (classificaçao !== undefined) {
        console.log ('resultado: reprovado!')
    } 



