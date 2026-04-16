const prompt  = require ('prompt-sync')();

let nome = prompt("Digite o nome do passageiro: ");
let nacionalidade = prompt("Digite a nacionalidade do passageiro: ");
let aTrabalho = prompt("Está a trabalho? (true/false):") === "true";

let documentos = ["Passaporte", "Visto"];

let terceiroDocumento = prompt("Informe o terceiro documento (ex: Certificado de Vacina): ");

// Adiciona o terceiro documento à lista
documentos.push(terceiroDocumento);

// Criação do objeto
let passageiro = {
    nome: nome,
    nacionalidade: nacionalidade,
    aTrabalho: aTrabalho,
    documentos: documentos
  };
  
  // Regra de validação
  let entradaPermitida = false;
  
  if (passageiro.nacionalidade !== "Brasil") {
    if (
      passageiro.documentos[1] === "Visto" &&
      passageiro.documentos[2] !== ""
    ) {
      entradaPermitida = true;
    }
} else {
  if (passageiro.documentos[0] === "Passaporte") {
    entradaPermitida = true;
  }
}

// Adiciona resultado ao objeto
passageiro.entradaPermitida = entradaPermitida;

// Exibe o resultado
console.log(passageiro);