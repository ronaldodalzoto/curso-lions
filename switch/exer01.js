const prompt  = require ('prompt-sync')();

let genero = prompt ('qual genero vc gostaria de assistir? ')
switch (genero){
    case 'terror':
        console.log ('sala 3');
        break;
    case 'açao':
        console.log ('sala1');
        break;
    case 'comedia':
        console.log ('sala2');
        break;
    case 'animaçao':
        console.log ('sala4');
        break;

    default:
        console.log ('genero desconhecido');
        break;
}
