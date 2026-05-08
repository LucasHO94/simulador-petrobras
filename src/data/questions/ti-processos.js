// Banco de questões: ti-processos (224 questões)
export const questions_ti_processos = [
  {
    "id": "q_engsw_018",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura Orientada a Serviços (SOA)",
    "topic": "Arquitetura Orientada a Serviços (SOA)",
    "difficulty": "Difícil",
    "statement": "Comparando a Arquitetura Orientada a Serviços (SOA) tradicional com a arquitetura de Microsserviços, qual componente é frequentemente central e essencial no SOA, mas desencorajado nos Microsserviços?",
    "options": {
      "A": "Load Balancer.",
      "B": "Enterprise Service Bus (ESB).",
      "C": "Message Queue.",
      "D": "API Gateway.",
      "E": "Docker Container."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "SOA utiliza o ESB como um 'cérebro central' que faz roteamento, transformação e orquestração pesada. Já os Microsserviços seguem a filosofia de 'Smart Endpoints and Dumb Pipes' (pontas inteligentes e tubos burros), preferindo lógica descentralizada.",
      "puloDoGato": "O ESB no SOA acaba virando um ponto único de falha e de complexidade. Microsserviços tentam evitar isso ao máximo para manter a agilidade.",
      "cascasDeBanana": {
        "A": "Incorreta. API Gateways são comuns e recomendados em microsserviços.",
        "B": "Correta. É o diferencial clássico de centralização vs descentralização.",
        "C": "Incorreta. Containers são agnósticos à arquitetura, embora mais comuns em microsserviços.",
        "D": "Incorreta. Ambos usam balanceamento de carga.",
        "E": "Incorreta. Ambos podem usar filas para desacoplamento."
      },
      "dicaDeOuro": "SOA = ESB (Centralizado). Microsserviços = Descentralizado."
    }
  },
  {
    "id": "q_engsw_019",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura Orientada a Serviços (SOA)",
    "topic": "Barramento de Serviços Corporativos (ESB)",
    "difficulty": "Médio",
    "statement": "Uma das principais funções de um Enterprise Service Bus (ESB) é realizar a 'transformação de mensagens'. Isso significa que o ESB pode:",
    "options": {
      "A": "Traduzir dados de um formato (ex: XML) para outro (ex: JSON) para permitir a interoperabilidade entre sistemas legados e modernos.",
      "B": "Criptografar todas as mensagens para garantir a segurança ponta-a-ponta.",
      "C": "Bloquear o acesso de usuários não autorizados à rede corporativa.",
      "D": "Excluir mensagens que não foram lidas em mais de 24 horas.",
      "E": "Aumentar a velocidade física da fibra óptica entre os data centers."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A transformação é o papel de 'tradutor' do ESB. Ele permite que um sistema legado que só fala XML se comunique com um sistema novo que fala JSON, sem que nenhum dos dois precise mudar seu código interno.",
      "puloDoGato": "Interoperabilidade é a palavra-chave. O ESB é a ponte que une tecnologias differentes.",
      "cascasDeBanana": {
        "B": "Incorreta. Embora possa ajudar na segurança, transformação refere-se ao formato do dado.",
        "A": "Correta. Tradução de protocolos e formatos.",
        "D": "Incorreta. Isso é política de expiração de filas (TTL).",
        "C": "Incorreta. Isso é papel de Firewall/IAM.",
        "E": "Incorreta. ESB é software de middleware, não hardware de rede."
      },
      "dicaDeOuro": "Transformação no ESB = Tradução de formatos (XML <-> JSON)!"
    }
  },
  {
    "id": "q_engsw_b2_006",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "CMMI-DEV v2.0 - Níveis de Maturidade",
    "difficulty": "Médio",
    "statement": "No modelo CMMI (Capability Maturity Model Integration), uma organização que possui processos estáveis, medidos, controlados e previsíveis, utilizando técnicas estatísticas para gerenciar a performance, está no nível de maturidade:",
    "options": {
      "A": "4 - Gerenciado Quantitativamente (Quantitatively Managed).",
      "B": "3 - Definido (Defined).",
      "C": "5 - Em Otimização (Optimizing).",
      "D": "2 - Gerenciado (Managed).",
      "E": "1 - Inicial (Initial)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Nível 4 é o divisor de águas estatístico. No Nível 3, você tem processos padronizados na empresa toda. No Nível 4, você começa a usar matemática e estatística para prever a qualidade. Você sabe, por exemplo, que se o time X codar Y horas, a probabilidade de ter Z bugs é de 5%.",
      "puloDoGato": "Palavra mágica: 'Quantitativamente' ou 'Estatística'. Viu isso em CMMI? Marque Nível 4.",
      "cascasDeBanana": {
        "D": "Incorreta. Nível 2 foca em gerenciar projetos individualmente.",
        "B": "Incorreta. Nível 3 foca em padronização organizacional.",
        "A": "Correta. Uso de métricas estatísticas para controle de processos.",
        "C": "Incorreta. Nível 5 foca em melhoria contínua e inovação.",
        "E": "Incorreta. Nível 1 é o caos/ad-hoc."
      },
      "dicaDeOuro": "CMMI 4 = Matemática/Estatística nos processos!"
    }
  },
  {
    "id": "q_engsw_b2_007",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "MPS.BR - Níveis de Maturidade",
    "difficulty": "Médio",
    "statement": "O modelo brasileiro MPS.BR possui 7 níveis de maturidade (de G até A). O nível que corresponde ao 'Inovação e Otimização' (topo da escala) é o nível:",
    "options": {
      "A": "Nível D.",
      "B": "Nível E.",
      "C": "Nível A.",
      "D": "Nível G.",
      "E": "Nível C."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O MPS.BR foi criado para ser mais acessível que o CMMI, mas ele tem mais degraus (7 contra 5). A escala vai do G (mais básico - Parcialmente Gerenciado) até o A (mais avançado - Em Otimização).",
      "puloDoGato": "Cuidado para não inverter! O 'A' é o melhor. No CMMI o melhor é o '5'.",
      "cascasDeBanana": {
        "A": "Incorreta. G é o nível de entrada (Parcialmente Gerenciado).",
        "B": "Incorreta. D é o nível 'Larga Escala'.",
        "C": "Correta. Nível máximo de excelência do modelo brasileiro.",
        "D": "Incorreta. E é o nível 'Parcialmente Definido'.",
        "E": "Incorreta. C é o nível 'Definido'."
      },
      "dicaDeOuro": "MPS.BR: A de 'Altíssimo nível' (Topo)!"
    }
  },
  {
    "id": "q_engsw_b2_011",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Configuração",
    "topic": "Baseline (Linha de Base)",
    "difficulty": "Médio",
    "statement": "Na Gestão de Configuração de Software, uma 'Baseline' (Linha de Base) é definida como:",
    "options": {
      "A": "O nível de salário mínimo dos desenvolvedores da equipe.",
      "B": "Uma especificação ou produto que foi formalmente revisado e aprovado, servindo de base para desenvolvimentos posteriores e que só pode ser alterado através de procedimentos formais de controle de mudanças.",
      "C": "Uma ferramenta de chat usada para comunicação interna.",
      "D": "O código-fonte que ainda não foi testado.",
      "E": "A primeira linha de código escrita em um projeto."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A Baseline é uma 'foto' oficial do sistema em um estado estável. Depois que a Baseline é batida (ex: Versão 1.0), ninguém pode sair mudando as coisas 'de boca'. Toda alteração precisa passar pelo Comitê de Controle de Mudanças (CCB). Isso evita o caos no projeto.",
      "puloDoGato": "Baseline = Estabilidade. É o ponto de referência para sabermos o que exatamente estamos entregando.",
      "cascasDeBanana": {
        "A": "Incorreta. Itens de configuração não testados não devem compor uma baseline.",
        "B": "Correta. Conceito fundamental de controle e auditoria.",
        "C": "Incorreta. Pode ser qualquer marco importante, não necessariamente o início físico.",
        "D": "Incorreta. Sem relação com RH.",
        "E": "Incorreta. Baseline não é ferramenta, é um marco/conceito."
      },
      "dicaDeOuro": "Baseline = Foto oficial aprovada. Mudou? Tem que pedir permissão formal!"
    }
  },
  {
    "id": "q_engsw_b2_013",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "Revisão de Código (Code Review / Peer Review)",
    "difficulty": "Médio",
    "statement": "Qual é o principal benefício técnico de realizar sessões de 'Peer Review' (Revisão por Pares) regularmente em um time de desenvolvimento?",
    "options": {
      "A": "Substituir a necessidade de rodar testes automatizados.",
      "B": "Aumentar o estresse da equipe ao expor os erros de cada um publicamente.",
      "C": "Permitir que o gerente de projetos demita quem escreve código feio.",
      "D": "Aumentar o tempo total de desenvolvimento sem gerar valor algum.",
      "E": "Identificar defeitos precocemente, disseminar o conhecimento técnico entre os membros do time e garantir a adesão aos padrões de codificação."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Duas cabeças pensam melhor que uma. No Code Review, um colega olha seu código antes de ele ir para o sistema. Ele pode achar um erro de lógica que você não viu, sugerir uma forma mais elegante de resolver ou aprender algo novo com sua solução.",
      "puloDoGato": "O objetivo não é julgar a pessoa, mas elevar a qualidade do produto e do time. É uma ferramenta poderosa de mentoria.",
      "cascasDeBanana": {
        "B": "Incorreta. O foco deve ser colaborativo e construtivo.",
        "E": "Correta. Melhora a qualidade e nivela o conhecimento técnico do time.",
        "A": "Incorreta. Revisão humana e testes automatizados são complementares.",
        "C": "Incorreta. Ferramenta de qualidade, não de punição administrativa.",
        "D": "Incorreta. O 'investimento' de tempo se paga com menos bugs em produção."
      },
      "dicaDeOuro": "Peer Review = Olhar fresco achando o que o autor viciou e não viu!"
    }
  },
  {
    "id": "q_engsw_b2_021",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "ISO/IEC 25010 - Usabilidade",
    "difficulty": "Médio",
    "statement": "Segundo a norma ISO/IEC 25010, a característica de qualidade 'Usabilidade' é definida pelo grau em que um produto ou sistema pode ser usado por usuários específicos para atingir objetivos específicos com eficácia, eficiência e satisfação em um contexto de uso específico. Uma de suas subcaracterísticas é:",
    "options": {
      "A": "Escalabilidade.",
      "B": "Tolerância a falhas.",
      "C": "Modularidade.",
      "D": "Adaptabilidade.",
      "E": "Proteção contra erros do usuário."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Usabilidade na ISO 25010 tem subcaracterísticas como: Reconhecimento da adequação, Aprendizabilidade, Operabilidade, Proteção contra erros do usuário, Estética da interface e Acessibilidade.",
      "puloDoGato": "Cuidado com 'Adaptabilidade' (Portabilidade) e 'Modularidade' (Manutenibilidade). Proteção contra erros é a capacidade do sistema evitar que o usuário faça bobagem ou mitigar o erro.",
      "cascasDeBanana": {
        "D": "Incorreta. Faz parte da Portabilidade.",
        "E": "Correta. É subcaracterística direta de Usabilidade.",
        "C": "Incorreta. Faz parte da Manutenibilidade.",
        "B": "Incorreta. Faz parte da Confiabilidade.",
        "A": "Incorreta. Não é uma característica primária da ISO 25010 (costuma entrar em Performance ou Escalabilidade de infra)."
      },
      "dicaDeOuro": "Usabilidade = O quão fácil e seguro é para o humano usar o sistema."
    }
  },
  {
    "id": "q_engsw_b2_026",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Configuração",
    "topic": "Estratégias de Branching (Gitflow)",
    "difficulty": "Médio",
    "statement": "No modelo Gitflow, qual branch é considerada a branch principal onde o código em estado de produção é mantido?",
    "options": {
      "A": "feature",
      "B": "release",
      "C": "hotfix",
      "D": "master (ou main)",
      "E": "develop"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "No Gitflow: 'master/main' é o código estável em produção. 'develop' é onde a integração de novas funcionalidades acontece. 'feature' para novas tarefas, 'release' para preparação de nova versão e 'hotfix' para bugs críticos em produção.",
      "puloDoGato": "A 'develop' é a branch mais ativa, mas a 'master' é a que reflete o que o usuário final está usando.",
      "cascasDeBanana": {
        "E": "Incorreta. Develop é para desenvolvimento e integração, não produção final.",
        "D": "Correta. Branch de estado de produção.",
        "A": "Incorreta. Branch temporária para funcionalidades.",
        "C": "Incorreta. Branch temporária para correções urgentes.",
        "B": "Incorreta. Branch temporária para preparo de lançamento."
      },
      "dicaDeOuro": "Master = Sagrada (Produção). Develop = Canteiro de Obras!"
    }
  },
  {
    "id": "q_engsw_b2_032",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Processos de Software",
    "topic": "DevOps - CI/CD",
    "difficulty": "Médio",
    "statement": "No contexto de DevOps, o termo 'Continuous Deployment' (Implantação Contínua) significa que:",
    "options": {
      "A": "O sistema é desligado todos os dias para manutenção.",
      "B": "Toda alteração que passa nos testes automatizados é implantada automaticamente em produção, sem intervenção humana manual.",
      "C": "O gerente precisa assinar um papel físico toda vez que o site for atualizado.",
      "D": "O código é enviado por e-mail para os clientes testarem.",
      "E": "O código é escrito continuamente 24 horas por dia por robôs."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "CI (Integração Contínua) foca em juntar o código e testar. CD pode ser Continuous Delivery (pronto para produção, mas clique manual) ou Continuous Deployment (vai direto para o ar se passar nos testes).",
      "puloDoGato": "Diferença sutil: Delivery = Entrega (Porta da fábrica). Deployment = Implantação (Na mão do cliente).",
      "cascasDeBanana": {
        "A": "Incorreta. Automação de escrita não é CD.",
        "B": "Correta. Fluxo totalmente automatizado até o usuário final.",
        "C": "Incorreta. Isso descreve um processo manual e burocrático (Anti-DevOps).",
        "D": "Incorreta. DevOps busca alta disponibilidade, não janelas de downtime.",
        "E": "Incorreta. Beta testing não é CD."
      },
      "dicaDeOuro": "Deployment Contínuo = Passou no teste? Está no ar!"
    }
  },
  {
    "id": "q_engsw_b2_033",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "CMMI v2.0 - Níveis de Maturidade",
    "difficulty": "Difícil",
    "statement": "No modelo CMMI (Capability Maturity Model Integration) v2.0, o nível de maturidade em que a organização foca na melhoria contínua do desempenho dos processos através de inovação e otimização é o:",
    "options": {
      "A": "Nível 4 - Gerenciado Quantitativamente.",
      "B": "Nível 2 - Gerenciado.",
      "C": "Nível 5 - Em Otimização.",
      "D": "Nível 3 - Definido.",
      "E": "Nível 1 - Inicial."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Nível 5 (Optimizing) é o topo da pirâmide. Nele, a empresa usa dados estatísticos do Nível 4 para prever o futuro e inovar nos processos de forma proativa.",
      "puloDoGato": "Lembrete rápido: 1. Caos. 2. Projetos ok. 3. Empresa ok. 4. Números ok. 5. Melhoria contínua.",
      "cascasDeBanana": {
        "E": "Incorreta. Nível 1 é ad-hoc e caótico.",
        "B": "Incorreta. Nível 2 foca em gerenciamento de projetos básicos.",
        "D": "Incorreta. Nível 3 foca em processos padronizados na empresa toda.",
        "A": "Incorreta. Nível 4 foca em controle estatístico e métricas precisas.",
        "C": "Correta. Foco em inovação e performance otimizada."
      },
      "dicaDeOuro": "Nível 5 = O topo. Inovação baseada em dados reais!"
    }
  },
  {
    "id": "q_engsw_b2_034",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Qualidade de Software",
    "topic": "MPS.BR - Diferença de Maturidade e Capacidade",
    "difficulty": "Difícil",
    "statement": "O modelo MPS.BR (Melhoria de Processo de Software Brasileiro) possui níveis de maturidade que vão do A ao G. Qual das seguintes alternativas apresenta a sequência CORRETA do nível de maior maturidade para o de menor maturidade?",
    "options": {
      "A": "1, 2, 3, 4, 5",
      "B": "Alpha, Beta, Gamma, Delta",
      "C": "Iniciante, Bronze, Prata, Ouro, Platina",
      "D": "G, F, E, D, C, B, A",
      "E": "A, B, C, D, E, F, G"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No MPS.BR, 'A' é o melhor (Em Otimização) e 'G' é o nível de entrada (Parcialmente Gerenciado). É o inverso da ordem alfabética de 'importância'.",
      "puloDoGato": "Dica de prova: Nível G e F correspondem aproximadamente ao CMMI Nível 2. Nível C ao CMMI 3.",
      "cascasDeBanana": {
        "E": "Correta. Sequência decrescente de maturidade (A é o maior).",
        "D": "Incorreta. Seria da menor para a maior maturidade.",
        "A": "Incorreta. Essa é a escala do CMMI.",
        "C": "Incorreta. Termos de gamificação não oficiais.",
        "B": "Incorreta. Alfabeto grego não utilizado no modelo."
      },
      "dicaDeOuro": "MPS.BR = Nota A é a melhor nota!"
    }
  },
  {
    "id": "q_engsw_b2_043",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Processos de Software",
    "topic": "Modelo em Cascata (Waterfall)",
    "difficulty": "Médio",
    "statement": "Qual a principal característica do modelo de processo de software em 'Cascata'?",
    "options": {
      "A": "Não existe fase de planejamento, apenas codificação rápida.",
      "B": "O desenvolvimento é guiado exclusivamente por testes automatizados.",
      "C": "As fases são executadas de forma iterativa e incremental.",
      "D": "O cliente participa ativamente do desenvolvimento todos os dias.",
      "E": "Cada fase deve ser concluída antes que a próxima fase possa começar, seguindo uma ordem linear."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Cascata é o modelo tradicional. Requisitos -> Análise -> Design -> Codificação -> Testes. Ele é rígido: se você está nos testes e descobre um erro de requisito, o custo de voltar é altíssimo.",
      "puloDoGato": "Cascata = Linear, Rígido, Documentação Pesada. Funciona bem quando os requisitos são MUITO claros e nunca mudam (raro hoje em dia).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso descreve Modelos Ágeis/Iterativos.",
        "B": "Incorreta. Isso descreve TDD.",
        "E": "Correta. Definição do modelo de Winston Royce.",
        "D": "Incorreta. No Cascata, o cliente aparece no início e no fim.",
        "A": "Incorreta. O planejamento é a maior parte do Cascata."
      },
      "dicaDeOuro": "Cascata = Água só corre para baixo. Uma fase por vez, sem volta fácil."
    }
  },
  {
    "id": "q_engsw_b2_046",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos de Versão - Merge vs Rebase",
    "difficulty": "Difícil",
    "statement": "No Git, qual a principal diferença entre os comandos 'git merge' e 'git rebase' para integrar alterações de uma branch em outra?",
    "options": {
      "A": "O merge apaga o histórico de commits, enquanto o rebase o mantém intacto.",
      "B": "Não existe diferença, são sinônimos perfeitos.",
      "C": "O rebase é usado apenas para deletar arquivos, e o merge para criar.",
      "D": "O merge cria um novo commit de união mantendo o histórico original, enquanto o rebase 'reescreve' o histórico aplicando seus commits no topo da outra branch.",
      "E": "O merge só funciona em servidores locais."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Merge preserva a verdade histórica (cria um nó de união). Rebase limpa o histórico, fazendo parecer que você desenvolveu sua funcionalidade em linha reta a partir da versão mais recente da branch alvo (linearização).",
      "puloDoGato": "Dica de ouro: Nunca faça rebase em branches PÚBLICAS. Você vai quebrar o histórico para os seus colegas. Use rebase apenas na sua branch local para limpar os commits antes do push.",
      "cascasDeBanana": {
        "A": "Incorreta. Inverso: rebase 'mexe' no histórico.",
        "D": "Correta. Definição técnica dos fluxos de trabalho do Git.",
        "C": "Incorreta. Nonsense.",
        "B": "Incorreta. São abordagens de integração muito diferentes.",
        "E": "Incorreta. Ambos funcionam local e remotamente."
      },
      "dicaDeOuro": "Merge = União Histórica. Rebase = Linearização do Passado."
    }
  },
  {
    "id": "q_engsw_b2_047",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "CMMI v2.0",
    "topic": "Áreas de Prática (Practice Areas)",
    "difficulty": "Difícil",
    "statement": "No CMMI v2.0, as áreas de processo (PAs) da v1.3 foram substituídas por 'Áreas de Prática'. Qual Área de Prática abaixo é fundamental para garantir a qualidade das entregas através de revisões e auditorias?",
    "options": {
      "A": "Planejamento e Estimativa (EST).",
      "B": "Verificação e Validação (VV).",
      "C": "Gestão de Fornecedores (SAM).",
      "D": "Desenvolvimento de Requisitos (RD).",
      "E": "Governança (GOV)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "VV (Verification and Validation) garante que o produto está sendo construído corretamente (Verificação - revisões/estática) e que é o produto certo para o cliente (Validação - testes/dinâmica).",
      "puloDoGato": "Verificação = 'Estamos construindo o produto corretamente?' (Review). Validação = 'Estamos construindo o produto correto?' (Test).",
      "cascasDeBanana": {
        "A": "Incorreta. Governança é foco da liderança executiva.",
        "B": "Correta. Foco em garantir a qualidade técnica.",
        "C": "Incorreta. Foco em cronograma e custos.",
        "D": "Incorreta. Foco em descobrir o que o sistema deve fazer.",
        "E": "Incorreta. Foco em compras e contratos externos."
      },
      "dicaDeOuro": "VV = Revisar o código (Verificar) e Testar o sistema (Validar)."
    }
  },
  {
    "id": "q_engsw_b2_050",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Processos de Software",
    "topic": "Manutenção de Software - Refatoração",
    "difficulty": "Fácil",
    "statement": "O principal objetivo da Refatoração (Refactoring) é:",
    "options": {
      "A": "Melhorar a estrutura interna do código sem alterar o seu comportamento externo observado pelo usuário.",
      "B": "Adicionar novas funcionalidades que o cliente esqueceu de pedir.",
      "C": "Deletar todos os comentários do código.",
      "D": " Reescrever o sistema inteiro em uma nova linguagem de programação.",
      "E": "Corrigir bugs críticos que estão impedindo o uso do sistema."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Refatorar é 'limpar a casa'. Você torna o código mais legível e menos complexo. O usuário não percebe mudança visual, mas o sistema fica mais fácil de evoluir e menos propenso a bugs futuros.",
      "puloDoGato": "Regra de ouro: Refatoração NÃO altera comportamento. Se mudou a função, não é apenas refatoração, é evolução/correção.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Manutenção Evolutiva.",
        "E": "Incorreta. Isso é Manutenção Corretiva.",
        "A": "Correta. Melhoria de qualidade interna.",
        "D": "Incorreta. Isso seria um Reengineering ou Reescrita completa.",
        "C": "Incorreta. Pode envolver limpar comentários ruins, mas não é o objetivo."
      },
      "dicaDeOuro": "Refatorar = Deixar o código melhor do que você o encontrou!"
    }
  },
  {
    "id": "q_engsw_b3_047",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Qualidade de Software",
    "topic": "Débito Técnico (Technical Debt)",
    "difficulty": "Médio",
    "statement": "O conceito de 'Débito Técnico' refere-se a:",
    "options": {
      "A": "A quantidade de linhas de código deletadas.",
      "B": "O valor que a empresa deve para os fornecedores de nuvem.",
      "C": "O custo implícito de retrabalho futuro causado pela escolha de uma solução fácil e rápida agora, em vez de uma abordagem melhor e mais demorada.",
      "D": "O salário atrasado dos desenvolvedores.",
      "E": "O tempo gasto em reuniões de condomínio."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Pense no débito técnico como um empréstimo financeiro. Você 'ganha tempo' agora fazendo um código 'sujo', mas vai pagar 'juros' (lentidão e bugs) até que você refatore e 'quite a dívida'. Um pouco de débito é aceitável, mas muito débito quebra a empresa.",
      "puloDoGato": "O termo foi criado por Ward Cunningham para explicar a gestores por que o sistema fica cada vez mais lento de evoluir.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é dívida financeira real.",
        "C": "Correta. Metáfora para falta de qualidade interna visando prazos.",
        "D": "Incorreta. Problema trabalhista.",
        "A": "Incorreta. Deletar código costuma reduzir o débito técnico.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Débito Técnico = O 'jeitinho' que vira um pesadelo amanhã."
    }
  },
  {
    "id": "q_engsw_b3_048",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Qualidade de Software",
    "topic": "Code Review",
    "difficulty": "Fácil",
    "statement": "Qual o principal benefício da prática de Revisão de Código (Code Review) em uma equipe de desenvolvimento?",
    "options": {
      "A": "Atrasar o projeto propositalmente para cobrar mais horas extras.",
      "B": "Permitir que o líder da equipe humilhe os estagiários.",
      "C": "Garantir que todos usem o mesmo papel de parede no computador.",
      "D": "Melhorar a qualidade do código, disseminar conhecimento técnico entre os membros e detectar erros precocemente.",
      "E": "Eliminar a necessidade de fazer testes unitários."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Code Review é aprendizado. Quem revisa aprende novas técnicas, e quem é revisado tem o código blindado por um segundo par de olhos. É uma das formas mais baratas e eficazes de garantir qualidade.",
      "puloDoGato": "Pratique o 'Egoless Programming': o erro é no código, não na pessoa que o escreveu.",
      "cascasDeBanana": {
        "B": "Incorreta. Postura tóxica que destrói a equipe.",
        "D": "Correta. Valor técnico e humano compartilhado.",
        "A": "Incorreta. Reduz retrabalho, o que na verdade acelera o projeto a longo prazo.",
        "C": "Incorreta. Irrelevante.",
        "E": "Incorreta. Review complementa os testes, não os substitui."
      },
      "dicaDeOuro": "Code Review = Quatro olhos enxergam melhor que dois (e pegam mais bugs)."
    }
  },
  {
    "id": "q_f3_053",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Normas - ISO/IEC 25010 (Qualidade de Produto)",
    "difficulty": "Difícil",
    "statement": "A norma ISO/IEC 25010 substituiu a antiga ISO 9126 e define 8 características de qualidade de produto de software. Qual das opções abaixo NÃO é uma dessas características?",
    "options": {
      "A": "Manutenibilidade.",
      "B": "Adequação Funcional.",
      "C": "Eficiência de Desempenho.",
      "D": "Preço de Mercado.",
      "E": "Usabilidade."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "As 8 características são: Adequação Funcional, Eficiência de Desempenho, Compatibilidade, Usabilidade, Confiabilidade, Segurança, Manutenibilidade e Portabilidade. O preço é um fator de negócio, não uma característica intrínseca da qualidade técnica do software.",
      "puloDoGato": "A norma foca em atributos que o desenvolvedor/arquiteto pode controlar via engenharia.",
      "cascasDeBanana": {
        "A": "Incorreta. É a característica número 1 (faz o que deve fazer).",
        "B": "Incorreta. Relacionada a tempo de resposta e recursos.",
        "C": "Incorreta. Facilidade de corrigir e evoluir.",
        "D": "Correta. Preço não entra na métrica técnica de qualidade de software.",
        "E": "Incorreta. Facilidade de uso e aprendizado."
      },
      "dicaDeOuro": "ISO 25010 foca na engenharia, não no marketing."
    }
  },
  {
    "id": "q_f3_054",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Conceitos - Code Smell",
    "difficulty": "Médio",
    "statement": "O que caracteriza um 'Code Smell' (Cheiro de Código) na engenharia de software?",
    "options": {
      "A": "Um vírus que exala odor pelos componentes do hardware.",
      "B": "Um erro de sintaxe que impede o programa de compilar.",
      "C": "O uso de cores muito vibrantes na interface do usuário.",
      "D": "Um indicador superficial que geralmente corresponde a um problema mais profundo no design ou na qualidade do código, dificultando a manutenção.",
      "E": "A falta de comentários em todas as linhas do programa."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O código funciona, mas 'cheira mal'. Exemplos: uma função com 1000 linhas, nomes de variáveis como 'x', ou repetir o mesmo código em 10 lugares (Duplicated Code). Não é erro, mas é um sinal de que você vai ter dor de cabeça no futuro.",
      "puloDoGato": "Code Smell = Alvo para Refatoração.",
      "cascasDeBanana": {
        "B": "Incorreta. Code smell roda, mas é ruim de ler/manter.",
        "D": "Correta. Definição clássica de Martin Fowler e Kent Beck.",
        "A": "Incorreta. Absurdo.",
        "C": "Incorreta. Problema de UI/UX, não de código estrutural.",
        "E": "Incorreta. Comentários excessivos podem ser um code smell (indicando que o código não é autoexplicativo)."
      },
      "dicaDeOuro": "Cheirou mal? Refatore antes que apodreça."
    }
  },
  {
    "id": "q_f3_055",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Métricas - Complexidade Ciclomática",
    "difficulty": "Difícil",
    "statement": "O que a métrica de 'Complexidade Ciclomática' de McCabe mede em um módulo de software?",
    "options": {
      "A": "O número de vezes que o usuário clica em um botão.",
      "B": "A quantidade de caminhos linearmente independentes através do código-fonte (baseada no fluxo de controle).",
      "C": "A quantidade de memória RAM consumida por um loop.",
      "D": "O número de linhas de código totais.",
      "E": "A velocidade de execução da CPU em MHz."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Basicamente, conta quantos 'ifs', 'whiles' e 'cases' você tem. Se a complexidade é 1, o código é uma linha reta. Se é 50, tem tantos desvios que é quase impossível de testar e entender. Números altos indicam código propenso a erros.",
      "puloDoGato": "Alta Complexidade Ciclomática = Difícil de Testar e Manter. Tente manter abaixo de 10 por função.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é LOC (Lines of Code).",
        "B": "Correta. Métrica estrutural fundamental.",
        "C": "Incorreta. Hardware.",
        "D": "Incorreta. Métrica de uso (analytics).",
        "E": "Incorreta. Métrica de performance."
      },
      "dicaDeOuro": "Muitos IFs? Complexidade alta. Perigo à vista."
    }
  },
  {
    "id": "q_f3_056",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Processos de Software",
    "topic": "Modelo em Cascata (Waterfall) vs Ágil",
    "difficulty": "Fácil",
    "statement": "Qual a principal desvantagem do modelo em Cascata (Waterfall) em projetos de software modernos e incertos?",
    "options": {
      "A": "Ele obriga o uso de apenas um desenvolvedor por projeto.",
      "B": "Ele é muito caro para ser usado em empresas de tecnologia.",
      "C": "Ele não permite o uso de linguagens de programação modernas.",
      "D": "Ele é rápido demais e o cliente não consegue acompanhar.",
      "E": "Ele exige que todos os requisitos sejam definidos no início, e o cliente só vê o produto final após meses, dificultando mudanças de rumo."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No Waterfall, você planeja tudo, desenha tudo, coda tudo e só lá no fim mostra pro cliente. Se ele disser 'não era bem isso', você jogou meses fora. No Ágil, você entrega pedacinhos toda semana e corrige o rumo na hora.",
      "puloDoGato": "Waterfall = Rígido e Arriscado. Ágil = Adaptativo e Incremental.",
      "cascasDeBanana": {
        "D": "Incorreta. Geralmente é mais lento devido à burocracia de fases.",
        "E": "Correta. Problema clássico de 'gap' entre expectativa e realidade.",
        "C": "Incorreta. Independente de tecnologia.",
        "A": "Incorreta. Pode ter times gigantes.",
        "B": "Incorreta. É o modelo tradicional de grandes consultorias até hoje."
      },
      "dicaDeOuro": "Cascata: O erro só aparece no fim da queda."
    }
  },
  {
    "id": "q_f3_057",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Processos de Software",
    "topic": "Modelo Espiral (Boehm)",
    "difficulty": "Médio",
    "statement": "Qual o diferencial fundamental do Modelo Espiral de Boehm em relação a outros modelos de processo?",
    "options": {
      "A": "Ele é focado em Análise de Riscos em cada iteração do ciclo de desenvolvimento.",
      "B": "Ele exige que o software seja circular.",
      "C": "Ele não permite a fase de testes.",
      "D": "Ele proíbe a realização de reuniões.",
      "E": "Ele foca exclusivamente em codificação rápida (hacking)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Espiral é como um Ágil antigo e muito cauteloso. A cada volta na espiral, você planeja, avalia os riscos (o que pode dar errado?), constrói um protótipo e planeja a próxima fase. É ideal para projetos críticos e caros onde errar não é uma opção.",
      "puloDoGato": "Modelo Espiral = Gerenciamento de Riscos. Grave essa palavra-chave.",
      "cascasDeBanana": {
        "E": "Incorreta. É um modelo formal e estruturado.",
        "A": "Correta. Sua marca registrada é o quadrante de análise de riscos.",
        "D": "Incorreta. Exige muita coordenação.",
        "B": "Incorreta. Espiral é a forma do fluxo de trabalho.",
        "C": "Incorreta. Testes e validação estão presentes em cada ciclo."
      },
      "dicaDeOuro": "Espiral: Girando com medo (Análise de Riscos) para não errar."
    }
  },
  {
    "id": "q_f3_058",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "CMMI v2.0",
    "topic": "Níveis de Maturidade",
    "difficulty": "Médio",
    "statement": "No CMMI v2.0, qual o foco principal de uma organização que atingiu o Nível 3 (Definido)?",
    "options": {
      "A": "A organização foca apenas em inovação e melhoria contínua.",
      "B": "Os processos são padronizados para toda a organização e bem compreendidos, baseados em padrões estabelecidos.",
      "C": "A organização utiliza métricas estatísticas pesadas para controlar o desempenho dos processos.",
      "D": "Os processos são imprevisíveis e reativos.",
      "E": "O objetivo é apenas sobreviver sem falir."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Nível 1: Caos. Nível 2: Gerenciado por projeto (cada um faz de um jeito, mas funciona). Nível 3: Padrão organizacional (a empresa inteira segue o mesmo manual de boas práticas).",
      "puloDoGato": "Nível 3 = Padronização Organizacional (Defined).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é o Nível 1 (Initial).",
        "B": "Correta. Passo fundamental para a maturidade institucional.",
        "C": "Incorreta. Isso é o Nível 4 (Quantitatively Managed).",
        "D": "Incorreta. Isso é o Nível 5 (Optimizing).",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "CMMI Nível 3: Todo mundo segue a mesma regra da casa."
    }
  },
  {
    "id": "q_f3_124",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Normas - ISO/IEC 25010",
    "difficulty": "Médio",
    "statement": "De acordo com a norma ISO/IEC 25010, o que a característica 'Portabilidade' avalia em um software?",
    "options": {
      "A": "O peso do computador onde o software está instalado.",
      "B": "O custo de licença do software.",
      "C": "A facilidade com que um sistema pode ser transferido de um ambiente de hardware ou software para outro.",
      "D": "A rapidez com que o software abre no celular.",
      "E": "A capacidade do software de ser traduzido para 50 idiomas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se o seu sistema só roda no Windows 7 e num servidor da marca X, a portabilidade é zero. Se ele roda em Docker, Windows, Linux e Mac, a portabilidade é alta. É sobre não ficar 'preso' a um lugar só.",
      "puloDoGato": "Portabilidade = Flexibilidade de ambiente.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada física.",
        "C": "Correta. Uma das 8 características principais da norma ISO 25010.",
        "E": "Incorreta. Isso seria Localização/Internacionalização.",
        "D": "Incorreta. Isso seria Eficiência de Performance.",
        "B": "Incorreta. Fator comercial, não de qualidade técnica."
      },
      "dicaDeOuro": "Portabilidade: Funcionar em qualquer lugar."
    }
  },
  {
    "id": "q_f3_125",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Garantia da Qualidade (QA) vs Controle da Qualidade (QC)",
    "difficulty": "Médio",
    "statement": "Qual a diferença fundamental entre 'Garantia da Qualidade' (QA) e 'Controle da Qualidade' (QC)?",
    "options": {
      "A": "QA foca nos processos para prevenir defeitos; QC foca no produto para detectar defeitos (ex: testes).",
      "B": "Não há diferença, são nomes diferentes para 'Testes'.",
      "C": "QA é apenas para documentos e QC é apenas para código.",
      "D": "QA é feito pelo gerente e QC pelo programador.",
      "E": "QA é mais barato que QC."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "QA é PROATIVO: a gente define regras, padrões e treinamentos para o erro nem acontecer. QC é REATIVO: a gente roda o sistema e vê se ele quebra. O teste faz parte do QC.",
      "puloDoGato": "QA = Processo (Prevenir). QC = Produto (Detectar).",
      "cascasDeBanana": {
        "B": "Incorreta. Distinção clássica em engenharia de software.",
        "A": "Correta. Visão sistêmica da qualidade.",
        "D": "Incorreta. Envolvem toda a equipe em níveis diferentes.",
        "C": "Incorreta. Ambos se aplicam a todos os artefatos.",
        "E": "Incorreta. Prevenir costuma ser muito mais barato que consertar."
      },
      "dicaDeOuro": "QA: Evite o erro. QC: Ache o erro."
    }
  },
  {
    "id": "q_f3_126",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Métricas - Cobertura de Código (Code Coverage)",
    "difficulty": "Médio",
    "statement": "O que a métrica de 'Cobertura de Código' (Code Coverage) indica?",
    "options": {
      "A": "O número total de linhas de comentário no sistema.",
      "B": "A cor das linhas de código no editor (IDEs).",
      "C": "O percentual de programadores que sabem usar Git na equipe.",
      "D": "O quanto do código-fonte é executado durante a realização dos testes automatizados.",
      "E": "A quantidade de arquivos que foram salvos no backup."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você tem 1.000 linhas de código e seus testes só passam por 200 delas, sua cobertura é de 20%. Isso é perigoso: 80% do seu sistema nunca foi testado e pode ter bombas escondidas ali.",
      "puloDoGato": "Code Coverage = % de código 'visto' pelos testes. Atenção: Cobertura alta NÃO garante ausência de bugs!",
      "cascasDeBanana": {
        "D": "Correta. Métrica importante para guiar o esforço de teste.",
        "A": "Incorreta. Isso seria métrica de documentação.",
        "B": "Incorreta. Absurdo visual.",
        "E": "Incorreta. Métrica de infra/backup.",
        "C": "Incorreta. Absurdo administrativo."
      },
      "dicaDeOuro": "Cobertura de código: Saiba o que você ainda não testou."
    }
  },
  {
    "id": "q_f3_127",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Manutenibilidade - Dívida Técnica",
    "difficulty": "Fácil",
    "statement": "O que é o conceito de 'Dívida Técnica' (Technical Debt) em desenvolvimento de software?",
    "options": {
      "A": "O imposto que incide sobre a venda de softwares.",
      "B": "O custo futuro de retrabalho causado pela escolha de uma solução fácil ou 'suja' agora, em vez de uma abordagem melhor que levaria mais tempo.",
      "C": "O salário atrasado dos desenvolvedores.",
      "D": "O dinheiro que a empresa deve para os fornecedores de hardware.",
      "E": "O número de computadores quebrados na empresa."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É como pegar um empréstimo. Você faz 'nas coxas' hoje para entregar logo. Amanhã, quando precisar mexer nesse código, você vai pagar 'juros': vai ser mais difícil, mais lento e mais caro consertar a bagunça que você deixou.",
      "puloDoGato": "Dívida Técnica = Rapidez hoje, Lentidão amanhã.",
      "cascasDeBanana": {
        "A": "Incorreta. Não é dívida financeira real.",
        "B": "Correta. Metáfora de Ward Cunningham essencial para gestão de projetos.",
        "C": "Incorreta. Absurdo trabalhista.",
        "D": "Incorreta. Termo fiscal.",
        "E": "Incorreta. Absurdo físico."
      },
      "dicaDeOuro": "Cuidado com o 'depois eu arrumo'. O depois raramente chega."
    }
  },
  {
    "id": "q_f3_128",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Revisão de Código - Code Review",
    "difficulty": "Fácil",
    "statement": "Qual o principal benefício da prática de 'Code Review' (Revisão de Código por Pares)?",
    "options": {
      "A": "Garantir que todos usem o mesmo teclado.",
      "B": "Fazer o programador se sentir vigiado e com medo.",
      "C": "Diminuir o tempo de café da equipe.",
      "D": "Melhorar a qualidade do código, disseminar conhecimento entre a equipe e encontrar erros que o autor original não percebeu.",
      "E": "Substituir a necessidade de rodar o compilador."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Quatro olhos veem melhor que dois. Além de achar bugs, a revisão serve para o Junior aprender com o Pleno, e para que ninguém seja o 'único dono' de um pedaço do sistema. Se o autor for atropelado, alguém mais sabe o que o código faz.",
      "puloDoGato": "Code Review = Qualidade + Aprendizado Coletivo.",
      "cascasDeBanana": {
        "B": "Incorreta. Deve ser uma prática colaborativa, não punitiva.",
        "D": "Correta. Uma das práticas mais eficazes para prevenir bugs.",
        "E": "Incorreta. Complementa as ferramentas automáticas, não as substitui.",
        "C": "Incorreta. Irrelevante.",
        "A": "Incorreta. Absurdo físico."
      },
      "dicaDeOuro": "Code Review: Aprenda ensinando e revisando."
    }
  },
  {
    "id": "q_f3_129",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Normas - ISO 9126 / ISO 25010 (Usabilidade)",
    "difficulty": "Médio",
    "statement": "Dentro da característica 'Usabilidade' da ISO 25010, o que significa a subcaracterística 'Apreensibilidade' (Learnability)?",
    "options": {
      "A": "O tempo que o sistema leva para baixar atualizações.",
      "B": "A rapidez com que o sistema consegue prender o usuário na frente da tela.",
      "C": "A capacidade do sistema de aprender os hábitos do usuário sozinho (IA).",
      "D": "A facilidade com que os usuários podem aprender a operar o sistema para realizar suas tarefas.",
      "E": "A quantidade de cores que o sistema utiliza."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se o seu sistema precisa de um manual de 500 páginas e um curso de uma semana para o usuário conseguir fazer um cadastro, a Apreensibilidade é baixa. Um sistema bom é aquele que o usuário 'bate o olho' e já sabe o básico.",
      "puloDoGato": "Learnability = Curva de aprendizado suave.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria engajamento ou retenção.",
        "D": "Correta. Fator crítico para adoção de novos softwares.",
        "C": "Incorreta. Isso seria Machine Learning.",
        "A": "Incorreta. Isso é performance/conectividade.",
        "E": "Incorreta. Estética, não aprendizado."
      },
      "dicaDeOuro": "Se é difícil de aprender, o usuário vai desistir."
    }
  },
  {
    "id": "q_f3_130",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Conceitos - Confiabilidade (Reliability)",
    "difficulty": "Médio",
    "statement": "O que define a 'Confiabilidade' de um sistema de software?",
    "options": {
      "A": "O quanto a empresa que vendeu o software é famosa no mercado.",
      "B": "A quantidade de senhas que o usuário precisa digitar.",
      "C": "A capacidade do sistema de manter seu nível de desempenho sob condições estabelecidas por um período de tempo determinado.",
      "D": "A cor dos ícones de segurança na interface.",
      "E": "O número de vezes que o desenvolvedor prometeu que não ia quebrar."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Confiabilidade é saber que o sistema não vai 'dar pau' do nada quando você mais precisar. Envolve tolerância a falhas e capacidade de recuperação. É o oposto de um sistema 'instável'.",
      "puloDoGato": "Confiabilidade = Estabilidade + Disponibilidade ao longo do tempo.",
      "cascasDeBanana": {
        "C": "Correta. Definição clássica de engenharia de software.",
        "A": "Incorreta. Reputação da empresa não garante a qualidade do código.",
        "B": "Incorreta. Isso seria excesso de autenticação.",
        "D": "Incorreta. Visual, não funcional.",
        "E": "Incorreta. Promessas não são métricas técnicas."
      },
      "dicaDeOuro": "Confiabilidade: O sistema faz o que deve, sempre que solicitado."
    }
  },
  {
    "id": "q_f3_131",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Conceitos - Eficiência de Performance",
    "difficulty": "Fácil",
    "statement": "Qual métrica é fundamental para avaliar a 'Eficiência de Performance' de uma aplicação web?",
    "options": {
      "A": "O tamanho físico do monitor do desenvolvedor.",
      "B": "O número de linhas de código por arquivo.",
      "C": "A quantidade de e-mails enviados pela equipe.",
      "D": "Tempo de Resposta (Response Time) e Utilização de Recursos (CPU/RAM).",
      "E": "O número de commits realizados no final de semana."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Performance não é só 'ser rápido'. É ser rápido usando o mínimo de servidor possível. Se o seu site responde em 1 segundo mas consome 100% da CPU, ele não é eficiente.",
      "puloDoGato": "Performance = Velocidade + Economia de Recursos.",
      "cascasDeBanana": {
        "B": "Incorreta. Arquivos grandes podem até ser rápidos se o código for bom.",
        "D": "Correta. Métrica padrão de monitoramento de sistemas.",
        "C": "Incorreta. Irrelevante para o sistema em si.",
        "A": "Incorreta. Absurdo físico.",
        "E": "Incorreta. Métrica de produtividade (questionável), não de performance do software."
      },
      "dicaDeOuro": "Rápido e leve: esse é o objetivo."
    }
  },
  {
    "id": "q_f3_132",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Qualidade de Software",
    "topic": "Manutenibilidade - Modularidade",
    "difficulty": "Médio",
    "statement": "Por que a 'Modularidade' é considerada essencial para a qualidade interna do software?",
    "options": {
      "A": "Porque torna o código impossível de ser lido por hackers.",
      "B": "Porque facilita a manutenção, permitindo que alterações em uma parte do sistema tenham impacto mínimo ou nulo em outras partes.",
      "C": "Porque diminui o salário necessário para os programadores.",
      "D": "Porque permite que o software seja vendido em pedaços separados.",
      "E": "Porque obriga o uso de mais de 10 bancos de dados diferentes."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Modularidade é como construir com LEGO. Se você precisar trocar uma peça azul por uma verde, você não precisa desmontar o castelo inteiro. No código, isso significa funções e classes independentes e focadas.",
      "puloDoGato": "Modularidade = Separação de Preocupações (SoC).",
      "cascasDeBanana": {
        "A": "Incorreta. Embora ajude no licenciamento, o foco da qualidade é a manutenção técnica.",
        "B": "Correta. Reduz o acoplamento e aumenta a reusabilidade.",
        "C": "Incorreta. Modularidade não tem a ver com o número de bancos de dados.",
        "D": "Incorreta. Não é uma técnica de segurança por obscuridade.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Software modular: mude um pedaço sem quebrar o todo."
    }
  },
  {
    "id": "q_f3_161",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Ciclo de Vida de BPM - Fases",
    "difficulty": "Médio",
    "statement": "Qual a sequência correta das fases do ciclo de vida de BPM (Business Process Management)?",
    "options": {
      "A": "Planejamento, Análise, Desenho (Design), Implementação, Monitoramento e Refinamento.",
      "B": "Design, Implementação, Monitoramento, Refinamento.",
      "C": "Venda, Entrega, Suporte, Encerramento.",
      "D": "Codificação, Teste, Deploy, Manutenção.",
      "E": "Ideia, Protótipo, Produto, Lixo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "BPM não é um projeto com fim, é um ciclo. Você entende como está hoje (Análise), desenha como deve ser (Design), coloca pra rodar (Implementação), vê se deu certo (Monitoramento) e melhora (Refinamento). Nunca para.",
      "puloDoGato": "Ciclo BPM = PDCA aplicado a processos de negócio.",
      "cascasDeBanana": {
        "B": "Incorreta. Faltam as fases iniciais de planejamento e análise.",
        "A": "Correta. Segue o padrão do BPM CBOK.",
        "D": "Incorreta. Esse é o ciclo de vida de desenvolvimento de software (SDLC).",
        "C": "Incorreta. Ciclo de vendas/comercial.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Antes de desenhar (Design), você precisa analisar o que já existe."
    }
  },
  {
    "id": "q_f3_162",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Análise de Processos - AS-IS vs TO-BE",
    "difficulty": "Fácil",
    "statement": "No contexto de melhoria de processos, o que significa a visão 'AS-IS'?",
    "options": {
      "A": "A situação atual do processo, exatamente como ele é executado hoje, com seus erros e gargalos.",
      "B": "O processo de backup automático de dados.",
      "C": "Um processo que foi deletado do sistema.",
      "D": "A sigla para 'Advanced Software Integration System'.",
      "E": "O processo como ele deveria ser no futuro ideal."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "AS-IS é o 'pé no chão'. Antes de querer revolucionar a empresa (TO-BE), você precisa documentar a bagunça que está hoje. Se você não sabe onde está, não sabe como chegar onde quer.",
      "puloDoGato": "AS-IS = Como é agora. TO-BE = Como será depois.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é o TO-BE.",
        "A": "Correta. Fase de diagnóstico essencial.",
        "C": "Incorreta. Não tem a ver com deleção.",
        "D": "Incorreta. Sigla inventada.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Não ignore o AS-IS, ou seu TO-BE será apenas um sonho impossível."
    }
  },
  {
    "id": "q_f3_163",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Notação BPMN 2.0 - Gateways",
    "difficulty": "Médio",
    "statement": "Na notação BPMN 2.0, o que representa um 'Gateway Exclusivo' (losango com um X no meio ou vazio)?",
    "options": {
      "A": "Um ponto de decisão onde apenas UM dos caminhos de saída será seguido, baseado em uma condição.",
      "B": "O fim obrigatório de todo o processo.",
      "C": "Um ponto onde todos os caminhos devem ser seguidos simultaneamente.",
      "D": "Um erro no diagrama que precisa ser corrigido.",
      "E": "Um local para armazenar documentos físicos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Gateway Exclusivo é o 'OU' (XOR). Se o valor for > 100, vai para o caminho A; se for <= 100, vai para o caminho B. Nunca os dois ao mesmo tempo. É a bifurcação clássica.",
      "puloDoGato": "Gateway Exclusivo = Escolha apenas uma porta.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria o Gateway Paralelo (losango com um +).",
        "A": "Correta. Elemento mais comum de controle de fluxo.",
        "B": "Incorreta. Gateways não são eventos de fim.",
        "D": "Incorreta. É um elemento padrão da notação.",
        "E": "Incorreta. Absurdo físico."
      },
      "dicaDeOuro": "Exclusivo = Só um caminho ganha."
    }
  },
  {
    "id": "q_f3_164",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Notação BPMN 2.0 - Eventos",
    "difficulty": "Fácil",
    "statement": "Como é representado visualmente um 'Evento de Início' na notação BPMN 2.0?",
    "options": {
      "A": "Uma estrela dourada.",
      "B": "Um círculo com linha fina.",
      "C": "Um quadrado com bordas arredondadas.",
      "D": "Um triângulo de ponta cabeça.",
      "E": "Um círculo com linha grossa."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Início é leve (linha fina). O Fim é pesado (linha grossa). O intermediário é duplo (duas linhas finas). É uma convenção visual para você bater o olho e saber onde o processo começa.",
      "puloDoGato": "Círculo fino = Start. Círculo grosso = End.",
      "cascasDeBanana": {
        "A": "Incorreta. Quadrado arredondado é Atividade/Tarefa.",
        "B": "Correta. Regra básica de simbologia BPMN.",
        "C": "Incorreta. Isso é o Evento de Fim.",
        "D": "Incorreta. Não existe triângulo no padrão básico.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Linha fina começa, linha grossa termina."
    }
  },
  {
    "id": "q_f3_165",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMS - Definição",
    "difficulty": "Médio",
    "statement": "O que é um BPMS (Business Process Management Suite/System)?",
    "options": {
      "A": "Um manual impresso com as regras da empresa.",
      "B": "Um tipo de sistema operacional para servidores Linux.",
      "C": "Um programa de edição de imagens para criar logos.",
      "D": "Um conjunto de ferramentas de hardware para aumentar a velocidade da rede.",
      "E": "Uma categoria de software que permite modelar, executar, monitorar e gerenciar processos de negócio de ponta a ponta."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "BPMS é o motor que faz o desenho (processo) virar realidade. Ele automatiza as tarefas, manda alertas para os responsáveis e gera relatórios de performance automaticamente. Exemplos: Bizagi, Camunda, IBM BPM.",
      "puloDoGato": "BPMS = Software que 'roda' os seus processos desenhados.",
      "cascasDeBanana": {
        "D": "Incorreta. BPMS é software de aplicação, não infra de rede.",
        "E": "Correta. É o braço tecnológico do BPM.",
        "A": "Incorreta. Isso seria apenas documentação passiva.",
        "B": "Incorreta. Não é SO.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "BPMS transforma o diagrama em um sistema funcional."
    }
  },
  {
    "id": "q_f3_166",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Notação BPMN 2.0 - Swimlanes (Pools e Lanes)",
    "difficulty": "Médio",
    "statement": "Qual a diferença entre uma 'Pool' (Piscina) e uma 'Lane' (Raia) em um diagrama BPMN?",
    "options": {
      "A": "A Pool representa uma organização ou processo inteiro; a Lane representa departamentos ou papéis dentro dessa organização.",
      "B": "Não há diferença, são apenas nomes diferentes para o mesmo retângulo.",
      "C": "Pool é para processos manuais e Lane é para processos automáticos.",
      "D": "Lane é o local onde se guardam os dados (banco de dados).",
      "E": "Pool é usada apenas em processos de RH."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A Pool é o container grande (ex: 'Empresa A'). As Lanes dividem quem faz o quê lá dentro (ex: 'Financeiro', 'Vendas'). Se você tem interação entre duas empresas diferentes, você usa duas Pools.",
      "puloDoGato": "Pool = Entidade/Organização. Lane = Responsável/Setor.",
      "cascasDeBanana": {
        "A": "Correta. Organiza a responsabilidade e as fronteiras do processo.",
        "B": "Incorreta. Ambos podem conter tarefas de qualquer tipo.",
        "C": "Incorreta. Possuem significados semânticos diferentes no padrão.",
        "D": "Incorreta. Uso universal.",
        "E": "Incorreta. Armazenamento de dados é o ícone de 'cilindro' ou 'documento'."
      },
      "dicaDeOuro": "Pool: Onde o jogo acontece. Lane: Quem está no time."
    }
  },
  {
    "id": "q_f3_167",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Indicadores de Desempenho - KPIs",
    "difficulty": "Fácil",
    "statement": "Por que os KPIs (Key Performance Indicators) são fundamentais na fase de Monitoramento do ciclo BPM?",
    "options": {
      "A": "Para calcular o imposto de renda da empresa.",
      "B": "Para saber qual funcionário demitir primeiro.",
      "C": "Para medir a eficiência, eficácia e qualidade do processo, permitindo identificar gargalos e oportunidades de melhoria baseadas em dados.",
      "D": "Para deixar o dashboard da empresa mais colorido.",
      "E": "Para decidir a cor da parede do escritório."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O que não é medido, não é gerenciado. Se o seu KPI mostra que o processo leva 10 dias e a meta era 2 dias, você tem um problema claro para atacar. Sem números, é só opinião.",
      "puloDoGato": "KPI = Termômetro do processo.",
      "cascasDeBanana": {
        "B": "Incorreta. BPM foca na melhoria do processo, não na punição individual.",
        "C": "Correta. Permite a gestão baseada em fatos.",
        "D": "Incorreta. Estética é consequência, não objetivo.",
        "A": "Incorreta. Função contábil/fiscal.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Sem KPIs, você está voando às cegas."
    }
  },
  {
    "id": "q_f3_168",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Tipos de Tarefas - User Task vs Service Task",
    "difficulty": "Médio",
    "statement": "Qual a diferença entre uma 'User Task' e uma 'Service Task' no BPMN?",
    "options": {
      "A": "Ambas são iguais, muda apenas a cor do ícone.",
      "B": "User Task é feita no computador; Service Task é feita por telefone.",
      "C": "User Task é feita por um humano; Service Task é feita automaticamente por um sistema ou serviço de software.",
      "D": "Service Task é usada apenas para limpeza e manutenção física.",
      "E": "User Task é opcional; Service Task é obrigatória."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "User Task (ícone de pessoinha): Alguém precisa clicar num botão ou preencher um formulário. Service Task (ícone de engrenagens): O sistema faz sozinho (ex: calcular juros, enviar e-mail automático).",
      "puloDoGato": "User = Humano. Service = Robô/Sistema.",
      "cascasDeBanana": {
        "C": "Correta. Distinção vital para automação de processos.",
        "B": "Incorreta. Ambas podem envolver tecnologia.",
        "E": "Incorreta. Ambas podem ser críticas.",
        "A": "Incorreta. Têm semânticas de execução diferentes em um BPMS.",
        "D": "Incorreta. Piada literal."
      },
      "dicaDeOuro": "Identifique o executor para escolher o tipo de tarefa."
    }
  },
  {
    "id": "q_f3_169",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Gargalos de Processo - Definição",
    "difficulty": "Fácil",
    "statement": "O que caracteriza um 'Gargalo' (Bottleneck) em um processo de negócio?",
    "options": {
      "A": "A etapa final de arquivamento de documentos.",
      "B": "Uma etapa que é executada muito rapidamente.",
      "C": "Um ponto no processo onde a demanda excede a capacidade de processamento, causando atrasos e acúmulo de trabalho.",
      "D": "O local onde os funcionários tomam café.",
      "E": "O uso de softwares muito caros."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Imagine uma estrada de 3 faixas que vira 1 faixa só. Os carros acumulam e tudo para. No processo é igual: se a aprovação do Diretor demora 5 dias e chegam 50 pedidos por dia, tudo vai travar ali.",
      "puloDoGato": "Gargalo = Onde o fluxo 'estrangula'.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria uma etapa eficiente.",
        "C": "Correta. Identificar e eliminar gargalos é o objetivo principal da melhoria de processos.",
        "D": "Incorreta. Piada literal.",
        "A": "Incorreta. O fim do processo não costuma ser o gargalo (embora possa ser).",
        "E": "Incorreta. Custo não define gargalo, mas sim fluxo."
      },
      "dicaDeOuro": "A velocidade de um processo é definida pelo seu gargalo."
    }
  },
  {
    "id": "q_f3_170",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Modelagem vs Diagramação vs Documentação",
    "difficulty": "Médio",
    "statement": "Em BPM, qual o nível mais profundo de representação de um processo?",
    "options": {
      "A": "Mapeamento (desenho com mais detalhes de papéis e regras).",
      "B": "Diagramação (apenas o desenho básico).",
      "C": "Lista de e-mails trocados.",
      "D": "Modelagem (representação detalhada que inclui dados, sistemas e pode ser executada).",
      "E": "Esboço no guardanapo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Um desenho (Diagrama) é só uma figura. Um Modelo é um 'gêmeo digital' do processo. Ele tem lógica, regras de negócio e informações suficientes para um computador entender e rodar.",
      "puloDoGato": "Diagrama < Mapeamento < Modelo.",
      "cascasDeBanana": {
        "B": "Incorreta. É o nível mais superficial.",
        "A": "Incorreta. É o nível intermediário de documentação.",
        "D": "Correta. Nível técnico necessário para automação (BPMS).",
        "E": "Incorreta. Absurdo.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Modele para executar; diagrame para conversar."
    }
  },
  {
    "id": "q_f3_181",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN 2.0 - Objetos de Dados",
    "difficulty": "Difícil",
    "statement": "O que representa o ícone de uma 'Folha de Papel com a ponta dobrada' em um diagrama BPMN 2.0?",
    "options": {
      "A": "O fim do processo físico.",
      "B": "Um lembrete para o gerente.",
      "C": "Um erro no documento.",
      "D": "Uma mensagem enviada por e-mail.",
      "E": "Um Objeto de Dados (Data Object), representando informações que o processo produz ou consome."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Processos não lidam só com atividades, eles lidam com informação. O Data Object mostra: 'Essa tarefa aqui precisa da NOTA FISCAL para funcionar'. Ele não altera o fluxo, mas dá o contexto dos dados envolvidos.",
      "puloDoGato": "Folha dobrada = Dado/Documento no BPMN.",
      "cascasDeBanana": {
        "C": "Incorreta. Não é ícone de erro.",
        "E": "Correta. Elemento importante para a modelagem técnica.",
        "D": "Incorreta. Mensagens são representadas por 'envelopes'.",
        "A": "Incorreta. Fim é um círculo grosso.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Data Object: O que flui de informação além das ordens."
    }
  },
  {
    "id": "q_f3_182",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Melhoria de Processos - Benchmarking",
    "difficulty": "Médio",
    "statement": "O que é a técnica de Benchmarking aplicada à gestão de processos?",
    "options": {
      "A": "Trocar todos os computadores da empresa por modelos novos.",
      "B": "Criar um banco de dados para guardar senhas.",
      "C": "Pintar o logotipo da empresa na fachada do prédio.",
      "D": "Contratar o funcionário mais caro do mercado.",
      "E": "Comparar os processos da empresa com as melhores práticas do mercado ou de concorrentes para identificar pontos de melhoria."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É olhar pro vizinho que faz melhor e perguntar: 'Como ele consegue entregar em 1 hora e eu levo 5?'. Você usa o mercado como régua (benchmark) para não ficar estagnado na sua própria bolha.",
      "puloDoGato": "Benchmarking = Comparação com os melhores.",
      "cascasDeBanana": {
        "E": "Correta. Ferramenta poderosa de gestão estratégica.",
        "A": "Incorreta. Isso é upgrade de hardware.",
        "B": "Incorreta. Isso é gestão de segurança.",
        "D": "Incorreta. Isso é aquisição de talentos.",
        "C": "Incorreta. Marketing/Identidade Visual."
      },
      "dicaDeOuro": "Benchmarking: Aprenda com quem já chegou lá."
    }
  },
  {
    "id": "q_f3_183",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Notação BPMN 2.0 - Fluxo de Mensagem",
    "difficulty": "Médio",
    "statement": "Como é representado um 'Fluxo de Mensagem' entre duas Pools diferentes no BPMN?",
    "options": {
      "A": "Uma linha tracejada com um pequeno círculo na origem e uma seta vazia no destino.",
      "B": "Um raio de cor amarela.",
      "C": "Uma linha contínua com uma seta preenchida.",
      "D": "Uma linha dupla em negrito.",
      "E": "Não é possível representar mensagens entre pools."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Fluxo de Sequência (dentro da pool) é linha cheia. Fluxo de Mensagem (entre pools/empresas) é linha tracejada. Isso mostra que você não controla o processo do outro, você apenas 'manda um recado' e espera a resposta.",
      "puloDoGato": "Linha tracejada = Mensagem externa. Linha cheia = Sequência interna.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é o Sequence Flow normal.",
        "A": "Correta. Regra estrita da notação para colaboração entre entidades.",
        "B": "Incorreta. Absurdo visual.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. Essa é uma das principais funções do BPMN."
      },
      "dicaDeOuro": "Mensagem atravessa a fronteira da Pool (linha tracejada)."
    }
  },
  {
    "id": "q_f3_184",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Melhoria de Processos - Seis Sigma (Six Sigma)",
    "difficulty": "Difícil",
    "statement": "Qual o objetivo central da metodologia Seis Sigma quando aplicada a processos?",
    "options": {
      "A": "Reduzir a variabilidade dos processos e eliminar defeitos usando análise estatística.",
      "B": "Mudar o logotipo da empresa seis vezes por ano.",
      "C": "Aumentar o número de reuniões semanais.",
      "D": "Garantir que todos usem o mesmo modelo de celular.",
      "E": "Contratar seis gerentes para cada projeto."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Seis Sigma é sobre precisão. Um processo '6 Sigma' tem apenas 3,4 defeitos por MILHÃO de oportunidades. É usado onde o erro custa caro ou vidas (ex: aviação, indústria farmacêutica, processos financeiros críticos).",
      "puloDoGato": "Seis Sigma = Redução de Variabilidade + Qualidade Estrita.",
      "cascasDeBanana": {
        "C": "Incorreta. Na verdade, busca eficiência e menos burocracia inútil.",
        "A": "Correta. Foco total em dados e estatística para perfeição.",
        "D": "Incorreta. Irrelevante.",
        "E": "Incorreta. Piada com o nome.",
        "B": "Incorreta. Piada."
      },
      "dicaDeOuro": "Seis Sigma: Quase zero defeitos."
    }
  },
  {
    "id": "q_f3_185",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPM CBOK - Definição",
    "difficulty": "Fácil",
    "statement": "O que é o BPM CBOK?",
    "options": {
      "A": "O Guia para o Gerenciamento de Processos de Negócio (Corpo Comum de Conhecimento), referência mundial na área.",
      "B": "Uma linguagem de programação para IA.",
      "C": "Um sistema de arquivos para servidores Windows.",
      "D": "O nome do sindicato dos analistas de sistemas.",
      "E": "Um modelo de computador da Petrobras."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O CBOK é a 'bíblia' do BPM. Ele define os termos, as fases e as melhores práticas. Se você vai fazer prova de Processos de Negócio, você PRECISA conhecer o CBOK.",
      "puloDoGato": "CBOK = Common Body of Knowledge. Referência da ABPMP.",
      "cascasDeBanana": {
        "E": "Incorreta. Absurdo.",
        "A": "Correta. Guia essencial para profissionais de processos.",
        "B": "Incorreta. BPM não é linguagem de programação.",
        "D": "Incorreta. Absurdo.",
        "C": "Incorreta. Absurdo."
      }
    }
  },
  {
    "id": "q_f3_211",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Notação BPMN 2.0 - Eventos Intermediários",
    "difficulty": "Difícil",
    "statement": "No BPMN 2.0, um evento representado por um círculo de linha dupla (duas linhas finas) é classificado como:",
    "options": {
      "A": "Atividade de Loop.",
      "B": "Evento Intermediário.",
      "C": "Gateway Paralelo.",
      "D": "Evento de Fim.",
      "E": "Evento de Início."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Eventos intermediários acontecem durante o processo. Eles podem ser 'lançadores' (catch) ou 'receptores' (throw), como esperar um e-mail ou disparar um alerta. Visualmente, a linha dupla é o segredo.",
      "puloDoGato": "Simples = Início. Dupla = Intermediário. Grossa = Fim.",
      "cascasDeBanana": {
        "E": "Incorreta. Linha simples.",
        "D": "Incorreta. Linha grossa.",
        "B": "Correta. Indica algo que ocorre entre o início e o fim.",
        "C": "Incorreta. Gateways são losangos.",
        "A": "Incorreta. Atividades são retângulos."
      },
      "dicaDeOuro": "Linha dupla no círculo? Intermediário."
    }
  },
  {
    "id": "q_f3_212",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Sistemas BPMS - Benefícios",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem de utilizar um motor de execução (BPMS) em vez de apenas diagramar processos em papel ou ferramentas de desenho?",
    "options": {
      "A": "Substitui a necessidade de ter gerentes na empresa.",
      "B": "Reduz a conta de luz da empresa.",
      "C": "Permite o rastreamento em tempo real (auditabilidade), automação de tarefas e geração automática de indicadores de performance (Analytics).",
      "D": "O BPMS desenha o processo sozinho sem ajuda humana.",
      "E": "Transforma todos os arquivos em PDF automaticamente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Desenho é passivo. BPMS é ativo. Com o BPMS, você sabe exatamente em qual mesa o processo está travado, há quanto tempo e quem é o responsável. É a diferença entre ter um mapa e ter um GPS com trânsito em tempo real.",
      "puloDoGato": "BPMS = Visibilidade + Automação + Controle.",
      "cascasDeBanana": {
        "D": "Incorreta. O humano ainda precisa modelar a lógica.",
        "C": "Correta. Foco em governança e eficiência operacional.",
        "B": "Incorreta. Absurdo.",
        "A": "Incorreta. Gerentes usam o BPMS para tomar melhores decisões.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "BPMS: Tire o processo do papel e coloque para rodar."
    }
  },
  {
    "id": "q_f3_213",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN 2.0 - Gateways Inclusivos",
    "difficulty": "Médio",
    "statement": "O que representa o Gateway Inclusivo (losango com um círculo no meio) no BPMN?",
    "options": {
      "A": "Todos os caminhos devem ser seguidos obrigatoriamente.",
      "B": "O processo deve ser incluído em um banco de dados.",
      "C": "Apenas um caminho pode ser seguido.",
      "D": "Um ou mais caminhos podem ser seguidos, dependendo das condições de cada fluxo de saída.",
      "E": "Um erro de conexão entre tarefas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Inclusivo é o 'E/OU'. Se você marcou que quer 'Seguro de Vida' e 'Seguro de Carro', ele abre os dois caminhos. Se marcou só um, abre só um. É mais flexível que o Exclusivo (só 1) e o Paralelo (sempre todos).",
      "puloDoGato": "Gateway Inclusivo = Um, alguns ou todos (depende das condições).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é o Exclusivo (X).",
        "A": "Incorreta. Isso é o Paralelo (+).",
        "D": "Correta. Permite ramificações múltiplas baseadas em lógica.",
        "B": "Incorreta. Piada literal.",
        "E": "Incorreta. É um elemento válido de fluxo."
      },
      "dicaDeOuro": "Inclusivo: Pode ser um ou pode ser vários."
    }
  },
  {
    "id": "q_f3_214",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN 2.0 - Subprocessos",
    "difficulty": "Médio",
    "statement": "Para que serve um 'Subprocesso Expandido' em um diagrama de processos?",
    "options": {
      "A": "Para aumentar o tamanho da folha de impressão.",
      "B": "Para esconder detalhes inúteis do processo.",
      "C": "Para mostrar os detalhes de uma atividade complexa dentro do próprio diagrama principal, facilitando a leitura da hierarquia.",
      "D": "Para representar uma tarefa que nunca termina.",
      "E": "Para indicar que o processo foi terceirizado."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Às vezes uma tarefa como 'Faturar Pedido' tem 10 passos dentro dela. Em vez de poluir o desenho principal, você usa um subprocesso. Se ele estiver expandido, você vê o desenho lá dentro. Se estiver colapsado (ícone de +), ele fica guardadinho.",
      "puloDoGato": "Subprocesso = Decomposição de complexidade.",
      "cascasDeBanana": {
        "B": "Incorreta. O objetivo é organizar, não esconder o que é importante.",
        "C": "Correta. Ajuda na abstração e no detalhamento progressivo.",
        "A": "Incorreta. Absurdo.",
        "D": "Incorreta. Loops são representados por setas circulares.",
        "E": "Incorreta. Terceirização é geralmente representada por Pools diferentes."
      },
      "dicaDeOuro": "Subprocesso: Mantenha o diagrama principal limpo."
    }
  },
  {
    "id": "q_f3_215",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPM CBOK - Modelagem",
    "difficulty": "Fácil",
    "statement": "Segundo o BPM CBOK, qual o principal objetivo da modelagem de processos?",
    "options": {
      "A": "Criar uma representação comum e simplificada da realidade para facilitar a comunicação, análise e melhoria.",
      "B": "Controlar o horário de entrada e saída dos funcionários.",
      "C": "Listar o nome de todos os clientes da empresa.",
      "D": "Gerar código de programação automaticamente sem desenvolvedores.",
      "E": "Criar obras de arte para decorar o escritório."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O modelo é um mapa. Se o mapa estiver muito complexo, você se perde. Se estiver muito simples, você não chega no destino. O segredo é ter a representação correta para o objetivo (conversa vs execução).",
      "puloDoGato": "Modelagem = Comunicação + Análise.",
      "cascasDeBanana": {
        "E": "Incorreta. Absurdo.",
        "A": "Correta. Visão centrada no entendimento compartilhado.",
        "D": "Incorreta. Pode ajudar (Low-code), mas não é o objetivo primário da modelagem no CBOK.",
        "C": "Incorreta. Isso é CRM/Banco de Dados.",
        "B": "Incorreta. Isso é RH/Ponto."
      },
      "dicaDeOuro": "Modele para que todos entendam a mesma coisa."
    }
  },
  {
    "id": "q_bp_3000",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPM - Ciclo de Vida",
    "statement": "O Ciclo de Vida do BPM (Business Process Management) é composto por várias fases iterativas. Qual a fase responsável por documentar o processo AT-IS (como o processo funciona atualmente)?",
    "options": {
      "A": "Monitoramento e Controle.",
      "B": "Execução de Processos.",
      "C": "Desenho (Design) de Processos.",
      "D": "Modelagem de Processos.",
      "E": "Otimização de Processos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Modelagem é a fase de tirar a 'foto' do processo hoje (AS-IS). Você desenha o fluxo, identifica quem faz o quê e entende os gargalos. Sem saber como está hoje, você não consegue desenhar como deve ser amanhã (TO-BE).",
      "puloDoGato": "AS-IS = Como é hoje (Modelagem). TO-BE = Como será amanhã (Desenho/Design).",
      "cascasDeBanana": {
        "C": "O Desenho foca no TO-BE, na melhoria.",
        "B": "Execução é quando o processo está rodando na prática.",
        "A": "Monitoramento usa métricas (KPIs) para ver se o processo está bem.",
        "E": "Otimização é o ajuste fino após o monitoramento."
      },
      "dicaDeOuro": "O guia CBOK (BPM Common Body of Knowledge) é a principal referência para esta disciplina."
    }
  },
  {
    "id": "q_bp_3001",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Elementos de Fluxo",
    "statement": "Na notação BPMN 2.0, qual elemento é utilizado para representar uma decisão ou um ponto onde o fluxo de processo pode seguir por diferentes caminhos?",
    "options": {
      "A": "Atividade (Retângulo).",
      "B": "Fluxo de Mensagem (Seta tracejada).",
      "C": "Evento (Círculo).",
      "D": "Gateway (Losango).",
      "E": "Objeto de Dados (Papel com dobra)."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Gateway (ou Porta de Entrada/Saída) é o 'guarda de trânsito' do processo. Ele olha para uma regra e diz se o fluxo vai para a direita ou para a esquerda. O desenho é sempre um losango.",
      "puloDoGato": "Decisão / Desvio / Junção = Gateway (Losango).",
      "cascasDeBanana": {
        "A": "Atividade representa o trabalho sendo feito.",
        "C": "Evento representa algo que acontece (início, fim, erro).",
        "B": "Fluxo de mensagem é para comunicação entre piscinas (pools).",
        "E": "Objeto de dados representa informação ou documentos."
      },
      "dicaDeOuro": "Um Gateway 'X' no meio é o exclusivo: ou vai por um caminho ou por outro, nunca pelos dois ao mesmo tempo."
    }
  },
  {
    "id": "q_bp_3002",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Piscinas e Raias",
    "statement": "No BPMN, a diferença fundamental entre uma Piscina (Pool) e uma Raia (Lane) é que:",
    "options": {
      "A": "Piscinas representam tarefas e Raias representam decisões.",
      "B": "Raias podem conter múltiplas Piscinas.",
      "C": "Não há diferença técnica, são apenas termos estéticos.",
      "D": "Piscinas representam participantes independentes (ex: Organizações), enquanto Raias representam sub-divisões dentro de um participante (ex: Departamentos).",
      "E": "Piscinas são usadas apenas para processos automatizados."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pense em uma competição de natação. A Piscina é a empresa inteira. As Raias dentro da piscina são os nadadores (Setor de Vendas, Setor Financeiro, etc.). Se você quer mostrar a interação com um Fornecedor Externo, você desenha uma OUTRA piscina.",
      "puloDoGato": "Pool = Organização / Entidade Externa. Lane = Papel / Departamento / Sistema interno.",
      "cascasDeBanana": {
        "A": "Nada a ver com tarefas ou decisões.",
        "B": "Invertido. A Piscina contém as Raias.",
        "E": "Ambas são usadas em qualquer tipo de processo.",
        "C": "A diferença é crucial para entender o escopo e a responsabilidade."
      },
      "dicaDeOuro": "A comunicação entre Piscinas é feita por 'Fluxo de Mensagem', enquanto dentro da mesma Piscina usa-se 'Fluxo de Sequência'."
    }
  },
  {
    "id": "q_bp_3003",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Eventos de Início",
    "statement": "Qual o significado de um evento de início com o desenho de um 'Relógio' dentro do círculo na notação BPMN?",
    "options": {
      "A": "O processo está atrasado.",
      "B": "O processo só pode ser iniciado manualmente pelo gestor.",
      "C": "Representa o tempo médio de execução de uma tarefa.",
      "D": "O processo deve terminar em um horário específico.",
      "E": "O processo é disparado por um agendamento ou intervalo de tempo (Timer)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Timer Event (Evento de Tempo) serve para processos que rodam sozinhos. Exemplo: 'Todo dia às 08:00 o sistema deve gerar o relatório'. Ou 'A cada 30 dias, verifique o estoque'.",
      "puloDoGato": "Círculo com Relógio = Start Event de Tempo (Timer).",
      "cascasDeBanana": {
        "D": "Eventos de início disparam o processo, não definem o fim.",
        "A": "BPMN não modela status de atraso em tempo real, modela o fluxo lógico.",
        "C": "Isso seria uma métrica de KPI.",
        "B": "Início manual é representado pelo círculo vazio ou com ícone de mão/pessoa."
      },
      "dicaDeOuro": "Eventos de tempo também podem ser intermediários, agindo como um 'pausa' ou 'delay' no processo."
    }
  },
  {
    "id": "q_bp_3004",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Modelagem de Processos - Diagramas vs Mapas",
    "statement": "Qual a principal característica de um 'Diagrama de Processo' em relação a um 'Mapa de Processo'?",
    "options": {
      "A": "O Diagrama é muito mais detalhado e inclui exceções e fluxos alternativos.",
      "B": "O Mapa foca apenas na automação técnica, ignorando as pessoas.",
      "C": "O Mapa é mais detalhado que o Diagrama.",
      "D": "Diagramas são usados apenas por diretores e CEOs.",
      "E": "O Diagrama é apenas uma lista de tarefas em texto."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Existe uma hierarquia: 1. Mapa (Visão geral, alto nível), 2. Diagrama (Detalhado, com caminhos de erro e decisões), 3. Modelo (Pronto para ser automatizado em um motor de processos). O Diagrama é o 'meio de campo' técnico.",
      "puloDoGato": "Mapa = Visão Macro. Diagrama = Visão Detalhada. Modelo = Visão Executável.",
      "cascasDeBanana": {
        "A": "",
        "B": "Invertido.",
        "C": "Ambos são visuais.",
        "D": "O Mapa é o mais simples e focado no negócio.",
        "E": "Diagramas são ferramentas de analistas e desenvolvedores."
      },
      "dicaDeOuro": "Para concursos, lembre-se: quanto mais 'baixo' o nível (Modelo), mais detalhes técnicos de TI ele possui."
    }
  },
  {
    "id": "q_bp_3005",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Atividades de Script vs Manual",
    "statement": "No BPMN 2.0, uma tarefa que é executada por um motor de processos (BPMS) sem intervenção humana, utilizando uma linguagem de programação, é representada por qual tipo de tarefa?",
    "options": {
      "A": "Send Task (Tarefa de Envio).",
      "B": "Manual Task (Tarefa Manual).",
      "C": "User Task (Tarefa de Usuário).",
      "D": "Service Task (Tarefa de Serviço).",
      "E": "Script Task (Tarefa de Script)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Script Task tem o ícone de um 'pergaminho' ou 'folha de código'. Ela roda um script (JavaScript, Python, etc.) dentro do motor de processos. Se for uma chamada para um sistema externo (API), aí seria uma Service Task (ícone de engrenagens).",
      "puloDoGato": "Script Task = Código rodando dentro do BPMS. Service Task = Chamada de sistema externo.",
      "cascasDeBanana": {
        "C": "User Task exige que um humano interaja com uma tela.",
        "B": "Manual Task é algo feito 'fora' do computador (ex: carregar uma caixa).",
        "D": "Service Task é para integrações externas (APIs).",
        "A": "Send Task serve apenas para enviar mensagens/e-mails."
      },
      "dicaDeOuro": "Diferenciar Service Task de Script Task é uma das questões preferidas da Cesgranrio."
    }
  },
  {
    "id": "q_bp_3006",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPM - KPIs",
    "statement": "O que representa o indicador 'Cycle Time' no contexto de gestão de processos?",
    "options": {
      "A": "O tempo médio que um item leva para atravessar o processo do início ao fim.",
      "B": "A quantidade de erros detectados por hora.",
      "C": "O custo total para manter o processo rodando.",
      "D": "O tempo de vida útil do software de BPMS.",
      "E": "O nível de satisfação do cliente final."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Cycle Time é o relógio da eficiência. Se o seu Cycle Time está subindo, significa que o processo está ficando mais lento e burocrático. É o tempo de 'atravessamento'.",
      "puloDoGato": "Cycle Time = Tempo de execução ponta a ponta.",
      "cascasDeBanana": {
        "C": "Isso seria o Custo do Processo.",
        "B": "Isso seria a Taxa de Erro ou Retrabalho.",
        "E": "Isso seria o CSAT ou NPS.",
        "D": "Irrelevante para a performance do negócio."
      },
      "dicaDeOuro": "Reduzir o Cycle Time sem aumentar o custo é o 'Santo Graal' da otimização de processos."
    }
  },
  {
    "id": "q_bp_3007",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Gateway Inclusivo",
    "statement": "O Gateway Inclusivo (marcado com um círculo/O no meio do losango) permite que:",
    "options": {
      "A": "Todos os caminhos de saída sejam seguidos obrigatoriamente.",
      "B": "Um ou mais caminhos de saída sejam seguidos, dependendo das condições.",
      "C": "O fluxo retorne para o início do processo (loop).",
      "D": "Apenas um dos caminhos de saída seja seguido.",
      "E": "O processo seja interrompido imediatamente."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Inclusivo é o 'E/OU'. Você pode seguir pelo caminho A, pelo B, ou pelos DOIS ao mesmo tempo se as condições baterem. Ele é o mais flexível dos gateways.",
      "puloDoGato": "Gateway Inclusivo (O) = Um, Alguns ou Todos os caminhos.",
      "cascasDeBanana": {
        "D": "Esse é o Exclusivo (X).",
        "A": "Esse é o Paralelo (+).",
        "E": "Nenhum gateway serve para interromper o processo (usa-se Eventos de Fim).",
        "C": "Loop é modelado com setas voltando, não é função específica do inclusivo."
      },
      "dicaDeOuro": "Lembre-se: se você abrir um fluxo com um Gateway Inclusivo, você deve fechá-lo com outro Gateway Inclusivo para sincronizar os caminhos."
    }
  },
  {
    "id": "q_bp_3008",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Análise de Processos - Gargalos",
    "statement": "Na análise AS-IS, a identificação de 'Gargalos' (Bottlenecks) é fundamental. Um gargalo ocorre quando:",
    "options": {
      "A": "O custo da matéria prima diminui.",
      "B": "O processo não possui documentação formal.",
      "C": "Uma etapa do processo tem capacidade superior à demanda.",
      "D": "A demanda de trabalho chega em uma etapa mais rápido do que ela consegue processar.",
      "E": "Muitos funcionários estão ociosos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O gargalo é o 'pescoço da garrafa'. Não importa o tamanho da garrafa, o líquido só sai na velocidade do pescoço. Se você tem 10 pessoas vendendo e só 1 pessoa faturando, o faturamento é o seu gargalo.",
      "puloDoGato": "Gargalo = Capacidade < Demanda.",
      "cascasDeBanana": {
        "C": "Isso gera ociosidade, não gargalo.",
        "B": "Isso é falta de maturidade, mas não gera acúmulo físico de trabalho necessariamente.",
        "E": "O oposto do gargalo.",
        "A": "Assunto financeiro."
      },
      "dicaDeOuro": "Para resolver um gargalo, você deve ou aumentar a capacidade daquela etapa ou reduzir a carga que chega nela."
    }
  },
  {
    "id": "q_bp_3009",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Subprocessos",
    "statement": "Um subprocesso colapsado (representado por um retângulo com um sinal de '+' na base) indica que:",
    "options": {
      "A": "Aquela tarefa deve ser repetida múltiplas vezes.",
      "B": "Existe um fluxo detalhado dentro daquela atividade que está oculto na visão atual.",
      "C": "A tarefa é opcional e pode ser pulada.",
      "D": "O processo foi cancelado com sucesso.",
      "E": "O resultado da tarefa deve ser somado ao valor total."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O sinal de '+' é o 'zoom'. Ele diz: 'Olha, aqui dentro tem todo um processo complexo, mas para não bagunçar esse desenho geral, eu escondi os detalhes aqui dentro'. É uma forma de organizar diagramas grandes.",
      "puloDoGato": "Subprocesso Colapsado [+] = Detalhes ocultos para limpeza visual.",
      "cascasDeBanana": {
        "A": "Eventos de erro ou cancelamento usam outros ícones.",
        "B": "",
        "C": "Repetição usa o ícone de 'Loop' (setinha circular).",
        "D": "BPMN usa Gateways ou fluxos condicionais para tarefas opcionais.",
        "E": "Não existe soma matemática representada por esse símbolo."
      },
      "dicaDeOuro": "Quando você clica no [+] em uma ferramenta de BPMS, ele abre uma nova aba com o desenho interno."
    }
  },
  {
    "id": "q_bp_3010",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPM - Governança",
    "statement": "O papel do 'Dono do Processo' (Process Owner) na governança de BPM é:",
    "options": {
      "A": "Realizar o treinamento de integração de novos funcionários do RH.",
      "B": "Instalar o servidor de banco de dados da empresa.",
      "C": "Vender os produtos da empresa para clientes externos.",
      "D": "Escrever o código-fonte do sistema que automatiza o processo.",
      "E": "Ser o responsável final pelo desempenho e pela melhoria contínua de um processo específico ponta a ponta."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Dono do Processo é o 'xerife'. Se o processo de 'Vendas' está ruim, é ele quem responde por isso. Ele tem autoridade para mudar as regras e pedir melhorias. Ele foca no RESULTADO do processo.",
      "puloDoGato": "Process Owner = Responsável pelo desempenho e melhoria do processo.",
      "cascasDeBanana": {
        "D": "Isso é papel do Desenvolvedor.",
        "B": "Isso é papel do DBA / Infra.",
        "A": "Isso é papel do RH.",
        "C": "Isso é papel do Vendedor."
      },
      "dicaDeOuro": "O Dono do Processo deve ter autoridade cross-funcional, ou seja, mandar em várias áreas por onde o processo passa."
    }
  },
  {
    "id": "q_bp_3011",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Fluxo de Sequência vs Mensagem",
    "statement": "Em BPMN, o 'Fluxo de Mensagem' (seta tracejada com círculo na ponta) pode ser utilizado para conectar:",
    "options": {
      "A": "Uma piscina a uma raia interna da mesma piscina.",
      "B": "Dois objetos em diferentes piscinas (pools).",
      "C": "Duas atividades dentro da mesma raia (lane).",
      "D": "Um gateway a um objeto de dados.",
      "E": "Um evento de início a um evento de fim na mesma raia."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fluxo de Mensagem é para 'conversa externa'. Se a sua empresa (Pool A) envia um e-mail para o cliente (Pool B), você usa a seta tracejada. Dentro da sua empresa, você só usa a seta contínua (Fluxo de Sequência).",
      "puloDoGato": "Sequência (Seta contínua) = Dentro da mesma Piscina. Mensagem (Seta tracejada) = Entre Piscinas diferentes.",
      "cascasDeBanana": {
        "C": "Dentro da raia usa-se sequência.",
        "E": "Mesma raia usa-se sequência.",
        "D": "Conexão com dados usa-se 'Associação' (linha pontilhada sem seta).",
        "A": "Impossível. Mensagem é apenas entre pools."
      },
      "dicaDeOuro": "Um fluxo de mensagem nunca pode conectar dois objetos dentro da mesma piscina."
    }
  },
  {
    "id": "q_bp_3012",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Gateway Paralelo",
    "statement": "O Gateway Paralelo (marcado com um sinal de + no meio do losango) é utilizado quando:",
    "options": {
      "A": "O fluxo deve seguir apenas um dos caminhos possíveis.",
      "B": "O sistema deve escolher o caminho mais barato.",
      "C": "Múltiplos fluxos de trabalho devem ser executados simultaneamente, sem necessidade de condições.",
      "D": "O processo deve esperar um tempo específico antes de continuar.",
      "E": "Houve um erro no processamento anterior."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Paralelo é o 'E'. Ele divide o fluxo em dois ou mais braços que acontecem AO MESMO TEMPO. Exemplo: 'Enquanto o financeiro emite a nota, o estoque separa o produto'. Não tem pergunta, faz os dois e pronto.",
      "puloDoGato": "Gateway Paralelo (+) = Sincronização e Fork (Divisão) sem condições.",
      "cascasDeBanana": {
        "A": "Isso é o Exclusivo (X).",
        "B": "Isso é Evento de Tempo.",
        "C": "",
        "D": "BPMN não calcula custo de caminho automaticamente.",
        "E": "Erro usa Eventos de Erro."
      },
      "dicaDeOuro": "Quando você usa um gateway paralelo para abrir, você deve usar outro para fechar e esperar todos os braços terminarem antes de seguir o processo."
    }
  },
  {
    "id": "q_bp_3013",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "Metodologias de Melhoria - Six Sigma",
    "statement": "Na gestão de processos, a metodologia Six Sigma foca primordialmente em:",
    "options": {
      "A": "Garantir que a empresa tenha o menor preço do mercado.",
      "B": "Aumentar a quantidade de funcionários por departamento.",
      "C": "Eliminar desperdícios de tempo e material.",
      "D": "Substituir todos os processos manuais por robôs.",
      "E": "Reduzir a variabilidade dos processos e eliminar defeitos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Six Sigma é sobre PERFEIÇÃO e PADRÃO. O objetivo é que o processo seja tão preciso que ele erre apenas 3,4 vezes em cada 1 MILHÃO de tentativas. É matemática pura para controle de qualidade.",
      "puloDoGato": "Lean = Foco em Desperdício. Six Sigma = Foco em Variabilidade/Defeitos.",
      "cascasDeBanana": {
        "C": "Isso é o foco do Lean Manufacturing.",
        "B": "O Six Sigma geralmente busca eficiência, o que pode até reduzir o quadro.",
        "D": "Automação ajuda, mas o foco é na qualidade do que é produzido.",
        "A": "Preço é estratégia de marketing/vendas."
      },
      "dicaDeOuro": "O método DMAIC (Definir, Medir, Analisar, Melhorar, Controlar) é o coração do Six Sigma."
    }
  },
  {
    "id": "q_bp_3014",
    "discipline": "Gestão de Processos de Negócio",
    "topic": "BPMN - Artefatos",
    "statement": "Qual artefato BPMN é utilizado para fornecer informações adicionais sobre o processo que não afetam o fluxo lógico, agindo apenas como documentação visual?",
    "options": {
      "A": "Fluxo de Mensagem.",
      "B": "Grupo.",
      "C": "Objeto de Dados.",
      "D": "Anotação de Texto.",
      "E": "Evento Intermediário."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Anotação de Texto é aquele 'post-it' que você coloca no desenho. Ele serve para explicar algo para quem está lendo o diagrama, mas o motor de processos (computador) ignora solenemente aquilo na hora de rodar.",
      "puloDoGato": "Anotação de Texto = Comentário / Explicação visual.",
      "cascasDeBanana": {
        "B": "Grupo serve para destacar uma área do desenho, mas também não afeta o fluxo.",
        "C": "Objeto de dados representa informação que o processo CONSOME ou PRODUZ, então afeta a lógica de dados.",
        "A": "Mensagem afeta o fluxo (dispara ou recebe algo).",
        "E": "Eventos afetam o fluxo diretamente."
      },
      "dicaDeOuro": "Use anotações para explicar regras de negócio complexas que estão escondidas dentro de um Gateway."
    }
  },
  {
    "id": "q_bp_3108",
    "discipline": "Qualidade de Software",
    "topic": "Modelos de Maturidade - CMMI",
    "statement": "No modelo CMMI v2.0 (Capability Maturity Model Integration), o nível 2 de maturidade é denominado 'Gerenciado' (Managed). Qual a principal característica de uma organização que está neste nível?",
    "options": {
      "A": "Os processos são imprevisíveis e reativos.",
      "B": "Os projetos são planejados, executados, medidos e controlados em nível de projeto, mas ainda não há padronização para toda a organização.",
      "C": "Não existem processos definidos, tudo depende do heroismo individual.",
      "D": "A organização utiliza modelos estatísticos para prever a performance de todos os seus processos.",
      "E": "O foco total é na inovação e na melhoria contínua tecnológica."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "No Nível 2 (Gerenciado), a bagunça começou a ser organizada. Cada projeto tem seu cronograma, seus custos e seus requisitos controlados. Mas cada gerente faz do seu jeito. O Nível 3 (Definido) é quando a empresa cria um padrão 'da casa' que todos os projetos devem seguir.",
      "puloDoGato": "CMMI Nível 2 = Projetos Controlados. CMMI Nível 3 = Organização Padronizada.",
      "cascasDeBanana": {
        "A": "Isso é Nível 1 (Inicial).",
        "B": "",
        "C": "Isso é Nível 4 (Gerenciado Quantitativamente).",
        "D": "Isso é Nível 5 (Em Otimização).",
        "E": "Nível 1 (Caos)."
      },
      "dicaDeOuro": "O CMMI ajuda a garantir que a qualidade não seja um acidente, mas um resultado repetível."
    }
  },
  {
    "id": "q_bp_3109",
    "discipline": "Qualidade de Software",
    "topic": "ISO/IEC 25010 - Características",
    "statement": "De acordo com a norma ISO/IEC 25010, a característica de qualidade que avalia a facilidade com que um sistema pode ser modificado para corrigir defeitos, melhorar a performance ou adaptar-se a novos requisitos é a:",
    "options": {
      "A": "Confiabilidade.",
      "B": "Eficiência de Desempenho.",
      "C": "Manutenibilidade (Maintainability).",
      "D": "Portabilidade.",
      "E": "Usabilidade."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Manutenibilidade é o 'sonho' do programador que vai herdar o seu código daqui a 2 anos. É fácil de ler? É fácil de mudar sem quebrar tudo? Se sim, a manutenibilidade é alta.",
      "puloDoGato": "Facilidade de modificação = Manutenibilidade.",
      "cascasDeBanana": {
        "E": "Facilidade de uso pelo usuário final.",
        "A": "Capacidade do sistema de se manter funcionando sem falhas (uptime).",
        "D": "Facilidade de mover o sistema de um ambiente para outro (ex: Windows para Linux).",
        "B": "Velocidade e consumo de recursos."
      },
      "dicaDeOuro": "Códigos com alto acoplamento e baixa coesão destroem a manutenibilidade do software."
    }
  },
  {
    "id": "q_bp_3110",
    "discipline": "Qualidade de Software",
    "topic": "Testes - Caixa Branca vs Caixa Preta",
    "statement": "O que caracteriza o teste de 'Caixa Branca' (White-Box Testing)?",
    "options": {
      "A": "O teste foca exclusivamente na cor dos botões da interface.",
      "B": "O testador analisa a lógica interna do código, caminhos de execução, loops e condições.",
      "C": "O testador foca apenas nas entradas e saídas, sem conhecer o código fonte interno.",
      "D": "O teste é realizado apenas por usuários finais em ambiente de produção.",
      "E": "É um teste que ignora completamente os requisitos funcionais."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Caixa Branca = O código é transparente. Você olha o `if`, o `for`, o `switch` e escreve testes para garantir que passou por todas as linhas possíveis. Geralmente é feito pelo próprio desenvolvedor (Testes Unitários).",
      "puloDoGato": "Caixa Branca = Conhece o código. Caixa Preta = Só conhece a funcionalidade (Entrada/Saída).",
      "cascasDeBanana": {
        "A": "Isso é Teste de Caixa Preta.",
        "B": "",
        "C": "Isso seria Teste de Aceitação ou Beta Test.",
        "D": "Isso é teste de design/UI.",
        "E": "Nenhum teste sério ignora os requisitos."
      },
      "dicaDeOuro": "Testes de Caixa Branca são fundamentais para garantir a cobertura de código (Code Coverage)."
    }
  },
  {
    "id": "q_bp_3111",
    "discipline": "Qualidade de Software",
    "topic": "Verificação vs Validação",
    "statement": "Na garantia de qualidade, qual a diferença conceitual entre 'Verificação' e 'Validação'?",
    "options": {
      "A": "Validação acontece no início do projeto, Verificação acontece no final.",
      "B": "Verificação pergunta 'Estamos construindo o produto corretamente?'; Validação pergunta 'Estamos construindo o produto certo?'.",
      "C": "São termos idênticos e intercambiáveis.",
      "D": "Verificação é feita pelo cliente, Validação é feita pela equipe de TI.",
      "E": "Verificação foca em hardware, Validação foca em software."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Verificação é o checklist técnico: o código segue o padrão? Os requisitos foram seguidos? (Processo). Validação é o valor de negócio: o cliente realmente queria isso? Isso resolve o problema dele? (Produto). Você pode 'verificar' que o sistema de login está perfeito, mas 'validar' que o cliente na verdade queria login por biometria e não por senha.",
      "puloDoGato": "Verificação = Build the product right (Técnico). Validação = Build the right product (Negócio)."
    }
  },
  {
    "id": "q_bp_3112",
    "discipline": "Qualidade de Software",
    "topic": "Métricas - Densidade de Defeitos",
    "statement": "A métrica de 'Densidade de Defeitos' é calculada como:",
    "options": {
      "A": "O tempo médio entre falhas (MTBF).",
      "B": "Número de programadores dividido pelo número de bugs.",
      "C": "A quantidade de café consumida pela equipe de testes.",
      "D": "Número de bugs encontrados dividido pelo tamanho do software (ex: por mil linhas de código ou pontos de função).",
      "E": "O custo total do projeto dividido pelo número de erros."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Se você achou 10 bugs num sistema minúsculo, a qualidade está horrível. Se achou 10 bugs num sistema gigante de 1 milhão de linhas, a qualidade está ótima. A densidade coloca o número de erros em perspectiva com o tamanho do que foi feito.",
      "puloDoGato": "Densidade de Defeitos = Erros / Tamanho do Software.",
      "cascasDeBanana": {
        "B": "Não faz sentido como métrica de qualidade.",
        "E": "Métrica financeira.",
        "C": "Piada de programador.",
        "A": "Isso é confiabilidade, não densidade."
      },
      "dicaDeOuro": "Uma densidade de defeitos decrescente ao longo das versões indica que o processo de desenvolvimento está amadurecendo."
    }
  },
  {
    "id": "q_bp_3113",
    "discipline": "Qualidade de Software",
    "topic": "Testes de Regressão",
    "statement": "Qual o objetivo principal de realizar 'Testes de Regressão'?",
    "options": {
      "A": "Voltar o sistema para uma versão anterior que não tinha bugs.",
      "B": "Aumentar a velocidade de banco de dados.",
      "C": "Treinar novos usuários no sistema.",
      "D": "Testar novas funcionalidades que acabaram de ser criadas.",
      "E": "Garantir que alterações recentes ou correções de bugs não introduziram novos erros em funcionalidades que já estavam funcionando anteriormente."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Regressão é o famoso 'conserta aqui e quebra ali'. Você corrigiu o relatório de vendas, mas sem querer estragou o cadastro de clientes. O teste de regressão serve para garantir que o que estava bom continue bom.",
      "puloDoGato": "Regressão = Testar o que já funcionava após uma mudança.",
      "cascasDeBanana": {
        "D": "Isso é teste funcional de novas features.",
        "A": "Isso seria um 'Rollback'.",
        "B": "Otimização.",
        "C": "Treinamento."
      },
      "dicaDeOuro": "Devido ao grande volume de testes repetitivos, a automação de testes é a melhor amiga dos testes de regressão."
    }
  },
  {
    "id": "q_bp_3114",
    "discipline": "Qualidade de Software",
    "topic": "Garantia de Qualidade (SQA)",
    "statement": "As atividades de SQA (Software Quality Assurance) devem ocorrer em qual momento do ciclo de vida de desenvolvimento?",
    "options": {
      "A": "Apenas na última semana antes do lançamento.",
      "B": "De forma contínua e planejada, durante todo o ciclo de vida do projeto.",
      "C": "Somente quando o cliente reclama de algum erro grave.",
      "D": "Somente na fase de levantamento de requisitos.",
      "E": "Apenas durante a fase de codificação."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Qualidade não é um evento final, é uma cultura. Se você só se preocupa com a qualidade no fim, você vai descobrir que o alicerce está torto quando a casa já está pronta. O SQA deve planejar revisões e auditorias desde o dia 1.",
      "puloDoGato": "Qualidade = Presente em todas as fases do ciclo de vida.",
      "cascasDeBanana": {
        "A": "Caminho certo para o fracasso e atraso.",
        "C": "Isso é manutenção corretiva/suporte, não garantia de qualidade.",
        "E": "Qualidade vai muito além do código.",
        "D": "Qualidade deve ser mantida também na codificação e testes."
      },
      "dicaDeOuro": "O custo de corrigir um erro cresce exponencialmente ao longo das fases do projeto."
    }
  },
  {
    "id": "q_bp_3208",
    "discipline": "SOA",
    "topic": "Conceito de Serviço",
    "statement": "Em uma arquitetura SOA (Service-Oriented Architecture), o que define um 'Serviço'?",
    "options": {
      "A": "Uma pasta de arquivos na rede local.",
      "B": "Um banco de dados compartilhado por toda a empresa.",
      "C": "Uma unidade lógica de negócio, autocontida, com interface bem definida e que pode ser descoberta e invocada por outros sistemas.",
      "D": "O ato de o programador realizar a manutenção do computador do cliente.",
      "E": "Uma linha de código escrita em Java."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Um serviço no SOA é como um 'serviço de cartório'. Você não sabe como eles trabalham lá dentro, mas você sabe o que precisa levar (Input), o que eles vão te entregar (Output) e onde o cartório fica (Endpoint). Ele é independente e resolve um problema de negócio (ex: Validar Crédito).",
      "puloDoGato": "Serviço SOA = Autocontido + Reutilizável + Interface Padronizada.",
      "cascasDeBanana": {
        "E": "Código é implementação, serviço é conceito de negócio exposto.",
        "D": "Confusão com 'prestação de serviço' pessoal.",
        "B": "SOA busca evitar o compartilhamento direto de banco de dados (acoplamento forte).",
        "A": "Armazenamento não é serviço lógico."
      },
      "dicaDeOuro": "O SOA foca na interoperabilidade, ou seja, sistemas diferentes conversando de forma padronizada."
    }
  },
  {
    "id": "q_bp_3209",
    "discipline": "SOA",
    "topic": "Protocolo SOAP vs REST",
    "statement": "Qual a principal diferença técnica no formato de dados trafegado entre os padrões SOAP e REST?",
    "options": {
      "A": "SOAP exige obrigatoriamente o uso de XML com um envelope específico, enquanto o REST é mais flexível, sendo o JSON o formato mais comum.",
      "B": "REST é um protocolo rígido, enquanto SOAP é apenas um estilo arquitetural.",
      "C": "SOAP utiliza apenas texto puro (.txt), enquanto REST utiliza binário.",
      "D": "SOAP não permite o uso do protocolo HTTP.",
      "E": "REST só funciona em redes locais (LAN), enquanto SOAP funciona na internet (WAN)."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "SOAP é o 'velho ranzinza e formal': tudo tem que ser em XML, com cabeçalho certinho e regras rígidas (WSDL). REST é o 'jovem moderno e flexível': ele prefere JSON (mais leve), usa os verbos do HTTP (GET, POST) e é muito mais fácil de implementar em sites e apps.",
      "puloDoGato": "SOAP = XML Rígido + Envelope. REST = Estilo leve + JSON/XML flexível.",
      "cascasDeBanana": {
        "C": "Ambos usam formatos estruturados.",
        "E": "Ambos são feitos para a web (HTTP).",
        "D": "SOAP roda sobre HTTP, mas também pode rodar sobre SMTP, etc.",
        "B": "Invertido. SOAP é um protocolo (W3C), REST é um estilo arquitetural (Roy Fielding)."
      },
      "dicaDeOuro": "Hoje em dia, 90% das APIs novas usam REST/JSON por ser muito mais leve para o tráfego de dados (mobile, por exemplo)."
    }
  },
  {
    "id": "q_bp_3210",
    "discipline": "SOA",
    "topic": "WSDL - Web Services Description Language",
    "statement": "Para que serve o arquivo WSDL em um Web Service baseado em SOAP?",
    "options": {
      "A": "Para armazenar os registros do banco de dados.",
      "B": "Para definir o layout das telas do sistema.",
      "C": "Para descrever as funcionalidades do serviço, os parâmetros de entrada/saída e o endereço de acesso (o 'contrato' do serviço).",
      "D": "Para criptografar a senha do administrador.",
      "E": "Para compactar as imagens do site."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O WSDL é o 'manual de instruções' do Web Service. Se você quer usar um serviço de outra empresa, você lê o WSDL dela para saber o nome da função, o que você tem que mandar e o que ela vai te devolver. Sem o WSDL, você estaria 'no escuro'.",
      "puloDoGato": "WSDL = Contrato do Web Service SOAP (XML).",
      "cascasDeBanana": {
        "A": "WSDL é metadado, não dado de negócio.",
        "D": "Segurança é tratada por WS-Security.",
        "B": "SOA não lida com interface de usuário (UI).",
        "E": "Irrelevante."
      },
      "dicaDeOuro": "No mundo REST, o equivalente ao WSDL (documentação automática) costuma ser o Swagger ou OpenAPI."
    }
  },
  {
    "id": "q_bp_3211",
    "discipline": "SOA",
    "topic": "Barramento de Serviços (ESB)",
    "statement": "O Enterprise Service Bus (ESB) é um componente central em muitas implementações SOA. Qual sua função principal?",
    "options": {
      "A": "Prover internet banda larga para a empresa.",
      "B": "Gerenciar o ponto eletrônico dos funcionários.",
      "C": "Armazenar o código fonte de todos os sistemas (Repositório Git).",
      "D": "Atuar como um roteador inteligente e tradutor de protocolos, permitindo que diferentes serviços se comuniquem sem conhecer os detalhes técnicos uns dos outros.",
      "E": "Substituir o uso de firewalls na rede."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O ESB é o 'tradutor universal'. Se o Sistema A fala Inglês e o Sistema B fala Chinês, o ESB fica no meio traduzindo as mensagens. Ele também decide pra onde mandar cada mensagem (roteamento). Ele centraliza a bagunça das integrações.",
      "puloDoGato": "ESB = Tradução de protocolos + Roteamento de mensagens + Transformação de dados.",
      "cascasDeBanana": {
        "A": "Não é infraestrutura física de rede.",
        "E": "ESB pode ter segurança, mas não substitui firewalls de rede.",
        "C": "ESB lida com dados em trânsito, não com código parado.",
        "B": "RH."
      },
      "dicaDeOuro": "O uso excessivo de ESB pode criar um 'gargalo central' e um ponto único de falha, por isso arquiteturas modernas (microserviços) preferem integrações mais diretas ou 'smart endpoints'."
    }
  },
  {
    "id": "q_bp_3212",
    "discipline": "SOA",
    "topic": "Orquestração vs Coreografia",
    "statement": "Na composição de serviços SOA, qual a diferença entre Orquestração e Coreografia?",
    "options": {
      "A": "Orquestração é para redes locais, Coreografia é para a nuvem.",
      "B": "SOA só permite o uso de Orquestração.",
      "C": "Na Orquestração há um controlador central (maestro) que dita os passos; na Coreografia os serviços interagem entre si de forma descentralizada seguindo regras pré-definidas.",
      "D": "Coreografia é mais lenta que Orquestração.",
      "E": "Orquestração foca em áudio, Coreografia foca em vídeo."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Na Orquestração, tem um 'Chefe' (BPEL, por exemplo) que diz: 'Serviço A, faça isso; agora Serviço B, faça aquilo'. Na Coreografia, não tem chefe. Cada serviço sabe o que fazer quando recebe um sinal do colega, como dançarinos que decoraram os passos juntos.",
      "puloDoGato": "Orquestração = Centralizado (Maestro). Coreografia = Descentralizado (Dança combinada).",
      "cascasDeBanana": {
        "E": "Termos emprestados das artes para explicar software.",
        "A": "Ambos funcionam em qualquer ambiente distribuído.",
        "D": "Depende da implementação e da latência de rede.",
        "B": "Ambos são padrões válidos no SOA."
      },
      "dicaDeOuro": "A Orquestração é mais fácil de monitorar (você pergunta pro chefe), mas a Coreografia é mais escalável (não tem gargalo central)."
    }
  },
  {
    "id": "q_bp_3213",
    "discipline": "SOA",
    "topic": "Governança SOA",
    "statement": "O que é o 'Registro de Serviços' (Service Registry) no contexto de governança SOA?",
    "options": {
      "A": "O cadastro de funcionários que têm acesso ao código fonte.",
      "B": "Um log de todos os erros que aconteceram no servidor.",
      "C": "O backup das senhas de banco de dados.",
      "D": "Uma lista de compras de hardware.",
      "E": "Um catálogo central onde os serviços disponíveis na organização são listados para que outros desenvolvedores possam encontrá-los e reutilizá-los."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O Registro de Serviços é as 'Páginas Amarelas' da empresa. Antes de criar um sistema novo de 'Cálculo de Imposto', o programador olha no Registro para ver se alguém já criou esse serviço. Isso evita que a empresa pague duas vezes pela mesma coisa.",
      "puloDoGato": "Service Registry = Catálogo para Reutilização de Serviços.",
      "cascasDeBanana": {
        "B": "Logs de erro ficam no sistema de monitoramento/observabilidade.",
        "A": "Isso é gestão de identidade e acesso (IAM).",
        "C": "Isso é cofre de senhas (Vault).",
        "D": "Compras/Suprimentos."
      },
      "dicaDeOuro": "O padrão UDDI era a tentativa de padronizar esses registros no início do SOA, mas hoje em dia repositórios internos e portais de API são mais comuns."
    }
  },
  {
    "id": "q_bp_3214",
    "discipline": "SOA",
    "topic": "Interoperabilidade",
    "statement": "Qual o principal benefício da interoperabilidade em uma arquitetura SOA?",
    "options": {
      "A": "Reduzir o consumo de memória RAM dos computadores clientes.",
      "B": "Facilitar a impressão de documentos físicos.",
      "C": "Aumentar a segurança contra ataques de hackers externos.",
      "D": "Garantir que o sistema nunca precise de manutenção.",
      "E": "Permitir que sistemas rodando em diferentes plataformas e linguagens (ex: Mainframe COBOL e Web Python) troquem dados de forma transparente."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Interoperabilidade é o 'esperanto' da TI. Antigamente, fazer um sistema velho falar com um novo era um parto. O SOA usa padrões universais (como HTTP e XML/JSON) para que o sistema não se importe com quem está do outro lado, contanto que ele fale a 'língua padrão'.",
      "puloDoGato": "Interoperabilidade = Sistemas diferentes (heterogêneos) trabalhando juntos.",
      "cascasDeBanana": {
        "D": "Todo sistema precisa de manutenção.",
        "A": "Integrações costumam gastar um pouco mais de recurso, não menos.",
        "C": "Segurança é importante, mas não é a definição de interoperabilidade.",
        "B": "Irrelevante."
      },
      "dicaDeOuro": "Sem padrões abertos e interoperabilidade, a empresa fica presa a um único fabricante (Vendor Lock-in)."
    }
  },
  {
    "id": "q_final_6000",
    "discipline": "Gestão de Configuração",
    "topic": "Linha de Base (Baseline)",
    "statement": "O que representa uma 'Linha de Base' (Baseline) no contexto da Gestão de Configuração de Software?",
    "options": {
      "A": "A primeira linha de código escrita em um projeto.",
      "B": "O salário base dos programadores.",
      "C": "O limite máximo de bugs permitidos em um sistema.",
      "D": "Uma especificação ou produto que foi revisado formalmente e acordado, servindo como base para desenvolvimento posterior e que só pode ser alterado por procedimentos formais de controle de mudanças.",
      "E": "Uma ferramenta de chat para a equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Baseline é o 'ponto de congelamento'. Quando o requisito ou o código atinge um nível de maturidade, a gente 'carimba' ele como Baseline. A partir daí, ninguém muda nada sem passar pelo comitê de mudanças.",
      "puloDoGato": "Baseline = Referência Formal + Controle de Mudanças.",
      "cascasDeBanana": {
        "A": "Isso é apenas o início do trabalho.",
        "C": "Métrica de qualidade."
      },
      "dicaDeOuro": "As baselines ajudam a manter a integridade do projeto ao longo do tempo."
    }
  },
  {
    "id": "q_final_6001",
    "discipline": "Gestão de Configuração",
    "topic": "Itens de Configuração (IC)",
    "statement": "Qual das alternativas abaixo pode ser considerada um Item de Configuração (IC) em um projeto de software?",
    "options": {
      "A": "Modelos de Dados.",
      "B": "Documento de Requisitos.",
      "C": "Manuais do Usuário.",
      "D": "Todas as alternativas acima.",
      "E": "Código-fonte."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um IC é qualquer coisa que você precise versionar e controlar para que o projeto funcione. Não é só código! Documentos, planos de teste e até o ambiente de compilação podem ser ICs.",
      "puloDoGato": "IC = Qualquer artefato do projeto sujeito ao controle de configuração.",
      "cascasDeBanana": {
        "E": "Apenas um dos tipos de IC."
      },
      "dicaDeOuro": "Identificar corretamente os ICs é o primeiro passo para uma boa gestão de configuração."
    }
  },
  {
    "id": "q_final_6002",
    "discipline": "Gestão de Configuração",
    "topic": "Versionamento - Branching",
    "statement": "Em sistemas de controle de versão como o Git, qual a finalidade da criação de uma 'Branch' (ramificação)?",
    "options": {
      "A": "Aumentar o tamanho dos arquivos do projeto.",
      "B": "Apagar o histórico de commits anteriores.",
      "C": "Impedir que outros programadores vejam o código.",
      "D": "Substituir a necessidade de fazer backups.",
      "E": "Permitir que desenvolvedores trabalhem em funcionalidades ou correções de forma isolada, sem afetar a linha principal de código (Main/Master) até que o trabalho esteja pronto."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Branch é como uma 'linha do tempo alternativa'. Você cria uma branch pra fazer uma feature nova. Se der tudo errado, você deleta a branch e a linha principal continua salva. Se der certo, você faz o 'Merge'.",
      "puloDoGato": "Branch = Isolamento de tarefas + Trabalho paralelo.",
      "cascasDeBanana": {
        "B": "Branches preservam o histórico.",
        "D": "Git é controle de versão, backup é outra estratégia complementar."
      },
      "dicaDeOuro": "Utilize nomes descritivos para suas branches, como `feature/login-social` ou `bugfix/erro-calculo`."
    }
  },
  {
    "id": "q_final_6003",
    "discipline": "Gestão de Configuração",
    "topic": "Auditoria de Configuração",
    "statement": "Qual o objetivo de uma 'Auditoria de Configuração Física'?",
    "options": {
      "A": "Contar quantas linhas de código foram escritas.",
      "B": "Medir a temperatura dos servidores.",
      "C": "Confirmar se todos os Itens de Configuração planejados foram realmente produzidos e estão presentes na versão final do produto.",
      "D": "Verificar se o código segue os padrões de indentação.",
      "E": "Verificar se os computadores da empresa estão limpos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Auditoria Física é o checklist final: 'Nós combinamos de entregar o Manual, o Código e o Script de Banco. Estão todos aqui?'. Ela garante que nada foi esquecido no caminho.",
      "puloDoGato": "Auditoria Física = Verificar se o item EXISTE e está completo.",
      "cascasDeBanana": {
        "D": "Isso seria uma auditoria funcional ou revisão de código."
      },
      "dicaDeOuro": "A Auditoria Funcional verifica se o item faz o que deveria fazer; a Física verifica se ele está lá."
    }
  },
  {
    "id": "q_final_6004",
    "discipline": "CMMI v2.0",
    "topic": "Áreas de Prática - Planejamento",
    "statement": "No CMMI v2.0, qual o objetivo principal da Área de Prática 'Planejamento e Estimativa de Trabalho' (Planning and Estimate - EST)?",
    "options": {
      "A": "Estabelecer e manter planos que definam o trabalho a ser realizado, os recursos necessários e os cronogramas, baseando-se em estimativas realistas.",
      "B": "Garantir que o projeto termine no menor tempo possível, custe o que custar.",
      "C": "Substituir os gerentes de projeto por algoritmos de IA.",
      "D": "Eliminar a necessidade de documentação técnica.",
      "E": "Garantir que todos os programadores trabalhem 12 horas por dia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "CMMI odeia 'chutômetro'. Essa área de prática serve para que o time aprenda a estimar de verdade (usando dados históricos) e crie planos que possam ser seguidos, não apenas promessas vazias.",
      "puloDoGato": "EST = Estimativas baseadas em dados + Planos realistas.",
      "cascasDeBanana": {
        "B": "CMMI foca em qualidade e previsibilidade, não em velocidade cega."
      },
      "dicaDeOuro": "Estimar o esforço antes de definir o cronograma é um passo vital no CMMI."
    }
  },
  {
    "id": "q_final_6005",
    "discipline": "CMMI v2.0",
    "topic": "Níveis de Capacidade vs Maturidade",
    "statement": "No CMMI v2.0, qual a diferença entre 'Nível de Capacidade' e 'Nível de Maturidade'?",
    "options": {
      "A": "Capacidade é medida de 1 a 5, Maturidade é de A a Z.",
      "B": "Não há diferença, são sinônimos.",
      "C": "Maturidade é para pessoas, Capacidade é para máquinas.",
      "D": "Capacidade é para empresas pequenas, Maturidade para grandes.",
      "E": "Capacidade refere-se ao desempenho de uma única Área de Prática (visão contínua); Maturidade refere-se ao desempenho de um conjunto de Áreas de Prática (visão por estágios)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Capacidade é o 'músculo' específico (ex: Quão bom somos em Testes?). A Maturidade é a 'saúde geral' do corpo (ex: Quão boa é a empresa toda?).",
      "puloDoGato": "Representação Contínua = Capacidade. Representação por Estágios = Maturidade.",
      "cascasDeBanana": {
        "B": "Confusão comum em provas."
      },
      "dicaDeOuro": "A maioria das empresas busca a certificação por Níveis de Maturidade (1 a 5)."
    }
  },
  {
    "id": "q_final_6006",
    "discipline": "CMMI v2.0",
    "topic": "Governança",
    "statement": "A Área de Prática 'Governança' (GOV) no CMMI v2.0 foca em:",
    "options": {
      "A": "Desenvolver o código-fonte do sistema.",
      "B": "Garantir que as práticas de trabalho da organização sejam seguidas e que os recursos sejam alocados de forma a atingir os objetivos de negócio.",
      "C": "Vender os produtos para o governo.",
      "D": "Instalar firewalls na rede da empresa.",
      "E": "Realizar o recrutamento de novos talentos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Governança no CMMI é o 'olhar do dono'. É garantir que o que foi prometido nos processos está sendo feito e que a liderança apoia e dá recursos para o time trabalhar com qualidade.",
      "puloDoGato": "GOV = Patrocínio da Liderança + Alinhamento Estratégico.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "TI/Infra.",
        "D": "RH.",
        "E": ""
      },
      "dicaDeOuro": "Sem governança forte, os processos do CMMI tendem a ser abandonados sob pressão de prazos."
    }
  },
  {
    "id": "q_final_6007",
    "discipline": "Processos de Software",
    "topic": "Modelo Incremental",
    "statement": "Qual a principal vantagem do Modelo Incremental em relação ao Modelo Cascata?",
    "options": {
      "A": "Não exige fase de requisitos.",
      "B": "Exige menos programadores.",
      "C": "Garante que o software nunca terá bugs.",
      "D": "É o modelo mais barato de todos.",
      "E": "Permite a entrega de partes funcionais do sistema ao cliente mais cedo, possibilitando feedback e valor de negócio antes do fim total do projeto."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No Cascata, o cliente só vê o software no final (tudo ou nada). No Incremental, você entrega o 'Login' em janeiro, o 'Cadastro' em fevereiro e assim por diante. O cliente já começa a usar o sistema enquanto o resto é feito.",
      "puloDoGato": "Incremental = Entrega de pedaços funcionais (Incrementos) ao longo do tempo.",
      "cascasDeBanana": {
        "A": "Todos os modelos precisam entender o que o cliente quer."
      },
      "dicaDeOuro": "O modelo incremental reduz o risco de o cliente descobrir que o sistema não serve pra ele só no final do projeto."
    }
  },
  {
    "id": "q_final_6008",
    "discipline": "Processos de Software",
    "topic": "Refatoração (Refactoring)",
    "statement": "O que define a atividade de 'Refatoração' em um processo de desenvolvimento de software?",
    "options": {
      "A": "Melhorar a estrutura interna do código (limpeza, organização, performance) sem alterar o seu comportamento externo (funcionalidade).",
      "B": "Documentar o sistema em arquivos PDF.",
      "C": "Adicionar novas funcionalidades pedidas pelo cliente.",
      "D": "Apagar os testes unitários para o build ficar mais rápido.",
      "E": "Reescrever o sistema inteiro em uma nova linguagem."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar é 'arrumar a casa'. O software continua fazendo a mesma coisa, mas o código fica mais limpo, fácil de ler e de manter. É pagar a dívida técnica antes que ela vire uma bola de neve.",
      "puloDoGato": "Refatoração = Melhorar o design interno SEM mudar o comportamento externo.",
      "cascasDeBanana": {
        "C": "Isso é evolução/manutenção perfectiva.",
        "E": "Isso é migração."
      },
      "dicaDeOuro": "A regra de ouro da refatoração é: tenha testes automatizados antes de começar, para garantir que você não quebrou nada enquanto limpava."
    }
  },
  {
    "id": "q_final_6012",
    "discipline": "SOA",
    "topic": "Acoplamento em SOA",
    "statement": "Um dos princípios fundamentais de SOA é o 'Loose Coupling' (Baixo Acoplamento). Por que isso é importante?",
    "options": {
      "A": "Para eliminar a necessidade de segurança.",
      "B": "Para permitir que os serviços evoluam, sejam alterados ou substituídos de forma independente, sem quebrar os outros serviços que os utilizam.",
      "C": "Para reduzir a velocidade da rede.",
      "D": "Para obrigar o uso de apenas uma marca de hardware.",
      "E": "Para garantir que os serviços dependam fortemente uns dos outros."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Baixo acoplamento é o 'segredo da agilidade'. Se o serviço de 'Frete' mudar a lógica interna, o serviço de 'Vendas' nem precisa saber, contanto que o 'contrato' (API) continue o mesmo. Isso evita que uma mudança pequena derrube o sistema todo.",
      "puloDoGato": "Loose Coupling = Independência entre serviços + Contratos estáveis.",
      "cascasDeBanana": {
        "A": "Isso é o pesadelo do 'espaguete' de integrações.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O uso de middlewares e barramentos (ESB) ajuda a atingir esse baixo acoplamento."
    }
  },
  {
    "id": "q_supp_7009",
    "discipline": "SOA",
    "topic": "ESB (Enterprise Service Bus)",
    "statement": "Qual o papel do ESB (Barramento de Serviços Corporativos) em uma arquitetura SOA?",
    "options": {
      "A": "Atuar como uma camada de infraestrutura que facilita a integração, roteamento, transformação de mensagens e mediação entre serviços heterogêneos.",
      "B": "Armazenar todos os backups da empresa.",
      "C": "Criptografar os e-mails dos funcionários.",
      "D": "Substituir o uso de microserviços.",
      "E": "Servir como um roteador físico de cabos de rede."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ESB é o 'tradutor universal' e 'guarda de trânsito'. Se o serviço A fala XML e o B fala JSON, o ESB traduz no meio do caminho. Ele ajuda a desacoplar os sistemas, para que um não precise conhecer os detalhes técnicos do outro.",
      "puloDoGato": "ESB = Integração + Transformação + Roteamento de Mensagens.",
      "cascasDeBanana": {
        "E": "Barramento lógico/software, não físico/hardware."
      },
      "dicaDeOuro": "Cuidado: o excesso de lógica dentro do ESB pode torná-lo um gargalo e um ponto único de falha (Antipattern: 'Smart Pipes')."
    }
  },
  {
    "id": "q_supp_7010",
    "discipline": "SOA",
    "topic": "WSDL e SOAP",
    "statement": "Em Web Services baseados em SOAP, qual a função do arquivo WSDL?",
    "options": {
      "A": "É o código fonte em Java do serviço.",
      "B": "É um documento XML que descreve a interface do serviço (quais métodos ele oferece, parâmetros e onde ele está localizado), servindo como um contrato entre provedor e consumidor.",
      "C": "É um arquivo de imagem com o logotipo da empresa.",
      "D": "É o banco de dados do serviço.",
      "E": "É uma lista de senhas dos usuários."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "WSDL é o 'manual de instruções' do Web Service. Se você quer usar o meu serviço, eu te dou o WSDL. Seu computador lê esse arquivo e já sabe exatamente como 'conversar' com o meu sistema sem você precisar programar nada na mão.",
      "puloDoGato": "WSDL = Contrato / Descrição do Web Service (SOAP).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "O WSDL descreve o serviço, não contém a lógica interna.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "WSDL significa Web Services Description Language."
    }
  },
  {
    "id": "q_supp_7011",
    "discipline": "CMMI v2.0",
    "topic": "Área de Prática - Monitoramento",
    "statement": "Qual o objetivo da Área de Prática 'Monitoramento e Controle do Trabalho' (MC) no CMMI v2.0?",
    "options": {
      "A": "Medir a velocidade da internet durante o build.",
      "B": "Instalar câmeras no escritório para vigiar os funcionários.",
      "C": "Comparar o progresso real do projeto com o que foi planejado e tomar ações corretivas caso haja desvios significativos.",
      "D": "Avaliar o desempenho individual de cada programador para dar bônus.",
      "E": "Garantir que o cliente pague as faturas em dia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MC é o 'piloto automático'. Você planejou que em 10 dias estaria com 50% pronto. Se no 10º dia só tem 20%, o MC te avisa: 'Ei, estamos atrasados! Vamos fazer hora extra ou cortar escopo?'. É o controle de rumo.",
      "puloDoGato": "MC = Real vs Planejado + Ações Corretivas.",
      "cascasDeBanana": {
        "B": "Controle gerencial de projeto, não vigilância física."
      },
      "dicaDeOuro": "Sem monitoramento, você só descobre que o projeto falhou no dia da entrega."
    }
  },
  {
    "id": "q_supp_7012",
    "discipline": "Qualidade de Software",
    "topic": "ISO/IEC 25010 - Manutenibilidade",
    "statement": "De acordo com a norma ISO/IEC 25010, o que caracteriza a sub-característica 'Analisabilidade' dentro da Manutenibilidade?",
    "options": {
      "A": "A quantidade de usuários que podem usar o sistema ao mesmo tempo.",
      "B": "A beleza das cores da interface.",
      "C": "A facilidade de instalar o software em um novo PC.",
      "D": "A rapidez com que o banco de dados processa consultas.",
      "E": "A facilidade com que se pode diagnosticar deficiências ou causas de falhas no software, ou identificar partes a serem modificadas."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Analisabilidade é o 'Quão fácil é achar o erro?'. Se o seu código tem bons logs e é bem estruturado, você acha o bug em 5 minutos. Se é uma 'maçaroca', você leva 3 dias. Isso é qualidade interna.",
      "puloDoGato": "Analisabilidade = Facilidade de diagnóstico.",
      "cascasDeBanana": {
        "C": "Isso é Instabilidade (Portabilidade).",
        "A": "Escalabilidade/Eficiência."
      },
      "dicaDeOuro": "Um código com alta analisabilidade reduz drasticamente o custo de manutenção corretiva."
    }
  },
  {
    "id": "q_auto_7013",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função primária de um repositório na gestão de configuração?",
    "options": {
      "A": "Deletar código antigo",
      "B": "Gerar relatórios de RH",
      "C": "Compilar o código",
      "D": "Guardar o histórico completo de versões dos Itens de Configuração",
      "E": "Armazenar apenas a versão final"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O repositório é o 'banco de dados' da gestão de configuração, mantendo toda a história do projeto.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7014",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Commit' no Git?",
    "options": {
      "A": "O registro de uma alteração no repositório local",
      "B": "Uma revisão de código",
      "C": "Um erro no código",
      "D": "A deleção de uma branch",
      "E": "O envio para o servidor remoto"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Commit salva o estado atual no seu repositório local.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7015",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual comando Git é usado para mesclar branches?",
    "options": {
      "A": "git merge",
      "B": "git clone",
      "C": "git commit",
      "D": "git push",
      "E": "git status"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O git merge junta as histórias de duas branches.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7016",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é a 'Auditoria de Configuração Funcional'?",
    "options": {
      "A": "Verifica se o software atende aos requisitos especificados",
      "B": "Verifica a presença física dos arquivos",
      "C": "Avalia o desempenho da equipe",
      "D": "Checa o layout do site",
      "E": "Conta as linhas de código"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Garante que o IC faz o que deveria fazer.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7017",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Fork' no ecossistema Git (ex: GitHub)?",
    "options": {
      "A": "Um tipo de merge",
      "B": "Um erro fatal",
      "C": "Uma cópia pessoal do repositório de outra pessoa",
      "D": "Uma exclusão",
      "E": "Um commit vazio"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Permite contribuir em projetos de terceiros.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7018",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual a função primária de um repositório na gestão de configuração? (Variante 5)",
    "options": {
      "A": "Guardar o histórico completo de versões dos Itens de Configuração",
      "B": "Armazenar apenas a versão final",
      "C": "Deletar código antigo",
      "D": "Gerar relatórios de RH",
      "E": "Compilar o código"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O repositório é o 'banco de dados' da gestão de configuração, mantendo toda a história do projeto.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7019",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é um 'Commit' no Git? (Variante 6)",
    "options": {
      "A": "O envio para o servidor remoto",
      "B": "O registro de uma alteração no repositório local",
      "C": "A deleção de uma branch",
      "D": "Um erro no código",
      "E": "Uma revisão de código"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Commit salva o estado atual no seu repositório local.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7020",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual comando Git é usado para mesclar branches? (Variante 7)",
    "options": {
      "A": "git merge",
      "B": "git commit",
      "C": "git status",
      "D": "git clone",
      "E": "git push"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O git merge junta as histórias de duas branches.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7021",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é a 'Auditoria de Configuração Funcional'? (Variante 8)",
    "options": {
      "A": "Verifica se o software atende aos requisitos especificados",
      "B": "Verifica a presença física dos arquivos",
      "C": "Conta as linhas de código",
      "D": "Avalia o desempenho da equipe",
      "E": "Checa o layout do site"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Garante que o IC faz o que deveria fazer.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7022",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é um 'Fork' no ecossistema Git (ex: GitHub)? (Variante 9)",
    "options": {
      "A": "Um erro fatal",
      "B": "Uma exclusão",
      "C": "Um tipo de merge",
      "D": "Uma cópia pessoal do repositório de outra pessoa",
      "E": "Um commit vazio"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Permite contribuir em projetos de terceiros.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7023",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V3",
    "statement": "Qual a função primária de um repositório na gestão de configuração? (Variante 10)",
    "options": {
      "A": "Armazenar apenas a versão final",
      "B": "Guardar o histórico completo de versões dos Itens de Configuração",
      "C": "Gerar relatórios de RH",
      "D": "Deletar código antigo",
      "E": "Compilar o código"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O repositório é o 'banco de dados' da gestão de configuração, mantendo toda a história do projeto.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7024",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é um 'Commit' no Git? (Variante 11)",
    "options": {
      "A": "O registro de uma alteração no repositório local",
      "B": "Um erro no código",
      "C": "O envio para o servidor remoto",
      "D": "A deleção de uma branch",
      "E": "Uma revisão de código"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Commit salva o estado atual no seu repositório local.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7025",
    "discipline": "Gestão de Configuração",
    "topic": "Conceitos e Práticas V3",
    "statement": "Qual comando Git é usado para mesclar branches? (Variante 12)",
    "options": {
      "A": "git merge",
      "B": "git push",
      "C": "git status",
      "D": "git clone",
      "E": "git commit"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O git merge junta as histórias de duas branches.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7026",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V1",
    "statement": "O CMMI v2.0 possui foco em qual aspecto principal em relação às versões anteriores?",
    "options": {
      "A": "Agilidade e valor de negócio (Performance)",
      "B": "Apenas em documentação",
      "C": "Linguagem C++",
      "D": "Aumento de burocracia",
      "E": "Redução de salários"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O CMMI 2.0 simplificou as práticas e focou em melhorar o desempenho real do negócio.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7027",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V1",
    "statement": "No CMMI, a Área de Prática 'Desenvolvimento de Requisitos' (RD) serve para:",
    "options": {
      "A": "Ignorar o cliente",
      "B": "Fazer o deploy",
      "C": "Comprar hardware",
      "D": "Testar o software",
      "E": "Elicitar, analisar e estabelecer os requisitos do cliente e do produto"
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "RD garante que sabemos o que precisa ser construído.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7028",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que caracteriza o Nível de Maturidade 3 (Definido) no CMMI?",
    "options": {
      "A": "Nenhum processo",
      "B": "Processos imprevisíveis",
      "C": "Processos padronizados e compreendidos em toda a organização",
      "D": "Foco apenas em métricas estatísticas",
      "E": "Processos apenas para um projeto isolado"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No nível 3, a empresa tem um padrão institucionalizado.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7029",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V1",
    "statement": "A Área de Prática 'Gestão de Riscos' (RSK) exige que os riscos sejam:",
    "options": {
      "A": "Repassados ao cliente",
      "B": "Identificados, analisados e mitigados proativamente",
      "C": "Ignorados até acontecerem",
      "D": "Apenas listados em um documento morto",
      "E": "Escondidos da diretoria"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Gestão de risco é antecipar problemas.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7030",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V1",
    "statement": "A Avaliação CMMI (Appraisal) é utilizada para:",
    "options": {
      "A": "Aumentar os impostos",
      "B": "Treinar iniciantes",
      "C": "Demitir funcionários",
      "D": "Identificar pontos fortes e fracos em relação ao modelo e atribuir um nível",
      "E": "Testar o código"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "As avaliações determinam a capacidade ou maturidade da empresa.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7031",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V2",
    "statement": "O CMMI v2.0 possui foco em qual aspecto principal em relação às versões anteriores? (Variante 5)",
    "options": {
      "A": "Aumento de burocracia",
      "B": "Apenas em documentação",
      "C": "Agilidade e valor de negócio (Performance)",
      "D": "Redução de salários",
      "E": "Linguagem C++"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O CMMI 2.0 simplificou as práticas e focou em melhorar o desempenho real do negócio.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7032",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V2",
    "statement": "No CMMI, a Área de Prática 'Desenvolvimento de Requisitos' (RD) serve para: (Variante 6)",
    "options": {
      "A": "Fazer o deploy",
      "B": "Testar o software",
      "C": "Comprar hardware",
      "D": "Elicitar, analisar e estabelecer os requisitos do cliente e do produto",
      "E": "Ignorar o cliente"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "RD garante que sabemos o que precisa ser construído.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7033",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que caracteriza o Nível de Maturidade 3 (Definido) no CMMI? (Variante 7)",
    "options": {
      "A": "Nenhum processo",
      "B": "Processos apenas para um projeto isolado",
      "C": "Foco apenas em métricas estatísticas",
      "D": "Processos imprevisíveis",
      "E": "Processos padronizados e compreendidos em toda a organização"
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No nível 3, a empresa tem um padrão institucionalizado.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7034",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V2",
    "statement": "A Área de Prática 'Gestão de Riscos' (RSK) exige que os riscos sejam: (Variante 8)",
    "options": {
      "A": "Escondidos da diretoria",
      "B": "Identificados, analisados e mitigados proativamente",
      "C": "Ignorados até acontecerem",
      "D": "Repassados ao cliente",
      "E": "Apenas listados em um documento morto"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Gestão de risco é antecipar problemas.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7035",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V2",
    "statement": "A Avaliação CMMI (Appraisal) é utilizada para: (Variante 9)",
    "options": {
      "A": "Demitir funcionários",
      "B": "Identificar pontos fortes e fracos em relação ao modelo e atribuir um nível",
      "C": "Testar o código",
      "D": "Treinar iniciantes",
      "E": "Aumentar os impostos"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "As avaliações determinam a capacidade ou maturidade da empresa.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7036",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V3",
    "statement": "O CMMI v2.0 possui foco em qual aspecto principal em relação às versões anteriores? (Variante 10)",
    "options": {
      "A": "Aumento de burocracia",
      "B": "Redução de salários",
      "C": "Agilidade e valor de negócio (Performance)",
      "D": "Apenas em documentação",
      "E": "Linguagem C++"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O CMMI 2.0 simplificou as práticas e focou em melhorar o desempenho real do negócio.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7037",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V3",
    "statement": "No CMMI, a Área de Prática 'Desenvolvimento de Requisitos' (RD) serve para: (Variante 11)",
    "options": {
      "A": "Elicitar, analisar e estabelecer os requisitos do cliente e do produto",
      "B": "Fazer o deploy",
      "C": "Testar o software",
      "D": "Comprar hardware",
      "E": "Ignorar o cliente"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "RD garante que sabemos o que precisa ser construído.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7038",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que caracteriza o Nível de Maturidade 3 (Definido) no CMMI? (Variante 12)",
    "options": {
      "A": "Foco apenas em métricas estatísticas",
      "B": "Processos apenas para um projeto isolado",
      "C": "Nenhum processo",
      "D": "Processos padronizados e compreendidos em toda a organização",
      "E": "Processos imprevisíveis"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No nível 3, a empresa tem um padrão institucionalizado.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7039",
    "discipline": "CMMI v2.0",
    "topic": "Conceitos e Práticas V3",
    "statement": "A Área de Prática 'Gestão de Riscos' (RSK) exige que os riscos sejam: (Variante 13)",
    "options": {
      "A": "Identificados, analisados e mitigados proativamente",
      "B": "Repassados ao cliente",
      "C": "Escondidos da diretoria",
      "D": "Apenas listados em um documento morto",
      "E": "Ignorados até acontecerem"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Gestão de risco é antecipar problemas.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7040",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "No Scrum, qual é o papel responsável por maximizar o valor do produto e gerenciar o Product Backlog?",
    "options": {
      "A": "Developers",
      "B": "Scrum Master",
      "C": "Project Manager",
      "D": "CEO",
      "E": "Product Owner"
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O PO é a voz do cliente e dono do Backlog.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7041",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a duração típica de uma Sprint no Scrum?",
    "options": {
      "A": "6 meses",
      "B": "1 dia",
      "C": "1 a 4 semanas",
      "D": "Tempo indeterminado",
      "E": "1 ano"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sprints são timeboxes curtos para manter a agilidade.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7042",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "No Kanban, o que significa a sigla WIP?",
    "options": {
      "A": "Working In Production",
      "B": "Wait In Planning",
      "C": "Without Important Process",
      "D": "Work In Progress (Trabalho em Andamento)",
      "E": "Web Interface Protocol"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Limitar o WIP é a regra de ouro do Kanban.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7043",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "No modelo Espiral, a avaliação de riscos ocorre em qual momento?",
    "options": {
      "A": "Em cada iteração (loop) da espiral",
      "B": "Apenas no início",
      "C": "Nunca ocorre",
      "D": "Apenas se o cliente pedir",
      "E": "Apenas no fim"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O foco da espiral é a reavaliação contínua de riscos.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7044",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Dívida Técnica' (Technical Debt)?",
    "options": {
      "A": "O custo implícito de retrabalho futuro causado por escolher uma solução fácil/rápida agora em vez de uma melhor",
      "B": "Atraso no pagamento dos devs",
      "C": "Dinheiro que a empresa deve ao banco",
      "D": "Um bug crítico",
      "E": "Falta de documentação do usuário"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fazer rápido agora significa ter que refatorar depois.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7045",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V2",
    "statement": "No Scrum, qual é o papel responsável por maximizar o valor do produto e gerenciar o Product Backlog? (Variante 5)",
    "options": {
      "A": "Product Owner",
      "B": "Project Manager",
      "C": "Developers",
      "D": "Scrum Master",
      "E": "CEO"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O PO é a voz do cliente e dono do Backlog.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7046",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual a duração típica de uma Sprint no Scrum? (Variante 6)",
    "options": {
      "A": "Tempo indeterminado",
      "B": "6 meses",
      "C": "1 a 4 semanas",
      "D": "1 ano",
      "E": "1 dia"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sprints são timeboxes curtos para manter a agilidade.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7047",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V2",
    "statement": "No Kanban, o que significa a sigla WIP? (Variante 7)",
    "options": {
      "A": "Wait In Planning",
      "B": "Work In Progress (Trabalho em Andamento)",
      "C": "Without Important Process",
      "D": "Working In Production",
      "E": "Web Interface Protocol"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Limitar o WIP é a regra de ouro do Kanban.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7048",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V2",
    "statement": "No modelo Espiral, a avaliação de riscos ocorre em qual momento? (Variante 8)",
    "options": {
      "A": "Em cada iteração (loop) da espiral",
      "B": "Nunca ocorre",
      "C": "Apenas se o cliente pedir",
      "D": "Apenas no início",
      "E": "Apenas no fim"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O foco da espiral é a reavaliação contínua de riscos.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7049",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Dívida Técnica' (Technical Debt)? (Variante 9)",
    "options": {
      "A": "O custo implícito de retrabalho futuro causado por escolher uma solução fácil/rápida agora em vez de uma melhor",
      "B": "Um bug crítico",
      "C": "Dinheiro que a empresa deve ao banco",
      "D": "Falta de documentação do usuário",
      "E": "Atraso no pagamento dos devs"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fazer rápido agora significa ter que refatorar depois.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7050",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V3",
    "statement": "No Scrum, qual é o papel responsável por maximizar o valor do produto e gerenciar o Product Backlog? (Variante 10)",
    "options": {
      "A": "Scrum Master",
      "B": "CEO",
      "C": "Product Owner",
      "D": "Developers",
      "E": "Project Manager"
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O PO é a voz do cliente e dono do Backlog.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7051",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V3",
    "statement": "Qual a duração típica de uma Sprint no Scrum? (Variante 11)",
    "options": {
      "A": "1 dia",
      "B": "1 a 4 semanas",
      "C": "6 meses",
      "D": "1 ano",
      "E": "Tempo indeterminado"
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sprints são timeboxes curtos para manter a agilidade.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7052",
    "discipline": "Processos de Software",
    "topic": "Conceitos e Práticas V3",
    "statement": "No Kanban, o que significa a sigla WIP? (Variante 12)",
    "options": {
      "A": "Work In Progress (Trabalho em Andamento)",
      "B": "Working In Production",
      "C": "Wait In Planning",
      "D": "Without Important Process",
      "E": "Web Interface Protocol"
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Limitar o WIP é a regra de ouro do Kanban.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7064",
    "discipline": "Qualidade de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a diferença entre Validação e Verificação?",
    "options": {
      "A": "São a mesma coisa.",
      "B": "Verificação: 'Estamos construindo certo o produto?'. Validação: 'Estamos construindo o produto certo?'.",
      "C": "Verificação: 'Estamos construindo o produto certo?' (atende ao cliente). Validação: 'Estamos construindo certo o produto?' (atende aos requisitos).",
      "D": "Validação é sobre performance.",
      "E": "Verificação é feita pelo cliente."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Verificação avalia os artefatos contra as especificações (fazer certo). Validação avalia o software final contra as necessidades do usuário (fazer o certo).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7065",
    "discipline": "Qualidade de Software",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Teste de Regressão'?",
    "options": {
      "A": "Um teste de usabilidade.",
      "B": "Teste de segurança.",
      "C": "Um teste feito para piorar o software.",
      "D": "Um teste realizado para garantir que mudanças recentes (como novas features ou correções) não quebraram funcionalidades que já funcionavam antes.",
      "E": "Um teste de carga máxima."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Regredir é 'voltar a ter problema'. O teste garante que o que tava bom continua bom.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7092",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA?",
    "options": {
      "A": "Desligar os servidores.",
      "B": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "C": "Deixar que os serviços conversem sem controle.",
      "D": "Escrever código em C.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7093",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Coreografia' em SOA?",
    "options": {
      "A": "Testes unitários.",
      "B": "Uso de SOAP obrigatório.",
      "C": "Dança da equipe.",
      "D": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "E": "A mesma coisa que Orquestração."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7094",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA? (Variante 2)",
    "options": {
      "A": "Escrever código em C.",
      "B": "Desligar os servidores.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Tocar música no escritório.",
      "E": "Deixar que os serviços conversem sem controle."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7095",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Coreografia' em SOA? (Variante 3)",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "C": "Dança da equipe.",
      "D": "Testes unitários.",
      "E": "A mesma coisa que Orquestração."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7096",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA? (Variante 4)",
    "options": {
      "A": "Desligar os servidores.",
      "B": "Deixar que os serviços conversem sem controle.",
      "C": "Escrever código em C.",
      "D": "Tocar música no escritório.",
      "E": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7097",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 5)",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "A mesma coisa que Orquestração.",
      "C": "Dança da equipe.",
      "D": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "E": "Testes unitários."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7098",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Orquestração' em SOA? (Variante 6)",
    "options": {
      "A": "Tocar música no escritório.",
      "B": "Desligar os servidores.",
      "C": "Deixar que os serviços conversem sem controle.",
      "D": "Escrever código em C.",
      "E": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7099",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 7)",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "Testes unitários.",
      "C": "A mesma coisa que Orquestração.",
      "D": "Dança da equipe.",
      "E": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7100",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Orquestração' em SOA? (Variante 8)",
    "options": {
      "A": "Deixar que os serviços conversem sem controle.",
      "B": "Desligar os servidores.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Escrever código em C.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7101",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 9)",
    "options": {
      "A": "Testes unitários.",
      "B": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "C": "A mesma coisa que Orquestração.",
      "D": "Dança da equipe.",
      "E": "Uso de SOAP obrigatório."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7102",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA?",
    "options": {
      "A": "Deixar que os serviços conversem sem controle.",
      "B": "Desligar os servidores.",
      "C": "Tocar música no escritório.",
      "D": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "E": "Escrever código em C."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7103",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Coreografia' em SOA?",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "A mesma coisa que Orquestração.",
      "C": "Dança da equipe.",
      "D": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "E": "Testes unitários."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7104",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA? (Variante 2)",
    "options": {
      "A": "Desligar os servidores.",
      "B": "Deixar que os serviços conversem sem controle.",
      "C": "Tocar música no escritório.",
      "D": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "E": "Escrever código em C."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7105",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Coreografia' em SOA? (Variante 3)",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "A mesma coisa que Orquestração.",
      "C": "Testes unitários.",
      "D": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "E": "Dança da equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7106",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Orquestração' em SOA? (Variante 4)",
    "options": {
      "A": "Tocar música no escritório.",
      "B": "Escrever código em C.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Desligar os servidores.",
      "E": "Deixar que os serviços conversem sem controle."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7107",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 5)",
    "options": {
      "A": "Dança da equipe.",
      "B": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "C": "A mesma coisa que Orquestração.",
      "D": "Uso de SOAP obrigatório.",
      "E": "Testes unitários."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7108",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Orquestração' em SOA? (Variante 6)",
    "options": {
      "A": "Desligar os servidores.",
      "B": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "C": "Escrever código em C.",
      "D": "Tocar música no escritório.",
      "E": "Deixar que os serviços conversem sem controle."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7109",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 7)",
    "options": {
      "A": "Testes unitários.",
      "B": "A mesma coisa que Orquestração.",
      "C": "Uso de SOAP obrigatório.",
      "D": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "E": "Dança da equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7110",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Orquestração' em SOA? (Variante 8)",
    "options": {
      "A": "Deixar que os serviços conversem sem controle.",
      "B": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "C": "Tocar música no escritório.",
      "D": "Desligar os servidores.",
      "E": "Escrever código em C."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7111",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é 'Coreografia' em SOA? (Variante 9)",
    "options": {
      "A": "A mesma coisa que Orquestração.",
      "B": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "C": "Testes unitários.",
      "D": "Dança da equipe.",
      "E": "Uso de SOAP obrigatório."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7112",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é 'Orquestração' em SOA? (Variante 10)",
    "options": {
      "A": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "B": "Escrever código em C.",
      "C": "Deixar que os serviços conversem sem controle.",
      "D": "Desligar os servidores.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7113",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é 'Coreografia' em SOA? (Variante 11)",
    "options": {
      "A": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "B": "Dança da equipe.",
      "C": "A mesma coisa que Orquestração.",
      "D": "Testes unitários.",
      "E": "Uso de SOAP obrigatório."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7114",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é 'Orquestração' em SOA? (Variante 12)",
    "options": {
      "A": "Escrever código em C.",
      "B": "Deixar que os serviços conversem sem controle.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Desligar os servidores.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7115",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é 'Coreografia' em SOA? (Variante 13)",
    "options": {
      "A": "Uso de SOAP obrigatório.",
      "B": "Testes unitários.",
      "C": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "D": "Dança da equipe.",
      "E": "A mesma coisa que Orquestração."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7116",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é 'Orquestração' em SOA? (Variante 14)",
    "options": {
      "A": "Escrever código em C.",
      "B": "Desligar os servidores.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Deixar que os serviços conversem sem controle.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7117",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V4",
    "statement": "O que é 'Coreografia' em SOA? (Variante 15)",
    "options": {
      "A": "Testes unitários.",
      "B": "Uma abordagem descentralizada onde cada serviço sabe quando deve agir com base em eventos, sem um controlador central.",
      "C": "A mesma coisa que Orquestração.",
      "D": "Uso de SOAP obrigatório.",
      "E": "Dança da equipe."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na coreografia, os serviços reagem a eventos (como dançarinos que sabem a música), sem um maestro.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7118",
    "discipline": "SOA",
    "topic": "Conceitos e Práticas V4",
    "statement": "O que é 'Orquestração' em SOA? (Variante 16)",
    "options": {
      "A": "Deixar que os serviços conversem sem controle.",
      "B": "Escrever código em C.",
      "C": "Um processo centralizado que coordena a execução de vários serviços para atingir um objetivo de negócio.",
      "D": "Desligar os servidores.",
      "E": "Tocar música no escritório."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na orquestração, há um 'maestro' (geralmente um motor BPEL) dizendo quem faz o que e quando.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_final_fix_7612",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'?",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7613",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 1)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Controlar a temperatura do data center.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7614",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 2)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7615",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 3)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Apagar logs antigos.",
      "D": "Controlar a temperatura do data center.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7616",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 4)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Apagar logs antigos.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7617",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 5)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Armazenar senhas de usuários.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7618",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 6)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Apagar logs antigos.",
      "D": "Controlar a temperatura do data center.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7619",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 7)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7620",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 8)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7621",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 9)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Apagar logs antigos.",
      "C": "Armazenar senhas de usuários.",
      "D": "Controlar a temperatura do data center.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7622",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 10)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7623",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 11)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Armazenar senhas de usuários.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7624",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 12)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Controlar a temperatura do data center.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Apagar logs antigos.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7625",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 13)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Controlar a temperatura do data center.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Armazenar senhas de usuários.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7626",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 14)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Apagar logs antigos.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7627",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 15)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Armazenar senhas de usuários.",
      "C": "Gerar boletos de pagamento.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7628",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 16)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Apagar logs antigos.",
      "C": "Armazenar senhas de usuários.",
      "D": "Controlar a temperatura do data center.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7629",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 17)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Apagar logs antigos.",
      "D": "Controlar a temperatura do data center.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7630",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 18)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Apagar logs antigos.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Controlar a temperatura do data center.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7631",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 19)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Gerar boletos de pagamento.",
      "C": "Armazenar senhas de usuários.",
      "D": "Controlar a temperatura do data center.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7632",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'?",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Armazenar senhas de usuários.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Gerar boletos de pagamento.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7633",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 1)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Apagar logs antigos.",
      "C": "Armazenar senhas de usuários.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7634",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 2)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7635",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 3)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Controlar a temperatura do data center.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Armazenar senhas de usuários.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7636",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 4)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Controlar a temperatura do data center.",
      "C": "Apagar logs antigos.",
      "D": "Armazenar senhas de usuários.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7637",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 5)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Apagar logs antigos.",
      "D": "Controlar a temperatura do data center.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7638",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 6)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Controlar a temperatura do data center.",
      "D": "Apagar logs antigos.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7639",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 7)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Apagar logs antigos.",
      "C": "Gerar boletos de pagamento.",
      "D": "Controlar a temperatura do data center.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7640",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 8)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7641",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 9)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Gerar boletos de pagamento.",
      "D": "Controlar a temperatura do data center.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7642",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 10)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Controlar a temperatura do data center.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Apagar logs antigos.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7643",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 11)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Apagar logs antigos.",
      "C": "Controlar a temperatura do data center.",
      "D": "Armazenar senhas de usuários.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7644",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 12)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7645",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 13)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Armazenar senhas de usuários.",
      "C": "Gerar boletos de pagamento.",
      "D": "Controlar a temperatura do data center.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7646",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 14)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Apagar logs antigos.",
      "C": "Gerar boletos de pagamento.",
      "D": "Armazenar senhas de usuários.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7647",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 15)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Armazenar senhas de usuários.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Apagar logs antigos.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7648",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 16)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Apagar logs antigos.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7649",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 17)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Gerar boletos de pagamento.",
      "C": "Armazenar senhas de usuários.",
      "D": "Controlar a temperatura do data center.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7650",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 18)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Apagar logs antigos.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Controlar a temperatura do data center.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7651",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 19)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Apagar logs antigos.",
      "C": "Armazenar senhas de usuários.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7652",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'?",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Armazenar senhas de usuários.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Apagar logs antigos.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7653",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 1)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Apagar logs antigos.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7654",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V1",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 2)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Armazenar senhas de usuários.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Gerar boletos de pagamento.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7655",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 3)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Armazenar senhas de usuários.",
      "C": "Controlar a temperatura do data center.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7656",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 4)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7657",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V2",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 5)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Gerar boletos de pagamento.",
      "D": "Apagar logs antigos.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7658",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 6)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Apagar logs antigos.",
      "C": "Gerar boletos de pagamento.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7659",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 7)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Armazenar senhas de usuários.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7660",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V3",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 8)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Gerar boletos de pagamento.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Controlar a temperatura do data center.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7661",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 9)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Apagar logs antigos.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7662",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 10)",
    "options": {
      "A": "Controlar a temperatura do data center.",
      "B": "Gerar boletos de pagamento.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Apagar logs antigos.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7663",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V4",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 11)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Gerar boletos de pagamento.",
      "C": "Controlar a temperatura do data center.",
      "D": "Apagar logs antigos.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7664",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 12)",
    "options": {
      "A": "Gerar boletos de pagamento.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Controlar a temperatura do data center.",
      "D": "Armazenar senhas de usuários.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7665",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 13)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "C": "Controlar a temperatura do data center.",
      "D": "Armazenar senhas de usuários.",
      "E": "Gerar boletos de pagamento."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7666",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V5",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 14)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Gerar boletos de pagamento.",
      "C": "Controlar a temperatura do data center.",
      "D": "Apagar logs antigos.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7667",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 15)",
    "options": {
      "A": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "B": "Armazenar senhas de usuários.",
      "C": "Apagar logs antigos.",
      "D": "Gerar boletos de pagamento.",
      "E": "Controlar a temperatura do data center."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7668",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 16)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Gerar boletos de pagamento.",
      "C": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "D": "Controlar a temperatura do data center.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7669",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V6",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 17)",
    "options": {
      "A": "Armazenar senhas de usuários.",
      "B": "Controlar a temperatura do data center.",
      "C": "Gerar boletos de pagamento.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Apagar logs antigos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7670",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 18)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Gerar boletos de pagamento.",
      "C": "Controlar a temperatura do data center.",
      "D": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura.",
      "E": "Armazenar senhas de usuários."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7671",
    "discipline": "Arquitetura Orientada a Serviços",
    "topic": "Revisão e Práticas V7",
    "statement": "No contexto de SOA, qual o papel de um 'Registry/Repository'? (Caso prático 19)",
    "options": {
      "A": "Apagar logs antigos.",
      "B": "Controlar a temperatura do data center.",
      "C": "Armazenar senhas de usuários.",
      "D": "Gerar boletos de pagamento.",
      "E": "Agir como um catálogo central onde os serviços são publicados e podem ser descobertos por outros componentes da arquitetura."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o Serviço A precisa falar com o Serviço B, ele pergunta ao Registry onde o Serviço B mora e qual a interface dele.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  }
];
