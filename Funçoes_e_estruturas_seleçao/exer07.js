import PromptSync from "prompt-sync";
const prompt = PromptSync();

const conversorMoedas = (total, moeda) => {

    let reaisConvertido = 0

    switch (moeda) {
        case 1:
            reaisConvertido = total / 5;
            console.log (`conversao de moeda executada com sucesso! total em USD ${reaisConvertido.toFixed(2)}`);
            break;

        case 2:
            reaisConvertido = total / 6;
            console.log (`conversao de moeda executada com sucesso! total em EUR: ${reaisConvertido.toFixed(2)}`);
            break;
        
        case 3:
            reaisConvertido = total / 7;
            console.log (`conversao de moeda executada com sucesso! total em GBP: ${reaisConvertido.toFixed(2)}`);
            break;

        default:
            console.log (`opçao inválida, moeda nao cadastrada! total em reais: ${total}`);
        
    };
}
console.log ('quantos reais vc tem para trocar?');
let totalReais = Number (prompt('R: '));
console.log ('para qual moeda vc deseja converter?\n[1] - USD\n[2] - EUR\n[3] - GBP');
let moedaEscolhida = parseInt(prompt ('R: '));

conversorMoedas(totalReais, moedaEscolhida)