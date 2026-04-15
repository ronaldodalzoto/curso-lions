//importanto nossos dados e funçoes

import contatos from "./contato";
import listarContatos from "./criarContato";
import adicionarContato from "./listaContatos";
import adicionarContato from "./listaContatos";
import atualizarContato from "./atualizarContato";
import removerContato from "./exclusao";

function mainMenu() {
    console.log('\n---menu de contatos---')
    console.log('1. listar contatos (read)')
    console.log('2. adiconar contato (create)')
    console.log('3. atualizar contato (update)')
    console.log('4. remover contato (delete)')
    console.log('sair')
}

//o loop mantém o programa rodando até o usuário escolher sair

while (opção !='5') {
    mainMenu()
    opçao = prompt ('escolha uma opção: ')

    switch (opçao) {
        case '1':
            //operaçao: READ
            listarContatos (contatos)
            break

        case '2':
            //operaçao: CREATE
            let telefones = [];
            let nome = prompt (nome: '');
            let email = prompt ('email: ')
    }
}