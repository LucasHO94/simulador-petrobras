// Banco de questões: eng-civil (195 questões)
export const questions_eng_civil = [
  {
    "id": "q_f4_021",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Materiais - Concreto (Slump Test)",
    "difficulty": "Fácil",
    "statement": "Qual o objetivo do ensaio de abatimento do tronco de cone (Slump Test) realizado no concreto fresco?",
    "options": {
      "A": "Verificar a trabalhabilidade e a consistência do concreto.",
      "B": "Medir a temperatura interna do caminhão betoneira.",
      "C": "Medir a resistência à compressão após 28 dias.",
      "D": "Identificar a marca do cimento utilizado.",
      "E": "Determinar o teor de ar incorporado."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Slump Test é o teste do 'balde virado'. Se o concreto desce muito, ele está muito fluido (muita água). Se desce pouco, está muito seco. É essencial para garantir que o concreto vai preencher as formas e as ferragens corretamente na hora da concretagem.",
      "puloDoGato": "Slump alto = Concreto Fluido. Slump baixo = Concreto Seco.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é o ensaio de ruptura de corpos de prova (cilindros).",
        "A": "Correta. Teste de campo rápido e obrigatório pela NBR 67.",
        "E": "Incorreta. Isso exige o uso de um aerômetro.",
        "D": "Incorreta. Absurdo.",
        "B": "Incorreta. Isso é feito com termômetro de haste."
      },
      "dicaDeOuro": "Slump Test: A primeira conferência do concreto na obra."
    }
  },
  {
    "id": "q_f4_022",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Geotecnia e Fundações",
    "topic": "Geotecnia - Sondagem SPT",
    "difficulty": "Médio",
    "statement": "No ensaio de sondagem SPT (Standard Penetration Test), o que representa o índice N_SPT?",
    "options": {
      "A": "A porcentagem de ouro encontrada na amostra.",
      "B": "O número de golpes necessários para fazer o amostrador penetrar os últimos 30 cm (de um total de 45 cm) no solo.",
      "C": "A profundidade total do lençol freático.",
      "D": "O tempo que o ajudante levou para bater o martelo.",
      "E": "A cor do solo em escala RGB."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O SPT é o 'RG' do terreno. Você solta um peso de 65 kg de uma altura de 75 cm. Quanto mais golpes (N) forem precisos para o ferro entrar no chão, mais duro e resistente é o solo. Se o N é 2, o solo é fofo; se é 30, o solo é muito compacto.",
      "puloDoGato": "N_SPT = Resistência dinâmica do solo.",
      "cascasDeBanana": {
        "A": "Incorreta. O nível d'água é anotado separadamente no relatório.",
        "B": "Correta. Soma dos golpes dos últimos dois trechos de 15 cm.",
        "C": "Incorreta. Descrição visual e tátil.",
        "D": "Incorreta. Piada.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "N_SPT alto: sapata pequena. N_SPT baixo: estaca profunda."
    }
  },
  {
    "id": "q_f4_023",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Concreto Armado (Cura)",
    "difficulty": "Fácil",
    "statement": "Por que é fundamental realizar a 'cura' do concreto (molhar a peça) nos primeiros dias após a concretagem?",
    "options": {
      "A": "Para evitar a evaporação precoce da água, garantindo a hidratação completa do cimento e evitando fissuras por retração.",
      "B": "Para lavar o excesso de poeira da obra.",
      "C": "Para acelerar o endurecimento e poder desformar em 2 horas.",
      "D": "O concreto não precisa de água depois de misturado.",
      "E": "Para o concreto ficar com uma cor azulada."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O cimento não 'seca', ele 'reage' com a água (hidratação). Se o sol ou o vento roubarem a água do concreto antes da hora, ele fica fraco e cheio de rachaduras. Molhar o concreto é dar o 'suplemento' que ele precisa para atingir a resistência máxima.",
      "puloDoGato": "Cura = Manter a água da reação química.",
      "cascasDeBanana": {
        "B": "Incorreta. Limpeza é secundária.",
        "A": "Correta. Vital para evitar patologias e garantir o fck planejado.",
        "C": "Incorreta. A cura não acelera, ela garante a qualidade.",
        "E": "Incorreta. Absurdo.",
        "D": "Incorreta. Sem água, a reação para."
      },
      "dicaDeOuro": "Concreto bem curado é concreto feliz e forte."
    }
  },
  {
    "id": "q_f4_024",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Hidráulica - Perda de Carga",
    "difficulty": "Médio",
    "statement": "O que causa a 'Perda de Carga' em uma tubulação de água?",
    "options": {
      "A": "O peso do ar dentro da tubulação.",
      "B": "O uso de água gelada.",
      "C": "O atrito da água com as paredes do tubo e as turbulências causadas por conexões (curvas, registros).",
      "D": "O aumento da quantidade de água no reservatório.",
      "E": "A cor do cano (canos azuis perdem menos carga que os marrons)."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Perda de carga é a 'energia' que a água perde no caminho. É como correr em um corredor apertado e cheio de curvas: você gasta energia esbarrando nas paredes. Quanto mais rugoso o tubo ou mais curvas ele tiver, menos pressão a água terá na ponta final.",
      "puloDoGato": "Atrito + Conexões = Queda de Pressão.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso aumentaria a carga disponível.",
        "C": "Correta. Calculada por fórmulas como Darcy-Weisbach ou Hazen-Williams.",
        "E": "Incorreta. Absurdo estético.",
        "A": "Incorreta. Ar deve ser expurgado, mas não define a perda de carga líquida.",
        "B": "Incorreta. Viscosidade muda com a temperatura, mas não é a causa principal citada."
      },
      "dicaDeOuro": "Curva de 90°: o maior inimigo da pressão da sua ducha."
    }
  },
  {
    "id": "q_f4_025",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Geotecnia e Fundações",
    "topic": "Fundações - Sapatas",
    "difficulty": "Fácil",
    "statement": "As 'Sapatas' são classificadas como que tipo de fundação?",
    "options": {
      "A": "Fundações Superficiais (ou Rasas).",
      "B": "Fundações Indiretas.",
      "C": "Fundações por Gravidade Orbital.",
      "D": "Fundações Pneumáticas.",
      "E": "Fundações Profundas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Sapata é aquela 'base larga' que a gente faz no pé da coluna. Ela transmite a carga para o solo pela base. Como elas ficam perto da superfície (geralmente menos de 3 metros), são chamadas de rasas ou superficiais.",
      "puloDoGato": "Sapata/Bloco = Rasa. Estaca/Tubulão = Profunda.",
      "cascasDeBanana": {
        "E": "Incorreta. Exigem escavação profunda e transmissão lateral.",
        "A": "Correta. Mais baratas e comuns em solos bons.",
        "B": "Incorreta. Sinônimo comum para profundas em alguns contextos.",
        "D": "Incorreta. Usadas em pontes/rios.",
        "C": "Incorreta. Absurdo sci-fi."
      },
      "dicaDeOuro": "Solo bom? Sapata resolve."
    }
  },
  {
    "id": "q_f4_026",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Saneamento - DBO (Demanda Bioquímica de Oxigênio)",
    "difficulty": "Difícil",
    "statement": "O que indica um alto valor de DBO (Demanda Bioquímica de Oxigênio) em um corpo d'água?",
    "options": {
      "A": "Que a pressão da água está alta demais para o encanamento.",
      "B": "Que o nível de sal da água está diminuindo.",
      "C": "Que a água é potável e pode ser bebida sem tratamento.",
      "D": "Que há muita matéria orgânica sendo decomposta por microorganismos, o que consome o oxigênio da água e pode matar os peixes.",
      "E": "Que a água está muito oxigenada e limpa."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "DBO é o 'apetite' das bactérias. Se você joga esgoto no rio, as bactérias começam a comer aquela sujeira e respirar muito oxigênio. Se o 'apetite' (DBO) for maior do que o oxigênio que entra no rio, a água fica morta. DBO alta = Água Suja.",
      "puloDoGato": "DBO alta = Carga Orgânica alta = Poluição.",
      "cascasDeBanana": {
        "E": "Incorreta. Pelo contrário, água limpa tem DBO baixa.",
        "D": "Correta. Parâmetro fundamental de engenharia ambiental.",
        "A": "Incorreta. Nada a ver com pressão hidráulica.",
        "B": "Incorreta. Salinidade é outro parâmetro.",
        "C": "Incorreta. Perigo à saúde."
      },
      "dicaDeOuro": "DBO: Quanto mais baixo o número, mais vivo é o rio."
    }
  },
  {
    "id": "q_f4_027",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Gestão de Obras - Curva S",
    "difficulty": "Médio",
    "statement": "Para que serve o gráfico conhecido como 'Curva S' no gerenciamento de projetos de engenharia?",
    "options": {
      "A": "Para desenhar o formato das estradas nas curvas.",
      "B": "Para listar os fornecedores de areia.",
      "C": "Para medir a velocidade do som no concreto.",
      "D": "Para acompanhar o progresso físico ou financeiro acumulado ao longo do tempo, comparando o planejado com o executado.",
      "E": "Para calcular a resistência do aço à torção."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O nome é 'Curva S' porque o ritmo de uma obra começa devagar (início), acelera no meio (produção total) e desacelera no final (acabamentos). Se a sua curva real estiver abaixo da planejada, sua obra está atrasada.",
      "puloDoGato": "Curva S = Acumulado no tempo. (Olhe o desvio entre as linhas).",
      "cascasDeBanana": {
        "A": "Incorreta. Piada literal.",
        "D": "Correta. Ferramenta visual clássica de controle de cronograma.",
        "E": "Incorreta. Isso é feito em laboratório de materiais.",
        "C": "Incorreta. Ultrassom.",
        "B": "Incorreta. Cadastro."
      },
      "dicaDeOuro": "Curva S: Se o planejado e o real não se cruzam, tem problema."
    }
  },
  {
    "id": "q_f4_028",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Aço (CA-50 vs CA-60)",
    "difficulty": "Médio",
    "statement": "Qual a principal diferença técnica entre o aço CA-50 e o aço CA-60?",
    "options": {
      "A": "O CA-50 é usado apenas em pontes e o CA-60 em casas.",
      "B": "Não há diferença, são o mesmo material com nomes diferentes.",
      "C": "O CA-50 é vendido em barras e o CA-60 apenas em pó.",
      "D": "O número indica a resistência característica ao escoamento (fyk) em kgf/mm² (ou 500 MPa e 600 MPa, respectivamente).",
      "E": "O CA-60 é inoxidável e o CA-50 enferruja."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "CA significa 'Concreto Armado'. O 50 significa que ele aguenta 50 kg de força por cada milímetro quadrado antes de começar a 'esticar' (escoar). O CA-60 é mais resistente, mas geralmente é vendido em bitolas mais finas (telas eletrossoldadas).",
      "puloDoGato": "Número = Resistência (MPa / 10).",
      "cascasDeBanana": {
        "A": "Incorreta. Uso depende do cálculo estrutural, não do tipo de obra.",
        "D": "Correta. Nomenclatura padrão da NBR 7480.",
        "E": "Incorreta. Ambos são aços carbono e oxidam.",
        "C": "Incorreta. Aço para concreto é sempre em barras ou fios.",
        "B": "Incorreta. As propriedades mecânicas são distintas."
      },
      "dicaDeOuro": "CA-50: O pilar da sua estrutura. CA-60: O reforço da sua laje."
    }
  },
  {
    "id": "q_f4_029",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Patologia das Construções - Carbonatação",
    "difficulty": "Difícil",
    "statement": "O que é o fenômeno da 'Carbonatação' no concreto armado?",
    "options": {
      "A": "É a infiltração de água da chuva pelo teto.",
      "B": "É uma reação química entre o CO2 da atmosfera e o hidróxido de cálcio do concreto, que reduz o pH e retira a proteção natural da armadura contra a corrosão.",
      "C": "É o processo de pintura do concreto com tinta spray.",
      "D": "É o aumento da resistência do concreto devido à poluição.",
      "E": "É quando o concreto se transforma em carvão mineral."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O concreto é muito básico (pH alto), e isso 'protege' o ferro lá dentro de enferrujar. O CO2 do ar entra nos poros do concreto e faz o pH cair. Quando o pH fica baixo, a 'capa protetora' do ferro some, e ele começa a expandir e estourar o concreto. Muito comum em cidades com muita poluição.",
      "puloDoGato": "Carbonatação = Queda de pH = Corrosão da armadura.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada com o nome.",
        "B": "Correta. Uma das principais causas de degradação em estruturas urbanas.",
        "C": "Incorreta. Na verdade, a carbonatação aumenta levemente a dureza superficial, mas destrói a vida útil da estrutura.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. Isso é goteira/percolação."
      },
      "dicaDeOuro": "Carbonatação: O inimigo invisível que mora no ar."
    }
  },
  {
    "id": "q_f4_030",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Construção Civil e Materiais",
    "topic": "Topografia - Curvas de Nível",
    "difficulty": "Fácil",
    "statement": "Em um mapa topográfico, o que indicam curvas de nível muito próximas umas das outras?",
    "options": {
      "A": "Um terreno plano e nivelado.",
      "B": "A presença de um rio subterrâneo.",
      "C": "Que o mapa foi desenhado com erro.",
      "D": "O limite de propriedade entre dois vizinhos.",
      "E": "Um terreno com forte inclinação (declive acentuado)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Cada linha representa uma altura (altitude). Se as linhas estão 'espremidas', significa que você sobe (ou desce) muitos metros em um espaço horizontal curto. Ou seja: é um morro ou um buraco bem íngreme.",
      "puloDoGato": "Linhas juntas = Ladeira. Linhas afastadas = Planície.",
      "cascasDeBanana": {
        "A": "Incorreta. Linhas afastadas indicam plano.",
        "E": "Correta. Conceito básico de interpretação de plantas.",
        "B": "Incorreta. Rios são representados por linhas azuis contínuas.",
        "C": "Incorreta. É a representação matemática correta.",
        "D": "Incorreta. Isso são divisas."
      },
      "dicaDeOuro": "Vai construir no morro? Prepare o muro de arrimo."
    }
  },
  {
    "id": "q_f4_031",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Instalações Hidráulicas - Golpe de Aríete",
    "difficulty": "Médio",
    "statement": "O que caracteriza o 'Golpe de Aríete' em sistemas hidráulicos?",
    "options": {
      "A": "Um pico de pressão causado pelo fechamento brusco de uma válvula ou torneira, que gera uma onda de choque na tubulação.",
      "B": "A entrada de areia nos canos.",
      "C": "O som que o ar faz quando a água acaba.",
      "D": "A batida do martelo na tubulação durante a instalação.",
      "E": "O uso de tubos de metal em vez de plástico."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Sabe aquele 'pá!' que você ouve quando fecha a torneira rápido? A água vem com velocidade e, de repente, encontra uma parede. A energia da água se transforma em uma onda de pressão que viaja pelo cano e pode até estourar conexões ou soltar canos da parede.",
      "puloDoGato": "Golpe de Aríete = Fechamento brusco -> Choque hidráulico.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é impacto mecânico externo.",
        "A": "Correta. Pode ser mitigado com válvulas de fechamento lento ou câmaras de ar.",
        "C": "Incorreta. Isso é cavitação ou purga de ar.",
        "E": "Incorreta. Acontece em qualquer material.",
        "B": "Incorreta. Entupimento."
      },
      "dicaDeOuro": "Feche a torneira com carinho para o cano não gritar."
    }
  },
  {
    "id": "q_f4_032",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Planejamento e Orçamento",
    "topic": "Gerenciamento - BDI (Benefícios e Despesas Indiretas)",
    "difficulty": "Médio",
    "statement": "No orçamento de uma obra, o que compõe o 'BDI'?",
    "options": {
      "A": "Apenas o custo do cimento e da areia.",
      "B": "A quantidade de café que os funcionários bebem.",
      "C": "O preço do aluguel das máquinas.",
      "D": "O salário dos pedreiros e serventes.",
      "E": "Custos indiretos (administração central, seguros, impostos, riscos) e o lucro da empresa."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O BDI é a 'taxa' que você aplica sobre o custo direto (material e mão de obra) para chegar no preço de venda. Sem o BDI, a empresa não paga os impostos, não mantém o escritório central e não tem lucro. É o que faz o negócio ser sustentável.",
      "puloDoGato": "BDI = Lucro + Impostos + Custos Indiretos.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Custo Direto.",
        "E": "Correta. Sigla fundamental para orçamentistas.",
        "D": "Incorreta. Isso é Custo Direto.",
        "C": "Incorreta. Isso é Custo Direto (Equipamentos).",
        "B": "Incorreta. Piada."
      },
      "dicaDeOuro": "Orçamento sem BDI é caminho certo para a falência."
    }
  },
  {
    "id": "q_f4_033",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Materiais - Agregados",
    "difficulty": "Fácil",
    "statement": "Qual a diferença básica entre Agregado Miúdo e Agregado Graúdo?",
    "options": {
      "A": "O miúdo é azul e o graúdo é cinza.",
      "B": "O miúdo boia na água e o graúdo afunda.",
      "C": "O miúdo é usado em prédios e o graúdo em estradas.",
      "D": "O miúdo é natural e o graúdo é artificial.",
      "E": "O tamanho dos grãos: o miúdo é a areia e o graúdo é a brita (pedra)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É uma questão de peneira. O que passa pela peneira de 4,8mm é miúdo (areia). O que fica retido é graúdo (brita). Os dois juntos com o cimento e a água formam o 'esqueleto' do concreto.",
      "puloDoGato": "Areia = Miúdo. Brita = Graúdo.",
      "cascasDeBanana": {
        "A": "Incorreta. Cores dependem da origem mineral.",
        "E": "Correta. Classificação granulométrica básica.",
        "D": "Incorreta. Ambos podem ser naturais ou britados.",
        "C": "Incorreta. Ambos são usados em quase todas as obras.",
        "B": "Incorreta. Ambos têm densidade similar (afundam)."
      },
      "dicaDeOuro": "Concreto equilibrado usa as duas medidas."
    }
  },
  {
    "id": "q_f4_034",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Flexão em Vigas",
    "difficulty": "Médio",
    "statement": "Em uma viga biapoiada com carga vertical, onde ocorre a maior tração?",
    "options": {
      "A": "Exatamente no meio da viga (linha neutra).",
      "B": "A viga não sofre tração, apenas compressão.",
      "C": "Nas laterais da viga.",
      "D": "Na base da viga (fibras inferiores).",
      "E": "No topo da viga (fibras superiores)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine que você dobra uma régua: o lado de fora estica (tração) e o lado de dentro espreme (compressão). Na viga, o peso faz ela 'encurvar'. A parte de baixo estica, e como o concreto é péssimo em aguentar esticão, é ali que colocamos a maior parte do aço.",
      "puloDoGato": "Viga biapoiada -> Tração embaixo -> Aço embaixo.",
      "cascasDeBanana": {
        "E": "Incorreta. Ali ocorre compressão (o concreto aguenta bem).",
        "D": "Correta. Por isso a armadura principal fica na base.",
        "A": "Incorreta. Na linha neutra a tensão é zero.",
        "C": "Incorreta. Irrelevante para flexão pura.",
        "B": "Incorreta. Toda peça em flexão tem tração e compressão."
      },
      "dicaDeOuro": "Onde o concreto racha, o aço trabalha."
    }
  },
  {
    "id": "q_f4_035",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Geotecnia e Fundações",
    "topic": "Geotecnia - Empuxo de Terra",
    "difficulty": "Difícil",
    "statement": "O que é o 'Empuxo Ativo' de terra sobre um muro de arrimo?",
    "options": {
      "A": "É a pressão da água da chuva no solo.",
      "B": "É o peso do muro sobre a fundação.",
      "C": "É a pressão exercida pelo solo sobre o muro quando este se desloca levemente para fora do maciço de terra.",
      "D": "É a força que o sol faz sobre a terra.",
      "E": "É a força que o muro faz para empurrar o solo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O solo quer cair. O muro segura. O 'Empuxo Ativo' é essa força do solo 'atacando' o muro. Se o muro for empurrado contra a terra (ex: uma prensa), seria empuxo passivo (que é muito maior). Entender isso é o que impede o muro de cair no primeiro temporal.",
      "puloDoGato": "Ativo = Solo empurra o muro. Passivo = Muro empurra o solo.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria o Passivo.",
        "C": "Correta. Teoria de Rankine ou Coulomb.",
        "A": "Incorreta. Isso é pressão hidrostática.",
        "B": "Incorreta. Carga vertical.",
        "D": "Incorreta. Piada."
      },
      "dicaDeOuro": "Muro de arrimo: Dimensione para o empuxo ativo + água."
    }
  },
  {
    "id": "q_f4_036",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Geotecnia e Fundações",
    "topic": "Pavimentação - CBR (California Bearing Ratio)",
    "difficulty": "Médio",
    "statement": "Para que serve o ensaio de CBR (Índice de Suporte Califórnia) na pavimentação?",
    "options": {
      "A": "Para medir o consumo de combustível dos rolos compressores.",
      "B": "Para medir a temperatura do asfalto.",
      "C": "Para avaliar a capacidade de suporte (resistência) do solo de base e sub-base de pavimentos.",
      "D": "Para verificar se o motorista vai derrapar na pista.",
      "E": "Para calcular a quantidade de tinta da sinalização."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O CBR compara o seu solo com uma pedra britada padrão da Califórnia (que é o 100%). Se o seu solo tem CBR 10%, ele aguenta 10 vezes menos que a pedra padrão. É o número mágico para decidir a espessura das camadas da estrada.",
      "puloDoGato": "CBR = Resistência do solo para estradas.",
      "cascasDeBanana": {
        "B": "Incorreta. Termômetro.",
        "C": "Correta. Ensaio padrão para dimensionamento de pavimentos flexíveis.",
        "D": "Incorreta. Coeficiente de atrito pneus/pavimento.",
        "E": "Incorreta. Quantitativo.",
        "A": "Incorreta. Custos operacionais."
      },
      "dicaDeOuro": "CBR baixo: a estrada vai afundar se não reforçar."
    }
  },
  {
    "id": "q_f4_037",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Saneamento - Lodo Ativado",
    "difficulty": "Médio",
    "statement": "No tratamento de esgoto, o que é o processo de 'Lodos Ativados'?",
    "options": {
      "A": "É o processo de queima do esgoto.",
      "B": "É um processo biológico aeróbio onde microorganismos digerem a matéria orgânica em tanques de aeração.",
      "C": "É a filtragem do esgoto através de areia de praia.",
      "D": "É a adição de cloro em grandes quantidades.",
      "E": "É o uso de imãs para atrair a sujeira."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O lodo ativado é uma 'fábrica de bactérias'. Você sopra ar na água (aeração) para as bactérias 'boas' ficarem fortes e comerem toda a sujeira orgânica. Depois, você separa o lodo (as bactérias) da água limpa e devolve parte delas para o tanque para continuar o ciclo.",
      "puloDoGato": "Lodo Ativado = Bactérias famintas + Oxigênio.",
      "cascasDeBanana": {
        "A": "Incorreta. Absurdo físico.",
        "B": "Correta. Método mais eficiente para tratamento secundário de esgoto.",
        "C": "Incorreta. Cloração é desinfecção final.",
        "D": "Incorreta. Incineração.",
        "E": "Incorreta. Filtro biológico de areia é outro método."
      },
      "dicaDeOuro": "Lodos ativados: Deixe a natureza trabalhar por você."
    }
  },
  {
    "id": "q_f4_038",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Hidrologia - Tempo de Concentração",
    "difficulty": "Médio",
    "statement": "O que é o 'Tempo de Concentração' de uma bacia hidrográfica?",
    "options": {
      "A": "O tempo que o engenheiro leva para se concentrar no projeto.",
      "B": "O tempo necessário para que a gota de água que cai no ponto mais distante da bacia chegue até a seção de saída (exutório).",
      "C": "O tempo de duração da chuva mais forte do ano.",
      "D": "O tempo que leva para o sol evaporar toda a água da chuva.",
      "E": "O tempo que a prefeitura leva para limpar os bueiros."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o tempo que a bacia leva para 'responder' totalmente a uma chuva. Se o tempo de concentração é de 30 minutos, significa que depois de 30 minutos de chuva, toda a área da bacia está contribuindo com água para o rio ao mesmo tempo. É o momento do pico da enchente.",
      "puloDoGato": "Tempo de Concentração = Resposta total da bacia.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada.",
        "B": "Correta. Crucial para projetar galerias de águas pluviais.",
        "C": "Incorreta. Evapotranspiração.",
        "D": "Incorreta. Tempo de retorno ou duração da chuva.",
        "E": "Incorreta. Manutenção."
      },
      "dicaDeOuro": "Tempo de concentração curto: enchentes rápidas e perigosas."
    }
  },
  {
    "id": "q_f4_039",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Flambagem",
    "difficulty": "Médio",
    "statement": "O fenômeno da 'Flambagem' ocorre tipicamente em quais elementos estruturais?",
    "options": {
      "A": "Tijolos de vedação.",
      "B": "Vidros de janelas.",
      "C": "Vigas curtas e largas.",
      "D": "Lajes de concreto armado muito pesadas.",
      "E": "Pilares esbeltos (finos e longos) submetidos à compressão."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Flambagem é quando você aperta um canudo e ele dobra para o lado de repente. Não é que o material quebrou por esmagamento, ele 'fugiu' para o lado porque é muito fino para a altura que tem. É o pesadelo de pilares muito altos e finos.",
      "puloDoGato": "Flambagem = Instabilidade lateral por compressão.",
      "cascasDeBanana": {
        "C": "Incorreta. Vigas curtas sofrem cisalhamento ou compressão direta.",
        "E": "Correta. Problema de instabilidade elástica.",
        "D": "Incorreta. Lajes sofrem flexão/punção.",
        "A": "Incorreta. Não são estruturais para compressão alta.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Pilar esbelto: Cuidado para ele não 'flambar' e cair."
    }
  },
  {
    "id": "q_f4_040",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Segurança do Trabalho - EPC (Equipamento de Proteção Coletiva)",
    "difficulty": "Fácil",
    "statement": "Qual das opções abaixo é um exemplo de EPC (Equipamento de Proteção Coletiva) em um canteiro de obras?",
    "options": {
      "A": "Luvas de raspa.",
      "B": "Protetor auricular.",
      "C": "Rede de proteção periférica e guarda-corpo.",
      "D": "Bota de biqueira de aço.",
      "E": "Capacete de segurança."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "EPC protege todo mundo ao mesmo tempo, independente de quem esteja usando. A rede de proteção impede que qualquer um caia do prédio. O EPI (Capacete, Bota) só protege a pessoa que está vestindo ele. Na segurança, o EPC sempre vem primeiro que o EPI.",
      "puloDoGato": "EPC = Coletivo (Rede, Placa, Cone). EPI = Individual (Bota, Luva).",
      "cascasDeBanana": {
        "E": "Incorreta. É EPI.",
        "C": "Correta. Protege a coletividade.",
        "D": "Incorreta. É EPI.",
        "B": "Incorreta. É EPI.",
        "A": "Incorreta. É EPI."
      },
      "dicaDeOuro": "Proteja o ambiente (EPC) para não depender só do acessório (EPI)."
    }
  },
  {
    "id": "q_f4_061",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Concreto Armado (Vigas)",
    "difficulty": "Médio",
    "statement": "No dimensionamento de vigas de concreto armado ao estado limite último, qual a função primordial da armadura transversal (estribos)?",
    "options": {
      "A": "Reduzir o peso próprio da estrutura.",
      "B": "Substituir o uso de concreto na zona comprimida.",
      "C": "Aumentar apenas a estética da viga para evitar fissuras superficiais.",
      "D": "Absorver os esforços de tração resultantes da flexão simples.",
      "E": "Garantir a resistência aos esforços de cisalhamento (força cortante)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Vigas sofrem dois tipos principais de 'surra': a flexão (que tenta dobrar a viga) e o cisalhamento (que tenta cortar a viga perto dos apoios). A armadura longitudinal (barras retas) cuida da flexão. Os estribos (armadura transversal) são os heróis que seguram o cisalhamento e impedem que a viga 'rasgue' na diagonal.",
      "puloDoGato": "Flexão = Barras Longitudinais. Cisalhamento = Estribos.",
      "cascasDeBanana": {
        "D": "Incorreta. Essa é a função da armadura longitudinal.",
        "E": "Correta. Estribos combatem a força cortante.",
        "C": "Incorreta. Fissuras por cisalhamento são estruturais e perigosas, não apenas estéticas.",
        "A": "Incorreta. Aço é mais denso que o concreto.",
        "B": "Incorreta. Concreto é excelente na compressão; o aço o ajuda na tração."
      },
      "dicaDeOuro": "Estribos muito afastados? Perigo de ruptura frágil por cisalhamento."
    }
  },
  {
    "id": "q_f4_062",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Fundações - Sapatas Isoladas",
    "difficulty": "Médio",
    "statement": "Ao projetar uma sapata isolada, qual o critério básico para que ela seja considerada 'rígida' segundo a NBR 6118?",
    "options": {
      "A": "Se a altura da sapata for maior ou igual a metade da diferença entre o lado da sapata e o lado do pilar.",
      "B": "Se ela for enterrada a mais de 10 metros de profundidade.",
      "C": "Se ela for feita de aço puro.",
      "D": "Se a pressão sobre o solo for zero.",
      "E": "Se ela não possuir armadura de aço."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Uma sapata rígida é aquela que 'não dobra' sob a carga do pilar. Ela distribui a pressão no solo de forma linear. Para isso, ela precisa ter uma altura considerável em relação às suas abas. Se for muito fina, ela vira 'flexível' e o cálculo muda completamente.",
      "puloDoGato": "Sapata Rígida: h >= (L - l) / 2.",
      "cascasDeBanana": {
        "A": "Correta. Definição geométrica da norma.",
        "B": "Incorreta. Sapatas são de concreto armado.",
        "C": "Incorreta. Profundidade define se é rasa ou profunda, não rigidez.",
        "D": "Incorreta. Quase toda sapata precisa de armadura por tração.",
        "E": "Incorreta. Se a pressão for zero, não há carga."
      },
      "dicaDeOuro": "Sapatas rígidas dispensam verificação ao cisalhamento em certos casos, simplificando o projeto."
    }
  },
  {
    "id": "q_f4_063",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Geotecnia e Fundações",
    "topic": "Mecânica dos Solos - Tensões e Adensamento",
    "difficulty": "Difícil",
    "statement": "O fenômeno do adensamento primário em solos argilosos saturados é caracterizado por:",
    "options": {
      "A": "Expulsão rápida de ar dos vazios do solo.",
      "B": "Redução de volume devido à expulsão gradual da água dos poros sob carga externa.",
      "C": "Congelamento da água intersticial.",
      "D": "Aumento instantâneo da resistência do solo sem recalque.",
      "E": "Transformação da argila em areia grossa."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Argila é como uma esponja com furos minúsculos cheia de água. Se você pisar nela, a água demora para sair porque os caminhos são estreitos. Esse tempo que o solo leva para 'murchar' enquanto a água sai é o adensamento. Em prédios sobre argila, isso pode levar anos (recalque lento).",
      "puloDoGato": "Adensamento = Saída de água + Tempo + Solo Argiloso.",
      "cascasDeBanana": {
        "A": "Incorreta. Expulsão de ar é compactação (solo não saturado).",
        "B": "Correta. É o recalque diferido no tempo.",
        "C": "Incorreta. Adensamento SEMPRE gera recalque (redução de volume).",
        "D": "Incorreta. Geologia não muda assim.",
        "E": "Incorreta. Fora de contexto térmico."
      },
      "dicaDeOuro": "Cuidado com o adensamento: o prédio pode estar 'bonito' hoje e rachar daqui a 5 anos."
    }
  },
  {
    "id": "q_f4_064",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas Metálicas - Flambagem",
    "difficulty": "Médio",
    "statement": "Em pilares metálicos esbeltos submetidos à compressão axial, qual o principal modo de falha esperado?",
    "options": {
      "A": "Carbonatação do aço.",
      "B": "Derretimento dos parafusos de base.",
      "C": "Alongamento excessivo por tração.",
      "D": "Esmagamento do material (ruptura por compressão pura).",
      "E": "Instabilidade elástica lateral (flambagem)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Pense em uma régua de plástico. Se você apertar as pontas (compressão), ela não vai esmagar; ela vai 'dobrar' para o lado e perder a força. Isso é flambagem. Quanto mais fino e longo o pilar (maior esbeltez), mais fácil ele flamba antes de atingir a resistência do aço.",
      "puloDoGato": "Pilar esbelto + Compressão = Flambagem.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso ocorreria em pilares muito curtos e robustos.",
        "E": "Correta. Fenômeno de instabilidade geométrica.",
        "B": "Incorreta. Falha térmica.",
        "C": "Incorreta. Pilar comprimido não sofre tração global.",
        "A": "Incorreta. Carbonatação é fenômeno do concreto, não do aço isolado."
      },
      "dicaDeOuro": "A carga crítica de Euler é a que define o início da flambagem elástica."
    }
  },
  {
    "id": "q_f4_065",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Materiais - Aço para Concreto Armado",
    "difficulty": "Fácil",
    "statement": "O que significa a nomenclatura 'CA-50' para barras de aço utilizadas em concreto armado?",
    "options": {
      "A": "Que o aço só pode ser usado em temperaturas acima de 50 graus Celsius.",
      "B": "Que a barra pesa 50 kg.",
      "C": "Que a barra tem 50 metros de comprimento padrão.",
      "D": "Que o aço possui 50% de carbono em sua composição.",
      "E": "Que o aço tem uma tensão de escoamento característica de 50 kgf/mm² (ou 500 MPa)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O '50' é o RG da força do aço. Significa que ele aguenta até 500 MegaPascais de força antes de começar a esticar permanentemente (escoar). O CA-60 é mais forte (600 MPa) e o CA-25 é o mais fraco (250 MPa).",
      "puloDoGato": "Número x 10 = Resistência em MPa.",
      "cascasDeBanana": {
        "D": "Incorreta. 50% de carbono faria o aço quebrar igual vidro (ferro fundido).",
        "E": "Correta. É a tensão de escoamento mínima garantida.",
        "C": "Incorreta. Comprimento padrão é 12m.",
        "A": "Incorreta. Resistência mecânica, não térmica.",
        "B": "Incorreta. Peso depende do diâmetro."
      },
      "dicaDeOuro": "CA-50 é o 'feijão com arroz' das obras brasileiras; possui nervuras para aderir ao concreto."
    }
  },
  {
    "id": "q_f4_066",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Hidráulica - Condutos Forçados",
    "difficulty": "Médio",
    "statement": "Qual a principal causa da perda de carga distribuída em uma tubulação de água?",
    "options": {
      "A": "A presença de curvas de raio longo.",
      "B": "O atrito do fluido com as paredes internas do tubo e a viscosidade do fluido.",
      "C": "O barulho gerado pelas bombas.",
      "D": "A profundidade em que o tubo está enterrado.",
      "E": "A cor externa da tubulação."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A água não desliza 'de graça'. Ela raspa nas paredes do tubo (rugosidade) e as moléculas de água raspam umas nas outras (viscosidade). Isso consome energia da pressão. Por isso, quanto mais longo o tubo, menor a pressão que chega na ponta.",
      "puloDoGato": "Perda de Carga = Atrito + Rugosidade + Comprimento.",
      "cascasDeBanana": {
        "A": "Incorreta. Curvas causam perda de carga LOCALIZADA, não distribuída.",
        "B": "Correta. Base das equações de Darcy-Weisbach e Hazen-Williams.",
        "C": "Incorreta. Irrelevante.",
        "D": "Incorreta. Barulho é efeito da vibração/turbulência, não a causa da perda.",
        "E": "Incorreta. Afeta o carregamento externo, não a perda de carga interna."
      },
      "dicaDeOuro": "Tubos mais lisos (como PVC) perdem menos carga que tubos rugosos (ferro fundido antigo)."
    }
  },
  {
    "id": "q_f4_067",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Pontes - Elementos Estruturais",
    "difficulty": "Médio",
    "statement": "Em uma ponte de vigas, qual a função dos aparelhos de apoio?",
    "options": {
      "A": "Aumentar a velocidade dos veículos sobre a ponte.",
      "B": "Substituir as vigas principais da ponte.",
      "C": "Impedir qualquer tipo de movimento da superestrutura.",
      "D": "Serve apenas como decoração nos pilares.",
      "E": "Permitir rotações e transições da superestrutura (devido a dilatação térmica e cargas) e transmitir os esforços para a infraestrutura."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Uma ponte não é um bloco rígido; ela 'respira'. Quando faz sol, ela estica; quando passa caminhão, ela balança. Os aparelhos de apoio (geralmente de Neoprene) são as 'almofadinhas' que deixam a ponte se mexer um pouco sem quebrar o pilar.",
      "puloDoGato": "Aparelho de Apoio = Transmissão de Carga + Liberdade de Movimento.",
      "cascasDeBanana": {
        "C": "Incorreta. Se você impedir o movimento, a dilatação térmica vai rachar a ponte.",
        "E": "Correta. Essencial para a durabilidade da estrutura.",
        "D": "Incorreta. São peças técnicas vitais.",
        "B": "Incorreta. Eles suportam as vigas, não as substituem.",
        "A": "Incorreta. Sem nexo."
      },
      "dicaDeOuro": "Neoprene fretado é o tipo mais comum de aparelho de apoio em pontes modernas."
    }
  },
  {
    "id": "q_f4_068",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Geotecnia - Empuxos de Terra",
    "difficulty": "Médio",
    "statement": "Em um muro de arrimo, o que caracteriza o 'Empuxo Ativo'?",
    "options": {
      "A": "A pressão quando o muro é empurrado contra o solo.",
      "B": "A força do vento batendo no muro.",
      "C": "A pressão exercida quando o muro se desloca para fora do solo (se afasta do aterro).",
      "D": "O peso próprio do muro de concreto.",
      "E": "A pressão de água em uma piscina vazia."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Imagine o solo querendo cair e o muro segurando. Se o muro ceder um milímetro para frente, o solo relaxa e empurra com uma força mínima: isso é o empuxo ATIVO. Se você tentar empurrar o muro contra o morro, a resistência é enorme: isso é o PASSIVO.",
      "puloDoGato": "Ativo = Muro se afasta (Mínimo). Passivo = Muro se aproxima (Máximo).",
      "cascasDeBanana": {
        "C": "Correta. É o caso de dimensionamento usual para muros de arrimo.",
        "A": "Incorreta. Esse é o Empuxo Passivo.",
        "E": "Incorreta. Hidrostática.",
        "D": "Incorreta. Isso é carga vertical.",
        "B": "Incorreta. Carga de vento."
      },
      "dicaDeOuro": "O empuxo em repouso (K0) é o que ocorre quando o muro é perfeitamente rígido e não se move nada."
    }
  },
  {
    "id": "q_f4_069",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Concreto Armado - Domínios de Deformação",
    "difficulty": "Difícil",
    "statement": "Segundo a NBR 6118, o 'Domínio 3' de deformação de vigas é caracterizado por:",
    "options": {
      "A": "Ruptura dúctil, com escoamento da armadura de tração e esmagamento do concreto.",
      "B": "Ruptura frágil por compressão do concreto sem aviso.",
      "C": "Compressão pura sem presença de aço.",
      "D": "Aço trabalhando apenas na fase elástica.",
      "E": "Tração pura em toda a seção."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Domínio 3 é o 'queridinho' dos engenheiros. Nele, se a viga for cair, o aço avisa antes (estica muito, cria fendas), dando tempo das pessoas saírem. É o equilíbrio perfeito onde o aço escoa e o concreto atinge seu limite de compressão.",
      "puloDoGato": "Domínio 3 = Ruptura Dúctil (Aço escoa).",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria Domínio 4 ou superior (muito aço).",
        "A": "Correta. Garante segurança e economia.",
        "E": "Incorreta. Domínio 1.",
        "C": "Incorreta. Impossível em concreto armado flexionado.",
        "D": "Incorreta. No Domínio 3 o aço atinge a deformação de escoamento."
      },
      "dicaDeOuro": "Mantenha sua viga no Domínio 3 para garantir que ela 'avise' antes de quebrar."
    }
  },
  {
    "id": "q_f4_070",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Saneamento - Rede de Esgoto",
    "difficulty": "Fácil",
    "statement": "Qual o dispositivo utilizado para permitir a inspeção e limpeza de redes coletoras de esgoto?",
    "options": {
      "A": "Ar condicionado central.",
      "B": "Caixa de gordura individual.",
      "C": "PV - Poço de Visita.",
      "D": "Hidrante.",
      "E": "Poste de iluminação."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Poço de Visita (PV) é aquela 'tampa de bueiro' redonda no meio da rua. Ele serve para o técnico descer e desentupir a rede ou para introduzir equipamentos de limpeza. É o nó de conexão das tubulações.",
      "puloDoGato": "PV = Inspeção + Manutenção + Mudança de Direção.",
      "cascasDeBanana": {
        "C": "Correta. Elemento fundamental do sistema de esgoto.",
        "A": "Incorreta. Absurdo.",
        "E": "Incorreta. Elétrica/Urbanismo.",
        "D": "Incorreta. Combate a incêndio (água limpa).",
        "B": "Incorreta. Fica dentro das casas, não na rede pública coletora."
      },
      "dicaDeOuro": "PVs devem ser instalados em mudanças de direção, declividade ou diâmetro."
    }
  },
  {
    "id": "q_f4_071",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Construção Civil e Materiais",
    "topic": "Topografia - Nivelamento Geométrico",
    "difficulty": "Médio",
    "statement": "No nivelamento geométrico, o que é a 'Visada de Ré'?",
    "options": {
      "A": "A leitura do nome do fabricante do nível.",
      "B": "A primeira leitura feita em um ponto de cota conhecida.",
      "C": "A última leitura antes de guardar o equipamento.",
      "D": "Uma leitura feita para trás, olhando para o sol.",
      "E": "Uma leitura feita apenas em terrenos planos."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Para saber a altura de um ponto novo, você precisa primeiro olhar para um ponto 'velho' que você já sabe a altura (Referência de Nível). Essa primeira olhada para trás (em direção ao que você já sabe) é a Ré. As olhadas para frente, nos pontos novos, são as Vante.",
      "puloDoGato": "Ré = Ponto Conhecido. Vante = Ponto a Descobrir.",
      "cascasDeBanana": {
        "B": "Correta. Define o plano de referência do aparelho.",
        "D": "Incorreta. Ré é sentido figurado em relação ao progresso do levantamento.",
        "C": "Incorreta. Isso seria uma Vante de Mudança ou fechamento.",
        "E": "Incorreta. Nivelamento é justamente para terrenos com desnível.",
        "A": "Incorreta. Sem comentários."
      },
      "dicaDeOuro": "Cota do Ponto + Leitura de Ré = Altura do Instrumento."
    }
  },
  {
    "id": "q_f4_072",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Instalações Prediais - Esgoto",
    "difficulty": "Fácil",
    "statement": "Qual a função do 'Sifão' em pias e tanques?",
    "options": {
      "A": "Filtrar as impurezas da água.",
      "B": "Criar um fecho hídrico para impedir a passagem de gases e mau cheiro da rede de esgoto para o interior do imóvel.",
      "C": "Aquecer a água da pia.",
      "D": "Aumentar a pressão da água.",
      "E": "Substituir o uso de tubos de PVC."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O sifão tem um 'U' que sempre fica cheio de água. Essa água parada bloqueia o ar fedido que vem do cano de esgoto. Sem sifão, sua cozinha cheiraria a bueiro 24 horas por dia.",
      "puloDoGato": "Sifão = Fecho Hídrico = Barreira contra cheiro.",
      "cascasDeBanana": {
        "A": "Incorreta. Causa perda de carga, na verdade.",
        "B": "Correta. Função sanitária básica.",
        "C": "Incorreta. Sifão não é filtro (embora acumule detritos indesejados).",
        "D": "Incorreta. Função do aquecedor/torneira elétrica.",
        "E": "Incorreta. Ele é um componente da rede de PVC/PP."
      },
      "dicaDeOuro": "Se o ralo está cheirando mal, pode ser que o fecho hídrico do sifão tenha secado ou evaporado."
    }
  },
  {
    "id": "q_f4_073",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Materiais - Agregados para Concreto",
    "difficulty": "Médio",
    "statement": "O que é a 'Curva Granulométrica' de um agregado?",
    "options": {
      "A": "O preço da areia por metro cúbico.",
      "B": "O tempo que a brita leva para quebrar.",
      "C": "A quantidade de água que o agregado absorve.",
      "D": "A representação gráfica da distribuição das dimensões dos grãos do agregado.",
      "E": "A cor das pedras usadas no concreto."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine passar a areia por várias peneiras, da maior para a menor. A curva granulométrica mostra quanto de areia ficou em cada peneira. Isso é vital: se você tiver grãos de vários tamanhos (bem graduada), os pequenos preenchem os vazios dos grandes e o concreto fica mais forte e gasta menos cimento.",
      "puloDoGato": "Granulometria = Tamanho dos grãos + Peneiramento.",
      "cascasDeBanana": {
        "E": "Incorreta. Cor não afeta resistência.",
        "D": "Correta. Essencial para o traço do concreto.",
        "B": "Incorreta. Isso seria ensaio de abrasão Los Angeles.",
        "C": "Incorreta. Isso é absorção/umidade.",
        "A": "Incorreta. Economia, não engenharia de materiais."
      },
      "dicaDeOuro": "Agregados bem graduados geram concretos com menos vazios."
    }
  },
  {
    "id": "q_f4_074",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Estruturas - Vigas T contínuas",
    "difficulty": "Médio",
    "statement": "Em uma viga T de concreto armado submetida a um momento fletor negativo (apoio), qual a região da viga que está tracionada?",
    "options": {
      "A": "Não há tração em vigas T.",
      "B": "Toda a seção está comprimida.",
      "C": "A nervura (parte inferior).",
      "D": "A mesa (parte superior).",
      "E": "O aço não trabalha nesse caso."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Cuidado! No meio do vão, a viga 'sorri' (parte de baixo estica). No apoio (em cima do pilar), a viga 'chora' (parte de cima estica). Então, no apoio, as fibras de cima estão sendo puxadas (tracionadas). Por isso colocamos ferro na parte de cima da viga nos apoios.",
      "puloDoGato": "Momento Negativo = Tração na fibra superior.",
      "cascasDeBanana": {
        "D": "Correta. Nos apoios, a tração ocorre no topo.",
        "C": "Incorreta. Na nervura ocorre a compressão nesse caso.",
        "B": "Incorreta. Flexão sempre tem tração e compressão.",
        "A": "Incorreta. Vigas T seguem a teoria da flexão.",
        "E": "Incorreta. O aço é justamente o que segura a tração na mesa."
      },
      "dicaDeOuro": "Em momentos negativos, a 'mesa' do T não ajuda na compressão (pois está tracionada), a seção trabalha como retangular (largura da nervura)."
    }
  },
  {
    "id": "q_f4_075",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Saneamento - Tratamento de Esgoto",
    "difficulty": "Médio",
    "statement": "No tratamento de esgoto por Lodos Ativados, qual o papel do oxigênio introduzido no sistema?",
    "options": {
      "A": "Apenas para fazer bolhas e deixar o esgoto bonito.",
      "B": "Matar todos os seres vivos presentes na água.",
      "C": "Transformar o esgoto em gasolina.",
      "D": "Manter a sobrevivência e a atividade das bactérias aeróbias que digerem a matéria orgânica.",
      "E": "Substituir a necessidade de filtros de areia."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O lodo ativado é um 'exército de bactérias famintas'. Elas comem a sujeira do esgoto. Mas essas bactérias precisam respirar para trabalhar rápido. Por isso, a gente sopra ar (oxigênio) no tanque. Sem ar, elas morrem ou trabalham devagar, e o esgoto continua sujo.",
      "puloDoGato": "Lodos Ativados = Bactérias + Ar + Digestão Orgânica.",
      "cascasDeBanana": {
        "A": "Incorreta. Finalidade biológica, não estética.",
        "D": "Correta. Processo biológico aeróbio.",
        "B": "Incorreta. O objetivo é cultivar bactérias 'boas', não matar tudo.",
        "E": "Incorreta. São etapas diferentes (tratamento secundário vs terciário).",
        "C": "Incorreta. Absurdo químico."
      },
      "dicaDeOuro": "A eficiência do sistema depende da relação entre alimento (sujeira) e microrganismos (lodo)."
    }
  },
  {
    "id": "q_f4_076",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Planejamento e Orçamento",
    "topic": "Engenharia de Custos - BDI",
    "difficulty": "Médio",
    "statement": "No contexto da composição de preços unitários em obras civis, o que representa a sigla BDI (Benefícios e Despesas Indiretas)?",
    "options": {
      "A": "O custo exclusivo do projeto arquitetônico.",
      "B": "O valor do vale-transporte dos operários.",
      "C": "A quantidade de tijolos desperdiçados na obra.",
      "D": "Um percentual aplicado sobre os custos diretos para cobrir despesas da sede, impostos, seguros, riscos e lucro.",
      "E": "O custo direto de materiais e mão de obra."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O custo direto é o que você gasta no canteiro (tijolo, cimento, pedreiro). O BDI é o 'recheio' que o empresário coloca em cima para pagar o aluguel do escritório central, os impostos para o governo, o seguro da obra e, claro, o lucro dele. Sem BDI, a empresa quebra mesmo vendendo muito.",
      "puloDoGato": "Preço de Venda = Custo Direto x (1 + BDI).",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é Custo Direto.",
        "D": "Correta. Abrange tudo que não é 'pé na massa' mas é necessário para a empresa existir.",
        "B": "Incorreta. Despesa direta de mão de obra.",
        "C": "Incorreta. Isso é perda/insumo.",
        "A": "Incorreta. Projeto pode ser custo direto ou indireto dependendo do contrato, mas não define o BDI."
      },
      "dicaDeOuro": "Impostos incidentes sobre o faturamento (ISS, PIS, COFINS) SEMPRE fazem parte do BDI."
    }
  },
  {
    "id": "q_f4_077",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Planejamento e Orçamento",
    "topic": "Planejamento - Método do Caminho Crítico (CPM)",
    "difficulty": "Difícil",
    "statement": "Em um cronograma de rede PERT/CPM, o que caracteriza uma 'Atividade Crítica'?",
    "options": {
      "A": "Uma atividade que pode ser atrasada em 30 dias sem afetar o prazo final.",
      "B": "Uma atividade que não consome recursos financeiros.",
      "C": "Uma atividade que é muito perigosa para os operários.",
      "D": "Uma atividade que possui folga total igual a zero.",
      "E": "Uma atividade que ocorre apenas no final da obra."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Caminho crítico é a sequência de tarefas que, se atrasar 1 minuto, a obra inteira atrasa 1 minuto. Elas não têm 'gordura' (folga zero). Identificar essas tarefas é o coração do planejamento para não deixar o prazo estourar.",
      "puloDoGato": "Atividade Crítica = Folga Zero = Define o Prazo Final.",
      "cascasDeBanana": {
        "D": "Correta. Definição técnica fundamental.",
        "C": "Incorreta. Confusão semântica com 'crítico' de risco físico.",
        "A": "Incorreta. Se tem folga de 30 dias, ela é não-crítica.",
        "B": "Incorreta. Todas consomem recursos.",
        "E": "Incorreta. Pode ocorrer em qualquer fase."
      },
      "dicaDeOuro": "O caminho crítico é o caminho mais LONGO em termos de tempo dentro da rede."
    }
  },
  {
    "id": "q_f4_078",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Construção Civil e Materiais",
    "topic": "Segurança do Trabalho - NR 18",
    "difficulty": "Fácil",
    "statement": "Segundo a NR 18 (Condições e Meio Ambiente de Trabalho na Indústria da Construção), qual item é obrigatório em canteiros de obra com mais de 20 trabalhadores?",
    "options": {
      "A": "Refeitório e instalações sanitárias adequadas.",
      "B": "Cinema privativo.",
      "C": "Piscina de ondas.",
      "D": "Pista de pouso para helicópteros.",
      "E": "Campo de futebol oficial."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A NR 18 cuida da dignidade e segurança do trabalhador. Acima de 20 pessoas, o canteiro precisa ter uma estrutura mínima de vivência: lugar para comer (refeitório) e banheiros limpos. É o básico para o funcionamento da obra.",
      "puloDoGato": "NR 18 = Bíblia da Construção Civil.",
      "cascasDeBanana": {
        "C": "Incorreta. Absurdo.",
        "A": "Correta. Itens de área de vivência obrigatórios.",
        "B": "Incorreta. Absurdo.",
        "E": "Incorreta. Absurdo.",
        "D": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "PCMAT (ou PGR agora) é o plano de segurança exigido pela NR 18."
    }
  },
  {
    "id": "q_f4_079",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Construção Civil e Materiais",
    "topic": "Manutenção de Edificações - Inspeção Predial",
    "difficulty": "Médio",
    "statement": "O que caracteriza a 'Manutenção Preditiva' em edificações?",
    "options": {
      "A": "Acompanhamento periódico de parâmetros (ex: termografia de quadros elétricos) para intervir antes que a falha ocorra baseada em dados.",
      "B": "Pintar o prédio todo ano independentemente do estado.",
      "C": "Consertar algo apenas quando quebra (ex: trocar lâmpada queimada).",
      "D": "Rezar para que nada estrague.",
      "E": "Demolir o prédio e construir um novo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A preditiva é a manutenção 'inteligente'. Você usa aparelhos (como câmeras térmicas ou medidores de vibração) para 'escutar' o prédio. Se um disjuntor está esquentando demais, você troca antes de pegar fogo. Você não espera quebrar, mas também não troca sem necessidade.",
      "puloDoGato": "Preditiva = Monitoramento + Previsão de Falha.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é manutenção CORRETIVA.",
        "A": "Correta. Foca no estado real do componente.",
        "B": "Incorreta. Isso é manutenção PREVENTIVA (baseada em tempo).",
        "E": "Incorreta. Renovação urbana.",
        "D": "Incorreta. Irresponsabilidade."
      },
      "dicaDeOuro": "Manutenção preditiva costuma ser a mais barata a longo prazo para sistemas críticos."
    }
  },
  {
    "id": "q_f4_080",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Saneamento - Abastecimento de Água",
    "difficulty": "Fácil",
    "statement": "Qual o principal objetivo da adição de Flúor na água de abastecimento público?",
    "options": {
      "A": "Diminuir o consumo de água.",
      "B": "Mudar a cor da água para azul.",
      "C": "Prevenção da cárie dentária na população.",
      "D": "Aumentar o gosto de menta na água.",
      "E": "Ajudar a lavar melhor as roupas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A fluoretação é uma medida de saúde pública. Ao colocar um pouquinho de flúor na água que todo mundo bebe, o governo ajuda a fortalecer os dentes das crianças e adultos, reduzindo drasticamente as cáries em quem não tem acesso fácil ao dentista.",
      "puloDoGato": "Flúor = Saúde Bucal Coletiva.",
      "cascasDeBanana": {
        "B": "Incorreta. Água deve ser incolor.",
        "C": "Correta. Padrão de potabilidade e saúde no Brasil.",
        "D": "Incorreta. Água deve ser insípida.",
        "E": "Incorreta. Não afeta a limpeza.",
        "A": "Incorreta. Sem nexo."
      },
      "dicaDeOuro": "O excesso de flúor causa a 'Fluorose', por isso a dosagem deve ser rigidamente controlada na ETA."
    }
  },
  {
    "id": "q_f4_081",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Construção Civil e Materiais",
    "topic": "Gestão de Resíduos - Resíduos da Construção Civil (RCC)",
    "difficulty": "Médio",
    "statement": "Segundo a Resolução CONAMA 307, os resíduos de gesso são classificados em qual categoria?",
    "options": {
      "A": "Classe C - Não passíveis de reciclagem.",
      "B": "Classe B - Recicláveis para outras finalidades (plástico, papel, metal, gesso).",
      "C": "Classe D - Perigosos.",
      "D": "Classe E - Radioativos.",
      "E": "Classe A - Recicláveis para agregados."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O gesso costumava ser Classe C (o 'rejeito'), mas a norma mudou. Hoje ele é Classe B. Isso significa que ele deve ser separado e enviado para empresas que o transformam em gesso novo ou corretivo de solo. Não pode mais ser jogado em qualquer caçamba de entulho misturado.",
      "puloDoGato": "Gesso = Classe B (Reciclável).",
      "cascasDeBanana": {
        "A": "Incorreta. Classe A são minerais (concreto, tijolo, areia).",
        "B": "Correta. Atualização importante da norma CONAMA.",
        "C": "Incorreta. Era assim antigamente, mas o gesso tornou-se reciclável.",
        "D": "Incorreta. Classe D são tintas, óleos, solventes e amianto.",
        "E": "Incorreta. Inexistente no RCC padrão."
      },
      "dicaDeOuro": "A separação na fonte é a chave para a gestão de RCC eficiente."
    }
  },
  {
    "id": "q_f4_082",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Sistemas Estruturais - Alvenaria Estrutural",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem da Alvenaria Estrutural em relação ao Sistema de Concreto Armado convencional?",
    "options": {
      "A": "Redução do uso de fôrmas de madeira e otimização do cronograma pela integração entre estrutura e vedação.",
      "B": "Dispensa o uso de fundações.",
      "C": "Permite remover qualquer parede após a obra pronta.",
      "D": "Uso de tijolos de barro cozido comuns sem controle de qualidade.",
      "E": "Pode ser construída sem projeto de engenharia."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Na alvenaria estrutural, a parede É o pilar. Você economiza muita madeira (fôrmas) e tempo, pois enquanto sobe a parede, a estrutura já fica pronta. É ótimo para prédios repetitivos (como habitação popular), mas exige um projeto muito rigoroso.",
      "puloDoGato": "Alvenaria Estrutural = Estrutura + Vedação (2 em 1).",
      "cascasDeBanana": {
        "C": "Incorreta. Se você tirar a parede, o prédio cai! (Flexibilidade zero).",
        "A": "Correta. Grande economia de materiais e mão de obra.",
        "D": "Incorreta. Exige blocos de alta resistência controlada.",
        "B": "Incorreta. Cargas são transmitidas ao solo normalmente.",
        "E": "Incorreta. Exige cálculo estrutural complexo."
      },
      "dicaDeOuro": "Modulação é a palavra-chave: o projeto deve ser feito 'contando os blocos' para evitar quebras."
    }
  },
  {
    "id": "q_f4_083",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Hidráulica e Saneamento",
    "topic": "Instalações Hidrossanitárias - Ventilação",
    "difficulty": "Médio",
    "statement": "Em um sistema de esgoto predial, para que serve a 'Coluna de Ventilação'?",
    "options": {
      "A": "Para levar ar fresco para dentro dos banheiros sem janela.",
      "B": "Para esfriar a água do banho.",
      "C": "Para aumentar o barulho da descarga.",
      "D": "Para permitir a saída de gases e equilibrar a pressão no interior das tubulações, evitando o rompimento do fecho hídrico dos sifões.",
      "E": "Para economizar água na descarga."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Quando você dá descarga, um volume grande de água desce pelo cano e empurra o ar. Esse ar precisa sair para algum lugar, senão ele 'borbulha' de volta pelo ralo da pia ou suga a água do sifão (efeito pistão). A ventilação é o 'respiro' que sobe até o telhado para o ar entrar e sair livremente.",
      "puloDoGato": "Ventilação de Esgoto = Proteção do Sifão + Expulsão de Gases.",
      "cascasDeBanana": {
        "B": "Incorreta. Absurdo.",
        "D": "Correta. Essencial para o conforto e higiene do prédio.",
        "A": "Incorreta. Ventilação sanitária de gases, não climatização ambiental.",
        "C": "Incorreta. Reduz o barulho e o mau cheiro.",
        "E": "Incorreta. Sem relação."
      },
      "dicaDeOuro": "O terminal de ventilação deve estar sempre acima do telhado para dispersar o mau cheiro."
    }
  },
  {
    "id": "q_f4_084",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Construção Civil e Materiais",
    "topic": "Topografia - GPS/GNSS",
    "difficulty": "Fácil",
    "statement": "Qual a função básica de um receptor GNSS (popularmente conhecido como GPS) em um levantamento topográfico?",
    "options": {
      "A": "Prever o tempo para os próximos 30 dias.",
      "B": "Ligar para o dono do terreno.",
      "C": "Medir a temperatura do asfalto.",
      "D": "Substituir o uso de trenas eletrônicas em ambientes internos.",
      "E": "Determinar as coordenadas geográficas (latitude, longitude e altitude) de um ponto através de sinais de satélites."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O GNSS (Global Navigation Satellite System) usa satélites que ficam dando voltas na Terra. O aparelho topográfico recebe o sinal de vários deles e, por triangulação, diz exatamente onde você está no mapa do mundo com precisão de milímetros (nos modelos profissionais).",
      "puloDoGato": "GNSS = Coordenadas + Satélites.",
      "cascasDeBanana": {
        "C": "Incorreta. Termômetro.",
        "E": "Correta. Tecnologia padrão para georreferenciamento.",
        "D": "Incorreta. GPS não funciona bem dentro de casa ou sob árvores densas.",
        "A": "Incorreta. Meteorologia.",
        "B": "Incorreta. Brincadeira."
      },
      "dicaDeOuro": "O método RTK é o mais usado em topografia para obter precisão em tempo real."
    }
  },
  {
    "id": "q_f4_085",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Orçamentação - Curva ABC",
    "difficulty": "Médio",
    "statement": "Em um orçamento de obra, o que a 'Curva ABC de Insumos' revela ao gestor?",
    "options": {
      "A": "A produtividade de cada funcionário individualmente.",
      "B": "A ordem alfabética de todos os materiais.",
      "C": "O tempo de cura do concreto em dias.",
      "D": "Quais insumos são responsáveis pela maior parcela do custo total da obra (Itens A).",
      "E": "A cor dos tijolos que devem ser comprados primeiro."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A Curva ABC é a regra do 80/20. Geralmente, 20% dos itens (cimento, aço, elevador) custam 80% do dinheiro da obra. Esses são os 'Itens A'. O gestor foca neles para negociar melhor o preço, pois 1% de desconto no aço vale mais que 50% de desconto no prego.",
      "puloDoGato": "Curva ABC = Foco no que é mais CARO no total.",
      "cascasDeBanana": {
        "B": "Incorreta. Ordem de relevância financeira.",
        "D": "Correta. Ferramenta essencial de gestão financeira.",
        "E": "Incorreta. Absurdo.",
        "A": "Incorreta. Isso seria índice de produtividade.",
        "C": "Incorreta. Fenômeno químico."
      },
      "dicaDeOuro": "Ao fazer compras, comece sempre negociando os itens do topo da Curva A."
    }
  },
  {
    "id": "q_f4_086",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "discipline": "Construção Civil e Materiais",
    "topic": "Engenharia Legal - Vícios Construtivos",
    "difficulty": "Fácil",
    "statement": "Como é chamado o problema construtivo que se manifesta logo após a entrega da obra, como fissuras ou vazamentos?",
    "options": {
      "A": "Envelhecimento natural planejado.",
      "B": "Patologia ou Vício Construtivo.",
      "C": "Design moderno.",
      "D": "Erro do morador por respirar dentro do prédio.",
      "E": "Melhoria estética."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Vício construtivo é o 'defeito de fábrica' da casa. Pode ser uma infiltração por impermeabilização mal feita ou uma rachadura por fundação mal calculada. A construtora tem prazos de garantia legais (geralmente 5 anos para estrutura) para consertar esses erros.",
      "puloDoGato": "Vício = Defeito. Patologia = Estudo do defeito.",
      "cascasDeBanana": {
        "A": "Incorreta. Defeito nunca é melhoria.",
        "B": "Correta. Termo técnico e jurídico.",
        "C": "Incorreta. Prédios não devem rachar por envelhecimento rápido.",
        "D": "Incorreta. Irônico.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Diferencie Vício Aparente (fácil de ver) de Vício Oculto (aparece com o tempo)."
    }
  },
  {
    "id": "q_f4_132",
    "discipline": "Geotecnia e Fundações",
    "topic": "Mecânica dos Solos - Recalques",
    "statement": "No estudo de recalques em solos finos argilosos saturados submetidos a carregamentos contínuos, ocorre o fenômeno do adensamento. Qual a principal característica desse processo em comparação aos solos arenosos?",
    "options": {
      "A": "Depende exclusivamente da compressibilidade dos grãos sólidos.",
      "B": "Aumenta o índice de vazios do solo durante o processo.",
      "C": "Ocorre ao longo do tempo devido à lenta expulsão da água dos vazios.",
      "D": "Não gera recalques diferenciais se o carregamento for uniforme.",
      "E": "Ocorre de forma quase instantânea devido à alta permeabilidade."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O adensamento em argilas é demorado porque a água tem dificuldade para sair (baixa permeabilidade). Na areia, a água sai rápido e o recalque é imediato.",
      "puloDoGato": "Solo arenoso = recalque imediato. Solo argiloso = recalque por adensamento (lento).",
      "cascasDeBanana": {
        "A": "Isso descreve o comportamento de solos arenosos (alta permeabilidade).",
        "B": "A compressibilidade da água e dos grãos é considerada nula na teoria clássica de Terzaghi.",
        "C": "",
        "D": "Recalques diferenciais podem ocorrer mesmo com cargas uniformes se a espessura da camada variar.",
        "E": "O adensamento reduz (e não aumenta) o índice de vazios."
      },
      "dicaDeOuro": "A Teoria do Adensamento Unidimensional de Terzaghi pressupõe que o solo é homogêneo, totalmente saturado, e que a água e os grãos são incompressíveis."
    }
  },
  {
    "id": "q_f4_133",
    "discipline": "Geotecnia e Fundações",
    "topic": "Fundações Profundas",
    "statement": "Uma estaca do tipo Franki é amplamente utilizada em fundações profundas onde se exige grande capacidade de carga. Qual é a sua característica executiva principal?",
    "options": {
      "A": "É executada com injeção de calda de cimento sob alta pressão no fuste.",
      "B": "Utiliza lama bentonítica para estabilizar as paredes da escavação durante a perfuração.",
      "C": "Consiste em um tubo cravado com bucha de concreto seco, com posterior apiloamento e formação de base alargada.",
      "D": "É executada com trado contínuo helicoidal, concretada simultaneamente à retirada do trado.",
      "E": "É pré-moldada em concreto e cravada por vibração contínua."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Estaca Franki é aquela barulhenta que usa um 'pilão' (soquete) batendo numa bucha seca no fundo para formar uma base gordinha (base alargada).",
      "puloDoGato": "Palavras-chave da Franki: bucha de brita/areia, tubo cravado, pilão, base alargada.",
      "cascasDeBanana": {
        "A": "Descreve estacas pré-moldadas cravadas.",
        "B": "Refere-se à estaca raiz ou microestaca.",
        "C": "",
        "D": "Refere-se a estacas escavadas com fluido estabilizante (ex: estacão).",
        "E": "Descreve a estaca hélice contínua."
      },
      "dicaDeOuro": "Devido à forte vibração durante a execução, estacas Franki não são recomendadas perto de construções antigas ou frágeis."
    }
  },
  {
    "id": "q_f4_134",
    "discipline": "Geotecnia e Fundações",
    "topic": "Fundações Rasas",
    "statement": "Sapatas isoladas e radiers são tipos de fundações rasas. Em um projeto, a escolha por um radier em detrimento de sapatas isoladas é tecnicamente justificada quando:",
    "options": {
      "A": "A edificação possui pilares com cargas pontuais extremamente elevadas e muito distantes entre si.",
      "B": "A área total das sapatas necessárias ultrapassa 50% da área da projeção em planta da edificação.",
      "C": "O solo superficial apresenta alta capacidade de carga (acima de 0,5 MPa).",
      "D": "O lençol freático está aflorante no terreno natural.",
      "E": "Deseja-se evitar qualquer tipo de recalque na estrutura."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Se você tem que fazer tantas sapatas que elas quase se encostam (ocupando mais da metade do terreno), vale mais a pena concretar logo tudo de uma vez, formando um radier.",
      "puloDoGato": "Regra prática de projeto: Área de sapatas > 50% da área do prédio = Radier.",
      "cascasDeBanana": {
        "C": "Solo muito resistente favorece o uso de sapatas isoladas pequenas e econômicas.",
        "A": "Cargas altas e muito separadas pedem sapatas isoladas ou fundações profundas.",
        "D": "Lençol freático atrapalha tanto sapatas quanto radiers durante a execução.",
        "E": "Nenhuma fundação elimina 100% o recalque; o projeto visa manter os recalques dentro dos limites toleráveis."
      },
      "dicaDeOuro": "O radier distribui bem as cargas e reduz recalques diferenciais, sendo muito usado em alvenaria estrutural."
    }
  },
  {
    "id": "q_f4_135",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Mecânica dos Fluidos - Perda de Carga",
    "statement": "O Número de Reynolds (Re) é um parâmetro adimensional fundamental na mecânica dos fluidos. Para um escoamento de água em um tubo cilíndrico, se Re < 2000, o regime é caracterizado como:",
    "options": {
      "A": "Supercrítico.",
      "B": "Transição.",
      "C": "Laminar.",
      "D": "Turbulento.",
      "E": "Crítico."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Número de Reynolds baixo (menor que 2000) significa que a água está escoando 'comportada', em camadas, sem misturar. Isso é o regime laminar.",
      "puloDoGato": "Re < 2000 = Laminar. 2000 < Re < 4000 = Transição. Re > 4000 = Turbulento.",
      "cascasDeBanana": {
        "A": "Turbulento exige Re maior que 4000.",
        "B": "Transição fica na faixa de 2000 a 4000.",
        "C": "",
        "D": "Crítico e Supercrítico são termos usados para o Número de Froude em canais abertos, não para Reynolds em tubos.",
        "E": ""
      },
      "dicaDeOuro": "O Número de Reynolds relaciona as forças de inércia com as forças viscosas. (Re = ρVD / μ)."
    }
  },
  {
    "id": "q_f4_136",
    "discipline": "Construção Civil e Materiais",
    "topic": "Tecnologia do Concreto",
    "statement": "No controle tecnológico do concreto fresco, o ensaio de abatimento do tronco de cone (Slump Test) é rotineiramente utilizado para avaliar qual propriedade fundamental?",
    "options": {
      "A": "Módulo de elasticidade do concreto.",
      "B": "Exsudação superficial.",
      "C": "Resistência característica à compressão (fck).",
      "D": "Tempo de pega inicial e final.",
      "E": "Trabalhabilidade e consistência."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O Slump Test mede se o concreto está 'molinho' ou 'duro' para trabalhar na obra. Isso se chama trabalhabilidade.",
      "puloDoGato": "Slump Test = Trabalhabilidade (Consistência). Mede o quanto o concreto 'desaba'.",
      "cascasDeBanana": {
        "C": "Medida pelo rompimento de corpos de prova (cilindros) após cura.",
        "A": "Calculado a partir da resistência ou medido em ensaios específicos.",
        "D": "Tempo de pega é medido pelo ensaio de agulha de Vicat na pasta de cimento.",
        "B": "Exsudação é a água subindo à superfície, não medida pelo slump."
      },
      "dicaDeOuro": "A coleta para o slump test no caminhão betoneira deve ser feita descartando-se o primeiro terço e o último terço do volume total."
    }
  },
  {
    "id": "q_f4_137",
    "discipline": "Planejamento e Orçamento",
    "topic": "BDI (Benefícios e Despesas Indiretas)",
    "statement": "A taxa de BDI em um orçamento de obras públicas é aplicada sobre o Custo Direto. Qual dos seguintes itens NÃO deve compor o cálculo da taxa de BDI, devendo figurar diretamente na planilha orçamentária?",
    "options": {
      "A": "Despesas financeiras decorrentes do prazo de pagamento.",
      "B": "Taxa de risco e imprevistos.",
      "C": "Lucro operacional.",
      "D": "Instalação do canteiro de obras e mobilização.",
      "E": "Impostos incidentes sobre o faturamento (PIS/COFINS/ISS)."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O canteiro de obras é algo que você quantifica, projeta e constrói. Ele é custo direto e vai na planilha, linha por linha. Não se esconde ele no percentual do BDI.",
      "puloDoGato": "Canteiro, mobilização, administração LOCAL = Custo Direto (Planilha). Administração CENTRAL, lucro, impostos = BDI.",
      "cascasDeBanana": {
        "A": "Lucro é a essência do BDI (o 'Benefício').",
        "B": "Impostos sobre receita sempre entram na fórmula do BDI.",
        "C": "Riscos/Seguros/Garantias entram na composição do BDI.",
        "D": "",
        "E": "Despesas financeiras (por causa do tempo que o governo demora a pagar) entram no BDI."
      },
      "dicaDeOuro": "O Tribunal de Contas da União (TCU) determina rigorosamente que Administração Local e Canteiro não podem estar embutidos no BDI em obras públicas."
    }
  },
  {
    "id": "q_f4_200",
    "discipline": "Geotecnia e Fundações",
    "topic": "Ensaios de Campo - SPT",
    "statement": "O ensaio SPT (Standard Penetration Test) é o mais utilizado no Brasil para investigação geotécnica. O índice de resistência à penetração (NSPT) é definido como:",
    "options": {
      "A": "O número de golpes necessários para cravar os últimos 30 cm do amostrador padrão.",
      "B": "A resistência de ponta medida em kgf/cm² durante a cravação contínua.",
      "C": "A profundidade em centímetros penetrada após 30 golpes sucessivos.",
      "D": "A soma do número de golpes dos três trechos de 15 cm de cravação.",
      "E": "O número de golpes para cravar o primeiro e o último trecho de 15 cm."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "No SPT, a gente bate um martelo pra cravar o amostrador 45 cm no solo, divididos em 3 trechos de 15 cm. A gente joga fora os golpes dos primeiros 15 cm (porque o solo ali já tá frouxo da escavação) e soma os golpes dos últimos 30 cm (2x de 15). Esse é o NSPT.",
      "puloDoGato": "NSPT = Golpes do 2º trecho (15cm) + Golpes do 3º trecho (15cm) = últimos 30 cm.",
      "cascasDeBanana": {
        "A": "",
        "B": "Os primeiros 15 cm são descartados.",
        "C": "Resistência contínua é medida no CPT (Cone Penetration Test), não SPT.",
        "D": "Descarta-se o primeiro, somam-se os dois últimos.",
        "E": "Mede-se golpes para cravar distância fixa, não a distância para golpes fixos."
      },
      "dicaDeOuro": "Se o NSPT for zero, diz-se que o amostrador desceu por peso próprio, o que indica um solo extremamente frouxo ou mole."
    }
  },
  {
    "id": "q_f4_201",
    "discipline": "Geotecnia e Fundações",
    "topic": "Tensões no Solo",
    "statement": "A tensão efetiva em um maciço de solo é o principal parâmetro que rege o seu comportamento mecânico. Pelo Princípio das Tensões Efetivas de Terzaghi, como ela é definida?",
    "options": {
      "A": "Tensão total mais a poropressão.",
      "B": "Tensão cisalhante máxima na ruptura.",
      "C": "Tensão total menos a poropressão.",
      "D": "O dobro da pressão neutra.",
      "E": "Tensão total multiplicada pelo coeficiente de empuxo no repouso."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A carga que você joga no chão (tensão total) é suportada pelos grãos de terra (tensão efetiva) e pela água que tá no meio deles (poropressão). Logo, o que os grãos realmente aguentam é o total menos a água.",
      "puloDoGato": "Tensão Efetiva (σ') = Tensão Total (σ) - Poropressão (u).",
      "cascasDeBanana": {
        "A": "A poropressão diminui a tensão efetiva, não soma.",
        "D": "A pressão neutra é a própria poropressão, não tem relação com o dobro.",
        "B": "Tensão efetiva é tensão normal, não cisalhante.",
        "E": "O coeficiente de empuxo relaciona tensões verticais e horizontais, não define tensão efetiva global."
      },
      "dicaDeOuro": "Se o nível d'água sobe, a poropressão aumenta e a tensão efetiva diminui. O solo fica mais 'fraco'."
    }
  },
  {
    "id": "q_f4_202",
    "discipline": "Geotecnia e Fundações",
    "topic": "Classificação dos Solos",
    "statement": "No Sistema Unificado de Classificação de Solos (SUCS), uma argila inorgânica de alta plasticidade é representada por qual símbolo?",
    "options": {
      "A": "MH",
      "B": "OH",
      "C": "ML",
      "D": "CL",
      "E": "CH"
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A letrinha da esquerda diz o material: C (Clay = Argila), M (Silt/Silt = Silte), S (Sand = Areia), G (Gravel = Pedregulho). A letra da direita diz o detalhe: H (High = Alta plasticidade) ou L (Low = Baixa).",
      "puloDoGato": "Argila (Clay = C) + Alta Plasticidade (High = H) = CH.",
      "cascasDeBanana": {
        "D": "CL é argila de baixa plasticidade (Low).",
        "A": "MH é silte de alta plasticidade.",
        "C": "ML é silte de baixa plasticidade.",
        "B": "OH é argila orgânica de alta plasticidade (O = Organic)."
      },
      "dicaDeOuro": "Para classificar como argila ou silte no SUCS, mais de 50% do material deve passar na peneira 200 (fração fina)."
    }
  },
  {
    "id": "q_f4_203",
    "discipline": "Geotecnia e Fundações",
    "topic": "Capacidade de Carga",
    "statement": "A fórmula geral de Terzaghi para capacidade de carga de sapatas rasas possui três parcelas. O que a terceira parcela (que contém o peso específico do solo e a largura da sapata) representa fisicamente?",
    "options": {
      "A": "A resistência de ponta da estaca.",
      "B": "A contribuição do peso da cunha de solo sob a base da fundação.",
      "C": "O efeito do lençol freático na base.",
      "D": "A contribuição da coesão do solo.",
      "E": "A resistência ao cisalhamento devido à sobrecarga lateral."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A fórmula de Terzaghi soma três coisas que 'seguram' a sapata: o grude da terra (coesão), a terra que está do lado (sobrecarga) e o peso da própria terra espremida debaixo dela (termo do peso próprio).",
      "puloDoGato": "Termo do peso específico (γ) e largura (B) = Atrito e peso do solo sob a sapata.",
      "cascasDeBanana": {
        "D": "A coesão é a primeira parcela (c * Nc).",
        "E": "A sobrecarga lateral é a segunda parcela (q * Nq).",
        "C": "O lençol freático altera o peso específico nas fórmulas, não é uma parcela isolada.",
        "A": "A fórmula é para fundações rasas, não estacas."
      },
      "dicaDeOuro": "A largura da sapata (B) só influencia a capacidade de carga em solos granulares (areia). Em argilas puras, B não afeta a tensão de ruptura."
    }
  },
  {
    "id": "q_f4_204",
    "discipline": "Geotecnia e Fundações",
    "topic": "Estabilidade de Taludes",
    "statement": "O método de Fellenius e o método de Bishop Simplificado são usados para análise de estabilidade de taludes. Ambos baseiam-se na divisão da massa deslizante em fatias. Qual a principal diferença teórica entre eles?",
    "options": {
      "A": "Fellenius é aplicável apenas a solos rochosos.",
      "B": "Fellenius considera a variação do lençol freático e Bishop não.",
      "C": "Bishop assume superfície de ruptura retilínea e Fellenius circular.",
      "D": "Fellenius ignora as forças entre as fatias, enquanto Bishop considera as forças horizontais entre elas.",
      "E": "Bishop é um método de equilíbrio limite, enquanto Fellenius usa elementos finitos."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Quando a gente corta o barranco em fatias virtuais para calcular, o método de Fellenius finge que uma fatia não empurra a outra (ignora as forças entre elas). Já o método de Bishop é mais esperto e considera o empurrão horizontal.",
      "puloDoGato": "Fellenius = Ignora forças inter-fatias (mais conservador/simples). Bishop = Considera empuxo horizontal entre fatias.",
      "cascasDeBanana": {
        "A": "Ambos são para solos.",
        "C": "Ambos assumem superfícies predominantemente circulares.",
        "E": "Ambos são métodos de equilíbrio limite.",
        "B": "Ambos podem considerar o lençol freático usando tensões efetivas."
      },
      "dicaDeOuro": "Por ignorar as forças inter-fatias, Fellenius geralmente subestima o Fator de Segurança (é mais 'medroso' e conservador que Bishop)."
    }
  },
  {
    "id": "q_f4_205",
    "discipline": "Geotecnia e Fundações",
    "topic": "Compactação de Solos",
    "statement": "No controle de compactação de aterros, busca-se atingir o Peso Específico Aparente Seco Máximo (γd_max). A umidade correspondente a este ponto máximo na curva de compactação é denominada:",
    "options": {
      "A": "Umidade de saturação.",
      "B": "Limite de Plasticidade.",
      "C": "Limite de Liquidez.",
      "D": "Umidade de contração.",
      "E": "Umidade ótima."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Pense em fazer um castelo de areia. Se a areia estiver muito seca, esfarela. Se tiver muita água, vira lama. Existe a quantidade 'perfeita' de água para a areia ficar mais compacta e firme. Essa é a umidade ótima.",
      "puloDoGato": "Curva de Proctor: Pico do gráfico = Umidade Ótima e Densidade Máxima.",
      "cascasDeBanana": {
        "A": "Na saturação o solo não compacta bem, a água incompressível atrapalha os grãos de se juntarem.",
        "C": "Limite de Liquidez é estado de consistência, limite entre plástico e líquido.",
        "B": "Limite de Plasticidade é fronteira entre sólido e plástico.",
        "D": "Umidade de contração é quando o solo para de encolher ao secar."
      },
      "dicaDeOuro": "Aumentar a energia de compactação (ex: rolo mais pesado) aumenta o γd_max e DIMINUI a umidade ótima."
    }
  },
  {
    "id": "q_f4_206",
    "discipline": "Geotecnia e Fundações",
    "topic": "Fundações Profundas - Tubulões",
    "statement": "O tubulão a ar comprimido é uma fundação profunda utilizada em situações onde há presença de água e risco de desmoronamento. Qual é o limite legal de pressão de trabalho para o operário na base (tubulão hiperbárico) no Brasil?",
    "options": {
      "A": "0,5 atm.",
      "B": "5,0 atm.",
      "C": "2,0 atm.",
      "D": "1,0 atm.",
      "E": "3,4 atm."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Para a água não invadir a escavação, injeta-se ar comprimido. Mas o trabalhador lá embaixo não suporta pressão infinita. Por norma, no Brasil, o limite é 3,4 atmosferas.",
      "puloDoGato": "Tubulão a ar comprimido = limite máximo de pressão de 3,4 atm.",
      "cascasDeBanana": {
        "A": "0,5 atm é muito baixo, não segura a maioria dos lençóis.",
        "D": "1 atm é praticamente a pressão atmosférica normal.",
        "C": "2 atm é suportável, mas não é o limite máximo legal.",
        "B": "5 atm seria letal para descompressão sem câmara hiperbárica complexa."
      },
      "dicaDeOuro": "Como 1 atm equivale a cerca de 10 metros de coluna d'água, a profundidade máxima de um tubulão a ar comprimido é limitada a pouco mais de 30 metros sob o lençol freático."
    }
  },
  {
    "id": "q_f4_207",
    "discipline": "Geotecnia e Fundações",
    "topic": "Empuxo de Terra",
    "statement": "O empuxo de terra contra um muro de arrimo pode ser calculado considerando diferentes estados de tensão. O estado ativo de Rankine ocorre quando:",
    "options": {
      "A": "O muro permanece perfeitamente rígido e imóvel.",
      "B": "O lençol freático atinge a crista do muro.",
      "C": "O muro sofre uma leve translação afastando-se do solo retido.",
      "D": "Há fluxo de água por baixo da base do muro.",
      "E": "O muro se desloca contra o solo, comprimindo-o."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Imagine que o solo está empurrando o muro. Se o muro ceder um pouquinho pra frente (se afastar da terra), o solo 'relaxa' e a força que ele faz diminui pro valor mínimo possível. Esse é o estado ativo.",
      "puloDoGato": "Muro se afasta do solo = Empuxo Ativo (mínimo). Muro vai contra o solo = Empuxo Passivo (máximo).",
      "cascasDeBanana": {
        "E": "Se o muro for contra o solo, comprime-o e gera o empuxo PASSIVO (maior).",
        "A": "Se não há movimento, é o empuxo em REPOUSO.",
        "B": "O lençol aumenta a pressão, mas não define o estado ativo/passivo.",
        "D": "Fluxo causa percolação, mas estado ativo depende do movimento do muro."
      },
      "dicaDeOuro": "Basta um deslocamento minúsculo (frações de milímetro) na crista de um muro de concreto para que o solo passe do repouso para o estado ativo."
    }
  },
  {
    "id": "q_f4_208",
    "discipline": "Planejamento e Orçamento",
    "topic": "Curva S",
    "statement": "No acompanhamento de obras, a Curva S é uma ferramenta amplamente utilizada. O que o eixo Y e o eixo X de um gráfico clássico de Curva S representam, respectivamente?",
    "options": {
      "A": "Eixo Y: Produtividade; Eixo X: BDI acumulado.",
      "B": "Eixo Y: Caminho Crítico; Eixo X: Tempo.",
      "C": "Eixo Y: Custo Acumulado ou Percentual Físico; Eixo X: Tempo.",
      "D": "Eixo Y: Custos Unitários; Eixo X: Tarefas do Projeto.",
      "E": "Eixo Y: Quantidade de Funcionários; Eixo X: Desembolso."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A curva tem forma de S porque a obra começa devagar (gasta pouco), acelera no meio (gasta muito, a curva sobe íngreme) e desacelera no acabamento (a curva deita). Ela mostra o que acumula no tempo.",
      "puloDoGato": "Curva S = Acumulado (Físico ou Financeiro) ao longo do TEMPO.",
      "cascasDeBanana": {
        "D": "Não mostra custos por tarefa discretos e sim a evolução acumulada.",
        "E": "O tempo é o fator principal da evolução, não o desembolso no eixo x.",
        "B": "Caminho crítico é visto em Rede PERT/CPM, não em Curva S.",
        "A": "Produtividade não é plotada no Y acumulado geralmente."
      },
      "dicaDeOuro": "Comparar a Curva S Planejada com a Curva S Realizada (o que de fato gastou/andou) é a melhor forma rápida de ver se a obra está atrasada."
    }
  },
  {
    "id": "q_f4_209",
    "discipline": "Planejamento e Orçamento",
    "topic": "PERT / CPM - Caminho Crítico",
    "statement": "O Caminho Crítico em uma rede PERT/CPM é definido como a sequência de atividades que:",
    "options": {
      "A": "Possui o menor custo global para o projeto.",
      "B": "Envolve as atividades mais perigosas (maior risco de segurança).",
      "C": "Não possui folga, determinando o tempo total do projeto.",
      "D": "Pode sofrer atrasos sem alterar a data final da obra.",
      "E": "Possui a maior quantidade de recursos alocados."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Se uma atividade do Caminho Crítico atrasar um dia, a obra inteira atrasa um dia. Eles são o 'gargalo' do tempo. Não tem folga (margem de atraso).",
      "puloDoGato": "Caminho Crítico = Atividades com Folga Zero = Define o Prazo Total da Obra.",
      "cascasDeBanana": {
        "A": "Tempo e custo são diferentes; o caminho crítico refere-se apenas ao tempo.",
        "B": "Pode haver atividades curtas e baratas que estão no caminho crítico por serem pré-requisitos essenciais.",
        "C": "",
        "D": "Se não pode sofrer atraso, não tem folga. As atividades que PODEM atrasar estão FORA do caminho crítico.",
        "E": "Crítico na gestão de tempo, não na segurança do trabalho."
      },
      "dicaDeOuro": "A folga total de uma atividade é o tempo que ela pode atrasar sem impactar o fim da obra. Folga livre é o que pode atrasar sem afetar a atividade sucessora."
    }
  },
  {
    "id": "q_f4_210",
    "discipline": "Planejamento e Orçamento",
    "topic": "BDI - Cálculo",
    "statement": "Na fórmula clássica do BDI para obras públicas, a taxa de Lucro (L) é inserida na fórmula de que maneira em relação à taxa de Impostos (I)?",
    "options": {
      "A": "Ambos ficam no denominador, somados e subtraídos de 1.",
      "B": "Ambos ficam no numerador multiplicados pelas Despesas Indiretas.",
      "C": "O Lucro fica no denominador e os Impostos no numerador.",
      "D": "No numerador, somando-se à taxa de Impostos.",
      "E": "No numerador (na forma de 1+L), enquanto os impostos vão no denominador subtraídos de 1."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A fórmula do BDI é uma fração. Em cima (numerador), a gente coloca as despesas indiretas, riscos e o Lucro (1+L). Embaixo (denominador), a gente coloca os impostos na forma (1 - I) para garantir que eles sejam cobrados sobre o preço final de venda.",
      "puloDoGato": "Fórmula do BDI: O bloco de Impostos fica em baixo dividindo (1 - I). O Lucro fica em cima multiplicando (1 + L).",
      "cascasDeBanana": {
        "D": "Se os impostos somassem no numerador, não calculariam corretamente sobre o faturamento.",
        "A": "Se o lucro for pro denominador, ele atuaria como margem sobre faturamento em vez de mark-up.",
        "B": "Os impostos precisam estar no denominador.",
        "C": "É o contrário."
      },
      "dicaDeOuro": "Lembre da matemática financeira básica: se você quer embutir um imposto que incide sobre a nota fiscal cheia, você deve dividir o custo direto por (1 - Taxa). Por isso os impostos (ISS, PIS, COFINS) ficam no denominador do BDI."
    }
  },
  {
    "id": "q_f4_211",
    "discipline": "Planejamento e Orçamento",
    "topic": "Composição de Custo Unitário",
    "statement": "Em uma Composição de Custo Unitário (CPU) de serviço (ex: 1 m³ de concreto), o que representam os Índices ou Coeficientes de Consumo multiplicados pelo preço unitário do insumo?",
    "options": {
      "A": "A quantidade necessária daquele insumo para produzir uma unidade do serviço.",
      "B": "O valor da mão de obra sem encargos.",
      "C": "A perda percentual inevitável do material na obra (desperdício).",
      "D": "A correção monetária a ser aplicada sobre o insumo.",
      "E": "O lucro que a empresa terá na compra do material."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O índice de consumo é literalmente 'quanto eu preciso'. Se para fazer 1 m³ de concreto eu preciso de 350 kg de cimento, o coeficiente do cimento na tabela será 350. Você multiplica 350 pelo preço do quilo.",
      "puloDoGato": "Coeficiente de Consumo = Quantidade usada para fazer 1 unidade do serviço (incluindo perdas normais).",
      "cascasDeBanana": {
        "B": "Mão de obra também tem coeficiente (horas), mas o conceito geral não é o 'valor sem encargos'.",
        "E": "Lucro entra no BDI, não na composição direta.",
        "C": "O coeficiente JÁ EMBUTE a perda, mas ele representa o TOTAL comprado para gerar uma unidade, não apenas a perda.",
        "D": "Correção é assunto financeiro (reajuste)."
      },
      "dicaDeOuro": "A Tabela SINAPI (CAIXA) é o banco de dados oficial brasileiro que fornece essas composições e coeficientes de produtividade para orçamentos públicos."
    }
  },
  {
    "id": "q_f4_212",
    "discipline": "Planejamento e Orçamento",
    "topic": "Cronograma Físico-Financeiro",
    "statement": "Um Cronograma Físico-Financeiro integra o planejamento temporal da obra com o seu fluxo de caixa. Nele, os valores financeiros distribuídos nos meses baseiam-se:",
    "options": {
      "A": "Nas datas de vencimento dos boletos dos fornecedores.",
      "B": "Nos percentuais físicos de execução previstos para cada serviço multiplicado pelo seu preço total orçado.",
      "C": "Exclusivamente nos custos de mão de obra mensais, já que material é pago à vista.",
      "D": "Na receita prevista com a venda do imóvel após o Habite-se.",
      "E": "Na divisão igualitária do valor total da obra pelos meses de duração."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "É simples: se a fundação custa R$ 100 mil no total, e em Janeiro eu prevejo concluir 30% dela (físico), eu lanço no cronograma que em Janeiro haverá um desembolso/medição de R$ 30 mil (financeiro).",
      "puloDoGato": "Cronograma Físico-Financeiro = (Avance da obra em %) x (Preço do Serviço).",
      "cascasDeBanana": {
        "A": "O cronograma lida com apropriação e faturamento (medições), não a microgestão de boletos.",
        "D": "Essa seria uma análise de viabilidade imobiliária.",
        "C": "Materiais, equipamentos e BDI estão incluídos no preço distribuído.",
        "E": "A obra quase nunca avança igualitariamente todos os meses (vide a Curva S)."
      },
      "dicaDeOuro": "Em obras públicas federais, o construtor só recebe o dinheiro APÓS executar a etapa prevista no cronograma físico-financeiro (procedimento chamado de Medição)."
    }
  },
  {
    "id": "q_f4_300",
    "discipline": "Construção Civil e Materiais",
    "topic": "Tecnologia do Concreto",
    "statement": "A relação água/cimento (a/c) é o fator que mais influencia as propriedades do concreto endurecido. Ao aumentar a relação a/c de um traço, mantendo os demais parâmetros constantes, qual é o efeito principal esperado?",
    "options": {
      "A": "Diminuição da trabalhabilidade e aumento da coesão da mistura.",
      "B": "Aumento da porosidade e diminuição da resistência mecânica.",
      "C": "Aumento significativo da resistência à compressão axial.",
      "D": "Aceleração do tempo de pega do cimento.",
      "E": "Diminuição do índice de retração por secagem."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A água serve para hidratar o cimento e dar moleza pra mistura. Mas a água que sobra depois da hidratação vai evaporar e deixar 'buracos' (poros) no concreto. Mais poros = concreto mais fraco e menos durável.",
      "puloDoGato": "Mais água (Relação a/c alta) = Mais poros = Menor resistência = Menor durabilidade = Maior retração.",
      "cascasDeBanana": {
        "C": "A resistência diminui, não aumenta (Lei de Abrams).",
        "A": "A trabalhabilidade aumenta (fica mais fluido), não diminui.",
        "D": "O tempo de pega não é acelerado por excesso de água; pode até retardar um pouco ou gerar exsudação.",
        "E": "A retração aumenta, pois haverá mais água livre para evaporar."
      },
      "dicaDeOuro": "A Lei de Abrams estabelece que a resistência à compressão do concreto é inversamente proporcional à relação água/cimento."
    }
  },
  {
    "id": "q_f4_301",
    "discipline": "Construção Civil e Materiais",
    "topic": "Patologia das Estruturas",
    "statement": "A carbonatação é um fenômeno patológico grave em estruturas de concreto armado. Ele ocorre quando o CO2 do ar reage com a pasta de cimento. Qual é a consequência direta da carbonatação para o aço da armadura?",
    "options": {
      "A": "Altera a estrutura cristalina do aço, tornando-o frágil como ferro fundido.",
      "B": "Aumenta a ductilidade do aço, facilitando o escoamento.",
      "C": "Reduz o pH do concreto, despassivando o aço e iniciando a corrosão.",
      "D": "Expande o volume do aço, causando o destacamento imediato do cobrimento.",
      "E": "Gera correntes galvânicas que protegem catodicamente a armadura."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O concreto normal é super básico (pH alto), o que cria uma película que protege o aço de enferrujar (camada passivadora). O CO2 do ar reage com o concreto e 'azeda' ele, baixando o pH. Sem o pH alto, a proteção do aço some, e ele começa a enferrujar.",
      "puloDoGato": "Carbonatação = CO2 baixa o pH do concreto = Aço perde proteção (despassivação) = Corrosão.",
      "cascasDeBanana": {
        "A": "Não altera as propriedades mecânicas do aço virgem.",
        "B": "A corrosão é um processo eletroquímico, mas a carbonatação não 'protege' nada, ela destrói a proteção natural.",
        "C": "",
        "D": "O que expande o volume é a ferrugem (óxido de ferro) DEPOIS que a corrosão avança, não a carbonatação em si.",
        "E": "A carbonatação afeta o ambiente ao redor do aço, não muda o material aço em si antes da corrosão."
      },
      "dicaDeOuro": "Para prevenir a carbonatação, o projeto deve especificar um cobrimento adequado (mais espesso) e um concreto de baixa porosidade (baixa relação a/c)."
    }
  },
  {
    "id": "q_f4_302",
    "discipline": "Construção Civil e Materiais",
    "topic": "Materiais Cerâmicos",
    "statement": "No recebimento de blocos cerâmicos para alvenaria de vedação na obra, um dos ensaios exigidos por norma é a verificação do desvio de esquadro e da planeza das faces. Qual a principal consequência prática caso sejam aceitos blocos com elevado desvio de esquadro?",
    "options": {
      "A": "Reação álcali-agregado acelerada na interface bloco-argamassa.",
      "B": "Aumento no consumo de argamassa de assentamento e de revestimento (reboco).",
      "C": "Impossibilidade de utilizar grauteamento nas instalações elétricas.",
      "D": "Redução drástica na resistência à compressão da parede.",
      "E": "Incompatibilidade química com tintas látex PVA."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Se o tijolo for torto, o pedreiro vai ter que compensar essa tortura engrossando a massa (argamassa) tanto para assentar quanto para rebocar a parede depois. É puro desperdício de material caro.",
      "puloDoGato": "Bloco torto (fora do esquadro/planeza) = Parede torta = Maior gasto com argamassa para consertar (prumo e reboco).",
      "cascasDeBanana": {
        "A": "Para alvenaria de *vedação*, a resistência à compressão do bloco não é o fator mais crítico (quem suporta a carga é a estrutura de concreto).",
        "B": "",
        "C": "Reação álcali-agregado ocorre no concreto, entre o álcali do cimento e a sílica do agregado, não tem a ver com tijolo torto.",
        "D": "Tinta vai sobre a massa corrida/reboco, não liga pro formato do bloco.",
        "E": "Alvenaria de vedação normalmente não leva graute estrutural."
      },
      "dicaDeOuro": "A espessura ideal do revestimento (emboço/reboco) é de 1,5 a 2,0 cm. Blocos irregulares podem forçar revestimentos de 4 ou 5 cm, o que além de caro, pode causar trincas por retração e queda."
    }
  },
  {
    "id": "q_f4_303",
    "discipline": "Construção Civil e Materiais",
    "topic": "Aglomerantes",
    "statement": "O gesso é um aglomerante aéreo muito utilizado na construção civil, especialmente em revestimentos internos. Uma de suas características marcantes durante o processo de endurecimento (pega) é:",
    "options": {
      "A": "A leve expansão volumétrica e a liberação de calor (reação exotérmica).",
      "B": "O ganho de resistência contínuo quando submerso em água.",
      "C": "A ocorrência de forte retração volumétrica, exigindo juntas de dilatação a cada metro.",
      "D": "A coloração escura devido à presença de escória de alto forno.",
      "E": "A necessidade de cura úmida por pelo menos 7 dias."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Diferente do cimento que 'encolhe' um pouquinho ao secar, o gesso dá uma leve 'inchada' (expande) e esquenta quando você mistura com água e ele começa a endurecer. Essa expansão é ótima porque faz o gesso preencher todos os cantinhos do molde.",
      "puloDoGato": "Pega do Gesso = Expansão Volumétrica + Reação Exotérmica (Esquenta).",
      "cascasDeBanana": {
        "C": "Ele expande, não retrai fortemente a ponto de rasgar.",
        "B": "Gesso é aglomerante AÉREO. Ele derrete/enfraquece se ficar debaixo d'água.",
        "E": "Gesso não precisa de cura úmida; seca ao ar.",
        "D": "Gesso é branco/amarelado (sulfato de cálcio), não leva escória (típico de cimento CP-III)."
      },
      "dicaDeOuro": "É proibido usar gesso como argamassa de assentamento de blocos de concreto estrutural e em áreas molhadas (banheiros/fachadas), pois ele é solúvel em água."
    }
  },
  {
    "id": "q_f4_304",
    "discipline": "Construção Civil e Materiais",
    "topic": "Ensaios de Materiais",
    "statement": "O ensaio de tração do aço para armadura de concreto fornece um gráfico tensão-deformação. O ponto em que o material deixa de apresentar deformação reversível e passa a sofrer deformação plástica permanente é chamado de:",
    "options": {
      "A": "Limite de escoamento.",
      "B": "Ponto de estricção.",
      "C": "Módulo de resiliência.",
      "D": "Tensão última de ruptura.",
      "E": "Limite de fadiga."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Pense numa mola. Se você puxa um pouco e solta, ela volta (fase elástica). Se puxar demais, ela deforma pra sempre e fica esticada. O limite exato onde ela para de voltar é o limite de escoamento.",
      "puloDoGato": "Fim do regime elástico + Início do plástico (deformação permanente) = Limite de Escoamento (fy).",
      "cascasDeBanana": {
        "C": "Resiliência é a energia absorvida na fase elástica.",
        "D": "Ruptura é quando o aço arrebenta (tensão máxima/final).",
        "E": "Fadiga ocorre com ciclos repetitivos de carga.",
        "B": "Estricção é o 'afinamento' visível da barra pouco antes de romper."
      },
      "dicaDeOuro": "No projeto de estruturas de concreto (NBR 6118), utilizamos a resistência ao escoamento (fyk) do aço, e não a tensão de ruptura. O aço CA-50, por exemplo, tem fyk = 500 MPa."
    }
  },
  {
    "id": "q_f4_305",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Mecânica dos Fluidos",
    "statement": "A Equação de Bernoulli expressa a conservação de energia em um fluido ideal em escoamento incompressível. Ela é composta por três termos de carga (ou energia). São eles:",
    "options": {
      "A": "Carga viscosa, carga de cisalhamento e carga hidrostática.",
      "B": "Carga de atrito, carga térmica e carga de velocidade.",
      "C": "Energia interna, energia de superfície e carga de pressão.",
      "D": "Carga de pressão, carga cinética e carga de posição (ou elevação).",
      "E": "Carga manométrica, carga de sucção e carga de recalque."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A energia de uma partícula de água viajando num cano depende de 3 coisas: a altura em que ela está (posição), a velocidade que ela tá correndo (cinética) e a pressão da água empurrando ela (pressão).",
      "puloDoGato": "Equação de Bernoulli = Altura (z) + Velocidade (v²/2g) + Pressão (P/γ).",
      "cascasDeBanana": {
        "B": "Térmica não entra na Bernoulli clássica.",
        "A": "Bernoulli ideal ignora a viscosidade.",
        "C": "Termodinâmica, não mecânica dos fluidos incompressíveis clássica.",
        "E": "Termos usados para dimensionar bombas, mas não são as parcelas fundamentais da energia da partícula."
      },
      "dicaDeOuro": "A Equação de Bernoulli teórica (ideal) diz que a soma dessas 3 energias é constante. Na vida real (escoamento real), sempre há perda de carga devido ao atrito."
    }
  },
  {
    "id": "q_f4_306",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Condutos Forçados",
    "statement": "Em um sistema de abastecimento de água, as perdas de carga localizadas ocorrem devido a:",
    "options": {
      "A": "Alterações na direção ou seção do escoamento, como em curvas, registros e reduções.",
      "B": "Variação brusca da temperatura da água ao passar pela tubulação.",
      "C": "Variação da rugosidade do tubo com o passar dos anos (envelhecimento).",
      "D": "Diferença de cota altimétrica entre o reservatório e o ponto de consumo.",
      "E": "Atrito contínuo do fluido com as paredes retas do tubo ao longo de todo o seu comprimento."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A água perde energia por dois motivos principais: arrastando na parede do cano ao longo do caminho (perda distribuída) e 'trombando' nas conexões, como curvas, cotovelos e válvulas (perda localizada).",
      "puloDoGato": "Perda Distribuída = Atrito no tubo reto. Perda Localizada = Peças e conexões (curvas, registros).",
      "cascasDeBanana": {
        "E": "Isso define a perda de carga DISTRIBUÍDA (fórmula de Hazen-Williams ou Universal).",
        "C": "Afeta a perda distribuída.",
        "D": "Diferença de cota é energia potencial, não gera perda de carga por si só.",
        "B": "Temperatura altera viscosidade (Reynolds), afetando a perda distribuída, não sendo a definição de perda localizada."
      },
      "dicaDeOuro": "Para simplificar cálculos em redes prediais, é comum converter as perdas localizadas (conexões) em 'comprimentos equivalentes' de tubo reto."
    }
  },
  {
    "id": "q_f4_307",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Bombas Centrífugas",
    "statement": "A cavitação em bombas centrífugas é um fenômeno altamente destrutivo, caracterizado pela formação e colapso de bolhas de vapor dentro da bomba. Para evitar a cavitação, o projetista deve garantir que:",
    "options": {
      "A": "A bomba opere em uma rotação (RPM) muito acima da nominal.",
      "B": "A altura manométrica total de recalque seja minimizada.",
      "C": "O diâmetro da tubulação de sucção seja estrangulado por uma válvula de gaveta.",
      "D": "O fluido seja aquecido antes de entrar na sucção da bomba.",
      "E": "O NPSH disponível no sistema seja maior que o NPSH requerido pela bomba."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Cavitação acontece quando a água 'ferve' a frio na entrada da bomba porque a pressão ali caiu demais. Para evitar isso, a pressão da água chegando (NPSH disponível) tem que ser maior que o mínimo que a bomba precisa para não dar bolhas (NPSH requerido).",
      "puloDoGato": "Evitar Cavitação: NPSH_disponível > NPSH_requerido.",
      "cascasDeBanana": {
        "B": "A cavitação é um problema da SUCÇÃO (entrada), não do recalque (saída).",
        "A": "Girar mais rápido puxa a água mais forte, piorando a queda de pressão e facilitando a cavitação.",
        "C": "Estrangular a sucção causa perda de carga brutal, baixando a pressão e causando cavitação instantânea (nunca coloque registro sem necessidade na sucção).",
        "D": "Água quente ferve mais fácil, o que PIORA o risco de cavitação."
      },
      "dicaDeOuro": "Dicas práticas contra cavitação: aumentar o diâmetro do tubo de sucção, evitar curvas na sucção e colocar a bomba o mais baixo possível (afogada)."
    }
  },
  {
    "id": "q_f4_308",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Tratamento de Esgoto",
    "statement": "O processo de lodos ativados é amplamente empregado em Estações de Tratamento de Esgoto (ETE). Qual é o objetivo principal da unidade de aeração neste sistema?",
    "options": {
      "A": "Decantar o lodo primário por gravidade sem agitação.",
      "B": "Adicionar produtos químicos coagulantes para flocular partículas em suspensão.",
      "C": "Desinfectar o efluente final matando patógenos antes do descarte.",
      "D": "Fornecer oxigênio aos microrganismos aeróbios para que estes degradem a matéria orgânica dissolvida.",
      "E": "Remover sólidos grosseiros através do peneiramento."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "No lodo ativado, o esgoto vira um banquete para bactérias do bem. Mas essas bactérias precisam respirar para trabalhar (comer a sujeira). A unidade de aeração é basicamente um 'borbulhador' gigante que injeta ar na água para elas não morrerem sufocadas.",
      "puloDoGato": "Lodos Ativados (Aeração) = Fornecer oxigênio para as bactérias aeróbias comerem a matéria orgânica.",
      "cascasDeBanana": {
        "E": "Isso é feito na fase de pré-tratamento (gradeamento).",
        "A": "Isso ocorre nos decantadores primários e secundários (fase quieta, sem ar).",
        "B": "Coagulação é tratamento físico-químico, usado em ETA (água), raramente no cerne de ETE biológica clássica.",
        "C": "Desinfecção (cloro ou UV) é a etapa final, lá na ponta."
      },
      "dicaDeOuro": "No sistema de lodos ativados, parte do lodo que decanta no final é 'bombeada de volta' pro tanque de aeração para manter a população de bactérias alta e faminta. Daí o nome lodo 'ativado'."
    }
  },
  {
    "id": "q_final_5016",
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Treliças - Esforços",
    "statement": "Em uma treliça isostática ideal, quais são os únicos tipos de esforços internos que as barras podem suportar?",
    "options": {
      "A": "Tração e Compressão apenas.",
      "B": "Cisalhamento puro.",
      "C": "Flexão e Cisalhamento.",
      "D": "Torção e Flexão.",
      "E": "Momento Fletor e Carga Axial."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em treliças ideais, as cargas são aplicadas nos nós e as barras são articuladas. Isso faz com que elas trabalhem apenas com carga axial (puxando ou empurrando).",
      "puloDoGato": "Barras de treliça não 'dobram', elas apenas esticam ou encurtam.",
      "cascasDeBanana": {
        "C": "Isso é característico de vigas.",
        "E": "Vigas e pórticos lidam com momento."
      },
      "dicaDeOuro": "Se uma barra de treliça estiver sujeita a flexão, ela provavelmente está mal dimensionada ou a carga foi aplicada fora do nó."
    }
  },
  {
    "id": "q_final_5017",
    "discipline": "Geotecnia e Fundações",
    "topic": "Ensaios de Campo - SPT",
    "statement": "No ensaio SPT (Standard Penetration Test), o valor N representa o quê?",
    "options": {
      "A": "O diâmetro da estaca.",
      "B": "O número de golpes necessários para cravar os últimos 30 cm do amostrador (de um total de 45 cm).",
      "C": "A porcentagem de argila no solo.",
      "D": "A profundidade total do furo.",
      "E": "A umidade natural do solo."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O N-SPT é a medida de resistência do solo. Bate-se 15cm, depois mais 15cm e mais 15cm. Soma-se os golpes dos últimos 30cm.",
      "puloDoGato": "Quanto maior o N, mais resistente é o solo.",
      "cascasDeBanana": {
        "A": "Confusão com a cota do ensaio.",
        "B": "",
        "C": "Medida em laboratório.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Cuidado: solos com N baixo (muito moles) podem exigir fundações profundas."
    }
  },
  {
    "id": "q_final_5018",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Escoamento em Condutos Forçados",
    "statement": "A perda de carga distribuída em uma tubulação é diretamente proporcional a qual característica do fluido e da tubulação?",
    "options": {
      "A": "Ao inverso do diâmetro apenas.",
      "B": "Ao quadrado da velocidade e ao comprimento do tubo.",
      "C": "Ao logaritmo do volume.",
      "D": "À pressão atmosférica.",
      "E": "À temperatura da água."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fórmula de Darcy-Weisbach: hf = f * (L/D) * (v²/2g). O comprimento (L) e o quadrado da velocidade (v²) aumentam a perda.",
      "puloDoGato": "Se você dobrar a velocidade, a perda de carga quadruplica!",
      "cascasDeBanana": {
        "A": "A perda é inversamente proporcional ao diâmetro, mas não é a única variável.",
        "D": "Pressão externa não afeta a perda interna distribuída."
      },
      "dicaDeOuro": "Tubos mais rugosos (f maior) também aumentam a perda de carga."
    }
  },
  {
    "id": "q_final_5019",
    "discipline": "Construção Civil e Materiais",
    "topic": "Concreto Armado - Cobrimento",
    "statement": "Qual a finalidade principal do 'cobrimento' das armaduras no concreto armado?",
    "options": {
      "A": "Aumentar o peso da estrutura.",
      "B": "Economizar cimento.",
      "C": "Substituir o uso de estribos.",
      "D": "Deixar a superfície do concreto mais lisa para pintura.",
      "E": "Garantir a proteção das barras de aço contra a corrosão e garantir a aderência aço-concreto."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O concreto protege o aço do ambiente externo (umidade, cloretos). Se o cobrimento for muito fino, o aço enferruja, expande e estoura o concreto (delaminação).",
      "puloDoGato": "Ambientes mais agressivos (beira-mar) exigem cobrimentos maiores (ex: 4cm ou 5cm).",
      "cascasDeBanana": {
        "D": "Estética é secundária aqui.",
        "B": "Pelo contrário, exige mais concreto."
      },
      "dicaDeOuro": "A NBR 6118 define os valores mínimos de cobrimento conforme a classe de agressividade ambiental."
    }
  },
  {
    "id": "q_final_5020",
    "discipline": "Planejamento e Orçamento",
    "topic": "Curva S",
    "statement": "Em planejamento de obras, o que a 'Curva S' representa visualmente?",
    "options": {
      "A": "O desenho da fundação do prédio.",
      "B": "A evolução acumulada do custo ou do progresso físico do projeto ao longo do tempo.",
      "C": "A variação da temperatura durante a obra.",
      "D": "A quantidade de funcionários demitidos.",
      "E": "O nível de ruído no canteiro."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Chama-se Curva S porque o projeto começa lento (planejamento), acelera no meio (execução) e desacelera no fim (acabamento/entrega).",
      "puloDoGato": "Se a curva real estiver abaixo da planejada, a obra está atrasada ou gastando menos que o previsto.",
      "cascasDeBanana": {
        "A": "Irracional.",
        "B": "",
        "C": "Desenho técnico.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "A curva S é a principal ferramenta para monitorar o desvio de cronograma e orçamento (Análise do Valor Agregado)."
    }
  },
  {
    "id": "q_final_5021",
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Vigas - Momento Fletor",
    "statement": "Em uma viga bi-apoiada com carga uniformemente distribuída (q), onde ocorre o momento fletor máximo?",
    "options": {
      "A": "Em nenhum lugar, o momento é constante.",
      "B": "Nos apoios das extremidades.",
      "C": "No centro do vão.",
      "D": "Onde o esforço cortante é máximo.",
      "E": "A um terço de distância de cada apoio."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O momento fletor máximo em uma viga bi-apoiada com carga distribuída é qL²/8 e ocorre exatamente no meio do vão.",
      "puloDoGato": "Nos apoios simples de uma viga bi-apoiada, o momento fletor é sempre zero.",
      "cascasDeBanana": {
        "B": "Nos apoios o momento é zero.",
        "D": "Invertido: onde o momento é máximo, o cortante é zero."
      },
      "dicaDeOuro": "Vigas engastadas têm momentos máximos nos apoios, cuidado para não confundir os tipos de vínculo."
    }
  },
  {
    "id": "q_final_5022",
    "discipline": "Geotecnia e Fundações",
    "topic": "Muros de Arrimo - Empuxo",
    "statement": "O empuxo de terra 'Ativo' ocorre quando:",
    "options": {
      "A": "Não há movimento algum do muro.",
      "B": "O muro é construído abaixo do nível do mar.",
      "C": "O solo está perfeitamente seco.",
      "D": "O muro se move em direção ao solo (comprimindo-o).",
      "E": "O muro se afasta do solo (permitindo sua expansão)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Ativo = O solo 'empurra' o muro para fora. Passivo = O muro 'empurra' o solo (ex: âncora). Repouso = Sem movimento.",
      "puloDoGato": "O empuxo ativo é menor que o empuxo em repouso, que é menor que o passivo.",
      "cascasDeBanana": {
        "D": "Isso é Empuxo Passivo.",
        "A": "Isso é Empuxo em Repouso."
      },
      "dicaDeOuro": "O cálculo do empuxo depende do ângulo de atrito interno do solo e do peso específico."
    }
  },
  {
    "id": "q_final_5023",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Sistemas de Esgoto - Sifão",
    "statement": "Qual a função do fecho hídrico (sifão) nas instalações prediais de esgoto?",
    "options": {
      "A": "Aquecer a água do banho.",
      "B": "Filtrar os resíduos sólidos antes que cheguem à rua.",
      "C": "Impedir a passagem de gases e odores provenientes da rede de esgoto para o interior da edificação.",
      "D": "Economizar água potável.",
      "E": "Aumentar a pressão da água na descarga."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A água parada dentro do 'U' do sifão cria uma barreira física que o cheiro ruim do esgoto não consegue atravessar.",
      "puloDoGato": "Se o sifão secar (por falta de uso ou evaporação), o mau cheiro vai entrar na casa.",
      "cascasDeBanana": {
        "E": "Sifão causa perda de carga, diminuindo a pressão.",
        "B": "Isso é papel de caixas de gordura ou tratamento."
      },
      "dicaDeOuro": "Ventilação da rede de esgoto é essencial para evitar que o sifão seja 'esvaziado' por sucção."
    }
  },
  {
    "id": "q_final_5024",
    "discipline": "Construção Civil e Materiais",
    "topic": "Agregados - Granulometria",
    "statement": "O que define o 'Diâmetro Máximo Característico' de um agregado?",
    "options": {
      "A": "A densidade do agregado dividida pelo volume.",
      "B": "A profundidade da britadeira.",
      "C": "A abertura da peneira onde o agregado apresenta uma porcentagem retida acumulada igual ou imediatamente inferior a 5% em massa.",
      "D": "A média do tamanho de todas as pedras.",
      "E": "O tamanho da maior pedra encontrada no lote."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Não é a maior pedra, mas sim um limite estatístico. É a peneira onde quase tudo passa.",
      "puloDoGato": "Agregados graúdos (brita 1, 2) têm diâmetros maiores que os miúdos (areia).",
      "cascasDeBanana": {
        "D": "Média não é usada para diâmetro máximo.",
        "E": "Pode ser um erro pontual."
      },
      "dicaDeOuro": "O diâmetro máximo do agregado limita o espaçamento entre as barras de aço no concreto."
    }
  },
  {
    "id": "q_final_5025",
    "discipline": "Planejamento e Orçamento",
    "topic": "BDI",
    "statement": "O que significa a sigla BDI em orçamentos de obras e o que ela compõe?",
    "options": {
      "A": "Benefícios e Despesas Indiretas; compõe lucros, impostos e custos administrativos da sede.",
      "B": "Baixo Desempenho Inicial; indica atrasos no canteiro.",
      "C": "Base de Dados de Insumos; é o preço do cimento.",
      "D": "Balanço de Dados Internos; compõe a lista de materiais.",
      "E": "Benefício de Desconto Imediato; é o lucro do fornecedor."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O BDI é a 'taxa' que você aplica sobre o custo direto da obra para cobrir o que não está no canteiro (escritório central, engenheiro, lucro e impostos).",
      "puloDoGato": "Preço de Venda = Custo Direto * (1 + BDI).",
      "cascasDeBanana": {
        "A": "",
        "B": "Isso seria o orçamento direto.",
        "C": "",
        "D": "SINAPI é uma base de insumos, não o BDI.",
        "E": ""
      },
      "dicaDeOuro": "Um BDI mal calculado pode fazer uma empresa ter prejuízo mesmo executando a obra dentro do custo previsto."
    }
  },
  {
    "id": "q_final_5026",
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Tensões - Lei de Hooke",
    "statement": "A Lei de Hooke estabelece que, dentro do regime elástico de um material, a tensão (σ) é:",
    "options": {
      "A": "Sempre constante.",
      "B": "Nula.",
      "C": "Igual ao peso do material.",
      "D": "Proporcional à deformação (ε), sendo a constante de proporcionalidade o Módulo de Elasticidade (E).",
      "E": "Independente da força aplicada."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fórmula clássica: σ = E * ε. É o gráfico da linha reta. Se você solta a carga, o material volta ao tamanho original.",
      "puloDoGato": "Se ultrapassar o limite elástico, o material entra em regime plástico (deformação permanente).",
      "cascasDeBanana": {
        "A": "A tensão aumenta conforme a carga aumenta.",
        "B": "Só se não houver carga."
      },
      "dicaDeOuro": "O Módulo de Elasticidade (E) mede a 'rigidez' do material. O aço tem um E muito maior que o concreto."
    }
  },
  {
    "id": "q_final_5027",
    "discipline": "Geotecnia e Fundações",
    "topic": "Solos - Limites de Atterberg",
    "statement": "O Limite de Plasticidade (LP) define a transição entre quais estados de consistência do solo?",
    "options": {
      "A": "Sólido e Líquido.",
      "B": "Seco e Úmido.",
      "C": "Rochoso e Arenoso.",
      "D": "Semi-sólido e Plástico.",
      "E": "Líquido e Plástico."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Os limites medem a influência da água no solo argiloso. Limite de Liquidez (LL) é entre líquido e plástico. Limite de Plasticidade (LP) é entre plástico e semi-sólido.",
      "puloDoGato": "Índice de Plasticidade (IP) = LL - LP.",
      "cascasDeBanana": {
        "E": "Isso é o Limite de Liquidez (LL).",
        "A": "Estados extremos."
      },
      "dicaDeOuro": "Solos com IP alto são muito plásticos (presença de muita argila)."
    }
  },
  {
    "id": "q_final_5028",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Tratamento de Água - Coagulação",
    "statement": "No tratamento de água (ETA), qual o objetivo da adição de sulfato de alumínio ou cloreto férrico na fase de coagulação?",
    "options": {
      "A": "Aumentar a transparência da água instantaneamente.",
      "B": "Substituir a necessidade de filtros de areia.",
      "C": "Desestabilizar as partículas de sujeira (coloides), permitindo que elas se agrupem em flocos maiores.",
      "D": "Matar as bactérias (desinfecção).",
      "E": "Dar sabor à água."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "As partículas de sujeira são tão pequenas que não afundam sozinhas. O coagulante 'tira a repelência' delas, fazendo com que se grudem e fiquem pesadas o suficiente para afundar na decantação.",
      "puloDoGato": "Coagulação -> Floculação -> Decantação -> Filtração -> Desinfecção.",
      "cascasDeBanana": {
        "D": "Isso é feito pelo Cloro.",
        "A": "A água continua turva até a decantação/filtração."
      },
      "dicaDeOuro": "O controle do pH é fundamental para que a coagulação ocorra de forma eficiente."
    }
  },
  {
    "id": "q_final_5029",
    "discipline": "Construção Civil e Materiais",
    "topic": "Madeira - Anisotropia",
    "statement": "A madeira é considerada um material anisotrópico. O que isso significa?",
    "options": {
      "A": "Que ela apodrece facilmente com a água.",
      "B": "Que ela é um material sintético.",
      "C": "Que ela é resistente ao fogo.",
      "D": "Que suas propriedades mecânicas (como resistência) variam de acordo com a direção das fibras.",
      "E": "Que ela possui a mesma resistência em todas as direções."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A madeira é muito forte no sentido das fibras (como um feixe de canudos) e muito fraca no sentido transversal (esmagamento).",
      "puloDoGato": "Anisotrópico = Propriedades diferentes em direções diferentes. Isotrópico = Propriedades iguais (como o aço).",
      "cascasDeBanana": {
        "E": "Isso seria um material Isotrópico.",
        "B": "A madeira é natural."
      },
      "dicaDeOuro": "O projeto de estruturas de madeira deve sempre levar em conta a direção da carga em relação às fibras."
    }
  },
  {
    "id": "q_final_5030",
    "discipline": "Planejamento e Orçamento",
    "topic": "Caminho Crítico (CPM)",
    "statement": "Em um cronograma de obra (PERT/CPM), o que define uma atividade como pertencente ao 'Caminho Crítico'?",
    "options": {
      "A": "É uma atividade que possui folga zero; qualquer atraso nela atrasa o término total da obra.",
      "B": "É a atividade que envolve mais riscos de acidentes.",
      "C": "É a primeira atividade a ser realizada.",
      "D": "É a atividade que o dono da obra considera mais importante.",
      "E": "É a atividade mais cara da obra."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O caminho crítico é a sequência de tarefas que 'manda' na data de entrega. Se a pintura é crítica e atrasa 1 dia, a entrega do prédio atrasa 1 dia. Se a limpeza do jardim tem folga, ela pode atrasar sem afetar o final.",
      "puloDoGato": "Caminho Crítico = Maior duração total / Folga zero.",
      "cascasDeBanana": {
        "E": "Custo não define caminho crítico.",
        "D": "Importância subjetiva não afeta a matemática do cronograma."
      },
      "dicaDeOuro": "Gerenciar o caminho crítico é a prioridade número 1 de qualquer gerente de projetos."
    }
  },
  {
    "id": "q_auto_7119",
    "discipline": "Geotecnia e Fundações",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é 'Recalque Diferencial'?",
    "options": {
      "A": "Uma técnica de compactação.",
      "B": "A pressão da água nos poros.",
      "C": "Aumento do volume do solo.",
      "D": "O afundamento de uma parte da fundação mais do que outra, causando tensões, fissuras e possível colapso da estrutura.",
      "E": "O afundamento uniforme de toda a estrutura."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o que deixa prédios 'tortos', como em Santos. É muito mais perigoso que o recalque uniforme.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7120",
    "discipline": "Construção Civil e Materiais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Para que serve o ensaio de 'Slump Test' (Abatimento do Tronco de Cone)?",
    "options": {
      "A": "Medir a resistência à compressão do concreto endurecido.",
      "B": "Pesar a areia.",
      "C": "Medir a temperatura do cimento.",
      "D": "Avaliar a trabalhabilidade e a consistência do concreto fresco.",
      "E": "Verificar a espessura da laje."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Slump Test mede se o concreto está 'mole' o suficiente para ser lançado nas fôrmas, mas não tão aguado que perca a resistência.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7121",
    "discipline": "Construção Civil e Materiais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Para que serve o ensaio de 'Slump Test' (Abatimento do Tronco de Cone)? (Variante 1)",
    "options": {
      "A": "Pesar a areia.",
      "B": "Avaliar a trabalhabilidade e a consistência do concreto fresco.",
      "C": "Medir a resistência à compressão do concreto endurecido.",
      "D": "Medir a temperatura do cimento.",
      "E": "Verificar a espessura da laje."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Slump Test mede se o concreto está 'mole' o suficiente para ser lançado nas fôrmas, mas não tão aguado que perca a resistência.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7122",
    "discipline": "Construção Civil e Materiais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Para que serve o ensaio de 'Slump Test' (Abatimento do Tronco de Cone)? (Variante 2)",
    "options": {
      "A": "Medir a temperatura do cimento.",
      "B": "Verificar a espessura da laje.",
      "C": "Medir a resistência à compressão do concreto endurecido.",
      "D": "Pesar a areia.",
      "E": "Avaliar a trabalhabilidade e a consistência do concreto fresco."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Slump Test mede se o concreto está 'mole' o suficiente para ser lançado nas fôrmas, mas não tão aguado que perca a resistência.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7123",
    "discipline": "Construção Civil e Materiais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Para que serve o ensaio de 'Slump Test' (Abatimento do Tronco de Cone)? (Variante 3)",
    "options": {
      "A": "Avaliar a trabalhabilidade e a consistência do concreto fresco.",
      "B": "Medir a resistência à compressão do concreto endurecido.",
      "C": "Medir a temperatura do cimento.",
      "D": "Verificar a espessura da laje.",
      "E": "Pesar a areia."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Slump Test mede se o concreto está 'mole' o suficiente para ser lançado nas fôrmas, mas não tão aguado que perca a resistência.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7124",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade?",
    "options": {
      "A": "Otimista + Pessimista.",
      "B": "Média simples.",
      "C": "(Otimista + 4*Provável + Pessimista) / 6",
      "D": "Apenas o tempo mais provável.",
      "E": "Depende do orçamento."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7125",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 1)",
    "options": {
      "A": "(Otimista + 4*Provável + Pessimista) / 6",
      "B": "Depende do orçamento.",
      "C": "Apenas o tempo mais provável.",
      "D": "Otimista + Pessimista.",
      "E": "Média simples."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7126",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 2)",
    "options": {
      "A": "Depende do orçamento.",
      "B": "Otimista + Pessimista.",
      "C": "Média simples.",
      "D": "Apenas o tempo mais provável.",
      "E": "(Otimista + 4*Provável + Pessimista) / 6"
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7127",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 3)",
    "options": {
      "A": "Depende do orçamento.",
      "B": "(Otimista + 4*Provável + Pessimista) / 6",
      "C": "Otimista + Pessimista.",
      "D": "Apenas o tempo mais provável.",
      "E": "Média simples."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7128",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 4)",
    "options": {
      "A": "Depende do orçamento.",
      "B": "Otimista + Pessimista.",
      "C": "Média simples.",
      "D": "Apenas o tempo mais provável.",
      "E": "(Otimista + 4*Provável + Pessimista) / 6"
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7129",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V2",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 5)",
    "options": {
      "A": "Média simples.",
      "B": "(Otimista + 4*Provável + Pessimista) / 6",
      "C": "Apenas o tempo mais provável.",
      "D": "Otimista + Pessimista.",
      "E": "Depende do orçamento."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7130",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V2",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 6)",
    "options": {
      "A": "Depende do orçamento.",
      "B": "(Otimista + 4*Provável + Pessimista) / 6",
      "C": "Média simples.",
      "D": "Otimista + Pessimista.",
      "E": "Apenas o tempo mais provável."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7131",
    "discipline": "Planejamento e Orçamento",
    "topic": "Conceitos e Práticas V2",
    "statement": "No cronograma PERT, como é calculada a duração esperada de uma atividade? (Variante 7)",
    "options": {
      "A": "Apenas o tempo mais provável.",
      "B": "(Otimista + 4*Provável + Pessimista) / 6",
      "C": "Média simples.",
      "D": "Otimista + Pessimista.",
      "E": "Depende do orçamento."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A média ponderada dá um peso muito maior ao cenário provável (peso 4).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_lote5_1_8000",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Topografia - Nivelamento",
    "statement": "O nivelamento geométrico é o método mais preciso de nivelamento em topografia. Qual instrumento é essencialmente utilizado para esta operação?",
    "options": {
      "A": "Teodolito.",
      "B": "Nível óptico (ou eletrônico) e mira falante.",
      "C": "Estação Total.",
      "D": "GPS de navegação.",
      "E": "Bússola."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O nivelamento geométrico baseia-se na criação de um plano visual horizontal rigoroso usando o Nível e lendo as réguas verticais (miras).",
      "puloDoGato": "Nivelamento Geométrico = Nível + Mira.",
      "cascasDeBanana": {
        "A": "Teodolito mede ângulos (usado no nivelamento trigonométrico).",
        "C": "Faz tudo, mas o nível óptico é o equipamento clássico e específico para nivelamento geométrico."
      },
      "dicaDeOuro": "Diferença de nível = Leitura de Ré - Leitura de Vante."
    }
  },
  {
    "id": "q_lote5_1_8001",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Topografia - Rumos e Azimutes",
    "statement": "O Azimute de um alinhamento é o ângulo horizontal medido:",
    "options": {
      "A": "A partir da linha do Equador.",
      "B": "A partir do meridiano de Greenwich para o Oeste.",
      "C": "No sentido anti-horário a partir do Leste.",
      "D": "A partir do Norte ou do Sul, para Leste ou Oeste, variando de 0° a 90°.",
      "E": "A partir do Norte, no sentido horário, variando de 0° a 360°."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Azimute é a 'bússola completa' de 360 graus rodando para a direita a partir do Norte.",
      "puloDoGato": "Azimute = 0 a 360 (Norte p/ Direita). Rumo = 0 a 90 (N/S p/ L/O).",
      "cascasDeBanana": {
        "D": "Esta é a definição exata de Rumo."
      },
      "dicaDeOuro": "Saber converter Rumo em Azimute é questão certa em provas de topografia."
    }
  },
  {
    "id": "q_lote5_1_8002",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Topografia - Curvas de Nível",
    "statement": "Em uma planta topográfica, curvas de nível muito próximas umas das outras indicam:",
    "options": {
      "A": "Terreno muito inclinado (íngreme).",
      "B": "Erro na medição.",
      "C": "Solo rochoso.",
      "D": "Presença de rios subterrâneos.",
      "E": "Terreno muito plano."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A curva de nível é uma 'fatia' do morro. Se as fatias estão espremidas no papel, significa que você sobe muita altura andando pouca distância na horizontal, ou seja, um barranco/pirambeira.",
      "puloDoGato": "Curvas próximas = Declividade alta. Curvas afastadas = Terreno plano.",
      "cascasDeBanana": {
        "E": "Em terreno plano as curvas são muito distantes."
      },
      "dicaDeOuro": "Curvas de nível nunca se cruzam, exceto em casos raríssimos de cavernas ou tetos rochosos pendentes."
    }
  },
  {
    "id": "q_lote5_1_8003",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Topografia - Escalas",
    "statement": "Se uma estrada possui 5 km na realidade, qual será o seu comprimento em um mapa na escala 1:50.000?",
    "options": {
      "A": "1 metro",
      "B": "50 cm",
      "C": "10 cm",
      "D": "5 cm",
      "E": "1 cm"
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "1:50.000 significa que 1 cm no mapa = 50.000 cm no real (ou 500 metros). 5 km = 5.000 metros. 5.000 / 500 = 10 cm.",
      "puloDoGato": "Corte os zeros! 1 cm no mapa (1:50.000) = 0,5 km no real. Logo, 5 km = 10 cm.",
      "cascasDeBanana": {
        "A": "",
        "B": "Erro de conversão de unidades.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Fórmula da escala: Escala = Desenho / Realidade (E = d/D)."
    }
  },
  {
    "id": "q_lote5_1_8004",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Estradas - Elementos Geométricos",
    "statement": "Em uma curva horizontal circular de uma rodovia, a superelevação serve para:",
    "options": {
      "A": "Reduzir o custo do asfalto.",
      "B": "Aumentar a velocidade do vento lateral.",
      "C": "Evitar o acúmulo de água da chuva no centro da pista.",
      "D": "Melhorar a visibilidade de placas.",
      "E": "Contrabalançar o efeito da força centrífuga sobre os veículos, evitando derrapagens e tombamentos."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sabe quando você vê corrida da Nascar (Daytona) e a pista é inclinada na curva? Isso é superelevação. Ela empurra o carro 'para dentro' da curva, ajudando o pneu a vencer a força centrífuga.",
      "puloDoGato": "Superelevação = Inclinação transversal na curva (combate força centrífuga).",
      "cascasDeBanana": {
        "C": "Abaulamento (ou caimento transversal) na reta serve para escoar água."
      },
      "dicaDeOuro": "O raio mínimo da curva depende da velocidade diretriz e da superelevação máxima permitida."
    }
  },
  {
    "id": "q_lote5_1_8005",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Pavimentação - Tipos de Pavimento",
    "statement": "Qual a principal diferença estrutural entre um pavimento flexível (asfalto) e um pavimento rígido (concreto)?",
    "options": {
      "A": "O flexível não suporta tráfego de caminhões.",
      "B": "O rígido não precisa de manutenção nunca.",
      "C": "Não há diferença na distribuição de carga.",
      "D": "O flexível distribui as tensões em camadas mais profundas (deformando-se); o rígido distribui a carga por uma área muito maior devido à alta rigidez da placa de concreto.",
      "E": "O rígido absorve a carga pontualmente e deforma; o flexível distribui a carga por uma grande área da placa."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No asfalto (flexível), o pneu 'afunda' um pouco e a carga passa pra brita, areia e solo. No concreto (rígido), a placa é tão dura que ela mesma espalha o peso do caminhão por vários metros quadrados, aliviando o solo embaixo.",
      "puloDoGato": "Rígido = Alta rigidez, carga bem espalhada. Flexível = Carga concentrada repassada às camadas de base.",
      "cascasDeBanana": {
        "E": "Inverteu os conceitos."
      },
      "dicaDeOuro": "Pavimentos rígidos possuem juntas de dilatação fundamentais para evitar fissuras por temperatura."
    }
  },
  {
    "id": "q_lote5_1_8006",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Pavimentação - Camadas",
    "statement": "Em um pavimento flexível clássico, qual a ordem correta das camadas, de baixo para cima?",
    "options": {
      "A": "Revestimento, Subleito, Base, Sub-base.",
      "B": "Base, Subleito, Revestimento, Sub-base.",
      "C": "Revestimento, Base, Sub-base, Subleito.",
      "D": "Sub-base, Base, Subleito, Revestimento.",
      "E": "Subleito, Sub-base, Base, Revestimento."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sobe do chão nativo pro pneu do carro: Subleito (a terra), Sub-base (brita grossa), Base (brita fina/brita graduada) e Revestimento (Asfalto/CBUQ).",
      "puloDoGato": "Ordem: Solo nativo -> Sub-base -> Base -> Asfalto.",
      "cascasDeBanana": {
        "C": "Ordem invertida (de cima pra baixo)."
      },
      "dicaDeOuro": "Cada camada de cima deve ter um material de melhor qualidade (e mais caro) que a de baixo, pois as tensões são maiores na superfície."
    }
  },
  {
    "id": "q_lote5_1_8007",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Estradas - Terraplanagem",
    "statement": "O 'Fator de Empolamento' na terraplanagem refere-se a:",
    "options": {
      "A": "Redução do volume do solo ao secar no sol.",
      "B": "Aumento do volume do solo ao ser escavado devido à introdução de vazios (descompactação).",
      "C": "Aumento da resistência do solo após compactação.",
      "D": "O peso da máquina de rolo compressor.",
      "E": "A quantidade de asfalto gasto por km."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Terra compactada no chão ocupa pouco espaço. Quando você passa a escavadeira e joga no caminhão, ela 'incha' (cria bolsões de ar). 1m³ de terra no chão pode virar 1,3m³ no caminhão. Isso é o empolamento.",
      "puloDoGato": "Empolamento = Aumento de volume (Solo escavado > Solo no corte).",
      "cascasDeBanana": {
        "C": "A compactação causa o efeito inverso (redução de volume/contração)."
      },
      "dicaDeOuro": "Esquecer o empolamento significa contratar menos caminhões basculantes do que o necessário para tirar a terra da obra."
    }
  },
  {
    "id": "q_lote5_1_8008",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Transportes - Nível de Serviço",
    "statement": "No planejamento de sistemas de transporte, o conceito de 'Nível de Serviço' (LOS) mede:",
    "options": {
      "A": "O custo da tarifa do pedágio.",
      "B": "O tamanho dos caminhões permitidos na via.",
      "C": "A qualidade do fluxo de tráfego (medindo velocidade, tempo de viagem, liberdade de manobra e conforto), variando de A (livre) a F (congestionamento severo).",
      "D": "A qualidade do asfalto utilizado.",
      "E": "A beleza estética da rodovia."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "LOS (Level of Service) é a 'nota' que a via recebe do motorista. A é a estrada vazia de madrugada. F é o trânsito parado no horário do rush.",
      "puloDoGato": "LOS = Nota de Qualidade do Trânsito (A a F).",
      "cascasDeBanana": {
        "A": "O asfalto é o Índice de Serventia (IRI), não Nível de Serviço.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O HCM (Highway Capacity Manual) é o principal guia para o cálculo de Nível de Serviço."
    }
  },
  {
    "id": "q_lote5_1_8009",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Pavimentação - Asfalto",
    "statement": "O CBUQ (Concreto Betuminoso Usinado a Quente) é o tipo de revestimento asfáltico mais comum no Brasil. Qual sua principal característica de produção?",
    "options": {
      "A": "É misturado com água gelada para esfriar mais rápido.",
      "B": "Não utiliza agregados graúdos.",
      "C": "Leva cimento Portland em sua composição principal.",
      "D": "É aplicado como uma tinta fria por cima do solo natural.",
      "E": "Os agregados e o ligante asfáltico são aquecidos a altas temperaturas na usina antes da mistura para garantir a secagem dos agregados e a fluidez do ligante."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O piche (CAP) é sólido em temperatura ambiente. Para misturar ele nas pedras (agregados), você tem que ferver os dois (mais de 150 graus). Por isso é 'Usinado a Quente'.",
      "puloDoGato": "CBUQ = Asfalto quente (aquecido para dar liga).",
      "cascasDeBanana": {
        "C": "Cimento Portland é usado em pavimento rígido, não em asfalto (betume)."
      },
      "dicaDeOuro": "O CBUQ deve ser aplicado e compactado na pista ainda quente; se esfriar, ele endurece no caminhão e a obra é perdida."
    }
  },
  {
    "id": "q_lote5_1_8010",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 11",
    "statement": "Tema complementar 11 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "B": "Priorizar apenas a velocidade de carros particulares.",
      "C": "Usar apenas vias de terra.",
      "D": "Remover calçadas.",
      "E": "Ignorar a topografia."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "B": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8011",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 12",
    "statement": "Tema complementar 12 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Priorizar apenas a velocidade de carros particulares.",
      "B": "Remover calçadas.",
      "C": "Ignorar a topografia.",
      "D": "Usar apenas vias de terra.",
      "E": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "A": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8012",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 13",
    "statement": "Tema complementar 13 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Ignorar a topografia.",
      "B": "Priorizar apenas a velocidade de carros particulares.",
      "C": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "D": "Remover calçadas.",
      "E": "Usar apenas vias de terra."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "B": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8013",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 14",
    "statement": "Tema complementar 14 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "B": "Remover calçadas.",
      "C": "Priorizar apenas a velocidade de carros particulares.",
      "D": "Usar apenas vias de terra.",
      "E": "Ignorar a topografia."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "C": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8014",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 15",
    "statement": "Tema complementar 15 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Ignorar a topografia.",
      "B": "Priorizar apenas a velocidade de carros particulares.",
      "C": "Remover calçadas.",
      "D": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "E": "Usar apenas vias de terra."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "B": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8015",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 16",
    "statement": "Tema complementar 16 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Ignorar a topografia.",
      "B": "Usar apenas vias de terra.",
      "C": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "D": "Priorizar apenas a velocidade de carros particulares.",
      "E": "Remover calçadas."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "D": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8016",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 17",
    "statement": "Tema complementar 17 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Usar apenas vias de terra.",
      "B": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "C": "Ignorar a topografia.",
      "D": "Remover calçadas.",
      "E": "Priorizar apenas a velocidade de carros particulares."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "A": "Modelo ultrapassado dos anos 70.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8017",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 18",
    "statement": "Tema complementar 18 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Ignorar a topografia.",
      "B": "Priorizar apenas a velocidade de carros particulares.",
      "C": "Usar apenas vias de terra.",
      "D": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "E": "Remover calçadas."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "B": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8018",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 19",
    "statement": "Tema complementar 19 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Usar apenas vias de terra.",
      "B": "Remover calçadas.",
      "C": "Priorizar apenas a velocidade de carros particulares.",
      "D": "Ignorar a topografia.",
      "E": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "C": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8019",
    "discipline": "Infraestrutura de Transportes e Topografia",
    "topic": "Revisão Geral - Transportes 20",
    "statement": "Tema complementar 20 de Infraestrutura de Transportes. Qual a premissa principal de projeto de vias urbanas?",
    "options": {
      "A": "Remover calçadas.",
      "B": "Ignorar a topografia.",
      "C": "Usar apenas vias de terra.",
      "D": "Focar em mobilidade urbana sustentável, priorizando transporte coletivo e não motorizado.",
      "E": "Priorizar apenas a velocidade de carros particulares."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O planejamento moderno de transportes é voltado às pessoas, não apenas aos veículos.",
      "puloDoGato": "Sustentabilidade é a palavra-chave.",
      "cascasDeBanana": {
        "E": "Modelo ultrapassado dos anos 70."
      },
      "dicaDeOuro": "O Estatuto da Cidade e as Políticas Nacionais de Mobilidade Urbana cobram esse foco."
    }
  },
  {
    "id": "q_lote5_1_8020",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Instalações Hidrossanitárias - Ventilação",
    "statement": "Em instalações prediais de esgoto, qual a função da coluna de ventilação?",
    "options": {
      "A": "Permitir a entrada de gases explosivos no banheiro.",
      "B": "Servir de ralo oculto.",
      "C": "Resfriar a água quente do chuveiro.",
      "D": "Eliminar o mau cheiro da rua.",
      "E": "Proteger os fechos hídricos (sifões) contra rompimento por variações de pressão (sucção ou compressão) na rede de esgoto."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Quando você dá descarga num vaso sanitário num prédio, um 'êmbolo' de água desce no cano puxando o ar atrás dele (sucção). Se não tiver um cano de ar (ventilação) pra equilibrar a pressão, essa sucção chupa a água do sifão da pia e o cheiro do esgoto entra na casa.",
      "puloDoGato": "Ventilação de esgoto = Protege o sifão (fecho hídrico).",
      "cascasDeBanana": {
        "D": "Ela joga os gases da tubulação para o telhado, mas a função mecânica primária é equilibrar a pressão."
      },
      "dicaDeOuro": "O ramal de ventilação deve ser sempre ascendente e terminar acima da cobertura (telhado)."
    }
  },
  {
    "id": "q_lote5_1_8021",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Instalações Hidrossanitárias - Água Fria",
    "statement": "O golpe de aríete em sistemas de abastecimento de água é causado por:",
    "options": {
      "A": "Fechamento repentino de uma válvula ou registro, gerando uma onda de sobrepressão devido à energia cinética da água em movimento.",
      "B": "Falta de pressão no sistema.",
      "C": "Vazamento nas conexões.",
      "D": "Uso de caixas d'água muito grandes.",
      "E": "Falta de cloro na água."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A água na tubulação está correndo rápida. Você fecha a torneira de uma vez. Aquela massa de água 'bate na parede' da torneira fechada, e a energia volta pelo cano, estalando e tremendo tudo. Isso é o golpe de aríete (do carneiro batendo os chifres).",
      "puloDoGato": "Golpe de Aríete = Choque de pressão por fechamento brusco.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "Isso aumentaria a pressão estática, não o golpe.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Válvulas de descarga modernas possuem fechamento lento justamente para minimizar o golpe de aríete."
    }
  },
  {
    "id": "q_lote5_1_8022",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Instalações Elétricas - DR",
    "statement": "Qual a finalidade principal do Dispositivo Diferencial Residual (Interruptor DR) em quadros de luz?",
    "options": {
      "A": "Desligar a energia em caso de curto-circuito.",
      "B": "Aumentar a voltagem para o chuveiro.",
      "C": "Proteger as pessoas contra choques elétricos decorrentes de fugas de corrente para o terra ou contatos diretos.",
      "D": "Reduzir o valor da conta de luz.",
      "E": "Evitar que os aparelhos queimem em caso de raio."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O DR compara a energia que entra com a que sai. Se entrou 10 Amperes e saiu 9,9, significa que 0,1 Ampere vazou (provavelmente pelo corpo de uma criança tomando choque). Ele desarma o circuito na hora para salvar a vida.",
      "puloDoGato": "DR (Diferencial Residual) = Salva vidas contra choque elétrico.",
      "cascasDeBanana": {
        "A": "Isso é função do DPS (Protetor de Surto).",
        "B": "Isso é função do Disjuntor Termomagnético.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Disjuntor normal NÃO protege contra choque, protege apenas o cabo contra derretimento/incêndio."
    }
  },
  {
    "id": "q_lote5_1_8023",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Instalações Elétricas - Condutores",
    "statement": "Nas instalações elétricas de baixa tensão (NBR 5410), a cor do isolamento do condutor de Proteção (Terra) deve ser obrigatoriamente:",
    "options": {
      "A": "Verde-amarelo (ou apenas Verde).",
      "B": "Qualquer cor, não há padronização.",
      "C": "Azul claro.",
      "D": "Branco.",
      "E": "Vermelho ou Preto."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Regra de ouro do eletricista: o fio da 'vida' (terra) é Verde ou Brasileirinho (Verde-Amarelo).",
      "puloDoGato": "Terra = Verde. Neutro = Azul Claro. Fase = Demais cores.",
      "cascasDeBanana": {
        "C": "Azul claro é o Neutro.",
        "E": "Cores de Fase."
      },
      "dicaDeOuro": "Usar a cor errada pode causar acidentes fatais para o próximo eletricista que for dar manutenção."
    }
  },
  {
    "id": "q_lote5_1_8024",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Conforto - Térmico e Acústico",
    "statement": "O conceito de 'Inércia Térmica' em conforto ambiental refere-se a:",
    "options": {
      "A": "A capacidade de uma parede de barrar o som.",
      "B": "O uso de espelhos para refletir o sol.",
      "C": "A capacidade de um material de armazenar calor e atrasar a variação de temperatura no interior do edifício.",
      "D": "A facilidade com que o ar passa pelas janelas.",
      "E": "A impermeabilização da laje."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Igrejas antigas de pedra têm paredes muito grossas. Elas absorvem o calor do sol o dia todo, e o lado de dentro continua fresco. De noite, quando esfria lá fora, a pedra solta o calor para dentro. Isso é inércia térmica.",
      "puloDoGato": "Alta Inércia Térmica = Paredes grossas/densas que atrasam a passagem do calor.",
      "cascasDeBanana": {
        "A": "Isso é isolamento acústico.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Materiais leves (como telhas de zinco) possuem inércia térmica baixíssima (esquenta rápido, esfria rápido)."
    }
  },
  {
    "id": "q_lote5_1_8025",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Segurança - Prevenção contra Incêndios",
    "statement": "Qual equipamento é fundamental para garantir a fuga segura das pessoas em caso de incêndio, fornecendo iluminação caso a energia principal falhe?",
    "options": {
      "A": "Hidrante de parede.",
      "B": "Iluminação de Emergência alimentada por baterias.",
      "C": "Sprinkler.",
      "D": "Extintor de CO2.",
      "E": "Detector de Fumaça."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o prédio pega fogo, a energia elétrica geral costuma ser cortada. As pessoas no corredor escuro entram em pânico. A iluminação de emergência (aquelas luzes e letreiros verdes de 'Saída') tem bateria própria e liga na mesma hora.",
      "puloDoGato": "Iluminação de emergência e Sinalização de rotas de fuga salvam vidas no escuro.",
      "cascasDeBanana": {
        "A": "O extintor combate o fogo, mas não clareia o caminho.",
        "B": "",
        "C": "O Sprinkler joga água.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Escadas de emergência em prédios altos devem ser pressurizadas para que a fumaça não entre nelas."
    }
  },
  {
    "id": "q_lote5_1_8026",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 7",
    "statement": "Tema complementar 7 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Hard Clash (Choque físico).",
      "B": "Falta de argamassa.",
      "C": "Soft Clash.",
      "D": "Deformação plástica.",
      "E": "Erro de cálculo estático."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "",
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8027",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 8",
    "statement": "Tema complementar 8 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Falta de argamassa.",
      "B": "Hard Clash (Choque físico).",
      "C": "Deformação plástica.",
      "D": "Erro de cálculo estático.",
      "E": "Soft Clash."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "E": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8028",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 9",
    "statement": "Tema complementar 9 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Falta de argamassa.",
      "B": "Soft Clash.",
      "C": "Erro de cálculo estático.",
      "D": "Hard Clash (Choque físico).",
      "E": "Deformação plástica."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8029",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 10",
    "statement": "Tema complementar 10 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Falta de argamassa.",
      "B": "Soft Clash.",
      "C": "Deformação plástica.",
      "D": "Hard Clash (Choque físico).",
      "E": "Erro de cálculo estático."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8030",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 11",
    "statement": "Tema complementar 11 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Erro de cálculo estático.",
      "B": "Hard Clash (Choque físico).",
      "C": "Falta de argamassa.",
      "D": "Deformação plástica.",
      "E": "Soft Clash."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "E": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8031",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 12",
    "statement": "Tema complementar 12 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Erro de cálculo estático.",
      "B": "Falta de argamassa.",
      "C": "Soft Clash.",
      "D": "Hard Clash (Choque físico).",
      "E": "Deformação plástica."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "C": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8032",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 13",
    "statement": "Tema complementar 13 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Soft Clash.",
      "B": "Erro de cálculo estático.",
      "C": "Hard Clash (Choque físico).",
      "D": "Falta de argamassa.",
      "E": "Deformação plástica."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8033",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 14",
    "statement": "Tema complementar 14 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Erro de cálculo estático.",
      "B": "Soft Clash.",
      "C": "Deformação plástica.",
      "D": "Falta de argamassa.",
      "E": "Hard Clash (Choque físico)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8034",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 15",
    "statement": "Tema complementar 15 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Soft Clash.",
      "B": "Falta de argamassa.",
      "C": "Deformação plástica.",
      "D": "Hard Clash (Choque físico).",
      "E": "Erro de cálculo estático."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8035",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 16",
    "statement": "Tema complementar 16 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Hard Clash (Choque físico).",
      "B": "Erro de cálculo estático.",
      "C": "Falta de argamassa.",
      "D": "Soft Clash.",
      "E": "Deformação plástica."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "",
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8036",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 17",
    "statement": "Tema complementar 17 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Soft Clash.",
      "B": "Falta de argamassa.",
      "C": "Erro de cálculo estático.",
      "D": "Hard Clash (Choque físico).",
      "E": "Deformação plástica."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8037",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 18",
    "statement": "Tema complementar 18 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Falta de argamassa.",
      "B": "Erro de cálculo estático.",
      "C": "Soft Clash.",
      "D": "Deformação plástica.",
      "E": "Hard Clash (Choque físico)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "C": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8038",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 19",
    "statement": "Tema complementar 19 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Hard Clash (Choque físico).",
      "B": "Falta de argamassa.",
      "C": "Soft Clash.",
      "D": "Erro de cálculo estático.",
      "E": "Deformação plástica."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "A": "",
        "B": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_1_8039",
    "discipline": "Instalações Prediais, Conforto e Segurança",
    "topic": "Revisão Geral - Instalações 20",
    "statement": "Tema complementar 20 de Instalações e Conforto. Em projetos complementares, a compatibilização visa resolver conflitos entre disciplinas. Como é chamada a interferência física entre um tubo de esgoto e uma viga estrutural?",
    "options": {
      "A": "Falta de argamassa.",
      "B": "Deformação plástica.",
      "C": "Erro de cálculo estático.",
      "D": "Soft Clash.",
      "E": "Hard Clash (Choque físico)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Um cano passando exatamente no meio do ferro da viga é um pesadelo na obra (Hard Clash). A ferramenta principal para evitar isso hoje é o BIM.",
      "puloDoGato": "BIM (Building Information Modeling) = Compatibilização 3D antes da obra.",
      "cascasDeBanana": {
        "D": "Soft clash é quando elementos estão muito próximos e atrapalham a manutenção, mas não ocupam o mesmo espaço."
      },
      "dicaDeOuro": "Nunca faça furos em vigas sem autorização do engenheiro calculista."
    }
  },
  {
    "id": "q_lote5_2_8100",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Concreto Armado - Domínios de Deformação",
    "statement": "No dimensionamento de vigas de concreto armado no Estado Limite Último (ELU), em qual domínio de deformação ocorre a ruptura frágil (sem aviso prévio) por esmagamento do concreto, sem que o aço atinja o escoamento?",
    "options": {
      "A": "Domínio 3.",
      "B": "Domínio 1.",
      "C": "Domínio 2.",
      "D": "Domínio 5.",
      "E": "Domínio 4."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No Domínio 4, a viga tem muito aço (superarmada). O aço é tão forte que não cede, então quem 'quebra' primeiro é o concreto em cima. A viga não avisa que vai cair (não trinca em baixo), ela simplesmente explode.",
      "puloDoGato": "Domínio 4 = Superarmada = Ruptura Frágil.",
      "cascasDeBanana": {
        "A": "O Domínio 3 é o ideal (concreto esmaga e aço escoa simultaneamente, com aviso prévio)."
      },
      "dicaDeOuro": "Norma exige que projetemos no Domínio 2 ou 3 para garantir dutilidade (aviso prévio de ruína)."
    }
  },
  {
    "id": "q_lote5_2_8101",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Concreto Armado - Fissuração",
    "statement": "A fissuração em peças de concreto armado é considerada um fenômeno:",
    "options": {
      "A": "Inaceitável em qualquer situação, devendo a estrutura ser demolida caso ocorra.",
      "B": "Causado exclusivamente por excesso de cimento na mistura.",
      "C": "Normal e inerente ao material, desde que a abertura das fissuras seja controlada e limitada aos valores normativos para não expor a armadura à corrosão.",
      "D": "Que aumenta a resistência da viga.",
      "E": "Raro, ocorrendo apenas em pontes."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O concreto armado SÓ FUNCIONA se fissurar. O concreto não aguenta tração, então ele fissura em baixo para passar a 'força de puxar' para as barras de aço. O limite da NBR 6118 é geralmente entre 0,2 mm e 0,4 mm de abertura.",
      "puloDoGato": "Fissuração é esperada. O importante é o controle da abertura.",
      "cascasDeBanana": {
        "A": "Leigos acham que qualquer trinca é perigo, mas as microfissuras de flexão são o estado natural da viga trabalhando."
      },
      "dicaDeOuro": "O controle de fissuração se dá colocando mais barras de menor diâmetro ao invés de poucas barras grossas."
    }
  },
  {
    "id": "q_lote5_2_8102",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Concreto Protendido - Pré-tração vs Pós-tração",
    "statement": "Qual a principal diferença entre o concreto protendido com pré-tração (fios aderentes) e o com pós-tração (cordoalhas)?",
    "options": {
      "A": "A pré-tração só é feita em pontes estaiadas.",
      "B": "Não há diferença no processo executivo.",
      "C": "Na pré-tração não se usa aço, apenas fibras de vidro.",
      "D": "A pós-tração é muito mais fraca.",
      "E": "Na pré-tração, os cabos são esticados ANTES da concretagem (comum em pré-moldados); na pós-tração, os cabos são esticados APÓS o endurecimento do concreto (comum em lajes feitas na obra)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pré-tração: Você estica o fio na fábrica, joga o concreto por cima, espera secar e corta o fio (o fio tenta encolher e aperta o concreto). Pós-tração: Você joga o concreto com um 'canudo' dentro. Depois que seca, passa o cabo, estica e trava.",
      "puloDoGato": "Pré-tração = Tensão antes da concretagem. Pós-tração = Tensão após a cura.",
      "cascasDeBanana": {
        "D": "Ambos são sistemas estruturais fortíssimos."
      },
      "dicaDeOuro": "Lajes nervuradas de shoppings quase sempre usam pós-tração com cordoalhas engraxadas."
    }
  },
  {
    "id": "q_lote5_2_8103",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Estruturas de Aço - Flambagem",
    "statement": "Em pilares (perfis) de aço submetidos a compressão axial, o fenômeno da flambagem está intimamente ligado a qual propriedade geométrica da seção transversal?",
    "options": {
      "A": "Momento de Inércia.",
      "B": "Índice de Esbeltez (que depende do raio de giração e comprimento de flambagem).",
      "C": "Comprimento do perfil apenas.",
      "D": "Área transversal pura.",
      "E": "Módulo de Elasticidade do aço apenas."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pegue uma régua de plástico fina e comprida e aperte as duas pontas. Ela vai 'dobrar a barriga'. Isso é flambagem. Quanto mais fina e comprida (esbelta), mais fácil flambar. O aço é fortíssimo, mas por fazer peças finas, ele sofre muito com isso.",
      "puloDoGato": "Flambagem = Risco em peças esbeltas sob compressão.",
      "cascasDeBanana": {
        "A": "O Momento de Inércia compõe o Raio de Giração, mas o Índice de Esbeltez é a propriedade direta que define o risco de flambagem."
      },
      "dicaDeOuro": "Para evitar flambagem em vigas de aço (flambagem lateral com torção - FLT), usam-se travamentos laterais."
    }
  },
  {
    "id": "q_lote5_2_8104",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 5",
    "statement": "Tema complementar 5 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Não usar aço nas obras.",
      "B": "Considerar que o concreto resiste muito bem à tração.",
      "C": "Usar sempre o método das tensões admissíveis.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "C": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8105",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 6",
    "statement": "Tema complementar 6 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Não usar aço nas obras.",
      "B": "Usar sempre o método das tensões admissíveis.",
      "C": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "D": "Considerar que o concreto resiste muito bem à tração.",
      "E": "Trabalhar com as cargas exatas medidas na obra."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "B": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8106",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 7",
    "statement": "Tema complementar 7 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Usar sempre o método das tensões admissíveis.",
      "B": "Não usar aço nas obras.",
      "C": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "D": "Considerar que o concreto resiste muito bem à tração.",
      "E": "Trabalhar com as cargas exatas medidas na obra."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "A": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8107",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 8",
    "statement": "Tema complementar 8 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Não usar aço nas obras.",
      "B": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "C": "Considerar que o concreto resiste muito bem à tração.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Usar sempre o método das tensões admissíveis."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8108",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 9",
    "statement": "Tema complementar 9 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Não usar aço nas obras.",
      "B": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "C": "Usar sempre o método das tensões admissíveis.",
      "D": "Considerar que o concreto resiste muito bem à tração.",
      "E": "Trabalhar com as cargas exatas medidas na obra."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8109",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 10",
    "statement": "Tema complementar 10 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Considerar que o concreto resiste muito bem à tração.",
      "B": "Usar sempre o método das tensões admissíveis.",
      "C": "Não usar aço nas obras.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "B": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8110",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 11",
    "statement": "Tema complementar 11 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Trabalhar com as cargas exatas medidas na obra.",
      "B": "Não usar aço nas obras.",
      "C": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "D": "Usar sempre o método das tensões admissíveis.",
      "E": "Considerar que o concreto resiste muito bem à tração."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "D": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8111",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 12",
    "statement": "Tema complementar 12 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Trabalhar com as cargas exatas medidas na obra.",
      "B": "Considerar que o concreto resiste muito bem à tração.",
      "C": "Usar sempre o método das tensões admissíveis.",
      "D": "Não usar aço nas obras.",
      "E": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "C": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8112",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 13",
    "statement": "Tema complementar 13 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Não usar aço nas obras.",
      "B": "Considerar que o concreto resiste muito bem à tração.",
      "C": "Usar sempre o método das tensões admissíveis.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "C": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8113",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 14",
    "statement": "Tema complementar 14 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Trabalhar com as cargas exatas medidas na obra.",
      "B": "Usar sempre o método das tensões admissíveis.",
      "C": "Não usar aço nas obras.",
      "D": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "E": "Considerar que o concreto resiste muito bem à tração."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "B": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8114",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 15",
    "statement": "Tema complementar 15 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "B": "Considerar que o concreto resiste muito bem à tração.",
      "C": "Trabalhar com as cargas exatas medidas na obra.",
      "D": "Não usar aço nas obras.",
      "E": "Usar sempre o método das tensões admissíveis."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "E": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8115",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 16",
    "statement": "Tema complementar 16 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Trabalhar com as cargas exatas medidas na obra.",
      "B": "Considerar que o concreto resiste muito bem à tração.",
      "C": "Não usar aço nas obras.",
      "D": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "E": "Usar sempre o método das tensões admissíveis."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "E": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8116",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 17",
    "statement": "Tema complementar 17 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "B": "Não usar aço nas obras.",
      "C": "Considerar que o concreto resiste muito bem à tração.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Usar sempre o método das tensões admissíveis."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "E": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8117",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 18",
    "statement": "Tema complementar 18 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "B": "Usar sempre o método das tensões admissíveis.",
      "C": "Considerar que o concreto resiste muito bem à tração.",
      "D": "Trabalhar com as cargas exatas medidas na obra.",
      "E": "Não usar aço nas obras."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "B": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8118",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 19",
    "statement": "Tema complementar 19 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Considerar que o concreto resiste muito bem à tração.",
      "B": "Trabalhar com as cargas exatas medidas na obra.",
      "C": "Não usar aço nas obras.",
      "D": "Usar sempre o método das tensões admissíveis.",
      "E": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "D": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8119",
    "discipline": "Análise e Dimensionamento de Estruturas",
    "topic": "Revisão Geral - Estruturas 20",
    "statement": "Tema complementar 20 de Análise de Estruturas. Qual conceito é fundamental para o método dos Estados Limites (NBR 6118 / NBR 8800)?",
    "options": {
      "A": "Majoração (aumento) das cargas esperadas e minoração (redução) das resistências dos materiais através de coeficientes de segurança.",
      "B": "Não usar aço nas obras.",
      "C": "Trabalhar com as cargas exatas medidas na obra.",
      "D": "Usar sempre o método das tensões admissíveis.",
      "E": "Considerar que o concreto resiste muito bem à tração."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Você projeta a casa imaginando que os moradores são mais gordos do que realmente são (aumenta a carga), e imagina que o cimento veio um pouco mais fraco da usina (diminui a resistência). Esse 'pessimismo' garante que o prédio não caia.",
      "puloDoGato": "Estados Limites = Coeficientes parciais de segurança.",
      "cascasDeBanana": {
        "D": "Tensões Admissíveis é um método antigo, hoje quase obsoleto em grandes normas estruturais."
      },
      "dicaDeOuro": "Coeficiente padrão de minoração do concreto (gama_c) é 1.4. Do aço (gama_s) é 1.15."
    }
  },
  {
    "id": "q_lote5_2_8120",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Hidrologia - Tempo de Retorno",
    "statement": "No dimensionamento de galerias de águas pluviais, o que significa um 'Tempo de Retorno' (Tr) de 50 anos para uma chuva de projeto?",
    "options": {
      "A": "Que essa chuva dura exatos 50 anos.",
      "B": "Que choverá todos os dias por 50 anos.",
      "C": "Que só chove a cada 50 anos.",
      "D": "Que a probabilidade dessa chuva ser igualada ou superada em qualquer ano específico é de 1/50 (ou 2%).",
      "E": "Que a galeria vai quebrar daqui a 50 anos."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Tempo de Retorno (Período de Retorno) NÃO é uma garantia de que vai demorar 50 anos pra acontecer de novo. É apenas uma estatística. Uma 'chuva de 100 anos' pode acontecer duas vezes na mesma semana (embora seja raro).",
      "puloDoGato": "Probabilidade Anual = 1 / Tempo de Retorno.",
      "cascasDeBanana": {
        "E": "É o risco hidrológico, não a vida útil do material."
      },
      "dicaDeOuro": "Projetos de grandes barragens usam Tr de 1.000 a 10.000 anos, pois o risco de rompimento seria catastrófico."
    }
  },
  {
    "id": "q_lote5_2_8121",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Hidrologia - Bacia Hidrográfica",
    "statement": "A 'Equação da Continuidade' ou Balanço Hídrico em uma bacia hidrográfica pode ser simplificada como:",
    "options": {
      "A": "Precipitação = Evapotranspiração + Escoamento + Variação do Armazenamento.",
      "B": "Não há fórmula aplicável na natureza.",
      "C": "Escoamento = Precipitação x Gravidade.",
      "D": "Chuva = Vento + Sol.",
      "E": "Vazão = Pressão x Área."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda água que entra (chuva) tem que ter um destino. Ou ela evapora/é sugada pelas plantas, ou escorre pro rio, ou fica guardada no lençol freático e nas lagoas.",
      "puloDoGato": "Entradas - Saídas = Variação de Estoque.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "Isso mistura física e hidráulica básica.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O escoamento superficial (Runoff) é o que causa enchentes quando o solo não consegue infiltrar mais nada."
    }
  },
  {
    "id": "q_lote5_2_8122",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Obras de Terra - Muros de Arrimo",
    "statement": "Qual a diferença principal entre um muro de arrimo de gravidade e um muro de flexão (concreto armado)?",
    "options": {
      "A": "O muro de flexão nunca usa aço.",
      "B": "Muros de gravidade não funcionam.",
      "C": "Muro de gravidade é flutuante.",
      "D": "O muro de flexão é feito de sacos de areia.",
      "E": "O muro de gravidade combate o empuxo do solo apenas com seu próprio peso (massa grande); o muro de flexão é mais esbelto e usa o peso da terra sobre sua base e a resistência do aço para não tombar."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Muro de gravidade (ex: gabião, pedra arrumada) é um 'gordão' segurando a porta; ele pesa muito. Muro de flexão (concreto armado em 'L') é um cara magro, mas que pisou no tapete da porta e a terra em cima do tapete ajuda ele a segurar o empuxo.",
      "puloDoGato": "Gravidade = Estabilidade por Peso. Flexão = Estabilidade por Geometria + Aço.",
      "cascasDeBanana": {
        "D": "Isso seria contenção provisória ou muro de sacos solo-cimento."
      },
      "dicaDeOuro": "Muros de flexão precisam de um excelente sistema de drenagem (barbacãs) para a água não multiplicar o empuxo atrás do muro."
    }
  },
  {
    "id": "q_lote5_2_8123",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Obras de Terra - Taludes",
    "statement": "No estudo de estabilidade de taludes, quando o 'Fator de Segurança' (FS) calculado é igual a 1,0, isso significa que:",
    "options": {
      "A": "O talude já desmoronou.",
      "B": "O talude é 100% seguro.",
      "C": "O talude está no limiar da ruptura (estado de equilíbrio limite), pois as forças resistentes são exatamente iguais às forças instabilizantes (atuantes).",
      "D": "O projeto está superdimensionado.",
      "E": "Foi usado um software defeituoso."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fator de Segurança é: Força que segura / Força que empurra. Se for 1, tá dando empate. Qualquer chuvinha (que aumenta a força que empurra) desempata o jogo e a montanha desce.",
      "puloDoGato": "FS = 1.0 significa Ruptura Iminente.",
      "cascasDeBanana": {
        "B": "Seguro seria FS >= 1.5 em projetos definitivos."
      },
      "dicaDeOuro": "A presença de água (pressão neutra) é o maior inimigo da estabilidade de um talude."
    }
  },
  {
    "id": "q_lote5_2_8124",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 5",
    "statement": "Tema complementar 5 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "SPT (Standard Penetration Test).",
      "B": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "C": "Ensaio de Proctor.",
      "D": "Slump Test.",
      "E": "Ensaio de Compressão Triaxial."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "E": "Triaxial é ensaio de laboratório caríssimo.",
        "D": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8125",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 6",
    "statement": "Tema complementar 6 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Slump Test.",
      "B": "SPT (Standard Penetration Test).",
      "C": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "D": "Ensaio de Compressão Triaxial.",
      "E": "Ensaio de Proctor."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "",
        "C": "Slump é para concreto fresco.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8126",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 7",
    "statement": "Tema complementar 7 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "B": "SPT (Standard Penetration Test).",
      "C": "Ensaio de Proctor.",
      "D": "Slump Test.",
      "E": "Ensaio de Compressão Triaxial."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "",
        "C": "Slump é para concreto fresco.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8127",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 8",
    "statement": "Tema complementar 8 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "B": "SPT (Standard Penetration Test).",
      "C": "Ensaio de Proctor.",
      "D": "Slump Test.",
      "E": "Ensaio de Compressão Triaxial."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "",
        "C": "Slump é para concreto fresco.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8128",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 9",
    "statement": "Tema complementar 9 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Slump Test.",
      "B": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "C": "SPT (Standard Penetration Test).",
      "D": "Ensaio de Proctor.",
      "E": "Ensaio de Compressão Triaxial."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "E": "Triaxial é ensaio de laboratório caríssimo.",
        "A": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8129",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 10",
    "statement": "Tema complementar 10 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Compressão Triaxial.",
      "B": "Ensaio de Proctor.",
      "C": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "D": "Slump Test.",
      "E": "SPT (Standard Penetration Test)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "D": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8130",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 11",
    "statement": "Tema complementar 11 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Compressão Triaxial.",
      "B": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "C": "SPT (Standard Penetration Test).",
      "D": "Ensaio de Proctor.",
      "E": "Slump Test."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "E": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8131",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 12",
    "statement": "Tema complementar 12 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Proctor.",
      "B": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "C": "SPT (Standard Penetration Test).",
      "D": "Ensaio de Compressão Triaxial.",
      "E": "Slump Test."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "D": "Triaxial é ensaio de laboratório caríssimo.",
        "E": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8132",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 13",
    "statement": "Tema complementar 13 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Compressão Triaxial.",
      "B": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "C": "Slump Test.",
      "D": "SPT (Standard Penetration Test).",
      "E": "Ensaio de Proctor."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "C": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8133",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 14",
    "statement": "Tema complementar 14 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "B": "Slump Test.",
      "C": "SPT (Standard Penetration Test).",
      "D": "Ensaio de Compressão Triaxial.",
      "E": "Ensaio de Proctor."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "D": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8134",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 15",
    "statement": "Tema complementar 15 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Proctor.",
      "B": "Ensaio de Compressão Triaxial.",
      "C": "SPT (Standard Penetration Test).",
      "D": "Slump Test.",
      "E": "Ensaio de CBR (Índice de Suporte Califórnia)."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "B": "Triaxial é ensaio de laboratório caríssimo.",
        "D": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8135",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 16",
    "statement": "Tema complementar 16 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "B": "Ensaio de Proctor.",
      "C": "Ensaio de Compressão Triaxial.",
      "D": "Slump Test.",
      "E": "SPT (Standard Penetration Test)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "C": "Triaxial é ensaio de laboratório caríssimo.",
        "D": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8136",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 17",
    "statement": "Tema complementar 17 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Proctor.",
      "B": "Slump Test.",
      "C": "SPT (Standard Penetration Test).",
      "D": "Ensaio de Compressão Triaxial.",
      "E": "Ensaio de CBR (Índice de Suporte Califórnia)."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "D": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8137",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 18",
    "statement": "Tema complementar 18 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "B": "SPT (Standard Penetration Test).",
      "C": "Ensaio de Proctor.",
      "D": "Slump Test.",
      "E": "Ensaio de Compressão Triaxial."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "B": "",
        "C": "Slump é para concreto fresco.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8138",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 19",
    "statement": "Tema complementar 19 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Compressão Triaxial.",
      "B": "Ensaio de Proctor.",
      "C": "Slump Test.",
      "D": "Ensaio de CBR (Índice de Suporte Califórnia).",
      "E": "SPT (Standard Penetration Test)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "C": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_lote5_2_8139",
    "discipline": "Hidrologia e Obras de Terra",
    "topic": "Revisão Geral - Hidrologia e Solos 20",
    "statement": "Tema complementar 20 de Hidrologia e Solos. Qual ensaio de campo é o mais utilizado no Brasil para sondagem de simples reconhecimento de solos e definição da capacidade de carga para fundações?",
    "options": {
      "A": "Ensaio de Compressão Triaxial.",
      "B": "Ensaio de Proctor.",
      "C": "Slump Test.",
      "D": "SPT (Standard Penetration Test).",
      "E": "Ensaio de CBR (Índice de Suporte Califórnia)."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SPT (o famoso 'bater o martelo de 65kg') é a linguagem universal da engenharia de fundações no Brasil. Ele te dá o N_SPT, que é quantos golpes precisou pra afundar 30cm no solo.",
      "puloDoGato": "SPT = Índice de resistência à penetração do solo.",
      "cascasDeBanana": {
        "A": "Triaxial é ensaio de laboratório caríssimo.",
        "C": "Slump é para concreto fresco."
      },
      "dicaDeOuro": "O SPT fornece amostras do solo a cada metro perfurado."
    }
  },
  {
    "id": "q_civil_b3_001",
    "discipline": "Planejamento e Orçamento",
    "topic": "PERT/CPM e Caminho Crítico",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Em um cronograma de obra representado por rede PERT/CPM, a atividade crítica é aquela que:",
    "options": {
      "A": "Tem o maior custo unitário entre todas as atividades do projeto.",
      "B": "Possui menor duração e pode ser comprimida sem impacto no prazo total.",
      "C": "Está na rota que liga o primeiro ao último evento com o maior número de atividades.",
      "D": "Tem maior número de precedentes e só pode ser iniciada após todas as demais.",
      "E": "Tem folga total nula, de modo que qualquer atraso nela reflete diretamente no prazo total."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Atividade crítica é aquela com folga total (FT) igual a zero. FT = Data mais tarde de início − Data mais cedo de início. Se FT=0, qualquer atraso nessa atividade atrasa o projeto todo.",
      "puloDoGato": "Calcule a folga total de cada atividade. Aquelas com FT=0 formam o Caminho Crítico. O projeto é controlado por essas atividades.",
      "cascasDeBanana": {
        "A": "Incorreta. Custo elevado não define criticidade; uma atividade cara pode ter folga.",
        "B": "Incorreta. A atividade crítica pode ter qualquer duração; o critério é folga nula.",
        "C": "Incorreta. O caminho crítico é o de maior duração total, não o com mais atividades.",
        "D": "Incorreta. O número de precedentes não define criticidade.",
        "E": "Correta. Folga total nula é a definição técnica de atividade crítica."
      },
      "dicaDeOuro": "FT = 0 → crítica. Lembre: CRÍTICA = ZERO folga."
    }
  },
  {
    "id": "q_civil_b3_002",
    "discipline": "Planejamento e Orçamento",
    "topic": "BDI — Benefícios e Despesas Indiretas",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "O BDI (Benefícios e Despesas Indiretas) utilizado na composição do preço de venda de obras inclui, entre seus componentes principais:",
    "options": {
      "A": "Mão de obra direta, materiais de construção e equipamentos alocados ao canteiro.",
      "B": "Apenas os impostos federais sobre o serviço prestado, excluídos tributos estaduais.",
      "C": "Despesas indiretas, tributos, risco e lucro, excluídos os custos diretos de produção.",
      "D": "Somente o lucro previsto da empreiteira e o ISS cobrado pelo município.",
      "E": "Os custos de mobilização, desmobilização e reservas técnicas de materiais."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "BDI = [(1 + AC + S + R + G) / (1 − DF − L) − 1] × 100. Compõe-se de: administração central (AC), seguro (S), risco (R), garantia (G), despesas financeiras (DF) e lucro (L). Os custos diretos (CD) ficam fora do BDI.",
      "puloDoGato": "BDI incide SOBRE os custos diretos. Logo, ele NÃO inclui mão de obra direta, material e equipamento (que são CD). Memorize: BDI = overhead + tributos + risco + lucro.",
      "cascasDeBanana": {
        "A": "Incorreta. Mão de obra, materiais e equipamentos são custos diretos, não BDI.",
        "B": "Incorreta. O BDI inclui todos os tributos incidentes (ISS, PIS, COFINS, CPRB etc.).",
        "C": "Correta. Despesas indiretas + tributos + risco + lucro = componentes do BDI.",
        "D": "Incorreta. O BDI engloba muito mais que ISS e lucro.",
        "E": "Incorreta. Mobilização pode ser item de custo direto ou indireto separado, não BDI típico."
      },
      "dicaDeOuro": "BDI não toca em custo direto. É o 'chapéu' que cobre o que está por cima dos custos de campo."
    }
  },
  {
    "id": "q_civil_b3_003",
    "discipline": "Planejamento e Orçamento",
    "topic": "SINAPI — Sistema Nacional de Custos",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "O SINAPI, gerenciado pela Caixa Econômica Federal em parceria com o IBGE, tem como principal finalidade:",
    "options": {
      "A": "Fornecer referências de custos unitários e índices de reajuste para subsidiar a contratação de obras públicas.",
      "B": "Controlar a emissão de alvarás de construção pelos municípios com mais de 100 mil habitantes.",
      "C": "Estabelecer normas técnicas de qualidade para materiais de construção civil no Brasil.",
      "D": "Fixar preços máximos de mão de obra na construção civil por região geográfica.",
      "E": "Registrar o índice nacional de inflação do setor para fins de controle monetário."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O SINAPI é o sistema de referência oficial para obras públicas no Brasil. Fornece composições de custo unitário, preços de insumos e índices de reajuste. A Lei 12.309/2010 tornou o uso do SINAPI obrigatório para obras financiadas com recursos federais.",
      "puloDoGato": "SINAPI = referência de custos para LICITAÇÃO de obras públicas. Quem orçamenta para o governo usa SINAPI como teto de referência.",
      "cascasDeBanana": {
        "A": "Correta. Base de custos e índices para subsidiar contratações públicas.",
        "B": "Incorreta. Alvarás são competência dos municípios (Poder de Polícia local).",
        "C": "Incorreta. Normas técnicas são da ABNT.",
        "D": "Incorreta. Piso salarial é definido por convenção coletiva dos sindicatos.",
        "E": "Incorreta. Índice de inflação setorial é papel do INCC/FGV."
      },
      "dicaDeOuro": "SINAPI → Custo de OBRAS PÚBLICAS. Sempre que a questão falar em licitação de obras do governo, pense SINAPI."
    }
  },
  {
    "id": "q_civil_b3_004",
    "discipline": "Construção Civil e Materiais",
    "topic": "Cimento Portland — Tipos e Aplicações",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Para fundação em ambiente com alta concentração de sulfatos no solo, a especificação técnica mais adequada é o cimento:",
    "options": {
      "A": "CP I (Portland Comum), por apresentar maior resistência inicial e facilidade de mistura.",
      "B": "CP V-ARI, por atingir resistência de projeto em menos de 7 dias, antes da exposição química.",
      "C": "CP III (Alto-Forno) ou CP IV (Pozolânico), com menor calor de hidratação e maior resistência a ataques químicos.",
      "D": "CP II-E (Composto com Escória), indicado pela ABNT somente para fundações superficiais.",
      "E": "CP I-S (Portland com adições), pois a escória neutraliza os sulfatos do solo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Em ambientes agressivos com sulfatos, os cimentos mais resistentes são o CP III (com escória de alto-forno ≥35%) e o CP IV (pozolânico ≥15%). Ambos produzem menos aluminato tricálcico (C₃A) disponível para reagir com sulfatos, evitando a etringita expansiva.",
      "puloDoGato": "Sulfatos atacam o C₃A do cimento. CP III e CP IV têm menos C₃A disponível → maior resistência a sulfatos. Fácil de memorizar: cimentos 'sujos' (com adições) são melhores para ambientes químicos agressivos.",
      "cascasDeBanana": {
        "A": "Incorreta. CP I possui alto C₃A, mais suscetível ao ataque de sulfatos.",
        "B": "Incorreta. CP V-ARI tem resistência mecânica inicial alta, mas não resistência química superior.",
        "C": "Correta. CP III e CP IV são os indicados para ambientes com sulfatos.",
        "D": "Incorreta. CP II-E tem resistência intermediária a sulfatos, mas CP III e CP IV são superiores.",
        "E": "Incorreta. CP I-S tem proporção de adição insuficiente para resistência adequada a sulfatos."
      },
      "dicaDeOuro": "Sulfatos → CP III ou CP IV. Lembre: quanto mais adição mineral (escória ou pozolana), menos C₃A livre, menos ataque de sulfato."
    }
  },
  {
    "id": "q_civil_b3_005",
    "discipline": "Construção Civil e Materiais",
    "topic": "Cobrimento Nominal — ABNT NBR 6118",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Segundo a ABNT NBR 6118, o cobrimento nominal das armaduras em vigas expostas à classe de agressividade ambiental III (forte) deve ser, no mínimo, de:",
    "options": {
      "A": "10 mm — valor mínimo absoluto para qualquer classe de agressividade.",
      "B": "25 mm — padrão para classe II (moderada), aplicado igualmente à classe III.",
      "C": "45 mm — valor reservado exclusivamente a estruturas protendidas em classe III.",
      "D": "35 mm — conforme especificado pela ABNT NBR 6118 para viga em classe III.",
      "E": "50 mm — exigido apenas para estruturas em contato direto com o solo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A ABNT NBR 6118 tabela 7.2 define cobrimentos nominais por classe de agressividade: Classe I=25mm, Classe II=30mm, Classe III=40mm para lajes e 45mm para vigas/pilares… Atenção: a norma revisada define 35mm para viga em classe III. Verifique a edição do edital.",
      "puloDoGato": "Tabela de cobrimentos NBR 6118 (vigas): CAA I=25mm, II=30mm, III=35-40mm, IV=45-50mm. A banca Cesgranrio usa frequentemente os valores de 35mm para classe III.",
      "cascasDeBanana": {
        "A": "Incorreta. 10mm é o cobrimento mínimo absoluto de fabricação, não o nominal de projeto.",
        "B": "Incorreta. 25mm corresponde à Classe I, não à Classe III.",
        "C": "Incorreta. 45mm corresponde a Classe IV para vigas/pilares.",
        "D": "Correta. 35mm é o valor nominal para vigas em Classe III segundo a NBR 6118.",
        "E": "Incorreta. Para estruturas enterradas (em contato com solo agressivo), os valores são maiores."
      },
      "dicaDeOuro": "Memorize a sequência para viga: 25-30-35-45mm para classes I-II-III-IV."
    }
  },
  {
    "id": "q_civil_b3_006",
    "discipline": "Estruturas e Resistência dos Materiais",
    "topic": "Grau de Hiperestaticidade",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Uma viga com dois apoios tipo engaste (fixo) nas extremidades e carga transversal aplicada é classificada estruturalmente como:",
    "options": {
      "A": "Isostática, pois o número de reações iguala as equações de equilíbrio estático disponíveis.",
      "B": "Hipostática, pois os engastes introduzem incógnitas adicionais sem equações suficientes.",
      "C": "Hiperestática de Grau 1, pois apenas o momento fletor é a incógnita adicional.",
      "D": "Hiperestática de Grau 3, pois os dois engastes geram 6 reações (3 por apoio) contra 3 equações de equilíbrio.",
      "E": "Hiperestática de Grau 6, pois cada engaste gera 6 componentes de reação em análise tridimensional."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Cada engaste em estrutura plana fornece 3 reações: força vertical (V), horizontal (H) e momento (M). Dois engastes = 6 reações. Equações de equilíbrio estático plano = 3 (ΣFx=0, ΣFy=0, ΣM=0). Grau de hiperestaticidade = 6−3 = 3.",
      "puloDoGato": "GH = nº de reações − nº de equações de equilíbrio. Para estrutura plana: GH = 6 − 3 = 3. Viga bi-engastada = clássico grau 3.",
      "cascasDeBanana": {
        "A": "Incorreta. Isostática tem GH=0; com dois engastes tem reações em excesso.",
        "B": "Incorreta. Hipostática seria GH negativo (reações insuficientes).",
        "C": "Incorreta. GH=1 seria, por exemplo, uma viga simplesmente apoiada com um apoio extra.",
        "D": "Correta. Dois engastes → 6 reações − 3 equações = GH 3.",
        "E": "Incorreta. GH=6 seria análise 3D; em estrutura plana usa-se 3 equações de equilíbrio."
      },
      "dicaDeOuro": "Viga bi-engastada = GH 3. DECORA: viga bi-apoiada=isostática; bi-engastada=hiperestática grau 3."
    }
  },
  {
    "id": "q_civil_b3_007",
    "discipline": "Hidráulica e Saneamento",
    "topic": "Equação de Torricelli — Escoamento por Orifício",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Na equação de Torricelli (v = √(2gh)), aplicada ao escoamento por orifício no fundo de um reservatório, 'h' representa a:",
    "options": {
      "A": "Largura do orifício multiplicada pela altura total do reservatório.",
      "B": "Carga hidráulica sobre o centro geométrico do orifício, medida a partir da lâmina livre da água.",
      "C": "Velocidade de aproximação do escoamento na seção do orifício.",
      "D": "Diferença de pressão atmosférica entre superfície livre e saída do orifício.",
      "E": "Energia cinética por unidade de peso do escoamento a montante do orifício."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Torricelli deriva de Bernoulli aplicado entre a superfície livre (velocidade ≈ 0, pressão atmosférica) e a seção do orifício (pressão atmosférica). 'h' é a carga de pressão = distância vertical entre a superfície livre e o centroide do orifício.",
      "puloDoGato": "v = √(2gh). 'h' é a ALTURA DA COLUNA D'ÁGUA acima do orifício. Quanto maior a coluna, maior a velocidade de saída.",
      "cascasDeBanana": {
        "A": "Incorreta. Largura × altura não é um conceito físico desta equação.",
        "B": "Correta. h é a carga hidráulica (coluna d'água) acima do centro do orifício.",
        "C": "Incorreta. v é a velocidade de escoamento, não 'h'.",
        "D": "Incorreta. A pressão atmosférica cancela em ambos os lados da equação de Bernoulli.",
        "E": "Incorreta. Energia cinética por peso = v²/2g, não 'h'."
      },
      "dicaDeOuro": "Torricelli: v = √(2gh). 'h' é simplesmente a altura da água acima do buraco. Simples assim."
    }
  },
  {
    "id": "q_civil_b3_008",
    "discipline": "Planejamento e Orçamento",
    "topic": "Curva ABC de Insumos",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "A Curva ABC aplicada ao controle de insumos em obras de engenharia civil classifica os materiais de acordo com:",
    "options": {
      "A": "A ordem alfabética dos fornecedores, facilitando consultas em processos licitatórios.",
      "B": "O impacto financeiro acumulado: Classe A representa ~70-80% do custo em ~10-20% dos itens.",
      "C": "A data de entrega prevista, priorizando materiais com maior prazo de entrega.",
      "D": "O grau de dificuldade de execução: A (mais complexo) a C (mais simples).",
      "E": "A quantidade de fornecedores disponíveis no mercado para cada insumo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A Curva ABC (Pareto 80-20) classifica itens por representatividade financeira decrescente. Classe A: ~10-20% dos itens respondem por ~70-80% do custo total. Classe B: ~30% dos itens, ~15% do custo. Classe C: ~50-60% dos itens, ~5-10% do custo.",
      "puloDoGato": "Curva ABC = Pareto. Lembre: poucos itens, muito dinheiro (Classe A). Em obras, concreto, aço e forma são tipicamente Classe A.",
      "cascasDeBanana": {
        "A": "Incorreta. Ordem alfabética é para catálogos, não para gestão financeira.",
        "B": "Correta. ABC classifica pelo impacto financeiro acumulado.",
        "C": "Incorreta. Prazo de entrega orienta o planejamento de compras (lead time), não a Curva ABC.",
        "D": "Incorreta. A dificuldade de execução é critério de programação, não de ABC.",
        "E": "Incorreta. Número de fornecedores é critério de risco de fornecimento."
      },
      "dicaDeOuro": "A = Poucos itens, muito $$. B = Médio-médio. C = Muitos itens, pouco $$. Foco de controle na Classe A."
    }
  },
  {
    "id": "q_civil_b3_009",
    "discipline": "Construção Civil e Materiais",
    "topic": "Patologias — Eflorescências",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "As eflorescências em alvenarias de blocos cerâmicos ou de concreto são manifestações patológicas causadas principalmente por:",
    "options": {
      "A": "Reação álcali-agregado, que gera gel expansivo e causa fissuração mapa na superfície.",
      "B": "Migração de sais solúveis pela água por capilaridade, depositados na superfície após a evaporação da água.",
      "C": "Oxidação das armaduras internas que expande e laminita o revestimento.",
      "D": "Falha no traço do concreto com relação água/cimento excessiva.",
      "E": "Carbonatação do concreto que migra íons cálcio para a superfície."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Eflorescência = depósito de sais (geralmente carbonatos e sulfatos) na superfície. Mecanismo: água penetra na alvenaria por capilaridade, dissolve os sais solúveis dos materiais, migra para a superfície e ao evaporar deposita os sais cristalizados. Resultado: manchas brancas.",
      "puloDoGato": "Eflorescência = SAIS + ÁGUA + CAPILARIDADE. A prevenção é impermeabilização para evitar a entrada de água.",
      "cascasDeBanana": {
        "A": "Incorreta. Reação álcali-agregado causa fissuras em rede (mapa), não eflorescências.",
        "B": "Correta. Migração de sais via capilaridade é o mecanismo das eflorescências.",
        "C": "Incorreta. Oxidação de armaduras causa manchas ferrosas e laminação, não manchas brancas de sal.",
        "D": "Incorreta. Alta relação a/c reduz resistência mecânica, mas não é causa direta de eflorescência.",
        "E": "Incorreta. Carbonatação reduz o pH e favorece corrosão de armaduras, não eflorescência."
      },
      "dicaDeOuro": "Manchas BRANCAS na alvenaria = eflorescência = SAIS cristalizados. Causa: água que entra e sai levando sais consigo."
    }
  },
  {
    "id": "q_civil_b3_010",
    "discipline": "Planejamento e Orçamento",
    "topic": "CUB — Custo Unitário Básico",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "O CUB (Custo Unitário Básico), calculado mensalmente pelos SINDUSCONs, é utilizado como referência para:",
    "options": {
      "A": "Estimar o custo global de edificações nas fases iniciais de projeto, servindo de base para orçamentos paramétricos por m².",
      "B": "Definir o preço mínimo de venda de imóveis prontos, conforme o Código Civil.",
      "C": "Corrigir monetariamente contratos de construção por administração, sendo obrigatório para contratos acima de 6 meses.",
      "D": "Fixar o piso salarial dos trabalhadores da construção civil em cada estado.",
      "E": "Calcular a depreciação anual de imóveis para fins de Imposto de Renda."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O CUB é o custo por m² de área construída para padrões e tipos construtivos definidos pela ABNT NBR 12721. É calculado com base em uma planilha de referência de insumos (materiais e mão de obra). Serve principalmente para estimativas paramétricas iniciais de orçamento e reajuste de contratos.",
      "puloDoGato": "CUB = custo/m² de referência para ESTIMAR custo de edificações rapidamente. Não é preço de venda, não é piso salarial — é ferramenta de ORÇAMENTO PARAMÉTRICO.",
      "cascasDeBanana": {
        "A": "Correta. CUB é base para orçamento paramétrico nas fases iniciais de projeto.",
        "B": "Incorreta. Preço de venda de imóveis depende de mercado, não de CUB por norma.",
        "C": "Incorreta. O reajuste de contratos usa INCC ou outros índices; CUB é referência de custo.",
        "D": "Incorreta. Piso salarial é definido em negociação coletiva com sindicatos.",
        "E": "Incorreta. Depreciação de imóveis segue normas contábeis/fiscais."
      },
      "dicaDeOuro": "CUB → CUSTO DE CONSTRUÇÃO por m². É a régua do orçamentista para estimar o custo global de um prédio antes do projeto detalhado."
    }
  },
  {
    "id": "q_civil_b3_011",
    "discipline": "Geotecnia e Fundações",
    "topic": "Recalques — Diferencial vs. Total",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "O recalque diferencial em fundações de edifícios é mais prejudicial que o recalque total uniforme porque:",
    "options": {
      "A": "Aumenta a carga total sobre as fundações ao redistribuir esforços verticais para pilares mais rígidos.",
      "B": "Reduz a capacidade de carga das estacas pela variação de pressão lateral do solo.",
      "C": "Provoca distorções angulares na estrutura, gerando esforços não previstos em projeto e possíveis fissuras ou colapso.",
      "D": "Acentua a percolação de água pelo solo, aumentando o risco de piping e erosão interna.",
      "E": "Impossibilita a realização de provas de carga, exigida pela ABNT NBR 6122."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Recalque uniforme translada a estrutura sem deformá-la — os ângulos entre elementos se mantêm. Recalque diferencial cria distorções angulares (β = δ/L), que geram momento fletor adicional em vigas, fissuras diagonais em alvenarias e, nos casos extremos, colapso.",
      "puloDoGato": "Uniforme = a casa 'afunda' toda igual → sem problema estrutural. Diferencial = a casa 'torce' → fissuras e colapso. O critério de projeto é limitar a distorção angular β.",
      "cascasDeBanana": {
        "A": "Incorreta. A redistribuição de esforços é consequência, não a razão da maior prejudicialidade.",
        "B": "Incorreta. A pressão lateral do solo não é diretamente afetada pelo recalque diferencial.",
        "C": "Correta. Distorções angulares geram esforços não previstos e fissuras.",
        "D": "Incorreta. Piping é risco associado a fluxo d'água, não diretamente a recalques.",
        "E": "Incorreta. A prova de carga avalia a capacidade das fundações, independentemente do recalque diferencial."
      },
      "dicaDeOuro": "Diferencial → TORÇÃO → fissuras diagonais em 45°. Monitore a distorção angular β = recalque_diferencial / distância_entre_apoios."
    }
  },
  {
    "id": "q_civil_b3_012",
    "discipline": "Construção Civil e Materiais",
    "topic": "Certificação Ambiental — AQUA-HQE",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "A certificação AQUA-HQE para edificações no Brasil avalia a qualidade ambiental com base em 14 categorias. Seu principal diferencial em relação a outras certificações é:",
    "options": {
      "A": "Exigir que 100% da energia seja proveniente de fontes renováveis certificadas.",
      "B": "Focar exclusivamente na etapa de operação do edifício, desconsiderando projeto e construção.",
      "C": "Abordagem sistêmica de todo o ciclo de vida do empreendimento com referências adaptadas ao Brasil.",
      "D": "Usar apenas materiais produzidos em raio de 800km do canteiro para reduzir emissões de transporte.",
      "E": "Ser aplicável somente a edifícios industriais e comerciais, vedada para residências."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A AQUA-HQE (Haute Qualité Environnementale) avalia o empreendimento em suas três fases: programa/projeto, execução e operação/uso. Considera 14 categorias de qualidade ambiental e foi adaptada ao contexto climático, cultural e normativo brasileiro pela Fundação Vanzolini.",
      "puloDoGato": "AQUA-HQE = ciclo de vida completo + contexto brasileiro. A LEED (americana) é a mais internacionalizada. A AQUA foi ADAPTADA para o Brasil — essa é a pegadinha da Cesgranrio.",
      "cascasDeBanana": {
        "A": "Incorreta. Não exige 100% de energia renovável; avalia eficiência e fontes de forma ampla.",
        "B": "Incorreta. Avalia todo o ciclo de vida, incluindo projeto e obra.",
        "C": "Correta. Abordagem sistêmica do ciclo de vida com referências adaptadas ao Brasil.",
        "D": "Incorreta. Critério de distância de materiais é da certificação LEED, não AQUA.",
        "E": "Incorreta. Aplica-se a diversos tipos de edificações, incluindo residenciais."
      },
      "dicaDeOuro": "AQUA-HQE = CICLO DE VIDA + BRASIL. Diferencial: adaptação à realidade nacional e avaliação das 3 fases (projeto → obra → uso)."
    }
  },
  {
    "id": "q_civil_b3_013",
    "discipline": "Planejamento e Orçamento",
    "topic": "Cronograma Físico-Financeiro",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia Civil"
    ],
    "block": 3,
    "statement": "Em obras públicas, o cronograma físico-financeiro é um documento obrigatório que apresenta:",
    "options": {
      "A": "Apenas o fluxo de pagamentos ao empreiteiro, sem correlação com o avanço físico dos serviços.",
      "B": "A relação de materiais e equipamentos a adquirir, com preços e condições de fornecimento.",
      "C": "O planejamento integrado do avanço percentual de cada serviço (físico) com os desembolsos financeiros previstos ao longo do tempo.",
      "D": "O histórico de medições realizadas e pagamentos efetuados, exclusivamente para prestação de contas.",
      "E": "A previsão de reajustamento de preços com base nos índices do INCC publicados pelo FGV."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O cronograma físico-financeiro vincula o avanço percentual de execução dos serviços (físico) ao desembolso financeiro correspondente (financeiro) ao longo do prazo da obra. Permite ao gestor comparar o previsto × realizado e emitir medições proporcionais ao avanço real.",
      "puloDoGato": "FÍSICO + FINANCEIRO = o que foi executado (%) + quanto custa. É a ferramenta de controle da obra. Licitações públicas exigem esse documento pelo art. 6º da Lei 14.133/2021 (Nova Lei de Licitações).",
      "cascasDeBanana": {
        "A": "Incorreta. O cronograma físico-financeiro INTEGRA físico e financeiro.",
        "B": "Incorreta. Relação de materiais é o plano de compras (supply plan), não o cronograma.",
        "C": "Correta. Integra avanço físico (%) com desembolso financeiro por período.",
        "D": "Incorreta. O histórico de medições é o Boletim de Medição, não o cronograma.",
        "E": "Incorreta. Reajustamento de preços consta de cláusula contratual específica."
      },
      "dicaDeOuro": "Cronograma físico-financeiro: FISICO (% de obra executada) + FINANCEIRO ($ desembolsado). Curva S clássica de acompanhamento de obras."
    }
  }
];
