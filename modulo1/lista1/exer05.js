const prompt = require ('prompt-sync') ();
let salario = Number (prompt ('qual o seu salario mensal?'));
let valorparcela = Number (prompt ('qual o valor da parcela que deseja pagar?'));
let temrestriçao = prompt ('voce tem restriçao no cpf (sim/nao)');
let limiteseguro = salario * 0.30

console.log (`seu limite de parcela permitido é R$ ${limiteseguro}`);

if (valorparcela > limiteseguro || temrestriçao === 'sim') {
    console.log ('resultado: credito negado por risco financeiro.')
    } else {
        console.log ('resultado: credito aprovado! parabens');
    }