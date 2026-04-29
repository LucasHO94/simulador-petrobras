export const questions = [
  {
    id: "q1_port_adv",
    discipline: "Língua Portuguesa",
    topic: "Concordância Verbal",
    difficulty: "Avançado",
    statement: "O emprego do sinal indicativo de crase em destaque está em conformidade com as normas da língua escrita padrão em:",
    options: {
      A: "O gerente de RH referiu-se à ela como uma candidata promissora para a vaga técnica.",
      B: "Após a reunião, os engenheiros começaram à discutir os protocolos de segurança do pré-sal.",
      C: "A empresa petrolífera decidiu atender à solicitações de novos investidores estrangeiros.",
      D: "A visita técnica às plataformas de perfuração foi agendada para o próximo feriado nacional.",
      E: "O navio petroleiro chegou à uma distância segura da costa brasileira para o transbordo."
    },
    correctOption: "D",
    resolution: {
      papoReto: "A alternativa D está correta porque o substantivo 'visita' rege a preposição 'a' (quem faz uma visita, faz uma visita a algo/alguém) e o substantivo plural 'plataformas' é antecedido pelo artigo definido feminino plural 'as'. A junção de a + as = às.",
      puloDoGato: "A Cesgranrio adora testar crase antes de pronomes, verbos e palavras no plural sem artigo. O segredo é lembrar que antes de plural, se a crase existir, o 'à' DEVE ser plural (às). Se for 'a' no singular antes de plural, nunca tem crase.",
      cascasDeBanana: {
        A: "Incorreta. Nunca se usa crase antes de pronomes pessoais (ela), pois estes não admitem artigo feminino.",
        B: "Incorreta. Erro clássico da banca: nunca ocorre crase antes de verbos no infinitivo (discutir).",
        C: "Incorreta. Como 'solicitações' está no plural e o 'a' está no singular, trata-se apenas da preposição simples. Para haver crase, deveria ser 'às solicitações'.",
        D: "Correta. Regência nominal correta e presença de artigo definido.",
        E: "Incorreta. Não se usa crase antes de artigos indefinidos (uma)."
      },
      dicaDeOuro: "Dizer 'a' no singular, diante de palavra no plural, crase nem a pau!"
    }
  },
  {
    id: "q_eng_sw_adv",
    discipline: "Conhecimentos Específicos",
    cargo: "Analista de Sistemas - Engenharia de Software",
    topic: "Arquitetura de Microserviços",
    difficulty: "Avançado",
    statement: "No contexto de arquitetura de microserviços, o padrão que permite manter a consistência de dados em transações distribuídas, sem depender de protocolos de bloqueio pesado como o 2PC (Two-Phase Commit), é conhecido como:",
    options: {
      A: "API Gateway",
      B: "Saga Pattern",
      C: "Database per Service",
      D: "CQRS (Command Query Responsibility Segregation)",
      E: "Circuit Breaker"
    },
    correctOption: "B",
    resolution: {
      papoReto: "O Saga Pattern gerencia transações distribuídas através de uma sequência de transações locais em cada serviço. Se uma falhar, o Saga executa transações compensatórias para desfazer as alterações anteriores, evitando o travamento de recursos do 2PC.",
      puloDoGato: "A Cesgranrio costuma cobrar a diferença fundamental entre consistência *strong* (ACID/2PC) e consistência *eventual* (Saga). O foco aqui é a escalabilidade: Sagas são preferíveis em cloud por não manterem travas síncronas entre serviços.",
      cascasDeBanana: {
        A: "Incorreta. O API Gateway é um ponto de entrada único para requisições, não resolve o problema de transações distribuídas.",
        B: "Correta. É a técnica padrão para workflow de transações distribuídas com compensação.",
        C: "Incorreta. Este é um princípio de design (isolamento de dados), mas não é o 'padrão' de coordenação de transações em si.",
        D: "Incorreta. CQRS separa leitura de escrita para performance, mas não gerencia a atomicidade de transações distribuídas.",
        E: "Incorreta. O Circuit Breaker gerencia falhas de rede para evitar efeitos em cascata, não consistência de dados."
      },
      dicaDeOuro: "Falou em 'transação distribuída' e 'compensação' em microserviços? Marque SAGA!"
    }
  }
];
