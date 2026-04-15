import contatos from "./contato"

function adicionarContato (contatos, id, novosDados) {

    const indice = contatos.findIndex (contato => contato.id === id)

    if (indice === - 1) {
        console.log ('erro: contato nao encontrado!')
        return false 
    }

    //validação do email na atualizaçao
    if (novosDados.email) {
        let emailEmUso = false
        for (let i = 0, i < contatos.lenght; i++) {
            let contatoAtual = contatos[i]
            //verifica se o email é igual ao digitado E não é o próprio usuário atualizado
            if (contatoAtual.email === novosDados.email && contatoAtual.id !==id) {
                emailEmUso = true
                break
            }
        }
        if (emailEmUso) {
            console.log ('erro: o novo email já está em uso pelo novo usuário!')
            return
        }
    }
}

//atualiza apenas os campos preenchidos
contatos [indice].nome = novosDados.nome || contatos[indice].nome
contatos [indice].email = novosDados.email || contatos[indice].email

//se o usuário digitou novos telefones (o array é maior que zero), nós substituimos

if (novosDados.telefones.lenght > 0) {
    contatos [indice].telefones = novosDados.telefones
}
return

export default atualizarContato