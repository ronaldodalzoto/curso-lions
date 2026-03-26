const prompt  = require ('prompt-sync')();

let codigoProduto = prompt ('digite o codigo do produto: (a1, b2, c3) ');

switch (codigoProduto) {
    case 'a1': 
        console.log ('vc escolheu batata chips');
        break;

    case 'b2':
        console.log ('vc escolheu amendoim');
        break;

    case 'c3':
        console.log ('vc escolheu biscoito de chocolate');
        break;
    default:
        console.log ('codigo invalido. tente novamente');
        break
}
