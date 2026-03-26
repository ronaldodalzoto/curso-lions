const prompt = require ('prompt-sync')();

let paciente = {}
let nome = prompt ('nomeCachorro ')
let raça = prompt ('raça ')
let idade = Number (prompt ('idade '))

if (idade >= 8){
console.log (`O paciente ${nome} já é sênior e precisa de exames de rotina`)
} else {
    console.log ('Paciente na faixa de idade regular')
}
