const prompt  = require ('prompt-sync')();

let cliente = {
    nome: 'Bolsonaro',
    categoria: 'Gold',
    historico: [
      { destino: 'São Paulo', milhas: 2200 },
      { destino: "Rio de Janeiro", milhas: 1800 }
    ]
  };

  let terceiroVoo = prompt ('destino do terceiro voo: ');
  let milhasNovo = Number (prompt ('digite a quantidade de milhas desse voo: '));

  cliente.historico.push ({destino: terceiroVoo, milhas: milhasNovo})

  let somaTotal = 0;
  for (let voo of cliente.historico) {
    somaTotal += voo.milhas}

  if (somaTotal > 5000) {
    let saldoFinal = somaTotal - 5000;
    cliente.categoria = 'platinum';
    console.log ('Parabens, vc é platinum');
    console.log ('saldo após o resgate: ' + saldoFinal);
  } else {
    cliente.categoria = 'gold';
    let faltam = 5000 - somaTotal;

    console.log (`categoria gold, faltam ${faltam} para seu upgrade.`)
  }
