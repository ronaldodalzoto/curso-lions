const prompt = require ('prompt-sync') ()
function calcularBonus(nivel, salario) {
    let percentual;

    // Estrutura de seleção de casos (switch)
    switch (nivel.toLowerCase()) {
        case "estagiario":
            percentual = 0.10;
            break;
        case "junior":
            percentual = 0.15;
            break;
        case "pleno":
            percentual = 0.20;
            break;
        default:
            percentual = 0; // Para qualquer outro caso não mapeado
            break;
    }

    return salario * percentual;
}

// 2. Pedindo os dados ao usuário
let cargoInformado = prompt("Digite o nível do cargo (estagiario, junior ou pleno): ");
let salarioInformado = Number(prompt("Digite o salário atual: "));

// 3. Acionando a função e armazenando o resultado
let valorDoBonus = calcularBonus(cargoInformado, salarioInformado);

// 4. Exibindo o resultado
if (valorDoBonus > 0) {
    console.log ("O bônus para o cargo de " + cargoInformado + " é: R$ " + valorDoBonus.toFixed(2));
} else {
    console.log ("Nível de cargo não identificado ou sem bônus previsto. Bônus: R$ 0.00");
}