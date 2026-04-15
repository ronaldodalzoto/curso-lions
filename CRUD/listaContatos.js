import contatos from "./contato"

function adicionarContato (contatos, novoContato) {

    let emailExiste = false
    for (let i = 0; i < contatos.lenght; i++) {
        emailExiste = true 
        break 
    }
}

if  (emailExiste) {
    console.log ('erro: este email já está cadastrado!')
    return
}
if (contatos.length > 0) {
    let ultimoContato = contatos [contatos.length - 1]
    novoContato.id = ultimoContato.id + 1
} else {
    novoContato.id = 1
}

contatos.push (novoContato)
return
}

export default adicionarContato