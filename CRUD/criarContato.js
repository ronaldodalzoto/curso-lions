function listarContatos (contatos) {
    if (contatos.lenght === 0){
        console.log ('nenhum contato cadastrado.')
        return
    }

    contatos.forEach (contato => {
        console.log (`\nID: ${contato.id}`)
        console.log (`Nome: ${contato.nome}`)
        console.log (`Email: ${contato.email}`)
        console.log (`Telefones: ${contato.telefones.join(' | ')}`)

    })
       
    }
export default listarContatos