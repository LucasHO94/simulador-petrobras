// Banco de questões: ti-geral (425 questões)
export const questions_ti_geral = [
  {
    "id": "q_ds_035",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Banco de Dados",
    "topic": "Window Functions",
    "difficulty": "Difícil",
    "statement": "Em uma consulta SQL, qual Window Function deve ser utilizada quando se deseja atribuir um ranking aos funcionários por salário dentro de cada departamento, garantindo que em caso de empate os números de ranking sejam consecutivos (sem pular números)?",
    "options": {
      "A": "DENSE_RANK()",
      "B": "LEAD()",
      "C": "LAG()",
      "D": "RANK()",
      "E": "ROW_NUMBER()"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine um pódio olímpico. Se dois atletas empatam no segundo lugar, o RANK() daria: 1º, 2º, 2º... e o próximo seria o 4º (ele pula o 3º). O DENSE_RANK() é 'denso': ele daria 1º, 2º, 2º... e o próximo seria o 3º. Ele não deixa buracos na numeração.",
      "puloDoGato": "Window Functions como essas são processadas pela cláusula `OVER(PARTITION BY ... ORDER BY ...)`. O DENSE_RANK é o mais usado quando queremos saber os 'Top N' sem nos preocuparmos com empates quebrando a contagem.",
      "cascasDeBanana": {
        "E": "Incorreta. ROW_NUMBER daria números únicos mesmo para salários iguais (1, 2, 3, 4), sem representar o empate.",
        "D": "Incorreta. RANK geraria 'buracos' na sequência caso houvesse empates (ex: 1, 2, 2, 4).",
        "A": "Correta. Garante sequência contínua (1, 2, 2, 3).",
        "C": "Incorreta. LAG é usado para acessar o valor de uma linha anterior (comparar hoje com ontem).",
        "B": "Incorreta. LEAD é usado para acessar o valor de uma linha futura."
      },
      "dicaDeOuro": "DENSE_RANK = Ranking sem saltos na numeração."
    }
  },
  {
    "id": "q_ds_044",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Banco de Dados",
    "topic": "Agregações e Janelas",
    "difficulty": "Médio",
    "statement": "Qual é a diferença fundamental entre as cláusulas GROUP BY e PARTITION BY (usada em Window Functions) no SQL?",
    "options": {
      "A": "O GROUP BY reduz o número de linhas retornadas (agrega), enquanto o PARTITION BY mantém o número original de linhas, adicionando o cálculo agregado a cada uma.",
      "B": "O PARTITION BY só pode ser usado com a função SUM(), enquanto o GROUP BY aceita qualquer agregação.",
      "C": "O GROUP BY é mais rápido e sempre deve ser preferido em relação ao PARTITION BY.",
      "D": "O PARTITION BY é exclusivo para bancos de dados NoSQL.",
      "E": "O GROUP BY ordena os dados automaticamente, e o PARTITION BY não."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "GROUP BY é para 'Resumo': você entra com 1000 linhas e sai com 10 (uma por grupo). PARTITION BY é para 'Comparação': você entra com 1000 linhas e sai com 1000 linhas, mas com colunas extras que mostram o total ou média do grupo daquela linha específica.",
      "puloDoGato": "Exemplo clássico: 'Qual é o salário deste funcionário comparado à média do setor dele?'. Só dá para fazer isso de forma elegante com PARTITION BY dentro de uma Window Function.",
      "cascasDeBanana": {
        "A": "Correta. Reflete a mudança (ou não) na granularidade dos dados retornados.",
        "B": "Incorreta. Ambas suportam todas as funções de agregação (AVG, SUM, COUNT, MIN, MAX).",
        "C": "Incorreta. Têm finalidades diferentes; o GROUP BY é para relatórios sumários, o PARTITION BY é para análises linha a linha.",
        "D": "Incorreta. É um recurso poderosíssimo de bancos SQL relacionais modernos.",
        "E": "Incorreta. Nenhuma delas garante ordenação final dos dados (isso é papel do ORDER BY)."
      },
      "dicaDeOuro": "GROUP BY esconde os detalhes. PARTITION BY mantém os detalhes e adiciona o contexto do grupo."
    }
  },
  {
    "id": "q_ds_050",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Banco de Dados",
    "topic": "Consultas Complexas (Subqueries)",
    "difficulty": "Médio",
    "statement": "Em SQL, quando utilizamos uma subquery correlacionada (correlated subquery), qual é a principal característica que a diferencia de uma subquery comum?",
    "options": {
      "A": "Subqueries correlacionadas só podem ser usadas na cláusula FROM.",
      "B": "A subquery correlacionada depende de valores da query externa para sua execução, sendo avaliada uma vez para cada linha processada pela query principal.",
      "C": "A subquery correlacionada é executada apenas uma vez antes da query principal.",
      "D": "Elas são sempre mais performáticas que um JOIN equivalente.",
      "E": "O uso de subqueries correlacionadas é obrigatório para realizar qualquer JOIN."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Subquery Comum: Ela roda, entrega um resultado (ex: uma lista de IDs) e a query principal segue a vida. Subquery Correlacionada: Ela é 'teimosa'. Para cada linha que a query de fora processa, ela roda de novo usando informações daquela linha específica. É como fazer um loop dentro de outro loop.",
      "puloDoGato": "Por que usar? Quando você precisa comparar um item com o seu próprio grupo (ex: 'buscar vendas acima da média do seu respectivo departamento'). Mas cuidado: em tabelas com milhões de linhas, isso pode ser um desastre de performance.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve a subquery independente. A correlacionada roda múltiplas vezes.",
        "B": "Correta. Característica técnica de dependência e repetição por linha.",
        "C": "Incorreta. Ela pode aparecer no SELECT, no WHERE (mais comum) e no HAVING.",
        "D": "Incorreta. Joins são a alternativa preferida e mais performática para quase todos os casos.",
        "E": "Incorreta. Quase sempre o JOIN é mais otimizado pelo banco do que a subquery correlacionada."
      },
      "dicaDeOuro": "Correlacionada = Query de dentro 'conversa' com a de fora em cada linha."
    }
  },
  {
    "id": "q_ds_053",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Banco de Dados",
    "topic": "NoSQL (Tipos de Banco)",
    "difficulty": "Fácil",
    "statement": "Bancos de dados NoSQL orientados a 'Documentos' (como o MongoDB) armazenam dados em formatos flexíveis e hierárquicos. Qual formato de intercâmbio de dados é o mais comum nesses sistemas?",
    "options": {
      "A": "XML",
      "B": "YAML",
      "C": "CSV",
      "D": "JSON / BSON",
      "E": "TXT"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Bancos de Documentos (como o MongoDB) são os queridinhos do desenvolvimento web porque falam a mesma língua que os navegadores: JSON. Isso permite guardar dados 'bagunçados' ou hierárquicos (como uma lista de endereços dentro de um usuário) de forma natural, sem precisar de tabelas de ligação.",
      "puloDoGato": "O MongoDB usa especificamente o BSON (Binary JSON), que permite guardar tipos de dados que o JSON comum não suporta bem, como datas reais e números binários, além de ser muito mais rápido para o computador ler.",
      "cascasDeBanana": {
        "C": "Incorreta. CSV é um formato plano (tabelar) e rígido, o oposto da filosofia NoSQL de documentos.",
        "D": "Correta. JSON é o formato lógico e BSON é o formato físico de armazenamento mais comum.",
        "A": "Incorreta. XML foi muito usado nos anos 2000, mas é considerado muito 'pesado' e verboso hoje em dia.",
        "B": "Incorreta. YAML é focado em legibilidade humana para configurações, não para bases de dados de alta performance.",
        "E": "Incorreta. Texto puro (TXT) não possui a estrutura de 'chave-valor' necessária para um banco de documentos."
      },
      "dicaDeOuro": "NoSQL de Documento? Pense em chaves { } e colchetes [ ], ou seja, JSON."
    }
  },
  {
    "id": "q_ds_060",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Banco de Dados",
    "topic": "CTEs (Common Table Expressions)",
    "difficulty": "Médio",
    "statement": "Para melhorar a legibilidade de consultas SQL complexas, podemos utilizar as CTEs (Common Table Expressions). Qual é a palavra-chave que inicia a definição de uma CTE?",
    "options": {
      "A": "WITH",
      "B": "DEFINE",
      "C": "START",
      "D": "CREATE VIEW",
      "E": "BEGIN"
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A CTE (Common Table Expression) é como criar um rascunho de uma tabela no topo da sua folha antes de começar a escrever a redação principal. Ela deixa o SQL muito mais legível, pois você pode dar nomes amigáveis para passos intermediários em vez de enfiar uma subquery dentro da outra.",
      "puloDoGato": "Começou com `WITH`? É uma CTE. Elas são excelentes para organizar lógicas complexas e, em alguns casos (como o WITH RECURSIVE), permitem que o SQL faça coisas que uma subquery comum não consegue, como navegar em árvores genealógicas ou organogramas.",
      "cascasDeBanana": {
        "E": "Incorreta. `BEGIN` é usado para iniciar blocos de transações ou scripts procedurais (PL/SQL).",
        "D": "Incorreta. `CREATE VIEW` cria um objeto permanente no banco, enquanto a CTE só existe durante a execução daquela query específica.",
        "A": "Correta. Cláusula padrão para definir expressões de tabela comuns.",
        "B": "Incorreta. `DEFINE` não é um comando padrão do SQL para criação de tabelas temporárias ou CTEs.",
        "C": "Incorreta. `START` não faz parte da sintaxe de definição de CTE."
      },
      "dicaDeOuro": "SQL muito complexo? Organize com WITH (CTE)."
    }
  },
  {
    "id": "q_ds_061",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Engenharia Civil",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Matemática",
    "topic": "Álgebra Linear (Multiplicação de Matrizes)",
    "difficulty": "Fácil",
    "statement": "Em redes neurais, operações matriciais são a base de cálculo. Para multiplicar uma matriz A de dimensão (m x n) por uma matriz B, resultando em uma matriz C de dimensão (m x p), qual deve ser obrigatoriamente a dimensão da matriz B?",
    "options": {
      "A": "(m x p)",
      "B": "(n x m)",
      "C": "(p x n)",
      "D": "(n x p)",
      "E": "(p x m)"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A regra de ouro da multiplicação de matrizes é: o número de COLUNAS da primeira matriz deve ser exatamente igual ao número de LINHAS da segunda. E o resultado herda as 'pontas': as linhas da primeira e as colunas da segunda.",
      "puloDoGato": "Visualmente: (m x n) * (n x p). Os 'n' do meio se cancelam, e sobra o (m x p). Isso é o que mais causa erro de dimensão ('Shape Mismatch') no PyTorch e TensorFlow.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso causaria um erro de dimensão, pois 'n' não é necessariamente igual a 'm'.",
        "B": "Incorreta. O resultado seria (m x m).",
        "D": "Correta. Atende perfeitamente à regra geométrica da multiplicação.",
        "C": "Incorreta. A ordem importa em matrizes; (m x n) * (p x n) falharia.",
        "E": "Incorreta. Totalmente incompatível."
      },
      "dicaDeOuro": "(Linha1 x Coluna1) * (Linha2 x Coluna2) só funciona se Coluna1 == Linha2."
    }
  },
  {
    "id": "q_ds_062",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Engenharia Civil",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Matemática",
    "topic": "Álgebra Linear (Autovalores e Autovetores)",
    "difficulty": "Difícil",
    "statement": "No contexto da Análise de Componentes Principais (PCA), a matriz de covariância dos dados é decomposta em autovalores (eigenvalues) e autovetores (eigenvectors). O que os autovetores com os maiores autovalores representam fisicamente nesse contexto?",
    "options": {
      "A": "As variáveis originais do dataset que não possuem correlação com o alvo (target).",
      "B": "Os pontos de dados que são considerados outliers na distribuição.",
      "C": "Os coeficientes exatos da reta de regressão linear múltipla.",
      "D": "As direções no espaço de atributos onde os dados apresentam a menor variância.",
      "E": "As direções ortogonais no espaço de atributos ao longo das quais os dados apresentam a maior variância."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Autovetor é uma seta (uma direção no espaço). O Autovalor é o tamanho dessa seta. No PCA, a maior seta aponta para onde os dados estão mais espalhados (maior variância).",
      "puloDoGato": "É por isso que escolhemos os primeiros 'K' Componentes Principais: eles são simplesmente os Autovetores que possuem os maiores Autovalores associados, ou seja, as direções mais 'ricas em informação'.",
      "cascasDeBanana": {
        "B": "Incorreta. Autovetores não são pontos de dados, são direções geométricas.",
        "D": "Incorreta. Isso seria representado pelos MENORES autovalores.",
        "C": "Incorreta. Regressão linear usa mínimos quadrados ou gradiente, não decomposição de covariância pura dessa forma.",
        "E": "Correta. Define com precisão o que são as Componentes Principais.",
        "A": "Incorreta. PCA é não-supervisionado, ele não olha para a variável alvo."
      },
      "dicaDeOuro": "Autovetor = Direção. Autovalor Gigante = Muita Variância nessa direção."
    }
  },
  {
    "id": "q_ds_063",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Engenharia Civil",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Matemática",
    "topic": "Cálculo (Derivadas)",
    "difficulty": "Médio",
    "statement": "Durante o treinamento de uma Rede Neural Profunda, o algoritmo de Backpropagation propaga o erro da saída de volta para as camadas iniciais para ajustar os pesos. Qual teorema do cálculo diferencial é a base matemática fundamental que permite calcular a contribuição de cada peso no erro final?",
    "options": {
      "A": "Série de Taylor",
      "B": "Regra da Cadeia (Chain Rule)",
      "C": "Teorema Fundamental do Cálculo",
      "D": "Teorema de Pitágoras",
      "E": "Regra de L'Hôpital"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Uma Rede Neural é uma função dentro de outra função (f(g(x))). Para saber como mudar o primeiro peso (lá no começo da rede) para diminuir o erro lá no final, a matemática usa a Regra da Cadeia para multiplicar as derivadas de cada camada no caminho de volta.",
      "puloDoGato": "Sem a Regra da Cadeia, o Deep Learning não existiria. Ela é a 'mágica' que distribui a culpa do erro entre os milhões de pesos da rede.",
      "cascasDeBanana": {
        "C": "Incorreta. Ele conecta derivadas com integrais, mas não é usado para calcular gradientes de funções compostas.",
        "E": "Incorreta. Usada para resolver limites indeterminados (0/0).",
        "D": "Incorreta. Teorema geométrico básico de triângulos retângulos.",
        "B": "Correta. Regra da Cadeia: dZ/dX = (dZ/dY) * (dY/dX).",
        "A": "Incorreta. Usada para aproximar funções complexas por polinômios."
      },
      "dicaDeOuro": "Backpropagation = Aplicação em massa da Regra da Cadeia."
    }
  },
  {
    "id": "q_ds_064",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Engenharia Civil",
      "Engenharia de Petróleo"
    ],
    "block": 3,
    "discipline": "Matemática",
    "topic": "Cálculo (Integrais)",
    "difficulty": "Fácil",
    "statement": "A métrica AUC (Area Under the Curve) da curva ROC é um número entre 0 e 1 amplamente utilizado para avaliar modelos de classificação. Matematicamente, a operação analítica de encontrar a área sob uma curva contínua em um gráfico é definida por qual conceito do cálculo?",
    "options": {
      "A": "Matriz Jacobiana",
      "B": "Série de Fourier",
      "C": "Integral Definida",
      "D": "Derivada Parcial",
      "E": "Limite Assintótico"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Derivada mede a inclinação (taxa de variação). Integral mede o acúmulo (a área debaixo da linha). A AUC (Área Sob a Curva) é, na sua essência geométrica, uma integral.",
      "puloDoGato": "Na prática de Data Science, o computador não resolve integrais analíticas no braço; ele aproxima a área somando trapézios ou retângulos sob os pontos da curva ROC (Regra do Trapézio).",
      "cascasDeBanana": {
        "D": "Incorreta. A derivada mede inclinação, não área.",
        "C": "Correta. É o conceito matemático de somatório infinitesimal de áreas.",
        "E": "Incorreta. Limites definem até onde uma função vai, mas não calculam área.",
        "A": "Incorreta. Jacobiano é uma matriz de derivadas de primeira ordem.",
        "B": "Incorreta. Transforma sinais do domínio do tempo para frequência."
      },
      "dicaDeOuro": "Cálculo de Área = Integral."
    }
  },
  {
    "id": "q_ds_065",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Ciência da Computação",
    "topic": "Notação Big-O",
    "difficulty": "Médio",
    "statement": "Na Ciência da Computação e em Engenharia de Dados, a notação Big-O descreve a complexidade de um algoritmo. Se você escrever um código em Python que compara cada elemento de uma lista de tamanho N com todos os outros elementos dessa mesma lista (usando dois loops 'for' aninhados), qual é a sua complexidade de tempo no pior caso?",
    "options": {
      "A": "O(N) - Linear",
      "B": "O(1) - Constante",
      "C": "O(log N) - Logarítmica",
      "D": "O(N²) - Quadrática",
      "E": "O(N log N) - Log-Linear"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Um loop vai rodar N vezes. O loop de dentro, para cada vez do primeiro, também roda N vezes. N vezes N = N ao quadrado. Isso significa que se a lista dobrar de tamanho, o tempo demora 4 vezes mais.",
      "puloDoGato": "Algoritmos O(N²) são o pesadelo do Big Data. Eles funcionam na sua máquina com 1.000 linhas, mas travam o servidor quando entram 1 milhão de linhas. É por isso que você não deve usar loops aninhados em DataFrames.",
      "cascasDeBanana": {
        "B": "Incorreta. O(1) seria acessar o primeiro elemento (tempo imediato e fixo).",
        "C": "Incorreta. O(log N) é clássico da Busca Binária (cortar o problema pela metade).",
        "A": "Incorreta. O(N) seria percorrer a lista apenas uma vez.",
        "E": "Incorreta. O(N log N) é o tempo de bons algoritmos de ordenação (Merge Sort).",
        "D": "Correta. Dois loops aninhados geram tempo proporcional ao quadrado de entradas."
      },
      "dicaDeOuro": "Um loop dentro do outro = O(N²)."
    }
  },
  {
    "id": "q_ds_075",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Git (Merge vs Rebase)",
    "difficulty": "Médio",
    "statement": "No controle de versão com Git, tanto o 'merge' quanto o 'rebase' integram mudanças de uma branch para outra. Qual é a principal diferença técnica e visual no histórico do repositório ao utilizar o 'rebase' em vez do 'merge' padrão?",
    "options": {
      "A": "O rebase reescreve o histórico, movendo os commits da branch atual para o topo da branch de destino, resultando em um histórico linear sem commits de junção (merge commits).",
      "B": "O rebase compacta todos os commits em um único commit antes de juntá-los.",
      "C": "O rebase envia automaticamente o código para o servidor remoto (push), enquanto o merge mantém local.",
      "D": "O rebase ignora conflitos de código, sobrescrevendo a branch de destino automaticamente.",
      "E": "O rebase apaga definitivamente todos os commits da branch de origem para economizar espaço."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Merge junta os caminhos e cria um novo 'nó' no gráfico (Commit de Merge), deixando as linhas do gráfico paralelas. O Rebase pega o seu trabalho e o coloca no final da fila do trabalho principal, criando uma linha reta e limpa no histórico.",
      "puloDoGato": "A regra de ouro de DevOps: Nunca faça Rebase em commits que já foram enviados (push) para um repositório público, porque o Rebase altera as IDs (hashes) dos commits antigos.",
      "cascasDeBanana": {
        "E": "Incorreta. O rebase não apaga os commits, ele recria os commits com novos Hashes.",
        "D": "Incorreta. Conflitos acontecem e travam o rebase exatamente como no merge.",
        "A": "Correta. Define o conceito de linearização da árvore do Git.",
        "C": "Incorreta. Nenhum dos dois faz push automático.",
        "B": "Incorreta. A compactação de múltiplos commits em um só é chamada de Squash, não rebase puro."
      },
      "dicaDeOuro": "Merge = Histórico com balões paralelos. Rebase = Histórico reto (linear)."
    }
  },
  {
    "id": "q_ds_076",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Git (Comandos Base)",
    "difficulty": "Fácil",
    "statement": "Durante o desenvolvimento colaborativo de um modelo preditivo, um Cientista de Dados deseja baixar os metadados de atualização de um repositório remoto sem mesclá-los automaticamente (sem alterar) o seu diretório de trabalho atual. Qual comando Git realiza essa operação?",
    "options": {
      "A": "git merge",
      "B": "git fetch",
      "C": "git stash",
      "D": "git pull",
      "E": "git clone"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O `git fetch` apenas vai lá no Github, olha o que tem de novo e anota no seu computador ('Ah, a branch main subiu 2 commits'). Ele NÃO mexe nos seus arquivos soltos na pasta. Ele só traz a informação.",
      "puloDoGato": "O comando `git pull` é, na verdade, um atalho perigoso. O `git pull` faz `git fetch` (baixa as novidades) E LOGO DEPOIS faz `git merge` (tenta misturar no seu código à força).",
      "cascasDeBanana": {
        "A": "Incorreta. O pull baixa e já tenta fazer a mesclagem automática, podendo causar conflitos instantâneos.",
        "B": "Correta. É a forma segura de atualizar a base de dados do repositório local sem impactar o working directory.",
        "C": "Incorreta. Clone faz a cópia inicial (download total) do repositório inteiro em uma pasta vazia.",
        "D": "Incorreta. Merge junta o código localmente, não acessa rede.",
        "E": "Incorreta. Stash 'esconde' o trabalho não commitado em uma gaveta temporária."
      },
      "dicaDeOuro": "Baixar sem tocar nos arquivos? git fetch."
    }
  },
  {
    "id": "q_ds_077",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Docker (Conceitos Core)",
    "difficulty": "Fácil",
    "statement": "No ecossistema Docker, muito utilizado para garantir que códigos rodem da mesma forma na máquina do desenvolvedor e no servidor (MLOps), qual é a analogia correta com a Programação Orientada a Objetos para descrever os conceitos de Imagem e Container?",
    "options": {
      "A": "A Imagem é a Variável e o Container é a Função.",
      "B": "A Imagem é o Banco de Dados e o Container é a Interface Web.",
      "C": "A Imagem é a Memória RAM e o Container é o Disco Rígido.",
      "D": "A Imagem é a Classe (molde estático) e o Container é a Instância (execução viva).",
      "E": "A Imagem é a Instância em execução e o Container é o Molde estático."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A Imagem Docker (Docker Image) é um arquivo zipado que você baixa da internet (tipo o instalador de um jogo). Ela não faz nada sozinha, é inerte. Quando você roda o comando `docker run`, você 'dá vida' à imagem, e ela vira um Container rodando.",
      "puloDoGato": "Você pode ter 1 única Imagem (Classe) e rodar 50 Containers (Objetos) ao mesmo tempo a partir dela.",
      "cascasDeBanana": {
        "A": "Incorreta. Não existe relação com variáveis locais.",
        "E": "Incorreta. Inverteu os conceitos propositalmente para confundir.",
        "D": "Correta. É a analogia oficial de ensino da Docker Inc.",
        "B": "Incorreta. Você pode ter imagens de bancos de dados ou de web, o conceito não os prende a camadas lógicas.",
        "C": "Incorreta. Relaciona com hardware, e os containers abstraem processos do Linux, não peças físicas de forma direta."
      },
      "dicaDeOuro": "Imagem = Receita de Bolo. Container = Bolo assado e pronto para comer."
    }
  },
  {
    "id": "q_ds_078",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Docker (Dockerfile)",
    "difficulty": "Médio",
    "statement": "Em um arquivo 'Dockerfile' utilizado para empacotar uma aplicação Python (como uma API Flask servindo um modelo preditivo), qual instrução é comumente usada no final do arquivo para especificar o comando padrão que o container executará assim que for iniciado?",
    "options": {
      "A": "EXPOSE",
      "B": "COPY",
      "C": "FROM",
      "D": "RUN",
      "E": "CMD"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O `RUN` é executado DURANTE a criação da imagem (ex: pip install pandas). O `CMD` (ou ENTRYPOINT) só acontece DEPOIS, no momento em que alguém digita `docker run` no terminal (ex: python app.py).",
      "puloDoGato": "O CMD é o ponto de partida do container. Sem ele, o container liga e, como não tem nada para fazer, desliga na mesma hora.",
      "cascasDeBanana": {
        "C": "Incorreta. FROM define o sistema operacional base (ex: FROM python:3.9).",
        "A": "Incorreta. EXPOSE apenas documenta qual porta de rede (ex: 5000) a aplicação usa.",
        "B": "Incorreta. COPY transfere arquivos da máquina local para dentro da imagem.",
        "E": "Correta. CMD especifica o processo primário que manterá o container vivo.",
        "D": "Incorreta. RUN é usado para construir a imagem (baixar pacotes, criar pastas)."
      },
      "dicaDeOuro": "Ação na criação da imagem? RUN. Ação na hora de ligar o container? CMD."
    }
  },
  {
    "id": "q_ds_085",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Arquitetura REST (Protocolo HTTP)",
    "difficulty": "Fácil",
    "statement": "Ao expor um modelo de Machine Learning como um serviço web, a arquitetura REST (Representational State Transfer) costuma ser o padrão. Qual método do protocolo HTTP deve ser utilizado semanticamente em uma API para ENVIAR um payload complexo (como uma imagem ou JSON grande) ao servidor a fim de obter uma predição em resposta?",
    "options": {
      "A": "PUT",
      "B": "POST",
      "C": "PATCH",
      "D": "GET",
      "E": "DELETE"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O GET é feito para pedir coisas e os parâmetros viajam grudados na URL. Você não consegue colocar uma foto de 5 Megabytes pendurada em uma URL. O POST foi desenhado para enviar grandes pacotes de dados escondidos no corpo (Body) da requisição.",
      "puloDoGato": "É por isso que 99% das APIs de Machine Learning modernas criadas com FastAPI ou Flask usam rotas como `@app.post('/predict')`.",
      "cascasDeBanana": {
        "D": "Incorreta. GET não deve ter 'body' (corpo) de mensagem, servindo apenas para leitura de informações simples.",
        "A": "Incorreta. PUT é semanticamente usado para atualizar completamente um registro existente em um banco.",
        "C": "Incorreta. PATCH atualiza parcialmente um registro.",
        "E": "Incorreta. DELETE remove recursos do servidor.",
        "B": "Correta. POST é o método padrão para submissão de dados pesados e criação/processamento de informações."
      },
      "dicaDeOuro": "Enviar dados (JSON/Imagem) para prever? HTTP POST."
    }
  },
  {
    "id": "q_ds_087",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Decorators (Padrões de Projeto)",
    "difficulty": "Fácil",
    "statement": "Bibliotecas web em Python como o FastAPI e Flask, muito usadas para servir modelos de ML via API, utilizam intensamente o símbolo '@' sobre as funções (como em `@app.get('/')`). Qual é o nome técnico deste recurso da linguagem Python que permite estender e modificar o comportamento de uma função sem alterar seu código interno?",
    "options": {
      "A": "Expressão Lambda (Lambda Function)",
      "B": "Decorador (Decorator)",
      "C": "Classe Abstrata (Abstract Class)",
      "D": "Gerenciador de Contexto (Context Manager)",
      "E": "Gerador (Generator)"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Um Decorator é como um casaco mágico. A sua função Python é você no frio. Quando você veste o casaco (o @nome_do_decorador acima do 'def'), você ganha poderes novos sem precisar modificar seus ossos. No caso de `@app.get`, o casaco pega sua função normal e a transforma em uma rota de internet.",
      "puloDoGato": "O Decorator implementa o padrão de projeto 'Wrapper' (embrulho). Muito cobrado em provas que focam no ecossistema Python profissional para MLOps.",
      "cascasDeBanana": {
        "E": "Incorreta. Geradores (yield) são usados para lidar com fluxos contínuos de dados sem encher a RAM.",
        "C": "Incorreta. Classes abstratas definem moldes para orientação a objetos.",
        "B": "Correta. Modificadores de alto nível para funções ou classes.",
        "D": "Incorreta. Gerenciadores de contexto usam a palavra 'with' para gerir recursos.",
        "A": "Incorreta. Lambdas são funções pequenas e anônimas em uma única linha."
      },
      "dicaDeOuro": "Símbolo @ antes do 'def'? É um Decorador."
    }
  },
  {
    "id": "q_ds_088",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Gerenciadores de Contexto (With)",
    "difficulty": "Médio",
    "statement": "Ao ler arquivos CSV grandes ou ao abrir conexões com bancos de dados, é considerada uma excelente prática no Python utilizar a declaração `with` (ex: `with open('dados.csv') as f:`). Qual é a principal vantagem técnica estrutural desse uso, conhecido como Gerenciador de Contexto?",
    "options": {
      "A": "Criptografar o tráfego dos dados durante a leitura para a memória RAM.",
      "B": "Acelerar a velocidade de leitura do disco rígido usando multi-threading automático.",
      "C": "Converter automaticamente arquivos de texto em DataFrames do Pandas.",
      "D": "Permitir que múltiplos usuários editem o mesmo arquivo CSV simultaneamente sem problemas de conflito.",
      "E": "Garantir que o recurso (ex: arquivo, conexão de rede) seja fechado e liberado automaticamente após o bloco, mesmo que o código lance uma exceção/erro."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se você abrir um arquivo no Python com `f = open()` e der um erro no meio do código, o comando `f.close()` nunca será rodado. O arquivo vai ficar travado pelo Windows (memory leak). O `with` é uma garantia de ferro: não importa se der tela azul no seu código, ele vai limpar e fechar a conexão de banco/arquivo ao final do bloco.",
      "puloDoGato": "Esses vazamentos de conexão (Memory Leaks) derrubam servidores de Machine Learning na vida real. Em provas que pedem 'Clean Code' Python, o `with` é obrigatório.",
      "cascasDeBanana": {
        "B": "Incorreta. Ele não afeta a velocidade do hardware ou processamento.",
        "E": "Correta. Garante a execução do protocolo de limpeza `__exit__`.",
        "C": "Incorreta. Quem faz a conversão é o `pd.read_csv()`.",
        "D": "Incorreta. Ele não trata concorrência de I/O em nível de sistema de arquivos.",
        "A": "Incorreta. Ele não realiza criptografia."
      },
      "dicaDeOuro": "Abrir arquivo e não travar o SO? Use 'with' (Gerenciador de Contexto)."
    }
  },
  {
    "id": "q_ds_089",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Testes Unitários",
    "difficulty": "Fácil",
    "statement": "Testes de software são fundamentais na construção de pipelines de Machine Learning que não quebram em produção. Qual é o objetivo principal da criação de Testes Unitários (Unit Tests) usando bibliotecas como Pytest?",
    "options": {
      "A": "Isolar e validar rigorosamente o comportamento de partes muito pequenas do código (como uma única função de tratamento de strings), garantindo precisão antes da integração sistêmica.",
      "B": "Substituir o teste manual por relatórios automatizados gerados em PDF.",
      "C": "Validar se a interface gráfica da aplicação web foi carregada com sucesso no navegador.",
      "D": "Conectar o modelo ao banco de dados e verificar o fluxo completo de ponta a ponta.",
      "E": "Testar a carga máxima de usuários que o servidor da aplicação consegue suportar antes de cair."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Uma ponte tem cabos de aço. O Teste Unitário é você no laboratório puxando apenas UM cabo para ver se ele aguenta as 10 toneladas que o fabricante prometeu. Você testa a menor 'unidade' possível. Você não precisa construir a ponte inteira para ver se o cabo rompe.",
      "puloDoGato": "Exemplo Clássico de ML: Ter um teste unitário que checa apenas se a sua função `limpar_cpf(texto)` consegue lidar com o valor 'None' (nulo) sem quebrar a pipeline inteira.",
      "cascasDeBanana": {
        "C": "Incorreta. Testes de interface gráfica são os testes de 'UI' ou 'End-to-End'.",
        "D": "Incorreta. Testes que conectam em bancos reais e testam o fluxo completo são chamados de Testes de Integração ou End-to-End.",
        "A": "Correta. Isolar funções pequenas, muitas vezes usando 'Mocks' (dados falsos), para focar na lógica interna.",
        "E": "Incorreta. O nome disso é Teste de Carga ou Estresse (Load Testing).",
        "B": "Incorreta. A finalidade do teste não é a estética do relatório gerado."
      },
      "dicaDeOuro": "Teste Unitário = Micro teste de laboratório isolado."
    }
  },
  {
    "id": "q_ds_090",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "SOLID (Single Responsibility Principle)",
    "difficulty": "Médio",
    "statement": "O acrônimo SOLID representa cinco princípios da programação orientada a objetos voltados ao Clean Code. O princípio 'S', conhecido como Single Responsibility Principle (Princípio da Responsabilidade Única), determina que:",
    "options": {
      "A": "Um modelo de Machine Learning deve realizar apenas uma única previsão durante toda a sua existência.",
      "B": "Cada desenvolvedor deve ser responsável por apenas um módulo de código dentro da empresa.",
      "C": "Um objeto no código deve herdar funcionalidades de apenas uma única superclasse mãe.",
      "D": "Uma classe, módulo ou função deve ter apenas um motivo para mudar, focando em realizar bem apenas uma tarefa específica.",
      "E": "Sistemas distribuídos devem ter um único ponto central de falha e de gestão."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você tem uma função no seu script de Data Science que abre um arquivo CSV, limpa valores nulos, treina uma Regressão Linear, plota o gráfico e manda um e-mail com o resultado... isso é um monstro. O 'S' do SOLID prega o 'faça apenas UMA coisa'.",
      "puloDoGato": "Cientistas de dados que quebram o código sujo em funções menores e de responsabilidade única conseguem testar o código mais fácil (lembra do Pytest?) e reutilizá-lo em outros projetos.",
      "cascasDeBanana": {
        "B": "Incorreta. O SOLID fala sobre arquitetura de código, não de RH corporativo.",
        "A": "Incorreta. Totalmente sem sentido prático para ciclo de vida de modelos.",
        "D": "Correta. Define o escopo limitado e a coesão de um componente de software.",
        "C": "Incorreta. Isso se refere às limitações de Herança Múltipla, e não ao princípio SRP.",
        "E": "Incorreta. Ponto único de falha é o pior erro arquitetural de DevOps."
      },
      "dicaDeOuro": "Responsabilidade Única = Código canivete suíço é ruim. Use facas específicas."
    }
  },
  {
    "id": "q_ds_136",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "SQL Avançado - Window Functions",
    "difficulty": "Médio",
    "statement": "Qual é a principal diferença entre as funções de ranking 'RANK()' e 'DENSE_RANK()' no SQL ao lidar com valores empatados?",
    "options": {
      "A": "Ambas funcionam exatamente da mesma forma, a mudança é apenas estética.",
      "B": "RANK() ignora os empates e sorteia quem fica na frente.",
      "C": "DENSE_RANK() só funciona em bancos NoSQL.",
      "D": "DENSE_RANK() arredonda os valores para o inteiro mais próximo.",
      "E": "RANK() pula números na sequência após um empate, enquanto DENSE_RANK() mantém a sequência contínua sem pular números."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine uma corrida com dois segundos colocados. RANK: 1, 2, 2, 4 (ele pulou o 3). DENSE_RANK: 1, 2, 2, 3 (ele continua 'denso', sem buracos).",
      "puloDoGato": "Se você precisa de uma lista contínua de 'medalhas' (ouro, prata, bronze), use DENSE_RANK.",
      "cascasDeBanana": {
        "E": "Correta. Define o comportamento de lacunas (gaps) na sequência.",
        "C": "Incorreta. São funções padrão do SQL ANSI presentes em bancos relacionais.",
        "B": "Incorreta. O critério de desempate deve ser definido no ORDER BY ou o resultado será consistente com o valor.",
        "D": "Incorreta. Não tem relação com arredondamento numérico.",
        "A": "Incorreta. A diferença no resultado final é crucial para relatórios de ranking."
      },
      "dicaDeOuro": "DENSE_RANK = Sem buracos na sequência."
    }
  },
  {
    "id": "q_ds_137",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "NoSQL - Teorema CAP",
    "difficulty": "Difícil",
    "statement": "O Teorema CAP define as limitações de sistemas distribuídos (NoSQL). De acordo com esse teorema, quais são os três pilares que NÃO podem ser garantidos simultaneamente em sua totalidade?",
    "options": {
      "A": "Capacidade, Armazenamento e Potência.",
      "B": "Conectividade, Automação e Processamento.",
      "C": "Criptografia, Autenticação e Privacidade.",
      "D": "Consistência, Disponibilidade e Tolerância a Partição.",
      "E": "Custo, Agilidade e Performance."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Teorema CAP diz que você só pode escolher 2 desses 3. Se a internet cai entre seus servidores (Partição), você tem que decidir: ou você continua aceitando dados (Disponibilidade) mas arrisca eles ficarem diferentes entre os servidores, ou você trava tudo para garantir que os dados sejam iguais (Consistência) mas o sistema fica fora do ar.",
      "puloDoGato": "Bancos SQL tradicionais focam em CA (Consistência e Disponibilidade). Bancos como Cassandra focam em AP (Disponibilidade e Tolerância a Partição).",
      "cascasDeBanana": {
        "E": "Incorreta. Esses são objetivos de negócio genéricos.",
        "D": "Correta. Consistency, Availability, Partition Tolerance.",
        "B": "Incorreta. Nomenclatura inventada.",
        "A": "Incorreta. Termos de hardware.",
        "C": "Incorreta. Termos de segurança."
      },
      "dicaDeOuro": "Teorema CAP = Escolha apenas 2 (Consistência, Disponibilidade ou Partição)."
    }
  },
  {
    "id": "q_ds_140",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "SOLID - Open/Closed Principle",
    "difficulty": "Médio",
    "statement": "No padrão de projeto SOLID, o princípio 'O' (Open/Closed Principle) afirma que as entidades de software (classes, módulos, funções) devem estar:",
    "options": {
      "A": "Abertas para modificação e fechadas para extensão.",
      "B": "Totalmente abertas para qualquer tipo de alteração em tempo real.",
      "C": "Abertas apenas para leitura em bancos de dados relacionais.",
      "D": "Abertas para extensão, mas fechadas para modificação.",
      "E": "Fechadas para o público externo por motivos de segurança."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você criou uma função que calcula o frete de caminhão e agora precisa calcular o de navio, você não deve sair mexendo no código velho (correndo o risco de estragar o que já funciona). Você deve ser capaz de 'estender' o código (ex: criar uma nova classe de Navio) sem precisar 'modificar' o coração do sistema original.",
      "puloDoGato": "Isso é feito usando interfaces ou classes abstratas (em Python, o módulo `abc`).",
      "cascasDeBanana": {
        "A": "Incorreta. É o contrário (anti-padrão).",
        "D": "Correta. Permite evolução sem quebra de código legado.",
        "B": "Incorreta. Isso gera um código instável e difícil de manter.",
        "E": "Incorreta. Confusão com o conceito de encapsulamento.",
        "C": "Incorreta. Termo técnico de banco de dados, sem relação com SOLID."
      },
      "dicaDeOuro": "Open/Closed = Adicione funções novas, não mude as velhas."
    }
  },
  {
    "id": "q_ds_142",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "SQL - Common Table Expressions (CTE)",
    "difficulty": "Fácil",
    "statement": "Para que serve a cláusula 'WITH' (CTEs - Common Table Expressions) em uma consulta SQL complexa?",
    "options": {
      "A": "Para criar tabelas temporárias nomeadas que tornam a leitura do código muito mais organizada e legível, evitando o uso excessivo de subqueries aninhadas.",
      "B": "Para definir a senha de acesso ao banco de dados.",
      "C": "Para acelerar a internet do servidor de banco de dados.",
      "D": "Para unir duas tabelas sem usar o comando JOIN.",
      "E": "Para apagar dados permanentemente de uma tabela."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Uma query com 5 subconsultas uma dentro da outra parece um 'Inception' e ninguém entende nada. Com a CTE, você define: 'WITH vendas_mensais AS (...) SELECT * FROM vendas_mensais'. Fica limpo, elegante e fácil de debugar.",
      "puloDoGato": "As CTEs também podem ser recursivas (útil para navegar em organogramas ou hierarquias de peças), algo que subqueries normais não fazem bem.",
      "cascasDeBanana": {
        "E": "Incorreta. CTEs são apenas para consulta (SELECT), não alteram dados.",
        "A": "Correta. Melhoria drástica na manutenção e legibilidade do SQL.",
        "D": "Incorreta. Você ainda precisará de JOINs se quiser relacionar as CTEs.",
        "B": "Incorreta. Credenciais não ficam no corpo da query SQL.",
        "C": "Incorreta. CTEs não afetam a infraestrutura de rede."
      },
      "dicaDeOuro": "SQL bagunçado? Use CTE (WITH) para organizar."
    }
  },
  {
    "id": "q_ds_146",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Tipos Mutáveis vs Imutáveis",
    "difficulty": "Médio",
    "statement": "Em Python, entender a diferença entre objetos mutáveis e imutáveis é crucial. Qual das seguintes estruturas de dados é IMUTÁVEL (não permite alteração de seus elementos após a criação)?",
    "options": {
      "A": "Set (Conjunto).",
      "B": "List (Lista).",
      "C": "Tuple (Tupla).",
      "D": "Dictionary (Dicionário).",
      "E": "DataFrame do Pandas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Uma Tupla `t = (1, 2, 3)` é como um contrato assinado: você não pode mudar um valor lá dentro. Uma Lista `l = [1, 2, 3]` é um rascunho: você apaga, adiciona e muda à vontade. Usamos tuplas para garantir que dados importantes não sejam alterados por erro em outras partes do código.",
      "puloDoGato": "Strings em Python também são imutáveis! Se você 'muda' uma letra de uma string, o Python na verdade cria uma string novinha no fundo.",
      "cascasDeBanana": {
        "A": "Incorreta. Listas são mutáveis (`append`, `pop`).",
        "B": "Incorreta. Dicionários permitem adicionar e mudar chaves.",
        "C": "Correta. Tuplas são constantes após a definição.",
        "D": "Incorreta. Conjuntos podem ser alterados (`add`, `remove`).",
        "E": "Incorreta. DataFrames são altamente mutáveis e editáveis."
      },
      "dicaDeOuro": "Tupla = Imutável (Usa parênteses `()`). Lista = Mutável (Usa colchetes `[]`)."
    }
  },
  {
    "id": "q_ds_147",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Engenharia de Software",
    "topic": "Git - Rebase vs Merge",
    "difficulty": "Difícil",
    "statement": "Ao trabalhar em equipe usando Git, qual é o efeito principal de realizar um 'git rebase' em comparação a um 'git merge'?",
    "options": {
      "A": "O merge é apenas para código Python e o rebase é para código Java.",
      "B": "O merge é obrigatório antes de qualquer commit local.",
      "C": "O merge apaga o histórico, enquanto o rebase o duplica.",
      "D": "O rebase reescreve o histórico de commits para criar uma linha do tempo linear e limpa, enquanto o merge cria um novo commit de união preservando as ramificações originais.",
      "E": "O rebase deleta a conta do usuário no GitHub."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Merge é como duas estradas que se juntam: você vê claramente de onde cada uma veio. Rebase é como se você pegasse a sua estrada, levantasse ela e colocasse no final da estrada principal, fingindo que você sempre esteve trabalhando nela. O Rebase deixa o log do Git muito mais bonito, mas é perigoso se você já enviou o código para outras pessoas (push).",
      "puloDoGato": "Regra de ouro: Nunca faça rebase em branches públicas (como a `main`). Use apenas na sua branch local para limpar a bagunça antes de enviar.",
      "cascasDeBanana": {
        "C": "Incorreta. Nenhum deles apaga o histórico de forma destrutiva sem aviso.",
        "D": "Correta. Linearidade (rebase) vs Preservação de topologia (merge).",
        "A": "Incorreta. Git é agnóstico à linguagem de programação.",
        "E": "Incorreta. Piada de segurança.",
        "B": "Incorreta. Merge só ocorre quando há integração de branches diferentes."
      },
      "dicaDeOuro": "Rebase = Histórico limpo e linear. Merge = Histórico real com ramificações."
    }
  },
  {
    "id": "q_ds_149",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "NoSQL - Bancos de Grafos",
    "difficulty": "Médio",
    "statement": "Para qual tarefa de Ciência de Dados um banco de dados de Grafos (como o Neo4j) é o mais indicado?",
    "options": {
      "A": "Armazenar trilhões de logs de sensores de temperatura (Time Series).",
      "B": "Executar cálculos matemáticos de álgebra linear pesada.",
      "C": "Guardar imagens para treinamento de CNNs.",
      "D": "Analisar relacionamentos complexos e conexões entre entidades, como redes de influência entre empresas fornecedoras e detecção de lavagem de dinheiro.",
      "E": "Substituir o cache de memória RAM do servidor."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "No SQL, para saber quem é amigo do amigo do amigo, você precisa fazer 10 JOINs e o banco trava. No Grafo, o relacionamento é o dado principal. Você simplesmente 'anda' pelas linhas (arestas) que ligam as bolinhas (nós). É perfeito para descobrir quem é o 'chefe' oculto em uma rede de corrupção ou fraude.",
      "puloDoGato": "O Facebook e o LinkedIn são grandes grafos. Na Petrobras, pode ser usado para entender a rede logística de distribuição.",
      "cascasDeBanana": {
        "A": "Incorreta. Para isso usamos Bancos de Séries Temporais (InfluxDB) ou Colunares (Cassandra).",
        "D": "Correta. Foco em conexões e topologia de rede.",
        "C": "Incorreta. Imagens ficam em Object Storages (S3).",
        "B": "Incorreta. Isso é tarefa para bibliotecas como NumPy/PyTorch.",
        "E": "Incorreta. Isso é tarefa do Redis/Memcached."
      },
      "dicaDeOuro": "Grafos = Foco nos relacionamentos e conexões."
    }
  },
  {
    "id": "q_engsw_001",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Modelos de ciclo de vida de software",
    "difficulty": "Médio",
    "statement": "No contexto da engenharia de software, o modelo de ciclo de vida que se caracteriza por ser uma abordagem evolutiva, na qual o software é desenvolvido em uma série de versões rápidas que são refinadas a cada ciclo com base no feedback do usuário, é o modelo:",
    "options": {
      "A": "Espiral (Spiral).",
      "B": "Prototipação descartável.",
      "C": "V-Model.",
      "D": "Cascata (Waterfall).",
      "E": "Incremental e Iterativo."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O modelo Iterativo e Incremental foca em entregar partes funcionais do software em ciclos (iterações). Cada ciclo adiciona novas funcionalidades (incrementos) e refina as anteriores, sendo ideal para requisitos que não estão totalmente claros no início.",
      "puloDoGato": "Falou em 'ciclos', 'refinamento' e 'feedback constante'? Fuja do Cascata! O foco aqui é a evolução gradual do produto.",
      "cascasDeBanana": {
        "D": "Incorreta. O Cascata é linear e sequencial; não prevê retornos ou refinamentos constantes.",
        "A": "Incorreta. O modelo Espiral foca primariamente em Análise de Riscos, embora seja iterativo.",
        "E": "Correta. Define perfeitamente a abordagem de ciclos de refinamento.",
        "B": "Incorreta. A prototipação descartável visa validar requisitos, mas não é o ciclo de vida de desenvolvimento do produto final em si.",
        "C": "Incorreta. O V-Model é uma variação do Cascata com foco em testes pareados com as fases de design."
      },
      "dicaDeOuro": "Agilidade = Iteração (repetição) + Incremento (adição)!"
    }
  },
  {
    "id": "q_engsw_004",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Desenvolvimento guiado por testes (TDD)",
    "difficulty": "Médio",
    "statement": "O ciclo de desenvolvimento conhecido como 'Red-Green-Refactor', pilar fundamental do TDD (Test Driven Development), consiste em:",
    "options": {
      "A": "Escrever o código, testar se ele funciona e depois documentar o erro.",
      "B": "Monitorar servidores em produção onde Red é queda do sistema e Green é sistema online.",
      "C": "Desenvolver toda a aplicação e, ao final, criar os testes de integração para validar o fluxo.",
      "D": "Criar um teste que falha (Red), escrever o código mínimo para o teste passar (Green) e melhorar o design do código (Refactor).",
      "E": "Escrever testes apenas para as partes do código que apresentam bugs conhecidos após o deploy."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O TDD inverte o processo tradicional. Você primeiro define o que o código deve fazer através de um teste. Como o código ainda não existe, o teste falha (Red). Depois você faz o mais simples possível para passar (Green) e, por fim, limpa a bagunça (Refactor).",
      "puloDoGato": "A palavra chave é 'Mínimo'. No passo Green, você não faz o código perfeito, você faz o código que faz o teste parar de gritar.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é o desenvolvimento comum (Test-Last).",
        "D": "Correta. Ciclo clássico de Kent Beck.",
        "B": "Incorreta. Confusão proposital com dashboards de monitoramento (SRE).",
        "C": "Incorreta. Isso é teste de regressão/finalização, não TDD.",
        "E": "Incorreta. Isso é 'bug fixing' com testes, não o design orientado a testes do TDD."
      },
      "dicaDeOuro": "TDD: Teste primeiro, código depois!"
    }
  },
  {
    "id": "q_engsw_010",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Notação BPMN",
    "difficulty": "Médio",
    "statement": "Na notação BPMN (Business Process Model and Notation), o elemento gráfico utilizado para representar pontos de decisão, onde o fluxo do processo pode seguir por caminhos alternativos com base em condições, é o:",
    "options": {
      "A": "Event (Evento - círculo).",
      "B": "Pool (Piscina - contêiner horizontal).",
      "C": "Task (Tarefa - retângulo).",
      "D": "Gateway (Portal - losango).",
      "E": "Sequence Flow (Seta contínua)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Gateways são os 'desvios' ou 'junções' de um processo. O mais comum é o Exclusivo (X), onde apenas um caminho pode ser seguido. Visualmente é sempre um losango.",
      "puloDoGato": "Cuidado com o nome. Em português costuma-se chamar de 'Portal' ou 'Desvio', mas o termo técnico da norma é Gateway.",
      "cascasDeBanana": {
        "C": "Incorreta. Tarefa representa o trabalho sendo feito.",
        "A": "Incorreta. Evento representa algo que acontece (início, fim, erro).",
        "D": "Correta. Elemento de controle de fluxo e decisão.",
        "E": "Incorreta. Representa apenas a ordem de execução.",
        "B": "Incorreta. Representa o participante do processo (ex: um departamento)."
      },
      "dicaDeOuro": "Losango no fluxograma? É decisão (Gateway)!"
    }
  },
  {
    "id": "q_engsw_011",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Desenvolvimento orientado por comportamento (BDD)",
    "difficulty": "Médio",
    "statement": "No Desenvolvimento Orientado por Comportamento (BDD), os cenários de teste são geralmente escritos em uma linguagem natural estruturada que utiliza as palavras-chave 'Dado' (Given), 'Quando' (When) e 'Então' (Then). Qual é o nome dessa sintaxe?",
    "options": {
      "A": "YAML.",
      "B": "JSON-LD.",
      "C": "Markdown.",
      "D": "Cucumber Script.",
      "E": "Gherkin."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O BDD foca no comportamento do sistema sob a ótica do negócio. A linguagem Gherkin permite que desenvolvedores, QAs e Stakeholders falem a mesma língua, descrevendo funcionalidades através de cenários de fácil leitura.",
      "puloDoGato": "Cucumber é a ferramenta mais famosa, mas Gherkin é o nome da linguagem (sintaxe) que define as regras do Given-When-Then.",
      "cascasDeBanana": {
        "C": "Incorreta. Markdown é para documentação de texto formatado.",
        "A": "Incorreta. YAML é um formato de serialização de dados.",
        "E": "Correta. É a sintaxe padrão usada por ferramentas como Cucumber e SpecFlow.",
        "B": "Incorreta. JSON-LD é para dados vinculados na web.",
        "D": "Incorreta. Cucumber é a ferramenta, não o nome da linguagem em si."
      },
      "dicaDeOuro": "BDD + Given/When/Then = Gherkin!"
    }
  },
  {
    "id": "q_engsw_012",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Diagrama Entidade Relacionamento (ER)",
    "difficulty": "Médio",
    "statement": "Em um Diagrama Entidade-Relacionamento (DER), a restrição que define que um registro em uma tabela 'A' pode estar relacionado a zero, um ou vários registros em uma tabela 'B' é chamada de:",
    "options": {
      "A": "Cardinalidade.",
      "B": "Encapsulamento.",
      "C": "Normalização.",
      "D": "Herança.",
      "E": "Polimorfismo."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A cardinalidade expressa o número de ocorrências de uma entidade que podem estar associadas a ocorrências de outra entidade através de um relacionamento (1:1, 1:N, N:N).",
      "puloDoGato": "A Cesgranrio costuma cobrar a diferença entre cardinalidade máxima (1 ou N) e opcionalidade (mínima 0 ou 1).",
      "cascasDeBanana": {
        "D": "Incorreta. Herança é conceito de Orientação a Objetos.",
        "A": "Correta. Define a quantidade de associações permitidas.",
        "B": "Incorreta. Encapsulamento é proteção de dados em OO.",
        "C": "Incorreta. Normalização é o processo de organização para evitar redundância.",
        "E": "Incorreta. Polimorfismo é a capacidade de um objeto ser tratado de várias formas (OO)."
      },
      "dicaDeOuro": "Cardinalidade = Quantidade de pontas no relacionamento!"
    }
  },
  {
    "id": "q_engsw_031",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Processos e práticas de desenvolvimento de software (12-Factor)",
    "difficulty": "Difícil",
    "statement": "De acordo com a metodologia 'The Twelve-Factor App', os processos da aplicação devem ser executados como um ou mais processos 'Stateless'. Qual é o principal motivo para essa recomendação?",
    "options": {
      "A": "Obrigar o uso de bancos de dados relacionais em todos os projetos.",
      "B": "Aumentar a segurança ao impedir que o servidor saiba quem é o usuário.",
      "C": "Garantir que os dados do usuário sejam perdidos sempre que o servidor for reiniciado.",
      "D": "Permitir o escalonamento horizontal fácil da aplicação, permitindo que qualquer processo lide com qualquer requisição sem depender de estado local.",
      "E": "Reduzir o consumo de memória RAM ao não armazenar nenhuma variável no código."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "No 12-Factor, sua aplicação não deve ter 'memória local'. Tudo o que é persistente (sessões, arquivos, cache) deve ser movido para um serviço de apoio (Backing Service) como Redis ou PostgreSQL. Assim, você pode subir 10 ou 100 instâncias da sua app e o balanceador pode mandar o usuário para qualquer uma delas sem quebrar a experiência.",
      "puloDoGato": "Stateless = Escalabilidade Infinita. Se você guarda algo no 'C:\\temp' ou na variável 'session' da memória, você está criando um problema de afinidade de nó (Sticky Session), o que dificulta o Cloud Native.",
      "cascasDeBanana": {
        "C": "Incorreta. A perda de dados é uma consequência técnica que deve ser mitigada usando serviços externos, não o objetivo.",
        "D": "Correta. Facilita o escalonamento horizontal e a resiliência.",
        "E": "Incorreta. Variáveis de execução continuam existindo; o que não existe é estado persistente entre requisições no processo.",
        "B": "Incorreta. A segurança é tratada via tokens (JWT), não pela falta de estado.",
        "A": "Incorreta. A metodologia é agnóstica ao tipo de banco."
      },
      "dicaDeOuro": "12-Factor Stateless = App sem memória local. Use Redis para sessões!"
    }
  },
  {
    "id": "q_engsw_032",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Arquitetura de Software",
    "topic": "Arquitetura de software",
    "difficulty": "Difícil",
    "statement": "O Teorema CAP afirma que em um sistema distribuído é impossível garantir simultaneamente mais de duas das seguintes propriedades:",
    "options": {
      "A": "Conectividade, Armazenamento e Processamento.",
      "B": "Capacidade, Automação e Praticidade.",
      "C": "Custo, Agilidade e Performance.",
      "D": "Consistência, Disponibilidade e Tolerância a Partições.",
      "E": "Criptografia, Autenticação e Permissão."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O CAP (Consistency, Availability, Partition Tolerance) é a base dos sistemas distribuídos. Em uma rede que pode falhar (P), você tem que escolher entre: todos veem o mesmo dado na mesma hora (C) OU o sistema nunca para de responder (A).",
      "puloDoGato": "Na vida real, a rede SEMPRE pode falhar (P). Então, na prática, a escolha quase sempre é entre CP (ex: MongoDB) ou AP (ex: Cassandra/DynamoDB).",
      "cascasDeBanana": {
        "C": "Incorreta. Esses são os 'Trade-offs' de negócio, não o teorema CAP.",
        "D": "Correta. Pilares fundamentais de Eric Brewer.",
        "E": "Incorreta. São pilares de Segurança (CIA).",
        "A": "Incorreta. São componentes básicos de hardware/infra.",
        "B": "Incorreta. Termos genéricos sem relação com o teorema."
      },
      "dicaDeOuro": "CAP: C = Consistência, A = Availability (Disponibilidade), P = Partition Tolerance!"
    }
  },
  {
    "id": "q_engsw_035",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Arquitetura de Software",
    "topic": "Arquitetura de software",
    "difficulty": "Médio",
    "statement": "Em design de software, o antipadrão conhecido como 'God Object' (Objeto Deus) refere-se a:",
    "options": {
      "A": "Um objeto que é imortal e nunca é coletado pelo Garbage Collector.",
      "B": "Um padrão usado para garantir a segurança divina das senhas dos usuários.",
      "C": "Uma classe que não possui nenhum método, apenas atributos públicos.",
      "D": "Uma classe que faz muitas coisas, possui milhares de linhas de código e centraliza a inteligência de grande parte do sistema.",
      "E": "Um objeto que só pode ser instanciado via XML."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O God Object é o inimigo do princípio de Responsabilidade Única (SRP). É aquela classe que todo mundo mexe, que faz de tudo (calcula imposto, salva no banco, manda e-mail). Ela é difícil de testar, difícil de manter e qualquer mudança nela quebra o sistema inteiro.",
      "puloDoGato": "Para resolver, devemos aplicar a refatoração e quebrar essa classe gigante em classes menores, especialistas e coesas.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria um Memory Leak.",
        "D": "Correta. Centralização excessiva de responsabilidades.",
        "B": "Incorreta. Invenção sem base técnica.",
        "E": "Incorreta. Formato de serialização não define o padrão de design da classe.",
        "C": "Incorreta. Isso seria uma 'Anemic Domain Model' ou apenas um DTO."
      },
      "dicaDeOuro": "Classe com mais de 1000 linhas e 50 métodos? Provavelmente um God Object. Quebre-a!"
    }
  },
  {
    "id": "q_engsw_036",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Manutenção e refatoração de código",
    "difficulty": "Médio",
    "statement": "A técnica de refatoração 'Extract Method' (Extrair Método) consiste em:",
    "options": {
      "A": "Deletar métodos que não são mais utilizados no sistema para economizar espaço.",
      "B": "Transformar um método privado em público para facilitar o acesso de qualquer parte do sistema.",
      "C": "Mover um fragmento de código de um método longo para um novo método menor e com nome descritivo.",
      "D": "Extrair o código-fonte de um arquivo binário compilado.",
      "E": "Copiar um método de uma classe para outra para duplicar sua funcionalidade."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se você tem um método com 50 linhas e comentários dividindo 'fase 1', 'fase 2', você deve extrair essas fases para métodos próprios. Isso melhora a legibilidade e permite o reaproveitamento de código.",
      "puloDoGato": "O nome do novo método deve dizer O QUE ele faz, não COMO. Ex: `calcularIpi()` em vez de `multiplicarValorPorZeroPontoDoze()`.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é limpeza de 'Dead Code'.",
        "C": "Correta. Técnica básica de refatoração para aumentar a coesão.",
        "D": "Incorreta. Isso seria Engenharia Reversa ou Descompilação.",
        "E": "Incorreta. Isso geraria duplicação de código (DRY violation).",
        "B": "Incorreta. Isso afeta o encapsulamento, não é necessariamente uma refatoração de extração."
      },
      "dicaDeOuro": "Extract Method = Dividir para conquistar (e ler melhor)!"
    }
  },
  {
    "id": "q_engsw_045",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Gerenciamento de ciclo de vida de aplicações",
    "difficulty": "Difícil",
    "statement": "No contexto de otimização de performance, a técnica de 'Profiling' (Perfilamento) é utilizada para:",
    "options": {
      "A": "Criar o perfil dos usuários nas redes sociais da empresa.",
      "B": "Alterar a cor do tema da IDE do desenvolvedor.",
      "C": "Verificar se o código segue as regras de indentação do Google.",
      "D": "Analisar o comportamento dinâmico da aplicação em execução, identificando gargalos de CPU, vazamentos de memória e uso de recursos.",
      "E": "Gerar senhas aleatórias para o banco de dados."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Profiling é como um check-up médico da app. Ferramentas de Profiling (como VisualVM, dotTrace ou JProfiler) mostram quais métodos estão demorando mais e onde a memória está sendo 'sequestrada'. Sem isso, você estaria apenas chutando onde está o problema.",
      "puloDoGato": "Diferente de Logging (que diz o que aconteceu), o Profiling diz COMO os recursos da máquina foram consumidos durante o evento.",
      "cascasDeBanana": {
        "A": "Incorreta. Confusão com 'user profiling' de marketing.",
        "D": "Correta. Essencial para diagnóstico de performance de baixo nível.",
        "B": "Incorreta. Isso é customização de UI da ferramenta.",
        "C": "Incorreta. Isso é papel de um 'Linter'.",
        "E": "Incorreta. Invenção sem base técnica."
      },
      "dicaDeOuro": "Profiling = Raio-X da Performance (CPU e RAM)!"
    }
  },
  {
    "id": "q_engsw_049",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Diagrama Entidade Relacionamento (ER) e Normalização",
    "difficulty": "Difícil",
    "statement": "Para que uma tabela de banco de dados esteja na Segunda Forma Normal (2FN), ela deve obrigatoriamente já estar na 1FN e atender à seguinte condição:",
    "options": {
      "A": "Estar armazenada em um servidor NoSQL.",
      "B": "Possuir no máximo 10 colunas por tabela.",
      "C": "Ter todos os campos de texto criptografados.",
      "D": "Não possuir dependências parciais, ou seja, todos os atributos não-chave devem depender da chave primária inteira e não apenas de parte dela (em chaves compostas).",
      "E": "Não possuir chaves estrangeiras."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A 2FN foca em chaves compostas. Se sua chave é (ID_Pedido, ID_Produto) e você tem uma coluna 'Nome_Cliente', essa coluna depende só do ID_Pedido, não do produto. Isso é uma dependência parcial e deve ser removida para outra tabela.",
      "puloDoGato": "Dica de concurso: Se a tabela tem uma chave primária simples (só uma coluna), e ela já está na 1FN, ela automaticamente já está na 2FN.",
      "cascasDeBanana": {
        "E": "Incorreta. Chaves estrangeiras são essenciais para relacionamentos normalizados.",
        "D": "Correta. Regra clássica sobre dependência funcional total.",
        "B": "Incorreta. Normalização não impõe limite de quantidade de colunas.",
        "A": "Incorreta. NoSQL geralmente é desnormalizado por design.",
        "C": "Incorreta. Criptografia é segurança, não normalização."
      },
      "dicaDeOuro": "2FN = Sem dependência parcial de chave composta!"
    }
  },
  {
    "id": "q_engsw_050",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Software",
    "topic": "Processo interativo e incremental",
    "difficulty": "Médio",
    "statement": "Qual é a principal vantagem estratégica de um processo Incremental em relação a um processo Cascata tradicional?",
    "options": {
      "A": "Elimina a necessidade de realizar testes de software.",
      "B": "Permite que o software seja desenvolvido sem a necessidade de programadores experientes.",
      "C": "Permite a entrega antecipada de partes funcionais do sistema, gerando valor ao negócio e permitindo ajustes baseados no uso real.",
      "D": "O custo total do projeto é sempre menor e fixo desde o primeiro dia.",
      "E": "Garante que o escopo nunca mudará durante todo o desenvolvimento."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No Cascata, o cliente só vê o software no final de meses de trabalho. Se estiver errado, o prejuízo é enorme. No Incremental, ele recebe versões 'vivas' a cada poucas semanas. Isso reduz o risco e aumenta a satisfação.",
      "puloDoGato": "Valor Antecipado = ROI (Retorno sobre Investimento) mais rápido. O cliente já começa a usar o básico enquanto o resto é feito.",
      "cascasDeBanana": {
        "D": "Incorreta. O custo pode variar conforme o aprendizado do processo.",
        "C": "Correta. Entrega contínua de valor e redução de risco.",
        "A": "Incorreta. Pelo contrário, exige testes mais frequentes (regressão).",
        "E": "Incorreta. O processo incremental aceita e gerencia mudanças de escopo.",
        "B": "Incorreta. Requer equipe qualificada para lidar com iterações rápidas."
      },
      "dicaDeOuro": "Incremental = Entrega Valor Cedo e Frequentemente!"
    }
  },
  {
    "id": "q_engsw_b2_001",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK 6ª e 7ª Edição",
    "difficulty": "Médio",
    "statement": "No PMBOK 7ª Edição, houve uma mudança de paradigma em relação às edições anteriores. O guia passou a focar em:",
    "options": {
      "A": "Processos e entradas/saídas (Inputs/Outputs) rígidos.",
      "B": "Na eliminação completa de qualquer tipo de documentação.",
      "C": "Apenas em ferramentas de software para gestão de cronograma.",
      "D": "Princípios e Domínios de Desempenho, priorizando a entrega de valor.",
      "E": "No controle exclusivo do gerente de projetos sobre a equipe."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O PMBOK 7 foi uma revolução. Ele saiu daquele modelo 'receita de bolo' (Processos) e foi para um modelo baseado em 'Princípios' (como ser um administrador diligente) e 'Domínios de Desempenho' (como Stakeholders, Equipe, Entrega). O foco agora é RESULTADO e VALOR, não apenas seguir o processo.",
      "puloDoGato": "A Cesgranrio costuma cobrar essa transição. Enquanto a 6ª edição era baseada em 10 Áreas de Conhecimento, a 7ª é baseada em 8 Domínios de Desempenho.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve a 6ª edição e anteriores.",
        "D": "Correta. Reflete a modernização e alinhamento com o Ágil.",
        "C": "Incorreta. O PMBOK é agnóstico a ferramentas específicas.",
        "B": "Incorreta. Documentação continua sendo necessária, mas de forma 'just o suficiente'.",
        "E": "Incorreta. O foco atual é na liderança servil e colaboração."
      },
      "dicaDeOuro": "PMBOK 6 = Processos. PMBOK 7 = Princípios e Valor!"
    }
  },
  {
    "id": "q_engsw_b2_002",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Papéis e Responsabilidades",
    "difficulty": "Médio",
    "statement": "No framework Scrum, qual papel é responsável por maximizar o valor do produto resultante do trabalho do Time de Desenvolvimento e por gerenciar o Product Backlog?",
    "options": {
      "A": "Stakeholder.",
      "B": "Project Manager.",
      "C": "Developer.",
      "D": "Scrum Master.",
      "E": "Product Owner (PO)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Product Owner (PO) é a 'voz do cliente'. Ele decide o que deve ser feito e em qual ordem, garantindo que o time esteja sempre trabalhando no que gera mais valor para o negócio. Ele é o dono do Product Backlog.",
      "puloDoGato": "O Scrum Master não manda no Backlog! O SM cuida do PROCESSO e remove impedimentos. Quem manda no QUE fazer é o PO.",
      "cascasDeBanana": {
        "D": "Incorreta. O SM foca na saúde do framework e agilidade do time.",
        "E": "Correta. O PO é o único responsável pela gestão do Backlog.",
        "A": "Incorreta. Stakeholders influenciam, mas não gerenciam o backlog diretamente.",
        "B": "Incorreta. Não existe o papel formal de 'Project Manager' no Scrum core.",
        "C": "Incorreta. Desenvolvedores focam no 'COMO' e na entrega técnica."
      },
      "dicaDeOuro": "Valor e Backlog? Pensou PO!"
    }
  },
  {
    "id": "q_engsw_b2_003",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Kanban - WIP Limits",
    "difficulty": "Difícil",
    "statement": "No método Kanban, a prática de limitar o WIP (Work In Progress) tem como principal objetivo:",
    "options": {
      "A": "Impedir que novos funcionários entrem no projeto.",
      "B": "Obrigar a equipe a usar quadros físicos de madeira.",
      "C": "Expor gargalos no processo, reduzir o tempo de ciclo (Lead Time) e evitar a sobrecarga do sistema.",
      "D": "Garantir que todos os desenvolvedores estejam trabalhando em pelo menos 5 tarefas ao mesmo tempo.",
      "E": "Reduzir o salário de quem termina as tarefas muito rápido."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Limitar o WIP significa dizer: 'Só podemos ter 3 tarefas sendo feitas simultaneamente'. Se tentarmos colocar a 4ª, o sistema trava. Isso nos força a TERMINAR o que começamos antes de puxar coisa nova. Isso aumenta a vazão (Throughput) e reduz o tempo que uma tarefa fica 'mofando' no quadro.",
      "puloDoGato": "Pare de começar, comece a terminar! WIP limitado ajuda a manter o foco e revela onde o trabalho está 'entalado'.",
      "cascasDeBanana": {
        "D": "Incorreta. Multitarefa reduz a eficiência; o Kanban quer o oposto.",
        "C": "Correta. Foco no fluxo e na identificação de impedimentos.",
        "A": "Incorreta. Sem relação com RH.",
        "B": "Incorreta. Kanban pode ser digital (Jira, Trello) ou físico.",
        "E": "Incorreta. Absurdo administrativo."
      },
      "dicaDeOuro": "WIP Limit = Foco no Fluxo. Menos coisa começando, mais coisa terminando!"
    }
  },
  {
    "id": "q_engsw_b2_008",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Segurança da Informação",
    "topic": "OWASP Top 10 - Injection",
    "difficulty": "Médio",
    "statement": "A vulnerabilidade de 'SQL Injection', uma das mais clássicas e perigosas listadas pelo OWASP, ocorre quando:",
    "options": {
      "A": "Dados fornecidos pelo usuário são inseridos em uma consulta SQL sem a devida sanitização ou parametrização, permitindo que um atacante execute comandos arbitrários.",
      "B": "O CSS do site é roubado por um concorrente.",
      "C": "O desenvolvedor esquece de pagar a licença do SQL Server.",
      "D": "O usuário digita uma senha muito curta.",
      "E": "O servidor de banco de dados fica sem memória RAM."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "SQL Injection é quando o hacker 'fala' diretamente com seu banco de dados através de um campo de texto (ex: Login). Se você não limpa o que ele digita, ele pode mandar um `' OR 1=1 --` e entrar no sistema sem senha ou até deletar tabelas inteiras.",
      "puloDoGato": "A solução número 1 é usar 'Prepared Statements' (Parâmetros). Nunca concatene strings para montar SQL!",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria falha de infra ou DoS, não injeção.",
        "A": "Correta. Falha de validação de input que compromete o backend.",
        "C": "Incorreta. Problema administrativo/financeiro.",
        "B": "Incorreta. CSS não executa comandos no banco de dados.",
        "D": "Incorreta. Isso é política de senhas fracas."
      },
      "dicaDeOuro": "SQL Injection = Input sujo virando comando no banco!"
    }
  },
  {
    "id": "q_engsw_b2_009",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Segurança da Informação",
    "topic": "OWASP Top 10 - XSS",
    "difficulty": "Difícil",
    "statement": "A vulnerabilidade de Cross-Site Scripting (XSS) do tipo 'Stored' (ou Persistente) acontece quando:",
    "options": {
      "A": "O código JavaScript da aplicação é muito lento para carregar.",
      "B": "O servidor de arquivos é infectado por um ransomware.",
      "C": "O roteador do usuário é resetado remotamente.",
      "D": "O script malicioso é armazenado permanentemente no servidor (ex: em um comentário de blog ou perfil de usuário) e executado no navegador de qualquer um que visualizar aquela página.",
      "E": "O atacante envia um script malicioso via URL que é refletido apenas uma vez na tela do usuário."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "XSS Stored é o pesadelo do Front-end. O hacker salva um `<script>roubarCookie()</script>` no banco de dados da sua rede social. Toda vez que alguém abrir o perfil do hacker, o navegador da vítima vai rodar aquele código e mandar o cookie de sessão para o hacker. É silencioso e letal.",
      "puloDoGato": "Diferença: Reflected (Refletido) vem na URL e só atinge quem clicar no link. Stored (Armazenado) fica no banco e atinge QUALQUER UM que abrir a página.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso descreve o XSS Reflected.",
        "D": "Correta. O perigo está na persistência do script no banco de dados.",
        "B": "Incorreta. Ransomware é outro tipo de malware focado em criptografia de arquivos.",
        "C": "Incorreta. Falha de hardware/infra de rede.",
        "A": "Incorreta. Problema de performance, não de segurança."
      },
      "dicaDeOuro": "XSS Stored = Script salvo no banco infectando todos os visitantes!"
    }
  },
  {
    "id": "q_engsw_b2_012",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "Gestão de Riscos - Respostas aos Riscos",
    "difficulty": "Médio",
    "statement": "No gerenciamento de riscos do PMBOK, quando a equipe de projeto decide alterar o plano de gerenciamento para eliminar totalmente uma ameaça, protegendo o projeto de seu impacto, a estratégia utilizada é a de:",
    "options": {
      "A": "Transferir (Transfer).",
      "B": "Prevenir/Evitar (Avoid).",
      "C": "Mitigar (Mitigate).",
      "D": "Explorar (Exploit).",
      "E": "Aceitar (Accept)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Evitar (Avoid) é a solução radical: se um fornecedor é instável e pode quebrar o projeto, eu mudo o escopo para não depender mais dele. O risco deixa de existir. Diferente de Mitigar, onde eu apenas tento diminuir a chance ou o estrago.",
      "puloDoGato": "Mnemônico: Evitar = Risco vira zero. Mitigar = Risco diminui, mas continua lá.",
      "cascasDeBanana": {
        "A": "Incorreta. Mitigar é reduzir probabilidade/impacto, não eliminar.",
        "B": "Correta. Ação preventiva que remove a causa do risco.",
        "C": "Incorreta. Transferir é passar para terceiro (ex: Seguro ou terceirização).",
        "D": "Incorreta. Aceitar é não fazer nada e lidar com as consequências se ocorrer.",
        "E": "Incorreta. Explorar é uma estratégia para riscos POSITIVOS (Oportunidades)."
      },
      "dicaDeOuro": "Cortou o mal pela raiz? É Evitar (Avoid)!"
    }
  },
  {
    "id": "q_engsw_b2_016",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Engenharia de Software",
    "topic": "Débito Técnico (Technical Debt)",
    "difficulty": "Difícil",
    "statement": "O conceito de 'Débito Técnico', proposto por Ward Cunningham, refere-se a:",
    "options": {
      "A": "As dívidas financeiras que a empresa de software possui com bancos.",
      "B": "O imposto cobrado pelo governo sobre a exportação de software.",
      "C": "O tempo que os desenvolvedores ficam devendo de horas extras no mês.",
      "D": "A quantidade de computadores que a equipe precisa comprar para terminar o projeto.",
      "E": "O custo implícito de retrabalho futuro causado pela escolha de uma solução técnica fácil ou 'suja' agora, em vez de uma abordagem melhor que levaria mais tempo."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Débito técnico é como um cartão de crédito: você compra a rapidez hoje fazendo um código 'mais ou menos', mas amanhã terá que pagar com JUROS (o código ficará tão difícil de mexer que você vai demorar o dobro para fazer qualquer coisa). Uma hora a fatura chega e você precisa refatorar.",
      "puloDoGato": "Nem todo débito é ruim; às vezes é estratégico para lançar um produto rápido. O erro é nunca 'pagar' a dívida e deixar o sistema virar um 'Legado Ingerenciável'.",
      "cascasDeBanana": {
        "A": "Incorreta. Débito técnico é uma metáfora para qualidade de código, não contabilidade financeira.",
        "E": "Correta. Reflete o trade-off entre velocidade atual e manutenibilidade futura.",
        "D": "Incorreta. Ativos de hardware não são débito técnico.",
        "C": "Incorreta. Horas de trabalho são gestão de RH/Capacidade.",
        "B": "Incorreta. Questão tributária."
      },
      "dicaDeOuro": "Débito Técnico = Código rápido/sujo hoje, lentidão e bugs amanhã. Pague sua dívida com Refatoração!"
    }
  },
  {
    "id": "q_engsw_b2_017",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Cerimônias (Daily Scrum)",
    "difficulty": "Médio",
    "statement": "A 'Daily Scrum' (Reunião Diária) tem como objetivo principal:",
    "options": {
      "A": "Inspecionar o progresso em direção à Meta da Sprint e adaptar o Sprint Backlog conforme necessário, através da sincronização do time.",
      "B": "Realizar uma sessão de treinamento em novas tecnologias.",
      "C": "Decidir quem será demitido no final da semana.",
      "D": "Fazer um relatório detalhado de status para o chefe da empresa.",
      "E": "Escrever a documentação técnica de todos os métodos criados no dia anterior."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A Daily não é uma reunião de 'status report' para o gerente. É uma reunião DO TIME PARA O TIME. O foco é: 'Estamos no caminho certo para entregar a Meta da Sprint? Alguém está travado?'. Deve durar no máximo 15 minutos.",
      "puloDoGato": "Três perguntas clássicas (opcionais no novo Guia, mas úteis): O que fiz ontem? O que farei hoje? Há algum impedimento?",
      "cascasDeBanana": {
        "D": "Incorreta. Scrum Master e PO não agem como 'chefes' que recebem relatórios na daily.",
        "A": "Correta. Foco no planejamento das próximas 24 horas e Meta da Sprint.",
        "C": "Incorreta. Daily não é para avaliação de desempenho individual punitiva.",
        "E": "Incorreta. Documentação é feita durante o desenvolvimento, não em reunião.",
        "B": "Incorreta. Treinamento exige sessões próprias e mais longas."
      },
      "dicaDeOuro": "Daily = 15 min. Time sincronizado. Foco na Meta da Sprint!"
    }
  },
  {
    "id": "q_engsw_b2_018",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Artefatos (Sprint Backlog)",
    "difficulty": "Médio",
    "statement": "No Scrum, o Sprint Backlog é composto por:",
    "options": {
      "A": "O manual de usuário do software.",
      "B": "O currículo de todos os membros da equipe.",
      "C": "Todas as funcionalidades que o cliente sonha em ter no futuro distante.",
      "D": "Uma lista de bugs que foram encontrados em produção há mais de um ano.",
      "E": "A Meta da Sprint (por que), o conjunto de itens do Product Backlog selecionados para a Sprint (o quê) e um plano acionável para entregar o Incremento (como)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Sprint Backlog é o compromisso do time para os próximos dias (a duração da Sprint). É uma 'fatia' do Product Backlog que o time acredita que consegue entregar. Ele pertence exclusivamente aos Desenvolvedores.",
      "puloDoGato": "Diferença: Product Backlog é LONGO PRAZO e gerenciado pelo PO. Sprint Backlog é CURTO PRAZO e gerenciado pelos Developers.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso descreve o Product Backlog (em alto nível).",
        "E": "Correta. Definição completa conforme o Scrum Guide atual.",
        "D": "Incorreta. Podem haver bugs, mas não é a definição do artefato.",
        "B": "Incorreta. Sem relação com RH.",
        "A": "Incorreta. Manual é um produto do trabalho, não o backlog."
      },
      "dicaDeOuro": "Sprint Backlog = Meta + Itens + Plano de Execução!"
    }
  },
  {
    "id": "q_engsw_b2_019",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK - Termo de Abertura do Projeto (Project Charter)",
    "difficulty": "Médio",
    "statement": "De acordo com o PMBOK, o documento que autoriza formalmente a existência de um projeto e fornece ao gerente de projetos a autoridade para aplicar os recursos organizacionais nas atividades do projeto é o:",
    "options": {
      "A": "Cronograma de Marcos.",
      "B": "Plano de Gerenciamento de Custos.",
      "C": "Dicionário da EAP.",
      "D": "Termo de Abertura do Projeto (Project Charter).",
      "E": "Relatório de Lições Aprendidas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Sem o Termo de Abertura (Project Charter), o gerente de projetos é apenas alguém com uma ideia. O Charter é o 'contrato' assinado pelo Patrocinador (Sponsor) que diz: 'O projeto existe e o João é o Gerente'. Ele deve conter o propósito, objetivos e principais requisitos.",
      "puloDoGato": "A Cesgranrio adora perguntar: 'Qual documento dá autoridade ao GP?'. A resposta é sempre Termo de Abertura / Project Charter.",
      "cascasDeBanana": {
        "B": "Incorreta. Plano de custos é feito DEPOIS da abertura, no planejamento.",
        "D": "Correta. Marco zero formal do projeto.",
        "C": "Incorreta. Dicionário da EAP detalha as entregas, não autoriza o projeto.",
        "A": "Incorreta. Cronograma é ferramenta de controle temporal.",
        "E": "Incorreta. Lições Aprendidas são documentadas ao longo e no fim do projeto."
      },
      "dicaDeOuro": "Charter = Nascimento formal do projeto + Autoridade para o Gerente!"
    }
  },
  {
    "id": "q_engsw_b2_020",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Segurança da Informação",
    "topic": "Criptografia Assimétrica (Chave Pública)",
    "difficulty": "Difícil",
    "statement": "Na criptografia assimétrica (ou de chave pública), para que um usuário A envie uma mensagem criptografada garantindo a CONFIDENCIALIDADE para um usuário B, ele deve utilizar:",
    "options": {
      "A": "A chave pública do usuário B.",
      "B": "Uma chave secreta compartilhada previamente por telefone.",
      "C": "A chave privada do usuário A.",
      "D": "A chave privada do usuário B.",
      "E": "A chave pública do usuário A."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Criptografia Assimétrica usa um PAR de chaves: Pública (todos sabem) e Privada (só o dono sabe). Se eu quero que SÓ o Bruno leia, eu tranco a mensagem com o cadeado dele (Chave Pública do Bruno). Como só o Bruno tem a chave do próprio cadeado (Chave Privada), só ele abre. Isso garante Confidencialidade.",
      "puloDoGato": "Cuidado! Se eu quiser assinar (Autenticidade), eu uso a MINHA chave privada. Se eu quiser que alguém leia em segredo (Confidencialidade), eu uso a chave pública DELE.",
      "cascasDeBanana": {
        "C": "Incorreta. Usar a própria privada serviria para Assinatura Digital, não sigilo (todos com sua pública leriam).",
        "A": "Correta. Garante que apenas o detentor da chave privada correspondente (o destinatário) leia.",
        "D": "Incorreta. O remetente nunca tem acesso à chave privada do destinatário.",
        "B": "Incorreta. Isso descreve Criptografia Simétrica.",
        "E": "Incorreta. Criptografar com a própria pública não faria sentido para envio (só você leria)."
      },
      "dicaDeOuro": "Confidencialidade? Tranca com a Pública dele. Autenticidade? Tranca com a sua Privada!"
    }
  },
  {
    "id": "q_engsw_b2_027",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Segurança da Informação",
    "topic": "OWASP Top 10 - Injeção (SQL Injection)",
    "difficulty": "Médio",
    "statement": "Uma das vulnerabilidades mais críticas segundo a OWASP é a Injeção, com destaque para o SQL Injection. Qual a técnica MAIS eficaz para prevenir esse tipo de ataque?",
    "options": {
      "A": "Utilizar JavaScript no front-end para limpar os dados.",
      "B": "Trocar o banco de dados SQL por arquivos de texto TXT.",
      "C": "Usar consultas parametrizadas (Prepared Statements).",
      "D": "Aumentar o tamanho da senha do banco de dados.",
      "E": "Esconder o código-fonte do site."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O SQL Injection ocorre quando dados do usuário são concatenados diretamente na string SQL. Usando Prepared Statements, o banco separa o comando SQL dos dados, impedindo que um comando malicioso seja executado.",
      "puloDoGato": "Nunca confie em validação APENAS no front-end. O atacante pode burlar o navegador e enviar os dados direto para sua API.",
      "cascasDeBanana": {
        "A": "Incorreta. Validação de front-end é facilmente burlada.",
        "C": "Correta. Técnica padrão ouro de defesa.",
        "B": "Incorreta. Ineficaz e prejudica a performance/escalabilidade.",
        "D": "Incorreta. Não impede a injeção via campos de formulário.",
        "E": "Incorreta. Segurança por obscuridade não é segurança real."
      },
      "dicaDeOuro": "Parametrize tudo! Nunca concatene variáveis em strings SQL."
    }
  },
  {
    "id": "q_engsw_b2_028",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Segurança da Informação",
    "topic": "DevSecOps - Shift-Left Security",
    "difficulty": "Médio",
    "statement": "O conceito de 'Shift-Left' no contexto de DevSecOps refere-se a:",
    "options": {
      "A": "Escrever código apenas com a mão esquerda.",
      "B": "Integrar práticas de segurança o mais cedo possível no ciclo de desenvolvimento de software (SDLC).",
      "C": "Remover a equipe de segurança para economizar custos.",
      "D": "Mover os servidores para a esquerda do data center.",
      "E": "Deixar a segurança para ser testada apenas pelos usuários finais."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Tradicionalmente, a segurança era testada no final (à direita do cronograma). O 'Shift-Left' move esses testes para o início (à esquerda), desde o design e codificação, reduzindo custos e riscos.",
      "puloDoGato": "Shift-Left = Segurança desde o dia 1, não como um 'puxadinho' no final.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada geográfica.",
        "B": "Correta. Definição central de DevSecOps.",
        "C": "Incorreta. Isso é perigoso e irresponsável.",
        "D": "Incorreta. DevSecOps integra a segurança, não a remove.",
        "E": "Incorreta. Piada motora."
      },
      "dicaDeOuro": "Shift-Left = Corrigir bug de segurança no código custa 10x menos que corrigir em produção!"
    }
  },
  {
    "id": "q_engsw_b2_029",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK 7 - Princípios (Entrega de Valor)",
    "difficulty": "Médio",
    "statement": "Diferente da 6ª edição (baseada em processos), a 7ª edição do Guia PMBOK é baseada em princípios. Um desses princípios fundamentais é 'Focar no Valor'. Isso significa que:",
    "options": {
      "A": "O gerente de projetos deve focar apenas no valor do seu próprio salário.",
      "B": "Todas as tarefas devem ser avaliadas em Reais (R$).",
      "C": "O projeto deve custar o valor mais caro possível para gerar lucro.",
      "D": "O sucesso do projeto deve ser medido pelo alcance dos benefícios e do valor para o negócio, e não apenas pelo cumprimento de prazos e orçamentos.",
      "E": "O valor de venda das ações da empresa deve ser o único indicador de sucesso."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O PMBOK 7 entende que um projeto pode ser entregue no prazo e no custo, mas se ninguém usar ou não gerar lucro/benefício, ele falhou. O foco mudou de 'saídas' (outputs) para 'resultados' (outcomes/valor).",
      "puloDoGato": "Valor = Benefício líquido que o projeto traz. Pode ser financeiro, social ou estratégico.",
      "cascasDeBanana": {
        "C": "Incorreta. Geração de valor não é inflar custos.",
        "D": "Correta. Mudança de paradigma do PMBOK 7.",
        "E": "Incorreta. Visão muito limitada de valor.",
        "A": "Incorreta. Anti-ético.",
        "B": "Incorreta. Valor pode ser intangível (ex: satisfação)."
      },
      "dicaDeOuro": "PMBOK 7 = Resultados e Valor > Processos e Ferramentas."
    }
  },
  {
    "id": "q_engsw_b2_030",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Papéis (Scrum Master)",
    "difficulty": "Médio",
    "statement": "Qual das seguintes alternativas descreve uma responsabilidade do Scrum Master segundo o Guia Scrum?",
    "options": {
      "A": "Definir quais funcionalidades o time deve desenvolver e priorizar o Product Backlog.",
      "B": "Cobrar individualmente cada desenvolvedor pelo cumprimento das metas de produtividade.",
      "C": "Assinar o cheque de pagamento dos fornecedores externos.",
      "D": "Escrever o código-fonte das partes mais difíceis do sistema.",
      "E": "Liderar, treinar e guiar a organização na adoção do Scrum e remover impedimentos ao progresso do Time do Scrum."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Scrum Master é um 'Líder Servidor' (ou Líder que serve). Ele não manda no que fazer (isso é o PO) nem em como fazer (isso são os Developers). Ele garante que o Scrum seja entendido e vivido, protegendo o time de distrações e removendo pedras no caminho.",
      "puloDoGato": "Cuidado: O Scrum Master não é o 'chefe' do time. Ele é um facilitador.",
      "cascasDeBanana": {
        "A": "Incorreta. Responsabilidade do Product Owner.",
        "E": "Correta. Descrição clássica do papel.",
        "D": "Incorreta. O SM pode codar se for um Developer também, mas não é sua função como SM.",
        "B": "Incorreta. Scrum não foca em cobrança individual punitiva, mas em compromisso do time.",
        "C": "Incorreta. Função administrativa de gestão financeira."
      },
      "dicaDeOuro": "Scrum Master = Mestre do Processo + Protetor do Time!"
    }
  },
  {
    "id": "q_engsw_b2_031",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Kanban - Limite de WIP (Work in Progress)",
    "difficulty": "Médio",
    "statement": "No método Kanban, a prática de 'Limitar o Trabalho em Andamento' (WIP) tem como objetivo:",
    "options": {
      "A": "Garantir que ninguém fique parado, mesmo que as tarefas não sejam importantes.",
      "B": "Evitar a sobrecarga do sistema e expor gargalos no processo, incentivando o foco na finalização de tarefas antes de iniciar novas.",
      "C": "Aumentar o número de reuniões diárias.",
      "D": "Fazer com que os desenvolvedores trabalhem em 10 tarefas ao mesmo tempo para serem mais rápidos.",
      "E": "Esconder os problemas da equipe para que o gerente não fique bravo."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A lógica do Kanban é: 'Pare de começar, comece a terminar'. Ao limitar o WIP (ex: no máximo 3 tarefas em 'Desenvolvimento'), se o limite for atingido, o time precisa ajudar a mover essas tarefas para 'Concluído' antes de puxar uma nova. Isso melhora o fluxo (Flow).",
      "puloDoGato": "Muitas tarefas abertas = Multitarefa = Lentidão e perda de contexto.",
      "cascasDeBanana": {
        "A": "Incorreta. Multitarefa diminui a produtividade real.",
        "B": "Correta. Foco no fluxo e na entrega contínua.",
        "C": "Incorreta. O Kanban visa a transparência radical.",
        "D": "Incorreta. 'Estar ocupado' é diferente de 'Gerar valor'.",
        "E": "Incorreta. Kanban foca em fluxo, não em excesso de reuniões."
      },
      "dicaDeOuro": "WIP Limit = Menos tarefas abertas, mais tarefas entregues!"
    }
  },
  {
    "id": "q_engsw_b2_036",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Engenharia de Requisitos",
    "topic": "Requisitos Não Funcionais (RNF)",
    "difficulty": "Médio",
    "statement": "Na engenharia de requisitos, os Requisitos Não Funcionais (RNF) definem propriedades do sistema e restrições sobre os serviços ou funções oferecidos pelo sistema. Qual das alternativas abaixo apresenta um exemplo de Requisito Não Funcional?",
    "options": {
      "A": "O sistema deve permitir que o usuário cadastre novos fornecedores de petróleo.",
      "B": "O sistema deve ser capaz de processar 1.000 transações por segundo sob carga normal.",
      "C": "O sistema deve permitir a exclusão de registros de poços inativos.",
      "D": "O sistema deve gerar um relatório mensal de produção em formato PDF.",
      "E": "O sistema deve enviar um e-mail de confirmação após a alteração da senha."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Requisitos Funcionais descrevem O QUE o sistema faz (ações, comportamentos). Requisitos Não Funcionais descrevem COMO o sistema deve ser (performance, segurança, disponibilidade, usabilidade). O item C fala de performance, logo é um RNF.",
      "puloDoGato": "Técnica da pergunta: 'Isso é uma função/botão?' Se sim, é funcional. 'Isso é uma característica de qualidade/limite?' Se sim, é não funcional.",
      "cascasDeBanana": {
        "A": "Incorreta. Cadastro é uma função (RF).",
        "D": "Incorreta. Gerar relatório é uma função (RF).",
        "B": "Correta. Define um critério de desempenho (RNF).",
        "E": "Incorreta. Enviar e-mail é uma ação do sistema (RF).",
        "C": "Incorreta. Excluir registros é uma função (RF)."
      },
      "dicaDeOuro": "RNF = Qualidade e Restrições. RF = Funcionalidades e Serviços."
    }
  },
  {
    "id": "q_engsw_b2_037",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Extreme Programming (XP) - Práticas",
    "difficulty": "Médio",
    "statement": "A prática do Extreme Programming (XP) que consiste em dois desenvolvedores trabalharem juntos em uma única estação de trabalho, onde um escreve o código (piloto) e o outro revisa cada linha à medida que é escrita (copiloto), é chamada de:",
    "options": {
      "A": "Integração Contínua.",
      "B": "Desenvolvimento Guiado por Testes (TDD).",
      "C": "Refatoração.",
      "D": "Propriedade Coletiva do Código.",
      "E": "Programação em Par (Pair Programming)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Pair Programming é uma das práticas mais famosas do XP. Ela visa reduzir bugs 'no nascimento', disseminar conhecimento entre a equipe e melhorar a qualidade do código através da revisão contínua em tempo real.",
      "puloDoGato": "No XP, o foco é em feedback constante e simplicidade. O par funciona como um 'code review' instantâneo.",
      "cascasDeBanana": {
        "C": "Incorreta. Refatoração é melhorar o código sem mudar o comportamento.",
        "B": "Incorreta. TDD é escrever o teste antes do código.",
        "E": "Correta. Dois devs, uma máquina.",
        "D": "Incorreta. Propriedade coletiva significa que qualquer dev pode mexer em qualquer parte do código.",
        "A": "Incorreta. Integração contínua é subir o código várias vezes ao dia para o servidor."
      },
      "dicaDeOuro": "Pair Programming = Duas cabeças pensam melhor que uma (e erram menos)!"
    }
  },
  {
    "id": "q_engsw_b2_038",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Metodologias Ágeis",
    "topic": "Lean Software Development - Desperdícios (Waste)",
    "difficulty": "Médio",
    "statement": "No Lean Software Development, um dos princípios fundamentais é a 'Eliminação de Desperdícios'. Qual das alternativas abaixo NÃO é considerada um desperdício (waste) segundo este modelo?",
    "options": {
      "A": "Defeitos e retrabalho.",
      "B": "Funcionalidades extras (que o cliente não pediu).",
      "C": "Código refatorado para melhoria da legibilidade.",
      "D": "Troca de contexto (multitarefa excessiva).",
      "E": "Trabalho parcialmente concluído (estoque)."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Lean identifica 7 desperdícios: Trabalho inacabado, Funcionalidades extras, Processamento extra, Troca de tarefas, Espera, Movimentação e Defeitos. Refatoração é um investimento em qualidade e manutenibilidade, não um desperdício.",
      "puloDoGato": "Desperdício no Lean é tudo aquilo que consome recursos mas não agrega valor direto ao cliente final.",
      "cascasDeBanana": {
        "B": "Incorreta. É desperdício (Gold Plating).",
        "E": "Incorreta. É desperdício (Inventory).",
        "D": "Incorreta. É desperdício (Task Switching).",
        "C": "Correta. Refatoração gera valor a longo prazo reduzindo o débito técnico.",
        "A": "Incorreta. É o desperdício mais óbvio (Defects)."
      },
      "dicaDeOuro": "Lean = Foco no que agrega valor. Se não ajuda o cliente ou a entrega, é lixo!"
    }
  },
  {
    "id": "q_engsw_b2_039",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK 6 - Gerenciamento de Riscos",
    "difficulty": "Difícil",
    "statement": "No processo de 'Planejar as Respostas aos Riscos' do PMBOK, quando a equipe decide agir para eliminar a ameaça ou proteger o projeto contra o seu impacto, ela está utilizando a estratégia de:",
    "options": {
      "A": "Prevenir (Avoid).",
      "B": "Explorar (Exploit).",
      "C": "Mitigar (Mitigate).",
      "D": "Transferir (Transfer).",
      "E": "Aceitar (Accept)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Prevenir (Avoid) significa mudar o plano do projeto para eliminar totalmente o risco. Mitigar (Mitigate) é reduzir a probabilidade ou o impacto, mas o risco continua lá. Transferir (Transfer) é passar o risco para terceiros (ex: seguro).",
      "puloDoGato": "Cesgranrio ama: 'Eliminar a ameaça' = Prevenir. 'Reduzir impacto' = Mitigar.",
      "cascasDeBanana": {
        "A": "Correta. Ação radical para zerar o risco.",
        "B": "Incorreta. Mitigar apenas diminui o problema, não o elimina.",
        "C": "Incorreta. Transferir envolve terceiros (contratos/seguros).",
        "D": "Incorreta. Aceitar é não fazer nada (passivo) ou criar reserva (ativo).",
        "E": "Incorreta. Explorar é uma estratégia para riscos POSITIVOS (oportunidades)."
      },
      "dicaDeOuro": "Prevenir = Cortar o mal pela raiz. Mitigar = Usar colete à prova de balas."
    }
  },
  {
    "id": "q_engsw_b2_041",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Arquitetura de Software",
    "topic": "Padrões de Arquitetura - MVC (Model-View-Controller)",
    "difficulty": "Médio",
    "statement": "No padrão de arquitetura MVC, a camada responsável por gerenciar a lógica de negócio, os dados e as regras do sistema é o:",
    "options": {
      "A": "Controller.",
      "B": "Model.",
      "C": "View.",
      "D": "Router.",
      "E": "Dispatcher."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Model = Dados e Lógica. View = Interface e Exibição. Controller = Orquestração e Interação (pega da View, manda pro Model).",
      "puloDoGato": "Lógica de Negócio SEMPRE fica no Model. O Controller é apenas o 'garçom' que leva o pedido da mesa (View) para a cozinha (Model).",
      "cascasDeBanana": {
        "C": "Incorreta. View é apenas a cara do sistema.",
        "A": "Incorreta. Controller apenas coordena o fluxo, não deve conter lógica complexa.",
        "B": "Correta. O coração do sistema.",
        "E": "Incorreta. Termo de infra/orquestração de eventos.",
        "D": "Incorreta. Gerencia apenas as rotas de URL."
      },
      "dicaDeOuro": "Model = O que o sistema É. View = O que o sistema PARECE. Controller = O que o sistema FAZ com as entradas."
    }
  },
  {
    "id": "q_engsw_b2_042",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Engenharia de Requisitos",
    "topic": "Técnicas de Elicitação - Brainstorming",
    "difficulty": "Fácil",
    "statement": "A técnica de elicitação de requisitos que visa gerar um grande número de ideias em um curto espaço de tempo, sem críticas imediatas às sugestões, é conhecida como:",
    "options": {
      "A": "Etnografia (Observação).",
      "B": "Entrevista Estruturada.",
      "C": "Brainstorming (Tempestade de Ideias).",
      "D": "Questionário.",
      "E": "Prototipagem."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Brainstorming foca em quantidade e criatividade. A regra de ouro é: 'Nenhuma ideia é ruim no início'. Serve para descobrir requisitos inovadores que o usuário talvez não pediria em uma entrevista formal.",
      "puloDoGato": "Cesgranrio ama: 'Sem julgamentos' e 'Muitas ideias' = Brainstorming.",
      "cascasDeBanana": {
        "B": "Incorreta. Entrevista é focada e limitada.",
        "D": "Incorreta. Questionário é assíncrono e rígido.",
        "A": "Incorreta. Etnografia é observar o usuário no habitat dele.",
        "C": "Correta. Técnica de grupo para exploração criativa.",
        "E": "Incorreta. Prototipagem é construir algo visual para validar."
      },
      "dicaDeOuro": "Brainstorming = Volume de ideias agora, filtro e análise depois!"
    }
  },
  {
    "id": "q_engsw_b2_045",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Arquitetura de Software",
    "topic": "Arquitetura em Camadas (Layered Architecture)",
    "difficulty": "Médio",
    "statement": "Na arquitetura em camadas (ex: 3-tier), o principal objetivo de manter as camadas isoladas é:",
    "options": {
      "A": "Aumentar o consumo de memória RAM do servidor.",
      "B": "Garantir que a interface de usuário possa acessar o banco de dados diretamente sem passar pela lógica.",
      "C": "Promover o desacoplamento e facilitar a manutenção, permitindo que uma camada seja alterada sem afetar as outras significativamente.",
      "D": "Dificultar a vida dos novos programadores que entram na equipe.",
      "E": "Obrigar o uso de microserviços."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Camadas isoladas (SoC - Separation of Concerns) permitem que você troque o banco de dados (camada de persistência) sem precisar reescrever as telas do aplicativo (camada de apresentação).",
      "puloDoGato": "Arquitetura = Organização. Camadas = Especialização de funções.",
      "cascasDeBanana": {
        "A": "Incorreta. Isolamento pode até aumentar levemente o overhead, mas não é o objetivo.",
        "B": "Incorreta. O acesso direto viola o princípio das camadas.",
        "C": "Correta. Facilidade de manutenção e evolução.",
        "D": "Incorreta. Pelo contrário, facilita o entendimento do sistema.",
        "E": "Incorreta. Monolitos também usam camadas."
      },
      "dicaDeOuro": "Camadas = Cada um no seu quadrado. Mude um sem quebrar o outro!"
    }
  },
  {
    "id": "q_engsw_b2_048",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK 6 - Caminho Crítico (Critical Path Method)",
    "difficulty": "Médio",
    "statement": "Em um cronograma de projeto, o 'Caminho Crítico' é definido como:",
    "options": {
      "A": "O caminho mais curto entre o início e o fim do projeto.",
      "B": "O conjunto de tarefas que os desenvolvedores consideram as mais difíceis de programar.",
      "C": "A lista de feriados do ano.",
      "D": "A sequência de atividades que determina a duração total do projeto, onde qualquer atraso em uma tarefa atrasa o projeto inteiro.",
      "E": "A sequência de atividades que consome o menor custo financeiro."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Caminho Crítico tem 'folga zero'. É a maior sequência de tarefas dependentes. Se uma tarefa do caminho crítico atrasa 1 dia, o projeto termina 1 dia depois. Identificar esse caminho é vital para a gestão de prazos.",
      "puloDoGato": "Caminho Crítico = Maior duração total. Folga = Zero. Atrasou aqui? Atrasou tudo.",
      "cascasDeBanana": {
        "E": "Incorreta. Não tem relação direta com custos mínimos.",
        "B": "Incorreta. Complexidade técnica é diferente de criticidade temporal.",
        "D": "Correta. Definição clássica de gerenciamento de tempo.",
        "A": "Incorreta. O caminho crítico é a MAIOR duração, não a menor.",
        "C": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "Caminho Crítico = A trilha sem folga. Olho vivo nessas tarefas!"
    }
  },
  {
    "id": "q_engsw_b2_049",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Engenharia de Requisitos",
    "topic": "Rastreabilidade de Requisitos",
    "difficulty": "Médio",
    "statement": "A 'Matriz de Rastreabilidade de Requisitos' (RTM) é uma ferramenta utilizada para:",
    "options": {
      "A": "Nenhuma das anteriores.",
      "B": "Descobrir o endereço físico do cliente que pediu o requisito.",
      "C": "Calcular o bônus dos programadores.",
      "D": "Criptografar os requisitos para que os concorrentes não os leiam.",
      "E": "Acompanhar a vida de um requisito, desde sua origem (ex: uma necessidade do negócio) até a sua implementação e teste."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Rastreabilidade garante que você saiba POR QUE cada botão existe (alinhamento com o negócio) e garante que tudo que foi pedido foi TESTADO (cobertura). Se o cliente mudar algo, você sabe exatamente quais códigos e testes serão afetados.",
      "puloDoGato": "Rastreabilidade = Mapa do Requisito. Da ideia original ao código pronto.",
      "cascasDeBanana": {
        "E": "Correta. Garante o ciclo de vida e impacto das mudanças.",
        "B": "Incorreta. Rastreabilidade técnica, não de GPS/Logística.",
        "D": "Incorreta. Transparência é o objetivo, não sigilo interno.",
        "C": "Incorreta. Métrica de produtividade, não de rastreio.",
        "A": "Incorreta. N/A."
      },
      "dicaDeOuro": "Rastreabilidade = Se o requisito mudar, eu sei exatamente o que quebra!"
    }
  },
  {
    "id": "q_engsw_b3_001",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Modelagem Relacional - Chaves e Integridade",
    "difficulty": "Médio",
    "statement": "No modelo relacional, a restrição que garante que o valor de uma chave estrangeira em uma tabela deve corresponder a um valor existente de uma chave primária em outra tabela relacionada (ou ser nulo) é chamada de:",
    "options": {
      "A": "Integridade de Domínio.",
      "B": "Integridade de Entidade.",
      "C": "Integridade de Chave Única.",
      "D": "Integridade Referencial.",
      "E": "Integridade de Redundância."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A Integridade Referencial é o pilar que mantém os relacionamentos saudáveis. Ela impede que você tenha um 'Pedido' apontando para um 'Cliente' que não existe. A Foreign Key (FK) é o mecanismo que implementa essa regra.",
      "puloDoGato": "Chave Primária (PK) = Integridade de Entidade (não pode ser nula). Chave Estrangeira (FK) = Integridade Referencial.",
      "cascasDeBanana": {
        "B": "Incorreta. Integridade de Entidade diz respeito à Chave Primária (não nula e única).",
        "D": "Correta. Regra fundamental para relacionamentos entre tabelas.",
        "A": "Incorreta. Integridade de Domínio define os valores válidos para uma coluna (tipos, constraints CHECK).",
        "C": "Incorreta. Nome genérico para restrição UNIQUE.",
        "E": "Incorreta. Nome inventado."
      },
      "dicaDeOuro": "Integridade Referencial = Ponte segura entre tabelas. Sem pontes para o nada!"
    }
  },
  {
    "id": "q_engsw_b3_002",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "SQL - Joins (Junções)",
    "difficulty": "Médio",
    "statement": "Considere duas tabelas: Empregados e Departamentos. Para retornar todos os departamentos, inclusive aqueles que não possuem nenhum empregado vinculado, qual tipo de JOIN deve ser utilizado (considerando Departamentos como a tabela à direita na cláusula)?",
    "options": {
      "A": "RIGHT JOIN.",
      "B": "INNER JOIN.",
      "C": "LEFT JOIN.",
      "D": "NATURAL JOIN.",
      "E": "CROSS JOIN."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O RIGHT JOIN garante que todos os registros da tabela da DIREITA sejam retornados. Se não houver correspondência na tabela da esquerda, os campos virão como NULL. Como Departamentos é a tabela da direita e queremos todos eles, usamos RIGHT JOIN.",
      "puloDoGato": "Inner = Só o que tem nos dois. Left = Tudo da esquerda. Right = Tudo da direita. Full = Tudo de tudo.",
      "cascasDeBanana": {
        "B": "Incorreta. Inner join ocultaria os departamentos sem empregados.",
        "C": "Incorreta. Left join retornaria todos os empregados, mas não necessariamente todos os departamentos (a menos que a ordem fosse invertida).",
        "A": "Correta. Preserva a integridade da lista da direita.",
        "E": "Incorreta. Faz o produto cartesiano (tudo com tudo), sem critério de ligação.",
        "D": "Incorreta. Faz o join baseado em colunas com nomes iguais (perigoso)."
      },
      "dicaDeOuro": "Quer a tabela inteira mesmo sem par? Aponte o JOIN para o lado dela!"
    }
  },
  {
    "id": "q_engsw_b3_003",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Normalização - Formas Normais (1NF, 2NF, 3NF)",
    "difficulty": "Difícil",
    "statement": "Uma tabela está na Terceira Forma Normal (3NF) quando:",
    "options": {
      "A": "Possui pelo menos três chaves primárias.",
      "B": "Está na 2NF e não possui dependências transitivas (atributos não chave dependendo de outros atributos não chave).",
      "C": "Está dividida em exatamente três tabelas menores.",
      "D": "Está na 2NF e todos os atributos não chave dependem da chave primária de forma completa (sem dependência parcial).",
      "E": "Não possui atributos multivalorados ou compostos."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "1NF: Sem repetições/listas em colunas. 2NF: 1NF + Dependência total da chave (acaba com dependência parcial em chaves compostas). 3NF: 2NF + Sem dependência transitiva (ex: 'Cidade' depende de 'CEP', e 'CEP' depende de 'ID_Cliente'. 'Cidade' deve ir para outra tabela).",
      "puloDoGato": "Dica clássica: 'Depender da Chave (1NF), de Toda a Chave (2NF) e de Nada além da Chave (3NF), que Deus me ajude!'",
      "cascasDeBanana": {
        "E": "Incorreta. Isso define a 1NF.",
        "D": "Incorreta. Isso define a 2NF.",
        "B": "Correta. Define a eliminação de dependências indiretas entre campos não chave.",
        "A": "Incorreta. Conceito inexistente.",
        "C": "Incorreta. Piada numérica."
      },
      "dicaDeOuro": "3NF = Acabar com o 'telefone sem fio' entre as colunas da tabela."
    }
  },
  {
    "id": "q_engsw_b3_004",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Transações - Propriedades ACID",
    "difficulty": "Médio",
    "statement": "Nas propriedades ACID de transações em bancos de dados, a propriedade que garante que uma transação seja executada totalmente ou não seja executada de forma alguma (Tudo ou Nada) é a:",
    "options": {
      "A": "Disponibilidade.",
      "B": "Durabilidade.",
      "C": "Consistência.",
      "D": "Isolamento (Isolation).",
      "E": "Atomicidade."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Atomicidade vem de átomo (indivisível). Se uma transação de transferência bancária tira dinheiro de A mas falha antes de colocar em B, o banco deve fazer o ROLLBACK completo. Ou faz tudo, ou nada.",
      "puloDoGato": "A = Atômico (Tudo ou Nada). C = Coerente (Regras seguidas). I = Invisível (Uma não atrapalha a outra). D = Definitivo (Gravado no disco).",
      "cascasDeBanana": {
        "E": "Correta. Foco na indivisibilidade da operação.",
        "C": "Incorreta. Consistência garante que o BD saia de um estado válido para outro estado válido.",
        "D": "Incorreta. Isolamento garante que transações simultâneas não vejam estados intermediários umas das outras.",
        "B": "Incorreta. Durabilidade garante que após o COMMIT os dados não se percam (mesmo com queda de energia).",
        "A": "Incorreta. Não faz parte do ACID (é do Teorema CAP)."
      },
      "dicaDeOuro": "Atomicidade = O botão de pânico do banco de dados (Rollback)!"
    }
  },
  {
    "id": "q_engsw_b3_005",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "NoSQL - Teorema CAP",
    "difficulty": "Médio",
    "statement": "O Teorema CAP afirma que em um sistema distribuído é impossível garantir simultaneamente mais de duas das seguintes propriedades:",
    "options": {
      "A": "Capacidade, Armazenamento, Processamento.",
      "B": "Custo, Agilidade, Performance.",
      "C": "Consistência, Disponibilidade (Availability), Tolerância a Partições.",
      "D": "Criptografia, Autenticação, Permissão.",
      "E": "Conexão, Alocação, Persistência."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "CAP = Consistency, Availability, Partition Tolerance. Em sistemas distribuídos, se a rede cai (Partição), você deve escolher entre manter o sistema no ar com dados talvez desatualizados (AP) ou travar o sistema até que os dados sincronizem (CP).",
      "puloDoGato": "Bancos Relacionais (SQL) focam em CA ou CP. Bancos NoSQL costumam ser AP (Alta disponibilidade, mas consistência eventual).",
      "cascasDeBanana": {
        "B": "Incorreta. Termos de gestão.",
        "C": "Correta. Pilares fundamentais de sistemas distribuídos.",
        "A": "Incorreta. Termos de infraestrutura física.",
        "D": "Incorreta. Termos de segurança.",
        "E": "Incorreta. Termos genéricos de programação."
      },
      "dicaDeOuro": "CAP = Escolha 2 de 3. Na vida real, se a rede falha (P), você escolhe C ou A."
    }
  },
  {
    "id": "q_engsw_b3_006",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Modelo TCP/IP - Camadas",
    "difficulty": "Médio",
    "statement": "No modelo TCP/IP (4 camadas clássicas), a camada responsável pelo roteamento dos pacotes através de diferentes redes, utilizando endereçamento lógico (IP), é a camada de:",
    "options": {
      "A": "Transporte.",
      "B": "Aplicação.",
      "C": "Sessão.",
      "D": "Internet (ou Rede).",
      "E": "Interface de Rede (ou Acesso à Rede)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A camada de Internet (Rede) é onde mora o protocolo IP. Ela decide o 'caminho' que o pacote vai percorrer. A camada de Transporte (TCP/UDP) cuida da entrega porta a porta, mas a Internet cuida do endereço da casa (IP).",
      "puloDoGato": "Dica: Protocolo IP -> Camada de Internet. Protocolo TCP -> Camada de Transporte. Protocolo HTTP -> Camada de Aplicicação.",
      "cascasDeBanana": {
        "B": "Incorreta. Camada de Aplicação é onde rodam os serviços (HTTP, FTP, SMTP).",
        "A": "Incorreta. Camada de Transporte garante a integridade da entrega (TCP/UDP).",
        "D": "Correta. Responsável pelo roteamento e endereçamento lógico.",
        "E": "Incorreta. Camada de Interface cuida do meio físico e endereços MAC.",
        "C": "Incorreta. Camada de Sessão existe no modelo OSI (7 camadas), não no TCP/IP clássico."
      },
      "dicaDeOuro": "Roteador = Camada de Internet (IP). Switch = Camada de Interface (MAC)."
    }
  },
  {
    "id": "q_engsw_b3_007",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolo HTTP - Métodos e Status",
    "difficulty": "Fácil",
    "statement": "Ao realizar uma integração via API REST, qual código de status HTTP indica que a requisição foi bem sucedida e um novo recurso foi criado no servidor?",
    "options": {
      "A": "404 Not Found.",
      "B": "200 OK.",
      "C": "204 No Content.",
      "D": "400 Bad Request.",
      "E": "201 Created."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A família 2xx indica sucesso. O 200 é sucesso genérico. O 201 é específico para quando você dá um POST e o servidor confirma que salvou o dado com sucesso.",
      "puloDoGato": "1xx (Info), 2xx (Sucesso), 3xx (Redirecionamento), 4xx (Erro do Cliente), 5xx (Erro do Servidor).",
      "cascasDeBanana": {
        "B": "Incorreta. 200 é sucesso, mas não indica necessariamente criação de recurso.",
        "E": "Correta. Código padrão para POST bem sucedido.",
        "C": "Incorreta. 204 é sucesso, mas indica que não há corpo de resposta (ex: após um DELETE).",
        "D": "Incorreta. Erro do cliente (ex: JSON mal formatado).",
        "A": "Incorreta. Recurso não encontrado no servidor."
      },
      "dicaDeOuro": "201 = 'Tudo certo, salvei o que você pediu!'"
    }
  },
  {
    "id": "q_engsw_b3_008",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Computação em Nuvem - Modelos de Serviço (SPI)",
    "difficulty": "Médio",
    "statement": "Um modelo de serviço em nuvem onde o provedor oferece o hardware, os sistemas operacionais, as ferramentas de desenvolvimento e o banco de dados, permitindo que o cliente se foque apenas na criação e gestão das aplicações, é chamado de:",
    "options": {
      "A": "On-Premise.",
      "B": "SaaS (Software as a Service).",
      "C": "IaaS (Infrastructure as a Service).",
      "D": "PaaS (Platform as a Service).",
      "E": "DaaS (Data as a Service)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "No PaaS (Plataforma como Serviço), o desenvolvedor não se preocupa com atualização de Windows/Linux ou patches de banco de dados. Ele apenas 'sobe o código'. Exemplos: Heroku, Google App Engine, Azure App Service.",
      "puloDoGato": "IaaS = Alugo o PC vazio (ou com OS). PaaS = Alugo o PC com tudo pronto para programar. SaaS = Alugo o software pronto (ex: Gmail).",
      "cascasDeBanana": {
        "C": "Incorreta. IaaS te dá apenas a infra básica (servidores, redes, storage).",
        "D": "Correta. Oferece o ambiente completo de desenvolvimento.",
        "B": "Incorreta. SaaS é o software final para o usuário (ex: Office 365).",
        "E": "Incorreta. Modelo focado em provimento de dados brutos.",
        "A": "Incorreta. Significa infraestrutura local, dentro da própria empresa (não é nuvem)."
      },
      "dicaDeOuro": "PaaS = Plataforma. O paraíso do desenvolvedor que não quer ser sysadmin!"
    }
  },
  {
    "id": "q_engsw_b3_009",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Virtualização e Containers - Docker",
    "difficulty": "Médio",
    "statement": "Diferente de uma Máquina Virtual (VM) tradicional, um container Docker:",
    "options": {
      "A": "Possui seu próprio núcleo (kernel) de sistema operacional completo.",
      "B": "É obrigatoriamente mais lento que uma VM devido à camada de tradução.",
      "C": "Não permite a instalação de bibliotecas externas.",
      "D": "Compartilha o kernel do sistema operacional do hospedeiro (host), sendo mais leve e rápido para iniciar.",
      "E": "Só pode rodar em servidores físicos, nunca em nuvem."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Containers são isolamento em nível de PROCESSO. Eles usam o kernel do host mas isolam o file system, rede e bibliotecas. Isso elimina o overhead de ter que rodar um 'Guest OS' inteiro dentro do servidor.",
      "puloDoGato": "VM = Virtualiza o Hardware (mais pesado). Container = Virtualiza o SO (mais leve).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve uma VM.",
        "D": "Correta. Principal vantagem competitiva do Docker.",
        "B": "Incorreta. Containers têm performance quase nativa.",
        "E": "Incorreta. Rodam em qualquer lugar com Docker Engine.",
        "C": "Incorreta. Você instala o que quiser dentro da imagem do container."
      },
      "dicaDeOuro": "Container = Leveza. VM = Isolamento total de Hardware."
    }
  },
  {
    "id": "q_engsw_b3_010",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Segurança de Redes - HTTPS e Certificados",
    "difficulty": "Fácil",
    "statement": "O protocolo HTTPS utiliza criptografia para garantir a segurança da comunicação. Qual componente é essencial para que o navegador valide a identidade do servidor e estabeleça a conexão segura?",
    "options": {
      "A": "Roteador com Wi-Fi 6.",
      "B": "Uma conta no GitHub.",
      "C": "Certificado Digital (SSL/TLS).",
      "D": "Cabo de rede blindado.",
      "E": "Placa de vídeo de alto desempenho."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Certificado Digital SSL/TLS é emitido por uma Autoridade Certificadora (CA). Ele contém a chave pública do servidor e prova que 'google.com' é realmente o Google. Sem ele, a comunicação não é criptografada nem autenticada.",
      "puloDoGato": "HTTP + SSL/TLS = HTTPS. O cadeado verde na barra do navegador indica que o certificado é válido.",
      "cascasDeBanana": {
        "C": "Correta. Base da confiança na Web.",
        "D": "Incorreta. Proteção física, não de protocolo.",
        "A": "Incorreta. Melhora velocidade, não segurança de identidade.",
        "E": "Incorreta. Irrelevante para criptografia de rede básica.",
        "B": "Incorreta. Sem relação direta."
      },
      "dicaDeOuro": "HTTPS = Sigilo + Autenticidade (O site é quem diz ser)."
    }
  },
  {
    "id": "q_engsw_b3_011",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Indexação - B-Tree e Hash",
    "difficulty": "Difícil",
    "statement": "Em bancos de dados relacionais, o índice do tipo B-Tree (Árvore B) é preferível ao índice Hash quando:",
    "options": {
      "A": "Precisamos realizar buscas por intervalo (ex: WHERE data BETWEEN '2023-01-01' AND '2023-12-31') ou ordenação.",
      "B": "A tabela possui apenas 5 registros.",
      "C": "Buscamos apenas por valores exatos (ex: WHERE id = 10).",
      "D": "Não queremos usar memória RAM.",
      "E": "O banco de dados está desligado."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O índice Hash é extremamente rápido para busca exata (O(1)), mas como os dados são 'embaralhados', ele não serve para ordens ou intervalos. O B-Tree mantém os dados ordenados, permitindo buscas de 'maior que', 'menor que' e intervalos de forma eficiente.",
      "puloDoGato": "Dica de prova: Hash = Exatidão. B-Tree = Flexibilidade e Intervalos. Quase todos os bancos usam B-Tree por padrão.",
      "cascasDeBanana": {
        "C": "Incorreta. Para exatidão, o Hash costuma ser mais rápido (embora B-Tree também funcione).",
        "A": "Correta. B-Tree brilha em consultas de faixa de valores.",
        "B": "Incorreta. Em tabelas minúsculas, o banco às vezes nem usa índice (prefere ler tudo de uma vez).",
        "E": "Incorreta. Piada de infra.",
        "D": "Incorreta. Índices consomem RAM e Disco."
      },
      "dicaDeOuro": "B-Tree = O índice 'pau para toda obra' do SQL!"
    }
  },
  {
    "id": "q_engsw_b3_012",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Transações - Deadlock",
    "difficulty": "Médio",
    "statement": "Um 'Deadlock' (Impasse) em um banco de dados ocorre quando:",
    "options": {
      "A": "A internet cai durante um backup.",
      "B": "Duas ou mais transações estão esperando uma pela outra para liberar bloqueios (locks) em recursos, impedindo que qualquer uma prossiga.",
      "C": "O banco de dados processa as consultas rápido demais.",
      "D": "O usuário esquece a senha de acesso.",
      "E": "O servidor fica sem espaço em disco."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Deadlock é o 'abraço da morte'. A transação A trava a linha 1 e quer a 2. A transação B trava a linha 2 e quer a 1. Ninguém solta nada e o sistema trava. O banco costuma detectar isso e 'matar' uma das transações para liberar o fluxo.",
      "puloDoGato": "Solução de Deadlock: Tente sempre acessar as tabelas na mesma ordem em todas as suas transações.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é falta de storage.",
        "B": "Correta. Descrição clássica de conflito de recursos.",
        "C": "Incorreta. Problema de autenticação.",
        "D": "Incorreta. Isso seria o ideal.",
        "E": "Incorreta. Falha de conectividade."
      },
      "dicaDeOuro": "Deadlock = Dilema do Tostines: Eu não libero porque você não libera!"
    }
  },
  {
    "id": "q_engsw_b3_013",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Memória - Memória Virtual (Paginação)",
    "difficulty": "Difícil",
    "statement": "O conceito de Memória Virtual utilizando 'Paginação' permite que o sistema operacional:",
    "options": {
      "A": "Divida o monitor em várias páginas coloridas.",
      "B": "Imprima relatórios em papel de forma mais rápida.",
      "C": "Crie senhas mais difíceis para os arquivos.",
      "D": "Aumente a velocidade física do processador.",
      "E": "Execute programas cujas necessidades de memória superam a quantidade de memória física (RAM) disponível, utilizando o disco rígido como extensão."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A Paginação divide a memória em pedaços fixos (páginas). O SO mantém na RAM apenas o que está sendo usado agora. O resto fica no 'Swap' (Disco). Isso dá a ilusão de que o PC tem muito mais memória do que realmente tem.",
      "puloDoGato": "Thrashing = Quando o PC passa mais tempo trocando páginas entre Disco e RAM do que executando o programa (aquela travada clássica).",
      "cascasDeBanana": {
        "B": "Incorreta. Piada de hardware antigo.",
        "E": "Correta. Objetivo principal da memória virtual.",
        "A": "Incorreta. Piada visual.",
        "D": "Incorreta. Isso seria Overclocking.",
        "C": "Incorreta. Segurança, não gerenciamento de recursos."
      },
      "dicaDeOuro": "Memória Virtual = O truque de mágica do SO para rodar o que não cabe na RAM!"
    }
  },
  {
    "id": "q_engsw_b3_014",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "DNS - Domain Name System",
    "difficulty": "Fácil",
    "statement": "O serviço DNS tem como função primordial na internet:",
    "options": {
      "A": "Aumentar a velocidade do download de vídeos.",
      "B": "Proteger o computador contra vírus.",
      "C": "Permitir o acesso remoto via SSH.",
      "D": "Gerenciar o envio de e-mails de marketing.",
      "E": "Traduzir nomes de domínio amigáveis (ex: www.petrobras.com.br) em endereços IP (ex: 186.202.153.20)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O DNS é a 'lista telefônica' da internet. Humanos são bons com nomes, computadores são bons com números (IP). O DNS faz essa ponte.",
      "puloDoGato": "Se o seu DNS cai, você não consegue acessar 'facebook.com', mas se souber o IP dele, consegue entrar. O DNS é apenas um facilitador de nomes.",
      "cascasDeBanana": {
        "B": "Incorreta. Função de Antivírus/Firewall.",
        "E": "Correta. Função clássica de resolução de nomes.",
        "A": "Incorreta. Pode até ajudar a escolher o servidor mais próximo, mas não é a função básica.",
        "D": "Incorreta. Função de servidores SMTP.",
        "C": "Incorreta. Função do protocolo SSH."
      },
      "dicaDeOuro": "DNS = Google Maps dos IPs. Você diz onde quer ir pelo nome, ele te dá a coordenada."
    }
  },
  {
    "id": "q_engsw_b3_015",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "SQL - DDL (Data Definition Language)",
    "difficulty": "Médio",
    "statement": "Qual dos seguintes comandos SQL pertence à sublinguagem DDL (Data Definition Language)?",
    "options": {
      "A": "ALTER.",
      "B": "SELECT.",
      "C": "DELETE.",
      "D": "UPDATE.",
      "E": "INSERT."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "DDL mexe na ESTRUTURA (CREATE, ALTER, DROP, TRUNCATE). DML mexe nos DADOS (SELECT, INSERT, UPDATE, DELETE). Como ALTER muda a estrutura da tabela (adiciona colunas, etc), ele é DDL.",
      "puloDoGato": "Dica: DDL = Arquiteto (faz a casa). DML = Morador (mexe nos móveis).",
      "cascasDeBanana": {
        "B": "Incorreta. SELECT é DQL (Data Query Language).",
        "D": "Incorreta. UPDATE é DML.",
        "C": "Incorreta. DELETE é DML.",
        "A": "Correta. Comando estrutural.",
        "E": "Incorreta. INSERT é DML."
      },
      "dicaDeOuro": "DDL = Definição (Estrutura). DML = Manipulação (Conteúdo)."
    }
  },
  {
    "id": "q_engsw_b3_016",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Arquitetura de Software",
    "topic": "Microserviços - API Gateway",
    "difficulty": "Médio",
    "statement": "Em uma arquitetura de microserviços, o padrão 'API Gateway' atua como:",
    "options": {
      "A": "Um sistema de arquivos distribuído.",
      "B": "Uma ferramenta para escrever código JavaScript no servidor.",
      "C": "Um banco de dados centralizado para todos os serviços.",
      "D": "Um firewall físico que bloqueia o acesso à internet.",
      "E": "Um ponto de entrada único para todas as requisições dos clientes, encaminhando-as para os microserviços apropriados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O API Gateway resolve o problema do cliente ter que conhecer 50 URLs diferentes. Ele centraliza autenticação, log, limitação de taxa (rate limiting) e roteamento. O cliente fala com o Gateway, e o Gateway fala com os microserviços.",
      "puloDoGato": "Gateway = Recepcionista do prédio. Você diz com quem quer falar, e ela te encaminha.",
      "cascasDeBanana": {
        "C": "Incorreta. Microserviços devem ter bancos descentralizados (Database per Service).",
        "E": "Correta. Fachada única para o ecossistema de serviços.",
        "D": "Incorreta. Pode ter funções de segurança, mas não é apenas um firewall.",
        "B": "Incorreta. Isso seria o Node.js.",
        "A": "Incorreta. Isso seria algo como HDFS ou S3."
      },
      "dicaDeOuro": "API Gateway = Simplifica a vida do cliente e organiza a casa por dentro!"
    }
  },
  {
    "id": "q_engsw_b3_017",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Arquitetura de Software",
    "topic": "Mensageria e Eventos - Message Broker (Kafka/RabbitMQ)",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem de utilizar um 'Message Broker' (como RabbitMQ ou Kafka) para a comunicação entre microserviços?",
    "options": {
      "A": "Permitir o desacoplamento temporal e a comunicação assíncrona, onde o emissor não precisa esperar a resposta imediata do receptor.",
      "B": "Eliminar a necessidade de usar bancos de dados.",
      "C": "Reduzir o custo de energia dos servidores.",
      "D": "Aumentar a latência propositalmente.",
      "E": "Tornar a comunicação síncrona e obrigatória."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Com mensageria, se o serviço de e-mail estiver fora do ar, o serviço de compras coloca a mensagem na fila e continua trabalhando. Quando o e-mail voltar, ele processa a fila. Isso aumenta a resiliência e a escalabilidade do sistema.",
      "puloDoGato": "Assíncrono = 'Manda e esquece' (Fire and forget). O broker garante que a mensagem chegue eventualmente.",
      "cascasDeBanana": {
        "E": "Incorreta. O objetivo é justamente fugir do acoplamento síncrono (HTTP direto).",
        "A": "Correta. Base da arquitetura orientada a eventos (EDA).",
        "C": "Incorreta. Irrelevante.",
        "B": "Incorreta. Brokers não substituem persistência de dados de negócio.",
        "D": "Incorreta. O broker visa gerenciar a carga, não aumentar o atraso por prazer."
      },
      "dicaDeOuro": "Mensageria = WhatsApp para servidores. Eu mando, você lê quando puder."
    }
  },
  {
    "id": "q_engsw_b3_018",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Big Data - Data Warehouse vs Data Lake",
    "difficulty": "Médio",
    "statement": "Em ambientes de análise de dados, a principal diferença entre um 'Data Warehouse' (DW) e um 'Data Lake' é:",
    "options": {
      "A": "O DW armazena dados estruturados e processados (Schema-on-Write), enquanto o Data Lake armazena dados brutos em seu formato original (Schema-on-Read).",
      "B": "Não existe diferença técnica.",
      "C": "O DW armazena apenas arquivos de imagem, enquanto o Lake armazena texto.",
      "D": "O DW é usado por programadores e o Lake por secretárias.",
      "E": "O Data Lake é sempre pago, e o DW é sempre gratuito."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "DW é como uma biblioteca organizada: tudo tem seu lugar fixo e limpo. Data Lake é como um rio: você joga tudo lá (bruto) e só organiza quando for usar (análise). Lakes são ótimos para Big Data e Machine Learning.",
      "puloDoGato": "DW = Estruturado (SQL). Lake = Bruto (Arquivos, JSON, Logs, Imagens).",
      "cascasDeBanana": {
        "C": "Incorreta. Ambos podem armazenar diversos tipos, mas o foco do Lake é justamente a variedade 'bruta'.",
        "A": "Correta. Diferença fundamental de arquitetura de dados.",
        "E": "Incorreta. Ambos possuem custos de armazenamento e processamento.",
        "D": "Incorreta. DW é muito usado por analistas de BI, Lake por Cientistas de Dados.",
        "B": "Incorreta. São conceitos bem distintos."
      },
      "dicaDeOuro": "DW = Água filtrada e engarrafada. Data Lake = Represa de água bruta."
    }
  },
  {
    "id": "q_engsw_b3_019",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "BI e Analytics - Processo ETL",
    "difficulty": "Fácil",
    "statement": "No contexto de Business Intelligence (BI), a sigla ETL refere-se às etapas de:",
    "options": {
      "A": "Email, Text, Log.",
      "B": "Encrypt, Translate, Locate.",
      "C": "Execute, Test, Launch.",
      "D": "Edit, Transfer, Link.",
      "E": "Extract, Transform, Load (Extrair, Transformar, Carregar)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "ETL é o processo de mover dados da origem (sistemas operacionais) para o destino (DW). Extraímos do banco de vendas, Transformamos (limpamos nomes, somamos valores) e Carregamos no banco de análise.",
      "puloDoGato": "Atualmente existe também o ELT (Carrega primeiro e transforma dentro do banco de dados), comum em nuvem.",
      "cascasDeBanana": {
        "D": "Incorreta. Termos inventados.",
        "E": "Correta. Ciclo de vida clássico da integração de dados.",
        "A": "Incorreta. Termos inventados.",
        "C": "Incorreta. Ciclo de software, não de dados.",
        "B": "Incorreta. Termos inventados."
      },
      "dicaDeOuro": "ETL = A esteira de produção que limpa e organiza os dados para o chefe ver."
    }
  },
  {
    "id": "q_engsw_b3_026",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Segurança da Informação",
    "topic": "Gestão de Identidade - OAuth2 e OIDC",
    "difficulty": "Difícil",
    "statement": "O protocolo OAuth 2.0 é amplamente utilizado na internet para:",
    "options": {
      "A": "Aumentar a velocidade do processador.",
      "B": "Bloquear o acesso de menores de idade a sites de notícias.",
      "C": "Validar se um e-mail é spam.",
      "D": "Autorização de acesso a recursos de terceiros sem a necessidade de compartilhar a senha do usuário (ex: 'Logar com Google').",
      "E": "Criptografar arquivos de imagem no disco rígido."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "OAuth2 gera 'Tokens' de acesso. O site A pede permissão para acessar suas fotos no site B. Você autoriza no site B, e o site B dá uma 'chave temporária' (Token) para o site A. A senha nunca sai do site B.",
      "puloDoGato": "OAuth2 é para AUTORIZAÇÃO (O que posso fazer). OIDC (OpenID Connect) é para AUTENTICAÇÃO (Quem eu sou).",
      "cascasDeBanana": {
        "E": "Incorreta. Função de algoritmos de criptografia como AES.",
        "D": "Correta. Base da federação de identidade moderna.",
        "B": "Incorreta. Função de controle parental/filtros.",
        "A": "Incorreta. Não tem relação.",
        "C": "Incorreta. Função de filtros anti-spam."
      },
      "dicaDeOuro": "OAuth2 = Dar a chave reserva do carro para o manobrista, sem dar a chave da sua casa."
    }
  },
  {
    "id": "q_engsw_b3_029",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Casos de Uso (Include vs Extend)",
    "difficulty": "Médio",
    "statement": "No Diagrama de Casos de Uso da UML, a relação de 'Extend' (Extensão) entre dois casos de uso indica que:",
    "options": {
      "A": "O ator deve ser deletado do diagrama.",
      "B": "Os dois casos de uso são exatamente iguais.",
      "C": "O caso de uso base obrigatoriamente chama o caso de uso estendido em todas as execuções.",
      "D": "O caso de uso estendido é opcional e ocorre apenas sob certas condições específicas (fluxo de exceção ou opcional).",
      "E": "O sistema deve ser reiniciado."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Include = Obrigatório (ex: 'Sacar Dinheiro' SEMPRE inclui 'Validar Senha'). Extend = Opcional (ex: 'Comprar Passagem' PODE estender para 'Contratar Seguro' se o usuário quiser).",
      "puloDoGato": "Include -> A seta aponta para o que é incluído. Extend -> A seta aponta para o caso base.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso descreve o 'Include'.",
        "D": "Correta. Define condicionalidade e opcionalidade.",
        "B": "Incorreta. São funcionalidades distintas.",
        "A": "Incorreta. Nonsense.",
        "E": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "Include = Tem que ter. Extend = Talvez tenha (se rolar a condição)."
    }
  },
  {
    "id": "q_engsw_b3_030",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Sequência",
    "difficulty": "Médio",
    "statement": "Em um Diagrama de Sequência da UML, o que as linhas verticais tracejadas abaixo de cada objeto representam?",
    "options": {
      "A": "A conexão física de rede entre os computadores.",
      "B": "O local onde o objeto foi deletado do disco.",
      "C": "O tempo de vida (lifeline) do objeto durante a interação.",
      "D": "O nome da classe em negrito.",
      "E": "A quantidade de memória RAM usada pelo objeto."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A Lifeline (Linha de Vida) mostra a existência do objeto no tempo. As setas horizontais entre as lifelines mostram as mensagens (chamadas de métodos) trocadas entre eles.",
      "puloDoGato": "Um retângulo estreito sobre a lifeline indica que o objeto está 'ativo' (executando um processo) naquele momento.",
      "cascasDeBanana": {
        "C": "Correta. Conceito fundamental de diagramas dinâmicos.",
        "A": "Incorreta. Isso seria um Diagrama de Implantação.",
        "E": "Incorreta. UML não mede recursos de hardware assim.",
        "B": "Incorreta. O fim da vida é marcado com um 'X' no final da linha.",
        "D": "Incorreta. O nome fica no topo, dentro de um retângulo."
      },
      "dicaDeOuro": "Diagrama de Sequência = O 'quem fala com quem' em ordem cronológica."
    }
  },
  {
    "id": "q_engsw_b3_031",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Balanceamento de Carga - Algoritmos",
    "difficulty": "Médio",
    "statement": "O algoritmo de balanceamento de carga que distribui as requisições sequencialmente para cada servidor em uma lista circular, sem levar em conta a carga atual de cada nó, é conhecido como:",
    "options": {
      "A": "Random Placement.",
      "B": "Weighted Round Robin.",
      "C": "IP Hash.",
      "D": "Least Connections.",
      "E": "Round Robin."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Round Robin é o algoritmo mais simples. Ele manda a req 1 pro servidor A, a req 2 pro B, a req 3 pro C, e depois volta pro A. É justo se os servidores forem idênticos, mas ineficiente se um servidor for mais fraco que o outro.",
      "puloDoGato": "Round Robin = Rodízio sequencial. Se a questão falar em 'conexões ativas', a resposta seria Least Connections.",
      "cascasDeBanana": {
        "D": "Incorreta. Foca em quem tem menos gente sendo atendida agora.",
        "E": "Correta. Distribuição circular simples.",
        "B": "Incorreta. Round robin que leva em conta a 'potência' (peso) de cada servidor.",
        "C": "Incorreta. Garante que o mesmo IP caia sempre no mesmo servidor (afinidade).",
        "A": "Incorreta. Distribuição aleatória."
      },
      "dicaDeOuro": "Round Robin = O algoritmo do 'Próximo da fila'!"
    }
  },
  {
    "id": "q_engsw_b3_032",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Segurança da Informação",
    "topic": "OWASP Top 10 - XSS (Cross-Site Scripting)",
    "difficulty": "Médio",
    "statement": "Qual a característica principal de um ataque de Cross-Site Scripting (XSS)?",
    "options": {
      "A": "O atacante infecta o servidor com um vírus que apaga o disco rígido.",
      "B": "O atacante intercepta a comunicação Wi-Fi do usuário.",
      "C": "O atacante derruba o servidor enviando milhares de requisições por segundo.",
      "D": "O atacante consegue injetar e executar scripts maliciosos (geralmente JavaScript) no navegador de outros usuários através de uma aplicação web vulnerável.",
      "E": "O atacante descobre a senha do banco de dados por força bruta."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "No XSS, o alvo é o USUÁRIO, não o servidor diretamente. O atacante coloca um script em um comentário de blog, por exemplo. Quando você lê o comentário, o script roda no SEU navegador e pode roubar seu cookie de sessão.",
      "puloDoGato": "XSS = Execução de JS no navegador da vítima. Prevenção: Sanitizar entradas e usar Content Security Policy (CSP).",
      "cascasDeBanana": {
        "D": "Correta. Definição clássica de injeção de script.",
        "C": "Incorreta. Isso é um ataque de DoS/DDoS.",
        "E": "Incorreta. Isso é Brute Force.",
        "B": "Incorreta. Isso é Man-in-the-Middle (MitM).",
        "A": "Incorreta. Isso seria um Malware/Ransomware no servidor."
      },
      "dicaDeOuro": "XSS = O seu site servindo de hospedeiro para o vírus do atacante atacar seus clientes."
    }
  },
  {
    "id": "q_engsw_b3_033",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Segurança da Informação",
    "topic": "OWASP Top 10 - Broken Access Control",
    "difficulty": "Médio",
    "statement": "Uma falha de 'Broken Access Control' (Controle de Acesso Quebrado) ocorre quando:",
    "options": {
      "A": "Um usuário consegue acessar funcionalidades ou dados que deveriam estar fora de suas permissões (ex: um usuário comum acessando a página de admin).",
      "B": "O firewall do servidor está desligado.",
      "C": "A senha do usuário expirou.",
      "D": "O banco de dados não tem backup.",
      "E": "O servidor de e-mail está lento."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Atualmente é o #1 do OWASP Top 10. Acontece quando o sistema não verifica no SERVIDOR se o usuário tem direito de fazer aquilo. Ex: Mudar o ID na URL para ver o perfil de outra pessoa.",
      "puloDoGato": "Regra de ouro: Nunca confie no cliente. Sempre valide as permissões no back-end antes de entregar o dado.",
      "cascasDeBanana": {
        "B": "Incorreta. Problema de infra, não necessariamente de lógica de acesso da app.",
        "A": "Correta. Violação do princípio do privilégio mínimo.",
        "C": "Incorreta. Regra de negócio de autenticação comum.",
        "E": "Incorreta. Problema de performance.",
        "D": "Incorreta. Problema de disponibilidade/continuidade."
      },
      "dicaDeOuro": "Broken Access Control = Porta aberta onde deveria haver uma tranca."
    }
  },
  {
    "id": "q_engsw_b3_036",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Replicação de Dados",
    "difficulty": "Médio",
    "statement": "Qual o principal objetivo de utilizar uma arquitetura de replicação de banco de dados do tipo 'Master-Slave' (Mestre-Escravo)?",
    "options": {
      "A": "Melhorar a escalabilidade de LEITURA, distribuindo as consultas de consulta para os 'Slaves' e mantendo a ESCRITA apenas no 'Master'.",
      "B": "Reduzir o tamanho dos dados armazenados.",
      "C": "Eliminar a necessidade de indexação.",
      "D": "Permitir que o banco de dados funcione sem energia elétrica.",
      "E": "Obrigar o uso de duas linguagens SQL diferentes."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A maioria dos apps web lê muito mais do que escreve. No Master-Slave, o Master recebe as alterações e as replica para os Slaves. Se o seu site cresce, você coloca mais Slaves para aguentar as consultas, desafogando o Master.",
      "puloDoGato": "Se o Master cair, um Slave pode ser promovido a Master (High Availability).",
      "cascasDeBanana": {
        "D": "Incorreta. Hardware ainda precisa de energia.",
        "A": "Correta. Estratégia clássica de escalabilidade horizontal.",
        "E": "Incorreta. O dialeto SQL permanece o mesmo.",
        "B": "Incorreta. A replicação gera duplicidade de dados, aumentando o armazenamento.",
        "C": "Incorreta. Índices continuam vitais em todos os nós."
      },
      "dicaDeOuro": "Master-Slave = Escreva em um, leia em muitos!"
    }
  },
  {
    "id": "q_engsw_b3_037",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Banco de Dados",
    "topic": "Escalabilidade - Sharding",
    "difficulty": "Difícil",
    "statement": "O conceito de 'Sharding' (Fragmentação) em bancos de dados consiste em:",
    "options": {
      "A": "Deletar os dados mais antigos automaticamente.",
      "B": "Dividir uma tabela grande horizontalmente entre vários servidores diferentes, de modo que cada servidor contenha apenas uma parte das linhas.",
      "C": "Converter todos os dados para o formato JSON.",
      "D": "Usar apenas letras maiúsculas nas tabelas.",
      "E": "Criar uma cópia exata do banco em outro servidor."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Diferente da replicação (onde todos têm tudo), no Sharding cada servidor tem um pedaço. Ex: Clientes de A-M no Servidor 1, N-Z no Servidor 2. Isso permite escalar a ESCRITA, pois cada servidor cuida de uma carga menor.",
      "puloDoGato": "Sharding é complexo de implementar. Use apenas quando o seu banco de dados Master não aguentar mais o volume de dados em um único disco/CPU.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Replicação.",
        "B": "Correta. Divisão horizontal para escalabilidade massiva.",
        "C": "Incorreta. Isso seria mudança de formato, não de distribuição.",
        "D": "Incorreta. Isso é limpeza/expurgo de dados.",
        "E": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "Sharding = Dividir para conquistar (em servidores diferentes)!"
    }
  },
  {
    "id": "q_engsw_b3_041",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Estados (State Machine)",
    "difficulty": "Médio",
    "statement": "O Diagrama de Estados da UML é mais indicado para modelar:",
    "options": {
      "A": "O ciclo de vida de um objeto reativo, mostrando as transições entre estados disparadas por eventos.",
      "B": "O organograma da empresa.",
      "C": "A fiação elétrica do data center.",
      "D": "A estrutura de tabelas de um banco de dados.",
      "E": "O fluxo de caixa do projeto."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Pense em um 'Pedido': Criado -> Pago -> Enviado -> Entregue. O diagrama de estados mostra quais eventos (ex: 'Confirmar Pagamento') levam o objeto de um estado para outro e quais transições são proibidas (ex: não pode ir de 'Criado' para 'Entregue' direto).",
      "puloDoGato": "Use diagramas de estado para lógica complexa de negócios (workflows).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria o Diagrama de Classes ou Modelo ER.",
        "A": "Correta. Foco no comportamento dinâmico e estados discretos.",
        "B": "Incorreta. UML não é para RH.",
        "C": "Incorreta. Isso é engenharia elétrica/infra.",
        "E": "Incorreta. Isso é gestão financeira."
      },
      "dicaDeOuro": "Diagrama de Estados = O mapa de 'Onde eu estou' e 'Para onde posso ir'."
    }
  },
  {
    "id": "q_engsw_b3_042",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Componentes",
    "difficulty": "Médio",
    "statement": "Qual o foco principal do Diagrama de Componentes na UML?",
    "options": {
      "A": "Descrever a interface visual do usuário (UI).",
      "B": "Representar a organização estrutural e as dependências entre os módulos de software (componentes) do sistema.",
      "C": "Desenhar os ícones que serão usados no aplicativo.",
      "D": "Mostrar a ordem de execução das tarefas no tempo.",
      "E": "Listar os nomes de todos os programadores do projeto."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É um diagrama de alto nível. Ele mostra como o sistema é dividido fisicamente (DLLs, Jars, microserviços) e como eles se comunicam através de interfaces (as famosas 'tomadas' e 'bolinhas' da UML).",
      "puloDoGato": "Dica: Diagrama de Classes = Design de Código. Diagrama de Componentes = Arquitetura de Módulos.",
      "cascasDeBanana": {
        "A": "Incorreta. UML não define prototipagem de UI.",
        "B": "Correta. Visão de implementação e pacotes.",
        "C": "Incorreta. Irrelevante para o modelo técnico.",
        "D": "Incorreta. Isso seria o Diagrama de Sequência ou Atividades.",
        "E": "Incorreta. Design gráfico, não engenharia."
      },
      "dicaDeOuro": "Componentes = As grandes peças que formam o quebra-cabeça do sistema."
    }
  },
  {
    "id": "q_engsw_b3_045",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Modelos de Referência - OSI vs TCP/IP",
    "difficulty": "Médio",
    "statement": "Comparando o modelo OSI (7 camadas) com o modelo TCP/IP (4 camadas clássicas), as camadas de Sessão, Apresentação e Aplicação do modelo OSI correspondem, no TCP/IP, à camada de:",
    "options": {
      "A": "Internet.",
      "B": "Aplicação.",
      "C": "Interface de Rede.",
      "D": "Transporte.",
      "E": "Física."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O TCP/IP é mais prático. Ele junta tudo que é relativo ao serviço final (formatação, sessão, protocolo de app) em uma única camada chamada Aplicação. No OSI, isso é separado por preciosismo acadêmico.",
      "puloDoGato": "Dica de prova: OSI 5, 6 e 7 = TCP/IP 4.",
      "cascasDeBanana": {
        "C": "Incorreta. Equivale às camadas 1 e 2 do OSI.",
        "A": "Incorreta. Equivale à camada 3 (Rede) do OSI.",
        "D": "Incorreta. Equivale à camada 4 do OSI.",
        "B": "Correta. Consolidação das camadas superiores.",
        "E": "Incorreta. Camada 1 do OSI."
      },
      "dicaDeOuro": "TCP/IP é o modelo 'da vida real'. OSI é o modelo 'do livro'."
    }
  },
  {
    "id": "q_engsw_b3_046",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - IPv6",
    "difficulty": "Fácil",
    "statement": "Qual a principal motivação para a migração do protocolo IPv4 para o IPv6?",
    "options": {
      "A": "O esgotamento dos endereços IPv4 disponíveis (limite de ~4,3 bilhões) e a necessidade de um espaço de endereçamento muito maior para a Internet das Coisas (IoT).",
      "B": "Permitir que apenas computadores novos acessem a web.",
      "C": "Mudar a cor dos cabos de rede.",
      "D": "Eliminar a necessidade de roteadores.",
      "E": "Tornar a internet paga por minuto."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O IPv4 usa 32 bits (4 bilhões de endereços). Com bilhões de pessoas e dispositivos, os IPs acabaram. O IPv6 usa 128 bits, o que dá 340 undecilhões de endereços (dá pra dar um IP para cada grão de areia da Terra).",
      "puloDoGato": "IPv6 também trouxe melhorias nativas em segurança (IPsec) e autoconfiguração.",
      "cascasDeBanana": {
        "C": "Incorreta. Irrelevante.",
        "A": "Correta. Resolução da crise de endereçamento global.",
        "E": "Incorreta. Modelo de negócio, não protocolo.",
        "D": "Incorreta. Roteadores continuam essenciais.",
        "B": "Incorreta. Existem técnicas de transição (Dual Stack, Tunneling)."
      },
      "dicaDeOuro": "IPv6 = Endereço para todo mundo e para tudo, para sempre."
    }
  },
  {
    "id": "q_engsw_b3_049",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Metodologias Ágeis",
    "topic": "User Stories - Critérios INVEST",
    "difficulty": "Difícil",
    "statement": "No contexto de User Stories, o acrônimo INVEST define características de uma boa história. O que a letra 'S' representa?",
    "options": {
      "A": "Security (Segura).",
      "B": "Small (Pequena - deve poder ser feita em poucos dias).",
      "C": "Simple (Simples).",
      "D": "Shared (Compartilhada).",
      "E": "Speed (Rápida)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "I (Independent), N (Negotiable), V (Valuable), E (Estimable), S (Small), T (Testable). Uma história 'Small' é fundamental para que ela caiba dentro de uma Sprint. Se for muito grande (Epic), deve ser dividida.",
      "puloDoGato": "História pequena = Menos incerteza = Melhor estimativa.",
      "cascasDeBanana": {
        "A": "Incorreta. Requisito não funcional, não faz parte do INVEST.",
        "B": "Correta. Facilita o fluxo de entrega (Flow).",
        "C": "Incorreta. Termo genérico.",
        "D": "Incorreta. Simplicidade é boa, mas o S foca no TAMANHO.",
        "E": "Incorreta. Termo inventado para o acrônimo."
      },
      "dicaDeOuro": "INVEST = O checklist para saber se a sua história de usuário presta."
    }
  },
  {
    "id": "q_engsw_b3_050",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Eventos (Retrospective)",
    "difficulty": "Médio",
    "statement": "Qual o foco principal do evento 'Sprint Retrospective' no Scrum?",
    "options": {
      "A": "Demonstrar as funcionalidades prontas para o cliente e stakeholders.",
      "B": "Escrever o código que faltou na Sprint.",
      "C": "Demitir o membro menos produtivo da equipe.",
      "D": "Inspecionar como a última Sprint correu em relação às pessoas, relacionamentos, processos e ferramentas, visando a melhoria contínua da equipe.",
      "E": "Estimar o tempo que cada tarefa vai levar."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Review = Olhar para o PRODUTO (o que fizemos). Retrospective = Olhar para o PROCESSO (como fizemos). É o momento de lavar a roupa suja e decidir o que vamos melhorar para a próxima Sprint.",
      "puloDoGato": "A Retrospectiva ocorre APÓS a Review e ANTES da próxima Planning.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é a Sprint Review.",
        "D": "Correta. Foco no aperfeiçoamento interno da equipe.",
        "E": "Incorreta. Isso ocorre na Sprint Planning ou Refinement.",
        "B": "Incorreta. Evento de inspeção, não de execução.",
        "C": "Incorreta. Scrum foca em segurança psicológica e colaboração."
      },
      "dicaDeOuro": "Retrospectiva = A reunião para a equipe aprender com os próprios erros."
    }
  },
  {
    "id": "q_f3_031",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Papéis (Product Owner)",
    "difficulty": "Fácil",
    "statement": "No framework Scrum, quem é o único responsável por gerenciar o Product Backlog, o que inclui expressar claramente os itens e priorizá-los para atingir as metas da melhor forma?",
    "options": {
      "A": "Product Owner (PO).",
      "B": "Scrum Master.",
      "C": "Gerente de Projetos.",
      "D": "Developers (Time de Desenvolvimento).",
      "E": "Stakeholders."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O PO é o 'dono do valor'. Ele decide o QUE deve ser feito e em que ORDEM. Ele não manda em como o time trabalha (isso é do time), mas ele manda na lista de desejos (Backlog).",
      "puloDoGato": "PO = Maximiza o valor do produto. Scrum Master = Maximiza a eficácia do Scrum.",
      "cascasDeBanana": {
        "B": "Incorreta. O Scrum Master remove impedimentos e ensina o processo.",
        "D": "Incorreta. O time decide como realizar o trabalho técnico.",
        "A": "Correta. Responsabilidade exclusiva do PO.",
        "E": "Incorreta. Stakeholders influenciam, mas o PO decide.",
        "C": "Incorreta. O papel de Gerente de Projetos não existe formalmente no Scrum Guide."
      },
      "dicaDeOuro": "Backlog e Priorização? Falou com o PO."
    }
  },
  {
    "id": "q_f3_032",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Eventos (Daily Scrum)",
    "difficulty": "Fácil",
    "statement": "Qual é o limite de tempo (Time-box) recomendado para a reunião diária (Daily Scrum)?",
    "options": {
      "A": "Não há limite de tempo.",
      "B": "30 minutos.",
      "C": "15 minutos.",
      "D": "60 minutos.",
      "E": "5 minutos."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A Daily é para alinhamento rápido, não para resolver problemas técnicos profundos. 15 minutos é o tempo padrão para manter o foco e a energia.",
      "puloDoGato": "Passou de 15 min? Provavelmente estão discutindo detalhes técnicos que deveriam ser resolvidos depois da reunião.",
      "cascasDeBanana": {
        "A": "Incorreta. Muito longa para uma reunião diária.",
        "B": "Incorreta. Inviável diariamente.",
        "C": "Correta. Padrão definido no Scrum Guide.",
        "D": "Incorreta. Muito curta para um alinhamento mínimo.",
        "E": "Incorreta. Todo evento Scrum tem time-box."
      },
      "dicaDeOuro": "Daily = 15 minutos de pé para não cansar."
    }
  },
  {
    "id": "q_f3_033",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Artefatos (Definition of Done)",
    "difficulty": "Médio",
    "statement": "O que é a 'Definição de Pronto' (Definition of Done - DoD) no Scrum?",
    "options": {
      "A": "O encerramento do contrato com a empresa.",
      "B": "O momento em que o Product Owner assina o contrato.",
      "C": "Uma descrição formal do estado do Incremento quando ele atende às medidas de qualidade exigidas para o produto.",
      "D": "Uma lista de desejos do cliente que ainda não foi aprovada.",
      "E": "Uma estimativa de quantas horas faltam para terminar o projeto."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O DoD é o combinado de qualidade. Para dizer que algo está 'Pronto', ele passou por testes? Code review? Documentação? Se sim, está no DoD. Isso evita que o time entregue algo 'mais ou menos'.",
      "puloDoGato": "DoD = Transparência. Todo mundo sabe o que significa 'terminado'.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria o Backlog.",
        "C": "Correta. Garante a qualidade e o entendimento compartilhado.",
        "B": "Incorreta. DoD é um conceito técnico/processual do time.",
        "E": "Incorreta. Isso seria medição de esforço.",
        "A": "Incorreta. Nada a ver."
      },
      "dicaDeOuro": "DoD é o checklist de qualidade do time."
    }
  },
  {
    "id": "q_f3_034",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Kanban - Princípios (WIP Limit)",
    "difficulty": "Médio",
    "statement": "No método Kanban, qual o objetivo principal de se estabelecer um Limite de Trabalho em Progresso (WIP Limit)?",
    "options": {
      "A": "Evitar a sobrecarga do sistema, expor gargalos e melhorar o fluxo (throughput), focando em terminar tarefas antes de começar novas.",
      "B": "Impedir que o cliente peça novas funcionalidades.",
      "C": "Garantir que todos os desenvolvedores trabalhem em 5 tarefas ao mesmo tempo.",
      "D": "Aumentar o número de reuniões diárias.",
      "E": "Reduzir o salário dos colaboradores que trabalham pouco."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "WIP Limit é o 'Pare de começar, comece a terminar'. Se você tem muita coisa aberta e nada fechado, você não está entregando valor, está apenas gerando estoque de trabalho. O limite força o time a resolver os problemas que estão travando as tarefas.",
      "puloDoGato": "Menos WIP = Menos Context Switching = Mais Velocidade Real.",
      "cascasDeBanana": {
        "C": "Incorreta. O objetivo é justamente o oposto (focar em poucas tarefas).",
        "A": "Correta. Conceito central do Kanban para eficiência de fluxo.",
        "D": "Incorreta. Kanban foca em fluxo, não em rituais fixos como o Scrum.",
        "B": "Incorreta. O cliente pode pedir, mas o sistema só absorve o que aguenta.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "WIP Limit = Foco total em 'Dar o Check'."
    }
  },
  {
    "id": "q_f3_035",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "XP (Extreme Programming) - Práticas",
    "difficulty": "Médio",
    "statement": "Qual prática do XP (Extreme Programming) envolve dois programadores trabalhando juntos em um único computador para melhorar a qualidade do código e compartilhar conhecimento?",
    "options": {
      "A": "Pair Programming (Programação em Par).",
      "B": "Refactoring.",
      "C": "Continuous Integration (CI).",
      "D": "Collective Ownership.",
      "E": "Test Driven Development (TDD)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Pair Programming: Um no teclado (Piloto) e outro olhando o código de fora (Co-piloto/Navegador). Ajuda a pegar erros na hora e faz o conhecimento do sistema não ficar preso na cabeça de uma pessoa só.",
      "puloDoGato": "Duas cabeças pensam melhor que uma e revisam o código em tempo real.",
      "cascasDeBanana": {
        "E": "Incorreta. TDD é sobre escrever testes antes do código.",
        "C": "Incorreta. CI é sobre integrar código frequentemente.",
        "A": "Correta. Prática icônica do XP.",
        "B": "Incorreta. Melhoria interna do código sem alterar comportamento.",
        "D": "Incorreta. É o conceito de que todos são donos de todo o código."
      },
      "dicaDeOuro": "Par de olhos extra? Pair Programming."
    }
  },
  {
    "id": "q_f3_036",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Sprint Planning",
    "difficulty": "Fácil",
    "statement": "Durante a Sprint Planning, quem é responsável por selecionar os itens do Product Backlog que serão trabalhados na Sprint?",
    "options": {
      "A": "Os Stakeholders externos.",
      "B": "O Scrum Team (Time Scrum) de forma colaborativa, com os Developers estimando o que conseguem entregar.",
      "C": "O Scrum Master sozinho.",
      "D": "O CEO da empresa.",
      "E": "Apenas o Product Owner."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O PO diz o que é importante, mas o time de desenvolvimento (Developers) é quem sabe o tamanho do passo que consegue dar. É um acordo: o PO traz as prioridades e o time puxa o que cabe no balde da Sprint.",
      "puloDoGato": "O time é auto-gerenciável. Ninguém 'empurra' trabalho para eles; eles 'puxam' o trabalho.",
      "cascasDeBanana": {
        "A": "Incorreta. O PO não pode forçar o time a aceitar mais trabalho do que aguentam.",
        "B": "Correta. É um processo de negociação e estimativa mútua.",
        "C": "Incorreta. Papel hierárquico fora do processo Scrum.",
        "D": "Incorreta. O SM facilita, não decide o escopo.",
        "E": "Incorreta. Stakeholders não participam da decisão técnica da Sprint."
      },
      "dicaDeOuro": "Quem faz o trabalho é quem diz quanto trabalho cabe."
    }
  },
  {
    "id": "q_f3_037",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Lean Software Development - Desperdícios (Waste)",
    "difficulty": "Difícil",
    "statement": "No Lean Software Development, qual dos itens abaixo é considerado um dos 7 tipos de desperdício (Muda)?",
    "options": {
      "A": "Trabalho parcialmente feito (Inventory/Work in Progress).",
      "B": "Reuniões de retrospectiva.",
      "C": "Refatoração de código legado.",
      "D": "Documentação técnica mínima necessária.",
      "E": "Escrever testes unitários."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Código que não está em produção é desperdício. Se você começou 10 tarefas e não terminou nenhuma, você tem 'estoque' parado. Outros desperdícios incluem: burocracia extra, troca de contexto, defeitos e funcionalidades que ninguém pediu.",
      "puloDoGato": "Lean = Eliminar desperdício para acelerar a entrega de valor.",
      "cascasDeBanana": {
        "E": "Incorreta. Testes evitam desperdício de retrabalho futuro.",
        "A": "Correta. Um dos maiores vilões do fluxo ágil.",
        "D": "Incorreta. Desperdício seria documentação EXCESIVA.",
        "B": "Incorreta. Essencial para melhoria contínua (Kaizen).",
        "C": "Incorreta. Previne débito técnico."
      },
      "dicaDeOuro": "Tarefa pela metade = Dinheiro jogado fora."
    }
  },
  {
    "id": "q_f3_038",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Sprint Retrospective",
    "difficulty": "Fácil",
    "statement": "Qual o objetivo principal da Sprint Retrospective?",
    "options": {
      "A": "Inspecionar como a última Sprint ocorreu em relação às pessoas, relacionamentos, processos e ferramentas, visando melhoria contínua.",
      "B": "Punir os desenvolvedores que não entregaram suas tarefas no prazo.",
      "C": "Definir o orçamento total do projeto para o próximo ano.",
      "D": "Demonstrar o produto funcionando para os clientes e receber feedback sobre o software.",
      "E": "Planejar as tarefas técnicas da próxima Sprint."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Review = Olhar para o Produto (O que fizemos?). Retrospective = Olhar para o Processo (Como trabalhamos?). É o momento de lavar a roupa suja e decidir como ser um time melhor na próxima volta.",
      "puloDoGato": "Retrospectiva é sobre o TIME. Melhoria contínua (Kaizen).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é o objetivo da Sprint Review.",
        "E": "Incorreta. Isso ocorre na Sprint Planning.",
        "A": "Correta. Foco em processo e pessoas.",
        "B": "Incorreta. O Scrum não prega a cultura da culpa (Blame Culture).",
        "C": "Incorreta. Fora do escopo do evento."
      },
      "dicaDeOuro": "Retrô = Olhar no espelho para melhorar amanhã."
    }
  },
  {
    "id": "q_f3_039",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Métricas Ágeis - Velocity",
    "difficulty": "Médio",
    "statement": "No Scrum, o que representa a métrica de 'Velocidade' (Velocity) do time?",
    "options": {
      "A": "O tempo que leva para um desenvolvedor escrever uma linha de código.",
      "B": "A quantidade de horas extras trabalhadas no mês.",
      "C": "A média da quantidade de trabalho (geralmente em Story Points) que o time entrega em cada Sprint.",
      "D": "A velocidade da conexão de internet do escritório.",
      "E": "O número total de bugs encontrados em produção."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A velocidade serve para ajudar no planejamento. Se o time entregou 20, 22 e 18 pontos nas últimas Sprints, é provável que na próxima eles consigam entregar cerca de 20 pontos. Não é uma meta de produtividade, é uma ferramenta de previsão.",
      "puloDoGato": "Velocidade é do TIME, não se compara times diferentes usando essa métrica.",
      "cascasDeBanana": {
        "D": "Incorreta. Hardware.",
        "C": "Correta. Ajuda a prever datas de entrega baseadas em dados históricos.",
        "E": "Incorreta. Isso seria métrica de qualidade.",
        "B": "Incorreta. Horas extras indicam falha no planejamento ou processo.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Velocidade = Histórico para prever o futuro."
    }
  },
  {
    "id": "q_f3_040",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Agile Manifesto - Valores",
    "difficulty": "Fácil",
    "statement": "Segundo o Manifesto Ágil, o que é mais valorizado do que 'Seguir um Plano'?",
    "options": {
      "A": "Responder a mudanças.",
      "B": "Documentação abrangente.",
      "C": "Ganhar mais dinheiro.",
      "D": "Negociação de contratos.",
      "E": "Processos e ferramentas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Manifesto diz: 'Valorizamos responder a mudanças MAIS DO QUE seguir um plano'. Não significa que não existam planos, mas que ser flexível quando o cenário muda é o que traz sucesso no mundo moderno.",
      "puloDoGato": "Indivíduos e interações > Processos e ferramentas. Software em funcionamento > Documentação. Colaboração com o cliente > Negociação de contratos. Responder a mudanças > Seguir um plano.",
      "cascasDeBanana": {
        "A": "Correta. Um dos 4 valores fundamentais.",
        "B": "Incorreta. O manifesto diz o contrário.",
        "C": "Incorreta. Colaboração é preferida.",
        "D": "Incorreta. Indivíduos são preferidos.",
        "E": "Incorreta. Irrelevante para os valores ágeis."
      },
      "dicaDeOuro": "Ágil é ser resiliente à mudança."
    }
  },
  {
    "id": "q_f3_041",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Técnicas de Elicitação - Brainstorming",
    "difficulty": "Fácil",
    "statement": "Qual a regra fundamental de uma sessão de Brainstorming para elicitação de requisitos?",
    "options": {
      "A": "Cada ideia deve ser criticada e analisada tecnicamente na hora.",
      "B": "Nenhuma ideia deve ser criticada ou julgada inicialmente, priorizando a quantidade e a criatividade no primeiro momento.",
      "C": "Apenas o gerente do projeto pode falar.",
      "D": "As ideias devem ser escritas em código Java.",
      "E": "A sessão deve durar no mínimo 8 horas seguidas."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "No Brainstorming, queremos o 'toró de ideias'. Se você critica uma ideia absurda logo de cara, você trava a criatividade das pessoas. Primeiro a gente joga tudo na mesa, depois a gente filtra o que é viável.",
      "puloDoGato": "Brainstorming = Quantidade gera Qualidade (depois do filtro).",
      "cascasDeBanana": {
        "A": "Incorreta. Crítica precoce mata o processo.",
        "B": "Correta. Essência da técnica para gerar inovação.",
        "C": "Incorreta. Deve ser democrático para extrair visões diferentes.",
        "D": "Incorreta. Requisitos são linguagem de negócio nessa fase.",
        "E": "Incorreta. Sessões muito longas causam fadiga mental."
      },
      "dicaDeOuro": "Brainstorming: Proibido dizer 'isso não vai funcionar' no início."
    }
  },
  {
    "id": "q_f3_042",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Tipos de Requisitos - Requisitos Não Funcionais (RNF)",
    "difficulty": "Médio",
    "statement": "Qual dos exemplos abaixo representa um Requisito Não Funcional (RNF) do tipo 'Disponibilidade'?",
    "options": {
      "A": "O sistema deve estar operacional e acessível 99,9% do tempo (SLO).",
      "B": "O sistema deve calcular o frete baseado no CEP.",
      "C": "O sistema deve emitir um relatório de vendas mensal em PDF.",
      "D": "O sistema deve enviar um e-mail de confirmação após a compra.",
      "E": "O sistema deve permitir o cadastro de novos usuários."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Requisito Funcional: O QUE o sistema faz (cadastrar, emitir, enviar). Requisito Não Funcional: COMO o sistema se comporta (rápido, seguro, disponível, usável).",
      "puloDoGato": "Funcional = Ação. Não Funcional = Atributo de Qualidade.",
      "cascasDeBanana": {
        "E": "Incorreta. Funcional.",
        "C": "Incorreta. Funcional.",
        "A": "Correta. Define uma restrição/qualidade do serviço.",
        "D": "Incorreta. Funcional.",
        "B": "Incorreta. Funcional (Lógica de negócio)."
      },
      "dicaDeOuro": "RNF geralmente termina em 'dade' (disponibilidade, segurança, portabilidade)."
    }
  },
  {
    "id": "q_f3_043",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise de Requisitos - Priorização (MoSCoW)",
    "difficulty": "Médio",
    "statement": "Na técnica de priorização MoSCoW, o que significa a categoria 'Must Have'?",
    "options": {
      "A": "Itens que seriam 'legais' ter, mas não são essenciais.",
      "B": "Itens que só serão feitos se sobrar tempo no final do ano.",
      "C": "Itens que foram descartados e nunca serão feitos.",
      "D": "Itens críticos que devem ser entregues para que o projeto seja considerado um sucesso (obrigatórios).",
      "E": "Itens que dependem de autorização do governo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "MoSCoW: Must have (Tenho que ter - obrigatório), Should have (Deveria ter - importante), Could have (Poderia ter - desejável), Won't have (Não teremos agora).",
      "puloDoGato": "Se um 'Must Have' não for entregue, o produto não serve para nada (ex: um app de banco que não faz transferência).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria o Could Have.",
        "D": "Correta. Define o escopo inegociável.",
        "C": "Incorreta. Isso seria o Won't Have.",
        "E": "Incorreta. Fora da definição técnica.",
        "B": "Incorreta. Isso seria o Could Have."
      },
      "dicaDeOuro": "Must = Sem isso não tem jogo."
    }
  },
  {
    "id": "q_f3_047",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK - Áreas de Conhecimento (Escopo)",
    "difficulty": "Médio",
    "statement": "De acordo com o PMBOK (6ª edição), o que compõe a 'Linha de Base do Escopo' (Scope Baseline)?",
    "options": {
      "A": "A lista de nomes de todos os stakeholders.",
      "B": "Apenas o cronograma do projeto.",
      "C": "O valor total do orçamento aprovado.",
      "D": "A Declaração do Escopo, a EAP (Estrutura Analítica do Projeto) e o Dicionário da EAP.",
      "E": "O código-fonte do sistema."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A Linha de Base é o 'combinado oficial'. Se mudar algo nessas três peças (Escopo, EAP ou Dicionário), você precisa de uma solicitação formal de mudança. É a âncora para saber se o projeto está saindo do trilho.",
      "puloDoGato": "Scope Baseline = Declaração + EAP + Dicionário. Guarde esse trio.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é linha de base do Cronograma.",
        "D": "Correta. Componentes clássicos da gestão de escopo.",
        "A": "Incorreta. Registro de Stakeholders.",
        "E": "Incorreta. Entregável técnico.",
        "C": "Incorreta. Isso é linha de base de Custos."
      },
      "dicaDeOuro": "EAP é a alma do gerenciamento de escopo."
    }
  },
  {
    "id": "q_f3_048",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK - Partes Interessadas (Stakeholders)",
    "difficulty": "Médio",
    "statement": "Na Matriz de Poder/Interesse de stakeholders, qual a estratégia recomendada para um stakeholder com ALTO PODER e BAIXO INTERESSE?",
    "options": {
      "A": "Manter Satisfeito.",
      "B": "Gerenciar de perto.",
      "C": "Ignorar completamente.",
      "D": "Manter Informado.",
      "E": "Monitorar apenas (mínimo esforço)."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Imagine o Diretor Financeiro que não liga para o seu projeto, mas se ele ficar bravo, ele corta a verba. Ele tem Poder, mas pouco Interesse. Estratégia: Mantenha-o satisfeito para que ele não se torne um obstáculo.",
      "puloDoGato": "Alto Poder + Alto Interesse = Gerenciar de Perto. Alto Poder + Baixo Interesse = Manter Satisfeito. Baixo Poder + Alto Interesse = Manter Informado.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é para Baixo Poder e Baixo Interesse.",
        "A": "Correta. Estratégia clássica da matriz.",
        "B": "Incorreta. Isso é para quem tem interesse também.",
        "D": "Incorreta. Isso é para quem tem interesse mas não tem poder (ex: o usuário final).",
        "C": "Incorreta. Nunca se ignora um stakeholder de alto poder."
      },
      "dicaDeOuro": "Poderoso e desinteressado? Deixe-o feliz e não incomode."
    }
  },
  {
    "id": "q_f3_049",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Caminho Crítico (Critical Path Method - CPM)",
    "difficulty": "Difícil",
    "statement": "O que caracteriza o 'Caminho Crítico' em um cronograma de projeto?",
    "options": {
      "A": "É a lista de tarefas que foram canceladas por falta de tempo.",
      "B": "É a sequência de atividades que determina a duração total do projeto, onde as tarefas possuem folga zero.",
      "C": "É o conjunto de tarefas que envolvem os desenvolvedores mais experientes.",
      "D": "É o caminho que o gerente de projeto faz até a empresa.",
      "E": "É a sequência de atividades com o menor custo financeiro."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Caminho crítico é o gargalo. Se qualquer tarefa ali atrasar 1 dia, o projeto inteiro atrasa 1 dia. Elas não têm 'gordura' (folga). É a trilha mais longa de dependências.",
      "puloDoGato": "Caminho Crítico = Folga Zero. Atrasou aqui, ferrou o prazo final.",
      "cascasDeBanana": {
        "A": "Incorreta. Não tem relação direta com custo.",
        "B": "Correta. Definição fundamental de planejamento de tempo.",
        "C": "Incorreta. Frequentemente é verdade, mas não é a definição técnica.",
        "D": "Incorreta. Semântica errada.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Caminho Crítico: Zero folga, perigo máximo de atraso."
    }
  },
  {
    "id": "q_f3_059",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Cronograma - Diagrama de Rede (Precedência)",
    "difficulty": "Médio",
    "statement": "Em um diagrama de rede de cronograma, a relação de precedência mais comum entre tarefas é:",
    "options": {
      "A": "Aleatória.",
      "B": "Término-Início (FS - Finish-to-Start).",
      "C": "Início-Início (SS).",
      "D": "Início-Término (SF).",
      "E": "Término-Término (FF)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Término-Início (FS): Você precisa terminar de cavar o buraco (Tarefa A) para poder começar a plantar a árvore (Tarefa B). É a lógica natural de 90% dos cronogramas.",
      "puloDoGato": "FS (Finish-to-Start) = O padrão de fábrica do Microsoft Project e Primavera.",
      "cascasDeBanana": {
        "A": "Incorreta. SS significa que começam juntas.",
        "B": "Correta. Relação lógica dominante.",
        "C": "Incorreta. Devem terminar juntas.",
        "D": "Incorreta. Relação rara (ex: trocas de turno).",
        "E": "Incorreta. Gestão exige ordem."
      },
      "dicaDeOuro": "Acaba uma, começa a outra: Término-Início."
    }
  },
  {
    "id": "q_f3_060",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Velocidade e Capacidade",
    "difficulty": "Médio",
    "statement": "O que deve ser feito se um Time Scrum perceber, no meio da Sprint, que não conseguirá entregar todos os itens selecionados?",
    "options": {
      "A": "Cancelar a Sprint imediatamente.",
      "B": "Entregar o código com bugs para cumprir o prazo.",
      "C": "Esconder a informação do PO até o dia da Sprint Review.",
      "D": "Trabalhar em regime de 24 horas por dia até terminar.",
      "E": "Negociar o escopo com o Product Owner, removendo itens menos prioritários para manter a meta da Sprint e a qualidade."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Transparência é um pilar do Scrum. Se o time viu que o 'passo foi maior que a perna', chama o PO, explica a situação e decide o que fica para a próxima. O importante é entregar algo de valor e com qualidade, não tudo pela metade ou quebrado.",
      "puloDoGato": "Qualidade não se negocia. Escopo sim.",
      "cascasDeBanana": {
        "D": "Incorreta. Prática insustentável (contrário ao ritmo sustentável do Ágil).",
        "E": "Correta. Abordagem profissional e transparente.",
        "A": "Incorreta. Só se a meta da Sprint perder o sentido.",
        "B": "Incorreta. Fere o Definition of Done.",
        "C": "Incorreta. Falta de transparência gera desconfiança."
      },
      "dicaDeOuro": "Não deu tempo? Transparência e negociação com o PO."
    }
  },
  {
    "id": "q_f3_133",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Elicitação - Workshop de Requisitos (JAD)",
    "difficulty": "Médio",
    "statement": "O que caracteriza a técnica de JAD (Joint Application Development) na elicitação de requisitos?",
    "options": {
      "A": "Sessões de trabalho intensivas e estruturadas envolvendo usuários, stakeholders e a equipe de desenvolvimento para definir requisitos de forma colaborativa.",
      "B": "O desenvolvedor trabalha sozinho em uma sala escura por uma semana.",
      "C": "A cópia de requisitos de sistemas concorrentes.",
      "D": "O uso de sorteios aleatórios para decidir quais funcionalidades serão criadas.",
      "E": "A leitura silenciosa de manuais técnicos durante 8 horas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "JAD é o 'mutirão' dos requisitos. Em vez de ficar mandando e-mail pra lá e pra cá, a gente junta todo mundo numa sala (ou call) com um facilitador. As decisões saem muito mais rápido porque quem manda e quem faz estão conversando ao mesmo tempo.",
      "puloDoGato": "JAD = Colaboração Intensa + Decisões em Tempo Real.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é o oposto do JAD.",
        "A": "Correta. Técnica clássica para acelerar a fase inicial de projetos.",
        "C": "Incorreta. Isso seria Benchmark/Engenharia Reversa.",
        "D": "Incorreta. Absurdo.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "JAD: Resolva as dúvidas com todo mundo na mesma sala."
    }
  },
  {
    "id": "q_f3_134",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise - Matriz de Rastreabilidade",
    "difficulty": "Difícil",
    "statement": "Para que serve uma 'Matriz de Rastreabilidade de Requisitos' (RTM)?",
    "options": {
      "A": "Para mapear cada requisito à sua origem (quem pediu) e ao seu destino (onde foi implementado no código e onde foi testado), garantindo que nada foi esquecido.",
      "B": "Para calcular o bônus financeiro da equipe de vendas.",
      "C": "Para converter a documentação de Word para PDF.",
      "D": "Para rastrear a localização física dos notebooks da empresa via GPS.",
      "E": "Para listar os endereços IP de todos os servidores de teste."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Rastreabilidade é saber o 'caminho das pedras'. Se o cliente pergunta 'Onde está aquela funcionalidade X que eu pedi?', você olha na matriz e diz: 'Tá aqui nesse requisito, que virou esse código e foi validado nesse teste'. Evita que requisitos 'sumam' durante o projeto.",
      "puloDoGato": "RTM = Fio condutor do projeto (De onde veio? Pra onde foi?).",
      "cascasDeBanana": {
        "D": "Incorreta. Absurdo físico.",
        "A": "Correta. Essencial para auditorias e projetos complexos de engenharia.",
        "B": "Incorreta. Métrica de RH/Financeiro.",
        "E": "Incorreta. Gestão de ativos de rede.",
        "C": "Incorreta. Tarefa administrativa simples."
      },
      "dicaDeOuro": "Rastreabilidade: Tenha prova de que você fez o que foi pedido."
    }
  },
  {
    "id": "q_f3_135",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Validação - Protótipos",
    "difficulty": "Fácil",
    "statement": "Qual a principal vantagem de usar protótipos na validação de requisitos?",
    "options": {
      "A": "Permite que o usuário visualize a interface e o fluxo antes da codificação real, facilitando a identificação de mal-entendidos e erros nos requisitos.",
      "B": "Garante que o código será escrito em uma única tarde.",
      "C": "Protótipos são feitos automaticamente pela impressora 3D da empresa.",
      "D": "O protótipo elimina a necessidade de fazer testes de software no futuro.",
      "E": "O protótipo já é o sistema final e pode ser vendido imediatamente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O papel aceita tudo, mas quando o usuário vê um desenho do sistema, ele fala: 'Ih, não era bem assim que eu queria'. É muito mais barato mudar um desenho no Figma do que mudar mil linhas de código Java depois.",
      "puloDoGato": "Prototipagem = Errar cedo e barato.",
      "cascasDeBanana": {
        "E": "Incorreta. Protótipos costumam ser 'cascas' vazias, sem lógica real atrás.",
        "A": "Correta. Ferramenta de comunicação poderosa entre TI e Negócio.",
        "D": "Incorreta. Testes de sistema continuam sendo necessários.",
        "C": "Incorreta. Refere-se a hardware, não interface de software.",
        "B": "Incorreta. Protótipo não acelera a escrita do código final, mas evita o retrabalho."
      },
      "dicaDeOuro": "Um desenho vale mais que mil reuniões."
    }
  },
  {
    "id": "q_f3_136",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Gestão - Mudança de Requisitos",
    "difficulty": "Médio",
    "statement": "Em um projeto de desenvolvimento de software, como deve ser tratada uma solicitação de mudança em um requisito que já foi aprovado (baselined)?",
    "options": {
      "A": "A mudança deve passar por um processo formal de análise de impacto (custo, prazo, riscos) e ser aprovada por um comitê ou pelo gestor do projeto.",
      "B": "A mudança deve ser implementada imediatamente, sem avisar ninguém.",
      "C": "Deve-se apagar o projeto todo e recomeçar do zero.",
      "D": "A mudança deve ser ignorada para não atrasar o projeto.",
      "E": "O programador deve cobrar um valor extra 'por fora' para o cliente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Mudança acontece, é normal. Mas você não pode simplesmente sair mudando. Precisa avisar: 'Olha, essa sua ideia nova é boa, mas vai custar mais 2 semanas e 10 mil reais'. O cliente decide se vale a pena.",
      "puloDoGato": "Gestão de Mudanças = Controle de Escopo + Análise de Impacto.",
      "cascasDeBanana": {
        "D": "Incorreta. Ignorar o cliente gera insatisfação e produtos inúteis.",
        "B": "Incorreta. Causa o caos no cronograma e no orçamento (Scope Creep).",
        "A": "Correta. Prática padrão de governança de projetos (PMBOK/Engenharia).",
        "E": "Incorreta. Absurdo ético.",
        "C": "Incorreta. Absurdo econômico."
      },
      "dicaDeOuro": "Mudança sem análise de impacto é receita para o fracasso."
    }
  },
  {
    "id": "q_f3_137",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Documentação - Casos de Uso (Use Cases)",
    "difficulty": "Médio",
    "statement": "Em um diagrama de Casos de Uso da UML, o que representa o 'Ator'?",
    "options": {
      "A": "Uma entidade externa (pessoa, outro sistema ou hardware) que interage com o sistema.",
      "B": "O banco de dados SQL.",
      "C": "O servidor onde o site está hospedado.",
      "D": "Uma variável dentro do código-fonte.",
      "E": "Um funcionário que gosta de fazer teatro nas horas vagas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O ator é quem 'usa' a funcionalidade. Pode ser o 'Cliente', o 'Administrador' ou até o 'Sistema de Pagamento Externo'. Ele fica do lado de fora da 'caixa' do sistema, apontando para o que ele quer fazer.",
      "puloDoGato": "Ator = Papel (Role) externo ao sistema.",
      "cascasDeBanana": {
        "E": "Incorreta. Piada literal.",
        "A": "Correta. Elemento básico da modelagem funcional.",
        "D": "Incorreta. Atores são conceitos de alto nível, não código.",
        "C": "Incorreta. Infraestrutura, não papel de interação.",
        "B": "Incorreta. Repositório, não papel de interação."
      },
      "dicaDeOuro": "Ator: Quem (ou o quê) inicia uma ação no sistema."
    }
  },
  {
    "id": "q_f3_138",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise - Requisitos Prioritários (MoSCoW)",
    "difficulty": "Fácil",
    "statement": "A técnica MoSCoW é utilizada para priorizar requisitos. O que significa a letra 'M' nessa sigla?",
    "options": {
      "A": "Maintenance (Requisitos de manutenção).",
      "B": "Minimal (Requisitos pequenos).",
      "C": "Money (Requisitos que custam caro).",
      "D": "Must have (Requisitos que são obrigatórios para o sucesso do projeto).",
      "E": "Maybe (Talvez façamos)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "MoSCoW ajuda a decidir o que entra na versão 1.0. Must have (obrigatório), Should have (importante), Could have (desejável se sobrar tempo) e Won't have (não será feito agora).",
      "puloDoGato": "Must have = Sem isso, o produto não pode ser lançado.",
      "cascasDeBanana": {
        "E": "Incorreta. Seria algo próximo de Could Have.",
        "D": "Correta. Foco no valor crítico de negócio.",
        "C": "Incorreta. Priorização é por valor/urgência, não só custo.",
        "A": "Incorreta. Irrelevante para a sigla.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Must Have: O coração do sistema."
    }
  },
  {
    "id": "q_f3_139",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise - Conflito de Requisitos",
    "difficulty": "Médio",
    "statement": "O que deve ser feito quando dois stakeholders diferentes solicitam requisitos contraditórios para a mesma funcionalidade?",
    "options": {
      "A": "Faz-se um sorteio (cara ou coroa).",
      "B": "O programador decide qual ele prefere.",
      "C": "Ignora-se ambos os requisitos.",
      "D": "Realiza-se uma negociação entre os stakeholders para chegar a um consenso ou uma solução de compromisso (trade-off).",
      "E": "Cria-se duas versões diferentes do sistema, uma para cada stakeholder."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Isso é o dia a dia da engenharia. O Marketing quer um site cheio de vídeos pesados; a TI quer um site leve que rode no 3G. Eles precisam conversar e chegar num meio-termo. O analista de requisitos é o mediador.",
      "puloDoGato": "Resolução de Conflitos = Negociação + Alinhamento com os objetivos do projeto.",
      "cascasDeBanana": {
        "B": "Incorreta. TI não deve tomar decisões de negócio sozinha.",
        "C": "Incorreta. O problema continuará existindo.",
        "D": "Correta. Parte fundamental da fase de Análise de Requisitos.",
        "A": "Incorreta. Absurdo técnico.",
        "E": "Incorreta. Inviável por custo e manutenção."
      },
      "dicaDeOuro": "Analista de Requisitos também precisa ser diplomata."
    }
  },
  {
    "id": "q_f3_140",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Documentação - Histórias de Usuário (User Stories)",
    "difficulty": "Fácil",
    "statement": "Qual o formato padrão (template) de uma História de Usuário em metodologias ágeis?",
    "options": {
      "A": "IF (condição) THEN (ação) ELSE (erro).",
      "B": "SELECT * FROM usuários WHERE requisito = 'urgente'.",
      "C": "O sistema DEVE fazer tal coisa SEMPRE.",
      "D": "Para quem: [nome]; O quê: [texto]; Quando: [data].",
      "E": "Como [tipo de usuário], eu quero [objetivo/ação] para que [benefício/valor]."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A User Story foca no 'Por Quê'. Ex: 'Como Cliente, eu quero salvar meu carrinho para que eu possa terminar a compra depois'. Isso dá contexto para o desenvolvedor entender o valor do que ele está codando.",
      "puloDoGato": "Papel + Ação + Valor. A tríade da User Story.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é pseudocódigo.",
        "B": "Incorreta. Isso é SQL.",
        "E": "Correta. Formato que prioriza o valor de negócio e o usuário.",
        "C": "Incorreta. Formato de especificação tradicional (Waterfall).",
        "D": "Incorreta. Formato de tarefa (task), não história."
      },
      "dicaDeOuro": "História de Usuário: Foque no valor, não na técnica."
    }
  },
  {
    "id": "q_f3_141",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Qualidade - Critérios de Aceite (Acceptance Criteria)",
    "difficulty": "Médio",
    "statement": "O que são os 'Critérios de Aceite' em uma História de Usuário?",
    "options": {
      "A": "A lista de nomes de quem aprovou o projeto.",
      "B": "As ferramentas de desenvolvimento (IDE) que devem ser usadas.",
      "C": "O valor em dinheiro que o cliente vai pagar pela entrega.",
      "D": "O número de cafezinhos tomados pela equipe durante a sprint.",
      "E": "Condições específicas que o software deve satisfazer para ser aceito pelo usuário ou Product Owner como 'concluído'."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É o 'combinado não sai caro'. O critério diz: 'O login só é aceito se funcionar com e-mail, mostrar erro se a senha for curta e tiver botão de esqueci a senha'. Se o dev fizer só o login básico, a história volta pra ele.",
      "puloDoGato": "Critérios de Aceite = Checklist da 'Definição de Pronto' para aquela história.",
      "cascasDeBanana": {
        "A": "Incorreta. Metadados de aprovação.",
        "E": "Correta. Garante que a entrega atende às expectativas detalhadas.",
        "C": "Incorreta. Aspecto comercial.",
        "B": "Incorreta. Stack tecnológica.",
        "D": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Sem critérios de aceite, você nunca sabe quando terminou."
    }
  },
  {
    "id": "q_f3_142",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Validação - Walkthrough",
    "difficulty": "Médio",
    "statement": "No contexto de revisão de requisitos, o que é um 'Walkthrough'?",
    "options": {
      "A": "A instalação automática do sistema em todos os PCs.",
      "B": "Uma caminhada rápida ao redor do escritório para pensar melhor.",
      "C": "Uma técnica de hacking para invadir sistemas.",
      "D": "Uma revisão informal onde o autor do documento guia os participantes através do conteúdo para explicar a lógica e coletar feedback.",
      "E": "Um tutorial em vídeo sobre como usar o software."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O analista abre o documento no telão e vai lendo com a equipe: 'Olha, aqui eu pensei assim, o fluxo vai pra lá... o que vocês acham?'. É uma conversa para alinhar o entendimento de todos antes de começar a codar.",
      "puloDoGato": "Walkthrough = Revisão guiada pelo autor (menos formal que uma Inspeção).",
      "cascasDeBanana": {
        "B": "Incorreta. Piada literal.",
        "D": "Correta. Método eficaz de baixo custo para achar erros de lógica cedo.",
        "C": "Incorreta. Nada a ver com segurança ofensiva.",
        "A": "Incorreta. Isso seria deploy/instalação.",
        "E": "Incorreta. Isso seria treinamento de usuário."
      },
      "dicaDeOuro": "Walkthrough: Explique sua ideia e veja se ela faz sentido para os outros."
    }
  },
  {
    "id": "q_f3_143",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise - Investigação de Campo",
    "difficulty": "Médio",
    "statement": "Qual a maior desvantagem da técnica de 'Questionário' para elicitação de requisitos em comparação com a 'Entrevista'?",
    "options": {
      "A": "Questionários são muito mais caros de aplicar.",
      "B": "Não existem desvantagens, questionários são sempre melhores.",
      "C": "Questionários não permitem o aprofundamento em questões ambíguas ou a observação de reações emocionais do respondente.",
      "D": "Questionários obrigatoriamente precisam ser escritos à mão.",
      "E": "Questionários só podem ser respondidos por 10 pessoas no máximo."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O questionário é ótimo para ouvir 1.000 pessoas rápido, mas você não vê a cara de dúvida do usuário nem consegue perguntar 'O que você quis dizer com isso?'. A entrevista é lenta, mas muito mais rica em detalhes e nuances.",
      "puloDoGato": "Questionário = Quantitativo (Larga escala). Entrevista = Qualitativo (Profundidade).",
      "cascasDeBanana": {
        "A": "Incorreta. São muito mais baratos e rápidos.",
        "C": "Correta. Limitação clássica de ferramentas estáticas de pesquisa.",
        "E": "Incorreta. Podem ser respondidos por milhares simultaneamente.",
        "D": "Incorreta. Online é o padrão hoje.",
        "B": "Incorreta. Toda técnica tem seus prós e contras."
      },
      "dicaDeOuro": "Use questionário para validar tendências; use entrevista para entender o porquê."
    }
  },
  {
    "id": "q_f3_144",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Qualidade - Requisitos Ambíguos",
    "difficulty": "Médio",
    "statement": "O que torna um requisito 'Ambíguo'?",
    "options": {
      "A": "O requisito foi escrito por dois autores ao mesmo tempo.",
      "B": "O requisito permite mais de uma interpretação diferente por pessoas distintas.",
      "C": "O requisito exige o uso de inteligência artificial.",
      "D": "O requisito é muito curto (menos de 5 palavras).",
      "E": "O requisito está escrito em uma linguagem de programação muito antiga."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Exemplo clássico: 'O sistema deve ser rápido'. Para um usuário, rápido é 1 segundo. Para outro, é 10 segundos. Isso é ambiguidade. Requisitos bons devem ser claros, precisos e testáveis (ex: 'O tempo de resposta deve ser < 2s').",
      "puloDoGato": "Ambiguidade = Inimiga número 1 da Engenharia de Requisitos.",
      "cascasDeBanana": {
        "A": "Incorreta. Linguagem não define ambiguidade (embora ajude).",
        "B": "Correta. Causa de 80% dos erros de implementação.",
        "C": "Incorreta. Requisitos curtos podem ser perfeitamente claros.",
        "D": "Incorreta. Autoria múltipla não garante ambiguidade.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Se duas pessoas leram e entenderam coisas diferentes, o requisito está ruim."
    }
  },
  {
    "id": "q_f3_145",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Princípios - Tríade CIA",
    "difficulty": "Médio",
    "statement": "Quais são os três pilares da segurança da informação conhecidos como a 'Tríade CIA'?",
    "options": {
      "A": "Confidencialidade, Integridade e Disponibilidade (Availability).",
      "B": "Custo, Investimento e Atendimento.",
      "C": "Código, Infraestrutura e Aplicação.",
      "D": "Cloud, Internet e Antivírus.",
      "E": "Criptografia, Identidade e Autenticação."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Confidencialidade: Só quem tem permissão vê. Integridade: O dado não foi alterado sem autorização. Disponibilidade: O sistema está lá quando eu preciso. Se um cair, a segurança falhou.",
      "puloDoGato": "CIA = Confidentiality, Integrity, Availability.",
      "cascasDeBanana": {
        "C": "Incorreta. Camadas de desenvolvimento.",
        "A": "Correta. Base de qualquer política de segurança séria.",
        "E": "Incorreta. São ferramentas/mecanismos, não os pilares fundamentais.",
        "D": "Incorreta. Termos genéricos de TI.",
        "B": "Incorreta. Absurdo financeiro."
      },
      "dicaDeOuro": "Segurança: Sigilo, Verdade e Acesso."
    }
  },
  {
    "id": "q_f3_146",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Ameaças - Engenharia Social",
    "difficulty": "Fácil",
    "statement": "O que caracteriza um ataque de 'Engenharia Social'?",
    "options": {
      "A": "A contratação de engenheiros civis para construir um data center.",
      "B": "O uso de radiação para apagar os discos rígidos à distância.",
      "C": "O uso de vírus complexos para quebrar senhas de banco de dados.",
      "D": "O ato de programar redes sociais como o Instagram.",
      "E": "A manipulação psicológica de pessoas para que elas divulguem informações confidenciais ou realizem ações inseguras (ex: clicar em links falsos)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É o 'golpe do vigário' digital. O hacker liga fingindo ser do suporte da Petrobras e pede sua senha 'para um teste rápido'. Não é um ataque técnico ao computador, é um ataque à confiança do ser humano. É a falha na 'Layer 8' (o usuário).",
      "puloDoGato": "Engenharia Social = Hackear o humano.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria Brute Force ou Malware técnico.",
        "E": "Correta. Forma mais comum e eficaz de invasão hoje em dia.",
        "D": "Incorreta. Piada literal.",
        "A": "Incorreta. Absurdo profissional.",
        "B": "Incorreta. Ficção científica."
      },
      "dicaDeOuro": "Desconfie de ligações ou e-mails urgentes pedindo senhas."
    }
  },
  {
    "id": "q_f3_147",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Mecanismos - Autenticação Multifator (MFA)",
    "difficulty": "Fácil",
    "statement": "Por que o uso de Autenticação Multifator (MFA/2FA) é altamente recomendado em sistemas corporativos?",
    "options": {
      "A": "Porque o Google obriga todas as empresas a usarem.",
      "B": "Porque torna o login 10 vezes mais rápido.",
      "C": "Porque adiciona uma camada extra de segurança; mesmo que o atacante descubra a senha, ele ainda precisará de um segundo fator (como um código no celular ou biometria) para acessar a conta.",
      "D": "Porque diminui o custo da internet da empresa.",
      "E": "Porque impede que o usuário esqueça a senha."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Senha sozinha é fraca (muita gente usa '123456'). Com o MFA, você precisa de: algo que você sabe (senha) + algo que você tem (celular/token) ou algo que você é (digital/rosto). Isso barra quase todos os ataques de roubo de senha.",
      "puloDoGato": "MFA = Algo que eu SEI + Algo que eu TENHO.",
      "cascasDeBanana": {
        "B": "Incorreta. Na verdade, torna o login um pouco mais lento, mas muito mais seguro.",
        "C": "Correta. Prática essencial de segurança moderna.",
        "E": "Incorreta. Se o usuário esquecer a senha, ele continua precisando dela + o token.",
        "A": "Incorreta. É uma recomendação técnica universal, não só de uma empresa.",
        "D": "Incorreta. Absurdo econômico."
      },
      "dicaDeOuro": "Ative o MFA em tudo que for importante."
    }
  },
  {
    "id": "q_f3_148",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Cronograma - Caminho Crítico (CPM)",
    "difficulty": "Difícil",
    "statement": "Em um cronograma de projeto (Método do Caminho Crítico), o que define o 'Caminho Crítico'?",
    "options": {
      "A": "A lista das tarefas mais baratas do projeto.",
      "B": "O caminho entre a mesa do desenvolvedor e a cafeteira.",
      "C": "A lista de tarefas que o cliente mais gostou.",
      "D": "A sequência de atividades que determina a duração total do projeto; qualquer atraso em uma atividade desse caminho atrasará a entrega final.",
      "E": "As atividades que possuem a maior folga (slack) de tempo."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você tem que pintar a parede e o caminhão de tinta atrasa, a obra toda atrasa. Pintar a parede está no caminho crítico. Se o fornecedor de canetas atrasa, mas você já tem canetas pra um mês, isso não atrasa a obra. Caminho Crítico = Folga Zero.",
      "puloDoGato": "Caminho Crítico = Maior duração + Folga Zero. É onde o gestor deve focar 100% da atenção.",
      "cascasDeBanana": {
        "A": "Incorreta. Custo não define o caminho crítico, mas sim o tempo e a dependência.",
        "D": "Correta. Conceito vital para controle de prazos em engenharia.",
        "B": "Incorreta. Piada física.",
        "C": "Incorreta. Preferência de stakeholder não altera a lógica do cronograma.",
        "E": "Incorreta. Atividades do caminho crítico possuem folga zero (ou mínima)."
      },
      "dicaDeOuro": "Atrase uma tarefa no caminho crítico e você atrasará o projeto inteiro."
    }
  },
  {
    "id": "q_f3_149",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Qualidade - Ciclo PDCA",
    "difficulty": "Fácil",
    "statement": "Quais são as quatro fases do ciclo PDCA de melhoria contínua?",
    "options": {
      "A": "Planejar (Plan), Fazer (Do), Verificar (Check) e Agir/Ajustar (Act).",
      "B": "Pessoas, Dados, Computadores e Algoritmos.",
      "C": "Prazo, Dinheiro, Caminho e Atendimento.",
      "D": "Pedir, Devolver, Cobrar e Aceitar.",
      "E": "Programar, Debugar, Codar e Apagar."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O PDCA é o motor da qualidade. Você planeja uma melhoria, faz ela num pedaço pequeno, checa se deu certo e, se deu, padroniza para o resto do projeto. Se não deu, ajusta e começa de novo. Nunca para.",
      "puloDoGato": "PDCA = Roda de Deming. A base da melhoria contínua.",
      "cascasDeBanana": {
        "E": "Incorreta. Atividades de codificação, não de gestão de qualidade.",
        "A": "Correta. Modelo universal usado desde fábricas até startups de software.",
        "D": "Incorreta. Absurdo comercial.",
        "B": "Incorreta. Componentes de um sistema, não fases de um ciclo.",
        "C": "Incorreta. Termos soltos."
      },
      "dicaDeOuro": "PDCA: Gire a roda para ser melhor a cada dia."
    }
  },
  {
    "id": "q_f3_150",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Kanban - WIP Limits",
    "difficulty": "Médio",
    "statement": "Qual o objetivo de estabelecer 'Limites de Trabalho em Progresso' (WIP Limits) em um quadro Kanban?",
    "options": {
      "A": "Impedir que os programadores trabalhem demais e fiquem cansados.",
      "B": "Garantir que todas as colunas tenham exatamente o mesmo número de cartões.",
      "C": "Evitar gargalos e multitarefa excessiva, focando em terminar as tarefas iniciadas antes de começar novas (Stop Starting, Start Finishing).",
      "D": "Esconder as tarefas difíceis para que ninguém as veja.",
      "E": "Contar quantas tarefas cada pessoa terminou no mês para dar prêmios."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se a coluna 'Fazendo' tem limite de 3 tarefas, você não pode puxar a 4ª enquanto não terminar uma das 3. Isso força a equipe a se ajudar para destravar o que está parado, em vez de cada um começar uma coisa nova e nada ficar pronto. O fluxo fica muito mais rápido.",
      "puloDoGato": "WIP Limit = Foco na Vazão (Throughput) e redução do Lead Time.",
      "cascasDeBanana": {
        "A": "Incorreta. Embora ajude no foco, o objetivo é a eficiência do fluxo de trabalho.",
        "C": "Correta. Mantra central do Kanban: 'Pare de começar, comece a terminar'.",
        "E": "Incorreta. Kanban foca no fluxo do sistema, não em performance individual punitiva.",
        "B": "Incorreta. Colunas diferentes podem ter limites diferentes dependendo da capacidade.",
        "D": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "WIP Limit: Menos tarefas abertas, mais tarefas entregues."
    }
  },
  {
    "id": "q_f3_151",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Técnicas - Inspeção de Requisitos (Fagan)",
    "difficulty": "Difícil",
    "statement": "O que diferencia uma 'Inspeção' (como a de Fagan) de um simples 'Walkthrough' em Engenharia de Requisitos?",
    "options": {
      "A": "O walkthrough é obrigatório por lei e a inspeção é opcional.",
      "B": "A inspeção leva apenas 5 minutos para ser concluída.",
      "C": "Não há diferença, são nomes regionais para a mesma coisa.",
      "D": "A inspeção é feita apenas por computadores.",
      "E": "A inspeção é um processo formal, com papéis definidos (moderador, leitor, gravador), critérios de entrada/saída e coleta de métricas de defeitos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Inspeção é coisa séria. Tem reunião de planejamento, reunião de inspeção e reunião de correção. Alguém lê o documento (que não é o autor) e todos buscam erros seguindo um checklist. É o método mais 'pesado' e eficaz de achar erros no papel.",
      "puloDoGato": "Inspeção = Formalidade + Papéis Definidos + Métricas.",
      "cascasDeBanana": {
        "D": "Incorreta. É um processo humano de revisão por pares.",
        "E": "Correta. Definição clássica de garantia de qualidade de requisitos.",
        "A": "Incorreta. São escolhas metodológicas da equipe.",
        "B": "Incorreta. Por ser formal, costuma levar bastante tempo.",
        "C": "Incorreta. Existe uma hierarquia de formalidade (Review -> Walkthrough -> Inspection)."
      },
      "dicaDeOuro": "Falou em formalidade e papéis? É Inspeção."
    }
  },
  {
    "id": "q_f3_152",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Engenharia de Requisitos",
    "topic": "Gestão - Baseline de Requisitos",
    "difficulty": "Médio",
    "statement": "O que representa o estabelecimento de uma 'Baseline' (Linha de Base) de requisitos?",
    "options": {
      "A": "O momento em que o programador começa a escrever a primeira linha de código.",
      "B": "O layout final do banco de dados.",
      "C": "Um conjunto de requisitos aprovados e acordados que servem como base para o desenvolvimento e para o controle de mudanças futuro.",
      "D": "A data final de entrega do projeto.",
      "E": "A lista de todos os bugs encontrados no sistema."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Baseline é o 'está valendo'. A partir desse ponto, qualquer mudança precisa de conversa e análise. É a foto do que foi combinado para aquela versão do software.",
      "puloDoGato": "Baseline = Ponto de referência aprovado para controle de configuração.",
      "cascasDeBanana": {
        "A": "Incorreta. Pode acontecer antes ou depois da baseline.",
        "C": "Correta. Conceito fundamental de gestão de configuração e requisitos.",
        "E": "Incorreta. Isso seria um Bug Report ou Backlog.",
        "B": "Incorreta. É sobre requisitos funcionais/não-funcionais, não só DB.",
        "D": "Incorreta. Isso é o Milestone de entrega."
      },
      "dicaDeOuro": "Baseline: O acordo oficial entre cliente e TI."
    }
  },
  {
    "id": "q_f3_153",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Criptografia - Simétrica vs Assimétrica",
    "difficulty": "Difícil",
    "statement": "Qual a principal característica da Criptografia Assimétrica (Chave Pública)?",
    "options": {
      "A": "Utiliza um par de chaves relacionadas: uma chave pública (para cifrar) e uma chave privada (para decifrar).",
      "B": "Não exige o uso de computadores.",
      "C": "O código da chave é sempre uma palavra de 4 letras.",
      "D": "Usa a mesma chave para cifrar e decifrar a mensagem.",
      "E": "É muito mais rápida que a criptografia simétrica."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Na Assimétrica, eu dou meu cadeado aberto (Chave Pública) para todo mundo. Você tranca sua mensagem nele e me manda. Só eu, que tenho a única chave (Chave Privada) que abre esse cadeado, consigo ler. É a base do HTTPS e das assinaturas digitais.",
      "puloDoGato": "Assimétrica = Duas chaves. Simétrica = Uma chave só (compartilhada).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é Criptografia Simétrica (ex: AES).",
        "A": "Correta. Permite comunicação segura sem precisar trocar senhas secretas antes.",
        "E": "Incorreta. É muito mais LENTA e pesada que a simétrica.",
        "B": "Incorreta. Absurdo.",
        "C": "Incorreta. Chaves são números binários gigantescos."
      },
      "dicaDeOuro": "Chave Pública (Cifra) + Chave Privada (Decifra)."
    }
  },
  {
    "id": "q_f3_154",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Ameaças - Ransomware",
    "difficulty": "Fácil",
    "statement": "O que faz um ataque do tipo 'Ransomware'?",
    "options": {
      "A": "Aumenta a velocidade do processador para queimar o hardware.",
      "B": "Criptografa os dados do usuário e exige o pagamento de um resgate (geralmente em criptomoedas) para fornecer a chave de decifração.",
      "C": "Envia e-mails românticos para todos os contatos do usuário.",
      "D": "Transforma o fundo de tela em uma imagem de pirata.",
      "E": "Deleta todos os arquivos do computador imediatamente."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "É o 'sequestro' de dados. O vírus entra, tranca tudo e você recebe uma mensagem na tela: 'Pague 1 Bitcoin ou perca suas fotos e documentos para sempre'. A melhor defesa é ter Backup offline.",
      "puloDoGato": "Ransom = Resgate. Ware = Software. Software de Resgate.",
      "cascasDeBanana": {
        "A": "Incorreta. O objetivo não é destruir, é lucrar com o resgate.",
        "B": "Correta. Ameaça número 1 para empresas hoje.",
        "C": "Incorreta. Absurdo físico.",
        "D": "Incorreta. Isso seria um tipo de Worm/Spam antigo.",
        "E": "Incorreta. Isso pode até acontecer, mas não é o dano principal."
      },
      "dicaDeOuro": "Ransomware: Sequestro digital. Tenha backups!"
    }
  },
  {
    "id": "q_f3_155",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Controle de Acesso - RBAC (Role-Based Access Control)",
    "difficulty": "Médio",
    "statement": "No modelo de controle de acesso RBAC, as permissões são concedidas com base em quê?",
    "options": {
      "A": "No valor do salário do funcionário.",
      "B": "No nível de amizade com o administrador do sistema.",
      "C": "No cargo ou papel (função) que o usuário ocupa na organização.",
      "D": "No endereço IP de onde o usuário está acessando.",
      "E": "No nome de batismo do usuário."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Em vez de dar permissão um por um ('O João pode ler', 'A Maria pode ler'), você cria um papel chamado 'Auditor' e dá permissão para esse papel. Depois, você só diz que o João e a Maria são Auditores. Se entrar um novo Auditor, ele já herda tudo automaticamente.",
      "puloDoGato": "RBAC = Role (Papel). Facilita a gestão de milhares de usuários.",
      "cascasDeBanana": {
        "E": "Incorreta. Irrelevante.",
        "C": "Correta. Padrão de mercado para sistemas corporativos.",
        "D": "Incorreta. Isso seria controle por localização/rede.",
        "A": "Incorreta. Absurdo administrativo.",
        "B": "Incorreta. Absurdo ético."
      },
      "dicaDeOuro": "RBAC: Permissão para o CARGO, não para a PESSOA."
    }
  },
  {
    "id": "q_f3_156",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Ameaças - SQL Injection",
    "difficulty": "Difícil",
    "statement": "Como ocorre um ataque de SQL Injection?",
    "options": {
      "A": "O atacante insere comandos SQL maliciosos em campos de entrada de dados (como formulários de login) que, se não forem filtrados, são executados pelo banco de dados da aplicação.",
      "B": "O atacante adivinha a senha do administrador por tentativa e erro.",
      "C": "O atacante envia 1 milhão de e-mails para o banco de dados.",
      "D": "O atacante fisicamente quebra o servidor do banco de dados.",
      "E": "O atacante desliga a internet da empresa usando um ímã."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Sabe aquele campo de 'Usuário'? Se o atacante digitar algo como `' OR 1=1 --`, e o programador não foi cuidadoso, o banco de dados pode entender que o login foi bem-sucedido mesmo sem senha. É como se o vilão convencesse o porteiro a abrir a porta usando um 'truque de palavras'.",
      "puloDoGato": "SQL Injection = Injetar código onde deveria haver apenas texto.",
      "cascasDeBanana": {
        "D": "Incorreta. Ataque físico.",
        "A": "Correta. Uma das vulnerabilidades mais famosas e perigosas da web.",
        "E": "Incorreta. Absurdo físico.",
        "B": "Incorreta. Isso seria Brute Force.",
        "C": "Incorreta. Isso seria DoS/Spam."
      },
      "dicaDeOuro": "Sempre use 'Prepared Statements' para evitar SQL Injection."
    }
  },
  {
    "id": "q_f3_157",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Riscos - Respostas aos Riscos",
    "difficulty": "Médio",
    "statement": "Na gestão de riscos do PMBOK, o que significa a estratégia de 'Mitigar' um risco negativo?",
    "options": {
      "A": "Aumentar o salário da equipe para que eles trabalhem mais felizes.",
      "B": "Mudar o escopo do projeto para eliminar o risco completamente.",
      "C": "Contratar um seguro para que outra empresa pague o prejuízo.",
      "D": "Reduzir a probabilidade de ocorrência ou o impacto do risco caso ele ocorra.",
      "E": "Ignorar o risco e torcer para que ele não aconteça."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Mitigar é 'diminuir o estrago'. Se há risco de queda de energia, você compra um No-break. O risco ainda existe, mas a chance dele desligar seu PC caiu muito (probabilidade) ou o tempo que você fica offline diminuiu (impacto).",
      "puloDoGato": "Mitigar = Diminuir Probabilidade ou Impacto.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria Aceitar o risco passivamente.",
        "D": "Correta. Abordagem mais comum na gestão de riscos.",
        "C": "Incorreta. Isso seria Transferir o risco.",
        "B": "Incorreta. Isso seria Evitar (Eliminar) o risco.",
        "A": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Mitigar: Se não dá pra evitar, vamos tentar diminuir o prejuízo."
    }
  },
  {
    "id": "q_f3_158",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Stakeholders - Matriz de Poder/Interesse",
    "difficulty": "Fácil",
    "statement": "Como deve ser tratado um stakeholder que possui 'Alto Poder' e 'Alto Interesse' no projeto?",
    "options": {
      "A": "Deve ser demitido do projeto imediatamente.",
      "B": "Deve ser ignorado para não atrapalhar o trabalho técnico.",
      "C": "Deve receber e-mails apenas uma vez por ano.",
      "D": "Deve ser gerenciado de perto (Manage Closely), mantendo-o totalmente engajado e informado.",
      "E": "Deve ser monitorado apenas com o mínimo esforço."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Esse é o cara que manda e que se importa (ex: o Diretor da área). Se ele ficar insatisfeito, o projeto morre. Ele precisa estar no loop de todas as decisões importantes.",
      "puloDoGato": "Alto Poder + Alto Interesse = Gerenciar de Perto.",
      "cascasDeBanana": {
        "B": "Incorreta. Receita para o cancelamento do projeto.",
        "E": "Incorreta. Isso é para baixo poder/baixo interesse.",
        "D": "Correta. Fator crítico de sucesso na gestão de expectativas.",
        "C": "Incorreta. Pouca comunicação para alguém tão importante.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Mantenha seus aliados poderosos sempre por perto."
    }
  },
  {
    "id": "q_f3_159",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Escopo - Gold Plating",
    "difficulty": "Médio",
    "statement": "O que significa o termo 'Gold Plating' em gestão de projetos?",
    "options": {
      "A": "Terminar o projeto exatamente no dia do aniversário do cliente.",
      "B": "Cobrir os servidores com uma camada de ouro para evitar corrosão.",
      "C": "Usar apenas tecnologias que tenham nomes de metais preciosos.",
      "D": "Entregar funcionalidades extras que não foram solicitadas pelo cliente, na esperança de 'surpreendê-lo' positivamente.",
      "E": "Vender o projeto pelo maior preço possível."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Parece bom, mas é ruim. O cliente não pediu, você gastou tempo e dinheiro fazendo (que poderiam ser usados em algo útil) e ainda pode ter criado novos bugs. Em projetos, faça o que foi combinado (Scope), nem mais, nem menos.",
      "puloDoGato": "Gold Plating = Extra não solicitado. É desperdício.",
      "cascasDeBanana": {
        "B": "Incorreta. Absurdo literal.",
        "D": "Correta. Prática desencorajada pelo PMBOK.",
        "E": "Incorreta. Isso seria estratégia de pricing.",
        "C": "Incorreta. Absurdo.",
        "A": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "O ótimo é inimigo do bom (e do prazo)."
    }
  },
  {
    "id": "q_f3_160",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Conceito - Triângulo de Ferro (Tripla Restrição)",
    "difficulty": "Fácil",
    "statement": "Quais são as três variáveis que compõem o 'Triângulo de Ferro' da gestão de projetos tradicional?",
    "options": {
      "A": "Java, SQL e Python.",
      "B": "Escopo, Tempo (Cronograma) e Custo (Orçamento).",
      "C": "Início, Meio e Fim.",
      "D": "Hardware, Software e Peopleware.",
      "E": "Café, Código e Cansaço."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Se você mexer em um lado, os outros balançam. Quer aumentar o Escopo? Vai precisar de mais Tempo ou mais Custo. Quer diminuir o Tempo? Ou diminui o Escopo ou aumenta o Custo (mais gente). A Qualidade fica no meio disso tudo.",
      "puloDoGato": "Escopo, Tempo e Custo. Mude um, impacte os outros.",
      "cascasDeBanana": {
        "A": "Incorreta. Realidade dev, não gestão formal.",
        "B": "Correta. Base do planejamento de qualquer projeto.",
        "C": "Incorreta. Stack tecnológica.",
        "D": "Incorreta. Componentes de TI.",
        "E": "Incorreta. Fases temporais."
      },
      "dicaDeOuro": "Nada é de graça no Triângulo de Ferro."
    }
  },
  {
    "id": "q_f3_171",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Modelo OSI - Camadas",
    "difficulty": "Médio",
    "statement": "Qual a função da Camada 3 (Rede) no Modelo OSI?",
    "options": {
      "A": "Definir os cabos e sinais elétricos.",
      "B": "Endereçamento lógico (IP) e roteamento de pacotes entre diferentes redes.",
      "C": "Garantir a entrega de e-mails para o usuário final.",
      "D": "Controlar o mouse e o teclado.",
      "E": "Criptografar os dados da aplicação."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A Camada 3 é onde mora o Roteador e o endereço IP. Ela decide qual o melhor caminho para o dado sair da sua casa e chegar no servidor da Petrobras. Ela não liga para o cabo (L1) nem para o erro no bit (L2), ela foca no 'endereço' de destino.",
      "puloDoGato": "Camada 3 = IP + Roteador.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Camada 1 (Física).",
        "B": "Correta. Responsável pela conectividade fim-a-fim entre redes.",
        "C": "Incorreta. Isso seria Camada 7 (Aplicação).",
        "D": "Incorreta. Isso costuma ser na Camada 6 (Apresentação).",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Roteamento = Camada 3."
    }
  },
  {
    "id": "q_f3_172",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - DHCP",
    "difficulty": "Fácil",
    "statement": "Para que serve o protocolo DHCP (Dynamic Host Configuration Protocol)?",
    "options": {
      "A": "Para bloquear ataques de vírus no computador.",
      "B": "Para traduzir nomes de sites (google.com) em endereços IP.",
      "C": "Para aumentar a velocidade do download.",
      "D": "Para atribuir automaticamente endereços IP e outras configurações de rede aos dispositivos que se conectam à rede.",
      "E": "Para enviar e-mails de forma segura."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine chegar numa festa e ganhar um crachá com seu nome na entrada. O DHCP faz isso: você liga o Wi-Fi e ele te dá um IP, máscara e DNS sem você precisar digitar nada. Sem ele, configurar rede seria um inferno manual.",
      "puloDoGato": "DHCP = Configuração Automática de IP.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é o DNS.",
        "D": "Correta. Essencial para redes escaláveis.",
        "E": "Incorreta. Isso é SMTP/IMAP.",
        "A": "Incorreta. Isso é Firewall/Antivírus.",
        "C": "Incorreta. O DHCP não altera a largura de banda física."
      },
      "dicaDeOuro": "DHCP: O 'atendente' que te dá um número de IP."
    }
  },
  {
    "id": "q_f3_173",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Dispositivos - Switch vs Router",
    "difficulty": "Médio",
    "statement": "Qual a principal diferença entre um Switch e um Roteador (Router)?",
    "options": {
      "A": "O Roteador deleta dados e o Switch os cria.",
      "B": "O Switch é muito mais lento que o Roteador.",
      "C": "O Switch é para internet sem fio; o Roteador é apenas para cabos.",
      "D": "Não há diferença, são apenas nomes comerciais.",
      "E": "O Switch conecta dispositivos dentro da mesma rede local (LAN); o Roteador conecta diferentes redes entre si (WAN/Internet)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Switch é o 'filtro de linha' inteligente da rede local. Ele faz os PCs da sala conversarem. O Roteador é a 'ponte' que leva o sinal da sua sala para o resto do mundo (internet). O Switch trabalha na Camada 2 (MAC), o Roteador na Camada 3 (IP).",
      "puloDoGato": "Switch = Local (LAN). Roteador = Global (WAN).",
      "cascasDeBanana": {
        "E": "Correta. Distinção clássica de topologia de redes.",
        "C": "Incorreta. Ambos podem ter versões com ou sem fio.",
        "B": "Incorreta. Switches costumam ser muito rápidos no processamento interno de pacotes locais.",
        "A": "Incorreta. Absurdo.",
        "D": "Incorreta. Têm funções técnicas distintas."
      },
      "dicaDeOuro": "Switch liga PCs; Roteador liga redes."
    }
  },
  {
    "id": "q_f3_174",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - DNS",
    "difficulty": "Fácil",
    "statement": "Qual a função do sistema DNS (Domain Name System)?",
    "options": {
      "A": "Garantir que a internet não caia quando chover.",
      "B": "Proteger o computador contra hackers.",
      "C": "Aumentar a resolução das imagens na internet.",
      "D": "Traduzir nomes de domínio legíveis por humanos (ex: petrobras.com.br) em endereços IP (ex: 200.191.x.x).",
      "E": "Armazenar os arquivos do site."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O DNS é a 'lista telefônica' da internet. Ninguém decora o IP de todos os sites, a gente decora o nome. O navegador pergunta pro servidor DNS: 'Ei, qual o IP desse nome?', e ele responde para a conexão ser feita.",
      "puloDoGato": "DNS = Tradutor Nome -> IP.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Firewall.",
        "D": "Correta. Sem ele, a internet como conhecemos seria impossível de usar.",
        "E": "Incorreta. Isso é o Web Server.",
        "A": "Incorreta. Dependência física de infraestrutura.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "DNS: Você digita o nome, ele acha o endereço."
    }
  },
  {
    "id": "q_f3_175",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Virtualização - Hypervisors",
    "difficulty": "Difícil",
    "statement": "O que caracteriza um Hypervisor do 'Tipo 1' (Bare Metal)?",
    "options": {
      "A": "Ele é usado apenas em computadores de mesa (desktops).",
      "B": "Ele é instalado diretamente no hardware do servidor, sem a necessidade de um sistema operacional hospedeiro.",
      "C": "Ele serve apenas para rodar jogos antigos.",
      "D": "Ele é um hardware físico, como uma placa de vídeo.",
      "E": "Ele é instalado como um programa comum dentro do Windows ou Linux."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Tipo 1 é o padrão de Data Center. Ele fala direto com o hardware, o que o torna muito mais rápido e eficiente. Exemplos: VMware ESXi, Xen, Microsoft Hyper-V. O Tipo 2 é aquele que você roda no seu PC (ex: VirtualBox) em cima do seu Windows.",
      "puloDoGato": "Tipo 1 = Direto no Hardware (Bare Metal). Tipo 2 = Em cima de outro SO (Hosted).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria o Tipo 2.",
        "B": "Correta. Oferece melhor performance e isolamento para servidores.",
        "C": "Incorreta. É o oposto: é o padrão para grandes servidores.",
        "D": "Incorreta. É um software (ou firmware), não uma peça física.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Bare Metal = Sem intermediários."
    }
  },
  {
    "id": "q_f3_176",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - TCP vs UDP",
    "difficulty": "Médio",
    "statement": "Qual a principal diferença entre os protocolos de transporte TCP e UDP?",
    "options": {
      "A": "Não há diferença técnica, apenas de nome.",
      "B": "UDP é usado apenas para textos e TCP para imagens.",
      "C": "TCP é orientado à conexão e garante a entrega dos dados na ordem correta; UDP é sem conexão e prioriza a velocidade, sem garantia de entrega.",
      "D": "TCP é um protocolo de segurança e UDP é um protocolo de ataque.",
      "E": "TCP é sem fio e UDP é com fio."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "TCP é como uma carta registrada: você recebe confirmação de que chegou e se algo sumir, ele pede de novo. UDP é como gritar num megafone: você fala rápido e se alguém não ouviu, paciência. Streaming e jogos usam UDP; e-mail e web usam TCP.",
      "puloDoGato": "TCP = Confiável e Lento. UDP = Rápido e 'Não-Confiável'.",
      "cascasDeBanana": {
        "E": "Incorreta. Ambos funcionam em qualquer meio físico.",
        "C": "Correta. Conceito fundamental da camada de transporte.",
        "B": "Incorreta. Ambos transportam qualquer tipo de dado.",
        "D": "Incorreta. São protocolos de transporte, não de segurança em si.",
        "A": "Incorreta. São comportamentos opostos."
      },
      "dicaDeOuro": "TCP confere tudo; UDP só manda."
    }
  },
  {
    "id": "q_f3_177",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - ICMP (Ping)",
    "difficulty": "Fácil",
    "statement": "O comando 'ping' utiliza qual protocolo de rede para verificar a conectividade?",
    "options": {
      "A": "SMTP.",
      "B": "DNS.",
      "C": "FTP.",
      "D": "HTTP.",
      "E": "ICMP (Internet Control Message Protocol)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Ping manda um pacote 'Echo Request' do ICMP. Se o outro lado estiver vivo e não estiver bloqueando, ele responde 'Echo Reply'. É o primeiro teste que todo técnico faz quando a internet cai.",
      "puloDoGato": "Ping = ICMP.",
      "cascasDeBanana": {
        "D": "Incorreta. Protocolo de web.",
        "E": "Correta. Protocolo de controle e diagnóstico da rede.",
        "C": "Incorreta. Protocolo de arquivos.",
        "A": "Incorreta. Protocolo de e-mail.",
        "B": "Incorreta. Protocolo de nomes."
      },
      "dicaDeOuro": "Ping: O 'alô' da rede."
    }
  },
  {
    "id": "q_f3_178",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Endereçamento - IPv4 vs IPv6",
    "difficulty": "Médio",
    "statement": "Qual o principal motivo para a criação do IPv6?",
    "options": {
      "A": "Para diminuir o tamanho dos cabos de rede.",
      "B": "Esgotamento dos endereços IPv4 disponíveis, que possuem apenas 32 bits.",
      "C": "Porque o número 6 é o favorito dos engenheiros da internet.",
      "D": "Para impedir que as pessoas usem Wi-Fi.",
      "E": "Para tornar a internet mais colorida."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O IPv4 só permite uns 4 bilhões de endereços. Com celular, geladeira e carro ligando na rede, os endereços acabaram. O IPv6 tem 128 bits e permite tantos endereços que daria para dar um IP para cada grão de areia do planeta.",
      "puloDoGato": "IPv4 = 32 bits (Esgotado). IPv6 = 128 bits (Infinito).",
      "cascasDeBanana": {
        "A": "Incorreta. Absurdo.",
        "B": "Correta. Necessidade vital para a expansão da Internet das Coisas (IoT).",
        "C": "Incorreta. Funciona perfeitamente com Wi-Fi.",
        "D": "Incorreta. Absurdo físico.",
        "E": "Incorreta. Piada."
      },
      "dicaDeOuro": "IPv6: Espaço de sobra para todos os dispositivos do mundo."
    }
  },
  {
    "id": "q_f3_179",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Dispositivos - Firewall",
    "difficulty": "Fácil",
    "statement": "Qual a função primária de um Firewall em uma rede corporativa?",
    "options": {
      "A": "Aumentar a velocidade da conexão.",
      "B": "Substituir o uso de senhas pelos usuários.",
      "C": "Apagar arquivos duplicados no servidor.",
      "D": "Resfriar os computadores para evitar incêndios.",
      "E": "Monitorar e controlar o tráfego de rede (entrada e saída) com base em regras de segurança predefinidas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Firewall é o porteiro do prédio. Ele olha quem está vindo de fora e pergunta: 'Você tem permissão para entrar na porta 80?'. Se não tiver na lista, ele barra. Ele protege a rede interna contra acessos não autorizados da internet.",
      "puloDoGato": "Firewall = Filtro de tráfego (Entrada/Saída).",
      "cascasDeBanana": {
        "A": "Incorreta. Pode até causar uma pequena lentidão devido à inspeção dos pacotes.",
        "E": "Correta. Componente básico de segurança perimetral.",
        "C": "Incorreta. Isso seria tarefa de limpeza de disco.",
        "B": "Incorreta. Autenticação e Filtragem são coisas diferentes.",
        "D": "Incorreta. Piada literal (Parede de Fogo)."
      },
      "dicaDeOuro": "Firewall: Deixe passar só o que é seguro."
    }
  },
  {
    "id": "q_f3_180",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Conceitos - Latência vs Largura de Banda",
    "difficulty": "Médio",
    "statement": "O que define a 'Latência' em uma conexão de rede?",
    "options": {
      "A": "O preço mensal da assinatura da internet.",
      "B": "A quantidade total de dados que podem ser enviados por segundo.",
      "C": "O atraso ou tempo que um pacote leva para viajar da origem ao destino.",
      "D": "O número de cabos conectados ao servidor.",
      "E": "A cor do led piscando no roteador."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Largura de banda é o tamanho do cano (quanta água passa). Latência é o tempo que a primeira gota leva pra chegar no outro lado. Para jogos e chamadas de vídeo, latência baixa é mais importante que banda gigante.",
      "puloDoGato": "Latência = Delay (Atraso).",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é a Largura de Banda (Throughput).",
        "C": "Correta. Medida geralmente em milissegundos (ms).",
        "D": "Incorreta. Absurdo físico.",
        "A": "Incorreta. Fator comercial.",
        "E": "Incorreta. Absurdo visual."
      },
      "dicaDeOuro": "Latência: O tempo de resposta da rede."
    }
  },
  {
    "id": "q_f3_186",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Arquitetura - DMZ (Zona Desmilitarizada)",
    "difficulty": "Médio",
    "statement": "Qual o propósito de uma DMZ (Demilitarized Zone) em uma rede corporativa?",
    "options": {
      "A": "Armazenar os dados de backup que não são mais usados.",
      "B": "Criptografar todos os e-mails enviados pela empresa.",
      "C": "Permitir que qualquer pessoa acesse o banco de dados principal sem senha.",
      "D": "Aumentar a velocidade de navegação dos funcionários no YouTube.",
      "E": "Isolar serviços que precisam ser acessados pela internet (como servidores Web) da rede interna privada, criando uma camada extra de proteção."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A DMZ é como a sala de visitas de uma casa. Você deixa o estranho entrar lá, mas não deixa ele subir para os quartos (rede interna). Se o seu servidor web for invadido na DMZ, o hacker ainda terá que passar por outro firewall para chegar nos dados sensíveis da empresa.",
      "puloDoGato": "DMZ = Isolamento de serviços públicos.",
      "cascasDeBanana": {
        "A": "Incorreta. Backup deve ficar em local ainda mais protegido e isolado.",
        "E": "Correta. Estratégia clássica de defesa em profundidade.",
        "D": "Incorreta. Absurdo.",
        "B": "Incorreta. Isso é função de gateways de e-mail ou protocolos de aplicação.",
        "C": "Incorreta. Absurdo de segurança."
      },
      "dicaDeOuro": "Coloque na DMZ tudo que o mundo precisa ver."
    }
  },
  {
    "id": "q_f3_187",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Mecanismos - IDS vs IPS",
    "difficulty": "Difícil",
    "statement": "Qual a diferença fundamental entre um IDS (Intrusion Detection System) e um IPS (Intrusion Prevention System)?",
    "options": {
      "A": "O IDS é um hardware e o IPS é um software.",
      "B": "O IDS é para ataques externos e o IPS para ataques internos.",
      "C": "O IPS é mais lento porque usa inteligência artificial.",
      "D": "Não há diferença, são marcas diferentes do mesmo produto.",
      "E": "O IDS apenas detecta e alerta sobre atividades suspeitas; o IPS detecta e toma ações automáticas para bloquear o ataque."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "IDS é o alarme que toca: 'Ei, tem alguém pulando o muro!'. IPS é o alarme que toca E solta os cães: ele bloqueia a conexão do invasor na hora. O IPS é mais 'agressivo' e exige regras muito bem configuradas para não bloquear usuários legítimos (falsos positivos).",
      "puloDoGato": "IDS = Detecta (Monitora). IPS = Previne (Bloqueia).",
      "cascasDeBanana": {
        "E": "Correta. Diferença entre monitoramento passivo e controle ativo.",
        "B": "Incorreta. Ambos podem ser usados para qualquer origem de tráfego.",
        "A": "Incorreta. Ambos podem ser appliances físicos ou virtuais/software.",
        "D": "Incorreta. Possuem comportamentos técnicos distintos.",
        "C": "Incorreta. A velocidade depende do hardware e da complexidade das regras, não da sigla."
      },
      "dicaDeOuro": "IPS é um IDS que tem poder de 'polícia'."
    }
  },
  {
    "id": "q_f3_188",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Criptografia - Hash (Integridade)",
    "difficulty": "Médio",
    "statement": "Para que serve uma função de Hash (como SHA-256) na segurança da informação?",
    "options": {
      "A": "Para aumentar o tamanho dos arquivos e dificultar o download por hackers.",
      "B": "Para converter imagens em texto automaticamente.",
      "C": "Para recuperar senhas perdidas pelos usuários.",
      "D": "Para esconder o conteúdo de uma mensagem para que ninguém leia.",
      "E": "Para garantir a integridade de um arquivo ou dado, gerando uma 'impressão digital' única que muda completamente se o arquivo for alterado."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Hash é uma via de mão única. Você passa o arquivo e ele cospe um código gigante. Se você mudar uma vírgula no arquivo e rodar o hash de novo, o código será totalmente diferente. Serve para provar que o arquivo que você baixou é o mesmo que a Petrobras disponibilizou.",
      "puloDoGato": "Hash = Garantia de Integridade. (Não é criptografia para esconder, é para validar).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria criptografia de cifragem (Simétrica/Assimétrica). Hash não se 'desfaz'.",
        "E": "Correta. Essencial para assinaturas digitais e armazenamento de senhas.",
        "A": "Incorreta. O tamanho do hash é fixo, independente do tamanho do arquivo original.",
        "B": "Incorreta. Nada a ver com OCR.",
        "C": "Incorreta. Hash não é reversível; você não recupera a senha original a partir dele."
      },
      "dicaDeOuro": "Mudou um bit? O hash muda todo."
    }
  },
  {
    "id": "q_f3_189",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Mecanismos - Honeypot",
    "difficulty": "Fácil",
    "statement": "No contexto de segurança cibernética, o que é um 'Honeypot' (Pote de Mel)?",
    "options": {
      "A": "Um tipo de vírus que rouba senhas de redes sociais.",
      "B": "Um sistema ou rede deliberadamente vulnerável criado para atrair, distrair e estudar as técnicas de ataque de invasores.",
      "C": "O servidor de arquivos principal da empresa.",
      "D": "Um programa que envia cupons de desconto para os clientes.",
      "E": "Um servidor com alta performance usado para mineração de dados."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Honeypot é uma armadilha. É um servidor que parece importante (ex: 'Banco de Dados Financeiro'), mas é falso. Enquanto o hacker tenta invadir ele, a equipe de segurança fica assistindo tudo para aprender como ele trabalha e bloquear o ataque real.",
      "puloDoGato": "Honeypot = Isca para hackers.",
      "cascasDeBanana": {
        "A": "Incorreta. Não tem função produtiva de dados.",
        "B": "Correta. Excelente ferramenta de inteligência de ameaças.",
        "C": "Incorreta. Piada literal.",
        "D": "Incorreta. Seria perigoso demais usar o servidor real como isca.",
        "E": "Incorreta. É uma ferramenta de defesa, não um malware."
      },
      "dicaDeOuro": "Honeypot: Engane o invasor para proteger o real."
    }
  },
  {
    "id": "q_f3_190",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Malwares - Cavalo de Troia (Trojan)",
    "difficulty": "Fácil",
    "statement": "Como um 'Cavalo de Troia' (Trojan) geralmente infecta um computador?",
    "options": {
      "A": "Ele entra através de buracos físicos no gabinete do computador.",
      "B": "Ele é instalado automaticamente pelo Windows original.",
      "C": "Ele infecta o computador através da rede elétrica.",
      "D": "Ele se disfarça de um programa legítimo ou útil (como um jogo ou utilitário) que o próprio usuário baixa e executa.",
      "E": "Ele só infecta computadores que estão desligados."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "É igual à lenda grega: você recebe um presente (um programa grátis, um instalador 'crackeado'), mas dentro dele tem um invasor escondido. Quando você abre o programa, o vírus ganha acesso ao seu sistema. A culpa não é da falha de software, é do usuário que confiou.",
      "puloDoGato": "Trojan = Presente de Grego (Disfarce).",
      "cascasDeBanana": {
        "A": "Incorreta. Absurdo físico.",
        "D": "Correta. Forma clássica de infecção que explora a engenharia social.",
        "C": "Incorreta. Absurdo físico.",
        "B": "Incorreta. Softwares originais buscam evitar isso.",
        "E": "Incorreta. Software precisa de energia e CPU para rodar."
      },
      "dicaDeOuro": "Nunca rode programas de fontes desconhecidas."
    }
  },
  {
    "id": "q_f3_191",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Escopo - EAP / WBS (Estrutura Analítica do Projeto)",
    "difficulty": "Médio",
    "statement": "O que é a EAP (Estrutura Analítica do Projeto) ou WBS (Work Breakdown Structure)?",
    "options": {
      "A": "Um gráfico que mostra a velocidade da internet durante o dia.",
      "B": "Uma decomposição hierárquica e orientada a entregas de todo o trabalho a ser executado pela equipe para atingir os objetivos do projeto.",
      "C": "Uma lista de todos os funcionários da empresa por ordem de salário.",
      "D": "O código-fonte do sistema organizado em pastas.",
      "E": "A lista de compras de materiais de escritório."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A EAP é o projeto 'despedaçado'. Você pega o 'Sistema Petrobras' e divide em: 'Banco de Dados', 'Interface', 'Segurança'. Depois divide cada um desses em partes menores até ter pacotes de trabalho fáceis de gerenciar. Se não está na EAP, não está no projeto.",
      "puloDoGato": "EAP = Mapa visual do escopo (O QUE será feito).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria um organograma ou folha de pagamento.",
        "B": "Correta. Ferramenta visual essencial para evitar o esquecimento de partes do escopo.",
        "C": "Incorreta. EAP é nível de gestão, não de diretórios de código.",
        "D": "Incorreta. Monitoramento de rede.",
        "E": "Incorreta. Pode ser parte, mas a EAP é muito mais ampla."
      },
      "dicaDeOuro": "EAP: Divida para conquistar o escopo."
    }
  },
  {
    "id": "q_f3_192",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Papéis (Product Owner)",
    "difficulty": "Fácil",
    "statement": "No framework Scrum, qual a principal responsabilidade do Product Owner (PO)?",
    "options": {
      "A": "Garantir que ninguém chegue atrasado na Daily Scrum.",
      "B": "Maximizar o valor do produto e gerenciar o Backlog do Produto (priorizando o que traz mais retorno ao negócio).",
      "C": "Configurar os servidores de banco de dados.",
      "D": "Fazer o café para a equipe de desenvolvimento.",
      "E": "Escrever todo o código-fonte do sistema."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O PO é a voz do cliente dentro do time. Ele decide o 'QUÊ' deve ser feito. Ele não manda no 'COMO' (isso é com o time de dev), mas ele garante que o time está gastando energia naquilo que realmente importa para a Petrobras.",
      "puloDoGato": "PO = Dono do Valor e do Backlog.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é responsabilidade dos Developers.",
        "B": "Correta. Papel focado no ROI e na visão de negócio.",
        "C": "Incorreta. Isso seria mais próximo do papel do Scrum Master (como facilitador).",
        "D": "Incorreta. Tarefa técnica de infra/dev.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "PO: Priorize o que dá mais valor."
    }
  },
  {
    "id": "q_f3_193",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Eventos (Retrospectiva)",
    "difficulty": "Médio",
    "statement": "Qual o objetivo da 'Sprint Retrospective' no Scrum?",
    "options": {
      "A": "Calcular o bônus financeiro de cada programador.",
      "B": "Revisar como a última Sprint foi em relação a pessoas, relacionamentos, processos e ferramentas, visando a melhoria contínua do time.",
      "C": "Treinar os usuários no uso do software.",
      "D": "Mostrar o que foi construído para o cliente final.",
      "E": "Decidir quais novas funcionalidades entrarão no sistema daqui a um ano."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "A retrospectiva é o momento de 'lavar a roupa suja' (com respeito). O time olha pra trás e pergunta: 'O que foi bom? O que foi ruim? Como podemos ser melhores na próxima sprint?'. É o momento de ajustar o processo interno.",
      "puloDoGato": "Retrospectiva = Foco no TIME e no PROCESSO. (Não confunda com a Review, que foca no PRODUTO).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é a Sprint Review.",
        "B": "Correta. Evento focado na melhoria contínua (Kaizen).",
        "C": "Incorreta. Isso seria planejamento de roadmap de longo prazo.",
        "D": "Incorreta. Scrum não prescreve regras de bônus financeiro.",
        "E": "Incorreta. Treinamento é atividade operacional pós-entrega."
      },
      "dicaDeOuro": "Retrospectiva: Olhe para dentro para crescer fora."
    }
  },
  {
    "id": "q_f3_194",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Qualidade - Diagrama de Ishikawa",
    "difficulty": "Médio",
    "statement": "Para que serve o Diagrama de Ishikawa (também conhecido como Espinha de Peixe)?",
    "options": {
      "A": "Para listar os nomes de todos os peixes encontrados no mar.",
      "B": "Para desenhar a arquitetura de microserviços.",
      "C": "Para calcular o tempo médio de resposta de um servidor.",
      "D": "Para organizar a hierarquia de pastas do Google Drive.",
      "E": "Para identificar as causas raízes de um problema ou defeito, dividindo-as em categorias (como Máquina, Método, Mão de Obra, etc.)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Ishikawa ajuda você a não ficar só 'apagando incêndio'. Se o sistema caiu, por que caiu? Foi o Servidor (Máquina)? Foi o código mal escrito (Mão de Obra)? Foi a falta de teste (Método)? Você investiga a origem do problema.",
      "puloDoGato": "Ishikawa = Diagrama de Causa e Efeito.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada literal.",
        "E": "Correta. Uma das 7 ferramentas da qualidade clássicas.",
        "B": "Incorreta. Não é diagrama de arquitetura.",
        "C": "Incorreta. Isso é métrica de performance.",
        "D": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Ishikawa: Vá direto na raiz do problema."
    }
  },
  {
    "id": "q_f3_199",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Protocolos - SNMP",
    "difficulty": "Difícil",
    "statement": "Para que serve o protocolo SNMP (Simple Network Management Protocol)?",
    "options": {
      "A": "Para traduzir endereços MAC em endereços IP.",
      "B": "Para gerenciar e monitorar dispositivos em redes IP (como roteadores, switches e servidores), coletando métricas de performance e alertas.",
      "C": "Para aumentar a segurança de redes Wi-Fi públicas.",
      "D": "Para hospedar sites de vídeo.",
      "E": "Para enviar e-mails em massa."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O SNMP é o 'espião' do administrador. Ele pergunta pro roteador: 'Como está o uso da CPU? Alguma porta caiu?'. Com ele, você consegue montar aqueles dashboards de monitoramento que mostram a saúde da rede em tempo real (ex: Zabbix, PRTG).",
      "puloDoGato": "SNMP = Monitoramento de Ativos de Rede.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é SMTP.",
        "B": "Correta. Protocolo padrão para gerência de redes.",
        "C": "Incorreta. Não tem função direta de segurança de rádio.",
        "D": "Incorreta. Isso é o ARP.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "SNMP: Saiba o que está acontecendo com seus roteadores."
    }
  },
  {
    "id": "q_f3_200",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Segurança de Rede - VPN",
    "difficulty": "Médio",
    "statement": "Qual o benefício principal de uma VPN (Virtual Private Network)?",
    "options": {
      "A": "Substituir a necessidade de ter um provedor de internet.",
      "B": "Tornar o download de arquivos ilegais impossível de ser detectado.",
      "C": "Criar um 'túnel' criptografado seguro sobre uma rede pública (internet), permitindo o acesso remoto seguro à rede interna da empresa.",
      "D": "Bloquear fisicamente a entrada de estranhos na empresa.",
      "E": "Aumentar a largura de banda física da conexão residencial."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "A VPN permite que o funcionário em Home Office trabalhe como se estivesse dentro da Petrobras. Ela 'embrulha' os dados em uma camada de criptografia. Mesmo que alguém intercepte o pacote no meio do caminho, não conseguirá ler nada.",
      "puloDoGato": "VPN = Túnel Seguro na Internet Pública.",
      "cascasDeBanana": {
        "B": "Incorreta. Embora ofereça privacidade, não é essa a função corporativa/técnica.",
        "C": "Correta. Essencial para o trabalho remoto seguro.",
        "E": "Incorreta. VPN costuma até diminuir um pouco a velocidade devido ao overhead de criptografia.",
        "A": "Incorreta. Você continua precisando de internet para a VPN funcionar.",
        "D": "Incorreta. Absurdo de política de senhas."
      },
      "dicaDeOuro": "VPN: Segurança para quem está fora da rede local."
    }
  },
  {
    "id": "q_f3_201",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Sequência",
    "difficulty": "Médio",
    "statement": "No diagrama de Sequência da UML, o que representa a 'Linha de Vida' (Lifeline)?",
    "options": {
      "A": "A data de validade do software.",
      "B": "O tempo total de vida do programador que fez o sistema.",
      "C": "O caminho que o mouse percorre na tela.",
      "D": "A conexão física entre dois servidores.",
      "E": "A existência de um objeto ao longo do tempo e as interações (mensagens) que ele realiza com outros objetos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Imagine uma conversa. A Linha de Vida é a pessoa (ou objeto) parada ali. As setas que vão e vêm entre as linhas são as mensagens trocadas. Se a linha tem um retângulo (ativação), significa que o objeto está 'processando' algo naquele momento.",
      "puloDoGato": "Linha de Vida = Objeto + Tempo (Vertical).",
      "cascasDeBanana": {
        "B": "Incorreta. Piada literal.",
        "E": "Correta. Elemento central para modelagem de comportamento dinâmico.",
        "A": "Incorreta. Absurdo.",
        "D": "Incorreta. Isso seria um diagrama de implantação/redes.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Sequência: Quem fala com quem e em qual ordem."
    }
  },
  {
    "id": "q_f3_202",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Classes",
    "difficulty": "Fácil",
    "statement": "O que representa um 'Atributo' em uma classe no Diagrama de Classes da UML?",
    "options": {
      "A": "O nome do arquivo onde a classe está salva.",
      "B": "Uma característica ou dado que a classe armazena (ex: nome, idade, saldo).",
      "C": "Uma ação ou comportamento que a classe pode realizar.",
      "D": "O preço da licença para usar aquela classe.",
      "E": "A cor do fundo do diagrama."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Atributo é a 'variável' da classe. Se a classe é 'Carro', os atributos são 'cor', 'modelo', 'placa'. As 'ações' como 'acelerar()' e 'frear()' são chamadas de Operações ou Métodos.",
      "puloDoGato": "Atributo = Dado (O que ela TEM). Método = Ação (O que ela FAZ).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é um Método/Operação.",
        "B": "Correta. Define a estrutura de dados do objeto.",
        "C": "Incorreta. Irrelevante para o modelo lógico.",
        "D": "Incorreta. Absurdo comercial.",
        "E": "Incorreta. Estético."
      },
      "dicaDeOuro": "Atributo: O substantivo da classe."
    }
  },
  {
    "id": "q_f3_203",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Padrões de Projeto - Singleton",
    "difficulty": "Difícil",
    "statement": "Qual o objetivo do padrão de projeto (Design Pattern) 'Singleton'?",
    "options": {
      "A": "Permitir a criação de mil instâncias da mesma classe ao mesmo tempo.",
      "B": "Deletar todos os arquivos solteiros (single) do servidor.",
      "C": "Garantir que uma classe tenha apenas uma única instância em todo o sistema e fornecer um ponto de acesso global a ela.",
      "D": "Fazer o código rodar em apenas um processador (Single Core).",
      "E": "Impedir que mais de um usuário acesse o site."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Sabe a conexão com o banco de dados ou o gerenciador de logs? Você não quer criar 500 deles, quer um só que todo mundo use. O Singleton garante isso: se você tentar criar um novo, ele te devolve aquele que já existia.",
      "puloDoGato": "Singleton = Uma Única Instância.",
      "cascasDeBanana": {
        "A": "Incorreta. É exatamente o oposto.",
        "C": "Correta. Padrão criacional clássico do GoF.",
        "D": "Incorreta. Nada a ver com hardware.",
        "B": "Incorreta. Piada literal.",
        "E": "Incorreta. Singleton é sobre objetos no código, não sessões de usuários."
      },
      "dicaDeOuro": "Singleton: Onde 'menos é mais' (e um é o bastante)."
    }
  },
  {
    "id": "q_f3_204",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Padrões de Projeto - Factory Method",
    "difficulty": "Médio",
    "statement": "O que o padrão 'Factory Method' propõe para a criação de objetos?",
    "options": {
      "A": "Que todos os objetos sejam criados no início do programa (Eager Loading).",
      "B": "A proibição do uso da palavra-chave 'new' no código.",
      "C": "O uso de uma fábrica física para montar computadores.",
      "D": "Definir uma interface para criar um objeto, mas deixar que as subclasses decidam qual classe instanciar.",
      "E": "Que os objetos sejam criados manualmente pelo usuário final."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Em vez de você dar um 'new Carro()' no meio do seu código, você pede pra 'Fábrica' te dar um transporte. Se amanhã você precisar de uma 'Moto', você só muda a fábrica, e o resto do seu código nem percebe a mudança.",
      "puloDoGato": "Factory = Desacoplamento da criação de objetos.",
      "cascasDeBanana": {
        "E": "Incorreta. O usuário não mexe no código de instanciação.",
        "D": "Correta. Promove a flexibilidade e o princípio da inversão de dependência.",
        "A": "Incorreta. Factory pode usar Lazy Loading perfeitamente.",
        "C": "Incorreta. Piada literal.",
        "B": "Incorreta. A Factory usará o 'new' internamente, você apenas esconde isso do cliente."
      },
      "dicaDeOuro": "Factory: Peça o produto, não se preocupe com a montagem."
    }
  },
  {
    "id": "q_f3_206",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Engenharia de Software - Coesão",
    "difficulty": "Médio",
    "statement": "O que significa o conceito de 'Alta Coesão' em um módulo de software?",
    "options": {
      "A": "Que o módulo depende de 50 outras classes para funcionar.",
      "B": "Que o código foi escrito por mais de 10 pessoas.",
      "C": "Que o módulo faz muitas coisas diferentes ao mesmo tempo.",
      "D": "Que o módulo ocupa pouco espaço no disco.",
      "E": "Que as responsabilidades de um módulo (classe/função) estão fortemente relacionadas e focadas em um único objetivo ou propósito claro."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Um módulo coeso é como um especialista: se ele é o 'Calculador de Impostos', ele só calcula impostos. Ele não envia e-mail, não salva no banco, não limpa a tela. Se o módulo faz de tudo um pouco, ele tem 'Baixa Coesão' e é um pesadelo de manter.",
      "puloDoGato": "Alta Coesão = Foco Total em uma tarefa única.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria Baixa Coesão (módulo faz-tudo).",
        "E": "Correta. Princípio fundamental de design (SOLID/GRASP).",
        "A": "Incorreta. Isso seria Alto Acoplamento.",
        "B": "Incorreta. Autoria não define coesão técnica.",
        "D": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Coesão: Cada um no seu quadrado, fazendo bem feito."
    }
  },
  {
    "id": "q_f3_207",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Engenharia de Software - Acoplamento",
    "difficulty": "Médio",
    "statement": "Por que o 'Baixo Acoplamento' é desejável em arquiteturas de sistemas?",
    "options": {
      "A": "Porque obriga o uso de apenas um banco de dados.",
      "B": "Porque aumenta o custo de desenvolvimento.",
      "C": "Porque faz com que todos os módulos precisem estar na mesma pasta.",
      "D": "Porque torna o sistema impossível de ser testado.",
      "E": "Porque reduz a dependência entre os módulos, permitindo que mudanças em uma parte do sistema não gerem efeitos colaterais (bugs) em cascata em outras partes."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Acoplamento é o 'grude'. Se o módulo A está muito grudado no B, você não consegue mexer em um sem quebrar o outro. Baixo acoplamento significa que os módulos são independentes e conversam através de interfaces simples.",
      "puloDoGato": "Baixo Acoplamento = Independência entre as partes.",
      "cascasDeBanana": {
        "D": "Incorreta. Na verdade, facilita muito os testes unitários.",
        "E": "Correta. Facilita a manutenção e a evolução do software.",
        "C": "Incorreta. Localização física (pastas) não define acoplamento lógico.",
        "B": "Incorreta. Reduz o custo de manutenção a longo prazo.",
        "A": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Software bom é software 'soltinho' (baixo acoplamento)."
    }
  },
  {
    "id": "q_f3_208",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Segurança da Informação",
    "topic": "Princípios - Não Repúdio",
    "difficulty": "Difícil",
    "statement": "O que garante o princípio do 'Não Repúdio' na segurança da informação?",
    "options": {
      "A": "Garante que o sistema nunca vai dizer 'não' para o usuário.",
      "B": "Garante que o autor de uma ação ou transação não possa negar que a realizou (geralmente através de assinaturas digitais).",
      "C": "Garante que todos os e-mails sejam respondidos em 5 minutos.",
      "D": "Garante que a senha do usuário nunca expire.",
      "E": "Garante que o computador não vai desligar sozinho."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Não Repúdio é o 'tá assinado, tá falado'. Se você assina digitalmente um contrato, você não pode vir depois dizer 'não fui eu'. Existe uma prova técnica e legal de que a ação partiu da sua chave privada.",
      "puloDoGato": "Não Repúdio = Impossibilidade de negar a autoria.",
      "cascasDeBanana": {
        "A": "Incorreta. Piada literal.",
        "B": "Correta. Pilar essencial para o comércio eletrônico e governança digital.",
        "C": "Incorreta. Isso seria Disponibilidade.",
        "D": "Incorreta. Acordo de Nível de Serviço (SLA), não segurança.",
        "E": "Incorreta. Absurdo de política de senhas."
      },
      "dicaDeOuro": "Não Repúdio: A prova de que foi você mesmo."
    }
  },
  {
    "id": "q_f3_209",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Casos de Uso (Relacionamento Extend)",
    "difficulty": "Médio",
    "statement": "No diagrama de Casos de Uso, o relacionamento '<<extend>>' indica que:",
    "options": {
      "A": "Um caso de uso herda todas as características do outro.",
      "B": "O caso de uso base sempre chama o caso de uso estendido.",
      "C": "O caso de uso estendido é opcional e ocorre apenas sob certas condições pré-definidas no caso de uso base.",
      "D": "O programador deve estender o prazo de entrega.",
      "E": "O sistema deve ser estendido para outro país."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Pense no 'Sacar Dinheiro' (Caso de Uso Base). 'Emitir Recibo' (<<extend>>) só acontece se o usuário pedir. Não é obrigatório toda vez. Já o 'Validar Senha' (<<include>>) é obrigatório em todo saque.",
      "puloDoGato": "Extend = Opcional/Condicional. Include = Obrigatório.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria o <<include>>.",
        "C": "Correta. Representa fluxos alternativos ou opcionais.",
        "E": "Incorreta. Piada geográfica.",
        "D": "Incorreta. Absurdo administrativo.",
        "A": "Incorreta. Isso seria Generalização/Especialização."
      },
      "dicaDeOuro": "Extend: Só acontece 'se'."
    }
  },
  {
    "id": "q_f3_210",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Infraestrutura e Redes",
    "topic": "Dispositivos - Load Balancer (Balanceador de Carga)",
    "difficulty": "Médio",
    "statement": "Para que serve um 'Load Balancer' em uma arquitetura de alta disponibilidade?",
    "options": {
      "A": "Para aumentar a voltagem da rede elétrica dos racks.",
      "B": "Para deletar usuários que não acessam o site há muito tempo.",
      "C": "Para pesar os servidores fisicamente e ver qual é mais pesado.",
      "D": "Para converter arquivos de vídeo em áudio.",
      "E": "Para distribuir o tráfego de entrada entre vários servidores, evitando que um único servidor fique sobrecarregado e garantindo que o sistema continue online se um deles falhar."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Load Balancer é o 'maestro' do tráfego. Chegam 1.000 pessoas no site: ele manda 250 pro Servidor A, 250 pro B, e assim por diante. Se o Servidor C explodir, ele simplesmente para de mandar gente pra lá e ninguém percebe a queda.",
      "puloDoGato": "Load Balancer = Distribuição de Carga + Tolerância a Falhas.",
      "cascasDeBanana": {
        "C": "Incorreta. Piada literal.",
        "E": "Correta. Peça fundamental para escalar aplicações web.",
        "A": "Incorreta. Isso seria um Estabilizador/Nobreak.",
        "B": "Incorreta. Gestão de base de usuários.",
        "D": "Incorreta. Transcoding."
      },
      "dicaDeOuro": "Load Balancer: Um por todos e todos pelo site online."
    }
  },
  {
    "id": "q_f3_219",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Cronograma - Gráfico de Gantt",
    "difficulty": "Fácil",
    "statement": "Qual a principal característica visual de um Gráfico de Gantt?",
    "options": {
      "A": "Uma barra horizontal para cada atividade, disposta ao longo de uma linha do tempo, mostrando o início, duração e fim de cada tarefa.",
      "B": "Uma lista de nomes em ordem alfabética.",
      "C": "Um mapa mundi com as sedes da empresa.",
      "D": "Um gráfico de pizza com os custos do projeto.",
      "E": "Um círculo dividido em fatias coloridas."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Gantt é o 'calendário' do projeto. Você bate o olho e vê: 'A tarefa A começa segunda e termina quarta. A tarefa B só começa depois que a A terminar'. É a melhor forma de visualizar o cronograma e as dependências.",
      "puloDoGato": "Gantt = Barras horizontais no tempo.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso é um gráfico de Pizza (Pie Chart).",
        "A": "Correta. Ferramenta de visualização padrão em ferramentas como MS Project.",
        "B": "Incorreta. Isso é uma lista/tabela simples.",
        "C": "Incorreta. Geoprocessamento.",
        "D": "Incorreta. Gantt foca em tempo, não em distribuição de custos (embora possa ter info de custo)."
      },
      "dicaDeOuro": "Gantt: Veja o tempo fluindo nas barras."
    }
  },
  {
    "id": "q_f3_220",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Gestão de Projetos",
    "topic": "Riscos - Respostas aos Riscos",
    "difficulty": "Médio",
    "statement": "Se um gerente de projeto decide contratar um seguro para cobrir possíveis danos em equipamentos caros, qual estratégia de resposta ao risco ele está adotando?",
    "options": {
      "A": "Evitar (Avoid).",
      "B": "Transferir (Transfer).",
      "C": "Ignorar (Ignore).",
      "D": "Mitigar (Mitigate).",
      "E": "Aceitar (Accept)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Transferir é passar o 'prejuízo' para um terceiro (seguradora ou contrato). O risco ainda existe (o equipamento pode quebrar), mas o impacto financeiro não será mais do seu projeto, e sim de quem você contratou para assumir a bucha.",
      "puloDoGato": "Seguro = Transferência de Risco.",
      "cascasDeBanana": {
        "A": "Incorreta. Evitar seria desistir de usar o equipamento para o risco sumir.",
        "D": "Incorreta. Mitigar seria fazer manutenção preventiva para diminuir a chance de quebra.",
        "B": "Correta. Estratégia clássica para riscos financeiros.",
        "E": "Incorreta. Aceitar seria não fazer nada e pagar do próprio bolso se quebrar.",
        "C": "Incorreta. Ignorar não é uma estratégia formal do PMBOK (embora a aceitação passiva pareça isso)."
      },
      "dicaDeOuro": "Contratou terceiro? Transferiu o risco."
    }
  },
  {
    "id": "q_f3_221",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "SOLID - Single Responsibility Principle (SRP)",
    "difficulty": "Fácil",
    "statement": "O que diz o Princípio da Responsabilidade Única (SRP) do SOLID?",
    "options": {
      "A": "Que cada programador só pode trabalhar em uma classe por vez.",
      "B": "Que uma classe deve ter um, e apenas um, motivo para mudar (ou seja, deve ter apenas uma responsabilidade).",
      "C": "Que o sistema só deve ter um usuário administrador.",
      "D": "Que todas as classes devem ser salvas no mesmo arquivo.",
      "E": "Que a classe não pode ter mais de 10 linhas de código."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Se a sua classe 'Pedido' gera o PDF, salva no banco e manda e-mail, ela tem 3 motivos para mudar. Se o layout do PDF mudar, você mexe na classe Pedido. Se o banco mudar, mexe nela de novo. O SRP diz: separe! Tenha uma classe só para o PDF, outra para o Banco.",
      "puloDoGato": "SRP = Uma classe, um foco.",
      "cascasDeBanana": {
        "A": "Incorreta. Nada a ver com gestão de pessoas.",
        "B": "Correta. Aumenta a coesão e facilita a manutenção.",
        "C": "Incorreta. Regra de negócio/acesso.",
        "D": "Incorreta. Pioraria a manutenção.",
        "E": "Incorreta. O tamanho não é a regra, mas sim a lógica de responsabilidade."
      },
      "dicaDeOuro": "SRP: Não crie classes 'faz-tudo'."
    }
  },
  {
    "id": "q_f3_222",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "SOLID - Open/Closed Principle (OCP)",
    "difficulty": "Difícil",
    "statement": "Qual a essência do Princípio Aberto/Fechado (OCP)?",
    "options": {
      "A": "As portas da empresa devem estar sempre abertas.",
      "B": "As classes devem estar abertas para leitura e fechadas para escrita.",
      "C": "O código deve ser aberto para o público (Open Source).",
      "D": "Entidades de software devem estar abertas para extensão, mas fechadas para modificação.",
      "E": "O sistema deve ser fechado após às 18h."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você precisa adicionar um novo tipo de pagamento (ex: Pix) e tem que sair alterando o código da classe 'CalculadoraDeVendas' que já funcionava, você violou o OCP. O ideal é que a calculadora aceite qualquer 'FormaDePagamento' genérica. Você adiciona o Pix criando uma nova classe, sem tocar na que já estava estável.",
      "puloDoGato": "OCP = Adicione novos comportamentos sem mudar o código antigo.",
      "cascasDeBanana": {
        "B": "Incorreta. Termos de permissão de arquivo, não de design.",
        "D": "Correta. Base do uso de interfaces e herança/polimorfismo.",
        "C": "Incorreta. Confusão com o termo 'Open Source'.",
        "A": "Incorreta. Piada.",
        "E": "Incorreta. Piada."
      },
      "dicaDeOuro": "OCP: Extensão sim, Alteração não."
    }
  },
  {
    "id": "q_f3_223",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Estados",
    "difficulty": "Médio",
    "statement": "Para que serve o Diagrama de Máquina de Estados na UML?",
    "options": {
      "A": "Para calcular o consumo de memória do objeto.",
      "B": "Para organizar o banco de dados.",
      "C": "Para mostrar como os servidores estão ligados na rede.",
      "D": "Para listar os estados do Brasil onde a empresa atua.",
      "E": "Para descrever o ciclo de vida de um objeto, mostrando os diferentes estados que ele pode assumir e os eventos que causam a transição entre eles."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Pense em um 'Pedido'. Ele nasce como 'Pendente'. Se o pagamento cair, ele muda para 'Pago'. Se for enviado, muda para 'Em Trânsito'. O diagrama mostra as 'bolinhas' (estados) e as 'setinhas' (o que faz mudar).",
      "puloDoGato": "Estados = Situações do Objeto. Transições = Mudanças.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso é Diagrama de Implantação.",
        "E": "Correta. Essencial para modelar lógica de negócio complexa (workflow).",
        "D": "Incorreta. Piada geográfica.",
        "A": "Incorreta. Perfilamento de código.",
        "B": "Incorreta. Diagrama ER."
      },
      "dicaDeOuro": "Estado: Onde o objeto está 'parado' esperando algo acontecer."
    }
  },
  {
    "id": "q_f3_224",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Casos de Uso (Include)",
    "difficulty": "Fácil",
    "statement": "No UML, o relacionamento '<<include>>' entre dois Casos de Uso significa que:",
    "options": {
      "A": "O caso de uso incluído é opcional.",
      "B": "O sistema inclui um manual de instruções.",
      "C": "O caso de uso deve ser deletado.",
      "D": "O caso de uso base obrigatoriamente chama/executa o comportamento do caso de uso incluído.",
      "E": "Um caso de uso é maior que o outro."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O include é o 'não tem escapatória'. Se você vai 'Realizar Compra', você PRECISA 'Validar Cartão'. O comportamento do incluído é parte obrigatória do fluxo do base. Sem ele, o base não se completa.",
      "puloDoGato": "Include = Obrigatório. Extend = Opcional.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é o <<extend>>.",
        "D": "Correta. Usado para reutilizar lógica comum a vários casos de uso.",
        "B": "Incorreta. Piada.",
        "E": "Incorreta. Não é sobre tamanho, mas sobre dependência de execução.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Include: Se fizer A, tem que fazer B."
    }
  },
  {
    "id": "q_f3_225",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Requisitos - Requisitos Não Funcionais (RNF)",
    "difficulty": "Médio",
    "statement": "Qual dos itens abaixo é um exemplo clássico de Requisito Não Funcional?",
    "options": {
      "A": "O sistema deve emitir um relatório de vendas mensal.",
      "B": "O sistema deve permitir o cadastro de novos clientes.",
      "C": "O sistema deve permitir a exclusão de registros.",
      "D": "O sistema deve responder a qualquer consulta em menos de 2 segundos.",
      "E": "O sistema deve calcular o desconto de 10% para pagamentos à vista."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Requisito Funcional é o 'O QUE' o sistema faz (cadastra, apaga, calcula). Requisito Não Funcional é 'COMO' ele faz (é rápido? é seguro? é bonito? roda em Linux?). Performance, segurança e usabilidade são as estrelas dos RNFs.",
      "puloDoGato": "Funcional = Ação. Não Funcional = Atributo de Qualidade.",
      "cascasDeBanana": {
        "B": "Incorreta. É funcional (ação de cadastrar).",
        "A": "Incorreta. É funcional (ação de emitir relatório).",
        "D": "Correta. Define um critério de performance (qualidade).",
        "E": "Incorreta. É funcional (regra de cálculo).",
        "C": "Incorreta. É funcional (ação de excluir)."
      },
      "dicaDeOuro": "RNF: Os 'adesivos' de qualidade que colamos no sistema."
    }
  },
  {
    "id": "q_f3_226",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "UML - Visibilidade (+, -, #)",
    "difficulty": "Médio",
    "statement": "Na UML, o símbolo '#' antes de um atributo ou método indica qual visibilidade?",
    "options": {
      "A": "Estática (Static).",
      "B": "Privada (Private).",
      "C": "Pública (Public).",
      "D": "Pacote (Package).",
      "E": "Protegida (Protected)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É o código secreto dos diagramas. + (público, todo mundo vê), - (privado, só a classe vê), # (protegido, só a classe e as filhas dela vêem). Decore isso, cai em toda prova de UML.",
      "puloDoGato": "+ Public, - Private, # Protected, ~ Package.",
      "cascasDeBanana": {
        "C": "Incorreta. Símbolo '+'.",
        "B": "Incorreta. Símbolo '-'.",
        "E": "Correta. Visibilidade relacionada à herança.",
        "D": "Incorreta. Símbolo '~'.",
        "A": "Incorreta. Sublinhado indica estático."
      },
      "dicaDeOuro": "Hashtag (#) na UML é Protected."
    }
  },
  {
    "id": "q_f3_227",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Modelos de Ciclo de Vida - Modelo Cascata (Waterfall)",
    "difficulty": "Fácil",
    "statement": "Qual a principal crítica ao modelo de desenvolvimento em Cascata (Waterfall)?",
    "options": {
      "A": "Sua rigidez e a dificuldade de lidar com mudanças de requisitos, já que uma fase só começa quando a anterior termina completamente.",
      "B": "Ele é rápido demais e o cliente não consegue acompanhar.",
      "C": "Ele não permite o uso de banco de dados.",
      "D": "A obrigatoriedade de usar a linguagem Java.",
      "E": "O uso excessivo de reuniões diárias."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O Cascata é 'perfeito' num mundo onde ninguém muda de ideia. Na vida real, o cliente só vê o software no final de meses de trabalho. Se ele não gostar, o prejuízo é gigante porque você já passou por todas as fases e não dá pra 'voltar a água do rio'.",
      "puloDoGato": "Cascata = Rígido e Sequencial. Ágil = Flexível e Iterativo.",
      "cascasDeBanana": {
        "B": "Incorreta. Pelo contrário, costuma ser mais lento devido à burocracia de fases.",
        "A": "Correta. Motivo principal da criação dos métodos ágeis.",
        "E": "Incorreta. Isso é característica do Scrum (Ágil).",
        "D": "Incorreta. Independe de tecnologia.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Cascata: Bom para projetos simples e imutáveis. Péssimo para o resto."
    }
  },
  {
    "id": "q_f3_228",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Engenharia de Software - Prototipagem",
    "difficulty": "Fácil",
    "statement": "Qual o benefício de criar um protótipo de baixa fidelidade no início do projeto?",
    "options": {
      "A": "Validar ideias e fluxos de navegação com o usuário de forma rápida e barata, antes de investir em desenvolvimento real.",
      "B": "Substituir o manual do usuário.",
      "C": "Testar a carga máxima de usuários no servidor.",
      "D": "Gerar o código final do sistema automaticamente.",
      "E": "Impressionar os investidores com gráficos 3D complexos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Desenhar numa folha de papel ou no Figma (sem lógica por trás) é barato. Se o usuário disser 'não gostei desse botão aqui', você apaga e redesenha em 1 minuto. Se você já tivesse programado, levaria horas ou dias para mudar.",
      "puloDoGato": "Protótipo = Erre rápido e barato.",
      "cascasDeBanana": {
        "D": "Incorreta. Protótipos (especialmente os de baixa fidelidade) não geram código de produção.",
        "A": "Correta. Foco no feedback do usuário e mitigação de riscos de requisitos.",
        "E": "Incorreta. Baixa fidelidade não tem gráficos complexos.",
        "C": "Incorreta. Isso é teste de performance em sistema real.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Papel e caneta são as melhores ferramentas de prototipagem inicial."
    }
  },
  {
    "id": "q_f3_230",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Análise de Sistemas",
    "topic": "Arquitetura - Microserviços vs Monolítico",
    "difficulty": "Médio",
    "statement": "Qual a principal desvantagem de uma arquitetura de Microserviços em comparação a uma Monolítica?",
    "options": {
      "A": "O sistema não pode ser escalado.",
      "B": "A complexidade operacional de gerenciamento, rede e monitoramento de múltiplos serviços independentes.",
      "C": "O código fica muito pequeno e fácil de ler.",
      "D": "O banco de dados deve ser obrigatoriamente compartilhado por todos.",
      "E": "A impossibilidade de usar mais de uma linguagem de programação."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Microserviços resolvem o problema de escala, mas criam o problema da 'bagunça'. Em vez de cuidar de um 'leão' (monolito), você cuida de 50 'gatos' (serviços). Se um gato adoece, como você descobre qual foi? Exige muita automação (DevOps) e observabilidade.",
      "puloDoGato": "Microserviços = Agilidade no Dev, Pesadelo na Operação (se não houver preparo).",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é uma vantagem, não desvantagem.",
        "B": "Correta. O overhead de comunicação e infraestrutura é o maior custo.",
        "C": "Incorreta. Microserviços permitem (e incentivam) o poliglotismo tecnológico.",
        "D": "Incorreta. Microserviços são excelentes para escalar partes específicas do sistema.",
        "E": "Incorreta. O ideal em microserviços é o 'Banco por Serviço'."
      },
      "dicaDeOuro": "Não use microserviços se o seu time não domina a infraestrutura."
    }
  },
  {
    "id": "q_ds_1008",
    "discipline": "Ciência da Computação",
    "topic": "Complexidade de Algoritmos (Big O)",
    "statement": "Qual a complexidade de tempo no pior caso para o algoritmo de ordenação QuickSort?",
    "options": {
      "A": "O(n²).",
      "B": "O(n).",
      "C": "O(1).",
      "D": "O(n log n).",
      "E": "O(log n)."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é famoso por ser O(n log n) na média, mas se você der azar e escolher pivôs ruins em uma lista já ordenada (ou quase), ele degrada para O(n²).",
      "puloDoGato": "QuickSort: Média O(n log n), Pior Caso O(n²). MergeSort: Sempre O(n log n).",
      "cascasDeBanana": {
        "B": "Complexidade linear, impossível para ordenação baseada em comparação.",
        "D": "Complexidade média e melhor caso.",
        "E": "Busca binária é logarítmica.",
        "C": "Tempo constante."
      },
      "dicaDeOuro": "Para evitar o pior caso O(n²), utilize técnicas como 'Randomized QuickSort' ou o 'Median-of-three'."
    }
  },
  {
    "id": "q_ds_1009",
    "discipline": "Ciência da Computação",
    "topic": "Estruturas de Dados - Pilha vs Fila",
    "statement": "Uma estrutura de dados que segue o princípio LIFO (Last In, First Out) é denominada:",
    "options": {
      "A": "Tabela Hash.",
      "B": "Pilha (Stack).",
      "C": "Árvore Binária.",
      "D": "Lista Ligada.",
      "E": "Fila (Queue)."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "LIFO = O último que entra é o primeiro que sai. Imagine uma pilha de pratos: você coloca um em cima do outro e, na hora de tirar, tira o de cima (o último colocado).",
      "puloDoGato": "Pilha = LIFO. Fila = FIFO (First In, First Out).",
      "cascasDeBanana": {
        "A": "Fila é FIFO (o primeiro que chega é o primeiro atendido).",
        "B": "",
        "C": "Lista ligada é uma estrutura sequencial.",
        "D": "Árvore é hierárquica.",
        "E": "Hash é baseada em chave-valor."
      },
      "dicaDeOuro": "Pilhas são fundamentais para o gerenciamento de chamadas de funções (Call Stack) e algoritmos de desfazer (Undo)."
    }
  },
  {
    "id": "q_ds_1010",
    "discipline": "Ciência da Computação",
    "topic": "Sistemas Operacionais - Deadlock",
    "statement": "Quais são as quatro condições necessárias para que ocorra um deadlock em um sistema operacional?",
    "options": {
      "A": "Exclusão mútua, Posse e espera, Não preempção e Espera circular.",
      "B": "Leitura, Escrita, Execução e Deleção.",
      "C": "CPU, Memória, Disco e Rede.",
      "D": "Processo, Thread, Mutex e Semáforo.",
      "E": "Input, Output, Processamento e Armazenamento."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Deadlock é o 'abraço da morte'. Dois processos ficam travados esperando um pelo recurso do outro. Para isso acontecer, as 4 condições de Coffman precisam ser verdadeiras ao mesmo tempo.",
      "puloDoGato": "Deadlock = Exclusão Mútua + Posse/Espera + Sem Preempção + Espera Circular.",
      "cascasDeBanana": {
        "C": "Componentes físicos.",
        "D": "Primitivas de sincronização.",
        "B": "Permissões de arquivos.",
        "E": "Ciclo básico de computação."
      },
      "dicaDeOuro": "Remover qualquer uma das quatro condições (ex: permitir preempção) impede a formação de deadlocks."
    }
  },
  {
    "id": "q_ds_1011",
    "discipline": "Ciência da Computação",
    "topic": "Arquitetura de Computadores - Hierarquia de Memória",
    "statement": "Na hierarquia de memória de um computador, qual memória possui a menor latência (mais rápida) e a menor capacidade de armazenamento?",
    "options": {
      "A": "Memória Cache L3.",
      "B": "Memória RAM.",
      "C": "Disco Rígido (HDD).",
      "D": "SSD.",
      "E": "Registradores da CPU."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Os registradores estão dentro do 'cérebro' da CPU. Eles são ultrarrápidos, mas cabem pouquíssimos dados. Conforme você se afasta da CPU (Cache -> RAM -> SSD), a memória fica maior e mais lenta.",
      "puloDoGato": "Registradores > Cache L1 > L2 > L3 > RAM > SSD > HDD.",
      "cascasDeBanana": {
        "B": "RAM é rápida, mas bem mais lenta que registradores/cache.",
        "C": "Lento e grande.",
        "A": "Cache é rápida, mas L3 é a mais lenta das caches (L1 é a mais rápida).",
        "D": "Rápido, mas ainda é armazenamento secundário."
      },
      "dicaDeOuro": "O custo por byte aumenta conforme subimos na pirâmide da hierarquia de memória."
    }
  },
  {
    "id": "q_ds_1012",
    "discipline": "Ciência da Computação",
    "topic": "Protocolos de Rede",
    "statement": "O protocolo TCP (Transmission Control Protocol) opera em qual camada do modelo OSI?",
    "options": {
      "A": "Camada 7 - Aplicação.",
      "B": "Camada 1 - Física.",
      "C": "Camada 2 - Enlace.",
      "D": "Camada 3 - Rede.",
      "E": "Camada 4 - Transporte."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O TCP cuida do transporte confiável dos dados. Ele garante que os pacotes cheguem na ordem certa e sem erros. Por isso, ele mora na camada de Transporte.",
      "puloDoGato": "Camada 4 = Transporte (TCP/UDP). Camada 3 = Rede (IP).",
      "cascasDeBanana": {
        "B": "Cabo, rádio.",
        "C": "Ethernet, Wi-Fi (MAC).",
        "D": "Endereçamento IP.",
        "A": "HTTP, DNS, FTP."
      },
      "dicaDeOuro": "O TCP utiliza o 'Three-way Handshake' (SYN, SYN-ACK, ACK) para estabelecer conexões."
    }
  },
  {
    "id": "q_ds_1013",
    "discipline": "Ciência da Computação",
    "topic": "Bancos de Dados - Propriedades ACID",
    "statement": "Em bancos de dados relacionais, o que garante que uma transação seja concluída integralmente ou não tenha efeito nenhum (tudo ou nada)?",
    "options": {
      "A": "Atomicidade.",
      "B": "Disponibilidade.",
      "C": "Consistência.",
      "D": "Durabilidade.",
      "E": "Isolamento."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Atomicidade vem de 'átomo' (indivisível). Ou a transação acontece inteira ou ela volta ao estado original se der qualquer erro no meio. Não existe transação 'pela metade'.",
      "puloDoGato": "ACID: A = Atomicidade (Tudo ou Nada).",
      "cascasDeBanana": {
        "A": "",
        "B": "Consistência garante que as regras do banco (constraints) não sejam quebradas.",
        "C": "Isolamento garante que transações simultâneas não interfiram uma na outra.",
        "D": "Durabilidade garante que o dado não se perca após o commit (persitência em disco).",
        "E": "Parte do teorema CAP, não do ACID."
      },
      "dicaDeOuro": "O comando 'ROLLBACK' é usado para desfazer uma transação que falhou, mantendo a atomicidade."
    }
  },
  {
    "id": "q_ds_1014",
    "discipline": "Ciência da Computação",
    "topic": "Paradigmas de Programação",
    "statement": "O conceito de 'Encapsulamento' é um pilar de qual paradigma de programação?",
    "options": {
      "A": "Programação Lógica.",
      "B": "Programação Reativa.",
      "C": "Programação Procedural.",
      "D": "Programação Funcional.",
      "E": "Programação Orientada a Objetos (POO)."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Encapsulamento é 'esconder' a complexidade dentro de um objeto. Você expõe apenas o que é necessário e protege os dados internos (atributos) através de métodos (getters/setters).",
      "puloDoGato": "POO: Encapsulamento, Herança, Polimorfismo e Abstração.",
      "cascasDeBanana": {
        "D": "Foca em imutabilidade e funções puras.",
        "C": "Foca em sequências de procedimentos/funções.",
        "A": "Foca em axiomas e regras (ex: Prolog).",
        "B": "Foca em fluxos de dados e propagação de mudanças."
      },
      "dicaDeOuro": "Em Java e C#, modificadores de acesso como `private` e `protected` implementam o encapsulamento."
    }
  },
  {
    "id": "q_ds_1100",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Vetores e Matrizes",
    "statement": "Em Machine Learning, o produto escalar (dot product) entre dois vetores unitários é frequentemente utilizado para medir a similaridade entre eles. Se o produto escalar entre dois vetores é igual a 1, o que isso indica sobre a relação geométrica entre eles?",
    "options": {
      "A": "Os vetores possuem normas diferentes.",
      "B": "Os vetores são paralelos, mas apontam em direções opostas (ângulo de 180°).",
      "C": "Os vetores são paralelos e apontam na mesma direção (ângulo de 0°).",
      "D": "O produto vetorial entre eles também será igual a 1.",
      "E": "Os vetores são ortogonais (formam um ângulo de 90°)."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O produto escalar de vetores unitários é o cosseno do ângulo entre eles. Se o cosseno é 1, o ângulo é 0°. Ou seja, eles estão 'olhando' exatamente para o mesmo lugar. É a base da Similaridade de Cosseno usada em NLP.",
      "puloDoGato": "Produto Escalar = 1 (vetores unitários) -> Mesma direção (0°). Produto Escalar = 0 -> Ortogonais (90°).",
      "cascasDeBanana": {
        "E": "Se fossem ortogonais, o produto escalar seria 0.",
        "B": "Se fossem opostos, o produto escalar seria -1.",
        "A": "O enunciado diz que são vetores unitários (norma = 1).",
        "D": "O produto vetorial de vetores paralelos é o vetor nulo (0)."
      },
      "dicaDeOuro": "A Similaridade de Cosseno é muito usada para comparar documentos (vetores de palavras) pois foca na direção e não na magnitude."
    }
  },
  {
    "id": "q_ds_1101",
    "discipline": "Matemática",
    "topic": "Cálculo - Derivadas e Gradiente Descendente",
    "statement": "No algoritmo de Gradiente Descendente, utilizado para treinar redes neurais, o objetivo é minimizar uma função de perda. Em qual direção o vetor gradiente aponta em relação à função?",
    "options": {
      "A": "Na direção da segunda derivada (concavidade).",
      "B": "Tangencialmente às curvas de nível de valor constante.",
      "C": "Na direção de maior crescimento da função.",
      "D": "Sempre em direção à origem (0,0).",
      "E": "Na direção de maior decréscimo da função."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Cuidado com a pegadinha! O gradiente 'sobe a montanha' (aponta pro maior crescimento). No treino de ML, a gente quer 'descer a montanha' (minimizar o erro), por isso a fórmula é `peso = peso - learning_rate * gradiente`. O sinal de menos é que faz a gente ir no sentido oposto ao gradiente.",
      "puloDoGato": "Gradiente (∇f) aponta para CIMA. Gradiente Descendente usa o NEGATIVO do gradiente para ir para BAIXO.",
      "cascasDeBanana": {
        "E": "O NEGATIVO do gradiente aponta para o maior decréscimo.",
        "B": "O gradiente é ortogonal (perpendicular) às curvas de nível.",
        "D": "Não tem relação direta com a origem.",
        "A": "A segunda derivada é usada em métodos de segunda ordem (como o de Newton), não no gradiente simples."
      },
      "dicaDeOuro": "Pense no gradiente como uma bússola que sempre aponta para o pico mais alto."
    }
  },
  {
    "id": "q_ds_1102",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Decomposição em Valores Singulares (SVD)",
    "statement": "A técnica de PCA (Principal Component Analysis) é amplamente utilizada para redução de dimensionalidade. Matematicamente, o PCA está intimamente relacionado a qual conceito de álgebra linear?",
    "options": {
      "A": "Decomposição em Autovalores e Autovetores (ou SVD).",
      "B": "Regra de Cramer para matrizes esparsas.",
      "C": "Resolução de sistemas lineares por Eliminação de Gauss.",
      "D": "Inversão de matrizes não-quadradas.",
      "E": "Cálculo do Determinante de uma matriz identidade."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O PCA busca as direções de maior variância nos dados. Essas direções são justamente os 'autovetores' da matriz de covariância dos dados, e a importância de cada direção é dada pelo seu 'autovalor'.",
      "puloDoGato": "PCA = Autovetores (direção) + Autovalores (variância/importância).",
      "cascasDeBanana": {
        "D": "Embora SVD lide com matrizes não quadradas, a inversão não é o foco do PCA.",
        "C": "Eliminação de Gauss é para resolver equações, não para analisar variância.",
        "E": "Determinante é um escalar, PCA produz vetores.",
        "B": "Regra de Cramer é ineficiente e para outros fins."
      },
      "dicaDeOuro": "Os componentes principais são ordenados pelos autovalores decrescentes."
    }
  },
  {
    "id": "q_ds_1103",
    "discipline": "Matemática",
    "topic": "Estatística - Teorema Central do Limite",
    "statement": "O Teorema Central do Limite é um dos pilares da estatística inferencial. Ele afirma que a distribuição das médias amostrais de uma população tende a qual distribuição, independentemente da forma original da população (desde que a amostra seja grande)?",
    "options": {
      "A": "Distribuição de Bernoulli.",
      "B": "Distribuição Normal (ou Gaussiana).",
      "C": "Distribuição de Poisson.",
      "D": "Distribuição Uniforme.",
      "E": "Distribuição Exponencial."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Esse teorema é 'mágico'. Não importa se os seus dados originais são todos tortos ou estranhos. Se você tirar várias amostras e calcular a média de cada uma, o gráfico dessas médias sempre vai formar aquele desenho de 'sino' (Normal).",
      "puloDoGato": "TCL = Médias amostrais convergem para a Normal (sino).",
      "cascasDeBanana": {
        "A": "Poisson é para eventos raros em intervalo de tempo.",
        "B": "",
        "C": "Uniforme é quando tudo tem a mesma chance.",
        "D": "Bernoulli é para sim/não (0 ou 1).",
        "E": "Exponencial é para tempo entre eventos."
      },
      "dicaDeOuro": "Geralmente considera-se uma amostra 'grande' quando n > 30."
    }
  },
  {
    "id": "q_ds_1104",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Matrizes Esparsas",
    "statement": "Em problemas de NLP (Processamento de Linguagem Natural) que utilizam Bag-of-Words, as matrizes resultantes são frequentemente 'esparsas'. O que isso significa?",
    "options": {
      "A": "A grande maioria dos elementos da matriz são iguais a zero.",
      "B": "A matriz possui mais colunas do que linhas.",
      "C": "Os valores da matriz são números complexos.",
      "D": "A maioria dos elementos da matriz são iguais a 1.",
      "E": "A matriz não possui inversa."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine um dicionário de 50 mil palavras. Em uma frase curta, você usa só 10. A matriz terá 10 números e 49.990 zeros. Isso é uma matriz esparsa. Guardar todos esses zeros na memória é um desperdício gigante.",
      "puloDoGato": "Esparsa = Cheia de zeros. Densa = Cheia de valores úteis.",
      "cascasDeBanana": {
        "D": "Isso seria uma matriz quase cheia.",
        "B": "Isso é uma característica de formato (wide), não de densidade.",
        "E": "Matrizes esparsas podem ou não ser inversíveis.",
        "C": "Valores complexos são outra categoria matemática."
      },
      "dicaDeOuro": "Utilize bibliotecas como `scipy.sparse` para economizar memória ao lidar com essas matrizes."
    }
  },
  {
    "id": "q_ds_1105",
    "discipline": "Matemática",
    "topic": "Cálculo - Regra da Cadeia",
    "statement": "No algoritmo de Backpropagation (retropropagação), qual regra do cálculo diferencial é aplicada sucessivamente para calcular o impacto de cada peso no erro final da rede neural?",
    "options": {
      "A": "Regra do Produto.",
      "B": "Regra de L'Hôpital.",
      "C": "Teorema Fundamental do Cálculo.",
      "D": "Regra da Cadeia.",
      "E": "Regra do Quociente."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Uma rede neural é uma 'função de função de função...'. Para saber como o erro lá no final muda se eu mexer num neurônio lá no começo, eu preciso ir multiplicando as derivadas de cada camada. Isso é a Regra da Cadeia.",
      "puloDoGato": "Backpropagation = Aplicação em massa da Regra da Cadeia.",
      "cascasDeBanana": {
        "A": "Usada para derivar f(x)*g(x), mas não é o cerne da retropropagação.",
        "E": "Usada para divisões.",
        "C": "Relaciona derivadas e integrais.",
        "B": "Usada para calcular limites indeterminados (0/0)."
      },
      "dicaDeOuro": "Entender a regra da cadeia é entender como o gradiente 'flui' de volta pela rede."
    }
  },
  {
    "id": "q_ds_1106",
    "discipline": "Matemática",
    "topic": "Otimização - Mínimos Locais e Globais",
    "statement": "Ao otimizar uma função de perda não-convexa (como em Deep Learning), um dos maiores riscos do Gradiente Descendente é:",
    "options": {
      "A": "Aumentar o erro exponencialmente a cada iteração.",
      "B": "O gradiente se tornar infinito repentinamente.",
      "C": "Sempre encontrar a solução exata na primeira tentativa.",
      "D": "Ficar preso em um mínimo local em vez de encontrar o mínimo global.",
      "E": "Transformar a função em uma reta."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine uma cordilheira. Você quer chegar no vale mais profundo (global). Se você for apenas descendo, pode cair num buraquinho qualquer (local) e achar que chegou no fim, enquanto o verdadeiro vale está atrás da próxima montanha.",
      "puloDoGato": "Função não-convexa = Perigo de Mínimo Local. Função convexa = Mínimo local é o global.",
      "cascasDeBanana": {
        "A": "Isso acontece se a learning rate for explosiva, mas não é o risco inerente à não-convexidade.",
        "E": "Impossível matematicamente apenas pela otimização.",
        "C": "Otimização é um processo iterativo (passo a passo).",
        "B": "Exploding gradients existem, mas não são causados pela forma da função e sim pela profundidade da rede."
      },
      "dicaDeOuro": "Técnicas como 'Momentum' e 'Stochastic Gradient Descent' (SGD) ajudam o modelo a 'pular' buracos pequenos para tentar achar o mínimo global."
    }
  },
  {
    "id": "q_ds_1107",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Projeção Ortogonal",
    "statement": "A projeção de um vetor `a` sobre um vetor `b` resulta em um novo vetor que representa a componente de `a` que 'aponta' na direção de `b`. Esse conceito é a base de qual algoritmo de decomposição de vetores?",
    "options": {
      "A": "Multiplicação de Matrizes de Strassen.",
      "B": "Eliminação de Gauss-Jordan.",
      "C": "Cálculo de Autovalores.",
      "D": "Expansão de Taylor.",
      "E": "Processo de Gram-Schmidt."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O processo de Gram-Schmidt usa projeções para pegar um monte de vetores 'bagunçados' e transformá-los em vetores ortonormais (perpendiculares e de tamanho 1). É como 'limpar' a base vetorial.",
      "puloDoGato": "Projeção Ortogonal -> Gram-Schmidt -> Base Orthonormal.",
      "cascasDeBanana": {
        "B": "Serve para inverter matrizes.",
        "A": "Algoritmo rápido de multiplicação.",
        "C": "Encontra escalas de transformação.",
        "D": "Aproxima funções por polinômios."
      },
      "dicaDeOuro": "Muitas técnicas de compressão de dados usam projeções para descartar informações menos relevantes."
    }
  },
  {
    "id": "q_ds_1108",
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Papéis",
    "statement": "No framework Scrum, quem é o responsável exclusivo por gerenciar e priorizar o Product Backlog?",
    "options": {
      "A": "Scrum Master.",
      "B": "Product Owner (PO).",
      "C": "Stakeholders.",
      "D": "Project Manager.",
      "E": "Developers (Time de Desenvolvimento)."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Product Owner é o 'dono do produto'. Ele decide o que é mais importante para o negócio e coloca no topo da lista. Ninguém mais mexe na ordem das prioridades sem falar com ele.",
      "puloDoGato": "PO = Voz do Cliente + Priorização do Backlog.",
      "cascasDeBanana": {
        "A": "O Scrum Master garante que o time siga o Scrum e remove impedimentos.",
        "B": "",
        "C": "Os desenvolvedores decidem COMO fazer; o PO decide O QUE fazer.",
        "D": "Influenciam o PO, mas não gerenciam o backlog.",
        "E": "Não existe o papel de 'Project Manager' no Scrum oficial."
      },
      "dicaDeOuro": "O PO deve ser uma única pessoa, não um comitê, para garantir decisões rápidas."
    }
  },
  {
    "id": "q_ds_1109",
    "discipline": "Metodologias Ágeis",
    "topic": "Kanban - Limite de WIP",
    "statement": "Qual o objetivo principal de implementar o 'WIP Limit' (Work In Progress Limit) em um quadro Kanban?",
    "options": {
      "A": "Definir quem será o responsável por cada tarefa.",
      "B": "Substituir a necessidade de reuniões diárias.",
      "C": "Reduzir o gargalo e melhorar o fluxo, evitando que o time comece muitas tarefas e termine poucas.",
      "D": "Aumentar a quantidade de tarefas no backlog.",
      "E": "Garantir que todos os desenvolvedores estejam trabalhando 100% do tempo."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "WIP Limit é o 'Pare de começar e comece a terminar'. Se o limite é 3 e já tem 3 coisas sendo feitas, ninguém pode puxar tarefa nova. Isso força o time a se ajudar para terminar o que já está aberto antes de abrir outra frente.",
      "puloDoGato": "Limite de WIP = Foco em terminar = Fluxo contínuo (Flow).",
      "cascasDeBanana": {
        "E": "Ocupação 100% costuma gerar filas e lentidão (Teoria das Filas).",
        "D": "Backlog é o que ainda não começou, o WIP limita o que JÁ começou.",
        "A": "Kanban foca no fluxo, não necessariamente em 'donos' fixos.",
        "B": "A Daily continua sendo útil para alinhar o fluxo."
      },
      "dicaDeOuro": "A lei de Little mostra que o tempo de entrega (Lead Time) aumenta conforme o WIP aumenta."
    }
  },
  {
    "id": "q_ds_1110",
    "discipline": "Metodologias Ágeis",
    "topic": "Métricas Ágeis - Lead Time e Cycle Time",
    "statement": "Ao medir a eficiência de um processo ágil, o tempo total decorrido desde o momento em que uma tarefa entra no backlog até a sua entrega final ao cliente é chamado de:",
    "options": {
      "A": "Cycle Time.",
      "B": "Lead Time.",
      "C": "Sprint Time.",
      "D": "Velocity.",
      "E": "Throughput."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine uma pizzaria. O Lead Time é o tempo desde que você ligou pedindo a pizza até ela chegar na sua mesa. O Cycle Time é só o tempo que a pizza ficou dentro do forno (trabalho ativo).",
      "puloDoGato": "Lead Time = Pedido -> Entrega. Cycle Time = Início do trabalho -> Fim do trabalho.",
      "cascasDeBanana": {
        "A": "Cycle Time mede apenas o tempo de 'mão na massa'.",
        "B": "",
        "C": "Throughput é a quantidade de tarefas entregues por período.",
        "D": "Velocity é a média de pontos entregues por Sprint (usado no Scrum).",
        "E": "Termo genérico."
      },
      "dicaDeOuro": "Reduzir o Lead Time é um dos maiores focos da filosofia Lean."
    }
  },
  {
    "id": "q_ds_1111",
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Eventos",
    "statement": "Qual evento do Scrum tem como objetivo principal inspecionar como a última Sprint foi em relação às pessoas, relacionamentos, processos e ferramentas, buscando melhoria contínua?",
    "options": {
      "A": "Daily Scrum.",
      "B": "Sprint Retrospective.",
      "C": "Product Backlog Refinement.",
      "D": "Sprint Review.",
      "E": "Sprint Planning."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Cuidado! A Review é para mostrar o PRODUTO pro cliente. A Retrospectiva (Retro) é para o TIME olhar pra dentro e ver como eles podem trabalhar melhor juntos.",
      "puloDoGato": "Review = Olhar pro Produto. Retrospective = Olhar pro Processo/Time.",
      "cascasDeBanana": {
        "E": "Planejamento do futuro.",
        "A": "Alinhamento diário de 15 min.",
        "D": "Demonstração do incremento para stakeholders.",
        "C": "Preparação das tarefas futuras."
      },
      "dicaDeOuro": "A Retrospectiva acontece SEMPRE após a Review e ANTES da próxima Planning."
    }
  },
  {
    "id": "q_ds_1112",
    "discipline": "Metodologias Ágeis",
    "topic": "Manifesto Ágil - Valores",
    "statement": "O Manifesto Ágil afirma que, embora haja valor nos itens à direita, valorizamos mais os itens à esquerda. Qual par de valores está CORRETAMENTE representado segundo o manifesto?",
    "options": {
      "A": "Seguir um plano sobre responder a mudanças.",
      "B": "Negociação de contratos sobre colaboração com o cliente.",
      "C": "Software em funcionamento sobre documentação abrangente.",
      "D": "Processos e ferramentas sobre indivíduos e interações.",
      "E": "Documentação abrangente sobre software em funcionamento."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Ágil não diz que documentação é lixo, diz apenas que ter o código rodando e resolvendo o problema do cliente é muito mais importante do que ter mil manuais de um sistema que não funciona.",
      "puloDoGato": "Valor Ágil: Software funcionando > Documentação chata.",
      "cascasDeBanana": {
        "D": "Invertido. Indivíduos > Processos.",
        "A": "Invertido. Mudança > Plano.",
        "E": "Invertido.",
        "B": "Invertido. Colaboração > Contratos."
      },
      "dicaDeOuro": "O Manifesto Ágil foi criado em 2001 por 17 desenvolvedores em uma estação de esqui."
    }
  },
  {
    "id": "q_ds_1113",
    "discipline": "Metodologias Ágeis",
    "topic": "Extreme Programming (XP)",
    "statement": "A técnica de desenvolvimento onde dois programadores trabalham juntos em uma única estação de trabalho, sendo um o 'piloto' (escrevendo código) e outro o 'navegador' (revisando), é conhecida no XP como:",
    "options": {
      "A": "Propriedade Coletiva de Código.",
      "B": "TDD (Test Driven Development).",
      "C": "Code Review.",
      "D": "Pair Programming.",
      "E": "Refatoração Contínua."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pair Programming (Programação em Par) ajuda a evitar bugs e compartilha conhecimento na hora. Enquanto um digita, o outro pensa na lógica e vê erros de sintaxe que o colega não percebeu.",
      "puloDoGato": "Pair Programming = Piloto + Navegador.",
      "cascasDeBanana": {
        "C": "Geralmente feita de forma assíncrona depois do código pronto.",
        "B": "Foca em escrever testes antes do código.",
        "E": "Foca em melhorar o design do código existente.",
        "A": "Qualquer um pode mexer em qualquer parte do sistema."
      },
      "dicaDeOuro": "Muitos gestores acham que Pair Programming custa o dobro, mas estudos mostram que a redução de bugs e dívida técnica compensa o investimento."
    }
  },
  {
    "id": "q_ds_1114",
    "discipline": "Metodologias Ágeis",
    "topic": "Scrum - Definição de Pronto (DoD)",
    "statement": "O que é a 'Definition of Done' (DoD) no Scrum?",
    "options": {
      "A": "O tempo estimado para terminar uma tarefa.",
      "B": "A assinatura do contrato de manutenção.",
      "C": "O nome dado ao código quando ele entra em produção.",
      "D": "A lista de desejos do cliente para o próximo ano.",
      "E": "Um entendimento compartilhado de tudo o que deve ser completado para que um incremento de produto tenha qualidade para ser entregue."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O DoD é o 'combinado' do time. Para a gente dizer que está pronto, tem que ter teste unitário? Tem que estar no servidor? Tem que ter manual? Se todos concordam com essa lista, ninguém entrega algo 'mais ou menos'.",
      "puloDoGato": "DoD = Checklist de Qualidade do Incremento.",
      "cascasDeBanana": {
        "D": "Isso é visão de produto.",
        "A": "Isso é estimativa.",
        "C": "Isso é release.",
        "B": "Burocracia de vendas."
      },
      "dicaDeOuro": "A Definition of Done ajuda a evitar a 'dívida técnica' e garante transparência sobre o estado real do trabalho."
    }
  },
  {
    "id": "q_ds_1200",
    "discipline": "Infraestrutura e Redes",
    "topic": "Virtualização - Containers vs VMs",
    "statement": "Qual a principal diferença arquitetural entre um container (ex: Docker) e uma Máquina Virtual (VM) convencional?",
    "options": {
      "A": "Containers rodam apenas em sistemas Linux, enquanto VMs rodam em qualquer OS.",
      "B": "VMs compartilham o Kernel do sistema operacional hospedeiro, enquanto containers possuem seu próprio Kernel.",
      "C": "Containers compartilham o Kernel do sistema operacional hospedeiro, enquanto cada VM possui seu próprio sistema operacional completo (Guest OS).",
      "D": "VMs são sempre mais seguras que containers por utilizarem criptografia de hardware.",
      "E": "Containers não podem ser orquestrados, ao contrário das VMs."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "VM é 'pesada': ela finge que é um computador inteiro, com Windows/Linux próprio dentro dela. Container é 'leve': ele aproveita o 'motor' (Kernel) do computador que já está rodando e só isola o que o app precisa. Por isso você sobe um container em segundos e uma VM demora minutos.",
      "puloDoGato": "Container = Compartilha o Kernel (Leve). VM = Tem seu próprio OS (Pesada).",
      "cascasDeBanana": {
        "A": "Existem containers para Windows também.",
        "B": "Invertido. O container é que compartilha o Kernel.",
        "C": "",
        "D": "Segurança depende da configuração, mas o isolamento da VM é naturalmente maior por ter um OS dedicado.",
        "E": "Kubernetes está aí para provar que containers são altamente orquestráveis."
      },
      "dicaDeOuro": "Docker é o padrão para containers, enquanto VMware e VirtualBox são padrões para VMs."
    }
  },
  {
    "id": "q_ds_1201",
    "discipline": "Infraestrutura e Redes",
    "topic": "Computação em Nuvem - Modelos de Serviço",
    "statement": "Uma empresa decide contratar um serviço de nuvem onde ela não gerencia servidores, sistemas operacionais ou armazenamento, focando apenas no desenvolvimento e deploy de suas aplicações. Esse modelo é conhecido como:",
    "options": {
      "A": "On-premise.",
      "B": "PaaS (Platform as a Service).",
      "C": "SaaS (Software as a Service).",
      "D": "IaaS (Infrastructure as a Service).",
      "E": "DaaS (Database as a Service)."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No PaaS, o provedor te dá o 'palco' (plataforma) pronto. Você só entra com o seu show (código). Exemplos: Heroku, Google App Engine ou AWS Elastic Beanstalk.",
      "puloDoGato": "IaaS = Te dão o Ferro (Hardware/VM). PaaS = Te dão a Plataforma (Runtime). SaaS = Te dão o Software pronto (Gmail).",
      "cascasDeBanana": {
        "A": "No IaaS você ainda tem que instalar e gerenciar o SO e as atualizações.",
        "B": "",
        "C": "SaaS é quando você usa o app pronto via browser.",
        "D": "Focado apenas em banco de dados.",
        "E": "On-premise é ter o servidor físico na sua própria empresa."
      },
      "dicaDeOuro": "PaaS é ideal para agilizar o desenvolvimento, mas pode causar 'vendor lock-in'."
    }
  },
  {
    "id": "q_ds_1202",
    "discipline": "Infraestrutura e Redes",
    "topic": "Redes - Protocolo HTTP/HTTPS",
    "statement": "O protocolo HTTPS utiliza criptografia para garantir a segurança da comunicação. Qual a principal diferença técnica entre o HTTP e o HTTPS?",
    "options": {
      "A": "O HTTPS utiliza uma porta UDP em vez de TCP.",
      "B": "O HTTPS não permite o uso de cookies.",
      "C": "O HTTPS adiciona uma camada de segurança (SSL/TLS) sobre o protocolo HTTP.",
      "D": "O HTTPS é mais rápido que o HTTP por comprimir os dados nativamente.",
      "E": "O HTTPS funciona apenas na camada de Aplicação, enquanto o HTTP funciona na camada de Rede."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "HTTPS é o HTTP com um 'segurança' na porta. Esse segurança é o SSL (ou o moderno TLS). Ele garante que ninguém no meio do caminho consiga ler o que você está enviando pro site.",
      "puloDoGato": "HTTPS = HTTP + SSL/TLS.",
      "cascasDeBanana": {
        "A": "Ambos usam TCP (Portas 80 e 443).",
        "D": "HTTPS é levemente mais lento devido ao processo de criptografia/descriptografia.",
        "E": "Ambos são camada de Aplicação.",
        "B": "Cookies funcionam perfeitamente (e de forma mais segura) no HTTPS."
      },
      "dicaDeOuro": "O certificado digital é o que valida a identidade do site no protocolo HTTPS."
    }
  },
  {
    "id": "q_ds_1203",
    "discipline": "Infraestrutura e Redes",
    "topic": "Armazenamento - Block vs Object Storage",
    "statement": "Para armazenar petabytes de dados não estruturados (como imagens, vídeos e datasets de ML) de forma escalável e econômica na nuvem, qual tipo de armazenamento é o mais indicado?",
    "options": {
      "A": "Object Storage (S3 / Azure Blob).",
      "B": "Relational Database (SQL).",
      "C": "Block Storage (EBS).",
      "D": "NFS (Network File System).",
      "E": "Local SSD."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Object Storage é o 'depósito infinito'. Você joga o arquivo lá, ele ganha uma URL e pronto. Não tem estrutura de pastas complicada e é muito barato para grandes volumes. Perfeito para Data Lakes.",
      "puloDoGato": "Dados massivos/não estruturados = Object Storage (S3).",
      "cascasDeBanana": {
        "C": "Block Storage é como um HD virtual para VMs, caro para escalar em petabytes.",
        "B": "SQL é para dados estruturados e tabelas.",
        "E": "Local SSD é rápido mas perde os dados se a instância morrer (efêmero).",
        "D": "NFS é para compartilhamento de arquivos entre servidores, escala menos que S3."
      },
      "dicaDeOuro": "S3 significa Simple Storage Service."
    }
  },
  {
    "id": "q_ds_1204",
    "discipline": "Infraestrutura e Redes",
    "topic": "Redes - DNS",
    "statement": "Qual a função principal do serviço DNS (Domain Name System) na internet?",
    "options": {
      "A": "Aumentar a largura de banda da conexão.",
      "B": "Controlar o tráfego de spam em servidores de e-mail.",
      "C": "Traduzir nomes de domínio (ex: google.com) em endereços IP (ex: 8.8.8.8).",
      "D": "Criptografar as senhas dos usuários.",
      "E": "Hospedar os arquivos HTML de um site."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O DNS é a 'lista telefônica' da internet. Você não decora o número de telefone (IP) de todo mundo, você decora o nome. O DNS faz essa tradução pra você de forma transparente.",
      "puloDoGato": "DNS = Nome -> IP.",
      "cascasDeBanana": {
        "D": "Isso é papel de algoritmos de hash/criptografia.",
        "B": "Isso é papel de filtros Antispam/Firewalls.",
        "A": "DNS não interfere na velocidade física do link.",
        "E": "Isso é papel do Servidor Web."
      },
      "dicaDeOuro": "A propagação de mudanças no DNS pode levar até 48 horas devido ao cache dos servidores pelo mundo."
    }
  },
  {
    "id": "q_ds_1205",
    "discipline": "Análise de Sistemas",
    "topic": "Modelagem - Diagrama de Casos de Uso",
    "statement": "No Diagrama de Casos de Uso da UML, o que representa o elemento 'Ator'?",
    "options": {
      "A": "Uma função específica do código fonte.",
      "B": "Uma tabela no banco de dados.",
      "C": "Um papel desempenhado por um usuário externo ou outro sistema que interage com o sistema sendo modelado.",
      "D": "Um componente de hardware interno do sistema.",
      "E": "O programador responsável pelo desenvolvimento."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Ator não é necessariamente uma pessoa. Pode ser um cliente, um administrador ou até mesmo outro sistema (tipo o sistema de pagamentos) que 'conversa' com o seu app.",
      "puloDoGato": "Ator = Papel externo que interage com o sistema.",
      "cascasDeBanana": {
        "A": "Componentes são modelados em diagramas de componentes.",
        "B": "Funções são métodos em diagramas de classes.",
        "C": "",
        "D": "Tabelas são do modelo de dados/ER.",
        "E": "O programador não faz parte do modelo do sistema em si."
      },
      "dicaDeOuro": "Atores são desenhados como bonecos de palitinho (stick figures) na UML."
    }
  },
  {
    "id": "q_ds_1206",
    "discipline": "Análise de Sistemas",
    "topic": "Requisitos - Funcionais vs Não-Funcionais",
    "statement": "Qual das alternativas abaixo representa um 'Requisito Não-Funcional' de um sistema?",
    "options": {
      "A": "O sistema deve permitir que o usuário recupere sua senha via e-mail.",
      "B": "O sistema deve emitir um relatório mensal de vendas em PDF.",
      "C": "O sistema deve ser capaz de processar 1.000 transações por segundo.",
      "D": "O sistema deve permitir a exclusão de registros de log.",
      "E": "O sistema deve validar o CPF do cliente no momento do cadastro."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Requisito Funcional é o que o sistema FAZ (as tarefas). Requisito Não-Funcional é COMO o sistema deve ser (qualidade, performance, segurança). No exemplo, a velocidade de processamento é uma característica de qualidade.",
      "puloDoGato": "Funcional = O que faz. Não-Funcional = Como faz (performance, segurança, usabilidade).",
      "cascasDeBanana": {
        "A": "Ação de recuperar senha (Funcional).",
        "B": "Ação de emitir relatório (Funcional).",
        "C": "",
        "D": "Ação de validar dado (Funcional).",
        "E": "Ação de excluir log (Funcional)."
      },
      "dicaDeOuro": "Muitos requisitos não-funcionais são quantificáveis e testáveis via testes de carga ou segurança."
    }
  },
  {
    "id": "q_ds_1207",
    "discipline": "Análise de Sistemas",
    "topic": "Arquitetura de Software - Microserviços",
    "statement": "Qual a principal característica de uma arquitetura de Microserviços em comparação a uma arquitetura Monolítica?",
    "options": {
      "A": "A execução de todo o código em um único processo de memória.",
      "B": "O uso de uma única linguagem de programação para todo o sistema.",
      "C": "A eliminação da necessidade de orquestração de containers.",
      "D": "A divisão do sistema em pequenos serviços independentes que se comunicam via rede (APIs).",
      "E": "O compartilhamento de um único banco de dados centralizado por todos os módulos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Monolito é uma pedra gigante: se um pedacinho quebra ou precisa crescer, você tem que mexer nela inteira. Microserviços são como LEGO: cada peça é independente, tem seu próprio banco e pode ser atualizada sem derrubar o resto.",
      "puloDoGato": "Microserviços = Desacoplamento + Independência + Escalabilidade Alvo.",
      "cascasDeBanana": {
        "B": "Microserviços permitem poliglotismo (cada serviço na melhor linguagem).",
        "E": "O ideal é que cada microserviço tenha seu próprio banco de dados (Database-per-service).",
        "A": "Isso é característica do Monolito.",
        "C": "Microserviços EXIGEM orquestração (como Kubernetes) devido à complexidade."
      },
      "dicaDeOuro": "Microserviços aumentam a agilidade do time, mas trazem complexidade na rede e no monitoramento."
    }
  },
  {
    "id": "q_ds_1208",
    "discipline": "Análise de Sistemas",
    "topic": "Ciclo de Vida - Modelo Cascata vs Ágil",
    "statement": "No modelo de desenvolvimento em Cascata (Waterfall), qual a principal característica da transição entre as fases (Requisitos, Análise, Projeto, Codificação, Testes)?",
    "options": {
      "A": "O cliente pode solicitar mudanças a qualquer momento da codificação.",
      "B": "Uma fase só deve começar após a conclusão e aprovação da fase anterior.",
      "C": "Os testes são realizados simultaneamente ao levantamento de requisitos.",
      "D": "Não há necessidade de documentação formal entre as fases.",
      "E": "As fases ocorrem de forma circular e iterativa."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Cascata é como uma escada: você não pula degrau e não volta pra cima fácil. Se você descobriu um erro de design na hora de testar (lá no fim), o prejuízo é enorme porque você já passou por todas as outras fases.",
      "puloDoGato": "Cascata = Sequencial + Rígido. Ágil = Iterativo + Incremental.",
      "cascasDeBanana": {
        "A": "Isso é característica do Ágil/Espiral.",
        "B": "",
        "C": "No Cascata, mudanças no meio do caminho são caríssimas e evitadas.",
        "D": "Cascata é extremamente focado em documentos de entrega em cada fase.",
        "E": "Testes ficam restritos ao final do ciclo no Cascata clássico."
      },
      "dicaDeOuro": "O modelo Cascata ainda é usado em projetos onde o escopo é 100% conhecido e imutável (ex: software de satélite ou hardware fixo)."
    }
  },
  {
    "id": "q_ds_1209",
    "discipline": "Análise de Sistemas",
    "topic": "Qualidade - Testes Unitários",
    "statement": "Qual o objetivo principal da execução de Testes Unitários no desenvolvimento de sistemas?",
    "options": {
      "A": "Garantir que o cliente aprovou o layout da página.",
      "B": "Testar a integração entre o banco de dados e a API.",
      "C": "Verificar se o sistema aguenta 1 milhão de usuários simultâneos.",
      "D": "Validar o comportamento da menor unidade de código (geralmente uma função ou método) isoladamente.",
      "E": "Garantir que a interface gráfica está bonita e funcional."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Teste unitário é o teste do 'parafuso'. Antes de testar o carro inteiro, você testa se cada parafuso e cada peça pequena está funcionando sozinha. Se as peças pequenas falham, o carro não vai andar.",
      "puloDoGato": "Teste Unitário = Teste de funções/métodos isolados.",
      "cascasDeBanana": {
        "C": "Isso é Teste de Carga/Stress.",
        "E": "Isso é Teste de UI/Usabilidade.",
        "B": "Isso é Teste de Integração.",
        "A": "Isso é Teste de Aceitação (UAT)."
      },
      "dicaDeOuro": "O uso de 'Mocks' é comum para isolar a unidade de código de dependências externas como bancos ou APIs."
    }
  },
  {
    "id": "q_ds_1210",
    "discipline": "Gestão de Projetos",
    "topic": "PMBOK - Áreas de Conhecimento",
    "statement": "De acordo com o guia PMBOK, a área de conhecimento que lida com a identificação, análise e resposta a eventos incertos que podem afetar o projeto é:",
    "options": {
      "A": "Gestão dos Riscos.",
      "B": "Gestão da Qualidade.",
      "C": "Gestão do Escopo.",
      "D": "Gestão do Cronograma.",
      "E": "Gestão das Aquisições."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Risco é qualquer coisa que 'pode' acontecer (incerteza). A gestão de riscos serve para você não ser pego de surpresa e já ter um plano B na gaveta.",
      "puloDoGato": "Incerteza + Impacto = Risco.",
      "cascasDeBanana": {
        "B": "Foca em conformidade com requisitos.",
        "E": "Foca em contratos e compras externas.",
        "C": "Foca em definir o que deve ser feito (e o que não deve).",
        "D": "Foca no tempo e datas."
      },
      "dicaDeOuro": "Riscos podem ser negativos (ameaças) ou positivos (oportunidades)."
    }
  },
  {
    "id": "q_ds_1211",
    "discipline": "Gestão de Projetos",
    "topic": "Stakeholders",
    "statement": "Quem são os 'Stakeholders' de um projeto?",
    "options": {
      "A": "Os fornecedores de hardware.",
      "B": "Exclusivamente a equipe de desenvolvimento.",
      "C": "Apenas os acionistas majoritários da empresa.",
      "D": "Apenas os clientes que pagam pelo software.",
      "E": "Todas as pessoas ou organizações que podem ser afetadas pelo projeto, ou que podem afetar o seu resultado."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Stakeholder é a 'parte interessada'. Pode ser o dono, o cliente, o usuário final, o vizinho da obra, o governo... se o projeto atinge a pessoa de alguma forma, ela é um stakeholder.",
      "puloDoGato": "Stakeholder = Interessado (Influencia ou é influenciado).",
      "cascasDeBanana": {}
    }
  },
  {
    "id": "q_ds_1212",
    "discipline": "Gestão de Projetos",
    "topic": "Escopo - EAP / WBS",
    "statement": "A Estrutura Analítica do Projeto (EAP) ou Work Breakdown Structure (WBS) tem como objetivo:",
    "options": {
      "A": "Listar todos os nomes dos funcionários do projeto.",
      "B": "Decompor o escopo total do projeto em partes menores e mais gerenciáveis (pacotes de trabalho).",
      "C": "Calcular o lucro final esperado.",
      "D": "Definir o salário de cada gerente de projeto.",
      "E": "Mostrar a sequência temporal das atividades no calendário."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A EAP é o 'mapa' do projeto. Você pega o 'Prédio' e quebra em 'Fundação', 'Estrutura', 'Acabamento'. Depois quebra a 'Fundação' em 'Estacas', 'Blocos'. Fica muito mais fácil de gerenciar pedaços pequenos.",
      "puloDoGato": "EAP = Decomposição hierárquica do escopo."
    }
  },
  {
    "id": "q_ds_1213",
    "discipline": "Gestão de Projetos",
    "topic": "Cronograma - Gráfico de Gantt",
    "statement": "O Gráfico de Gantt é uma ferramenta visual clássica na gestão de projetos. O que ele representa primordialmente?",
    "options": {
      "A": "A hierarquia de cargos da empresa.",
      "B": "A distribuição dos custos por departamento.",
      "C": "A lista de riscos priorizada por impacto.",
      "D": "A programação das atividades ao longo do tempo, mostrando início, fim e dependências.",
      "E": "O layout físico do escritório do projeto."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Gantt é aquele gráfico de barras horizontais. Cada barra é uma tarefa. O comprimento da barra é o tempo. Ajuda a ver o que tem que ser feito antes de quê.",
      "puloDoGato": "Gantt = Cronograma Visual + Barras de Tempo.",
      "cascasDeBanana": {}
    }
  },
  {
    "id": "q_ds_1214",
    "discipline": "Gestão de Projetos",
    "topic": "Triângulo de Ferro",
    "statement": "O conceito de 'Triângulo de Ferro' ou Restrição Tripla na gestão de projetos tradicional refere-se ao equilíbrio necessário entre:",
    "options": {
      "A": "Escopo, Tempo e Custo (Qualidade no centro).",
      "B": "Início, Meio e Fim.",
      "C": "Desenvolvimento, Teste e Operação.",
      "D": "Hardware, Software e Peopleware.",
      "E": "Risco, Stakeholder e Comunicação."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o 'cobertor curto'. Se você quer aumentar o Escopo (fazer mais coisa), ou você aumenta o Tempo (atrasa) ou aumenta o Custo (contrata mais). Se mexer em um sem ajustar os outros, a Qualidade sofre.",
      "puloDoGato": "Triângulo de Ferro = Escopo, Tempo, Custo.",
      "cascasDeBanana": {}
    }
  },
  {
    "id": "q_bp_3100",
    "discipline": "Engenharia de Requisitos",
    "topic": "Elicitação de Requisitos",
    "statement": "Durante a fase de Elicitação de Requisitos, qual técnica é baseada na observação direta do analista sobre o trabalho diário dos usuários em seu ambiente real para entender como as tarefas são executadas?",
    "options": {
      "A": "Entrevista Estruturada.",
      "B": "Brainstorming.",
      "C": "Etnografia (ou Observação).",
      "D": "Prototipação.",
      "E": "Questionário."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Etnografia é o famoso 'ver pra crer'. Muitas vezes o usuário não sabe explicar o que faz, ou faz coisas que nem percebe que são importantes. O analista fica lá, como um observador silencioso, anotando cada passo do dia a dia do cara.",
      "puloDoGato": "Observação direta no ambiente real = Etnografia.",
      "cascasDeBanana": {
        "B": "Brainstorming é para gerar ideias em grupo.",
        "E": "Questionário é para coletar dados de muita gente ao mesmo tempo.",
        "A": "Entrevista é conversar; o analista ouve, mas não necessariamente observa o ato.",
        "D": "Prototipação é criar uma versão simplificada do sistema para validar ideias."
      },
      "dicaDeOuro": "A etnografia é excelente para descobrir requisitos 'implícitos' que o usuário esquece de mencionar nas entrevistas."
    }
  },
  {
    "id": "q_bp_3101",
    "discipline": "Engenharia de Requisitos",
    "topic": "Tipos de Requisitos - Regras de Negócio",
    "statement": "Como se diferencia um Requisito Funcional de uma Regra de Negócio em um documento de especificação?",
    "options": {
      "A": "Regras de Negócio são requisitos não-funcionais de performance.",
      "B": "Regras de Negócio só podem ser escritas em linguagem SQL.",
      "C": "Requisitos Funcionais descrevem o banco de dados, Regras de Negócio descrevem a interface.",
      "D": "Requisitos Funcionais são sempre sobre software, Regras de Negócio são sobre leis e políticas da organização que existem independente do sistema.",
      "E": "Não há diferença, são sinônimos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Pense assim: A regra de negócio diz: 'Só pode vender bebida para maiores de 18 anos'. Essa regra existe na loja física, no site, no app e no papel. O requisito funcional é o que o software faz para GARANTIR isso: 'O sistema deve bloquear a finalização da compra caso a data de nascimento resulte em idade inferior a 18 anos'.",
      "puloDoGato": "Regra de Negócio = Política da Empresa (Independente de TI). Requisito Funcional = Implementação da regra no sistema.",
      "cascasDeBanana": {
        "E": "Confundir os dois gera documentos de requisitos confusos e difíceis de manter.",
        "A": "Regras de negócio focam na lógica, não em performance (NFR).",
        "C": "Errado.",
        "B": "Regras de negócio são escritas em linguagem natural (Português/Inglês)."
      },
      "dicaDeOuro": "Documentar as regras de negócio separadamente permite que elas sejam alteradas sem que todo o documento de requisitos do sistema precise ser reescrito."
    }
  },
  {
    "id": "q_bp_3102",
    "discipline": "Engenharia de Requisitos",
    "topic": "Validação de Requisitos",
    "statement": "Qual o objetivo da técnica de 'Inspeção de Requisitos' (Review)?",
    "options": {
      "A": "Testar a carga do servidor de produção.",
      "B": "Verificar se os documentos de requisitos estão corretos, completos, consistentes e sem ambiguidades antes do início do projeto.",
      "C": "Calcular o custo final do software.",
      "D": "Automatizar a geração de código a partir dos requisitos.",
      "E": "Medir a velocidade de desenvolvimento dos programadores."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A Inspeção é o 'pente fino'. Um grupo de pessoas lê o documento procurando erros de lógica, contradições ou frases que podem ser entendidas de dois jeitos (ambiguidade). Corrigir um erro aqui custa centavos; corrigir o mesmo erro depois que o código está pronto custa milhares de reais.",
      "puloDoGato": "Inspeção = Revisão manual para achar erros no documento ANTES da codificação.",
      "cascasDeBanana": {
        "A": "Métrica de produtividade, não de qualidade de requisitos.",
        "B": "",
        "C": "Isso seria Engenharia de Software Baseada em Modelos (MDD).",
        "D": "Teste de carga.",
        "E": "Orçamentação."
      },
      "dicaDeOuro": "Uma boa inspeção envolve diferentes papéis: o analista que escreveu, um desenvolvedor que vai implementar e um testador que vai validar."
    }
  },
  {
    "id": "q_bp_3103",
    "discipline": "Engenharia de Requisitos",
    "topic": "Matriz de Rastreabilidade",
    "statement": "Para que serve a Matriz de Rastreabilidade de Requisitos (RTM)?",
    "options": {
      "A": "Para definir as cores da interface do sistema.",
      "B": "Para esconder requisitos do cliente final.",
      "C": "Para gerar gráficos de pizza sobre a performance do sistema.",
      "D": "Para mapear e garantir que cada requisito esteja vinculado a uma necessidade de negócio e a um caso de teste/componente de software.",
      "E": "Para substituir o diagrama de classes da UML."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A Rastreabilidade é o 'fio de Ariadne'. Ela liga o Requisito 01 ao objetivo de negócio X, ao Caso de Teste Y e ao módulo de código Z. Se o requisito mudar, você sabe exatamente o que precisa ser testado de novo e o que vai quebrar.",
      "puloDoGato": "Rastreabilidade = Ligação entre origem (necessidade) e destino (código/teste).",
      "cascasDeBanana": {
        "B": "Aumenta a transparência, não o contrário.",
        "C": "Nada a ver com gráficos de performance.",
        "E": "São ferramentas complementares.",
        "A": "Design de UI é outra disciplina."
      },
      "dicaDeOuro": "A rastreabilidade é fundamental para o gerenciamento de mudanças em projetos complexos."
    }
  },
  {
    "id": "q_bp_3104",
    "discipline": "Engenharia de Requisitos",
    "topic": "Histórias de Usuário - Critérios de Aceite",
    "statement": "No contexto de metodologias ágeis, o que são os 'Critérios de Aceite' de uma História de Usuário?",
    "options": {
      "A": "Condições específicas que devem ser atendidas para que a história de usuário seja considerada completa e aceita pelo Product Owner.",
      "B": "O valor em dinheiro que o cliente aceita pagar pela funcionalidade.",
      "C": "O nome do servidor onde o código será hospedado.",
      "D": "A data final em que o projeto será entregue.",
      "E": "A lista de programadores que aceitaram trabalhar naquela tarefa."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Critério de Aceite é o 'contrato' da tarefa. Exemplo: 'O login deve funcionar'. Critérios: 1. Aceitar e-mail e senha; 2. Bloquear após 3 erros; 3. Ter botão de 'esqueci a senha'. Se o sistema fizer isso, o PO aceita. Se faltar um, volta pro desenvolvimento.",
      "puloDoGato": "Critérios de Aceite = O 'Checklist' para a tarefa ser considerada pronta (Done).",
      "cascasDeBanana": {
        "B": "Business Value, não critério de aceite técnico.",
        "E": "Equipe de projeto.",
        "C": "Infraestrutura.",
        "D": "Deadline."
      },
      "dicaDeOuro": "Histórias de Usuário seguem o padrão: 'Como [papel], eu quero [funcionalidade] para que [valor de negócio]'."
    }
  },
  {
    "id": "q_bp_3105",
    "discipline": "Engenharia de Requisitos",
    "topic": "Elicitação - JAD",
    "statement": "A técnica JAD (Joint Application Development) caracteriza-se por:",
    "options": {
      "A": "Sessões de trabalho intensivas e colaborativas entre usuários, analistas e gestores para definir requisitos em conjunto.",
      "B": "O desenvolvimento de software por programadores que trabalham sozinhos em casa.",
      "C": "O uso de inteligência artificial para escrever os requisitos automaticamente.",
      "D": "Entrevistas individuais e isoladas com cada stakeholder.",
      "E": "A exclusão dos usuários finais do processo de definição de escopo."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "JAD é o 'conclave'. Coloca todo mundo numa sala (ou call), tranca a porta e só sai de lá com o escopo decidido. Isso evita o 'telefone sem fio' e acelera muito a aprovação dos requisitos, pois as decisões são tomadas na hora.",
      "puloDoGato": "JAD = Workshop Colaborativo + Decisões Rápidas + Envolvimento do Negócio.",
      "cascasDeBanana": {
        "D": "Isso é entrevista tradicional, muito mais lenta que o JAD.",
        "B": "Desenvolvimento isolado não tem relação com JAD.",
        "C": "JAD é um processo humano e social.",
        "E": "Pelo contrário, o usuário é peça fundamental do JAD."
      },
      "dicaDeOuro": "O JAD costuma ter papéis definidos, como o Facilitador (quem comanda a dinâmica) e o Escriba (quem documenta tudo em tempo real)."
    }
  },
  {
    "id": "q_bp_3106",
    "discipline": "Engenharia de Requisitos",
    "topic": "Análise de Requisitos - Priorização",
    "statement": "O método MoSCoW é utilizado para priorizar requisitos. O que representa a letra 'S' nesta sigla?",
    "options": {
      "A": "Standard (Requisitos que seguem padrões de mercado).",
      "B": "Simple (Requisitos simples de fazer).",
      "C": "Security (Requisitos focados em segurança).",
      "D": "Small (Requisitos de pequeno impacto).",
      "E": "Should have (Requisitos que deveriam ser feitos, mas não são vitais para o lançamento imediato)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "MoSCoW ajuda a decidir o que entra na versão 1.0. Must Have (Obrigatório), Should Have (Deveria ter, mas dá pra lançar sem), Could Have (Poderia ter se sobrar tempo) e Won't Have (Não teremos agora).",
      "puloDoGato": "Must (Tem que ter) > Should (Deveria ter) > Could (Poderia ter) > Won't (Não vai ter agora).",
      "cascasDeBanana": {
        "B": "Complexidade não é o único critério do MoSCoW.",
        "D": "Tamanho não é a definição do 'S'.",
        "C": "Segurança pode ser Must ou Should, dependendo do caso.",
        "A": "Padrões são importantes, mas não definem a prioridade MoSCoW."
      },
      "dicaDeOuro": "Priorizar corretamente evita o desperdício de energia em funcionalidades 'bonitinhas' mas inúteis para o negócio no início."
    }
  },
  {
    "id": "q_bp_3107",
    "discipline": "Engenharia de Requisitos",
    "topic": "Mudança de Requisitos - Impacto",
    "statement": "Ao receber uma solicitação de mudança de requisito em um estágio avançado do projeto, qual deve ser a primeira ação do analista de requisitos?",
    "options": {
      "A": "Pedir demissão do projeto.",
      "B": "Negar a mudança de forma definitiva para não atrasar o cronograma.",
      "C": "Apagar toda a documentação anterior e recomeçar o projeto.",
      "D": "Realizar uma análise de impacto para avaliar como a mudança afeta o custo, o tempo e outros requisitos já implementados.",
      "E": "Alterar o código imediatamente para ganhar tempo."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Mudar requisito no fim é como querer mudar a fundação de um prédio quando ele já está no 10º andar. Pode ser feito? Pode. Mas você precisa calcular quanto a mais vai custar e quanto tempo vai atrasar ANTES de dizer 'sim' ou 'não'.",
      "puloDoGato": "Mudança de Escopo = Análise de Impacto (Tempo, Custo, Risco).",
      "cascasDeBanana": {
        "E": "Péssima prática; gera bugs e furos de orçamento.",
        "B": "Às vezes a mudança é vital para o negócio, negá-la sem analisar é amadorismo.",
        "C": "Extremismo desnecessário.",
        "A": "Caminho de fuga, não de gestão."
      },
      "dicaDeOuro": "O Comitê de Controle de Mudanças (CCB) é o órgão que geralmente aprova ou reprova essas mudanças após a análise de impacto."
    }
  },
  {
    "id": "q_bp_3200",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Estilos Arquiteturais - Cliente-Servidor",
    "statement": "Na arquitetura Cliente-Servidor de três camadas (3-tier), qual a função primordial da camada intermediária (Camada de Aplicação ou Lógica de Negócio)?",
    "options": {
      "A": "Armazenar permanentemente os dados do sistema.",
      "B": "Prover conectividade física de rede entre os computadores.",
      "C": "Processar as regras de negócio, validar dados e mediar a comunicação entre a interface e o banco de dados.",
      "D": "Gerenciar a interface gráfica e a interação direta com o usuário.",
      "E": "Substituir a necessidade de um servidor de banco de dados."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Pense na camada de aplicação como o 'garçom' de um restaurante. O cliente (Front-end) pede o prato, o garçom (Camada de Aplicação) verifica se o pedido é válido, leva pra cozinha (Banco de Dados) e traz o resultado pronto. Ele é o cérebro que decide o que pode e o que não pode ser feito.",
      "puloDoGato": "3 Camadas: 1. Apresentação (UI) -> 2. Lógica (Regras) -> 3. Dados (DB).",
      "cascasDeBanana": {
        "A": "Isso é papel da camada de Dados.",
        "B": "Isso é papel da camada de Apresentação.",
        "C": "",
        "D": "Isso é papel da camada de Infraestrutura/Rede.",
        "E": "Camadas se complementam, não se substituem."
      },
      "dicaDeOuro": "Separar a lógica de negócio da interface facilita a manutenção e permite que você mude o visual do site sem precisar reescrever todas as regras de cálculo da empresa."
    }
  },
  {
    "id": "q_bp_3201",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Padrões de Projeto - MVC",
    "statement": "O padrão MVC (Model-View-Controller) é amplamente utilizado no desenvolvimento web. Qual componente é responsável por receber as requisições do usuário, interpretar os dados e decidir qual Model ou View deve ser acionada?",
    "options": {
      "A": "Model.",
      "B": "Controller.",
      "C": "Router.",
      "D": "View.",
      "E": "Database."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O Controller é o 'maestro'. O usuário clica num botão, o Controller recebe esse clique, manda o Model buscar o dado no banco e depois entrega esse dado para a View mostrar pro usuário. Ele coordena o tráfego.",
      "puloDoGato": "MVC: Model (Dados/Lógica) + View (Visual) + Controller (Maestro/Fluxo).",
      "cascasDeBanana": {
        "A": "Model lida apenas com a lógica de dados e regras.",
        "D": "View lida apenas com a exibição da informação.",
        "E": "Banco de dados está fora do padrão MVC clássico (fica abaixo do Model).",
        "C": "O roteador apenas direciona a URL para o Controller certo."
      },
      "dicaDeOuro": "O principal objetivo do MVC é a separação de preocupações (Separation of Concerns), tornando o sistema mais modular."
    }
  },
  {
    "id": "q_bp_3202",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Arquitetura em Camadas - Acoplamento",
    "statement": "Um dos grandes objetivos de uma boa arquitetura de software é buscar o 'Baixo Acoplamento'. O que isso significa na prática?",
    "options": {
      "A": "Que o sistema deve rodar em apenas um único servidor central.",
      "B": "Que todos os módulos do sistema devem estar fortemente ligados entre si.",
      "C": "Que não deve haver comunicação entre as diferentes camadas do sistema.",
      "D": "Que os módulos devem ser independentes o suficiente para que mudanças em um não causem impactos inesperados em outros.",
      "E": "Que o código deve ser escrito sem o uso de funções ou classes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Acoplamento é como um 'grude'. Se os módulos estão muito grudados (alto acoplamento), você tenta trocar uma lâmpada e o motor do carro para de funcionar. O baixo acoplamento garante que cada peça seja 'plug-and-play'.",
      "puloDoGato": "Ideal: Baixo Acoplamento + Alta Coesão.",
      "cascasDeBanana": {
        "B": "Isso é o oposto (Alto Acoplamento), o que dificulta muito a manutenção.",
        "A": "Hardware não define acoplamento de código.",
        "C": "Deve haver comunicação, mas ela deve ser via interfaces bem definidas.",
        "E": "Absurdo técnico."
      },
      "dicaDeOuro": "O uso de Interfaces e Injeção de Dependência são técnicas fundamentais para atingir o baixo acoplamento."
    }
  },
  {
    "id": "q_bp_3203",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Arquitetura Monolítica vs Microserviços",
    "statement": "Qual a principal desvantagem de uma arquitetura Monolítica em sistemas de grande escala e alta complexidade?",
    "options": {
      "A": "Facilidade de realizar testes de integração ponta a ponta.",
      "B": "Dificuldade de escalabilidade seletiva, pois o sistema inteiro deve ser replicado mesmo que apenas uma função esteja sobrecarregada.",
      "C": "Simplicidade no processo de deploy inicial.",
      "D": "Alta velocidade de comunicação entre os módulos internos.",
      "E": "Baixo custo de infraestrutura para sistemas pequenos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "No Monolito, se o seu módulo de 'Emissão de Notas' está lento, você tem que subir um servidor novo com o sistema INTEIRO dentro (incluindo o RH, o Estoque, o Financeiro). É um desperdício de recurso. Nos microserviços, você subiria só mais uma cópia do módulo de Notas.",
      "puloDoGato": "Monolito = Escala tudo ou nada. Microserviços = Escala apenas o que precisa.",
      "cascasDeBanana": {
        "D": "Isso é uma VANTAGEM do monolito (chamadas em memória são rápidas).",
        "C": "Isso é uma VANTAGEM do monolito (apenas um arquivo para subir).",
        "A": "Isso é uma VANTAGEM do monolito.",
        "E": "Isso é uma VANTAGEM para projetos que estão começando."
      },
      "dicaDeOuro": "Migrar de monolito para microserviços só vale a pena quando o tamanho do time e a carga do sistema justificam a complexidade extra de rede."
    }
  },
  {
    "id": "q_bp_3204",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Padrões de Comunicação - Síncrona vs Assíncrona",
    "statement": "Em arquiteturas distribuídas, a comunicação assíncrona baseada em filas de mensagens (Message Brokers) é indicada para:",
    "options": {
      "A": "Aumentar a latência propositalmente para economizar energia.",
      "B": "Substituir o protocolo HTTP em todas as comunicações web.",
      "C": "Operações que exigem resposta imediata do servidor para o usuário (ex: consulta de saldo).",
      "D": "Desacoplar sistemas, permitindo que o remetente envie uma mensagem e continue seu trabalho sem esperar o processamento imediato do destinatário.",
      "E": "Garantir que os dados sejam gravados no banco de dados em tempo real sem atrasos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Comunicação assíncrona é como enviar um e-mail ou WhatsApp. Você manda e vai fazer outra coisa. Se o outro sistema estiver fora do ar, a mensagem fica na 'fila' (fila de mensagens) e ele processa quando voltar. Isso evita que o seu sistema trave esperando o outro.",
      "puloDoGato": "Assíncrono = Envia e esquece (Fire and Forget) + Resiliência via filas.",
      "cascasDeBanana": {
        "C": "Consultas rápidas exigem comunicação síncrona (REST/gRPC).",
        "E": "Filas introduzem um pequeno atraso (eventual consistency), não é tempo real absoluto.",
        "B": "HTTP continua firme para interações diretas.",
        "A": "Ninguém quer aumentar a latência sem motivo."
      },
      "dicaDeOuro": "RabbitMQ, Apache Kafka e AWS SQS são ferramentas populares de Message Brokers."
    }
  },
  {
    "id": "q_bp_3205",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Middleware",
    "statement": "Qual o papel de um 'Middleware' em uma arquitetura de sistemas corporativos?",
    "options": {
      "A": "Prover serviços e capacidades comuns para aplicações fora do que é oferecido pelo sistema operacional, facilitando a integração entre sistemas heterogêneos.",
      "B": "Atuar como a interface gráfica final do usuário.",
      "C": "Desenvolver o design visual de logotipos da empresa.",
      "D": "Substituir o hardware físico por servidores virtuais.",
      "E": "Gerenciar a refrigeração do data center."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O Middleware é o 'software do meio'. Ele é a cola que faz um sistema feito em Java conversar com um banco de dados legado e uma API em Python. Ele cuida de coisas chatas como tradução de dados, segurança e mensageria para que as apps não precisem se preocupar com isso.",
      "puloDoGato": "Middleware = 'Cola' de software / Integração de sistemas diferentes.",
      "cascasDeBanana": {
        "B": "Isso é Front-end.",
        "D": "Isso é Virtualização.",
        "E": "Isso é manutenção predial/TI física.",
        "C": "Marketing/Design."
      },
      "dicaDeOuro": "ESB (Enterprise Service Bus) é um exemplo clássico de middleware de integração corporativa."
    }
  },
  {
    "id": "q_bp_3206",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Padrão Publish-Subscribe",
    "statement": "No padrão de arquitetura 'Publish-Subscribe' (Pub/Sub), como ocorre a entrega de informações?",
    "options": {
      "A": "O publicador envia a mensagem para um tópico ou canal, e todos os assinantes interessados naquele canal recebem a mensagem automaticamente.",
      "B": "O assinante deve solicitar a informação ao publicador a cada 5 segundos (Polling).",
      "C": "O publicador envia a mensagem diretamente para o endereço IP do assinante.",
      "D": "Apenas um assinante por vez pode receber a mensagem.",
      "E": "A mensagem é apagada do servidor assim que é enviada, mesmo que ninguém a receba."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Pub/Sub é como o rádio ou YouTube. O canal (Tópico) transmite a informação. Quem está 'inscrito' (Subscribed) recebe. O dono do canal não sabe quem são os ouvintes, ele só joga a informação lá. Isso desacopla totalmente quem produz de quem consome o dado.",
      "puloDoGato": "Pub/Sub = 1 Publicador -> N Assinantes via Tópicos.",
      "cascasDeBanana": {
        "C": "Isso seria Point-to-Point (P2P).",
        "B": "Polling é ineficiente; Pub/Sub é baseado em eventos (Push).",
        "E": "Geralmente há persistência na fila até que os assinantes processem.",
        "D": "Isso seria o padrão de Fila de Trabalho (Worker Queue)."
      },
      "dicaDeOuro": "O Apache Kafka é a ferramenta mais robusta do mercado para implementar esse padrão em larga escala."
    }
  },
  {
    "id": "q_bp_3207",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Resiliência - Circuit Breaker",
    "statement": "O padrão 'Circuit Breaker' (Disjuntor) é vital em arquiteturas de microserviços. Qual sua função principal?",
    "options": {
      "A": "Realizar o backup automático dos dados a cada hora.",
      "B": "Detectar falhas repetitivas em um serviço externo e 'abrir o circuito' para impedir que novas requisições sejam enviadas para o serviço problemático, evitando o efeito cascata de erros.",
      "C": "Aumentar a voltagem do processador para processar dados mais rápido.",
      "D": "Cortar a energia elétrica do servidor em caso de curto-circuito.",
      "E": "Bloquear o acesso de usuários não autorizados através de um firewall."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Imagine que o sistema de Pagamentos caiu. Se o seu site continuar tentando enviar 1000 pedidos por segundo pra ele, o seu site também vai travar esperando o timeout. O Circuit Breaker percebe que o Pagamento morreu e já dá um erro imediato pro seu site, sem 'perder tempo' esperando o que já se sabe que vai falhar.",
      "puloDoGato": "Circuit Breaker = Evita efeito cascata de erros em sistemas distribuídos.",
      "cascasDeBanana": {
        "A": "O disjuntor aqui é de lógica de software, não elétrico.",
        "B": "",
        "C": "Overclocking não é padrão de arquitetura de software.",
        "D": "Isso é segurança/Autenticação.",
        "E": "Isso é política de backup."
      },
      "dicaDeOuro": "O disjuntor tem 3 estados: Fechado (Tudo OK), Aberto (Erro detectado, não envia nada) e Meio-Aberto (Testando se o serviço voltou)."
    }
  },
  {
    "id": "q_sw_4008",
    "discipline": "Segurança da Informação",
    "topic": "Criptografia Assimétrica",
    "statement": "Na criptografia de chave pública (assimétrica), se Alice deseja enviar uma mensagem confidencial para Bob que apenas ele possa ler, ela deve criptografar a mensagem utilizando:",
    "options": {
      "A": "A chave privada de Bob.",
      "B": "A chave privada de Alice.",
      "C": "A chave pública de Alice.",
      "D": "Uma chave secreta compartilhada previamente (Symmetric Key).",
      "E": "A chave pública de Bob."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Chave pública é como o seu endereço: todo mundo pode saber. Chave privada é a chave da sua casa: só você tem. Para Alice mandar algo que só Bob abra, ela usa o 'cadeado' (chave pública) do Bob. Só Bob tem a 'chave' (privada) que abre esse cadeado.",
      "puloDoGato": "Confidencialidade = Criptografa com Pública do Destinatário. Assinatura Digital = Criptografa com Privada do Remetente.",
      "cascasDeBanana": {
        "B": "Se ela usar a dela, ela está 'assinando' a mensagem (garantindo que é ela), mas qualquer um com a chave pública dela pode ler.",
        "C": "Irrelevante para o Bob ler.",
        "A": "Alice não tem acesso à chave privada do Bob (pelo menos não deveria!).",
        "D": "Isso é criptografia simétrica (ex: AES)."
      },
      "dicaDeOuro": "O protocolo RSA é o exemplo mais famoso de criptografia assimétrica."
    }
  },
  {
    "id": "q_sw_4009",
    "discipline": "Segurança da Informação",
    "topic": "Ataques - SQL Injection",
    "statement": "O ataque de SQL Injection ocorre quando um invasor insere comandos SQL maliciosos em campos de entrada de um formulário. Qual a melhor prática de desenvolvimento para prevenir esse tipo de vulnerabilidade?",
    "options": {
      "A": "Utilizar 'Prepared Statements' (Parâmetros de Consulta) em vez de concatenar strings no SQL.",
      "B": "Aumentar a complexidade das senhas dos usuários.",
      "C": "Criptografar todo o banco de dados com AES-256.",
      "D": "Trocar o banco de dados SQL por planilhas de Excel.",
      "E": "Bloquear o acesso ao site por endereços IP estrangeiros."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O SQL Injection acontece porque o banco confunde 'dado do usuário' com 'comando do sistema'. Usando Prepared Statements, você diz pro banco: 'Isso aqui é só um texto, não execute'. O banco trata a entrada como um valor puro e o ataque falha.",
      "puloDoGato": "Prevenção de SQLi = Prepared Statements / Parametrized Queries.",
      "cascasDeBanana": {
        "E": "Invasores podem estar em qualquer lugar, inclusive no Brasil.",
        "C": "Criptografia protege os dados parados (at rest), mas o SQLi ataca o sistema em execução.",
        "D": "Excel é muito menos seguro e ineficiente.",
        "B": "Senhas fortes protegem contra Brute Force, não contra falhas de código SQL."
      },
      "dicaDeOuro": "Nunca, jamais, concatene strings como ` 'SELECT * FROM users WHERE name = ' + input `."
    }
  },
  {
    "id": "q_sw_4010",
    "discipline": "Segurança da Informação",
    "topic": "Certificados Digitais",
    "statement": "Qual a função de uma Autoridade Certificadora (AC) no contexto de Certificados Digitais SSL/TLS?",
    "options": {
      "A": "Prover hospedagem gratuita para sites governamentais.",
      "B": "Atuar como um terceiro de confiança que valida a identidade de uma entidade e assina digitalmente o seu certificado público.",
      "C": "Gerar as chaves privadas de todos os sites da internet.",
      "D": "Bloquear sites que contêm vírus.",
      "E": "Substituir a necessidade de criptografia assimétrica."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A Autoridade Certificadora é o 'Cartório da Internet'. Quando você vê o cadeado verde no site, a AC está dizendo: 'Eu conferi e esse site é realmente do Banco X'. Sem a AC, qualquer um poderia criar um certificado fingindo ser quem não é.",
      "puloDoGato": "Autoridade Certificadora = Validador de Identidade (Terceiro de Confiança).",
      "cascasDeBanana": {
        "A": "Chaves privadas nunca devem sair do servidor do dono.",
        "B": "",
        "C": "Serviço de emissão é pago ou via parcerias (Let's Encrypt).",
        "D": "Isso é papel de Antivírus/Firewalls.",
        "E": "A AC utiliza criptografia assimétrica para assinar os certificados."
      },
      "dicaDeOuro": "A 'Let's Encrypt' revolucionou a internet ao oferecer certificados gratuitos e automatizados para todos."
    }
  },
  {
    "id": "q_sw_4011",
    "discipline": "Segurança da Informação",
    "topic": "Hashing - Conceito",
    "statement": "Diferente da criptografia, uma função de Hash (como SHA-256) é uma função de via única. Isso significa que:",
    "options": {
      "A": "O hash muda toda vez que você processa a mesma mensagem.",
      "B": "O hash só pode ser lido por computadores quânticos.",
      "C": "É matematicamente impossível (ou computacionalmente inviável) reverter o hash para obter a mensagem original.",
      "D": "O hash exige uma chave secreta para ser gerado.",
      "E": "A mensagem resultante é sempre maior que a original."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Hash é como um 'liquidificador'. Você joga uma fruta e sai um suco. Você não consegue transformar o suco de volta na fruta original. Por isso usamos hash para guardar senhas: se o hacker roubar o banco, ele só vê o 'suco' (hash) e não a sua senha real.",
      "puloDoGato": "Hash = Via única (One-way) + Determinístico (Mesma entrada = Mesmo hash).",
      "cascasDeBanana": {
        "E": "O tamanho do hash é fixo (ex: SHA-256 tem sempre 256 bits), não importa o tamanho da entrada.",
        "A": "Se a entrada for a mesma, o hash DEVE ser o mesmo (determinismo).",
        "B": "Computadores comuns geram e verificam hashes em milisegundos.",
        "D": "Funções de hash comuns não usam chaves (diferente de HMAC)."
      },
      "dicaDeOuro": "Para aumentar a segurança das senhas em hash, utiliza-se o 'Salt' (uma pitada de dados aleatórios somada à senha antes do hash) para evitar ataques de Tabela Rainbow."
    }
  },
  {
    "id": "q_sw_4012",
    "discipline": "Segurança da Informação",
    "topic": "Princípio do Menor Privilégio",
    "statement": "O que dita o Princípio do Menor Privilégio na segurança da informação?",
    "options": {
      "A": "Que o sistema deve ser gratuito para pessoas de baixa renda.",
      "B": "Que um usuário ou processo deve ter apenas as permissões estritamente necessárias para realizar sua função, e nada mais.",
      "C": "Que os gerentes devem ter menos acesso que os programadores.",
      "D": "Que todos os usuários devem ter acesso total ao sistema para evitar lentidão.",
      "E": "Que a senha deve ser trocada todos os dias."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "É a regra do 'só o necessário'. Se o estagiário só precisa ler relatórios, ele não deve ter permissão para apagar o banco de dados. Se um hacker invadir a conta dele, o estrago será limitado apenas ao que ele tinha acesso.",
      "puloDoGato": "Menor Privilégio = Redução da superfície de ataque.",
      "cascasDeBanana": {
        "A": "Acesso total é o maior pesadelo de segurança.",
        "B": "",
        "C": "Acesso depende da função, não do cargo hierárquico apenas.",
        "D": "Confusão com o termo 'privilégio' social.",
        "E": "Políticas de troca de senha são importantes, mas não são o foco deste princípio."
      },
      "dicaDeOuro": "Este princípio também se aplica a serviços e aplicações (ex: um app de lanterna não precisa de acesso aos seus contatos)."
    }
  },
  {
    "id": "q_sw_4013",
    "discipline": "Segurança da Informação",
    "topic": "Firewall - Função",
    "statement": "Qual a função primordial de um Firewall em uma rede corporativa?",
    "options": {
      "A": "Filtrar e controlar o tráfego de entrada e saída da rede com base em regras de segurança pré-estabelecidas.",
      "B": "Detectar e remover vírus de arquivos PDF.",
      "C": "Aumentar a velocidade da conexão Wi-Fi.",
      "D": "Criptografar o disco rígido dos computadores.",
      "E": "Atuar como um servidor de arquivos compartilhado."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O Firewall é o 'porteiro' da rede. Ele olha cada pacote de dados que tenta entrar ou sair e pergunta: 'Você tem permissão?'. Se a regra diz que a porta 80 está aberta e a 22 está fechada, ele barra quem tentar entrar pela 22.",
      "puloDoGato": "Firewall = Filtro de Tráfego / Controle de Portas e IPs.",
      "cascasDeBanana": {
        "C": "Firewalls podem até causar uma leve lentidão devido ao processamento da inspeção.",
        "B": "Isso é papel do Antivírus/EDR.",
        "E": "Isso é um File Server / NAS.",
        "D": "Isso é criptografia de disco (ex: BitLocker)."
      },
      "dicaDeOuro": "Existem Firewalls de Próxima Geração (NGFW) que conseguem olhar até o conteúdo da mensagem (Deep Packet Inspection), não apenas a porta."
    }
  },
  {
    "id": "q_sw_4014",
    "discipline": "Segurança da Informação",
    "topic": "Engenharia Social - Phishing",
    "statement": "O ataque de Phishing é uma técnica de engenharia social que consiste em:",
    "options": {
      "A": "Roubar cabos físicos de fibra ótica.",
      "B": "Explorar uma falha de buffer overflow no servidor web.",
      "C": "Enganar o usuário através de e-mails, sites ou mensagens falsas para que ele revele informações sensíveis como senhas ou dados bancários.",
      "D": "Inundar o servidor com milhões de acessos para derrubá-lo.",
      "E": "Quebrar criptografia por força bruta usando supercomputadores."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Phishing vem de 'pescaria'. O hacker joga a isca (um e-mail falso do banco dizendo que sua conta vai ser bloqueada) e espera você 'fisgar' (clicar e digitar sua senha no site falso). Não é um ataque técnico no computador, é um ataque na 'falha humana'.",
      "puloDoGato": "Phishing = Engano / Isca / Fraude contra o usuário.",
      "cascasDeBanana": {
        "B": "Isso é um ataque técnico de exploração de vulnerabilidade.",
        "E": "Ataque de Brute Force.",
        "D": "Ataque de DoS/DDoS.",
        "A": "Roubo/Vandalismo físico."
      },
      "dicaDeOuro": "A melhor defesa contra Phishing é o treinamento de conscientização e o uso de Autenticação de Dois Fatores (2FA/MFA)."
    }
  },
  {
    "id": "q_sw_4100",
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Processos - Escalonamento",
    "statement": "O escalonador de CPU de um sistema operacional utiliza algoritmos para decidir qual processo na fila de prontos (ready queue) deve receber o processador. Qual algoritmo é conhecido por ser 'preemptivo' e dedicar fatias de tempo iguais (time quantum) para cada processo?",
    "options": {
      "A": "Shortest Job First (SJF) Não-Preemptivo.",
      "B": "First-Come, First-Served (FCFS).",
      "C": "Priority Scheduling (Prioridade) Estático.",
      "D": "Round Robin (RR).",
      "E": "Multilevel Feedback Queues sem preempção."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Round Robin é o algoritmo mais justo. Ele é como uma fila de banco onde cada um só pode ser atendido por 1 minuto. Deu o tempo? Volta pro fim da fila e o próximo entra. Isso garante que nenhum processo fique 'morrendo de fome' (starvation) esperando um processo gigante terminar.",
      "puloDoGato": "Round Robin = Preemptivo + Time Quantum (Fatias de Tempo).",
      "cascasDeBanana": {
        "B": "FCFS é o 'quem chega primeiro leva', não é preemptivo (o processo roda até cansar).",
        "A": "SJF foca no menor, mas sem preempção ele também trava se o primeiro for grande.",
        "C": "Prioridade pode causar starvation (processos de baixa prioridade nunca rodam).",
        "E": "Multilevel Feedback costuma ser preemptivo e complexo."
      },
      "dicaDeOuro": "Se o 'time quantum' do Round Robin for muito grande, ele vira um FCFS. Se for muito pequeno, o sistema gasta mais tempo trocando de contexto do que processando de verdade."
    }
  },
  {
    "id": "q_sw_4101",
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Memória - Memória Virtual",
    "statement": "A técnica de Memória Virtual permite que o sistema execute programas que exigem mais memória do que a capacidade física (RAM) disponível. O fenômeno de 'Thrashing' ocorre quando:",
    "options": {
      "A": "O sistema possui memória RAM sobrando e decide desligar o disco.",
      "B": "O usuário abre muitos programas simultaneamente mas o sistema gerencia tudo com perfeição.",
      "C": "O sistema gasta mais tempo trocando páginas entre a RAM e o disco do que executando instruções úteis, devido à falta de memória física.",
      "D": "O processador atinge 100% de uso devido a cálculos matemáticos intensos.",
      "E": "O computador é infectado por um vírus que apaga arquivos de sistema."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Thrashing é o 'desespero' do computador. Ele tem tanta coisa pra rodar e tão pouca RAM que ele fica o tempo todo tirando algo da RAM pra por no disco e trazendo do disco pra RAM. O HD não para de ler/escrever e o computador fica travado, parecendo que congelou.",
      "puloDoGato": "Thrashing = Falta de RAM -> Excesso de Page Faults -> Uso do Disco 100% -> Sistema para.",
      "cascasDeBanana": {
        "A": "Memória sobrando nunca gera thrashing.",
        "B": "CPU alta é processamento, thrashing é problema de I/O de memória.",
        "C": "",
        "D": "Malware é outro problema.",
        "E": "Isso seria o cenário ideal."
      },
      "dicaDeOuro": "Aumentar a memória RAM física é a única solução definitiva para o Thrashing persistente."
    }
  },
  {
    "id": "q_sw_4102",
    "discipline": "Sistemas Operacionais",
    "topic": "Sistemas de Arquivos - Estrutura",
    "statement": "Nos sistemas de arquivos do Linux (como Ext4), o que é um 'Inode'?",
    "options": {
      "A": "O nome do arquivo visível para o usuário.",
      "B": "Uma estrutura de dados que armazena metadados sobre o arquivo (como permissões, dono, tamanho e localização física no disco), mas não contém o nome ou os dados do arquivo.",
      "C": "O endereço IP do servidor onde o arquivo está hospedado.",
      "D": "Um comando usado para apagar diretórios vazios.",
      "E": "O conteúdo de texto ou binário gravado dentro do arquivo."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Inode é a 'identidade' do arquivo pro Linux. Ele guarda tudo: quem pode ler, quando foi criado, em qual pedaço do HD ele está. Curiosamente, o NOME do arquivo não fica no inode, fica na estrutura de diretório que aponta pro inode.",
      "puloDoGato": "Inode = Metadados do Arquivo (exceto nome e dados reais).",
      "cascasDeBanana": {
        "A": "O nome fica na entrada do diretório (dentry).",
        "E": "Os dados ficam nos blocos de dados do disco.",
        "D": "Comando para apagar diretório é o `rmdir`.",
        "C": "Inode é local, não tem relação com rede."
      },
      "dicaDeOuro": "Se o seu disco ficar cheio de arquivos minúsculos de 1 byte, você pode ficar sem 'Inodes' livres antes mesmo de ficar sem espaço em disco (GB)."
    }
  },
  {
    "id": "q_sw_4103",
    "discipline": "Sistemas Operacionais",
    "topic": "Sincronização - Semáforos",
    "statement": "Em sistemas concorrentes, um 'Semáforo Binário' (também conhecido como Mutex) é utilizado para:",
    "options": {
      "A": "Permitir que múltiplos processos acessem o mesmo recurso ao mesmo tempo sem restrições.",
      "B": "Comunicar mensagens complexas entre processos via rede.",
      "C": "Aumentar a velocidade de execução de threads paralelas.",
      "D": "Substituir o uso de memória cache L1.",
      "E": "Garantir a exclusão mútua, permitindo que apenas um processo por vez acesse uma região crítica do código."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Mutex é a 'chave do banheiro'. Se a chave está na porta (recurso livre), você pega a chave e entra. Enquanto você está lá, ninguém mais entra porque você está com a chave. Quando você sai, devolve a chave. Isso evita que dois processos 'atropelem' o mesmo dado ao mesmo tempo.",
      "puloDoGato": "Mutex / Semáforo Binário = Exclusão Mútua (Um por vez).",
      "cascasDeBanana": {
        "A": "Isso causaria condições de corrida (Race Conditions) e corrupção de dados.",
        "C": "Sincronização geralmente traz um pequeno overhead de tempo.",
        "D": "Hardware vs Primitiva de Software.",
        "B": "Isso seria IPC (Inter-Process Communication) mais complexo como Sockets ou Pipes."
      },
      "dicaDeOuro": "Uma falha comum em semáforos é esquecer de dar o 'signal' (devolver a chave), o que causa o travamento eterno dos outros processos (Deadlock)."
    }
  },
  {
    "id": "q_sw_4104",
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Memória - Fragmentação",
    "statement": "A fragmentação externa é um problema comum em sistemas que utilizam alocação de memória contígua. Como ela é definida?",
    "options": {
      "A": "Quando o sistema operacional ocupa mais memória que as aplicações do usuário.",
      "B": "Quando um arquivo no disco rígido está gravado em setores distantes.",
      "C": "Quando há espaço total de memória suficiente para atender a uma requisição, mas os espaços estão espalhados em pequenos blocos não-contíguos, impossibilitando a alocação.",
      "D": "Quando o tamanho do bloco alocado é ligeiramente maior que o necessário pelo processo.",
      "E": "Quando a memória RAM quebra fisicamente devido ao calor."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine um estacionamento com 10 vagas vazias, mas cada vaga está num canto diferente. Se chegar um caminhão que ocupa 3 vagas juntas, ele não consegue estacionar, mesmo tendo 10 vagas livres no total. Isso é fragmentação externa.",
      "puloDoGato": "Fragmentação Externa = Espaço total OK, mas picotado (não contíguo).",
      "cascasDeBanana": {
        "E": "Falha de hardware.",
        "A": "Overhead do sistema.",
        "B": "Isso é fragmentação de DISCO, não de memória RAM.",
        "D": "Isso é a definição de fragmentação INTERNA."
      },
      "dicaDeOuro": "A solução para a fragmentação externa é a Compactação de memória ou o uso de Paginação (que divide o processo em pedaços pequenos)."
    }
  },
  {
    "id": "q_sw_4105",
    "discipline": "Sistemas Operacionais",
    "topic": "Shell e Comandos - Linux",
    "statement": "No shell Bash do Linux, qual o comando utilizado para alterar as permissões de acesso de um arquivo ou diretório?",
    "options": {
      "A": "chgrp",
      "B": "ls -l",
      "C": "chown",
      "D": "chmod",
      "E": "touch"
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O comando é o 'Change Mode'. Com ele você diz quem pode ler (r), escrever (w) ou executar (x). Exemplo: `chmod 777 arquivo` dá acesso total pra todo mundo (o que é perigoso!).",
      "puloDoGato": "chmod = Muda Permissões (rwx). chown = Muda o Dono (Owner).",
      "cascasDeBanana": {
        "C": "chown muda o dono do arquivo.",
        "A": "chgrp muda o grupo do arquivo.",
        "B": "ls -l apenas mostra as permissões, não altera.",
        "E": "touch cria um arquivo vazio ou atualiza a data de acesso."
      },
      "dicaDeOuro": "As permissões são divididas em 3 grupos: Usuário (Dono), Grupo e Outros."
    }
  },
  {
    "id": "q_sw_4106",
    "discipline": "Sistemas Operacionais",
    "topic": "Threads - Espaço de Usuário vs Kernel",
    "statement": "Qual a principal vantagem das threads de nível de usuário (User-level threads) em relação às threads de nível de kernel?",
    "options": {
      "A": "Elas podem aproveitar múltiplos processadores simultaneamente de forma nativa.",
      "B": "Se uma thread de usuário travar, o sistema operacional consegue gerenciar as outras normalmente.",
      "C": "Elas possuem acesso direto ao hardware sem passar pelo SO.",
      "D": "Threads de usuário são suportadas apenas em sistemas de tempo real (RTOS).",
      "E": "A troca de contexto entre threads de usuário é muito mais rápida, pois não exige uma chamada de sistema (system call) para o modo kernel."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Thread de usuário é como uma 'festa privada' dentro do seu app. O SO nem sabe que elas existem. Como tudo acontece dentro do app, trocar de uma thread pra outra é instantâneo. O problema é que se uma thread de usuário fizer uma chamada que bloqueia, o SO acha que o APP INTEIRO bloqueou e para tudo.",
      "puloDoGato": "User Threads = Rápidas para trocar, mas uma trava todas. Kernel Threads = Mais lentas (syscall), mas independentes.",
      "cascasDeBanana": {
        "A": "Isso é vantagem das Kernel Threads.",
        "B": "Vantagem das Kernel Threads.",
        "C": "Nenhuma thread de usuário acessa hardware direto por segurança.",
        "D": "São usadas em quase todos os sistemas modernos (ex: Green Threads em linguagens antigas)."
      },
      "dicaDeOuro": "Sistemas modernos costumam usar um modelo híbrido para tentar pegar o melhor dos dois mundos."
    }
  },
  {
    "id": "q_sw_4107",
    "discipline": "Sistemas Operacionais",
    "topic": "Sistemas de Arquivos - Journaling",
    "statement": "Qual a função da técnica de 'Journaling' em sistemas de arquivos modernos como o NTFS ou Ext4?",
    "options": {
      "A": "Manter um log (diário) das alterações pendentes antes de escrevê-las no disco, permitindo a recuperação rápida do sistema após um desligamento inesperado (crash).",
      "B": "Criptografar os arquivos automaticamente para evitar roubo de dados.",
      "C": "Compactar os arquivos para economizar espaço em disco.",
      "D": "Verificar se existem vírus nos arquivos durante a cópia.",
      "E": "Aumentar a velocidade de leitura de arquivos grandes como vídeos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Journaling é o 'seguro contra queda de luz'. Antes de mexer no arquivo, o sistema escreve num caderninho: 'Vou mudar o arquivo X'. Se a luz cair no meio da mudança, quando o PC ligar ele olha o caderninho e sabe exatamente o que precisa consertar para o disco não ficar corrompido.",
      "puloDoGato": "Journaling = Recuperação rápida pós-crash + Integridade do sistema de arquivos.",
      "cascasDeBanana": {
        "B": "Criptografia é feita por outras camadas (EFS/BitLocker).",
        "E": "Journaling na verdade causa um pequeno impacto negativo na velocidade de escrita, pois escreve a mesma coisa duas vezes (no log e no arquivo).",
        "C": "Compressão é outra funcionalidade.",
        "D": "Papel do antivírus."
      },
      "dicaDeOuro": "Antigamente, sem Journaling, uma queda de luz exigia rodar o `scandisk` ou `fsck` por horas para achar erros; hoje isso leva segundos."
    }
  },
  {
    "id": "q_sw_4408",
    "discipline": "Engenharia de Software",
    "topic": "Ciclo de Vida - Modelo em Espiral",
    "statement": "Qual a principal característica que diferencia o Modelo em Espiral (Spiral Model) de Boehm dos outros modelos clássicos?",
    "options": {
      "A": "A exigência de que o sistema seja escrito em apenas uma linguagem.",
      "B": "A ausência de reuniões com o cliente.",
      "C": "O foco total em documentação exaustiva no início.",
      "D": "A proibição de realizar testes antes da entrega final.",
      "E": "A inclusão explícita da Análise de Riscos em cada iteração do ciclo."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O modelo espiral é 'paranoico'. A cada volta da espiral, você para e pergunta: 'O que pode dar errado aqui?'. Se o risco for muito alto, você nem continua. É excelente para projetos caros e complexos onde o fracasso não é uma opção.",
      "puloDoGato": "Modelo Espiral = Foco em Riscos + Iterativo.",
      "cascasDeBanana": {
        "C": "Isso é característica do Cascata.",
        "D": "Testes são feitos em todas as iterações.",
        "A": "Independente de tecnologia.",
        "B": "Pelo contrário, exige feedback constante."
      },
      "dicaDeOuro": "Cada volta da espiral passa por: Planejamento, Análise de Risco, Engenharia e Avaliação."
    }
  },
  {
    "id": "q_sw_4409",
    "discipline": "Engenharia de Software",
    "topic": "Estimativas - Pontos de Função",
    "statement": "A técnica de Análise de Pontos de Função (APF) é utilizada para medir o tamanho do software com base em:",
    "options": {
      "A": "O número de linhas de código (LOC).",
      "B": "O número de bugs encontrados por mês.",
      "C": "A funcionalidade entregue ao usuário, independente da tecnologia de implementação.",
      "D": "O custo do hardware onde o sistema será rodado.",
      "E": "O tempo total gasto pelos programadores em horas."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Ponto de Função mede o 'valor' do sistema pro negócio. Não importa se você fez em Java ou Python, se o sistema faz 1 cadastro, 2 relatórios e 1 consulta, o tamanho em Pontos de Função será o mesmo. É uma métrica justa para comparar produtividade entre tecnologias diferentes.",
      "puloDoGato": "APF = Medida de Funcionalidade (Lógica de Negócio) / Independente de Tecnologia.",
      "cascasDeBanana": {
        "A": "Linhas de código é uma métrica ruim (um programador ruim pode escrever 1000 linhas para algo que se faz com 10).",
        "E": "Isso é esforço, não tamanho.",
        "B": "Métrica de qualidade.",
        "D": "Métrica de infraestrutura."
      },
      "dicaDeOuro": "Os Pontos de Função consideram: Entradas Externas, Saídas Externas, Consultas Externas, Arquivos Lógicos Internos e Arquivos de Interface Externa."
    }
  },
  {
    "id": "q_sw_4410",
    "discipline": "Engenharia de Software",
    "topic": "Qualidade - Modelo McCall",
    "statement": "No modelo de qualidade de McCall, o fator 'Integridade' refere-se a:",
    "options": {
      "A": "A rapidez com que o sistema responde aos comandos.",
      "B": "O grau em que o acesso ao software ou aos dados por pessoas não autorizadas pode ser controlado.",
      "C": "A facilidade de transferir o sistema para outro servidor.",
      "D": "A facilidade de aprender a usar o sistema.",
      "E": "A precisão dos cálculos matemáticos realizados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Integridade no modelo McCall é sinônimo de 'Segurança'. É o quanto o sistema é íntegro contra ataques ou acessos indevidos. É proteger o dado de quem não deveria mexer nele.",
      "puloDoGato": "McCall Integridade = Segurança / Proteção de Dados.",
      "cascasDeBanana": {
        "A": "Usabilidade.",
        "B": "",
        "C": "Portabilidade.",
        "D": "Correção (Correctness).",
        "E": "Eficiência."
      },
      "dicaDeOuro": "O modelo de McCall divide a qualidade em 11 fatores organizados em três perspectivas: Revisão, Transição e Operação."
    }
  },
  {
    "id": "q_sw_4411",
    "discipline": "Engenharia de Software",
    "topic": "Testes - TDD",
    "statement": "Qual o fluxo de trabalho padrão do TDD (Test Driven Development)?",
    "options": {
      "A": "Escrever um teste que falha -> Escrever o código mínimo para o teste passar -> Refatorar o código.",
      "B": "Testar apenas as funcionalidades que o cliente reclamar.",
      "C": "Codificar -> Testar -> Corrigir.",
      "D": "Escrever toda a documentação -> Codificar tudo -> Testar no final.",
      "E": "Contratar um testador para escrever os testes após o deploy."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "TDD é o 'Teste Primeiro'. O mantra é: Red (Teste falha), Green (Código faz passar), Refactor (Melhora o código). Isso garante que 100% do seu código seja testado e que você só escreva o que é realmente necessário.",
      "puloDoGato": "TDD = Red -> Green -> Refactor.",
      "cascasDeBanana": {
        "C": "Fluxo tradicional.",
        "D": "Fluxo cascata.",
        "E": "Falta de automação.",
        "B": "Desenvolvimento reativo."
      },
      "dicaDeOuro": "O TDD ajuda a criar um design de código mais limpo e modular, pois você é forçado a pensar na interface da função antes de criá-la."
    }
  },
  {
    "id": "q_sw_4412",
    "discipline": "Engenharia de Software",
    "topic": "Arquitetura - Coesão",
    "statement": "O que significa 'Alta Coesão' em um módulo ou classe de software?",
    "options": {
      "A": "Que o módulo faz muitas coisas diferentes ao mesmo tempo.",
      "B": "Que o código foi escrito por vários programadores em conjunto.",
      "C": "Que o módulo não possui nenhuma função interna.",
      "D": "Que o módulo depende de muitas outras classes para funcionar.",
      "E": "Que as responsabilidades do módulo estão fortemente relacionadas e focadas em um único propósito ou objetivo."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Coesão é o 'foco'. Um módulo de 'Cálculo de Imposto' que também envia e-mail e limpa o banco de dados tem baixa coesão (tá fazendo de tudo). Um módulo que SÓ calcula imposto tem alta coesão. É muito mais fácil de entender e dar manutenção.",
      "puloDoGato": "Coesão = Foco em uma única tarefa (Single Responsibility).",
      "cascasDeBanana": {
        "A": "Isso é baixa coesão (módulos 'bombril' são difíceis de manter).",
        "D": "Isso é alto acoplamento.",
        "B": "Irrelevante para a qualidade técnica do código.",
        "C": "Módulo vazio não tem utilidade."
      },
      "dicaDeOuro": "Lembre-se: O ideal é Alta Coesão e Baixo Acoplamento."
    }
  },
  {
    "id": "q_sw_4413",
    "discipline": "Engenharia de Software",
    "topic": "Manutenção de Software - Tipos",
    "statement": "Uma alteração no sistema realizada para adaptar o software a um novo ambiente operacional (como uma nova versão do Windows ou troca de servidor) é classificada como manutenção:",
    "options": {
      "A": "Preventiva.",
      "B": "Adaptativa.",
      "C": "Perfectiva.",
      "D": "Preditiva.",
      "E": "Corretiva."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Adaptativa = O mundo mudou e o software tem que se adaptar (Novo SO, nova lei, novo banco). Perfectiva = O software tá bom, mas o cliente quer uma feature nova ou mais velocidade. Corretiva = Tem um bug e precisa consertar.",
      "puloDoGato": "Adaptativa = Mudança de Ambiente. Perfectiva = Melhoria de Funcionalidade.",
      "cascasDeBanana": {
        "A": "Conserto de erro.",
        "B": "",
        "C": "Melhoria/Evolução.",
        "D": "Manutenção industrial (raro em software).",
        "E": "Mudar o código agora pra ele não quebrar no futuro (ex: Refatoração)."
      },
      "dicaDeOuro": "A manutenção adaptativa é muito comum em sistemas corporativos que precisam acompanhar a evolução da infraestrutura de TI."
    }
  },
  {
    "id": "q_sw_4414",
    "discipline": "Engenharia de Software",
    "topic": "Prototipação",
    "statement": "Qual a principal vantagem de utilizar protótipos de 'baixa fidelidade' (como desenhos em papel) no início do projeto?",
    "options": {
      "A": "Eles já servem como código fonte final do sistema.",
      "B": "Eles garantem que o sistema não terá vírus.",
      "C": "São rápidos e baratos de criar e alterar, permitindo validar ideias e fluxos com o usuário sem gastar tempo com codificação.",
      "D": "Eles permitem testar a performance do banco de dados.",
      "E": "Eles substituem a necessidade de programadores."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Desenhar no papel (mockup) custa quase nada. Se o cliente odiar o layout, você amassa o papel e faz outro em 5 minutos. Se você programar o layout e ele odiar, você perdeu 3 dias de trabalho. Protótipo é pra errar rápido e barato.",
      "puloDoGato": "Protótipo de Baixa Fidelidade = Rapidez + Baixo Custo + Validação de Fluxo.",
      "cascasDeBanana": {
        "D": "Papel não testa performance de TI.",
        "A": "Protótipo é descartável ou apenas referência visual.",
        "B": "Nada a ver.",
        "E": "Programadores são essenciais para transformar o desenho em realidade."
      },
      "dicaDeOuro": "A prototipagem ajuda a reduzir drasticamente o risco de construir algo que o cliente não quer ou não sabe usar."
    }
  },
  {
    "id": "q_final_5000",
    "discipline": "Matemática",
    "topic": "Cálculo Diferencial - Derivadas",
    "statement": "Dada a função f(x) = x³ - 5x² + 8x - 10, qual é o valor da derivada f'(x) no ponto x = 2?",
    "options": {
      "A": "0",
      "B": "8",
      "C": "2",
      "D": "4",
      "E": "12"
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Derivada básica: baixa o expoente e subtrai 1. f'(x) = 3x² - 10x + 8. Substituindo x=2: 3(4) - 10(2) + 8 = 12 - 20 + 8 = 0.",
      "puloDoGato": "Se a derivada no ponto é zero, significa que ali temos um ponto crítico (máximo, mínimo ou sela).",
      "cascasDeBanana": {
        "A": "",
        "B": "Erro de sinal no -10x.",
        "C": "",
        "D": "",
        "E": "Esquecer de subtrair o 20."
      },
      "dicaDeOuro": "Derivadas de polinômios são presença garantida em provas de engenharia."
    }
  },
  {
    "id": "q_final_5001",
    "discipline": "Matemática",
    "topic": "Cálculo Integral - Áreas",
    "statement": "Qual a integral definida de f(x) = 2x no intervalo de [0, 3]?",
    "options": {
      "A": "18",
      "B": "6",
      "C": "9",
      "D": "12",
      "E": "3"
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A integral de 2x é x². Aplicando os limites: (3)² - (0)² = 9 - 0 = 9.",
      "puloDoGato": "Geometricamente, isso é a área de um triângulo com base 3 e altura 6 (Área = 3*6/2 = 9).",
      "cascasDeBanana": {
        "A": "",
        "B": "Apenas calculou f(3).",
        "C": "",
        "D": "",
        "E": "Esquecer de dividir por 2 na integral de x."
      },
      "dicaDeOuro": "Sempre visualize a integral como a área sob a curva."
    }
  },
  {
    "id": "q_final_5002",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Determinantes",
    "statement": "O determinante de uma matriz 2x2 A = [[a, b], [c, d]] é dado por (ad - bc). Se a matriz for [[3, 5], [1, 2]], qual o seu determinante?",
    "options": {
      "A": "11",
      "B": "1",
      "C": "0",
      "D": "-1",
      "E": "13"
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Cálculo direto: (3 * 2) - (5 * 1) = 6 - 5 = 1.",
      "puloDoGato": "Se o determinante é diferente de zero, a matriz possui inversa.",
      "cascasDeBanana": {
        "A": "Somar em vez de subtrair.",
        "D": "Inverter a ordem da subtração."
      },
      "dicaDeOuro": "Determinante = 0 significa que as linhas ou colunas são linearmente dependentes."
    }
  },
  {
    "id": "q_final_5003",
    "discipline": "Matemática",
    "topic": "Cálculo - Regra de L'Hôpital",
    "statement": "Ao calcular o limite de sen(x)/x quando x tende a 0, encontramos uma indeterminação do tipo 0/0. Aplicando a Regra de L'Hôpital, qual o valor do limite?",
    "options": {
      "A": "1",
      "B": "Indeterminado",
      "C": "0",
      "D": "Infinito",
      "E": "-1"
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "L'Hôpital diz: deriva em cima e deriva embaixo. Derivada de sen(x) é cos(x). Derivada de x é 1. Limite de cos(0)/1 = 1/1 = 1.",
      "puloDoGato": "Esse é o limite fundamental trigonométrico.",
      "cascasDeBanana": {
        "C": "Confundir cos(0) com sen(0).",
        "D": "Achar que 0/0 é sempre infinito."
      },
      "dicaDeOuro": "Só use L'Hôpital se tiver 0/0 ou Infinito/Infinito."
    }
  },
  {
    "id": "q_final_5004",
    "discipline": "Matemática",
    "topic": "Álgebra Linear - Matriz Identidade",
    "statement": "Qual a propriedade fundamental da Matriz Identidade (I) na multiplicação de matrizes?",
    "options": {
      "A": "O resultado é o determinante da matriz.",
      "B": "O resultado é a própria matriz original (A * I = A).",
      "C": "O resultado é sempre zero.",
      "D": "O resultado é a matriz transposta.",
      "E": "A multiplicação só é possível se I for uma matriz linha."
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A matriz identidade é o 'número 1' das matrizes. Qualquer matriz multiplicada por ela não muda.",
      "puloDoGato": "A diagonal principal de I é toda composta por 1 e o restante por 0.",
      "cascasDeBanana": {
        "A": "Isso seria a matriz nula.",
        "B": "",
        "C": "Propriedade da transposição.",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "A matriz identidade deve ser quadrada."
    }
  },
  {
    "id": "q_final_5005",
    "discipline": "Matemática",
    "topic": "Estatística - Média e Mediana",
    "statement": "Em um conjunto de dados {2, 2, 5, 7, 14}, qual o valor da Mediana?",
    "options": {
      "A": "7",
      "B": "6",
      "C": "14",
      "D": "5",
      "E": "2"
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Mediana é o valor do meio com os dados ordenados. O conjunto já está ordenado: 2, 2, [5], 7, 14. O valor central é 5.",
      "puloDoGato": "Se o número de elementos fosse par, a mediana seria a média dos dois centrais.",
      "cascasDeBanana": {
        "E": "Isso é a Moda.",
        "B": "Isso é a Média (30/5 = 6)."
      },
      "dicaDeOuro": "Cuidado para não confundir Média (soma tudo), Mediana (meio) e Moda (mais frequente)."
    }
  },
  {
    "id": "q_final_5006",
    "discipline": "Matemática",
    "topic": "Trigonometria - Identidades",
    "statement": "Qual o valor de sen²(θ) + cos²(θ) para qualquer ângulo θ?",
    "options": {
      "A": "0",
      "B": "1",
      "C": "Depende do ângulo",
      "D": "2",
      "E": "0.5"
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Essa é a identidade fundamental da trigonometria, baseada no Teorema de Pitágoras no círculo unitário.",
      "puloDoGato": "Independente do valor de θ, a soma dos quadrados sempre será 1.",
      "cascasDeBanana": {
        "C": "Essa é a casca de banana clássica; muita gente acha que varia."
      },
      "dicaDeOuro": "Lembre-se disso para simplificar equações complexas de ondas e vibrações."
    }
  },
  {
    "id": "q_final_5007",
    "discipline": "Matemática",
    "topic": "Cálculo - Derivada da Exponencial",
    "statement": "Qual a derivada da função f(x) = e^(2x)?",
    "options": {
      "A": "2 * e^(2x)",
      "B": "e^(2x)",
      "C": "x * e^(2x)",
      "D": "2x * e^(2x)",
      "E": "e^x"
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Regra da cadeia: deriva o que está dentro (2x -> 2) e multiplica pela derivada da externa (e^u -> e^u). Resultado: 2 * e^(2x).",
      "puloDoGato": "A função e^x é a única cuja derivada é ela mesma; quando tem expoente, a regra da cadeia manda.",
      "cascasDeBanana": {
        "B": "Esquecer a regra da cadeia.",
        "D": "Derivar o expoente como se fosse polinômio."
      },
      "dicaDeOuro": "Funções exponenciais são a base para cálculos de decaimento e crescimento em engenharia."
    }
  },
  {
    "id": "q_final_5008",
    "discipline": "Matemática",
    "topic": "Geometria Analítica - Reta",
    "statement": "Qual a inclinação (coeficiente angular) da reta dada pela equação y = -3x + 5?",
    "options": {
      "A": "-5",
      "B": "5",
      "C": "3",
      "D": "-3",
      "E": "0"
    },
    "correctOption": "D",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na forma y = mx + b, 'm' é o coeficiente angular. Aqui, m = -3.",
      "puloDoGato": "Como o coeficiente é negativo, a reta é decrescente.",
      "cascasDeBanana": {
        "B": "Esse é o coeficiente linear (onde corta o eixo y).",
        "C": "Errar o sinal."
      },
      "dicaDeOuro": "Retas paralelas possuem o mesmo coeficiente angular."
    }
  },
  {
    "id": "q_final_5009",
    "discipline": "Matemática",
    "topic": "Logaritmos - Propriedades",
    "statement": "Qual o valor de log de 100 na base 10?",
    "options": {
      "A": "2",
      "B": "100",
      "C": "0",
      "D": "1",
      "E": "10"
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Logaritmo pergunta: '10 elevado a quanto dá 100?'. 10² = 100, então o log é 2.",
      "puloDoGato": "Log e Exponencial são operações inversas.",
      "cascasDeBanana": {
        "E": "Confundir base com resultado.",
        "C": "Log de 1 é que é 0."
      },
      "dicaDeOuro": "Lembre-se: log(a * b) = log(a) + log(b)."
    }
  },
  {
    "id": "q_final_5010",
    "discipline": "Matemática",
    "topic": "Números Complexos - Módulo",
    "statement": "Qual o módulo do número complexo z = 3 + 4i?",
    "options": {
      "A": "12",
      "B": "25",
      "C": "5",
      "D": "1",
      "E": "7"
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Módulo |z| = √(a² + b²) = √(3² + 4²) = √(9 + 16) = √25 = 5.",
      "puloDoGato": "É a mesma lógica da hipotenusa de um triângulo retângulo (3, 4, 5).",
      "cascasDeBanana": {
        "E": "Apenas somar 3 + 4.",
        "B": "Esquecer de tirar a raiz quadrada."
      },
      "dicaDeOuro": "Números complexos são fundamentais em análise de circuitos e sinais."
    }
  },
  {
    "id": "q_final_5011",
    "discipline": "Matemática",
    "topic": "Probabilidade - Eventos Independentes",
    "statement": "Se a probabilidade de um evento A ocorrer é 0.5 e a de um evento B é 0.4, e eles são independentes, qual a probabilidade de AMBOS ocorrerem?",
    "options": {
      "A": "0.9",
      "B": "0.45",
      "C": "0.2",
      "D": "0.1",
      "E": "0.25"
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Para eventos independentes, P(A e B) = P(A) * P(B) = 0.5 * 0.4 = 0.2.",
      "puloDoGato": "A palavra 'E' na probabilidade geralmente significa multiplicação.",
      "cascasDeBanana": {
        "A": "Somar as probabilidades (isso seria P(A ou B) se fossem disjuntos).",
        "B": "Subtrair.",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Se o resultado fosse 0, os eventos seriam mutuamente exclusivos."
    }
  },
  {
    "id": "q_final_5012",
    "discipline": "Matemática",
    "topic": "Cálculo - Máximos e Mínimos",
    "statement": "Para encontrar os pontos de máximo ou mínimo de uma função contínua f(x), qual o primeiro passo?",
    "options": {
      "A": "Calcular o valor de f(0).",
      "B": "Elevar a função ao quadrado.",
      "C": "Encontrar os valores de x onde a primeira derivada f'(x) é igual a zero.",
      "D": "Calcular a integral da função.",
      "E": "Verificar onde a função corta o eixo x."
    },
    "correctOption": "C",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Pontos críticos ocorrem onde a inclinação da reta tangente é zero (topo ou fundo do vale).",
      "puloDoGato": "Depois de achar f'(x)=0, usa-se a segunda derivada f''(x) para saber se é máximo ou mínimo.",
      "cascasDeBanana": {
        "D": "Integral serve para achar áreas.",
        "E": "Isso encontra as raízes da função."
      },
      "dicaDeOuro": "Se f''(x) > 0 é mínimo; se f''(x) < 0 é máximo."
    }
  },
  {
    "id": "q_final_5013",
    "discipline": "Matemática",
    "topic": "Vetores - Produto Escalar",
    "statement": "O produto escalar entre os vetores u = (1, 3) e v = (4, -1) é:",
    "options": {
      "A": "-1",
      "B": "0",
      "C": "12",
      "D": "7",
      "E": "1"
    },
    "correctOption": "E",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Produto escalar = (u1*v1) + (u2*v2) = (1*4) + (3*-1) = 4 - 3 = 1.",
      "puloDoGato": "Se o produto escalar fosse 0, os vetores seriam ortogonais.",
      "cascasDeBanana": {
        "D": "Somar todos os números.",
        "C": "Multiplicar mas não somar."
      },
      "dicaDeOuro": "O produto escalar resulta em um número (escalar), não em um vetor."
    }
  },
  {
    "id": "q_final_5014",
    "discipline": "Matemática",
    "topic": "Sequências - Progressão Aritmética (PA)",
    "statement": "Em uma PA onde o primeiro termo a1 = 5 e a razão r = 3, qual é o décimo termo (a10)?",
    "options": {
      "A": "38",
      "B": "32",
      "C": "41",
      "D": "30",
      "E": "35"
    },
    "correctOption": "B",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Fórmula: an = a1 + (n-1)*r. a10 = 5 + (9)*3 = 5 + 27 = 32.",
      "puloDoGato": "PA é uma sequência onde a diferença entre termos vizinhos é constante.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "Multiplicar 10*3 direto.",
        "D": "Esquecer de subtrair 1 do n.",
        "E": ""
      },
      "dicaDeOuro": "A soma dos termos de uma PA também é uma fórmula comum em provas."
    }
  },
  {
    "id": "q_final_5015",
    "discipline": "Matemática",
    "topic": "Matrizes - Transposta",
    "statement": "Dada a matriz A = [[1, 2], [3, 4]], qual a sua transposta A^T?",
    "options": {
      "A": [
        [
          1,
          3
        ],
        [
          2,
          4
        ]
      ],
      "B": [
        [
          3,
          4
        ],
        [
          1,
          2
        ]
      ],
      "C": [
        [
          4,
          3
        ],
        [
          2,
          1
        ]
      ],
      "D": [
        [
          2,
          1
        ],
        [
          4,
          3
        ]
      ],
      "E": [
        [
          1,
          2
        ],
        [
          3,
          4
        ]
      ]
    },
    "correctOption": "A",
    "cargo": [
      "Engenharia Civil",
      "Engenharia de Petróleo",
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Transpor é trocar linha por coluna. A primeira linha (1, 2) vira a primeira coluna. A segunda linha (3, 4) vira a segunda coluna.",
      "puloDoGato": "Se A = A^T, a matriz é chamada de Simétrica.",
      "cascasDeBanana": {
        "C": "Inverteu tudo.",
        "B": "Trocou as linhas de lugar."
      },
      "dicaDeOuro": "A transposta da transposta é a própria matriz original."
    }
  },
  {
    "id": "q_final_6009",
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Entrada e Saída - Buffering",
    "statement": "Qual a finalidade do 'Buffering' no gerenciamento de E/S de um sistema operacional?",
    "options": {
      "A": "Aumentar a resolução das imagens no monitor.",
      "B": "Substituir o uso de interrupções de hardware.",
      "C": "Criptografar os dados que saem para a impressora.",
      "D": "Compactar os arquivos para economizar espaço em disco.",
      "E": "Lidar com a diferença de velocidade entre o produtor e o consumidor de dados, armazenando temporariamente os dados em memória enquanto são transferidos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Buffer é a 'caixa d'água'. A água chega da rua (lento/irregular) e enche a caixa. Você usa a água da caixa de forma constante. No PC, o buffer evita que o processador fique parado esperando o teclado ou o disco que são muito mais lentos.",
      "puloDoGato": "Buffering = Compensação de velocidade entre dispositivos.",
      "cascasDeBanana": {
        "D": "Isso é compressão."
      },
      "dicaDeOuro": "O buffering também ajuda a reduzir o número de acessos físicos a dispositivos lentos."
    }
  },
  {
    "id": "q_final_6010",
    "discipline": "Sistemas Operacionais",
    "topic": "Deadlock - Condições Necessárias",
    "statement": "Para que ocorra um 'Deadlock' (Impasse) em um sistema operacional, quatro condições devem ocorrer simultaneamente (Condições de Coffman). Qual das alternativas abaixo NÃO é uma dessas condições?",
    "options": {
      "A": "Fragmentação de Memória.",
      "B": "Posse e Espera (Hold and Wait).",
      "C": "Não-Preempção.",
      "D": "Espera Circular.",
      "E": "Exclusão Mútua."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Deadlock é o 'nó cego'. Quatro coisas causam ele: 1. Só um usa por vez, 2. Eu seguro um e espero outro, 3. Ninguém pode tirar de mim à força, 4. Um espera o outro num círculo. Fragmentação é problema de espaço, não de travamento lógico.",
      "puloDoGato": "Condições de Deadlock: Exclusão Mútua, Posse e Espera, Sem Preempção e Espera Circular.",
      "cascasDeBanana": {
        "E": "Condição real.",
        "B": "Condição real.",
        "C": "Condição real.",
        "D": "Condição real."
      },
      "dicaDeOuro": "Para prevenir deadlocks, basta quebrar apenas UMA dessas quatro condições."
    }
  },
  {
    "id": "q_final_6011",
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Sequência",
    "statement": "No Diagrama de Sequência da UML, o que as linhas verticais tracejadas (Lifelines) representam?",
    "options": {
      "A": "A existência de um objeto ou participante ao longo do tempo durante a interação.",
      "B": "As mensagens enviadas entre os servidores de rede.",
      "C": "A hierarquia de classes no banco de dados.",
      "D": "Os erros que aconteceram durante a execução.",
      "E": "As cores da interface do usuário."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Linha de Vida (Lifeline) mostra 'quem' está participando da conversa. Se o cliente manda uma mensagem pro servidor, tem uma linha pro cliente e uma pro servidor. O tempo corre de cima para baixo.",
      "puloDoGato": "Lifeline = Existência temporal do objeto na interação.",
      "cascasDeBanana": {
        "C": "Isso é Diagrama de Classes.",
        "B": "Isso é Diagrama de Implantação/Rede."
      },
      "dicaDeOuro": "O retângulo sobre a linha de vida chama-se 'Foco de Controle' e indica quando o objeto está realmente trabalhando."
    }
  },
  {
    "id": "q_final_6013",
    "discipline": "Arquitetura de Sistemas",
    "topic": "REST - Verbos HTTP",
    "statement": "Em uma API RESTful, qual verbo HTTP deve ser utilizado para ATUALIZAR parcialmente os dados de um recurso existente?",
    "options": {
      "A": "POST.",
      "B": "DELETE.",
      "C": "PATCH.",
      "D": "GET.",
      "E": "PUT."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "PUT é para troca total (mudar o objeto inteiro). PATCH é para o 'remendo' (mudar só o e-mail do usuário, por exemplo).",
      "puloDoGato": "PUT = Atualização Total / Substituição. PATCH = Atualização Parcial.",
      "cascasDeBanana": {
        "D": "GET é para leitura apenas.",
        "A": "POST é para criação de novos recursos.",
        "B": "DELETE é para remoção."
      },
      "dicaDeOuro": "Embora muitos usem POST ou PUT para tudo, seguir os verbos corretos torna sua API muito mais profissional e padronizada."
    }
  },
  {
    "id": "q_final_6014",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Statelessness (Ausência de Estado)",
    "statement": "O que significa dizer que uma arquitetura REST é 'Stateless'?",
    "options": {
      "A": "Que o site não possui estados brasileiros.",
      "B": "Que o sistema não utiliza banco de dados.",
      "C": "Que o servidor guarda todas as sessões dos usuários em memória RAM.",
      "D": "Que o servidor é desligado após cada resposta.",
      "E": "Que cada requisição do cliente para o servidor deve conter todas as informações necessárias para ser entendida e processada, sem depender de um contexto guardado no servidor."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Stateless é o 'servidor sem memória'. Ele não lembra quem você é entre uma requisição e outra. Por isso, em cada clique, você tem que mandar o seu Token (passe). Isso permite que você tenha 100 servidores e qualquer um deles possa te atender, pois nenhum deles guarda a sua 'sessão' localmente.",
      "puloDoGato": "Stateless = Servidor não guarda estado da sessão + Escalabilidade Facilitada.",
      "cascasDeBanana": {
        "C": "Isso é Stateful (antigo e difícil de escalar).",
        "A": "Piada linguística."
      },
      "dicaDeOuro": "O uso de JWT é a forma mais comum de gerenciar a identidade em sistemas stateless."
    }
  },
  {
    "id": "q_final_6015",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Escalabilidade Vertical vs Horizontal",
    "statement": "Qual a principal diferença entre escalabilidade Vertical e Horizontal?",
    "options": {
      "A": "Vertical é subir o servidor pro andar de cima; Horizontal é mudar de prédio.",
      "B": "Não há diferença técnica.",
      "C": "Vertical é aumentar o poder de um único servidor (mais RAM/CPU); Horizontal é adicionar mais servidores ao conjunto.",
      "D": "Vertical só funciona no Linux.",
      "E": "Horizontal é sempre mais barata que Vertical."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Vertical (Scale-up) é comprar um motor mais potente pro seu carro. Horizontal (Scale-out) é contratar mais 5 carros pra levar a carga. A Horizontal é melhor para a nuvem porque você pode ir adicionando servidores baratinhos conforme a necessidade.",
      "puloDoGato": "Vertical = Upgrade de Hardware. Horizontal = Adição de novos nós.",
      "cascasDeBanana": {
        "E": "Depende do cenário, mas a horizontal costuma ser mais resiliente (se um cai, os outros ficam)."
      },
      "dicaDeOuro": "Bancos de dados relacionais tradicionais têm mais facilidade de escalar verticalmente, enquanto NoSQL escala horizontalmente por natureza."
    }
  },
  {
    "id": "q_final_6016",
    "discipline": "Gestão de Projetos",
    "topic": "Análise de Valor Agregado (EVA)",
    "statement": "Na Análise de Valor Agregado, o que indica um Índice de Desempenho de Custos (IDC ou CPI) menor que 1.0?",
    "options": {
      "A": "O projeto está acima do orçamento (gastando mais do que o valor do trabalho realizado).",
      "B": "O projeto está abaixo do orçamento (gastando menos que o previsto).",
      "C": "O projeto terminou antes do prazo.",
      "D": "A qualidade do produto é superior à esperada.",
      "E": "O projeto está exatamente no custo planejado."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "IDC = Valor Agregado / Custo Real. Se deu 0.8, significa que para cada 1 real gasto, você só produziu 80 centavos de valor. Você está 'queimando' dinheiro.",
      "puloDoGato": "IDC < 1.0 = Prejuízo / Estouro de orçamento. IDC > 1.0 = Economia.",
      "cascasDeBanana": {
        "B": "Isso seria IDC > 1.0."
      },
      "dicaDeOuro": "O IDC é uma das métricas mais importantes para prever o custo final do projeto."
    }
  },
  {
    "id": "q_supp_7000",
    "discipline": "Sistemas Operacionais",
    "topic": "Sistemas de Arquivos - Hard Links vs Symbolic Links",
    "statement": "No Linux, qual a principal diferença entre um 'Hard Link' e um 'Symbolic Link' (Soft Link)?",
    "options": {
      "A": "Não existe Symbolic Link no Linux.",
      "B": "Hard links podem apontar para diretórios, Soft links não.",
      "C": "Soft links são mais rápidos que Hard links.",
      "D": "Hard links ocupam o dobro do espaço em disco.",
      "E": "Um Hard Link aponta diretamente para o inode do arquivo; se o arquivo original for apagado, o hard link continua funcionando. Um Symbolic Link aponta para o nome do arquivo; se o original sumir, o link quebra."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Hard link é como se o arquivo tivesse dois nomes diferentes para a mesma 'alma' (inode). Soft link é como um atalho do Windows: ele só guarda o caminho. Se você apagar o alvo, o atalho não serve pra nada.",
      "puloDoGato": "Hard Link = Mesmo Inode. Soft Link = Aponta para o Caminho/Nome.",
      "cascasDeBanana": {
        "B": "Invertido: Soft links podem apontar pra diretório, Hard links geralmente não por risco de loops."
      },
      "dicaDeOuro": "Use `ln` para hard links e `ln -s` para symbolic links."
    }
  },
  {
    "id": "q_supp_7001",
    "discipline": "Sistemas Operacionais",
    "topic": "Gerenciamento de Processos - PCB",
    "statement": "O que é o Process Control Block (PCB) em um sistema operacional?",
    "options": {
      "A": "Uma estrutura de dados que armazena todas as informações necessárias para gerenciar um processo (estado, registradores, limites de memória, etc.).",
      "B": "Um tipo de vírus que ataca a memória RAM.",
      "C": "Um bloco de hardware que acelera o processador.",
      "D": "Um comando usado para matar processos travados.",
      "E": "O nome do ventilador da CPU."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O PCB é o 'prontuário médico' do processo. Quando o SO para um processo pra rodar outro, ele anota tudo o que o processo estava fazendo no PCB. Quando o processo volta, o SO lê o PCB e continua exatamente de onde parou.",
      "puloDoGato": "PCB = Contexto do Processo.",
      "cascasDeBanana": {
        "D": "O comando é o `kill`.",
        "B": "Absurdo."
      },
      "dicaDeOuro": "A troca de contexto (context switch) é justamente o ato de salvar um PCB e carregar outro."
    }
  },
  {
    "id": "q_supp_7002",
    "discipline": "Sistemas Operacionais",
    "topic": "Paginação - Tabela de Páginas",
    "statement": "Qual a função da 'Tabela de Páginas' (Page Table) no gerenciamento de memória virtual?",
    "options": {
      "A": "Aumentar a velocidade da internet.",
      "B": "Listar todos os sites que o usuário visitou.",
      "C": "Substituir a necessidade de memória cache.",
      "D": "Mapear endereços lógicos (usados pelos programas) para endereços físicos (localização real na memória RAM).",
      "E": "Organizar os arquivos no disco rígido."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O programa acha que tem uma memória infinita e linear (Endereço Lógico). Mas na vida real, os pedaços dele estão espalhados pela RAM (Endereço Físico). A Tabela de Páginas é o 'tradutor' que diz onde cada pedaço está de verdade.",
      "puloDoGato": "Tabela de Páginas = De Lógico para Físico.",
      "cascasDeBanana": {
        "E": "Isso é a FAT ou MFT do sistema de arquivos."
      },
      "dicaDeOuro": "Para acelerar esse mapeamento, o hardware utiliza um cache especial chamado TLB (Translation Lookaside Buffer)."
    }
  },
  {
    "id": "q_supp_7003",
    "discipline": "Sistemas Operacionais",
    "topic": "Esgotamento de Recursos - Starvation",
    "statement": "O fenômeno de 'Starvation' (Inanição) ocorre quando:",
    "options": {
      "A": "O disco rígido está cheio.",
      "B": "Um processo de baixa prioridade nunca consegue ser executado porque processos de alta prioridade estão sempre ocupando a CPU.",
      "C": "O usuário esquece de salvar o arquivo.",
      "D": "O computador fica sem energia elétrica.",
      "E": "A memória RAM queima."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Starvation é o 'bullying' do sistema operacional. O processo tá lá na fila, mas como ele é 'sem prioridade', todo mundo passa na frente dele e ele nunca consegue rodar. Ele 'morre de fome' esperando a CPU.",
      "puloDoGato": "Starvation = Processo 'esquecido' na fila devido à prioridade de outros.",
      "cascasDeBanana": {
        "A": "Confusão semântica com a palavra fome/energia.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "A solução para o starvation é o 'Aging' (Envelhecimento): quanto mais tempo o processo espera, mais a prioridade dele aumenta automaticamente."
    }
  },
  {
    "id": "q_supp_7004",
    "discipline": "Sistemas Operacionais",
    "topic": "Escalonamento - Prioridade Dinâmica",
    "statement": "O que caracteriza o escalonamento com 'Prioridade Dinâmica'?",
    "options": {
      "A": "Não existem prioridades no Linux.",
      "B": "O usuário deve digitar a prioridade manualmente toda hora.",
      "C": "A prioridade depende do preço do computador.",
      "D": "A prioridade é definida no momento da compilação e nunca muda.",
      "E": "A prioridade do processo pode ser ajustada pelo sistema operacional durante a execução para atingir objetivos como evitar starvation ou priorizar tarefas interativas."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O SO é justo. Se ele vê que um processo de rede está esperando muito, ele sobe a prioridade dele. Se um processo de cálculo matemático está roubando a CPU toda, ele baixa um pouco. Isso mantém o sistema 'esperto' e responsivo.",
      "puloDoGato": "Prioridade Dinâmica = Reajuste em tempo de execução.",
      "cascasDeBanana": {
        "D": "Isso é Prioridade Estática."
      },
      "dicaDeOuro": "O comando `nice` e `renice` no Linux servem para influenciar essa prioridade."
    }
  },
  {
    "id": "q_supp_7005",
    "discipline": "Sistemas Operacionais",
    "topic": "Sistemas de Arquivos - FAT32 vs NTFS",
    "statement": "Qual a principal limitação do sistema de arquivos FAT32 em comparação ao NTFS?",
    "options": {
      "A": "Não aceita arquivos de imagem.",
      "B": "É muito mais lento para ler arquivos pequenos.",
      "C": "Não suporta arquivos individuais maiores que 4GB e carece de recursos avançados de segurança e journaling.",
      "D": "Só funciona em disquetes.",
      "E": "Apaga os dados se o computador for reiniciado."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Tente copiar um filme de 5GB pra um pendrive antigo: ele vai dar erro mesmo tendo espaço. Isso é o limite do FAT32. O NTFS resolve isso e ainda tem permissões de usuário e o 'journaling' (que evita corrupção se acabar a luz).",
      "puloDoGato": "FAT32 = Limite de 4GB por arquivo. NTFS = Moderno e Seguro.",
      "cascasDeBanana": {
        "E": "Qualquer sistema de arquivos é persistente."
      },
      "dicaDeOuro": "Por ser simples, o FAT32 ainda é muito usado para compatibilidade entre Windows, Mac e Linux em pendrives."
    }
  },
  {
    "id": "q_supp_7006",
    "discipline": "Sistemas Operacionais",
    "topic": "Kernel - Monolítico vs Microkernel",
    "statement": "Qual a característica fundamental de um Kernel Monolítico (como o do Linux)?",
    "options": {
      "A": "Ele não permite o uso de internet.",
      "B": "Ele é escrito inteiramente em linguagem Assembly.",
      "C": "Ele é dividido em pequenos módulos que rodam no espaço de usuário.",
      "D": "Ele só funciona em um único processador.",
      "E": "Quase todos os serviços do SO (gerenciamento de memória, sistemas de arquivos, drivers) rodam dentro do mesmo espaço de endereçamento do kernel, visando performance."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Monolítico é o 'blocão'. Tudo o que é importante tá lá dentro junto. Isso é muito rápido porque não precisa ficar trocando de 'sala' pra falar com o driver de vídeo. O risco é que se um driver der erro, ele pode derrubar o sistema inteiro.",
      "puloDoGato": "Monolítico = Performance / Tudo no mesmo espaço. Microkernel = Estabilidade / Serviços isolados.",
      "cascasDeBanana": {
        "C": "Isso é a definição de Microkernel."
      },
      "dicaDeOuro": "Apesar de monolítico, o Linux usa 'Módulos' que podem ser carregados e descarregados sem reiniciar o PC."
    }
  },
  {
    "id": "q_supp_7007",
    "discipline": "Sistemas Operacionais",
    "topic": "Sinais (Signals) no Linux",
    "statement": "No Linux, o sinal SIGKILL (geralmente enviado pelo comando `kill -9`) tem qual característica especial?",
    "options": {
      "A": "Ele reinicia o computador.",
      "B": "Ele força a finalização imediata do processo, e o processo não pode ignorar ou capturar esse sinal para realizar uma limpeza.",
      "C": "Ele apaga o arquivo executável do disco.",
      "D": "Ele duplica o processo.",
      "E": "Ele pede educadamente para o processo fechar."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O `kill -9` é a 'guilhotina'. O processo não tem chance de dizer adeus, salvar arquivo ou fechar conexão. O SO simplesmente corta o pescoço dele. Use com cuidado!",
      "puloDoGato": "SIGKILL (-9) = Encerramento forçado e incondicional.",
      "cascasDeBanana": {
        "A": "Isso é o SIGTERM (15), que é o padrão do comando kill.",
        "B": "",
        "C": "",
        "D": "",
        "E": ""
      },
      "dicaDeOuro": "Sempre tente o `kill` normal (SIGTERM) primeiro para dar chance ao processo de fechar corretamente."
    }
  },
  {
    "id": "q_supp_7008",
    "discipline": "Análise de Sistemas",
    "topic": "UML - Diagrama de Casos de Uso",
    "statement": "No Diagrama de Casos de Uso, qual a diferença entre os relacionamentos 'Include' e 'Extend'?",
    "options": {
      "A": "Extend é obrigatório no Java, Include no C#.",
      "B": "Include indica uma funcionalidade obrigatória que sempre ocorre; Extend indica uma funcionalidade opcional que ocorre apenas sob certas condições.",
      "C": "Include só pode ser usado por atores humanos.",
      "D": "Include é para erros, Extend é para sucessos.",
      "E": "Não há diferença técnica."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio",
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Include = 'Sempre que você sacar dinheiro, o sistema TEM que validar a senha'. Extend = 'Quando você sacar dinheiro, o sistema PODE (se você quiser) imprimir um comprovante'.",
      "puloDoGato": "Include = Obrigatório / Parte do fluxo. Extend = Opcional / Condicional.",
      "cascasDeBanana": {
        "A": "",
        "B": "",
        "C": "",
        "D": "UML é independente de linguagem.",
        "E": ""
      },
      "dicaDeOuro": "O sentido da seta no `<<include>>` aponta para o comportamento comum; no `<<extend>>` aponta para o comportamento base."
    }
  },
  {
    "id": "q_auto_7053",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Page Fault'?",
    "options": {
      "A": "Uma interrupção gerada quando o programa tenta acessar uma página de memória que não está na RAM, mas sim no disco.",
      "B": "A perda de dados na RAM.",
      "C": "Uma falha no HD.",
      "D": "Um travamento do SO.",
      "E": "Um erro no código HTML da página."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o aviso de que o sistema precisa buscar o dado na Memória Virtual (disco).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7054",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Page Fault'?",
    "options": {
      "A": "Um travamento do SO.",
      "B": "Uma falha no HD.",
      "C": "Uma interrupção gerada quando o programa tenta acessar uma página de memória que não está na RAM, mas sim no disco.",
      "D": "A perda de dados na RAM.",
      "E": "Um erro no código HTML da página."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o aviso de que o sistema precisa buscar o dado na Memória Virtual (disco).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7055",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual o propósito da técnica de 'Spooling' (ex: Spool de Impressão)?",
    "options": {
      "A": "Economizar tinta.",
      "B": "Acelerar a CPU.",
      "C": "Apagar arquivos inúteis.",
      "D": "Gerar senhas seguras.",
      "E": "Colocar dados em uma área de armazenamento temporário para que dispositivos lentos (como impressoras) possam processá-los no seu próprio ritmo, sem bloquear a CPU."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Spooling = Simultaneous Peripheral Operations On-line.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7056",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Em um SO, o que faz o 'Dispatcher'?",
    "options": {
      "A": "Mata vírus.",
      "B": "Formata discos.",
      "C": "É o módulo que dá efetivamente o controle da CPU ao processo selecionado pelo escalonador (realiza a troca de contexto).",
      "D": "Lê o teclado.",
      "E": "Abre janelas."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Escalonador ESCOLHE quem vai rodar; o Dispatcher COLOCA ele pra rodar.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7057",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é um 'Page Fault'? (Variante 3)",
    "options": {
      "A": "Uma falha no HD.",
      "B": "Um travamento do SO.",
      "C": "Uma interrupção gerada quando o programa tenta acessar uma página de memória que não está na RAM, mas sim no disco.",
      "D": "Um erro no código HTML da página.",
      "E": "A perda de dados na RAM."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o aviso de que o sistema precisa buscar o dado na Memória Virtual (disco).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7058",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V1",
    "statement": "Qual o propósito da técnica de 'Spooling' (ex: Spool de Impressão)? (Variante 4)",
    "options": {
      "A": "Gerar senhas seguras.",
      "B": "Colocar dados em uma área de armazenamento temporário para que dispositivos lentos (como impressoras) possam processá-los no seu próprio ritmo, sem bloquear a CPU.",
      "C": "Apagar arquivos inúteis.",
      "D": "Acelerar a CPU.",
      "E": "Economizar tinta."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Spooling = Simultaneous Peripheral Operations On-line.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7059",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em um SO, o que faz o 'Dispatcher'? (Variante 5)",
    "options": {
      "A": "Lê o teclado.",
      "B": "Abre janelas.",
      "C": "É o módulo que dá efetivamente o controle da CPU ao processo selecionado pelo escalonador (realiza a troca de contexto).",
      "D": "Formata discos.",
      "E": "Mata vírus."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Escalonador ESCOLHE quem vai rodar; o Dispatcher COLOCA ele pra rodar.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7060",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é um 'Page Fault'? (Variante 6)",
    "options": {
      "A": "A perda de dados na RAM.",
      "B": "Uma falha no HD.",
      "C": "Um erro no código HTML da página.",
      "D": "Uma interrupção gerada quando o programa tenta acessar uma página de memória que não está na RAM, mas sim no disco.",
      "E": "Um travamento do SO."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o aviso de que o sistema precisa buscar o dado na Memória Virtual (disco).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7061",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V2",
    "statement": "Qual o propósito da técnica de 'Spooling' (ex: Spool de Impressão)? (Variante 7)",
    "options": {
      "A": "Acelerar a CPU.",
      "B": "Apagar arquivos inúteis.",
      "C": "Economizar tinta.",
      "D": "Colocar dados em uma área de armazenamento temporário para que dispositivos lentos (como impressoras) possam processá-los no seu próprio ritmo, sem bloquear a CPU.",
      "E": "Gerar senhas seguras."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Spooling = Simultaneous Peripheral Operations On-line.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7062",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em um SO, o que faz o 'Dispatcher'? (Variante 8)",
    "options": {
      "A": "Lê o teclado.",
      "B": "Formata discos.",
      "C": "Mata vírus.",
      "D": "É o módulo que dá efetivamente o controle da CPU ao processo selecionado pelo escalonador (realiza a troca de contexto).",
      "E": "Abre janelas."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Escalonador ESCOLHE quem vai rodar; o Dispatcher COLOCA ele pra rodar.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7063",
    "discipline": "Sistemas Operacionais",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é um 'Page Fault'? (Variante 9)",
    "options": {
      "A": "A perda de dados na RAM.",
      "B": "Um travamento do SO.",
      "C": "Um erro no código HTML da página.",
      "D": "Uma interrupção gerada quando o programa tenta acessar uma página de memória que não está na RAM, mas sim no disco.",
      "E": "Uma falha no HD."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o aviso de que o sistema precisa buscar o dado na Memória Virtual (disco).",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7066",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)?",
    "options": {
      "A": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "B": "Um protocolo de rede.",
      "C": "Uma biblioteca CSS.",
      "D": "Uma linguagem de programação.",
      "E": "Um banco de dados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7067",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'?",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Uma tela de erro.",
      "C": "Um balanceador de carga.",
      "D": "Um firewall.",
      "E": "Um cabo de energia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7068",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 2)",
    "options": {
      "A": "Um banco de dados.",
      "B": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "C": "Uma biblioteca CSS.",
      "D": "Um protocolo de rede.",
      "E": "Uma linguagem de programação."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7069",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 3)",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Uma tela de erro.",
      "C": "Um balanceador de carga.",
      "D": "Um firewall.",
      "E": "Um cabo de energia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7070",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 4)",
    "options": {
      "A": "Um protocolo de rede.",
      "B": "Um banco de dados.",
      "C": "Uma biblioteca CSS.",
      "D": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "E": "Uma linguagem de programação."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7071",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 5)",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Um balanceador de carga.",
      "C": "Um firewall.",
      "D": "Uma tela de erro.",
      "E": "Um cabo de energia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7072",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 6)",
    "options": {
      "A": "Um protocolo de rede.",
      "B": "Um banco de dados.",
      "C": "Uma linguagem de programação.",
      "D": "Uma biblioteca CSS.",
      "E": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7073",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 7)",
    "options": {
      "A": "Uma tela de erro.",
      "B": "Um balanceador de carga.",
      "C": "Um firewall.",
      "D": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "E": "Um cabo de energia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7074",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 8)",
    "options": {
      "A": "Uma linguagem de programação.",
      "B": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "C": "Uma biblioteca CSS.",
      "D": "Um protocolo de rede.",
      "E": "Um banco de dados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7075",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)?",
    "options": {
      "A": "Um banco de dados.",
      "B": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "C": "Uma linguagem de programação.",
      "D": "Um protocolo de rede.",
      "E": "Uma biblioteca CSS."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7076",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'?",
    "options": {
      "A": "Um firewall.",
      "B": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "C": "Um balanceador de carga.",
      "D": "Uma tela de erro.",
      "E": "Um cabo de energia."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7077",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 2)",
    "options": {
      "A": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "B": "Um protocolo de rede.",
      "C": "Uma linguagem de programação.",
      "D": "Uma biblioteca CSS.",
      "E": "Um banco de dados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7078",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 3)",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Um firewall.",
      "C": "Uma tela de erro.",
      "D": "Um balanceador de carga.",
      "E": "Um cabo de energia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7079",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V1",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 4)",
    "options": {
      "A": "Um protocolo de rede.",
      "B": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "C": "Uma biblioteca CSS.",
      "D": "Um banco de dados.",
      "E": "Uma linguagem de programação."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7080",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 5)",
    "options": {
      "A": "Um balanceador de carga.",
      "B": "Um firewall.",
      "C": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "D": "Uma tela de erro.",
      "E": "Um cabo de energia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7081",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 6)",
    "options": {
      "A": "Um protocolo de rede.",
      "B": "Uma linguagem de programação.",
      "C": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "D": "Uma biblioteca CSS.",
      "E": "Um banco de dados."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7082",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 7)",
    "options": {
      "A": "Um cabo de energia.",
      "B": "Uma tela de erro.",
      "C": "Um balanceador de carga.",
      "D": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "E": "Um firewall."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7083",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 8)",
    "options": {
      "A": "Um banco de dados.",
      "B": "Uma biblioteca CSS.",
      "C": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "D": "Uma linguagem de programação.",
      "E": "Um protocolo de rede."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7084",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V2",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 9)",
    "options": {
      "A": "Um balanceador de carga.",
      "B": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "C": "Um cabo de energia.",
      "D": "Uma tela de erro.",
      "E": "Um firewall."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7085",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 10)",
    "options": {
      "A": "Um protocolo de rede.",
      "B": "Uma biblioteca CSS.",
      "C": "Uma linguagem de programação.",
      "D": "Um banco de dados.",
      "E": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7086",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V3",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 11)",
    "options": {
      "A": "Um balanceador de carga.",
      "B": "Um cabo de energia.",
      "C": "Uma tela de erro.",
      "D": "Um firewall.",
      "E": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7087",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 12)",
    "options": {
      "A": "Uma linguagem de programação.",
      "B": "Um protocolo de rede.",
      "C": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "D": "Uma biblioteca CSS.",
      "E": "Um banco de dados."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7088",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V3",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 13)",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Uma tela de erro.",
      "C": "Um cabo de energia.",
      "D": "Um firewall.",
      "E": "Um balanceador de carga."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7089",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V3",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 14)",
    "options": {
      "A": "Uma biblioteca CSS.",
      "B": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "C": "Um protocolo de rede.",
      "D": "Um banco de dados.",
      "E": "Uma linguagem de programação."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7090",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V4",
    "statement": "Em arquitetura de microsserviços, o que é o 'Circuit Breaker'? (Variante 15)",
    "options": {
      "A": "Um padrão que impede que requisições contínuas sejam enviadas a um serviço que já se sabe estar falhando, evitando a sobrecarga do sistema.",
      "B": "Um cabo de energia.",
      "C": "Uma tela de erro.",
      "D": "Um balanceador de carga.",
      "E": "Um firewall."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Funciona como um disjuntor elétrico: se a energia tá falhando, ele 'desarma' pra não queimar a casa toda.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_auto_7091",
    "discipline": "Arquitetura de Sistemas",
    "topic": "Conceitos e Práticas V4",
    "statement": "O que é o padrão 'MVC' (Model-View-Controller)? (Variante 16)",
    "options": {
      "A": "Uma linguagem de programação.",
      "B": "Uma biblioteca CSS.",
      "C": "Um protocolo de rede.",
      "D": "Um padrão de arquitetura que separa os dados (Model), a interface (View) e a lógica de controle (Controller).",
      "E": "Um banco de dados."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "MVC separa responsabilidades, facilitando a manutenção.",
      "puloDoGato": "Conceito essencial da disciplina.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Leia o enunciado com atenção aos detalhes e termos técnicos."
    }
  },
  {
    "id": "q_final_fix_7147",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'?",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Uma função de hash.",
      "C": "Um banco de dados em memória.",
      "D": "Um padrão de design MVC.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7148",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O?",
    "options": {
      "A": "É um loop infinito.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "O algoritmo demora exatamente 1 segundo.",
      "D": "O algoritmo não funciona.",
      "E": "Ocupa 1 byte de memória."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7149",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 2)",
    "options": {
      "A": "Um banco de dados em memória.",
      "B": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "C": "Uma função de hash.",
      "D": "Um padrão de design MVC.",
      "E": "Um algoritmo lento para pequenas listas."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7150",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 3)",
    "options": {
      "A": "Ocupa 1 byte de memória.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "O algoritmo não funciona.",
      "D": "É um loop infinito.",
      "E": "O algoritmo demora exatamente 1 segundo."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7151",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 4)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Uma função de hash.",
      "C": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "D": "Um banco de dados em memória.",
      "E": "Um algoritmo lento para pequenas listas."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7152",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 5)",
    "options": {
      "A": "O algoritmo não funciona.",
      "B": "O algoritmo demora exatamente 1 segundo.",
      "C": "É um loop infinito.",
      "D": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "E": "Ocupa 1 byte de memória."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7153",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 6)",
    "options": {
      "A": "Uma função de hash.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Um banco de dados em memória.",
      "D": "Um padrão de design MVC.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7154",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 7)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "É um loop infinito.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "O algoritmo não funciona.",
      "E": "Ocupa 1 byte de memória."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7155",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 8)",
    "options": {
      "A": "Uma função de hash.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Um banco de dados em memória.",
      "D": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "E": "Um padrão de design MVC."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7156",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 9)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "Ocupa 1 byte de memória.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "É um loop infinito.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7157",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 10)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "C": "Uma função de hash.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um banco de dados em memória."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7158",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 11)",
    "options": {
      "A": "É um loop infinito.",
      "B": "Ocupa 1 byte de memória.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7159",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 12)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Um banco de dados em memória.",
      "D": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "E": "Uma função de hash."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7160",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 13)",
    "options": {
      "A": "O algoritmo não funciona.",
      "B": "É um loop infinito.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "Ocupa 1 byte de memória.",
      "E": "O algoritmo demora exatamente 1 segundo."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7161",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 14)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Um banco de dados em memória.",
      "C": "Um algoritmo lento para pequenas listas.",
      "D": "Uma função de hash.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7162",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 15)",
    "options": {
      "A": "É um loop infinito.",
      "B": "Ocupa 1 byte de memória.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7163",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 16)",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Um padrão de design MVC.",
      "C": "Um banco de dados em memória.",
      "D": "Uma função de hash.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7164",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 17)",
    "options": {
      "A": "Ocupa 1 byte de memória.",
      "B": "O algoritmo não funciona.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "É um loop infinito."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7165",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 18)",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Uma função de hash.",
      "D": "Um padrão de design MVC.",
      "E": "Um banco de dados em memória."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7166",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'?",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Uma função de hash.",
      "C": "Um algoritmo lento para pequenas listas.",
      "D": "Um banco de dados em memória.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7167",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O?",
    "options": {
      "A": "O algoritmo não funciona.",
      "B": "É um loop infinito.",
      "C": "Ocupa 1 byte de memória.",
      "D": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "E": "O algoritmo demora exatamente 1 segundo."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7168",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 2)",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Um padrão de design MVC.",
      "C": "Um banco de dados em memória.",
      "D": "Uma função de hash.",
      "E": "Um algoritmo lento para pequenas listas."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7169",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 3)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "O algoritmo não funciona.",
      "D": "Ocupa 1 byte de memória.",
      "E": "É um loop infinito."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7170",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 4)",
    "options": {
      "A": "Um banco de dados em memória.",
      "B": "Um padrão de design MVC.",
      "C": "Uma função de hash.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7171",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 5)",
    "options": {
      "A": "Ocupa 1 byte de memória.",
      "B": "O algoritmo demora exatamente 1 segundo.",
      "C": "O algoritmo não funciona.",
      "D": "É um loop infinito.",
      "E": "O tempo de execução é constante e não depende do tamanho dos dados de entrada."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7172",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 6)",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "C": "Um banco de dados em memória.",
      "D": "Uma função de hash.",
      "E": "Um padrão de design MVC."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7173",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 7)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "O algoritmo não funciona.",
      "C": "É um loop infinito.",
      "D": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "E": "Ocupa 1 byte de memória."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7174",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 8)",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Um banco de dados em memória.",
      "C": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "D": "Um padrão de design MVC.",
      "E": "Uma função de hash."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7175",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 9)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "Ocupa 1 byte de memória.",
      "D": "É um loop infinito.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7176",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 10)",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Um banco de dados em memória.",
      "C": "Uma função de hash.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um padrão de design MVC."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7177",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 11)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "Ocupa 1 byte de memória.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "É um loop infinito.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7178",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 12)",
    "options": {
      "A": "Uma função de hash.",
      "B": "Um padrão de design MVC.",
      "C": "Um banco de dados em memória.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7179",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 13)",
    "options": {
      "A": "Ocupa 1 byte de memória.",
      "B": "É um loop infinito.",
      "C": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7180",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 14)",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "C": "Um padrão de design MVC.",
      "D": "Uma função de hash.",
      "E": "Um banco de dados em memória."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7181",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 15)",
    "options": {
      "A": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "B": "É um loop infinito.",
      "C": "O algoritmo não funciona.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "Ocupa 1 byte de memória."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7182",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 16)",
    "options": {
      "A": "Um banco de dados em memória.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Um padrão de design MVC.",
      "D": "Uma função de hash.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7183",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V6",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 17)",
    "options": {
      "A": "Ocupa 1 byte de memória.",
      "B": "O algoritmo demora exatamente 1 segundo.",
      "C": "É um loop infinito.",
      "D": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7184",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 18)",
    "options": {
      "A": "Um banco de dados em memória.",
      "B": "Uma função de hash.",
      "C": "Um padrão de design MVC.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7185",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'?",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Uma função de hash.",
      "D": "Um padrão de design MVC.",
      "E": "Um banco de dados em memória."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7186",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O?",
    "options": {
      "A": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "B": "Ocupa 1 byte de memória.",
      "C": "O algoritmo não funciona.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "É um loop infinito."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7187",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 2)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "C": "Um algoritmo lento para pequenas listas.",
      "D": "Um banco de dados em memória.",
      "E": "Uma função de hash."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7188",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 3)",
    "options": {
      "A": "É um loop infinito.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "Ocupa 1 byte de memória.",
      "D": "O algoritmo demora exatamente 1 segundo.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7189",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 4)",
    "options": {
      "A": "Um algoritmo lento para pequenas listas.",
      "B": "Um banco de dados em memória.",
      "C": "Um padrão de design MVC.",
      "D": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "E": "Uma função de hash."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7190",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V2",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 5)",
    "options": {
      "A": "É um loop infinito.",
      "B": "O algoritmo demora exatamente 1 segundo.",
      "C": "O algoritmo não funciona.",
      "D": "Ocupa 1 byte de memória.",
      "E": "O tempo de execução é constante e não depende do tamanho dos dados de entrada."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7191",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 6)",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Uma função de hash.",
      "C": "Um banco de dados em memória.",
      "D": "Um algoritmo lento para pequenas listas.",
      "E": "Um padrão de design MVC."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7192",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 7)",
    "options": {
      "A": "O algoritmo demora exatamente 1 segundo.",
      "B": "É um loop infinito.",
      "C": "Ocupa 1 byte de memória.",
      "D": "O algoritmo não funciona.",
      "E": "O tempo de execução é constante e não depende do tamanho dos dados de entrada."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7193",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 8)",
    "options": {
      "A": "Um padrão de design MVC.",
      "B": "Um banco de dados em memória.",
      "C": "Uma função de hash.",
      "D": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "E": "Um algoritmo lento para pequenas listas."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7194",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 9)",
    "options": {
      "A": "O algoritmo não funciona.",
      "B": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "C": "O algoritmo demora exatamente 1 segundo.",
      "D": "Ocupa 1 byte de memória.",
      "E": "É um loop infinito."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7195",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um algoritmo de ordenação 'QuickSort'? (Caso prático 10)",
    "options": {
      "A": "Um algoritmo eficiente de divisão e conquista que particiona o array baseado em um pivô.",
      "B": "Um algoritmo lento para pequenas listas.",
      "C": "Um padrão de design MVC.",
      "D": "Uma função de hash.",
      "E": "Um banco de dados em memória."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O QuickSort é um dos algoritmos de ordenação mais rápidos para grandes conjuntos de dados, possuindo complexidade média de O(n log n).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7196",
    "discipline": "Ciência da Computação",
    "topic": "Revisão e Práticas V4",
    "statement": "O que define a complexidade de tempo 'O(1)' na notação Big O? (Caso prático 11)",
    "options": {
      "A": "É um loop infinito.",
      "B": "O algoritmo demora exatamente 1 segundo.",
      "C": "Ocupa 1 byte de memória.",
      "D": "O tempo de execução é constante e não depende do tamanho dos dados de entrada.",
      "E": "O algoritmo não funciona."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Busca em tabelas Hash perfeitas ou acesso direto a um índice de array são exemplos clássicos de O(1).",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7564",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)?",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7565",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 1)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7566",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 2)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7567",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 3)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Programação exclusiva em Python.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7568",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 4)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7569",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 5)",
    "options": {
      "A": "Uso de monitores de 6 lados.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7570",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 6)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Programação exclusiva em Python.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7571",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 7)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Programação exclusiva em Python.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7572",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 8)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Não utilização de APIs.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7573",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 9)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Não utilização de APIs.",
      "D": "Programação exclusiva em Python.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7574",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 10)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Programação exclusiva em Python.",
      "C": "Não utilização de APIs.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7575",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 11)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Não utilização de APIs.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7576",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 12)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7577",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 13)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Programação exclusiva em Python.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7578",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)?",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7579",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 1)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7580",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 2)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Programação exclusiva em Python.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7581",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 3)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Programação exclusiva em Python.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7582",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 4)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7583",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 5)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "Não utilização de APIs.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Uso de monitores de 6 lados.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7584",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 6)",
    "options": {
      "A": "Uso de monitores de 6 lados.",
      "B": "Não utilização de APIs.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7585",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 7)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7586",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 8)",
    "options": {
      "A": "Uso de monitores de 6 lados.",
      "B": "Programação exclusiva em Python.",
      "C": "Não utilização de APIs.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7587",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 9)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Uso de monitores de 6 lados.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Não utilização de APIs.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7588",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 10)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7589",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 11)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "Não utilização de APIs.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Uso de monitores de 6 lados.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7590",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 12)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Não utilização de APIs.",
      "D": "Programação exclusiva em Python.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7591",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 13)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Programação exclusiva em Python.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7592",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)?",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Não utilização de APIs.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7593",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 1)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7594",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 2)",
    "options": {
      "A": "Uso de monitores de 6 lados.",
      "B": "Não utilização de APIs.",
      "C": "Programação exclusiva em Python.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7595",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 3)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7596",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 4)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Programação exclusiva em Python.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Não utilização de APIs.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7597",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 5)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Programação exclusiva em Python.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7598",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 6)",
    "options": {
      "A": "Uso de monitores de 6 lados.",
      "B": "Não utilização de APIs.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Programação exclusiva em Python.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7599",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 7)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Não utilização de APIs.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7600",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 8)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Programação exclusiva em Python.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7601",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 9)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Não utilização de APIs.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Programação exclusiva em Python.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7602",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 10)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "Banco de dados em formato de colmeia.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7603",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 11)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Programação exclusiva em Python.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Não utilização de APIs."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7604",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 12)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Não utilização de APIs.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7605",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 13)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Programação exclusiva em Python.",
      "D": "Uso de monitores de 6 lados.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7606",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 14)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Não utilização de APIs.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7607",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 15)",
    "options": {
      "A": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "B": "Não utilização de APIs.",
      "C": "Banco de dados em formato de colmeia.",
      "D": "Programação exclusiva em Python.",
      "E": "Uso de monitores de 6 lados."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7608",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 16)",
    "options": {
      "A": "Não utilização de APIs.",
      "B": "Uso de monitores de 6 lados.",
      "C": "Programação exclusiva em Python.",
      "D": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "E": "Banco de dados em formato de colmeia."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7609",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 17)",
    "options": {
      "A": "Programação exclusiva em Python.",
      "B": "Banco de dados em formato de colmeia.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Não utilização de APIs.",
      "E": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7610",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 18)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "Não utilização de APIs.",
      "C": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "D": "Uso de monitores de 6 lados.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7611",
    "discipline": "Arquitetura de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza uma Arquitetura Hexagonal (Ports and Adapters)? (Caso prático 19)",
    "options": {
      "A": "Banco de dados em formato de colmeia.",
      "B": "O isolamento do núcleo da aplicação (regras de negócio) de preocupações externas (UI, bancos de dados) através de portas e adaptadores.",
      "C": "Uso de monitores de 6 lados.",
      "D": "Não utilização de APIs.",
      "E": "Programação exclusiva em Python."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Nessa arquitetura, a regra de negócio não sabe se os dados vêm de uma página Web ou de um terminal de comandos. Tudo passa por 'adaptadores'.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  }
];
