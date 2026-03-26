const prompt = require ('prompt-sync')();
let listaAlunos =['hugo', ' ronaldo' ];

let novoaluno = prompt ('novoaluno');

listaAlunos.push(novoaluno )

if (listaAlunos.length == 3) {
    console.log(`turma formada com sucesso! Alunos: ${listaAlunos}`)
}