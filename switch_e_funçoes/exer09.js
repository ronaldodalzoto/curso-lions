const prompt = require ('prompt-sync') ()

// Função que avalia a criticidade e retorna o setor
function triagemChamado(nivel) {
    switch (nivel) {
      case "1":
        return "Atendimento Básico";
      case "2":
        return "Equipe Especializada";
      case "3":
        return "Gestão de Crise";
      default:
        return null; // Retorna null se o nível for inválido
    }
  }
  
  // Criando a lista vazia de Fila de Atendimento
  let filaDeAtendimento = [];
  
  // Pedindo a criticidade ao usuário via prompt
  const entrada = prompt("Informe a criticidade do problema técnico (1, 2 ou 3): ");
  
  // Descobrindo o setor responsável
  const setor = triagemChamado(entrada);
  
  // Validação e atualização da lista
  if (setor) {
    filaDeAtendimento.push(setor);
    console.log("Triagem realizada com sucesso!");
    console.log("Setor designado: " + setor);
    console.log("Fila de Atendimento atualizada:", filaDeAtendimento);
  } else {
    console.log("Erro: Nível de criticidade inválido. Operação cancelada.");
  }