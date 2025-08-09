export const getLevel = (score) => {
  if (score <= 8) return 'Iniciante'
  if (score <= 16) return 'Intermediário'
  return 'Avançado'
}

export const evaluations = [
    {
        range: [0, 10],
        title: "Exater Iniciante",
        text: "E aí, exater! Não desanime com o resultado, viu? O importante é que você está no caminho certo e já descobriu que precisa dar uma atenção a mais aos pontos básicos sobre o exame para se preparar para a prova. Deu pra ver que você ainda está um pouco confuso. A dica de ouro é: mergulhe sem medo no edital do Exato! Faça isso como um exercício de leitura e interpretação de texto, que são habilidades essenciais para você se sair bem na prova. No edital tem tudo super detalhado para te orientar nessa jornada. Quanto mais você entender as regras, mais seguro vai se sentir pra arrasar na prova. Em caso de dúvidas, converse com seus professores!",
        illustration: "iniciante"
    },
    {
        range: [11, 17],
        title: "Exater em Processo de Evolução",
        text: "Massa, exater! Você está no meio do caminho, com uma boa base de conhecimento sobre o Exato! Isso mostra que você já sacou a vibe da prova e está por dentro dos principais pontos. Agora, que tal conferir aqueles detalhes que ainda escaparam? Revise o edital, refaça o quiz e foque no que te deixou com dúvidas. Depois, é só seguir com o estudo e revisão dos conteúdos que caem na prova (que também estão descritos no edital). Com mais uma leitura caprichada você chega lá!",
        illustration: "intermediario"
    },
    {
        range: [18, 22],
        title: "Exater Avançado",
        text: "Uau, exater! Você mandou muito bem! Esse resultado mostra que você está super por dentro de tudo sobre o Exato, é praticamente um especialista! Já que você está bem confiante sobre o exame, que tal conversar com seus colegas de turma? Talvez eles tenham dúvidas sobre o processo e você possa ajudá-los! Continue nesse ritmo, e agora foque nos estudos e revisão de conteúdos que irão cair na prova (eles também estão descritos lá no edital!). Seu futuro na universidade está cada vez mais próximo!",
        illustration: "avancado"
    }
];
