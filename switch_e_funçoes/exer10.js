const prompt = require

function registrarVenda (saldo,venda) {

    return saldo + venda
}

function registrarDespesa (saldo, despesa) {

}

let operaçao = ''
let venda = 0
let caixa = {
    operador: '',
    saldoinicial: 100,
    historicoTransaçoes: []

}
while (operaçao != 'sair') {

}
    console.log ('qual operaçao vc deseja realizar?\n[V] - venda\n'[D] - despesa\nR: ')
    operaçao = prompt ()

switch (operaçao) {

    case 'V':
        venda = parseFloat (prompt ('quanto foi o valor da venda? '))
        caixa.saldo = registrarVenda (caixa.saldo, venda)
        caixa.historicoTransaçoes.push ('saida')
        break
    default:
        console.log ('opçao invalida!')
        break
    case 'D':
        despesa = parseFloat (prompt ('quanto foi o valor da despesa? '))
        caixa.saldo = registrarDespesa (caixa.saldo, despesa)
        caixa.historicoTransaçoes.push ('saida')
        break
    case 'sair':
        console.log ('programa fechando...')
        break
    default:
        console.log ('opçao invalida')
        break
}
}

console.table (caixa)