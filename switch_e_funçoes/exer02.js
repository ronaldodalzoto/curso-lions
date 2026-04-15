const prompt = require('prompt-sync')();

// 1. Criando a Arrow Function de validação
const validarAcesso = (nome, codigo) => {
    // Regra: nome > 5 letras E código > 1000
    if (nome.length > 5 && codigo > 1000) {
        return true;
    } else {
        return false;
    }
};

// 2. Entrada de dados
console.log("--- SISTEMA DE CREDENCIAIS ---");
const nomeUsuario = prompt("Digite o nome do usuário: ");
const codigoCracha = Number(prompt("Digite o código do crachá: "));

// 3. Execução e Lógica de Exibição
const ehValido = validarAcesso(nomeUsuario, codigoCracha);

if (ehValido) {
    console.log("SUCESSO: Acesso Concedido!");
} else {
    console.log("ERRO: Acesso Negado!");
    console.log("(Verifique se o nome tem mais de 5 letras e o código é maior que 1000)");
}