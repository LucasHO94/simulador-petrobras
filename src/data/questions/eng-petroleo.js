// Banco de questões: eng-petroleo (177 questões)
export const questions_eng_petroleo = [
  {
    "id": "q_f4_001",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Porosidade",
    "difficulty": "Fácil",
    "statement": "O que define a 'Porosidade' de uma rocha reservatório?",
    "options": {
      "A": "A profundidade em que a rocha se encontra.",
      "B": "A dureza da rocha medida em escala Mohs.",
      "C": "A quantidade de sal presente na rocha.",
      "D": "A facilidade com que os fluidos atravessam a rocha.",
      "E": "A razão entre o volume de vazios (poros) e o volume total da rocha, indicando a capacidade de armazenamento de fluidos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Porosidade é o 'espaço vazio'. Se uma esponja tem muitos furos, ela guarda muita água. Na rocha é igual: quanto maior a porosidade, mais óleo ou gás ela consegue estocar lá dentro.",
      "puloDoGato": "Porosidade = Armazenamento. Permeabilidade = Fluxo.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é a Permeabilidade.",
        "E": "Correta. Conceito básico de petrofísica.",
        "B": "Incorreta. Mineralogia.",
        "A": "Incorreta. Profundidade não define porosidade diretamente.",
        "C": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Rocha boa tem que ter furo pra guardar o óleo."
    }
  },
  {
    "id": "q_f4_002",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Permeabilidade",
    "difficulty": "Médio",
    "statement": "Qual a unidade de medida padrão para a Permeabilidade de uma rocha no sistema petrolífero?",
    "options": {
      "A": "Graus API.",
      "B": "Pascal (Pa).",
      "C": "Metros por segundo (m/s).",
      "D": "Bar (bar).",
      "E": "Darcy (D) ou milidarcy (mD)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Permeabilidade é a 'vizinhança'. Não adianta a rocha ter poros se eles não estiverem conectados. O Darcy mede o quão fácil o óleo flui através dessa conexão. No pré-sal, temos permeabilidades muito interessantes que facilitam a produção.",
      "puloDoGato": "Permeabilidade -> Darcy (D).",
      "cascasDeBanana": {
        "B": "Incorreta. Unidade de pressão.",
        "E": "Correta. Nomeado em homenagem a Henry Darcy.",
        "D": "Incorreta. Unidade de pressão.",
        "C": "Incorreta. Unidade de velocidade simples.",
        "A": "Incorreta. Mede a densidade do óleo."
      },
      "dicaDeOuro": "Darcy: O homem que mediu o caminho do óleo."
    }
  },
  {
    "id": "q_f4_003",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Produção - Elevação Artificial (Gas Lift)",
    "difficulty": "Médio",
    "statement": "Como funciona o método de elevação artificial por 'Gas Lift'?",
    "options": {
      "A": "O óleo é puxado por um cabo de aço gigante.",
      "B": "A água do mar é usada para empurrar o óleo para cima.",
      "C": "Gás comprimido é injetado no anular do poço para reduzir a densidade do fluido e facilitar a subida do óleo até a superfície.",
      "D": "Uma bomba elétrica é instalada no fundo do poço.",
      "E": "O gás é queimado no fundo do poço para aquecer o óleo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Gas Lift é como tomar refrigerante de canudinho e soprar bolhas: o gás deixa o líquido mais leve (menos denso). Com o fluido mais leve, a pressão do reservatório consegue empurrar ele pra cima com menos esforço. Muito comum em plataformas offshore.",
      "puloDoGato": "Gas Lift = Redução de densidade da coluna de fluido.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria o BCSS (Bombeio Centrífugo Submerso).",
        "C": "Correta. Método versátil e muito usado na Petrobras.",
        "A": "Incorreta. Absurdo mecânico.",
        "B": "Incorreta. Injeção de água é recuperação secundária, não método de elevação direto no canhão.",
        "E": "Incorreta. Perigoso e absurdo."
      },
      "dicaDeOuro": "Gas Lift: Gás entra, óleo sobe leve."
    }
  },
  {
    "id": "q_f4_004",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Geologia - Rocha Selo",
    "difficulty": "Fácil",
    "statement": "Qual a função da 'Rocha Selo' (ou Rocha de Cobertura) em um sistema petrolífero?",
    "options": {
      "A": "Filtrar as impurezas do óleo antes do refino.",
      "B": "Armazenar o óleo e o gás.",
      "C": "Gerar os hidrocarbonetos através do calor e pressão.",
      "D": "Indicar a presença de diamantes no subsolo.",
      "E": "Impedir a migração do óleo para a superfície, mantendo-o aprisionado no reservatório."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O óleo quer subir porque é mais leve que a água. Se não tiver uma tampa (Rocha Selo), ele vaza pra superfície e se perde. O sal no Pré-Sal é um exemplo perfeito de rocha selo: uma camada gigante e impermeável que guardou o óleo por milhões de anos.",
      "puloDoGato": "Rocha Selo = A 'tampa da panela' do reservatório.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é a Rocha Reservatório.",
        "C": "Incorreta. Isso é a Rocha Geradora.",
        "E": "Correta. Geralmente são folhelhos ou evaporitos (sal).",
        "A": "Incorreta. Não há filtragem natural nesse nível.",
        "D": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Sem selo, o óleo vai embora."
    }
  },
  {
    "id": "q_f4_005",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Refino - Destilação Fracionada",
    "difficulty": "Médio",
    "statement": "Na torre de destilação fracionada, onde são retirados os produtos mais pesados (como o resíduo asfáltico)?",
    "options": {
      "A": "No topo da torre.",
      "B": "No meio da torre.",
      "C": "Em uma torre separada fora da refinaria.",
      "D": "O asfalto não vem do petróleo.",
      "E": "Na base (fundo) da torre."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A torre funciona por calor. O que é leve (gás, gasolina) sobe e sai pelo topo. O que é pesado (óleo combustível, asfalto) não consegue subir e fica acumulado na base. É um processo físico baseado nos pontos de ebulição.",
      "puloDoGato": "Topo = Leves (Gás). Base = Pesados (Asfalto).",
      "cascasDeBanana": {
        "A": "Incorreta. No topo saem GLP e Nafta.",
        "B": "Incorreta. No meio saem Querosene e Diesel.",
        "E": "Correta. Zona de maior temperatura e hidrocarbonetos de cadeia longa.",
        "C": "Incorreta. Processo integrado.",
        "D": "Incorreta. Vem sim, é a fração mais pesada."
      },
      "dicaDeOuro": "Mais quente e pesado? Fundo da torre."
    }
  },
  {
    "id": "q_f4_006",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Perfuração - Fluidos de Perfuração (Lama)",
    "difficulty": "Difícil",
    "statement": "Qual das funções abaixo NÃO é responsabilidade do fluido de perfuração (lama)?",
    "options": {
      "A": "Gerar eletricidade para a plataforma através do seu movimento.",
      "B": "Transportar os cascalhos (detritos) para a superfície.",
      "C": "Formar uma película impermeável (reboco) nas paredes do poço.",
      "D": "Exercer pressão hidrostática para evitar o influxo de fluidos da formação (blowout).",
      "E": "Resfriar e lubrificar a broca de perfuração."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A lama é o 'sangue' do poço. Ela faz tudo: limpa, gela, lubrifica e, o mais importante, segura a pressão da terra para o poço não explodir. Mas ela não gera energia, ela consome energia das bombas para circular.",
      "puloDoGato": "Funções da Lama: Limpeza, Resfriamento, Estabilidade e Controle de Pressão.",
      "cascasDeBanana": {
        "E": "Incorreta. É uma função vital.",
        "B": "Incorreta. É a forma de limpar o fundo do poço.",
        "D": "Incorreta. Função crítica de segurança.",
        "A": "Correta. Não gera eletricidade.",
        "C": "Incorreta. O reboco protege a formação."
      },
      "dicaDeOuro": "Lama: Protege o poço, não gera luz."
    }
  },
  {
    "id": "q_f4_007",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Geologia - Janela de Geração",
    "difficulty": "Médio",
    "statement": "O que é a 'Janela de Geração' de petróleo?",
    "options": {
      "A": "A faixa específica de temperatura e pressão onde a matéria orgânica se transforma em hidrocarbonetos líquidos (óleo).",
      "B": "A fase de venda do óleo no mercado internacional.",
      "C": "O momento em que o poço começa a produzir gás.",
      "D": "O intervalo de tempo que a plataforma fica aberta para visitas.",
      "E": "O buraco por onde o geólogo olha as rochas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O petróleo é como um bolo: se o forno estiver frio, não assa (fica querogênio); se estiver quente demais, queima (vira só gás). A Janela de Geração é a temperatura perfeita (geralmente entre 60°C e 120°C) para a 'cozinha' da terra produzir óleo.",
      "puloDoGato": "Janela de Geração = Temperatura ideal para óleo.",
      "cascasDeBanana": {
        "D": "Incorreta. Absurdo administrativo.",
        "A": "Correta. Conceito chave de sistemas petrolíferos.",
        "E": "Incorreta. Piada literal.",
        "B": "Incorreta. Comercialização.",
        "C": "Incorreta. Isso seria a janela de gás (mais profunda/quente)."
      },
      "dicaDeOuro": "Cozinha da terra: nem frio, nem torrado."
    }
  },
  {
    "id": "q_f4_008",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Exploração - Sísmica",
    "difficulty": "Médio",
    "statement": "Como funciona o método de exploração sísmica marítima?",
    "options": {
      "A": "Mergulhadores descem até o fundo para martelar as rochas.",
      "B": "Uso de satélites que enxergam através da água salgada.",
      "C": "Navios emitem ondas sonoras que atravessam as camadas de rocha e retornam (eco), permitindo mapear a estrutura do subsolo.",
      "D": "Pesca de peixes que vivem perto do óleo.",
      "E": "Explosões atômicas controladas no fundo do mar."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A sísmica é o 'ultrassom' da terra. O navio solta um som (airguns) e os hidrofones escutam a volta. Rochas diferentes refletem o som de forma diferente. Com isso, os geofísicos criam um mapa 3D do que tem lá embaixo sem precisar furar um único buraco.",
      "puloDoGato": "Sísmica = Som + Eco + Mapeamento.",
      "cascasDeBanana": {
        "A": "Incorreta. Inviável em águas profundas.",
        "C": "Correta. Principal método de prospecção.",
        "B": "Incorreta. Satélites ajudam na topografia, mas não penetram fundo no subsolo marinho.",
        "E": "Incorreta. Extremamente perigoso e ilegal.",
        "D": "Incorreta. Piada."
      },
      "dicaDeOuro": "Sísmica: Veja com os ouvidos o que está sob o mar."
    }
  },
  {
    "id": "q_f4_009",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Produção - FPSO",
    "difficulty": "Fácil",
    "statement": "O que significa a sigla FPSO, muito comum na produção em águas profundas do Brasil?",
    "options": {
      "A": "Fixed Platform for Sea Oil (Plataforma Fixa para Óleo de Mar).",
      "B": "Floating Production Storage and Offloading (Unidade Flutuante de Produção, Armazenamento e Transferência).",
      "C": "Fast Petroleum System Operation (Operação Rápida de Sistemas de Petróleo).",
      "D": "Fuel Pump Service Office (Escritório de Serviço de Bombas de Combustível).",
      "E": "Federal Petroleum Safety Organization."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "FPSOs são navios-plataforma. Eles produzem o óleo, guardam nos seus próprios tanques (Storage) e depois passam para um navio aliviador (Offloading). São ideais para o Pré-Sal porque não precisam de oleodutos gigantes até a costa logo de cara.",
      "puloDoGato": "FPSO = Produz + Guarda + Transfere.",
      "cascasDeBanana": {
        "B": "Correta. Principal tipo de unidade de produção da Petrobras hoje.",
        "C": "Incorreta. Sigla inventada.",
        "A": "Incorreta. FPSO é flutuante, não fixa.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. Absurdo político."
      },
      "dicaDeOuro": "FPSO: O 'canivete suíço' da produção offshore."
    }
  },
  {
    "id": "q_f4_010",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Propriedades do Óleo - Grau API",
    "difficulty": "Médio",
    "statement": "Se um petróleo possui um 'Grau API' alto (ex: 35° API), o que isso indica sobre sua densidade?",
    "options": {
      "A": "Que o petróleo é muito denso e pesado, como asfalto.",
      "B": "Que o petróleo está muito quente.",
      "C": "Que o petróleo é pouco denso e leve, sendo geralmente mais valorizado no mercado.",
      "D": "O grau API não tem relação com a densidade.",
      "E": "Que o petróleo contém muita água salgada."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A escala API é 'invertida': quanto maior o número, mais leve é o óleo. Água tem API 10. Se o óleo tem API 30, ele boia na água e é considerado leve. Óleos leves dão mais gasolina e diesel no refino, por isso valem mais dinheiro.",
      "puloDoGato": "API alto (> 31) = Óleo Leve. API baixo (< 22) = Óleo Pesado.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria API baixo.",
        "C": "Correta. Óleos do pré-sal costumam ser de excelente qualidade (leves).",
        "E": "Incorreta. BSW mede a água, não o API.",
        "B": "Incorreta. Temperatura é medida em Celsius/Fahrenheit.",
        "D": "Incorreta. É a definição oficial de densidade relativa para o petróleo."
      },
      "dicaDeOuro": "API alto: óleo leve e caro. API baixo: óleo pesado e barato."
    }
  },
  {
    "id": "q_f4_011",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Produção - Árvore de Natal Molhada (ANM)",
    "difficulty": "Médio",
    "statement": "Qual a função da Árvore de Natal Molhada (ANM) em um poço submarino?",
    "options": {
      "A": "Controlar o fluxo de fluidos que entram e saem do poço, possuindo um conjunto de válvulas de segurança.",
      "B": "Aquecer o óleo para que ele não congele no fundo do mar.",
      "C": "Filtrar a areia antes do óleo chegar na plataforma.",
      "D": "Iluminar o fundo do mar para os mergulhadores.",
      "E": "Decorar a plataforma durante as festas de fim de ano."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A ANM é o 'registro' do poço. Ela fica lá no fundo do mar, conectada na cabeça do poço. Se precisar fechar o poço por segurança, as válvulas da ANM fazem isso. Ela controla quanto óleo sai e permite injetar água ou gás se necessário.",
      "puloDoGato": "ANM = Controle de Fluxo + Segurança no Fundo do Mar.",
      "cascasDeBanana": {
        "E": "Incorreta. Piada com o nome.",
        "A": "Correta. Equipamento crítico de completação submarina.",
        "B": "Incorreta. Existem sistemas de aquecimento, mas não é a função da ANM.",
        "C": "Incorreta. Isso é feito por telas ou filtros de fundo (sand control).",
        "D": "Incorreta. Piada."
      },
      "dicaDeOuro": "ANM: O porteiro eletrônico do seu poço no fundo do mar."
    }
  },
  {
    "id": "q_f4_012",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Recuperação Primária",
    "difficulty": "Fácil",
    "statement": "O que caracteriza a 'Recuperação Primária' de um reservatório?",
    "options": {
      "A": "A injeção de produtos químicos caros para soltar o óleo das rochas.",
      "B": "A produção de óleo utilizando apenas a energia natural do reservatório (expansão de gás, influxo de água, etc.).",
      "C": "A primeira vez que o geólogo encontra o óleo.",
      "D": "A queima controlada do reservatório.",
      "E": "O uso de robôs para sugar o óleo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o 'esguicho' natural. O reservatório está sob pressão. Você fura e o óleo sai sozinho, igual abrir uma garrafa de refrigerante que foi sacudida. Quando essa energia natural acaba, você precisa de métodos secundários (como injetar água).",
      "puloDoGato": "Primária = Energia Natural. Secundária = Injeção de Água/Gás.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Recuperação Terciária (EOR).",
        "B": "Correta. Fase inicial de qualquer campo de petróleo.",
        "C": "Incorreta. Absurdo técnico.",
        "D": "Incorreta. Isso é Descoberta/Exploração.",
        "E": "Incorreta. Invasivo e destrutivo."
      },
      "dicaDeOuro": "Recuperação Primária: O reservatório faz o trabalho sozinho."
    }
  },
  {
    "id": "q_f4_013",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Refino - Craqueamento Catalítico (FCC)",
    "difficulty": "Difícil",
    "statement": "Qual o objetivo do processo de Craqueamento (Cracking) nas refinarias?",
    "options": {
      "A": "Quebrar moléculas grandes e pesadas de hidrocarbonetos em moléculas menores e mais leves (como gasolina e GLP).",
      "B": "Congelar o petróleo para facilitar o transporte por caminhão.",
      "C": "Misturar água no petróleo para ele render mais.",
      "D": "Mudar a cor do petróleo de preto para verde.",
      "E": "Limpar o sal que sobrou do pré-sal."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O mercado quer gasolina, não óleo pesado de navio. O Craqueamento é como pegar um tronco de madeira (molécula grande) e cortar em gravetos (gasolina). Usando calor e catalisadores, você transforma um produto barato em um produto caro e muito procurado.",
      "puloDoGato": "Craqueamento = Quebra de Moléculas (Valorização).",
      "cascasDeBanana": {
        "C": "Incorreta. Adulteração ilegal.",
        "A": "Correta. Processo fundamental para a rentabilidade da refinaria.",
        "B": "Incorreta. Inviável e inútil.",
        "E": "Incorreta. Isso é Dessalgação.",
        "D": "Incorreta. Absurdo estético."
      },
      "dicaDeOuro": "Craqueamento: Transforme o pesado em leve e caro."
    }
  },
  {
    "id": "q_f4_014",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Perfuração - Risers",
    "difficulty": "Médio",
    "statement": "Para que servem os 'Risers' em uma operação de perfuração offshore?",
    "options": {
      "A": "Serve para pescar peixes que atrapalham a operação.",
      "B": "Para medir a temperatura da água do mar.",
      "C": "Para subir os funcionários da plataforma até o helicóptero.",
      "D": "São os âncoras que seguram a plataforma no lugar.",
      "E": "São tubulações que conectam a cabeça do poço no fundo do mar até a plataforma na superfície, permitindo a circulação da lama."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine que a plataforma é o seu rosto e o poço é um copo no chão. O Riser é o canudinho gigante que liga os dois. Sem ele, a lama de perfuração se espalharia no mar. Ele cria o caminho fechado para o fluido ir e voltar com segurança.",
      "puloDoGato": "Riser = Conexão Poço <-> Plataforma.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria um cesto de transbordo ou elevador.",
        "E": "Correta. Componente essencial de perfuração e produção marítima.",
        "D": "Incorreta. Isso são linhas de ancoragem.",
        "A": "Incorreta. Absurdo.",
        "B": "Incorreta. Pode ter sensores, mas não é a função principal."
      },
      "dicaDeOuro": "Riser: O cordão umbilical do poço submarino."
    }
  },
  {
    "id": "q_f4_015",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Geologia - Rocha Geradora",
    "difficulty": "Médio",
    "statement": "Qual a principal característica de uma 'Rocha Geradora' de petróleo?",
    "options": {
      "A": "Ter muitos buracos grandes para o óleo passar.",
      "B": "Ser muito dura e difícil de furar.",
      "C": "Ser rica em matéria orgânica e ter sido submetida a condições ideais de pressão e temperatura.",
      "D": "Conter fósseis de dinossauros gigantes intactos.",
      "E": "Ficar sempre na superfície da terra."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O petróleo não nasce onde a gente acha ele. Ele nasce na Rocha Geradora (geralmente folhelhos escuros), onde o plâncton e algas mortas 'cozinharam' por milhões de anos. Depois de pronto, o óleo foge dali e vai para a Rocha Reservatório.",
      "puloDoGato": "Rocha Geradora = A 'Cozinha' do petróleo.",
      "cascasDeBanana": {
        "B": "Incorreta. Dureza não gera óleo.",
        "C": "Correta. Geralmente são rochas sedimentares finas.",
        "A": "Incorreta. Isso seria a Rocha Reservatório.",
        "E": "Incorreta. Elas costumam ficar bem profundas.",
        "D": "Incorreta. Petróleo vem de microorganismos marinhos, não de dinossauros."
      },
      "dicaDeOuro": "Geradora: Onde o petróleo 'nasceu'."
    }
  },
  {
    "id": "q_f4_016",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Produção - BSW (Basic Sediments and Water)",
    "difficulty": "Fácil",
    "statement": "O que o indicador 'BSW' mede na produção de petróleo?",
    "options": {
      "A": "A velocidade do vento na plataforma.",
      "B": "A quantidade de gás queimado no flare.",
      "C": "A porcentagem de água e sedimentos presentes no fluido produzido.",
      "D": "A profundidade final do poço.",
      "E": "O bônus salarial dos engenheiros."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Ninguém produz 100% óleo puro. Sempre vem um pouco de água salgada e areia do reservatório. O BSW diz o quão 'sujo' está o seu óleo. Se o BSW sobe muito, a Petrobras está gastando energia para bombear água, o que é prejuízo.",
      "puloDoGato": "BSW = Água + Sedimento. Quanto menor, melhor.",
      "cascasDeBanana": {
        "A": "Incorreta. Anemômetro.",
        "C": "Correta. Parâmetro crítico de controle operacional.",
        "E": "Incorreta. Piada.",
        "D": "Incorreta. TD (Total Depth).",
        "B": "Incorreta. Flare gas monitoring."
      },
      "dicaDeOuro": "BSW alto: você está produzindo água, não dinheiro."
    }
  },
  {
    "id": "q_f4_017",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Mecanismos de Empuxo (Capa de Gás)",
    "difficulty": "Médio",
    "statement": "Em um reservatório com uma 'Capa de Gás', como ocorre a produção natural?",
    "options": {
      "A": "O gás é sugado primeiro e depois o óleo.",
      "B": "O gás não ajuda na produção.",
      "C": "O gás atua como um veneno para as bactérias do óleo.",
      "D": "O gás derrete o óleo para ele ficar líquido.",
      "E": "O gás comprimido acima do óleo se expande à medida que o poço é aberto, empurrando o óleo para o canhão de produção."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine um pistão natural. O gás está em cima, sob pressão. Quando você fura embaixo, o gás 'aperta' o óleo pra fora. É um dos mecanismos de energia natural mais eficientes, mas se você produzir gás demais, perde a pressão e o óleo para de sair.",
      "puloDoGato": "Capa de Gás = Expansão que empurra o óleo.",
      "cascasDeBanana": {
        "D": "Incorreta. Óleo já é líquido.",
        "E": "Correta. Mecanismo de drenagem clássico.",
        "C": "Incorreta. Absurdo.",
        "B": "Incorreta. É uma das principais fontes de energia.",
        "A": "Incorreta. O objetivo é manter o gás lá para empurrar o óleo."
      },
      "dicaDeOuro": "Capa de Gás: O 'motor' do reservatório."
    }
  },
  {
    "id": "q_f4_018",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Segurança - BOP (Blowout Preventer)",
    "difficulty": "Difícil",
    "statement": "Qual a função extrema do BOP (Blowout Preventer) em um poço?",
    "options": {
      "A": "Vedar o poço completamente e cortar a tubulação se necessário, para impedir o escape descontrolado de hidrocarbonetos (Blowout).",
      "B": "Limpar a broca de perfuração.",
      "C": "Aumentar a pressão para produzir mais rápido.",
      "D": "Medir a salinidade da água do mar.",
      "E": "Serve como guindaste para a plataforma."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O BOP é o 'freio de mão' de emergência. Se tudo der errado (a lama não segurar a pressão e o poço quiser explodir), o BOP fecha válvulas gigantes de aço. Em casos críticos, ele tem lâminas que cortam o cano de aço e lacram o poço de vez. Foi a falha desse equipamento que causou o desastre da Deepwater Horizon.",
      "puloDoGato": "BOP = Válvula de Segurança de Última Instância.",
      "cascasDeBanana": {
        "B": "Incorreta. Operacional simples.",
        "A": "Correta. Equipamento mais importante para evitar desastres ambientais.",
        "C": "Incorreta. Ele resiste à pressão, não gera.",
        "D": "Incorreta. Sensores de fundo.",
        "E": "Incorreta. Absurdo mecânico."
      },
      "dicaDeOuro": "BOP: O herói silencioso que evita explosões."
    }
  },
  {
    "id": "q_f4_019",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Perfuração e Completação",
    "topic": "Logística - Gasoduto vs Oleoduto",
    "difficulty": "Fácil",
    "statement": "Qual a principal diferença de transporte entre um Oleoduto e um Gasoduto?",
    "options": {
      "A": "Oleoduto é usado apenas dentro da refinaria.",
      "B": "Oleoduto é feito de plástico e Gasoduto de vidro.",
      "C": "Oleoduto transporta óleo (líquido) e Gasoduto transporta gás natural (gasoso).",
      "D": "Gasoduto só funciona no verão.",
      "E": "Não há diferença, são o mesmo tubo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A física é diferente. Óleo precisa de bombas para ser empurrado. Gás precisa de compressores porque ele é compressível. O Gasoduto é muito mais perigoso se vazar (risco de explosão imediata), enquanto o Oleoduto causa desastre ambiental por derramamento.",
      "puloDoGato": "Óleo = Líquido (Bomba). Gás = Gasoso (Compressor).",
      "cascasDeBanana": {
        "C": "Correta. Definição básica de infraestrutura de transporte.",
        "B": "Incorreta. Ambos são geralmente de aço de alta resistência.",
        "D": "Incorreta. Funcionam 24/7.",
        "A": "Incorreta. Cruzam estados e países.",
        "E": "Incorreta. Projetos de engenharia distintos."
      },
      "dicaDeOuro": "Oleoduto: Cuidado com vazamento. Gasoduto: Cuidado com pressão."
    }
  },
  {
    "id": "q_f4_020",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Geologia e Reservatórios",
    "topic": "Completação - Revestimento (Casing)",
    "difficulty": "Médio",
    "statement": "Para que serve o 'Revestimento' (Casing) de aço colocado dentro do poço?",
    "options": {
      "A": "Não se usa aço em poços de petróleo.",
      "B": "Para filtrar o petróleo logo na saída.",
      "C": "Para deixar o poço mais bonito nas fotos.",
      "D": "Para servir de trilho para um trem submarino.",
      "E": "Para isolar as camadas de rocha, evitar o desmoronamento das paredes do poço e impedir a contaminação de aquiíferos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Furar um poço é como enfiar um canudo na areia: se você tirar o canudo, o buraco fecha. O Revestimento é o tubo de aço que você cimenta no lugar para o buraco ficar aberto pra sempre. Ele também garante que o óleo não escape para as camadas de água doce (aquíferos) no caminho.",
      "puloDoGato": "Revestimento = Estrutura + Isolamento + Proteção Ambiental.",
      "cascasDeBanana": {
        "C": "Incorreta. Estética irrelevante.",
        "E": "Correta. Fundamental para a integridade mecânica do poço.",
        "D": "Incorreta. Absurdo.",
        "B": "Incorreta. Revestimento é sólido, não é filtro.",
        "A": "Incorreta. Aço é o material principal."
      },
      "dicaDeOuro": "Revestimento: A armadura do seu poço."
    }
  },
  {
    "id": "q_f4_087",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Elevação e Escoamento",
    "topic": "Reservatórios - Lei de Darcy",
    "difficulty": "Médio",
    "statement": "A Lei de Darcy é a equação fundamental que descreve o escoamento de fluidos em meios porosos. Qual das alternativas abaixo apresenta uma premissa básica para a aplicação da forma linear dessa lei?",
    "options": {
      "A": "O meio poroso deve ser perfeitamente impermeável.",
      "B": "O escoamento deve ser turbulento (Número de Reynolds alto).",
      "C": "O escoamento ocorre apenas no vácuo.",
      "D": "A viscosidade do fluido deve ser infinita.",
      "E": "O fluido deve ser incompressível e o escoamento deve ser laminar e em estado estacionário."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Darcy é o 'pai' do escoamento no reservatório. A lei dele funciona quando o fluido desliza suavemente pelos poros da rocha (regime laminar). Se a velocidade for muito alta e virar bagunça (turbulência), a lei de Darcy 'fura' e precisamos usar a equação de Forchheimer.",
      "puloDoGato": "Darcy = Escoamento Laminar em Meio Poroso.",
      "cascasDeBanana": {
        "B": "Incorreta. Darcy não se aplica a fluxos turbulentos.",
        "E": "Correta. Premissas padrão para a forma básica da lei.",
        "A": "Incorreta. Se for impermeável, não há fluxo.",
        "D": "Incorreta. Se a viscosidade for infinita, o fluido não se mexe.",
        "C": "Incorreta. Ocorre dentro da rocha."
      },
      "dicaDeOuro": "Lembre-se: q = (k*A/mu) * (dP/dL). k é a permeabilidade!"
    }
  },
  {
    "id": "q_f4_088",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Propriedades da Rocha - Porosidade",
    "difficulty": "Fácil",
    "statement": "O que define a 'Porosidade Eficaz' de uma rocha reservatório?",
    "options": {
      "A": "O volume total de espaços vazios na rocha, incluindo poros isolados.",
      "B": "O peso da rocha seca dividido pelo peso da rocha úmida.",
      "C": "A razão entre o volume de poros conectados (que permitem o fluxo) e o volume total da rocha.",
      "D": "A cor da rocha quando saturada com óleo.",
      "E": "A dureza da rocha medida na escala Mohs."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Não adianta a rocha ter buraquinhos (poros) se eles estiverem fechados como bolhas de sabão isoladas. O petróleo precisa de 'ruas' para passar. A porosidade eficaz conta apenas os buraquinhos que estão ligados uns aos outros. É o que realmente importa para a produção.",
      "puloDoGato": "Porosidade Eficaz = Poros Conectados / Volume Total.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é a Porosidade Total.",
        "C": "Correta. Define o potencial de armazenamento móvel de fluidos.",
        "D": "Incorreta. Irrelevante.",
        "E": "Incorreta. Propriedade mecânica, não de armazenamento.",
        "B": "Incorreta. Sem nexo."
      },
      "dicaDeOuro": "Rochas com alta porosidade total mas baixa porosidade eficaz (como alguns folhelhos) são reservatórios difíceis."
    }
  },
  {
    "id": "q_f4_089",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Mecanismos de Recuperação - Gás em Solução",
    "difficulty": "Médio",
    "statement": "No mecanismo de produção por 'Gás em Solução' (solution gas drive), o que acontece quando a pressão do reservatório cai abaixo da Pressão de Bolha (Pb)?",
    "options": {
      "A": "A produção de óleo para instantaneamente.",
      "B": "O óleo se transforma em rocha sólida.",
      "C": "O gás começa a se liberar do óleo dentro do reservatório, formando pequenas bolhas que se expandem e empurram o óleo.",
      "D": "A água do aquífero invade o reservatório com força total.",
      "E": "A temperatura do reservatório sobe 100 graus."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Pense em uma garrafa de Coca-Cola. Enquanto está fechada (pressão alta), o gás está 'dissolvido' (você não vê as bolhas). Quando você abre (pressão cai), o gás vira bolha e tenta sair, empurrando o líquido. No reservatório, essas bolhas ajudam a expulsar o óleo para o poço.",
      "puloDoGato": "P < Pb -> Liberação de gás -> Expansão -> Empuxo.",
      "cascasDeBanana": {
        "A": "Incorreta. Pelo contrário, o gás ajuda a empurrar por um tempo.",
        "C": "Correta. Mecanismo clássico de reservatórios 'volumétricos'.",
        "D": "Incorreta. Isso seria 'Influxo de Água'.",
        "B": "Incorreta. Absurdo.",
        "E": "Incorreta. Expansão de gás costuma até resfriar levemente o sistema (Joule-Thomson)."
      },
      "dicaDeOuro": "Esse mecanismo é pouco eficiente a longo prazo, recuperando apenas 5% a 15% do óleo original."
    }
  },
  {
    "id": "q_f4_090",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Propriedades dos Fluidos - Fator Volume de Formação (Bo)",
    "difficulty": "Difícil",
    "statement": "O Fator Volume de Formação do Óleo (Bo) relaciona o volume de óleo nas condições de reservatório com o volume nas condições padrão (superfície). Por que, geralmente, o Bo é maior que 1?",
    "options": {
      "A": "Porque a gravidade na superfície é maior que no reservatório.",
      "B": "Porque o óleo absorve água da superfície.",
      "C": "Devido à presença de gás dissolvido no óleo sob alta pressão e à expansão térmica no reservatório.",
      "D": "Porque o óleo encolhe ao ser aquecido no reservatório.",
      "E": "Porque o óleo vira gás na superfície."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O óleo no fundo do mar está 'inchado' porque tem muito gás dissolvido nele e está muito quente. Quando você traz ele para cima, o gás sai (igual à espuma da cerveja) e o óleo esfria, ocupando menos espaço. Por isso, 1 barril lá embaixo vira menos de 1 barril aqui em cima.",
      "puloDoGato": "Bo = Vol(Reservatório) / Vol(Superfície). Sempre > 1 (quase sempre).",
      "cascasDeBanana": {
        "D": "Incorreta. Óleo expande com o calor.",
        "C": "Correta. Gás dissolvido é o principal fator de 'inchaço'.",
        "A": "Incorreta. Irrelevante.",
        "B": "Incorreta. Óleo e água não se misturam assim.",
        "E": "Incorreta. Uma parte vira gás, mas o Bo foca no líquido restante."
      },
      "dicaDeOuro": "O valor do Bo cai bruscamente quando a pressão fica abaixo da pressão de bolha, pois o gás livre sai do óleo."
    }
  },
  {
    "id": "q_f4_091",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Perfuração e Completação",
    "topic": "Elevação Artificial - Gas Lift",
    "difficulty": "Médio",
    "statement": "Qual o princípio básico de funcionamento do método de elevação artificial por Gas Lift?",
    "options": {
      "A": "Usar um pistão mecânico para puxar o óleo.",
      "B": "Injetar gás no fundo do poço para aumentar a densidade do fluido e fazê-lo afundar.",
      "C": "Injetar gás no anular para reduzir a densidade da coluna de fluido dentro do tubing, diminuindo a pressão hidrostática e permitindo o fluxo.",
      "D": "Aquecer o óleo com chamas no fundo do poço.",
      "E": "Injetar água para empurrar o óleo por baixo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O óleo às vezes é 'pesado' demais para a pressão do reservatório conseguir empurrar até a superfície. No Gas Lift, a gente sopra gás lá no fundo. Esse gás se mistura com o óleo e deixa ele 'leve' (igual um mousse). Com a coluna mais leve, o reservatório consegue empurrar o fluido para fora.",
      "puloDoGato": "Gas Lift = Diminuir densidade = Reduzir contrapressão.",
      "cascasDeBanana": {
        "B": "Incorreta. Gás reduz a densidade, não aumenta.",
        "C": "Correta. Método muito comum no mar (offshore).",
        "A": "Incorreta. Isso seria Bombeio Mecânico.",
        "D": "Incorreta. Perigo de explosão!",
        "E": "Incorreta. Isso seria injeção de água (recuperação secundária)."
      },
      "dicaDeOuro": "O gás injetado costuma vir do próprio processamento primário da plataforma."
    }
  },
  {
    "id": "q_f4_092",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Perfuração e Completação",
    "topic": "Engenharia de Reservatórios - Balanço de Materiais",
    "difficulty": "Difícil",
    "statement": "A Equação Geral do Balanço de Materiais (EGBM) é baseada em qual princípio físico fundamental?",
    "options": {
      "A": "Teoria da Relatividade Geral.",
      "B": "Princípio da Incerteza de Heisenberg.",
      "C": "Lei da Gravitação Universal.",
      "D": "Segunda Lei da Termodinâmica.",
      "E": "Conservação da Massa (Volume de entrada - Volume de saída = Variação do estoque)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Balanço de materiais é contabilidade de engenheiro. Se eu tinha 100 barris e tirei 10, tem que sobrar 90. A equação só é complicada porque o óleo expande e o gás sai, mas a lógica é: o que saiu do poço tem que ser igual ao que o reservatório 'encolheu' ou expandiu.",
      "puloDoGato": "EGBM = Contabilidade de Barris.",
      "cascasDeBanana": {
        "B": "Incorreta. Física quântica não se aplica aqui.",
        "E": "Correta. Princípio de conservação aplicado a reservatórios.",
        "D": "Incorreta. Lida com entropia/calor.",
        "C": "Incorreta. Lida com peso.",
        "A": "Incorreta. Lida com o espaço-tempo."
      },
      "dicaDeOuro": "A EGBM ajuda a estimar o Volume Original de Óleo (OOIP) sem precisar furar o reservatório inteiro."
    }
  },
  {
    "id": "q_f4_093",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Propriedades da Rocha - Permeabilidade Relativa",
    "difficulty": "Médio",
    "statement": "O que acontece com a permeabilidade relativa ao óleo (kro) à medida que a saturação de água (Sw) no reservatório aumenta?",
    "options": {
      "A": "A kro diminui, dificultando o fluxo de óleo, pois a água ocupa os caminhos preferenciais.",
      "B": "O óleo vira água.",
      "C": "A kro aumenta, facilitando o fluxo de óleo.",
      "D": "A kro vira zero instantaneamente se houver 1% de água.",
      "E": "A kro permanece constante."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine uma estrada (os poros). Se só tem carros pretos (óleo), eles andam livremente. Se começam a entrar carros brancos (água), eles começam a atrapalhar os pretos. Quanto mais água entra, menos espaço sobra para o óleo passar, até que ele para de fluir (saturação residual).",
      "puloDoGato": "Mais Água = Menos permeabilidade para o Óleo.",
      "cascasDeBanana": {
        "C": "Incorreta. Dois fluidos competindo sempre atrapalham um ao outro.",
        "A": "Correta. Conceito fundamental de fluxo multifásico.",
        "E": "Incorreta. Só em casos teóricos impossíveis.",
        "D": "Incorreta. Existe uma saturação crítica.",
        "B": "Incorreta. Química impossível."
      },
      "dicaDeOuro": "A soma das permeabilidades relativas (kro + krw) costuma ser menor que 1."
    }
  },
  {
    "id": "q_f4_094",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Engenharia de Poço - Teste de Formação (DST)",
    "difficulty": "Médio",
    "statement": "Qual o principal objetivo de um Teste de Formação (Drill Stem Test - DST) em um poço exploratório?",
    "options": {
      "A": "Medir a profundidade final do poço com uma régua.",
      "B": "Apenas para ver se o poço está limpo.",
      "C": "Obter amostras de fluidos, medir pressões e avaliar a capacidade de produção (produtividade) e as características do reservatório.",
      "D": "Pintar a torre de perfuração.",
      "E": "Trocar a broca de perfuração."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O DST é o 'test-drive' do reservatório. A gente isola a zona de interesse e deixa o óleo fluir por um tempo. Olhando como a pressão cai e sobe, a gente descobre se o reservatório é grande, se é bom de produzir ou se está 'sujo' (dano de formação).",
      "puloDoGato": "DST = Amostra de Fluido + Pressão + Vazão.",
      "cascasDeBanana": {
        "B": "Incorreta. Limpeza é secundária.",
        "C": "Correta. Essencial para decidir se vale a pena investir no campo.",
        "A": "Incorreta. Usa-se perfilagem ou contagem de tubos para profundidade.",
        "E": "Incorreta. Isso é manobra (trip).",
        "D": "Incorreta. Manutenção estética."
      },
      "dicaDeOuro": "A análise de 'Build-up' (recuperação de pressão) no DST revela a permeabilidade média da formação."
    }
  },
  {
    "id": "q_f4_095",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Propriedades da Rocha - Molhabilidade",
    "difficulty": "Médio",
    "statement": "Uma rocha reservatório é dita 'molhável ao óleo' quando:",
    "options": {
      "A": "O óleo tem maior afinidade com a superfície da rocha do que a água, tendendo a se espalhar e cobrir os grãos minerais.",
      "B": "O óleo flutua sobre a água.",
      "C": "A rocha é feita de petróleo sólido.",
      "D": "A rocha repele qualquer tipo de líquido.",
      "E": "A água expulsa todo o óleo espontaneamente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Molhabilidade é quem 'gruda' na parede da rocha. Se a rocha gosta de óleo (oil-wet), o óleo fica agarrado nos grãos e a água passa pelo meio dos poros. Isso dificulta muito tirar o óleo de lá. A maioria dos reservatórios de arenito gosta mais de água (water-wet).",
      "puloDoGato": "Molhabilidade = Afinidade de contato fluido-rocha.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é densidade.",
        "A": "Correta. Define a distribuição dos fluidos nos poros.",
        "C": "Incorreta. Rocha é mineral.",
        "E": "Incorreta. Isso ocorre se for molhável à água.",
        "D": "Incorreta. Impossível para rochas porosas."
      },
      "dicaDeOuro": "Carbonatos tendem a ser mais molháveis ao óleo que arenitos."
    }
  },
  {
    "id": "q_f4_096",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Perfuração e Completação",
    "topic": "Escoamento Multifásico - Padrões de Fluxo",
    "difficulty": "Médio",
    "statement": "Em um poço vertical produzindo óleo e gás, o padrão de fluxo 'Slug Flow' (Fluxo em Pistão) é caracterizado por:",
    "options": {
      "A": "O óleo parado no fundo e o gás saindo pelo topo separadamente.",
      "B": "O gás e o óleo viajando em camadas paralelas perfeitamente lisas.",
      "C": "Grandes bolhas de gás (bolhas de Taylor) que ocupam quase toda a seção do tubo, alternadas com pacotes de líquido.",
      "D": "Uma névoa de óleo viajando em um núcleo de gás em alta velocidade.",
      "E": "Pequenas bolhas de gás dispersas uniformemente no óleo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Slug Flow é aquele fluxo que dá 'trancos'. Vem uma bolha gigante de gás, depois um 'chute' de óleo. Isso acontece porque as bolhas pequenas se juntam e formam uma bolhona que empurra o óleo acima dela. É barulhento e faz a pressão na cabeça do poço oscilar.",
      "puloDoGato": "Slug = Bolhas de Taylor + Oscilação de Pressão.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é 'Bubble Flow'.",
        "C": "Correta. Padrão muito comum e problemático para separadores.",
        "D": "Incorreta. Isso é 'Mist Flow' ou 'Annular Flow'.",
        "B": "Incorreta. 'Stratified Flow' (só ocorre em tubos horizontais).",
        "A": "Incorreta. Fluxo segregado total (não é padrão de escoamento contínuo)."
      },
      "dicaDeOuro": "O fluxo em pistão pode causar fadiga mecânica nas linhas de produção."
    }
  },
  {
    "id": "q_f4_097",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Engenharia de Reservatórios - Aquíferos",
    "difficulty": "Médio",
    "statement": "Um aquífero é considerado 'infinito' para fins de simulação de reservatório quando:",
    "options": {
      "A": "Sua extensão e volume são tão grandes que a queda de pressão causada pela produção do reservatório não atinge seus limites externos durante a vida do campo.",
      "B": "Ele não possui água.",
      "C": "A água dele é doce e potável.",
      "D": "Ele contém toda a água do oceano.",
      "E": "O aquífero fica acima do reservatório de óleo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Infinito na engenharia não é o que nunca acaba, mas o que é 'tão grande que não sinto o fim'. Se o reservatório bebe água do aquífero e ele continua mandando água com a mesma força sem cansar, a gente chama de infinito. Ele ajuda a manter a pressão do óleo alta por muito tempo.",
      "puloDoGato": "Aquífero Infinito = Pressão mantida por volume gigante.",
      "cascasDeBanana": {
        "D": "Incorreta. Escala exagerada.",
        "A": "Correta. Definição técnica de contorno.",
        "B": "Incorreta. Aquífero é de água.",
        "C": "Incorreta. Água de reservatório costuma ser muito salgada (água conata).",
        "E": "Incorreta. Normalmente ficam abaixo ou nas laterais."
      },
      "dicaDeOuro": "O modelo de Hurst-van Everdingen é clássico para calcular o influxo de água de aquíferos."
    }
  },
  {
    "id": "q_f4_098",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Recuperação Secundária - Injeção de Água",
    "difficulty": "Fácil",
    "statement": "Qual o principal objetivo da injeção de água em um reservatório de petróleo?",
    "options": {
      "A": "Diminuir a temperatura do reservatório.",
      "B": "Manutenção da pressão do reservatório e deslocamento mecânico do óleo em direção aos poços produtores.",
      "C": "Produzir sal marinho.",
      "D": "Lavar o óleo para ele ficar menos sujo.",
      "E": "Substituir o óleo por água potável para a cidade."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Quando você tira óleo, a pressão cai (igual murchar um pneu). Para o óleo continuar saindo, a gente injeta água por outros poços. A água 'preenche o vazio' mantendo a pressão alta e 'varre' o óleo que está no caminho, empurrando-o para os poços de produção.",
      "puloDoGato": "Injeção de Água = Manutenção de Pressão + Varredura.",
      "cascasDeBanana": {
        "A": "Incorreta. Não é limpeza química.",
        "B": "Correta. Método mais comum de recuperação secundária no mundo.",
        "C": "Incorreta. Pode acontecer, mas é efeito colateral indesejado às vezes.",
        "D": "Incorreta. Irrelevante.",
        "E": "Incorreta. Finalidade industrial."
      },
      "dicaDeOuro": "A eficiência da injeção depende da razão de mobilidade entre água e óleo."
    }
  },
  {
    "id": "q_f4_099",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Pressão Capilar",
    "difficulty": "Difícil",
    "statement": "A Pressão Capilar (Pc) em um sistema óleo-água dentro do reservatório é responsável por:",
    "options": {
      "A": "Fazer o óleo ferver.",
      "B": "Aumentar a gravidade da Terra.",
      "C": "Manter uma zona de transição entre o contato óleo-água (WOC) e a zona de óleo puro, onde ambos os fluidos coexistem.",
      "D": "Transformar óleo em gás.",
      "E": "Explodir a rocha reservatório."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Pressão capilar é a força de 'sucção' dos poros pequenos. Em canudos muito finos, a água sobe sozinha. No reservatório, isso cria uma bagunça: não tem uma linha reta separando água de óleo; tem uma zona cinzenta (transição) onde tem um pouco de cada, porque a rocha 'segura' a água nos poros menores.",
      "puloDoGato": "Pc = Zona de Transição + Curva de Saturação.",
      "cascasDeBanana": {
        "A": "Incorreta. Fenômeno de interface, não térmico.",
        "C": "Correta. Essencial para o cálculo de reservas (STOOIP).",
        "E": "Incorreta. Pressões capilares são pequenas.",
        "D": "Incorreta. Termodinâmica.",
        "B": "Incorreta. Sem nexo."
      },
      "dicaDeOuro": "Quanto menor o poro, maior a pressão capilar e mais alta a zona de transição."
    }
  },
  {
    "id": "q_f4_100",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Geologia e Reservatórios",
    "topic": "Reservatórios - Saturação de Água Conata (Swc)",
    "difficulty": "Médio",
    "statement": "O que é a 'Saturação de Água Conata' (ou Irredutível)?",
    "options": {
      "A": "Água que caiu das nuvens durante a perfuração.",
      "B": "A água que pode ser produzida facilmente pelo poço.",
      "C": "O volume de água que vira gelo no reservatório.",
      "D": "A saturação mínima de água que permanece presa nos poros da rocha devido a forças capilares e não pode ser removida pelo fluxo de óleo.",
      "E": "Água usada para lavar as mãos na plataforma."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Mesmo no melhor reservatório de óleo do mundo, sempre tem um pouco de água lá. É a água que estava lá desde que a rocha nasceu. Ela fica 'grudada' nos cantinhos dos poros e o óleo não consegue expulsar ela. Por isso, a saturação de óleo (So) nunca é 100%; é sempre (1 - Swc).",
      "puloDoGato": "Swc = Água que não sai do lugar.",
      "cascasDeBanana": {
        "B": "Incorreta. Essa seria a água móvel.",
        "D": "Correta. Define o volume 'morto' de água no reservatório.",
        "A": "Incorreta. Infiltração externa.",
        "E": "Incorreta. Uso doméstico.",
        "C": "Incorreta. Reservatórios são quentes."
      },
      "dicaDeOuro": "Saber a Swc é vital para não superestimar quanto óleo tem no campo."
    }
  },
  {
    "id": "q_f4_101",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "discipline": "Perfuração e Completação",
    "topic": "Propriedades dos Fluidos - Viscosidade do Óleo",
    "difficulty": "Fácil",
    "statement": "Como a viscosidade de um óleo 'morto' (sem gás) se comporta com o aumento da temperatura?",
    "options": {
      "A": "Aumenta drasticamente.",
      "B": "Permanece exatamente a mesma.",
      "C": "Diminui, tornando o óleo mais fluido.",
      "D": "A viscosidade depende apenas da cor do óleo.",
      "E": "O óleo vira um sólido duro."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Pense no mel ou no óleo de cozinha no frio: ele fica grosso e difícil de despejar. Se você esquenta, ele fica 'ralinho'. Com o petróleo é igual. Reservatórios quentes são bons porque o óleo corre mais fácil para o poço.",
      "puloDoGato": "Temperatura sobe = Viscosidade desce.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso aconteceria se esfriasse.",
        "C": "Correta. Relação inversamente proporcional clássica em líquidos.",
        "B": "Incorreta. Líquidos são muito sensíveis à temperatura.",
        "E": "Incorreta. Só em casos de parafinas em temperaturas muito baixas.",
        "D": "Incorreta. Cor é ótica, não reologia."
      },
      "dicaDeOuro": "A viscosidade é um dos principais parâmetros na 'Razão de Mobilidade' (M)."
    }
  },
  {
    "id": "q_f4_138",
    "discipline": "Processamento Primário",
    "topic": "Tratamento de Óleo",
    "statement": "No processamento primário de petróleo, a separação água-óleo é uma etapa crítica. Quando a água encontra-se dispersa no óleo formando uma emulsão estável, qual equipamento é mais indicado para acelerar a coalescência das gotas de água?",
    "options": {
      "A": "Hidrociclone.",
      "B": "Tratador eletrostático.",
      "C": "Filtro coalescedor de gás.",
      "D": "Separador trifásico convencional.",
      "E": "Torre de destilação atmosférica."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Se a água e o óleo viraram uma 'maionese' (emulsão) difícil de separar só por gravidade, a gente dá um choque (campo elétrico) nela para as gotas de água se juntarem e caírem. Esse equipamento é o tratador eletrostático.",
      "puloDoGato": "Emulsão água em óleo muito estável = Tratador Eletrostático (usa campo elétrico para coalescência).",
      "cascasDeBanana": {
        "A": "O separador convencional separa a água livre, mas não quebra emulsões estáveis de forma eficiente.",
        "B": "",
        "C": "Hidrociclones são usados no tratamento da água produzida (para tirar gotas de óleo da água), não o contrário.",
        "D": "Torre de destilação é do refino, não do processamento primário.",
        "E": "Filtro coalescedor de gás é para secar gás, não para quebrar emulsão água-óleo."
      },
      "dicaDeOuro": "O campo elétrico no tratador polariza as gotas de água (que são condutoras), fazendo-as se atraírem, coalescerem (aumentarem de tamanho) e decantarem mais rápido conforme a Lei de Stokes."
    }
  },
  {
    "id": "q_f4_139",
    "discipline": "Processamento Primário",
    "topic": "Tratamento de Gás",
    "statement": "O gás natural produzido associado ao petróleo frequentemente contém água na fase vapor. A remoção dessa água (desidratação) é vital para evitar problemas operacionais. Qual problema severo a desidratação do gás previne durante seu escoamento em gasodutos?",
    "options": {
      "A": "O aumento da densidade do gás, dificultando a compressão.",
      "B": "A formação de asfaltenos nas paredes do duto.",
      "C": "A formação de hidratos, que podem causar o tamponamento do duto.",
      "D": "A elevação do poder calorífico do gás natural.",
      "E": "A condensação retrograda de hidrocarbonetos pesados."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "A água no gás é um veneno. Sob alta pressão e baixa temperatura (cenário comum em dutos submarinos), ela se junta com as moléculas do gás e forma uma 'pedra de gelo' chamada hidrato, que entope tudo.",
      "puloDoGato": "Água no gás natural + Alta Pressão + Baixa Temperatura = Formação de Hidratos.",
      "cascasDeBanana": {
        "A": "Asfaltenos são problemas do óleo pesado, não do gás natural.",
        "B": "Condensação retrograda envolve hidrocarbonetos (líquidos de gás natural), não água.",
        "C": "",
        "D": "A desidratação na verdade aumenta o poder calorífico, o que é algo bom, mas não é um 'problema prevenido' no escoamento.",
        "E": "A água não altera a densidade a ponto de ser o problema principal para a compressão."
      },
      "dicaDeOuro": "Os métodos mais comuns para desidratação do gás são a absorção por TEG (Trietilenoglicol) e a adsorção por peneiras moleculares."
    }
  },
  {
    "id": "q_f4_140",
    "discipline": "Elevação e Escoamento",
    "topic": "Elevação Artificial - Gas Lift",
    "statement": "No método de elevação artificial por Gas Lift Contínuo (GLC), gás a alta pressão é injetado na coluna de produção. Qual é o mecanismo físico principal que promove o aumento da vazão de produção neste método?",
    "options": {
      "A": "A energia cinética do gás arrasta o líquido pelas paredes da coluna.",
      "B": "A mistura do gás com o fluido reduz a densidade média da coluna hidrostática, diminuindo a pressão de fundo fluente (BHP).",
      "C": "O gás injetado dissolve-se no óleo, reduzindo drasticamente a sua viscosidade.",
      "D": "O gás atua como um pistão mecânico, empurrando a coluna de líquido de forma intermitente.",
      "E": "O gás aumenta a temperatura do fluido, reduzindo as perdas de carga por atrito."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Ao injetar gás no tubo, o líquido fica 'aerado' (cheio de bolhas). Como o gás é leve, a mistura toda fica mais leve. Isso diminui o peso da coluna de fluido no fundo do poço, facilitando pro reservatório empurrar o óleo pra cima.",
      "puloDoGato": "Gas Lift Contínuo = Aeração do fluido = Redução da densidade = Menor pressão no fundo (BHP).",
      "cascasDeBanana": {
        "C": "Embora um pouco de gás possa se dissolver, o objetivo principal é a aeração mecânica, não a redução de viscosidade.",
        "A": "O arraste existe, mas o mecanismo propulsor principal é a redução da densidade hidrostática.",
        "D": "Isso descreve o Gas Lift Intermitente (GLI), onde o gás atua como pistão.",
        "E": "O gás injetado geralmente sofre expansão e esfria o fluido (efeito Joule-Thomson), o que pode até agravar problemas térmicos."
      },
      "dicaDeOuro": "A injeção de gás tem um limite ótimo. Se injetar gás demais, o atrito aumenta muito e a vazão de produção passa a cair (curva de performance do gas lift)."
    }
  },
  {
    "id": "q_f4_141",
    "discipline": "Elevação e Escoamento",
    "topic": "Escoamento Multifásico",
    "statement": "No escoamento multifásico horizontal em tubulações, os padrões de escoamento dependem das velocidades superficiais das fases. Qual padrão é caracterizado por bolsões de gás viajando na parte superior do tubo, intercalados por golfadas de líquido que ocupam toda a seção transversal?",
    "options": {
      "A": "Escoamento em Bolhas.",
      "B": "Escoamento em Golfadas (Slug Flow).",
      "C": "Escoamento Estratificado.",
      "D": "Escoamento em Névoa.",
      "E": "Escoamento Anular."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O escoamento em golfadas (ou slug) é aquele que vem 'aos trancos'. Vem uma bolhona de gás em cima, seguida de um pistão de líquido que preenche o tubo todo. Causa muita vibração.",
      "puloDoGato": "Golfadas / Intermitente / Bolhas de Taylor / Pistão de líquido = Slug Flow (Golfadas).",
      "cascasDeBanana": {
        "C": "Estratificado tem o líquido embaixo e o gás em cima, fluindo lisos, separados por uma interface contínua.",
        "A": "Bolhas pequenas dispersas no líquido contínuo.",
        "E": "Anular tem o gás no centro (núcleo) muito rápido e um filme de líquido grudado na parede do tubo.",
        "D": "Névoa (mist) tem gás contínuo com gotículas de líquido dispersas."
      },
      "dicaDeOuro": "O escoamento em golfadas (Slug) é muito evitado no design de dutos porque as flutuações de pressão e o impacto do líquido causam fadiga na tubulação e sobrecarregam os separadores na plataforma."
    }
  },
  {
    "id": "q_f4_400",
    "discipline": "Elevação e Escoamento",
    "topic": "Bombeio Centrífugo Submerso (BCS)",
    "statement": "O método de Bombeio Centrífugo Submerso (BCS) é muito eficiente para elevar grandes vazões de fluidos. No entanto, qual a principal desvantagem ou limitação operacional deste sistema em poços de petróleo?",
    "options": {
      "A": "Necessidade de compressores de gás de alta potência na plataforma.",
      "B": "Limitação de profundidade de instalação máxima de 500 metros.",
      "C": "Alta sensibilidade à presença de gás livre na sucção da bomba.",
      "D": "Baixa eficiência em poços com alta razão água-óleo (BSW).",
      "E": "Incapacidade de operar em poços direcionais ou horizontais."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "A bomba centrífuga foi feita pra bombear líquido. Se entrar muito gás nela, o gás ocupa espaço, a bomba 'perde a pegada' na água/óleo e para de empurrar (o famoso 'gas lock'). Gás é o maior inimigo do BCS.",
      "puloDoGato": "BCS = Ótimo pra líquido = Péssimo pra gás (sofre bloqueio por gás / gas lock).",
      "cascasDeBanana": {
        "E": "BCS pode operar em poços direcionais, embora exija cuidado na curvatura (dogleg) para não danificar o eixo.",
        "B": "BCS é instalado a milhares de metros de profundidade no pré-sal.",
        "A": "Compressores são usados no Gas Lift, o BCS usa motores elétricos.",
        "D": "Pelo contrário, BCS é excelente quando o poço produz muita água (alto BSW)."
      },
      "dicaDeOuro": "Para contornar o problema do gás no BCS, instalam-se Separadores de Gás Rotativos na base da bomba para desviar o gás para o espaço anular antes que ele entre nos rotores."
    }
  },
  {
    "id": "q_f4_401",
    "discipline": "Elevação e Escoamento",
    "topic": "Garantia de Escoamento (Flow Assurance)",
    "statement": "Na garantia de escoamento em linhas submarinas, a deposição de parafinas é um problema comum quando a temperatura do fluido diminui. Qual método termoquímico é frequentemente utilizado para limpar tubulações já obstruídas por parafina?",
    "options": {
      "A": "Squeeze de solventes orgânicos quentes (como xileno ou tolueno).",
      "B": "Despressurização abrupta da linha (blowdown).",
      "C": "Injeção de inibidores termodinâmicos de hidrato (MEG).",
      "D": "Uso de pigs raspadores com injeção de ácido clorídrico (HCl).",
      "E": "Injeção contínua de metanol no poço produtor."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "A parafina é como uma 'cera de vela' que endurece no frio. Pra tirar essa cera impregnada do cano, a gente tem que derreter ela com algo quente e que dissolva cera (um solvente forte, tipo querosene/xileno quente).",
      "puloDoGato": "Remoção corretiva de Parafina = Solvente quente (Xileno/Tolueno) + Raspadores Térmicos.",
      "cascasDeBanana": {
        "E": "Metanol previne hidratos, não atua bem em parafinas solidificadas.",
        "D": "Ácido (HCl) é usado para estimulação de poços (dissolver rocha carbonática) ou remover incrustações inorgânicas (scale), não cera orgânica.",
        "C": "MEG (Monoetilenoglicol) também previne hidratos.",
        "B": "Despressurizar é técnica para dissociar hidratos; na parafina, a despressurização não derrete o depósito."
      },
      "dicaDeOuro": "A temperatura na qual a parafina começa a cristalizar e aparecer no óleo é chamada de Temperatura de Aparecimento de Cristais (TIAC). Manter o fluido acima do TIAC é a regra de ouro em Flow Assurance térmico."
    }
  },
  {
    "id": "q_f4_402",
    "discipline": "Elevação e Escoamento",
    "topic": "Bombeio Mecânico",
    "statement": "O Bombeio Mecânico com hastes (Cavalinho) é um dos métodos mais antigos e visualmente icônicos da indústria do petróleo. Qual componente no fundo do poço é diretamente responsável por reter a coluna de fluido quando o pistão desce?",
    "options": {
      "A": "O mandril de injeção de gás.",
      "B": "A válvula de passeio (traveling valve).",
      "C": "O motor do equipamento de superfície.",
      "D": "A válvula de pé (standing valve).",
      "E": "O polidor de haste (polished rod)."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "A bomba no fundo tem duas portinhas (válvulas). Quando a haste puxa pra cima, a porta de cima (passeio) fecha e carrega o óleo pra cima; a porta de baixo (pé) abre e deixa o óleo entrar na bomba. Quando a haste desce, a porta de baixo (pé) tranca pra segurar a coluna e não deixar o óleo cair de volta no poço.",
      "puloDoGato": "Standing Valve (Pé) = Fica fixa, segura o óleo na descida. Traveling Valve (Passeio) = Sobe e desce com o pistão.",
      "cascasDeBanana": {
        "B": "A válvula de passeio abre na descida para o pistão atravessar o fluido e fecha na subida para puxar o fluido.",
        "E": "A haste polida é a parte lisa lá na superfície que entra na caixa de gaxetas para evitar vazamentos.",
        "C": "O motor não segura a coluna hidrostática no fundo.",
        "A": "Mandril é componente do Gas Lift, não do Bombeio Mecânico."
      },
      "dicaDeOuro": "O bombeio mecânico é muito usado em poços onshore rasos ou terrestres, mas é raríssimo no offshore brasileiro, especialmente em águas profundas, devido ao peso da coluna de hastes."
    }
  },
  {
    "id": "q_f4_403",
    "discipline": "Elevação e Escoamento",
    "topic": "Curvas de Performance (IPR e VLP)",
    "statement": "Na Análise Nodal, a interação entre o reservatório e a elevação artificial é estudada cruzando-se a curva IPR e a curva VLP. O ponto de interseção entre essas duas curvas define:",
    "options": {
      "A": "O ponto de operação natural do poço (pressão de fundo fluente e vazão reais).",
      "B": "A vazão máxima teórica (AOF) que o reservatório pode entregar.",
      "C": "A temperatura de bolha do fluido no fundo do poço.",
      "D": "O ponto de início da cavitação na bomba.",
      "E": "A pressão de abandono do poço."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Imagine que o poço é uma queda de braço. A curva IPR (Reservatório) diz 'quanto eu consigo empurrar de óleo'. A curva VLP (Tubulação) diz 'quanto peso você tem que levantar'. Onde as duas curvas se cruzam, a força empata: é exatamente a vazão e a pressão que o poço vai produzir de verdade na vida real.",
      "puloDoGato": "Cruzamento IPR x VLP = Ponto de Operação do Poço.",
      "cascasDeBanana": {
        "E": "Pressão de abandono é definida por economia ou limites contratuais, não pelo cruzamento instantâneo das curvas.",
        "B": "AOF (Absolute Open Flow) é quando a pressão de fundo é zero na curva IPR, vazão teórica máxima imaginária.",
        "D": "Cavitação depende do NPSH e da rotação, não da IPR em si.",
        "C": "Temperatura de bolha depende do PVT e da termodinâmica do reservatório."
      },
      "dicaDeOuro": "A curva VLP (Vertical Lift Performance) geralmente tem um formato de 'J' ou gancho. Quando inverte, entra na região de escoamento instável (heading)."
    }
  },
  {
    "id": "q_f4_404",
    "discipline": "Elevação e Escoamento",
    "topic": "Gas Lift Intermitente",
    "statement": "Diferente do GLC (Contínuo), o Gas Lift Intermitente (GLI) é indicado para poços com características específicas. Qual perfil de poço é o alvo ideal para o GLI?",
    "options": {
      "A": "Poços de injeção de água para recuperação secundária.",
      "B": "Poços com Índice de Produtividade (IP) muito alto e alta pressão de reservatório.",
      "C": "Poços em águas ultraprofundas (Pré-Sal) produzindo milhares de barris/dia.",
      "D": "Poços com baixo Índice de Produtividade (IP) e baixa pressão estática de reservatório.",
      "E": "Poços com petróleo de altíssima viscosidade (óleo pesado acima de 1000 cP)."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Se o poço é 'preguiçoso' (dá pouco óleo e tem pouca pressão), não vale a pena ficar injetando gás o tempo todo. O GLI injeta um bolsão de gás de uma vez só, joga aquele 'tiro' de líquido pra cima, e depois o sistema para e espera o poço encher de novo devagarinho.",
      "puloDoGato": "GLI = Poços marginais, IP baixo, Pressão baixa (espera acumular e dá o 'tiro').",
      "cascasDeBanana": {
        "B": "Esses poços podem produzir por surgência natural ou usar GLC (contínuo) de forma muito eficiente.",
        "C": "No pré-sal, as vazões são altas. Usa-se GLC ou BCS. GLI inviabilizaria a logística de topside com 'golfadas' monstruosas intermitentes.",
        "A": "Poço injetor de água não precisa de gás para elevar fluido (já tá empurrando água pra baixo).",
        "E": "GLI é péssimo em óleo pesado porque o 'pistão de gás' atravessa o óleo viscoso (fenômeno de fallback ou escorregamento) e o líquido não sobe."
      },
      "dicaDeOuro": "A válvula de operação do GLI é projetada para abrir e fechar ciclicamente, controlada na superfície por um temporizador ou pressostato na linha de injeção."
    }
  },
  {
    "id": "q_f4_405",
    "discipline": "Processamento Primário",
    "topic": "Geração de Espuma",
    "statement": "Durante a separação gás-líquido em separadores primários, a formação de espuma na interface óleo-gás pode ser um problema grave. O principal impacto operacional da presença de espuma é:",
    "options": {
      "A": "Aumento do poder calorífico do gás exportado para a flare.",
      "B": "Redução do tempo de retenção do fluido, causando o arraste de líquido na corrente de gás (carry-over).",
      "C": "Corrosão alveolar acelerada nas chapas de aço inoxidável do vaso.",
      "D": "Diminuição do peso específico da mistura, acelerando a decantação da água produzida.",
      "E": "Precipitação de parafinas e asfaltenos no fundo do vaso."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Se o óleo gera muita espuma, aquela 'espumaceira' sobe até o topo do tanque onde fica a saída de gás. O gás, em vez de sair limpo, acaba arrastando a espuma (que é líquido sujo) lá pro compressor. Isso arrebenta o compressor (carry-over).",
      "puloDoGato": "Espuma no separador ocupa o espaço do gás = Gás sai arrastando líquido (Carry-Over).",
      "cascasDeBanana": {
        "A": "Se arrasta líquido, o gás exportado perde qualidade e não pode ir pra flare (chuva de fogo).",
        "E": "Asfaltenos caem por diferença de pressão/composição química, não por causa de espuma.",
        "D": "A espuma atrapalha a separação como um todo; não acelera nada.",
        "C": "Corrosão vem do H2S, CO2 ou cloretos da água, não da existência da espuma em si."
      },
      "dicaDeOuro": "Para combater a espuma, utiliza-se a injeção de antiespumantes químicos (defoamers) à base de silicone na entrada do separador ou ajusta-se a temperatura e a vazão interna com placas antiespuma."
    }
  },
  {
    "id": "q_f4_406",
    "discipline": "Processamento Primário",
    "topic": "Dessalgação do Petróleo",
    "statement": "A dessalgação do petróleo na planta de processamento visa reduzir o teor de sais (especialmente cloretos) do óleo exportado. Qual mecanismo é utilizado nas dessalgadoras eletrostáticas para remover os sais impregnados no óleo bruto?",
    "options": {
      "A": "Passagem do óleo por membranas de osmose reversa.",
      "B": "Evaporação seletiva da água salgada e condensação do óleo puro.",
      "C": "Reação com soda cáustica para cristalizar o sal e remoção por filtros de areia.",
      "D": "Injeção contínua de cloro gasoso para neutralizar os cátions de sódio.",
      "E": "Adição de água de lavagem doce (wash water) ao óleo seguida de ruptura da emulsão via campo elétrico."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O sal não fica solto no óleo, ele fica preso nas gotinhas microscópicas de água do mar espalhadas pelo óleo. Para tirar esse sal, injetamos 'água doce' para diluir esse sal. Depois, batemos choque (campo elétrico) na dessalgadora para essas gotas doces/salgadas se juntarem (coalescerem) e afundarem, levando o sal embora.",
      "puloDoGato": "Dessalgação = Injeção de Água Doce + Mistura + Quebra da Emulsão por Eletrostática.",
      "cascasDeBanana": {
        "B": "Destilação é no refino, e custaria muita energia só para tirar sal na plataforma.",
        "D": "O cloro já é o problema (cloretos que formam HCl na refinaria). Injetar mais cloro seria um desastre.",
        "A": "Óleo sujo de asfalteno/parafina entupiria uma membrana de osmose em segundos.",
        "C": "NaOH neutraliza ácidos naphtênicos, não remove o cloreto de sódio físico da água."
      },
      "dicaDeOuro": "Se o óleo for para a refinaria com muito sal (geralmente acima de 10 PTB - Pounds per Thousand Barrels), o sal vai reagir nos fornos, gerando ácido clorídrico (HCl) que corrói os dutos da refinaria de forma catastrófica."
    }
  },
  {
    "id": "q_f4_407",
    "discipline": "Processamento Primário",
    "topic": "Sistemas de Tratamento de Água Produzida",
    "statement": "A água produzida junto com o petróleo deve ser tratada antes de ser descartada no mar (descarte de acordo com normas ambientais - TOG) ou reinjetada no reservatório. Qual o equipamento clássico baseado em forças centrífugas utilizado para separar as gotas de óleo remanescentes dessa água?",
    "options": {
      "A": "Filtro tipo cesto (Strainer).",
      "B": "Vaso separador trifásico.",
      "C": "Hidrociclone líquido-líquido.",
      "D": "Flotador por Gás Induzido (IGF).",
      "E": "Dessalgador bifásico."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O hidrociclone é um tubo com formato de funil (cone). A água suja entra girando super rápido lá dentro. Como a água é mais pesada que o óleo, ela vai pras paredes e desce pelo buraco inferior. O óleo (mais levinho) fica no meio e sobe pelo buraco superior. Tudo por força centrífuga, sem partes móveis.",
      "puloDoGato": "Água Produzida + Remoção de óleo + Força Centrífuga = Hidrociclone líquido-líquido.",
      "cascasDeBanana": {
        "B": "Separador por gravidade (trifásico) é a primeira etapa, muito lento para remover as gotículas finas remanescentes na água.",
        "D": "O flotador IGF usa bolhas de gás que grudam no óleo e o levam para cima, não é baseado essencialmente em força centrífuga em cone rotativo.",
        "A": "Filtros param sólidos (areia), entopem rápido com óleo viscoso.",
        "E": "Dessalgador limpa o óleo bruto, não a água produzida em si."
      },
      "dicaDeOuro": "A Resolução CONAMA atual no Brasil estabelece que a água produzida descartada no mar deve ter um Teor de Óleos e Graxas (TOG) médio mensal de no máximo 29 mg/L (ou ppm)."
    }
  },
  {
    "id": "q_f4_408",
    "discipline": "Processamento Primário",
    "topic": "Tratamento de Gás - Adoçamento",
    "statement": "O gás natural classificado como 'gás ácido' possui altos teores de H2S (gás sulfídrico) e/ou CO2. O processo industrial utilizado para remover esses contaminantes ácidos da corrente de gás recebe o nome de 'adoçamento'. Qual o método de absorção mais comum para realizar o adoçamento do gás natural?",
    "options": {
      "A": "Absorção química com soluções de aminas (MEA, DEA, MDEA).",
      "B": "Contato com leitos de zeólitas em oscilação de temperatura (TSA).",
      "C": "Injeção de sequestrantes de H2S em linha contínua.",
      "D": "Resfriamento criogênico em caixas frias (Cold Box) com turbo-expansores.",
      "E": "Absorção com soluções de glicol (TEG)."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Aminas são bases químicas. Gás H2S e CO2 formam compostos ácidos na água. A química básica ensina que Ácido + Base = Reação. Então, fazemos o gás sujo 'tomar banho' numa torre cheia de solução de amina. A amina 'gruda' (absorve) o ácido e o gás sai limpo em cima. Isso é o adoçamento.",
      "puloDoGato": "Adoçamento do Gás (tirar H2S e CO2) = Unidade de Aminas.",
      "cascasDeBanana": {
        "E": "Glicol tira ÁGUA (desidratação), não tira ácidos de forma significativa.",
        "B": "Zeólitas podem reter CO2, mas amina química é o padrão global industrial mais comum para correntes massivas.",
        "C": "Sequestrantes são usados (scavengers) mas só para volumes minúsculos de H2S (caro e não regenerável). Para volumes grandes, usa-se absorção por amina regenerável.",
        "D": "Cold Box / Turbo-expansores são para tirar o GLP (C3/C4) do gás, fracionamento de LGN."
      },
      "dicaDeOuro": "O H2S é extremamente tóxico, fatal em baixíssimas concentrações (ppm), e, junto com água, é um poderoso agente de corrosão (sulfídrica) e fadiga em dutos."
    }
  },
  {
    "id": "q_f4_409",
    "discipline": "Processamento Primário",
    "topic": "Armazenamento e Offloading",
    "statement": "Em um FPSO (Floating Production Storage and Offloading), o processo de offloading refere-se a:",
    "options": {
      "A": "Transferência do petróleo armazenado nos tanques do FPSO para navios aliviadores (shuttle tankers).",
      "B": "O lançamento da água produzida e tratada diretamente no mar aberto.",
      "C": "Remoção de areia e borra de asfalteno acumulada nos tanques de carga do navio.",
      "D": "Queima do gás inerte na flare em situações de parada de emergência (ESD).",
      "E": "Injeção do excesso de gás natural produzido de volta na jazida para manter a pressão."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "A sigla FPSO descreve tudo que o navio faz: Produz, Armazena (Storage) e Exporta (Offloading). Offloading é o ato de conectar uma mangueira gigante entre o FPSO e um navio petroleiro que chegou lá para pegar o óleo e levar pro continente.",
      "puloDoGato": "Offloading = Transferência de óleo do FPSO para o navio exportador (aliviador).",
      "cascasDeBanana": {
        "C": "Isso se chama limpeza de tanques ou purga.",
        "E": "Isso é reinjeção de gás, não offloading.",
        "D": "Isso é o sistema de alívio e tocha (blowdown/flare).",
        "B": "Isso é o descarte de água produzida (produced water overboard)."
      },
      "dicaDeOuro": "Durante o offloading, o posicionamento dinâmico (DP) dos navios é crítico. Em águas brasileiras, frequentemente um navio fica atracado em tandem (um atrás do outro) devido às correntes oceânicas e ventos."
    }
  },
  {
    "id": "q_f4_500",
    "discipline": "Perfuração e Completação",
    "topic": "Fluidos de Perfuração",
    "statement": "O fluido de perfuração (lama) desempenha diversas funções cruciais durante a construção de um poço. Durante as manobras (retirada da coluna de perfuração), qual propriedade reológica do fluido é fundamental para evitar que os cascalhos já cortados caiam de volta pro fundo do poço?",
    "options": {
      "A": "Viscosidade plástica.",
      "B": "Força gel (Gel Strength).",
      "C": "Densidade (Massa específica).",
      "D": "Teor de sólidos (Sand content).",
      "E": "Ponto de escoamento (Yield Point)."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Quando a broca para de girar e a bomba desliga pra trocar a tubulação (manobra), a lama para de circular. Se a lama fosse igual água, as pedrinhas iam afundar rápido pro fundo. Mas a lama tem a 'força gel', ela vira uma gelatina quando para, segurando as pedras suspensas no ar (ou melhor, na lama).",
      "puloDoGato": "Fluidos tixotrópicos: Parou de bater, vira gel (Força Gel) = Segura os cascalhos em suspensão.",
      "cascasDeBanana": {
        "A": "Viscosidade plástica é a resistência ao fluxo contínuo causada pelo atrito dos sólidos.",
        "E": "Yield Point ajuda a carregar o cascalho DURANTE a circulação, mas na parada total, o que domina é a Força Gel.",
        "C": "A densidade controla a pressão hidrostática para não dar blowout (kick), mas não segura pedras paradas.",
        "D": "Teor de areia é algo indesejável que se tenta remover, pois desgasta os equipamentos."
      },
      "dicaDeOuro": "Essa propriedade de virar gel quando parado e voltar a ser líquido quando agitado é chamada de tixotropia."
    }
  },
  {
    "id": "q_f4_501",
    "discipline": "Perfuração e Completação",
    "topic": "Controle de Poço (Well Control)",
    "statement": "Um kick ocorre quando a pressão de formação supera a pressão hidrostática da coluna de fluido no poço, permitindo a invasão de fluidos (gás, óleo ou água) no anular. Qual é a principal função do BOP (Blowout Preventer)?",
    "options": {
      "A": "Cortar a rocha em formações extremamente duras.",
      "B": "Sinalizar eletronicamente a presença de gás na superfície.",
      "C": "Aumentar a densidade da lama de perfuração automaticamente.",
      "D": "Vedar o poço na superfície ou no leito marinho, impedindo que o kick se transforme em um blowout.",
      "E": "Separar os cascalhos do fluido de perfuração que retorna do poço."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O BOP é a última linha de defesa. Se a pressão do fundo ganhar da pressão da lama, o fluido da terra vai subir rasgando. O BOP é uma válvula gigante e absurdamente forte que 'esmaga' o tubo ou fecha o buraco totalmente para não deixar ocorrer a explosão do poço (blowout).",
      "puloDoGato": "Kick (invasão controlável) -> Falha no controle -> Blowout (explosão incontrolável). O BOP fecha o poço para evitar o blowout.",
      "cascasDeBanana": {
        "A": "Quem aumenta a densidade da lama é a equipe química adicionando baritina nos tanques de lama.",
        "B": "Quem corta a rocha é a broca (drill bit).",
        "C": "Quem acusa gás são os sensores de gás (mud logging).",
        "D": "",
        "E": "Quem separa cascalho é a peneira vibratória (shale shaker)."
      },
      "dicaDeOuro": "O BOP possui várias gavetas (rams). O Shear Ram (gaveta cisalhante) é capaz de cortar o tubo de aço ao meio e fechar o poço cegamente em caso de emergência extrema."
    }
  },
  {
    "id": "q_f4_502",
    "discipline": "Perfuração e Completação",
    "topic": "Revestimento de Poços (Casing)",
    "statement": "O projeto de revestimento de um poço offshore de águas profundas prevê a descida de várias fases de tubulação. Qual das opções abaixo descreve a ordem típica (da superfície para o fundo) das fases de revestimento?",
    "options": {
      "A": "Condutor, Superfície, Intermediário, Produção.",
      "B": "Intermediário, Superfície, Produção, Condutor.",
      "C": "Superfície, Condutor, Intermediário, Produção.",
      "D": "Produção, Intermediário, Superfície, Condutor.",
      "E": "Condutor, Produção, Intermediário, Superfície."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O poço é como uma antena telescópica invertida, começa largo e vai afinando. O primeiro cano grosso pra segurar o solo fofo raso é o Condutor. Depois desce o de Superfície. No meio do caminho tem o Intermediário. Lá no fundo, na rocha com óleo, fica o de Produção.",
      "puloDoGato": "Ordem de Revestimentos: Condutor (maior) -> Superfície -> Intermediário -> Produção (menor e mais profundo).",
      "cascasDeBanana": {
        "E": "Produção fica no fundo.",
        "C": "Condutor vem antes da Superfície.",
        "B": "Intermediário fica no meio.",
        "D": "A ordem está invertida."
      },
      "dicaDeOuro": "O revestimento condutor em águas profundas é frequentemente cravado no fundo do mar por jateamento (jetting) antes mesmo de a broca iniciar a perfuração normal."
    }
  },
  {
    "id": "q_f4_503",
    "discipline": "Perfuração e Completação",
    "topic": "Cimentação Primária",
    "statement": "A cimentação primária consiste em bombear pasta de cimento para o espaço anular entre o revestimento e a formação rochosa. Dentre as alternativas, qual NÃO é um objetivo principal da cimentação primária?",
    "options": {
      "A": "Aumentar a permeabilidade da rocha produtora para facilitar o fluxo de óleo.",
      "B": "Promover o isolamento zonal, evitando a comunicação de fluidos entre diferentes camadas rochosas.",
      "C": "Proteger o revestimento contra a corrosão dos fluidos da formação.",
      "D": "Garantir a integridade estrutural do poço contra pressões externas.",
      "E": "Suportar o peso axial da coluna de revestimento."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O cimento serve para colar o tubo na parede de pedra e tampar qualquer buraco para a água não misturar com o óleo (isolamento). Cimento é uma barreira impermeável, então ele diminui a permeabilidade, não aumenta.",
      "puloDoGato": "O cimento TAPA buracos. Para aumentar a permeabilidade da rocha produtora e 'abrir caminho', usa-se o faturamento hidráulico (fracking) ou acidificação, e não cimento.",
      "cascasDeBanana": {
        "C": "O cimento envolve o aço e o protege da água salgada/H2S.",
        "B": "Isolamento zonal é o principal objetivo da cimentação.",
        "E": "O cimento agarra o tubo e ajuda a suportar o seu enorme peso.",
        "D": "O cimento endurecido resiste ao colapso."
      },
      "dicaDeOuro": "O ensaio de CBL/VDL (Cement Bond Log) é o perfilamento acústico utilizado para verificar se a cimentação ficou boa, ou seja, se o cimento aderiu bem ao tubo e à rocha sem deixar 'canais' vazios."
    }
  },
  {
    "id": "q_f4_504",
    "discipline": "Perfuração e Completação",
    "topic": "Completação - Canhoneio",
    "statement": "Após a cimentação do revestimento de produção, o poço encontra-se blindado em relação ao reservatório. Qual operação é realizada para restabelecer a comunicação entre o interior do poço e a rocha produtora?",
    "options": {
      "A": "Canhoneio (Perforating).",
      "B": "Squeeze de cimento.",
      "C": "Gravel Pack (Empacotamento com cascalho).",
      "D": "Estimulação ácida de matriz.",
      "E": "Swab (Pistoneio)."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Você desceu um tubo de aço e colou ele com cimento no fundo. O óleo não consegue mais entrar. Então a gente desce um 'canhão' cheio de explosivos pequenos e dá uns tiros que furam o aço, quebram o cimento e entram na pedra. Esses tiros abrem as portinhas pro óleo entrar.",
      "puloDoGato": "Ação de furar o aço e o cimento com explosivos para o óleo fluir = Canhoneio.",
      "cascasDeBanana": {
        "B": "Squeeze é injetar cimento sob pressão para tapar buracos acidentais (corrigir falhas).",
        "C": "Gravel Pack é colocar areia especial (cascalho) para filtrar o óleo e não deixar entrar areia da formação, feito DEPOIS do canhoneio.",
        "D": "O ácido limpa os poros da rocha, mas se o tubo estiver fechado, o ácido não chega lá. O canhoneio vem primeiro.",
        "E": "Swab é puxar líquido pra aliviar o peso no fundo e fazer o poço 'surgir', não faz furos."
      },
      "dicaDeOuro": "A diferença de pressão entre o poço e a formação na hora do tiro é crucial. Se a pressão do poço estiver MENOR que a da pedra (underbalance), assim que ocorrer o tiro, o óleo já entra limpando os detritos da explosão."
    }
  },
  {
    "id": "q_final_5031",
    "discipline": "Geologia e Reservatórios",
    "topic": "Rocha Reservatório - Porosidade",
    "statement": "Qual a definição de 'Porosidade' em uma rocha reservatório de petróleo?",
    "options": {
      "A": "A quantidade de sal presente na rocha.",
      "B": "A facilidade com que o fluido escoa pela rocha.",
      "C": "A profundidade da rocha em relação ao nível do mar.",
      "D": "A razão entre o volume de vazios (poros) e o volume total da rocha, representando a capacidade de armazenamento de fluidos.",
      "E": "A dureza da rocha medida na escala Mohs."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pense na rocha como uma esponja de pedra. A porosidade diz quanto espaço tem lá dentro pra guardar óleo. Uma porosidade de 20% significa que 1/5 da rocha é 'buraco' preenchido por fluido.",
      "puloDoGato": "Porosidade = Armazenamento. Permeabilidade = Fluxo.",
      "cascasDeBanana": {
        "B": "Isso é a Permeabilidade.",
        "E": "Mineralogia."
      },
      "dicaDeOuro": "Rochas sedimentares como arenitos costumam ser excelentes reservatórios devido à sua alta porosidade."
    }
  },
  {
    "id": "q_final_5032",
    "discipline": "Elevação e Escoamento",
    "topic": "Gas Lift - Funcionamento",
    "statement": "No método de elevação artificial por 'Gas Lift', qual o mecanismo físico que permite o aumento da produção de óleo?",
    "options": {
      "A": "O gás empurra o óleo como se fosse um pistão mecânico.",
      "B": "A injeção de gás reduz a densidade da coluna de fluido no poço, diminuindo a pressão hidrostática e permitindo que a pressão do reservatório eleve o óleo.",
      "C": "O gás é usado apenas para iluminar o fundo do poço.",
      "D": "O gás resfria o óleo, tornando-o menos viscoso.",
      "E": "O gás reage quimicamente com o óleo, transformando-o em água."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É como um canudo com furinhos. Você sopra bolhas de gás no óleo, ele fica 'leve' (cheio de bolhas) e a pressão lá de baixo consegue empurrar ele pra cima com mais facilidade.",
      "puloDoGato": "Gas Lift = Redução da pressão hidrostática (efeito de aeração).",
      "cascasDeBanana": {
        "A": "Isso lembra o funcionamento do bombeio por cavidades progressivas ou pistão, mas não o gas lift.",
        "B": "",
        "C": "Gás geralmente é injetado quente ou na temperatura do poço.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O Gas Lift exige uma fonte de gás sob pressão e compressores na superfície."
    }
  },
  {
    "id": "q_final_5033",
    "discipline": "Processamento Primário",
    "topic": "Separador Trifásico",
    "statement": "Quais são os três fluxos de saída principais de um separador trifásico em uma plataforma de petróleo?",
    "options": {
      "A": "Óleo, Gás e Água.",
      "B": "Petróleo, Gasolina e Diesel.",
      "C": "Metano, Etano e Propano.",
      "D": "Óleo, Gás e Sedimentos.",
      "E": "Água doce, Água salgada e Óleo."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O fluido que sai do poço é uma 'mistureba'. O separador trifásico usa a gravidade: o gás sobe, o óleo fica no meio e a água (mais pesada) desce.",
      "puloDoGato": "Separador Trifásico = Gás (topo) + Óleo (meio) + Água (fundo).",
      "cascasDeBanana": {
        "B": "Isso acontece na refinaria (destilação), não na plataforma.",
        "C": "Isso é separação de frações de gás."
      },
      "dicaDeOuro": "A eficiência da separação depende do tempo de residência do fluido dentro do vaso."
    }
  },
  {
    "id": "q_final_5034",
    "discipline": "Geologia e Reservatórios",
    "topic": "Permeabilidade Relativa",
    "statement": "O conceito de 'Permeabilidade Relativa' em reservatórios de petróleo refere-se a:",
    "options": {
      "A": "A profundidade da camada de pré-sal.",
      "B": "O custo de extração por barril.",
      "C": "A velocidade do som através da rocha.",
      "D": "A permeabilidade da rocha medida em relação à rocha vizinha.",
      "E": "A redução da capacidade de fluxo de um fluido (ex: óleo) devido à presença de outro fluido (ex: água ou gás) nos poros da rocha."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o poro está cheio de água, o óleo tem dificuldade de passar por ali. É como tentar correr numa calçada cheia de gente. A permeabilidade do óleo 'cai' por causa da água.",
      "puloDoGato": "Permeabilidade Relativa = Fluxo de um fluido na presença de outros.",
      "cascasDeBanana": {
        "D": "Permeabilidade é propriedade da rocha e dos fluidos locais.",
        "A": "Geologia estrutural."
      },
      "dicaDeOuro": "Quando a saturação de água aumenta, a permeabilidade relativa ao óleo diminui drasticamente."
    }
  },
  {
    "id": "q_final_5035",
    "discipline": "Elevação e Escoamento",
    "topic": "Bombeio Mecânico - Cavalo de Pau",
    "statement": "A unidade de bombeio mecânico (frequentemente chamada de 'cavalo de pau') utiliza qual princípio para elevar o petróleo?",
    "options": {
      "A": "Injeção de vapor de água sob alta pressão.",
      "B": "Uso de ímãs gigantes para atrair o metal do óleo.",
      "C": "Sucção a vácuo gerada por turbinas eólicas.",
      "D": "Explosões controladas no fundo do poço.",
      "E": "Movimento alternado de uma coluna de hastes que aciona uma bomba de fundo de poço."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Aquele movimento de 'gangorra' que vemos em terra serve para subir e descer uma vara de aço comprida (haste) que faz uma bomba lá embaixo funcionar como uma seringa, puxando o óleo.",
      "puloDoGato": "Bombeio Mecânico = Hastes + Bomba de Pistão + Unidade de Superfície.",
      "cascasDeBanana": {
        "A": "Isso é recuperação térmica (EOR).",
        "B": "Absurdo."
      },
      "dicaDeOuro": "É o método mais comum em campos terrestres (onshore) com baixa pressão."
    }
  },
  {
    "id": "q_final_5036",
    "discipline": "Processamento Primário",
    "topic": "Tratamento de Água Produzida",
    "statement": "Qual o principal objetivo do tratamento da 'água produzida' antes do seu descarte ou reinjeção?",
    "options": {
      "A": "Aumentar a temperatura da água.",
      "B": "Adicionar sal para torná-la mais densa.",
      "C": "Transformá-la em água potável para consumo humano na plataforma.",
      "D": "Remover resíduos de óleo, produtos químicos e sólidos em suspensão para atender aos limites ambientais ou evitar danos ao reservatório.",
      "E": "Extrair ouro e minerais valiosos da água."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A água que vem com o óleo é 'suja'. Se você jogar no mar com óleo, polui tudo. Se reinjetar no poço sem tratar, ela entope os poros da rocha (dano de formação).",
      "puloDoGato": "Tratamento de Água = TOG (Teor de Óleo e Graxas) baixo.",
      "cascasDeBanana": {
        "C": "Muito caro e desnecessário; usa-se dessalinização para consumo.",
        "E": "Inviável."
      },
      "dicaDeOuro": "Hidrociclones e Flotadores são equipamentos comuns no tratamento desta água."
    }
  },
  {
    "id": "q_final_5037",
    "discipline": "Geologia e Reservatórios",
    "topic": "Tipos de Rocha - Rocha Geradora",
    "statement": "Para que um sistema petrolífero exista, é necessária uma 'Rocha Geradora'. Qual a característica principal desta rocha?",
    "options": {
      "A": "Ela deve ser uma rocha vulcânica muito dura.",
      "B": "Ela deve ser rica em matéria orgânica e ter passado por condições de pressão e temperatura adequadas (janela de geração) para transformar o querogênio em hidrocarbonetos.",
      "C": "Ela deve estar localizada na superfície da terra.",
      "D": "Ela deve ser muito porosa e permeável para o óleo escoar.",
      "E": "Ela deve ser composta exclusivamente de cristais de quartzo."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A rocha geradora é a 'cozinha'. Geralmente é um folhelho (shale) que acumulou algas e plantas há milhões de anos. Com calor e pressão, essa 'comida' vira petróleo.",
      "puloDoGato": "Rocha Geradora = Origem do petróleo (Matéria Orgânica + Calor + Tempo).",
      "cascasDeBanana": {
        "A": "Isso é a Rocha Reservatório.",
        "B": "",
        "C": "Rochas ígneas raramente são geradoras.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Após ser gerado, o petróleo 'migra' da rocha geradora para a rocha reservatório."
    }
  },
  {
    "id": "q_final_5038",
    "discipline": "Elevação e Escoamento",
    "topic": "BCS - Bombeio Centrífugo Submerso",
    "statement": "O método de elevação BCS (Bombeio Centrífugo Submerso) é particularmente indicado para quais cenários?",
    "options": {
      "A": "Extração de petróleo em areias asfálticas superficiais.",
      "B": "Poços que produzem apenas gás seco.",
      "C": "Poços offshore com altas vazões de líquido e profundidades elevadas.",
      "D": "Poços onde a pressão natural é suficiente para o óleo chegar à superfície.",
      "E": "Poços terrestres de baixíssima produção."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O BCS é um motor elétrico gigante com várias turbinas (estágios) colocado no fundo do poço. Ele é muito potente e consegue empurrar muita água e óleo pra cima. Muito comum no Brasil (Campos de Marlim, etc).",
      "puloDoGato": "BCS = Alta Vazão + Offshore + Energia Elétrica no Fundo.",
      "cascasDeBanana": {
        "E": "Caro demais para poços pequenos; usa-se bombeio mecânico.",
        "D": "Se a pressão é boa, o poço é 'surgente' e não precisa de bomba."
      },
      "dicaDeOuro": "O cabo elétrico que leva energia para a bomba de fundo é um dos componentes mais críticos do sistema."
    }
  },
  {
    "id": "q_final_5039",
    "discipline": "Processamento Primário",
    "topic": "Desidratação de Gás Natural",
    "statement": "Por que o gás natural precisa passar por um processo de desidratação (remoção de água) antes de ser transportado por gasodutos?",
    "options": {
      "A": "Para mudar a cor do gás para azul.",
      "B": "Para reduzir o valor comercial do produto.",
      "C": "Para evitar a formação de hidratos (sólidos que entopem tubos) e prevenir a corrosão interna por água ácida.",
      "D": "Para deixar o gás mais pesado e fácil de bombear.",
      "E": "Para aumentar a inflamabilidade do gás."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Água + Gás + Frio + Pressão = Hidrato. O hidrato parece um gelo seco que vira uma 'pedra' e trava tudo. Além disso, água com CO2 ou H2S vira ácido e 'come' o cano por dentro.",
      "puloDoGato": "Desidratação = Evitar Hidratos + Combater Corrosão.",
      "cascasDeBanana": {
        "D": "Água pesa e ocupa espaço inútil.",
        "E": "Gás seco queima melhor, mas o foco é a integridade do tubo."
      },
      "dicaDeOuro": "O glicol (TEG) é a substância química mais usada para 'chupar' a água do gás."
    }
  },
  {
    "id": "q_final_5040",
    "discipline": "Geologia e Reservatórios",
    "topic": "Rocha Selo",
    "statement": "Qual a função da 'Rocha Selo' (ou Cap Rock) em um sistema petrolífero?",
    "options": {
      "A": "Servir de base para a instalação da plataforma.",
      "B": "Aumentar a temperatura do reservatório.",
      "C": "Gerar o petróleo através do calor.",
      "D": "Filtrar as impurezas do óleo.",
      "E": "Atuar como uma barreira impermeável que impede que o petróleo continue migrando para cima e escape para a superfície, mantendo-o preso no reservatório."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A rocha selo é a 'tampa da panela'. Se não tiver ela, o óleo sobe até chegar na terra ou no mar e se perde. Geralmente são sais (como no pré-sal) ou argilas muito densas.",
      "puloDoGato": "Rocha Selo = Impermeabilidade + Barreira de Migração.",
      "cascasDeBanana": {
        "C": "Papel da rocha geradora.",
        "D": "Rocha não filtra óleo em escala industrial."
      },
      "dicaDeOuro": "A integridade da rocha selo é o que garante que o reservatório não tenha vazamentos geológicos."
    }
  },
  {
    "id": "q_final_5041",
    "discipline": "Elevação e Escoamento",
    "topic": "Pressão de Saturação (Bubble Point)",
    "statement": "O que acontece em um reservatório de óleo quando a pressão cai abaixo da 'Pressão de Saturação' (Ponto de Bolha)?",
    "options": {
      "A": "O reservatório explode devido ao aumento de pressão.",
      "B": "A água do mar invade o reservatório instantaneamente.",
      "C": "O óleo fica mais viscoso e difícil de produzir.",
      "D": "O óleo se transforma em rocha sólida.",
      "E": "O gás que estava dissolvido no óleo começa a se separar e formar bolhas livres."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine abrir uma Coca-Cola. Quando você abre, a pressão cai e as bolhas aparecem. No poço é igual: se a pressão cair muito, o gás sai do óleo. Isso pode ser bom (ajuda a empurrar o óleo) ou ruim (o gás corre mais rápido que o óleo e 'abandona' ele pra trás).",
      "puloDoGato": "P < Pbub = Gás livre no reservatório.",
      "cascasDeBanana": {
        "C": "O óleo na verdade fica mais denso/viscoso porque perdeu o gás, mas a característica principal é a formação das bolhas."
      },
      "dicaDeOuro": "Manter a pressão acima do ponto de bolha é uma estratégia comum de gerenciamento de reservatórios."
    }
  },
  {
    "id": "q_final_5042",
    "discipline": "Processamento Primário",
    "topic": "Tratamento de Gás - Adoçamento",
    "statement": "O processo de 'Adoçamento' do gás natural consiste na remoção de quais componentes?",
    "options": {
      "A": "Metano e Etano.",
      "B": "Nitrogênio e Oxigênio.",
      "C": "Gases ácidos como H2S (Gás Sulfídrico) e CO2 (Dióxido de Carbono).",
      "D": "Açúcar e glicose.",
      "E": "Areia e cascalho."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Gás com muito H2S é chamado de 'Gás Ácido' (Sour Gas). Ele fede a ovo podre, é extremamente tóxico (mata em segundos) e corrói metais. 'Adoçar' é tirar essa acidez pra ele ficar seguro e limpo.",
      "puloDoGato": "Adoçamento = Remoção de H2S e CO2.",
      "cascasDeBanana": {
        "D": "Piada com o nome 'adoçamento'.",
        "A": "Esses são os componentes bons do gás."
      },
      "dicaDeOuro": "As unidades de tratamento usam Aminas para realizar esse processo químico de limpeza."
    }
  },
  {
    "id": "q_final_5043",
    "discipline": "Geologia e Reservatórios",
    "topic": "Recuperação Secundária - Injeção de Água",
    "statement": "Qual o objetivo primordial da injeção de água em um reservatório de petróleo (Recuperação Secundária)?",
    "options": {
      "A": "Diluir o óleo para que ele fique menos viscoso.",
      "B": "Criar novas rochas geradoras.",
      "C": "Manter a pressão do reservatório e empurrar mecanicamente o óleo em direção aos poços produtores (varredura).",
      "D": "Resfriar o reservatório para evitar explosões.",
      "E": "Lavar o óleo para que ele saia mais limpo."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O reservatório é como um pneu furado perdendo pressão. A gente injeta água pra 'encher o pneu' de novo e fazer o óleo ser expulso. A água entra por um poço e 'empurra' o óleo pro outro poço.",
      "puloDoGato": "Injeção de Água = Manutenção de Pressão + Eficiência de Varredura.",
      "cascasDeBanana": {
        "A": "Água e óleo não se misturam bem sem químicos; diluição não é o foco.",
        "B": "Geologia leva milhões de anos."
      },
      "dicaDeOuro": "A qualidade da água injetada é crítica; ela deve ser filtrada e tratada para não danificar a rocha."
    }
  },
  {
    "id": "q_final_5044",
    "discipline": "Elevação e Escoamento",
    "topic": "Slug Flow (Escoamento em Golfadas)",
    "statement": "O regime de escoamento 'Slug Flow' em tubulações verticais de petróleo é caracterizado por:",
    "options": {
      "A": "O óleo se movendo como uma névoa fina no meio do gás.",
      "B": "A paralisação total do movimento do fluido.",
      "C": "Um fluxo constante e suave de apenas líquido.",
      "D": "O gás e o óleo se movendo em velocidades idênticas sem se misturarem.",
      "E": "Grandes bolhas de gás (pistões) que ocupam quase toda a seção do tubo, alternadas com pacotes de líquido."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É um fluxo 'aos trancos'. Vem uma bolha gigante de gás, depois um 'tapa' de óleo. Isso causa vibração nas tubulações e problemas nos separadores na superfície, que recebem picos de pressão.",
      "puloDoGato": "Slug Flow = Pistões de Gás + Golfadas de Líquido + Instabilidade.",
      "cascasDeBanana": {
        "C": "Escoamento Monofásico.",
        "A": "Mist Flow / Annular Flow."
      },
      "dicaDeOuro": "O uso de 'Slug Catchers' na chegada da plataforma serve para amortecer esses impactos."
    }
  },
  {
    "id": "q_final_5045",
    "discipline": "Processamento Primário",
    "topic": "Flare (Tocha)",
    "statement": "Qual a função de segurança do sistema de 'Flare' (Tocha) em uma unidade de produção de petróleo?",
    "options": {
      "A": "Iluminar a plataforma à noite para os helicópteros.",
      "B": "Sinalizar a localização da plataforma para outras embarcações.",
      "C": "Queimar de forma segura e controlada o excesso de gás que não pode ser processado ou em situações de emergência (alívio de pressão).",
      "D": "Atrair peixes para pesca esportiva.",
      "E": "Aquecer a água do alojamento dos funcionários."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Flare é a 'válvula de escape'. Se a pressão sobe demais e algo vai explodir, o sistema abre as válvulas e manda o gás pro Flare pra queimar longe das pessoas. É melhor queimar o gás do que deixar ele vazar (explosão) ou soltar metano puro no ar (efeito estufa).",
      "puloDoGato": "Flare = Alívio de Pressão + Queima de Emergência + Segurança Operacional.",
      "cascasDeBanana": {
        "A": "É uma consequência, mas não a função de projeto.",
        "B": "Existem luzes de navegação específicas para isso."
      },
      "dicaDeOuro": "Embora essencial para segurança, as empresas buscam o 'Zero Flaring' para reduzir o impacto ambiental e não desperdiçar energia."
    }
  },
  {
    "id": "q_auto_7132",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)?",
    "options": {
      "A": "Uma falha no motor da bomba.",
      "B": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "C": "A temperatura de congelamento.",
      "D": "Um vazamento no tubo.",
      "E": "A pressão de injeção de gás."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7133",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 1)",
    "options": {
      "A": "A pressão de injeção de gás.",
      "B": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "C": "Um vazamento no tubo.",
      "D": "A temperatura de congelamento.",
      "E": "Uma falha no motor da bomba."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7134",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 2)",
    "options": {
      "A": "A pressão de injeção de gás.",
      "B": "Um vazamento no tubo.",
      "C": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "D": "A temperatura de congelamento.",
      "E": "Uma falha no motor da bomba."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7135",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 3)",
    "options": {
      "A": "Uma falha no motor da bomba.",
      "B": "A temperatura de congelamento.",
      "C": "A pressão de injeção de gás.",
      "D": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "E": "Um vazamento no tubo."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7136",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V1",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 4)",
    "options": {
      "A": "A pressão de injeção de gás.",
      "B": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "C": "A temperatura de congelamento.",
      "D": "Uma falha no motor da bomba.",
      "E": "Um vazamento no tubo."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7137",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V2",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 5)",
    "options": {
      "A": "A pressão de injeção de gás.",
      "B": "Uma falha no motor da bomba.",
      "C": "A temperatura de congelamento.",
      "D": "Um vazamento no tubo.",
      "E": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7138",
    "discipline": "Elevação e Escoamento",
    "topic": "Conceitos e Práticas V2",
    "statement": "No escoamento multifásico, o que é 'Holdup' (Retenção)? (Variante 6)",
    "options": {
      "A": "A fração da área da seção transversal do tubo ocupada por um fluido específico (ex: líquido) em um dado instante.",
      "B": "A temperatura de congelamento.",
      "C": "A pressão de injeção de gás.",
      "D": "Uma falha no motor da bomba.",
      "E": "Um vazamento no tubo."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como os fluidos andam em velocidades diferentes (o gás é mais rápido), a quantidade de líquido 'retida' no tubo (holdup) é diferente da fração que foi injetada.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7139",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação?",
    "options": {
      "A": "Queimar o gás.",
      "B": "Congelar a água.",
      "C": "Aumentar a pressão do poço.",
      "D": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "E": "Limpar o sal."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7140",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 1)",
    "options": {
      "A": "Aumentar a pressão do poço.",
      "B": "Congelar a água.",
      "C": "Queimar o gás.",
      "D": "Limpar o sal.",
      "E": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7141",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 2)",
    "options": {
      "A": "Congelar a água.",
      "B": "Queimar o gás.",
      "C": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "D": "Limpar o sal.",
      "E": "Aumentar a pressão do poço."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7142",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 3)",
    "options": {
      "A": "Aumentar a pressão do poço.",
      "B": "Queimar o gás.",
      "C": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "D": "Limpar o sal.",
      "E": "Congelar a água."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7143",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 4)",
    "options": {
      "A": "Congelar a água.",
      "B": "Aumentar a pressão do poço.",
      "C": "Queimar o gás.",
      "D": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "E": "Limpar o sal."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7144",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 5)",
    "options": {
      "A": "Aumentar a pressão do poço.",
      "B": "Queimar o gás.",
      "C": "Congelar a água.",
      "D": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "E": "Limpar o sal."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7145",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 6)",
    "options": {
      "A": "Limpar o sal.",
      "B": "Aumentar a pressão do poço.",
      "C": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "D": "Queimar o gás.",
      "E": "Congelar a água."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7146",
    "discipline": "Processamento Primário",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual a função do 'Trocador de Calor' no processo de separação? (Variante 7)",
    "options": {
      "A": "Queimar o gás.",
      "B": "Aumentar a pressão do poço.",
      "C": "Limpar o sal.",
      "D": "Aquecer a emulsão de água e óleo para reduzir a viscosidade e facilitar a separação das fases.",
      "E": "Congelar a água."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O calor 'quebra' a emulsão, ajudando a água a desgrudar do óleo no vaso tratador.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_lote5_3_8200",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Mecânica dos Fluidos - Viscosidade",
    "statement": "A lei de Newton da viscosidade estabelece que a tensão de cisalhamento em um fluido é diretamente proporcional a qual grandeza?",
    "options": {
      "A": "Massa específica do fluido.",
      "B": "Pressão absoluta.",
      "C": "Temperatura do fluido.",
      "D": "Aceleração da gravidade.",
      "E": "Gradiente de velocidade (taxa de deformação por cisalhamento)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A viscosidade é a 'resistência ao escoamento'. Quanto mais rápido você tenta deformar (cisalhar) o fluido (gradiente de velocidade), mais ele 'segura' (tensão). O mel é mais 'duro' de mexer com a colher do que a água.",
      "puloDoGato": "Tensão de Cisalhamento = Viscosidade Dinâmica x Gradiente de Velocidade.",
      "cascasDeBanana": {
        "C": "A temperatura afeta o valor da viscosidade, mas a lei de Newton relaciona tensão e gradiente de velocidade."
      },
      "dicaDeOuro": "Fluidos que obedecem a essa lei linearmente são chamados de fluidos Newtonianos (água, ar, óleo leve)."
    }
  },
  {
    "id": "q_lote5_3_8201",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Mecânica dos Fluidos - Equação de Bernoulli",
    "statement": "A Equação de Bernoulli, fundamental no estudo do escoamento de fluidos incompressíveis, representa o princípio da conservação de qual grandeza física ao longo de uma linha de corrente?",
    "options": {
      "A": "Conservação de Massa.",
      "B": "Conservação do Momento Angular.",
      "C": "Conservação da Energia Mecânica.",
      "D": "Conservação do Volume.",
      "E": "Conservação da Quantidade de Movimento."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Bernoulli diz que a energia total de um filete de fluido (Energia de Pressão + Energia Cinética + Energia Potencial Gravitacional) se mantém constante se não houver atrito.",
      "puloDoGato": "Bernoulli = Conservação de Energia (Pressão + Velocidade + Altura = Constante).",
      "cascasDeBanana": {
        "A": "Conservação de massa é a Equação da Continuidade (Q = V.A).",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Na Equação de Bernoulli estrita, o fluido deve ser ideal (sem viscosidade/atrito) e o escoamento em regime permanente."
    }
  },
  {
    "id": "q_lote5_3_8202",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Termodinâmica - Leis",
    "statement": "A Segunda Lei da Termodinâmica impõe qual restrição fundamental aos processos físicos?",
    "options": {
      "A": "O calor sempre flui espontaneamente de um corpo mais frio para um mais quente.",
      "B": "A temperatura de ebulição da água é sempre 100°C.",
      "C": "A entropia do universo tende a diminuir.",
      "D": "É impossível construir uma máquina térmica operando em ciclos cujo único efeito seja extrair calor de uma fonte e convertê-lo integralmente em trabalho.",
      "E": "A energia não pode ser criada nem destruída."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o enunciado de Kelvin-Planck. Basicamente: você nunca vai ter um motor 100% eficiente. Sempre haverá perda de calor para o ambiente (exaustão).",
      "puloDoGato": "2ª Lei = Impossível eficiência 100% (Aumento da Entropia).",
      "cascasDeBanana": {
        "E": "Esta é a Primeira Lei (Conservação da Energia).",
        "A": "Falso, o fluxo espontâneo é do quente pro frio (Enunciado de Clausius)."
      },
      "dicaDeOuro": "A entropia (desordem) de um sistema isolado sempre cresce num processo irreversível."
    }
  },
  {
    "id": "q_lote5_3_8203",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Transferência de Calor - Mecanismos",
    "statement": "Qual o principal mecanismo de transferência de calor em fluidos (líquidos e gases) sujeitos a diferenças de temperatura e consequentes diferenças de densidade?",
    "options": {
      "A": "Condução.",
      "B": "Evaporação.",
      "C": "Convecção (natural ou forçada).",
      "D": "Sublimação.",
      "E": "Radiação."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Quando a água ferve na panela, a água quente (mais leve) sobe, e a água fria (mais pesada) desce, criando correntes. O calor viaja 'pegando carona' no movimento da matéria. Isso é convecção.",
      "puloDoGato": "Convecção = Transferência de calor COM movimento de massa (fluido).",
      "cascasDeBanana": {
        "A": "Condução ocorre principalmente em sólidos, molécula a molécula, sem movimento macroscópico.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "A radiação térmica não precisa de meio material para se propagar (viaja no vácuo)."
    }
  },
  {
    "id": "q_lote5_3_8204",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 5",
    "statement": "Tema complementar 5 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "B": "A viscosidade do fluido.",
      "C": "Apenas da temperatura do fluido.",
      "D": "A área da superfície livre.",
      "E": "O formato do recipiente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8205",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 6",
    "statement": "Tema complementar 6 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A área da superfície livre.",
      "B": "O formato do recipiente.",
      "C": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "D": "A viscosidade do fluido.",
      "E": "Apenas da temperatura do fluido."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "B": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8206",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 7",
    "statement": "Tema complementar 7 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A viscosidade do fluido.",
      "B": "O formato do recipiente.",
      "C": "Apenas da temperatura do fluido.",
      "D": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "E": "A área da superfície livre."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "B": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8207",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 8",
    "statement": "Tema complementar 8 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A área da superfície livre.",
      "B": "Apenas da temperatura do fluido.",
      "C": "A viscosidade do fluido.",
      "D": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "E": "O formato do recipiente."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8208",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 9",
    "statement": "Tema complementar 9 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "B": "A viscosidade do fluido.",
      "C": "A área da superfície livre.",
      "D": "O formato do recipiente.",
      "E": "Apenas da temperatura do fluido."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "D": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8209",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 10",
    "statement": "Tema complementar 10 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "Apenas da temperatura do fluido.",
      "B": "A área da superfície livre.",
      "C": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "D": "A viscosidade do fluido.",
      "E": "O formato do recipiente."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8210",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 11",
    "statement": "Tema complementar 11 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "B": "A área da superfície livre.",
      "C": "Apenas da temperatura do fluido.",
      "D": "O formato do recipiente.",
      "E": "A viscosidade do fluido."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "D": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8211",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 12",
    "statement": "Tema complementar 12 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "Apenas da temperatura do fluido.",
      "B": "A viscosidade do fluido.",
      "C": "A área da superfície livre.",
      "D": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "E": "O formato do recipiente."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8212",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 13",
    "statement": "Tema complementar 13 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A viscosidade do fluido.",
      "B": "A área da superfície livre.",
      "C": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "D": "O formato do recipiente.",
      "E": "Apenas da temperatura do fluido."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "D": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8213",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 14",
    "statement": "Tema complementar 14 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A área da superfície livre.",
      "B": "A viscosidade do fluido.",
      "C": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "D": "Apenas da temperatura do fluido.",
      "E": "O formato do recipiente."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8214",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 15",
    "statement": "Tema complementar 15 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A viscosidade do fluido.",
      "B": "O formato do recipiente.",
      "C": "Apenas da temperatura do fluido.",
      "D": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "E": "A área da superfície livre."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "B": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8215",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 16",
    "statement": "Tema complementar 16 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A viscosidade do fluido.",
      "B": "O formato do recipiente.",
      "C": "Apenas da temperatura do fluido.",
      "D": "A área da superfície livre.",
      "E": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "B": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8216",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 17",
    "statement": "Tema complementar 17 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "Apenas da temperatura do fluido.",
      "B": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "C": "O formato do recipiente.",
      "D": "A área da superfície livre.",
      "E": "A viscosidade do fluido."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "O paradoxo hidrostático prova que o formato do vaso não importa.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8217",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 18",
    "statement": "Tema complementar 18 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "Apenas da temperatura do fluido.",
      "B": "A área da superfície livre.",
      "C": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "D": "O formato do recipiente.",
      "E": "A viscosidade do fluido."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "D": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8218",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 19",
    "statement": "Tema complementar 19 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "O formato do recipiente.",
      "B": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "C": "Apenas da temperatura do fluido.",
      "D": "A área da superfície livre.",
      "E": "A viscosidade do fluido."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "O paradoxo hidrostático prova que o formato do vaso não importa.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8219",
    "discipline": "Física e Mecânica dos Fluidos",
    "topic": "Revisão Geral - Física Aplicada 20",
    "statement": "Tema complementar 20 de Física e Transcal. No estudo de hidrostática, o Teorema de Stevin afirma que a diferença de pressão entre dois pontos de um fluido em repouso depende diretamente de:",
    "options": {
      "A": "A diferença de profundidade (altura) entre os pontos e a massa específica (densidade) do fluido.",
      "B": "Apenas da temperatura do fluido.",
      "C": "A viscosidade do fluido.",
      "D": "A área da superfície livre.",
      "E": "O formato do recipiente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A pressão lá no fundo do mar é gigante porque tem uma coluna de água gigante pesando em cima. Não importa se você tá no mar ou num tubo fino muito alto, a pressão depende só da profundidade.",
      "puloDoGato": "P = d.g.h (Densidade x Gravidade x Altura).",
      "cascasDeBanana": {
        "E": "O paradoxo hidrostático prova que o formato do vaso não importa."
      },
      "dicaDeOuro": "Isso explica por que caixas d'água ficam nos telhados (para garantir pressão nas torneiras embaixo)."
    }
  },
  {
    "id": "q_lote5_3_8220",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Química Orgânica - Hidrocarbonetos",
    "statement": "O petróleo é constituído principalmente por hidrocarbonetos. Qual o nome dado à série homóloga de hidrocarbonetos alifáticos saturados (apenas ligações simples entre carbonos)?",
    "options": {
      "A": "Alquenos (ou Olefinas).",
      "B": "Alquinos.",
      "C": "Alcanos (ou Parafinas).",
      "D": "Aromáticos.",
      "E": "Cetonas."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Alcanos só têm ligação simples (-ano). O Metano (CH4), principal componente do gás natural, é o alcano mais simples. Por serem 'saturados' de hidrogênio, são quimicamente pouco reativos (parafinas = parum affinis = pouca afinidade).",
      "puloDoGato": "Alcanos = Ligações simples. Alquenos = Dupla. Alquinos = Tripla.",
      "cascasDeBanana": {
        "A": "Possuem ligação dupla.",
        "B": "",
        "C": "",
        "D": "Possuem anel benzênico.",
        "E": ""
      },
      "dicaDeOuro": "Fórmula geral dos alcanos abertos é CnH(2n+2)."
    }
  },
  {
    "id": "q_lote5_3_8221",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Química Orgânica - Petróleo",
    "statement": "No refino de petróleo, a destilação fracionada separa os componentes baseando-se em qual propriedade física das substâncias?",
    "options": {
      "A": "Densidade.",
      "B": "Condutividade elétrica.",
      "C": "Ponto de ebulição (volatilidade).",
      "D": "Cor.",
      "E": "Viscosidade."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A torre de destilação é aquecida embaixo. Os componentes mais leves (menor ponto de ebulição, como o gás de cozinha e gasolina) viram vapor e sobem até o topo. Os pesados (asfalto, óleo combustível) ficam embaixo.",
      "puloDoGato": "Destilação Fracionada = Separação por diferenças no Ponto de Ebulição.",
      "cascasDeBanana": {
        "A": "Embora os mais pesados fiquem embaixo, a separação é termodinâmica (ebulição), não por decantação (densidade)."
      },
      "dicaDeOuro": "Quanto maior a cadeia de carbonos, maior o ponto de ebulição."
    }
  },
  {
    "id": "q_lote5_3_8222",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Equilíbrio Químico - Princípio de Le Chatelier",
    "statement": "Segundo o Princípio de Le Chatelier, se aumentarmos a pressão total sobre um sistema gasoso em equilíbrio (comprimindo o volume), o equilíbrio se deslocará para qual direção?",
    "options": {
      "A": "O equilíbrio nunca se altera pela pressão.",
      "B": "Sempre para a direita (produtos).",
      "C": "Para o lado da equação que possui o MAIOR número de mols de gás.",
      "D": "Para o lado da equação que possui o MENOR número de mols de gás.",
      "E": "Sempre para a esquerda (reagentes)."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Le Chatelier diz que a natureza é 'do contra'. Se você aperta (aumenta a pressão), o sistema tenta 'encolher' para aliviar o aperto, deslocando-se para o lado que tem menos moléculas (menor volume gasoso).",
      "puloDoGato": "Aumento de Pressão = Deslocamento para menor volume/mols.",
      "cascasDeBanana": {
        "A": "Altera sim, desde que o número de mols de gás nos reagentes e produtos seja diferente."
      },
      "dicaDeOuro": "A pressão não afeta equilíbrios envolvendo apenas líquidos e sólidos (pois são incompressíveis)."
    }
  },
  {
    "id": "q_lote5_3_8223",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 4",
    "statement": "Tema complementar 4 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que não participa da reação.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "O reagente que é mais barato.",
      "D": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8224",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 5",
    "statement": "Tema complementar 5 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que está em maior quantidade no recipiente.",
      "B": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "C": "O reagente que é mais barato.",
      "D": "Um catalisador que inibe a reação.",
      "E": "O reagente que não participa da reação."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "D": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8225",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 6",
    "statement": "Tema complementar 6 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é mais barato.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "O reagente que não participa da reação.",
      "D": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8226",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 7",
    "statement": "Tema complementar 7 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "Um catalisador que inibe a reação.",
      "B": "O reagente que é mais barato.",
      "C": "O reagente que está em maior quantidade no recipiente.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8227",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 8",
    "statement": "Tema complementar 8 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que está em maior quantidade no recipiente.",
      "B": "O reagente que é mais barato.",
      "C": "Um catalisador que inibe a reação.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "C": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8228",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 9",
    "statement": "Tema complementar 9 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "Um catalisador que inibe a reação.",
      "B": "O reagente que é mais barato.",
      "C": "O reagente que está em maior quantidade no recipiente.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8229",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 10",
    "statement": "Tema complementar 10 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "Um catalisador que inibe a reação.",
      "D": "O reagente que é mais barato.",
      "E": "O reagente que não participa da reação."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "C": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8230",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 11",
    "statement": "Tema complementar 11 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que está em maior quantidade no recipiente.",
      "B": "Um catalisador que inibe a reação.",
      "C": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que é mais barato."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8231",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 12",
    "statement": "Tema complementar 12 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "B": "Um catalisador que inibe a reação.",
      "C": "O reagente que não participa da reação.",
      "D": "O reagente que é mais barato.",
      "E": "O reagente que está em maior quantidade no recipiente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "B": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8232",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 13",
    "statement": "Tema complementar 13 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é mais barato.",
      "B": "Um catalisador que inibe a reação.",
      "C": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que está em maior quantidade no recipiente."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8233",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 14",
    "statement": "Tema complementar 14 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "Um catalisador que inibe a reação.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "D": "O reagente que não participa da reação.",
      "E": "O reagente que é mais barato."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8234",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 15",
    "statement": "Tema complementar 15 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "O reagente que é mais barato.",
      "D": "O reagente que não participa da reação.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8235",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 16",
    "statement": "Tema complementar 16 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "B": "O reagente que não participa da reação.",
      "C": "O reagente que está em maior quantidade no recipiente.",
      "D": "O reagente que é mais barato.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8236",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 17",
    "statement": "Tema complementar 17 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que não participa da reação.",
      "B": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "C": "O reagente que está em maior quantidade no recipiente.",
      "D": "O reagente que é mais barato.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8237",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 18",
    "statement": "Tema complementar 18 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "Um catalisador que inibe a reação.",
      "B": "O reagente que está em maior quantidade no recipiente.",
      "C": "O reagente que não participa da reação.",
      "D": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "E": "O reagente que é mais barato."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8238",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 19",
    "statement": "Tema complementar 19 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que não participa da reação.",
      "B": "O reagente que é mais barato.",
      "C": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "D": "O reagente que está em maior quantidade no recipiente.",
      "E": "Um catalisador que inibe a reação."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "",
        "E": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_3_8239",
    "discipline": "Química Básica e Físico-Química",
    "topic": "Revisão Geral - Química Aplicada 20",
    "statement": "Tema complementar 20 de Química Básica. Em uma reação estequiométrica, o que é o 'Reagente Limitante'?",
    "options": {
      "A": "O reagente que é totalmente consumido primeiro, determinando a quantidade máxima de produto que pode ser formada.",
      "B": "Um catalisador que inibe a reação.",
      "C": "O reagente que é mais barato.",
      "D": "O reagente que está em maior quantidade no recipiente.",
      "E": "O reagente que não participa da reação."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você vai fazer cachorros-quentes e tem 10 pães e 8 salsichas, a salsicha é o reagente limitante. Você só vai conseguir fazer 8 lanches, e vão sobrar 2 pães (reagente em excesso).",
      "puloDoGato": "Limitante = O que acaba primeiro (define o fim da reação).",
      "cascasDeBanana": {
        "B": "Catalisador não é consumido na reação, ele apenas a acelera."
      },
      "dicaDeOuro": "Todos os cálculos estequiométricos devem ser baseados no número de mols do reagente limitante."
    }
  },
  {
    "id": "q_lote5_4_8300",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Equipamentos - Árvore de Natal Molhada (ANM)",
    "statement": "Na explotação offshore, qual é a função principal da Árvore de Natal Molhada (ANM)?",
    "options": {
      "A": "Gerar energia elétrica a partir das correntes marinhas.",
      "B": "Decorar o fundo do mar durante o período festivo.",
      "C": "Separar o gás do óleo diretamente no fundo do mar.",
      "D": "É um conjunto de válvulas instalado na cabeça do poço submarino que serve para controlar o fluxo de fluidos (produção ou injeção) de forma segura.",
      "E": "Bombear a água do mar para resfriar a plataforma."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A ANM é o 'registro' mestre do poço no fundo do mar. Molhada porque fica submersa. Sem ela, você não tem como abrir ou fechar o fluxo de óleo que vem do reservatório.",
      "puloDoGato": "ANM = Conjunto de válvulas de controle na cabeça do poço.",
      "cascasDeBanana": {
        "C": "A separação de gás/óleo/água geralmente ocorre na plataforma (processamento primário) ou em sistemas SSIS (Subsea Separation and Injection Systems), não na ANM básica."
      },
      "dicaDeOuro": "Ela também permite a injeção de produtos químicos (como inibidores de hidrato) para desobstruir os dutos."
    }
  },
  {
    "id": "q_lote5_4_8301",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Equipamentos - Manifold Submarino",
    "statement": "O que caracteriza um Manifold Submarino em um layout de produção offshore?",
    "options": {
      "A": "É a broca de perfuração usada no fundo do mar.",
      "B": "É um centro de convergência que coleta a produção de vários poços através das ANMs e a direciona para a plataforma através de um único duto (linha tronco).",
      "C": "É uma estrutura de amarração da plataforma.",
      "D": "É um equipamento que perfura o poço automaticamente.",
      "E": "É o navio-sonda que transporta os operadores."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine que você tem 10 poços produzindo. Levar 10 tubos até a plataforma na superfície seria caríssimo e pesado. O Manifold é um 'T' gigante no fundo do mar que junta o óleo dos 10 poços e manda pra cima num tubo só.",
      "puloDoGato": "Manifold = Coletor/Distribuidor de fluxo no fundo do mar.",
      "cascasDeBanana": {
        "A": "Isso seria o BOP (Blowout Preventer) durante a perfuração, não produção.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "O Manifold também serve para distribuir água ou gás para os poços de injeção."
    }
  },
  {
    "id": "q_lote5_4_8302",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Escoamento - Garantia de Escoamento (Flow Assurance)",
    "statement": "Um dos maiores problemas de 'Flow Assurance' em águas profundas é a formação de Hidratos. O que são os hidratos de gás?",
    "options": {
      "A": "Ferrugem que corrói o duto por dentro.",
      "B": "Vazamentos de óleo no fundo do mar.",
      "C": "Bactérias comedoras de petróleo.",
      "D": "Algas marinhas que entopem o tubo por fora.",
      "E": "Cristais sólidos semelhantes ao gelo, formados pela combinação de água e gás natural sob condições de alta pressão e baixa temperatura."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fundo do mar é muito frio (4°C) e a pressão dentro do tubo é gigantesca. Nessas condições, se tiver água e gás juntos, eles formam um 'gelo' duro que entope o tubo inteiro. Isso é o hidrato.",
      "puloDoGato": "Hidrato = Gás + Água + Alta Pressão + Baixa Temperatura.",
      "cascasDeBanana": {
        "A": "Isso é corrosão."
      },
      "dicaDeOuro": "Para prevenir hidratos, injeta-se MEG (Monoetilenoglicol) ou isolam-se termicamente os tubos (Pipes-in-Pipe)."
    }
  },
  {
    "id": "q_lote5_4_8303",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 4",
    "statement": "Tema complementar 4 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "B": "Sondar a profundidade do oceano.",
      "C": "Transportar o óleo bruto e o gás para a terra.",
      "D": "Segurar a plataforma contra furacões.",
      "E": "Servir como cabo de reboque do navio."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "C": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8304",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 5",
    "statement": "Tema complementar 5 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Sondar a profundidade do oceano.",
      "B": "Segurar a plataforma contra furacões.",
      "C": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "D": "Servir como cabo de reboque do navio.",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "",
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8305",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 6",
    "statement": "Tema complementar 6 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transportar o óleo bruto e o gás para a terra.",
      "B": "Segurar a plataforma contra furacões.",
      "C": "Sondar a profundidade do oceano.",
      "D": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "E": "Servir como cabo de reboque do navio."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8306",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 7",
    "statement": "Tema complementar 7 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Segurar a plataforma contra furacões.",
      "B": "Transportar o óleo bruto e o gás para a terra.",
      "C": "Sondar a profundidade do oceano.",
      "D": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "E": "Servir como cabo de reboque do navio."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8307",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 8",
    "statement": "Tema complementar 8 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "B": "Servir como cabo de reboque do navio.",
      "C": "Segurar a plataforma contra furacões.",
      "D": "Sondar a profundidade do oceano.",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "E": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8308",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 9",
    "statement": "Tema complementar 9 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Sondar a profundidade do oceano.",
      "B": "Servir como cabo de reboque do navio.",
      "C": "Transportar o óleo bruto e o gás para a terra.",
      "D": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "E": "Segurar a plataforma contra furacões."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "C": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8309",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 10",
    "statement": "Tema complementar 10 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "B": "Transportar o óleo bruto e o gás para a terra.",
      "C": "Sondar a profundidade do oceano.",
      "D": "Segurar a plataforma contra furacões.",
      "E": "Servir como cabo de reboque do navio."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8310",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 11",
    "statement": "Tema complementar 11 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "B": "Servir como cabo de reboque do navio.",
      "C": "Transportar o óleo bruto e o gás para a terra.",
      "D": "Segurar a plataforma contra furacões.",
      "E": "Sondar a profundidade do oceano."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "C": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8311",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 12",
    "statement": "Tema complementar 12 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Sondar a profundidade do oceano.",
      "B": "Segurar a plataforma contra furacões.",
      "C": "Servir como cabo de reboque do navio.",
      "D": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "E": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8312",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 13",
    "statement": "Tema complementar 13 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Servir como cabo de reboque do navio.",
      "B": "Sondar a profundidade do oceano.",
      "C": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "D": "Transportar o óleo bruto e o gás para a terra.",
      "E": "Segurar a plataforma contra furacões."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "",
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8313",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 14",
    "statement": "Tema complementar 14 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Sondar a profundidade do oceano.",
      "B": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "C": "Segurar a plataforma contra furacões.",
      "D": "Servir como cabo de reboque do navio.",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "E": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8314",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 15",
    "statement": "Tema complementar 15 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transportar o óleo bruto e o gás para a terra.",
      "B": "Servir como cabo de reboque do navio.",
      "C": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "D": "Segurar a plataforma contra furacões.",
      "E": "Sondar a profundidade do oceano."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "",
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8315",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 16",
    "statement": "Tema complementar 16 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Sondar a profundidade do oceano.",
      "B": "Segurar a plataforma contra furacões.",
      "C": "Servir como cabo de reboque do navio.",
      "D": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "E": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8316",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 17",
    "statement": "Tema complementar 17 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transportar o óleo bruto e o gás para a terra.",
      "B": "Sondar a profundidade do oceano.",
      "C": "Segurar a plataforma contra furacões.",
      "D": "Servir como cabo de reboque do navio.",
      "E": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8317",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 18",
    "statement": "Tema complementar 18 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Servir como cabo de reboque do navio.",
      "B": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "C": "Transportar o óleo bruto e o gás para a terra.",
      "D": "Sondar a profundidade do oceano.",
      "E": "Segurar a plataforma contra furacões."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "C": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8318",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 19",
    "statement": "Tema complementar 19 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "B": "Segurar a plataforma contra furacões.",
      "C": "Servir como cabo de reboque do navio.",
      "D": "Transportar o óleo bruto e o gás para a terra.",
      "E": "Sondar a profundidade do oceano."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "D": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical."
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8319",
    "discipline": "Sistemas Submarinos de Produção",
    "topic": "Revisão Geral - Subsea 20",
    "statement": "Tema complementar 20 de Sistemas Submarinos. Os Umbilicais (Umbilicals) têm papel vital na ligação entre a unidade de superfície e o fundo do mar. Qual é a sua principal utilidade?",
    "options": {
      "A": "Segurar a plataforma contra furacões.",
      "B": "Servir como cabo de reboque do navio.",
      "C": "Transmitir energia elétrica, sinais hidráulicos, dados de controle e injeção de produtos químicos da plataforma para os equipamentos submarinos (como a ANM).",
      "D": "Sondar a profundidade do oceano.",
      "E": "Transportar o óleo bruto e o gás para a terra."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Como o nome diz, é o 'cordão umbilical'. Ele não traz o bebê (óleo), ele manda o 'sangue e nutrientes' (energia, comando, fluido hidráulico para abrir válvulas e inibidores) da 'mãe' (plataforma) para o equipamento no fundo do mar.",
      "puloDoGato": "Umbilical = Controle e Injeção.",
      "cascasDeBanana": {
        "A": "",
        "B": "O óleo e o gás sobem pelos Risers e Flowlines, não pelo umbilical.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "É um cabo altamente complexo e caro, composto por diversas mangueiras e fios metálicos internamente blindados."
    }
  },
  {
    "id": "q_lote5_4_8320",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Geometria Analítica - Distância Ponto à Reta",
    "statement": "Em geometria analítica plana, a distância 'd' de um ponto P(x0, y0) a uma reta r de equação Ax + By + C = 0 é calculada pela fórmula:",
    "options": {
      "A": "d = |A + B + C| / 2",
      "B": "d = A*x0 + B*y0",
      "C": "d = sqrt(x0^2 + y0^2)",
      "D": "d = x0*y0 - A*B",
      "E": "d = |A*x0 + B*y0 + C| / sqrt(A^2 + B^2)"
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Esta é a fórmula clássica. Você 'joga' o ponto dentro da equação da reta no numerador (em módulo, pois distância é sempre positiva) e divide pela hipotenusa dos coeficientes A e B.",
      "puloDoGato": "Fórmula da Distância = Módulo da equação no ponto / Módulo do vetor normal.",
      "cascasDeBanana": {
        "C": "Essa é a distância do ponto até a origem (0,0)."
      },
      "dicaDeOuro": "O vetor normal à reta tem coordenadas (A, B)."
    }
  },
  {
    "id": "q_lote5_4_8321",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Álgebra Linear - Determinantes",
    "statement": "Qual das propriedades abaixo a respeito de matrizes e determinantes é VERDADEIRA?",
    "options": {
      "A": "Somente matrizes retangulares possuem determinantes.",
      "B": "O determinante de uma matriz A é sempre igual ao determinante de sua inversa (A^-1).",
      "C": "Se uma matriz possui duas linhas ou duas colunas iguais, o seu determinante é zero.",
      "D": "O determinante do produto de duas matrizes é a soma dos determinantes (det(A*B) = det(A) + det(B)).",
      "E": "Se multiplicarmos uma linha da matriz por 2, o determinante não se altera."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se há linhas repetidas ou proporcionais, a matriz é 'singular' (Linearmente Dependente), logo, ela não tem volume, e seu determinante é cravado em ZERO.",
      "puloDoGato": "Linhas/Colunas iguais ou proporcionais = Determinante Nulo.",
      "cascasDeBanana": {
        "B": "O determinante da inversa é 1 / det(A).",
        "D": "Teorema de Binet: det(A*B) = det(A) * det(B).",
        "E": "Se multiplica a linha por 2, o det também é multiplicado por 2."
      },
      "dicaDeOuro": "Para que um sistema linear tenha solução única, o determinante da matriz dos coeficientes deve ser DIFERENTE de zero."
    }
  },
  {
    "id": "q_lote5_4_8322",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Cálculo Vetorial - Produto Escalar e Vetorial",
    "statement": "Dado dois vetores u e v não nulos em R3. O 'Produto Escalar' (u . v) e o 'Produto Vetorial' (u x v) resultam, respectivamente, em:",
    "options": {
      "A": "Um vetor e um vetor.",
      "B": "Um número real (escalar) e um número real (escalar).",
      "C": "Um vetor ortogonal e um escalar.",
      "D": "Uma matriz e um vetor.",
      "E": "Um número real (escalar) e um vetor ortogonal a ambos (u e v)."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Produto Escalar ('Dot product') dá um número (escalar) que mede o quanto um vetor está alinhado com o outro. Produto Vetorial ('Cross product') gera um NOVO vetor no espaço 3D que forma um ângulo de 90 graus (ortogonal) tanto com u quanto com v (Regra da mão direita).",
      "puloDoGato": "Escalar = Número. Vetorial = Novo Vetor a 90°.",
      "cascasDeBanana": {
        "B": "Produto vetorial nunca resulta em um número."
      },
      "dicaDeOuro": "Se o produto escalar de dois vetores for ZERO, isso significa que eles são perpendiculares (formam 90 graus entre si)."
    }
  },
  {
    "id": "q_lote5_4_8323",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 4",
    "statement": "Tema complementar 4 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A equação da reta tangente.",
      "B": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "C": "A fórmula de Bhaskara.",
      "D": "Que a derivada de uma constante é zero.",
      "E": "Que todo polinômio tem raízes."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "A": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "",
        "C": "Teorema Fundamental da Álgebra.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8324",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 5",
    "statement": "Tema complementar 5 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "A fórmula de Bhaskara.",
      "D": "Que todo polinômio tem raízes.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "D": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8325",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 6",
    "statement": "Tema complementar 6 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "Que todo polinômio tem raízes.",
      "B": "A fórmula de Bhaskara.",
      "C": "Que a derivada de uma constante é zero.",
      "D": "A equação da reta tangente.",
      "E": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "C": "Isso é uma regra de derivação, não o teorema fundamental.",
        "A": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8326",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 7",
    "statement": "Tema complementar 7 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A fórmula de Bhaskara.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "D": "A equação da reta tangente.",
      "E": "Que todo polinômio tem raízes."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "E": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8327",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 8",
    "statement": "Tema complementar 8 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A equação da reta tangente.",
      "B": "A fórmula de Bhaskara.",
      "C": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "D": "Que a derivada de uma constante é zero.",
      "E": "Que todo polinômio tem raízes."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "D": "Isso é uma regra de derivação, não o teorema fundamental.",
        "E": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8328",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 9",
    "statement": "Tema complementar 9 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que todo polinômio tem raízes.",
      "C": "Que a derivada de uma constante é zero.",
      "D": "A fórmula de Bhaskara.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "C": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8329",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 10",
    "statement": "Tema complementar 10 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "A equação da reta tangente.",
      "D": "A fórmula de Bhaskara.",
      "E": "Que todo polinômio tem raízes."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "E": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8330",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 11",
    "statement": "Tema complementar 11 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "A fórmula de Bhaskara.",
      "C": "Que todo polinômio tem raízes.",
      "D": "Que a derivada de uma constante é zero.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "D": "Isso é uma regra de derivação, não o teorema fundamental.",
        "C": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8331",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 12",
    "statement": "Tema complementar 12 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "Que a derivada de uma constante é zero.",
      "B": "Que todo polinômio tem raízes.",
      "C": "A equação da reta tangente.",
      "D": "A fórmula de Bhaskara.",
      "E": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas."
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "A": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8332",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 13",
    "statement": "Tema complementar 13 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que todo polinômio tem raízes.",
      "C": "A fórmula de Bhaskara.",
      "D": "Que a derivada de uma constante é zero.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "D": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8333",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 14",
    "statement": "Tema complementar 14 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que todo polinômio tem raízes.",
      "C": "A fórmula de Bhaskara.",
      "D": "A equação da reta tangente.",
      "E": "Que a derivada de uma constante é zero."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "E": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8334",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 15",
    "statement": "Tema complementar 15 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "Que a derivada de uma constante é zero.",
      "B": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "C": "Que todo polinômio tem raízes.",
      "D": "A fórmula de Bhaskara.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "A": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "",
        "C": "Teorema Fundamental da Álgebra.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8335",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 16",
    "statement": "Tema complementar 16 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A equação da reta tangente.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "D": "A fórmula de Bhaskara.",
      "E": "Que todo polinômio tem raízes."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "E": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8336",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 17",
    "statement": "Tema complementar 17 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A equação da reta tangente.",
      "B": "Que todo polinômio tem raízes.",
      "C": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "D": "A fórmula de Bhaskara.",
      "E": "Que a derivada de uma constante é zero."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "E": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8337",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 18",
    "statement": "Tema complementar 18 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A equação da reta tangente.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "D": "Que todo polinômio tem raízes.",
      "E": "A fórmula de Bhaskara."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "D": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8338",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 19",
    "statement": "Tema complementar 19 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "B": "Que a derivada de uma constante é zero.",
      "C": "Que todo polinômio tem raízes.",
      "D": "A fórmula de Bhaskara.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "B": "Isso é uma regra de derivação, não o teorema fundamental.",
        "C": "Teorema Fundamental da Álgebra."
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_lote5_4_8339",
    "discipline": "Matemática Avançada e Geometria",
    "topic": "Revisão Geral - Exatas 20",
    "statement": "Tema complementar 20 de Matemática Avançada. No cálculo integral, o que o Teorema Fundamental do Cálculo estabelece?",
    "options": {
      "A": "Que todo polinômio tem raízes.",
      "B": "A relação íntima entre a derivação e a integração, afirmando que são operações inversas.",
      "C": "Que a derivada de uma constante é zero.",
      "D": "A fórmula de Bhaskara.",
      "E": "A equação da reta tangente."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Teorema Fundamental do Cálculo diz que se você integra uma função para achar a área, e depois deriva essa área, você volta para a função original. É a ponte entre as duas metades do cálculo.",
      "puloDoGato": "Derivada e Integral são faces da mesma moeda.",
      "cascasDeBanana": {
        "A": "Isso é uma regra de derivação, não o teorema fundamental.",
        "B": "",
        "C": "Teorema Fundamental da Álgebra.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Ele permite calcular áreas sob a curva (integrais definidas) usando antiderivadas, sem precisar somar infinitos retângulos na mão."
    }
  },
  {
    "id": "q_petro_b2_001",
    "discipline": "Perfuração e Completação",
    "topic": "Fluidos de Perfuração — Base Óleo vs. Base Água",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "Os fluidos de perfuração base-óleo (FBO) são preferidos em relação aos base-água (FBA) em formações argilosas sensíveis à hidratação porque:",
    "options": {
      "A": "Têm menor custo operacional e são de descarte mais simples, atendendo às normas da ANP.",
      "B": "Possuem maior densidade, controlando pressões de poro elevadas sem necessidade de baritina.",
      "C": "São biodegradáveis e aprovados para descarte direto no fundo do mar em operações offshore.",
      "D": "Inibem a hidratação das argilas por não reagirem com a água de formação, preservando a estabilidade do poço.",
      "E": "Eliminam completamente riscos de surgência ao criar barreira química impermeável no anular."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Argilas expansivas (esmectitas, montmorilonitas) absorvem água e incham quando em contato com fluidos base-água, provocando instabilidade da parede do poço. Os FBO não reagem com as argilas, inibindo a hidratação e mantendo a estabilidade mecânica do poço.",
      "puloDoGato": "FBO → não hidrata argila → poço estável. FBA → hidrata argila → poço instável. Simples.",
      "cascasDeBanana": {
        "A": "Incorreta. FBO é mais caro e de descarte mais complexo (tóxico ao ambiente marinho).",
        "B": "Incorreta. A densidade é controlada adicionando-se baritina independentemente da base.",
        "C": "Incorreta. FBO é tóxico; não pode ser descartado diretamente no mar.",
        "D": "Correta. FBO inibe hidratação de argilas expansivas.",
        "E": "Incorreta. Nenhum fluido elimina completamente riscos de surgência."
      },
      "dicaDeOuro": "FBO = estabilidade em folhelhos e argilas. A palavra-chave é INIBIÇÃO da hidratação."
    }
  },
  {
    "id": "q_petro_b2_002",
    "discipline": "Perfuração e Completação",
    "topic": "BOP — Preventor de Surgência Anular",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "O preventor anular (BOP anular) difere dos preventores de arietes (rams) em uma instalação de poços de petróleo porque:",
    "options": {
      "A": "É fabricado em aço inoxidável para resistir a H₂S, enquanto os arietes usam aço carbono.",
      "B": "Veda apenas o espaço anular e é incapaz de suportar pressões superiores a 2000 psi.",
      "C": "Pode selar em qualquer diâmetro de coluna ou vedar poço vazio graças ao elemento elastomérico.",
      "D": "É acionado exclusivamente por sistemas hidráulicos externos, ao contrário dos arietes.",
      "E": "Funciona apenas em conjunto com os arietes, sendo ineficaz isoladamente como barreira."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O BOP anular possui um elemento de borracha elastomérica que, ao ser comprimido por atuação hidráulica, conforma ao redor de qualquer objeto (drill pipe, drill collar, casing) ou veda completamente (poço vazio). Os rams, ao contrário, são específicos para diâmetros predeterminados.",
      "puloDoGato": "Anular = flexível (borrracha) = veda QUALQUER diâmetro. Ram = rígido = só veda o diâmetro para o qual foi projetado.",
      "cascasDeBanana": {
        "A": "Incorreta. O material do BOP não é o diferencial principal entre anular e ariete.",
        "B": "Incorreta. BOPs anulares operam em pressões de trabalho de até 10.000 psi ou mais.",
        "C": "Correta. Elemento elastomérico permite selar em qualquer diâmetro.",
        "D": "Incorreta. Ambos os tipos são acionados hidraulicamente.",
        "E": "Incorreta. O anular pode ser usado isoladamente como barreira de pressão."
      },
      "dicaDeOuro": "Anular = borracha = UNIVERSAL (qualquer diâmetro). Ram = específico para um diâmetro de tubo."
    }
  },
  {
    "id": "q_petro_b2_003",
    "discipline": "Elevação e Escoamento",
    "topic": "Gas Lift Contínuo",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "No método de elevação artificial por gas lift contínuo, a injeção de gás na coluna de produção tem o efeito principal de:",
    "options": {
      "A": "Criar pulsos de pressão intermitentes que pistoniam o líquido para cima a cada ciclo.",
      "B": "Aumentar a temperatura do fluido produzido para reduzir a viscosidade do óleo.",
      "C": "Gerar calor por expansão adiabática, mantendo o fluido acima do ponto de névoa.",
      "D": "Substituir completamente o óleo na tubulação, atuando como fluido de deslocamento pistão.",
      "E": "Reduzir a densidade média da coluna, diminuindo o gradiente hidrostático e permitindo que a pressão do reservatório eleve o óleo."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O gas lift contínuo injeta gás comprimido no anular que penetra na tubulação de produção pelas válvulas de gas lift. O gás mistura-se ao óleo formando uma coluna de menor densidade. A pressão do reservatório, que antes era insuficiente para vencer a coluna de líquido, agora consegue impulsionar o fluido até a superfície.",
      "puloDoGato": "Gas lift = reduz a DENSIDADE da coluna. Pressão do reservatório não mudou — o que mudou foi o peso da coluna que ela precisa vencer.",
      "cascasDeBanana": {
        "A": "Incorreta. Pulsos intermitentes descrevem o gas lift INTERMITENTE, não o contínuo.",
        "B": "Incorreta. O gás injetado está a menor temperatura e não aquece o fluido significativamente.",
        "C": "Incorreta. Expansão adiabática RESFRIA o gás (efeito Joule-Thomson), não aquece.",
        "D": "Incorreta. O gás não desloca o óleo — mistura-se a ele, reduzindo a densidade média.",
        "E": "Correta. Redução da densidade média da coluna → menor gradiente hidrostático → o reservatório consegue produzir."
      },
      "dicaDeOuro": "Gas lift → menor densidade → reservatório 'empurra' mais fácil. É como inflar o óleo com bolhas."
    }
  },
  {
    "id": "q_petro_b2_004",
    "discipline": "Perfuração e Completação",
    "topic": "CBL — Cement Bond Log",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "O teste de integridade de cimentação denominado CBL (Cement Bond Log) é utilizado para avaliar:",
    "options": {
      "A": "A qualidade da aderência entre o cimento e o revestimento e entre o cimento e a formação, identificando canais e zonas de cimento livre.",
      "B": "A resistência à compressão do cimento endurecido, verificando se atingiu o mínimo de 2000 psi em 24h.",
      "C": "A presença de gás contaminante na pasta de cimento durante o bombeamento.",
      "D": "O peso específico da pasta de cimento durante o bombeamento, para controle do diferencial de pressão.",
      "E": "A compatibilidade química entre o cimento e os fluidos de completação a serem usados."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O CBL é um perfil acústico que mede a amplitude do sinal sônico que percorre o revestimento. Cimento bem aderido amorte o sinal (baixa amplitude). Cimento livre ou canal (espaço sem cimento) deixa o sinal passar com alta amplitude. O perfil VDL (Variable Density Log) complementa indicando a qualidade da ligação com a formação.",
      "puloDoGato": "CBL = acústico → mede se o cimento ADERIU ao revestimento. Alta amplitude no CBL = cimento ruim (livre). Baixa amplitude = cimento bom (adherente).",
      "cascasDeBanana": {
        "A": "Correta. CBL avalia a qualidade de aderência (bond) cimento-revestimento e cimento-formação.",
        "B": "Incorreta. Resistência à compressão é medida em laboratório com corpos de prova.",
        "C": "Incorreta. Gás durante bombeamento é monitorado por sensores de pressão/volume.",
        "D": "Incorreta. Peso da pasta é medido com densímetros durante o bombeamento.",
        "E": "Incorreta. Compatibilidade química é avaliada em ensaios de laboratório."
      },
      "dicaDeOuro": "CBL = Bond Log = ADERÊNCIA do cimento. Pensa: 'o cimento colou?' O CBL responde."
    }
  },
  {
    "id": "q_petro_b2_005",
    "discipline": "Elevação e Escoamento",
    "topic": "BCS — Bomba Centrífuga Submersa",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "A bomba centrífuga submersa (BCS/ESP) é geralmente selecionada em detrimento do gas lift quando o poço apresenta:",
    "options": {
      "A": "Altas vazões de líquido com baixa RGO, onde a eficiência volumétrica é alta e a disponibilidade de gás para injeção é limitada.",
      "B": "Alta RGO (> 5000 scf/bbl), com gás disponível para injeção na coluna.",
      "C": "Baixa temperatura de fundo (< 90°C), pois alta temperatura danifica os selos elastoméricos do motor.",
      "D": "Fluidos com alta salinidade, pois o motor é protegido pelo protetor contra corrosão.",
      "E": "Baixa produtividade (IP < 0,5 bbl/dia/psi), onde o gas lift seria ineficiente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A BCS/ESP é o método de elevação artificial mais eficiente para altas vazões de líquido. É indicada quando há baixa relação gás-óleo (RGO), pois o gás livre prejudica sua eficiência (cavitação). O gas lift, ao contrário, é preferido quando há gás disponível e a instalação permite injeção no anular.",
      "puloDoGato": "BCS = ALTA VAZÃO + BAIXA RGO. Gas Lift = GÁS DISPONÍVEL. É a regra de seleção básica.",
      "cascasDeBanana": {
        "A": "Correta. BCS → altas vazões de líquido com baixa RGO.",
        "B": "Incorreta. Alta RGO favorece gas lift, pois há gás disponível para injeção.",
        "C": "Incorreta. A BCS opera bem em altas temperaturas (> 150°C com motores especiais).",
        "D": "Incorreta. Alta salinidade pode ser um problema para a BCS (corrosão/incrustações).",
        "E": "Incorreta. Em poços de baixa produtividade, o gas lift pode ser mais econômico que a BCS."
      },
      "dicaDeOuro": "ESP/BCS → ALTO VOLUME + BAIXO GÁS. Se tem gás, usa gas lift. Se tem volume, usa ESP."
    }
  },
  {
    "id": "q_petro_b2_006",
    "discipline": "Processamento Primário",
    "topic": "Separadores Trifásicos",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "Em instalações de processamento primário, os separadores trifásicos (óleo-gás-água) realizam a separação principalmente com base nos princípios de:",
    "options": {
      "A": "Destilação fracionada e absorção química com catalisadores específicos.",
      "B": "Osmose reversa e membranas semipermeáveis que filtram seletivamente cada fase.",
      "C": "Eletrocoalescência, aplicando campo elétrico de alta frequência para coalescência das gotículas.",
      "D": "Diferença de densidades e tempo de residência, onde a gravidade separa as fases líquidas e o gás escapa pelo topo.",
      "E": "Pressão crítica de cada componente, com cada fase atingindo estado diferente a pressões distintas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O separador trifásico usa o princípio de separação gravitacional. O fluido entra pelo bocal de entrada com quebrador de energia; o gás se desprende para o topo (menor densidade); o óleo e a água se separam por diferença de densidade (ρágua > ρóleo), com o tempo de residência adequado para a separação. Defletores e placas coalescedoras auxiliam.",
      "puloDoGato": "Separador trifásico = GRAVIDADE + TEMPO. Gás sobe (mais leve), água desce (mais pesada), óleo fica no meio. Simples.",
      "cascasDeBanana": {
        "A": "Incorreta. Destilação fracionada é usada no refino, não na separação primária de campo.",
        "B": "Incorreta. Membranas são usadas em tratamento de água produzida, não em separação trifásica.",
        "C": "Incorreta. Eletrocoalescência é usada no TRATAMENTO do óleo para remover água residual, após separação primária.",
        "D": "Correta. Diferença de densidades + tempo de residência = princípio dos separadores.",
        "E": "Incorreta. Separação por pressão crítica não é o princípio operacional dos separadores de campo."
      },
      "dicaDeOuro": "Separador trifásico = GRAVIDADE. Gás no topo, óleo no meio, água embaixo."
    }
  },
  {
    "id": "q_petro_b2_007",
    "discipline": "Perfuração e Completação",
    "topic": "Projeto de Revestimento — Colapso",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "No projeto de revestimento (casing design), a verificação à carga de colapso é particularmente crítica quando:",
    "options": {
      "A": "O revestimento é instalado em zonas de alta temperatura (> 150°C), pois o calor reduz a resistência ao colapso.",
      "B": "O nível de fluido interno é muito baixo (poço aliviado ou em teste), criando pressão externa superior à interna.",
      "C": "A cimentação usa pasta de baixo peso, pois o cimento leve reduz o suporte lateral ao revestimento.",
      "D": "O revestimento é instalado acima do packer, pois a pressão de completação atua externamente.",
      "E": "A formação é muito rígida, pois transmite compressão axial para o revestimento por atrito."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Colapso ocorre quando a pressão externa (Pe) supera a pressão interna (Pi). Pe vem do fluido de formação, do cimento ou do fluido de perfuração no anular. Pi é do fluido dentro do revestimento. Quando o revestimento é aliviado (fluido interno baixo) ou testado com baixa pressão interna, Pe >> Pi e o risco de colapso é máximo.",
      "puloDoGato": "Colapso = pressão de FORA maior que pressão de DENTRO. Quando o poço está aliviado (pouco fluido interno), a pressão interna cai → risco de colapso aumenta.",
      "cascasDeBanana": {
        "A": "Incorreta. Alta temperatura reduz a resistência ao escoamento do aço, mas o fenômeno crítico para colapso é o diferencial de pressão.",
        "B": "Correta. Poço aliviado → Pi baixa → Pe > Pi → risco de colapso.",
        "C": "Incorreta. Cimento fornece suporte externo ao revestimento; cimento de baixo peso reduz suporte mas também reduz Pe.",
        "D": "Incorreta. A pressão de completação atua internamente ao revestimento (via tubing/annulus), não externamente.",
        "E": "Incorreta. Formação rígida transmite pressões laterais, mas o colapso depende do diferencial Pi × Pe."
      },
      "dicaDeOuro": "COLAPSO = Pe > Pi. Poço aliviado, testado ou coluna vazia → Pi baixa → situação crítica de colapso."
    }
  },
  {
    "id": "q_petro_b2_008",
    "discipline": "Geologia e Reservatórios",
    "topic": "Porosidade Efetiva vs. Total",
    "difficulty": "Intermediário",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "A diferença fundamental entre porosidade efetiva e porosidade total em uma rocha reservatório é que a porosidade efetiva:",
    "options": {
      "A": "É sempre maior que a total, pois inclui microporos inacessíveis à injeção de mercúrio.",
      "B": "Considera apenas poros preenchidos com hidrocarbonetos, excluindo os saturados com água irredutível.",
      "C": "Inclui somente poros interconectados e comunicantes, descartando poros isolados que não contribuem para o fluxo.",
      "D": "É medida exclusivamente por perfis de poço (neutrão e densidade), ao contrário da total que exige laboratório.",
      "E": "Representa a fração do volume poroso acessível ao gás, excluindo poros saturados com água."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Porosidade total (φt) = volume total de poros / volume total da rocha. Porosidade efetiva (φe) = volume de poros interconectados (comunicantes) / volume total. Poros isolados (bolhas fechadas) contribuem para φt mas não para φe, pois não permitem fluxo de fluido.",
      "puloDoGato": "Total inclui TODOS os poros (conectados + isolados). Efetiva inclui apenas os CONECTADOS (que deixam fluido passar). Para produção, o que importa é a efetiva.",
      "cascasDeBanana": {
        "A": "Incorreta. Efetiva é MENOR que a total porque exclui poros isolados.",
        "B": "Incorreta. Porosidade não depende do tipo de fluido que preenche os poros.",
        "C": "Correta. Efetiva = apenas poros interconectados.",
        "D": "Incorreta. Ambas as porosidades podem ser medidas por perfis e por laboratório.",
        "E": "Incorreta. Porosidade não discrimina por tipo de fluido saturante."
      },
      "dicaDeOuro": "Efetiva = poros que SE CONECTAM. Total = TODOS os poros. Efetiva ≤ Total sempre."
    }
  },
  {
    "id": "q_petro_b2_009",
    "discipline": "Elevação e Escoamento",
    "topic": "Curva IPR de Vogel",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "A curva IPR de Vogel, ao contrário da linear (Darcy), é utilizada em reservatórios com pressão abaixo do ponto de bolha porque:",
    "options": {
      "A": "A lei de Darcy assume escoamento laminar, inaplicável em reservatórios fraturados com fluxo turbulento.",
      "B": "O modelo de Vogel considera apenas a fase aquosa, adequado para alta RGA.",
      "C": "A curva de Vogel foi calibrada para reservatórios carbonáticos; Darcy vale apenas para arenitos.",
      "D": "Vogel introduz um coeficiente de dano (skin) negativo para reservatórios estimulados.",
      "E": "Abaixo do ponto de bolha, o gás liberado reduz a mobilidade do óleo de forma não-linear, e Vogel captura essa curvatura."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Acima do ponto de bolha: apenas óleo (fase única) → IPR linear (Darcy). Abaixo do ponto de bolha: gás é liberado da solução dentro do reservatório. O gás ocupa espaço poroso e reduz a permeabilidade relativa ao óleo (kr_o), de forma não linear com a pressão. A equação de Vogel: q/q_max = 1 − 0,2(Pwf/Pr) − 0,8(Pwf/Pr)² captura essa curvatura.",
      "puloDoGato": "Abaixo do ponto de bolha → gás livre → IPR curva (não linear). Acima → fluido monofásico → IPR reta (Darcy). Vogel = curva abaixo do bolha.",
      "cascasDeBanana": {
        "A": "Incorreta. Turbulência é tratada pelo equacionamento de Forchheimer, não é o motivo do Vogel.",
        "B": "Incorreta. Vogel considera o comportamento do óleo (e gás em solução), não apenas água.",
        "C": "Incorreta. Vogel aplica-se a qualquer litologia; o critério é a pressão em relação ao ponto de bolha.",
        "D": "Incorreta. O skin (dano) é um parâmetro adicional, não a razão de uso do Vogel.",
        "E": "Correta. Gás liberado reduz kr_o de forma não-linear → IPR curva → usar Vogel."
      },
      "dicaDeOuro": "Vogel = ABAIXO DO BOLHA = gás livre = IPR curva. Lembre: equação tem termo quadrático (Pwf/Pr)²."
    }
  },
  {
    "id": "q_petro_b2_010",
    "discipline": "Perfuração e Completação",
    "topic": "Completação Inteligente (Smart Completion)",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "As completações inteligentes (smart completions) diferem das convencionais pela presença de:",
    "options": {
      "A": "Canhoneados de maior diâmetro (> 1 pol.) e maior densidade de perfurações por metro.",
      "B": "Árvores de natal de aço inoxidável especial com válvulas de duplo obturador para > 15.000 psi.",
      "C": "Válvulas de controle de fluxo e sensores de P, T e fluxo no fundo do poço, monitorados e controlados remotamente da superfície.",
      "D": "Revestimentos de fibra de carbono substituindo o aço em ambientes com alto teor de H₂S.",
      "E": "Equipamentos de separação downhole que separam gás, óleo e água no fundo do poço."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Completação inteligente integra: (1) Válvulas de Controle de Fluxo Subsuperficiais (ICV/SCSSV) que permitem isolar ou restringir zonas produtoras; (2) Sensores permanentes de pressão, temperatura e fluxo no fundo do poço; (3) Linhas de controle hidráulico ou elétrico conectadas à árvore de Natal para operar as válvulas da superfície sem intervenção.",
      "puloDoGato": "Smart Completion = CONTROLE À DISTÂNCIA do poço sem wireline/workover. É como ter um operador dentro do poço.",
      "cascasDeBanana": {
        "A": "Incorreta. Canhoneados de maior diâmetro são técnicas de perforating design, não de completação inteligente.",
        "B": "Incorreta. Árvores de natal especiais são para alta pressão (HP/HT), não especificamente smart completion.",
        "C": "Correta. Sensores + ICVs + controle remoto = completação inteligente.",
        "D": "Incorreta. Revestimentos de fibra de carbono são para corrosão, não inteligência.",
        "E": "Incorreta. Separação downhole é uma tecnologia específica (IPS) diferente de completação inteligente."
      },
      "dicaDeOuro": "Smart = SENSORES + VÁLVULAS controladas da SUPERFÍCIE. Evita wireline e workover para monitorar e controlar zonas."
    }
  },
  {
    "id": "q_petro_b2_011",
    "discipline": "Processamento Primário",
    "topic": "Desidratação Elétrica — Eletrocoalescência",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "O processo de desidratação elétrica (eletrocoalescência) aplica um campo elétrico à emulsão óleo-água com o objetivo de:",
    "options": {
      "A": "Ionizar as moléculas de água, convertendo-as em vapor e separando do óleo por diferença de pressão.",
      "B": "Aumentar a temperatura da emulsão para reduzir a viscosidade do óleo e facilitar a sedimentação.",
      "C": "Gerar cargas opostas no óleo e na água, criando barreira eletrostática que impede re-emulsificação.",
      "D": "Eletrólise da água salinizada, precipitando sais dissolvidos filtrados por coalescedores.",
      "E": "Polarizar e aglomerar as gotículas de água dispersas no óleo, aumentando seu tamanho e favorecendo a separação por gravidade."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "As gotículas de água na emulsão são polarizadas pelo campo elétrico alternado (AC) ou combinado AC/DC. A polarização induz cargas dipólicas nas gotículas, que se atraem e coalescem em gotículas maiores. Gotas maiores têm velocidade de sedimentação maior (Lei de Stokes), facilitando a separação gravitacional.",
      "puloDoGato": "Eletrocoalescência = CAMPO ELÉTRICO → gotículas se ATRAEM → ficam maiores → caem mais rápido. É a Lei de Stokes aplicada ao tratamento de óleo.",
      "cascasDeBanana": {
        "A": "Incorreta. O campo elétrico não converte água em vapor; pressão e temperatura no equipamento não atingem condições para isso.",
        "B": "Incorreta. Aquecimento pode complementar, mas não é o princípio da eletrocoalescência.",
        "C": "Incorreta. Não se cria barreira — ao contrário, o campo aproxima as gotículas de água.",
        "D": "Incorreta. Eletrólise ocorre em eletrólito diluído; o campo no separador não é para eletrólise.",
        "E": "Correta. Polarização → coalescência → gotas maiores → separação gravitacional."
      },
      "dicaDeOuro": "Eletrocoalescência: campo elétrico → gotículas de água se juntam (coalescem) → ficam pesadas o suficiente para cair."
    }
  },
  {
    "id": "q_petro_b2_012",
    "discipline": "Geologia e Reservatórios",
    "topic": "Mecanismos de Produção — Water Drive vs. Solution Gas Drive",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "A fração de recuperação esperada em um reservatório com drive de água (water drive) é geralmente maior que em um reservatório com expansão de gás em solução (solution gas drive) porque:",
    "options": {
      "A": "A água empurra o óleo de forma mais eficiente ao manter a pressão do reservatório mais estável, enquanto no solution gas drive a queda de pressão libera gás que reduz a permeabilidade relativa ao óleo.",
      "B": "A água de formação tem maior viscosidade que o óleo, deslocando-o mais eficientemente.",
      "C": "O water drive opera apenas em reservatórios carbonáticos, com permeabilidade natural superior.",
      "D": "O drive de água elimina completamente a necessidade de recuperação secundária.",
      "E": "A pressão capilar entre água e óleo cria efeito de pistão perfeito que empurra 100% do óleo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Water drive: o aquífero fornece energia ao reservatório, mantendo a pressão (ou caindo mais lentamente). A saturação de gás livre no reservatório é baixa → kr_o permanece alto → boa mobilidade do óleo. Solution gas drive: conforme a pressão cai abaixo do bolha, o gás se expande e ocupa espaço poroso → kr_o cai rapidamente → menor eficiência de varrimento → menor fator de recuperação.",
      "puloDoGato": "Water drive = pressão sustentada = kr_o alto = mais óleo. Solution gas = gás livre = kr_o baixo = menos óleo. A chave é a PERMEABILIDADE RELATIVA ao óleo.",
      "cascasDeBanana": {
        "A": "Correta. Pressão sustentada + menor gás livre = maior kr_o = maior recuperação.",
        "B": "Incorreta. A água tem MENOR viscosidade que o óleo pesado; a razão de mobilidade favorável depende do tipo de óleo.",
        "C": "Incorreta. Water drive ocorre em reservatórios de qualquer litologia conectados a aquíferos.",
        "D": "Incorreta. Mesmo com water drive, a recuperação secundária (injeção de água adicional) pode ser necessária.",
        "E": "Incorreta. O water drive não empurra 100% do óleo; fingering e bypassing reduzem a eficiência."
      },
      "dicaDeOuro": "Water drive → pressão alta → pouco gás livre → kr_o alto → mais petróleo recuperado. É o drive mais eficiente naturalmente."
    }
  },
  {
    "id": "q_petro_b2_013",
    "discipline": "Perfuração e Completação",
    "topic": "Perfilagem — Indução vs. Laterolog",
    "difficulty": "Avançado",
    "cargo": [
      "Engenharia de Petróleo"
    ],
    "block": 2,
    "statement": "O perfilamento por indução é preferido ao resistivímetro de eletrodos (laterolog) em formações com fluido de perfuração base-óleo porque:",
    "options": {
      "A": "O eletrodo do laterolog dissolve-se em contato com o óleo do fluido, inviabilizando a leitura.",
      "B": "O laterolog exige fluido condutor (base-água) para o circuito elétrico; o perfilamento por indução usa campos eletromagnéticos sem exigir contato galvânico com a formação.",
      "C": "O perfilamento por indução tem resolução vertical de 0,1 m vs. 1,0 m do laterolog, distinguindo camadas mais delgadas.",
      "D": "O laterolog mede resistividade apenas na zona lavada (Rxo), enquanto o de indução mede a verdadeira (Rt).",
      "E": "O perfilamento por indução opera em temperatura > 200°C, enquanto o laterolog se deteriora acima de 175°C."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O laterolog usa eletrodos que necessitam de fluido de perfuração condutor (base-água, salino) para fechar o circuito elétrico de medição. Com FBO (não condutor), o circuito não se fecha. O perfilamento por indução usa bobinas que emitem campo eletromagnético; a corrente é induzida na formação sem depender da condutividade do fluido de perfuração.",
      "puloDoGato": "Laterolog = circuito elétrico no lama = precisa de lama CONDUTORA. FBO não conduz. Indução = eletromagnetismo = independe da lama.",
      "cascasDeBanana": {
        "A": "Incorreta. O eletrodo não dissolve; o problema é de circuito elétrico aberto.",
        "B": "Correta. Laterolog exige fluido condutor; indução usa EM independente do fluido.",
        "C": "Incorreta. A resolução vertical não é o critério de escolha entre esses métodos em FBO.",
        "D": "Incorreta. Ambos os métodos podem medir Rt com correções adequadas; não é o critério de escolha.",
        "E": "Incorreta. A temperatura de operação não é o fator diferenciador principal aqui."
      },
      "dicaDeOuro": "FBO + Laterolog = não funciona (circuito aberto). FBO + Indução = funciona (campo eletromagnético). Lembre: Indução é ELETROMAGNETISMO, não precisa de lama condutora."
    }
  }
];
