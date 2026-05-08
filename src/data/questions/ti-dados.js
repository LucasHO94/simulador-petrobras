// Banco de questões: ti-dados (259 questões)
export const questions_ti_dados = [
  {
    "id": "q_ds_001",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Métricas de Avaliação",
    "difficulty": "Médio",
    "statement": "Em um problema de classificação binária para detecção de fraudes financeiras, onde o custo de um falso negativo (não detectar uma fraude) é muito superior ao de um falso positivo, qual métrica deve ser priorizada para otimização do modelo?",
    "options": {
      "A": "Precisão (Precision)",
      "B": "Acurácia (Accuracy)",
      "C": "Especificidade (Specificity)",
      "D": "Pontuação F1 (F1-Score)",
      "E": "Revocação (Recall)"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Em problemas de classificação, temos a Matriz de Confusão. Nela, um 'Falso Negativo' (FN) ocorre quando o evento real (fraude) acontece, mas o modelo diz que está tudo bem. No caso de fraudes ou doenças graves, o custo de 'deixar passar' (FN) é catastrófico. O Recall (Revocação) é a métrica que foca em minimizar esses esquecimentos.",
      "puloDoGato": "A banca costuma trocar os conceitos: Lembre-se que Precisão foca na qualidade do alerta (não dar alarmes falsos), enquanto o Recall foca na abrangência (não deixar nada passar). Para Petrobras: 'Custo de FN alto = Foco em Recall'.",
      "cascasDeBanana": {
        "B": "Incorreta. A Acurácia é a métrica mais perigosa em datasets desbalanceados. Se 99% das transações são legítimas, um modelo que diz 'nunca é fraude' terá 99% de acurácia, mas falhará em 100% das fraudes reais.",
        "A": "Incorreta. A Precisão (Precision) deve ser priorizada quando o custo do Falso Positivo é alto (ex: bloquear o cartão de um cliente bom causa atrito, mas não é tão grave quanto perder milhões em uma fraude não detectada).",
        "E": "Correta. Recall = Positivos Verdadeiros / (Positivos Verdadeiros + Falsos Negativos). Quanto maior o denominador de Falsos Negativos, menor o Recall.",
        "C": "Incorreta. Especificidade foca nos Negativos Reais (identificar quem NÃO é fraude). É o 'Recall dos negativos'.",
        "D": "Incorreta. F1-Score é a média harmônica entre Precisão e Recall. É excelente para um equilíbrio geral, mas o enunciado pede a prioridade específica devido ao custo do Falso Negativo."
      },
      "dicaDeOuro": "Recall = Rede de pesca (quer pegar todos os peixes, mesmo que venha bota junto). Precisão = Sniper (só atira se tiver certeza absoluta)."
    }
  },
  {
    "id": "q_ds_002",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regularização (L1 vs L2)",
    "difficulty": "Médio",
    "statement": "Ao aplicar a técnica de regularização Lasso (L1) em um modelo de regressão linear com muitas variáveis redundantes, qual é o efeito esperado sobre os coeficientes das variáveis menos importantes?",
    "options": {
      "A": "Os coeficientes podem ser zerados, realizando uma seleção de variáveis automática.",
      "B": "Os coeficientes tendem a aumentar para compensar o erro.",
      "C": "Os coeficientes são reduzidos proporcionalmente, mas nunca chegam a zero.",
      "D": "Os coeficientes tornam-se constantes e iguais entre si.",
      "E": "A regularização L1 não afeta os coeficientes, apenas o termo de viés (bias)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Regularização é o ato de 'punir' o modelo por ser complexo demais. O Lasso (L1) adiciona uma penalidade igual ao valor absoluto dos coeficientes. Geometricamente, essa penalidade tem um formato de diamante que força os coeficientes menos importantes a tocarem o eixo zero, eliminando-os da equação.",
      "puloDoGato": "A palavra-chave para Lasso (L1) é ESPARSIDADE ou SELEÇÃO DE VARIÁVEIS. Ele não apenas encolhe os pesos, ele 'mata' as variáveis inúteis.",
      "cascasDeBanana": {
        "B": "Incorreta. A penalização serve justamente para reduzir a magnitude dos coeficientes, combatendo o overfitting.",
        "C": "Incorreta. Essa é a descrição da penalização Ridge (L2), que usa o quadrado dos pesos e encolhe todos em direção a zero, mas raramente os zera de fato.",
        "A": "Correta. Ao zerar os coeficientes, o modelo ignora essas features, agindo como um seletor automático de atributos.",
        "D": "Incorreta. Os coeficientes variam conforme a importância da feature; não há mecanismo que os force a serem iguais entre si (isso seria mais próximo de uma média simples).",
        "E": "Incorreta. A regularização atua nos parâmetros (pesos) das variáveis preditoras para controlar a variância do modelo."
      },
      "dicaDeOuro": "Lasso = Laço (enforca a variável até ela morrer/zerar). Ridge = Rédea (apenas segura a variável para ela não correr demais)."
    }
  },
  {
    "id": "q_ds_003",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Árvores de Decisão e Random Forests",
    "difficulty": "Médio",
    "statement": "O algoritmo Random Forest utiliza o conceito de 'Bagging' para melhorar a performance. Em que consiste primordialmente essa técnica no contexto das florestas aleatórias?",
    "options": {
      "A": "Aumentar a correlação entre as árvores para garantir estabilidade.",
      "B": "Treinar árvores sequencialmente, onde cada árvore corrige o erro da anterior.",
      "C": "Treinar múltiplas árvores em paralelo utilizando diferentes subconjuntos de dados com reposição (bootstrap).",
      "D": "Reduzir o viés (bias) do modelo através da combinação de modelos fracos.",
      "E": "Utilizar apenas uma árvore de decisão muito profunda para capturar todas as variações."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Bagging significa 'Bootstrap Aggregating'. O processo funciona assim: 1. Criamos vários subconjuntos de dados sorteando linhas do dataset original com reposição (Bootstrap). 2. Treinamos um modelo independente (uma árvore) para cada conjunto. 3. Combinamos os resultados (Aggregating). Isso torna o modelo final muito mais estável.",
      "puloDoGato": "O 'Random' da Random Forest vem do fato de que, além de sortear as linhas (Bagging), o algoritmo também sorteia um subconjunto de COLUNAS em cada divisão da árvore, garantindo que as árvores sejam bem diferentes entre si.",
      "cascasDeBanana": {
        "B": "Incorreta. O treinamento sequencial (onde um modelo aprende com o erro do outro) é a definição de Boosting (ex: XGBoost, LightGBM).",
        "C": "Correta. Bootstrap (amostragem com reposição) + Agregação paralela.",
        "E": "Incorreta. Uma árvore única e profunda é o oposto da Random Forest; ela tende a decorar os dados (overfitting).",
        "D": "Incorreta. O Bagging é excelente para reduzir a Variância (instabilidade). Para reduzir o Viés (Bias), o Boosting é mais indicado.",
        "A": "Incorreta. Queremos descorrelacionar as árvores. Se todas forem iguais, a floresta não terá o benefício da diversidade estatística."
      },
      "dicaDeOuro": "Bagging = Democracia (todos votam em paralelo). Boosting = Escola (cada lição corrige o erro da anterior)."
    }
  },
  {
    "id": "q_ds_004",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Otimização e Gradiente",
    "difficulty": "Difícil",
    "statement": "Durante o treinamento de uma rede neural profunda com muitas camadas, o fenômeno do 'Vanishing Gradient' (Gradiente Desvanecente) pode ocorrer. Qual é a principal causa desse problema?",
    "options": {
      "A": "Uso de taxas de aprendizado (learning rates) excessivamente altas.",
      "B": "Inicialização dos pesos com valores muito elevados (Exploding Gradient).",
      "C": "Uso da função de ativação ReLU, que zera os valores negativos.",
      "D": "Falta de dados de treinamento suficientes para as camadas iniciais.",
      "E": "Saturação das funções de ativação como Sigmoid ou Tanh, cujas derivadas são próximas de zero."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine uma corrente de multiplicadores. Se você tem 10 camadas e em cada uma você multiplica o sinal por um número menor que 1 (como 0.2), ao chegar na primeira camada, o sinal será minúsculo (0.2^10). No backpropagation, as funções Sigmoid e Tanh 'esmagam' valores grandes em intervalos pequenos, e suas derivadas são no máximo 0.25. Multiplicar esses valores pequenos faz o gradiente 'sumir' antes de atualizar as camadas iniciais.",
      "puloDoGato": "Para a prova: Se a rede é profunda e usa Sigmoid, o gradiente morre (Vanishing). A solução é usar ReLU (que tem derivada 1 para valores positivos) ou conexões residuais (como na ResNet).",
      "cascasDeBanana": {
        "A": "Incorreta. Learning rates altos causam o efeito oposto: o gradiente explode ou o modelo nunca converge, 'pulando' o mínimo global.",
        "E": "Correta. É o efeito matemático da regra da cadeia aplicada a funções que saturam rapidamente.",
        "D": "Incorreta. O problema é a arquitetura e a matemática da rede, não a quantidade de dados, embora dados ruidosos possam mascarar o problema.",
        "C": "Incorreta. A ReLU foi criada justamente para EVITAR o vanishing gradient, pois sua derivada não satura em valores altos.",
        "B": "Incorreta. Pesos gigantes causam o 'Exploding Gradient', onde os valores de atualização ficam infinitos e quebram o treinamento."
      },
      "dicaDeOuro": "Vanishing = Sinal sumindo no caminho de volta. Sigmoid é a principal culpada."
    }
  },
  {
    "id": "q_ds_005",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Agrupamento K-Means",
    "difficulty": "Fácil",
    "statement": "No algoritmo K-Means, o 'Método do Cotovelo' (Elbow Method) é uma técnica comum utilizada para:",
    "options": {
      "A": "Identificar outliers que devem ser removidos do dataset.",
      "B": "Escolher a melhor função de distância (Euclidiana ou Manhattan).",
      "C": "Visualizar a separação linear entre as classes.",
      "D": "Acelerar a convergência do algoritmo reduzindo o número de iterações.",
      "E": "Determinar o número ideal de clusters (K) observando a redução da inércia."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O K-Means quer que os pontos fiquem o mais perto possível dos centros dos seus clusters (isso se chama Inércia ou WCSS). Se você aumentar o número de clusters (K), a Inércia sempre cai. Se K for igual ao número de pontos, a Inércia é zero. O método do cotovelo busca o ponto onde ganhar mais um cluster não traz mais uma melhora significativa no agrupamento.",
      "puloDoGato": "Imagine um gráfico de 'Esforço vs Ganho'. O cotovelo é o ponto de equilíbrio ideal. A Cesgranrio adora perguntar a utilidade desse método para definir o hiperparâmetro K.",
      "cascasDeBanana": {
        "A": "Incorreta. Para outliers, usamos técnicas como DBSCAN ou análise de silhueta, não o método do cotovelo.",
        "E": "Correta. Localiza o 'joelho' da curva onde o custo-benefício de adicionar clusters estabiliza.",
        "B": "Incorreta. A métrica de distância (Euclidiana, Manhattan) é definida antes da aplicação do método do cotovelo.",
        "C": "Incorreta. O K-Means é não-linear em sua essência de agrupamento; o gráfico do cotovelo não visualiza fronteiras de classes, mas sim somas de erros quadrados.",
        "D": "Incorreta. Ele serve para escolha de modelo, não para otimização de tempo de CPU/iteração."
      },
      "dicaDeOuro": "Cotovelo = Onde a curva 'dobra'. É o K ideal."
    }
  },
  {
    "id": "q_ds_006",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regressão Logística",
    "difficulty": "Médio",
    "statement": "Na Regressão Logística, a função logit mapeia probabilidades no intervalo [0, 1] para valores no intervalo [-∞, +∞]. Qual é a interpretação correta do coeficiente (β) de uma variável independente X no modelo?",
    "options": {
      "A": "Indica o erro residual acumulado após a convergência do gradiente.",
      "B": "Representa o logaritmo da razão de chances (log-odds) de Y ocorrer para cada unidade de X.",
      "C": "Representa a variância explicada pelo modelo através daquela variável.",
      "D": "Representa a mudança direta na probabilidade de Y ocorrer para cada unidade de X.",
      "E": "É o valor da probabilidade quando X é igual a zero."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Probabilidade é o valor entre 0 e 1 (ex: 80% de chance). Chance (Odds) é a razão entre sucesso e falha (ex: 4 para 1). A Regressão Logística aplica o LOGARITMO dessa chance (Logit). Isso transforma uma curva de probabilidade em uma linha reta infinita, permitindo que usemos matemática de regressão linear para problemas de classificação.",
      "puloDoGato": "O coeficiente beta (β) diz quanto o LOG-ODDS aumenta para cada 1 unidade de X. Se você quiser saber o efeito na chance real, precisa fazer e^β (exponencial do coeficiente).",
      "cascasDeBanana": {
        "A": "Incorreta. A mudança na probabilidade na regressão logística segue uma curva em 'S' (sigmoide). Portanto, o impacto de aumentar 1 unidade de X na probabilidade depende de onde você está na curva.",
        "B": "Correta. Definição estatística rigorosa do que o modelo está calculando internamente.",
        "C": "Incorreta. R² ou Variância Explicada são métricas de performance, não o significado do coeficiente individual.",
        "D": "Incorreta. Quando X=0, o valor é o intercepto (β0).",
        "E": "Incorreta. Erros residuais são a diferença entre o real e o predito, não o peso da variável."
      },
      "dicaDeOuro": "Logística = Regressão Linear disfarçada de classificação através do Log-Odds."
    }
  },
  {
    "id": "q_ds_007",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Trade-off Variância e Viés",
    "difficulty": "Médio",
    "statement": "Um modelo de aprendizado de máquina que apresenta um erro muito baixo no conjunto de treinamento, mas um erro muito elevado no conjunto de teste, é caracterizado por:",
    "options": {
      "A": "Alto Viés (Bias) e Baixa Variância.",
      "B": "Baixo Viés (Bias) e Alta Variância.",
      "C": "Baixo Viés (Bias) e Baixa Variância.",
      "D": "Viés e Variância nulos.",
      "E": "Alto Viés (Bias) e Alta Variância."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O erro total de um modelo vem de três fontes: Viés (Bias), Variância e Ruído Irredutível. O Viés ocorre quando o modelo é simples demais e não aprende o padrão (Underfitting). A Variância ocorre quando o modelo é complexo demais e 'decora' até o ruído do treino (Overfitting).",
      "puloDoGato": "Imagine um alvo de tiro. Viés alto = Tiros agrupados, mas longe do centro. Variância alta = Tiros espalhados por todo o alvo. O enunciado descreve o cenário onde o modelo é 'mestre' no treino mas 'péssimo' no teste: Alta Variância.",
      "cascasDeBanana": {
        "B": "Correta. Baixo viés significa que ele acertou o treino. Alta variância significa que ele muda drasticamente diante de novos dados.",
        "A": "Incorreta. Isso descreve o Underfitting (ex: usar uma linha reta para tentar prever uma parábola). O erro seria alto tanto no treino quanto no teste.",
        "C": "Incorreta. Este é o 'Santo Graal' do Machine Learning: o modelo que aprende o padrão real e generaliza perfeitamente.",
        "E": "Incorreta. O pior dos mundos: o modelo não aprende o treino e ainda erra feio no teste.",
        "D": "Incorreta. O ruído irredutível sempre garante que o erro nunca seja zero na prática."
      },
      "dicaDeOuro": "Decorou o treino? Alta Variância. Não aprendeu nem o treino? Alto Viés."
    }
  },
  {
    "id": "q_ds_008",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "K-NN (K-Nearest Neighbors)",
    "difficulty": "Médio",
    "statement": "No algoritmo K-NN, a escolha do hiperparâmetro K (número de vizinhos) influencia diretamente a fronteira de decisão. O que ocorre quando escolhemos um valor de K muito pequeno (ex: K=1)?",
    "options": {
      "A": "A fronteira de decisão torna-se mais suave e menos sensível a ruídos.",
      "B": "O modelo tende ao Underfitting, ignorando padrões locais.",
      "C": "A fronteira de decisão torna-se complexa e muito sensível a ruídos (Outliers).",
      "D": "O modelo torna-se equivalente a uma regressão linear global.",
      "E": "O tempo de treinamento do modelo aumenta exponencialmente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O K-NN é um algoritmo de vizinhança. Se K=1, você decide a classe de um novo ponto olhando apenas para 'o vizinho mais próximo'. Se esse vizinho for um erro nos dados ou um ponto fora da curva (outlier), seu modelo vai errar junto. É como tomar uma decisão de vida baseada na opinião de apenas uma pessoa aleatória na rua.",
      "puloDoGato": "Para a Petrobras: K pequeno = Fronteira de decisão 'recortada' (Alta Variância/Overfitting). K grande = Fronteira 'suave' (Alto Viés/Underfitting).",
      "cascasDeBanana": {
        "A": "Incorreta. Fronteiras suaves ocorrem quando você consulta muitos vizinhos (K alto), o que tira a média do 'barulho' local.",
        "B": "Incorreta. Underfitting é o risco de um K muito grande (ex: K=N, onde todos seriam da classe majoritária).",
        "C": "Correta. O modelo fica refém de qualquer ruído local nos dados.",
        "D": "Incorreta. O K-NN não tem fase de treinamento real; ele apenas guarda os dados. O custo está na fase de predição (busca).",
        "E": "Incorreta. A regressão linear é um modelo paramétrico global, o K-NN é não-paramétrico local."
      },
      "dicaDeOuro": "K muito baixo? Cuidado com o ruído (Overfitting)."
    }
  },
  {
    "id": "q_ds_009",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização (Dropout)",
    "difficulty": "Médio",
    "statement": "A técnica de Dropout é amplamente utilizada em Redes Neurais para reduzir o overfitting. Como o Dropout funciona durante a fase de treinamento?",
    "options": {
      "A": "Remove as camadas mais profundas da rede que não convergem.",
      "B": "Multiplica os pesos por um fator de penalização L2.",
      "C": "Reduz a taxa de aprendizado conforme o erro diminui.",
      "D": "Zera aleatoriamente uma fração dos neurônios (e suas conexões) em cada iteração.",
      "E": "Adiciona ruído gaussiano às etiquetas (labels) de saída."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Em Redes Neurais, alguns neurônios podem se tornar 'dependentes' de outros para processar uma informação específica (co-adaptação). O Dropout quebra isso sorteando, em cada rodada de treino, quais neurônios vão 'dormir'. Isso força a rede a aprender caminhos alternativos e redundantes para chegar à mesma conclusão.",
      "puloDoGato": "Pense no Dropout como um técnico que tira jogadores titulares aleatoriamente nos treinos para que o time aprenda a jogar bem com qualquer formação. No jogo real (Teste/Produção), o time completo entra em campo (Dropout é desligado).",
      "cascasDeBanana": {
        "D": "Correta. Descrição exata do processo de 'desligamento' aleatório por probabilidade P.",
        "C": "Incorreta. Isso descreve o decaimento da taxa de aprendizado (Learning Rate Decay), outra técnica de otimização.",
        "E": "Incorreta. Adicionar ruído na saída é uma técnica de aumento de dados (Data Augmentation) ou suavização de labels, não Dropout.",
        "A": "Incorreta. O Dropout atua em neurônios individuais de camadas específicas, não remove as camadas físicas da rede.",
        "B": "Incorreta. Multiplicar pesos por penalidade é o Weight Decay (L2), que atua na magnitude, não na ativação/inatividade binária."
      },
      "dicaDeOuro": "Dropout = Forçar a rede a ser robusta 'desligando' neurônios no treino."
    }
  },
  {
    "id": "q_ds_010",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Naive Bayes",
    "difficulty": "Médio",
    "statement": "O algoritmo Naive Bayes é chamado de 'ingênuo' (naive) devido a uma suposição simplificadora sobre os dados. Qual é essa suposição?",
    "options": {
      "A": "Supõe que o erro do modelo é sempre zero na base de treinamento.",
      "B": "Supõe que a classe positiva é sempre mais frequente que a negativa.",
      "C": "Supõe que não existem valores faltantes no dataset.",
      "D": "Supõe que todas as características (features) são independentes entre si, dada a classe.",
      "E": "Supõe que os dados seguem sempre uma distribuição normal."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Teorema de Bayes calcula a probabilidade de um evento baseando-se em conhecimentos prévios. Ele é 'Ingênuo' porque assume que as características não se conversam. Por exemplo: se um e-mail tem as palavras 'Vencer' e 'Agora', o modelo calcula a chance de ser spam tratando cada palavra como se fosse independente da outra, ignorando que elas aparecem juntas em um contexto.",
      "puloDoGato": "Por que cai na prova? Porque mesmo sendo 'burro' em ignorar o contexto, ele é extremamente rápido, exige poucos dados e funciona muito bem para filtros de Spam e análise de textos simples.",
      "cascasDeBanana": {
        "E": "Incorreta. Embora o Gaussian Naive Bayes use a normal para dados contínuos, a 'ingenuidade' reside na independência das features, não na distribuição.",
        "D": "Correta. Independência condicional entre as variáveis preditoras.",
        "B": "Incorreta. O modelo lida bem com classes desbalanceadas através das probabilidades a priori.",
        "A": "Incorreta. Como qualquer modelo, ele busca minimizar o erro, mas não assume que ele seja zero.",
        "C": "Incorreta. Ele é um dos modelos que melhor lida com dados faltantes, pois simplesmente anula a probabilidade daquela feature no cálculo do produto."
      },
      "dicaDeOuro": "Naive = Features não têm DR (não discutem a relação). São independentes."
    }
  },
  {
    "id": "q_ds_011",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Máquina de Suporte de Vetores (SVM)",
    "difficulty": "Difícil",
    "statement": "O algoritmo SVM é conhecido pelo uso do 'Kernel Trick'. Em que consiste essa técnica e qual sua principal vantagem?",
    "options": {
      "A": "Consiste em selecionar apenas os vetores de suporte mais próximos da origem para definir o hiperplano.",
      "B": "Consiste em reduzir o número de variáveis para simplificar o cálculo das distâncias.",
      "C": "Consiste em embaralhar os dados (shuffle) para evitar o overfitting durante a convergência.",
      "D": "Consiste em aplicar uma função sigmoide na saída para obter probabilidades de classe.",
      "E": "Consiste em mapear os dados para um espaço de maior dimensão onde eles se tornam linearmente separáveis, sem calcular explicitamente as coordenadas nesse espaço."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O SVM tenta encontrar a 'melhor fronteira' (hiperplano) que separa duas classes com a maior margem possível. Quando os dados não podem ser separados por uma linha reta (não-lineares), o Kernel Trick entra em ação: ele calcula a relação entre os pontos como se estivessem em uma dimensão superior (ex: transformar um círculo de pontos em 2D em um cone em 3D), onde uma separação linear se torna possível.",
      "puloDoGato": "O 'truque' é que o SVM não precisa realmente converter os dados para 3D (o que seria caríssimo em memória). Ele usa uma função matemática (o Kernel) que dá o mesmo resultado de um produto escalar no espaço de alta dimensão, mas operando no espaço original.",
      "cascasDeBanana": {
        "B": "Incorreta. O Kernel Trick geralmente aumenta a dimensionalidade implícita, não reduz. Redução seria papel do PCA.",
        "E": "Correta. É o mapeamento implícito para um espaço de maior dimensão para permitir separação linear.",
        "A": "Incorreta. Vetores de suporte são os pontos mais próximos da fronteira, mas o truque não é a seleção deles, e sim a forma como a distância entre eles é calculada via Kernel.",
        "D": "Incorreta. SVM puro não retorna probabilidades, ele retorna a classe de forma 'seca' (0 ou 1). Para obter probabilidades, usamos calibração (como o método de Platt).",
        "C": "Incorreta. Shuffle ajuda no treinamento estocástico, mas não tem relação com a matemática do Kernel."
      },
      "dicaDeOuro": "Dados misturados em 2D? O Kernel Trick projeta em 3D para passar a faca (hiperplano) entre eles."
    }
  },
  {
    "id": "q_ds_012",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Ensembles (Boosting)",
    "difficulty": "Médio",
    "statement": "Qual é a principal diferença operacional entre as técnicas de Bagging (ex: Random Forest) e Boosting (ex: AdaBoost, Gradient Boosting)?",
    "options": {
      "A": "O Bagging treina modelos sequencialmente, enquanto o Boosting treina em paralelo.",
      "B": "O Boosting utiliza apenas árvores de decisão, enquanto o Bagging aceita qualquer algoritmo.",
      "C": "O Bagging foca em reduzir o viés, enquanto o Boosting foca em reduzir a variância.",
      "D": "No Bagging os modelos são independentes; no Boosting cada novo modelo tenta corrigir os erros dos anteriores.",
      "E": "O Bagging requer mais dados de treinamento do que o Boosting para ser eficaz."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Ensembles são 'comitês' de modelos. No Bagging (Random Forest), os modelos são independentes: cada árvore dá sua opinião e tiramos a média. No Boosting (XGBoost/AdaBoost), os modelos são como alunos em uma sala de aula: o segundo aluno estuda o que o primeiro errou, o terceiro foca no que o segundo ainda não aprendeu, e assim por diante.",
      "puloDoGato": "Bagging trabalha em paralelo (rápido, reduz variância). Boosting trabalha em série (lento para treinar, reduz viés/erro sistemático). No Boosting, cada nova rodada dá mais peso aos dados que o modelo anterior errou.",
      "cascasDeBanana": {
        "A": "Incorreta. Inverteu tudo: Bagging é paralelo e Boosting é sequencial.",
        "C": "Incorreta. Inverteu os objetivos: Bagging reduz Variância (instabilidade) e Boosting reduz Viés (erro de aprendizado).",
        "D": "Correta. Define a dependência sequencial e a correção de erros característica do Boosting.",
        "B": "Incorreta. Embora árvores sejam o padrão para ambos (pela eficiência), a teoria aceita outros modelos base (weak learners).",
        "E": "Incorreta. Ambos escalam bem com muitos dados, mas o Boosting costuma ser mais propenso a overfitting se o dataset for muito pequeno e ruidoso."
      },
      "dicaDeOuro": "Bagging = Votação Independente. Boosting = Aprendizado com o Erro do vizinho."
    }
  },
  {
    "id": "q_ds_013",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Validação Cruzada (K-Fold)",
    "difficulty": "Fácil",
    "statement": "A Validação Cruzada K-Fold é uma técnica robusta para avaliar a performance de um modelo. Qual é a sua principal vantagem em relação à simples divisão Treino/Teste (Holdout)?",
    "options": {
      "A": "Garante que o modelo nunca sofra de overfitting.",
      "B": "Diminui drasticamente o tempo computacional necessário para treinar o modelo.",
      "C": "Substitui a necessidade de ter um conjunto de validação separado.",
      "D": "Permite que o modelo aprenda padrões de dados que não existem no dataset original.",
      "E": "Reduz a variância da estimativa de performance ao utilizar todos os dados tanto para treino quanto para teste em diferentes rodadas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine que você divide seus dados em 5 pedaços (folds). Você treina o modelo 5 vezes. Em cada vez, um pedaço diferente fica de fora para ser o teste. Ao final, você tem 5 métricas de performance e tira a média. Isso é muito melhor do que dividir uma única vez (Holdout), pois garante que todos os dados participaram do teste em algum momento.",
      "puloDoGato": "O K-Fold 'achata' a sorte ou o azar de um sorteio único. Se você tiver um dado muito estranho (outlier) no seu teste do Holdout, sua performance vai parecer horrível. No K-Fold, esse efeito é diluído nas outras rodadas.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele ajuda a medir o overfitting, mas não impede que o modelo decore os dados (isso depende da complexidade do modelo).",
        "E": "Correta. Proporciona uma estimativa da performance real muito mais estável e confiável estatisticamente.",
        "B": "Incorreta. O K-Fold é K vezes mais lento, pois você treina o modelo K vezes.",
        "D": "Incorreta. O modelo nunca aprende nada além do que está no conjunto de treino fornecido.",
        "C": "Incorreta. Ele não substitui, ele é uma forma dinâmica de usar os dados de validação."
      },
      "dicaDeOuro": "K-Fold = Tirar a prova dos nove K vezes para ter certeza do resultado."
    }
  },
  {
    "id": "q_ds_014",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regularização (Elastic Net)",
    "difficulty": "Médio",
    "statement": "O que caracteriza a técnica de regularização Elastic Net em modelos lineares?",
    "options": {
      "A": "É uma técnica aplicada exclusivamente em redes neurais convolucionais.",
      "B": "Ajusta automaticamente a taxa de aprendizado conforme o gradiente desce.",
      "C": "Elimina a necessidade de normalização prévia dos dados.",
      "D": "Combina as penalizações L1 (Lasso) e L2 (Ridge) através de uma soma ponderada.",
      "E": "Utiliza apenas a penalização L1 para zerar coeficientes."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Pense no Elastic Net como um botão de ajuste. De um lado temos o Lasso (L1), que é agressivo e zera variáveis inúteis. Do outro temos o Ridge (L2), que é conservador e apenas encolhe as variáveis. O Elastic Net permite que você fique no meio do caminho, usando as duas penalidades simultaneamente.",
      "puloDoGato": "O Elastic Net é especialmente bom quando você tem muitas variáveis que têm correlação entre si. O Lasso tende a escolher apenas uma delas aleatoriamente, enquanto o Elastic Net mantém grupos de variáveis correlacionadas juntas.",
      "cascasDeBanana": {
        "E": "Incorreta. Lasso puro (L1) foca apenas em esparsidade.",
        "D": "Correta. É a combinação linear das normas L1 e L2.",
        "B": "Incorreta. Isso descreve o funcionamento de otimizadores de redes neurais (como Adam), não uma técnica de regularização de pesos.",
        "A": "Incorreta. É uma técnica clássica para modelos lineares (Regressão Linear/Logística).",
        "C": "Incorreta. Pelo contrário: se as variáveis estiverem em escalas diferentes, a regularização vai punir injustamente as variáveis com valores maiores."
      },
      "dicaDeOuro": "Elastic Net = O equilíbrio entre zerar variáveis (Lasso) e apenas encolhê-las (Ridge)."
    }
  },
  {
    "id": "q_ds_015",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Redução de Dimensionalidade (PCA)",
    "difficulty": "Médio",
    "statement": "Ao realizar uma análise de componentes principais (PCA), o cientista de dados observa o gráfico de 'variância explicada acumulada'. O que os primeiros componentes principais representam?",
    "options": {
      "A": "Direções no espaço de dados que capturam a maior quantidade de variância (informação).",
      "B": "As classes do problema de classificação com maior densidade de pontos.",
      "C": "Combinações aleatórias de variáveis para testar a robustez do modelo.",
      "D": "As variáveis originais que possuem os menores valores numéricos.",
      "E": "Os outliers que mais distorcem a média do dataset."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine uma nuvem de pontos em 3D. O PCA tenta encontrar o melhor ângulo para tirar uma foto em 2D dessa nuvem de modo que os pontos fiquem o mais espalhados possível (ou seja, preservando o máximo de informação original). A direção dessa foto é o Componente Principal.",
      "puloDoGato": "O primeiro Componente Principal (PC1) é sempre a direção que captura a MAIOR variância do dataset. O PC2 é ortogonal (faz 90 graus) ao PC1 e captura a segunda maior variância, e assim por diante.",
      "cascasDeBanana": {
        "D": "Incorreta. O PCA foca na variância (espalhamento), não na magnitude absoluta dos valores originais.",
        "A": "Correta. Componentes Principais são direções de variância máxima.",
        "B": "Incorreta. PCA não sabe o que são classes; ele olha apenas para a geometria dos pontos (não-supervisionado).",
        "C": "Incorreta. É um cálculo matemático exato (decomposição de matrizes), nada de aleatório.",
        "E": "Incorreta. Outliers podem até 'puxar' os componentes para si, mas o objetivo do PCA é descrever a estrutura global dos dados, não focar em erros."
      },
      "dicaDeOuro": "PCA = Projetar os dados para reduzir dimensões sem perder a 'alma' (variância) da informação."
    }
  },
  {
    "id": "q_ds_016",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Árvores de Decisão (Gini vs Entropia)",
    "difficulty": "Difícil",
    "statement": "Ao construir uma árvore de decisão para classificação, algoritmos como o CART utilizam o Índice Gini, enquanto o ID3 utiliza a Ganho de Informação (Entropia). Qual é a principal característica do Índice Gini em comparação com a Entropia?",
    "options": {
      "A": "O valor máximo da Entropia é 0.5, enquanto o do Gini é 1.0.",
      "B": "O Índice Gini mede a probabilidade de um elemento ser classificado incorretamente se escolhido aleatoriamente.",
      "C": "A Entropia sempre resulta em árvores mais rasas do que o Gini.",
      "D": "O Índice Gini é computacionalmente mais caro por envolver logaritmos.",
      "E": "O Gini é utilizado exclusivamente para variáveis contínuas, e a Entropia para categóricas."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Para decidir onde 'cortar' uma árvore de decisão, precisamos saber o quão misturado (impuro) está um grupo. O Índice Gini e a Entropia medem isso. A Entropia usa logaritmos (baseada na Teoria da Informação), enquanto o Gini usa apenas quadrados de probabilidades. Na prática, ambos dão resultados muito parecidos.",
      "puloDoGato": "O Scikit-Learn usa o Gini como padrão porque ele é mais rápido de calcular (fazer quadrados é mais fácil para o processador do que calcular logaritmos). Para a Petrobras: Gini foca na probabilidade de uma classificação aleatória dar errado.",
      "cascasDeBanana": {
        "A": "Incorreta. Pelo contrário: a Entropia que usa logaritmo e é mais lenta.",
        "B": "Correta. É a definição probabilística do Gini (Impureza de Gini).",
        "C": "Incorreta. O critério de pureza não dita a profundidade sozinho; isso depende dos hiperparâmetros como max_depth.",
        "D": "Incorreta. Ambos funcionam para variáveis categóricas na classificação.",
        "E": "Incorreta. Inverteu os valores: Gini binário vai de 0 a 0.5. Entropia binária vai de 0 a 1.0."
      },
      "dicaDeOuro": "Gini = Rapidez e Probabilidade de Erro. Entropia = Desordem e Logaritmo."
    }
  },
  {
    "id": "q_ds_017",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Funções de Ativação (Softmax)",
    "difficulty": "Fácil",
    "statement": "Em uma rede neural projetada para classificação multiclasse (ex: identificar 10 tipos diferentes de minerais), qual função de ativação é geralmente aplicada na camada de saída?",
    "options": {
      "A": "Tanh",
      "B": "Linear",
      "C": "Sigmoid",
      "D": "ReLU",
      "E": "Softmax"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine que sua rede neural termina com 3 neurônios (Cão, Gato, Pássaro). Na saída eles podem valer [2.0, 1.0, 0.1]. A função Softmax 'esmaga' esses números de modo que eles virem probabilidades entre 0 e 1 e a soma deles seja exatamente 100% (ex: [0.7, 0.2, 0.1]).",
      "puloDoGato": "Sigmoid serve para SIM/NÃO (uma única saída). Softmax serve para escolha entre várias opções (exclusivas). É a camada final de quase todo classificador de imagens moderno.",
      "cascasDeBanana": {
        "D": "Incorreta. ReLU é usada para dar 'vida' aos neurônios nas camadas do meio, não para dar a resposta final em probabilidades.",
        "C": "Incorreta. Se você usasse 3 sigmoides, as 3 poderiam dar 0.9 ao mesmo tempo, e a soma seria 2.7 (não faz sentido como probabilidade de classes exclusivas).",
        "E": "Correta. Garante que as classes compitam entre si e somem 1.0.",
        "B": "Incorreta. Linear é usada em regressão (prever preço, temperatura).",
        "A": "Incorreta. Tanh vai de -1 a 1, o que não serve para representar probabilidades diretas de classe."
      },
      "dicaDeOuro": "Classificação de um entre vários? Softmax na saída."
    }
  },
  {
    "id": "q_ds_018",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Agrupamento Hierárquico",
    "difficulty": "Médio",
    "statement": "O Agrupamento Hierárquico Aglomerativo gera uma estrutura visual chamada Dendrograma. Como podemos utilizar o Dendrograma para decidir o número de clusters no dataset?",
    "options": {
      "A": "Contando o número total de folhas na base do gráfico.",
      "B": "Observando a cor dos ramos, que indica a densidade de cada grupo.",
      "C": "Multiplicando a altura do gráfico pelo número de variáveis originais.",
      "D": "O Dendrograma não permite escolher o número de clusters, ele é fixo.",
      "E": "Realizando um corte horizontal no gráfico onde a distância vertical entre as fusões é maior."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Dendrograma é como uma árvore genealógica dos dados. Na base, cada ponto é um indivíduo. Conforme subimos, eles vão se casando e formando famílias (clusters). A altura das linhas verticais representa a 'distância' (dessemelhança) entre os grupos que estão sendo unidos.",
      "puloDoGato": "Para escolher o número de clusters, você olha para o dendrograma e faz um corte horizontal. Se o corte passar por 3 linhas verticais, você terá 3 clusters. O melhor lugar para cortar é no maior 'espaço vazio' vertical, onde os grupos estão bem longe uns dos outros.",
      "cascasDeBanana": {
        "A": "Incorreta. As folhas são apenas os dados brutos, não os grupos.",
        "E": "Correta. É o critério visual para encontrar a separação natural dos dados.",
        "B": "Incorreta. Cores são usadas apenas para facilitar a visualização de grupos já definidos pelo software.",
        "D": "Incorreta. Ele é fixo na estrutura, mas você tem liberdade total para escolher o nível de granularidade (corte).",
        "C": "Incorreta. A altura tem significado de distância estatística, não é um multiplicador de variáveis."
      },
      "dicaDeOuro": "Dendrograma = Árvore de dados. Corte a árvore para colher os clusters."
    }
  },
  {
    "id": "q_ds_019",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Python Scikit-Learn (Pipelines)",
    "difficulty": "Médio",
    "statement": "Por que é considerada uma boa prática utilizar o objeto 'Pipeline' do Scikit-Learn ao realizar validação cruzada, especialmente quando os dados precisam de pré-processamento como o StandardScaler?",
    "options": {
      "A": "Para permitir que o modelo utilize variáveis categóricas sem codificação.",
      "B": "Porque o Pipeline é o único objeto que aceita o algoritmo Random Forest.",
      "C": "Porque o Pipeline aumenta a velocidade de processamento da GPU.",
      "D": "Porque o Pipeline substitui a necessidade de limpar valores faltantes.",
      "E": "Para evitar o 'Data Leakage' (vazamento de dados), garantindo que o escalonamento seja calculado apenas nos dados de treino de cada fold."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine que você quer prever a altura de pessoas e resolve normalizar os dados (subtrair a média). Se você calcular a média usando TODO o dataset e depois separar em treino e teste, o seu treino 'já sabe' qual é a média do teste. Isso é trapaça estatística (Vazamento de Dados). O Pipeline garante que cada etapa seja feita isoladamente dentro de cada rodada de validação.",
      "puloDoGato": "Data Leakage (Vazamento) faz seu modelo parecer um gênio no computador, mas quando ele vai para o mundo real, ele fracassa porque ele 'decorou' estatísticas do futuro que ele não deveria conhecer durante o treino.",
      "cascasDeBanana": {
        "C": "Incorreta. O Pipeline não afeta o hardware; ele é uma ferramenta de organização de código e rigor metodológico.",
        "E": "Correta. Evita que informações do conjunto de teste 'contaminem' o treinamento.",
        "D": "Incorreta. O Pipeline apenas organiza os passos; o tratamento de nulos continua sendo um passo necessário (Imputation).",
        "A": "Incorreta. Variáveis categóricas precisam ser tratadas (OneHot/Label Encoding) e isso pode ser um passo dentro do pipeline.",
        "B": "Incorreta. Pipelines são agnósticos ao algoritmo; funcionam com SVM, Regressão, Árvores, etc."
      },
      "dicaDeOuro": "Pipeline = Organização + Rigor contra Trapaça Estatística (Leakage)."
    }
  },
  {
    "id": "q_ds_020",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Curvas ROC e Precision-Recall",
    "difficulty": "Difícil",
    "statement": "Ao avaliar um modelo em um dataset extremamente desbalanceado (ex: 99.9% classe negativa), por que a curva Precision-Recall (PR) costuma ser preferida em relação à curva ROC?",
    "options": {
      "A": "Porque a curva ROC exige que as probabilidades sejam normalizadas entre -1 e 1.",
      "B": "Porque a curva ROC não pode ser calculada para problemas binários.",
      "C": "Não há preferência; ambas as curvas apresentam o mesmo resultado matemático.",
      "D": "Porque a curva PR foca exclusivamente nos acertos da classe majoritária.",
      "E": "Porque a curva ROC pode ser otimista demais, pois a Taxa de Falsos Positivos (FPR) é diluída pelo grande número de negativos reais."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Curva ROC usa a Taxa de Falsos Positivos (FPR) no eixo X. O FPR leva em conta os Negativos Verdadeiros (TN). Se você tem 1 milhão de pessoas saudáveis e apenas 10 doentes, o modelo pode errar muito e ainda assim o FPR vai parecer pequeno (diluído). Já a curva Precision-Recall foca apenas nos acertos da classe de interesse (os 10 doentes), ignorando a 'massa' de saudáveis fácil de prever.",
      "puloDoGato": "Mnemônico: ROC para dados equilibrados. Precision-Recall para 'agulha no palheiro' (fraudes, doenças raras).",
      "cascasDeBanana": {
        "B": "Incorreta. Pelo contrário: ROC é a ferramenta número 1 para avaliação binária padrão.",
        "E": "Correta. Explica o fenômeno da diluição do erro em datasets com excesso de exemplos negativos (TN).",
        "D": "Incorreta. O foco é justamente na classe positiva (minoritária), que é a que realmente importa detectar.",
        "A": "Incorreta. Curvas de performance usam probabilidades (0 a 1) ou scores brutos, sem essa exigência de normalização específica.",
        "C": "Incorreta. Em dados desbalanceados, a ROC pode estar no canto superior esquerdo (parecendo perfeita) enquanto a PR está lá embaixo (mostrando que o modelo é ruim)."
      },
      "dicaDeOuro": "Dataset Desbalanceado? Fuja da ROC e use Precision-Recall AUC."
    }
  },
  {
    "id": "q_ds_021",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Random Forest (OOB Score)",
    "difficulty": "Médio",
    "statement": "O algoritmo Random Forest permite calcular o 'Out-of-Bag (OOB) Score'. Qual é a finalidade dessa métrica?",
    "options": {
      "A": "Identificar quais árvores devem ser removidas por apresentarem baixa performance.",
      "B": "Avaliar o modelo utilizando as amostras de dados que não foram selecionadas pelo bootstrap para treinar cada árvore específica.",
      "C": "Ajustar automaticamente a profundidade máxima de cada árvore da floresta.",
      "D": "Medir a importância das variáveis através de permutações aleatórias.",
      "E": "Calcular o erro residual médio de todas as árvores combinadas."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "No Random Forest, cada árvore é treinada usando uma técnica chamada 'Bagging' (Bootstrap Aggregating). Isso significa que, para cada árvore, sorteamos cerca de 63% dos dados originais. Os outros 37% que não foram usados são chamados de 'Out-of-Bag' (fora da sacola). Podemos usar esses dados para testar a árvore imediatamente, sem precisar de um conjunto de teste separado.",
      "puloDoGato": "O OOB Score é uma métrica de validação 'gratuita'. Ele é tão robusto quanto uma validação cruzada K-Fold, mas muito mais rápido, pois acontece simultaneamente ao treinamento da floresta.",
      "cascasDeBanana": {
        "A": "Incorreta. Medir importância via permutações é uma técnica de interpretação de modelos (Permutation Importance), não o OOB Score em si.",
        "B": "Correta. Utiliza a 'sobra' do bootstrap para validar cada árvore individualmente.",
        "C": "Incorreta. O erro residual é uma métrica geral, o diferencial do OOB é a fonte dos dados (os dados não vistos).",
        "D": "Incorreta. Hiperparâmetros como profundidade são definidos antes do treino, o OOB apenas avalia o resultado.",
        "E": "Incorreta. Não removemos árvores da floresta baseando-se no OOB; a força da Random Forest vem justamente da agregação de todas elas."
      },
      "dicaDeOuro": "OOB = Validação em tempo real usando o que sobrou do sorteio (Bootstrap)."
    }
  },
  {
    "id": "q_ds_022",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Regras de Associação (Lift)",
    "difficulty": "Médio",
    "statement": "Em sistemas de recomendação baseados em Regras de Associação, a métrica 'Lift' é utilizada para medir a força de uma regra (A → B). O que um valor de Lift maior que 1 indica?",
    "options": {
      "A": "Que a ocorrência de A diminui a probabilidade de ocorrência de B.",
      "B": "Que o item B é o mais vendido de todo o dataset.",
      "C": "Que a regra possui 100% de confiança.",
      "D": "Que a ocorrência de A é independente da ocorrência de B.",
      "E": "Que a ocorrência de A aumenta a probabilidade de ocorrência de B mais do que o esperado por acaso."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Lift indica quanto mais provável é que um cliente compre o item B se ele já comprou o item A, comparado à compra do item B sem saber nada sobre o item A. Se o Lift for maior que 1, existe uma relação positiva real (eles 'andam juntos'). Se for 1, a compra de um não diz nada sobre a do outro.",
      "puloDoGato": "Por que não usar apenas a 'Confiança'? Imagine que todo mundo compra Pão (popularidade 90%). A confiança da regra (Queijo -> Pão) será alta apenas porque o Pão é popular, e não necessariamente porque o Queijo 'puxa' o Pão. O Lift corrige esse viés de popularidade.",
      "cascasDeBanana": {
        "D": "Incorreta. Lift = 1 indica independência estatística.",
        "A": "Incorreta. Lift < 1 indica que os itens são substitutos ou se repelem (quem compra um evita o outro).",
        "E": "Correta. Significa que a associação é mais forte do que o simples acaso estatístico.",
        "C": "Incorreta. Confiança é outra métrica (P(B|A)); Lift é a razão entre confiança e o suporte de B.",
        "B": "Incorreta. Isso seria medido apenas pelo 'Suporte' do item B isoladamente."
      },
      "dicaDeOuro": "Lift > 1 = Alavancagem. A presença de A impulsiona a chance de B."
    }
  },
  {
    "id": "q_ds_023",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização (Early Stopping)",
    "difficulty": "Fácil",
    "statement": "A técnica de 'Early Stopping' (Parada Precoce) consiste em interromper o treinamento de uma rede neural quando:",
    "options": {
      "A": "A acurácia do modelo atinge 100% no conjunto de teste.",
      "B": "O número máximo de épocas definido pelo usuário é atingido.",
      "C": "O erro no conjunto de treinamento chega a zero.",
      "D": "O erro no conjunto de validação para de diminuir e começa a subir, indicando início de overfitting.",
      "E": "A taxa de aprendizado torna-se menor que um limiar pré-definido."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Durante o treinamento, a rede começa a 'decorar' os dados (overfitting). Se plotarmos o gráfico de erro, veremos que o erro no treino cai para sempre, mas o erro no conjunto de VALIDAÇÃO para de cair e começa a subir em algum momento. O Early Stopping é o vigia que manda parar o treino exatamente nesse ponto de virada.",
      "puloDoGato": "Vantagem dupla: você economiza tempo de processamento (energia/dinheiro) e garante um modelo que generaliza melhor para dados que nunca viu. É como parar de estudar para uma prova quando você percebe que começou a decorar números de página em vez do conteúdo.",
      "cascasDeBanana": {
        "C": "Incorreta. Se o erro no treino for zero, você já passou do ponto e está em Overfitting total.",
        "B": "Incorreta. Atingir o máximo de épocas é o fim normal, o Early Stopping é justamente para parar ANTES disso (precocemente).",
        "D": "Correta. Monitorar a performance em dados não vistos (validação) é o segredo da técnica.",
        "E": "Incorreta. Isso descreve o funcionamento de um 'Learning Rate Scheduler', não o critério de parada da rede.",
        "A": "Incorreta. Nunca usamos o conjunto de TESTE para treinar ou parar o modelo. O teste é sagrado e só pode ser visto uma vez no final."
      },
      "dicaDeOuro": "Early Stopping = Onde o erro de validação sobe, a gente para!"
    }
  },
  {
    "id": "q_ds_024",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Otimização de Hiperparâmetros",
    "difficulty": "Médio",
    "statement": "Qual é a principal vantagem do 'Randomized Search' em relação ao 'Grid Search' na busca pelos melhores hiperparâmetros de um modelo?",
    "options": {
      "A": "O Randomized Search garante encontrar o melhor valor absoluto de cada parâmetro.",
      "B": "O Randomized Search utiliza inteligência artificial para prever o próximo valor a ser testado.",
      "C": "O Randomized Search consome mais memória RAM, mas é 10x mais rápido.",
      "D": "O Randomized Search é mais eficiente para espaços de parâmetros grandes, pois não testa todas as combinações e foca em dimensões mais importantes.",
      "E": "O Grid Search é incapaz de lidar com parâmetros do tipo string (ex: kernels)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Grid Search é como procurar uma chave perdida olhando cada centímetro do chão: é garantido, mas demora séculos. O Randomized Search é como dar olhadas aleatórias pelo quarto: você tem grandes chances de achar a chave muito mais rápido, especialmente se algumas partes do quarto (parâmetros) forem mais prováveis de conter a chave.",
      "puloDoGato": "Na prática, muitos hiperparâmetros não afetam quase nada o resultado. O Randomized Search não 'perde tempo' testando variações inúteis desses parâmetros e foca em explorar mais combinações dos parâmetros que realmente importam.",
      "cascasDeBanana": {
        "A": "Incorreta. O Grid Search é que garante testar os pontos exatos, mas o Randomized Search pode encontrar um ponto 'entre' os da grade que seja melhor.",
        "D": "Correta. Maior eficiência exploratória em espaços de busca de alta dimensão.",
        "B": "Incorreta. Busca aleatória não é IA. A busca que usa 'inteligência' para prever o próximo ponto é a Otimização Bayesiana.",
        "E": "Incorreta. O Grid Search lida perfeitamente com qualquer tipo de variável (string, int, float).",
        "C": "Incorreta. A velocidade vem de fazer menos iterações (sorteio), não de uma mágica computacional."
      },
      "dicaDeOuro": "Muitos hiperparâmetros? Randomized Search neles!"
    }
  },
  {
    "id": "q_ds_025",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Mistura de Gaussianas (GMM)",
    "difficulty": "Difícil",
    "statement": "O algoritmo Gaussian Mixture Models (GMM) é frequentemente visto como uma generalização do K-Means. Qual característica distingue fundamentalmente o GMM do K-Means?",
    "options": {
      "A": "O K-Means é mais lento que o GMM para datasets volumosos.",
      "B": "O GMM utiliza apenas distâncias euclidianas, enquanto o K-Means aceita outras métricas.",
      "C": "O GMM assume que todos os clusters possuem o mesmo formato circular (esférico).",
      "D": "O GMM realiza 'Soft Clustering', atribuindo probabilidades de um ponto pertencer a cada cluster, em vez de uma atribuição rígida.",
      "E": "O GMM é um algoritmo supervisionado que exige etiquetas iniciais."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "K-Means é 'Hard Clustering': um ponto ou é de um grupo ou não é. O GMM é 'Soft Clustering': ele diz que um ponto tem, por exemplo, 80% de chance de ser do Grupo A e 20% do Grupo B. Além disso, o GMM é muito mais flexível: ele aceita grupos em formato de elipses alongadas e inclinadas, enquanto o K-Means só funciona bem com 'bolas' circulares.",
      "puloDoGato": "O GMM assume que os dados foram gerados por várias distribuições normais (Gaussianas) misturadas. Ele usa o algoritmo EM (Expectation-Maximization) para ajustar as elipses aos dados da forma mais provável possível.",
      "cascasDeBanana": {
        "B": "Incorreta. O GMM usa uma métrica que leva em conta a covariância (distância de Mahalanobis), permitindo formatos não-esféricos.",
        "D": "Correta. É o diferencial fundamental da atribuição probabilística/suave.",
        "E": "Incorreta. Ambos (K-Means e GMM) são técnicas de aprendizado não supervisionado (clustering).",
        "C": "Incorreta. É o K-Means que assume formatos esféricos. O GMM é o 'mestre das elipses'.",
        "A": "Incorreta. Na verdade, o GMM costuma ser mais lento por causa dos cálculos estatísticos complexos de cada componente."
      },
      "dicaDeOuro": "GMM = Soft Clustering (Probabilidade) + Elipses."
    }
  },
  {
    "id": "q_ds_026",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização (L1 e L2)",
    "difficulty": "Médio",
    "statement": "Assim como em modelos lineares, a regularização em redes neurais pode utilizar normas L1 e L2. Qual é o efeito prático da penalização L2 (Weight Decay) nos pesos da rede?",
    "options": {
      "A": "Penaliza pesos grandes, forçando-os a serem pequenos e distribuídos, o que suaviza a função de decisão.",
      "B": "Substitui a necessidade de utilizar funções de ativação não-lineares.",
      "C": "Força os pesos a serem exatamente zero, simplificando a arquitetura.",
      "D": "Remove camadas inteiras da rede neural que apresentam baixa ativação.",
      "E": "Aumenta a magnitude dos pesos para evitar o desvanecimento do gradiente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A regularização L2 (Weight Decay) adiciona o valor dos pesos ao quadrado na conta do erro. Isso pune severamente pesos muito grandes. O resultado prático é que a rede neural aprende a ser 'suave': em vez de dar uma guinada brusca no resultado por causa de um único neurônio com peso 1000, ela distribui a tarefa entre vários neurônios com pesos pequenos (ex: 0.1).",
      "puloDoGato": "L2 = Suavização e Estabilidade. Ela não 'mata' os pesos (não zera), apenas os mantém sob controle para evitar que a rede fique instável e sofra de overfitting.",
      "cascasDeBanana": {
        "C": "Incorreta. Zerar pesos (esparsidade) é o superpoder da norma L1 (Lasso), não da L2.",
        "A": "Correta. Garante pesos pequenos e bem distribuídos, melhorando a generalização.",
        "E": "Incorreta. Pelo contrário: ela puxa os pesos para baixo, o que inclusive pode PIORAR o desvanecimento se não for bem ajustada.",
        "D": "Incorreta. A regularização atua nos valores numéricos dos pesos, não na arquitetura das camadas em si.",
        "B": "Incorreta. Regularização e funções de ativação são conceitos diferentes que trabalham juntos para permitir aprendizado complexo e estável."
      },
      "dicaDeOuro": "L2 = Weight Decay. Puxa os pesos para perto de zero, mas sem zerar."
    }
  },
  {
    "id": "q_ds_027",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Python Scikit-Learn (Escalonamento)",
    "difficulty": "Fácil",
    "statement": "No Scikit-Learn, qual é a principal diferença entre o StandardScaler e o MinMaxScaler?",
    "options": {
      "A": "O StandardScaler transforma os dados para o intervalo [0, 1], enquanto o MinMaxScaler usa a distribuição normal.",
      "B": "O MinMaxScaler é imune a outliers, enquanto o StandardScaler é muito afetado por eles.",
      "C": "O StandardScaler é usado apenas para variáveis alvo (Y), e o MinMaxScaler para variáveis preditoras (X).",
      "D": "O StandardScaler remove a média e escala para variância unitária (Z-score), enquanto o MinMaxScaler escala os dados para um intervalo fixo (geralmente [0, 1]).",
      "E": "Não há diferença; ambos produzem o mesmo vetor de saída para qualquer entrada."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "StandardScaler: transforma os dados para que a média seja 0 e o desvio padrão seja 1 (Z-Score). É essencial para modelos que calculam distâncias (como SVM ou KNN). MinMaxScaler: comprime todos os dados para um intervalo fixo, geralmente entre 0 e 1. É muito usado em redes neurais e processamento de imagens.",
      "puloDoGato": "Atenção: Ambos sofrem com outliers! Se você tiver um valor 1.000.000 no MinMaxScaler, todos os seus dados reais vão ficar espremidos entre 0,0001 e 0,0002. Para dados com muitos outliers, o ideal é o RobustScaler.",
      "cascasDeBanana": {
        "A": "Incorreta. Inverteu as bolas: MinMaxScaler é que foca no intervalo [0, 1].",
        "D": "Correta. São as definições exatas das duas técnicas de pré-processamento mais comuns.",
        "B": "Incorreta. Pelo contrário: ambos são sensíveis a valores extremos que distorcem a média ou o min/max.",
        "C": "Incorreta. Eles são aplicados às variáveis de entrada (X) para que todas as 'características' falem a mesma língua.",
        "E": "Incorreta. A escala resultante é totalmente diferente e afeta a performance do algoritmo de formas distintas."
      },
      "dicaDeOuro": "StandardScaler = Distância do padrão. MinMaxScaler = Squeezing (esmagar) no intervalo."
    }
  },
  {
    "id": "q_ds_028",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Conjuntos de Treino, Validação e Teste",
    "difficulty": "Médio",
    "statement": "Em um fluxo de trabalho ideal de Ciência de Dados, qual é a função primordial do conjunto de 'Validação'?",
    "options": {
      "A": "Verificar a acurácia final que será reportada ao cliente/stakeholder.",
      "B": "Treinar os pesos finais do modelo após a escolha dos hiperparâmetros.",
      "C": "Armazenar outliers que não devem ser vistos pelo modelo durante o treino.",
      "D": "Realizar a limpeza e o pré-processamento dos dados brutos.",
      "E": "Ajustar os hiperparâmetros e selecionar o melhor modelo entre diferentes candidatos sem contaminar o conjunto de teste."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Pense na escola: O Treino é o seu dever de casa (onde você aprende). A Validação é o simulado (onde você testa se aprendeu bem e ajusta seus estudos). O Teste é o vestibular final (onde você vê se realmente é bom em dados nunca vistos).",
      "puloDoGato": "Jamais use o Teste para escolher o melhor modelo ou ajustar hiperparâmetros. Se você fizer isso, o Teste vira parte do treino e você perde a capacidade de saber se o modelo vai funcionar no mundo real.",
      "cascasDeBanana": {
        "B": "Incorreta. O aprendizado dos parâmetros (pesos) acontece no conjunto de Treino.",
        "E": "Correta. Serve para o 'ajuste fino' e comparação entre diferentes modelos/configurações.",
        "A": "Incorreta. A métrica final e honesta deve vir exclusivamente do conjunto de Teste.",
        "C": "Incorreta. Outliers devem ser tratados antes da divisão ou mantidos se forem reais e importantes.",
        "D": "Incorreta. Limpeza e processamento são feitos na base toda ou via Pipeline nos folds."
      },
      "dicaDeOuro": "Validação = Comparar modelos e ajustar parafusos (hiperparâmetros)."
    }
  },
  {
    "id": "q_ds_029",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Redes Neurais Convolucionais (CNN)",
    "difficulty": "Médio",
    "statement": "Nas Redes Neurais Convolucionais (CNN), qual é a principal função das camadas de 'Pooling' (ex: Max Pooling)?",
    "options": {
      "A": "Aumentar a resolução da imagem para capturar detalhes menores.",
      "B": "Normalizar as ativações da camada anterior para ter média zero.",
      "C": "Substituir a função de ativação ReLU nas camadas profundas.",
      "D": "Reduzir a dimensão espacial das representações, diminuindo o número de parâmetros e o custo computacional, além de conferir certa invariância a translações.",
      "E": "Aplicar filtros que detectam bordas e texturas específicas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine uma foto de um gato com 1 milhão de pixels. O Pooling faz um resumo: 'nesta área 2x2, o pixel mais forte é este'. Isso reduz o tamanho da imagem pela metade ou mais, fazendo o computador trabalhar menos e focando nas características que realmente importam (como a orelha do gato) mesmo que ela mude um pouquinho de lugar.",
      "puloDoGato": "O Max Pooling é o mais comum e ele 'puxa' a característica mais forte. Isso dá à rede uma propriedade chamada 'invariância por translação': o gato continua sendo gato mesmo se estiver 5 pixels para a esquerda.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele faz 'downsampling', ou seja, reduz drasticamente a resolução e o tamanho espacial.",
        "D": "Correta. Reduz complexidade e ajuda na generalização espacial (invariância).",
        "E": "Incorreta. Quem detecta bordas são os filtros das camadas de Convolução.",
        "B": "Incorreta. A normalização de ativações é feita pelo 'Batch Normalization', não pelo Pooling.",
        "C": "Incorreta. Pooling é uma operação espacial de redução, não uma função de ativação como ReLU ou Sigmoid."
      },
      "dicaDeOuro": "Pooling = Resumir a imagem para focar no que é importante."
    }
  },
  {
    "id": "q_ds_030",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Redes Neurais Recorrentes (RNN)",
    "difficulty": "Difícil",
    "statement": "As Redes Neurais Recorrentes (RNN) são ideais para dados sequenciais (texto, áudio, séries temporais). No entanto, RNNs tradicionais sofrem para aprender dependências de longo prazo. Qual arquitetura foi criada especificamente para resolver esse problema através de 'portões' (gates) de memória?",
    "options": {
      "A": "Máquinas de Boltzmann Restritas (RBM)",
      "B": "Perceptron Multicamadas (MLP)",
      "C": "Long Short-Term Memory (LSTM)",
      "D": "Autoencoders",
      "E": "Redes Neurais de Base Radial (RBF)"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Redes Neurais comuns não têm memória. Redes Recorrentes (RNN) tentam ter, mas esquecem rápido demais (gradiente desvanecente). A LSTM é como uma RNN com um 'diário' (Cell State): ela decide o que é importante anotar no diário (Input Gate), o que é hora de apagar (Forget Gate) e o que deve ser usado agora (Output Gate).",
      "puloDoGato": "Isso permite que a rede entenda uma frase inteira. Por exemplo, em 'O gato que eu vi ontem na rua era preto', a LSTM consegue ligar o 'preto' ao 'gato' mesmo com muitas palavras no meio. RNNs comuns falham nisso.",
      "cascasDeBanana": {
        "B": "Incorreta. MLP (Perceptron) vê cada dado como isolado, não entende sequências ou tempo.",
        "C": "Correta. Foi a grande revolução para lidar com dependências de longo prazo em sequências.",
        "D": "Incorreta. Autoencoders são usados para compressão ou geração de dados (denoising), não são focados em tempo/sequência por padrão.",
        "E": "Incorreta. RBFs são redes de base radial usadas para aproximação de funções, sem conceito de memória.",
        "A": "Incorreta. RBMs são modelos probabilísticos antigos usados em Deep Learning inicial, mas sem foco em sequências longas."
      },
      "dicaDeOuro": "LSTM = Memória de Longo Prazo para sequências de dados."
    }
  },
  {
    "id": "q_ds_031",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Pré-processamento de Texto",
    "difficulty": "Fácil",
    "statement": "No fluxo de trabalho de NLP, a técnica que consiste em reduzir uma palavra ao seu radical, removendo sufixos de forma heurística (ex: 'correndo' vira 'corr'), é conhecida como:",
    "options": {
      "A": "Stopword Removal",
      "B": "Lemmatização",
      "C": "Stemming",
      "D": "Part-of-Speech Tagging",
      "E": "Tokenização"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Stemming e Lemmatização são formas de normalizar o texto para que o computador entenda que 'correr', 'correu' e 'correndo' tratam da mesma ação. O Stemming é uma técnica 'bruta': ele apenas corta o final das palavras (sufixos) usando regras heurísticas, o que pode gerar 'palavras' que não existem no dicionário (ex: 'informativo' vira 'inform').",
      "puloDoGato": "A Lemmatização é muito mais inteligente: ela consulta um dicionário (léxico) e entende a gramática. Ela sabe que o lema de 'fui' é 'ir'. Para a Petrobras: Stemming = Rápido e Bruto. Lemmatização = Lento e Preciso.",
      "cascasDeBanana": {
        "A": "Incorreta. Tokenização é apenas o ato de quebrar o texto em pedaços (tokens), como palavras ou frases.",
        "B": "Incorreta. A Lemmatização chega na raiz morfológica correta (o lema), não apenas corta o sufixo.",
        "C": "Correta. É o método heurístico de poda de sufixos.",
        "D": "Incorreta. Stopword removal retira conectivos e preposições (o, a, de, para) que não agregam valor semântico.",
        "E": "Incorreta. POS Tagging classifica a função gramatical da palavra (verbo, substantivo, adjetivo)."
      },
      "dicaDeOuro": "Corte seco e rápido? Stemming. Raiz inteligente de dicionário? Lemmatização."
    }
  },
  {
    "id": "q_ds_032",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "TF-IDF",
    "difficulty": "Médio",
    "statement": "A métrica TF-IDF é fundamental para representar a importância de uma palavra em um documento dentro de um corpus. Qual é o efeito do componente IDF (Inverse Document Frequency)?",
    "options": {
      "A": "Normalizar o tamanho do texto para evitar viés em documentos longos.",
      "B": "Penalizar palavras muito frequentes em todo o corpus (como artigos e preposições), destacando termos mais raros e informativos.",
      "C": "Identificar sinônimos e agrupar palavras com o mesmo significado.",
      "D": "Aumentar o peso de palavras que aparecem em quase todos os documentos do corpus.",
      "E": "Contar quantas vezes a palavra aparece dentro de um único documento."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "TF-IDF é o equilíbrio entre a importância local e a raridade global. O componente IDF (Frequência Inversa nos Documentos) serve para 'dar um cala-a-boca' em palavras que aparecem em todo lugar (como 'o', 'de', 'que'). Se uma palavra está em todos os documentos, o seu IDF é zero, o que zera a importância total dela.",
      "puloDoGato": "Por que isso é bom? Porque as palavras que sobram com peso alto são as que realmente definem o tema exclusivo daquele documento (ex: 'Petróleo' em um corpus jurídico).",
      "cascasDeBanana": {
        "A": "Incorreta. O IDF faz exatamente o oposto: ele pune palavras onipresentes.",
        "B": "Correta. É a essência de destacar o que é raro e informativo em nível de corpus.",
        "C": "Incorreta. Contagem local é o TF (Term Frequency).",
        "D": "Incorreta. A normalização de tamanho é um passo extra (geralmente norma L2), não o papel do IDF puro.",
        "E": "Incorreta. O TF-IDF é um modelo puramente estatístico; ele não 'sabe' o significado das palavras ou sinônimos."
      },
      "dicaDeOuro": "TF = Importante aqui. IDF = Rara no resto."
    }
  },
  {
    "id": "q_ds_033",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Detecção de Objetos (IoU)",
    "difficulty": "Médio",
    "statement": "Em tarefas de detecção de objetos em imagens, a métrica IoU (Intersection over Union) é utilizada para avaliar a precisão das 'Bounding Boxes'. O que um valor de IoU igual a 1.0 representa?",
    "options": {
      "A": "Que a imagem está corrompida e não pode ser processada.",
      "B": "Que o modelo detectou um objeto mas errou a classe.",
      "C": "Que a caixa prevista e a caixa real (ground truth) estão perfeitamente sobrepostas.",
      "D": "Que as caixas não possuem nenhuma área em comum.",
      "E": "Que a caixa prevista é exatamente o dobro da caixa real."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O IoU mede o 'encaixe' entre o que o modelo previu e o que realmente existe (Ground Truth). Ele calcula a área onde as duas caixas se sobrepõem (Intersecção) e divide pela área total coberta por ambas (União). Se o resultado for 1.0, significa que as duas caixas são idênticas.",
      "puloDoGato": "Em competições como COCO, o IoU é o juiz. Se o IoU for < 0.5, a detecção costuma ser considerada um erro (Falso Positivo), mesmo que o modelo tenha acertado a classe do objeto.",
      "cascasDeBanana": {
        "D": "Incorreta. Se não houver intersecção, o IoU é exatamente 0.",
        "C": "Correta. Representa o acerto perfeito da geometria do objeto.",
        "B": "Incorreta. O IoU avalia apenas a localização (onde está?), não a classificação (o que é?).",
        "A": "Incorreta. IoU é uma métrica geométrica de pós-processamento, não de diagnóstico de hardware/software.",
        "E": "Incorreta. Se uma caixa fosse o dobro da outra mas estivesse centralizada, o IoU seria 0.5 (intersecção/união)."
      },
      "dicaDeOuro": "IoU = 1.0? Encaixe perfeito entre predição e realidade."
    }
  },
  {
    "id": "q_ds_034",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Merge e Joins",
    "difficulty": "Fácil",
    "statement": "No Pandas, qual função deve ser utilizada para combinar dois DataFrames baseando-se em uma ou mais chaves comuns, simulando o comportamento de um JOIN do SQL?",
    "options": {
      "A": "pd.pivot_table()",
      "B": "pd.append()",
      "C": "pd.concat()",
      "D": "pd.merge()",
      "E": "pd.groupby()"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O `.merge()` é a ferramenta de BI dentro do Pandas. Ele permite que você conecte dados de fontes diferentes usando uma 'chave' comum (ex: ID do Funcionário). É o equivalente direto do JOIN do SQL.",
      "puloDoGato": "Cuidado: `concat` apenas 'cola' os DataFrames um embaixo do outro ou lado a lado. O `merge` é inteligente: ele procura onde os valores das colunas chave batem para alinhar as informações.",
      "cascasDeBanana": {
        "C": "Incorreta. `concat` é usado para empilhamento simples (vertical ou horizontal), não para joins baseados em chaves.",
        "B": "Incorreta. `append` é uma versão antiga do `concat` e não tem a lógica de relacionamento de tabelas.",
        "D": "Correta. Função para joins relacionais com suporte a left, right, inner e outer.",
        "E": "Incorreta. `groupby` serve para agregar dados (tirar média, soma por grupo).",
        "A": "Incorreta. `pivot_table` serve para remodelar a tabela (transformar linhas em colunas), não para unir tabelas diferentes."
      },
      "dicaDeOuro": "Relacionar tabelas por ID? Use .merge()."
    }
  },
  {
    "id": "q_ds_036",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Reshaping (Melt)",
    "difficulty": "Médio",
    "statement": "Ao trabalhar com um DataFrame que possui colunas para cada mês do ano (ex: 'Jan', 'Fev', 'Mar'), você decide transformar essas colunas em linhas para facilitar a análise temporal. Qual função do Pandas é a mais indicada para realizar essa operação de 'unpivoting'?",
    "options": {
      "A": "pd.pivot()",
      "B": "pd.stack()",
      "C": "pd.unstack()",
      "D": "pd.crosstab()",
      "E": "pd.melt()"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Muitas vezes recebemos dados no formato 'Wide' (largo), onde cada mês é uma coluna. Isso é péssimo para plotar gráficos ou treinar modelos. O `.melt()` 'derrete' essas colunas e as transforma em duas: uma com o nome da variável (mês) e outra com o valor. Isso se chama unpivoting.",
      "puloDoGato": "Lembre-se: `.melt()` alonga a tabela (mais linhas, menos colunas). `.pivot()` alarga a tabela (menos linhas, mais colunas).",
      "cascasDeBanana": {
        "A": "Incorreta. `pivot` faz o caminho inverso: transforma valores de uma coluna em novos nomes de colunas.",
        "E": "Correta. Operação fundamental para 'limpeza' e normalização de dados (Tidy Data).",
        "B": "Incorreta. `stack` joga as colunas para o índice (multi-index), não necessariamente para uma nova coluna de valores.",
        "C": "Incorreta. `unstack` tira do índice e joga para as colunas.",
        "D": "Incorreta. `crosstab` é usado para criar tabelas de frequência (contingência) cruzada entre duas variáveis."
      },
      "dicaDeOuro": "Dados espalhados em colunas? Use .melt() para normalizar."
    }
  },
  {
    "id": "q_ds_037",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Modelagem de Tópicos (LDA)",
    "difficulty": "Difícil",
    "statement": "O algoritmo LDA (Latent Dirichlet Allocation) é amplamente utilizado para modelagem de tópicos. Qual é a premissa estatística fundamental do LDA?",
    "options": {
      "A": "Cada documento contém apenas um único tópico predominante.",
      "B": "Documentos são misturas de tópicos latentes, e cada tópico é uma distribuição de probabilidade sobre palavras.",
      "C": "Tópicos são identificados através da contagem absoluta de palavras raras.",
      "D": "O LDA utiliza redes neurais profundas para prever a próxima palavra da sequência.",
      "E": "As palavras em um documento são independentes da ordem e do contexto gramatical (Bag of Words)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O LDA não vê um texto como uma coisa só. Ele assume que cada documento é uma 'mistura' de vários assuntos latentes (escondidos). Por exemplo: uma notícia de jornal pode ser 50% Política, 30% Economia e 20% Judiciário. Cada tópico desse é, na verdade, um 'saco' de palavras com diferentes probabilidades.",
      "puloDoGato": "A distribuição Dirichlet é o que dá nome ao algoritmo: ela controla como esses tópicos se misturam. É o algoritmo padrão quando você quer descobrir automaticamente quais os grandes temas de um conjunto de milhares de textos.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria uma classificação simples. O diferencial do LDA é permitir múltiplos tópicos por documento.",
        "B": "Correta. É o modelo probabilístico generativo central do LDA.",
        "C": "Incorreta. O LDA usa a representação Bag of Words, mas essa é uma limitação herdada, não sua premissa fundamental de tópicos latentes.",
        "D": "Incorreta. O LDA clássico é baseado em amostragem de Gibbs ou inferência variacional, não em redes neurais.",
        "E": "Incorreta. A contagem de palavras raras define o TF-IDF, o LDA foca na co-ocorrência de palavras que definem um contexto."
      },
      "dicaDeOuro": "LDA = O documento é uma mistura de tópicos."
    }
  },
  {
    "id": "q_ds_038",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Arquiteturas (ResNet)",
    "difficulty": "Difícil",
    "statement": "A arquitetura ResNet (Residual Network) introduziu as 'Skip Connections' (ou conexões residuais). Qual problema crítico em redes neurais muito profundas essa inovação visou resolver?",
    "options": {
      "A": "O alto custo de tempo para rotular manualmente os datasets.",
      "B": "A falta de memória RAM para processar imagens de alta resolução.",
      "C": "A sensibilidade excessiva a mudanças de iluminação nas fotos.",
      "D": "A impossibilidade de realizar convoluções em paralelo.",
      "E": "O problema da degradação do gradiente, onde a adição de mais camadas levava a um erro de treinamento maior."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Conforme as redes neurais foram ficando mais profundas, o sinal do gradiente (a 'correção' do erro) ia se perdendo no caminho de volta. A ResNet resolveu isso com um 'atalho': ela permite que a informação original pule algumas camadas. Se uma camada for inútil, a rede pode simplesmente ignorá-la passando a informação pelo atalho.",
      "puloDoGato": "Isso permitiu o salto de redes com 20 camadas (VGG) para redes com 100, 1000 ou mais camadas. Na prova, associou ResNet? Pense em Skip Connections e combate à degradação do aprendizado.",
      "cascasDeBanana": {
        "B": "Incorreta. A memória RAM é poupada por técnicas de pooling e redução de resolução, não pelas skip connections.",
        "E": "Correta. Resolve o problema de que redes mais profundas, paradoxalmente, estavam performando pior no treino.",
        "D": "Incorreta. Convoluções são paralelizáveis por natureza; a ResNet trata de profundidade e fluxo de gradiente.",
        "A": "Incorreta. Problemas de rotulagem são resolvidos com Semi-Supervised Learning ou Active Learning.",
        "C": "Incorreta. A robustez a iluminação é tratada por Data Augmentation ou normalização de cores."
      },
      "dicaDeOuro": "ResNet = Atalhos (Skip Connections) para redes super profundas."
    }
  },
  {
    "id": "q_ds_039",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Apache Spark (DataFrames)",
    "difficulty": "Médio",
    "statement": "No ecossistema Apache Spark, qual é a principal vantagem de utilizar DataFrames em vez de RDDs (Resilient Distributed Datasets) para processamento de dados estruturados?",
    "options": {
      "A": "DataFrames são limitados a processamento em uma única máquina (Single Node).",
      "B": "RDDs são uma tecnologia proprietária e paga, enquanto DataFrames são open-source.",
      "C": "Não existem vantagens reais; RDDs são sempre mais rápidos por serem de baixo nível.",
      "D": "DataFrames permitem que o Spark utilize o otimizador Catalyst, gerando planos de execução muito mais eficientes.",
      "E": "DataFrames não ocupam memória RAM, salvando tudo em disco imediatamente."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "RDDs são coleções de objetos brutos; o Spark não entende o que você está fazendo com eles. DataFrames têm um 'esquema' (schema) conhecido. Isso permite que o motor interno do Spark (Catalyst) analise seu código e o otimize automaticamente, como se fosse um administrador de banco de dados virtual.",
      "puloDoGato": "Por exemplo: se você filtra dados no final de um código com DataFrame, o Catalyst move esse filtro para o começo para que o Spark não processe dados inúteis. RDDs não conseguem fazer esse tipo de otimização inteligente sozinhos.",
      "cascasDeBanana": {
        "E": "Incorreta. Ambos são sistemas de processamento em memória; o disco só é usado como fallback (derramamento).",
        "D": "Correta. O otimizador Catalyst é o coração da performance superior dos DataFrames.",
        "B": "Incorreta. Todo o Spark é open-source (Licença Apache 2.0).",
        "A": "Incorreta. Ambos foram criados especificamente para processamento massivo distribuído em clusters.",
        "C": "Incorreta. Embora RDDs sejam de baixo nível, a falta de otimização lógica os torna mais lentos que DataFrames na maioria dos casos reais."
      },
      "dicaDeOuro": "Spark moderno? Use DataFrames. Deixe os RDDs para casos de dados brutos não estruturados."
    }
  },
  {
    "id": "q_ds_040",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Modelagem Dimensional (Star Schema)",
    "difficulty": "Fácil",
    "statement": "Na modelagem de um Data Warehouse utilizando o esquema estrela (Star Schema), como são caracterizadas as tabelas de 'Dimensão'?",
    "options": {
      "A": "São tabelas gigantescas que armazenam trilhões de registros históricos.",
      "B": "Contêm as métricas quantitativas e fatos numéricos do negócio (ex: valor da venda).",
      "C": "São utilizadas apenas para armazenar logs de erros do sistema.",
      "D": "Contêm dados descritivos que dão contexto aos fatos (ex: nome do produto, data, localização).",
      "E": "Ficam localizadas no centro da estrela, conectadas a todas as outras tabelas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Em um banco de dados de BI, a Tabela Fato é o 'Evento' (ex: uma venda, uma produção). As Tabelas de Dimensão são o 'Contexto' (ex: quem comprou? em qual loja? qual produto?). Elas servem para filtrar e agrupar os números que estão na Fato.",
      "puloDoGato": "As Dimensões costumam ter muitas colunas de texto (atributos descritivos) e poucas linhas. Já a Fato tem poucas colunas (ID e Números) e milhões ou bilhões de linhas.",
      "cascasDeBanana": {
        "B": "Incorreta. Métricas quantitativas (preços, quantidades) pertencem à Tabela Fato.",
        "D": "Correta. Tabelas de Dimensão fornecem as características qualitativas dos fatos.",
        "A": "Incorreta. Geralmente as Dimensões são tabelas pequenas ou médias; o volume massivo está nas Fatos.",
        "E": "Incorreta. O centro da estrela é sempre a Tabela Fato, que se conecta às Dimensões.",
        "C": "Incorreta. Elas são a base da navegação e filtros nos dashboards."
      },
      "dicaDeOuro": "Fato = Número que se soma. Dimensão = Texto que se filtra."
    }
  },
  {
    "id": "q_ds_041",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Funções de Aplicação (Apply/Map)",
    "difficulty": "Médio",
    "statement": "No Pandas, qual é a principal diferença de uso entre o método .map() e o método .apply() em uma Series?",
    "options": {
      "A": "Não existe diferença; ambos são aliases para a mesma função interna.",
      "B": "O .apply() é muito mais rápido que o .map() para qualquer tipo de operação simples.",
      "C": "O .map() é ideal para substituições elemento a elemento baseadas em um dicionário ou outra Series, enquanto o .apply() é usado para aplicar funções mais complexas em cada elemento.",
      "D": "O .map() permite passar argumentos extras para a função, o que o .apply() não permite.",
      "E": "O .map() só funciona para DataFrames, enquanto o .apply() é exclusivo para Series."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Map: Ótimo para substituições diretas (De-Para). Exemplo: mudar 'Masculino' para 1. Apply: Ótimo para aplicar funções personalizadas mais complexas (como um IF/ELSE ou cálculos matemáticos) em cada elemento da Series.",
      "puloDoGato": "Dica de performance: se você tem um dicionário, use `.map(dicionario)`. É ordens de grandeza mais rápido que fazer um `.apply(lambda x: dicionario[x])`. O Pandas otimiza o map para buscas em dicionários.",
      "cascasDeBanana": {
        "E": "Incorreta. `.map()` é um método de Series, não de DataFrames (para DataFrames temos o `applymap`).",
        "C": "Correta. Define bem a distinção prática entre as duas ferramentas.",
        "B": "Incorreta. A velocidade depende da operação, mas o `.map()` é geralmente imbatível para mapeamentos simples.",
        "D": "Incorreta. Pelo contrário: o `.apply()` é quem tem os parâmetros `args` e `kwargs` para passar valores extras para a função.",
        "A": "Incorreta. Têm propósitos e implementações diferentes no código fonte do Pandas."
      },
      "dicaDeOuro": "Dicionário de mapeamento? Use .map(). Lógica de código? Use .apply()."
    }
  },
  {
    "id": "q_ds_042",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Word Embeddings (Word2Vec)",
    "difficulty": "Difícil",
    "statement": "O Word2Vec revolucionou o NLP ao criar vetores densos para palavras. Dentro dessa arquitetura, qual é o objetivo do modelo 'Skip-Gram'?",
    "options": {
      "A": "Reduzir a dimensão de uma matriz de co-ocorrência global utilizando SVD.",
      "B": "Prever a palavra central baseando-se nas palavras de contexto (vizinhos).",
      "C": "Prever as palavras de contexto (vizinhas) baseando-se em uma única palavra central.",
      "D": "Traduzir palavras de um idioma para outro através de vetores alinhados.",
      "E": "Remover as palavras mais frequentes (stopwords) do vocabulário automaticamente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Word2Vec transforma palavras em vetores numéricos para que o computador 'entenda' o significado por proximidade. O Skip-Gram funciona tentando adivinhar quem são os vizinhos (contexto) a partir de uma palavra central. É como se eu te desse a palavra 'Petróleo' e pedisse para você adivinhar que 'Plataforma' e 'Combustível' estão por perto.",
      "puloDoGato": "O Skip-Gram é excelente para capturar o contexto de palavras raras. Já o seu irmão, o CBOW, faz o oposto: ele olha os vizinhos e tenta adivinhar a palavra do meio (Contexto -> Palavra).",
      "cascasDeBanana": {
        "B": "Incorreta. Essa é a descrição do modelo CBOW (Continuous Bag of Words).",
        "C": "Correta. É o objetivo central da arquitetura Skip-Gram.",
        "A": "Incorreta. SVD em matrizes de co-ocorrência descreve o modelo LSA (Latent Semantic Analysis) ou GloVe.",
        "E": "Incorreta. Remoção de stopwords é uma etapa de limpeza que ocorre ANTES de treinar o Word2Vec.",
        "D": "Incorreta. Tradução vetorial é uma tarefa complexa de alinhamento, não o objetivo base do algoritmo."
      },
      "dicaDeOuro": "Skip-Gram = Uma palavra tenta 'pular' para os seus vizinhos."
    }
  },
  {
    "id": "q_ds_043",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Segmentação de Imagens",
    "difficulty": "Médio",
    "statement": "Qual é a principal diferença entre 'Segmentação Semântica' e 'Segmentação de Instância' em Visão Computacional?",
    "options": {
      "A": "A segmentação semântica identifica apenas as bordas, enquanto a de instância preenche o objeto todo.",
      "B": "A segmentação semântica é feita manualmente, e a de instância é sempre automatizada.",
      "C": "A segmentação semântica agrupa todos os objetos da mesma classe como um único rótulo, enquanto a de instância diferencia objetos individuais da mesma classe.",
      "D": "Não há diferença; os termos são sinônimos e usados de forma intercambiável na literatura.",
      "E": "A segmentação de instância só funciona para vídeos, e a semântica apenas para fotos estáticas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Semântica: O modelo pinta todos os pixels que pertencem à categoria 'Carro' da mesma cor. Ele não sabe se tem 1 ou 10 carros. Instância: O modelo pinta cada carro de uma cor diferente. Ele sabe separar o 'Carro A' do 'Carro B', mesmo que eles estejam encostados um no outro.",
      "puloDoGato": "A segmentação de instância é muito mais difícil porque exige que o modelo detecte o objeto individualmente primeiro (Bounding Box) e depois faça o recorte (Mask).",
      "cascasDeBanana": {
        "A": "Incorreta. Ambas preenchem a silhueta interna do objeto, não apenas as bordas.",
        "C": "Correta. A distinção fundamental é o tratamento de indivíduos da mesma classe.",
        "E": "Incorreta. Ambas são técnicas de Visão Computacional aplicáveis tanto a frames estáticos quanto a fluxos de vídeo.",
        "D": "Incorreta. São tarefas distintas com métricas de avaliação diferentes em Deep Learning.",
        "B": "Incorreta. Ambas são automatizadas por redes neurais como U-Net (Semântica) ou Mask R-CNN (Instância)."
      },
      "dicaDeOuro": "Semântica = 'O que é isso?'. Instância = 'Qual deles é esse?'."
    }
  },
  {
    "id": "q_ds_045",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Teorema CAP",
    "difficulty": "Difícil",
    "statement": "O Teorema CAP é um pilar fundamental em sistemas distribuídos (NoSQL). Ele afirma que é impossível garantir simultaneamente três propriedades. Quais são elas?",
    "options": {
      "A": "Consistência, Disponibilidade e Tolerância a Partições.",
      "B": "Custo, Automação e Portabilidade.",
      "C": "Compressão, Arquivamento e Proteção.",
      "D": "Cálculo, Álgebra e Probabilidade.",
      "E": "Concorrência, Agilidade e Performance."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Teorema CAP diz que você não pode ter o 'Sistema Perfeito'. Imagine que a internet cai entre dois servidores (Partição). Se você deixar os dois ativos para atender o cliente (Disponibilidade), eles podem dar respostas diferentes (perda de Consistência). Se você travar tudo até a internet voltar (Consistência), o cliente fica sem resposta (perda de Disponibilidade).",
      "puloDoGato": "Em sistemas distribuídos, a Tolerância a Partições (P) é obrigatória. Então, na prática, a briga é sempre entre Consistência (C) e Disponibilidade (A). MongoDB costuma ser CP, enquanto Cassandra costuma ser AP.",
      "cascasDeBanana": {
        "D": "Incorreta. São disciplinas acadêmicas, não propriedades de sistemas distribuídos.",
        "A": "Correta. Consistency, Availability, Partition Tolerance.",
        "E": "Incorreta. São metas de engenharia, mas não fazem parte do teorema formal.",
        "C": "Incorreta. São funções de backup e armazenamento, não do Teorema CAP.",
        "B": "Incorreta. São critérios de decisão de negócios."
      },
      "dicaDeOuro": "CAP = Escolha 2 das 3 propriedades (mas em sistemas distribuídos, P é obrigatório)."
    }
  },
  {
    "id": "q_ds_046",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Dados Ausentes (Missing Data)",
    "difficulty": "Fácil",
    "statement": "Ao encontrar valores nulos (NaN) em uma coluna numérica de um DataFrame que representa uma série temporal suave, qual método do Pandas é o mais indicado para preencher esses buracos baseando-se nos valores vizinhos?",
    "options": {
      "A": "df.replace(np.nan, -1)",
      "B": "df.groupby().mean()",
      "C": "df.interpolate()",
      "D": "df.fillna(0)",
      "E": "df.dropna()"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Fillna(0) cria um 'buraco negro' nos dados. Dropna remove o momento do tempo. O `interpolate` (interpolação) é como um artista que vê onde a linha estava e para onde ela vai, e desenha o meio do caminho de forma suave. É essencial para não quebrar a tendência de séries temporais.",
      "puloDoGato": "Existem vários tipos: linear, polinomial, splines. Para a Petrobras, saiba que a Interpolação é a rainha das séries temporais com dados faltantes.",
      "cascasDeBanana": {
        "A": "Incorreta. Preencher com 0 em um sensor de pressão, por exemplo, causaria um alerta falso de erro grave.",
        "B": "Incorreta. Remover a linha quebra a frequência temporal (ex: o dia 10 some e você pula do 09 para o 11).",
        "C": "Correta. Mantém a suavidade e a tendência estatística dos dados vizinhos.",
        "D": "Incorreta. Substituir por um valor fixo (-1) é tão perigoso quanto o zero.",
        "E": "Incorreta. A média global ignora totalmente a variação local de uma série temporal."
      },
      "dicaDeOuro": "Gráfico com falhas? .interpolate() para manter a curva."
    }
  },
  {
    "id": "q_ds_047",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Transformers e BERT",
    "difficulty": "Difícil",
    "statement": "A arquitetura Transformer (base do BERT e GPT) eliminou a necessidade de recorrência (RNNs) através de um mecanismo inovador. Qual é o nome desse mecanismo?",
    "options": {
      "A": "Max Pooling",
      "B": "Backpropagation through time",
      "C": "Convolutional Kernels",
      "D": "Self-Attention (Auto-atenção)",
      "E": "Stochastic Gradient Descent"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Self-Attention é o 'poder de concentração' da rede. Imagine ler um parágrafo e, para cada palavra, sublinhar as outras palavras que dão sentido a ela, não importa se estão no começo ou no fim do texto. Isso permite que o Transformer entenda o contexto global de uma vez, sem precisar ler palavra por palavra como as RNNs.",
      "puloDoGato": "Isso resolve o problema das frases longas. Enquanto a RNN 'esquece' o começo da frase, o Transformer mantém todas as palavras na memória ativa através da atenção.",
      "cascasDeBanana": {
        "B": "Incorreta. O BPTT é o método de treino das RNNs, justamente a tecnologia que o Transformer veio substituir.",
        "D": "Correta. Mecanismo que permite o processamento paralelo e visão global da sequência.",
        "E": "Incorreta. O SGD é o algoritmo de otimização de pesos, comum a quase todos os modelos de Deep Learning.",
        "A": "Incorreta. O Pooling é usado para reduzir o tamanho de imagens em redes convolucionais.",
        "C": "Incorreta. Convoluções são excelentes para imagens, mas o Transformer foca em Atenção para sequências."
      },
      "dicaDeOuro": "Transformer = Foco Total (Self-Attention) em todas as palavras ao mesmo tempo."
    }
  },
  {
    "id": "q_ds_048",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Redes Neurais (Global Average Pooling)",
    "difficulty": "Difícil",
    "statement": "Em arquiteturas modernas de CNN (como Inception ou ResNet), costuma-se substituir as camadas densas (Fully Connected) finais por uma camada de 'Global Average Pooling' (GAP). Qual é uma das principais vantagens dessa substituição?",
    "options": {
      "A": "Tornar a rede imune a ataques de pirataria de software.",
      "B": "Reduzir o risco de overfitting, pois a camada GAP não possui parâmetros treináveis e reduz drasticamente a dimensionalidade.",
      "C": "Aumentar drasticamente o número de parâmetros para capturar mais detalhes.",
      "D": "Permitir que a rede processe apenas imagens em preto e branco.",
      "E": "Aumentar a velocidade de processamento das camadas de convolução iniciais."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Camadas densas (Fully Connected) no final da rede são como 'memorizadores' gigantes: elas têm milhões de conexões e tentam decorar a posição exata de cada pixel. O GAP (Global Average Pooling) simplifica tudo: ele tira a média de cada canal. Isso força a rede a entender 'o que tem na imagem' em vez de 'onde exatamente está cada pixel'.",
      "puloDoGato": "Vantagem bônus: você pode treinar a rede com imagens de um tamanho (ex: 224x224) e depois testar com outros tamanhos sem dar erro de dimensão nas camadas finais.",
      "cascasDeBanana": {
        "A": "Incorreta. Pelo contrário, ele reduz drasticamente o número de parâmetros, agindo como um regularizador.",
        "B": "Correta. Combate o overfitting e torna o modelo mais leve (menos memória).",
        "C": "Incorreta. A cor da imagem é definida nos canais de entrada, o GAP atua na saída dos mapas de características.",
        "D": "Incorreta. Ele atua na parte final da rede (head), não nas camadas de convolução iniciais.",
        "E": "Incorreta. Não existe essa relação com segurança de software."
      },
      "dicaDeOuro": "GAP = Adeus camadas densas pesadas, olá generalização."
    }
  },
  {
    "id": "q_ds_049",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Hadoop HDFS",
    "difficulty": "Médio",
    "statement": "No sistema de arquivos distribuídos do Hadoop (HDFS), qual é o objetivo do 'Replication Factor' (Fator de Replicação), que por padrão costuma ser 3?",
    "options": {
      "A": "Aumentar a velocidade de escrita, gravando em 3 discos ao mesmo tempo.",
      "B": "Compactar o arquivo em três níveis diferentes para economizar espaço.",
      "C": "Triplicar o poder de processamento da CPU para cada arquivo.",
      "D": "Permitir que três usuários diferentes editem o mesmo arquivo simultaneamente.",
      "E": "Garantir a tolerância a falhas, mantendo cópias dos blocos de dados em diferentes nós do cluster."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No Big Data, trabalhamos com máquinas baratas que podem quebrar a qualquer momento. Se um arquivo só existisse em um lugar e o servidor pifasse, adeus dados. Por isso o HDFS faz cópias (réplicas). Se o Fator de Replicação é 3, você tem o dado original e mais 2 cópias idênticas espalhadas pelo cluster.",
      "puloDoGato": "O Spark e o MapReduce são inteligentes: eles tentam levar o processamento para onde o dado já está (Data Locality). Se uma máquina está ocupada, eles buscam o dado em uma das réplicas.",
      "cascasDeBanana": {
        "A": "Incorreta. Escrever fica um pouco mais lento, pois o sistema precisa confirmar a gravação das 3 cópias.",
        "E": "Correta. É o mecanismo central de alta disponibilidade e resiliência do Hadoop.",
        "C": "Incorreta. Replicação é para segurança de armazenamento, não aumenta a velocidade de cálculo da CPU.",
        "B": "Incorreta. Replicação triplica o consumo de espaço; não é uma forma de compressão.",
        "D": "Incorreta. O HDFS não suporta edições simultâneas (concorrência de escrita); é append-only ou overwrite."
      },
      "dicaDeOuro": "Replicação = O dado não morre se o servidor queimar."
    }
  },
  {
    "id": "q_ds_051",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Agregações Múltiplas (Agg)",
    "difficulty": "Médio",
    "statement": "No Pandas, após realizar um .groupby('categoria'), você deseja calcular simultaneamente a média e a soma da coluna 'vendas'. Qual sintaxe é a mais correta e eficiente para isso?",
    "options": {
      "A": "df.groupby('categoria')['vendas'].mean() + df.groupby('categoria')['vendas'].sum()",
      "B": "df.groupby('categoria')['vendas'].apply(lambda x: (x.mean(), x.sum()))",
      "C": "df.groupby('categoria')['vendas'].describe()",
      "D": "df.groupby('categoria')['vendas'].map(['mean', 'sum'])",
      "E": "df.groupby('categoria')['vendas'].agg(['mean', 'sum'])"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No Pandas, o `.agg()` (abreviação de aggregate) é o 'canivete suíço' dos agrupamentos. Ele permite que você peça várias métricas de uma só vez para uma ou mais colunas. É muito mais eficiente que fazer vários agrupamentos separados e depois tentar juntar os resultados.",
      "puloDoGato": "Você pode até usar um dicionário: `.agg({'vendas': ['sum', 'mean'], 'estoque': 'min'})`. Isso cria um relatório completo com uma única passagem pelos dados.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso obrigaria o Pandas a percorrer o dataset e agrupar duas vezes, desperdiçando CPU e memória.",
        "E": "Correta. É a forma idiomática e otimizada do Pandas para múltiplas agregações.",
        "B": "Incorreta. O `.apply()` com lambda é uma solução genérica e muito mais lenta para operações que já possuem implementações nativas como média e soma.",
        "D": "Incorreta. O `.map()` não é projetado para trabalhar com objetos agrupados (GroupBy).",
        "C": "Incorreta. O `.describe()` retorna um conjunto fixo de 8 estatísticas; você não consegue pedir 'apenas soma e média' de forma direta com ele."
      },
      "dicaDeOuro": "Relatório de GroupBy? Vá de .agg()."
    }
  },
  {
    "id": "q_ds_052",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Apache Spark (Lazy Evaluation)",
    "difficulty": "Médio",
    "statement": "O Apache Spark utiliza o conceito de 'Lazy Evaluation' (Avaliação Preguiçosa). O que isso significa na prática?",
    "options": {
      "A": "As transformações são executadas apenas se houver memória RAM sobrando.",
      "B": "O Spark não executa nenhuma transformação imediatamente; ele apenas constrói um grafo de execução (DAG) e só processa os dados quando uma 'Action' (como .count() ou .save()) é chamada.",
      "C": "O sistema entra em modo de espera se não houver consultas por mais de 5 minutos.",
      "D": "O Spark demora para iniciar por causa do carregamento do Java.",
      "E": "O Spark utiliza menos CPU para economizar energia do servidor."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Lazy Evaluation (Avaliação Preguiçosa) é o segredo do Spark para lidar com petabytes de dados. Imagine que você dá 10 ordens de limpeza de dados. O Spark não limpa nada na hora; ele apenas anota as ordens em um 'plano de ação' (DAG). Ele só vai realmente trabalhar quando você disser: 'Me mostre o resultado final' (Action).",
      "puloDoGato": "Por que isso é bom? Porque o Spark olha para as 10 ordens e percebe que pode pular 3 etapas inúteis. Se ele fosse 'apressado' (Eager), ele gastaria tempo e dinheiro processando coisas que você nem ia usar.",
      "cascasDeBanana": {
        "A": "Incorreta. O tempo de boot do Java (JVM) é um custo fixo de infraestrutura, não tem relação com a estratégia de execução 'Lazy'.",
        "B": "Correta. Define a separação entre Transformações (preguiçosas) e Ações (executivas).",
        "C": "Incorreta. O objetivo é eficiência de processamento e inteligência lógica, não apenas economia de energia.",
        "D": "Incorreta. O Spark não 'dorme' por inatividade; 'Lazy' refere-se ao adiamento da computação até que ela seja estritamente necessária.",
        "E": "Incorreta. A execução é disparada por uma ação do usuário, independentemente da quantidade de memória livre no momento."
      },
      "dicaDeOuro": "Transformações = Plano. Ações = Execução do plano."
    }
  },
  {
    "id": "q_ds_054",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Modelagem Dimensional (Snowflake)",
    "difficulty": "Médio",
    "statement": "Qual é a principal diferença entre o esquema Estrela (Star Schema) e o esquema Floco de Neve (Snowflake Schema) em um Data Warehouse?",
    "options": {
      "A": "O Snowflake Schema é usado apenas em nuvem, enquanto o Star Schema é on-premisses.",
      "B": "O Star Schema é muito mais complexo e difícil de entender para usuários de negócio.",
      "C": "No Snowflake Schema, as tabelas de dimensão são normalizadas (divididas em sub-tabelas), enquanto no Star Schema elas são desnormalizadas (uma única tabela por dimensão).",
      "D": "O Snowflake Schema não possui tabelas de fato.",
      "E": "O Star Schema armazena dados em formato binário, e o Snowflake em texto."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Estrela (Star): É simples e rápido. Você repete o nome da 'Cidade' em cada linha da tabela de Clientes (Desnormalizado). Floco de Neve (Snowflake): É organizado e economiza espaço. Você cria uma tabela só para 'Cidades' e coloca apenas o ID dela no Cliente (Normalizado).",
      "puloDoGato": "Por que o nome 'Floco de Neve'? Porque as tabelas de dimensão se ramificam em outras tabelas, criando um desenho complexo. Na Petrobras: Star = Mais performance (menos Joins). Snowflake = Mais organização/espaço (mais Joins).",
      "cascasDeBanana": {
        "A": "Incorreta. Ambos são modelos de arquitetura lógica e podem rodar em qualquer lugar (Cloud ou Local).",
        "C": "Correta. A normalização das dimensões é a diferença técnica definidora.",
        "B": "Incorreta. O Star Schema é justamente o modelo preferido pelos usuários por ser o mais intuitivo.",
        "D": "Incorreta. Todo Data Warehouse dimensional precisa de tabelas de fato para armazenar as métricas.",
        "E": "Incorreta. O formato de armazenamento (binário/texto) depende do banco de dados (ex: Parquet, SQL Server), não do esquema lógico."
      },
      "dicaDeOuro": "Snowflake = Dimensões normalizadas (com sub-tabelas)."
    }
  },
  {
    "id": "q_ds_055",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Named Entity Recognition (NER)",
    "difficulty": "Médio",
    "statement": "A tarefa de NLP que consiste em localizar e classificar entidades nomeadas em um texto estruturado (ex: identificar que 'Petrobras' é uma ORGANIZAÇÃO e 'Rio de Janeiro' é um LOCAL) é chamada de:",
    "options": {
      "A": "Named Entity Recognition (NER)",
      "B": "Topic Modeling",
      "C": "Machine Translation",
      "D": "Text Summarization",
      "E": "Sentiment Analysis"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O NER é o 'detector de nomes' do NLP. Ele não quer saber o que o texto diz, mas sim 'quem' está nele. Ele varre o texto e coloca etiquetas: 'Isto é uma Pessoa', 'Isto é um Valor em Reais', 'Isto é uma Empresa'. É o primeiro passo para extrair dados de textos jurídicos ou notícias.",
      "puloDoGato": "Dica de prova: se o enunciado fala em 'extrair nomes de organizações, locais ou datas', a resposta é NER (Named Entity Recognition).",
      "cascasDeBanana": {
        "E": "Incorreta. Sentiment Analysis classifica a emoção (feliz/triste) do texto, não as entidades.",
        "A": "Correta. É a tarefa específica de reconhecimento e classificação de entidades próprias.",
        "C": "Incorreta. Tradução automática foca em converter o sentido entre idiomas.",
        "D": "Incorreta. Sumarização foca em encurtar o texto mantendo o sentido principal.",
        "B": "Incorreta. Topic Modeling identifica temas gerais (ex: o texto fala de esporte), não nomes específicos."
      },
      "dicaDeOuro": "Extrair Nomes/Lugares/Datas? NER."
    }
  },
  {
    "id": "q_ds_056",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Exploração de Dados",
    "difficulty": "Fácil",
    "statement": "Ao carregar um novo dataset, qual método do Pandas você usaria para obter rapidamente o tipo de dado de cada coluna, a contagem de valores não nulos e o uso de memória do DataFrame?",
    "options": {
      "A": "df.head()",
      "B": "df.info()",
      "C": "df.describe()",
      "D": "df.columns",
      "E": "df.shape"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O `.info()` é o primeiro comando que todo Cientista de Dados roda. Ele é um Raio-X técnico: ele diz se os dados foram carregados corretamente, se existem colunas vazias (nulas) e, o mais importante, se o DataFrame cabe na memória RAM do computador.",
      "puloDoGato": "Muitas vezes o Pandas carrega números como 'object' (texto). O `.info()` te avisa isso para que você possa converter para 'float' e economizar 80% de memória.",
      "cascasDeBanana": {
        "A": "Incorreta. O `.describe()` foca na matemática (média, mediana, quartis), ignorando a estrutura técnica dos tipos de dados.",
        "B": "Correta. Fornece o resumo técnico completo da estrutura do objeto.",
        "C": "Incorreta. O `.head()` apenas espreita as primeiras linhas para ver os dados 'de olho'.",
        "D": "Incorreta. O `.shape` retorna apenas uma tupla com a quantidade de linhas e colunas (ex: (100, 5)).",
        "E": "Incorreta. O `.columns` apenas lista os nomes das colunas."
      },
      "dicaDeOuro": "df.info() = Raio-X técnico da tabela."
    }
  },
  {
    "id": "q_ds_057",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Análise de Sentimentos",
    "difficulty": "Médio",
    "statement": "Na análise de sentimentos, qual é a principal limitação das abordagens baseadas apenas em léxicos (listas de palavras positivas/negativas) em comparação com modelos de Machine Learning treinados?",
    "options": {
      "A": "Não conseguem processar palavras em português.",
      "B": "Só funcionam com frases de no máximo 10 palavras.",
      "C": "São muito mais lentas para processar grandes volumes de texto.",
      "D": "Têm dificuldade em capturar o contexto, ironia e sarcasmo (ex: 'Que ótimo, mais um erro no sistema!').",
      "E": "Exigem GPUs de última geração para funcionar."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine que alguém escreve: 'Parabéns, Petrobras, por poluir o mar!'. Um léxico (lista de palavras) vê 'Parabéns' e acha que o texto é positivo. Um modelo de ML (como BERT) entende o sarcasmo porque ele analisa o contexto da frase toda. Léxicos são 'burros' porque não veem a relação entre as palavras.",
      "puloDoGato": "Léxicos são baseados em regras (VADER, TextBlob). ML é baseado em aprendizado estatístico. Para detectar ironia, o ML é infinitamente superior.",
      "cascasDeBanana": {
        "C": "Incorreta. Pelo contrário: léxicos são extremamente rápidos e leves comparados a modelos de Deep Learning.",
        "D": "Correta. A incapacidade de entender o contexto semântico é a falha fatal dos léxicos.",
        "E": "Incorreta. Léxicos rodam em qualquer CPU simples; modelos de ML é que costumam pedir GPUs.",
        "A": "Incorreta. Existem excelentes léxicos para o português, como o Sentilex.",
        "B": "Incorreta. Não existe limite de tamanho; o problema é a qualidade da análise, não a quantidade de palavras."
      },
      "dicaDeOuro": "Léxico = Soma palavras. ML = Entende a frase."
    }
  },
  {
    "id": "q_ds_058",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Detecção de Objetos (YOLO)",
    "difficulty": "Difícil",
    "statement": "O algoritmo YOLO (You Only Look Once) é famoso pela sua velocidade em detecção de objetos em tempo real. Qual é a principal característica arquitetural que o torna tão rápido?",
    "options": {
      "A": "Ele processa a imagem em várias etapas separadas (proposta de região, depois classificação).",
      "B": "Ele exige que a imagem seja dividida em 1 milhão de pequenos quadrados antes do processamento.",
      "C": "Ele ignora as cores da imagem e trabalha apenas com gradientes de cinza.",
      "D": "Ele utiliza apenas camadas de Pooling, sem nenhuma convolução.",
      "E": "Ele trata a detecção como um problema de regressão único, prevendo classes e coordenadas diretamente em uma única passagem pela rede neural."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Antes do YOLO, o computador olhava uma imagem e pensava: 'Será que tem um gato aqui? E aqui? E agora?'. O YOLO olha a imagem inteira de uma vez só e resolve um problema de matemática (regressão) para dizer: 'Tem um carro nestas coordenadas com 90% de certeza'.",
      "puloDoGato": "É essa 'visão global' em uma única passagem (one-shot) que permite ao YOLO ser usado em carros autônomos e câmeras de segurança, onde cada milissegundo conta.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve detectores de 'dois estágios' (como o R-CNN), que são mais precisos mas muito mais lentos.",
        "E": "Correta. Tratar detecção como um único problema de regressão é a grande sacada do YOLO.",
        "C": "Incorreta. O YOLO utiliza todas as informações de cores disponíveis para melhorar a precisão.",
        "D": "Incorreta. Ele é uma rede convolucional profunda (CNN) clássica em sua essência.",
        "B": "Incorreta. Ele divide a imagem em uma grade (grid), mas em resoluções baixas como 7x7 ou 19x19, nunca 1 milhão."
      },
      "dicaDeOuro": "Velocidade em tempo real? YOLO (You Only Look Once)."
    }
  },
  {
    "id": "q_ds_059",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Apache Spark (Transformações)",
    "difficulty": "Difícil",
    "statement": "No Apache Spark, as transformações podem ser classificadas como 'Narrow' ou 'Wide'. Qual operação abaixo é considerada uma 'Wide Transformation' que exige o embaralhamento (Shuffle) de dados entre os nós do cluster?",
    "options": {
      "A": "groupByKey()",
      "B": "map()",
      "C": "filter()",
      "D": "union()",
      "E": "sample()"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Narrow (Estreito): O trabalho é feito 'em casa'. Cada servidor processa sua parte e pronto (ex: filtrar linhas). Wide (Largo): É um caos logístico. Os dados precisam viajar pela rede para encontrar seus pares em outros servidores (Shuffle). É o que acontece quando você pede para agrupar por uma chave que está espalhada pelo cluster.",
      "puloDoGato": "Em provas da Petrobras, saiba que o Shuffle (Wide Transformation) é o maior gargalo de performance do Spark. Um bom engenheiro de dados tenta evitá-lo ao máximo usando técnicas como 'Broadcast Joins'.",
      "cascasDeBanana": {
        "B": "Incorreta. O `.map()` apenas transforma cada linha de forma independente (Narrow).",
        "C": "Incorreta. O `.filter()` apenas decide se a linha fica ou sai (Narrow).",
        "A": "Correta. Exige que todas as linhas com a mesma chave se reúnam no mesmo servidor (Shuffle).",
        "D": "Incorreta. O `.union()` apenas junta os ponteiros das duas coleções, sem mover dados entre máquinas.",
        "E": "Incorreta. O `.sample()` sorteia dados localmente nas partições (Narrow)."
      },
      "dicaDeOuro": "Operação que exige Shuffle? Wide Transformation (Ex: GroupBy, Join)."
    }
  },
  {
    "id": "q_ds_066",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Teorema de Bayes",
    "difficulty": "Difícil",
    "statement": "O Teorema de Bayes permite atualizar a probabilidade de uma hipótese à medida que novas evidências surgem. Na fórmula P(A|B) = [P(B|A) * P(A)] / P(B), o termo P(A) representa a nossa crença na hipótese A antes de observar a evidência B. Como esse termo é tecnicamente chamado?",
    "options": {
      "A": "Probabilidade marginal",
      "B": "Likelihood (Verossimilhança)",
      "C": "Probabilidade a priori (Prior)",
      "D": "Probabilidade a posteriori",
      "E": "Fator de Bayes"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Bayes é sobre mudar de opinião. Você acha que tem 1% de chance de ter uma doença (A priori). Você faz um exame e dá positivo (Likelihood). Você faz a conta do Bayes e descobre que agora sua chance real é de 8% (A posteriori).",
      "puloDoGato": "Decorar os nomes é vital: P(A) = Prior (Antes). P(B|A) = Likelihood (Chance da evidência). P(A|B) = Posterior (Depois).",
      "cascasDeBanana": {
        "D": "Incorreta. A posteriori é o resultado final, o P(A|B).",
        "B": "Incorreta. Likelihood é o P(B|A).",
        "A": "Incorreta. Probabilidade marginal é o divisor P(B).",
        "C": "Correta. É o conhecimento de base antes da nova informação.",
        "E": "Incorreta. Fator de Bayes é uma razão de likelihoods usada em seleção de modelos."
      },
      "dicaDeOuro": "P(A) = Prior. O que você acha ANTES de ver os dados."
    }
  },
  {
    "id": "q_ds_067",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Escore Z (Z-Score)",
    "difficulty": "Fácil",
    "statement": "Ao analisar a distribuição salarial de uma equipe, um cientista de dados decide calcular o Z-Score (escore padrão) do salário do gerente. O Z-Score mede a distância de um ponto de dados em relação à média da amostra expressa em qual unidade de medida?",
    "options": {
      "A": "Intervalos de Confiança.",
      "B": "Variâncias.",
      "C": "Reais ou Dólares absolutos.",
      "D": "Desvios Padrões.",
      "E": "Percentis."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Z-Score responde à pergunta: 'Você está quantos Desvios Padrões longe da média?'. Se o Z-Score for +2, você ganha 2 desvios padrões a mais que a média da empresa. Se for -1, ganha 1 desvio padrão a menos.",
      "puloDoGato": "Essa é a base do StandardScaler do Python. O Z-Score transforma qualquer distribuição (seja em Reais, Quilos ou Metros) em um número neutro, permitindo comparar maças com laranjas.",
      "cascasDeBanana": {
        "C": "Incorreta. O cálculo do Z-Score remove a unidade original.",
        "E": "Incorreta. Percentis medem a posição ordenada (ex: você ganha mais que 80% das pessoas).",
        "D": "Correta. A fórmula é (X - Média) / Desvio Padrão.",
        "B": "Incorreta. A variância é o quadrado do desvio padrão e não é a unidade do escore.",
        "A": "Incorreta. Intervalos de confiança são estimativas de parâmetros populacionais."
      },
      "dicaDeOuro": "Z-Score = Distância em Desvios Padrões."
    }
  },
  {
    "id": "q_ds_068",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Testes de Hipóteses (P-Value)",
    "difficulty": "Médio",
    "statement": "Em um teste A/B para um novo botão do site, você obtém um valor-p (p-value) de 0,02. O seu nível de significância pré-definido (alfa) é de 0,05 (5%). Qual é a decisão estatística correta a ser tomada?",
    "options": {
      "A": "Rejeitar a hipótese nula (H0), concluindo que o novo botão gerou uma mudança estatisticamente significativa.",
      "B": "Aumentar o tamanho da amostra, pois um valor-p baixo indica incerteza nos dados.",
      "C": "Ignorar o teste, pois um valor-p de 0,02 significa que o teste tem 98% de chance de estar errado.",
      "D": "Aceitar a hipótese nula (H0), pois o valor-p é menor que alfa.",
      "E": "Aceitar ambas as hipóteses simultaneamente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Regra clássica da estatística: 'Se o p é menor, o H0 vai pro beleléu'. O p-value (0,02) menor que o limite que você definiu (0,05) significa que a chance de aquele resultado ter sido apenas coincidência/sorte é muito pequena. Logo, a mudança é real.",
      "puloDoGato": "Hipótese Nula (H0) é o status quo: 'Nada mudou, o botão antigo e o novo são iguais'. Rejeitar o H0 significa comemorar: o teste encontrou uma diferença real.",
      "cascasDeBanana": {
        "D": "Incorreta. Quando o p-value é menor que alfa, nós rejeitamos H0, não aceitamos.",
        "A": "Correta. P-value < Alfa implica significância estatística.",
        "B": "Incorreta. P-value baixo indica certeza, não incerteza. Não há necessidade obrigatória de mais amostras.",
        "C": "Incorreta. O valor 0,02 indica que se o botão não tivesse efeito nenhum, haveria apenas 2% de chance de vermos esse resultado bizarro.",
        "E": "Incorreta. Testes de hipóteses são mutuamente excludentes."
      },
      "dicaDeOuro": "Se o P é pequeno, rejeite o H0."
    }
  },
  {
    "id": "q_ds_069",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Erros do Tipo I e Tipo II",
    "difficulty": "Médio",
    "statement": "Na inferência estatística, assim como nas matrizes de confusão de Machine Learning, existem dois tipos principais de erros. O que caracteriza o 'Erro do Tipo I'?",
    "options": {
      "A": "Falhar em rejeitar a hipótese nula quando ela é falsa (equivalente a um Falso Negativo).",
      "B": "Rejeitar a hipótese nula quando ela é verdadeira (equivalente a um Falso Positivo).",
      "C": "Calcular o valor-p de forma equivocada usando uma distribuição errada.",
      "D": "Ter um tamanho de amostra pequeno demais para encontrar qualquer significância.",
      "E": "Rejeitar a hipótese alternativa quando ela é verdadeira."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Erro Tipo I: Dar um alarme falso. (Ex: Dizer que o paciente está doente, mas ele está são). Erro Tipo II: Deixar passar despercebido. (Ex: Dizer que o paciente está são, mas ele tem uma doença grave).",
      "puloDoGato": "Para a vida toda: Tipo 1 = Falso Positivo. Tipo 2 = Falso Negativo. O nível de significância (alfa) de 5% é, na verdade, você aceitando que tem 5% de chance de cometer um Erro do Tipo I.",
      "cascasDeBanana": {
        "B": "Correta. É a definição acadêmica exata do Falso Positivo estatístico.",
        "A": "Incorreta. Essa é a definição do Erro do Tipo II.",
        "C": "Incorreta. Isso é um erro metodológico do pesquisador, não um erro de inferência estatística inerente ao processo.",
        "D": "Incorreta. Isso causa falta de 'Poder Estatístico', o que leva ao Erro do Tipo II, não ao Tipo I.",
        "E": "Incorreta. Hipótese nula é o foco das rejeições."
      },
      "dicaDeOuro": "Tipo I = Falso Positivo (Alarme falso)."
    }
  },
  {
    "id": "q_ds_070",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Eventos Independentes",
    "difficulty": "Fácil",
    "statement": "Se você tem dois eventos estatisticamente independentes, A e B (por exemplo, jogar uma moeda e lançar um dado), qual operação matemática descreve corretamente a probabilidade de ambos ocorrerem simultaneamente, ou seja, P(A e B)?",
    "options": {
      "A": "P(A) * P(B)",
      "B": "P(A) + P(B) - 1",
      "C": "P(A) - P(B)",
      "D": "P(A) / P(B)",
      "E": "P(A) + P(B)"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Quando eventos são independentes, um não afeta o outro. A regra do 'E' (interseção) vira multiplicação. A regra do 'OU' (união) vira soma.",
      "puloDoGato": "Exemplo: Moeda cair 'Cara' (1/2) E Dado dar 'Seis' (1/6). A chance dos dois juntos é (1/2) * (1/6) = 1/12.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria para eventos mutuamente excludentes com a porta lógica OU, e faltaria subtrair a intersecção.",
        "D": "Incorreta. Divisão não se aplica à intersecção direta.",
        "C": "Incorreta. Subtração não se aplica.",
        "A": "Correta. Regra do produto para probabilidade conjunta de eventos independentes.",
        "B": "Incorreta. Não existe essa fórmula nos axiomas básicos da probabilidade padrão."
      },
      "dicaDeOuro": "Eventos Independentes: Regra do 'E' = Multiplica."
    }
  },
  {
    "id": "q_ds_071",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Viés de Sobrevivência",
    "difficulty": "Fácil",
    "statement": "Durante a Segunda Guerra Mundial, engenheiros queriam reforçar os aviões avaliando onde as aeronaves que retornavam tinham buracos de bala. O estatístico Abraham Wald sugeriu reforçar justamente onde NÃO havia buracos, pois os aviões atingidos naquelas áreas críticas não voltavam. Esse caso clássico ilustra qual tipo de viés estatístico?",
    "options": {
      "A": "Viés de Seleção (Selection Bias)",
      "B": "Viés de Memória (Recall Bias)",
      "C": "Viés de Sobrevivência (Survivorship Bias)",
      "D": "Viés do Atirador do Texas (Texas Sharpshooter Bias)",
      "E": "Viés de Confirmação (Confirmation Bias)"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Você só analisa o que 'sobreviveu' ao processo de filtragem e ignora o que ficou pelo caminho. Se você analisar dados de clientes que pediram cancelamento para ver o que eles não gostam, você está ignorando os que cancelaram sem falar nada.",
      "puloDoGato": "Sempre que uma amostra não representa o todo porque uma parte dela falhou silenciosamente antes de ser coletada, é Viés de Sobrevivência.",
      "cascasDeBanana": {
        "A": "Incorreta. Ocorre quando você só busca dados que confirmam o que você já acreditava.",
        "B": "Incorreta. Sobrevivência é um sub-tipo específico de seleção, e é a resposta exata para este caso histórico.",
        "C": "Correta. O caso de Abraham Wald é a definição literal ensinada nas universidades.",
        "D": "Incorreta. Ocorre quando você atira, vê onde os tiros acertaram e pinta um alvo ao redor deles depois.",
        "E": "Incorreta. Ocorre quando as pessoas lembram das coisas de forma diferente do que realmente aconteceu."
      },
      "dicaDeOuro": "Cuidado ao analisar apenas os dados que chegaram até você. Os dados invisíveis (que falharam) podem ser mais importantes."
    }
  },
  {
    "id": "q_ds_072",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Correlação vs Causalidade",
    "difficulty": "Fácil",
    "statement": "Uma análise de dados mostra uma correlação de Pearson de 0.95 entre o consumo de sorvete em uma cidade e o número de ataques de tubarão na costa. O que um Cientista de Dados deve concluir rigidamente sobre essa métrica?",
    "options": {
      "A": "Como a correlação é quase 1.0, a métrica de p-value não é necessária para provar causalidade.",
      "B": "A alta correlação garante que um modelo de regressão linear terá erro zero.",
      "C": "O consumo de sorvete causa diretamente ataques de tubarão.",
      "D": "Correlação não implica causalidade; ambas as variáveis podem ser influenciadas por uma variável de confusão (ex: temperatura).",
      "E": "Os ataques de tubarão afetam o mercado logístico, forçando a venda de sorvetes na praia."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Correlação (Pearson, Spearman) mede apenas se dois números sobem e descem juntos. Ela não diz 'quem bateu em quem'. Pode ser pura coincidência ou pode haver uma terceira força invisível puxando as duas variáveis ao mesmo tempo (variável de confusão/lurking variable).",
      "puloDoGato": "No verão, o calor (variável de confusão) faz as pessoas comerem mais sorvete e, ao mesmo tempo, irem mais à praia (o que atrai tubarões). Uma não causa a outra.",
      "cascasDeBanana": {
        "C": "Incorreta. É o erro crasso do falso pressuposto causal.",
        "D": "Correta. É o mantra sagrado da Ciência de Dados.",
        "B": "Incorreta. O erro nunca é zero no mundo real, e a correlação avalia a linearidade, não a precisão de um modelo preditivo.",
        "E": "Incorreta. Inferência absurda e anedótica.",
        "A": "Incorreta. P-value ajuda a provar significância da correlação, mas nenhum teste estatístico simples sozinho prova causalidade sem controle de experimento (A/B testing)."
      },
      "dicaDeOuro": "Mantra: Correlação não implica causalidade."
    }
  },
  {
    "id": "q_ds_079",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Integração Contínua (CI/CD)",
    "difficulty": "Fácil",
    "statement": "Em práticas modernas de MLOps e Engenharia de Software, o termo CI (Integração Contínua) refere-se a qual prática fundamental do fluxo de trabalho das equipes?",
    "options": {
      "A": "Implantação (deploy) automática do código em servidores de produção para os usuários finais.",
      "B": "A migração contínua de dados legados do Data Center local para nuvens públicas como a AWS.",
      "C": "Integração do modelo treinado aos sistemas de faturamento e governança corporativa.",
      "D": "Treinamento automatizado de redes neurais a cada novo dado inserido no banco de dados.",
      "E": "O teste e a validação automática do código em um servidor neutro sempre que um desenvolvedor envia alterações para o repositório principal."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "CI (Continuous Integration) é o porteiro do código. Quando você faz o 'Push', o servidor de CI (Jenkins, Github Actions) baixa seu código, roda os testes unitários e diz: 'Ok, você não quebrou nada' ou 'Alerta vermelho, código com erro'.",
      "puloDoGato": "CD (Continuous Deployment / Delivery) é o próximo passo. Depois do CI dar 'Ok', o CD pega aquele código validado e o instala no servidor real em produção sem que um humano precise apertar um botão.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve o CD (Continuous Deployment), não o CI.",
        "D": "Incorreta. Isso é Continuous Training (CT), uma etapa extra em MLOps.",
        "C": "Incorreta. Integração no nível de negócio, não o conceito de pipeline técnico de DevOps.",
        "E": "Correta. CI é garantir que o código novo se integre de forma segura ao código base existente via testes automatizados.",
        "B": "Incorreta. Migração de dados não tem relação direta com pipelines de entrega de software."
      },
      "dicaDeOuro": "CI = Testes automáticos. CD = Deploy automático."
    }
  },
  {
    "id": "q_ds_080",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Tracking (MLflow)",
    "difficulty": "Médio",
    "statement": "Ferramentas como MLflow e Weights & Biases (W&B) são amplamente adotadas no ecossistema de MLOps corporativo da Petrobras. Qual é a função principal do componente 'Tracking' dessas ferramentas durante a fase de pesquisa e experimentação?",
    "options": {
      "A": "Servir como uma IDE (Integrated Development Environment) nativa da web, substituindo o Jupyter Notebook.",
      "B": "Proteger as APIs do modelo treinado contra ataques cibernéticos e sobrecarga de acessos.",
      "C": "Monitorar a saúde do banco de dados relacional e reiniciar clusters Spark caso falhem.",
      "D": "Rastrear os movimentos do mouse do usuário para treinar modelos de detecção de fraudes.",
      "E": "Realizar o tracking de experimentos, registrando os hiperparâmetros, o código-fonte, métricas de erro e artefatos de cada versão do modelo gerada no treinamento."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Cientistas de Dados fazem dezenas de testes: 'E se a rede tiver 5 camadas?', 'E se eu usar Learning Rate 0.01?'. Em vez de anotar os resultados disso em uma planilha do Excel, o MLflow grava tudo automaticamente em um painel visual.",
      "puloDoGato": "Esse processo garante reprodutibilidade (se o pesquisador sair de férias, o time saberá exatamente qual código e quais pesos geraram o modelo X).",
      "cascasDeBanana": {
        "C": "Incorreta. Ferramentas de MLOps não atuam como orquestradores de infraestrutura bruta no estilo Kubernetes.",
        "B": "Incorreta. Proteção cibernética é escopo de firewalls e API Gateways (ex: AWS API Gateway).",
        "D": "Incorreta. Confusão com ferramentas de tracking web ou Analytics.",
        "E": "Correta. O MLflow Tracking é a 'caixa preta' do avião; ele grava tudo o que ocorreu durante o treinamento.",
        "A": "Incorreta. Eles se conectam ao Jupyter/Python, mas não substituem o ambiente de codificação."
      },
      "dicaDeOuro": "Tracking no MLOps = Diário automático das suas tentativas (experimentos)."
    }
  },
  {
    "id": "q_ds_082",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Registry",
    "difficulty": "Fácil",
    "statement": "No ciclo de vida de MLOps, após treinar diversos modelos no MLflow Tracking, a equipe decide que um modelo específico está pronto para uso. Para garantir a governança, eles utilizam o 'Model Registry' (Registro de Modelos). Qual é a principal finalidade deste componente?",
    "options": {
      "A": "Traduzir o código Python do modelo para C++ para obter mais performance.",
      "B": "Funcionar como um banco de dados SQL para armazenar as features de treinamento.",
      "C": "Servir o modelo via REST API automaticamente na internet.",
      "D": "Monitorar a queda de performance do modelo em produção via dashboards.",
      "E": "Atuar como um repositório central para gerenciar o ciclo de vida (versões, transições Staging/Production) de modelos aprovados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Enquanto o Tracking é a 'oficina' onde você faz os testes bagunçados, o Model Registry é a 'vitrine da loja'. Lá ficam organizados os modelos 'oficiais', com as etiquetas de Versão 1 (Aposentado), Versão 2 (Homologação) e Versão 3 (Produção).",
      "puloDoGato": "É o equivalente ao GitHub Release, mas focado especificamente para pesos e metadados de Inteligência Artificial.",
      "cascasDeBanana": {
        "C": "Incorreta. O Model Registry apenas gerencia as versões; ferramentas como MLflow Serve ou SageMaker Endpoints é que expõem a API.",
        "B": "Incorreta. Armazenar variáveis de entrada é função da Feature Store.",
        "E": "Correta. É um catálogo corporativo de modelos aptos ou em vias de implantação.",
        "D": "Incorreta. Isso é função do Model Monitoring (Observabilidade).",
        "A": "Incorreta. O Registry não altera o formato binário do modelo."
      },
      "dicaDeOuro": "Model Registry = Vitrine/Catálogo Oficial de Versões do Modelo."
    }
  },
  {
    "id": "q_ds_083",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Data Drift e Model Drift",
    "difficulty": "Fácil",
    "statement": "Um modelo de detecção de fraudes em cartões performava perfeitamente no momento do seu deploy. No entanto, sua precisão despencou após seis meses, sem que nenhuma linha de código fosse alterada. A investigação revela que o perfil de consumo e os hábitos financeiros dos clientes mudaram radicalmente. Como esse fenômeno é conhecido em MLOps?",
    "options": {
      "A": "Concept Drift",
      "B": "Overfitting Tardio",
      "C": "Vazamento de Dados (Data Leakage)",
      "D": "Data Drift (Desvio de Dados)",
      "E": "Gradient Vanishing (Desvanecimento do Gradiente)"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Data Drift ocorre quando a distribuição estatística das entradas (X) muda com o tempo. Concept Drift ocorre quando a relação entre X e Y muda (o que antes não era fraude, agora passou a ser considerado fraude por novas leis). Ambos estragam seu modelo.",
      "puloDoGato": "A natureza humana muda, a economia muda. Por isso o modelo treinado com dados de 2020 perde a utilidade em 2024. A solução? Retreinamento contínuo (Continuous Training - CT).",
      "cascasDeBanana": {
        "A": "Incorreta. Concept Drift é quando as variáveis são as mesmas, mas o conceito de alvo mudou (ex: inflação fez R$ 100 deixar de ser uma transação 'alta').",
        "D": "Correta. O perfil (distribuição) das features de entrada dos clientes mudou.",
        "B": "Incorreta. Overfitting ocorre durante o treinamento, não espontaneamente meses depois.",
        "C": "Incorreta. Data leakage é o erro de usar dados do futuro durante a fase de treino.",
        "E": "Incorreta. É um problema matemático no treinamento de redes profundas."
      },
      "dicaDeOuro": "O mundo mudou e os dados envelheceram? Data Drift."
    }
  },
  {
    "id": "q_ds_091",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Máquina de Suporte de Vetores (SVM) - Kernels",
    "difficulty": "Médio",
    "statement": "Ao utilizar o algoritmo SVM (Support Vector Machines) para problemas onde os dados não são linearmente separáveis no espaço original, qual técnica permite projetar os dados em uma dimensão superior para encontrar um hiperplano separador?",
    "options": {
      "A": "Bootstrap Aggregating",
      "B": "Descida do Gradiente Estocástica",
      "C": "Principal Component Analysis (PCA)",
      "D": "Regularização Lasso",
      "E": "Kernel Trick (Truque do Kernel)"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se você tem pontos misturados em um papel (2D) e não consegue passar uma régua para separá-los, o SVM 'joga' esses pontos para o alto (3D). No 3D, você consegue passar uma folha de papel (hiperplano) entre eles. O Kernel Trick faz isso matematicamente sem você precisar calcular as coordenadas exatas no espaço 3D, o que poupa memória e tempo.",
      "puloDoGato": "O Kernel RBF (Radial Basis Function) é o mais famoso. Ele é tão poderoso que consegue criar fronteiras de decisão circulares ou extremamente complexas ao redor dos dados.",
      "cascasDeBanana": {
        "D": "Incorreta. Lasso serve para zerar coeficientes de variáveis irrelevantes.",
        "E": "Correta. É o mecanismo central do SVM para lidar com não-linearidade.",
        "A": "Incorreta. Isso é a base do Random Forest (Bagging).",
        "C": "Incorreta. PCA reduz a dimensão, o Kernel Trick projeta para uma dimensão superior (maior).",
        "B": "Incorreta. É um método de otimização para encontrar os pesos do modelo."
      },
      "dicaDeOuro": "Dados misturados? Kernel Trick neles."
    }
  },
  {
    "id": "q_ds_092",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Métricas de Avaliação - F1-Score",
    "difficulty": "Fácil",
    "statement": "Em um cenário de detecção de doenças raras, onde o custo de um falso negativo é muito alto e a classe positiva é muito pequena, por que o F1-Score é considerado uma métrica superior à Acurácia simples?",
    "options": {
      "A": "Porque ele é a média aritmética simples entre Precision e Recall.",
      "B": "Porque o F1-Score garante que o erro de generalização seja sempre zero.",
      "C": "Porque o F1-Score ignora os verdadeiros negativos, focando apenas na taxa de erro.",
      "D": "Porque a acurácia pode ser artificialmente alta se o modelo apenas 'chutar' que todos são saudáveis, enquanto o F1-Score penaliza desequilíbrios entre precisão e sensibilidade via média harmônica.",
      "E": "Porque ele é imune ao fenômeno de Overfitting."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se 99% das pessoas são saudáveis e seu modelo disser 'Todo mundo está bem', ele terá 99% de acurácia, mas ele é inútil porque não achou o único doente. O F1-Score combina Precisão e Recall. Se um deles for zero, o F1-Score desaba, revelando que o modelo é ruim.",
      "puloDoGato": "A média harmônica (usada no F1) é muito 'rígida'. Se você tem Precision 1.0 e Recall 0.1, a média aritmética daria 0.55 (parece ok), mas a harmônica dá 0.18 (mostra o desastre).",
      "cascasDeBanana": {
        "C": "Incorreta. Ele não ignora nada, ele sintetiza a performance nas classes de interesse.",
        "A": "Incorreta. Ele é a média HARMÔNICA, não aritmética.",
        "D": "Correta. Explica o paradoxo da acurácia em dados desbalanceados.",
        "B": "Incorreta. Nenhuma métrica garante erro zero.",
        "E": "Incorreta. F1 é uma métrica de avaliação, não impede overfitting (isso é feito com regularização)."
      },
      "dicaDeOuro": "Dados desbalanceados? F1-Score ou MCC (Matthews Correlation Coefficient)."
    }
  },
  {
    "id": "q_ds_093",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regularização - Lasso (L1)",
    "difficulty": "Médio",
    "statement": "Qual é a propriedade exclusiva da regularização Lasso (L1) que a diferencia da regularização Ridge (L2) em modelos de Regressão Linear?",
    "options": {
      "A": "Lasso é focado apenas em problemas de classificação, não de regressão.",
      "B": "Lasso consegue realizar a seleção automática de variáveis (feature selection), zerando completamente os coeficientes de atributos irrelevantes.",
      "C": "Lasso utiliza o quadrado dos pesos na penalidade da função de custo.",
      "D": "Lasso reduz os coeficientes, mas nunca os zera exatamente.",
      "E": "Lasso aumenta os coeficientes das variáveis para melhorar a variância."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Ridge (L2) é como um personal trainer bonzinho: ele pede para todo mundo diminuir a carga (os pesos), mas deixa todo mundo treinar. Lasso (L1) é o sargento: ele olha para quem está rendendo pouco e manda embora (zera o peso). No final, seu modelo fica mais simples e só com o que importa.",
      "puloDoGato": "Visualmente, a penalidade L1 tem o formato de um diamante (quina), o que favorece soluções onde os eixos (variáveis) são zerados quando tocam a função de custo.",
      "cascasDeBanana": {
        "E": "Incorreta. Regularização sempre visa diminuir (ou controlar) os pesos.",
        "D": "Incorreta. Isso descreve o Ridge.",
        "B": "Correta. Lasso = Sparsity (Raridade/Zera pesos).",
        "A": "Incorreta. Lasso nasceu na Regressão Linear.",
        "C": "Incorreta. Lasso usa o valor absoluto (|w|), o quadrado é do Ridge."
      },
      "dicaDeOuro": "Lasso = L1 = Seleção de variáveis (Zera pesos)."
    }
  },
  {
    "id": "q_ds_094",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Ensembles - AdaBoost",
    "difficulty": "Médio",
    "statement": "Como o algoritmo de Boosting conhecido como AdaBoost (Adaptive Boosting) trata os exemplos que foram classificados incorretamente por um modelo fraco em uma iteração anterior?",
    "options": {
      "A": "Ele reduz a profundidade das árvores para evitar o overfitting nos dados difíceis.",
      "B": "Ele tira a média de todos os modelos simultaneamente (paralelo).",
      "C": "Ele troca a função de ativação de Sigmoid para ReLU.",
      "D": "Ele aumenta o peso (importância) dos exemplos classificados incorretamente, forçando o próximo modelo a focar neles.",
      "E": "Ele descarta os exemplos difíceis para focar nos mais fáceis."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "AdaBoost é o 'professor exigente'. Se você errou uma questão na prova, na próxima aula ele vai te dar um exercício 10 vezes mais pesado sobre aquele mesmo assunto até você aprender. O próximo modelo fraco (stump) é obrigado a olhar com mais carinho para os dados que o modelo anterior ignorou.",
      "puloDoGato": "No AdaBoost, os modelos são treinados em SEQUÊNCIA. Você não consegue treinar o modelo 5 sem antes ter terminado o modelo 4. É diferente do Random Forest, que é paralelo.",
      "cascasDeBanana": {
        "E": "Incorreta. Seria o oposto do aprendizado iterativo.",
        "D": "Correta. É o mecanismo de 'adaptação' do AdaBoost.",
        "B": "Incorreta. Isso é Bagging (Random Forest).",
        "A": "Incorreta. AdaBoost usa justamente árvores bem rasas (stumps), mas o foco é no peso dos dados.",
        "C": "Incorreta. AdaBoost não é uma rede neural por padrão."
      },
      "dicaDeOuro": "AdaBoost = Foca no erro do anterior aumentando o peso dos dados errados."
    }
  },
  {
    "id": "q_ds_095",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Árvores de Decisão - Poda (Pruning)",
    "difficulty": "Fácil",
    "statement": "Qual é o principal objetivo de se realizar a 'Poda' (Pruning) em uma árvore de decisão que cresceu excessivamente até atingir o erro zero no conjunto de treinamento?",
    "options": {
      "A": "Transformar a árvore de decisão em uma Regressão Logística.",
      "B": "Tornar a árvore mais profunda e complexa.",
      "C": "Reduzir o Overfitting e melhorar a capacidade de generalização da árvore em dados novos.",
      "D": "Garantir que a entropia de todos os nós seja sempre máxima.",
      "E": "Aumentar o viés (bias) para que a árvore decore melhor os dados."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Uma árvore sem poda é como um aluno que decora até as vírgulas do livro. Se mudar uma palavra na prova, ele erra. Podar é cortar os ramos que são específicos demais de um pequeno grupo de dados (ruído), deixando apenas as regras gerais que funcionam para todo mundo.",
      "puloDoGato": "Existem dois tipos: Pré-poda (parar de crescer antes) e Pós-poda (cortar depois de pronta). A Cesgranrio adora perguntar qual das duas gera modelos mais robustos (geralmente a pós-poda com validação).",
      "cascasDeBanana": {
        "E": "Incorreta. Embora aumente um pouco o viés, o objetivo não é 'decorar'.",
        "C": "Correta. Menos ramos inúteis = Mais generalização.",
        "B": "Incorreta. Poda = Simplificar, diminuir.",
        "A": "Incorreta. São algoritmos de famílias totalmente diferentes.",
        "D": "Incorreta. Queremos Entropia BAIXA (pureza máxima nos nós)."
      },
      "dicaDeOuro": "Podar árvore = Cortar excessos = Combater Overfitting."
    }
  },
  {
    "id": "q_ds_096",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Viés e Variância (Bias-Variance Trade-off)",
    "difficulty": "Médio",
    "statement": "Ao aumentar o valor de 'K' no algoritmo K-NN (K-Nearest Neighbors), o que acontece com o Viés (Bias) e a Variância do modelo?",
    "options": {
      "A": "Ambos diminuem proporcionalmente.",
      "B": "O modelo se torna um classificador linear perfeito.",
      "C": "Ambos aumentam, tornando o modelo inútil.",
      "D": "O Viés diminui e a Variância aumenta.",
      "E": "O Viés aumenta e a Variância diminui."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se K=1, o modelo é muito nervoso (alta variância). Ele muda de opinião por causa de um único vizinho barulhento. Se você aumenta o K para 100, ele ouve a média de muita gente. Ele fica mais 'calmo' e estável (baixa variância), mas começa a ignorar detalhes importantes (alto viés).",
      "puloDoGato": "K pequeno = Overfitting (Variância alta). K grande = Underfitting (Viés alto).",
      "cascasDeBanana": {
        "E": "Correta. É o comportamento padrão de suavização de fronteiras.",
        "D": "Incorreta. Isso ocorreria se diminuíssemos o K.",
        "A": "Incorreta. Eles são inversamente proporcionais (Trade-off).",
        "C": "Incorreta. Aumentar o K até certo ponto ajuda na estabilidade.",
        "B": "Incorreta. K-NN é inerentemente não-linear."
      },
      "dicaDeOuro": "K alto no K-NN = Modelo mais simples e genérico = Mais viés."
    }
  },
  {
    "id": "q_ds_097",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Scikit-Learn - ColumnTransformer",
    "difficulty": "Médio",
    "statement": "No Scikit-learn, qual classe é a mais recomendada para aplicar transformações diferentes em colunas diferentes de um mesmo Dataset (por exemplo, OneHotEncoder em colunas de texto e StandardScaler em colunas numéricas) dentro de uma Pipeline única?",
    "options": {
      "A": "SelectKBest",
      "B": "LabelEncoder",
      "C": "FeatureUnion",
      "D": "ColumnTransformer",
      "E": "RandomForestRegressor"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Antigamente você tinha que separar o X em pedaços na mão, tratar cada um e depois colar de volta com o NumPy. O ColumnTransformer faz isso em uma linha só dentro da Pipeline. Você diz: 'Ei, colunas 0 e 1, usem Scaler. Colunas 2 a 5, usem Encoder'.",
      "puloDoGato": "Diferença: FeatureUnion aplica vários tratamentos na MESMA coluna e concatena os resultados. ColumnTransformer aplica tratamentos específicos para CADA coluna separadamente.",
      "cascasDeBanana": {
        "A": "Incorreta. Serve para selecionar as melhores variáveis estatisticamente.",
        "C": "Incorreta. Aplica transformadores em paralelo nos mesmos dados.",
        "D": "Correta. É a ferramenta certa para pré-processamento heterogêneo.",
        "B": "Incorreta. Transforma apenas uma coluna de labels (alvo).",
        "E": "Incorreta. É um modelo de predição, não um transformador de dados."
      },
      "dicaDeOuro": "Tratamentos diferentes para colunas diferentes? ColumnTransformer."
    }
  },
  {
    "id": "q_ds_098",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Naïve Bayes - Suposição de Independência",
    "difficulty": "Fácil",
    "statement": "Por que o algoritmo Naïve Bayes é chamado de 'Naïve' (Ingênuo)?",
    "options": {
      "A": "Porque ele só funciona para dados binários (0 e 1).",
      "B": "Porque ele não utiliza matemática avançada, apenas contagem simples.",
      "C": "Porque ele assume, de forma simplista, que todas as variáveis de entrada (features) são totalmente independentes entre si dada a classe.",
      "D": "Porque ele ignora valores nulos automaticamente.",
      "E": "Porque ele sempre assume que a classe positiva é a mais provável."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Imagine que você quer prever se vai chover. O Naïve Bayes olha para 'Nuvens' e 'Umidade'. Ele é ingênuo porque acha que a presença de nuvens não tem NADA a ver com a umidade alta. Na vida real, tudo é conectado, mas essa 'ingenuidade' matemática faz o cálculo ser extremamente rápido e funcionar muito bem para textos (NLP).",
      "puloDoGato": "Apesar dessa suposição falsa, o Naïve Bayes é um dos melhores baselines para classificação de SPAM até hoje.",
      "cascasDeBanana": {
        "B": "Incorreta. Ele usa o Teorema de Bayes, que é estatística pura e sólida.",
        "C": "Correta. A independência condicional é o pilar da sua 'ingenuidade'.",
        "E": "Incorreta. Ele calcula as probabilidades a partir dos dados reais.",
        "D": "Incorreta. Ele lida mal com categorias que nunca apareceram no treino (problema da frequência zero).",
        "A": "Incorreta. Existem versões para dados Gaussianos, Multinomiais e Bernoulli."
      },
      "dicaDeOuro": "Naïve Bayes = Ingênuo porque acha que as features não conversam entre si."
    }
  },
  {
    "id": "q_ds_099",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regressão Logística - Função Softmax",
    "difficulty": "Médio",
    "statement": "Na Regressão Logística, quando estendemos o problema de uma classificação binária (0 ou 1) para uma classificação multinomial (várias classes), qual função é utilizada para garantir que as saídas do modelo somem 1.0 e representem uma distribuição de probabilidade?",
    "options": {
      "A": "Função Softmax",
      "B": "Função Degrau (Step Function)",
      "C": "Função Tangente Hiperbólica (Tanh)",
      "D": "Função ReLU",
      "E": "Identidade"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A Sigmoid (Logística) é para sim ou não. Se você tem 3 classes (Cachorro, Gato, Papagaio), a Softmax pega os 'scores' brutos do modelo e transforma em algo como: 0.70 (Cachorro), 0.20 (Gato) e 0.10 (Papagaio). A soma dá sempre 100% (1.0).",
      "puloDoGato": "A Softmax 'achata' os valores menores e 'exagera' o maior, ajudando o modelo a tomar uma decisão mais clara pela classe vencedora.",
      "cascasDeBanana": {
        "B": "Incorreta. Usada no Perceptron primitivo.",
        "C": "Incorreta. Função de ativação comum em redes neurais, varia de -1 a 1.",
        "A": "Correta. Padrão ouro para classificação multiclase.",
        "D": "Incorreta. Usada em redes profundas para evitar desvanecimento do gradiente.",
        "E": "Incorreta. Não altera o valor, usada apenas em regressão linear pura."
      },
      "dicaDeOuro": "Multiclase + Probabilidade = Softmax."
    }
  },
  {
    "id": "q_ds_100",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Métricas - Log-Loss (Entropia Cruzada)",
    "difficulty": "Difícil",
    "statement": "Ao treinar um classificador probabilístico, a métrica de erro 'Log-Loss' é frequentemente utilizada. Qual é a principal característica da Log-Loss em relação à confiança das predições do modelo?",
    "options": {
      "A": "Ela só pode ser calculada se o modelo for uma Árvore de Decisão.",
      "B": "Ela beneficia modelos que chutam sempre 50% de probabilidade em todas as classes.",
      "C": "Ela é sempre igual à acurácia do modelo.",
      "D": "Ela penaliza apenas se o modelo errar a classe, ignorando a probabilidade atribuída.",
      "E": "Ela penaliza pesadamente predições que estão 'muito confiantes e erradas' (ex: prever 99% de chance para a classe 1, quando a classe real era 0)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Log-loss não quer apenas que você acerte, ela quer que você seja honesto. Se você diz 'Tenho 100% de certeza que é A' e na verdade é B, sua Log-Loss vai para o infinito (erro gigante). É a métrica que força o modelo a calibrar bem suas probabilidades.",
      "puloDoGato": "Quanto menor a Log-Loss, melhor. Um modelo com Log-Loss 0.0 é o modelo perfeito que previu 1.0 para todas as classes corretas.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria o erro de classificação simples (0 ou 1).",
        "E": "Correta. A penalidade é logarítmica, cresce rápido conforme o modelo erra com confiança.",
        "C": "Incorreta. São conceitos matemáticos distintos.",
        "B": "Incorreta. Chutar 50% em tudo gera uma Log-Loss alta (~0.69 para binário).",
        "A": "Incorreta. Pode ser usada em qualquer modelo que retorne probabilidades (Reg. Logística, Redes Neurais, etc)."
      },
      "dicaDeOuro": "Log-Loss = O preço de estar errado e convencido."
    }
  },
  {
    "id": "q_ds_101",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Ensembles - Stacking",
    "difficulty": "Médio",
    "statement": "Diferente de Bagging e Boosting, como funciona a técnica de Ensemble chamada 'Stacking'?",
    "options": {
      "A": "Treina vários modelos diferentes (ex: SVM, KNN, RF) e usa um modelo final (Meta-Learner) para decidir o resultado com base nas predições dos primeiros.",
      "B": "Usa vários modelos iguais treinados com fatias diferentes dos dados (Bootstrap).",
      "C": "Reduz o tamanho dos dados usando PCA antes de treinar uma Regressão Linear.",
      "D": "Elimina os modelos que têm performance abaixo da média.",
      "E": "Treina árvores em sequência focando nos erros das anteriores."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Stacking é como montar um time de especialistas. Você pergunta para o Médico (SVM), para o Engenheiro (KNN) e para o Advogado (RF) o que eles acham. Depois, você contrata um Juiz (Meta-Model) que olha para o que cada um falou e toma a decisão final. O Juiz aprende quem costuma acertar mais em quais casos.",
      "puloDoGato": "Stacking geralmente ganha competições de Kaggle, mas é lento e caro de rodar em produção na Petrobras porque você precisa processar vários modelos ao mesmo tempo.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Bagging.",
        "A": "Correta. Camada de modelos -> Predições -> Meta-modelo final.",
        "C": "Incorreta. Isso é pré-processamento, não ensemble.",
        "E": "Incorreta. Isso é Boosting.",
        "D": "Incorreta. Stacking mantém todos e aprende a ponderá-los."
      },
      "dicaDeOuro": "Stacking = Modelos heterogêneos + Um modelo final para julgar todos."
    }
  },
  {
    "id": "q_ds_102",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Métricas - Curva Precision-Recall",
    "difficulty": "Médio",
    "statement": "Quando devemos preferir a análise da Curva Precision-Recall em vez da tradicional Curva ROC-AUC?",
    "options": {
      "A": "Quando há um grande desbalanceamento de classes e estamos interessados apenas na performance da classe minoritária (positiva).",
      "B": "Quando queremos medir a velocidade de inferência do modelo.",
      "C": "Quando o modelo é de Regressão e não de Classificação.",
      "D": "Quando as classes estão perfeitamente balanceadas (50/50).",
      "E": "Sempre, pois ROC-AUC é uma métrica obsoleta."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A curva ROC pode ser enganosa. Se você tem 1 milhão de exemplos e apenas 10 são fraudes, a ROC vai parecer linda (perto de 1.0) só porque o modelo acerta muito os negativos (não-fraude). A Precision-Recall ignora os negativos fáceis e foca na 'briga' de achar os positivos raros. Ela é muito mais honesta para dados difíceis.",
      "puloDoGato": "Lembre-se: ROC usa False Positive Rate (que depende dos negativos). Precision-Recall NÃO olha para os True Negatives.",
      "cascasDeBanana": {
        "D": "Incorreta. Com dados balanceados, ambas as curvas dão visões parecidas.",
        "A": "Correta. Precision-Recall é o padrão ouro para 'imbalanced data'.",
        "C": "Incorreta. Ambas são apenas para classificação.",
        "B": "Incorreta. Nenhuma delas mede tempo de execução.",
        "E": "Incorreta. ROC-AUC ainda é útil para comparar modelos em geral."
      },
      "dicaDeOuro": "Classe rara? Esqueça a ROC, olhe para a Precision-Recall."
    }
  },
  {
    "id": "q_ds_103",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Overfitting - Early Stopping",
    "difficulty": "Fácil",
    "statement": "Em algoritmos iterativos (como Gradient Boosting ou Redes Neurais), o que é a técnica de 'Early Stopping'?",
    "options": {
      "A": "Reduzir o número de variáveis de entrada no meio do processo.",
      "B": "Interromper o treinamento quando o erro no conjunto de VALIDAÇÃO para de diminuir e começa a subir, evitando que o modelo decore os dados de treino.",
      "C": "Desligar o computador para evitar o superaquecimento da GPU.",
      "D": "Parar o treinamento assim que o erro no conjunto de treino chegar a zero.",
      "E": "Aumentar o learning rate para terminar o treino mais rápido."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É como cozinhar um bolo. Se você deixar tempo demais, ele queima. O Early Stopping fica vigiando o 'cheiro' do bolo (erro de validação). No momento em que ele percebe que o modelo parou de aprender e começou a 'queimar' (overfitting), ele puxa a tomada e salva a melhor versão que existia até ali.",
      "puloDoGato": "É uma das formas mais eficientes de regularização em modelos complexos.",
      "cascasDeBanana": {
        "A": "Incorreta. Se o erro de treino chegar a zero, você provavelmente já está em overfitting total.",
        "B": "Correta. O conjunto de validação é o 'juiz' que manda parar o treino.",
        "C": "Incorreta. Piada técnica, não é o conceito.",
        "D": "Incorreta. Mudanças de variáveis são feitas antes do treino.",
        "E": "Incorreta. O Learning Rate costuma diminuir com o tempo, não aumentar."
      },
      "dicaDeOuro": "Erro de validação subiu? Early Stopping parou."
    }
  },
  {
    "id": "q_ds_104",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Validação Cruzada - Time Series Split",
    "difficulty": "Médio",
    "statement": "Por que não devemos usar a Validação Cruzada (K-Fold) tradicional em problemas de séries temporais (ex: previsão do preço do petróleo amanhã)?",
    "options": {
      "A": "Porque o K-Fold só aceita dados de classificação binária.",
      "B": "Porque no futuro não existem dados de treinamento.",
      "C": "Porque o K-Fold mistura o futuro com o passado ao embaralhar os dados, o que causa vazamento de dados (data leakage).",
      "D": "Porque o K-Fold é lento demais para dados temporais.",
      "E": "Porque séries temporais não permitem o uso de Scikit-learn."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No K-Fold comum, você sorteia os dados. Isso significa que você pode acabar usando o preço do petróleo de 2024 para tentar 'prever' o preço de 2021. Na vida real, você não tem o jornal de amanhã. Na série temporal, o tempo tem uma flecha: você só pode treinar com o que veio ANTES e validar com o que veio DEPOIS.",
      "puloDoGato": "Use `TimeSeriesSplit` do Scikit-learn. Ele faz janelas deslizantes (Walk-forward validation).",
      "cascasDeBanana": {
        "D": "Incorreta. A velocidade não é o problema, é a lógica estatística.",
        "C": "Correta. Preservar a ordem cronológica é sagrado em séries temporais.",
        "E": "Incorreta. Scikit-learn tem ferramentas específicas para isso.",
        "A": "Incorreta. K-Fold serve para qualquer tipo de dado independente.",
        "B": "Incorreta. No futuro teremos dados, mas o modelo não pode conhecê-los hoje."
      },
      "dicaDeOuro": "Série temporal? Nunca embaralhe (Shuffle) os dados."
    }
  },
  {
    "id": "q_ds_105",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "SVM - Parâmetro C",
    "difficulty": "Médio",
    "statement": "No algoritmo SVM, o que acontece quando configuramos um valor de 'C' muito grande?",
    "options": {
      "A": "O modelo ignora o Kernel e se torna uma regressão linear simples.",
      "B": "O valor de C não afeta o modelo, apenas a velocidade de convergência.",
      "C": "O modelo se torna mais tolerante a erros, criando uma margem larga.",
      "D": "O modelo tenta classificar todos os exemplos de treino corretamente, criando uma margem estreita (Hard Margin), o que pode levar ao Overfitting.",
      "E": "O tempo de treinamento diminui drasticamente."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O parâmetro 'C' é a multa por erro. Se C é GIGANTE, o modelo tem pavor de errar qualquer ponto no treino e faz uma fronteira toda torta para desviar de cada pontinho (margem estreita). Se C é PEQUENO, o modelo é relaxado: 'Tudo bem errar alguns pontos se a margem geral ficar bem reta e larga'.",
      "puloDoGato": "C Alto = Menos erro no treino, mas risco de Overfitting. C Baixo = Mais estável, margem larga (Soft Margin).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso acontece com C pequeno.",
        "D": "Correta. Define o custo da violação da margem.",
        "A": "Incorreta. O Kernel continua ativo independentemente do C.",
        "E": "Incorreta. Na verdade, C grande costuma demorar MAIS para convergir.",
        "B": "Incorreta. C é o hiperparâmetro mais importante do SVM."
      },
      "dicaDeOuro": "C do SVM é a 'Multa'. Multa alta = Modelo rígido que não aceita erros (Overfitting)."
    }
  },
  {
    "id": "q_ds_106",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Algoritmos - Random Forest (OOB Error)",
    "difficulty": "Médio",
    "statement": "Uma vantagem exclusiva do Random Forest é o 'Out-of-Bag (OOB) Error'. O que essa métrica permite ao Cientista de Dados?",
    "options": {
      "A": "Calcular a correlação entre as árvores da floresta.",
      "B": "Detectar se há valores nulos nos dados de entrada.",
      "C": "Medir a velocidade de processamento de cada árvore na CPU.",
      "D": "Estimar a performance de generalização do modelo sem a necessidade de um conjunto de validação separado.",
      "E": "Aumentar a profundidade da floresta automaticamente."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Como o Random Forest sorteia dados para cada árvore (Bootstrap), sobram sempre uns 36% dos dados que aquela árvore específica nunca viu. O OOB usa esses dados 'sobrantes' para testar a árvore. No final, você tem uma estimativa de erro muito honesta sem precisar 'gastar' seus dados criando um conjunto de validação oficial.",
      "puloDoGato": "É como se o modelo viesse com um 'teste drive' interno embutido.",
      "cascasDeBanana": {
        "D": "Correta. É a definição de avaliação via amostras não selecionadas (out-of-bag).",
        "C": "Incorreta. Performance de hardware não é medida pelo OOB.",
        "A": "Incorreta. OOB foca em erro, não em correlação.",
        "B": "Incorreta. OOB não lida com limpeza de dados.",
        "E": "Incorreta. Profundidade é um hiperparâmetro manual (max_depth)."
      },
      "dicaDeOuro": "OOB no Random Forest = Validação gratuita sem precisar separar dados."
    }
  },
  {
    "id": "q_ds_107",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Regularização - Elastic Net",
    "difficulty": "Fácil",
    "statement": "O que caracteriza a técnica de regularização Elastic Net em modelos lineares?",
    "options": {
      "A": "Funciona apenas para modelos de Deep Learning com muitas camadas.",
      "B": "Combina as penalizações L1 (Lasso) e L2 (Ridge) através de uma soma ponderada.",
      "C": "Ajusta automaticamente a taxa de aprendizado conforme o gradiente desce.",
      "D": "Utiliza apenas a penalização L1 para zerar coeficientes.",
      "E": "Substitui a função de custo tradicional por uma função exponencial."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Elastic Net é o 'em cima do muro'. Ele não consegue decidir se quer ser Lasso ou Ridge, então ele usa os dois. Ele é ótimo quando você tem várias variáveis correlacionadas; o Lasso sozinho escolheria uma e descartaria o resto, o Elastic Net consegue manter grupos de variáveis importantes juntas.",
      "puloDoGato": "Você controla o equilíbrio entre L1 e L2 pelo parâmetro `l1_ratio` no Scikit-learn.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é o Lasso puro.",
        "B": "Correta. É o híbrido L1 + L2.",
        "C": "Incorreta. Isso descreve otimizadores como Adam ou Adagrad.",
        "D": "Incorreta. É um modelo linear clássico.",
        "E": "Incorreta. A função de custo continua sendo o erro quadrático, apenas com penalidades somadas."
      },
      "dicaDeOuro": "Elastic Net = Lasso + Ridge no mesmo pacote."
    }
  },
  {
    "id": "q_ds_108",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Ensemble - Hard vs Soft Voting",
    "difficulty": "Médio",
    "statement": "Ao utilizar um 'Voting Classifier' no Scikit-learn, qual é a diferença fundamental entre 'Hard Voting' e 'Soft Voting'?",
    "options": {
      "A": "Soft Voting é mais rápido de computar que o Hard Voting.",
      "B": "Não há diferença, são apenas nomes diferentes para a mesma lógica.",
      "C": "Hard Voting usa regressão e Soft Voting usa classificação.",
      "D": "Hard Voting exige que todos os modelos sejam iguais.",
      "E": "Hard Voting escolhe a classe com base na maioria dos votos simples; Soft Voting escolhe a classe com base na média das probabilidades (predict_proba) atribuídas por cada modelo."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Hard Voting é democracia pura: 2 modelos disseram 'Sim', 1 disse 'Não', a resposta é 'Sim'. Soft Voting leva em conta a confiança: Se o modelo 1 disse 'Sim' com 99% de certeza, ele deve valer mais do que o modelo 2 que disse 'Não' com apenas 51% de certeza.",
      "puloDoGato": "Para usar Soft Voting, todos os seus modelos precisam suportar o método `predict_proba()`.",
      "cascasDeBanana": {
        "C": "Incorreta. Ambos são para classificação.",
        "E": "Correta. Maioria simples vs Média de Probabilidades.",
        "A": "Incorreta. O custo computacional é quase o mesmo.",
        "D": "Incorreta. Voting costuma ser usado com modelos diferentes (Heterogêneo).",
        "B": "Incorreta. A lógica de decisão muda completamente o resultado final."
      },
      "dicaDeOuro": "Soft Voting = Voto com peso baseado na confiança (probabilidade)."
    }
  },
  {
    "id": "q_ds_109",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Otimização de Hiperparâmetros - Grid Search vs Random Search",
    "difficulty": "Médio",
    "statement": "Qual é a principal vantagem do 'Randomized Search' sobre o 'Grid Search' ao otimizar hiperparâmetros de um modelo complexo?",
    "options": {
      "A": "O Grid Search é melhor para quando temos muitas variáveis (alta dimensionalidade).",
      "B": "O Randomized Search só funciona para Random Forests.",
      "C": "O Randomized Search garante que encontrará o melhor valor global possível.",
      "D": "O Randomized Search é mais eficiente em termos de tempo e recursos, pois não testa todas as combinações possíveis, focando em uma amostragem aleatória que costuma encontrar resultados ótimos mais rápido.",
      "E": "O Grid Search utiliza inteligência artificial para escolher os próximos valores."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Grid Search é teimoso: se você der 10 valores para 3 parâmetros, ele vai rodar 10x10x10 = 1.000 vezes. Se o seu modelo demora 1 hora para treinar, você vai esperar 1.000 horas. O Random Search sorteia, por exemplo, apenas 50 combinações. Na prática, ele acha resultados tão bons quanto o Grid Search em uma fração do tempo.",
      "puloDoGato": "O Random Search é muito superior quando alguns hiperparâmetros são muito mais importantes que outros (o que acontece quase sempre).",
      "cascasDeBanana": {
        "C": "Incorreta. Nenhuma busca garante o ótimo global se o espaço for grande.",
        "D": "Correta. Eficiência é o nome do jogo aqui.",
        "A": "Incorreta. Grid Search sofre com a 'maldição da dimensionalidade' (o número de testes explode).",
        "B": "Incorreta. Funciona para qualquer modelo.",
        "E": "Incorreta. Quem usa IA/Estatística para escolher os próximos valores é a Otimização Bayesiana."
      },
      "dicaDeOuro": "Muitos parâmetros e pouco tempo? Vá de Random Search."
    }
  },
  {
    "id": "q_ds_110",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Supervisionado",
    "topic": "Tratamento de Dados - Escalonamento (Scaling)",
    "difficulty": "Fácil",
    "statement": "Algoritmos baseados em distâncias (como K-NN e SVM) ou em descida do gradiente (Regressão Linear/Logística) são extremamente sensíveis à escala dos dados. Por que as Árvores de Decisão e o Random Forest são considerados 'invariantes à escala'?",
    "options": {
      "A": "Porque eles são modelos de aprendizado não supervisionado.",
      "B": "Porque a decisão de quebra (split) em um nó da árvore é baseada apenas na ordem relativa dos valores de uma única variável por vez, e não em distâncias entre pontos.",
      "C": "Porque eles normalizam os dados automaticamente para o intervalo [0,1] antes do treino.",
      "D": "Porque eles convertem todos os números em texto internamente.",
      "E": "Porque eles utilizam o Kernel RBF por padrão."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Se você tem uma variável de 'Salário' (0 a 20.000) e outra de 'Idade' (0 a 100), o KNN vai achar que o salário é mil vezes mais importante. Já a Árvore de Decisão só olha uma variável por vez. Ela pergunta: 'Salário > 5000?'. Se você multiplicar o salário por um milhão, ela só vai perguntar 'Salário > 5.000.000.000?'. O resultado da quebra é o mesmo.",
      "puloDoGato": "Isso economiza muito tempo de pré-processamento. Com Random Forest, você não precisa se preocupar com `StandardScaler` ou `MinMaxScaler`.",
      "cascasDeBanana": {
        "A": "Incorreta. Eles continuam trabalhando com números.",
        "B": "Correta. A natureza do 'split' baseada em limiares torna a escala irrelevante.",
        "C": "Incorreta. Árvores não usam Kernels.",
        "D": "Incorreta. São modelos supervisionados clássicos.",
        "E": "Incorreta. Eles não fazem normalização interna, eles simplesmente não precisam dela."
      },
      "dicaDeOuro": "Vai usar Árvore ou Random Forest? Pode pular o Scaling."
    }
  },
  {
    "id": "q_ds_111",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Redução de Dimensionalidade - PCA",
    "difficulty": "Médio",
    "statement": "Ao aplicar o PCA (Principal Component Analysis) em um conjunto de dados com 50 variáveis, como o Cientista de Dados deve decidir o número ideal de componentes principais a serem mantidos para uma análise eficiente?",
    "options": {
      "A": "Manter todos os 50 componentes para não perder nenhuma informação.",
      "B": "Analisar a Razão de Variância Explicada (Explained Variance Ratio) acumulada e escolher o número de componentes que capturem uma porcentagem satisfatória (ex: 90% ou 95%) da variância total.",
      "C": "Manter sempre apenas 2 componentes para facilitar a plotagem do gráfico.",
      "D": "Escolher os componentes com os menores autovalores (eigenvalues).",
      "E": "O PCA não reduz dimensões, ele apenas muda a cor dos dados."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O PCA é como resumir um livro de 50 capítulos. Você quer os capítulos que contam a maior parte da história. A 'Variância Explicada' diz o quanto de 'informação' cada componente carrega. Geralmente, os primeiros 3 ou 4 componentes já explicam quase tudo o que importa, permitindo que você ignore o resto sem perder a essência.",
      "puloDoGato": "Use o 'Scree Plot' (Gráfico de Cotovelo). Onde a curva de variância explicada parar de subir rápido e ficar 'plana', é ali que você deve cortar.",
      "cascasDeBanana": {
        "C": "Incorreta. 2 componentes são bons para ver, mas podem perder informação crucial de negócio.",
        "A": "Incorreta. Se manter todos, você não reduziu a dimensionalidade e continua com o problema da 'Maldição da Dimensionalidade'.",
        "B": "Correta. É o critério técnico padrão baseado em autovalores.",
        "D": "Incorreta. Devemos escolher os MAIORES autovalores, pois eles representam a maior variância.",
        "E": "Incorreta. PCA é uma técnica matemática de álgebra linear para redução de dimensões."
      },
      "dicaDeOuro": "PCA = Escolher componentes com os maiores autovalores (mais variância)."
    }
  },
  {
    "id": "q_ds_112",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Agrupamento - K-Means (Inércia)",
    "difficulty": "Médio",
    "statement": "No algoritmo K-Means, o 'Método do Cotovelo' (Elbow Method) é utilizado para encontrar o número ideal de clusters (K). O que exatamente esse gráfico mapeia nos eixos X e Y?",
    "options": {
      "A": "X: K-vizinhos; Y: Erro quadrático médio.",
      "B": "X: Número de Clusters; Y: Acurácia do modelo.",
      "C": "X: Tempo de treinamento; Y: Número de iterações.",
      "D": "X: Número de variáveis; Y: Distância de Manhattan.",
      "E": "X: Número de Clusters; Y: Inércia (Soma dos Quadrados Intra-Cluster - WCSS)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Inércia mede o quão 'espremidos' os pontos estão dentro de cada grupo. Se você tem 1 milhão de grupos para 1 milhão de pontos, a inércia é zero (perfeito, mas inútil). O método do cotovelo procura o ponto onde adicionar mais um grupo para de ajudar muito a diminuir essa distância interna.",
      "puloDoGato": "O 'Cotovelo' é o ponto de rendimento decrescente. A partir dali, você está apenas criando grupos pequenos demais sem ganho real de separação.",
      "cascasDeBanana": {
        "B": "Incorreta. K-Means é não supervisionado, não tem 'acurácia' pois não tem labels.",
        "C": "Incorreta. O gráfico não foca em tempo, mas em qualidade de agrupamento.",
        "E": "Correta. Inércia (WCSS) decrescente em função do aumento de K.",
        "D": "Incorreta. Distância de Manhattan é uma métrica, mas não é o que define o gráfico do cotovelo tradicional (que usa Euclidiana).",
        "A": "Incorreta. Confusão com K-NN ou regressão."
      },
      "dicaDeOuro": "Elbow Method = Achar o K onde a Inércia para de cair drasticamente."
    }
  },
  {
    "id": "q_ds_113",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Redes Neurais - Backpropagation",
    "difficulty": "Médio",
    "statement": "O algoritmo de Backpropagation é o motor do treinamento de Redes Neurais profundas. Qual é a sua função técnica fundamental durante o processo de otimização?",
    "options": {
      "A": "Sortear os pesos iniciais da rede de forma aleatória.",
      "B": "Normalizar as imagens de entrada para que tenham média zero.",
      "C": "Calcular as saídas da rede camada por camada do início ao fim.",
      "D": "Calcular o gradiente da função de perda em relação a cada peso da rede, utilizando a regra da cadeia, para que os pesos possam ser atualizados.",
      "E": "Escolher automaticamente o número de neurônios em cada camada oculta."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A rede faz uma previsão (Forward) e erra. O Backpropagation é o 'dedo-duro': ele volta do fim para o começo da rede avisando cada neurônio o quanto ele foi culpado por aquele erro. Ele usa o cálculo (derivadas e regra da cadeia) para dizer: 'Ei, peso X, diminua um pouco para a gente errar menos na próxima'.",
      "puloDoGato": "Sem Backpropagation, não haveria Deep Learning. É ele quem permite que o algoritmo de Descida do Gradiente saiba para onde empurrar os pesos.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é o Forward Propagation.",
        "B": "Incorreta. Isso é pré-processamento de dados.",
        "D": "Correta. Uso da regra da cadeia para distribuir o gradiente do erro.",
        "A": "Incorreta. Isso é a Inicialização de Pesos.",
        "E": "Incorreta. O número de neurônios é um hiperparâmetro definido pelo arquiteto da rede."
      },
      "dicaDeOuro": "Backpropagation = Culpar os neurônios pelo erro usando Regra da Cadeia."
    }
  },
  {
    "id": "q_ds_114",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Regras de Associação - Lift",
    "difficulty": "Difícil",
    "statement": "Na mineração de regras de associação (como o algoritmo Apriori), o que um valor de 'Lift' superior a 1.0 indica sobre a relação entre dois itens A e B?",
    "options": {
      "A": "Indica que a compra do item A diminui a probabilidade de compra do item B.",
      "B": "Indica que o item A é mais caro que o item B.",
      "C": "Indica que existe uma associação positiva; ou seja, a presença do item A aumenta a probabilidade de o item B também estar presente na cesta, além do que seria esperado pelo acaso.",
      "D": "Indica que os itens A e B são comprados de forma totalmente independente.",
      "E": "Indica que a regra de associação é inválida e deve ser descartada."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se as pessoas compram pão e leite, pode ser só coincidência porque todo mundo compra pão. O Lift limpa essa coincidência. Lift = 1 significa que é puro acaso. Lift > 1 significa que existe um 'imã' entre os produtos. Quem leva cerveja tem mais chance de levar carvão do que uma pessoa aleatória da loja.",
      "puloDoGato": "Lift < 1 indica que os produtos são 'substitutos' (quem compra Coca-Cola dificilmente compra Pepsi na mesma nota).",
      "cascasDeBanana": {
        "A": "Incorreta. Independência é Lift = 1.",
        "B": "Incorreta. Isso seria associação negativa (Lift < 1).",
        "C": "Correta. Mede o ganho de informação da regra.",
        "D": "Incorreta. Pelo contrário, Lift alto indica as melhores regras.",
        "E": "Incorreta. O algoritmo não olha para preços, apenas para frequências de transação."
      },
      "dicaDeOuro": "Lift > 1 = Produtos 'amigos' (tendem a aparecer juntos)."
    }
  },
  {
    "id": "q_ds_115",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Redes Neurais Convolucionais (CNN) - Pooling",
    "difficulty": "Médio",
    "statement": "Em arquiteturas de Visão Computacional (CNNs), qual é a finalidade principal das camadas de 'Pooling' (como o Max Pooling)?",
    "options": {
      "A": "Trocar a cor das imagens de RGB para escala de cinza.",
      "B": "Multiplicar os pesos da rede para acelerar a convergência.",
      "C": "Reduzir a dimensão espacial das representações (mapas de características), diminuindo o número de parâmetros e tornando o modelo mais invariante a pequenas transições na imagem.",
      "D": "Funcionar como uma função de ativação não-linear como a ReLU.",
      "E": "Aumentar a resolução da imagem para que o modelo veja mais detalhes."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Imagine que você está vendo uma foto de um rosto. O Max Pooling olha para um quadrado de 2x2 pixels e diz: 'Qual é o pixel mais forte aqui?'. Ele joga os outros 3 fora. Isso resume a imagem, deixando ela menor e focada apenas nas características mais marcantes. Ajuda a rede a não se perder com ruídos.",
      "puloDoGato": "O Pooling ajuda na 'Invariância de Translação': se o nariz da pessoa estiver 2 pixels para o lado, o Max Pooling ainda vai captar a característica do nariz no mesmo lugar do mapa resumido.",
      "cascasDeBanana": {
        "E": "Incorreta. O pooling sempre DIMINUI a resolução.",
        "C": "Correta. Downsampling e redução de custo computacional.",
        "A": "Incorreta. Camadas de rede neural não alteram o espaço de cor original.",
        "D": "Incorreta. Pooling é uma operação fixa de agregação, não uma ativação de neurônio.",
        "B": "Incorreta. Pooling não tem pesos treináveis (geralmente)."
      },
      "dicaDeOuro": "Pooling = Resumir a imagem para economizar processamento."
    }
  },
  {
    "id": "q_ds_116",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Redes Neurais Recorrentes (RNN) - LSTM",
    "difficulty": "Difícil",
    "statement": "As redes neurais recorrentes (RNN) tradicionais sofrem do problema do 'Vanishing Gradient' (Gradiente Desvanecente) ao lidar com sequências longas. Como a arquitetura LSTM (Long Short-Term Memory) resolve tecnicamente esse problema?",
    "options": {
      "A": "Removendo a função de ativação para que o gradiente seja sempre 1.0.",
      "B": "Utilizando camadas de convolução 1D em vez de neurônios recorrentes.",
      "C": "Aumentando o número de neurônios em cada camada para compensar a perda de gradiente.",
      "D": "Através da introdução de 'Gates' (portões) e de uma 'Cell State' (estado de célula) que permite que a informação flua por longos períodos sem ser drasticamente multiplicada ou reduzida.",
      "E": "Processando todos os textos de trás para frente simultaneamente."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Numa RNN comum, o sinal da primeira palavra de uma frase morre até chegar na décima (o gradiente vira zero). A LSTM tem uma 'esteira rolante' (Cell State) protegida por portões. O portão de esquecimento (Forget Gate) decide o que jogar fora, e o portão de entrada decide o que guardar. Isso mantém a memória viva por muito tempo.",
      "puloDoGato": "Memorize os 3 portões da LSTM: Forget, Input e Output. Eles são a chave para processar textos e séries temporais longas.",
      "cascasDeBanana": {
        "B": "Incorreta. Convoluções 1D são outra técnica (TCN), não definem o funcionamento da LSTM.",
        "D": "Correta. Arquitetura de portões para controle de fluxo de informação.",
        "C": "Incorreta. Mais neurônios na verdade pioram o problema do gradiente.",
        "A": "Incorreta. Sem ativação, a rede seria apenas uma multiplicação linear gigante e burra.",
        "E": "Incorreta. Isso seria uma RNN Bidirecional, que também sofre de gradiente se não for LSTM/GRU."
      },
      "dicaDeOuro": "LSTM = Portões (Gates) que protegem a memória de longo prazo."
    }
  },
  {
    "id": "q_ds_117",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Transformers - Self-Attention",
    "difficulty": "Médio",
    "statement": "O mecanismo de 'Self-Attention' (Auto-Atenção) é a inovação central da arquitetura Transformer. Qual é o seu papel principal no processamento de linguagem natural (NLP)?",
    "options": {
      "A": "Permitir que cada palavra em uma frase 'olhe' para todas as outras palavras simultaneamente para entender o contexto e o relacionamento entre elas.",
      "B": "Gerar imagens a partir de descrições textuais.",
      "C": "Contar a frequência com que cada palavra aparece no texto.",
      "D": "Traduzir palavras de um idioma para outro usando um dicionário embutido.",
      "E": "Comprimir o texto para que ele ocupe menos espaço no disco."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Numa frase como 'O banco estava fechado porque o gerente saiu do banco', a palavra 'banco' aparece duas vezes. O Self-Attention permite que a rede entenda que o primeiro 'banco' tem relação com 'fechado' (lugar físico) e o segundo também. Ele cria conexões de importância entre todas as palavras de uma vez, sem precisar ler uma por uma em ordem.",
      "puloDoGato": "É por isso que Transformers são paralelos e muito mais rápidos que RNNs: eles não precisam esperar o final da frase para entender o começo.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é o resultado final (tradução), não o mecanismo técnico interno.",
        "A": "Correta. Contextualização global de tokens.",
        "C": "Incorreta. Isso é TF-IDF ou Bag-of-Words.",
        "B": "Incorreta. Embora Transformers sejam usados em visão (ViT), o self-attention original foca em sequências.",
        "E": "Incorreta. Não tem relação com compressão de arquivos."
      },
      "dicaDeOuro": "Self-Attention = Todas as palavras conversando entre si para entender o contexto."
    }
  },
  {
    "id": "q_ds_118",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "RAG (Retrieval-Augmented Generation)",
    "difficulty": "Fácil",
    "statement": "Em sistemas corporativos, como os que a Petrobras pode implementar, a técnica de RAG (Retrieval-Augmented Generation) é usada para:",
    "options": {
      "A": "Treinar um modelo do zero usando apenas dados públicos da internet.",
      "B": "Criptografar as conversas do chat para evitar vazamentos.",
      "C": "Combinar o poder de geração de um LLM com a recuperação de informações atualizadas de uma base de dados externa (como documentos internos), reduzindo alucinações.",
      "D": "Substituir todos os funcionários humanos por bots de atendimento.",
      "E": "Acelerar a velocidade de digitação do usuário."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Um LLM (como o GPT) é como um gênio que leu tudo até 2023, mas não conhece os relatórios da Petrobras de ontem. O RAG é como dar um Google nesses relatórios e entregar o texto para o gênio ler antes de ele te responder. O gênio usa o conhecimento dele para escrever bem, mas usa os dados do relatório para não mentir.",
      "puloDoGato": "RAG é muito mais barato e rápido do que fazer Fine-tuning do modelo todo dia.",
      "cascasDeBanana": {
        "A": "Incorreta. RAG usa modelos já pré-treinados.",
        "C": "Correta. Recuperação de documentos + Geração de texto.",
        "E": "Incorreta. Não tem relação com interface de digitação.",
        "B": "Incorreta. Segurança é importante, mas não é a definição de RAG.",
        "D": "Incorreta. RAG é uma ferramenta de suporte à decisão e produtividade."
      },
      "dicaDeOuro": "RAG = LLM com uma biblioteca de consulta ao lado para não alucinar."
    }
  },
  {
    "id": "q_ds_119",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Agrupamento Hierárquico - Dendrogramas",
    "difficulty": "Fácil",
    "statement": "Qual é a ferramenta visual padrão utilizada para representar os resultados de um Agrupamento Hierárquico e decidir onde 'cortar' para definir o número de clusters?",
    "options": {
      "A": "Dendrograma.",
      "B": "Gráfico de Dispersão (Scatter Plot).",
      "C": "Histograma de Frequências.",
      "D": "Gráfico de Velas (Candlestick).",
      "E": "Matriz de Confusão."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Dendrograma parece uma árvore genealógica ou as raízes de uma planta. Ele mostra como os pontos foram se unindo passo a passo. Se você passar uma linha horizontal no alto da 'árvore', terá poucos grupos grandes. Se cortar mais embaixo, terá muitos grupos pequenos.",
      "puloDoGato": "No agrupamento 'Bottom-up' (Aglomerativo), cada ponto começa como seu próprio cluster e vai se unindo aos vizinhos até sobrar apenas um grupo gigante.",
      "cascasDeBanana": {
        "B": "Incorreta. Útil para ver os dados, mas não define a hierarquia.",
        "E": "Incorreta. Usada em classificação supervisionada.",
        "A": "Correta. Visualização de árvore de agrupamento.",
        "C": "Incorreta. Mostra distribuição de uma variável.",
        "D": "Incorreta. Usado em análise de mercado financeiro."
      },
      "dicaDeOuro": "Cluster Hierárquico = Dendrograma."
    }
  },
  {
    "id": "q_ds_120",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Regularização - Dropout",
    "difficulty": "Médio",
    "statement": "A técnica de 'Dropout' é amplamente utilizada no treinamento de redes neurais profundas. Qual é o seu efeito prático?",
    "options": {
      "A": "Desligar aleatoriamente uma porcentagem dos neurônios durante cada iteração do treinamento para evitar que a rede dependa demais de neurônios específicos (co-adaptação).",
      "B": "Aumentar a velocidade de processamento da GPU.",
      "C": "Excluir os dados que possuem valores nulos automaticamente.",
      "D": "Multiplicar o erro por zero para estabilizar a rede.",
      "E": "Transformar a rede neural em uma árvore de decisão."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine um time de futebol onde o craque faz tudo. Se ele se machuca, o time perde. O Dropout é o técnico que obriga o craque a ficar no banco em alguns treinos para que os outros jogadores aprendam a jogar sozinhos. No final, o time todo fica forte e resiliente. Na rede neural, isso evita o Overfitting.",
      "puloDoGato": "Importante: O Dropout só é usado durante o TREINAMENTO. Na hora de usar o modelo (Inferência), todos os neurônios ficam ligados.",
      "cascasDeBanana": {
        "B": "Incorreta. Na verdade, pode até demorar um pouco mais para convergir.",
        "A": "Correta. Combate a co-adaptação e o Overfitting.",
        "C": "Incorreta. Limpeza de dados é feita no pré-processamento.",
        "E": "Incorreta. Não altera a arquitetura básica da rede.",
        "D": "Incorreta. O gradiente não é multiplicado por zero de forma fixa."
      },
      "dicaDeOuro": "Dropout = Desligar neurônios temporariamente para forçar o aprendizado geral."
    }
  },
  {
    "id": "q_ds_121",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Word2Vec - Skip-gram vs CBOW",
    "difficulty": "Médio",
    "statement": "Dentro do algoritmo Word2Vec, qual é a diferença de objetivo entre as arquiteturas CBOW (Continuous Bag of Words) e Skip-gram?",
    "options": {
      "A": "Skip-gram ignora a ordem das palavras, enquanto CBOW a mantém rigidamente.",
      "B": "CBOW é mais lento e preciso que o Skip-gram em todos os casos.",
      "C": "CBOW tenta prever uma palavra central a partir das palavras vizinhas (contexto), enquanto Skip-gram tenta prever as palavras vizinhas a partir de uma única palavra central.",
      "D": "CBOW é para imagens e Skip-gram é para áudio.",
      "E": "Ambos foram substituídos por tabelas de frequência simples."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "CBOW: 'O [?] está latindo'. Você olha para o contexto e chuta 'Cachorro'. Skip-gram: 'Cachorro'. Você chuta o contexto: '[O] [está latindo]'. O Skip-gram é melhor para palavras raras e datasets grandes, enquanto o CBOW é mais rápido de treinar.",
      "puloDoGato": "Lembre-se: CBOW foca no centro (Many-to-One). Skip-gram foca nos vizinhos (One-to-Many).",
      "cascasDeBanana": {
        "D": "Incorreta. Ambos são exclusivamente para texto (NLP).",
        "C": "Correta. Define as duas estratégias de treinamento do Word2Vec.",
        "B": "Incorreta. Depende muito do tamanho do corpus e da tarefa.",
        "A": "Incorreta. Ambos usam janelas de contexto, mas de formas inversas.",
        "E": "Incorreta. São a base das representações vetoriais modernas."
      },
      "dicaDeOuro": "Skip-gram = Parte da palavra para o contexto. CBOW = Parte do contexto para a palavra."
    }
  },
  {
    "id": "q_ds_122",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Batch Normalization",
    "difficulty": "Difícil",
    "statement": "Qual é o principal benefício técnico de se utilizar camadas de 'Batch Normalization' entre as camadas ocultas de uma rede neural profunda?",
    "options": {
      "A": "Reduzir o tamanho da rede para caber em dispositivos móveis.",
      "B": "Garantir que os pesos nunca sejam negativos.",
      "C": "Substituir o algoritmo de backpropagation por uma solução linear.",
      "D": "Eliminar a necessidade de usar funções de ativação.",
      "E": "Estabilizar o aprendizado e acelerar a convergência ao normalizar as entradas de cada camada para terem média zero e variância unitária dentro de cada lote (batch)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Conforme os pesos mudam no treino, as saídas de uma camada podem ficar gigantes ou minúsculas, bagunçando a próxima camada (Internal Covariate Shift). O Batch Norm é como um 'ajustador de volume': ele mantém o sinal sempre num nível saudável, o que permite usar Learning Rates maiores e treinar redes muito mais rápido.",
      "puloDoGato": "Dica de prova: Batch Norm também tem um leve efeito de regularização, agindo um pouco como o Dropout.",
      "cascasDeBanana": {
        "D": "Incorreta. Ativações são essenciais para a não-linearidade.",
        "E": "Correta. Estabilização interna do fluxo de dados (Internal Covariate Shift).",
        "B": "Incorreta. Pesos podem e devem ser negativos em muitos casos.",
        "A": "Incorreta. Não reduz o número de neurônios, apenas altera seus valores.",
        "C": "Incorreta. O Backpropagation continua sendo usado para treinar os parâmetros do próprio Batch Norm."
      },
      "dicaDeOuro": "Batch Norm = Manter os dados de cada camada 'comportados' (média 0, variância 1)."
    }
  },
  {
    "id": "q_ds_123",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Agrupamento - DBSCAN",
    "difficulty": "Médio",
    "statement": "Diferente do K-Means, o algoritmo DBSCAN (Density-Based Spatial Clustering of Applications with Noise) possui qual vantagem principal?",
    "options": {
      "A": "Ele é capaz de encontrar clusters de formatos arbitrários (não apenas circulares/esféricos) e identificar automaticamente pontos de ruído (outliers) que não pertencem a nenhum grupo.",
      "B": "Ele é muito mais rápido que o K-Means para bilhões de pontos.",
      "C": "Ele só funciona para dados binários.",
      "D": "Ele utiliza o Teorema de Bayes para agrupar os dados.",
      "E": "Ele exige que você defina o número de clusters (K) antes de começar."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O K-Means tenta criar 'bolas' ao redor dos centroides. Se seus dados tiverem formato de 'lua' ou 'U', o K-Means vai cortar eles no meio. O DBSCAN funciona como um contágio: ele vai unindo pontos que estão perto (densos). Se um ponto está isolado no meio do nada, o DBSCAN diz: 'Isso é lixo (ruído)', enquanto o K-Means seria obrigado a colocar ele em algum grupo.",
      "puloDoGato": "DBSCAN não pede o número de clusters. Você define a distância máxima (`eps`) e o mínimo de pontos (`min_samples`).",
      "cascasDeBanana": {
        "E": "Incorreta. Essa é justamente a fraqueza do K-Means que o DBSCAN resolve.",
        "A": "Correta. Flexibilidade de formato e detecção de outliers.",
        "B": "Incorreta. K-Means costuma ser computacionalmente mais leve e escalável.",
        "C": "Incorreta. Funciona com dados contínuos.",
        "D": "Incorreta. É um algoritmo baseado em densidade geométrica, não em probabilidade bayesiana."
      },
      "dicaDeOuro": "Clusters estranhos ou muitos outliers? Use DBSCAN."
    }
  },
  {
    "id": "q_ds_124",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "LLMs - Prompt Engineering (Few-shot)",
    "difficulty": "Fácil",
    "statement": "Ao interagir com um Large Language Model (LLM), o que caracteriza a técnica de 'Few-shot Prompting'?",
    "options": {
      "A": "Fornecer alguns exemplos (demonstrações) de pares de entrada e saída dentro do prompt para 'ensinar' o modelo a seguir um padrão específico antes de fazer a pergunta final.",
      "B": "Treinar o modelo novamente usando GPUs da Petrobras.",
      "C": "Apagar o histórico da conversa a cada nova interação.",
      "D": "Limitar a resposta do modelo a apenas poucas palavras (few words).",
      "E": "Fazer uma pergunta direta sem dar nenhum exemplo de resposta esperada."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Zero-shot: 'Traduza para Inglês: Casa'. Few-shot: 'Gato -> Cat; Cachorro -> Dog; Casa -> [?]'. Você deu exemplos para o modelo entender o estilo que você quer. É uma forma poderosa de 'programar' o modelo sem alterar seus pesos internos.",
      "puloDoGato": "O 'Few-shot' acontece totalmente dentro do contexto (In-context learning), sem retreinamento.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é o Zero-shot prompting.",
        "A": "Correta. Uso de exemplos para guiar o comportamento do modelo.",
        "B": "Incorreta. Isso seria fine-tuning ou pré-treino.",
        "D": "Incorreta. 'Shot' aqui refere-se a exemplos, não ao tamanho da resposta.",
        "C": "Incorreta. O histórico (contexto) é o que permite o few-shot funcionar."
      },
      "dicaDeOuro": "Few-shot = Prompt com alguns exemplos para o modelo copiar o padrão."
    }
  },
  {
    "id": "q_ds_125",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Fine-tuning - LoRA (Low-Rank Adaptation)",
    "difficulty": "Difícil",
    "statement": "Técnicas de 'Parameter-Efficient Fine-Tuning' (PEFT), como o LoRA, tornaram-se populares para adaptar LLMs. Qual é a grande vantagem do LoRA em comparação ao fine-tuning completo (Full Fine-tuning)?",
    "options": {
      "A": "O LoRA só funciona para modelos de geração de imagens.",
      "B": "O LoRA aumenta o tamanho do modelo original em 10 vezes.",
      "C": "O LoRA permite que o modelo funcione sem internet.",
      "D": "O LoRA congela os pesos originais do modelo e treina apenas pequenas matrizes adicionais de baixa classificação (low-rank), reduzindo drasticamente o uso de memória VRAM e o tempo de treino.",
      "E": "O LoRA apaga metade da rede neural para torná-la mais rápida."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Treinar um modelo de 70 bilhões de parâmetros exige supercomputadores. O LoRA é um 'puxadinho': você não mexe na estrutura da casa original (congela os pesos), você só constrói dois corredores finos de novos parâmetros. No final, você só precisa salvar esses corredores (megabytes), não o modelo inteiro (gigabytes).",
      "puloDoGato": "LoRA permite que você faça o ajuste fino de modelos gigantes usando apenas uma GPU de consumo médio.",
      "cascasDeBanana": {
        "E": "Incorreta. Não há deleção de neurônios.",
        "D": "Correta. Eficiência extrema ao treinar apenas matrizes de decomposição.",
        "C": "Incorreta. Não tem relação direta com conectividade.",
        "B": "Incorreta. Pelo contrário, os arquivos gerados (adapters) são minúsculos.",
        "A": "Incorreta. Funciona para qualquer arquitetura Transformer (Texto, Áudio, Imagem)."
      },
      "dicaDeOuro": "LoRA = Fine-tuning barato e leve (treina só o 'puxadinho')."
    }
  },
  {
    "id": "q_ds_126",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Funções de Ativação - Leaky ReLU",
    "difficulty": "Médio",
    "statement": "Qual é a vantagem da função de ativação 'Leaky ReLU' em relação à ReLU (Rectified Linear Unit) tradicional?",
    "options": {
      "A": "A Leaky ReLU só pode ser usada na última camada da rede.",
      "B": "A Leaky ReLU é mais rápida de calcular que a ReLU simples.",
      "C": "A Leaky ReLU apaga automaticamente neurônios irrelevantes.",
      "D": "A Leaky ReLU evita o problema do 'Dying ReLU' (neurônios mortos) ao permitir uma pequena inclinação negativa para valores menores que zero, garantindo que o gradiente nunca seja nulo nessa região.",
      "E": "A Leaky ReLU limita a saída entre 0 e 1, como a Sigmoid."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A ReLU normal diz: 'Se for negativo, vira zero'. O problema é que se um neurônio fica preso no negativo, o gradiente dele vira zero e ele 'morre' (nunca mais aprende). A Leaky ReLU é generosa: 'Se for negativo, eu deixo passar um pouquinho (ex: 0.01x)'. Isso mantém o neurônio 'vivo' para que ele possa se recuperar e voltar a ser útil.",
      "puloDoGato": "Leaky ReLU: `f(x) = x` se x > 0; `f(x) = alpha * x` se x <= 0.",
      "cascasDeBanana": {
        "B": "Incorreta. A diferença de velocidade é insignificante.",
        "D": "Correta. Solução para o problema de saturação em zero.",
        "E": "Incorreta. Ela não tem limite superior (não satura).",
        "A": "Incorreta. É usada principalmente em camadas ocultas.",
        "C": "Incorreta. Quem faz algo parecido é o Dropout, mas por sorteio, não por valor de ativação."
      },
      "dicaDeOuro": "Leaky ReLU = Não deixa os neurônios morrerem no lado negativo."
    }
  },
  {
    "id": "q_ds_127",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Visão Computacional",
    "topic": "Detecção de Objetos - IoU (Intersection over Union)",
    "difficulty": "Médio",
    "statement": "Ao avaliar modelos de detecção de objetos (como YOLO ou SSD), a métrica IoU (Interseção sobre União) é utilizada para:",
    "options": {
      "A": "Verificar se a imagem está embaçada.",
      "B": "Medir o quanto a 'caixa' (Bounding Box) prevista pelo modelo se sobrepõe à 'caixa' real (Ground Truth), avaliando a precisão da localização.",
      "C": "Calcular a cor média dos pixels dentro da caixa.",
      "D": "Contar quantas pessoas aparecem na foto.",
      "E": "Reduzir o tamanho da imagem antes da convolução."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Não basta o modelo dizer 'Tem um carro ali'. Ele precisa desenhar a caixa exatamente em cima do carro. A IoU é uma nota de 0 a 1. Se as caixas estão perfeitamente alinhadas, IoU = 1. Se a caixa que o modelo desenhou está longe do carro real, IoU = 0.",
      "puloDoGato": "Geralmente, consideramos um acerto se a IoU for maior que 0.5 (ou 50% de sobreposição).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria apenas contagem, não precisão de localização.",
        "B": "Correta. Métrica de sobreposição de geometrias.",
        "C": "Incorreta. Não tem relação com processamento de cor.",
        "D": "Incorreta. Isso é redimensionamento ou pooling.",
        "E": "Incorreta. Nitidez não é escopo da métrica IoU."
      },
      "dicaDeOuro": "IoU = Nota para o 'capricho' do modelo ao desenhar o retângulo no lugar certo."
    }
  },
  {
    "id": "q_ds_128",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Modelos de Mistura - GMM (Gaussian Mixture Models)",
    "difficulty": "Difícil",
    "statement": "O algoritmo de Mistura de Gaussianas (GMM) é frequentemente visto como uma versão mais flexível do K-Means. Qual é o algoritmo de otimização utilizado pelo GMM para estimar seus parâmetros (médias, covariâncias e pesos)?",
    "options": {
      "A": "Descida do Gradiente Estocástica (SGD).",
      "B": "Busca Binária.",
      "C": "Backpropagation.",
      "D": "Expectation-Maximization (EM).",
      "E": "Algoritmo Genético."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O GMM assume que seus dados são formados por várias 'nuvens' (distribuições normais/gaussianas) sobrepostas. O algoritmo EM trabalha em dois passos: 1. Expectation: Ele chuta a qual nuvem cada ponto pertence. 2. Maximization: Ele ajusta as nuvens (posição e tamanho) para melhor se encaixarem nos pontos. Ele repete isso até as nuvens pararem de se mexer.",
      "puloDoGato": "Diferença: K-Means é 'Hard Assignment' (um ponto pertence a UM grupo). GMM é 'Soft Assignment' (um ponto pode ser 70% do grupo A e 30% do grupo B).",
      "cascasDeBanana": {
        "A": "Incorreta. SGD é para redes neurais e regressões.",
        "D": "Correta. EM é o padrão para modelos latentes probabilísticos.",
        "C": "Incorreta. Backpropagation usa gradientes, o EM usa estatística direta.",
        "E": "Incorreta. Algoritmos genéticos são para problemas de busca global complexos.",
        "B": "Incorreta. Sem relação com a tarefa."
      },
      "dicaDeOuro": "GMM = Expectation-Maximization (EM)."
    }
  },
  {
    "id": "q_ds_129",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Deep Learning",
    "topic": "Transfer Learning",
    "difficulty": "Fácil",
    "statement": "A técnica de 'Transfer Learning' (Aprendizado por Transferência) consiste em:",
    "options": {
      "A": "Copiar o código de outro desenvolvedor no GitHub.",
      "B": "Treinar um modelo em Python e exportá-lo para Excel.",
      "C": "Trocar o Cientista de Dados responsável pelo projeto.",
      "D": "Mover o banco de dados de um servidor para outro.",
      "E": "Usar um modelo que já foi treinado em um dataset gigante (como o ImageNet) e adaptá-lo para uma tarefa nova e específica (como detectar falhas em dutos da Petrobras), aproveitando o conhecimento prévio da rede."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Você não precisa ensinar uma criança o que é uma 'linha' ou um 'círculo' toda vez que ela vai aprender a desenhar algo novo. No Transfer Learning, a rede já sabe o que são cores, bordas e texturas. Você só 'treina os últimos neurônios' para que ela aprenda a diferença específica entre o que você quer agora. Economiza meses de treino e milhões de reais.",
      "puloDoGato": "Geralmente 'congelamos' as primeiras camadas (que detectam coisas genéricas) e treinamos apenas a 'cabeça' do modelo.",
      "cascasDeBanana": {
        "A": "Incorreta. Transferência de conhecimento técnico de pesos, não de plágio de código.",
        "E": "Correta. Reaproveitamento de 'features' aprendidas.",
        "D": "Incorreta. Isso é migração de infraestrutura.",
        "B": "Incorreta. Isso é exportação de dados.",
        "C": "Incorreta. Piada corporativa."
      },
      "dicaDeOuro": "Transfer Learning = Não reinventar a roda (usar cérebro pronto para tarefa nova)."
    }
  },
  {
    "id": "q_ds_130",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Transformers - Positional Encoding",
    "difficulty": "Difícil",
    "statement": "Como a arquitetura Transformer consegue processar a ordem das palavras em uma frase, dado que ela não processa os dados sequencialmente como as RNNs?",
    "options": {
      "A": "Através do 'Positional Encoding', onde um vetor de informação sobre a posição de cada palavra é somado ao embedding da própria palavra.",
      "B": "Esperando que o usuário digite as frases sempre na mesma ordem.",
      "C": "Usando uma planilha de Excel com os números das linhas.",
      "D": "Ela não processa a ordem, tratando a frase como um conjunto bagunçado de palavras.",
      "E": "Sorteando a ordem das palavras até que a frase faça sentido."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Transformer lê a frase toda de uma vez, como se tirasse uma foto. Sem o Positional Encoding, as frases 'O cachorro mordeu o homem' e 'O homem mordeu o cachorro' seriam idênticas para ele. O Positional Encoding coloca uma 'etiqueta de tempo' em cada palavra, avisando quem veio primeiro e quem veio depois.",
      "puloDoGato": "O segredo matemático são as funções de Seno e Cosseno usadas para criar esses códigos de posição únicos.",
      "cascasDeBanana": {
        "D": "Incorreta. A ordem (sintaxe) é fundamental para o sentido.",
        "A": "Correta. Vetores de posição somados aos embeddings.",
        "C": "Incorreta. Processamento interno de vetores, não de arquivos externos.",
        "B": "Incorreta. O modelo deve lidar com qualquer entrada.",
        "E": "Incorreta. Totalmente ineficiente."
      },
      "dicaDeOuro": "Transformer = Embeddings + Positional Encoding (para saber a ordem)."
    }
  },
  {
    "id": "q_ds_131",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Teorema Central do Limite (TCL)",
    "difficulty": "Médio",
    "statement": "Qual é a principal afirmação do Teorema Central do Limite (TCL), fundamental para a realização de testes de hipóteses na Ciência de Dados?",
    "options": {
      "A": "A variância de uma amostra é sempre o dobro da variância da população.",
      "B": "Conforme o tamanho da amostra aumenta, a distribuição das médias amostrais tende a uma distribuição normal, independentemente da forma da distribuição da população original.",
      "C": "O TCL afirma que correlação implica sempre em causalidade direta.",
      "D": "A média de qualquer população é sempre igual a zero.",
      "E": "Todos os dados da Petrobras seguem obrigatoriamente uma distribuição uniforme."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Não importa se os seus dados originais são uma bagunça (distribuição torta, binária, etc). Se você tirar várias médias de grupos desses dados, essas médias vão desenhar um sino perfeito (Distribuição Normal). Isso permite que a gente use ferramentas estatísticas poderosas que só funcionam em curvas normais.",
      "puloDoGato": "Geralmente consideramos o TCL válido para amostras com tamanho n > 30.",
      "cascasDeBanana": {
        "A": "Incorreta. A média depende dos valores reais, não é fixada em zero.",
        "B": "Correta. É a definição clássica de convergência para a normalidade.",
        "C": "Incorreta. Dados reais podem seguir qualquer distribuição (Poisson, Exponencial, etc).",
        "D": "Incorreta. A variância da média amostral é a variância da população dividida por 'n'.",
        "E": "Incorreta. Correlação nunca implica causalidade por si só."
      },
      "dicaDeOuro": "Muitas médias juntas = Curva Normal (Sino)."
    }
  },
  {
    "id": "q_ds_132",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Testes de Hipóteses - Valor-p (p-value)",
    "difficulty": "Fácil",
    "statement": "Ao realizar um teste de hipótese para validar se uma nova estratégia de perfuração é melhor que a antiga, o Cientista de Dados encontra um p-valor (p-value) de 0.02. Considerando um nível de significância (alfa) de 0.05, qual deve ser a conclusão?",
    "options": {
      "A": "O teste é inconclusivo e deve ser repetido com mais dados.",
      "B": "Concluir que a probabilidade de a hipótese nula ser verdadeira é de exatamente 2%.",
      "C": "Rejeitar a Hipótese Nula (H0), indicando que há evidências estatisticamente significativas de que a nova estratégia é diferente/melhor.",
      "D": "Concluir que o p-valor prova que a nova estratégia é 98% melhor que a antiga.",
      "E": "Aceitar a Hipótese Nula (H0), pois o p-valor é maior que zero."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "P-valor é a 'probabilidade da coincidência'. Se o p-valor é menor que o seu limite (alfa, geralmente 0.05), significa que o resultado que você viu é MUITO difícil de ser apenas sorte. Então, você descarta a ideia de que nada mudou (H0) e aceita que a mudança é real.",
      "puloDoGato": "Regra de ouro: Se o 'P' é baixo (p < alfa), a Nula (H0) vai para o espaço.",
      "cascasDeBanana": {
        "E": "Incorreta. Se p < alfa, nós rejeitamos H0.",
        "C": "Correta. Resultados abaixo do limite de significância permitem a rejeição de H0.",
        "A": "Incorreta. O resultado já é conclusivo dentro do nível de confiança estabelecido.",
        "D": "Incorreta. O p-valor não mede a magnitude da melhoria, apenas a confiança estatística.",
        "B": "Incorreta. É um erro comum: o p-valor não é a probabilidade de H0 ser verdadeira (visão frequentista)."
      },
      "dicaDeOuro": "P-valor < 0.05? A mudança é real (estatisticamente significante)."
    }
  },
  {
    "id": "q_ds_133",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Erros Estatísticos - Tipo I e Tipo II",
    "difficulty": "Médio",
    "statement": "Em um teste de diagnóstico de falhas em turbinas, o que caracteriza um 'Erro do Tipo II'?",
    "options": {
      "A": "O modelo de Machine Learning entrar em Overfitting.",
      "B": "Rejeitar a hipótese nula quando ela é, na verdade, verdadeira (Falso Positivo).",
      "C": "Aceitar a hipótese nula quando ela é, na verdade, falsa (Falso Negativo).",
      "D": "Cometer um erro de cálculo na média aritmética.",
      "E": "Utilizar uma amostra pequena demais."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Erro Tipo I: Você diz que a turbina está quebrada, mas ela está boa (Alarme falso). Erro Tipo II: Você diz que a turbina está boa, mas ela está prestes a explodir (Falha grave). O Tipo II é o 'Falso Negativo'.",
      "puloDoGato": "Lembre-se: Tipo I = Rejeitar o que é verdade. Tipo II = Aceitar (ou não rejeitar) o que é mentira.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é o Erro Tipo I.",
        "C": "Correta. Falha em detectar um efeito ou problema real.",
        "D": "Incorreta. Erros de processamento não são classificados como Tipos I ou II.",
        "E": "Incorreta. Amostras pequenas aumentam a chance de erros, mas não são o erro em si.",
        "A": "Incorreta. Overfitting é um problema de generalização, não de teste de hipótese clássico."
      },
      "dicaDeOuro": "Tipo I = Falso Positivo. Tipo II = Falso Negativo."
    }
  },
  {
    "id": "q_ds_134",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Apache Spark - RDD vs DataFrame",
    "difficulty": "Médio",
    "statement": "No ecossistema Apache Spark, qual é a principal vantagem de utilizar 'DataFrames' em vez de 'RDDs' (Resilient Distributed Datasets) para processamento de grandes volumes de dados SQL?",
    "options": {
      "A": "DataFrames ocupam mais memória RAM que os RDDs.",
      "B": "RDDs são capazes de processar dados em tempo real, enquanto DataFrames são apenas para batch.",
      "C": "DataFrames possuem otimizações automáticas de execução através do Catalyst Optimizer e do motor Tungsten, tornando o processamento muito mais rápido.",
      "D": "DataFrames são mais antigos e estáveis que os RDDs.",
      "E": "DataFrames não permitem o uso de Python, apenas Scala."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O RDD é 'raiz', você tem que dizer passo a passo o que fazer. O DataFrame é 'nutella' (no bom sentido): você diz O QUE quer, e o Spark usa o cérebro dele (Catalyst) para descobrir o jeito mais rápido de te entregar o resultado, economizando memória e CPU automaticamente.",
      "puloDoGato": "Quase sempre prefira DataFrames. Deixe RDDs apenas se você precisar de um controle manual baixíssimo nível sobre os objetos Python.",
      "cascasDeBanana": {
        "D": "Incorreta. RDDs são a base original do Spark, os DataFrames vieram depois.",
        "C": "Correta. Otimização de plano de consulta e codificação binária eficiente.",
        "E": "Incorreta. PySpark é uma das formas mais comuns de usar DataFrames.",
        "B": "Incorreta. Ambos suportam batch e o Spark Streaming evoluiu para o Structured Streaming (DataFrames).",
        "A": "Incorreta. Pelo contrário, DataFrames são muito mais econômicos graças à serialização Tungsten."
      },
      "dicaDeOuro": "DataFrame no Spark = Velocidade e inteligência automática."
    }
  },
  {
    "id": "q_ds_135",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Spark - Shuffling",
    "difficulty": "Médio",
    "statement": "Durante um processamento distribuído no Spark, a operação de 'Shuffle' (Embaralhamento) é frequentemente citada como um gargalo de performance. O que ocorre durante um Shuffle?",
    "options": {
      "A": "O cluster é reiniciado para evitar travamentos.",
      "B": "As tabelas do banco de dados são embaralhadas para garantir a segurança.",
      "C": "O código Python é traduzido para Java em tempo real.",
      "D": "O Spark apaga os dados temporários para liberar espaço.",
      "E": "Os dados são movidos entre diferentes nós (máquinas) do cluster através da rede para que possam ser reagrupados (ex: em um JOIN ou GroupBy)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine 10 pessoas em salas diferentes separando cartas de baralho. De repente, alguém diz: 'Agora juntem todos os Reis na Sala 1'. Todo mundo tem que sair correndo pelos corredores (rede) para levar os Reis. Esse movimento de dados entre máquinas é lento e caro. No Big Data, evite Shuffles sempre que puder.",
      "puloDoGato": "Operações como `join()`, `groupBy()` e `distinct()` são as maiores causadoras de Shuffling.",
      "cascasDeBanana": {
        "D": "Incorreta. Shuffle gera dados em disco, não os apaga para liberar espaço.",
        "E": "Correta. Movimentação de dados via rede (I/O) entre partições.",
        "C": "Incorreta. Isso seria compilação JIT, não shuffle.",
        "A": "Incorreta. Shuffle é uma operação normal de dados, não de manutenção.",
        "B": "Incorreta. Não tem relação com criptografia ou segurança."
      },
      "dicaDeOuro": "Shuffle = Dados viajando pela rede (é lento!)."
    }
  },
  {
    "id": "q_ds_138",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Feature Store",
    "difficulty": "Médio",
    "statement": "Qual é a principal utilidade de uma 'Feature Store' em um ambiente corporativo de larga escala (como na Petrobras)?",
    "options": {
      "A": "Servir como um repositório centralizado de variáveis (features) pré-processadas, permitindo o reuso entre diferentes modelos e garantindo a consistência entre o treinamento e a inferência em tempo real.",
      "B": "Gerar automaticamente o código Python para treinar Redes Neurais.",
      "C": "Armazenar apenas o resultado final das predições do modelo.",
      "D": "Substituir o Data Lake para economizar custos de armazenamento.",
      "E": "Funcionar como um antivírus para dados corrompidos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine que dez cientistas diferentes precisam calcular a 'média de consumo de combustível' de cada navio. Sem Feature Store, cada um faz o seu código (e cada um pode dar um resultado diferente). Com a Feature Store, um faz o cálculo pesado uma vez, guarda lá, e todos os outros modelos 'consomem' aquela variável pronta e validada.",
      "puloDoGato": "A Feature Store também resolve o 'Training-Serving Skew' (quando o dado no treino é calculado de um jeito e na hora da produção de outro).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria um banco de logs de predição.",
        "A": "Correta. Governança, reuso e consistência de variáveis.",
        "D": "Incorreta. Ela complementa o Data Lake, não o substitui.",
        "B": "Incorreta. Ela armazena dados, não gera código-fonte de algoritmos.",
        "E": "Incorreta. Não é uma ferramenta de segurança cibernética."
      },
      "dicaDeOuro": "Feature Store = Compartilhamento e consistência de variáveis entre modelos."
    }
  },
  {
    "id": "q_ds_139",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Correlação vs Causalidade",
    "difficulty": "Fácil",
    "statement": "Um estudo mostra que existe uma alta correlação positiva entre a venda de sorvetes e o número de ataques de tubarão. Um Cientista de Dados deve:",
    "options": {
      "A": "Afirmar que o estudo está errado pois correlações sempre indicam causas diretas.",
      "B": "Identificar que existe uma variável oculta (variável de confusão), como a 'Temperatura/Verão', que causa o aumento de ambos simultaneamente, e que correlação não implica causalidade.",
      "C": "Concluir que comer sorvete atrai tubarões e proibir a venda nas praias.",
      "D": "Concluir que tubarões gostam de atacar pessoas que cheiram a baunilha.",
      "E": "Usar uma Regressão Linear para prever ataques de tubarão baseada no sabor do sorvete."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o exemplo clássico da estatística. No verão, mais gente toma sorvete E mais gente entra no mar (onde o tubarão está). Uma coisa não causa a outra. Na Petrobras, cuidado para não achar que a cor da plataforma causa a quebra do motor só porque ambos ocorreram no mesmo dia.",
      "puloDoGato": "Sempre procure pela 'Confounding Variable' (Variável de Confusão).",
      "cascasDeBanana": {
        "C": "Incorreta. Interpretação absurda de causalidade direta.",
        "D": "Incorreta. Hipótese sem base científica.",
        "B": "Correta. Distinção fundamental entre associação estatística e nexo causal.",
        "A": "Incorreta. É o maior erro que um analista pode cometer.",
        "E": "Incorreta. O modelo teria uma boa acurácia de predição (correlação), mas seria inútil para prevenção (causalidade)."
      },
      "dicaDeOuro": "Correlação = Estão juntos. Causalidade = Um criou o outro."
    }
  },
  {
    "id": "q_ds_141",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Hadoop - HDFS",
    "difficulty": "Médio",
    "statement": "O HDFS (Hadoop Distributed File System) é projetado para armazenar arquivos gigantes em clusters de hardware comum. Qual é o mecanismo que garante que os dados não sejam perdidos caso um dos servidores apresente uma falha física?",
    "options": {
      "A": "O HDFS não permite falhas, pois utiliza hardware de alta disponibilidade.",
      "B": "Uso de memórias RAM super-resistentes.",
      "C": "Backup semanal em fitas magnéticas.",
      "D": "Replicação de blocos (geralmente em 3 cópias) em diferentes nós do cluster.",
      "E": "Criptografia de ponta a ponta."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O HDFS assume que computadores vão quebrar. Por isso, quando você salva um arquivo, ele corta o arquivo em pedaços (blocos) e salva cada pedaço em 3 máquinas diferentes. Se uma máquina pegar fogo, o sistema nem pisca: ele busca a cópia que está na outra máquina e continua trabalhando.",
      "puloDoGato": "O NameNode é quem guarda o 'mapa' de onde estão essas cópias. Se o NameNode cair, aí sim você tem um problemão (Single Point of Failure original do Hadoop 1).",
      "cascasDeBanana": {
        "E": "Incorreta. Criptografia protege a privacidade, não a integridade física.",
        "D": "Correta. Replicação tripla é o padrão (Replication Factor = 3).",
        "B": "Incorreta. Hadoop roda em 'Commodity Hardware' (máquinas comuns e baratas).",
        "C": "Incorreta. O HDFS é feito para ser tolerante a falhas em tempo real, não via backups lentos.",
        "A": "Incorreta. Nenhuma infraestrutura é imune a falhas."
      },
      "dicaDeOuro": "HDFS = Dados fatiados e replicados em várias máquinas."
    }
  },
  {
    "id": "q_ds_143",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Continuous Training (CT)",
    "difficulty": "Médio",
    "statement": "Em MLOps, o conceito de 'Continuous Training' (CT) vai além do CI/CD tradicional do software. Qual é o gatilho (trigger) mais comum que deve disparar um retreinamento automático do modelo em produção?",
    "options": {
      "A": "Sempre que a performance do modelo cair abaixo de um limiar ou for detectado um 'Data Drift' significativo nos dados de entrada.",
      "B": "Sempre que o servidor de banco de dados for reiniciado.",
      "C": "Quando o modelo atingir 100% de acurácia.",
      "D": "Exatamente a cada 15 minutos, independente dos dados.",
      "E": "Sempre que um novo funcionário for contratado na Petrobras."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Diferente do software comum, o modelo de IA 'estraga' com o tempo porque o mundo muda. O CT é o sistema vigiando: 'Opa, o perfil dos dados de hoje está muito diferente do treino de ontem' ou 'A precisão caiu de 90% para 70%'. Na mesma hora, ele dispara o pipeline para aprender com os dados novos.",
      "puloDoGato": "Isso garante que o modelo nunca fique obsoleto sem ninguém perceber.",
      "cascasDeBanana": {
        "E": "Incorreta. Mudanças de RH não afetam a lógica estatística dos modelos técnicos.",
        "A": "Correta. Monitoramento de performance e desvio de dados (drift).",
        "D": "Incorreta. Retreinar sem necessidade gasta dinheiro (nuvem) e CPU à toa.",
        "B": "Incorreta. Reiniciar o banco é manutenção de infra, não de ciência de dados.",
        "C": "Incorreta. Um modelo com 100% de acurácia provavelmente está com overfitting ou vazamento de dados."
      },
      "dicaDeOuro": "Mundo mudou (Data Drift)? Hora de treinar de novo (CT)."
    }
  },
  {
    "id": "q_ds_144",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Probabilidade Condicional - Teorema de Bayes",
    "difficulty": "Médio",
    "statement": "O Teorema de Bayes é utilizado para atualizar a probabilidade de uma hipótese à medida que novas evidências aparecem. Qual é o termo correto para a probabilidade inicial (antes da evidência)?",
    "options": {
      "A": "Likelihood (Verossimilhança).",
      "B": "Prior (Priori).",
      "C": "P-value.",
      "D": "Desvio Padrão.",
      "E": "Posterior (Posteriori)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Priori: O que eu já achava antes (ex: 'Acho que esse poço tem 10% de chance de ter óleo'). Evidência: Fiz um teste sísmico. Posteriori: Minha nova crença atualizada após o teste (ex: 'Agora tenho 80% de certeza').",
      "puloDoGato": "Bayes é a lógica do aprendizado: Crença Antiga + Dados Novos = Crença Nova Atualizada.",
      "cascasDeBanana": {
        "A": "Incorreta. Likelihood é a chance da evidência ocorrer dada a hipótese.",
        "E": "Incorreta. Posterior é o resultado FINAL após o cálculo.",
        "B": "Correta. Conhecimento prévio antes dos novos dados.",
        "C": "Incorreta. Termo de teste de hipótese frequentista.",
        "D": "Incorreta. Medida de dispersão de dados."
      },
      "dicaDeOuro": "Antes dos dados = Prior. Depois dos dados = Posterior."
    }
  },
  {
    "id": "q_ds_145",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Data Lake vs Data Warehouse",
    "difficulty": "Fácil",
    "statement": "Qual é a principal diferença na forma como os dados são armazenados em um 'Data Lake' em comparação a um 'Data Warehouse'?",
    "options": {
      "A": "Data Warehouses não suportam consultas SQL.",
      "B": "Data Lakes são muito mais caros que Data Warehouses.",
      "C": "Data Warehouses exigem que o dado seja estruturado e limpo antes de entrar (Schema-on-Write), enquanto Data Lakes aceitam dados brutos em qualquer formato (Schema-on-Read).",
      "D": "Data Lakes armazenam apenas dados de redes sociais, enquanto Warehouses são para dados de planilhas.",
      "E": "Data Lakes apagam os dados após 30 dias para economizar espaço."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Warehouse é um armário organizado: tudo tem etiqueta e lugar certo. Se o dado não estiver no formato, ele não entra. Lake é um balde gigante: você joga tudo lá dentro (vídeo, log, texto, tabela suja). Você só se preocupa em organizar o dado na hora em que for usar (Schema-on-Read).",
      "puloDoGato": "Cientistas de dados amam o Lake porque podem explorar dados brutos sem as restrições rígidas da equipe de TI do Warehouse.",
      "cascasDeBanana": {
        "D": "Incorreta. Ambos podem conter qualquer tipo de informação de negócio.",
        "C": "Correta. Flexibilidade vs Rigidez de esquema.",
        "B": "Incorreta. Armazenamento bruto em Cloud (S3/Azure Blob) no Lake costuma ser mais barato que bancos Warehouse (Redshift/BigQuery).",
        "A": "Incorreta. SQL é a linguagem principal dos Warehouses.",
        "E": "Incorreta. Lakes servem para histórico de longo prazo, não expiram dados."
      },
      "dicaDeOuro": "Lake = Bruto/Flexível. Warehouse = Limpo/Estruturado."
    }
  },
  {
    "id": "q_ds_148",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Distribuições - Poisson",
    "difficulty": "Médio",
    "statement": "Qual é o cenário de uso ideal para a distribuição de probabilidade de Poisson?",
    "options": {
      "A": "Calcular a probabilidade de um número específico de eventos ocorrerem em um intervalo fixo de tempo ou espaço (ex: quantas falhas ocorrem em um duto por quilômetro).",
      "B": "Comparar a performance de dois modelos de Deep Learning.",
      "C": "Verificar se uma moeda é justa jogando-a 10 vezes.",
      "D": "Medir a altura média dos funcionários da Petrobras.",
      "E": "Estimar o preço futuro da gasolina baseado no dólar."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Poisson serve para 'eventos raros que ocorrem no tempo/espaço'. Quantos carros passam no pedágio por hora? Quantos erros de digitação por página? Quantos vazamentos por trecho de oleoduto? Se você tem uma 'taxa média' (lambda), a Poisson te dá a chance de ocorrer exatamente X eventos.",
      "puloDoGato": "A média e a variância da distribuição de Poisson são IGUAIS (ambas valem lambda). Isso cai muito em prova!",
      "cascasDeBanana": {
        "D": "Incorreta. Altura segue distribuição Normal.",
        "A": "Correta. Eventos discretos em intervalos contínuos.",
        "C": "Incorreta. Isso é Distribuição Binomial (sucesso ou fracasso em tentativas fixas).",
        "E": "Incorreta. Preços são variáveis contínuas (Regressão/Séries Temporais).",
        "B": "Incorreta. Isso exige testes de hipóteses como o Teste T."
      },
      "dicaDeOuro": "Poisson = Eventos por intervalo (tempo ou espaço)."
    }
  },
  {
    "id": "q_ds_150",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Monitoring - Observabilidade",
    "difficulty": "Fácil",
    "statement": "O que significa 'Model Observability' no contexto de colocar modelos em produção?",
    "options": {
      "A": "Monitorar não apenas se o modelo está 'vivo', mas também métricas de negócio, latência, uso de CPU e, principalmente, se as predições estão começando a desviar do esperado (drift).",
      "B": "Obrigar o modelo a explicar cada decisão usando linguagem simples.",
      "C": "Ficar olhando para o código até encontrar um erro.",
      "D": "Gravar as conversas dos usuários com o modelo.",
      "E": "Tirar prints da tela do modelo para mostrar ao chefe."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Monitorar é saber se o servidor caiu. Observar é saber POR QUE o modelo está errando. Se a latência subiu de 10ms para 2 segundos, ou se o modelo parou de recomendar produtos caros, a observabilidade te avisa antes do cliente reclamar. É o painel de controle completo da sua 'fábrica' de modelos.",
      "puloDoGato": "Ferramentas como Prometheus, Grafana e Evidently AI são as estrelas aqui.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é debug manual, ineficiente em escala.",
        "A": "Correta. Visão 360º da saúde técnica e funcional do modelo.",
        "E": "Incorreta. Observabilidade exige métricas automáticas e dashboards dinâmicos.",
        "D": "Incorreta. Isso pode violar a LGPD e não ajuda na performance técnica.",
        "B": "Incorreta. Isso é IA Explicável (XAI), um conceito diferente."
      },
      "dicaDeOuro": "Observabilidade = Monitoramento inteligente de performance e drift."
    }
  },
  {
    "id": "q_engsw_b3_027",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Ciência de Dados",
    "topic": "Machine Learning - Aprendizado Supervisionado",
    "difficulty": "Médio",
    "statement": "No aprendizado de máquina (Machine Learning), o Aprendizado Supervisionado caracteriza-se por:",
    "options": {
      "A": "Rodar apenas em computadores da marca Apple.",
      "B": "O algoritmo aprender sozinho sem nenhum dado de entrada.",
      "C": "O computador ser desligado se errar a conta.",
      "D": "O professor da faculdade ficar olhando o aluno programar.",
      "E": "O uso de dados de treinamento rotulados (com respostas conhecidas) para ensinar o modelo a prever resultados para novos dados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No Supervisionado, eu dou exemplos: 'Esta foto tem um gato', 'Esta foto tem um cachorro'. O modelo aprende o padrão e depois, ao ver uma foto nova, ele 'deduz' se é gato ou cachorro.",
      "puloDoGato": "Se não houver rótulo (ex: agrupar clientes por perfil sem saber quem eles são), o aprendizado é NÃO Supervisionado (Clustering).",
      "cascasDeBanana": {
        "B": "Incorreta. Aprendizado exige dados.",
        "E": "Correta. Base de Regressões e Classificações.",
        "D": "Incorreta. Piada educacional.",
        "C": "Incorreta. Piada punitiva.",
        "A": "Incorreta. IA roda em qualquer hardware compatível."
      },
      "dicaDeOuro": "Supervisionado = Tenho o gabarito das questões de treino."
    }
  },
  {
    "id": "q_engsw_b3_028",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Ciência de Dados",
    "topic": "Big Data - Ecossistema Hadoop e Spark",
    "difficulty": "Difícil",
    "statement": "Qual a principal vantagem do Apache Spark em relação ao modelo MapReduce tradicional do Hadoop?",
    "options": {
      "A": "O Spark é apenas para computadores portáteis.",
      "B": "Não existe vantagem, o MapReduce é sempre superior.",
      "C": "O Hadoop não precisa de servidores para rodar.",
      "D": "O Spark realiza o processamento em memória (In-memory), sendo muito mais rápido para iterações e análises complexas que o MapReduce (baseado em disco).",
      "E": "O Spark é escrito em COBOL, o que o torna mais seguro."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O MapReduce do Hadoop lia e gravava no disco a cada etapa (muito lento). O Spark mantém os dados na RAM enquanto processa. Isso chega a ser 100x mais rápido para certos algoritmos, especialmente Machine Learning.",
      "puloDoGato": "Spark não substitui o Hadoop totalmente; ele costuma rodar NO TOPO do HDFS (sistema de arquivos do Hadoop).",
      "cascasDeBanana": {
        "E": "Incorreta. Spark é escrito em Scala/Java.",
        "D": "Correta. Evolução natural para processamento de alto desempenho.",
        "C": "Incorreta. Big Data exige clusters de servidores.",
        "A": "Incorreta. Piada com o nome.",
        "B": "Incorreta. Spark é amplamente considerado superior para processamento de dados moderno."
      },
      "dicaDeOuro": "Spark = Velocidade da Luz (RAM). MapReduce = Velocidade de Cruzeiro (Disco)."
    }
  },
  {
    "id": "q_engsw_b3_043",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Ciência de Dados",
    "topic": "Métricas de Avaliação - Precisão e Revocação (Recall)",
    "difficulty": "Difícil",
    "statement": "Em um modelo de classificação para detecção de fraudes, o que a métrica 'Revocação' (Recall) representa?",
    "options": {
      "A": "O custo de manter o modelo em produção.",
      "B": "A porcentagem de acertos totais do modelo.",
      "C": "A precisão do modelo ao dizer que algo é fraude.",
      "D": "A capacidade do modelo de encontrar todos os casos positivos reais (fraudulentos) existentes nos dados.",
      "E": "A velocidade com que o modelo processa cada registro."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Recall = 'De todas as fraudes que aconteceram, quantas eu consegui pegar?'. Precisão = 'Das vezes que eu disse que era fraude, quantas vezes eu estava certo?'. Em medicina ou fraude, preferimos um Recall alto (não queremos deixar passar nenhum doente/fraudador).",
      "puloDoGato": "F1-Score é a média harmônica entre os dois, equilibrando os erros.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria a Acurácia (que pode enganar se os dados forem desbalanceados).",
        "D": "Correta. Foco em capturar o máximo de positivos reais.",
        "C": "Incorreta. Isso é a própria definição de Precisão.",
        "E": "Incorreta. Métrica de performance técnica.",
        "A": "Incorreta. Métrica de negócio/custo."
      },
      "dicaDeOuro": "Recall = Não deixar ninguém de fora. Precisão = Não acusar inocentes."
    }
  },
  {
    "id": "q_engsw_b3_044",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Ciência de Dados",
    "topic": "Problemas de Ajuste - Overfitting",
    "difficulty": "Médio",
    "statement": "Ocorre 'Overfitting' (Sobreajuste) em um modelo de Machine Learning quando:",
    "options": {
      "A": "O modelo decora os dados de treinamento (incluindo o ruído) e perde a capacidade de generalizar para novos dados nunca vistos.",
      "B": "O modelo é simples demais e não consegue aprender os padrões básicos.",
      "C": "O computador superaquece durante o treinamento.",
      "D": "Não há dados suficientes para treinar.",
      "E": "O programador usa a linguagem errada."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "É o aluno que decora o livro mas erra se mudar uma vírgula na pergunta. O erro no treino é quase zero, mas o erro no teste é altíssimo. Solução: Simplificar o modelo ou dar mais dados.",
      "puloDoGato": "Overfitting = Alta Variância. Underfitting = Alto Viés (Bias).",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Underfitting.",
        "A": "Correta. Perda de poder de generalização.",
        "C": "Incorreta. Hardware, não algoritmo.",
        "D": "Incorreta. Pode até facilitar o overfitting, mas não é a definição.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Overfitting = Memorizar em vez de Aprender."
    }
  },
  {
    "id": "q_f1_001",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Arquitetura LLM - Mecanismo de Atenção",
    "difficulty": "Difícil",
    "statement": "O mecanismo central da arquitetura Transformer, que permite ao modelo focar em diferentes partes de uma sequência de entrada para entender o contexto de uma palavra específica, independentemente da sua distância no texto, é chamado de:",
    "options": {
      "A": "Recorrência (RNN).",
      "B": "Self-Attention (Autoatenção).",
      "C": "Sigmoid Activation.",
      "D": "Backpropagation.",
      "E": "Convolution (Convolução)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O pulo do gato do Transformer foi abandonar as redes recorrentes (que processavam palavra por palavra) e usar o Self-Attention. Com ele, o modelo consegue 'olhar' para o início e o fim de uma frase simultaneamente para entender a relação entre os termos.",
      "puloDoGato": "Self-Attention = Relacionamento global entre tokens em uma única camada. É o que permite o paralelismo massivo dos LLMs.",
      "cascasDeBanana": {
        "A": "Incorreta. RNNs processam sequencialmente, o que é lento e perde contexto de longo prazo.",
        "B": "Correta. Componente fundamental introduzido no paper 'Attention Is All You Need'.",
        "C": "Incorreta. É o algoritmo de treino, não uma arquitetura de arquitetura.",
        "D": "Incorreta. Convolução é típica de visão computacional (CNNs).",
        "E": "Incorreta. É uma função de ativação matemática básica."
      },
      "dicaDeOuro": "Transformer = Attention is ALL you need. Se falou em atenção, falou em Transformer."
    }
  },
  {
    "id": "q_f1_002",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Alucinação em LLMs",
    "difficulty": "Médio",
    "statement": "Em Modelos de Linguagem de Grande Porte (LLMs), o fenômeno de 'alucinação' ocorre quando o modelo:",
    "options": {
      "A": "Consegue prever o futuro com 100% de precisão.",
      "B": "Traduz textos de forma literal entre idiomas.",
      "C": "Para de funcionar devido ao excesso de usuários simultâneos.",
      "D": "Demora muito tempo para responder uma pergunta complexa.",
      "E": "Gera informações que parecem gramaticalmente corretas e plausíveis, mas que são factualmente falsas ou não baseadas nos dados de treino."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Como os LLMs são modelos probabilísticos (predizem a próxima palavra mais provável), eles não 'sabem' a verdade. Se o modelo não tem a informação, ele pode 'inventar' algo que soa muito convincente. Isso é a alucinação.",
      "puloDoGato": "Alucinação = Plausibilidade vs Veracidade. O modelo prioriza soar bem em vez de estar certo.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é latência.",
        "E": "Correta. É o maior desafio ético e técnico atual dos LLMs.",
        "C": "Incorreta. Isso é queda de serviço (Overload).",
        "A": "Incorreta. LLMs não são oráculos e não preveem o futuro.",
        "B": "Incorreta. Isso é tradução automática simples."
      },
      "dicaDeOuro": "Alucinação = Mentira dita com muita confiança."
    }
  },
  {
    "id": "q_f1_003",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Prompt Engineering - Chain-of-Thought (CoT)",
    "difficulty": "Médio",
    "statement": "A técnica de Prompt Engineering conhecida como 'Chain-of-Thought' (Cadeia de Pensamento) consiste em:",
    "options": {
      "A": "Usar apenas letras maiúsculas para dar ênfase ao comando.",
      "B": "Fornecer milhares de exemplos de treino dentro do prompt.",
      "C": "Limitar a resposta do modelo a apenas uma palavra.",
      "D": "Instruir o modelo a explicar o raciocínio passo a passo antes de chegar à resposta final.",
      "E": "Pedir para o modelo traduzir o prompt para vários idiomas antes de responder."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Ao pedir 'pense passo a passo', você obriga o modelo a usar seus tokens de saída como um 'espaço de rascunho'. Isso melhora drasticamente o desempenho em tarefas de lógica e matemática.",
      "puloDoGato": "Chain-of-Thought = Raciocínio explícito. Ajuda o modelo a não 'tropeçar' em conclusões apressadas.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria uma técnica de tradução reversa.",
        "D": "Correta. Técnica clássica para melhorar tarefas multietapas.",
        "A": "Incorreta. Gritar com o modelo (caps) raramente ajuda na lógica.",
        "C": "Incorreta. Isso costuma piorar a qualidade, pois o modelo não pode 'planejar' a saída.",
        "B": "Incorreta. Isso seria Few-Shot prompting em escala extrema."
      },
      "dicaDeOuro": "CoT = O famoso 'Explique como você chegou a esse resultado'."
    }
  },
  {
    "id": "q_f1_004",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Alinhamento - RLHF",
    "difficulty": "Difícil",
    "statement": "O RLHF (Reinforcement Learning from Human Feedback) é uma técnica fundamental para o 'alinhamento' de modelos como o ChatGPT. Qual o seu principal papel?",
    "options": {
      "A": "Compactar o modelo para rodar em dispositivos móveis.",
      "B": "Substituir a arquitetura Transformer por redes neurais simples.",
      "C": "Remover a necessidade de dados de texto durante o pré-treinamento.",
      "D": "Treinar o modelo para ser mais útil, seguro e seguir as preferências humanas, usando classificadores baseados em feedback de pessoas reais.",
      "E": "Aumentar a velocidade de processamento da GPU."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O pré-treinamento ensina o modelo a 'falar'. O RLHF ensina o modelo a 'se comportar'. Pessoas classificam várias respostas do modelo, e um 'modelo de recompensa' é criado para guiar o LLM na direção do que os humanos preferem.",
      "puloDoGato": "RLHF = Ajuste fino de comportamento e ética pós-treino base.",
      "cascasDeBanana": {
        "E": "Incorreta. Hardware não é afetado por RLHF.",
        "D": "Correta. É o que diferencia um modelo 'cru' de um assistente amigável.",
        "C": "Incorreta. O pré-treino continua sendo a base de tudo.",
        "A": "Incorreta. Isso seria Quantização ou Destilação.",
        "B": "Incorreta. RLHF é aplicado SOBRE os Transformers."
      },
      "dicaDeOuro": "RLHF = A educação que o modelo recebe para viver em sociedade."
    }
  },
  {
    "id": "q_f1_005",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Arquitetura - RAG vs Fine-tuning",
    "difficulty": "Difícil",
    "statement": "Ao implementar um sistema de IA para responder perguntas sobre documentos privados de uma empresa, a técnica de RAG (Retrieval-Augmented Generation) é preferível ao Fine-tuning (ajuste fino) quando:",
    "options": {
      "A": "O modelo precisa de conhecimentos de gramática básica.",
      "B": "A empresa quer que o modelo mude seu estilo de escrita para ser mais sarcástico.",
      "C": "A informação muda constantemente e o modelo precisa acessar dados atualizados em tempo real sem precisar de novos treinamentos caros.",
      "D": "O custo não é um problema e a empresa tem meses para treinar.",
      "E": "Não se tem acesso a nenhum documento para consulta."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Fine-tuning é como o modelo 'estudar para uma prova' (conhecimento estático). RAG é como o modelo 'fazer uma prova com consulta' (acessa um banco de dados externo). RAG é muito mais barato e fácil de atualizar para dados dinâmicos.",
      "puloDoGato": "RAG = Menos alucinação + Citação de fontes + Dados atualizados.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso o modelo base já sabe.",
        "C": "Correta. RAG é o padrão ouro para 'chat with your data'.",
        "D": "Incorreta. Fine-tuning é que seria caro e demorado nesse cenário.",
        "B": "Incorreta. Para mudar o 'estilo' ou 'voz', o Fine-tuning é melhor.",
        "E": "Incorreta. Sem documentos, não há o que recuperar (Retrieval)."
      },
      "dicaDeOuro": "RAG = Busca no Google Interno + Resumo por IA."
    }
  },
  {
    "id": "q_f1_006",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Modelos Generativos - GANs",
    "difficulty": "Médio",
    "statement": "As Redes Adversárias Generativas (GANs) operam através da competição entre dois modelos: o Gerador e o Discriminador. Qual a função do Discriminador?",
    "options": {
      "A": "Traduzir texto para imagem.",
      "B": "Aumentar a resolução das imagens automaticamente.",
      "C": "Criar imagens falsas a partir de ruído aleatório.",
      "D": "Comprimir os dados para economizar espaço.",
      "E": "Tentar distinguir se uma imagem é real (da base de dados) ou falsa (criada pelo Gerador)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É o jogo do falsificador (Gerador) contra o detetive (Discriminador). O detetive fica cada vez melhor em pegar falsificações, o que obriga o falsificador a criar imagens cada vez mais perfeitas.",
      "puloDoGato": "GAN = Jogo de soma zero. O sucesso de um depende do desafio do outro.",
      "cascasDeBanana": {
        "C": "Incorreta. Essa é a função do Gerador.",
        "E": "Correta. Ele atua como o 'crítico' que guia o treino.",
        "B": "Incorreta. Isso é Super-Resolution (que pode usar GANs, mas não define o discriminador).",
        "A": "Incorreta. Isso é típico de modelos de Difusão.",
        "D": "Incorreta. Isso é Autoencoders."
      },
      "dicaDeOuro": "Discriminador = O fiscal de qualidade da IA."
    }
  },
  {
    "id": "q_f1_007",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Modelos Generativos - VAEs",
    "difficulty": "Difícil",
    "statement": "Diferente dos Autoencoders tradicionais, os Variational Autoencoders (VAEs) são considerados modelos generativos porque:",
    "options": {
      "A": "São muito mais rápidos de treinar.",
      "B": "Foram criados antes do Deep Learning.",
      "C": "Não utilizam redes neurais em sua estrutura.",
      "D": "Mapeiam os dados de entrada para uma distribuição de probabilidade no espaço latente, permitindo a amostragem de novos dados.",
      "E": "Só funcionam com arquivos de áudio."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Autoencoders comuns 'decoram' a entrada. VAEs aprendem as 'características' (média e variância). Isso cria um espaço contínuo onde você pode escolher um ponto e gerar uma imagem que nunca existiu, mas que segue o padrão aprendido.",
      "puloDoGato": "VAE = Espaço Latente Probabilístico. Permite criar variações suaves de um objeto.",
      "cascasDeBanana": {
        "A": "Incorreta. São geralmente mais complexos que autoencoders simples.",
        "D": "Correta. A natureza probabilística é o que permite a 'geração'.",
        "C": "Incorreta. São baseados inteiramente em redes neurais profundas.",
        "E": "Incorreta. Funcionam com qualquer dado (imagem, som, texto).",
        "B": "Incorreta. São uma evolução moderna dentro do Deep Learning."
      },
      "dicaDeOuro": "VAE = Aprende o 'molde' estatístico, não apenas o objeto."
    }
  },
  {
    "id": "q_f1_008",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Modelos de Difusão",
    "difficulty": "Médio",
    "statement": "Modelos de Difusão (como Midjourney e Stable Diffusion) geram imagens através de qual processo básico?",
    "options": {
      "A": "Desenho vetorial linha por linha.",
      "B": "Criação de modelos 3D que depois são fotografados.",
      "C": "Colagem de pedaços de fotos encontradas na internet.",
      "D": "Remoção iterativa de ruído de uma imagem aleatória até que uma forma clara emerja, guiada por um prompt de texto.",
      "E": "Apenas filtros aplicados em fotos existentes."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine uma escultura escondida em um bloco de estática (chiado de TV). A IA aprendeu a 'limpar' esse ruído para revelar o que o texto descreve. É o estado da arte para geração de imagens hoje.",
      "puloDoGato": "Difusão = Inverter o processo de destruição da imagem por ruído gaussiano.",
      "cascasDeBanana": {
        "C": "Incorreta. Eles não fazem colagem; eles criam pixels do zero.",
        "D": "Correta. Processo de 'Denoising' iterativo.",
        "A": "Incorreta. Operam em matrizes de pixels (rastreio).",
        "B": "Incorreta. Geram direto em 2D (embora existam variantes para 3D).",
        "E": "Incorreta. Podem criar imagens totalmente inéditas."
      },
      "dicaDeOuro": "Difusão = Encontrar a ordem dentro do caos (ruído)."
    }
  },
  {
    "id": "q_f1_009",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Redes Neurais Convolucionais - Pooling",
    "difficulty": "Fácil",
    "statement": "Em uma Rede Neural Convolucional (CNN), qual a principal função da camada de Pooling (ex: Max Pooling)?",
    "options": {
      "A": "Substituir a necessidade de filtros de convolução.",
      "B": "Inverter as cores da imagem.",
      "C": "Aumentar a resolução da imagem de entrada.",
      "D": "Reduzir a dimensionalidade espacial dos mapas de características, diminuindo o número de parâmetros e o custo computacional.",
      "E": "Adicionar ruído para dificultar o treino."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Pooling 'resume' a imagem. O Max Pooling pega o maior valor de uma janelinha (ex: 2x2) e descarta o resto. Isso mantém a característica mais forte e torna a rede menos sensível a pequenas mudanças de posição do objeto.",
      "puloDoGato": "Pooling = Redução de escala + Invariância espacial.",
      "cascasDeBanana": {
        "C": "Incorreta. Ele diminui drasticamente a resolução.",
        "D": "Correta. Essencial para evitar overfitting e economizar RAM.",
        "B": "Incorreta. Não altera cores, apenas densidade de dados.",
        "E": "Incorreta. O objetivo é simplificar, não complicar.",
        "A": "Incorreta. Convolução e Pooling trabalham juntos."
      },
      "dicaDeOuro": "Pooling = O 'resumo' das partes mais importantes da imagem."
    }
  },
  {
    "id": "q_f1_010",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "CNN - Kernels e Filtros",
    "difficulty": "Médio",
    "statement": "Nas primeiras camadas de uma CNN, os filtros (kernels) geralmente aprendem a detectar quais tipos de padrões?",
    "options": {
      "A": "Nomes de pessoas escritas em etiquetas.",
      "B": "O significado emocional da imagem.",
      "C": "Objetos complexos como rostos e carros inteiros.",
      "D": "O preço do produto na foto.",
      "E": "Características simples e genéricas, como bordas, linhas e texturas básicas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "As CNNs são hierárquicas. As primeiras camadas são 'míopes': só veem riscos e sombras. As camadas do meio veem formas (círculos, quadrados). As últimas camadas veem o objeto completo. É como o cérebro humano processa a visão.",
      "puloDoGato": "Camadas iniciais = Baixo nível (bordas). Camadas finais = Alto nível (objetos).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso ocorre nas camadas profundas (finais).",
        "E": "Correta. São os 'blocos de construção' da visão.",
        "B": "Incorreta. IAs têm dificuldade com subjetividade profunda.",
        "D": "Incorreta. Isso exigiria OCR e lógica de negócio extra.",
        "A": "Incorreta. Mesma lógica da opção D."
      },
      "dicaDeOuro": "Kernel inicial = O detector de riscos e cantos."
    }
  },
  {
    "id": "q_f1_011",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Detecção de Objetos - YOLO",
    "difficulty": "Difícil",
    "statement": "O algoritmo YOLO (You Only Look Once) revolucionou a detecção de objetos principalmente por:",
    "options": {
      "A": "Funcionar apenas em preto e branco.",
      "B": "Não utilizar redes neurais, apenas estatística pura.",
      "C": "Precisar de apenas uma imagem para treinar o modelo inteiro.",
      "D": "Tratar a detecção como um único problema de regressão, prevendo caixas delimitadoras e probabilidades de classe em uma única passagem pela rede, permitindo uso em tempo real.",
      "E": "Ser o mais lento e preciso do mercado."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Antes do YOLO, os sistemas olhavam para a imagem várias vezes (Region Proposals). O YOLO olha uma vez só para a imagem inteira. Isso o torna extremamente rápido, capaz de rodar em vídeos a 60 FPS ou mais.",
      "puloDoGato": "YOLO = Velocidade de tempo real + Detecção e Classificação simultâneas.",
      "cascasDeBanana": {
        "E": "Incorreta. Sua fama é justamente a velocidade, não a lentidão.",
        "D": "Correta. Abordagem de passagem única (single-pass).",
        "C": "Incorreta. Precisa de milhares de imagens rotuladas para o treino.",
        "A": "Incorreta. Funciona perfeitamente com cores (RGB).",
        "B": "Incorreta. É baseado em CNNs profundas."
      },
      "dicaDeOuro": "YOLO = O detetor de objetos mais rápido do oeste."
    }
  },
  {
    "id": "q_f1_012",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Segmentação de Imagem",
    "difficulty": "Médio",
    "statement": "Qual a diferença entre Segmentação Semântica e Segmentação de Instância?",
    "options": {
      "A": "A Semântica só funciona com textos, e a de Instância com fotos.",
      "B": "A de Instância é muito mais simples e antiga.",
      "C": "A Semântica classifica cada pixel em uma categoria (ex: todos os carros são azuis), enquanto a de Instância diferencia objetos individuais da mesma categoria (ex: carro 1 é azul, carro 2 é vermelho).",
      "D": "A Semântica apaga o fundo da imagem, a de Instância não.",
      "E": "Não há diferença, são sinônimos."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Semântica: 'Isso aqui é grama, isso é céu, isso é gente'. Instância: 'Isso é o João, aquela é a Maria, aquele é o José'. A de instância é mais difícil porque precisa separar objetos que estão encostados ou sobrepostos.",
      "puloDoGato": "Semântica = O QUE é o pixel. Instância = A QUAL objeto o pixel pertence.",
      "cascasDeBanana": {
        "E": "Incorreta. São tarefas distintas na visão computacional.",
        "C": "Correta. Diferença clara de granularidade da detecção.",
        "A": "Incorreta. Ambas são técnicas puramente visuais.",
        "B": "Incorreta. Instância é geralmente mais complexa (ex: Mask R-CNN).",
        "D": "Incorreta. Ambas mantêm a informação, apenas classificam diferente."
      },
      "dicaDeOuro": "Semântica = Categoria. Instância = Indivíduo."
    }
  },
  {
    "id": "q_f1_013",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Transfer Learning",
    "difficulty": "Fácil",
    "statement": "Por que o Transfer Learning (Aprendizado por Transferência) é amplamente utilizado em Visão Computacional?",
    "options": {
      "A": "Porque permite aproveitar pesos pré-treinados de modelos gigantes (como ResNet ou VGG) em bases de dados enormes (como ImageNet), exigindo menos dados e tempo para treinar em uma tarefa nova.",
      "B": "Porque ele transfere o dinheiro do projeto para o desenvolvedor.",
      "C": "Porque ele só funciona se você tiver um supercomputador da NASA.",
      "D": "Porque ele deleta as camadas antigas da rede automaticamente.",
      "E": "Porque permite criar modelos sem usar nenhuma linha de código."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Você não precisa ensinar a rede a 'ver bordas' toda vez. Use uma rede que já 'sabe ver' o mundo e apenas ajuste a parte final para o seu problema específico (ex: detectar defeitos em peças). Economiza semanas de treino.",
      "puloDoGato": "Transfer Learning = Conhecimento reaproveitado. Ideal para quem tem poucos dados.",
      "cascasDeBanana": {
        "E": "Incorreta. Exige código para carregar e adaptar o modelo.",
        "A": "Correta. É a prática padrão na indústria.",
        "B": "Incorreta. Piada de escritório.",
        "C": "Incorreta. Pelo contrário, permite treinar em PCs comuns.",
        "D": "Incorreta. Você mantém as camadas e 'congela' ou 'ajusta' os pesos."
      },
      "dicaDeOuro": "Transfer Learning = Subir nos ombros de gigantes (modelos pré-treinados)."
    }
  },
  {
    "id": "q_f1_014",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Data Augmentation",
    "difficulty": "Médio",
    "statement": "A técnica de Data Augmentation em Visão Computacional visa:",
    "options": {
      "A": "Traduzir as legendas das imagens para inglês.",
      "B": "Remover imagens duplicadas do banco de dados.",
      "C": "Diminuir o tamanho das imagens para treinar mais rápido.",
      "D": "Gerar novas imagens de treino a partir das existentes (rotacionando, cortando, mudando o brilho), aumentando a robustez e diversidade do conjunto de dados.",
      "E": "Aumentar o salário dos rotuladores de dados."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se a rede só vir gatos olhando para a esquerda, ela não reconhecerá um gato olhando para a direita. O Augmentation 'engana' a rede criando versões variadas, evitando que ela decore apenas uma posição específica.",
      "puloDoGato": "Data Augmentation = Combate ao Overfitting + Generalização artificial.",
      "cascasDeBanana": {
        "E": "Incorreta. Irrelevante.",
        "D": "Correta. Técnica essencial para treinar com conjuntos de dados pequenos.",
        "C": "Incorreta. Isso é Resizing.",
        "B": "Incorreta. Isso é deduplicação.",
        "A": "Incorreta. Isso é NLP/Tradução."
      },
      "dicaDeOuro": "Augmentation = Criar 10 fotos a partir de 1, mudando o ângulo e a luz."
    }
  },
  {
    "id": "q_f1_015",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Visão Computacional",
    "topic": "Operações Morfológicas",
    "difficulty": "Médio",
    "statement": "Em processamento digital de imagens, a operação morfológica de 'Erosão' tem como principal efeito:",
    "options": {
      "A": "Duplicar o número de objetos na cena.",
      "B": "Transformar a imagem em um vídeo.",
      "C": "Aumentar o brilho da imagem significativamente.",
      "D": "Mudar a cor de fundo para verde.",
      "E": "Remover pequenos ruídos (pixels brancos isolados) e afinar as bordas de objetos em imagens binárias."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Erosão 'come' as bordas. Se você tem um ruído picotado, a erosão faz ele sumir. A operação oposta é a Dilatação, que 'engorda' os objetos.",
      "puloDoGato": "Erosão = Diminui objetos. Dilatação = Aumenta objetos. Útil para limpar máscaras de segmentação.",
      "cascasDeBanana": {
        "C": "Incorreta. Não afeta brilho global de forma direta.",
        "E": "Correta. Conceito clássico de processamento de imagem (OpenCV).",
        "D": "Incorreta. Irrelevante.",
        "A": "Incorreta. Pode até separar objetos que estavam unidos por um fio fino.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Erosão = Passar uma lixa nas bordas do objeto."
    }
  },
  {
    "id": "q_f1_016",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Funcionamento Básico - Perceptron",
    "difficulty": "Fácil",
    "statement": "O Perceptron é a forma mais simples de uma rede neural. Qual a sua função básica em uma tarefa de classificação?",
    "options": {
      "A": "Gerar uma fronteira de decisão linear para separar duas classes.",
      "B": "Prever o preço das ações para os próximos 10 anos.",
      "C": "Encontrar a média aritmética dos dados.",
      "D": "Traduzir textos automaticamente.",
      "E": "Compactar imagens sem perda de qualidade."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Perceptron funciona como um separador. Ele recebe entradas, multiplica por pesos e, se a soma passar de um limite (threshold), ele classifica como 1, senão como 0. É limitado a problemas linearmente separáveis.",
      "puloDoGato": "Perceptron = Separador linear simples. Não resolve o problema do OU-Exclusivo (XOR) sozinho.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é estatística descritiva básica.",
        "A": "Correta. É o 'átomo' das redes neurais para classificação linear.",
        "D": "Incorreta. Isso exige arquiteturas muito mais complexas (Transformers).",
        "E": "Incorreta. Isso seria um Codec ou Autoencoder.",
        "B": "Incorreta. Previsão de séries temporais financeiras exige modelos muito mais robustos."
      },
      "dicaDeOuro": "Perceptron = Uma linha reta que separa o 'sim' do 'não'."
    }
  },
  {
    "id": "q_f1_017",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Funções de Ativação - ReLU",
    "difficulty": "Médio",
    "statement": "A função de ativação ReLU (Rectified Linear Unit) tornou-se o padrão para camadas ocultas em Deep Learning principalmente por:",
    "options": {
      "A": "Sempre retornar o valor 1 para qualquer entrada.",
      "B": "Ser uma função muito complexa que ninguém entende.",
      "C": "Transformar todos os números em negativos.",
      "D": "Evitar ou reduzir o problema do desaparecimento do gradiente (Vanishing Gradient) e ser computacionalmente muito eficiente (f(x) = max(0, x)).",
      "E": "Funcionar apenas em processadores antigos."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Diferente da Sigmoid ou TanH (que 'achatam' valores grandes, fazendo o gradiente sumir), a ReLU mantém o gradiente para valores positivos. Além disso, é só um IF rápido, o que acelera muito o treino.",
      "puloDoGato": "ReLU = f(x) > 0 ? x : 0. Simples, rápida e evita gradientes zerados no lado positivo.",
      "cascasDeBanana": {
        "B": "Incorreta. É a função mais simples de todas.",
        "D": "Correta. Revolucionou o treino de redes profundas.",
        "C": "Incorreta. Ela justamente zera os negativos e mantém os positivos.",
        "E": "Incorreta. É a base da IA moderna em GPUs potentes.",
        "A": "Incorreta. Ela retorna o próprio valor x se for positivo."
      },
      "dicaDeOuro": "ReLU = O 'interruptor' que deixa a rede aprender mais rápido."
    }
  },
  {
    "id": "q_f1_018",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Treinamento - Backpropagation",
    "difficulty": "Difícil",
    "statement": "No treinamento de redes neurais, o algoritmo de Backpropagation (Retropropagação) é utilizado para:",
    "options": {
      "A": "Calcular o gradiente da função de perda em relação aos pesos da rede, permitindo a atualização dos pesos via Gradiente Descendente.",
      "B": "Deletar os neurônios que não estão sendo usados.",
      "C": "Aumentar a resolução da tela do computador.",
      "D": "Inverter a ordem das imagens no banco de dados.",
      "E": "Garantir que a rede nunca erre nenhuma previsão."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Backpropagation é a 'Regra da Cadeia' do Cálculo aplicada em massa. Ele propaga o erro do final da rede para o início, dizendo a cada neurônio o quanto ele precisa mudar para o erro diminuir na próxima vez.",
      "puloDoGato": "Backpropagation = Mensageiro do erro. Ele leva a culpa (erro) do fim para o começo para ajustar os pesos.",
      "cascasDeBanana": {
        "D": "Incorreta. Não tem nada a ver com ordenação de dados.",
        "A": "Correta. Sem ele, a rede não 'aprenderia' com os erros.",
        "E": "Incorreta. Ele busca minimizar o erro, mas a perfeição (zero erro) raramente é possível ou desejada (overfitting).",
        "B": "Incorreta. Isso seria Dropout ou Pruning.",
        "C": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "Backpropagation = Aprender com os erros, de trás para frente."
    }
  },
  {
    "id": "q_f1_019",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Vanishing Gradient Problem",
    "difficulty": "Médio",
    "statement": "O problema do 'Desaparecimento do Gradiente' (Vanishing Gradient) em redes profundas ocorre quando:",
    "options": {
      "A": "A rede aprende rápido demais e estoura os pesos.",
      "B": "Os gradientes tornam-se extremamente pequenos durante a retropropagação, fazendo com que as camadas iniciais da rede parem de aprender.",
      "C": "O computador fica sem memória RAM.",
      "D": "A função de perda é igual a zero desde o início.",
      "E": "O programador esquece de salvar o modelo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Ao multiplicar vários números pequenos (gradientes da Sigmoid, por exemplo) em muitas camadas, o resultado vira quase zero. O sinal do erro não chega nas primeiras camadas, e elas ficam 'estagnadas'.",
      "puloDoGato": "Vanishing Gradient = Morte do aprendizado nas camadas profundas. Solução: ReLU, Batch Norm ou ResNets.",
      "cascasDeBanana": {
        "A": "Incorreta. Problema de hardware, não de gradiente.",
        "B": "Correta. É o motivo pelo qual redes muito fundas eram impossíveis de treinar antigamente.",
        "C": "Incorreta. Isso seria o 'Exploding Gradient'.",
        "D": "Incorreta. Problema de fluxo de trabalho humano.",
        "E": "Incorreta. Se o erro for zero, a rede já atingiu a perfeição teórica."
      },
      "dicaDeOuro": "Vanishing Gradient = O sussurro do erro que some antes de chegar ao ouvido das primeiras camadas."
    }
  },
  {
    "id": "q_f1_020",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização - Dropout",
    "difficulty": "Médio",
    "statement": "A técnica de Dropout consiste em desativar aleatoriamente uma parcela dos neurônios durante cada iteração do treinamento. Qual o objetivo principal desta prática?",
    "options": {
      "A": "Aumentar a precisão no conjunto de treinamento para 100%.",
      "B": "Economizar energia elétrica durante o processamento.",
      "C": "Eliminar a necessidade de funções de ativação.",
      "D": "Evitar o Overfitting, impedindo que a rede se torne excessivamente dependente de neurônios específicos e forçando-a a aprender representações mais robustas.",
      "E": "Tornar a rede mais rápida para fazer previsões (inferência)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Dropout é como um técnico de futebol que tira titulares aleatórios no treino para que o time inteiro aprenda a jogar sem depender de estrelas. Isso gera uma rede muito mais resiliente a dados novos.",
      "puloDoGato": "Dropout = Treino com 'buracos' aleatórios. Só é usado no TREINO, na inferência todos os neurônios são usados.",
      "cascasDeBanana": {
        "B": "Incorreta. O processamento pode até demorar um pouco mais para convergir.",
        "D": "Correta. É uma das formas mais eficazes de regularização.",
        "E": "Incorreta. Na inferência o dropout é desligado, então a velocidade é a mesma.",
        "A": "Incorreta. Ele diminui a precisão no treino para ganhar generalização no teste.",
        "C": "Incorreta. Funções de ativação continuam sendo vitais."
      },
      "dicaDeOuro": "Dropout = Não coloque todos os seus ovos (pesos) em uma cesta só."
    }
  },
  {
    "id": "q_f1_021",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Deep Learning",
    "topic": "Redes Recorrentes - LSTMs",
    "difficulty": "Difícil",
    "statement": "As redes Long Short-Term Memory (LSTM) resolvem o problema de memória de curto prazo das RNNs tradicionais através de:",
    "options": {
      "A": "Substituir neurônios por transistores quânticos.",
      "B": "Salvar os dados em um banco de dados externo tipo SQL.",
      "C": "Utilizar 'Gates' (Portões) que controlam o fluxo de informação, decidindo o que deve ser esquecido, armazenado ou lido do estado da célula.",
      "D": "Aumentar o número de camadas para 1000.",
      "E": "Processar o texto de trás para frente apenas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "As LSTMs têm uma 'esteira' de memória (Cell State). Os gates (Forget, Input, Output) agem como válvulas. Se uma informação é importante (ex: o gênero do sujeito no início da frase), o gate a mantém por muito tempo.",
      "puloDoGato": "Gates = Sigmoids + Multiplicações que filtram a informação. Resolve o Vanishing Gradient em sequências longas.",
      "cascasDeBanana": {
        "D": "Incorreta. Mais camadas sem gates só piorariam o problema do gradiente.",
        "C": "Correta. Mecanismo clássico de controle de memória interna.",
        "B": "Incorreta. A memória é interna aos pesos da rede.",
        "E": "Incorreta. Isso seria uma Bi-RNN (Bidirecional), mas não é o que define a LSTM.",
        "A": "Incorreta. Ficção científica."
      },
      "dicaDeOuro": "LSTM = A rede que sabe o que esquecer e o que lembrar."
    }
  },
  {
    "id": "q_f1_022",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Deep Learning",
    "topic": "Redes Recorrentes - GRUs",
    "difficulty": "Médio",
    "statement": "As Gated Recurrent Units (GRUs) são frequentemente vistas como uma alternativa às LSTMs. Qual a principal característica de uma GRU em comparação a uma LSTM?",
    "options": {
      "A": "Não utiliza a retropropagação através do tempo (BPTT).",
      "B": "É capaz de prever imagens, enquanto a LSTM só prevê texto.",
      "C": "Possui uma estrutura simplificada com menos portões (apenas Reset e Update), sendo geralmente mais rápida para treinar e com desempenho similar em muitos casos.",
      "D": "Possui mais portões e é mais complexa de treinar.",
      "E": "Só funciona com dados de áudio."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A GRU é a 'versão enxuta' da LSTM. Ela combina o estado da célula e o estado oculto em um só. Se você tem poucos dados ou pouco tempo de GPU, a GRU é uma ótima escolha.",
      "puloDoGato": "GRU = Menos parâmetros = Treino mais rápido. Menos complexidade, resultados parecidos.",
      "cascasDeBanana": {
        "D": "Incorreta. Ela tem MENOS portões (2 contra 3 ou 4 da LSTM).",
        "C": "Correta. Eficiência sem perda drástica de qualidade.",
        "E": "Incorreta. Ambas funcionam com qualquer dado sequencial.",
        "A": "Incorreta. Todas as redes recorrentes usam BPTT para o treino.",
        "B": "Incorreta. Ambas focam em sequências (texto, som, séries temporais)."
      },
      "dicaDeOuro": "GRU = A irmã mais rápida e simples da LSTM."
    }
  },
  {
    "id": "q_f1_023",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Deep Learning",
    "topic": "Autoencoders",
    "difficulty": "Médio",
    "statement": "Em um Autoencoder, a camada central com menor número de neurônios, que força a rede a aprender uma representação compactada dos dados, é chamada de:",
    "options": {
      "A": "Softmax Layer.",
      "B": "Decoder.",
      "C": "Encoder.",
      "D": "Input Layer.",
      "E": "Bottleneck (Gargalo)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Autoencoder tenta reconstruir a entrada na saída (X -> X'). Para isso, ele tem que passar por um 'funil' (Bottleneck). Se a rede conseguir reconstruir a imagem passando por esse funil, significa que ela aprendeu a essência dos dados.",
      "puloDoGato": "Bottleneck = Espaço Latente. É onde a 'mágica' da compressão e extração de características acontece.",
      "cascasDeBanana": {
        "C": "Incorreta. O Encoder é a primeira metade da rede.",
        "B": "Incorreta. O Decoder é a segunda metade da rede.",
        "E": "Correta. Termo técnico para a restrição de capacidade.",
        "D": "Incorreta. É a camada de entrada, com tamanho total dos dados.",
        "A": "Incorreta. Usada geralmente para classificação final, não em autoencoders simples."
      },
      "dicaDeOuro": "Bottleneck = O filtro que só deixa passar o que realmente importa."
    }
  },
  {
    "id": "q_f1_024",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Deep Learning",
    "topic": "Batch Normalization",
    "difficulty": "Médio",
    "statement": "Qual o principal benefício da utilização de Batch Normalization (Normalização por Lote) entre as camadas de uma rede profunda?",
    "options": {
      "A": "Mudar a arquitetura da rede de CNN para RNN.",
      "B": "Eliminar a necessidade de dados de teste.",
      "C": "Tornar o modelo mais pesado e lento.",
      "D": "Estabilizar e acelerar o treinamento, permitindo o uso de taxas de aprendizado (learning rates) mais altas e reduzindo a sensibilidade à inicialização dos pesos.",
      "E": "Aumentar o brilho das imagens de entrada."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Cada camada muda a distribuição dos dados para a próxima (Internal Covariate Shift). O Batch Norm re-normaliza as saídas de cada camada para média 0 e variância 1. Isso evita que os gradientes explodam ou sumam tão facilmente.",
      "puloDoGato": "Batch Norm = Estabilizador de fluxo. Deixa o treino muito mais 'suave' e rápido.",
      "cascasDeBanana": {
        "C": "Incorreta. Ele adiciona um pouco de custo, mas compensa com muito menos épocas de treino.",
        "D": "Correta. Prática padrão em quase todas as redes modernas.",
        "B": "Incorreta. Testes são sempre obrigatórios.",
        "E": "Incorreta. Trabalha com os valores dos neurônios, não com estética de imagem.",
        "A": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Batch Norm = Manter a casa em ordem para o treino não desandar."
    }
  },
  {
    "id": "q_f1_025",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Deep Learning",
    "topic": "Hyperparameter Tuning - Learning Rate",
    "difficulty": "Fácil",
    "statement": "Se a Taxa de Aprendizado (Learning Rate) de um modelo for configurada com um valor excessivamente ALTO, o que provavelmente acontecerá durante o treinamento?",
    "options": {
      "A": "O computador desligará automaticamente por segurança.",
      "B": "O treinamento pode divergir, fazendo com que a função de perda (loss) oscile violentamente ou até aumente, em vez de diminuir.",
      "C": "O modelo aprenderá tudo instantaneamente em um segundo.",
      "D": "O modelo se tornará muito pequeno para caber no disco.",
      "E": "A precisão será de exatos 50% para sempre."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Learning Rate é o 'tamanho do passo' no Gradiente Descendente. Se o passo for grande demais, você pula o 'buraco' do mínimo global e cai do outro lado, ou pior, vai cada vez mais longe do objetivo.",
      "puloDoGato": "Learning Rate Alto = Passos de gigante (pode errar o alvo). Learning Rate Baixo = Passos de formiga (demora eras para aprender).",
      "cascasDeBanana": {
        "A": "Incorreta. Rapidez no aprendizado exige equilíbrio, não extremos.",
        "B": "Correta. Fenômeno clássico de divergência no treino.",
        "C": "Incorreta. Hiperparâmetros não afetam o tamanho físico do arquivo do modelo.",
        "D": "Incorreta. O software vai rodar, mas os resultados serão lixo.",
        "E": "Incorreta. Pode ser qualquer valor aleatório ruim."
      },
      "dicaDeOuro": "Learning Rate = O ajuste fino da velocidade de aprendizado."
    }
  },
  {
    "id": "q_f1_026",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Tokenização - Byte-Pair Encoding (BPE)",
    "difficulty": "Difícil",
    "statement": "Por que algoritmos de subword tokenization, como o BPE (usado no GPT), são preferíveis à tokenização simples por palavras?",
    "options": {
      "A": "Porque eles resolvem o problema de palavras fora do vocabulário (OOV), permitindo que a rede entenda palavras novas decompondo-as em partes menores conhecidas.",
      "B": "Porque eles são mais fáceis de ler para seres humanos.",
      "C": "Porque eles eliminam a necessidade de usar GPUs.",
      "D": "Porque eles só funcionam em inglês.",
      "E": "Porque eles diminuem o número de tokens por frase."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Se o modelo conhece 'Incrível' e 'mente', ele consegue entender 'Incrivelmente' mesmo que essa palavra exata nunca tenha aparecido no treino. Isso reduz o tamanho do vocabulário e torna o modelo muito mais versátil.",
      "puloDoGato": "BPE = Equilíbrio entre caracteres e palavras inteiras. Trata morfologia de forma eficiente.",
      "cascasDeBanana": {
        "B": "Incorreta. Tokens BPE podem ser estranhos (ex: 'un', '##happy').",
        "A": "Correta. Fundamental para a robustez linguística dos LLMs.",
        "C": "Incorreta. Tokenização é só o pré-processamento, a GPU continua necessária.",
        "D": "Incorreta. São agnósticos a idioma e funcionam muito bem em português.",
        "E": "Incorreta. Geralmente AUMENTAM o número de tokens (uma palavra vira dois ou três tokens)."
      },
      "dicaDeOuro": "BPE = Desmontar a palavra em 'blocos de montar' (LEGO) conhecidos."
    }
  },
  {
    "id": "q_f1_027",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Word Embeddings - Word2Vec",
    "difficulty": "Médio",
    "statement": "No modelo Word2Vec, a arquitetura 'Skip-gram' tem como objetivo principal:",
    "options": {
      "A": "Pular todas as palavras gramaticalmente incorretas.",
      "B": "Remover stop words automaticamente.",
      "C": "Prever as palavras de contexto a partir de uma única palavra central.",
      "D": "Prever uma palavra central a partir das palavras ao seu redor (contexto).",
      "E": "Contar a frequência das palavras no texto."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Word2Vec tem dois sabores: CBOW (Context -> Word) e Skip-gram (Word -> Context). O Skip-gram é geralmente melhor para representar palavras raras, embora seja mais lento para treinar que o CBOW.",
      "puloDoGato": "Skip-gram = Uma palavra 'gera' o contexto. É a base das representações semânticas densas.",
      "cascasDeBanana": {
        "D": "Incorreta. Este é o funcionamento do CBOW (Continuous Bag of Words).",
        "C": "Correta. Técnica clássica de aprendizado auto-supervisionado.",
        "A": "Incorreta. Irrelevante.",
        "E": "Incorreta. Isso seria TF-IDF ou Bag of Words simples.",
        "B": "Incorreta. Stop words costumam ser mantidas ou removidas antes do Word2Vec."
      },
      "dicaDeOuro": "Skip-gram = 'Dada esta palavra, o que costuma estar perto dela?'"
    }
  },
  {
    "id": "q_f1_028",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Arquitetura Transformers - BERT vs GPT",
    "difficulty": "Difícil",
    "statement": "Qual a diferença fundamental entre a arquitetura do BERT e a do GPT?",
    "options": {
      "A": "BERT é apenas para imagens, GPT é apenas para texto.",
      "B": "O GPT não usa o mecanismo de atenção.",
      "C": "Não há diferença, são a mesma rede com nomes diferentes.",
      "D": "BERT foi feito pela OpenAI e GPT pelo Google.",
      "E": "BERT utiliza apenas o Encoder do Transformer (bidirecional), sendo ideal para tarefas de entendimento; GPT utiliza apenas o Decoder (unidirecional/causal), sendo ideal para geração de texto."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O BERT 'lê' a frase inteira de uma vez para entender o contexto (olha para a esquerda e para a direita). O GPT lê da esquerda para a direita e tenta adivinhar a próxima palavra. Por isso o BERT é melhor para classificar e o GPT para escrever.",
      "puloDoGato": "BERT = Encoder/Bidirecional (Understanding). GPT = Decoder/Causal (Generative).",
      "cascasDeBanana": {
        "A": "Incorreta. Ambos são modelos de linguagem (texto).",
        "E": "Correta. Divisão clássica de paradigmas em NLP.",
        "C": "Incorreta. São arquiteturas distintas para propósitos diferentes.",
        "D": "Incorreta. BERT é do Google, GPT é da OpenAI.",
        "B": "Incorreta. Atenção é o coração de ambos (Transformers)."
      },
      "dicaDeOuro": "BERT = O detetive que analisa o contexto. GPT = O escritor que cria o futuro."
    }
  },
  {
    "id": "q_f1_029",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Análise de Sentimentos",
    "difficulty": "Fácil",
    "statement": "A tarefa de Análise de Sentimentos em NLP consiste em:",
    "options": {
      "A": "Contar quantas letras 'A' existem em um livro.",
      "B": "Corrigir os erros de português de um texto.",
      "C": "Identificar a polaridade emocional de um texto (ex: se um comentário é positivo, negativo ou neutro).",
      "D": "Medir a velocidade de leitura de um usuário.",
      "E": "Traduzir gírias antigas para linguagem formal."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Muito usada em monitoramento de redes sociais e SAC. O modelo tenta captar a opinião do autor. Pode ser binária (Bom/Ruim) ou multiclasse (Estrelas de 1 a 5).",
      "puloDoGato": "Análise de Sentimentos = Classificação de texto baseada em opinião/emoção.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Correção Gramatical ou Spell Checking.",
        "C": "Correta. Aplicação comercial mais comum de NLP.",
        "D": "Incorreta. Métrica de UX, não NLP.",
        "A": "Incorreta. Tarefa trivial de contagem de strings.",
        "E": "Incorreta. Isso seria Tradução ou Estilização."
      },
      "dicaDeOuro": "Análise de Sentimentos = O termômetro da satisfação do cliente."
    }
  },
  {
    "id": "q_f1_030",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 3,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Named Entity Recognition (NER)",
    "difficulty": "Médio",
    "statement": "O que o processo de Named Entity Recognition (Reconhecimento de Entidades Nomeadas) realiza em um texto?",
    "options": {
      "A": "Apaga nomes de pessoas para proteger a privacidade.",
      "B": "Cria uma voz artificial para ler o texto em voz alta.",
      "C": "Resume um texto de 10 páginas em apenas uma linha.",
      "D": "Inverte a ordem dos parágrafos.",
      "E": "Identifica e categoriza termos específicos como nomes de pessoas, organizações, locais, datas e valores monetários dentro de um texto não estruturado."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O NER transforma texto 'bagunçado' em dados úteis. Se o texto diz 'A Petrobras fica no Rio', o NER marca 'Petrobras' como Organização e 'Rio' como Localização. Essencial para indexação e busca inteligente.",
      "puloDoGato": "NER = Extração automática de substantivos próprios e entidades-chave.",
      "cascasDeBanana": {
        "A": "Incorreta. Identificar não é o mesmo que apagar.",
        "E": "Correta. Pilar da extração de conhecimento.",
        "D": "Incorreta. Irrelevante.",
        "C": "Incorreta. Isso é Sumarização.",
        "B": "Incorreta. Isso é Síntese de Voz."
      },
      "dicaDeOuro": "NER = O 'destacador de texto' automático para nomes e lugares."
    }
  },
  {
    "id": "q_f2_001",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Processo - CRISP-DM",
    "difficulty": "Fácil",
    "statement": "No modelo CRISP-DM, qual a fase inicial que foca no entendimento dos requisitos e objetivos do projeto a partir de uma perspectiva de negócio?",
    "options": {
      "A": "Data Understanding (Entendimento de Dados).",
      "B": "Modeling (Modelagem).",
      "C": "Data Preparation (Preparação de Dados).",
      "D": "Deployment (Implantação).",
      "E": "Business Understanding (Entendimento de Negócio)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O CRISP-DM começa pelo Negócio. Se você não sabe o problema que está tentando resolver (ex: aumentar vendas, prever quebra de máquinas), não adianta olhar os dados. É a fase onde definimos o sucesso do projeto.",
      "puloDoGato": "Business Understanding = O 'PORQUÊ'. Data Understanding = O 'O QUÊ'.",
      "cascasDeBanana": {
        "A": "Incorreta. Vem logo depois, focada na qualidade e exploração dos dados brutos.",
        "E": "Correta. Define os objetivos e traduz para metas de Data Science.",
        "C": "Incorreta. É a fase de limpeza e transformação (limpar nulos, normalizar).",
        "B": "Incorreta. Onde os algoritmos são aplicados.",
        "D": "Incorreta. A fase final de colocar em produção."
      },
      "dicaDeOuro": "CRISP-DM = Negócio primeiro, algoritmos depois."
    }
  },
  {
    "id": "q_f2_002",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Conceitos - Data Leakage",
    "difficulty": "Médio",
    "statement": "O fenômeno de 'Data Leakage' (Vazamento de Dados) em Machine Learning ocorre quando:",
    "options": {
      "A": "O modelo é deletado sem querer.",
      "B": "O arquivo CSV é muito grande para abrir no Excel.",
      "C": "O banco de dados é invadido por hackers.",
      "D": "Informações do conjunto de teste ou do futuro 'vazam' para o conjunto de treinamento, criando um modelo artificialmente perfeito que falha na vida real.",
      "E": "A rede Wi-Fi do escritório cai durante o treino."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "É como dar a resposta da prova para o aluno durante a aula. Ex: Colocar a 'causa da morte' como uma variável para prever se o paciente vai morrer. O modelo acerta tudo no treino, mas é inútil para prever pacientes vivos.",
      "puloDoGato": "Data Leakage = Otimismo injustificado. Cuidado ao normalizar dados usando a média do dataset inteiro antes de fazer o split!",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é vazamento de segurança/privacidade, não de modelo.",
        "D": "Correta. Causa de muitos modelos 'mágicos' que dão errado em produção.",
        "B": "Incorreta. Problema de hardware/ferramenta.",
        "E": "Incorreta. Problema de infraestrutura.",
        "A": "Incorreta. Erro humano de gestão de arquivos."
      },
      "dicaDeOuro": "Data Leakage = Usar o futuro para tentar prever o presente."
    }
  },
  {
    "id": "q_f2_003",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Feature Selection - Filter vs Wrapper",
    "difficulty": "Difícil",
    "statement": "Qual a principal diferença entre os métodos de 'Filter' e 'Wrapper' para seleção de variáveis (Feature Selection)?",
    "options": {
      "A": "Filter só funciona com números, Wrapper com textos.",
      "B": "Métodos Filter avaliam as variáveis independentemente do modelo de ML (ex: correlação); métodos Wrapper usam um modelo real para testar subconjuntos de variáveis.",
      "C": "Wrapper é mais rápido que o Filter em todos os casos.",
      "D": "Filter usa algoritmos complexos, Wrapper usa estatística simples.",
      "E": "Não existe diferença técnica."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Filter é rápido: 'Variável X não tem correlação com Y? Fora!'. Wrapper é demorado mas preciso: 'Vou treinar o modelo 100 vezes com diferentes combinações de variáveis e ver qual ganha'.",
      "puloDoGato": "Filter = Estatística pura (Rápido). Wrapper = Tentativa e erro com o modelo (Caro, mas eficaz).",
      "cascasDeBanana": {
        "A": "Incorreta. É o contrário (Wrapper costuma ser mais 'pesado').",
        "B": "Correta. Definição clara baseada no uso ou não do modelo de ML na seleção.",
        "C": "Incorreta. Wrapper é muito mais lento (ex: Forward Selection).",
        "D": "Incorreta. Ambos podem ser adaptados para diversos tipos de dados.",
        "E": "Incorreta. São abordagens fundamentalmente distintas."
      },
      "dicaDeOuro": "Filter = Triagem rápida. Wrapper = Teste de fogo com o modelo."
    }
  },
  {
    "id": "q_f2_004",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Feature Engineering - Encoding",
    "difficulty": "Médio",
    "statement": "Para transformar uma variável categórica nominal (ex: cores 'Vermelho', 'Azul', 'Verde') em números sem criar uma ordem artificial entre elas, a técnica mais recomendada é:",
    "options": {
      "A": "Remover a coluna completamente.",
      "B": "Multiplicar o nome da cor por 10.",
      "C": "Calcular a média das cores.",
      "D": "Label Encoding (atribuir 1, 2, 3).",
      "E": "One-Hot Encoding (criar colunas binárias para cada cor)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se você usar Label Encoding (1, 2, 3), o modelo vai achar que Verde (3) é 'maior' ou 'melhor' que Vermelho (1). No One-Hot, cada cor ganha sua própria coluna (0 ou 1), mantendo a igualdade entre as categorias.",
      "puloDoGato": "One-Hot = Evita hierarquia falsa. Use para dados nominais. Label Encoding = Use para dados ordinais (ex: P, M, G).",
      "cascasDeBanana": {
        "D": "Incorreta. Introduz um viés de ordem que não existe.",
        "E": "Correta. Técnica padrão para categorias nominais.",
        "A": "Incorreta. Você perde informação valiosa.",
        "C": "Incorreta. Não se calcula média de strings sem contexto.",
        "B": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "One-Hot = Transformar nomes em 'sim' ou 'não' para cada opção."
    }
  },
  {
    "id": "q_f2_005",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Dados Desbalanceados - SMOTE",
    "difficulty": "Médio",
    "statement": "Ao lidar com dados desbalanceados (ex: 99% de transações normais e 1% de fraudes), a técnica SMOTE visa resolver o problema através de:",
    "options": {
      "A": "Duplicar exatamente as mesmas linhas da classe minoritária várias vezes.",
      "B": "Ignorar a classe minoritária no treino.",
      "C": "Mudar a cor dos gráficos.",
      "D": "Deletar os dados da classe majoritária.",
      "E": "Criar exemplos sintéticos para a classe minoritária através da interpolação de pontos próximos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Diferente do Oversampling simples (que só copia linhas), o SMOTE cria 'novas' fraudes parecidas com as que já existem. Isso ajuda o modelo a aprender a fronteira de decisão em vez de apenas decorar as fraudes existentes.",
      "puloDoGato": "SMOTE = Synthetic Minority Over-sampling Technique. Cria dados 'novos', não clones.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria Undersampling.",
        "E": "Correta. Gera diversidade artificial na classe rara.",
        "C": "Incorreta. Estético, não algorítmico.",
        "B": "Incorreta. O modelo nunca aprenderia a detectar a fraude.",
        "A": "Incorreta. Isso é o Random Oversampling comum (pode causar overfitting)."
      },
      "dicaDeOuro": "SMOTE = Fabricar novos dados para quem está em falta."
    }
  },
  {
    "id": "q_f2_006",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Viés vs Variância",
    "difficulty": "Difícil",
    "statement": "No trade-off entre Viés (Bias) e Variância, um modelo com 'Alta Variância' é caracterizado por:",
    "options": {
      "A": "Ser muito simples e errar tanto no treino quanto no teste.",
      "B": "Ser um modelo perfeito em todos os cenários.",
      "C": "Ser muito complexo e sensível a pequenas oscilações nos dados de treino, apresentando baixo erro no treino mas alto erro no teste (Overfitting).",
      "D": "Ter um tempo de resposta muito lento.",
      "E": "Usar poucas variáveis de entrada."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Alta Variância = O modelo 'varia' muito se você mudar um dado no treino. Ele decora o ruído. Alto Viés = O modelo tem uma ideia 'fixa' e errada do mundo, ignorando a complexidade dos dados (Underfitting).",
      "puloDoGato": "Variância Alta = Overfitting. Viés Alto = Underfitting.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Alto Viés.",
        "C": "Correta. Excesso de ajuste aos dados específicos de treino.",
        "B": "Incorreta. O objetivo é o equilíbrio (sweet spot), a perfeição total é rara.",
        "D": "Incorreta. Performance técnica não define viés/variância.",
        "E": "Incorreta. Poucas variáveis costumam gerar Alto Viés."
      },
      "dicaDeOuro": "Alta Variância = Especialista demais em um único exemplo. Alto Viés = Simplista demais."
    }
  },
  {
    "id": "q_f2_007",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "Validação - K-Fold Cross-Validation",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem de utilizar K-Fold Cross-Validation em vez de um simples split Treino/Teste?",
    "options": {
      "A": "Garante que todos os dados sejam usados tanto para treino quanto para teste em diferentes rodadas, fornecendo uma estimativa mais robusta e menos enviesada do desempenho do modelo.",
      "B": "É muito mais rápido de processar.",
      "C": "Ocupa menos espaço em disco.",
      "D": "Funciona apenas para modelos de regressão linear.",
      "E": "Não precisa de uma função de perda."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "No K-Fold, você divide os dados em K partes (ex: 5). O modelo treina 5 vezes, cada vez usando uma parte diferente como teste. A média dos resultados é muito mais confiável do que uma única 'sorte' ou 'azar' de um split fixo.",
      "puloDoGato": "K-Fold = Estabilidade estatística. Essencial para datasets pequenos.",
      "cascasDeBanana": {
        "B": "Incorreta. É K vezes mais lento, pois treina o modelo K vezes.",
        "A": "Correta. Uso integral dos dados para avaliação robusta.",
        "C": "Incorreta. O volume de dados é o mesmo.",
        "E": "Incorreta. Funções de perda são necessárias em cada rodada de treino.",
        "D": "Incorreta. Funciona para qualquer algoritmo de ML."
      },
      "dicaDeOuro": "K-Fold = O rodízio completo para garantir que o modelo é bom de verdade."
    }
  },
  {
    "id": "q_f2_008",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Ciência de Dados",
    "topic": "EDA - Análise Exploratória",
    "difficulty": "Fácil",
    "statement": "Qual o objetivo principal da Análise Exploratória de Dados (EDA)?",
    "options": {
      "A": "Compreender a estrutura, padrões, anomalias e distribuições dos dados antes de aplicar modelos de Machine Learning.",
      "B": "Deletar metade dos dados para o treino ser rápido.",
      "C": "Transformar o projeto em uma apresentação de slides colorida.",
      "D": "Publicar os resultados em um jornal famoso.",
      "E": "Escrever o código do aplicativo final."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "EDA é a 'investigação'. É onde você descobre que tem idades negativas, salários de 1 bilhão ou que 90% dos dados estão faltando em uma coluna. Sem EDA, você constrói modelos sobre areia movediça.",
      "puloDoGato": "EDA = Histogramas, Boxplots e Matrizes de Correlação. Conheça seu dado antes de modelar.",
      "cascasDeBanana": {
        "D": "Incorreta. Pode ser uma consequência, mas não o objetivo técnico.",
        "A": "Correta. Base fundamental de qualquer projeto de dados sério.",
        "B": "Incorreta. Deletar dados sem critério é erro grave.",
        "C": "Incorreta. Visualização é parte da EDA, mas o foco é o entendimento técnico.",
        "E": "Incorreta. O código de produção vem depois da validação da hipótese."
      },
      "dicaDeOuro": "EDA = O trabalho de detetive antes de dar o veredito (modelo)."
    }
  },
  {
    "id": "q_f2_009",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Seleção - loc vs iloc",
    "difficulty": "Médio",
    "statement": "No Pandas, qual a diferença fundamental entre os indexadores '.loc' e '.iloc'?",
    "options": {
      "A": "iloc só funciona com números negativos.",
      "B": "loc acessa dados através de rótulos (labels/nomes); iloc acessa dados através de posições inteiras (índices 0, 1, 2...).",
      "C": "Não há diferença, são nomes alternativos.",
      "D": "loc é mais rápido que iloc.",
      "E": "loc é para linhas, iloc é para colunas."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "loc['Rio de Janeiro'] busca pelo NOME da linha ou coluna. iloc[2] busca pelo que está na TERCEIRA posição, não importa o nome que ela tenha. Decore: 'i' de iloc vem de 'integer' (inteiro).",
      "puloDoGato": "loc = Rótulo. iloc = Posição. Se o seu índice for numérico mas não sequencial (ex: 10, 20, 30), a diferença é vital!",
      "cascasDeBanana": {
        "A": "Incorreta. Ambos selecionam linhas e colunas.",
        "B": "Correta. Diferença técnica essencial para evitar erros de seleção.",
        "C": "Incorreta. iloc costuma ser ligeiramente mais rápido por ser acesso direto à memória, mas a diferença é mínima.",
        "D": "Incorreta. iloc aceita qualquer inteiro (positivo ou negativo para contar de trás pra frente).",
        "E": "Incorreta. Usá-los errado gera erros de KeyError ou IndexError."
      },
      "dicaDeOuro": "loc = Nome da rua. iloc = Número da casa na sequência da rua."
    }
  },
  {
    "id": "q_f2_010",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Dados Ausentes - fillna/dropna",
    "difficulty": "Médio",
    "statement": "Para tratar valores nulos (NaN) em um DataFrame, qual o comportamento do método '.fillna(0)'?",
    "options": {
      "A": "Ele avisa o usuário que existem erros no arquivo.",
      "B": "Ele substitui todos os valores nulos pelo valor numérico 0.",
      "C": "Ele transforma o DataFrame em uma lista vazia.",
      "D": "Ele calcula a média da coluna e coloca no lugar do nulo.",
      "E": "Ele deleta todas as linhas que contêm nulos."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O fillna 'preenche' o vazio. Você pode passar um valor fixo (como 0), a média (df.mean()) ou o valor anterior (method='ffill'). O dropna é que 'joga fora' a linha ou coluna inteira.",
      "puloDoGato": "fillna = Imputação. dropna = Exclusão. Cuidado para não enviesar os dados ao preencher tudo com zero!",
      "cascasDeBanana": {
        "A": "Incorreta. Este é o comportamento do dropna().",
        "B": "Correta. Ação direta de preenchimento de lacunas.",
        "C": "Incorreta. Ele só faria isso se você passasse explicitamente a média como argumento.",
        "D": "Incorreta. Ele executa a ação silenciosamente se o código estiver correto.",
        "E": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "fillna = O 'tapa-buraco' oficial do Pandas."
    }
  },
  {
    "id": "q_f2_011",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Agregação - GroupBy",
    "difficulty": "Médio",
    "statement": "O processo de '.groupby()' no Pandas segue a estratégia de:",
    "options": {
      "A": "Split-Apply-Combine (Dividir-Aplicar-Combinar).",
      "B": "Sort-Merge-Join.",
      "C": "Map-Reduce-Filter.",
      "D": "Read-Write-Execute.",
      "E": "Select-From-Where."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "1. Split: Divide os dados em grupos (ex: por cidade). 2. Apply: Faz algo em cada grupo (ex: soma os salários). 3. Combine: Junta tudo em uma nova tabela de resultados.",
      "puloDoGato": "GroupBy é o equivalente ao 'GROUP BY' do SQL, mas com muito mais flexibilidade para aplicar funções customizadas.",
      "cascasDeBanana": {
        "B": "Incorreta. São algoritmos de join de banco de dados.",
        "A": "Correta. Filosofia oficial documentada do Pandas.",
        "C": "Incorreta. Termos de programação funcional/Big Data parecidos, mas não a definição do GroupBy.",
        "D": "Incorreta. Permissões de sistema operacional.",
        "E": "Incorreta. Cláusulas SQL."
      },
      "dicaDeOuro": "GroupBy = Agrupar para resumir informações."
    }
  },
  {
    "id": "q_f2_012",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Reshaping - Pivot vs Melt",
    "difficulty": "Difícil",
    "statement": "Qual a função do método '.melt()' no Pandas?",
    "options": {
      "A": "Mesclar dois DataFrames lateralmente.",
      "B": "Deletar todas as colunas que não são numéricas.",
      "C": "Derreter o processador para acelerar o cálculo.",
      "D": "Criar uma tabela dinâmica (Pivot Table) a partir de dados brutos.",
      "E": "Transformar um DataFrame do formato 'largo' (wide) para o formato 'longo' (long), 'desempilhando' colunas em linhas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine que você tem colunas 'Jan', 'Fev', 'Mar'. O melt transforma isso em duas colunas: 'Mês' e 'Valor'. Isso é essencial para fazer gráficos e análises estatísticas modernas (Tidy Data).",
      "puloDoGato": "Pivot = Largo (Wide). Melt = Longo (Long).",
      "cascasDeBanana": {
        "D": "Incorreta. Este é o papel do pivot() ou pivot_table().",
        "E": "Correta. Operação fundamental de reestruturação de dados.",
        "C": "Incorreta. Piada técnica.",
        "A": "Incorreta. Isso seria o merge() ou concat().",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "melt = Derreter as colunas para que elas virem linhas."
    }
  },
  {
    "id": "q_f2_013",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Performance - Vetorização",
    "difficulty": "Médio",
    "statement": "Por que operações vetorizadas no Pandas/NumPy são preferíveis ao uso de loops 'for' em Python nativo?",
    "options": {
      "A": "Porque operações vetorizadas são implementadas em C de baixo nível, permitindo o processamento de blocos inteiros de dados simultaneamente, sendo ordens de magnitude mais rápidas.",
      "B": "Porque o código fica mais longo e difícil de ler.",
      "C": "Não há diferença de velocidade perceptível.",
      "D": "Porque loops 'for' gastam muita internet.",
      "E": "Porque loops 'for' são proibidos na versão atual do Python."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Python é lento para loops. Quando você faz 'df['col'] * 2', o Pandas não faz um 'for'. Ele manda o bloco de memória direto para uma rotina em C super otimizada. É a diferença entre levar 1 minuto ou 1 milissegundo.",
      "puloDoGato": "Vetorização = 'Pense em colunas, não em células'. Evite .iterrows() sempre que puder!",
      "cascasDeBanana": {
        "E": "Incorreta. Loops continuam existindo para lógica de controle.",
        "A": "Correta. Motivo principal da existência do ecossistema científico do Python.",
        "B": "Incorreta. Pelo contrário, o código fica muito mais conciso (uma linha).",
        "D": "Incorreta. Processamento local, não de rede.",
        "C": "Incorreta. Em milhões de linhas, a diferença é brutal."
      },
      "dicaDeOuro": "Vetorização = Atropelar os dados com performance de C."
    }
  },
  {
    "id": "q_f2_014",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Séries Temporais - DatetimeIndex",
    "difficulty": "Médio",
    "statement": "Ao converter uma coluna de datas para o tipo 'datetime64' no Pandas, qual funcionalidade poderosa é habilitada?",
    "options": {
      "A": "O computador ajusta o relógio do sistema automaticamente.",
      "B": "A coluna passa a ocupar 10x mais espaço.",
      "C": "A capacidade de realizar extrações temporais simples (ex: df.dt.month, df.dt.day_name()) e realizar ressampling (re-amostragem) por períodos (dia, mês, ano).",
      "D": "A coluna impede a entrada de datas futuras.",
      "E": "As datas são traduzidas para o calendário chinês."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Datas em texto são apenas letras. Em datetime, o Pandas 'entende' o tempo. Você pode somar 10 dias, descobrir se era um domingo ou agrupar a média de vendas por trimestre com um único comando (resample).",
      "puloDoGato": "Accessor .dt = O canivete suíço para lidar com datas e horas sem sofrer.",
      "cascasDeBanana": {
        "B": "Incorreta. O formato binário é muito eficiente.",
        "C": "Correta. Facilita enormemente a análise de séries temporais.",
        "A": "Incorreta. Hardware vs Software.",
        "E": "Incorreta. Segue o padrão ISO e localidade do sistema.",
        "D": "Incorreta. Não há essa validação nativa sem código extra."
      },
      "dicaDeOuro": "Datetime = Transformar números em tempo com inteligência."
    }
  },
  {
    "id": "q_f2_015",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 2,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Joins - Merge",
    "difficulty": "Fácil",
    "statement": "No método '.merge()', qual o tipo de join que retorna apenas as linhas que possuem chaves correspondentes em AMBOS os DataFrames?",
    "options": {
      "A": "Left Join.",
      "B": "Cross Join.",
      "C": "Outer Join.",
      "D": "Inner Join.",
      "E": "Right Join."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Inner Join é o join da 'interseção'. Se um ID só existe na tabela A e não na B, ele some do resultado final. É o comportamento padrão do merge() no Pandas.",
      "puloDoGato": "Inner = Interseção. Outer = União. Left = Prioriza a tabela da esquerda.",
      "cascasDeBanana": {
        "A": "Incorreta. Mantém todos da esquerda, mesmo sem par na direita.",
        "D": "Correta. Comportamento clássico de interseção de conjuntos.",
        "E": "Incorreta. Mantém todos da direita.",
        "C": "Incorreta. Mantém todos de ambos (gera muitos NaNs).",
        "B": "Incorreta. Faz o produto cartesiano (combina tudo com tudo)."
      },
      "dicaDeOuro": "Inner Join = Só quem tem par entra na festa."
    }
  },
  {
    "id": "q_f2_016",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Drift",
    "difficulty": "Médio",
    "statement": "No contexto de MLOps, o que caracteriza o fenômeno de 'Concept Drift' (Desvio de Conceito) em um modelo de Machine Learning em produção?",
    "options": {
      "A": "A relação estatística entre as variáveis de entrada (features) e a variável alvo (target) muda ao longo do tempo, degradando a performance do modelo.",
      "B": "O modelo consome mais memória RAM ao longo do tempo (Memory Leak).",
      "C": "O código-fonte do modelo foi alterado acidentalmente no repositório.",
      "D": "O servidor onde o modelo está hospedado sofre flutuações de energia.",
      "E": "A distribuição dos dados de entrada muda, mas o conceito que está sendo previsto permanece exatamente o mesmo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Concept Drift é quando as regras do jogo mudam. Exemplo: um modelo treinado para detectar fraudes em 2019 pode falhar em 2021 porque os fraudadores inventaram novos golpes. O que antes não era fraude, agora é.",
      "puloDoGato": "Concept Drift = A relação X -> Y mudou. Data Drift = A distribuição do X mudou (mas a regra ainda é a mesma).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é um problema de controle de versão.",
        "A": "Correta. Define exatamente a mudança na variável alvo ou na relação fundamental.",
        "E": "Incorreta. Isso descreve o Data Drift (Covariate Shift).",
        "B": "Incorreta. Problema de infraestrutura/código.",
        "D": "Incorreta. Problema de hardware."
      },
      "dicaDeOuro": "Concept Drift = O mundo mudou, seu modelo ficou burro."
    }
  },
  {
    "id": "q_f2_017",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Continuous Training (CT)",
    "difficulty": "Médio",
    "statement": "Uma arquitetura madura de MLOps implementa pipelines de CI/CD/CT. Qual o objetivo principal do pipeline de Continuous Training (CT)?",
    "options": {
      "A": "Treinar os desenvolvedores juniores continuamente na linguagem Python.",
      "B": "Gerar faturas automáticas para o uso da API de inferência.",
      "C": "Automatizar o retreinamento e a reavaliação dos modelos em produção usando novos dados para combater a degradação do modelo.",
      "D": "Testar as falhas de segurança do servidor de banco de dados 24/7.",
      "E": "Garantir que o código da aplicação front-end seja atualizado sem downtime."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No MLOps, CI/CD cuida do código. O CT (Continuous Training) cuida da inteligência. Quando o modelo fica desatualizado (devido ao drift), o CT entra em ação, pega os dados novos, treina de novo e valida se ficou melhor.",
      "puloDoGato": "CI = Integração de Código. CD = Deploy de Código. CT = Treinamento Contínuo do Modelo.",
      "cascasDeBanana": {
        "A": "Incorreta. Treinamento de pessoas (RH).",
        "B": "Incorreta. Isso é o CD (Continuous Deployment) clássico.",
        "C": "Correta. Mantém o modelo 'fresco' e preciso na produção.",
        "D": "Incorreta. Segurança contínua (DevSecOps).",
        "E": "Incorreta. FinOps ou billing."
      },
      "dicaDeOuro": "CT = Máquina treinando a máquina no piloto automático."
    }
  },
  {
    "id": "q_f2_018",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Feature Store",
    "difficulty": "Médio",
    "statement": "Em uma plataforma de MLOps corporativa, qual a função central de uma 'Feature Store'?",
    "options": {
      "A": "Armazenar e versionar variáveis (features) calculadas, servindo como uma fonte única de verdade tanto para o treinamento offline quanto para a inferência online.",
      "B": "Guardar logs de erro gerados durante a inferência.",
      "C": "Ser um marketplace para vender modelos de IA para outras empresas.",
      "D": "Fazer backup exclusivo do código-fonte do modelo.",
      "E": "Hospedar a interface gráfica onde o usuário envia fotos para o modelo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A Feature Store resolve a dor de cabeça do 'Treino vs Produção'. Ela calcula coisas complexas (ex: média de gastos do cliente nos últimos 30 dias) e salva. Assim, o modelo puxa os mesmos dados idênticos tanto na hora de treinar quanto na hora de fazer a previsão em tempo real.",
      "puloDoGato": "Feature Store evita o temido 'Training-Serving Skew' (diferença no código de cálculo entre o laboratório e a produção).",
      "cascasDeBanana": {
        "C": "Incorreta. Não é uma loja comercial.",
        "A": "Correta. Centraliza e reaproveita variáveis para ML.",
        "B": "Incorreta. Isso é papel de um sistema de monitoramento (ex: ELK Stack).",
        "E": "Incorreta. Isso é a aplicação cliente.",
        "D": "Incorreta. Isso é o Git (Github/Gitlab)."
      },
      "dicaDeOuro": "Feature Store = A despensa de ingredientes prontos para o seu modelo."
    }
  },
  {
    "id": "q_f2_019",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "A/B Testing e Shadow Deployment",
    "difficulty": "Difícil",
    "statement": "Ao implantar um novo modelo de machine learning crítico, a equipe decide usar a estratégia de 'Shadow Deployment'. O que isso significa?",
    "options": {
      "A": "O modelo novo é implantado em servidores localizados na dark web.",
      "B": "O tráfego é dividido em 50% para o modelo antigo e 50% para o novo modelo.",
      "C": "O novo modelo recebe o tráfego de produção em paralelo com o modelo atual, processa as previsões, mas suas saídas NÃO são devolvidas ao usuário, servindo apenas para análise de performance.",
      "D": "Os usuários decidem manualmente qual modelo desejam usar através de um botão no app.",
      "E": "O modelo antigo é desligado e o novo assume 100% da carga imediatamente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Shadow Deployment é jogar no 'modo invisível'. O modelo novo roda na vida real, recebe os mesmos dados que o antigo, faz a previsão, mas ninguém vê. É o teste definitivo de estabilidade antes de confiar nele.",
      "puloDoGato": "Canary/A-B Testing = O usuário vê a resposta do novo modelo (ex: 5% dos usuários). Shadow = Resposta é descartada/logada, usuário só vê o modelo antigo.",
      "cascasDeBanana": {
        "C": "Correta. Executa em paralelo de forma transparente sem impacto no negócio.",
        "B": "Incorreta. Isso é Teste A/B ou Canary pesado.",
        "A": "Incorreta. Completamente fora de contexto.",
        "E": "Incorreta. Isso é Blue/Green ou Big Bang deployment.",
        "D": "Incorreta. Isso é User Choice/Opt-in."
      },
      "dicaDeOuro": "Shadow = O modelo novo age como um fantasma copiando o antigo."
    }
  },
  {
    "id": "q_f2_020",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Registro e Versionamento de Modelos",
    "difficulty": "Fácil",
    "statement": "Qual ferramenta open-source é amplamente conhecida como o padrão de mercado para rastreamento de experimentos, versionamento e registro (Model Registry) no ciclo de vida de Machine Learning?",
    "options": {
      "A": "Redis.",
      "B": "React.",
      "C": "MLflow.",
      "D": "Jenkins.",
      "E": "MongoDB."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "MLflow é o 'Git + Docker' para modelos. Ele salva os hiperparâmetros que você usou, a métrica de erro, o arquivo `.pkl` do modelo e diz qual versão está em produção.",
      "puloDoGato": "MLflow resolve o caos de cientistas de dados salvando arquivos como 'modelo_final_mesmo_v3.pkl'.",
      "cascasDeBanana": {
        "A": "Incorreta. Banco de dados em memória.",
        "C": "Correta. Ferramenta referência para ML Lifecycle criada pela Databricks.",
        "D": "Incorreta. Ferramenta de CI/CD genérica.",
        "E": "Incorreta. Banco NoSQL de documentos.",
        "B": "Incorreta. Biblioteca frontend."
      },
      "dicaDeOuro": "MLflow = O diário de bordo e cofre do Cientista de Dados."
    }
  },
  {
    "id": "q_f2_021",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Data Lake vs Data Warehouse",
    "difficulty": "Médio",
    "statement": "Ao contrastar um Data Warehouse clássico com um Data Lake moderno, qual afirmativa é verdadeira em relação ao processamento dos dados?",
    "options": {
      "A": "No Data Warehouse aplica-se o processo ETL (Extract, Transform, Load), onde a transformação ocorre antes do armazenamento, enquanto no Data Lake predomina o ELT (Extract, Load, Transform).",
      "B": "O Data Warehouse suporta primariamente dados não-estruturados (áudios, vídeos), enquanto o Data Lake foca em tabelas relacionais.",
      "C": "Data Lakes não podem ser consultados via SQL em nenhuma hipótese.",
      "D": "No Data Lake o esquema é definido antes da carga (Schema-on-Write), enquanto no Data Warehouse o esquema é definido na leitura (Schema-on-Read).",
      "E": "Ambos armazenam os dados exclusivamente em memória RAM volátil."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "No Data Warehouse (ETL), você precisa arrumar a casa (Transformar) antes de guardar a tralha (Load). No Data Lake (ELT), você joga toda a tralha no quarto do jeito que veio (Load) e só organiza quando for usar (Transform/Schema-on-read).",
      "puloDoGato": "Data Warehouse = Estruturado (Relacional, ETL, Schema-on-write). Data Lake = Tudo misturado (Bruto, ELT, Schema-on-read).",
      "cascasDeBanana": {
        "D": "Incorreta. A definição está exatamente invertida.",
        "B": "Incorreta. É o contrário (Data Lake lida melhor com vídeos e áudios).",
        "A": "Correta. Essa diferença de pipeline de dados define a arquitetura moderna.",
        "E": "Incorreta. Ambos usam armazenamento persistente (discos/cloud storage).",
        "C": "Incorreta. Motores como Presto, Athena ou Spark SQL permitem consultas SQL em Data Lakes."
      },
      "dicaDeOuro": "Warehouse = Água mineral engarrafada. Data Lake = O lago com peixe, lama e água bruta."
    }
  },
  {
    "id": "q_f2_022",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Modelagem Multidimensional (Star Schema)",
    "difficulty": "Difícil",
    "statement": "No contexto da Modelagem Dimensional (Star Schema), qual o papel de uma Tabela Fato (Fact Table)?",
    "options": {
      "A": "Deletar dados antigos que já não são mais utilizados nos dashboards.",
      "B": "Armazenar as descrições textuais, categorias e atributos hierárquicos do negócio (ex: nome do cliente, estado, categoria do produto).",
      "C": "Conter métricas quantitativas de negócio (valores numéricos e aditivos, ex: valor da venda, quantidade) e chaves estrangeiras que apontam para as tabelas dimensão.",
      "D": "Servir como tabela de logs de erros do sistema ETL.",
      "E": "Garantir a normalização até a 3ª Forma Normal (3NF) para otimizar operações transacionais (OLTP)."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No Star Schema (Estrela), o 'centro' é a Tabela Fato. Ela grava o evento que aconteceu, por exemplo, a Venda. A Venda tem números (dinheiro, quantidade). As pontas da estrela são as Dimensões (QUEM comprou, ONDE comprou, QUANDO comprou).",
      "puloDoGato": "Fato = Métricas, Números, Eventos (O que aconteceu?). Dimensão = Contexto, Texto (Como, onde, quem?).",
      "cascasDeBanana": {
        "B": "Incorreta. Esta é a definição clássica de uma Tabela Dimensão (Dimension Table).",
        "C": "Correta. Coração analítico do modelo dimensional.",
        "D": "Incorreta. Logs de sistema não entram no modelo analítico de negócios.",
        "E": "Incorreta. Data Warehouse é desnormalizado para leitura (OLAP), não usa 3NF que é para OLTP.",
        "A": "Incorreta. Manutenção não define o propósito estrutural."
      },
      "dicaDeOuro": "Fatos se medem (Soma, Média). Dimensões se agrupam (Por Cliente, Por Mês)."
    }
  },
  {
    "id": "q_f2_023",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Paradigmas - MapReduce",
    "difficulty": "Médio",
    "statement": "No ecossistema Hadoop tradicional, o paradigma de programação 'MapReduce' processa grandes volumes de dados baseando-se em duas etapas principais. O que ocorre na etapa 'Reduce'?",
    "options": {
      "A": "Os dados são compactados (zippados) antes de serem enviados pela rede.",
      "B": "Os resultados intermediários gerados pela etapa Map são agregados e consolidados para formar a saída final.",
      "C": "O banco de dados é esvaziado para receber a nova carga (Truncate).",
      "D": "Os dados são divididos em pequenos blocos e enviados aos nós de computação para processamento isolado.",
      "E": "O tamanho do cluster de servidores é reduzido para economizar energia após o fim do processamento."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Map: Conta as palavras em mil livros espalhados por mil servidores. Reduce: Junta todas essas contagens em uma lista final consolidada ('a': 5000 vezes, 'o': 4500 vezes).",
      "puloDoGato": "Map = Paralelizar, filtrar e transformar. Reduce = Agrupar e resumir os resultados dispersos.",
      "cascasDeBanana": {
        "A": "Incorreta. Essa é essencialmente a etapa inicial e a fase de Map.",
        "B": "Correta. Consolidação final após o shuffle/sort.",
        "C": "Incorreta. Não tem a ver com redução de infraestrutura.",
        "D": "Incorreta. Compressão ocorre, mas não é a definição algorítmica do Reduce.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Map: Cada um faz a sua parte. Reduce: Junta o trabalho de todo mundo."
    }
  },
  {
    "id": "q_f2_024",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Processamento In-Memory (Apache Spark)",
    "difficulty": "Médio",
    "statement": "Qual é a principal vantagem arquitetural do Apache Spark sobre o Hadoop MapReduce clássico para processamento de Big Data?",
    "options": {
      "A": "Spark não permite o uso de SQL, forçando o uso de machine learning.",
      "B": "Spark realiza o processamento predominantemente em memória RAM (In-Memory), evitando a alta latência de leitura e escrita em disco exigida a cada passo do MapReduce.",
      "C": "Spark armazena dados para sempre gratuitamente sem usar disco.",
      "D": "Spark dispensa o uso de nós (nodes), operando em um único supercomputador mainframe.",
      "E": "Spark utiliza exclusivamente a linguagem Assembly para ganhar velocidade no hardware."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O MapReduce é teimoso: ele lê do HD, processa, escreve no HD, lê do HD de novo... O Spark é inteligente: ele joga tudo na memória RAM e processa 100x mais rápido. Ele só escreve no disco no final, se você mandar.",
      "puloDoGato": "Spark = In-Memory Computing. O segredo da velocidade e dominância atual do Spark no mercado de dados.",
      "cascasDeBanana": {
        "A": "Incorreta. Spark é escrito em Scala/Java.",
        "B": "Correta. Reduz drasticamente o overhead de I/O em disco.",
        "C": "Incorreta. Spark é altamente distribuído em clusters.",
        "D": "Incorreta. Possui módulo Spark SQL extremamente popular.",
        "E": "Incorreta. Não tem a ver com custo ou gratuidade de storage."
      },
      "dicaDeOuro": "Spark = Velocidade da Memória RAM contra a lentidão do Disco."
    }
  },
  {
    "id": "q_f2_025",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Modelagem - Snowflake vs Star Schema",
    "difficulty": "Fácil",
    "statement": "Ao modelar um Data Warehouse, a principal diferença visual e técnica entre um modelo 'Estrela' (Star Schema) e um 'Floco de Neve' (Snowflake Schema) é que:",
    "options": {
      "A": "O Star Schema suporta menos dados.",
      "B": "O Snowflake só pode ser utilizado no inverno.",
      "C": "No Snowflake, as tabelas Dimensão são normalizadas (divididas em múltiplas tabelas relacionadas, ex: Produto -> Categoria -> Subcategoria), criando 'ramificações' em relação à Tabela Fato.",
      "D": "Não existe Tabela Fato no Snowflake.",
      "E": "No Snowflake, as tabelas Dimensão são desnormalizadas, enquanto no Star Schema elas são normalizadas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No Star Schema, todas as informações de Produto (Nome, Categoria, Marca) ficam em UMA tabela só. No Floco de Neve, eles separam a Categoria e a Marca em outras tabelas para economizar espaço (normalização), o que deixa o desenho parecendo um floco de neve com galhos.",
      "puloDoGato": "Star Schema = Dimensões gordinhas e simples (desnormalizado). Snowflake = Dimensões quebradas em várias (normalizado).",
      "cascasDeBanana": {
        "A": "Incorreta. Piada técnica.",
        "B": "Incorreta. É exatamente o inverso.",
        "C": "Correta. Normalização de dimensões é a essência do Snowflake.",
        "D": "Incorreta. Suportam volumes similares, mas o query costura tabelas difere.",
        "E": "Incorreta. Ambos possuem Fato no centro."
      },
      "dicaDeOuro": "Floco de Neve = Tabela conectada em tabela conectada em tabela."
    }
  },
  {
    "id": "q_f2_026",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Estatística Descritiva - Medidas de Tendência Central",
    "difficulty": "Fácil",
    "statement": "Em um conjunto de dados assimétrico com valores extremos (outliers), qual medida de tendência central é considerada a mais robusta para representar o 'ponto central' dos dados?",
    "options": {
      "A": "Mediana (Median).",
      "B": "Desvio Padrão.",
      "C": "Média (Mean).",
      "D": "Variância.",
      "E": "Moda (Mode)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Se Bill Gates entrar num bar com 99 pessoas comuns, a MÉDIA salarial de todos ali dentro pula para 1 bilhão. Mas a MEDIANA (o salário de quem está exatamente no meio da fila) continua sendo normal. Por isso a mediana ignora os ricaços (outliers).",
      "puloDoGato": "A média puxa para o lado do outlier. A mediana é a rainha da resistência contra anomalias.",
      "cascasDeBanana": {
        "C": "Incorreta. A média é altamente sensível a outliers.",
        "A": "Correta. Divide o dataset em 50/50 e não sofre impacto dos extremos.",
        "E": "Incorreta. A moda é apenas o valor mais frequente, não indica centralidade confiável em dados contínuos com outliers.",
        "B": "Incorreta. É medida de dispersão, não de tendência central.",
        "D": "Incorreta. Medida de dispersão."
      },
      "dicaDeOuro": "Tem outlier? Chame a Mediana para não distorcer a realidade."
    }
  },
  {
    "id": "q_f2_027",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Distribuição Normal (Curva de Gauss)",
    "difficulty": "Médio",
    "statement": "Segundo a Regra Empírica (68-95-99.7) em uma Distribuição Normal Padrão, qual a porcentagem aproximada dos dados que se encontram entre a média e dois desvios padrões (±2σ)?",
    "options": {
      "A": "95%",
      "B": "68%",
      "C": "100%",
      "D": "99.7%",
      "E": "50%"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Decore: 1 desvio padrão abrange a maioria (68%). 2 desvios cobrem quase todo mundo (95%). 3 desvios cobrem todos menos as anomalias raras (99.7%).",
      "puloDoGato": "A banca ama cobrar essa regra de cabeça. ±1σ = 68%, ±2σ = 95%, ±3σ = 99.7%.",
      "cascasDeBanana": {
        "E": "Incorreta. 50% é a área acima ou abaixo da média em si.",
        "B": "Incorreta. 68% equivale a UM desvio padrão (±1σ).",
        "A": "Correta. É o nível comum adotado para significância estatística em diversos testes empíricos.",
        "D": "Incorreta. Equivale a TRÊS desvios padrões (±3σ).",
        "C": "Incorreta. Na distribuição teórica, a cauda vai ao infinito, nunca sendo exatamente 100% num intervalo fechado."
      },
      "dicaDeOuro": "2 Desvios = 95%. É o 'intervalo de confiança' mais famoso do mundo."
    }
  },
  {
    "id": "q_f2_028",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Teste de Hipóteses - Erro Tipo I e Tipo II",
    "difficulty": "Difícil",
    "statement": "Em testes de hipóteses estatísticas, o que define um 'Erro do Tipo I' (Falso Positivo)?",
    "options": {
      "A": "Confirmar que a hipótese alternativa é falsa.",
      "B": "Calcular a média erroneamente devido a um outlier.",
      "C": "Rejeitar a Hipótese Nula (H0) quando ela é na verdade verdadeira.",
      "D": "Usar o tamanho de amostra inadequado para a população.",
      "E": "Aceitar a Hipótese Nula (H0) quando ela é falsa."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A Hipótese Nula (H0) diz que 'nada aconteceu'. Erro Tipo I é alarme falso: você diz que o remédio curou a doença, quando na verdade ele é farinha. Erro Tipo II (falso negativo) é perigoso: você diz que a máquina não vai quebrar, e ela explode na sua cara.",
      "puloDoGato": "Erro Tipo I = Condenar um Inocente (Rejeitar a paz do H0). Erro Tipo II = Deixar o Culpado escapar (Aceitar o H0 falsamente).",
      "cascasDeBanana": {
        "E": "Incorreta. Este é o Erro do Tipo II (Falso Negativo).",
        "C": "Correta. Alarme falso ou conclusão precipitada (p-value < alpha não correspondia à realidade).",
        "B": "Incorreta. É um erro de amostragem/cálculo, não de inferência.",
        "D": "Incorreta. Erro de delineamento de pesquisa.",
        "A": "Incorreta. Lógica invertida."
      },
      "dicaDeOuro": "Tipo I = Grito de 'Lobo!' quando não tem lobo."
    }
  },
  {
    "id": "q_f2_029",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Estatística Descritiva - Boxplot",
    "difficulty": "Médio",
    "statement": "Em um gráfico do tipo Boxplot, a linha grossa localizada dentro da 'caixa' principal representa graficamente qual métrica estatística?",
    "options": {
      "A": "Mediana (Median ou 2º Quartil).",
      "B": "Intervalo Interquartil (IQR).",
      "C": "Variância.",
      "D": "Moda (Mode).",
      "E": "Média (Mean)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Boxplot mostra os quartis. A linha de baixo da caixa é os 25% (Q1). A linha de cima é os 75% (Q3). A linha forte no meio da caixa não é a média, é a Mediana (os 50% dos dados, Q2).",
      "puloDoGato": "Boxplot NÃO mostra média por padrão (alguns softwares colocam um asterisco ou 'X' para a média, mas a linha fixa é sempre a mediana).",
      "cascasDeBanana": {
        "E": "Incorreta. Cuidado, muita gente confunde e erra na prova.",
        "D": "Incorreta. Moda quase nunca é traçada graficamente em boxplots contínuos.",
        "A": "Correta. O percentil 50 ou 2º Quartil.",
        "C": "Incorreta. É impossível traçar variância em um plot de eixo real desta forma.",
        "B": "Incorreta. O IQR é representado pelo *tamanho total* da caixa (Q3 - Q1), e não pela linha interna."
      },
      "dicaDeOuro": "Linha do meio no Boxplot = Mediana."
    }
  },
  {
    "id": "q_f2_030",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Estatística",
    "topic": "Correlação vs Causalidade",
    "difficulty": "Fácil",
    "statement": "Uma análise estatística demonstrou uma forte correlação positiva (r = 0.95) entre a venda de sorvetes e os ataques de tubarão na praia. A partir dessa métrica, é correto inferir estatisticamente que:",
    "options": {
      "A": "A correlação está errada, pois as variáveis não fazem sentido juntas.",
      "B": "Os tubarões preferem atacar pessoas que gostam de sorvete.",
      "C": "Comer sorvete antes de nadar atrai tubarões.",
      "D": "O aumento na venda de sorvetes causa ataques de tubarão.",
      "E": "Existe uma relação linear forte entre as variáveis, mas isso não prova causalidade. É provável que uma variável de confusão (como o 'clima de verão') esteja causando o aumento de ambos simultaneamente."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Regra número um dos dados: Correlação NÃO implica Causalidade. Só porque duas coisas crescem juntas (venda de sorvete e ataques), não significa que uma causa a outra. O Sol/Verão (variável oculta) é quem causa as duas.",
      "puloDoGato": "Lembrete: O Coeficiente de Pearson (r) mede apenas se as linhas sobem e descem juntas no gráfico, ignorando a lógica do mundo real.",
      "cascasDeBanana": {
        "D": "Incorreta. Salto lógico grave.",
        "C": "Incorreta. Mito não suportado pelos dados.",
        "B": "Incorreta. Interpretação absurda.",
        "E": "Correta. Define com perfeição o conceito da variável de confusão e a cautela inferencial.",
        "A": "Incorreta. A matemática da correlação não se importa com sentido semântico, os números não mentem a relação."
      },
      "dicaDeOuro": "Correlação não é causalidade (mesmo se r=1.0)."
    }
  },
  {
    "id": "q_f3_001",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Funções de Ativação - Softmax",
    "difficulty": "Médio",
    "statement": "Em problemas de classificação multiclasse (mais de duas classes mutuamente exclusivas), qual função de ativação é geralmente aplicada na camada de saída da rede neural para gerar uma distribuição de probabilidade sobre as classes?",
    "options": {
      "A": "Softmax.",
      "B": "Tanh (Tangente Hiperbólica).",
      "C": "Sigmoid (Logística).",
      "D": "Leaky ReLU.",
      "E": "ReLU (Rectified Linear Unit)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A Softmax 'espreme' os valores de saída entre 0 e 1, garantindo que a soma de todas as saídas seja exatamente 1. Isso permite interpretar cada saída como a probabilidade daquela classe ser a correta.",
      "puloDoGato": "Sigmoid = Saída entre 0 e 1 (bom para binário). Softmax = Vetor de probabilidades que soma 1 (ideal para multiclasse).",
      "cascasDeBanana": {
        "C": "Incorreta. Sigmoid é usada para classificação binária ou multicrótulo (não exclusivas).",
        "E": "Incorreta. ReLU é usada em camadas ocultas para evitar o vanishing gradient.",
        "A": "Correta. É o padrão para a camada final de classificadores multiclasse.",
        "B": "Incorreta. Tanh oscila entre -1 e 1, usada em camadas ocultas.",
        "D": "Incorreta. Variante da ReLU para camadas ocultas."
      },
      "dicaDeOuro": "Multiclasse e exclusivas? Vá de Softmax na saída."
    }
  },
  {
    "id": "q_f3_002",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Inicialização de Pesos - Xavier/Glorot",
    "difficulty": "Difícil",
    "statement": "Por que a inicialização de pesos de uma rede neural com zeros ou valores constantes idênticos é considerada uma má prática?",
    "options": {
      "A": "Porque a rede consumiria muita memória RAM.",
      "B": "Porque os pesos ficariam muito grandes e causariam explosão do gradiente.",
      "C": "Porque causa o problema da 'Quebra de Simetria': todos os neurônios de uma camada aprenderão exatamente a mesma coisa, agindo como se fossem um único neurônio.",
      "D": "Porque o Python não permite a multiplicação de matrizes por zero.",
      "E": "Porque a função de perda (Loss) se tornaria negativa."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se todos os neurônios começam iguais, o sinal que chega neles é igual e a atualização (gradiente) será igual. Eles ficam 'travados' em sincronia. A inicialização aleatória (como Xavier ou He) garante que cada neurônio tente aprender algo diferente.",
      "puloDoGato": "Inicialização Aleatória = Quebra de Simetria. Sem isso, sua rede 'profunda' tem o poder de uma rede de um neurônio só.",
      "cascasDeBanana": {
        "A": "Incorreta. O valor numérico não afeta o consumo de memória.",
        "B": "Incorreta. Zeros não causam explosão, mas sim gradientes nulos ou idênticos.",
        "C": "Correta. Conceito fundamental de backpropagation e otimização.",
        "D": "Incorreta. Matematicamente é possível, mas inútil para o aprendizado.",
        "E": "Incorreta. A Loss (geralmente erro quadrático ou cross-entropy) não fica negativa por isso."
      },
      "dicaDeOuro": "Quer neurônios espertos? Comece cada um com um peso diferente."
    }
  },
  {
    "id": "q_f3_003",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Otimizadores - Adam vs SGD",
    "difficulty": "Médio",
    "statement": "Qual a principal característica do otimizador 'Adam' (Adaptive Moment Estimation) em relação ao SGD (Stochastic Gradient Descent) clássico?",
    "options": {
      "A": "O Adam só funciona com funções de ativação lineares.",
      "B": "O Adam é mais lento que o SGD em todas as situações.",
      "C": "O Adam remove a necessidade de ter um conjunto de validação.",
      "D": "O Adam não utiliza gradientes, apenas sorteio aleatório.",
      "E": "O Adam utiliza taxas de aprendizado adaptativas para cada parâmetro, além de incorporar o conceito de 'Momentum'."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O SGD usa a mesma velocidade (learning rate) para todos. O Adam é como um carro inteligente que acelera onde o terreno é firme e freia onde é instável, ajustando a velocidade para cada 'peso' da rede individualmente.",
      "puloDoGato": "Adam = Momentum (embalanço) + RMSProp (ajuste individual da taxa). É o 'pau para toda obra' do Deep Learning hoje.",
      "cascasDeBanana": {
        "D": "Incorreta. Ele é baseado em gradientes.",
        "E": "Correta. Define o porquê de ele convergir mais rápido na maioria dos casos.",
        "B": "Incorreta. Geralmente é muito mais rápido para convergir.",
        "A": "Incorreta. Funciona com qualquer função diferenciável.",
        "C": "Incorreta. Validação é sempre necessária."
      },
      "dicaDeOuro": "Na dúvida, comece com Adam. Ele se vira bem com o learning rate."
    }
  },
  {
    "id": "q_f3_004",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização - Batch Normalization",
    "difficulty": "Médio",
    "statement": "Qual o benefício primordial de se utilizar 'Batch Normalization' entre as camadas de uma rede neural profunda?",
    "options": {
      "A": "Aumentar o número de parâmetros da rede para torná-la mais complexa.",
      "B": "Garantir que a saída da rede seja sempre zero ou um.",
      "C": "Transformar a rede neural em uma árvore de decisão.",
      "D": "Excluir neurônios aleatoriamente para evitar overfitting.",
      "E": "Reduzir o tempo de treinamento ao normalizar as entradas de cada camada, estabilizando o aprendizado e permitindo taxas de aprendizado mais altas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Durante o treino, os pesos mudam e a distribuição das saídas de uma camada 'balança' muito (Internal Covariate Shift). O Batch Norm centraliza e escala esses dados a cada lote (batch), deixando o caminho mais suave para o otimizador.",
      "puloDoGato": "Batch Norm = Estabilidade e Velocidade. Ajuda a combater o Vanishing Gradient indiretamente.",
      "cascasDeBanana": {
        "E": "Correta. Estabiliza a distribuição das ativações intermediárias.",
        "D": "Incorreta. Isso é a função do Dropout.",
        "A": "Incorreta. Ele adiciona pouquíssimos parâmetros (gamma e beta).",
        "C": "Incorreta. São paradigmas diferentes.",
        "B": "Incorreta. Não tem esse objetivo."
      },
      "dicaDeOuro": "Batch Norm é o 'alinhamento e balanceamento' dos dados dentro da rede."
    }
  },
  {
    "id": "q_f3_005",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Loss Functions - Cross-Entropy",
    "difficulty": "Médio",
    "statement": "Para um problema de classificação onde as classes são mutuamente exclusivas, qual função de perda (Loss Function) é a mais adequada matematicamente para medir a divergência entre a probabilidade prevista e o rótulo real (one-hot encoded)?",
    "options": {
      "A": "Mean Squared Error (MSE).",
      "B": "Hinge Loss.",
      "C": "Mean Absolute Error (MAE).",
      "D": "Huber Loss.",
      "E": "Categorical Cross-Entropy."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Cross-Entropy penaliza severamente quando a rede tem 'certeza' da classe errada. Ela usa logaritmos para medir quão 'perto' a distribuição prevista está da distribuição real.",
      "puloDoGato": "MSE = Regressão. Cross-Entropy = Classificação. Ponto final.",
      "cascasDeBanana": {
        "A": "Incorreta. MSE é para prever valores contínuos (preço, temperatura).",
        "C": "Incorreta. MAE também é para regressão (mais robusto a outliers).",
        "E": "Correta. Padrão ouro para classificação multiclasse.",
        "B": "Incorreta. Usada em SVMs.",
        "D": "Incorreta. Híbrido de MSE e MAE para regressão."
      },
      "dicaDeOuro": "Classificação multiclasse? Cross-Entropy é o nome do jogo."
    }
  },
  {
    "id": "q_f3_006",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Transfer Learning - Fine Tuning",
    "difficulty": "Médio",
    "statement": "No contexto de Transfer Learning, o que significa a estratégia de 'congelar' (freezing) as camadas iniciais de um modelo pré-treinado?",
    "options": {
      "A": "Rodar o modelo em modo de apenas leitura (read-only) para sempre.",
      "B": "Mudar a função de ativação de todas as camadas para 'Linear'.",
      "C": "Deletar as camadas iniciais para reduzir o tamanho do arquivo.",
      "D": "Armazenar o modelo em um servidor com baixa temperatura para evitar superaquecimento.",
      "E": "Impedir que os pesos dessas camadas sejam atualizados durante o treinamento com o novo conjunto de dados, mantendo os recursos gerais já aprendidos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "As primeiras camadas de uma rede (ex: ResNet) aprendem coisas básicas como bordas e cores. Isso serve para qualquer imagem. Ao 'congelar', você aproveita esse conhecimento e só treina as camadas finais para entender o SEU problema específico (ex: diferenciar tipos de peças de petróleo).",
      "puloDoGato": "Freezing = Treino rápido e precisa de menos dados. Você só ajusta a 'cabeça' da rede.",
      "cascasDeBanana": {
        "D": "Incorreta. Confusão semântica com hardware.",
        "E": "Correta. Preserva as 'features' genéricas extraídas de grandes datasets (como ImageNet).",
        "C": "Incorreta. Se deletar, a rede perde a entrada.",
        "A": "Incorreta. O congelamento pode ser parcial e temporário.",
        "B": "Incorreta. Funções de ativação não são alteradas pelo congelamento."
      },
      "dicaDeOuro": "Congele o básico, treine o específico."
    }
  },
  {
    "id": "q_f3_007",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Arquiteturas - ResNet (Residual Connections)",
    "difficulty": "Difícil",
    "statement": "Qual inovação técnica as redes 'ResNet' introduziram para permitir o treinamento de redes extremamente profundas (centenas de camadas) sem sofrer com a degradação do gradiente?",
    "options": {
      "A": "Remoção completa do backpropagation.",
      "B": "Uso exclusivo de neurônios biológicos.",
      "C": "Conexões de Atalho (Skip Connections) ou Identidade.",
      "D": "Substituição de matrizes por tensores de 10 dimensões.",
      "E": "Obrigatoriedade de usar GPUs da marca NVIDIA."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Em redes comuns, o gradiente vai sumindo conforme volta as camadas (Vanishing Gradient). A ResNet cria 'atalhos': ela passa a informação original direto para a frente, somando com o resultado da camada. Se a camada não aprender nada útil, a rede apenas passa a identidade adiante.",
      "puloDoGato": "Skip Connection = F(x) + x. Permite que o gradiente 'pule' camadas e chegue vivo nas partes iniciais da rede.",
      "cascasDeBanana": {
        "C": "Correta. Resolve o problema da degradação em redes muito profundas.",
        "B": "Incorreta. IA ainda é matemática em silício.",
        "A": "Incorreta. Backpropagation continua sendo a base.",
        "D": "Incorreta. Tensores são usados em todas as redes modernas.",
        "E": "Incorreta. Hardware não define a arquitetura matemática."
      },
      "dicaDeOuro": "ResNet = Atalhos para o gradiente não morrer no caminho."
    }
  },
  {
    "id": "q_f3_008",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Otimização - Early Stopping",
    "difficulty": "Fácil",
    "statement": "Como funciona a técnica de regularização conhecida como 'Early Stopping'?",
    "options": {
      "A": "O computador desliga automaticamente quando atinge 80 graus.",
      "B": "O treinamento é interrompido assim que a performance no conjunto de VALIDAÇÃO para de melhorar, evitando que o modelo decore o conjunto de treino (overfitting).",
      "C": "O modelo exclui as variáveis menos importantes logo no início.",
      "D": "O cientista de dados aperta um botão de emergência.",
      "E": "A rede neural para de funcionar se detectar dados errados."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É como estudar para uma prova: chega um ponto que você não está mais aprendendo a matéria, está apenas decorando as questões do livro. O Early Stopping percebe que o erro no treino continua caindo, mas na validação começou a subir. Hora de parar!",
      "puloDoGato": "Early Stopping = Olho na Validação. É a forma mais barata e eficiente de evitar o overfitting.",
      "cascasDeBanana": {
        "A": "Incorreta. Hardware.",
        "B": "Correta. Usa a métrica de validação como gatilho de parada.",
        "C": "Incorreta. Não é detecção de erro de entrada.",
        "D": "Incorreta. É um processo automatizado.",
        "E": "Incorreta. Isso seria Feature Selection."
      },
      "dicaDeOuro": "Parou de melhorar na validação? Pare o treino!"
    }
  },
  {
    "id": "q_f3_009",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Arquiteturas - Autoencoders",
    "difficulty": "Médio",
    "statement": "Qual é o objetivo principal de um 'Autoencoder' em uma arquitetura de Deep Learning?",
    "options": {
      "A": "Substituir o banco de dados SQL.",
      "B": "Aprender uma representação compacta (codificada) dos dados de entrada, tentando reconstruir a própria entrada na saída.",
      "C": "Traduzir textos automaticamente entre idiomas.",
      "D": "Controlar braços robóticos em tempo real.",
      "E": "Gerar imagens falsas de pessoas que não existem."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Autoencoder tenta 'espremer' a imagem num gargalo (encoder) e depois 'desespremer' (decoder). Para conseguir reconstruir a imagem original, ele é forçado a aprender apenas o que é essencial. Útil para redução de dimensionalidade e limpeza de ruído.",
      "puloDoGato": "Autoencoder = Auto-supervisionado (a entrada é o alvo). Gargalo (Bottleneck) é a chave.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é mais comum em modelos de tradução (Transformers/Seq2Seq).",
        "B": "Correta. Foco em compressão de características (Latent Space).",
        "C": "Incorreta. Isso é o foco das GANs.",
        "D": "Incorreta. Isso é Aprendizado por Reforço.",
        "E": "Incorreta. Nada a ver."
      },
      "dicaDeOuro": "Autoencoder = Espreme para aprender o que importa."
    }
  },
  {
    "id": "q_f3_010",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Hyperparameter Tuning - Learning Rate",
    "difficulty": "Fácil",
    "statement": "O que acontece se a 'Taxa de Aprendizado' (Learning Rate) for definida com um valor exageradamente alto em uma rede neural?",
    "options": {
      "A": "O gradiente desaparecerá completamente (Vanishing Gradient).",
      "B": "O modelo pode divergir ou 'saltar' o ponto de mínimo da função de perda, nunca conseguindo convergir para uma solução estável.",
      "C": "A rede neural se tornará imune a outliers.",
      "D": "O treinamento será concluído em poucos segundos com 100% de precisão.",
      "E": "O modelo ocupará menos espaço no disco rígido."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Imagine que você está tentando descer uma montanha no escuro dando passos. Se o passo for pequeno demais, você demora mil anos. Se o passo for gigante, você pula de um pico para outro e nunca chega no vale lá embaixo.",
      "puloDoGato": "Learning Rate Alto = Instabilidade/Divergência. Learning Rate Baixo = Lentidão/Mínimos locais.",
      "cascasDeBanana": {
        "A": "Incorreta. Rapidez não garante precisão; geralmente causa o oposto.",
        "B": "Correta. Definição clássica de instabilidade na descida do gradiente.",
        "C": "Incorreta. Não tem relação direta com imunidade a outliers.",
        "D": "Incorreta. Gradiente sumindo geralmente ocorre em redes profundas com certas ativações (Sigmoid/Tanh).",
        "E": "Incorreta. O tamanho do modelo depende do número de pesos, não do valor da taxa."
      },
      "dicaDeOuro": "Passos gigantes fazem você cair da montanha."
    }
  },
  {
    "id": "q_f3_011",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Arquitetura - Transformers (Attention Mechanism)",
    "difficulty": "Difícil",
    "statement": "Qual é a principal inovação do mecanismo de 'Auto-Atenção' (Self-Attention) presente na arquitetura Transformers em comparação com as redes recorrentes (RNN/LSTM)?",
    "options": {
      "A": "Ele permite o processamento paralelo de toda a sequência de uma vez, atribuindo 'pesos' de importância a diferentes partes da frase, independentemente da distância entre elas.",
      "B": "Ele garante que a IA nunca cometa erros factuais.",
      "C": "Ele remove a necessidade de usar vetores numéricos (embeddings).",
      "D": "Ele processa as palavras uma por uma, sequencialmente, garantindo a ordem gramatical.",
      "E": "Ele só funciona com dicionários pequenos de até 1000 palavras."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "RNNs são lentas porque precisam ler a palavra 1 para depois ler a 2. O Transformer olha para a frase inteira de uma vez. O mecanismo de Atenção diz: 'Para entender a palavra BANCO, olhe também para as palavras RIO ou DINHEIRO para saber do que estamos falando'.",
      "puloDoGato": "Self-Attention = Paralelismo + Contexto Global. É por isso que o GPT é tão rápido e inteligente comparado aos modelos antigos.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso descreve o funcionamento das RNNs (o que o Transformer superou).",
        "A": "Correta. É a alma do artigo 'Attention is All You Need'.",
        "C": "Incorreta. Embeddings continuam essenciais.",
        "E": "Incorreta. Eles escalam para milhões de palavras.",
        "B": "Incorreta. IA generativa ainda alucina."
      },
      "dicaDeOuro": "Atenção = Olhar para o que importa na frase toda ao mesmo tempo."
    }
  },
  {
    "id": "q_f3_012",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Modelos Generativos - GANs (Generative Adversarial Networks)",
    "difficulty": "Médio",
    "statement": "Como funciona a dinâmica de treinamento de uma Rede Adversária Generativa (GAN)?",
    "options": {
      "A": "O modelo é treinado por humanos que votam nas melhores imagens via Tinder.",
      "B": "Duas redes (Gerador e Discriminador) competem entre si: o Gerador tenta criar dados falsos realistas e o Discriminador tenta distinguir entre dados reais e falsos.",
      "C": "O Gerador e o Discriminador trabalham juntos para apagar dados duplicados.",
      "D": "Uma única rede treina sozinha contra um banco de dados SQL.",
      "E": "A rede gera dados aleatórios e espera que eles façam sentido sozinhos."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o jogo do 'Falsificador de Quadros' vs 'Especialista de Arte'. O falsificador (Gerador) fica cada vez melhor em enganar o especialista. O especialista (Discriminador) fica cada vez mais atento aos detalhes. No final, o Gerador cria coisas incrivelmente reais.",
      "puloDoGato": "GAN = Jogo de Soma Zero. Minimax. Gerador cria, Discriminador julga.",
      "cascasDeBanana": {
        "A": "Incorreta. São sempre duas redes em conflito benéfico.",
        "B": "Correta. Definição da natureza adversária do modelo.",
        "C": "Incorreta. Isso seria RLHF (Reinforcement Learning from Human Feedback), usado em LLMs, não na base das GANs.",
        "D": "Incorreta. O treino é altamente estruturado pela perda do discriminador.",
        "E": "Incorreta. Eles não apagam nada."
      },
      "dicaDeOuro": "GAN = Briga de foice que gera arte."
    }
  },
  {
    "id": "q_f3_013",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Alinhamento - RLHF (Reinforcement Learning from Human Feedback)",
    "difficulty": "Difícil",
    "statement": "Qual o papel principal do RLHF (Aprendizado por Reforço com Feedback Humano) no desenvolvimento de modelos como o ChatGPT?",
    "options": {
      "A": "Reduzir o custo de energia elétrica dos servidores da OpenAI.",
      "B": "Permitir que o modelo acesse a internet em tempo real sem autorização.",
      "C": "Substituir a etapa de pré-treinamento massivo com livros e sites.",
      "D": "Alinhar o comportamento do modelo com as preferências, valores e segurança dos humanos, tornando as respostas mais úteis e menos ofensivas.",
      "E": "Ensinar a gramática básica da língua portuguesa ao modelo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Depois que o modelo aprende a 'falar' lendo a internet toda, ele ainda é meio selvagem. O RLHF é o 'adestramento'. Humanos dão notas para as respostas e o modelo aprende: 'Responda assim (educado e útil), não responda assado (perigoso ou confuso)'.",
      "puloDoGato": "RLHF = Alinhamento. É o que transforma um completador de texto genérico num assistente pessoal confiável.",
      "cascasDeBanana": {
        "E": "Incorreta. Gramática ele aprende no pré-treino.",
        "D": "Correta. Foco em utilidade (helpfulness) e segurança (safety).",
        "A": "Incorreta. Na verdade, adiciona custo de computação e pessoal.",
        "B": "Incorreta. Acesso à internet é via ferramentas/plugins, não RLHF.",
        "C": "Incorreta. RLHF vem DEPOIS do pré-treino."
      },
      "dicaDeOuro": "RLHF é a etiqueta e o bom senso da IA."
    }
  },
  {
    "id": "q_f3_014",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Engenharia de Prompt - Few-Shot Prompting",
    "difficulty": "Médio",
    "statement": "O que caracteriza a técnica de 'Few-Shot Prompting' ao interagir com um modelo de linguagem (LLM)?",
    "options": {
      "A": "Pedir para o modelo escrever um código em apenas uma linha.",
      "B": "Enviar o prompt apenas uma vez e nunca mais falar com o bot.",
      "C": "Usar palavras curtas de apenas 3 letras.",
      "D": "Fornecer alguns exemplos de entrada e saída esperada dentro do próprio prompt para 'guiar' o modelo sobre como responder.",
      "E": "Atirar fotos de documentos para o modelo via API."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Zero-shot: 'Traduza maçã para inglês'. Few-shot: 'Entrada: Casa, Saída: House; Entrada: Carro, Saída: Car; Entrada: Maçã, Saída: ...'. Você dá o caminho das pedras antes de fazer a pergunta real.",
      "puloDoGato": "Few-shot = Exemplos no prompt. Ajuda muito em tarefas com formatos específicos ou regras complexas.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso não tem nome técnico específico.",
        "D": "Correta. Técnica essencial de In-context Learning.",
        "E": "Incorreta. Isso seria multimodalidade ou OCR.",
        "A": "Incorreta. One-liner não é few-shot.",
        "C": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Few-shot = Me dá uns exemplos que eu entendo o que você quer."
    }
  },
  {
    "id": "q_f3_015",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Arquitetura - RAG (Retrieval-Augmented Generation)",
    "difficulty": "Difícil",
    "statement": "Como a técnica de RAG (Geração Aumentada por Recuperação) ajuda a reduzir alucinações e fornecer informações atualizadas em LLMs?",
    "options": {
      "A": "Ela apaga a memória de longo prazo da rede neural.",
      "B": "Ela recupera documentos relevantes de uma base de conhecimento externa (ex: PDF, Banco de Dados) e os envia junto com a pergunta do usuário para que o modelo use como contexto confiável.",
      "C": "Ela aumenta a temperatura do modelo para 2.0.",
      "D": "Ela proíbe o modelo de usar adjetivos nas respostas.",
      "E": "Ela retreina o modelo inteiro todos os dias com notícias do Google."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O modelo é um 'gênio de biblioteca' que parou de ler em 2023. O RAG é como dar a ele um 'tablet com acesso aos arquivos da Petrobras'. Antes dele responder, o sistema busca o arquivo certo, coloca na frente dele e diz: 'Responda baseado APENAS nisso'.",
      "puloDoGato": "RAG = Busca (Retrieval) + Geração. Resolve o problema do conhecimento datado e reduz mentiras (alucinações).",
      "cascasDeBanana": {
        "A": "Incorreta. Treinar o modelo todo é caro e lento; RAG evita justamente isso.",
        "B": "Correta. Uso de Contexto Externo Dinâmico.",
        "C": "Incorreta. Estética de texto não é o foco do RAG.",
        "D": "Incorreta. Aumentar a temperatura aumenta a criatividade/alucinação.",
        "E": "Incorreta. Não altera os pesos internos do modelo."
      },
      "dicaDeOuro": "RAG = Prova com consulta. O modelo lê o texto e responde."
    }
  },
  {
    "id": "q_f3_016",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Redes Neurais Recorrentes - Problema de Memória",
    "difficulty": "Médio",
    "statement": "Qual é o principal desafio das Redes Neurais Recorrentes (RNN) simples ao lidar com sequências muito longas (ex: textos de vários parágrafos)?",
    "options": {
      "A": "Elas transformam automaticamente o texto em imagens.",
      "B": "Elas ocupam muito espaço em disco devido ao número de neurônios.",
      "C": "Elas exigem que todas as palavras tenham o mesmo número de letras.",
      "D": "Elas sofrem com o 'Desvanecimento do Gradiente' (Vanishing Gradient), o que as faz 'esquecer' informações apresentadas no início da sequência conforme novas informações são processadas.",
      "E": "Elas não conseguem processar números negativos."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Em uma RNN simples, a informação passa por muitas multiplicações sucessivas. Se o gradiente é menor que 1, ele vira quase zero rapidamente. O resultado é que a rede só lembra do que leu agora, ignorando o contexto lá do começo.",
      "puloDoGato": "RNN = Memória de Curto Prazo. Para resolver isso, inventaram as LSTMs e GRUs que têm 'portões' para decidir o que manter.",
      "cascasDeBanana": {
        "B": "Incorreta. O problema não é o tamanho do arquivo, mas a dinâmica matemática.",
        "D": "Correta. É a limitação fundamental que motivou os Transformers.",
        "E": "Incorreta. Processam qualquer valor numérico.",
        "C": "Incorreta. Sequências podem ter tamanhos variados.",
        "A": "Incorreta. São modelos de sequência, não de visão direta."
      },
      "dicaDeOuro": "RNN simples = Esquece o começo da frase."
    }
  },
  {
    "id": "q_f3_017",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Topologia - Camadas Ocultas",
    "difficulty": "Fácil",
    "statement": "Segundo o Teorema da Aproximação Universal, o que uma rede neural com apenas UMA camada oculta (desde que tenha neurônios suficientes e uma ativação não-linear) é capaz de fazer?",
    "options": {
      "A": "Prever o futuro com 100% de certeza.",
      "B": "Aproximar qualquer função contínua em um subconjunto compacto do espaço real.",
      "C": "Rodar em computadores sem processador.",
      "D": "Substituir um programador humano em 100% das tarefas.",
      "E": "Apenas resolver problemas de soma e subtração."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Basicamente, esse teorema diz que redes neurais são 'aproximadores universais'. Se você der neurônios suficientes, ela consegue aprender qualquer padrão complexo entre entrada e saída, por mais 'curvado' que ele seja.",
      "puloDoGato": "Uma camada basta para o padrão? Sim. Mas muitas camadas (Deep Learning) aprendem o mesmo padrão de forma muito mais eficiente e com menos neurônios totais.",
      "cascasDeBanana": {
        "A": "Incorreta. Ela é muito mais poderosa que isso.",
        "B": "Correta. Fundamento matemático da inteligência computacional.",
        "C": "Incorreta. Exagero comercial.",
        "D": "Incorreta. Impossível.",
        "E": "Incorreta. O teorema fala de funções matemáticas, não de profecia."
      },
      "dicaDeOuro": "Rede Neural = O aproximador universal de funções."
    }
  },
  {
    "id": "q_f3_018",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Redes Neurais Artificiais",
    "topic": "Regularização - Dropout",
    "difficulty": "Médio",
    "statement": "Durante o treinamento de uma rede neural, a técnica de Dropout consiste em desligar aleatoriamente uma porcentagem de neurônios a cada iteração. Qual o comportamento esperado do Dropout durante a etapa de TESTE/INFERÊNCIA?",
    "options": {
      "A": "O Dropout aumenta a porcentagem de neurônios desligados para 100%.",
      "B": "Todos os neurônios permanecem ativos, mas seus pesos são multiplicados pela probabilidade de permanência (ou as ativações são escalonadas inversamente durante o treino) para compensar o fato de todos estarem presentes.",
      "C": "A rede neural é deletada e substituída por uma Regressão Linear.",
      "D": "Ele continua desligando neurônios aleatoriamente.",
      "E": "A saída da rede é sempre dividida por zero."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "No treino, o Dropout força a rede a não depender de um neurônio específico (evita o vício). No teste, queremos usar o poder total da rede, então ligamos tudo. Mas como no treino ela aprendeu a trabalhar com 'metade do time', no teste precisamos ajustar os valores para a conta fechar.",
      "puloDoGato": "Dropout no Treino: Sorteio. Dropout no Teste: Escalonamento (ou média determinística).",
      "cascasDeBanana": {
        "A": "Incorreta. No teste queremos resultados consistentes e determinísticos.",
        "B": "Correta. Garante que a magnitude das ativações seja coerente com o que foi treinado.",
        "C": "Incorreta. Dropout é apenas uma técnica de ajuste.",
        "D": "Incorreta. A rede não daria saída nenhuma.",
        "E": "Incorreta. Causaria erro de execução."
      },
      "dicaDeOuro": "Dropout treina o time reserva para o titular ser imbatível."
    }
  },
  {
    "id": "q_f3_019",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Arquiteturas - LSTMs (Long Short-Term Memory)",
    "difficulty": "Médio",
    "statement": "Qual componente interno da célula LSTM é responsável por decidir qual informação do estado anterior deve ser descartada ou mantida?",
    "options": {
      "A": "Input Gate (Portão de Entrada).",
      "B": "ReLU Activator.",
      "C": "Output Gate (Portão de Saída).",
      "D": "Bias Vector.",
      "E": "Forget Gate (Portão de Esquecimento)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O 'Forget Gate' olha para o que veio antes e decide: 'Isso aqui ainda é importante?'. Se for o final de uma frase, ele pode decidir esquecer o sujeito para se preparar para a próxima frase.",
      "puloDoGato": "Forget Gate = Filtro do passado. É ele quem resolve o problema do Vanishing Gradient das RNNs comuns.",
      "cascasDeBanana": {
        "A": "Incorreta. O Input decide o que entra de NOVO.",
        "E": "Correta. Controla o fluxo de esquecimento no estado da célula.",
        "C": "Incorreta. Decide o que vai para a saída atual.",
        "B": "Incorreta. LSTMs usam Sigmoid e Tanh em seus portões.",
        "D": "Incorreta. Bias é apenas um deslocamento linear."
      },
      "dicaDeOuro": "LSTMs: O Forget Gate limpa o que não serve mais."
    }
  },
  {
    "id": "q_f3_020",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Convolução - Stride e Padding",
    "difficulty": "Médio",
    "statement": "Em uma camada convolucional (CNN), o que acontece com as dimensões da imagem de saída se utilizarmos 'Padding' do tipo 'Same'?",
    "options": {
      "A": "A imagem de saída terá o dobro do tamanho da entrada.",
      "B": "A imagem de saída terá apenas 1 pixel de tamanho.",
      "C": "A imagem de saída terá exatamente as mesmas dimensões espaciais (altura e largura) da imagem de entrada.",
      "D": "A imagem de saída será reduzida pela metade.",
      "E": "A imagem de saída será convertida em um vetor unidimensional."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Normalmente, passar um filtro diminui a imagem (as bordas são 'comidas'). O Padding adiciona zeros ao redor da imagem original para que, após a convolução, o resultado tenha o mesmo tamanho de antes.",
      "puloDoGato": "Padding Same = Preserva tamanho. Padding Valid = Sem preenchimento (imagem diminui).",
      "cascasDeBanana": {
        "C": "Correta. Por isso o nome 'Same' (Mesmo).",
        "D": "Incorreta. Isso seria efeito de um Stride > 1 ou Pooling.",
        "B": "Incorreta. Extremo impossível nessa configuração.",
        "A": "Incorreta. Padding não aumenta a imagem além da entrada original.",
        "E": "Incorreta. Isso é o Flatten, feito no final da rede."
      },
      "dicaDeOuro": "Padding 'Same' mantém a foto do mesmo tamanho."
    }
  },
  {
    "id": "q_f3_021",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Deep Learning",
    "topic": "Regularização - L1 vs L2 (Weight Decay)",
    "difficulty": "Difícil",
    "statement": "Qual a principal diferença visual/matemática no efeito dos pesos ao aplicar a regularização L1 (Lasso) em comparação com a L2 (Ridge) em uma rede neural?",
    "options": {
      "A": "A L1 aumenta o tempo de treinamento em 10 vezes.",
      "B": "A L2 remove a necessidade de usar funções de ativação.",
      "C": "A L1 torna os pesos negativos, enquanto a L2 os torna positivos.",
      "D": "A L1 tende a zerar pesos menos importantes (promovendo esparsidade), enquanto a L2 apenas diminui os pesos uniformemente, mas raramente os leva a zero absoluto.",
      "E": "A L2 é usada apenas para imagens e a L1 apenas para textos."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "L1 é 'agressiva': ela corta o mal pela raiz e zera o que não presta (útil para feature selection). L2 é 'suave': ela puxa todos os pesos para valores pequenos para que nenhum neurônio domine a rede sozinho.",
      "puloDoGato": "L1 = Esparsidade (Zeros). L2 = Suavidade (Weight Decay). Na dúvida em Deep Learning, usa-se mais L2.",
      "cascasDeBanana": {
        "C": "Incorreta. Ambas puxam para o zero.",
        "D": "Correta. Devido à geometria da função custo (diamante vs círculo).",
        "E": "Incorreta. São independentes do tipo de dado.",
        "A": "Incorreta. O custo computacional é quase idêntico.",
        "B": "Incorreta. Nada a ver."
      },
      "dicaDeOuro": "L1 zera. L2 segura."
    }
  },
  {
    "id": "q_f3_022",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Modelos - VAEs (Variational Autoencoders)",
    "difficulty": "Difícil",
    "statement": "O que diferencia um 'Variational Autoencoder' (VAE) de um Autoencoder clássico, permitindo que ele seja usado para GERAÇÃO de novos dados?",
    "options": {
      "A": "O VAE apaga os dados originais após o treino.",
      "B": "O VAE não utiliza redes neurais, apenas estatística pura.",
      "C": "O VAE é muito mais rápido para treinar.",
      "D": "O VAE só funciona com arquivos de áudio.",
      "E": "O VAE mapeia a entrada para uma distribuição de probabilidade (média e variância) no espaço latente, em vez de um ponto fixo, permitindo amostrar novos pontos para gerar variações."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Um Autoencoder comum decora: 'Imagem A vira Ponto 1'. Se você pedir o Ponto 1.5, ele se perde. O VAE diz: 'Imagem A vira uma Nuvem de Pontos'. Isso deixa o espaço latente contínuo, permitindo que você sorteie qualquer ponto ali e saia uma imagem nova e plausível.",
      "puloDoGato": "VAE = Espaço Latente Probabilístico. É o primo 'gerativo' do Autoencoder.",
      "cascasDeBanana": {
        "C": "Incorreta. É geralmente mais complexo de treinar.",
        "E": "Correta. O truque da reparametrização permite esse aprendizado de distribuições.",
        "B": "Incorreta. É uma arquitetura de rede neural profunda.",
        "D": "Incorreta. Funciona com imagens, áudio e qualquer dado complexo.",
        "A": "Incorreta. Preserva os pesos aprendidos."
      },
      "dicaDeOuro": "VAE mapeia para uma distribuição, não para um ponto."
    }
  },
  {
    "id": "q_f3_023",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Inteligência Artificial Generativa",
    "topic": "Conceitos - Hallucination (Alucinação)",
    "difficulty": "Fácil",
    "statement": "No contexto de Large Language Models (LLMs), o que define uma 'Alucinação'?",
    "options": {
      "A": "Quando o modelo gera informações factualmente incorretas, mas com um tom de voz confiante e gramaticalmente correto.",
      "B": "Quando o modelo traduz uma palavra corretamente mas o usuário não gosta.",
      "C": "Quando a IA começa a falar em códigos binários sem sentido.",
      "D": "Quando o usuário esquece a própria senha de acesso.",
      "E": "Quando o servidor de IA para de responder devido a alta carga."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O modelo é um mestre das palavras, não dos fatos. Ele sabe qual palavra 'provavelmente' vem depois da outra. Se ele não sabe um dado real, ele 'inventa' seguindo a lógica estatística do texto, fazendo a mentira parecer verdade.",
      "puloDoGato": "Alucinação = Confiança sem Verdade. É o maior desafio para usar LLMs em áreas críticas como Direito ou Medicina.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é erro de infraestrutura.",
        "A": "Correta. Fenômeno de 'confabulação' estatística.",
        "D": "Incorreta. Problema de UX/Segurança.",
        "C": "Incorreta. Elas são muito boas em manter a forma do texto, o problema é o conteúdo.",
        "B": "Incorreta. Isso é preferência subjetiva."
      },
      "dicaDeOuro": "IA alucinando: mente com a cara mais limpa do mundo."
    }
  },
  {
    "id": "q_f3_024",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Conceitos - 5 Vs do Big Data",
    "difficulty": "Fácil",
    "statement": "Quais são os 3Vs clássicos originais que definem o conceito de Big Data?",
    "options": {
      "A": "Volume, Voltagem e Viscosidade.",
      "B": "Vetor, Variável e Validação.",
      "C": "Vantagem, Valor e Visibilidade.",
      "D": "Volume, Velocidade e Variedade.",
      "E": "Virtualização, Veracidade e Venda."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Big Data não é só 'muito dado' (Volume). É dado que chega em tempo real (Velocidade) e em formatos bagunçados como vídeo, áudio e log (Variedade).",
      "puloDoGato": "Volume (Petabytes), Velocidade (Streaming), Variedade (Não-estruturado). Guarde esses três para a prova.",
      "cascasDeBanana": {
        "C": "Incorreta. Termos de negócio, não técnicos de base.",
        "D": "Correta. Definição clássica da Gartner.",
        "B": "Incorreta. Termos de programação.",
        "E": "Incorreta. Termos mistos.",
        "A": "Incorreta. Piada com física."
      },
      "dicaDeOuro": "Volume, Velocidade e Variedade: O trio parada dura do Big Data."
    }
  },
  {
    "id": "q_f3_025",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Arquitetura - Data Lake",
    "difficulty": "Médio",
    "statement": "Qual a principal diferença entre um 'Data Warehouse' (DW) e um 'Data Lake'?",
    "options": {
      "A": "O DW é grátis e o Data Lake é pago.",
      "B": "Não há diferença, são apenas nomes diferentes para a mesma tecnologia.",
      "C": "O DW armazena dados em seu formato bruto (raw), enquanto o Data Lake exige que os dados sejam limpos e estruturados antes da carga (Schema-on-Write).",
      "D": "O Data Lake só funciona em servidores locais (on-premise).",
      "E": "O Data Lake armazena dados brutos e não estruturados para uso futuro (Schema-on-Read), enquanto o DW armazena apenas dados altamente estruturados e processados para relatórios específicos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "DW é como uma 'Garrafeira': tudo organizado, rotulado e pronto para o consumo imediato. Data Lake é como um 'Reservatório de Água': você joga tudo lá e só filtra/trata quando precisar usar.",
      "puloDoGato": "DW = Schema-on-Write (decida o formato antes de salvar). Data Lake = Schema-on-Read (salve tudo, decida o formato quando ler).",
      "cascasDeBanana": {
        "C": "Incorreta. Inverteu as definições.",
        "E": "Correta. Diferença fundamental de governança e flexibilidade.",
        "A": "Incorreta. Ambos têm custos significativos.",
        "D": "Incorreta. Data Lakes são extremamente comuns na Nuvem (S3, ADLS).",
        "B": "Incorreta. São conceitos arquiteturais distintos."
      },
      "dicaDeOuro": "Data Lake = Bruto e Flexível. DW = Refinado e Estruturado."
    }
  },
  {
    "id": "q_f3_026",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Tecnologias - Apache Spark",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem do Apache Spark sobre o MapReduce tradicional do Hadoop?",
    "options": {
      "A": "O Spark só funciona com arquivos pequenos.",
      "B": "O Spark não exige o uso de Java.",
      "C": "O Spark consome menos memória RAM que o MapReduce.",
      "D": "O Spark realiza o processamento em memória (In-Memory), o que o torna até 100 vezes mais rápido para algoritmos iterativos e análise de dados.",
      "E": "O Spark é mais antigo e estável que o MapReduce."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O MapReduce escreve no disco a cada etapa. Disco é lento. O Spark mantém os dados na RAM entre os passos. Isso faz uma diferença brutal, especialmente em Machine Learning onde você precisa ler os mesmos dados várias vezes.",
      "puloDoGato": "Spark = In-Memory Processing. MapReduce = Disk-Based Processing.",
      "cascasDeBanana": {
        "B": "Incorreta. Ambos suportam várias linguagens via APIs.",
        "D": "Correta. Razão principal da migração em massa para Spark.",
        "E": "Incorreta. MapReduce é o 'avô' do ecossistema.",
        "C": "Incorreta. Na verdade, o Spark consome MUITA RAM para ser rápido.",
        "A": "Incorreta. Ele é feito justamente para escalas massivas."
      },
      "dicaDeOuro": "Spark é rápido porque não fica 'indo no disco' toda hora."
    }
  },
  {
    "id": "q_f3_027",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Big Data e Data Warehouse",
    "topic": "Tecnologias - NoSQL (HBase)",
    "difficulty": "Médio",
    "statement": "No ecossistema Hadoop, o HBase é um banco de dados NoSQL do tipo:",
    "options": {
      "A": "Documento (tipo MongoDB).",
      "B": "Grafo (tipo Neo4j).",
      "C": "Relacional (tipo PostgreSQL).",
      "D": "Orientado a Colunas (Wide-Column Store).",
      "E": "Chave-Valor simples (tipo Redis)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O HBase foi inspirado no Google BigTable. Ele guarda os dados em famílias de colunas, permitindo buscas muito rápidas por chave em tabelas com bilhões de linhas e milhões de colunas.",
      "puloDoGato": "HBase = Colunar. Ideal para acesso aleatório e em tempo real sobre o HDFS.",
      "cascasDeBanana": {
        "A": "Incorreta. MongoDB é orientado a documentos JSON/BSON.",
        "D": "Correta. Classificação técnica do HBase.",
        "B": "Incorreta. Grafos focam em relacionamentos complexos.",
        "E": "Incorreta. Ele é mais complexo que um simples Key-Value.",
        "C": "Incorreta. Ele é NoSQL, não suporta JOINs SQL clássicos nativamente."
      },
      "dicaDeOuro": "HBase: Tabelas gigantescas, busca rápida, formato colunar."
    }
  },
  {
    "id": "q_f3_028",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Estatística",
    "topic": "Teorema do Limite Central",
    "difficulty": "Difícil",
    "statement": "Segundo o Teorema do Limite Central (TLC), o que acontece com a distribuição das MÉDIAS de amostras aleatórias conforme o tamanho da amostra (n) aumenta?",
    "options": {
      "A": "A distribuição se torna idêntica a uma distribuição de Poisson.",
      "B": "O valor da média amostral sempre será zero.",
      "C": "A distribuição das médias tende a uma Distribuição Normal, independentemente da forma da distribuição da população original.",
      "D": "A distribuição das médias se torna cada vez mais assimétrica.",
      "E": "A variância das médias aumenta infinitamente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Este é o 'milagre' da estatística. Mesmo que seus dados originais sejam uma bagunça completa (quadrados, triângulos, etc.), se você tirar várias médias, essas MÉDIAS vão se organizar bonitinho em volta do centro, formando o sino da Normal.",
      "puloDoGato": "TLC = Convergência para a Normal. É por isso que podemos usar Teste Z e Teste T para quase tudo.",
      "cascasDeBanana": {
        "D": "Incorreta. Ela se torna simétrica.",
        "C": "Correta. Fundamento da inferência estatística paramétrica.",
        "E": "Incorreta. A variância da média (Erro Padrão) na verdade DIMINUI (sigma/sqrt(n)).",
        "B": "Incorreta. A média será igual à média da população original.",
        "A": "Incorreta. Tende à Normal, não Poisson."
      },
      "dicaDeOuro": "Muitas amostras? A média vai ser Normal. Sempre."
    }
  },
  {
    "id": "q_f3_029",
    "cargo": [
      "Ciência de Dados",
      "Engenharia de Petróleo"
    ],
    "block": 1,
    "discipline": "Estatística",
    "topic": "P-Valor (p-value)",
    "difficulty": "Médio",
    "statement": "Em um teste de hipóteses, o que o 'p-valor' representa tecnicamente?",
    "options": {
      "A": "O valor da média da população.",
      "B": "A probabilidade de observar um resultado tão extremo quanto o obtido, assumindo que a hipótese nula seja verdadeira.",
      "C": "A margem de lucro do experimento.",
      "D": "A probabilidade de a hipótese nula (H0) ser verdadeira.",
      "E": "O número de pessoas que participaram da pesquisa."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O p-valor não diz se você está certo. Ele diz: 'Se o mundo for normal e nada de especial aconteceu (H0), qual a chance de eu ter tido essa sorte/azar de ver esse dado?'. Se a chance for muito pequena (ex: p < 0.05), a gente desconfia da H0 e a rejeita.",
      "puloDoGato": "p-valor baixo (p < 0.05) = Rejeita H0. É estatisticamente significante.",
      "cascasDeBanana": {
        "A": "Incorreta. Erro comum! Ele não mede a probabilidade da hipótese, mas sim a probabilidade dos DADOS dada a hipótese.",
        "B": "Correta. Definição estatística rigorosa.",
        "C": "Incorreta. É uma probabilidade, não uma média.",
        "D": "Incorreta. Nada a ver.",
        "E": "Incorreta. Isso seria o 'n'."
      },
      "dicaDeOuro": "p-valor pequeno? A hipótese nula rodou."
    }
  },
  {
    "id": "q_f3_061",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Clustering - K-Means (Soma dos Quadrados Internos)",
    "difficulty": "Médio",
    "statement": "No algoritmo K-Means, qual é o objetivo da função objetivo (objetivo matemático) que o algoritmo tenta minimizar a cada iteração?",
    "options": {
      "A": "O tempo de processamento da CPU.",
      "B": "A soma dos quadrados das distâncias de cada ponto ao seu centróide atribuído (Within-Cluster Sum of Squares - WCSS).",
      "C": "A variância global de todo o conjunto de dados.",
      "D": "O número total de clusters (K).",
      "E": "A distância entre os diferentes centróides dos clusters."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O K-Means quer que os pontos de um mesmo grupo estejam o mais 'juntinhos' possível. Para medir isso, ele calcula a distância de cada ponto até o centro do seu grupo e tenta diminuir o erro total.",
      "puloDoGato": "WCSS = Inércia. Quanto menor, mais compactos são os seus clusters.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele quer minimizar a distância INTERNA, não a externa.",
        "B": "Correta. Definição da métrica de inércia usada no K-Means.",
        "C": "Incorreta. O K é um parâmetro fixo dado pelo usuário.",
        "D": "Incorreta. A variância global não muda com o clustering.",
        "E": "Incorreta. Irrelevante para o modelo matemático."
      },
      "dicaDeOuro": "K-Means: O objetivo é compactar os grupos."
    }
  },
  {
    "id": "q_f3_062",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Clustering - DBSCAN",
    "difficulty": "Difícil",
    "statement": "Qual a principal vantagem do algoritmo de clustering DBSCAN em relação ao K-Means clássico?",
    "options": {
      "A": "O DBSCAN é sempre mais rápido para grandes volumes de dados.",
      "B": "O DBSCAN só funciona com dados categóricos.",
      "C": "O DBSCAN consegue identificar clusters de formatos arbitrários (não apenas esféricos) e é robusto na identificação de outliers (ruído).",
      "D": "O DBSCAN utiliza apenas a média dos pontos para definir o grupo.",
      "E": "O DBSCAN exige que o usuário defina o número exato de clusters antecipadamente."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "K-Means assume que os grupos são 'bolas' redondinhas. Se o grupo tiver formato de 'C' ou for uma linha, o K-Means falha. O DBSCAN olha para a densidade: se tem muito ponto junto, vira um grupo, não importa o formato. E se um ponto estiver isolado, ele vira 'Ruído'.",
      "puloDoGato": "DBSCAN = Formatos estranhos + Lida com Outliers. E você NÃO precisa dizer quantos clusters quer.",
      "cascasDeBanana": {
        "A": "Incorreta. O DBSCAN pode ser mais lento devido à busca de vizinhos.",
        "C": "Correta. Razão principal para seu uso em dados geográficos ou complexos.",
        "E": "Incorreta. Essa é a fraqueza do K-Means; o DBSCAN descobre o número de grupos sozinho.",
        "B": "Incorreta. Funciona com dados numéricos e métricas de distância.",
        "D": "Incorreta. Ele usa densidade (MinPts e Epsilon), não a média."
      },
      "dicaDeOuro": "Grupos em formato de 'banana' ou 'meia-lua'? Vá de DBSCAN."
    }
  },
  {
    "id": "q_f3_063",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Redução de Dimensionalidade - PCA (Principal Component Analysis)",
    "difficulty": "Médio",
    "statement": "O que os 'Componentes Principais' gerados pelo PCA representam em relação aos dados originais?",
    "options": {
      "A": "São os outliers que foram removidos do dataset.",
      "B": "São os nomes das variáveis traduzidos para o inglês.",
      "C": "São novas direções (eixos) no espaço de dados que capturam a maior quantidade de variância possível, de forma ortogonal entre si.",
      "D": "São os valores médios de cada coluna.",
      "E": "São as colunas originais que foram selecionadas como as melhores."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O PCA não escolhe colunas, ele cria NOVAS colunas que são combinações das antigas. O primeiro componente (PC1) é o eixo que explica a maior parte da 'espalhação' (variância) dos dados. O PC2 é o segundo melhor, e assim por diante.",
      "puloDoGato": "PCA = Maximizar Variância + Ortogonalidade (sem correlação entre componentes).",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria Feature Selection, o PCA é Feature Extraction.",
        "C": "Correta. Definição matemática de autovetores da matriz de covariância.",
        "B": "Incorreta. Nada a ver.",
        "D": "Incorreta. O PCA centraliza na média, mas os componentes são direções.",
        "A": "Incorreta. O PCA usa todos os pontos, inclusive outliers."
      },
      "dicaDeOuro": "PCA: Espreme a informação de 10 colunas em 2 ou 3 novas."
    }
  },
  {
    "id": "q_f3_064",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Clustering - Método do Cotovelo (Elbow Method)",
    "difficulty": "Fácil",
    "statement": "Para que serve o 'Método do Cotovelo' (Elbow Method) no contexto do algoritmo K-Means?",
    "options": {
      "A": "Para visualizar dados em 5 dimensões simultaneamente.",
      "B": "Para calcular a distância entre os pontos mais distantes do dataset.",
      "C": "Para medir a força física do servidor.",
      "D": "Para ajudar a determinar o número ideal de clusters (K), identificando o ponto onde a redução do erro (inércia) começa a desacelerar bruscamente.",
      "E": "Para detectar se o desenvolvedor está digitando com o cotovelo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você aumentar o K, o erro sempre cai. Se K for igual ao número de pontos, o erro é zero (mas o modelo é inútil). O 'cotovelo' é aquele ponto onde aumentar o K não traz mais tanto ganho. É o 'ponto de equilíbrio' entre simplicidade e precisão.",
      "puloDoGato": "Elbow Method = Achar o K ideal olhando para a curva de inércia.",
      "cascasDeBanana": {
        "C": "Incorreta. Piada.",
        "D": "Correta. Técnica mais comum de tuning para K-Means.",
        "E": "Incorreta. Absurdo.",
        "B": "Incorreta. Isso seria o cálculo do diâmetro do dataset.",
        "A": "Incorreta. O método usa um gráfico 2D simples."
      },
      "dicaDeOuro": "Onde o gráfico faz a curva do braço, ali está o seu K."
    }
  },
  {
    "id": "q_f3_065",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Associação - Apriori (Support, Confidence, Lift)",
    "difficulty": "Difícil",
    "statement": "Em sistemas de recomendação baseados em regras de associação (como o algoritmo Apriori), o que a métrica 'Lift' indica sobre a relação entre dois itens A e B?",
    "options": {
      "A": "O preço médio dos itens A e B somados.",
      "B": "A cor dos itens na prateleira do supermercado.",
      "C": "Se a presença do item A aumenta a probabilidade de ocorrência do item B de forma mais significativa do que se B ocorresse de forma independente.",
      "D": "O tempo que o usuário levou para colocar os dois itens no carrinho.",
      "E": "Quantas vezes os itens A e B aparecem juntos na base total."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se o Lift > 1, significa que existe uma associação forte: quem compra A tem muito mais chance de comprar B do que um cliente aleatório. Se Lift = 1, a compra de A não influi em nada na de B. Se Lift < 1, eles se repelem.",
      "puloDoGato": "Lift > 1 = Associação Positiva. Lift < 1 = Associação Negativa.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é o Suporte (Support).",
        "C": "Correta. Mede o poder preditivo da regra.",
        "A": "Incorreta. Irrelevante para a associação estatística.",
        "D": "Incorreta. Métrica de UX, não de associação de itens.",
        "B": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Lift: O 'quanto a mais' a chance aumenta por causa da regra."
    }
  },
  {
    "id": "q_f3_066",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Clustering Hierárquico - Dendrograma",
    "difficulty": "Médio",
    "statement": "Como deve ser interpretado um 'Dendrograma' gerado por um algoritmo de Clustering Hierárquico?",
    "options": {
      "A": "Como um mapa de calor das variáveis mais importantes.",
      "B": "Como uma árvore que mostra a hierarquia de como os clusters foram fundidos (ou divididos), onde a altura do eixo vertical indica a distância (dissimilaridade) entre os grupos.",
      "C": "Como um gráfico de dispersão 3D.",
      "D": "Como uma lista de nomes de usuários em ordem alfabética.",
      "E": "Como um gráfico de barras que mostra a média de cada grupo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O dendrograma parece um fluxograma de cabeça para baixo. Quanto mais alto o 'galho' que une dois grupos, mais diferentes eles são. Você escolhe onde 'cortar' a árvore para decidir quantos clusters quer ter no final.",
      "puloDoGato": "Corte horizontal no Dendrograma = Definição do número de clusters.",
      "cascasDeBanana": {
        "A": "Incorreta. É um diagrama de árvore, não de barras.",
        "B": "Correta. Visualização padrão para AGNES ou DIANA.",
        "C": "Incorreta. Embora clusters hierárquicos possam ser usados em Heatmaps, o dendrograma em si é a árvore lateral.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. É uma representação 2D de relações multidimensionais."
      },
      "dicaDeOuro": "Dendrograma: Corte a árvore na altura da distância que você aceita."
    }
  },
  {
    "id": "q_f3_067",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Detecção de Anomalias - Isolation Forest",
    "difficulty": "Difícil",
    "statement": "Qual a lógica fundamental do algoritmo 'Isolation Forest' para identificar outliers em um conjunto de dados?",
    "options": {
      "A": "Ele tenta agrupar os dados e ver quem fica de fora.",
      "B": "Ele calcula a média de todos os pontos e deleta quem está longe.",
      "C": "Ele isola as anomalias criando árvores de decisão aleatórias; observações anômalas tendem a ser isoladas em caminhos muito curtos (perto da raiz) da árvore.",
      "D": "Ele transforma os dados em imagens e usa uma rede neural CNN.",
      "E": "Ele exige que o usuário rotule manualmente 10% dos dados como 'erro'."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Imagine que você quer isolar um ponto numa sala usando divisórias aleatórias. Se o ponto está no meio de uma multidão (dado normal), você vai precisar de muitas divisórias. Se o ponto está sozinho no canto (outlier), com uma ou duas divisórias você já o isolou. O Isolation Forest mede justamente esse 'comprimento do caminho'.",
      "puloDoGato": "Anomalias são fáceis de isolar = Caminhos curtos na árvore.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria clustering para anomalias.",
        "C": "Correta. Algoritmo extremamente eficiente para alta dimensionalidade.",
        "B": "Incorreta. Isso é simples Z-score, não Isolation Forest.",
        "E": "Incorreta. É um método não supervisionado.",
        "D": "Incorreta. É baseado em árvores, não em redes convolucionais."
      },
      "dicaDeOuro": "Fácil de isolar? Provavelmente é anomalia."
    }
  },
  {
    "id": "q_f3_068",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Clustering - K-Medoids vs K-Means",
    "difficulty": "Médio",
    "statement": "Em que situação o algoritmo K-Medoids é preferível ao K-Means?",
    "options": {
      "A": "Quando o conjunto de dados é muito grande, pois o K-Medoids é mais rápido.",
      "B": "Quando não se tem acesso a uma GPU.",
      "C": "Quando o conjunto de dados possui muitos outliers, pois o K-Medoids utiliza pontos reais como centros, sendo menos sensível a valores extremos que a média.",
      "D": "Quando os dados são puramente binários.",
      "E": "Quando o objetivo é fazer uma regressão linear."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A média (K-Means) é muito 'puxada' por um valor gigante solitário. O 'Medoid' é um ponto real que está no meio do grupo. É como usar a Mediana em vez da Média para não ser enganado por um bilionário numa sala de classe média.",
      "puloDoGato": "K-Medoids (PAM) = Robustez contra Outliers.",
      "cascasDeBanana": {
        "A": "Incorreta. K-Medoids costuma ser mais lento e pesado computacionalmente.",
        "C": "Correta. Vantagem estatística da robustez.",
        "D": "Incorreta. K-Means também lida com binários se usar distâncias adequadas.",
        "B": "Incorreta. Ambos rodam em CPU tranquilamente.",
        "E": "Incorreta. São algoritmos de agrupamento, não de regressão."
      },
      "dicaDeOuro": "Dados sujos e com muitos erros? Tente K-Medoids."
    }
  },
  {
    "id": "q_f3_069",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Aprendizado Não Supervisionado",
    "topic": "Redução de Dimensionalidade - t-SNE",
    "difficulty": "Difícil",
    "statement": "Qual o objetivo principal do algoritmo t-SNE (t-Distributed Stochastic Neighbor Embedding) em Ciência de Dados?",
    "options": {
      "A": "Prever o próximo valor de uma série temporal.",
      "B": "Visualizar dados de alta dimensionalidade em 2D ou 3D, preservando as vizinhanças locais (pontos próximos continuam próximos).",
      "C": "Comprimir arquivos de imagem para ocupar menos espaço.",
      "D": "Substituir o PCA em todas as etapas de pré-processamento para modelos de regressão.",
      "E": "Classificar e-mails entre Spam e Não-Spam."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O t-SNE é excelente para 'ver' os clusters. Ele pega 100 variáveis e tenta desenhar isso num mapa de 2 eixos. Diferente do PCA, ele foca muito em manter quem é vizinho perto um do outro, criando grupos visuais bem definidos.",
      "puloDoGato": "t-SNE = Visualização de Clusters. Não serve para extrair features para modelos (como o PCA), mas é imbatível para entender a estrutura dos dados visualmente.",
      "cascasDeBanana": {
        "A": "Incorreta. Não é preditivo.",
        "B": "Correta. Uso padrão em análise exploratória de clusters complexos.",
        "C": "Incorreta. Uso em Ciência de Dados, não compressão de arquivos genérica.",
        "D": "Incorreta. O t-SNE é muito lento e não mantém a estrutura global tão bem quanto o PCA para modelos lineares.",
        "E": "Incorreta. Isso é classificação supervisionada."
      },
      "dicaDeOuro": "Quer ver se seus grupos fazem sentido no gráfico? Use t-SNE."
    }
  },
  {
    "id": "q_f3_070",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Vetorização - TF-IDF",
    "difficulty": "Médio",
    "statement": "O que o componente 'IDF' (Inverse Document Frequency) da técnica TF-IDF busca penalizar ao transformar textos em vetores numéricos?",
    "options": {
      "A": "Verbos no infinitivo.",
      "B": "Palavras que estão escritas com erro ortográfico.",
      "C": "Palavras muito curtas de menos de 3 letras.",
      "D": "Palavras que aparecem com muita frequência em todos os documentos do corpus (como 'o', 'que', 'em'), considerando-as menos informativas.",
      "E": "Palavras que aparecem apenas uma vez em todo o conjunto de dados."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se a palavra 'Petróleo' aparece em todos os relatórios da Petrobras, ela não ajuda a diferenciar um relatório do outro. O IDF diminui o peso dessas palavras comuns e aumenta o peso de palavras raras e específicas (como 'vazamento' ou 'perfuração'), que carregam mais significado sobre o tema do texto.",
      "puloDoGato": "TF = Frequência no texto atual (importância local). IDF = Raridade no conjunto todo (importância global).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria feito por filtros de Stopwords ou tamanho.",
        "D": "Correta. Dá destaque ao que é único e específico.",
        "B": "Incorreta. TF-IDF não avalia ortografia.",
        "E": "Incorreta. Palavras raras ganham peso ALTO no IDF.",
        "A": "Incorreta. Não faz análise morfológica nativamente."
      },
      "dicaDeOuro": "IDF: Se todo mundo fala, não é especial."
    }
  },
  {
    "id": "q_f3_071",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Pré-processamento - Stemming vs Lemmatization",
    "difficulty": "Médio",
    "statement": "Qual a diferença fundamental entre 'Stemming' e 'Lemmatization'?",
    "options": {
      "A": "Não há diferença, são sinônimos perfeitos.",
      "B": "Stemming só funciona para o inglês e Lemmatization só para o português.",
      "C": "Stemming é mais preciso pois usa um dicionário real, enquanto Lemmatization apenas corta o final das palavras.",
      "D": "Lemmatization é 1000 vezes mais rápido que o Stemming.",
      "E": "Stemming aplica regras heurísticas para cortar o final das palavras (ex: 'estudando' -> 'estud'), enquanto Lemmatization utiliza análise morfológica e dicionários para retornar à raiz gramatical (lema) correta (ex: 'melhor' -> 'bom')."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Stemming é 'bruto': ele corta a palavra e às vezes gera algo que nem existe no dicionário. Lemmatization é 'inteligente': ele entende que 'fui' e 'era' vêm do verbo 'ser'.",
      "puloDoGato": "Stemming = Rápido e simples (corte). Lemmatization = Lento e preciso (dicionário).",
      "cascasDeBanana": {
        "C": "Incorreta. Inverteu as definições.",
        "E": "Correta. Definição linguística aplicada ao NLP.",
        "B": "Incorreta. Ambos existem para vários idiomas.",
        "A": "Incorreta. São abordagens técnicas diferentes.",
        "D": "Incorreta. É mais lento, mas não nessa proporção exagerada."
      },
      "dicaDeOuro": "Lema = Palavra do dicionário. Stem = O que sobra do corte."
    }
  },
  {
    "id": "q_f3_072",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Representação - Word Embeddings",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem de usar Word Embeddings (como Word2Vec ou GloVe) em vez de representações One-Hot Encoding?",
    "options": {
      "A": "Word Embeddings capturam o significado semântico e as relações entre as palavras através da proximidade em um espaço vetorial denso.",
      "B": "Word Embeddings só funcionam para palavras que começam com letra maiúscula.",
      "C": "Word Embeddings removem a necessidade de usar redes neurais.",
      "D": "Word Embeddings garantem que o modelo nunca erre a gramática.",
      "E": "Word Embeddings geram vetores muito maiores e mais complexos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "No One-Hot, 'Cachorro' e 'Cão' são totalmente diferentes para a máquina (distância máxima). No Embedding, essas palavras ficam 'vizinhas' no gráfico. O modelo entende que elas significam quase a mesma coisa porque aparecem em contextos parecidos.",
      "puloDoGato": "Embedding = Significado através da proximidade. Ex: 'Rei - Homem + Mulher = Rainha'.",
      "cascasDeBanana": {
        "E": "Incorreta. Eles geram vetores menores (densos), enquanto One-Hot gera vetores gigantes e vazios (esparsos).",
        "A": "Correta. É a base de toda a revolução moderna do NLP.",
        "D": "Incorreta. São apenas representações numéricas, não garantem correção gramatical.",
        "C": "Incorreta. Geralmente são treinados e usados DENTRO de redes neurais.",
        "B": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Embeddings: Palavras parecidas moram perto."
    }
  },
  {
    "id": "q_f3_073",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Modelagem - N-grams",
    "difficulty": "Fácil",
    "statement": "Em NLP, o que representa um 'Bigram' (2-gram)?",
    "options": {
      "A": "Um modelo de IA com apenas dois neurônios.",
      "B": "Uma tradução de uma palavra para dois idiomas diferentes.",
      "C": "Uma palavra com exatamente duas letras.",
      "D": "Uma sequência de duas palavras adjacentes em um texto (ex: 'Data Science').",
      "E": "Um arquivo de texto com apenas duas linhas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Unigram: 'Eu', 'amo', 'Python'. Bigram: 'Eu amo', 'amo Python'. Trigram: 'Eu amo Python'. Usamos N-grams para capturar o contexto local, pois 'Não' é uma coisa, mas 'Não bom' é outra totalmente diferente.",
      "puloDoGato": "N-grams preservam um pouco da ordem das palavras que o Bag-of-Words simples ignora.",
      "cascasDeBanana": {
        "C": "Incorreta. Refere-se a tokens, não caracteres individuais.",
        "D": "Correta. Unidade básica de análise de sequência.",
        "E": "Incorreta. Nada a ver com a estrutura do arquivo.",
        "A": "Incorreta. Não é uma medida de arquitetura de rede.",
        "B": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Bigram = Dupla de palavras."
    }
  },
  {
    "id": "q_f3_074",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Tarefa - NER (Named Entity Recognition)",
    "difficulty": "Médio",
    "statement": "Qual o objetivo da tarefa de Reconhecimento de Entidades Nomeadas (NER)?",
    "options": {
      "A": "Traduzir o texto automaticamente para o inglês.",
      "B": "Verificar se o texto foi escrito por um robô ou por um humano.",
      "C": "Identificar e classificar entidades do mundo real mencionadas no texto, como nomes de pessoas, organizações, locais e datas.",
      "D": "Resumir um texto longo em apenas um parágrafo.",
      "E": "Contar quantas palavras existem em um livro."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O NER é o 'caçador de nomes'. Ele lê 'A Petrobras comprou equipamentos no Rio de Janeiro em 2023' e marca: [Petrobras] -> Organização, [Rio de Janeiro] -> Local, [2023] -> Data.",
      "puloDoGato": "NER transforma texto bruto em dados estruturados (Quem, Onde, Quando).",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é simples contagem (Word Count).",
        "C": "Correta. Tarefa essencial para extração de informação.",
        "A": "Incorreta. Isso é Tradução Automática (MT).",
        "B": "Incorreta. Isso seria detecção de IA.",
        "D": "Incorreta. Isso é Sumarização."
      },
      "dicaDeOuro": "NER = Extrair nomes de pessoas, lugares e empresas."
    }
  },
  {
    "id": "q_f3_075",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Métricas - BLEU Score",
    "difficulty": "Difícil",
    "statement": "Para qual finalidade a métrica BLEU (Bilingual Evaluation Understudy) é predominantemente utilizada?",
    "options": {
      "A": "Para medir a velocidade de digitação de um usuário.",
      "B": "Para contar o número de adjetivos em uma frase.",
      "C": "Para medir o sentimento (positivo/negativo) de um tweet.",
      "D": "Para detectar plágio em trabalhos acadêmicos.",
      "E": "Para avaliar a qualidade de textos gerados por modelos de Tradução Automática, comparando-os com traduções de referência humana."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Medir se uma tradução está 'boa' é difícil para uma máquina. O BLEU score olha quantos N-grams a tradução da IA compartilha com a tradução feita por um humano. Quanto mais parecido, maior a nota (de 0 a 1).",
      "puloDoGato": "BLEU = Métrica de Tradução. Embora tenha falhas, é o padrão da indústria.",
      "cascasDeBanana": {
        "A": "Incorreta. Métrica de hardware/humano.",
        "E": "Correta. Essencial para avaliar modelos Seq2Seq e Transformers.",
        "D": "Incorreta. Existem outras ferramentas específicas para plágio.",
        "B": "Incorreta. Isso seria POS Tagging.",
        "C": "Incorreta. Isso seria Análise de Sentimento."
      },
      "dicaDeOuro": "Tradução Automática? Falou em BLEU."
    }
  },
  {
    "id": "q_f3_076",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Processamento de Linguagem Natural (NLP)",
    "topic": "Representação - Bag of Words (BoW)",
    "difficulty": "Fácil",
    "statement": "Qual a principal limitação da representação 'Bag of Words' para análise de texto?",
    "options": {
      "A": "Ela não consegue lidar com números.",
      "B": "Ela exige que o texto esteja todo em letras maiúsculas.",
      "C": "Ela ignora completamente a ordem das palavras e a estrutura gramatical do texto.",
      "D": "Ela apaga as palavras mais importantes do texto.",
      "E": "Ela é muito lenta para processar."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Como o nome diz, é um 'saco de palavras'. Se você jogar as palavras 'Cachorro mordeu homem' e 'Homem mordeu cachorro' no saco, a representação numérica será IDÊNTICA. O modelo perde o sentido da ação.",
      "puloDoGato": "BoW = Frequência sem Ordem. Bom para classificar temas, ruim para entender nuances de significado.",
      "cascasDeBanana": {
        "E": "Incorreta. Na verdade, é uma das técnicas mais rápidas e simples.",
        "C": "Correta. É o 'trade-off' da simplicidade da técnica.",
        "A": "Incorreta. Números podem ser tratados como tokens.",
        "B": "Incorreta. O case-folding (minusculizar tudo) é opcional, mas comum.",
        "D": "Incorreta. Ela conta todas as palavras presentes."
      },
      "dicaDeOuro": "Bag of Words: Perde a ordem, ganha na velocidade."
    }
  },
  {
    "id": "q_f3_077",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Conceitos - Pixels e Canais",
    "difficulty": "Fácil",
    "statement": "Uma imagem digital colorida no padrão RGB de 100x100 pixels é representada computacionalmente como uma matriz de quais dimensões?",
    "options": {
      "A": "(100, 3)",
      "B": "(100, 100, 3)",
      "C": "(3, 100)",
      "D": "(100, 100)",
      "E": "(300, 300)"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "São 100 pixels de altura, 100 de largura e 3 camadas (canais) de cores: Vermelho, Verde e Azul (RGB). Cada 'pixel' na verdade tem três valores de 0 a 255.",
      "puloDoGato": "Imagens Coloridas = 3D Tensor (H, W, C). Imagens Tons de Cinza = 2D Matrix (H, W).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria uma imagem em tons de cinza (apenas 1 canal).",
        "B": "Correta. Representação padrão em bibliotecas como OpenCV e TensorFlow.",
        "C": "Incorreta. Multiplicação errada das dimensões.",
        "D": "Incorreta. Dimensões incompletas.",
        "E": "Incorreta. Ordem e valores errados."
      },
      "dicaDeOuro": "RGB sempre tem o '3' no final da dimensão."
    }
  },
  {
    "id": "q_f3_078",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Filtros - Detecção de Bordas (Sobel/Canny)",
    "difficulty": "Médio",
    "statement": "Qual a função de um filtro de Sobel ou um detector de Canny em processamento de imagem?",
    "options": {
      "A": "Deixar a imagem mais brilhante e colorida.",
      "B": "Remover pessoas do fundo da foto automaticamente.",
      "C": "Comprimir a imagem para o formato JPEG.",
      "D": "Inverter as cores da imagem (negativo).",
      "E": "Identificar variações bruscas de intensidade de cor/brilho, que geralmente correspondem às bordas dos objetos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Bordas são onde o contraste muda rápido (ex: do preto para o branco). O filtro matemático calcula esse gradiente. Se a mudança é grande, ele marca como borda. É o primeiro passo para o computador entender 'formas'.",
      "puloDoGato": "Detecção de Bordas = Encontrar contornos através do gradiente de intensidade.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria ajuste de histograma.",
        "E": "Correta. Operação básica de extração de features em visão computacional.",
        "C": "Incorreta. Isso é tarefa de codecs de compressão.",
        "B": "Incorreta. Isso seria segmentação de instâncias avançada.",
        "D": "Incorreta. Isso é uma inversão linear de valores."
      },
      "dicaDeOuro": "Bordas = Mudança rápida de cor."
    }
  },
  {
    "id": "q_f3_079",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Operações - Pooling (Max Pooling)",
    "difficulty": "Médio",
    "statement": "Qual o efeito prático de se aplicar uma camada de 'Max Pooling' em uma Rede Neural Convolucional (CNN)?",
    "options": {
      "A": "Zerar todos os pesos da rede para reiniciar o treino.",
      "B": "Reduzir a dimensão espacial das representações (downsampling), mantendo apenas as ativações mais fortes e tornando a rede mais invariante a pequenas translações.",
      "C": "Aumentar a resolução da imagem para ver mais detalhes.",
      "D": "Transformar a imagem colorida em preto e branco.",
      "E": "Dobrar o número de filtros da camada anterior."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Max Pooling pega uma janelinha (ex: 2x2) e diz: 'Desses 4 valores, qual o maior?'. Ele joga os outros fora e fica só com o mais forte. Isso diminui o tamanho do dado e faz com que, se o objeto se mexer um pouquinho na foto, a rede ainda o reconheça.",
      "puloDoGato": "Pooling = Redução de Parâmetros + Invariância Espacial.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele diminui a resolução.",
        "B": "Correta. Técnica essencial para controlar o overfitting e o custo computacional.",
        "C": "Incorreta. Nada a ver.",
        "D": "Incorreta. Isso é feito no pré-processamento, não pelo Pooling.",
        "E": "Incorreta. O pooling não altera o número de canais/filtros, apenas a altura e largura."
      },
      "dicaDeOuro": "Pooling: Fica com o melhor e joga o resto fora (para economizar)."
    }
  },
  {
    "id": "q_f3_080",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Tarefa - Segmentação Semântica",
    "difficulty": "Difícil",
    "statement": "O que diferencia a 'Segmentação Semântica' da 'Detecção de Objetos'?",
    "options": {
      "A": "A Segmentação Semântica só funciona para vídeos.",
      "B": "Não há diferença, são nomes para a mesma tarefa.",
      "C": "A Detecção de Objetos é mais precisa que a Segmentação.",
      "D": "A Detecção de Objetos não usa redes neurais.",
      "E": "A Detecção de Objetos desenha caixas (bounding boxes) ao redor dos itens, enquanto a Segmentação Semântica classifica cada pixel da imagem em uma categoria."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Detecção (YOLO/Faster R-CNN): 'Tem um carro ali naquela caixa'. Segmentação (U-Net/Mask R-CNN): 'Esses 5.432 pixels específicos pertencem à categoria CARRO'. É muito mais detalhado, como um livro de colorir onde você não pode borrar a linha.",
      "puloDoGato": "Detecção = Box. Segmentação = Máscara de Pixels.",
      "cascasDeBanana": {
        "C": "Incorreta. São níveis de detalhamento diferentes, não necessariamente 'precisão'.",
        "E": "Correta. Diferença fundamental de granularidade da saída.",
        "A": "Incorreta. Ambas funcionam em imagens estáticas ou vídeos.",
        "D": "Incorreta. Ambas são o estado da arte em Deep Learning hoje.",
        "B": "Incorreta. São tarefas distintas no roadmap de visão."
      },
      "dicaDeOuro": "Segmentação = Classificar pixel por pixel."
    }
  },
  {
    "id": "q_f3_081",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Arquiteturas - YOLO (You Only Look Once)",
    "difficulty": "Médio",
    "statement": "Qual a principal característica que tornou o algoritmo YOLO revolucionário para detecção de objetos?",
    "options": {
      "A": "Ele é o único que consegue detectar cores.",
      "B": "Ele exige que a imagem seja dividida em 1 milhão de sub-imagens.",
      "C": "Ele foi criado pelo Google para ler e-mails.",
      "D": "Ele só funciona se o objeto estiver parado.",
      "E": "Ele trata a detecção como um único problema de regressão, processando a imagem inteira em uma única passagem pela rede, o que permite detecção em tempo real (muito rápido)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Antes do YOLO, os algoritmos olhavam para a imagem várias vezes ou em vários pedaços (R-CNN). O YOLO olha 'uma vez só' e já diz onde estão todos os objetos e o que eles são. É por isso que carros autônomos e câmeras de segurança usam YOLO: ele é incrivelmente veloz.",
      "puloDoGato": "YOLO = Real-Time Detection. Velocidade é seu sobrenome.",
      "cascasDeBanana": {
        "A": "Incorreta. Todos os modelos modernos usam cor.",
        "E": "Correta. Definição da arquitetura 'single-stage'.",
        "B": "Incorreta. Ele divide em uma grade simples (ex: 13x13 ou 19x19).",
        "C": "Incorreta. Origem acadêmica (Joseph Redmon).",
        "D": "Incorreta. Ele é excelente para rastrear objetos em movimento."
      },
      "dicaDeOuro": "YOLO: Rápido o suficiente para vídeo ao vivo."
    }
  },
  {
    "id": "q_f3_082",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Data Augmentation",
    "difficulty": "Fácil",
    "statement": "Por que a técnica de 'Data Augmentation' (Aumento de Dados) é tão importante no treinamento de modelos de visão computacional?",
    "options": {
      "A": "Para o computador aprender a tirar fotos melhores sozinho.",
      "B": "Para diminuir o tamanho dos arquivos de imagem e economizar HD.",
      "C": "Para garantir que as imagens tenham nomes bonitos.",
      "D": "Para converter imagens coloridas em desenhos feitos a lápis.",
      "E": "Para criar variações artificiais (rotação, espelhamento, zoom) a partir das imagens originais, aumentando a robustez do modelo e evitando overfitting com poucos dados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se você só treinar o modelo com fotos de carros virados para a direita, ele pode não reconhecer um carro virado para a esquerda. Ao espelhar a foto artificialmente durante o treino, o modelo aprende que 'carro é carro' não importa o lado. Você 'multiplica' suas fotos de graça.",
      "puloDoGato": "Data Augmentation = Mais dados (artificiais) = Modelo mais generalista.",
      "cascasDeBanana": {
        "B": "Incorreta. Geralmente ocupa mais espaço ou processamento.",
        "E": "Correta. Prática padrão para qualquer rede neural de visão.",
        "D": "Incorreta. Isso seria um filtro artístico específico.",
        "A": "Incorreta. O foco é reconhecimento, não fotografia.",
        "C": "Incorreta. Nomes de arquivos não importam para a matemática."
      },
      "dicaDeOuro": "Gire, corte e inverta: seu modelo agradece."
    }
  },
  {
    "id": "q_f3_083",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Visão Computacional",
    "topic": "Transfer Learning - Modelos Pré-treinados",
    "difficulty": "Médio",
    "statement": "Qual o benefício de iniciar um projeto de visão computacional usando uma arquitetura como VGG16 ou ResNet50 pré-treinada no dataset ImageNet?",
    "options": {
      "A": "O modelo apaga automaticamente imagens com baixa qualidade.",
      "B": "O modelo já aprendeu a extrair recursos visuais genéricos (formas, texturas) de milhões de imagens, o que acelera drasticamente a convergência e exige muito menos dados do seu problema específico.",
      "C": "O modelo garante que a precisão será sempre de 100%.",
      "D": "O modelo impede que você use outras bibliotecas além do PyTorch.",
      "E": "O modelo já vem com a lista de preços dos produtos do ImageNet."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Não invente a roda. Redes treinadas no ImageNet já sabem o que é um círculo, uma quina e uma textura de pele. Você só precisa 'ensinar' a ela a parte final: como diferenciar uma válvula de petróleo de um parafuso.",
      "puloDoGato": "Transfer Learning = Conhecimento prévio. Essencial para quem não tem 1 milhão de fotos e 100 GPUs.",
      "cascasDeBanana": {
        "A": "Incorreta. ImageNet é sobre categorias de objetos, não preços.",
        "B": "Correta. Uso de 'Feature Extraction' de modelos consolidados.",
        "C": "Incorreta. Funciona em qualquer framework (Keras, TensorFlow, etc).",
        "D": "Incorreta. Nada em ML é 100%.",
        "E": "Incorreta. Não tem função de limpeza de dados."
      },
      "dicaDeOuro": "Comece com um modelo que já 'viu o mundo'."
    }
  },
  {
    "id": "q_f3_084",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Indexação - loc vs iloc",
    "difficulty": "Médio",
    "statement": "No Pandas, qual a diferença fundamental entre os métodos `.loc[]` e `.iloc[]`?",
    "options": {
      "A": "O .loc[] baseia-se em rótulos (labels/nomes), enquanto o .iloc[] baseia-se em posições inteiras (índices numéricos de 0 a N).",
      "B": "O .iloc[] é usado apenas para arquivos Excel.",
      "C": "Não há diferença, são métodos redundantes.",
      "D": "O .loc[] é mais rápido que o .iloc[] em todas as situações.",
      "E": "O .loc[] é para linhas e o .iloc[] é para colunas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "loc = Localização por nome. iloc = Localização por Inteiro (posição). Se você quer a linha onde o nome do cliente é 'João', usa loc. Se quer a terceira linha da tabela (posição 2), usa iloc.",
      "puloDoGato": "L de Label (.loc). I de Integer/Index (.iloc). Nunca mais esqueça.",
      "cascasDeBanana": {
        "E": "Incorreta. Ambos acessam tanto linhas quanto colunas.",
        "A": "Correta. Diferença técnica crucial que gera muitos erros em iniciantes.",
        "B": "Incorreta. São métodos do objeto DataFrame do Pandas, independente da origem do dado.",
        "D": "Incorreta. O .iloc[] costuma ser levemente mais rápido por não precisar buscar rótulos.",
        "C": "Incorreta. Tentar usar um no lugar do outro causa erros de KeyError ou IndexError."
      },
      "dicaDeOuro": ".loc['nome'] vs .iloc[0]."
    }
  },
  {
    "id": "q_f3_085",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Limpeza - fillna vs dropna",
    "difficulty": "Fácil",
    "statement": "Ao lidar com valores ausentes (NaN) em um DataFrame, qual a função do método `.fillna(0)`?",
    "options": {
      "A": "Esconder os erros do programador.",
      "B": "Substituir todos os valores ausentes pelo valor numérico zero.",
      "C": "Criar uma nova coluna cheia de zeros no final do arquivo.",
      "D": "Deletar todas as linhas que contenham algum valor nulo.",
      "E": "Multiplicar todos os valores da tabela por zero."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "fillna = Preencher (Fill) os nulos (NA). Você pode preencher com zero, com a média, com o valor anterior... qualquer coisa para não deixar o buraco vazio que trava os cálculos matemáticos.",
      "puloDoGato": "fillna = Imputação de dados. dropna = Exclusão de dados.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria o .dropna().",
        "B": "Correta. Uma das formas mais simples de tratamento de nulos.",
        "C": "Incorreta. Ele só atua onde o dado está faltando.",
        "D": "Incorreta. Ele modifica as células existentes (ou retorna uma cópia modificada).",
        "E": "Incorreta. É uma técnica estatística válida, não um truque de ocultação."
      },
      "dicaDeOuro": "fillna: Onde não tem nada, coloque alguma coisa."
    }
  },
  {
    "id": "q_f3_086",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Agregação - groupby",
    "difficulty": "Médio",
    "statement": "Qual o fluxo de processamento realizado pelo método `.groupby()` do Pandas?",
    "options": {
      "A": "Mudar o nome de todas as colunas para 'Grupo'.",
      "B": "Ordenar os dados do maior para o menor.",
      "C": "Deletar colunas duplicadas.",
      "D": "Dividir (Split), Aplicar (Apply) e Combinar (Combine).",
      "E": "Transformar a tabela em um gráfico de pizza."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O GroupBy separa os dados em grupos (Split), faz uma conta em cada grupo (ex: soma, média) (Apply) e depois junta tudo numa tabela nova (Combine).",
      "puloDoGato": "Split-Apply-Combine: O mantra de quem trabalha com dados agrupados.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é o .sort_values().",
        "D": "Correta. É o paradigma oficial da documentação do Pandas.",
        "C": "Incorreta. Isso seria o .drop_duplicates().",
        "E": "Incorreta. Pandas faz plots, mas o groupby é uma operação lógica/matemática.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Agrupar para resumir: use GroupBy."
    }
  },
  {
    "id": "q_f3_087",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Estatística - describe",
    "difficulty": "Fácil",
    "statement": "O que o método `df.describe()` retorna quando aplicado a um DataFrame com colunas numéricas?",
    "options": {
      "A": "A soma total de todos os valores da tabela.",
      "B": "Um resumo estatístico contendo contagem, média, desvio padrão, valores mínimo/máximo e quartis de cada coluna.",
      "C": "As primeiras 5 linhas do DataFrame.",
      "D": "O nome de todas as colunas e o tipo de dado de cada uma.",
      "E": "Um texto descrevendo quem criou o arquivo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o 'check-up' rápido dos dados. Com um comando só você vê se tem outliers (olhando o max) e qual a cara geral da distribuição (média vs mediana).",
      "puloDoGato": "describe() = Raio-X estatístico instantâneo.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria o .info().",
        "B": "Correta. Principal ferramenta de análise exploratória inicial.",
        "C": "Incorreta. Isso seria o .head().",
        "D": "Incorreta. Isso seria o .sum().",
        "E": "Incorreta. describe() é sobre os dados, não metadados de autoria."
      },
      "dicaDeOuro": "Pegou um dado novo? Primeira coisa: df.describe()."
    }
  },
  {
    "id": "q_f3_088",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Fusão de Dados - merge vs concat",
    "difficulty": "Médio",
    "statement": "Qual a diferença principal entre `pd.concat()` e `pd.merge()` no Pandas?",
    "options": {
      "A": "Merge só funciona com arquivos CSV e Concat com Excel.",
      "B": "Merge é usado apenas para strings.",
      "C": "Concat apenas 'empilha' DataFrames (um embaixo do outro ou lado a lado), enquanto Merge realiza junções baseadas em colunas comuns (estilo JOIN do SQL).",
      "D": "Merge é usado para deletar dados e Concat para adicionar.",
      "E": "Concat é uma função do Python puro e Merge é do Pandas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Concat é 'colar' (copia e cola embaixo). Merge é 'inteligente': ele olha, por exemplo, o ID do cliente em duas tabelas diferentes e une as informações daquele cliente específico em uma linha só.",
      "puloDoGato": "Merge = SQL JOIN (Inner, Left, Right, Outer). Concat = Union / Append.",
      "cascasDeBanana": {
        "A": "Incorreta. Ambos operam sobre objetos DataFrame já em memória.",
        "C": "Correta. Diferença crucial de lógica de união.",
        "D": "Incorreta. Ambos servem para expansão de dados.",
        "E": "Incorreta. Ambos são do Pandas.",
        "B": "Incorreta. Funcionam com qualquer tipo de dado."
      },
      "dicaDeOuro": "Quer fazer um Procv/Vlookup ou Join? Use Merge."
    }
  },
  {
    "id": "q_f3_089",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Desempenho - Vectorization",
    "difficulty": "Difícil",
    "statement": "Por que é recomendado evitar o uso de loops `for` para iterar sobre as linhas de um DataFrame do Pandas, preferindo operações vetorizadas?",
    "options": {
      "A": "Porque o loop 'for' é proibido nas versões mais novas do Python.",
      "B": "Porque o loop 'for' apaga os índices da tabela.",
      "C": "Porque o Pandas não suporta o comando 'if' dentro de um loop.",
      "D": "Porque operações vetorizadas são executadas em C e utilizam otimizações de CPU que as tornam ordens de magnitude mais rápidas que a iteração manual em Python.",
      "E": "Porque loops 'for' ocupam mais memória de vídeo (VRAM)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Python é uma linguagem lenta para loops. O Pandas (e o NumPy por baixo dele) faz as contas em blocos de memória otimizados. Multiplicar uma coluna toda por 2 via vetorização é instantâneo; fazer um 'for' linha por linha é como carregar um caminhão de areia com uma colher de chá.",
      "puloDoGato": "Vetorização = Velocidade. Sempre que possível, faça a conta direto na coluna: df['col'] * 2.",
      "cascasDeBanana": {
        "A": "Incorreta. O loop existe e funciona, só é ineficiente aqui.",
        "D": "Correta. Razão técnica da alta performance do Pandas.",
        "B": "Incorreta. O índice permanece intacto.",
        "C": "Incorreta. Suporta, mas continua sendo lento.",
        "E": "Incorreta. O consumo de RAM/CPU é o foco, não VRAM."
      },
      "dicaDeOuro": "Viu um 'for' no seu código Pandas? Tente vetorizar."
    }
  },
  {
    "id": "q_f3_090",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Manipulação de Dados (Pandas)",
    "topic": "Séries Temporais - to_datetime",
    "difficulty": "Médio",
    "statement": "Qual a importância de converter uma coluna de datas que está como 'string' para o tipo `datetime64` no Pandas usando `pd.to_datetime()`?",
    "options": {
      "A": "Para o arquivo ficar mais leve ao salvar no computador.",
      "B": "Para habilitar funcionalidades poderosas de séries temporais, como extração de dia/mês/ano, cálculos de diferença entre datas e reamostragem (resampling).",
      "C": "Para converter automaticamente o fuso horário para o de Brasília.",
      "D": "Para impedir que usuários digitem datas erradas no futuro.",
      "E": "Apenas para mudar a cor do texto no Jupyter Notebook."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Se a data é um texto, você não consegue perguntar 'qual o dia da semana?'. Se for datetime, você faz `dt.day_name()` e pronto. Além disso, você pode filtrar períodos (ex: todas as vendas de 2023) de forma extremamente fácil.",
      "puloDoGato": "Datetime object = Superpoderes para lidar com o tempo.",
      "cascasDeBanana": {
        "A": "Incorreta. Não afeta a estética, mas sim a lógica.",
        "B": "Correta. Essencial para análise temporal e MLOps.",
        "C": "Incorreta. Ocupa espaço similar, mas a performance de busca melhora.",
        "D": "Incorreta. O to_datetime é para dados já existentes.",
        "E": "Incorreta. O fuso horário (timezone) só é alterado se especificado, não é automático para Brasília."
      },
      "dicaDeOuro": "Data no Pandas sempre deve ser datetime."
    }
  },
  {
    "id": "q_f3_195",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Modelagem - Bias-Variance Tradeoff",
    "difficulty": "Difícil",
    "statement": "O que acontece com um modelo de Machine Learning que apresenta 'Alto Viés' (High Bias)?",
    "options": {
      "A": "O modelo está sofrendo de Overfitting e decorou os dados de treino.",
      "B": "O modelo só funciona com dados numéricos.",
      "C": "O modelo gasta muita memória RAM.",
      "D": "O modelo é perfeito e não precisa de ajustes.",
      "E": "O modelo está sofrendo de Underfitting, sendo simples demais para capturar os padrões dos dados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Viés (Bias) é o erro de 'preconceito' do modelo. Ele acha que a resposta é sempre uma linha reta, mas os dados são uma curva complexa. Ele erra tanto no treino quanto no teste porque é 'burro' demais para o problema.",
      "puloDoGato": "High Bias = Underfitting (Modelo Simples). High Variance = Overfitting (Modelo Complexo).",
      "cascasDeBanana": {
        "A": "Incorreta. Overfitting é associado a Alta Variância (High Variance).",
        "E": "Correta. Conceito central para ajuste de hiperparâmetros.",
        "D": "Incorreta. É um sinal de erro sistemático.",
        "C": "Incorreta. Complexidade de computação é outra métrica.",
        "B": "Incorreta. Independe do tipo de dado, é sobre a flexibilidade da função."
      },
      "dicaDeOuro": "Bias alto: o modelo não aprendeu nem o básico."
    }
  },
  {
    "id": "q_f3_196",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Avaliação - Matriz de Confusão (F1-Score)",
    "difficulty": "Médio",
    "statement": "O F1-Score é uma métrica de avaliação de modelos de classificação. O que ele representa?",
    "options": {
      "A": "A média harmônica entre Precision (Precisão) e Recall (Revocação), sendo útil quando há desbalanceamento de classes.",
      "B": "O número de vezes que o modelo acertou o primeiro palpite.",
      "C": "A média aritmética simples entre a acurácia e a perda (loss).",
      "D": "A cor do gráfico de barras no relatório final.",
      "E": "A velocidade com que o modelo processa cada linha de dados."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Se você tem uma doença rara (1 caso em 1 milhão), um modelo que diz 'ninguém tem nada' terá 99,9% de acurácia, mas é inútil. O F1-Score te obriga a equilibrar a precisão (não dar alarmes falsos) e o recall (não deixar passar nenhum doente real).",
      "puloDoGato": "F1-Score = Equilíbrio entre Precisão e Recall.",
      "cascasDeBanana": {
        "C": "Incorreta. Média aritmética não penaliza valores baixos como a harmônica faz.",
        "A": "Correta. Métrica padrão para problemas do mundo real com classes desiguais.",
        "B": "Incorreta. Absurdo.",
        "E": "Incorreta. Métrica de performance, não de qualidade estatística.",
        "D": "Incorreta. Absurdo visual."
      },
      "dicaDeOuro": "Use F1-Score se a acurácia estiver te enganando."
    }
  },
  {
    "id": "q_f3_197",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Validação - Cross-Validation (K-fold)",
    "difficulty": "Médio",
    "statement": "Qual o principal objetivo da técnica de K-fold Cross-Validation?",
    "options": {
      "A": "Aumentar o número de colunas no banco de dados.",
      "B": "Fazer o treinamento ser 10 vezes mais rápido.",
      "C": "Dividir os dados em K pedaços para treinar o modelo K vezes, garantindo uma avaliação mais robusta e menos dependente de uma única divisão aleatória.",
      "D": "Deletar os dados que o modelo não conseguiu classificar.",
      "E": "Criptografar os dados antes de treinar a rede neural."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se você deu azar e os dados de teste são muito fáceis, sua métrica vai ser mentirosa. No K-fold, todo dado tem a chance de ser 'treino' e 'teste'. No final, você tira a média dos resultados e tem uma visão muito mais real do poder do seu modelo.",
      "puloDoGato": "Cross-Validation = Avaliação justa e robusta.",
      "cascasDeBanana": {
        "C": "Correta. Evita o viés de uma divisão única de treino/teste.",
        "A": "Incorreta. Não altera as features dos dados.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. Irrelevante para o treinamento em si.",
        "B": "Incorreta. Na verdade, demora K vezes mais, pois treina K modelos."
      },
      "dicaDeOuro": "Cross-validation: não confie em uma única rodada de sorte."
    }
  },
  {
    "id": "q_f3_198",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Modelagem - Overfitting",
    "difficulty": "Fácil",
    "statement": "O que caracteriza o fenômeno de 'Overfitting'?",
    "options": {
      "A": "O modelo só funciona em dias de sol.",
      "B": "O modelo terminou o treinamento antes do tempo previsto.",
      "C": "O modelo é pequeno demais para caber na memória do servidor.",
      "D": "O modelo não conseguiu aprender nada e erra tudo.",
      "E": "O modelo aprendeu tão bem os dados de treino (incluindo o ruído) que perdeu a capacidade de generalizar para novos dados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Overfitting é o modelo que 'decorou a prova'. Ele tirou 10 no simulado, mas quando chega a questão nova com uma pegadinha diferente, ele erra feio. Ele virou um especialista em 'passado' e um péssimo vidente de 'futuro'.",
      "puloDoGato": "Overfitting = Ótimo no Treino, Péssimo no Teste.",
      "cascasDeBanana": {
        "E": "Correta. Problema clássico de modelos complexos demais.",
        "D": "Incorreta. Isso seria Underfitting.",
        "C": "Incorreta. Problema de infra/recursos.",
        "B": "Incorreta. Irrelevante.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Cuidado com modelos que parecem bons demais para ser verdade."
    }
  },
  {
    "id": "q_f3_205",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Modelagem - Regularização (L1 vs L2)",
    "difficulty": "Difícil",
    "statement": "Qual o efeito da regularização L1 (Lasso) em um modelo de regressão linear?",
    "options": {
      "A": "Impedir que o modelo use números negativos.",
      "B": "Aumentar o valor de todos os coeficientes para tornar o modelo mais forte.",
      "C": "Transformar o modelo em uma rede neural profunda.",
      "D": "Diminuir a velocidade do treinamento em 50%.",
      "E": "Tender a zerar os coeficientes de features menos importantes, realizando uma seleção automática de variáveis."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "L1 é o 'fiscal impiedoso'. Ele coloca uma multa no tamanho dos pesos. Se a variável não ajuda muito, ele zera o peso dela. Isso é ótimo para limpar o modelo de 'lixo' (colunas inúteis). O L2 (Ridge) diminui os pesos, mas raramente os zera.",
      "puloDoGato": "L1 (Lasso) = Seleção de variáveis (Zera pesos). L2 (Ridge) = Suavização (Diminui pesos).",
      "cascasDeBanana": {
        "B": "Incorreta. Regularização busca diminuir a complexidade, não aumentar.",
        "E": "Correta. Característica distintiva da norma L1.",
        "D": "Incorreta. O impacto em tempo é mínimo.",
        "C": "Incorreta. É uma técnica estatística, não muda a arquitetura básica.",
        "A": "Incorreta. Aceita qualquer valor real."
      },
      "dicaDeOuro": "Lasso (L1): O laço que 'enforca' as variáveis inúteis."
    }
  },
  {
    "id": "q_f3_216",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Preparação - Normalização vs Padronização",
    "difficulty": "Médio",
    "statement": "Quando devemos preferir a Padronização (Standardization/Z-score) em vez da Normalização (Min-Max Scaling) nas features?",
    "options": {
      "A": "Sempre, pois padronização é sempre melhor que normalização.",
      "B": "Quando queremos que todos os dados fiquem entre 0 e 1, independente da distribuição.",
      "C": "Quando o banco de dados está quase cheio.",
      "D": "Quando não temos tempo para fazer cálculos matemáticos.",
      "E": "Quando os dados seguem uma distribuição Gaussiana (Normal) e possuem outliers, pois o Z-score é menos afetado por valores extremos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Min-Max joga tudo entre 0 e 1. Se você tem um outlier gigante (ex: salário de 1 milhão enquanto todos ganham 2 mil), o Min-Max vai esmagar todo mundo perto do zero. A Padronização (Z-score) centraliza na média e usa o desvio padrão, lidando melhor com esses 'pontos fora da curva'.",
      "puloDoGato": "Normalização (Min-Max) = Intervalo Fixo [0,1]. Padronização (Z-score) = Média 0 e Desvio 1.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é característica da Normalização.",
        "E": "Correta. Regra de ouro para algoritmos sensíveis à escala (como SVM e KNN).",
        "D": "Incorreta. Ambas são rápidas computacionalmente.",
        "C": "Incorreta. Não afeta o armazenamento.",
        "A": "Incorreta. Depende do algoritmo (Redes Neurais costumam preferir [0,1])."
      },
      "dicaDeOuro": "Outliers? Vá de Padronização (StandardScaler)."
    }
  },
  {
    "id": "q_f3_217",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Estatística - Valor-p (p-value)",
    "difficulty": "Difícil",
    "statement": "Em um teste de hipóteses, o que significa um p-value de 0,01?",
    "options": {
      "A": "A variável independente é 100 vezes maior que a dependente.",
      "B": "O modelo tem 99% de acurácia.",
      "C": "O experimento falhou e deve ser reiniciado.",
      "D": "Existe 1% de chance de o modelo estar correto.",
      "E": "Existe 1% de probabilidade de observarmos os dados (ou algo mais extremo) assumindo que a Hipótese Nula (H0) é verdadeira."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O p-value mede a 'surpresa'. Se a hipótese nula diz 'não há efeito' e seu p-value é muito baixo (ex: < 0,05), significa que os dados que você viu seriam muito raros de acontecer por puro acaso. Então, você rejeita a hipótese nula e diz que o efeito é real.",
      "puloDoGato": "p-value baixo (< 0,05) = Rejeita H0 (Efeito Significativo).",
      "cascasDeBanana": {
        "D": "Incorreta. O p-value não mede a 'chance de estar certo'.",
        "E": "Correta. Definição técnica e rigorosa da estatística frequentista.",
        "B": "Incorreta. Nada a ver com acurácia de classificação.",
        "C": "Incorreta. Um p-value baixo é geralmente o que o pesquisador quer ver.",
        "A": "Incorreta. Absurdo matemático."
      },
      "dicaDeOuro": "p-value pequeno, evidência grande."
    }
  },
  {
    "id": "q_f3_218",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Engenharia de Features - One-Hot Encoding",
    "difficulty": "Fácil",
    "statement": "Para que serve a técnica de One-Hot Encoding?",
    "options": {
      "A": "Para esfriar o processador durante o treinamento.",
      "B": "Para aumentar a resolução das fotos no dataset.",
      "C": "Para criptografar os nomes dos usuários.",
      "D": "Para apagar linhas duplicadas no dataset.",
      "E": "Para converter variáveis categóricas nominais (ex: Cores: Vermelho, Azul) em colunas binárias numéricas (0 e 1) que o modelo consiga processar."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Algoritmos não entendem 'Vermelho'. Se você colocar 'Vermelho=1, Azul=2, Verde=3', o modelo vai achar que Verde é maior que Vermelho (erro de ordem). O One-Hot cria uma coluna pra cada cor: 'É Vermelho? Sim(1)/Não(0)'.",
      "puloDoGato": "One-Hot = Transforma Texto Categórico em Números (0/1).",
      "cascasDeBanana": {
        "A": "Incorreta. Piada literal.",
        "E": "Correta. Passo essencial de pré-processamento.",
        "D": "Incorreta. Limpeza de dados é outro processo.",
        "C": "Incorreta. Nada a ver com segurança.",
        "B": "Incorreta. Irrelevante para imagens (a menos que sejam labels)."
      },
      "dicaDeOuro": "Categórico nominal? Use One-Hot."
    }
  },
  {
    "id": "q_f3_229",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Ciência de Dados",
    "topic": "Visualização de Dados - Boxplot",
    "difficulty": "Médio",
    "statement": "O que os 'pontos' fora dos limites das 'hastes' (whiskers) em um gráfico de Boxplot representam?",
    "options": {
      "A": "Outliers (valores atípicos ou discrepantes).",
      "B": "O erro do software de visualização.",
      "C": "O número de colunas no dataset.",
      "D": "A média dos dados.",
      "E": "O valor máximo permitido por lei."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Boxplot mostra a 'caixa' com 50% dos dados. As hastes mostram o limite do que é 'normal' (geralmente 1,5 vezes o intervalo interquartílico). O que escapa disso é o ponto solitário: o outlier. Pode ser um erro de digitação ou um caso especial que merece estudo.",
      "puloDoGato": "Pontos fora do Boxplot = Outliers.",
      "cascasDeBanana": {
        "D": "Incorreta. A média costuma ser um ponto ou linha dentro da caixa (ou a mediana).",
        "A": "Correta. Ferramenta visual poderosa para limpeza de dados.",
        "E": "Incorreta. Absurdo.",
        "B": "Incorreta. É um comportamento estatístico esperado.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Boxplot: A lanterna para achar outliers."
    }
  },
  {
    "id": "q_ds_1000",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Data Drift e Concept Drift",
    "statement": "No monitoramento de modelos em produção, o fenômeno onde a distribuição estatística dos dados de entrada muda ao longo do tempo, afetando a performance do modelo, é conhecido como:",
    "options": {
      "A": "Model Decay.",
      "B": "Data Drift (ou Covariate Shift).",
      "C": "Concept Drift.",
      "D": "Bias Shift.",
      "E": "Overfitting."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Data Drift acontece quando os dados que o seu modelo recebe 'hoje' são diferentes dos dados que ele viu no treino. Exemplo: você treinou um modelo com dados de compras de inverno, e agora estamos no verão. O comportamento do usuário mudou.",
      "puloDoGato": "Data Drift = Mudança nos dados de entrada (X). Concept Drift = Mudança na relação entre entrada e saída (Y).",
      "cascasDeBanana": {
        "A": "Concept Drift é quando o 'significado' do acerto muda (ex: o que era considerado fraude mudou seu padrão).",
        "B": "",
        "C": "Model Decay é o termo geral para a perda de performance, que pode ser causada por drift.",
        "D": "Overfitting acontece no treino, não no monitoramento de produção.",
        "E": "Termo inventado para confundir."
      },
      "dicaDeOuro": "Sempre monitore as distribuições das features principais usando testes estatísticos como o Kolmogorov-Smirnov."
    }
  },
  {
    "id": "q_ds_1001",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Feature Store",
    "statement": "Qual a principal vantagem de utilizar uma Feature Store em um pipeline de Machine Learning corporativo?",
    "options": {
      "A": "Garantir a consistência das features entre o treinamento (offline) e a inferência (online).",
      "B": "Automatizar a escolha dos hiperparâmetros do modelo.",
      "C": "Substituir o Data Warehouse da empresa.",
      "D": "Melhorar a acurácia do modelo através de AutoML.",
      "E": "Reduzir o custo de armazenamento de dados brutos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Feature Store é como um 'supermercado' de dados prontos. O maior problema em ML é o treino usar um cálculo e o app usar outro. A Feature Store garante que o cálculo seja o mesmo pros dois mundos.",
      "puloDoGato": "Feature Store = Reutilização de features + Consistência Treino/Serviço.",
      "cascasDeBanana": {
        "E": "Features stores costumam ser mais caras que armazenamento frio (S3/Blob).",
        "B": "Feature Store lida com dados, não com otimização de parâmetros.",
        "C": "Ela complementa o DW, não substitui.",
        "D": "Feature Store é sobre engenharia de dados, não sobre o algoritmo de ML em si."
      },
      "dicaDeOuro": "Tecton e Feast são exemplos populares de soluções de Feature Store."
    }
  },
  {
    "id": "q_ds_1002",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Pipeline de CI/CD para ML",
    "statement": "Em MLOps, o conceito de 'Continuous Training' (CT) refere-se à capacidade do sistema de:",
    "options": {
      "A": "Atualizar o código do modelo no GitHub automaticamente.",
      "B": "Retreinar e validar o modelo automaticamente sempre que novos dados ou gatilhos de performance forem detectados.",
      "C": "Manter o modelo rodando em um servidor sem interrupções.",
      "D": "Executar testes unitários nos dados de entrada continuamente.",
      "E": "Gerar logs de predição em tempo real."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No software comum, o CD entrega código. No ML, o CT entrega um modelo novo. Se a performance cair ou chegar dado novo, o pipeline acorda, treina, testa e se o modelo novo for melhor, ele substitui o antigo.",
      "puloDoGato": "CT (Continuous Training) = Automação do retreinamento.",
      "cascasDeBanana": {
        "A": "Isso é CI comum.",
        "B": "",
        "C": "Isso é Data Validation, uma parte do pipeline, mas não o CT completo.",
        "D": "Isso é alta disponibilidade.",
        "E": "Isso é monitoramento."
      },
      "dicaDeOuro": "O nível 2 de maturidade em MLOps (segundo o Google) exige a automação total desse ciclo de retreinamento."
    }
  },
  {
    "id": "q_ds_1003",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Serving",
    "statement": "Ao implantar um modelo para inferência em tempo real com baixa latência, qual padrão de arquitetura é mais indicado?",
    "options": {
      "A": "Database Trigger.",
      "B": "Manual CSV Upload.",
      "C": "Batch Processing.",
      "D": "Cron Job.",
      "E": "Model-as-a-Service (REST/gRPC API)."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se você precisa de resposta rápida (tempo real), você expõe o modelo como uma API. O app faz um request 'Pergunta' e o modelo responde 'Resposta' na hora.",
      "puloDoGato": "Tempo real = Inferência Online via API (REST/gRPC).",
      "cascasDeBanana": {
        "C": "Batch é para grandes volumes processados de uma vez, geralmente offline.",
        "A": "Triggers podem ser lentos e complexos para ML.",
        "B": "Padrão totalmente manual e ineficiente.",
        "D": "Cron Jobs são para tarefas agendadas, não para baixa latência em tempo real."
      },
      "dicaDeOuro": "Utilize ferramentas como Seldon Core, BentoML ou TF Serving para gerenciar APIs de modelos."
    }
  },
  {
    "id": "q_ds_1004",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Data Lineage",
    "statement": "O que o conceito de Data Lineage busca resolver no contexto de engenharia de Machine Learning?",
    "options": {
      "A": "Criptografar dados sensíveis de acordo com a LGPD.",
      "B": "Automatizar o deploy de infraestrutura via Terraform.",
      "C": "Rastrear a origem, as transformações e o destino dos dados ao longo do pipeline.",
      "D": "Aumentar a velocidade de processamento do Spark.",
      "E": "Reduzir a redundância em bancos de dados relacionais."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Data Lineage é o 'histórico' do dado. Se um modelo deu erro, você precisa saber de onde veio aquele dado, quem mexeu nele e como ele chegou lá. É essencial para auditoria e debug.",
      "puloDoGato": "Lineage = Rastreabilidade do dado.",
      "cascasDeBanana": {
        "D": "Não tem relação direta com performance de processamento.",
        "A": "Segurança é importante, mas não é a definição de Lineage.",
        "E": "Isso é normalização.",
        "B": "Isso é IaC."
      },
      "dicaDeOuro": "Ferramentas como Apache Atlas ou Amundsen ajudam na visualização do Data Lineage."
    }
  },
  {
    "id": "q_ds_1005",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Canary Deployment",
    "statement": "No contexto de Model Deployment, o que caracteriza a estratégia de 'Canary Deployment'?",
    "options": {
      "A": "Treinar o modelo usando apenas dados de pássaros.",
      "B": "Realizar o deploy apenas em ambientes de homologação.",
      "C": "Direcionar uma pequena porcentagem do tráfego real para o novo modelo antes de fazer o rollout total.",
      "D": "Substituir todos os servidores do modelo antigo pelos novos de uma só vez.",
      "E": "Manter o modelo antigo e o novo rodando em paralelo e comparar os resultados sem enviar o novo para o usuário."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O 'Canário' é a cobaia. Você solta o modelo novo para 5% dos usuários. Se ninguém reclamar e os logs estiverem OK, você aumenta para 20%, 50% até 100%. Se der erro, o estrago foi pequeno.",
      "puloDoGato": "Canary = Rollout gradual para reduzir risco.",
      "cascasDeBanana": {
        "A": "Isso é Recreate Deployment (alto risco).",
        "B": "Isso é Shadow Deployment.",
        "C": "",
        "D": "Piada técnica.",
        "E": "Deploy em homologação não é estratégia de produção."
      },
      "dicaDeOuro": "O nome vem da prática de mineradores que levavam canários para minas; se o pássaro morresse, era sinal de gás tóxico e perigo iminente."
    }
  },
  {
    "id": "q_ds_1006",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Model Registry",
    "statement": "Qual o papel fundamental de um Model Registry (como o do MLflow) em um ciclo de vida de MLOps?",
    "options": {
      "A": "Realizar o balanceamento de carga da API do modelo.",
      "B": "Gerenciar o versionamento, estágios (Staging/Production) e metadados de modelos treinados.",
      "C": "Substituir o Docker Hub no armazenamento de imagens.",
      "D": "Armazenar o código-fonte original do Jupyter Notebook.",
      "E": "Executar o pré-processamento de dados em escala."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Model Registry é a 'biblioteca' de modelos. Ele guarda a versão 1, a versão 2, diz qual está em produção, quem aprovou e quando foi treinado. Sem ele, você se perde em qual arquivo `.pkl` é o atual.",
      "puloDoGato": "Model Registry = Versionamento de Artefatos de Modelo.",
      "cascasDeBanana": {
        "A": "O código fica no Git; o Registry guarda o objeto treinado.",
        "B": "",
        "C": "Isso é papel de frameworks de processamento (Spark, Dask).",
        "D": "Registry guarda modelos, não imagens de containers (embora possam estar ligados).",
        "E": "Isso é papel do Ingress/Load Balancer."
      },
      "dicaDeOuro": "O MLflow Model Registry permite transições de estágio aprovadas por humanos ou via scripts automatizados."
    }
  },
  {
    "id": "q_ds_1007",
    "discipline": "MLOps e Engenharia de ML",
    "topic": "Reproducibilidade",
    "statement": "Para garantir a reprodutibilidade de um experimento de ML, além do código e do modelo, o que é CRÍTICO ser versionado?",
    "options": {
      "A": "O nome do usuário que executou o comando.",
      "B": "Os dados exatos utilizados no treinamento e os hiperparâmetros (incluindo o random seed).",
      "C": "A cor da interface do IDE utilizada.",
      "D": "A velocidade da conexão de internet.",
      "E": "A quantidade de memória RAM livre no momento do treino."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "ML não é determinístico por natureza. Se você não travar os dados (snapshot) e o 'random seed', o mesmo código pode dar resultados diferentes toda vez. Reprodutibilidade é conseguir o mesmo resultado amanhã que você conseguiu hoje.",
      "puloDoGato": "Reprodutibilidade = Código + Dados + Hiperparâmetros + Random Seed.",
      "cascasDeBanana": {
        "A": "Irrelevante.",
        "B": "",
        "C": "Afeta a velocidade, mas não o resultado matemático final (geralmente).",
        "D": "Importante para auditoria, mas não para a matemática do modelo.",
        "E": "Irrelevante."
      },
      "dicaDeOuro": "Use ferramentas como DVC (Data Version Control) para versionar grandes volumes de dados de forma eficiente junto com o Git."
    }
  }
];
