const prompt = require ('prompt-sync') ();
let valorhoranormal = Number (prompt ('qual o valor da sua hora normal?'));
let horosextrastrabalhadas = Number (prompt ('quantas horas extras vc fez?'));

let valordahoraextra = valorhoranormal * 1.5;
let totalreceberextras = horosextrastrabalhadas * valordahoraextra;

console.log (`valor da sua hora extra: R$ ${valordahoraextra}`);
console.log (`total a receber de extras: R$ ${totalreceberextras}`)