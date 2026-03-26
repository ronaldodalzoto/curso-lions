const prompt  = require ('prompt-sync')();

let carrinho = {
    cliente: 'ronaldinho gaucho',
    assinatura: 'padrao',
    itenspreço: []
};

carrinho.itenspreço.push (Number(prompt('preço pruduto1: ')));
carrinho.itenspreço.push (Number(prompt('preço produto2: ')));
carrinho.itenspreço.push (Number(prompt('preço produto3: ')));

let valortotal = carrinho.itenspreço[0] + carrinho.itenspreço[1] + carrinho.itenspreço[2];

if (valortotal > 200 || carrinho.assinatura === 'prime') {
    carrinho.fretegratis = true
    console.log ('Parabens, vc ganhou frete gratis!');
} else {
    valortotal +=30;
    carrinho.fretegratis = false
}
    console.log ('carrinho atualizado', carrinho);
    console.log (`valor final a pagar: R$ ${valortotal.toFixed (2)}`);
