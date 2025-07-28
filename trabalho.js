/*
Primeiro teste
QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas'
*/

function geradorDeTagsDeIdentificacao(nomePet) {
  return nomePet.toUpperCase()
}

/*
Segundo teste
QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção
*/

function verificarSePodeSerAdotado(idade, porte) {
    if (idade === 1 && porte === 'M') {
        return true;
    }
    return false;
}

/*
Terceiro teste
QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário
*/  

function calcularConsumoDeRacao(nomePet, idade, peso) {
    const consumoDiario = peso * 300;
    return consumoDiario;
}


/*
Quarto teste
QUANDO o porte = pequeno, DEVE ser retornada a atividade adequada
*/

function decidirTipoDeAtividadePorPorte(porte) {
  if(porte == "pequeno"){
    return "brincar dentro de casa"
  }
  else if(porte == "medio"){
    return "brincar no quintal"
  }
  else if(porte == "grande"){
    return "brincar na praçinha"
  }
  else {
    return "porte inválido"
  }
}

/*
Quinto teste
QUANDO buscar dado de exemplo, DEVE retornar um valor de forma assíncrona
*/

async function buscarDadoAsync() {
  return 'Pipoca';
}


export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
}