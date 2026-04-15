const prompt = require ('prompt-sync')();
let listaAlunos =['hugo', ' ronaldo' ];

let novoaluno = prompt ('novoaluno');

listaAlunos.push(novoaluno )

if (listaAlunos.length == 3) {
    console.log(`turma formada com sucesso! Alunos: ${listaAlunos}`)
}


//resoluçao do professor abaixo
import PromptSync from 'prompt-sync';
const prompt = PromptSync()

let novoAluno = ''
let listAlunos = ['pedro', 'nicolas']

novoAluno = prompt ('qual o nome do novo aluno? ')

listaAlunos.push(novoAluno)

if (listAlunos.length == 3) {
    console.log(`turma formada com sucesso: ${listAlunos}`)
}