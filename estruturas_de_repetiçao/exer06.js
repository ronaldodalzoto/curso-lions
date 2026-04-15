const prompt = require ('prompt-sync')();

let carrinhos = [
    {
        nome: 'joao',
        produtos: [100, 150, 200]
    },
    {
        nome: 'nicolas',
        produtos: [50, 50, 200]
    },
    {
        nome: 'ana',
        produtos: [110, 90, 100]
    }
]

carrinhos.forEach ((item) => {

    console.log ('quanto ${item.nome} tem de dinheiro para pagar?')
    dinheiro = prompt ('R$: ')
    item.produtos.forEach (preço => {
        totalCompra = totalCompra + preço
    })
    
    
    if (dinheiro >= totalCompra)  {
       console.log (`o troco é ${dinheiro - totalCompra}`}
        relatorio.push (item.nome) 
        }
        
        totalCompra = 0
    
        


    })


let totalCompra = 0
let dinheiro = 0
let relatorio = []