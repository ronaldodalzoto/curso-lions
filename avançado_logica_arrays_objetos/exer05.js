const prompt  = require ('prompt-sync')();

let projeto = {
    coodenador: prompt ('digite o nome do coordenador: '),
    limiteVagas: 3,
    areaEstudo: 'Tecnologia',
        mentores: [
        {nome1: 'ana', areaEstudo: 'tecnologia'},
        {nome2: 'joao', areaEstudo: 'tecnologia'}
        ],
        status: 'aberto'
};

let novoCandidato = {
    nome: prompt ('digite o nome do novo candidato: '),
    areaEstudo: prompt ('digite a area de estudo: ')
};

if (projeto.mentores.length < projeto.limiteVagas && novoCandidato.areaEstudo === projeto.areaEstudo) 
{
    projeto.mentores.push(novoCandidato);
    console.log("Candidato cadastrado com sucesso!");
  } else {
    projeto.status = "Bloqueado para Inscrições";
    console.log("Cadastro não permitido.");
  }
  
  console.log ("Ficha do Projeto:");
  console.log (projeto);