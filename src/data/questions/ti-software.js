// Banco de questões: ti-software (700 questões)
export const questions_ti_software = [
  {
    "id": "q_ds_073",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Modelos de Nuvem (PaaS)",
    "difficulty": "Médio",
    "statement": "Um Cientista de Dados precisa treinar um modelo usando serviços como o Amazon SageMaker ou Google Vertex AI. Nesses ambientes, a infraestrutura subjacente (hardware, rede) e o sistema operacional já são gerenciados pelo provedor, permitindo que o foco seja apenas no código de ML. Qual é o modelo de serviço em nuvem dessa plataforma?",
    "options": {
      "A": "SaaS (Software as a Service)",
      "B": "PaaS (Platform as a Service)",
      "C": "IaaS (Infrastructure as a Service)",
      "D": "DaaS (Desktop as a Service)",
      "E": "FaaS (Function as a Service)"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "IaaS: Aluga o PC (EC2, VM). Você instala o Windows/Linux. PaaS: Aluga o ambiente (SageMaker, Heroku). Eles cuidam do SO, você foca no código (Data Science). SaaS: Aluga a tela (Gmail, Netflix). Você não programa nada, só usa.",
      "puloDoGato": "Ambientes de ML gerenciados como SageMaker são os exemplos mais clássicos de PaaS modernos focados em Inteligência Artificial.",
      "cascasDeBanana": {
        "C": "Incorreta. Em IaaS, você teria que instalar os drivers de GPU e o Ubuntu no braço.",
        "A": "Incorreta. Em SaaS, o software já está pronto (como o ChatGPT na web), você não treina códigos customizados na máquina.",
        "B": "Correta. Gerenciamento focado em código e dependências de software.",
        "E": "Incorreta. FaaS é computação Serverless para microtarefas (AWS Lambda).",
        "D": "Incorreta. DaaS é o streaming de desktops corporativos (VDI)."
      },
      "dicaDeOuro": "Mão na massa só no código? PaaS (Platform as a Service)."
    }
  },
  {
    "id": "q_ds_074",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Armazenamento (Object Storage)",
    "difficulty": "Fácil",
    "statement": "Qual categoria de serviço de armazenamento em nuvem é considerada o pilar fundamental para a arquitetura de Data Lakes, sendo capaz de armazenar petabytes de dados não estruturados (como imagens, áudios e arquivos JSON/Parquet)? Exemplos incluem o Amazon S3 e o Google Cloud Storage.",
    "options": {
      "A": "Caches em Memória (In-Memory Datastores)",
      "B": "Armazenamento de Arquivos (File Storage)",
      "C": "Armazenamento em Bloco (Block Storage)",
      "D": "Bancos de Dados Relacionais Gerenciados (RDS)",
      "E": "Armazenamento de Objetos (Object Storage)"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Object Storage (S3) joga os dados em um 'balde' infinito. Ele não tem pastas reais, apenas chaves (nomes longos). É barato, escala infinitamente e é perfeito para Big Data.",
      "puloDoGato": "Block Storage (EBS) é o 'HD' do servidor, rápido mas caro. File Storage (EFS) é como uma rede de compartilhamento de escritório (NAS). Object Storage (S3) é o oceano do Data Lake.",
      "cascasDeBanana": {
        "C": "Incorreta. Block Storage atua como discos rígidos conectados à máquina virtual (IaaS).",
        "B": "Incorreta. File Storage organiza hierarquicamente (pastas reais) e não é tão escalável ou barato quanto o de objetos.",
        "D": "Incorreta. RDS serve para esquemas estruturados e transacionais rígidos (SQL).",
        "E": "Correta. Fundamento absoluto de qualquer Data Lake moderno (AWS S3, Azure Blob, GCS).",
        "A": "Incorreta. Caches (Redis) são voláteis e pequenos."
      },
      "dicaDeOuro": "Data Lake Cloud = Object Storage (S3, Blob Storage)."
    }
  },
  {
    "id": "q_ds_081",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Serverless (AWS Lambda / Cloud Functions)",
    "difficulty": "Médio",
    "statement": "Qual é a principal característica da arquitetura 'Serverless' (como o AWS Lambda ou Google Cloud Functions) ao realizar o deploy de um modelo preditivo leve para inferência em produção?",
    "options": {
      "A": "A garantia de que o modelo será mantido carregado na memória RAM permanentemente, sem latência de 'cold start'.",
      "B": "A cobrança de um valor mensal fixo, independente de quantas predições a API realizar.",
      "C": "A obrigatoriedade de usar contêineres Docker pesados em vez de funções simples de código.",
      "D": "O desenvolvedor não precisa provisionar o sistema operacional, e o custo é cobrado estritamente pelas frações de segundo em que o código é executado.",
      "E": "A eliminação total de servidores físicos nos data centers da provedora de nuvem."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Serverless não significa que 'não tem servidor'. Significa que VOCÊ não cuida do servidor. O Google ou a Amazon sobem uma máquina escondida, rodam o seu código (ex: uma predição rápida) e matam a máquina em milissegundos. Se não usar, você paga 0.",
      "puloDoGato": "O maior problema do Serverless em Data Science é o 'Cold Start': se a sua função ficou sem ser chamada por muito tempo, a AWS demora alguns segundos para carregar as bibliotecas (como o Pandas/Scikit) de volta na memória, o que deixa a primeira requisição lenta.",
      "cascasDeBanana": {
        "E": "Incorreta. Servidores físicos ainda existem aos milhares, eles apenas são totalmente invisíveis e gerenciados pelo provedor.",
        "D": "Correta. Define o pilar de abstração de infraestrutura e o modelo financeiro de 'Pay-as-you-go' granular.",
        "A": "Incorreta. Funções Serverless sofrem do fenômeno 'Cold Start' exatamente por não ficarem permanentemente na RAM.",
        "C": "Incorreta. Serverless (FaaS) foca no código (ex: um arquivo Python puro), embora hoje suporte containers leves.",
        "B": "Incorreta. A cobrança é puramente variável e baseada no uso real (consumo)."
      },
      "dicaDeOuro": "Serverless = Zero gestão de SO + Pague por Milissegundo."
    }
  },
  {
    "id": "q_ds_084",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Estratégias de Implantação (Canary)",
    "difficulty": "Médio",
    "statement": "Ao lançar a nova versão de um sistema de recomendação (Modelo V2), a equipe de infraestrutura decide enviar apenas 5% do tráfego real de usuários para o modelo novo, mantendo 95% do tráfego sendo atendido pelo modelo antigo (Modelo V1). Após monitorar erros por algumas horas, eles aumentam a cota do V2 gradativamente para 100%. Qual é o nome dessa estratégia de implantação em produção?",
    "options": {
      "A": "A/B Testing",
      "B": "Blue-Green Deployment",
      "C": "Canary Deployment (Implantação Canário)",
      "D": "Shadow Deployment (Implantação Sombra)",
      "E": "Rolling Update (Atualização Rolante)"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O nome vem dos mineiros de carvão que levavam um pássaro canário para a mina. Se houvesse gás tóxico, o pássaro morria antes dos humanos. No software, você lança a novidade só para uma pequena 'cobaia' de usuários (5%). Se o sistema quebrar (gás tóxico), afeta pouca gente.",
      "puloDoGato": "Diferença clássica nas provas: Canary = Envia tráfego aos poucos (10%, 50%, 100%). Blue-Green = Chave geral instantânea (Você sobe o V2 em paralelo. Quando está pronto, vira o tráfego 100% de uma vez para ele).",
      "cascasDeBanana": {
        "B": "Incorreta. Blue-Green faz a troca de 100% do tráfego de uma vez só entre dois ambientes idênticos.",
        "D": "Incorreta. Shadow Deployment roda o modelo novo escondido sem retornar o resultado para o cliente (apenas para comparar logs com o modelo velho).",
        "A": "Incorreta. Teste A/B é uma ferramenta de negócio para medir conversão de marketing, não uma estratégia pura técnica de segurança de infraestrutura.",
        "C": "Correta. Caracteriza-se pelo redirecionamento percentual progressivo para validar estabilidade.",
        "E": "Incorreta. Rolling Update atualiza as máquinas uma por uma em um cluster, não controla logicamente o tráfego de aplicação via roteamento."
      },
      "dicaDeOuro": "Testar estabilidade com uma minoria (ex: 5%)? Canary."
    }
  },
  {
    "id": "q_ds_086",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Containers vs Máquinas Virtuais",
    "difficulty": "Médio",
    "statement": "Em termos de arquitetura e isolamento de infraestrutura, qual é a principal diferença técnica entre uma Máquina Virtual (VM) tradicional e um Container (como o Docker)?",
    "options": {
      "A": "O container garante mais segurança e isolamento por conta de ter um hypervisor próprio emulado via software.",
      "B": "A VM compartilha o sistema operacional base, enquanto o container exige seu próprio hardware físico dedicado.",
      "C": "Não há diferença técnica no isolamento, a mudança é apenas uma nomenclatura de mercado criada pela Docker Inc.",
      "D": "A VM requer um Sistema Operacional convidado (Guest OS) completo e pesado, enquanto o Container compartilha o núcleo (Kernel) do Sistema Operacional hospedeiro.",
      "E": "Containers suportam aplicações com interface gráfica Windows, enquanto VMs são limitadas a código em linha de comando Linux."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você tem um PC com Windows e roda 3 VMs com Ubuntu, você vai pagar na memória RAM o peso de carregar 3 Sistemas Operacionais completos do zero (Kernel, drivers de vídeo, áudio). Os containers são espertos: eles 'pegam emprestado' o núcleo (Kernel) do Linux que já está rodando. Por isso eles ligam em 1 segundo e pesam só Megabytes.",
      "puloDoGato": "Virtualização clássica foca em isolar Hardware (Hypervisor). Containerização foca em isolar Software. ",
      "cascasDeBanana": {
        "B": "Incorreta. O Container nunca exige hardware dedicado. E a VM não compartilha o SO hospedeiro.",
        "D": "Correta. É o diferencial fundamental: compartilhamento do Kernel do host (LXC/Docker).",
        "E": "Incorreta. Historicamente, os containers brilham no Linux em linha de comando (backend).",
        "A": "Incorreta. Containers não possuem hypervisor. Eles utilizam namespaces e cgroups do Linux.",
        "C": "Incorreta. A diferença arquitetural é massiva em termos de alocação de recursos."
      },
      "dicaDeOuro": "VM = SO completo. Container = SO compartilhado (Só o aplicativo embalado)."
    }
  },
  {
    "id": "q_engsw_002",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrão arquitetural Model-View-Controller (MVC)",
    "difficulty": "Médio",
    "statement": "No padrão arquitetural Model-View-Controller (MVC), a camada responsável por gerenciar a lógica de negócio, as regras de validação e a manipulação direta dos dados é a:",
    "options": {
      "A": "Repository.",
      "B": "Controller.",
      "C": "Model.",
      "D": "View.",
      "E": "Service Layer."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "No MVC, o 'Model' é o coração da aplicação. Ele não sabe nada sobre como os dados serão exibidos (View) ou como as requisições chegam (Controller). Ele apenas processa a regra de negócio e garante a integridade dos dados.",
      "puloDoGato": "Cuidado! Muitos confundem o Controller com a lógica de negócio. O Controller é apenas um 'maestro' ou 'roteador' que recebe a entrada e diz ao Model o que fazer.",
      "cascasDeBanana": {
        "A": "Incorreta. A View é apenas interface e apresentação.",
        "B": "Incorreta. O Controller apenas coordena o fluxo; não deve conter regras de negócio complexas (evite o 'Fat Controller').",
        "C": "Correta. É onde reside o estado e a lógica central.",
        "D": "Incorreta. Repository é um padrão de persistência, não faz parte do núcleo original do MVC.",
        "E": "Incorreta. Service Layer é um padrão adicional para orquestração, comum em Java/C#, mas não é uma das três camadas base do MVC."
      },
      "dicaDeOuro": "Model = Dados e Regras. View = Tela. Controller = Ponte."
    }
  },
  {
    "id": "q_engsw_003",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Microsserviço",
    "difficulty": "Avançado",
    "statement": "Uma característica fundamental de uma arquitetura baseada em microsserviços, que a diferencia de um sistema monolítico tradicional, é a:",
    "options": {
      "A": "Descentralização do gerenciamento de dados, onde cada serviço possui seu próprio banco de dados (Database per Service).",
      "B": "Utilização obrigatória de um único banco de dados centralizado para garantir a consistência ACID.",
      "C": "Dependência de comunicação síncrona via RMI para todas as interações entre módulos.",
      "D": "Necessidade de realizar o deploy de todos os serviços simultaneamente para garantir a compatibilidade.",
      "E": "Redução da latência de rede devido à comunicação interna entre objetos na mesma memória RAM."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Microsserviços visam o isolamento total. Se você compartilha o banco de dados, você criou um 'monolito distribuído'. O padrão 'Database per Service' garante que cada serviço seja independente e possa evoluir seu schema sem quebrar os outros.",
      "puloDoGato": "A Cesgranrio adora cobrar o conceito de 'Bancada Própria'. Se os serviços dependem de um único banco, eles não são microsserviços de verdade no sentido arquitetural moderno.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é característica de monolitos; microsserviços usam consistência eventual em muitos casos.",
        "A": "Correta. É o pilar da independência e escalabilidade.",
        "C": "Incorreta. RMI é tecnologia antiga; microsserviços preferem REST, gRPC ou mensageria assíncrona.",
        "D": "Incorreta. Microsserviços devem ter deploy independente.",
        "E": "Incorreta. Microsserviços AUMENTAM a latência (comunicação via rede) em comparação ao monolito (comunicação em memória)."
      },
      "dicaDeOuro": "Microsserviços = Deploy Independente + Banco Independente!"
    }
  },
  {
    "id": "q_engsw_005",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Elicitação e Gerenciamento de Requisitos, design thinking",
    "difficulty": "Médio",
    "statement": "No processo de Elicitação de Requisitos utilizando a abordagem de Design Thinking, a fase em que a equipe busca compreender profundamente os problemas, necessidades e o contexto dos usuários finais, geralmente através de entrevistas e observação, é chamada de:",
    "options": {
      "A": "Teste.",
      "B": "Empatia (ou Imersão).",
      "C": "Definição.",
      "D": "Prototipagem.",
      "E": "Ideação."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Design Thinking começa 'calçando os sapatos do usuário'. Antes de propor qualquer solução ou tecnologia, é preciso entender a dor de quem vai usar o sistema. Essa é a fase de Empatia.",
      "puloDoGato": "A Cesgranrio costuma trocar 'Empatia' por 'Imersão'. Fique atento, são sinônimos nesse contexto de Double Diamond / Design Thinking.",
      "cascasDeBanana": {
        "E": "Incorreta. Ideação é a geração de soluções, vem depois do entendimento.",
        "D": "Incorreta. Prototipagem é a criação de versões simplificadas da solução.",
        "B": "Correta. Foco no humano e no entendimento do problema.",
        "C": "Incorreta. Definição é quando você filtra os insights da empatia para focar em um problema específico.",
        "A": "Incorreta. Teste é a validação com o usuário."
      },
      "dicaDeOuro": "Design Thinking = Usuário no centro!"
    }
  },
  {
    "id": "q_engsw_006",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Minimum Viable Product (MVP)",
    "difficulty": "Médio",
    "statement": "O conceito de MVP (Produto Mínimo Viável) no desenvolvimento ágil de software tem como objetivo principal:",
    "options": {
      "A": "Desenvolver todas as funcionalidades previstas no escopo inicial antes do primeiro lançamento.",
      "B": "Validar hipóteses de negócio e aprender com o feedback real dos usuários usando o menor esforço de desenvolvimento possível.",
      "C": "Lançar um produto com o menor custo possível, ignorando a qualidade técnica.",
      "D": "Criar um protótipo descartável em papel que nunca será transformado em código real.",
      "E": "Garantir que o software não possua nenhum bug antes de chegar ao mercado."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "MVP não é um produto 'incompleto' ou 'mal feito', é um produto com o conjunto mínimo de funções que permite que ele seja testado no mercado. O foco é APRENDIZADO e VALIDAÇÃO.",
      "puloDoGato": "Lembre-se da pirâmide: o MVP deve ser funcional, confiável, usável e ter design, mesmo que em uma escala pequena. Não é apenas a base funcional.",
      "cascasDeBanana": {
        "C": "Incorreta. MVP não é desculpa para falta de qualidade.",
        "A": "Incorreta. Isso é o modelo Cascata (Big Bang delivery).",
        "B": "Correta. Foco no ciclo de feedback 'Construir-Medir-Aprender'.",
        "D": "Incorreta. Um protótipo pode ser um MVP, mas o MVP geralmente é algo que gera valor real.",
        "E": "Incorreta. Impossível em software, e o foco do MVP é rapidez de aprendizado, não perfeccionismo extremo."
      },
      "dicaDeOuro": "MVP = Menor esforço para o maior aprendizado!"
    }
  },
  {
    "id": "q_engsw_007",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Python (versão 3.7 ou superior)",
    "difficulty": "Difícil",
    "statement": "Em Python, o método especial utilizado para inicializar os atributos de uma instância de classe no momento em que ela é criada é o:",
    "options": {
      "A": "__call__",
      "B": "__init__",
      "C": "__new__",
      "D": "__main__",
      "E": "__start__"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O `__init__` é o que chamamos de 'construtor' em outras linguagens (embora tecnicamente o Python use o `__new__` para criar a instância e o `__init__` para inicializá-la). Ele recebe o parâmetro `self` como referência ao objeto que está sendo criado.",
      "puloDoGato": "Cuidado! O `__new__` existe e é chamado antes do `__init__`, mas ele é usado raramente (ex: em Singletons ou classes imutáveis). Para 99% das questões de POO, a resposta de inicialização é `__init__`.",
      "cascasDeBanana": {
        "C": "Incorreta. `__new__` cria o objeto, mas não costuma ser onde você seta os valores iniciais (atributos).",
        "A": "Incorreta. `__call__` permite que o objeto seja chamado como uma função.",
        "B": "Correta. Método de inicialização padrão.",
        "E": "Incorreta. Não existe este método especial em Python.",
        "D": "Incorreta. `__main__` é o nome do escopo principal de execução do script."
      },
      "dicaDeOuro": "Viu 'double underscore' (dunder) e inicialização? É __init__!"
    }
  },
  {
    "id": "q_engsw_008",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "DevOps e CI/CD",
    "difficulty": "Médio",
    "statement": "No fluxo de Integração Contínua (CI), a prática de 'Pipeline as Code' permite que:",
    "options": {
      "A": "Os desenvolvedores não precisem mais realizar commits manuais no repositório.",
      "B": "O código seja compilado apenas uma vez por mês para economizar recursos de nuvem.",
      "C": "O código da aplicação seja escrito automaticamente por ferramentas de IA.",
      "D": "As etapas de build, teste e deploy sejam definidas e versionadas em um arquivo de configuração junto com o código-fonte.",
      "E": "A infraestrutura do servidor seja configurada manualmente via interface gráfica (GUI)."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Antigamente, configurar um Jenkins ou Azure DevOps era feito clicando em botões. Hoje, usamos arquivos como `.yaml` ou `Jenkinsfile`. Isso garante que o pipeline seja versionado, auditável e replicável. É o DevOps raiz.",
      "puloDoGato": "Versionamento é a chave. Se o arquivo de build está no Git, ele é 'Code'.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria IA generativa de código, não tem a ver com pipeline especificamente.",
        "D": "Correta. Uso de arquivos de configuração (YAML/JSON) para automação.",
        "A": "Incorreta. Commits continuam sendo a base de tudo.",
        "E": "Incorreta. Isso é o oposto (configuração manual/ad-hoc).",
        "B": "Incorreta. CI foca em integrações constantes (várias vezes ao dia)."
      },
      "dicaDeOuro": "Pipeline as Code = Automação Versionada no Git!"
    }
  },
  {
    "id": "q_engsw_009",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões de projeto (design patterns)",
    "difficulty": "Difícil",
    "statement": "O padrão de projeto criacional que garante que uma classe tenha apenas uma única instância em toda a aplicação e fornece um ponto de acesso global a essa instância é o:",
    "options": {
      "A": "Abstract Factory.",
      "B": "Singleton.",
      "C": "Prototype.",
      "D": "Factory Method.",
      "E": "Builder."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O Singleton é usado quando você precisa de um objeto centralizador (como um pool de conexões com banco de dados ou um gerenciador de logs). Ele esconde o construtor da classe e expõe um método estático que retorna sempre a mesma instância.",
      "puloDoGato": "Palavra mágica: 'Única Instância'. Se a questão falar que não pode haver dois objetos da mesma classe, marque Singleton sem medo.",
      "cascasDeBanana": {
        "D": "Incorreta. Factory foca em 'como' criar objetos sem especificar a classe exata.",
        "A": "Incorreta. Abstract Factory cria famílias de objetos relacionados.",
        "B": "Correta. Padrão GoF clássico para instância única.",
        "E": "Incorreta. Builder foca na construção de objetos complexos passo a passo.",
        "C": "Incorreta. Prototype cria novos objetos clonando instâncias existentes."
      },
      "dicaDeOuro": "Singleton = Único = Single!"
    }
  },
  {
    "id": "q_engsw_013",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Sistemas de N camadas",
    "difficulty": "Médio",
    "statement": "Em uma arquitetura de 3 camadas (3-tier), a camada responsável por converter os dados do banco em informações legíveis e gerenciar a interação com o usuário final é a camada de:",
    "options": {
      "A": "Negócio (Business Logic).",
      "B": "Persistência (Data Access).",
      "C": "Infraestrutura.",
      "D": "Serviços Aplicacionais.",
      "E": "Apresentação (Presentation Layer)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "A camada de Apresentação é a interface. Ela envia as entradas do usuário para a camada de Negócio e recebe as respostas para renderizar na tela (ou enviar via API JSON).",
      "puloDoGato": "Regra de ouro das camadas: Uma camada só deve falar com a camada imediatamente abaixo dela. A Apresentação nunca deve acessar o Banco de Dados diretamente.",
      "cascasDeBanana": {
        "B": "Incorreta. Persistência foca apenas em salvar/ler dados.",
        "A": "Incorreta. Negócio foca nas regras, cálculos e validações.",
        "E": "Correta. Foco total na interação e visualização.",
        "C": "Incorreta. Camada genérica que suporta as outras, não foca no usuário.",
        "D": "Incorreta. Camada de orquestração técnica, não necessariamente visual."
      },
      "dicaDeOuro": "Usuário toca na Apresentação!"
    }
  },
  {
    "id": "q_engsw_014",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Arquitetura orientada a eventos",
    "difficulty": "Avançado",
    "statement": "Na arquitetura orientada a eventos (Event-Driven Architecture), o padrão que utiliza um componente central para orquestrar o fluxo, decidindo qual serviço deve reagir a cada evento, é conhecido como:",
    "options": {
      "A": "Event Orchestration (Orquestração / Mediator).",
      "B": "Event Choreography (Coreografia).",
      "C": "Peer-to-peer Eventing.",
      "D": "Event Broker.",
      "E": "Publish-Subscribe simples."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Existem duas formas de coordenar eventos: Coreografia (cada serviço sabe o que fazer ao ouvir um evento) e Orquestração (um 'Mediator' central recebe o evento e delega tarefas). A orquestração oferece mais controle centralizado, mas pode se tornar um gargalo.",
      "puloDoGato": "Pense no Orquestrador como um maestro e na Coreografia como uma dança onde cada dançarino sabe seu passo sem ninguém gritando ordens.",
      "cascasDeBanana": {
        "B": "Incorreta. Coreografia é descentralizada.",
        "D": "Incorreta. Broker apenas entrega mensagens, não decide lógica de fluxo.",
        "A": "Correta. O mediador centraliza a inteligência do fluxo.",
        "E": "Incorreta. Pub-Sub é o mecanismo de entrega, não o padrão de coordenação.",
        "C": "Incorreta. Termo não usual para descrever padrões de EDA."
      },
      "dicaDeOuro": "Centralizado = Orquestração. Descentralizado = Coreografia."
    }
  },
  {
    "id": "q_engsw_015",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Histórias do usuário",
    "difficulty": "Médio",
    "statement": "O acrônimo INVEST é utilizado para avaliar a qualidade de uma História de Usuário (User Story). O que a letra 'S' representa nesse contexto?",
    "options": {
      "A": "Secured (Segura).",
      "B": "Structured (Estruturada).",
      "C": "Small (Pequena).",
      "D": "Simple (Simples).",
      "E": "Scalable (Escalável)."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "INVEST: I (Independent), N (Negotiable), V (Valuable), E (Estimable), S (Small), T (Testable). Uma história deve ser pequena o suficiente para caber em uma iteração (Sprint).",
      "puloDoGato": "Se uma história é grande demais (Epic), ela não é estimável com precisão e dificulta o fluxo de entrega. Por isso, 'Small' é crucial.",
      "cascasDeBanana": {
        "A": "Incorreta. Embora devam ser simples, o termo oficial é Small.",
        "B": "Incorreta. Escalabilidade é atributo de arquitetura, não da escrita da história.",
        "C": "Correta. Facilita a estimativa e o desenvolvimento célere.",
        "D": "Incorreta. Segurança não faz parte do acrônimo INVEST.",
        "E": "Incorreta. Todas as histórias são estruturadas, mas o foco do S é o tamanho."
      },
      "dicaDeOuro": "INVEST: Independente, Negociável, Valiosa, Estimável, PEQUENA e Testável!"
    }
  },
  {
    "id": "q_engsw_016",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Critérios de Aceitação",
    "difficulty": "Médio",
    "statement": "Qual é a principal função dos 'Critérios de Aceitação' em uma História de Usuário?",
    "options": {
      "A": "Estimar o tempo que o desenvolvedor levará para concluir a tarefa.",
      "B": "Definir a stack tecnológica que será utilizada no desenvolvimento.",
      "C": "Listar os nomes dos usuários que testarão a funcionalidade em homologação.",
      "D": "Determinar as condições específicas que devem ser atendidas para que a história seja considerada 'concluída' (Done) pelo Product Owner.",
      "E": "Descrever o histórico de versões do código-fonte relacionado à funcionalidade."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Enquanto a História de Usuário descreve o 'quem, o quê e o porquê' de forma macro, os Critérios de Aceitação são o checklist detalhado. Eles removem a ambiguidade e alinham as expectativas entre o desenvolvedor e o negócio.",
      "puloDoGato": "Critério de Aceitação = Fronteira da funcionalidade. Se passou nos critérios, a história está tecnicamente pronta para ser aceita.",
      "cascasDeBanana": {
        "B": "Incorreta. Critérios focam no comportamento do negócio, não em detalhes técnicos de stack.",
        "A": "Incorreta. Estimativa é feita com Story Points, não nos critérios.",
        "D": "Correta. Alinha o 'acordo de conclusão' entre as partes.",
        "C": "Incorreta. Isso faz parte do plano de testes, não do requisito em si.",
        "E": "Incorreta. Isso é controle de versão (Git)."
      },
      "dicaDeOuro": "Critérios de Aceitação = Checklist do Sucesso!"
    }
  },
  {
    "id": "q_engsw_017",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Análise de personas (papéis, perfis etc.) de usuários de software",
    "difficulty": "Médio",
    "statement": "No design centrado no usuário, a técnica de 'Personas' consiste em criar personagens fictícios que representam:",
    "options": {
      "A": "Diferentes grupos de usuários reais, com seus objetivos, dores e comportamentos típicos.",
      "B": "Os diretores da empresa que tomam as decisões financeiras.",
      "C": "Os concorrentes da empresa no mercado.",
      "D": "Celebridades que poderiam promover o software após o lançamento.",
      "E": "Os desenvolvedores que trabalharão no projeto."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Personas dão rosto e nome aos usuários. Em vez de dizer 'o usuário quer X', dizemos 'O João, que é operador de sonda e tem pouco tempo para relatórios, quer X'. Isso gera empatia e clareza no desenvolvimento.",
      "puloDoGato": "Personas não são 'pessoas reais específicas', mas arquétipos baseados em dados de pesquisa com usuários reais.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria análise da equipe interna.",
        "C": "Incorreta. Isso seria análise de concorrência.",
        "A": "Correta. Representação arquetípica dos segmentos de usuários.",
        "B": "Incorreta. Stakeholders são importantes, mas personas focam em quem usa o sistema.",
        "D": "Incorreta. Personas de marketing são diferentes de personas de UX de produto."
      },
      "dicaDeOuro": "Persona = Nome e Rosto para as dores do usuário!"
    }
  },
  {
    "id": "q_engsw_020",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Conteinerização de Aplicação",
    "difficulty": "Médio",
    "statement": "No ecossistema Docker, qual é a principal diferença entre uma 'Imagem' e um 'Container'?",
    "options": {
      "A": "Imagem é o processo em execução, enquanto Container é o arquivo estático no disco.",
      "B": "Container é usado para Windows, enquanto Imagem é usada para Linux.",
      "C": "Não há diferença técnica; os termos são sinônimos perfeitos.",
      "D": "Imagem é um modelo estático e somente leitura, enquanto Container é uma instância em execução dessa imagem.",
      "E": "Imagem refere-se apenas ao código-fonte, enquanto Container refere-se ao hardware físico."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Pense na analogia: Imagem é a Receita de Bolo (estática, define os ingredientes). Container é o Bolo pronto (instância real, ocupando espaço e pronta para ser consumida).",
      "puloDoGato": "Uma imagem pode dar origem a milhares de containers idênticos. O container adiciona uma camada de escrita (read-write) sobre a imagem (read-only).",
      "cascasDeBanana": {
        "A": "Incorreta. Inverteu os conceitos.",
        "D": "Correta. Definição técnica fundamental do Docker.",
        "B": "Incorreta. Ambos existem para ambos os SOs.",
        "C": "Incorreta. Diferença clara entre definição e execução.",
        "E": "Incorreta. Imagem contém binários, bibliotecas e configs, não apenas código."
      },
      "dicaDeOuro": "Imagem = Classe. Container = Objeto!"
    }
  },
  {
    "id": "q_engsw_021",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Mapeamento objeto-relacional",
    "difficulty": "Médio",
    "statement": "O problema da 'impedância objeto-relacional' surge no uso de ferramentas ORM (como Hibernate ou Entity Framework) principalmente devido à:",
    "options": {
      "A": "Diferença fundamental entre o modelo orientado a objetos (classes, herança) e o modelo relacional (tabelas, chaves estrangeiras).",
      "B": "Limitação de tamanho dos arquivos JSON enviados via protocolo HTTP.",
      "C": "Incompatibilidade de hardware entre o servidor de aplicação e o servidor de banco de dados.",
      "D": "Falta de conexão de internet estável durante a sincronização dos dados.",
      "E": "Dificuldade de instalar drivers JDBC em sistemas operacionais baseados em Linux."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Objetos têm herança, polimorfismo e associações complexas. Tabelas têm apenas colunas e relacionamentos via chaves. Tentar 'encaixar' um no outro gera atrito (impedância). O ORM tenta suavizar esse atrito automaticamente.",
      "puloDoGato": "A Cesgranrio costuma cobrar exemplos de impedância, como a dificuldade de representar herança em tabelas (Single Table vs Joined Table).",
      "cascasDeBanana": {
        "C": "Incorreta. Problema de arquitetura lógica, não física.",
        "A": "Correta. Conflito entre paradigmas (Relacional vs OO).",
        "D": "Incorreta. Problema de conectividade, não de mapeamento.",
        "B": "Incorreta. JSON é transporte, ORM foca no mapeamento interno da aplicação.",
        "E": "Incorreta. Problema de configuração de ambiente, não conceitual."
      },
      "dicaDeOuro": "Impedância = Conflito de Paradigmas (Tabelas vs Objetos)!"
    }
  },
  {
    "id": "q_engsw_022",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões: SOAP, REST, XML, JSON, UDDI, WSDL, JSON, RMI, XML-HttpRequest",
    "difficulty": "Médio",
    "statement": "Uma das principais características do estilo arquitetural REST (Representational State Transfer) é ser 'Stateless'. Isso significa que:",
    "options": {
      "A": "Cada requisição do cliente para o servidor deve conter todas as informações necessárias para entender e processar a requisição, sem depender de contexto armazenado no servidor.",
      "B": "O servidor deve adivinhar a próxima ação do usuário com base no histórico de navegação.",
      "C": "O sistema não pode ter nenhum banco de dados persistente.",
      "D": "O servidor deve armazenar todos os dados da sessão do usuário em um banco de dados Redis.",
      "E": "As requisições só podem ser feitas se o usuário estiver logado fisicamente no servidor."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "No REST, o servidor não 'lembra' de você entre as requisições. Se você enviou o token na primeira vez, deve enviar na segunda também. Isso facilita o escalonamento, pois qualquer servidor do cluster pode atender a requisição.",
      "puloDoGato": "Stateless = Sem Estado. O servidor é 'desmemoriado'. Tudo o que ele precisa saber deve vir na própria requisição (headers, body, params).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria 'Stateful' delegando o estado para um cache externo.",
        "A": "Correta. Princípio básico de escalabilidade e simplicidade do REST.",
        "C": "Incorreta. Persistência de dados (banco) não tem relação com o estado da sessão de rede.",
        "E": "Incorreta. Conceito sem sentido técnico.",
        "B": "Incorreta. REST é explícito, não preditivo."
      },
      "dicaDeOuro": "REST Stateless = Cada requisição é única e completa!"
    }
  },
  {
    "id": "q_engsw_023",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões: SOAP, REST, XML, JSON, UDDI, WSDL, JSON, RMI, XML-HttpRequest",
    "difficulty": "Médio",
    "statement": "Qual é a principal vantagem do formato JSON (JavaScript Object Notation) em relação ao XML em arquiteturas modernas de APIs web?",
    "options": {
      "A": "XML é o único formato que suporta tipos de dados numéricos.",
      "B": "JSON é um padrão proprietário da Microsoft, garantindo maior suporte técnico.",
      "C": "JSON suporta comentários complexos dentro do arquivo, enquanto XML não permite.",
      "D": "JSON possui uma sintaxe mais leve e compacta, resultando em menor consumo de banda e processamento mais rápido nos navegadores.",
      "E": "JSON é mais verboso, o que facilita a leitura por seres humanos."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "JSON ganhou do XML porque é 'direto ao ponto'. Ele não precisa de tags de abertura e fechamento repetitivas (`<nome>João</nome>` vs \"nome\": \"João\"). Além disso, o JSON é nativamente compreendido pelo JavaScript.",
      "puloDoGato": "O XML ainda é forte em sistemas que exigem validação rigorosa (XSD) e assinaturas digitais complexas, mas para web e mobile, o JSON é o rei devido à performance.",
      "cascasDeBanana": {
        "C": "Incorreta. Ironicamente, o padrão JSON oficial NÃO suporta comentários.",
        "E": "Incorreta. XML é muito mais verboso que JSON.",
        "D": "Correta. Eficiência é o motivo da sua adoção em massa.",
        "B": "Incorreta. JSON é um padrão aberto e independente.",
        "A": "Incorreta. Ambos suportam números, mas o JSON lida com tipos básicos de forma mais natural."
      },
      "dicaDeOuro": "JSON = Leve, Compacto e Nativo da Web!"
    }
  },
  {
    "id": "q_engsw_024",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Streaming de Dados",
    "difficulty": "Difícil",
    "statement": "Em sistemas de Streaming de Dados (como Apache Kafka), a arquitetura 'Publish-Subscribe' permite que um produtor envie uma mensagem para um 'Tópico', onde:",
    "options": {
      "A": "A mensagem é enviada via e-mail criptografado para o administrador do sistema.",
      "B": "O produtor deve esperar a confirmação de recebimento de todos os computadores do mundo.",
      "C": "A mensagem só pode ser lida se o consumidor estiver rodando na mesma máquina física do produtor.",
      "D": "Múltiplos consumidores independentes podem se inscrever e receber a mesma mensagem simultaneamente.",
      "E": "Apenas um único consumidor poderá ler a mensagem e ela será deletada em seguida."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O Pub-Sub funciona como uma transmissão de rádio. O produtor (estação) transmite para o tópico (frequência). Quantos ouvintes (consumidores) estiverem sintonizados receberão a informação, sem que um interfira no outro.",
      "puloDoGato": "Diferença crucial: Numa fila comum (Point-to-Point), quem pega a mensagem 'consome' ela e os outros não veem. No Pub-Sub, a mensagem é distribuída para todos os interessados.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso descreve o modelo de Fila Simples (Queue).",
        "D": "Correta. Define o desacoplamento um-para-muitos.",
        "B": "Incorreta. Inviável tecnicamente e contra o princípio de performance do streaming.",
        "A": "Incorreta. Confusão com protocolos de comunicação humana.",
        "C": "Incorreta. O foco é a distribuição em rede."
      },
      "dicaDeOuro": "Pub-Sub = Transmissão para muitos (Broadcast/Fan-out)!"
    }
  },
  {
    "id": "q_engsw_025",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Linguagens de desenvolvimento de interfaces ricas (HTML 5, CSS 3)",
    "difficulty": "Médio",
    "statement": "No HTML5, o uso de tags semânticas como `<main>`, `<article>` e `<nav>` tem como principal benefício:",
    "options": {
      "A": "Melhorar a acessibilidade para leitores de tela e otimizar a indexação por motores de busca (SEO), dando sentido ao conteúdo.",
      "B": "Permitir a execução de scripts PHP diretamente no navegador sem servidor.",
      "C": "Aumentar a velocidade de carregamento das imagens no site.",
      "D": "Substituir completamente a necessidade de usar arquivos CSS para o design.",
      "E": "Garantir que o site funcione apenas no navegador Internet Explorer 6."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Tags semânticas dizem ao navegador 'o que é' cada parte do código. Antes, tudo era `<div>`. Agora, o Google sabe que o que está dentro de `<nav>` é o menu e o que está em `<article>` é o conteúdo principal. Isso ajuda cegos (leitores de tela) e robôs de busca.",
      "puloDoGato": "Semântica = Sentido. HTML5 não é só sobre 'ficar bonito', é sobre ser 'inteligível' para máquinas e tecnologias assistivas.",
      "cascasDeBanana": {
        "C": "Incorreta. Não afeta a performance de carregamento de assets binários.",
        "A": "Correta. Acessibilidade e SEO são os pilares da semântica.",
        "B": "Incorreta. PHP é linguagem de servidor (Backend).",
        "D": "Incorreta. CSS continua sendo necessário para estilização.",
        "E": "Incorreta. HTML5 foi o 'prego no caixão' do IE6."
      },
      "dicaDeOuro": "Semântica = Acessibilidade + SEO!"
    }
  },
  {
    "id": "q_engsw_026",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Linguagens de desenvolvimento de interfaces ricas (HTML 5, CSS 3)",
    "difficulty": "Médio",
    "statement": "Em CSS3, a propriedade utilizada no modelo Flexbox para definir como o espaço extra é distribuído entre os itens ao longo do eixo principal (horizontal por padrão) é a:",
    "options": {
      "A": "margin-collapse",
      "B": "justify-content",
      "C": "display-grid",
      "D": "flex-direction",
      "E": "align-items"
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Flexbox tem dois eixos. O eixo principal (Main Axis) é controlado pelo `justify-content` (center, space-between, etc). O eixo cruzado (Cross Axis) é controlado pelo `align-items`.",
      "puloDoGato": "Mnemônico: Justify = Horizontal (geralmente). Align = Vertical (geralmente).",
      "cascasDeBanana": {
        "A": "Incorreta. Controla o alinhamento no eixo cruzado (vertical).",
        "B": "Correta. Alinha itens no eixo principal.",
        "C": "Incorreta. Define a direção do fluxo (row ou column).",
        "D": "Incorreta. Grid é outro modelo de layout (bidimensional).",
        "E": "Incorreta. Conceito de margens que se sobrepõem, não é do Flexbox."
      },
      "dicaDeOuro": "Justify-Content = Eixo Principal (Horizontal)!"
    }
  },
  {
    "id": "q_engsw_027",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "JavaScript",
    "difficulty": "Avançado",
    "statement": "No JavaScript moderno (ES6+), a sintaxe 'async/await' é utilizada para:",
    "options": {
      "A": "Facilitar a escrita e leitura de código assíncrono, permitindo trabalhar com Promises de forma que pareça um código sequencial.",
      "B": "Criar loops infinitos que não consomem memória RAM.",
      "C": "Acelerar a velocidade de download de arquivos externos em 50%.",
      "D": "Declarar variáveis que não podem ter seu valor alterado (constantes).",
      "E": "Tornar a execução do JavaScript síncrona, travando o navegador até a resposta chegar."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O `async/await` é um 'açúcar sintático' sobre as Promises. Em vez de encadear vários `.then()`, você 'espera' (await) a resposta. O código fica muito mais limpo e fácil de debugar.",
      "puloDoGato": "Importante: `await` só pode ser usado dentro de uma função marcada como `async`. E ele não trava a thread principal do navegador; ele apenas pausa a execução daquela função específica.",
      "cascasDeBanana": {
        "E": "Incorreta. JS continua sendo assíncrono e não bloqueante; o await apenas simplifica a espera.",
        "A": "Correta. Melhora legibilidade de Promises.",
        "C": "Incorreta. Não afeta a velocidade da rede.",
        "D": "Incorreta. Isso é feito com `const`.",
        "B": "Incorreta. Loops infinitos sempre são perigosos."
      },
      "dicaDeOuro": "Async/Await = Código Assíncrono com cara de Síncrono!"
    }
  },
  {
    "id": "q_engsw_028",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": ".Net Core (versão 5 ou superior)",
    "difficulty": "Difícil",
    "statement": "No .NET Core / .NET 5+, ao configurar a Injeção de Dependência nativa, o tempo de vida (lifetime) em que uma nova instância do serviço é criada a cada vez que ela é solicitada pelo contêiner é chamado de:",
    "options": {
      "A": "Scoped.",
      "B": "Transient.",
      "C": "Volatile.",
      "D": "Singleton.",
      "E": "Static."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Existem 3 lifetimes no .NET: 1) **Transient**: Criado sempre que solicitado. 2) **Scoped**: Criado uma vez por requisição HTTP. 3) **Singleton**: Criado uma única vez para toda a vida da aplicação.",
      "puloDoGato": "A Cesgranrio ama perguntar qual escolher para um Repositório (geralmente Scoped) ou para um serviço de logs leve (Transient).",
      "cascasDeBanana": {
        "D": "Incorreta. Singleton cria apenas uma vez.",
        "A": "Incorreta. Scoped cria uma vez por 'escopo' (geralmente a request).",
        "B": "Correta. Transient é o mais 'passageiro', criado sob demanda sempre.",
        "E": "Incorreta. Static não é um lifetime de DI gerenciado dessa forma.",
        "C": "Incorreta. Volatile é uma palavra-chave para multithreading."
      },
      "dicaDeOuro": "Transient = Novo sempre! Scoped = Um por Request. Singleton = Um para sempre."
    }
  },
  {
    "id": "q_engsw_029",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Threads",
    "difficulty": "Difícil",
    "statement": "Em programação concorrente, a situação de 'Deadlock' ocorre quando:",
    "options": {
      "A": "O processador atinge 100% de uso e desliga por superaquecimento.",
      "B": "O código entra em um loop infinito de cálculos matemáticos.",
      "C": "Uma thread termina sua execução antes do esperado.",
      "D": "Duas ou mais threads ficam bloqueadas perpetuamente, cada uma esperando por um recurso que está sendo segurado pela outra.",
      "E": "A memória RAM acaba e o sistema utiliza o swap do disco rígido."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Deadlock é o 'abraço da morte'. A Thread 1 tem o Recurso A e quer o B. A Thread 2 tem o Recurso B e quer o A. Ninguém solta o que tem e ninguém consegue o que quer. O sistema trava.",
      "puloDoGato": "Para haver deadlock, quatro condições (Condições de Coffman) devem ser atendidas: Exclusão Mútua, Posse e Espera, Não Preempção e Espera Circular.",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria encerramento prematuro.",
        "D": "Correta. Bloqueio mútuo por disputa de recursos.",
        "A": "Incorreta. Isso é falha de hardware.",
        "E": "Incorreta. Isso é falta de memória física.",
        "B": "Incorreta. Loop consome CPU, mas não é necessariamente um deadlock."
      },
      "dicaDeOuro": "Deadlock = Impasse! Um espera o outro eternamente."
    }
  },
  {
    "id": "q_engsw_030",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Garbage collector",
    "difficulty": "Difícil",
    "statement": "Qual é a função principal do Garbage Collector (Coletor de Lixo) em linguagens como Java, C# ou Python?",
    "options": {
      "A": "Deletar arquivos temporários da pasta 'Downloads' do usuário.",
      "B": "Verificar se o programador escreveu comentários suficientes no código.",
      "C": "Gerenciar automaticamente a memória, identificando e liberando objetos que não estão mais sendo utilizados pela aplicação.",
      "D": "Compactar o código-fonte para que o executável fique menor.",
      "E": "Impedir que o computador seja infectado por malwares via rede."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Em linguagens modernas, você não precisa dar 'free' ou 'delete' manualmente (como no C++). O GC monitora quem ainda tem referência no código. Se ninguém mais aponta para um objeto, o GC entende que ele é 'lixo' e limpa a memória para você.",
      "puloDoGato": "O GC não limpa a memória INSTANTANEAMENTE. Ele roda em ciclos, geralmente baseados em gerações (Gen 0, 1, 2), para otimizar a performance.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele limpa a memória RAM, não o disco rígido.",
        "C": "Correta. Gestão automática de memória dinâmica (Heap).",
        "D": "Incorreta. Isso seria papel de um 'minifier' ou 'compilador'.",
        "B": "Incorreta. Isso seria papel de um 'linter'.",
        "E": "Incorreta. Isso é papel de um Antivírus."
      },
      "dicaDeOuro": "GC = Faxineiro da Memória RAM!"
    }
  },
  {
    "id": "q_engsw_033",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões de projeto (design patterns)",
    "difficulty": "Médio",
    "statement": "Qual padrão de projeto GoF (Gang of Four) define uma dependência um-para-muitos entre objetos, de modo que quando um objeto muda de estado, todos os seus dependentes são notificados e atualizados automaticamente?",
    "options": {
      "A": "Singleton.",
      "B": "Factory Method.",
      "C": "Observer.",
      "D": "Strategy.",
      "E": "Adapter."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Observer é o coração dos sistemas baseados em eventos. Imagine um botão: quando você clica, vários ouvintes (Listeners) reagem. O objeto 'Observado' não precisa saber quem são os 'Observadores', apenas que deve notificá-los.",
      "puloDoGato": "Muito usado em interfaces gráficas (DOM Events) e arquiteturas reativas (RxJS). É o pilar do desacoplamento de notificações.",
      "cascasDeBanana": {
        "A": "Incorreta. Strategy foca em trocar algoritmos em tempo de execução.",
        "B": "Incorreta. Singleton garante instância única.",
        "C": "Correta. Padrão comportamental de notação/assinatura.",
        "D": "Incorreta. Factory foca na criação de objetos.",
        "E": "Incorreta. Adapter permite que interfaces incompatíveis trabalhem juntas."
      },
      "dicaDeOuro": "Viu 'Notificação' ou 'Event Listener'? É Observer!"
    }
  },
  {
    "id": "q_engsw_034",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões de projeto (design patterns)",
    "difficulty": "Difícil",
    "statement": "O padrão de projeto estrutural que permite adicionar novas funcionalidades a um objeto dinamicamente, sem alterar sua estrutura ou usar herança excessiva, é o:",
    "options": {
      "A": "Composite.",
      "B": "Bridge.",
      "C": "Facade.",
      "D": "Proxy.",
      "E": "Decorator."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Decorator 'envolve' um objeto existente. Imagine uma xícara de café: você pode 'decorar' com leite, depois com açúcar, depois com chantilly. Cada camada adiciona funcionalidade (e custo/comportamento) sem precisar criar uma classe 'CafeComLeiteAcucarEChantilly'.",
      "puloDoGato": "A principal vantagem é a flexibilidade em relação à herança, evitando a explosão de subclasses para cada combinação de funcionalidades.",
      "cascasDeBanana": {
        "D": "Incorreta. Proxy controla o acesso ao objeto, mas não foca em adicionar funcionalidade de negócio dinamicamente.",
        "C": "Incorreta. Facade simplifica uma interface complexa.",
        "E": "Correta. Adição dinâmica de responsabilidades.",
        "A": "Incorreta. Composite trata objetos individuais e composições de forma uniforme.",
        "B": "Incorreta. Bridge separa a abstração da sua implementação."
      },
      "dicaDeOuro": "Decorator = Envelopamento dinâmico (Wrapper)!"
    }
  },
  {
    "id": "q_engsw_037",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões: SOAP, REST, XML, JSON, UDDI, WSDL, JSON, RMI, XML-HttpRequest",
    "difficulty": "Médio",
    "statement": "Em serviços web baseados em SOAP (Simple Object Access Protocol), o arquivo XML que funciona como um contrato, descrevendo as operações, mensagens e tipos de dados oferecidos pelo serviço, é o:",
    "options": {
      "A": "HTML.",
      "B": "WSDL (Web Services Description Language).",
      "C": "JSON.",
      "D": "RSS.",
      "E": "YAML."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "O WSDL é a 'certidão de nascimento' de um serviço SOAP. Ele diz exatamente qual URL chamar, quais parâmetros enviar e o que esperar de volta. Ferramentas podem ler o WSDL e gerar o código (Stub/Proxy) automaticamente para você.",
      "puloDoGato": "Pense no WSDL como o 'Swagger/OpenAPI' do mundo SOAP. É um contrato rígido e formal.",
      "cascasDeBanana": {
        "A": "Incorreta. HTML é para apresentação web.",
        "C": "Incorreta. JSON é formato de dados, SOAP usa XML obrigatoriamente.",
        "B": "Correta. Sigla fundamental para integração via SOAP.",
        "E": "Incorreta. YAML é usado em configurações (ex: Swagger), não em SOAP.",
        "D": "Incorreta. RSS é para distribuição de notícias."
      },
      "dicaDeOuro": "SOAP + Contrato XML = WSDL!"
    }
  },
  {
    "id": "q_engsw_038",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Mensageria e Middleware",
    "difficulty": "Difícil",
    "statement": "Ao utilizar um Middleware de Mensageria (MOM), qual é a principal diferença comportamental entre uma 'Queue' (Fila) e um 'Topic' (Tópico)?",
    "options": {
      "A": "A Queue é síncrona e o Topic é assíncrono.",
      "B": "A Queue garante que cada mensagem seja processada por apenas um consumidor (Point-to-Point), enquanto o Topic envia a mensagem para todos os assinantes ativos (Publish-Subscribe).",
      "C": "A Queue é usada apenas para vídeos e o Topic apenas para textos.",
      "D": "Não há diferença, são apenas nomes diferentes para o mesmo conceito.",
      "E": "A Queue permite múltiplos consumidores para a mesma mensagem, enquanto o Topic permite apenas um."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Fila (Queue) é como uma fila de banco: se você atendeu o cliente, ele sai da fila e ninguém mais o atende. Tópico (Topic) é como uma palestra: eu falo e todo mundo que está na sala (inscrito) ouve a mesma mensagem simultaneamente.",
      "puloDoGato": "A Cesgranrio costuma cobrar o termo 'Fan-out' para tópicos, que é o ato de espalhar a mensagem para vários destinos.",
      "cascasDeBanana": {
        "A": "Incorreta. É exatamente o oposto.",
        "B": "Correta. Distinção fundamental entre modelos de entrega de mensagens.",
        "C": "Incorreta. Formatos de dados não definem o padrão de mensageria.",
        "D": "Incorreta. Ambos os modelos são pilares da comunicação assíncrona.",
        "E": "Incorreta. São padrões arquiteturais distintos."
      },
      "dicaDeOuro": "Fila = 1 para 1. Tópico = 1 para Muitos!"
    }
  },
  {
    "id": "q_engsw_039",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Conceitos de acessibilidade (WCAG)",
    "difficulty": "Médio",
    "statement": "A diretriz WCAG (Web Content Accessibility Guidelines) define quatro princípios fundamentais para a acessibilidade na web, conhecidos pela sigla POUR. Quais são esses princípios?",
    "options": {
      "A": "Paciência, Organização, União e Resiliência.",
      "B": "Praticidade, Objetividade, Unicidade e Relevância.",
      "C": "Perceptível, Operável, Compreensível e Robusto.",
      "D": "Performance, Otimização, Usabilidade e Robustez.",
      "E": "Privacidade, Ordem, Utilidade e Rapidez."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O WCAG é o padrão ouro da acessibilidade. **Perceptível**: o usuário deve conseguir perceber o conteúdo (ex: texto alternativo para imagens). **Operável**: deve ser possível navegar (ex: via teclado). **Compreensível**: o texto e a interface devem ser claros. **Robusto**: deve funcionar em diferentes navegadores e tecnologias assistivas.",
      "puloDoGato": "Lembre-se da sigla em inglês: Perceivable, Operable, Understandable, Robust.",
      "cascasDeBanana": {
        "D": "Incorreta. Performance e Usabilidade são importantes, mas não são os pilares formais do WCAG.",
        "C": "Correta. Definição oficial das diretrizes W3C.",
        "E": "Incorreta. Termos relacionados a UX e Segurança, mas não ao POUR.",
        "B": "Incorreta. Termos genéricos de qualidade.",
        "A": "Incorreta. Termos abstratos de soft skills."
      },
      "dicaDeOuro": "WCAG = POUR (Perceptível, Operável, Compreensível, Robusto)!"
    }
  },
  {
    "id": "q_engsw_040",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Servidores de aplicação e servidores web",
    "difficulty": "Médio",
    "statement": "Qual é a principal distinção funcional entre um 'Web Server' (Servidor Web) e um 'Application Server' (Servidor de Aplicação)?",
    "options": {
      "A": "O Web Server não precisa de internet para funcionar.",
      "B": "O Application Server é sempre mais lento que o Web Server devido à criptografia.",
      "C": "O Web Server é um hardware físico e o Application Server é um software na nuvem.",
      "D": "O Web Server serve apenas para hospedar sites em WordPress, enquanto o Application Server hospeda apenas jogos.",
      "E": "O Web Server é focado em processar requisições HTTP e servir conteúdo estático (HTML, CSS, Imagens), enquanto o Application Server oferece serviços de lógica de negócio e suporte a protocolos variados."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O Web Server (ex: Nginx, Apache) é o cara da linha de frente: ele recebe o HTTP e entrega arquivos rápidos. O Application Server (ex: JBoss, WebLogic, IIS) é o cérebro: ele gerencia conexões com banco, transações distribuídas e roda o código pesado.",
      "puloDoGato": "Hoje essa linha é tênue (ex: Node.js faz os dois), mas para concursos, foque na divisão: Web = Estático/HTTP | App = Lógica/EJB/Middleware.",
      "cascasDeBanana": {
        "D": "Incorreta. Uso muito restrito e tecnicamente pobre.",
        "E": "Correta. Distinção clássica de arquitetura multicamadas.",
        "C": "Incorreta. Ambos são tipos de software que rodam em hardware.",
        "A": "Incorreta. Sem sentido técnico no contexto web.",
        "B": "Incorreta. Velocidade depende da configuração e carga, não do tipo de servidor."
      },
      "dicaDeOuro": "Web Server = Entrega rápida de arquivos. App Server = Executa lógica complexa."
    }
  },
  {
    "id": "q_engsw_041",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Tecnologias de indexação e busca",
    "difficulty": "Difícil",
    "statement": "Ferramentas de busca moderna (como Elasticsearch e Solr) utilizam uma estrutura de dados chamada 'Inverted Index' (Índice Invertido). O que define essa estrutura?",
    "options": {
      "A": "É um índice que só funciona em sistemas operacionais de 32 bits.",
      "B": "Ela mapeia cada palavra única para uma lista de documentos (ou registros) onde essa palavra aparece, permitindo buscas de texto rápidas.",
      "C": "Ela deleta as palavras mais comuns do sistema para focar apenas em erros de digitação.",
      "D": "Ela armazena os dados de trás para frente para economizar espaço em disco.",
      "E": "Ela inverte a ordem dos resultados para que os menos relevantes apareçam primeiro."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Imagine o índice remissivo no final de um livro técnico. Você procura a palavra 'SQL' e lá diz 'páginas 10, 45, 90'. O Elasticsearch faz isso com milhões de documentos. Em vez de ler o documento inteiro procurando a palavra, ele vai direto no 'mapa' da palavra.",
      "puloDoGato": "É por isso que a busca é quase instantânea. O trabalho pesado é feito na hora de indexar, não na hora de buscar.",
      "cascasDeBanana": {
        "A": "Incorreta. Não é sobre compressão de strings reversas.",
        "B": "Correta. Base do funcionamento do Lucene e motores de busca.",
        "C": "Incorreta. Isso descreve o tratamento de 'Stop Words', que é uma técnica auxiliar, não a estrutura do índice em si.",
        "D": "Incorreta. Inversão de relevância seria um erro de design.",
        "E": "Incorreta. Limitação inexistente."
      },
      "dicaDeOuro": "Índice Invertido = Lista de Termos -> Onde eles estão!"
    }
  },
  {
    "id": "q_engsw_042",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "JavaScript, Java, Python ou .NET Core",
    "difficulty": "Médio",
    "statement": "Em linguagens como Java e C#, o recurso de 'Generics' tem como um de seus principais objetivos:",
    "options": {
      "A": "Impedir que o programador use classes herdadas.",
      "B": "Permitir a criação de classes e métodos que operam sobre tipos de dados genéricos, garantindo a verificação de tipo (Type Safety) em tempo de compilação.",
      "C": "Reduzir o tamanho do executável ao remover nomes de variáveis.",
      "D": "Permitir que o código seja gerado automaticamente por inteligência artificial.",
      "E": "Tornar obrigatório o uso de memória estática para todas as coleções."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Antes do Generics (em Java < 5), você colocava tudo em um `ArrayList` de `Object` e tinha que fazer cast `(String) list.get(0)` correndo o risco de um `ClassCastException`. Com Generics `List<String>`, o compilador te avisa na hora se você tentar inserir um número.",
      "puloDoGato": "Generics = Reuso + Segurança. Você escreve o código uma vez para 'T' e ele serve para qualquer tipo, com a proteção do compilador.",
      "cascasDeBanana": {
        "A": "Incorreta. Não tem relação com geradores de código automáticos.",
        "B": "Correta. Pilar de linguagens tipadas modernas para coleções e abstrações.",
        "C": "Incorreta. Metadados de tipos podem até aumentar levemente o binário em alguns casos.",
        "D": "Incorreta. Generics e Herança trabalham muito bem juntos.",
        "E": "Incorreta. Coleções genéricas são quase sempre dinâmicas (Heap)."
      },
      "dicaDeOuro": "Generics = Segurança de Tipo (Type Safety) sem abrir mão do reuso!"
    }
  },
  {
    "id": "q_engsw_043",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Java (versão 11 ou superior)",
    "difficulty": "Difícil",
    "statement": "No Java, as exceções do tipo 'Unchecked' (não verificadas), que herdam da classe `RuntimeException`, possuem a característica de:",
    "options": {
      "A": "Serem obrigatoriamente capturadas em um bloco try-catch ou declaradas na cláusula throws do método.",
      "B": "Serem resolvidas automaticamente pela JVM sem encerrar a thread.",
      "C": "Serem exceções que ocorrem apenas em hardware, nunca no código Java.",
      "D": "Serem usadas apenas para sinalizar o fim normal de um programa.",
      "E": "Não exigirem tratamento obrigatório pelo compilador, sendo geralmente causadas por falhas na lógica da aplicação (ex: NullPointerException)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Checked = O compilador te obriga a tratar (ex: IOException). Unchecked = O compilador te deixa passar. Elas representam erros que o programador poderia ter evitado (bug). Se você tentar acessar uma posição inexistente num array, a JVM lança uma Unchecked.",
      "puloDoGato": "Regra de ouro: RuntimeException e suas filhas são Unchecked. Todo o resto que herda de Exception é Checked.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso descreve as 'Checked Exceptions'.",
        "E": "Correta. Flexibilidade no tratamento, mas cuidado redobrado na lógica.",
        "C": "Incorreta. São erros de software/lógica.",
        "B": "Incorreta. Se não tratadas, elas encerram a execução da thread.",
        "D": "Incorreta. Exceções sinalizam condições anormais."
      },
      "dicaDeOuro": "Unchecked = RuntimeException. Não precisa de 'throws' nem 'try-catch' obrigatório."
    }
  },
  {
    "id": "q_engsw_044",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Java, Python ou .NET Core",
    "difficulty": "Médio",
    "statement": "O uso de 'Annotations' (Java) ou 'Attributes' (.NET) no código-fonte serve primariamente para:",
    "options": {
      "A": "Fornecer metadados sobre o código que podem ser processados em tempo de compilação ou execução por ferramentas e frameworks.",
      "B": "Substituir o uso de variáveis e constantes.",
      "C": "Adicionar comentários que serão lidos apenas por outros desenvolvedores.",
      "D": "Alterar o nome das variáveis para chinês de forma automática.",
      "E": "Criptografar o código para evitar pirataria."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Annotations (ex: `@Override`, `@Test`, `@Entity`) não mudam a lógica do código diretamente, mas dão 'dicas' poderosas para o framework. O Spring ou o Entity Framework as usam para saber como mapear uma classe para uma tabela do banco de dados, por exemplo.",
      "puloDoGato": "Metadados = Dados sobre dados. Elas 'etiquetam' seu código para que o compilador ou the framework tome decisões automatizadas.",
      "cascasDeBanana": {
        "C": "Incorreta. Comentários comuns (`//`) são ignorados pelo compilador; anotações são preservadas.",
        "A": "Correta. Pilar de frameworks modernos baseados em configuração por metadados.",
        "E": "Incorreta. Não tem relação com ofuscação ou criptografia.",
        "D": "Incorreta. Invenção sem base técnica.",
        "B": "Incorreta. São recursos ortogonais."
      },
      "dicaDeOuro": "Viu @Algo ou [Algo]? É metadado/anotação para o framework ler!"
    }
  },
  {
    "id": "q_engsw_046",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Frameworks JavaScript (React, Vue, Angular)",
    "difficulty": "Difícil",
    "statement": "Em frameworks modernos como React, o conceito de 'Virtual DOM' é utilizado para:",
    "options": {
      "A": "Permitir que o site funcione sem ter um navegador instalado.",
      "B": "Substituir o uso de CSS para animações complexas.",
      "C": "Otimizar as atualizações na interface, mantendo uma representação leve em memória e aplicando apenas as mudanças mínimas necessárias no DOM real.",
      "D": "Garantir que o site carregue instantaneamente em redes 2G.",
      "E": "Criptografar os dados do usuário antes de enviá-los ao servidor."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O DOM real do navegador é muito lento para manipular. O React cria uma 'cópia' leve em JavaScript (Virtual DOM). Quando algo muda, o React compara a cópia nova com a velha (Diffing) e só altera no navegador o que realmente mudou. Isso é o que torna o React tão rápido.",
      "puloDoGato": "É por isso que dizemos que o React é 'declarativo'. Você diz como a UI deve estar e ele se vira para atualizar o DOM de forma eficiente.",
      "cascasDeBanana": {
        "A": "Incorreta. Continua sendo uma tecnologia de front-end para navegadores.",
        "C": "Correta. Pilar de performance de Single Page Applications (SPAs).",
        "E": "Incorreta. Segurança e criptografia não são objetivos do Virtual DOM.",
        "B": "Incorreta. CSS e JS continuam tendo seus papéis distintos no design.",
        "D": "Incorreta. Ajuda na renderização, mas não faz milagres com a latência de rede."
      },
      "dicaDeOuro": "Virtual DOM = Rápido (JS) vs DOM Real = Lento (Browser). O React faz a ponte!"
    }
  },
  {
    "id": "q_engsw_047",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Linguagens de desenvolvimento de interfaces ricas (HTML 5, CSS 3)",
    "difficulty": "Médio",
    "statement": "No CSS3, o recurso fundamental utilizado para criar designs responsivos, permitindo aplicar estilos diferentes com base na largura da tela, resolução ou orientação do dispositivo, é o:",
    "options": {
      "A": "Grid Layout.",
      "B": "Media Queries.",
      "C": "Flexbox.",
      "D": "Transitions.",
      "E": "Keyframes."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "As Media Queries permitem que você diga: 'Se a tela tiver menos de 768px, mude a cor do fundo e esconda o menu lateral'. Elas são os blocos de construção do Mobile-First.",
      "puloDoGato": "A sintaxe `@media screen and (max-width: 600px)` é a mais cobrada em provas. Ela define o 'Breakpoint' do layout.",
      "cascasDeBanana": {
        "A": "Incorreta. Flexbox é para layout de itens, mas não detecta características do dispositivo sozinho.",
        "B": "Correta. Técnica essencial para responsividade.",
        "C": "Incorreta. Grid é para layouts 2D, mas também depende de Media Queries para ser responsivo.",
        "D": "Incorreta. Usado para animações complexas.",
        "E": "Incorreta. Usado para suavizar mudanças de propriedades CSS."
      },
      "dicaDeOuro": "Design Responsivo = Media Queries!"
    }
  },
  {
    "id": "q_engsw_048",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": ".Net Core (versão 5 ou superior)",
    "difficulty": "Avançado",
    "statement": "Em aplicações ASP.NET Core, o conceito de 'Middleware' refere-se a:",
    "options": {
      "A": "O código que roda apenas no navegador do usuário (Front-end).",
      "B": "O banco de dados centralizado da Microsoft.",
      "C": "Um tipo de vírus que ataca servidores Windows.",
      "D": "Componentes de software montados em um pipeline de execução que lidam com requisições e respostas HTTP de forma encadeada.",
      "E": "Um software que deve ser instalado fisicamente no computador do cliente para acessar o site."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine uma linha de montagem. A requisição HTTP entra e passa pelo Middleware de Log, depois pelo Middleware de Autenticação, depois pelo de Compressão, até chegar no seu Controller. Na volta (Response), ela faz o caminho inverso.",
      "puloDoGato": "A ordem importa! Se você colocar o Middleware de Autenticação depois do que entrega os arquivos, seu sistema estará aberto.",
      "cascasDeBanana": {
        "E": "Incorreta. Middleware é um conceito de arquitetura de servidor, não de instalação no cliente.",
        "D": "Correta. Pilar do pipeline de execução do ASP.NET Core.",
        "B": "Incorreta. Middleware não é um banco de dados.",
        "C": "Incorreta. Confusão com Malware.",
        "A": "Incorreta. Middleware roda no servidor (Backend)."
      },
      "dicaDeOuro": "Middleware = Filtros em cascata no pipeline da requisição!"
    }
  },
  {
    "id": "q_engsw_b2_004",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Níveis de Teste - Unidade vs Integração",
    "difficulty": "Médio",
    "statement": "Qual é a principal diferença entre Testes de Unidade e Testes de Integração?",
    "options": {
      "A": "Não há diferença, são sinônimos.",
      "B": "Testes de unidade validam a menor parte testável do código de forma isolada, enquanto testes de integração validam a interação entre múltiplos módulos ou sistemas.",
      "C": "Testes de unidade só funcionam em Java e integração só em Python.",
      "D": "Testes de unidade são lentos e testes de integração são instantâneos.",
      "E": "Testes de unidade são feitos pelo cliente e testes de integração pelo programador."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Unidade: Testo um método sozinho (uso Mocks para fingir o banco de dados). Integração: Testo se o meu serviço consegue realmente salvar e ler do banco de dados real. Integração verifica as 'costuras' do sistema.",
      "puloDoGato": "Testes de Unidade devem ser rápidos e independentes. Se o seu 'teste de unidade' precisa de internet ou banco de dados, ele é um teste de integração disfarçado.",
      "cascasDeBanana": {
        "A": "Incorreta. Ambos são geralmente responsabilidade do desenvolvedor/QA.",
        "B": "Correta. Definição clássica de granularidade de testes.",
        "C": "Incorreta. Conceitos universais de engenharia de software.",
        "D": "Incorreta. Representam níveis de isolamento diferentes.",
        "E": "Incorreta. Testes de unidade são muito mais rápidos (milissegundos)."
      },
      "dicaDeOuro": "Unidade = Isolado. Integração = Juntos!"
    }
  },
  {
    "id": "q_engsw_b2_005",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Técnicas de Teste - Caixa-Preta vs Caixa-Branca",
    "difficulty": "Difícil",
    "statement": "Em relação às técnicas de teste, o teste de 'Caixa-Branca' (White-Box Testing) se caracteriza por:",
    "options": {
      "A": "Ignorar completamente os requisitos funcionais da aplicação.",
      "B": "Avaliar o sistema apenas pela sua interface de usuário, sem conhecer o código-fonte.",
      "C": "Basear os casos de teste na estrutura interna, no fluxo lógico e na implementação do código-fonte.",
      "D": "Testar apenas se o computador é branco.",
      "E": "Ser realizado exclusivamente por usuários finais que não entendem de tecnologia."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Caixa-Branca (ou estrutural): Eu vejo o código. Eu crio testes para garantir que passei por todos os 'if/else', todos os loops e todos os caminhos lógicos. Caixa-Preta (ou funcional): Eu não vejo o código, só me importo se eu digito X e sai Y conforme o esperado.",
      "puloDoGato": "Mnemônico: Caixa-Branca = Transparente (vejo o código). Caixa-Preta = Opaca (só vejo a entrada e saída).",
      "cascasDeBanana": {
        "B": "Incorreta. Isso descreve o Teste de Caixa-Preta.",
        "C": "Correta. Foco na cobertura de código (Code Coverage).",
        "D": "Incorreta. Piada de hardware.",
        "E": "Incorreta. Requer conhecimento técnico da implementação.",
        "A": "Incorreta. O teste valida se a implementação atende aos requisitos através do fluxo interno."
      },
      "dicaDeOuro": "Branca = Vejo o código. Preta = Vejo os requisitos!"
    }
  },
  {
    "id": "q_engsw_b2_010",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "DevSecOps - Shift-Left Testing",
    "difficulty": "Médio",
    "statement": "No contexto de DevSecOps, o conceito de 'Shift-Left' refere-se à prática de:",
    "options": {
      "A": "Utilizar apenas o lado esquerdo do teclado para programar.",
      "B": "Excluir os desenvolvedores das decisões de segurança.",
      "C": "Delegar a segurança inteiramente para a equipe de infraestrutura de nuvem.",
      "D": "Integrar testes e considerações de segurança o mais cedo possível no ciclo de vida de desenvolvimento (desde o design e requisitos).",
      "E": "Mover todas as tarefas de segurança para o final do ciclo de desenvolvimento, logo antes do deploy."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Shift-Left é 'trazer para a esquerda'. Se imaginarmos uma linha do tempo da esquerda para a direita (Requisitos -> Design -> Código -> Teste -> Deploy), o Shift-Left quer que a segurança comece lá nos Requisitos e Design, e não seja apenas um 'check' de última hora antes de subir para produção.",
      "puloDoGato": "Quanto mais cedo você acha um bug de segurança, mais barato é consertar. Corrigir um erro de arquitetura em produção é 100x mais caro que no design.",
      "cascasDeBanana": {
        "E": "Incorreta. Isso seria 'Shift-Right', o modelo tradicional e ineficiente.",
        "D": "Correta. Base da cultura DevSecOps: segurança é responsabilidade de todos desde o início.",
        "B": "Incorreta. DevSecOps prega a colaboração total.",
        "A": "Incorreta. Piada sem sentido técnico.",
        "C": "Incorreta. Segurança deve ser compartilhada e integrada no app."
      },
      "dicaDeOuro": "Shift-Left = Segurança desde o Dia 1!"
    }
  },
  {
    "id": "q_engsw_b2_014",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Testes de Regressão",
    "difficulty": "Médio",
    "statement": "O objetivo principal dos 'Testes de Regressão' é:",
    "options": {
      "A": "Validar se o software funciona em sistemas operacionais obsoletos.",
      "B": "Testar as novas funcionalidades que acabaram de ser criadas.",
      "C": "Garantir que alterações recentes no código ou correções de bugs não tenham introduzido novos defeitos em partes do sistema que funcionavam anteriormente.",
      "D": "Reduzir a versão do software para uma versão mais antiga e instável.",
      "E": "Testar apenas o desempenho do banco de dados sob estresse."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Regressão é o famoso 'conserta um, quebra dois'. Você arruma o botão de login e, sem querer, o carrinho de compras para de funcionar. O teste de regressão serve para dar o 'OK' de que o que já era bom continua bom.",
      "puloDoGato": "É o maior candidato à automação! Como você precisa rodar esses testes TODA VEZ que muda algo, fazê-los manualmente é impossível em projetos grandes.",
      "cascasDeBanana": {
        "B": "Incorreta. Testes de novas funções são 'Evolutionary' ou 'New Feature Tests'.",
        "C": "Correta. Foco na manutenção da estabilidade do sistema legado/existente.",
        "D": "Incorreta. Confusão com 'Rollback'.",
        "E": "Incorreta. Isso seria Teste de Performance/Carga.",
        "A": "Incorreta. Isso seria Teste de Compatibilidade."
      },
      "dicaDeOuro": "Regressão = Garantir que o passado não quebrou por causa do presente!"
    }
  },
  {
    "id": "q_engsw_b2_015",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Teste de Aceitação do Usuário (UAT)",
    "difficulty": "Médio",
    "statement": "O Teste de Aceitação (UAT - User Acceptance Testing) é geralmente a última etapa antes da entrada em produção. Seu foco principal é:",
    "options": {
      "A": "Testar a velocidade de rotação dos discos rígidos do servidor.",
      "B": "Encontrar erros de sintaxe no código-fonte.",
      "C": "Verificar se o código segue o padrão CamelCase.",
      "D": "Treinar a equipe de desenvolvimento em novas linguagens de programação.",
      "E": "Validar se o software atende às necessidades do negócio e aos requisitos do usuário final, confirmando se o sistema está pronto para uso real."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "No UAT, o 'dono do problema' (usuário/cliente) testa o sistema em um ambiente similar ao real. Ele não quer saber se o código está bonito, ele quer saber: 'Eu consigo fechar minha folha de pagamento com esse sistema?'. Se sim, ele dá o 'Aceite'.",
      "puloDoGato": "O UAT valida a EFICÁCIA (o sistema faz o que deve?) enquanto os testes técnicos validam a EFICIÊNCIA (o sistema funciona corretamente?).",
      "cascasDeBanana": {
        "B": "Incorreta. Erros de sintaxe são pegos pelo compilador/IDE.",
        "E": "Correta. Validação final sob a ótica do negócio/valor.",
        "C": "Incorreta. Isso é papel de Linters e Code Review.",
        "A": "Incorreta. Teste de infra/hardware.",
        "D": "Incorreta. Treinamento é gestão de pessoas, não nível de teste."
      },
      "dicaDeOuro": "Aceitação = O cliente dizendo: 'Sim, isso resolve meu problema. Pode subir!'"
    }
  },
  {
    "id": "q_engsw_b2_022",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Técnicas de Caixa Preta - Particionamento por Equivalência",
    "difficulty": "Médio",
    "statement": "A técnica de teste de 'Particionamento por Equivalência' tem como objetivo principal:",
    "options": {
      "A": "Medir o tempo de resposta do banco de dados sob carga máxima.",
      "B": "Verificar a estrutura interna de dados e algoritmos.",
      "C": "Garantir que não existam variáveis não inicializadas no código.",
      "D": "Testar todas as linhas de código do programa pelo menos uma vez.",
      "E": "Reduzir o número de casos de teste, dividindo os dados de entrada em classes que devem ser processadas da mesma forma pelo sistema."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Se um campo aceita números de 1 a 100, eu não preciso testar os 100 números. Eu divido em classes: Inválido (<1), Válido (1-100), Inválido (>100). Testo um valor de cada classe. Se o 50 funciona, a classe toda deve funcionar.",
      "puloDoGato": "Caixa Preta = Não vejo o código, vejo a ENTRADA e SAÍDA. Equivalência = Economia de testes focando em amostras representativas.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é teste de Cobertura de Código (Caixa Branca).",
        "E": "Correta. Definição clássica da técnica.",
        "B": "Incorreta. Isso é foco de Caixa Branca.",
        "A": "Incorreta. Isso é teste de Performance/Carga.",
        "C": "Incorreta. Isso é Análise Estática de Código."
      },
      "dicaDeOuro": "Equivalência = Se 1 vale para todos daquela 'caixa', só preciso de 1 teste!"
    }
  },
  {
    "id": "q_engsw_b2_023",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Complexidade Ciclomática (McCabe)",
    "difficulty": "Difícil",
    "statement": "A Complexidade Ciclomática, proposta por Thomas McCabe, é uma métrica de software que fornece uma medida quantitativa da complexidade lógica de um programa. Em um grafo de fluxo de controle, a fórmula V(G) = E - N + 2P representa:",
    "options": {
      "A": "E = Entradas, N = Nomes, P = Processos.",
      "B": "E = Elementos, N = Negociações, P = Pontos de Função.",
      "C": "E = Execuções, N = Números, P = Pastas.",
      "D": "E = Arestas (Edges), N = Nós (Nodes), P = Componentes Conexos (Nodes de saída).",
      "E": "E = Erros, N = Níveis, P = Programadores."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "V(G) = Arestas - Nós + 2. Em grafos simples de um único programa, P é 1, resultando em E-N+2. A métrica indica o número de caminhos linearmente independentes e, consequentemente, o número mínimo de testes para cobrir todas as decisões.",
      "puloDoGato": "Dica visual: Conte o número de regiões fechadas no grafo e some 1. Ou conte os pontos de decisão (if, while) e some 1.",
      "cascasDeBanana": {
        "E": "Incorreta. Nomes inventados.",
        "D": "Correta. Edges, Nodes e Connected Components.",
        "A": "Incorreta. Nomes inventados.",
        "C": "Incorreta. Nomes inventados.",
        "B": "Incorreta. Mistura com Pontos de Função."
      },
      "dicaDeOuro": "Complexidade Ciclomática = Quantos 'caminhos' existem no código. Quanto maior, mais difícil de testar e manter!"
    }
  },
  {
    "id": "q_engsw_b2_024",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Manutenção de Software",
    "topic": "Tipos de Manutenção (ISO/IEC 14764)",
    "difficulty": "Médio",
    "statement": "A manutenção realizada para detectar e corrigir falhas latentes no produto de software antes que elas se tornem falhas operacionais é classificada como:",
    "options": {
      "A": "Manutenção Emergencial.",
      "B": "Manutenção Corretiva.",
      "C": "Manutenção Evolutiva.",
      "D": "Manutenção Preventiva.",
      "E": "Manutenção Adaptativa."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Manutenção Preventiva foca em evitar problemas futuros. Diferente da Corretiva (que conserta o que já quebrou) e da Adaptativa (que muda o sistema para um novo ambiente, ex: migrar de banco de dados).",
      "puloDoGato": "Cesgranrio gosta de confundir Preventiva com Evolutiva. Evolutiva (ou Perfectiva) adiciona NOVAS funções solicitadas pelo usuário.",
      "cascasDeBanana": {
        "B": "Incorreta. Corretiva é reativa (pós-falha).",
        "E": "Incorreta. Adaptativa é para mudanças de ambiente (OS, DB).",
        "D": "Correta. Proativa, foca em falhas latentes.",
        "C": "Incorreta. Evolutiva foca em melhorias/novos requisitos.",
        "A": "Incorreta. Não é um tipo formal da norma (seria uma corretiva urgente)."
      },
      "dicaDeOuro": "Preventiva = Evita que quebre. Corretiva = Conserta o que quebrou!"
    }
  },
  {
    "id": "q_engsw_b2_025",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Métricas de Software",
    "topic": "Análise de Pontos de Função (IFPUG)",
    "difficulty": "Difícil",
    "statement": "Na Análise de Pontos de Função (APF) do IFPUG, as funções do tipo DADOS são classificadas em:",
    "options": {
      "A": "Entrada Externa (EE) e Saída Externa (SE).",
      "B": "Entradas de Usuário e Relatórios de Impressão.",
      "C": "Consultas Externas (CE) e Arquivos de Log.",
      "D": "Arquivos Lógicos Internos (ALI) e Arquivos de Interface Externa (AIE).",
      "E": "Tabelas de Banco de Dados e Índices."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A APF divide as funções em DADOS (ALI e AIE) e TRANSAÇÕES (EE, SE, CE). ALI são dados mantidos dentro do sistema. AIE são dados referenciados pelo sistema, mas mantidos por outro.",
      "puloDoGato": "Memorize: Dados = ALI/AIE. Transações = EE/SE/CE.",
      "cascasDeBanana": {
        "A": "Incorreta. São funções de Transação.",
        "D": "Correta. Classificação oficial do IFPUG para dados.",
        "C": "Incorreta. CE é transação. Arquivo de Log não é classificação.",
        "E": "Incorreta. São termos técnicos de DB, não de APF.",
        "B": "Incorreta. São conceitos de negócio, não classificação formal."
      },
      "dicaDeOuro": "ALI = Meus dados. AIE = Dados dos outros que eu uso!"
    }
  },
  {
    "id": "q_engsw_b2_035",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Refatoração de Código",
    "topic": "Code Smells - God Object",
    "difficulty": "Médio",
    "statement": "Na Engenharia de Software, o termo 'God Object' (Objeto Deus) refere-se a um 'mau cheiro' no código (code smell) que ocorre quando:",
    "options": {
      "A": "Uma variável é declarada mas nunca é utilizada no programa.",
      "B": "O sistema de banco de dados fica offline aos domingos.",
      "C": "Uma classe conhece e faz coisas demais, centralizando quase toda a lógica do sistema nela.",
      "D": "O código é tão bom que parece ter sido escrito por uma divindade.",
      "E": "O código-fonte é criptografado com chaves divinas."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Um 'God Object' viola o Princípio da Responsabilidade Única (SRP) do SOLID. É aquela classe 'Geral.js' ou 'MainController' que tem 5.000 linhas e resolve desde o login até a impressão do boleto. Isso torna o código impossível de manter.",
      "puloDoGato": "Solução: Quebrar a classe grande em classes menores, cada uma com uma única responsabilidade clara.",
      "cascasDeBanana": {
        "C": "Correta. Centralização excessiva de lógica.",
        "D": "Incorreta. Termo irônico, não é elogio.",
        "A": "Incorreta. Isso é 'Dead Code' (Código Morto).",
        "B": "Incorreta. Problema de infra/disponibilidade.",
        "E": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "God Object = O terror do desenvolvedor. Divida e conquistará!"
    }
  },
  {
    "id": "q_engsw_b2_040",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 2,
    "discipline": "Testes de Software",
    "topic": "Análise de Valor Limite (Boundary Value Analysis)",
    "difficulty": "Médio",
    "statement": "Complementando o particionamento por equivalência, a 'Análise de Valor Limite' foca o teste em:",
    "options": {
      "A": "Valores no centro das classes de equivalência.",
      "B": "Valores aleatórios dentro do sistema.",
      "C": "Apenas nos valores que o usuário digita com mais frequência.",
      "D": "Extremos das classes de equivalência (mínimos, máximos e valores logo acima/abaixo dos limites).",
      "E": "Nenhuma das anteriores."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Muitos erros ocorrem nas fronteiras (ex: usar '<' em vez de '<='). Se a idade deve ser entre 18 e 65, testamos 17, 18, 19 e 64, 65, 66. Esses são os pontos críticos onde a lógica costuma falhar.",
      "puloDoGato": "Valor Limite = Testar as 'beiradas' das classes. É onde o programador mais erra a lógica de comparação.",
      "cascasDeBanana": {
        "A": "Incorreta. O centro é coberto pela Equivalência, mas raramente revela erros de lógica.",
        "B": "Incorreta. Testes aleatórios (fuzzing) são outra técnica.",
        "D": "Correta. Foco nas fronteiras de decisão.",
        "C": "Incorreta. Isso seria teste baseado em perfil de uso.",
        "E": "Incorreta. N/A."
      },
      "dicaDeOuro": "A beirada do abismo é onde o bug se esconde. Teste sempre os limites!"
    }
  },
  {
    "id": "q_engsw_b2_044",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "discipline": "Métricas de Software",
    "topic": "COCOMO II - Estimativa de Custos",
    "difficulty": "Difícil",
    "statement": "O COCOMO II (Constructive Cost Model) é um modelo de estimativa de esforço, tempo e custo de projetos de software. Ele utiliza como principal entrada para o cálculo do esforço:",
    "options": {
      "A": "A velocidade da internet da empresa.",
      "B": "O número de likes nas redes sociais da empresa.",
      "C": "Apenas o salário dos programadores.",
      "D": "O tamanho do software (em linhas de código ou pontos de função) ajustado por multiplicadores de esforço (Cost Drivers).",
      "E": "O número de reuniões agendadas."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O COCOMO II estima o esforço (Pessoas-Mês). Ele olha para o tamanho (KSLOC - Milhares de linhas de código) e aplica fatores como: habilidade da equipe, complexidade do produto, restrições de tempo, etc.",
      "puloDoGato": "COCOMO = Estimativa Algorítmica. Ele tenta prever 'Quanto tempo e quanta gente' vou precisar.",
      "cascasDeBanana": {
        "E": "Incorreta. Reuniões são consequência, não entrada do modelo.",
        "D": "Correta. Tamanho + Atributos de Custo (Drivers).",
        "C": "Incorreta. Salário define custo, mas o modelo foca em Esforço (tempo/gente).",
        "A": "Incorreta. Irrelevante para o modelo clássico.",
        "B": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "COCOMO = Tamanho do sistema + Dificuldade = Tempo e Pessoas."
    }
  },
  {
    "id": "q_engsw_b3_020",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "Python - List Comprehensions",
    "difficulty": "Médio",
    "statement": "Em Python, qual o resultado da execução da seguinte expressão: [x**2 for x in range(5)]?",
    "options": {
      "A": "[1, 2, 3, 4, 5]",
      "B": "[0, 2, 4, 6, 8]",
      "C": "[1, 4, 9, 16, 25]",
      "D": "[0, 1, 4, 9, 16]",
      "E": "[0, 1, 2, 3, 4]"
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "A List Comprehension é uma forma concisa de criar listas. `range(5)` gera [0, 1, 2, 3, 4]. A expressão `x**2` eleva cada número ao quadrado: 0^2=0, 1^2=1, 2^2=4, 3^2=9, 4^2=16.",
      "puloDoGato": "Python usa `**` para potência, não `^`. O range(n) para em n-1.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria x*2.",
        "D": "Correta. Cálculo correto dos quadrados.",
        "C": "Incorreta. Range(5) começa no 0, não no 1.",
        "E": "Incorreta. Isso seria apenas o range convertido em lista.",
        "A": "Incorreta. Range começa em 0 e para em 4."
      },
      "dicaDeOuro": "Pythonic Way = Use comprehensions para código limpo e performático!"
    }
  },
  {
    "id": "q_engsw_b3_021",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "Java - JVM e Garbage Collection",
    "difficulty": "Médio",
    "statement": "O Garbage Collector (Coletor de Lixo) do Java tem como função principal:",
    "options": {
      "A": "Remover vírus e malwares do servidor.",
      "B": "Gerenciar automaticamente a memória, liberando objetos que não possuem mais referências ativas no programa.",
      "C": "Otimizar o uso da placa de rede.",
      "D": "Identificar trechos de código com erros de sintaxe.",
      "E": "Deletar arquivos temporários do sistema operacional."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Diferente de C/C++, onde o dev precisa dar 'free' ou 'delete', o Java faz isso sozinho. O GC monitora a Heap (memória de objetos) e limpa o que ninguém mais usa, evitando o famoso 'Memory Leak'.",
      "puloDoGato": "Você pode sugerir ao Java que rode o GC com `System.gc()`, mas o comando é apenas uma dica, a JVM decide quando é a melhor hora.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele limpa a memória RAM do processo Java, não o disco.",
        "B": "Correta. Automação de gestão de memória.",
        "C": "Incorreta. Isso é papel do compilador ou IDE.",
        "D": "Incorreta. Não tem relação.",
        "E": "Incorreta. Função de antivírus."
      },
      "dicaDeOuro": "Garbage Collector = O zelador silencioso que limpa a bagunça da sua memória."
    }
  },
  {
    "id": "q_engsw_b3_022",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "JavaScript - Async/Await e Promises",
    "difficulty": "Médio",
    "statement": "Em JavaScript moderno, a palavra-chave 'await' é utilizada para:",
    "options": {
      "A": "Pausar a execução de uma função até que uma Promise seja resolvida, tornando o código assíncrono mais legível (estilo síncrono).",
      "B": "Declarar uma variável global que nunca muda.",
      "C": "Esconder erros no console.",
      "D": "Mandar o computador desligar em 10 minutos.",
      "E": "Criar uma interface gráfica."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Antigamente usávamos `.then().catch()`, o que gerava o 'Callback Hell'. Com Async/Await, o código fica limpo: `const data = await fetch(url)`. A função 'espera' o dado chegar sem travar o navegador.",
      "puloDoGato": "Para usar 'await', a função deve obrigatoriamente ser marcada com 'async'.",
      "cascasDeBanana": {
        "A": "Correta. Facilita o controle de fluxo assíncrono.",
        "B": "Incorreta. Piada de comando de sistema.",
        "C": "Incorreta. Isso seria 'const'.",
        "D": "Incorreta. Para erros usamos try/catch.",
        "E": "Incorreta. Não tem relação."
      },
      "dicaDeOuro": "Async/Await = Código que parece calmo (síncrono), mas é ligeiro (assíncrono)!"
    }
  },
  {
    "id": "q_engsw_b3_023",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Serverless - Function as a Service (FaaS)",
    "difficulty": "Médio",
    "statement": "O conceito de 'Serverless' (Sem Servidor) na computação em nuvem implica que:",
    "options": {
      "A": "Os dados são armazenados em papel.",
      "B": "O sistema roda apenas no computador pessoal do desenvolvedor.",
      "C": "A nuvem é gratuita para sempre.",
      "D": "Não existem servidores físicos envolvidos na execução.",
      "E": "O desenvolvedor não precisa gerenciar, configurar ou escalar servidores; ele apenas paga pelo tempo de execução do código acionado por eventos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Serverless NÃO significa que não há servidor (claro que há, na AWS/Azure/Google). Significa que a preocupação com o servidor é 'zero' para o dev. Você sobe uma função e ela escala sozinha para 1 ou 1 milhão de acessos.",
      "puloDoGato": "Exemplo: AWS Lambda. Você paga por milissegundos de execução. Se ninguém usa, você não paga nada.",
      "cascasDeBanana": {
        "D": "Incorreta. Servidores físicos sempre existem no data center.",
        "E": "Correta. Abstração total da infraestrutura.",
        "B": "Incorreta. Serverless é um conceito de nuvem.",
        "C": "Incorreta. Paga-se pelo uso (Pay-as-you-go).",
        "A": "Incorreta. Piada analógica."
      },
      "dicaDeOuro": "Serverless = Esqueça a máquina, foque no código!"
    }
  },
  {
    "id": "q_engsw_b3_024",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Infraestrutura como Código (IaC)",
    "difficulty": "Difícil",
    "statement": "Ferramentas como Terraform e Ansible são utilizadas para implementar 'Infraestrutura como Código' (IaC). Qual a principal vantagem dessa prática?",
    "options": {
      "A": "Escrever o manual de usuário do sistema em PDF.",
      "B": "Substituir todos os programadores por robôs de chat.",
      "C": "Aumentar o número de cliques manuais no painel da nuvem.",
      "D": "Permitir que a infraestrutura seja definida, versionada e provisionada automaticamente via arquivos de texto, garantindo repetibilidade e evitando erros manuais.",
      "E": "Obrigar o uso de cabos de rede coloridos."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Com IaC, se o seu servidor der problema, você não precisa 'lembrar' como configurou. Você roda o script e ele recria tudo idêntico em minutos. Além disso, você versiona sua infra no Git junto com o código do app.",
      "puloDoGato": "Terraform é Declarativo (O que eu quero). Ansible é Procedural/Imperativo (Como fazer - embora tenha módulos declarativos).",
      "cascasDeBanana": {
        "D": "Correta. Automação e consistência de ambientes.",
        "C": "Incorreta. O objetivo é ELIMINAR cliques manuais (ClickOps).",
        "A": "Incorreta. Documentação é importante, mas IaC é para provimento técnico.",
        "E": "Incorreta. Irrelevante.",
        "B": "Incorreta. IaC ajuda os programadores/SREs, não os substitui."
      },
      "dicaDeOuro": "IaC = Sua infraestrutura é tratada como código: Versionada, Testada e Automatizada!"
    }
  },
  {
    "id": "q_engsw_b3_025",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Observabilidade - Pilares",
    "difficulty": "Médio",
    "statement": "Na engenharia moderna de confiabilidade (SRE), a Observabilidade é composta por três pilares fundamentais, que são:",
    "options": {
      "A": "CPU, Memória, Disco.",
      "B": "Segurança, Backup e Replicação.",
      "C": "Nome, Email e Senha.",
      "D": "Logs, Métricas e Rastreamento (Tracing).",
      "E": "HTML, CSS e JS."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Logs: O que aconteceu (texto). Métricas: Como o sistema está (números, ex: 80% de CPU). Tracing: Por onde a requisição passou (caminho entre microserviços). Juntos, permitem entender POR QUE algo falhou.",
      "puloDoGato": "Monitoramento diz 'O sistema caiu'. Observabilidade diz 'Por que o sistema caiu e onde está o gargalo'.",
      "cascasDeBanana": {
        "A": "Incorreta. São recursos monitorados, não os pilares da observabilidade.",
        "D": "Correta. O 'Golden Triangle' da observabilidade.",
        "B": "Incorreta. São práticas de disponibilidade e segurança.",
        "C": "Incorreta. Dados cadastrais.",
        "E": "Incorreta. Tecnologias de Front-end."
      },
      "dicaDeOuro": "Observabilidade = Raio-X do seu sistema em produção."
    }
  },
  {
    "id": "q_engsw_b3_034",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Estratégias de Deployment - Blue-Green vs Canary",
    "difficulty": "Difícil",
    "statement": "Qual a principal diferença entre o deployment 'Blue-Green' e o deployment 'Canary'?",
    "options": {
      "A": "No Blue-Green, você alterna todo o tráfego de uma vez entre duas versões idênticas; no Canary, você libera a nova versão gradualmente para uma pequena parcela de usuários primeiro.",
      "B": "Blue-Green usa apenas servidores azuis, e Canary usa servidores amarelos.",
      "C": "Não há diferença, são nomes diferentes para a mesma técnica.",
      "D": "Canary é usado apenas para testes manuais, e Blue-Green para testes automatizados.",
      "E": "Blue-Green é mais lento que o Canary em todos os casos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Blue-Green foca em Zero Downtime e Rollback rápido (você tem dois ambientes prontos). Canary foca em Redução de Risco (testa em 5% dos usuários para ver se não explode, antes de mandar para o resto).",
      "puloDoGato": "Canary (Canário na mina) = Alarme antecipado. Se o canário 'morrer' (erro), você para o deploy antes de afetar todos.",
      "cascasDeBanana": {
        "B": "Incorreta. Nomes são metafóricos.",
        "A": "Correta. Diferença clara de estratégia de roteamento de tráfego.",
        "D": "Incorreta. Ambos podem e devem ser automatizados.",
        "E": "Incorreta. Blue-green pode ser instantâneo na virada do router.",
        "C": "Incorreta. São abordagens distintas de gerenciamento de risco."
      },
      "dicaDeOuro": "Blue-Green = Troca a chave de uma vez. Canary = Abre a torneira aos poucos."
    }
  },
  {
    "id": "q_engsw_b3_035",
    "cargo": [
      "Ciência de Dados",
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 3,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Armazenamento - Object Storage vs Block Storage",
    "difficulty": "Médio",
    "statement": "Para armazenar grandes volumes de dados não estruturados (fotos, vídeos, backups) de forma escalável e com acesso via HTTP, a melhor opção na nuvem é:",
    "options": {
      "A": "Object Storage (S3 / Azure Blob Storage).",
      "B": "Fita magnética local.",
      "C": "Block Storage (EBS / Discos Rígidos virtuais).",
      "D": "Memória RAM volátil.",
      "E": "Registradores da CPU."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Object Storage é feito para a Web. Você acessa via URL, não precisa 'montar' um disco no sistema operacional. É virtualmente infinito e muito mais barato para arquivos grandes que o Block Storage.",
      "puloDoGato": "Precisa instalar um banco de dados ou SO? Use Block Storage (EBS). Precisa guardar 1 milhão de PDFs? Use Object Storage (S3).",
      "cascasDeBanana": {
        "C": "Incorreta. Block storage é para baixa latência e sistemas de arquivos montados.",
        "A": "Correta. Escalabilidade horizontal massiva para arquivos.",
        "D": "Incorreta. Muito caro e perde os dados ao desligar.",
        "B": "Incorreta. Lento e difícil de automatizar em escala de nuvem moderna.",
        "E": "Incorreta. Nonsense."
      },
      "dicaDeOuro": "S3 = O armário infinito da internet."
    }
  },
  {
    "id": "q_engsw_b3_038",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "Java - Herança vs Composição",
    "difficulty": "Médio",
    "statement": "Na Programação Orientada a Objetos, a boa prática de 'Preferir Composição à Herança' visa:",
    "options": {
      "A": "Eliminar o uso de interfaces.",
      "B": "Promover a flexibilidade e facilitar a manutenção, criando objetos complexos através da combinação de objetos simples em vez de criar hierarquias rígidas.",
      "C": "Tornar o código mais lento.",
      "D": "Garantir que todas as classes herdem de pelo menos 10 pais.",
      "E": "Aumentar o acoplamento entre as classes."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Herança cria uma relação 'É UM' (rígida). Composição cria uma relação 'TEM UM' (flexível). Com composição, você pode trocar o comportamento de um objeto em tempo de execução mudando sua instância interna, o que é impossível com herança.",
      "puloDoGato": "Hierarquias de herança muito profundas tornam o código frágil: uma mudança no 'avô' pode quebrar todos os 'netos'.",
      "cascasDeBanana": {
        "A": "Incorreta. O objetivo é DIMINUIR o acoplamento.",
        "B": "Correta. Princípio de design flexível.",
        "C": "Incorreta. Java nem permite herança múltipla de classes.",
        "D": "Incorreta. Composição anda de mãos dadas com interfaces.",
        "E": "Incorreta. O overhead é desprezível perto do ganho de manutenção."
      },
      "dicaDeOuro": "Composição = Peças de LEGO que se encaixam e trocam. Herança = Tatuagem que não sai."
    }
  },
  {
    "id": "q_engsw_b3_039",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "Python - Generators (yield)",
    "difficulty": "Médio",
    "statement": "Em Python, qual a vantagem de utilizar um 'Generator' (função com a palavra-chave 'yield') em vez de uma função que retorna uma lista comum?",
    "options": {
      "A": "O Generator é mais colorido no editor de texto.",
      "B": "O Generator impede que o código tenha bugs.",
      "C": "O Generator só funciona em versões antigas do Python.",
      "D": "O Generator economiza memória, pois gera os itens um de cada vez sob demanda (Lazy Evaluation) em vez de carregar tudo na RAM de uma vez.",
      "E": "Não há vantagem técnica."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você precisa processar 1 bilhão de linhas de um arquivo, uma lista comum vai tentar carregar tudo e dar 'OutOfMemory'. O Generator lê uma linha, te entrega, 'pausa', e só lê a próxima quando você pedir. Memória constante!",
      "puloDoGato": "Yield = 'Toma aqui o valor e me avisa quando quiser o próximo'. A função mantém o seu estado entre as chamadas.",
      "cascasDeBanana": {
        "A": "Incorreta. Irrelevante.",
        "D": "Correta. Eficiência de recursos (Lazy Evaluation).",
        "B": "Incorreta. Lógica errada continua sendo erro com ou sem yield.",
        "C": "Incorreta. É uma feature moderna e muito usada.",
        "E": "Incorreta. A economia de RAM é massiva."
      },
      "dicaDeOuro": "Generator = Conta-gotas. Lista = Balde de água."
    }
  },
  {
    "id": "q_engsw_b3_040",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "discipline": "Linguagens de Programação",
    "topic": "JavaScript - Closures",
    "difficulty": "Difícil",
    "statement": "O que define um 'Closure' em JavaScript?",
    "options": {
      "A": "É o nome de uma biblioteca famosa para animações.",
      "B": "É quando você fecha a aba do navegador.",
      "C": "É a capacidade de uma função interna acessar o escopo de uma função externa, mesmo após a função externa ter terminado sua execução.",
      "D": "É um erro que ocorre quando falta uma chave '}' no código.",
      "E": "É um comando para deletar variáveis da memória."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Closures permitem criar 'variáveis privadas' em JS. A função interna 'lembra' do ambiente onde foi criada. Isso é muito usado em padrões de fábrica (factory functions) e módulos.",
      "puloDoGato": "JS cria um closure toda vez que uma função é criada dentro de outra. É um conceito de escopo léxico.",
      "cascasDeBanana": {
        "B": "Incorreta. Piada de usuário.",
        "C": "Correta. Característica poderosa da linguagem.",
        "D": "Incorreta. Isso é Syntax Error.",
        "E": "Incorreta. O closure na verdade pode MANTER variáveis na memória por mais tempo.",
        "A": "Incorreta. Termo técnico da linguagem."
      },
      "dicaDeOuro": "Closure = A função carrega a sua mochila de variáveis de onde nasceu."
    }
  },
  {
    "id": "q_f3_030",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Linguagens de Programação",
    "topic": "Python - Tratamento de Exceções",
    "difficulty": "Fácil",
    "statement": "Em Python, qual bloco de código é garantido de ser executado, independentemente de ter ocorrido uma exceção ou não no bloco 'try'?",
    "options": {
      "A": "throw",
      "B": "catch",
      "C": "except",
      "D": "else",
      "E": "finally"
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O 'finally' é o cara da limpeza. Se deu erro ou se deu tudo certo, ele roda do mesmo jeito. Ideal para fechar arquivos ou conexões com banco de dados que não podem ficar abertos.",
      "puloDoGato": "try (tente) -> except (se deu erro) -> else (se NÃO deu erro) -> finally (sempre!).",
      "cascasDeBanana": {
        "C": "Incorreta. Só roda se houver erro.",
        "D": "Incorreta. Só roda se NÃO houver erro.",
        "E": "Correta. Garantia de execução.",
        "B": "Incorreta. 'catch' é usado em Java/C#, não em Python.",
        "A": "Incorreta. 'throw' (ou raise) serve para disparar o erro, não tratar."
      },
      "dicaDeOuro": "Precisa fechar o arquivo de qualquer jeito? Use 'finally'."
    }
  },
  {
    "id": "q_f3_044",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX Design - Heurísticas de Nielsen (Visibilidade do Status)",
    "difficulty": "Médio",
    "statement": "Qual das situações abaixo aplica corretamente a primeira Heurística de Nielsen: 'Visibilidade do Status do Sistema'?",
    "options": {
      "A": "Abrir o site sempre em modo tela cheia sem pedir permissão.",
      "B": "Usar apenas ícones sem texto para economizar espaço.",
      "C": "Pedir a senha do usuário a cada 5 minutos por segurança.",
      "D": "Exibir uma barra de progresso ou um ícone de carregamento (spinner) enquanto o sistema processa um arquivo grande.",
      "E": "Esconder o menu lateral para deixar a tela limpa."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O usuário nunca deve se perguntar: 'Será que travou?'. O sistema deve sempre dar um feedback do que está acontecendo. Se está salvando, mostre 'Salvando...'. Isso reduz a ansiedade do usuário.",
      "puloDoGato": "Visibilidade do Status = Feedback constante para o usuário não ficar perdido.",
      "cascasDeBanana": {
        "E": "Incorreta. Pode ferir a usabilidade se o usuário não souber onde está.",
        "D": "Correta. Exemplo clássico de feedback de status.",
        "B": "Incorreta. Pode gerar ambiguidade.",
        "A": "Incorreta. Falta de controle do usuário.",
        "C": "Incorreta. Irritante e desnecessário."
      },
      "dicaDeOuro": "Sempre diga ao usuário o que o sistema está fazendo 'agora'."
    }
  },
  {
    "id": "q_f3_045",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX Design - Personas",
    "difficulty": "Fácil",
    "statement": "No design centrado no usuário, o que é uma 'Persona'?",
    "options": {
      "A": "Uma linguagem de programação usada para criar interfaces.",
      "B": "Um arquétipo fictício mas baseado em dados reais que representa um grupo de usuários do sistema, ajudando o time a entender necessidades e comportamentos.",
      "C": "O cargo do desenvolvedor sênior do projeto.",
      "D": "Uma foto aleatória da internet usada no slide de apresentação.",
      "E": "O nome do servidor onde o site está hospedado."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Em vez de dizer 'nossos usuários são pessoas de 20 a 50 anos', você cria a 'Maria, 35 anos, contadora, que tem pouco tempo e odeia formulários longos'. Isso humaniza o desenvolvimento e ajuda a tomar decisões de design focadas em problemas reais.",
      "puloDoGato": "Persona = Personificação do Público-alvo baseada em pesquisa.",
      "cascasDeBanana": {
        "A": "Incorreta. Infraestrutura.",
        "B": "Correta. Ferramenta fundamental de UX.",
        "C": "Incorreta. Personas precisam de embasamento, não são aleatórias.",
        "D": "Incorreta. Confusão de termos.",
        "E": "Incorreta. Linguagens são ferramentas técnicas."
      },
      "dicaDeOuro": "Projete para a 'Maria', não para o 'Usuário Genérico'."
    }
  },
  {
    "id": "q_f3_046",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UI Design - Contraste e Acessibilidade",
    "difficulty": "Fácil",
    "statement": "Por que garantir um alto contraste entre a cor do texto e a cor do fundo é uma prática essencial de acessibilidade (WCAG)?",
    "options": {
      "A": "Para o site carregar mais rápido no celular.",
      "B": "Para economizar a bateria do monitor do usuário.",
      "C": "Para deixar o site mais colorido e alegre.",
      "D": "Para permitir que pessoas com baixa visão ou daltonismo consigam ler o conteúdo sem dificuldade.",
      "E": "Para impedir que robôs leiam o site."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você coloca um texto cinza claro num fundo branco, muita gente não vai conseguir ler. Existem níveis (AA, AAA) de contraste mínimo exigidos por lei e por boas práticas para garantir que o software seja inclusivo.",
      "puloDoGato": "Acessibilidade não é opcional, é direito. Contraste alto é o básico do básico.",
      "cascasDeBanana": {
        "C": "Incorreta. Estética é secundária à função.",
        "D": "Correta. Foco total em inclusão e legibilidade.",
        "A": "Incorreta. Não afeta o tempo de carregamento.",
        "B": "Incorreta. Efeito desprezível (exceto em telas OLED com fundos pretos puros).",
        "E": "Incorreta. Robôs (como leitores de tela) precisam justamente dessa clareza."
      },
      "dicaDeOuro": "Na dúvida? Texto preto no fundo branco nunca falha."
    }
  },
  {
    "id": "q_f3_050",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Níveis de Teste - Teste de Unidade (Unit Test)",
    "difficulty": "Fácil",
    "statement": "Qual a principal característica de um Teste de Unidade?",
    "options": {
      "A": "Verificar se o banco de dados suporta 1 milhão de conexões simultâneas.",
      "B": "Testar o sistema inteiro simulando o usuário final clicando no navegador.",
      "C": "Garantir que o layout do site esteja bonito no iPhone.",
      "D": "Testar a integração entre o backend e o frontend.",
      "E": "Testar a menor parte testável de um software de forma isolada (ex: uma única função ou método), geralmente usando mocks para dependências externas."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Teste de unidade é cirúrgico. Você quer saber se a função 'calcularDesconto' está fazendo a conta certa. Você não quer saber se o banco de dados está funcionando ou se a API caiu. É rápido e deve rodar aos milhares em segundos.",
      "puloDoGato": "Unidade = Isolamento. Se o teste falhar, você sabe exatamente em qual linha de código está o problema.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é Teste de Ponta a Ponta (E2E) ou UI.",
        "E": "Correta. Foco no componente isolado.",
        "A": "Incorreta. Isso é Teste de Carga/Performance.",
        "C": "Incorreta. Isso é Teste de Usabilidade/Cross-browser.",
        "D": "Incorreta. Isso é Teste de Integração."
      },
      "dicaDeOuro": "Teste de Unidade: Rápido, Pequeno e Isolado."
    }
  },
  {
    "id": "q_f3_051",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Técnicas de Teste - Caixa-Preta vs Caixa-Branca",
    "difficulty": "Médio",
    "statement": "O que define um 'Teste de Caixa-Branca' (White-Box Testing)?",
    "options": {
      "A": "O teste é feito apenas por robôs, sem intervenção humana.",
      "B": "O teste é feito usando apenas papel e caneta.",
      "C": "O teste é feito apenas em salas com paredes brancas para evitar distrações.",
      "D": "O testador não tem acesso ao código-fonte e testa apenas as entradas e saídas (funcionalidades).",
      "E": "O testador tem pleno conhecimento da estrutura interna, lógica e código do software, focando em testar caminhos, fluxos de decisão e condições."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Caixa-Preta: Você é o usuário. Você digita algo e vê se saiu o que esperava. Caixa-Branca: Você é o desenvolvedor. Você olha o 'if/else' e garante que todos os caminhos possíveis do código foram executados.",
      "puloDoGato": "Caixa-Branca = Teste Estrutural. Caixa-Preta = Teste Funcional.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é a definição de Caixa-Preta.",
        "E": "Correta. Foco na lógica interna.",
        "C": "Incorreta. Absurdo.",
        "B": "Incorreta. Testes de mesa podem ser caixa-branca, mas a definição é sobre o conhecimento do código.",
        "A": "Incorreta. Ambos podem ser automatizados."
      },
      "dicaDeOuro": "Caixa-Branca: Eu vejo as entranhas do código."
    }
  },
  {
    "id": "q_f3_052",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Conceitos - Teste de Regressão",
    "difficulty": "Médio",
    "statement": "Qual a finalidade de um 'Teste de Regressão'?",
    "options": {
      "A": "Tentar voltar o sistema para uma versão de 10 anos atrás.",
      "B": "Testar uma funcionalidade nova que acabou de ser criada.",
      "C": "Testar se o sistema funciona em computadores antigos.",
      "D": "Garantir que alterações recentes no código (como correções de bugs ou novas features) não quebraram funcionalidades que já estavam funcionando anteriormente.",
      "E": "Verificar se o código segue as normas da ABNT."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Sabe quando você conserta uma goteira na cozinha e estoura um cano no banheiro? O teste de regressão serve para evitar isso no software. Ele roda o 'velho' para garantir que o 'novo' não estragou nada.",
      "puloDoGato": "Regressão = Nada de dar passos para trás. Automatizar isso é a chave para entregas rápidas (CI/CD).",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é teste funcional de nova feature.",
        "D": "Correta. Protege o legado contra efeitos colaterais.",
        "A": "Incorreta. Confusão com controle de versão.",
        "C": "Incorreta. Isso seria teste de compatibilidade.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Consertou um bug? Rode a regressão para não criar dois novos."
    }
  },
  {
    "id": "q_f3_091",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Modelos de Serviço - IaaS, PaaS, SaaS",
    "difficulty": "Fácil",
    "statement": "Qual modelo de serviço de nuvem oferece ao usuário o maior nível de controle sobre a infraestrutura, permitindo a gestão de sistemas operacionais e middleware?",
    "options": {
      "A": "SaaS (Software as a Service)",
      "B": "FaaS (Function as a Service)",
      "C": "IaaS (Infrastructure as a Service)",
      "D": "DaaS (Database as a Service)",
      "E": "PaaS (Platform as a Service)"
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "IaaS é como alugar um computador vazio (VM). Você manda em tudo: instala o Linux que quiser, o banco de dados que quiser. O provedor só cuida do hardware físico e da rede.",
      "puloDoGato": "IaaS = Controle Máximo / Responsabilidade Máxima.",
      "cascasDeBanana": {
        "A": "Incorreta. No SaaS você só usa o software (ex: Gmail).",
        "B": "Incorreta. No PaaS você foca no código, o provedor cuida do OS.",
        "C": "Correta. IaaS fornece os recursos fundamentais de computação.",
        "D": "Incorreta. FaaS é Serverless (execução de funções curtas).",
        "E": "Incorreta. DaaS é focado apenas no banco de dados."
      },
      "dicaDeOuro": "IaaS: Você é o administrador do sistema."
    }
  },
  {
    "id": "q_f3_092",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Containers - Docker e Kubernetes",
    "difficulty": "Médio",
    "statement": "Qual a principal função do 'Kubernetes' em um ambiente de microserviços?",
    "options": {
      "A": "Monitorar a temperatura física do servidor.",
      "B": "Substituir a necessidade de usar o Docker.",
      "C": "Criar o código-fonte da aplicação automaticamente.",
      "D": "Orquestrar a implantação, o dimensionamento (scaling) e a gestão de containers de forma automatizada.",
      "E": "Criptografar os e-mails dos desenvolvedores."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se você tem 1 container, o Docker resolve. Se você tem 500 containers rodando em 50 servidores diferentes, você precisa de um 'maestro'. O Kubernetes (K8s) garante que se um container cair, outro suba no lugar automaticamente.",
      "puloDoGato": "Kubernetes = Orquestrador de Containers.",
      "cascasDeBanana": {
        "C": "Incorreta. Ele gere o código já empacotado, não escreve código.",
        "D": "Correta. Definição da categoria de ferramenta.",
        "B": "Incorreta. Ele geralmente trabalha JUNTO com containers (como Docker ou containerd).",
        "A": "Incorreta. Isso é tarefa de hardware monitoring/Zabbix.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Kubernetes: O capitão do navio de containers."
    }
  },
  {
    "id": "q_f3_093",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "CI/CD - Pipeline de Entrega Contínua",
    "difficulty": "Médio",
    "statement": "No contexto de DevOps, qual o objetivo principal da 'Entrega Contínua' (Continuous Delivery)?",
    "options": {
      "A": "Deletar o banco de dados de teste toda sexta-feira.",
      "B": "Impedir que os desenvolvedores façam commits após as 18h.",
      "C": "Aumentar o número de reuniões diárias.",
      "D": "Instalar o Windows nos computadores da empresa.",
      "E": "Garantir que o código esteja sempre em um estado pronto para ser implantado em produção a qualquer momento."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Continuous Delivery significa que, após passar por todos os testes automáticos, o software está 'cheiroso' e pronto. Ele só não vai para a mão do cliente final se alguém (o humano) não apertar o botão.",
      "puloDoGato": "CD (Continuous Delivery) = Pronto para deploy. CD (Continuous Deployment) = Deploy Automático sem humano.",
      "cascasDeBanana": {
        "E": "Correta. Foca na confiabilidade do release.",
        "D": "Incorreta. DevOps não é suporte técnico de desktop.",
        "A": "Incorreta. Limpeza de ambiente pode ocorrer, mas não é o objetivo do CD.",
        "B": "Incorreta. DevOps incentiva a agilidade em qualquer horário.",
        "C": "Incorreta. DevOps busca automação para diminuir burocracia."
      },
      "dicaDeOuro": "Continuous Delivery: O código está pronto para o combate."
    }
  },
  {
    "id": "q_f3_094",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Infraestrutura como Código (IaC) - Terraform",
    "difficulty": "Difícil",
    "statement": "Qual a vantagem de utilizar ferramentas de 'Infraestrutura como Código' (IaC) como Terraform ou Ansible?",
    "options": {
      "A": "Torna a internet 50% mais rápida para os usuários.",
      "B": "Permite definir a infraestrutura via arquivos de configuração, garantindo reprodutibilidade, versionamento e eliminação de erros manuais.",
      "C": "Permite criar servidores apenas clicando em botões coloridos no console web.",
      "D": "Escreve a documentação do projeto em Word automaticamente.",
      "E": "Substitui a necessidade de ter uma conta na nuvem (AWS/Azure)."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Em vez de entrar no site da AWS e sair clicando para criar um banco de dados (o que ninguém lembra como repetiu depois), você escreve um arquivo de texto. Se precisar de outro banco igual, é só rodar o arquivo de novo. É o fim do 'configuração manual na base da sorte'.",
      "puloDoGato": "IaC = Versionar sua infraestrutura no Git como se fosse código.",
      "cascasDeBanana": {
        "A": "Incorreta. IaC é justamente o CONTRÁRIO de ficar clicando no console.",
        "B": "Correta. Valor central do DevOps moderno.",
        "C": "Incorreta. Afeta o gerenciamento, não a velocidade física da rede.",
        "D": "Incorreta. Você ainda precisa do provedor de nuvem para hospedar os recursos.",
        "E": "Incorreta. Gera documentação técnica de infra, mas não arquivos Word genéricos."
      },
      "dicaDeOuro": "Terraform: Descreva sua infra e rode o comando."
    }
  },
  {
    "id": "q_f3_095",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Conceitos - Elasticidade vs Escalabilidade",
    "difficulty": "Médio",
    "statement": "No contexto de Cloud Computing, qual a definição correta de 'Elasticidade'?",
    "options": {
      "A": "A capacidade do sistema de aumentar ou diminuir recursos automaticamente em resposta à demanda em tempo real.",
      "B": "O tempo que o servidor leva para reiniciar após uma queda de energia.",
      "C": "A capacidade de rodar o sistema em computadores muito antigos.",
      "D": "A facilidade de mudar a cor da interface do sistema.",
      "E": "A capacidade do cabo de rede de se esticar."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Escalabilidade é o sistema AGUENTAR crescer. Elasticidade é ele CRESCER E DIMINUIR sozinho. Se tem muito acesso ao meio-dia, ele sobe 10 servidores. Se à meia-noite não tem ninguém, ele desliga 9 para economizar dinheiro.",
      "puloDoGato": "Elasticidade = Ajuste Automático e Dinâmico. Pense em um elástico: estica e volta.",
      "cascasDeBanana": {
        "E": "Incorreta. Sentido literal físico errado.",
        "A": "Correta. Conceito chave de economia em nuvem (Pay-as-you-go).",
        "C": "Incorreta. Isso seria retrocompatibilidade.",
        "B": "Incorreta. Isso seria métrica de disponibilidade/RTO.",
        "D": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Elasticidade = Economia (usar só o que precisa)."
    }
  },
  {
    "id": "q_f3_096",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Segurança na Nuvem - Shared Responsibility Model",
    "difficulty": "Médio",
    "statement": "No 'Modelo de Responsabilidade Compartilhada' dos provedores de nuvem (AWS, Azure, GCP), de quem é a responsabilidade pela segurança dos DADOS do cliente?",
    "options": {
      "A": "Ninguém é responsável, a nuvem é segura por natureza.",
      "B": "Integralmente do provedor de nuvem.",
      "C": "Do fabricante do sistema operacional apenas.",
      "D": "Integralmente do cliente.",
      "E": "Da operadora de internet local."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "O provedor cuida da 'Segurança DA nuvem' (cabos, prédios, hipervisor). O cliente cuida da 'Segurança NA nuvem' (criptografia dos dados, senhas, firewalls da aplicação). Se você deixar seu banco de dados aberto para a internet com senha '123', a culpa é sua, não da Amazon.",
      "puloDoGato": "Data Security = Customer Responsibility. Sempre.",
      "cascasDeBanana": {
        "B": "Incorreta. O provedor não tem acesso aos seus dados privados.",
        "D": "Correta. Regra de ouro da segurança em nuvem.",
        "C": "Incorreta. OS é apenas uma camada.",
        "E": "Incorreta. ISP apenas transporta os pacotes.",
        "A": "Incorreta. Visão perigosa e falsa."
      },
      "dicaDeOuro": "O provedor tranca a porta do prédio, você tranca a porta do seu cofre."
    }
  },
  {
    "id": "q_f3_097",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Estratégias de Migração - 6 R's",
    "difficulty": "Difícil",
    "statement": "Na estratégia de migração para nuvem conhecida como 'Replatforming' (também chamada de Lift-and-Reshape), o que acontece com a aplicação?",
    "options": {
      "A": "A aplicação é deletada e substituída por um software de prateleira (SaaS).",
      "B": "A aplicação é convertida de Java para Python automaticamente.",
      "C": "A aplicação é mantida no servidor físico local para sempre.",
      "D": "A aplicação é totalmente reescrita do zero usando tecnologias nativas da nuvem.",
      "E": "A aplicação é movida para a nuvem com pouquíssimas alterações, mas aproveitando alguns serviços gerenciados (ex: trocar o banco de dados manual por um RDS)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Replatforming é o 'meio-termo'. Você não muda o código principal (como no Refactoring), mas faz ajustes para rodar melhor na nuvem, como trocar um servidor de arquivos manual por um bucket S3. É o famoso 'ajuste fino' na hora de subir.",
      "puloDoGato": "Replatforming = Lift and Reshape (Ajustes leves para otimização).",
      "cascasDeBanana": {
        "D": "Incorreta. Isso seria Refactoring ou Rearchitecting.",
        "E": "Correta. Estratégia comum para ganhar agilidade sem reescrever tudo.",
        "A": "Incorreta. Isso seria Repurchasing.",
        "C": "Incorreta. Isso seria Retain (não migrar).",
        "B": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Replatform: Mesma aplicação, novos serviços de apoio."
    }
  },
  {
    "id": "q_f3_098",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Monitoramento - Observabilidade (Logs, Metrics, Traces)",
    "difficulty": "Médio",
    "statement": "Quais são os 'Três Pilares da Observabilidade' em sistemas distribuídos?",
    "options": {
      "A": "Logs, Métricas e Traços (Traces).",
      "B": "CPU, Memória e Disco.",
      "C": "Backup, Restore e Disaster Recovery.",
      "D": "Java, Python e JavaScript.",
      "E": "Desenvolvedor, Gestor e Cliente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Observabilidade não é só saber se o site tá no ar. Logs: O que aconteceu (texto). Métricas: Como está a saúde (números/gráficos). Traces: Por onde o pedido passou (fluxo entre microserviços).",
      "puloDoGato": "Logs + Metrics + Traces = Observabilidade Total.",
      "cascasDeBanana": {
        "B": "Incorreta. Esses são recursos de hardware, monitoramento básico.",
        "A": "Correta. Essencial para depurar erros em arquiteturas complexas.",
        "D": "Incorreta. São linguagens de programação.",
        "E": "Incorreta. São stakeholders.",
        "C": "Incorreta. São estratégias de continuidade de negócio."
      },
      "dicaDeOuro": "Logs (o que), Métricas (quanto), Traces (onde)."
    }
  },
  {
    "id": "q_f3_099",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Ciência de Dados"
    ],
    "block": 1,
    "discipline": "Computação em Nuvem e DevOps",
    "topic": "Serverless Computing",
    "difficulty": "Médio",
    "statement": "Qual a principal característica do modelo 'Serverless' (como AWS Lambda ou Azure Functions)?",
    "options": {
      "A": "O código roda exclusivamente no navegador do cliente.",
      "B": "Não existem servidores envolvidos na execução do código em nenhum lugar do mundo.",
      "C": "Só funciona se o computador estiver desligado.",
      "D": "O servidor é gratuito para sempre.",
      "E": "O desenvolvedor não precisa gerenciar, configurar ou escalar servidores; ele apenas sobe o código e paga apenas pelo tempo de execução."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "O nome 'Serverless' é uma mentira: claro que tem servidor. Mas você, desenvolvedor, não vê. Você não escolhe se o Windows é 10 ou 11. Você só dá o código e a nuvem se vira para rodar. Se ninguém usar, você paga R$ 0,00.",
      "puloDoGato": "Serverless = Zero Server Management + Pay-per-execution.",
      "cascasDeBanana": {
        "B": "Incorreta. Existem servidores, eles só são abstraídos do usuário.",
        "E": "Correta. Grande vantagem de custo e agilidade.",
        "D": "Incorreta. É barato, mas tem custo por milhão de execuções.",
        "C": "Incorreta. Absurdo.",
        "A": "Incorreta. Roda no backend (nuvem)."
      },
      "dicaDeOuro": "Serverless: Foque no código, esqueça a infra."
    }
  },
  {
    "id": "q_f3_100",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrões - Camadas (Layered Architecture)",
    "difficulty": "Fácil",
    "statement": "Em uma arquitetura clássica em 3 camadas, qual a responsabilidade principal da 'Camada de Persistência' (ou Acesso a Dados)?",
    "options": {
      "A": "Realizar cálculos complexos de regras de negócio.",
      "B": "Validar se o e-mail do usuário tem o símbolo '@'.",
      "C": "Gerenciar a comunicação com o banco de dados para salvar e recuperar informações.",
      "D": "Exibir o menu de navegação para o usuário.",
      "E": "Garantir que as cores do site combinem."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "É a camada que 'suja a mão' de SQL. Ela traduz os objetos do seu código para as tabelas do banco e vice-versa. O resto do sistema nem quer saber se o banco é Oracle ou MySQL, essa camada resolve isso.",
      "puloDoGato": "Persistência = Falar com o Banco de Dados.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é a Camada de Apresentação.",
        "B": "Incorreta. Isso é a Camada de Negócio (Business/Service Layer).",
        "C": "Correta. Padrão fundamental para separar responsabilidades.",
        "D": "Incorreta. Validação básica pode ocorrer na apresentação ou no negócio.",
        "E": "Incorreta. Isso é design de UI."
      },
      "dicaDeOuro": "Arquitetura em camadas: cada um no seu quadrado."
    }
  },
  {
    "id": "q_f3_101",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Microserviços - API Gateway",
    "difficulty": "Médio",
    "statement": "Qual a função de um 'API Gateway' em uma arquitetura de microserviços?",
    "options": {
      "A": "Transformar o sistema em um aplicativo de celular automaticamente.",
      "B": "Acelerar a velocidade de download de arquivos grandes.",
      "C": "Substituir todos os bancos de dados por um único arquivo Excel.",
      "D": "Atuar como um ponto de entrada único para as requisições dos clientes, realizando roteamento, autenticação e monitoramento.",
      "E": "Impedir que os desenvolvedores criem mais de 3 microserviços."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Imagine que você tem 50 microserviços. Você não vai dar 50 endereços diferentes para o aplicativo do cliente. O cliente fala com o Gateway, e o Gateway sabe quem é o responsável por 'Carrinho', 'Login' ou 'Produtos'. Além disso, ele já barra quem não tem senha certa logo ali na entrada.",
      "puloDoGato": "API Gateway = Porteiro + Roteador dos Microserviços.",
      "cascasDeBanana": {
        "C": "Incorreta. Microserviços prezam por bancos de dados independentes.",
        "D": "Correta. Facilita a gestão e a segurança do ecossistema.",
        "B": "Incorreta. Pode até adicionar um tiquinho de latência, mas o ganho é organizacional.",
        "E": "Incorreta. Não há limite técnico imposto pelo Gateway.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Muitos serviços? Você precisa de um API Gateway."
    }
  },
  {
    "id": "q_f3_102",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Arquitetura de Aplicações",
    "topic": "Padrão Event-Driven - Pub/Sub",
    "difficulty": "Difícil",
    "statement": "Em uma arquitetura baseada em eventos (Event-Driven) utilizando o padrão Publisher/Subscriber (Pub/Sub), qual a principal característica do acoplamento entre os componentes?",
    "options": {
      "A": "O acoplamento é forte, pois o Publisher precisa saber o endereço IP de todos os Subscribers.",
      "B": "Os componentes precisam ser escritos na mesma linguagem de programação.",
      "C": "O sistema para de funcionar se o subscriber estiver offline no momento do envio.",
      "D": "As mensagens só podem ser lidas uma única vez por um único subscriber.",
      "E": "O acoplamento é fraco (desacoplado), pois o Publisher envia a mensagem para um canal (tópico) sem saber quem irá consumi-la."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É como uma rádio. A rádio (Publisher) toca a música. Ela não sabe se tem 1 ou 1 milhão de pessoas ouvindo. Se você ligar o rádio (Subscriber) depois, você ouve. Isso permite que você adicione novas funcionalidades ao sistema sem precisar mexer no código que gera o evento.",
      "puloDoGato": "Pub/Sub = Desacoplamento Temporal e Espacial. O emissor não conhece o receptor.",
      "cascasDeBanana": {
        "A": "Incorreta. Seria acoplamento direto (RPC/HTTP simples).",
        "E": "Correta. Vantagem principal para escalabilidade e manutenção.",
        "B": "Incorreta. Funciona entre sistemas heterogêneos via protocolos como AMQP ou JSON.",
        "D": "Incorreta. No Pub/Sub, vários subscribers podem ler a mesma mensagem no tópico.",
        "C": "Incorreta. Brokers de mensagem costumam persistir os dados até o consumo (dependendo da config)."
      },
      "dicaDeOuro": "Quer um sistema que aguenta crescer? Desacople com eventos."
    }
  },
  {
    "id": "q_f3_103",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Heurísticas de Nielsen",
    "difficulty": "Médio",
    "statement": "A heurística de Nielsen chamada 'Visibilidade do Status do Sistema' afirma que:",
    "options": {
      "A": "O sistema deve sempre manter os usuários informados sobre o que está acontecendo, por meio de feedback apropriado dentro de um tempo razoável.",
      "B": "O sistema deve ser invisível para que o usuário não se distraia.",
      "C": "O sistema deve ter apenas uma página.",
      "D": "O sistema deve mostrar todos os logs de erro técnicos na tela principal.",
      "E": "O sistema deve falar o nome do usuário em voz alta a cada 5 minutos."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Sabe aquela barrinha de progresso ou o ícone de 'carregando'? Isso é Visibilidade do Status. Se o usuário clica num botão e nada acontece por 10 segundos, ele acha que quebrou. O sistema precisa dar um sinal de vida.",
      "puloDoGato": "Status do Sistema = Feedback constante para o usuário.",
      "cascasDeBanana": {
        "B": "Incorreta. O sistema deve ser transparente, mas não 'mudo'.",
        "A": "Correta. Regra número 1 de UX do Jakob Nielsen.",
        "D": "Incorreta. Feedback deve ser 'apropriado' (linguagem do usuário), não técnica.",
        "C": "Incorreta. Irrelevante para a heurística.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Nunca deixe o usuário na dúvida se o clique funcionou."
    }
  },
  {
    "id": "q_f3_104",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Design Centrado no Usuário (UCD)",
    "difficulty": "Fácil",
    "statement": "Qual é o foco principal do processo de Design Centrado no Usuário?",
    "options": {
      "A": "Seguir exatamente o que o dono da empresa quer, sem questionar.",
      "B": "Usar as tecnologias mais caras do mercado.",
      "C": "Envolver os usuários em todas as etapas do desenvolvimento para garantir que o produto atenda às suas necessidades, desejos e limitações.",
      "D": "Diminuir o custo de desenvolvimento a qualquer custo.",
      "E": "Criar o sistema o mais rápido possível, mesmo com erros."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Não adianta o sistema ser tecnicamente perfeito se ninguém consegue usar ou se ele não resolve o problema real da pessoa. No UCD, a gente testa, ouve o usuário, faz protótipo e ajusta antes de gastar meses codando a coisa errada.",
      "puloDoGato": "UCD = Empatia + Teste Real + Iteração.",
      "cascasDeBanana": {
        "D": "Incorreta. O UCD pode até ser mais caro no início, mas evita o desperdício de refazer tudo depois.",
        "C": "Correta. Definição da filosofia de design moderno.",
        "A": "Incorreta. O dono (stakeholder) é importante, mas o usuário final é o rei.",
        "B": "Incorreta. Tecnologia é ferramenta, não objetivo.",
        "E": "Incorreta. O UCD busca qualidade e utilidade."
      },
      "dicaDeOuro": "O usuário não é você. Pergunte para ele."
    }
  },
  {
    "id": "q_f3_105",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Engenharia de Requisitos - Requisitos Não-Funcionais",
    "difficulty": "Médio",
    "statement": "Qual das opções abaixo representa um exemplo clássico de Requisito Não-Funcional?",
    "options": {
      "A": "O sistema deve permitir que o usuário cadastre novos clientes.",
      "B": "O sistema deve processar qualquer transação de pagamento em menos de 2 segundos.",
      "C": "O sistema deve enviar um e-mail de boas-vindas após o registro.",
      "D": "O sistema deve emitir um relatório de vendas mensal em PDF.",
      "E": "O sistema deve ter um botão 'Excluir' na cor vermelha."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Requisito Funcional é O QUE o sistema faz (cadastrar, emitir, enviar). Requisito Não-Funcional é COMO o sistema se comporta (velocidade, segurança, disponibilidade, cor).",
      "puloDoGato": "Funcional = Ação/Feature. Não-Funcional = Qualidade/Atributo.",
      "cascasDeBanana": {
        "A": "Incorreta. É uma função (Funcional).",
        "D": "Incorreta. É uma função (Funcional).",
        "B": "Correta. Refere-se à Performance (Não-Funcional).",
        "C": "Incorreta. É uma função (Funcional).",
        "E": "Incorreta. Pode ser considerado funcional (UI design), mas a performance (item C) é o exemplo mais puro de NFR em concursos."
      },
      "dicaDeOuro": "Não-Funcionais: Desempenho, Segurança, Disponibilidade."
    }
  },
  {
    "id": "q_f3_106",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Prototipação (Wireframe vs Mockup)",
    "difficulty": "Médio",
    "statement": "Sobre as técnicas de prototipação, o que caracteriza um 'Wireframe'?",
    "options": {
      "A": "É a documentação técnica do banco de dados.",
      "B": "É o código HTML e CSS final da aplicação.",
      "C": "É um desenho de alta fidelidade, com cores, fontes e imagens finais.",
      "D": "É um esboço de baixa fidelidade que foca na estrutura, layout e fluxo da página, geralmente sem cores ou detalhes visuais.",
      "E": "É um vídeo de demonstração do sistema funcionando."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Wireframe é o 'esqueleto'. Serve para decidir onde fica o botão e onde fica o texto, sem perder tempo discutindo se o azul é claro ou escuro. É rápido de fazer e rápido de mudar.",
      "puloDoGato": "Wireframe = Estrutura (Cinza/Preto e Branco). Mockup = Estética (Cores/Design).",
      "cascasDeBanana": {
        "C": "Incorreta. Isso seria um Mockup ou Protótipo de Alta Fidelidade.",
        "D": "Correta. Essencial para validação rápida de arquitetura de informação.",
        "B": "Incorreta. Wireframe não envolve código produtivo.",
        "E": "Incorreta. Isso seria um screencast ou demo.",
        "A": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Wireframe: Desenho de 'palitinho' do seu site."
    }
  },
  {
    "id": "q_f3_107",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Teste de Usabilidade",
    "difficulty": "Médio",
    "statement": "Qual o principal objetivo de realizar um Teste de Usabilidade com usuários reais?",
    "options": {
      "A": "Identificar dificuldades, erros de interpretação e barreiras que impedem o usuário de completar tarefas no sistema.",
      "B": "Fazer o usuário se sentir mal por não saber usar o computador.",
      "C": "Convencer o usuário de que o design atual é o melhor possível.",
      "D": "Apenas cumprir uma etapa burocrática do projeto.",
      "E": "Descobrir se os usuários sabem programar em Python."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "A gente senta do lado do usuário (sem ajudar!) e observa onde ele clica e onde ele trava. Se 4 de 5 pessoas não acham o botão 'Salvar', o problema é do design, não do usuário.",
      "puloDoGato": "Teste de Usabilidade = Validar se o humano entende o que a máquina propõe.",
      "cascasDeBanana": {
        "E": "Incorreta. O teste é sobre a interface, não o conhecimento técnico do usuário.",
        "A": "Correta. Gera os insights mais valiosos para melhoria do produto.",
        "B": "Incorreta. Jamais! O usuário nunca é o culpado no teste.",
        "C": "Incorreta. O teste serve para CRITICAR e melhorar o design.",
        "D": "Incorreta. É uma ferramenta prática de qualidade."
      },
      "dicaDeOuro": "Observe o que o usuário FAZ, não apenas o que ele DIZ."
    }
  },
  {
    "id": "q_f3_108",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Acessibilidade (WCAG)",
    "difficulty": "Médio",
    "statement": "De acordo com as diretrizes de acessibilidade na web (WCAG), o princípio 'Perceptível' significa que:",
    "options": {
      "A": "O site só pode ser acessado por especialistas em tecnologia.",
      "B": "O site deve ter cores muito fortes e vibrantes.",
      "C": "As informações e os componentes da interface devem ser apresentados aos usuários de formas que eles possam perceber (ex: texto alternativo para imagens para cegos).",
      "D": "O site deve ser carregado em menos de 1 segundo.",
      "E": "O site deve exigir o uso de óculos 3D."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Se alguém não enxerga, o sistema precisa fornecer áudio ou Braille. Se alguém não ouve, o sistema precisa de legendas. 'Perceptível' significa que a informação tem que chegar aos sentidos do usuário, não importa quais ele tenha disponíveis.",
      "puloDoGato": "WCAG Principles (POUR): Perceptível, Operável, Compreensível e Robusto.",
      "cascasDeBanana": {
        "D": "Incorreta. Isso é performance/eficiência.",
        "C": "Correta. Base da inclusão digital.",
        "B": "Incorreta. Cores vibrantes podem até atrapalhar pessoas com fotossensibilidade.",
        "A": "Incorreta. Acessibilidade é para TODOS.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Acessibilidade: Ninguém pode ficar de fora."
    }
  },
  {
    "id": "q_f3_109",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Arquitetura de Informação",
    "difficulty": "Médio",
    "statement": "O que a 'Arquitetura de Informação' estuda em um projeto de software?",
    "options": {
      "A": "A organização, estruturação e rotulagem do conteúdo para ajudar os usuários a encontrar informações e completar tarefas.",
      "B": "A marca do servidor onde o banco de dados está instalado.",
      "C": "A criptografia dos dados em repouso.",
      "D": "O número de linhas de código do sistema.",
      "E": "A fiação elétrica do data center."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Sabe o menu do site? As categorias? Onde fica a busca? Isso é Arquitetura de Informação. É como organizar uma biblioteca: se os livros de 'Terror' estiverem na seção de 'Culinária', ninguém acha nada.",
      "puloDoGato": "IA (Information Architecture) = Organização + Navegação + Busca.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso é infraestrutura física.",
        "A": "Correta. Foco no entendimento e localização do conteúdo.",
        "C": "Incorreta. Isso é segurança da informação.",
        "E": "Incorreta. Absurdo físico.",
        "D": "Incorreta. Métrica de engenharia, não de UX."
      },
      "dicaDeOuro": "Arquitetura de Informação: Facilitar o caminho do usuário."
    }
  },
  {
    "id": "q_f3_110",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Personas",
    "difficulty": "Fácil",
    "statement": "Para que serve a criação de 'Personas' em um projeto de UX?",
    "options": {
      "A": "Para criar personagens fictícios que representam os diferentes tipos de usuários do sistema, ajudando a equipe a entender suas necessidades e comportamentos.",
      "B": "Para contratar novos funcionários para a equipe de TI.",
      "C": "Para definir quem será o culpado se o projeto atrasar.",
      "D": "Para dar nomes engraçados aos servidores.",
      "E": "Para escolher os atores dos comerciais da empresa."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "Em vez de dizer 'o usuário quer isso', a gente diz: 'O Carlos, que é engenheiro de campo e tem pouco tempo, precisa desse botão grande'. Isso traz foco humano para as decisões técnicas.",
      "puloDoGato": "Personas = Empatia direcionada. Humanizar os requisitos.",
      "cascasDeBanana": {
        "B": "Incorreta. Personas são para design, não RH.",
        "A": "Correta. Ferramenta clássica de UX Research.",
        "E": "Incorreta. Embora marketing use personas, no software o foco é o uso do produto.",
        "C": "Incorreta. Absurdo ético.",
        "D": "Incorreta. Absurdo técnico."
      },
      "dicaDeOuro": "Persona: Dê um rosto e uma história para o seu usuário."
    }
  },
  {
    "id": "q_f3_111",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Mapa de Empatia",
    "difficulty": "Médio",
    "statement": "Quais são os quadrantes básicos que compõem um 'Mapa de Empatia'?",
    "options": {
      "A": "Norte, Sul, Leste e Oeste.",
      "B": "Preço, Prazo, Qualidade e Escopo.",
      "C": "O que o usuário Diz, Faz, Pensa e Sente.",
      "D": "Frontend, Backend, Banco de Dados e Infra.",
      "E": "Código, Teste, Deploy e Monitoramento."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O Mapa de Empatia serve para a gente mergulhar no mundo do usuário. Às vezes ele DIZ que o sistema é bom, mas a gente vê que ele FAZ um caminho enorme para chegar numa tela (sinal de que ele Pensa que é difícil e Sente frustração).",
      "puloDoGato": "Diz, Faz, Pensa e Sente. O quarteto da empatia.",
      "cascasDeBanana": {
        "E": "Incorreta. Ciclo de vida de software (DevOps).",
        "C": "Correta. Estrutura padrão da ferramenta de design thinking.",
        "D": "Incorreta. Camadas técnicas.",
        "A": "Incorreta. Pontos cardeais.",
        "B": "Incorreta. Restrições de projeto (Triângulo de ferro)."
      },
      "dicaDeOuro": "Empatia: Tente ver o mundo com os olhos do outro."
    }
  },
  {
    "id": "q_f3_112",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "Engenharia de Requisitos - Elicitação",
    "difficulty": "Médio",
    "statement": "Qual das técnicas abaixo é considerada uma técnica de 'Elicitação de Requisitos' baseada na observação direta do usuário em seu ambiente de trabalho?",
    "options": {
      "A": "Entrevista Estruturada.",
      "B": "Etnografia (ou Observação de Campo).",
      "C": "Questionário online.",
      "D": "Análise de Documentos.",
      "E": "Brainstorming."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Às vezes o usuário não consegue explicar o que ele faz. Você vai até o posto de gasolina ou até a refinaria e fica olhando ele trabalhar. Você descobre que ele usa uma planilha paralela ou que o sol bate na tela e ele não enxerga nada. Isso é Etnografia.",
      "puloDoGato": "Etnografia = Observar o 'habitat' natural do usuário.",
      "cascasDeBanana": {
        "A": "Incorreta. Baseado em geração de ideias em grupo.",
        "B": "Correta. Técnica poderosa para descobrir requisitos ocultos.",
        "C": "Incorreta. Técnica indireta e estática.",
        "D": "Incorreta. Baseado em leitura de manuais e normas.",
        "E": "Incorreta. Baseado em perguntas e respostas diretas."
      },
      "dicaDeOuro": "Quer saber a verdade? Veja o usuário trabalhando."
    }
  },
  {
    "id": "q_f3_113",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "discipline": "Requisitos e Experiência do Usuário",
    "topic": "UX - Mobile First",
    "difficulty": "Fácil",
    "statement": "O que prega a estratégia 'Mobile First' no desenvolvimento web?",
    "options": {
      "A": "Que o site só deve funcionar em celulares.",
      "B": "Que os usuários devem comprar um celular novo antes de usar o site.",
      "C": "Que as chamadas telefônicas são mais importantes que e-mails.",
      "D": "Que a empresa deve dar um celular para cada desenvolvedor.",
      "E": "Que o design e o desenvolvimento devem começar pelas telas menores (celulares) e depois expandir para telas maiores (desktops)."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "É muito mais fácil fazer algo simples no celular e depois 'espalhar' os elementos numa tela grande de PC. O contrário (espremer um site de PC num celular) quase sempre fica horrível. Além disso, força a gente a focar só no que é essencial.",
      "puloDoGato": "Mobile First = Priorizar o essencial + Progressive Enhancement.",
      "cascasDeBanana": {
        "B": "Incorreta. Absurdo econômico.",
        "E": "Correta. Padrão moderno de design responsivo.",
        "A": "Incorreta. O site continua sendo para todos, apenas a ordem de criação muda.",
        "D": "Incorreta. Política interna, não estratégia de design.",
        "C": "Incorreta. Absurdo literal."
      },
      "dicaDeOuro": "Se cabe no celular, cabe em qualquer lugar."
    }
  },
  {
    "id": "q_f3_114",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Conceitos - Erro, Defeito e Falha",
    "difficulty": "Médio",
    "statement": "De acordo com as normas de teste (como ISTQB), qual a diferença entre 'Defeito' (Bug) e 'Falha'?",
    "options": {
      "A": "Defeito é uma imperfeição no código-fonte; Falha é a manifestação visível dessa imperfeição durante a execução (o sistema para de funcionar).",
      "B": "Defeito é um erro de português no manual; Falha é uma queda de energia.",
      "C": "Falha é quando o programador erra; Defeito é quando o testador erra.",
      "D": "Defeito só acontece em hardware; Falha só em software.",
      "E": "São sinônimos e podem ser usados indiferentemente."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O humano comete um ERRO. Esse erro gera um DEFEITO no código (o bug tá lá escondidinho). Quando esse código roda e o sistema trava ou calcula errado, temos uma FALHA. Nem todo defeito causa uma falha (pode ser um código que nunca é executado).",
      "puloDoGato": "Erro (Humano) -> Defeito (Código) -> Falha (Execução).",
      "cascasDeBanana": {
        "E": "Incorreta. Para fins de certificação e concursos, existe diferença clara.",
        "A": "Correta. Definição técnica precisa.",
        "C": "Incorreta. Confunde a origem com a manifestação.",
        "D": "Incorreta. Ambos se aplicam ao software.",
        "B": "Incorreta. Visão simplista e errada."
      },
      "dicaDeOuro": "Bug no código = Defeito. Sistema travou = Falha."
    }
  },
  {
    "id": "q_f3_115",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Níveis de Teste - Teste de Unidade",
    "difficulty": "Fácil",
    "statement": "Qual o foco principal do 'Teste de Unidade' (Unit Test)?",
    "options": {
      "A": "Testar a menor parte testável de um software de forma isolada (como uma única função ou método).",
      "B": "Verificar se o sistema inteiro funciona perfeitamente para o usuário final.",
      "C": "Testar se a integração entre dois sistemas diferentes funciona.",
      "D": "Medir o tempo de resposta do servidor em outra cidade.",
      "E": "Verificar se o banco de dados aguenta 1 milhão de conexões."
    },
    "correctOption": "A",
    "resolution": {
      "papoReto": "O teste unitário é o 'tijolo'. Você testa se a função de somar está somando, sem se preocupar com o resto da casa. Se todos os tijolos estiverem bons, a chance da casa ficar em pé é maior. Geralmente é escrito pelo próprio desenvolvedor.",
      "puloDoGato": "Teste de Unidade = Pequeno, Isolado e Rápido.",
      "cascasDeBanana": {
        "B": "Incorreta. Isso seria Teste de Sistema ou Aceitação.",
        "A": "Correta. Primeiro nível da pirâmide de testes.",
        "E": "Incorreta. Isso seria Teste de Carga/Performance.",
        "C": "Incorreta. Isso seria Teste de Integração.",
        "D": "Incorreta. Isso seria Teste de Latência/Infra."
      },
      "dicaDeOuro": "Unidade: Teste uma função por vez."
    }
  },
  {
    "id": "q_f3_116",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Técnicas - Teste de Caixa Preta",
    "difficulty": "Médio",
    "statement": "O que define a técnica de 'Teste de Caixa Preta' (Black Box)?",
    "options": {
      "A": "O software é testado apenas por máquinas, sem intervenção humana.",
      "B": "O testador ignora a estrutura interna do sistema e foca apenas nas entradas e nas saídas esperadas, baseando-se nos requisitos.",
      "C": "O testador tem acesso total ao código-fonte e à estrutura interna do software.",
      "D": "O teste é realizado apenas quando as luzes do escritório estão apagadas.",
      "E": "É um teste realizado exclusivamente em servidores de cor preta."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Na Caixa Preta, você não quer saber como o código foi feito (se usou IF, FOR, etc). Você só pensa: 'Se eu digitar 10 aqui, tem que sair 20 ali'. É o ponto de vista do usuário.",
      "puloDoGato": "Caixa Preta = Requisitos / Funcionalidade. Caixa Branca = Código / Estrutura.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso é Teste de Caixa Branca (White Box).",
        "B": "Correta. Técnica clássica para garantir que o software atende ao que foi pedido.",
        "C": "Incorreta. Piada.",
        "D": "Incorreta. Pode ser manual ou automatizado.",
        "E": "Incorreta. Absurdo literal."
      },
      "dicaDeOuro": "Caixa Preta: O que importa é o resultado, não o processo."
    }
  },
  {
    "id": "q_f3_117",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Técnicas - Particionamento de Equivalência",
    "difficulty": "Difícil",
    "statement": "Para que serve a técnica de 'Particionamento de Equivalência' em testes de software?",
    "options": {
      "A": "Para multiplicar o número de casos de teste por dez.",
      "B": "Para converter números decimais em binários.",
      "C": "Para garantir que todos os programadores recebam o mesmo salário.",
      "D": "Para dividir as entradas de dados em grupos (classes) que o sistema deve tratar da mesma forma, permitindo testar apenas um representante de cada grupo e economizar tempo.",
      "E": "Para separar o código frontend do backend."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se um campo aceita números de 1 a 100, você não precisa testar o 1, o 2, o 3... até o 100. Você testa um valor válido (ex: 50) e valores inválidos (ex: -1 e 101). Se o 50 funcionar, a gente assume que os outros números entre 1 e 100 também funcionariam.",
      "puloDoGato": "Particionamento = Reduzir o número de testes mantendo a cobertura.",
      "cascasDeBanana": {
        "C": "Incorreta. Absurdo administrativo.",
        "D": "Correta. Técnica de economia de esforço baseada em lógica de conjuntos.",
        "A": "Incorreta. O objetivo é DIMINUIR a redundância.",
        "E": "Incorreta. Divisão arquitetural, não de dados de teste.",
        "B": "Incorreta. Operação matemática irrelevante aqui."
      },
      "dicaDeOuro": "Teste um de cada grupo e economize horas."
    }
  },
  {
    "id": "q_f3_118",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Tipos de Teste - Teste de Regressão",
    "difficulty": "Médio",
    "statement": "Qual o objetivo de realizar um 'Teste de Regressão'?",
    "options": {
      "A": "Fazer o software voltar para uma versão antiga porque a nova é ruim.",
      "B": "Testar o software em computadores muito velhos (regressivos).",
      "C": "Garantir que novas alterações ou correções de bugs não 'quebraram' funcionalidades que já estavam funcionando corretamente antes.",
      "D": "Aprender técnicas de hipnose para relaxar a equipe.",
      "E": "Medir a velocidade com que o desenvolvedor apaga código."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "Sabe quando você conserta a pia e o chuveiro para de sair água? No software acontece muito. O teste de regressão é rodar os testes antigos de novo para ter certeza de que o seu 'conserto' de hoje não estragou o que estava bom ontem.",
      "puloDoGato": "Regressão = Nada de novo quebrou o que era velho.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria Rollback.",
        "C": "Correta. Essencial em ambientes de desenvolvimento ágil e contínuo.",
        "B": "Incorreta. Isso seria teste de compatibilidade.",
        "D": "Incorreta. Piada.",
        "E": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Mudou o código? Rode a Regressão."
    }
  },
  {
    "id": "q_f3_119",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Conceitos - Testabilidade",
    "difficulty": "Médio",
    "statement": "O que significa o atributo de qualidade 'Testabilidade' em um software?",
    "options": {
      "A": "O tempo que o testador leva para chegar ao trabalho.",
      "B": "A capacidade do software de fazer as provas da escola sozinho.",
      "C": "A cor dos botões da ferramenta de teste.",
      "D": "O número total de bugs que o software contém.",
      "E": "A facilidade com que um sistema ou componente permite a realização de testes para verificar se ele atende aos requisitos."
    },
    "correctOption": "E",
    "resolution": {
      "papoReto": "Um código com boa testabilidade é aquele 'limpo', desacoplado, onde você consegue simular entradas e verificar saídas facilmente. Se o seu código é um 'macarrão' onde tudo depende de tudo, a testabilidade é baixa (difícil de testar).",
      "puloDoGato": "Testabilidade = Código amigável aos testes (ex: Injeção de Dependência).",
      "cascasDeBanana": {
        "E": "Correta. É um requisito não-funcional de mantibilidade.",
        "B": "Incorreta. Absurdo literal.",
        "D": "Incorreta. Isso é densidade de defeitos.",
        "A": "Incorreta. Logística, não software.",
        "C": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Código difícil de testar é código mal desenhado."
    }
  },
  {
    "id": "q_f3_120",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Técnicas - Análise do Valor Limite",
    "difficulty": "Difícil",
    "statement": "A técnica de 'Análise do Valor Limite' foca seus casos de teste em:",
    "options": {
      "A": "No tempo limite de execução do servidor.",
      "B": "Apenas em números ímpares.",
      "C": "Na data de validade do software.",
      "D": "Valores nas extremidades das classes de equivalência (mínimos, máximos e logo acima/abaixo destes).",
      "E": "Valores no meio das faixas de aceitação."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Bugs adoram se esconder nas bordas. Se um sistema aceita idades de 18 a 60, você testa: 17 (inválido), 18 (limite válido), 19 (médio), 59 (médio), 60 (limite válido) e 61 (inválido). É aí que os programadores costumam errar o '<' ou o '<='.",
      "puloDoGato": "Valor Limite = Testar as fronteiras. É onde a lógica costuma falhar.",
      "cascasDeBanana": {
        "E": "Incorreta. Valores centrais raramente revelam erros de lógica de comparação.",
        "D": "Correta. Técnica clássica que complementa o Particionamento de Equivalência.",
        "B": "Incorreta. Paridade não é o foco aqui.",
        "A": "Incorreta. Isso seria Timeout.",
        "C": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Fronteiras são perigosas. Teste-as sempre."
    }
  },
  {
    "id": "q_f3_121",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Níveis de Teste - Teste de Integração",
    "difficulty": "Médio",
    "statement": "Qual o objetivo principal do 'Teste de Integração'?",
    "options": {
      "A": "Testar apenas a interface gráfica do sistema.",
      "B": "Validar se o banco de dados está vazio.",
      "C": "Deletar o código antigo para integrar o novo.",
      "D": "Verificar as interfaces e as interações entre componentes ou sistemas que foram testados individualmente.",
      "E": "Testar o sistema em um único computador sem internet."
    },
    "correctOption": "D",
    "resolution": {
      "papoReto": "Se os tijolos (unidades) estão bons, agora a gente testa se o cimento está colando eles direito. É aqui que descobrimos se o sistema A manda o dado no formato que o sistema B espera.",
      "puloDoGato": "Integração = Foco na comunicação entre as partes.",
      "cascasDeBanana": {
        "A": "Incorreta. Isso seria Teste de UI.",
        "D": "Correta. Nível intermediário essencial da pirâmide.",
        "E": "Incorreta. Integração geralmente exige ambiente de rede.",
        "C": "Incorreta. Absurdo.",
        "B": "Incorreta. Irrelevante."
      },
      "dicaDeOuro": "Integração: Teste o 'aperto de mão' entre os módulos."
    }
  },
  {
    "id": "q_f3_122",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Automação de Testes - Vantagens",
    "difficulty": "Fácil",
    "statement": "Qual a maior vantagem de se automatizar os testes de regressão de um software?",
    "options": {
      "A": "A automação encontra 100% dos bugs novos automaticamente.",
      "B": "A automação permite a execução repetitiva de testes de forma rápida e confiável, liberando os testadores humanos para tarefas mais complexas.",
      "C": "A automação garante que o usuário vai gostar do sistema.",
      "D": "Testes automatizados são mais baratos de criar do que os manuais na primeira vez.",
      "E": "A automação elimina a necessidade de ter programadores no projeto."
    },
    "correctOption": "B",
    "resolution": {
      "papoReto": "Ninguém merece testar o login 500 vezes manualmente. A máquina faz isso em segundos. O humano deve focar em testes exploratórios, onde a criatividade e a intuição fazem a diferença.",
      "puloDoGato": "Automação = Repetibilidade + Velocidade + Consistência.",
      "cascasDeBanana": {
        "A": "Incorreta. Automação só encontra o que foi programada para encontrar.",
        "B": "Correta. Valor principal do QA moderno.",
        "C": "Incorreta. Alguém precisa programar os testes!",
        "D": "Incorreta. Automação tem um custo inicial ALTO de desenvolvimento.",
        "E": "Incorreta. UX é algo que máquinas ainda não avaliam bem sozinhas."
      },
      "dicaDeOuro": "Automatize o que é chato e repetitivo."
    }
  },
  {
    "id": "q_f3_123",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software",
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "discipline": "Testes de Software",
    "topic": "Níveis de Teste - Teste de Aceitação (UAT)",
    "difficulty": "Médio",
    "statement": "Quem é o responsável primordial por realizar e validar o 'Teste de Aceitação do Usuário' (User Acceptance Testing - UAT)?",
    "options": {
      "A": "O Hacker Ético.",
      "B": "O Gerente de Infraestrutura.",
      "C": "O Usuário Final ou o representante do negócio (Product Owner).",
      "D": "O estagiário de marketing.",
      "E": "O programador Junior."
    },
    "correctOption": "C",
    "resolution": {
      "papoReto": "O UAT é a prova final. O cliente olha para o sistema e diz: 'Sim, é isso que eu pedi e isso resolve o meu problema'. Se o usuário não aceitar, o projeto não é considerado 'entregue'.",
      "puloDoGato": "UAT = O cliente dando o OK final.",
      "cascasDeBanana": {
        "A": "Incorreta. Ele faz testes unitários.",
        "B": "Incorreta. Ele cuida do servidor.",
        "C": "Correta. Garantia de alinhamento com o negócio.",
        "D": "Incorreta. Ele faz testes de penetração/segurança.",
        "E": "Incorreta. Absurdo."
      },
      "dicaDeOuro": "Aceitação: A palavra final é do dono do problema."
    }
  },
  {
    "id": "q_sw_4000",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Arquitetura - Android",
    "statement": "No desenvolvimento Android nativo utilizando Kotlin ou Java, qual componente é responsável por representar uma única tela com uma interface de usuário?",
    "options": {
      "A": "Content Provider.",
      "B": "Service.",
      "C": "Intent.",
      "D": "Broadcast Receiver.",
      "E": "Activity."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A Activity é o 'átomo' da interface Android. Se o seu app tem uma tela de Login e uma tela de Home, cada uma delas é uma Activity diferente. Ela gerencia o ciclo de vida daquela tela específica (quando abre, pausa, fecha).",
      "puloDoGato": "Activity = Tela (UI). Service = Background (Sem UI).",
      "cascasDeBanana": {
        "B": "Service roda no fundo e não tem interface (ex: player de música).",
        "D": "Broadcast Receiver serve para ouvir mensagens do sistema (ex: bateria fraca).",
        "A": "Content Provider gerencia o acesso a dados compartilhados (ex: lista de contatos).",
        "C": "Intent é a 'mensagem' que você envia para abrir uma Activity."
      },
      "dicaDeOuro": "Lembre-se: uma Activity pode ser composta por vários 'Fragments' para facilitar a reutilização de UI em tablets e celulares."
    }
  },
  {
    "id": "q_sw_4001",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Frameworks Cross-platform - Flutter",
    "statement": "O framework Flutter, criado pelo Google, utiliza qual linguagem de programação e qual motor de renderização próprio para desenhar a interface?",
    "options": {
      "A": "Swift e UIKit.",
      "B": "Kotlin e Jetpack Compose.",
      "C": "Dart e Skia (ou Impeller).",
      "D": "JavaScript e Webkit.",
      "E": "TypeScript e React Native."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Flutter é diferente do React Native. Ele não usa componentes nativos da Apple ou do Android. Ele desenha tudo na tela pixel por pixel usando o motor Skia (como se fosse um videogame). E a linguagem é o Dart.",
      "puloDoGato": "Flutter = Dart + Skia.",
      "cascasDeBanana": {
        "D": "Linguagem do React Native / Ionic.",
        "E": "React Native usa JS/TS e componentes nativos, não desenha tudo sozinho.",
        "A": "Linguagem e framework nativos apenas para iOS.",
        "B": "Linguagem e framework nativos apenas para Android."
      },
      "dicaDeOuro": "O conceito central do Flutter é: 'Everything is a Widget'."
    }
  },
  {
    "id": "q_sw_4002",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Ciclo de Vida - Android",
    "statement": "No ciclo de vida de uma Activity no Android, qual método é chamado quando a atividade não está mais visível para o usuário, mas ainda reside na memória?",
    "options": {
      "A": "onResume().",
      "B": "onDestroy().",
      "C": "onStop().",
      "D": "onStart().",
      "E": "onCreate()."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Quando você aperta o botão 'Home' e vai pra outra tela, o seu app atual vai para o 'onStop'. Ele não sumiu da memória (ainda), mas o usuário não está mais vendo ele.",
      "puloDoGato": "onPause = Parcialmente visível (ex: popup na frente). onStop = Totalmente invisível.",
      "cascasDeBanana": {
        "E": "onCreate é quando o app está 'nascendo'.",
        "D": "onStart é quando ele está ficando visível.",
        "A": "onResume é quando ele está pronto para interação (primeiro plano).",
        "B": "onDestroy é quando o sistema mata o app para liberar memória."
      },
      "dicaDeOuro": "Sempre salve os dados importantes no `onPause` ou `onStop` para garantir que o usuário não perca nada se o sistema matar o processo."
    }
  },
  {
    "id": "q_sw_4003",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Arquitetura - iOS",
    "statement": "No desenvolvimento iOS nativo (Swift), qual o padrão de arquitetura recomendado pela Apple onde a lógica de visualização e controle de visualização são frequentemente combinadas?",
    "options": {
      "A": "Redux.",
      "B": "VIPER.",
      "C": "Clean Architecture.",
      "D": "MVC (Model-View-Controller).",
      "E": "MVVM."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "A Apple sempre empurrou o MVC. No iOS, o Controller (UIViewController) é tão grudado na View que as pessoas brincam que o nome do padrão é 'Massive View Controller', porque os arquivos ficam gigantes.",
      "puloDoGato": "iOS Padrão = MVC.",
      "cascasDeBanana": {
        "E": "MVVM é muito usado hoje com SwiftUI, mas o clássico é MVC.",
        "B": "VIPER é uma arquitetura muito complexa e específica.",
        "C": "Padrão geral de engenharia, não específico da Apple.",
        "A": "Padrão de gerenciamento de estado vindo do React."
      },
      "dicaDeOuro": "Hoje em dia, com o SwiftUI, a Apple está migrando para padrões mais reativos e declarativos."
    }
  },
  {
    "id": "q_sw_4004",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Progressive Web Apps (PWA)",
    "statement": "O que caracteriza um PWA (Progressive Web App) em relação a um aplicativo nativo?",
    "options": {
      "A": "É um site web que utiliza tecnologias modernas (como Service Workers) para oferecer uma experiência similar a um app nativo, incluindo funcionamento offline e notificações push.",
      "B": "PWA só funciona em computadores desktop.",
      "C": "Ele deve ser baixado obrigatoriamente da App Store ou Play Store.",
      "D": "PWA não pode ser instalado na tela inicial do celular.",
      "E": "Ele só funciona se houver conexão constante com a internet."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O PWA é um site 'bombado'. Ele roda no navegador, mas você pode 'instalar' ele no celular sem passar pela loja. Ele funciona offline porque guarda os arquivos no cache do celular usando o Service Worker.",
      "puloDoGato": "PWA = Web + Service Workers + Manifest.json.",
      "cascasDeBanana": {
        "C": "PWA foge das lojas de aplicativos.",
        "E": "Funcionar offline é um dos pilares do PWA.",
        "D": "Pode ser adicionado à tela inicial ('Add to Home Screen').",
        "B": "Focado totalmente no mobile first."
      },
      "dicaDeOuro": "O arquivo `manifest.json` é o que define o ícone, o nome e as cores que o PWA terá quando for instalado."
    }
  },
  {
    "id": "q_sw_4005",
    "discipline": "Desenvolvimento Móvel",
    "topic": "React Native - Bridge",
    "statement": "Como o React Native permite que o código JavaScript se comunique com os componentes nativos do Android e iOS?",
    "options": {
      "A": "Compilando todo o JavaScript em código de máquina binário no momento do build.",
      "B": "Utilizando uma linguagem intermediária chamada C++ para tudo.",
      "C": "Rodando o código dentro de um WebView oculto.",
      "D": "Não há comunicação, o React Native é apenas um simulador visual.",
      "E": "Através de uma 'Bridge' (Ponte) assíncrona que serializa e envia mensagens entre o reino do JS e o reino Nativo."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O React Native não vira código nativo 100%. Ele tem um 'motor' de JS rodando e uma ponte. Quando você clica num botão, o nativo avisa o JS pela ponte. O JS processa e manda uma mensagem de volta pela ponte dizendo: 'Atualiza o texto na tela'.",
      "puloDoGato": "React Native = JS <-> Bridge <-> Native.",
      "cascasDeBanana": {
        "A": "Flutter faz algo mais parecido com isso (compilação AOT), o React Native clássico não.",
        "C": "Isso é o que o Ionic/Cordova fazem (Híbridos).",
        "B": "O motor interno (Hermes/JSC) usa C++, mas a comunicação do desenvolvedor é JS/Bridge.",
        "D": "Absurdo."
      },
      "dicaDeOuro": "Versões novas do React Native estão trocando a Bridge pelo JSI (JavaScript Interface) para tornar a comunicação muito mais rápida."
    }
  },
  {
    "id": "q_sw_4006",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Persistência Local - SQLite",
    "statement": "Qual a solução de banco de dados relacional leve mais utilizada para persistência local de dados tanto no Android quanto no iOS?",
    "options": {
      "A": "PostgreSQL.",
      "B": "MongoDB.",
      "C": "Oracle Mobile.",
      "D": "Redis.",
      "E": "SQLite."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "O SQLite é o padrão de mercado. É um banco de dados que não precisa de servidor, ele é apenas um arquivo dentro do seu celular. É rápido, confiável e já vem embutido nos sistemas operacionais móveis.",
      "puloDoGato": "Banco Local Mobile = SQLite.",
      "cascasDeBanana": {
        "A": "Muito pesado para rodar dentro de um celular.",
        "B": "NoSQL orientado a documentos, menos comum nativamente que SQLite.",
        "C": "Produto corporativo caro, pouco usado em apps comuns.",
        "D": "Banco em memória, os dados sumiriam ao fechar o app."
      },
      "dicaDeOuro": "No Android, recomenda-se usar a biblioteca 'Room' (Jetpack) que é uma camada de abstração muito mais fácil sobre o SQLite."
    }
  },
  {
    "id": "q_sw_4007",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Segurança - Permissões",
    "statement": "A partir das versões mais recentes do Android (6.0+) e iOS, como deve ser o gerenciamento de permissões sensíveis (como acesso à câmera ou localização)?",
    "options": {
      "A": "Permissões sensíveis foram proibidas por questões de privacidade.",
      "B": "O desenvolvedor declara no arquivo de manifesto e o sistema concede silenciosamente.",
      "C": "O app deve solicitar a permissão em tempo de execução (Runtime), explicando ao usuário o porquê da necessidade.",
      "D": "O app ganha todas as permissões automaticamente no momento da instalação.",
      "E": "As permissões só podem ser concedidas presencialmente em uma loja autorizada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 2,
    "resolution": {
      "papoReto": "Antigamente, você aceitava tudo na hora de baixar. Hoje não. O app só pode pedir a câmera na hora que você clicar no botão de 'Tirar Foto'. Isso dá controle ao usuário e evita que apps fiquem espionando no fundo.",
      "puloDoGato": "Permissões Modernas = Runtime Permissions (Solicitadas no momento do uso).",
      "cascasDeBanana": {
        "A": "Padrão antigo e inseguro.",
        "B": "A declaração no manifesto ainda é obrigatória, mas não é suficiente para conceder a permissão.",
        "C": "",
        "D": "Ainda existem, apenas são mais controladas.",
        "E": "Absurdo."
      },
      "dicaDeOuro": "Se o usuário negar a permissão, o seu app deve continuar funcionando (dentro do possível) e não pode simplesmente fechar (crash)."
    }
  },
  {
    "id": "q_sw_4108",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Modelos de Dados - Documento",
    "statement": "Bancos de dados orientados a documentos, como o MongoDB, armazenam dados em formatos flexíveis. Qual o formato de intercâmbio de dados mais utilizado por esses bancos?",
    "options": {
      "A": "XML.",
      "B": "CSV.",
      "C": "JSON (ou BSON).",
      "D": "Tabelas Relacionais (SQL).",
      "E": "Planilhas Excel."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No MongoDB, você não tem linhas e colunas fixas. Você tem 'Documentos'. Esses documentos parecem muito com objetos JavaScript, que é o formato JSON. O Mongo usa uma versão binária chamada BSON (Binary JSON).",
      "puloDoGato": "Document DB = Flexibilidade + JSON/BSON.",
      "cascasDeBanana": {
        "A": "SQL é para bancos relacionais (Postgres, MySQL).",
        "B": "XML é muito verboso e caiu em desuso para bancos NoSQL modernos.",
        "C": "",
        "D": "CSV é para exportação de dados simples.",
        "E": "Excel é software de escritório."
      },
      "dicaDeOuro": "A flexibilidade do JSON permite que você adicione campos novos a um registro sem precisar alterar toda a estrutura do banco (Schema-less)."
    }
  },
  {
    "id": "q_sw_4109",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Teorema CAP",
    "statement": "De acordo com o Teorema CAP para sistemas distribuídos, é impossível garantir simultaneamente as três propriedades seguintes. Quais são elas?",
    "options": {
      "A": "Concorrência, Atomicidade e Persistência.",
      "B": "Consistência, Disponibilidade e Tolerância a Partições.",
      "C": "Capacidade, Acesso e Protocolo.",
      "D": "Custo, Agilidade e Performance.",
      "E": "Criptografia, Autenticação e Privacidade."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "CAP é a escolha impossível da TI. C = Consistência (Todo mundo vê o mesmo dado na hora), A = Disponibilidade (O sistema nunca responde erro), P = Tolerância a Partições (O sistema funciona se um cabo de rede quebrar entre os servidores). Na prática, se a rede cai (P), ou você trava o banco pra não dar dado errado (sacrifica A) ou deixa ler dado velho (sacrifica C).",
      "puloDoGato": "Teorema CAP = Escolha 2 de 3 (Geralmente sacrifica-se C ou A durante uma falha de rede).",
      "cascasDeBanana": {
        "A": "Triângulo de ferro da gestão.",
        "B": "",
        "C": "Pilares da segurança.",
        "D": "Parte das propriedades ACID.",
        "E": "Termos genéricos."
      },
      "dicaDeOuro": "Bancos como Cassandra focam em AP (Disponibilidade), enquanto o MongoDB tende a focar em CP (Consistência)."
    }
  },
  {
    "id": "q_sw_4110",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Modelo Chave-Valor - Redis",
    "statement": "O Redis é um exemplo de banco de dados NoSQL do tipo Chave-Valor. Qual a principal característica que o torna extremamente rápido para operações de cache?",
    "options": {
      "A": "Ele utiliza inteligência artificial para prever as buscas do usuário.",
      "B": "Ele converte todos os dados para imagens JPEG.",
      "C": "Ele não permite que mais de um usuário acesse o banco por vez.",
      "D": "Ele armazena os dados em fitas magnéticas de alta velocidade.",
      "E": "Ele armazena todos os dados primariamente na memória RAM."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O segredo do Redis é que ele mora na memória RAM, que é milhares de vezes mais rápida que o disco. Ele é usado para guardar sessões de usuário, rankings e coisas que precisam ser lidas em micro-segundos.",
      "puloDoGato": "Redis = In-memory Data Structure Store (Rápido demais).",
      "cascasDeBanana": {
        "A": "Não usa IA para busca básica.",
        "D": "Fita magnética é o armazenamento mais lento que existe (usado para backup frio).",
        "C": "Ele é altamente concorrente.",
        "B": "Totalmente falso."
      },
      "dicaDeOuro": "Embora more na RAM, o Redis pode ser configurado para salvar os dados no disco de tempos em tempos (Snapshotting) para não perder tudo se o servidor reiniciar."
    }
  },
  {
    "id": "q_sw_4111",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Escalabilidade - Sharding",
    "statement": "Em bancos de dados NoSQL, o conceito de 'Sharding' refere-se à técnica de:",
    "options": {
      "A": "Transformar um banco NoSQL em um banco Relacional automaticamente.",
      "B": "Dividir horizontalmente um grande conjunto de dados em partes menores (shards) distribuídas em múltiplos servidores para aumentar a capacidade e performance.",
      "C": "Fazer backup dos dados em servidores geograficamente distantes.",
      "D": "Criptografar as chaves primárias para evitar ataques.",
      "E": "Apagar dados antigos para economizar espaço."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sharding é o 'Dividir para Conquistar'. Se você tem 1 bilhão de usuários, não cabe num servidor só. Você coloca os usuários de A-M no Servidor 1 e de N-Z no Servidor 2. Isso permite que o seu banco cresça 'para os lados' (escalabilidade horizontal) quase sem limites.",
      "puloDoGato": "Sharding = Particionamento Horizontal de Dados entre múltiplos nós.",
      "cascasDeBanana": {
        "C": "Isso é Replicação Geográfica.",
        "D": "Segurança.",
        "A": "Impossível de forma automática e eficiente.",
        "E": "Isso é política de retenção / Purge."
      },
      "dicaDeOuro": "O grande desafio do Sharding é escolher uma 'Shard Key' equilibrada para que um servidor não fique muito mais pesado que o outro."
    }
  },
  {
    "id": "q_sw_4112",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Eventual Consistency",
    "statement": "Muitos bancos de dados NoSQL utilizam o modelo de 'Consistência Eventual'. O que isso significa para o usuário?",
    "options": {
      "A": "O banco de dados só funciona em eventos específicos como feriados.",
      "B": "A consistência é garantida apenas para usuários premium.",
      "C": "O dado nunca será gravado de verdade, é apenas uma simulação.",
      "D": "O sistema garante que, se não houver novas atualizações, em algum momento (eventualmente) todos os nós do sistema terão o dado mais recente, mas leituras imediatas após uma escrita podem retornar dados antigos.",
      "E": "O dado é apagado automaticamente após 24 horas."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine que você postou uma foto no Instagram. Você vê a foto na hora, mas seu amigo que está no Japão pode demorar 2 segundos para ver a foto no feed dele. O sistema prioriza a velocidade (Disponibilidade) e 'eventualmente' todo mundo vê a mesma coisa.",
      "puloDoGato": "Consistência Eventual = Velocidade agora, Verdade daqui a pouco.",
      "cascasDeBanana": {
        "C": "Absurdo.",
        "A": "Confusão semântica com a palavra 'evento'.",
        "E": "Isso seria TTL (Time to Live).",
        "B": "A consistência é uma regra técnica do banco, não um plano de cobrança."
      },
      "dicaDeOuro": "Sistemas financeiros (Bancos) costumam evitar a consistência eventual e exigem consistência forte (Strong Consistency)."
    }
  },
  {
    "id": "q_sw_4113",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Modelo Família de Colunas - Cassandra",
    "statement": "O Apache Cassandra é um banco de dados NoSQL do tipo 'Wide Column Store'. Para qual cenário ele é mais indicado?",
    "options": {
      "A": "Sistemas pequenos com pouquíssimos dados.",
      "B": "Realizar consultas complexas com muitos JOINs entre tabelas.",
      "C": "Substituir o Excel em computadores de escritório.",
      "D": "Armazenar apenas arquivos de imagem e vídeo (Object Storage).",
      "E": "Aplicações que exigem altíssima disponibilidade e escrita massiva de dados em múltiplos data centers sem ponto único de falha."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Cassandra foi criado pelo Facebook para lidar com trilhões de dados. Ele não tem um 'mestre', todos os servidores são iguais. Se 3 servidores explodirem, o banco continua rodando. É o 'tanque de guerra' dos bancos NoSQL.",
      "puloDoGato": "Cassandra = Escrita Massiva + Alta Disponibilidade + Sem Ponto Único de Falha.",
      "cascasDeBanana": {
        "A": "Cassandra é complexo de configurar, não vale a pena para coisas pequenas.",
        "C": "Ferramentas totalmente diferentes.",
        "D": "Ele é um banco de dados, não um sistema de arquivos.",
        "B": "NoSQL geralmente desencoraja o uso de JOINs; você deve modelar os dados já 'juntos'."
      },
      "dicaDeOuro": "O Cassandra utiliza uma linguagem de consulta chamada CQL, que lembra muito o SQL, mas com restrições importantes."
    }
  },
  {
    "id": "q_sw_4114",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Modelo de Grafo - Neo4j",
    "statement": "Bancos de dados de Grafo, como o Neo4j, focam no armazenamento de nós e relacionamentos. Qual o uso ideal para este tipo de banco?",
    "options": {
      "A": "Análise de redes sociais, sistemas de recomendação e detecção de fraudes complexas.",
      "B": "Cálculo de folha de pagamento de funcionários.",
      "C": "Controle de estoque de supermercado.",
      "D": "Hospedagem de sites estáticos em HTML.",
      "E": "Armazenamento de logs de acesso brutos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O banco de Grafo é perfeito para ver 'quem conhece quem'. Em vez de tabelas, você tem bolinhas (Pessoas) e setas (Amizade/Compra). Para descobrir que o 'Amigo do Amigo do seu Amigo' comprou um produto, o Neo4j faz isso em milisegundos, enquanto um banco SQL morreria fazendo JOINs.",
      "puloDoGato": "Graph DB = Relacionamentos Complexos / Redes Sociais.",
      "cascasDeBanana": {
        "B": "Bancos relacionais são melhores para dados estruturados e financeiros simples.",
        "E": "Bancos de documento ou colunares são melhores para logs.",
        "D": "Servidor web.",
        "C": "Relacional resolve bem."
      },
      "dicaDeOuro": "A linguagem de consulta do Neo4j chama-se Cypher e usa desenhos de setas `(a)-[:REL]->(b)` para representar as buscas."
    }
  },
  {
    "id": "q_sw_4200",
    "discipline": "Cloud Computing",
    "topic": "Características - Elasticidade",
    "statement": "Qual a principal diferença entre 'Escalabilidade' e 'Elasticidade' no contexto de Cloud Computing?",
    "options": {
      "A": "Escalabilidade é a capacidade de crescer; Elasticidade é a capacidade de crescer e encolher automaticamente conforme a demanda.",
      "B": "Elasticidade refere-se apenas ao aumento de memória RAM.",
      "C": "Não há diferença, os termos são sinônimos.",
      "D": "Escalabilidade só funciona em nuvens privadas.",
      "E": "Elasticidade é a capacidade de rodar em diferentes sistemas operacionais."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Escalabilidade é o potencial: o sistema 'consegue' aguentar mais carga se você der mais recursos. Elasticidade é o 'automático': o sistema percebe que tem muita gente e sobe 10 servidores sozinho, e quando a galera vai embora, ele desliga esses 10 pra você não pagar à toa.",
      "puloDoGato": "Escalabilidade = Poder de crescimento. Elasticidade = Ajuste dinâmico (sob demanda).",
      "cascasDeBanana": {
        "A": "",
        "B": "Pode ser CPU, RAM, Instâncias, etc.",
        "C": "Funciona em qualquer modelo de nuvem.",
        "D": "Confusão comum, mas tecnicamente diferentes.",
        "E": "Isso é Portabilidade."
      },
      "dicaDeOuro": "A elasticidade é o que permite o modelo de cobrança 'Pay-as-you-go' (Pague pelo que usar)."
    }
  },
  {
    "id": "q_sw_4201",
    "discipline": "Cloud Computing",
    "topic": "Modelos de Nuvem - Nuvem Híbrida",
    "statement": "Uma organização utiliza servidores próprios locais para processar dados sensíveis e a nuvem pública para lidar com picos de demanda em seu site de e-commerce. Esse modelo de implantação é chamado de:",
    "options": {
      "A": "Nuvem Distribuída.",
      "B": "Nuvem Comunitária.",
      "C": "Nuvem Híbrida.",
      "D": "Nuvem Pública.",
      "E": "Nuvem Privada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Nuvem Híbrida é o 'melhor dos dois mundos'. Você mantém o que é crítico e secreto 'em casa' (Privada/On-premise) e usa a escalabilidade infinita da AWS/Azure/Google (Pública) para o resto. É muito comum em bancos e governos.",
      "puloDoGato": "Pública + Privada = Híbrida.",
      "cascasDeBanana": {
        "D": "Tudo na internet aberta (ex: AWS).",
        "E": "Tudo dentro do data center da própria empresa.",
        "B": "Compartilhada por organizações com interesses comuns (ex: várias universidades).",
        "A": "Conceito de processamento na ponta (Edge computing)."
      },
      "dicaDeOuro": "O 'Cloud Bursting' é uma técnica de nuvem híbrida onde a carga transborda para a nuvem pública apenas quando a privada satura."
    }
  },
  {
    "id": "q_sw_4202",
    "discipline": "Cloud Computing",
    "topic": "Serverless Computing",
    "statement": "No modelo de computação 'Serverless' (como AWS Lambda ou Google Cloud Functions), qual a principal responsabilidade do desenvolvedor em relação à infraestrutura?",
    "options": {
      "A": "Escolher o tipo de processador físico que será utilizado.",
      "B": "Nenhuma, o desenvolvedor apenas fornece o código e o provedor de nuvem gerencia toda a execução, escala e disponibilidade.",
      "C": "Gerenciar a refrigeração do servidor físico.",
      "D": "Atualizar os patches de segurança do sistema operacional.",
      "E": "Configurar o balanceamento de carga e o tamanho das VMs."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Serverless não significa que não tem servidor. Significa que você NÃO PRECISA se preocupar com ele. Você sobe a sua função (ex: validar um CPF) e a nuvem se vira pra rodar ela. Se tiver 1 milhão de acessos, ela cria 1 milhão de instâncias da função e você só paga pelos milisegundos que cada uma rodou.",
      "puloDoGato": "Serverless = FaaS (Function as a Service) + Zero Gerenciamento de Infra.",
      "cascasDeBanana": {
        "E": "Isso é feito automaticamente pelo provedor.",
        "D": "O provedor cuida da segurança do SO e do Runtime.",
        "A": "Abstração total do hardware.",
        "C": "Responsabilidade do data center físico."
      },
      "dicaDeOuro": "O termo 'Cold Start' refere-se ao pequeno atraso que ocorre quando uma função serverless é chamada após muito tempo inativa e o provedor precisa 'ligar' o ambiente."
    }
  },
  {
    "id": "q_sw_4203",
    "discipline": "Cloud Computing",
    "topic": "Armazenamento em Nuvem - Durabilidade vs Disponibilidade",
    "statement": "Ao configurar um serviço de armazenamento (como S3), o termo 'Durabilidade de 11 noves' (99.999999999%) refere-se a:",
    "options": {
      "A": "A quantidade de usuários que podem ler o arquivo simultaneamente.",
      "B": "A probabilidade de o arquivo não ser perdido ou corrompido ao longo de um ano.",
      "C": "A probabilidade de o arquivo estar acessível a qualquer momento.",
      "D": "A velocidade de download do arquivo.",
      "E": "O tempo de vida útil do hardware do servidor."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Durabilidade é sobre 'não perder o dado'. Com 11 noves, se você guardar 10 milhões de arquivos, você pode perder 1 a cada 10 mil anos. É quase impossível sumir com o seu dado. Disponibilidade é sobre o site estar 'no ar' para você baixar o dado.",
      "puloDoGato": "Durabilidade = Proteção contra perda (Integridade). Disponibilidade = Uptime do acesso.",
      "cascasDeBanana": {
        "A": "Isso é Disponibilidade (geralmente em torno de 99.9% ou 99.99%).",
        "B": "",
        "C": "Throughput / Latência.",
        "D": "MTBF (Mean Time Between Failures).",
        "E": "Concorrência."
      },
      "dicaDeOuro": "A alta durabilidade é alcançada replicando o dado em múltiplos dispositivos e múltiplos data centers (Zonas de Disponibilidade)."
    }
  },
  {
    "id": "q_sw_4204",
    "discipline": "Cloud Computing",
    "topic": "Regiões e Zonas de Disponibilidade",
    "statement": "Na infraestrutura global da AWS, o que caracteriza uma 'Zona de Disponibilidade' (Availability Zone - AZ)?",
    "options": {
      "A": "Um ou mais data centers discretos, com energia, rede e conectividade redundantes dentro de uma Região.",
      "B": "Um país inteiro onde a nuvem opera.",
      "C": "O nome dado ao painel de controle do usuário.",
      "D": "Uma rede Wi-Fi gratuita para desenvolvedores.",
      "E": "Um satélite de comunicação da empresa."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Uma Região (ex: São Paulo) tem várias AZs. Elas ficam em prédios diferentes, com luz de companhias diferentes, para que se um prédio pegar fogo ou um bairro ficar sem luz, o seu sistema continue rodando na outra AZ que está a 20km de distância.",
      "puloDoGato": "Região = Área Geográfica. AZ = Grupo de Data Centers isolados para tolerância a falhas.",
      "cascasDeBanana": {
        "B": "Regiões podem abranger áreas menores que um país ou ser específicas de uma cidade.",
        "C": "Isso é o Console ou CLI.",
        "D": "Absurdo.",
        "E": "Conceitos de rede satelital (como Starlink), mas não é a definição de AZ."
      },
      "dicaDeOuro": "Para ter alta disponibilidade, seu sistema deve estar espalhado em pelo menos duas AZs diferentes."
    }
  },
  {
    "id": "q_sw_4205",
    "discipline": "Cloud Computing",
    "topic": "Multitenancy",
    "statement": "O conceito de 'Multitenancy' (Multilocação) em nuvem refere-se a:",
    "options": {
      "A": "Um único servidor dedicado exclusivamente para um único cliente.",
      "B": "A capacidade de rodar o sistema em várias linguagens de programação.",
      "C": "Ter vários gerentes para o mesmo projeto de nuvem.",
      "D": "Uma arquitetura onde uma única instância de software atende a múltiplos clientes (tenants), isolando os dados de cada um.",
      "E": "O uso de múltiplas nuvens públicas ao mesmo tempo (Multicloud)."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "É como um prédio de apartamentos. A estrutura (encanamento, elevador, portaria) é uma só (o software/hardware), mas cada morador (cliente) tem o seu apartamento trancado e ninguém entra no do vizinho. Isso torna o serviço muito mais barato para o provedor e para o cliente.",
      "puloDoGato": "Multitenancy = 1 Software / N Clientes isolados.",
      "cascasDeBanana": {
        "A": "Isso é Single-tenancy (ou Bare Metal / Dedicado).",
        "E": "Multicloud é outra estratégia.",
        "B": "Poliglotismo.",
        "C": "Gestão de pessoas."
      },
      "dicaDeOuro": "O maior desafio do multitenancy é garantir que o dado de um cliente nunca vaze para o outro (isolamento lógico)."
    }
  },
  {
    "id": "q_sw_4206",
    "discipline": "Cloud Computing",
    "topic": "Cloud-Native Architecture",
    "statement": "Um sistema 'Cloud-Native' é aquele que foi projetado especificamente para:",
    "options": {
      "A": "Aproveitar ao máximo as vantagens da nuvem, como microserviços, containers, APIs e infraestrutura dinâmica.",
      "B": "Funcionar sem necessidade de internet.",
      "C": "Ser instalado via CD-ROM ou Pen Drive.",
      "D": "Utilizar apenas bancos de dados relacionais locais.",
      "E": "Rodar em computadores antigos com pouca memória."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Não basta pegar um sistema velho e jogar na nuvem (isso é 'Lift and Shift'). Ser Cloud-Native é 'nascer' na nuvem, usando escalonamento automático, banco de dados global e deploys sem downtime. É desenhar o software pensando na elasticidade.",
      "puloDoGato": "Cloud-Native = Pensado para a Nuvem desde o início.",
      "cascasDeBanana": {
        "E": "Pelo contrário, exige infraestrutura moderna.",
        "B": "A nuvem EXIGE internet.",
        "C": "Instalação via rede/pipeline.",
        "D": "Prefere bancos de dados como serviço (Managed DBs)."
      },
      "dicaDeOuro": "A CNCF (Cloud Native Computing Foundation) é a organização que mantém os principais projetos desta área, como o Kubernetes."
    }
  },
  {
    "id": "q_sw_4207",
    "discipline": "Cloud Computing",
    "topic": "Edge Computing",
    "statement": "Qual o principal objetivo do 'Edge Computing' (Computação de Borda)?",
    "options": {
      "A": "Processar os dados o mais próximo possível da fonte geradora (ex: sensores, celulares), reduzindo a latência e o uso de banda.",
      "B": "Substituir o uso de fibra ótica por rádio amador.",
      "C": "Aumentar a segurança das senhas dos usuários.",
      "D": "Centralizar todo o processamento em um único data center gigante nos EUA.",
      "E": "Garantir que os servidores fiquem na borda física das mesas de trabalho."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Se você tem um carro autônomo, ele não pode mandar o vídeo pro data center do Google, esperar processar e receber de volta o comando de 'frear'. A decisão tem que ser na hora, ali no 'bico' (borda) do sensor. Edge computing leva a inteligência para perto de onde a coisa acontece.",
      "puloDoGato": "Edge Computing = Baixa Latência + Processamento Descentralizado.",
      "cascasDeBanana": {
        "D": "Isso é Cloud Computing centralizada clássica.",
        "C": "Segurança.",
        "B": "Irrelevante.",
        "E": "Piada técnica."
      },
      "dicaDeOuro": "Dispositivos de IoT (Internet das Coisas) são os maiores beneficiados pelo Edge Computing."
    }
  },
  {
    "id": "q_sw_4208",
    "discipline": "DevOps",
    "topic": "Cultura DevOps",
    "statement": "Qual o principal objetivo da cultura DevOps em uma organização de tecnologia?",
    "options": {
      "A": "Substituir todos os programadores por especialistas em Linux.",
      "B": "Integrar as equipes de desenvolvimento (Dev) e operações (Ops), automatizando processos para entregar software com mais qualidade, velocidade e frequência.",
      "C": "Dividir as equipes de desenvolvimento e operações em prédios diferentes para evitar conflitos.",
      "D": "Aumentar a quantidade de documentação em papel para cada entrega.",
      "E": "Garantir que os desenvolvedores nunca precisem se preocupar com o deploy."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Antigamente era uma guerra: o Dev fazia o código e 'jogava por cima do muro' pro Ops rodar. O Ops reclamava que o código não funcionava. O DevOps quebra esse muro. Agora todos são responsáveis pelo produto rodando bem, desde o código até o servidor.",
      "puloDoGato": "DevOps = Colaboração + Automação + Entrega Contínua.",
      "cascasDeBanana": {
        "A": "DevOps prega a UNIFICAÇÃO e proximidade.",
        "B": "",
        "C": "DevOps quer que o Dev entenda o ambiente onde seu código roda.",
        "D": "Foca em automação, não em papelada.",
        "E": "DevOps é uma cultura e conjunto de práticas, não uma substituição de cargos."
      },
      "dicaDeOuro": "A palavra 'DevOps' surgiu da combinação de 'Development' e 'Operations'."
    }
  },
  {
    "id": "q_sw_4209",
    "discipline": "DevOps",
    "topic": "Infraestrutura como Código (IaC)",
    "statement": "O que permite a prática de 'Infrastructure as Code' (IaC) utilizando ferramentas como Terraform ou CloudFormation?",
    "options": {
      "A": "Definir e gerenciar a infraestrutura (servidores, redes, bancos) através de arquivos de configuração versionáveis, em vez de configurações manuais.",
      "B": "Desenhar diagramas de rede em softwares gráficos.",
      "C": "Escrever manuais de instrução para os técnicos de hardware.",
      "D": "Eliminar a necessidade de usar a nuvem.",
      "E": "Transformar o código Java em um servidor físico."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Com IaC, você não clica em botões no console da Amazon pra criar um servidor. Você escreve um arquivo de texto: 'Quero 2 servidores com 4GB de RAM'. Você guarda esse arquivo no Git. Se precisar criar tudo de novo, é só rodar um comando. É infraestrutura tratada como software.",
      "puloDoGato": "IaC = Automação de Infra + Versionamento (Git) + Reprodutibilidade.",
      "cascasDeBanana": {
        "B": "Diagramas são visuais; IaC é código (texto).",
        "E": "Hardware continua existindo, o IaC apenas o gerencia.",
        "C": "A documentação está no próprio código do IaC.",
        "D": "IaC é o que faz a nuvem ser poderosa."
      },
      "dicaDeOuro": "A principal vantagem do IaC é evitar o 'drift' de configuração, onde um servidor fica diferente do outro por causa de alterações manuais esquecidas."
    }
  },
  {
    "id": "q_sw_4210",
    "discipline": "DevOps",
    "topic": "Docker - Imagens vs Containers",
    "statement": "No ecossistema Docker, qual a relação entre uma 'Imagem' e um 'Container'?",
    "options": {
      "A": "Uma Imagem é um container que foi desligado.",
      "B": "Containers são usados para bancos de dados, imagens são usadas para sites.",
      "C": "Uma Imagem é o arquivo estático (template) que contém tudo o que o app precisa para rodar; um Container é uma instância em execução dessa imagem.",
      "D": "Não há diferença, são o mesmo objeto com nomes diferentes.",
      "E": "Uma imagem só pode gerar um único container por vez."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Pense na Imagem como a 'Receita do Bolo' (ou a fôrma). Ela está parada no livro. O Container é o 'Bolo Pronto'. Você pode usar a mesma receita (Imagem) para fazer 10 bolos (Containers) iguais ao mesmo tempo.",
      "puloDoGato": "Imagem = Classe / Planta / Receita. Container = Objeto / Instância / Bolo.",
      "cascasDeBanana": {
        "A": "Um container parado continua sendo um container, mas inativo.",
        "B": "Ambos podem ser usados para qualquer aplicação.",
        "D": "Confusão comum de quem está começando.",
        "E": "Uma imagem pode gerar milhares de containers."
      },
      "dicaDeOuro": "As imagens do Docker são construídas em camadas, o que as torna muito leves para baixar e atualizar."
    }
  },
  {
    "id": "q_sw_4211",
    "discipline": "DevOps",
    "topic": "Kubernetes (K8s) - Conceito de Pod",
    "statement": "No Kubernetes, qual a menor unidade de implantação e gerenciamento que pode ser criada?",
    "options": {
      "A": "Service.",
      "B": "Cluster.",
      "C": "Pod.",
      "D": "Node (Nó).",
      "E": "Docker Container."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O Kubernetes não gerencia containers diretamente, ele gerencia 'Pods'. Um Pod é como uma 'casinha' onde mora um (ou mais) containers. O K8s olha pra casinha: se a casinha cair, ele constrói outra igual.",
      "puloDoGato": "Menor unidade do K8s = Pod.",
      "cascasDeBanana": {
        "E": "O container vive DENTRO do Pod.",
        "D": "Node é a máquina física ou virtual onde os Pods rodam.",
        "B": "Cluster é o conjunto de todos os Nodes e Pods.",
        "A": "Service é a forma de dar um endereço IP/nome para um grupo de Pods."
      },
      "dicaDeOuro": "Geralmente, um Pod contém apenas um container, mas pode ter 'Sidecars' (containers auxiliares para log ou rede)."
    }
  },
  {
    "id": "q_sw_4212",
    "discipline": "DevOps",
    "topic": "Integração Contínua (CI)",
    "statement": "Qual a prática central da Integração Contínua (Continuous Integration)?",
    "options": {
      "A": "Impedir que os desenvolvedores vejam o código uns dos outros.",
      "B": "Realizar o deploy no cliente uma vez por ano.",
      "C": "Integrar as mudanças de código dos desenvolvedores em um repositório compartilhado com frequência, disparando builds e testes automáticos a cada commit.",
      "D": "Contratar uma empresa externa para fazer os testes manuais.",
      "E": "Escrever o código sem usar compiladores."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "O CI evita o 'Inferno da Integração'. Sem CI, cada um trabalha no seu canto por um mês e, na hora de juntar, nada funciona. Com CI, todo mundo junta o código todo dia. Se alguém quebrar algo, o sistema de CI (ex: Jenkins, GitHub Actions) 'grita' na hora: 'O build falhou!'.",
      "puloDoGato": "CI = Commits frequentes + Build Automático + Testes Automáticos.",
      "cascasDeBanana": {
        "B": "Isso é o oposto da agilidade.",
        "A": "Colaboração é a chave do CI.",
        "D": "Automação é a chave do CI.",
        "E": "Absurdo."
      },
      "dicaDeOuro": "O objetivo do CI é detectar bugs o mais rápido possível (fail fast)."
    }
  },
  {
    "id": "q_sw_4213",
    "discipline": "DevOps",
    "topic": "Entrega Contínua vs Deploy Contínuo",
    "statement": "Qual a diferença sutil entre 'Continuous Delivery' e 'Continuous Deployment'?",
    "options": {
      "A": "Nenhuma, são apenas nomes diferentes para o CD.",
      "B": "Continuous Deployment é mais lento que o Delivery.",
      "C": "No Continuous Delivery, o código está sempre pronto para ir para produção, mas o deploy final exige aprovação manual; no Continuous Deployment, o código aprovado nos testes vai para produção automaticamente.",
      "D": "Continuous Delivery não utiliza automação de testes.",
      "E": "Continuous Deployment é apenas para aplicativos móveis."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Delivery = 'Tá pronto, patrão! Quer que eu suba agora?'. Deployment = 'Passou no teste? Já tá no ar pro cliente!'. O Deployment é o nível máximo de automação, onde a intervenção humana no lançamento é zero.",
      "puloDoGato": "Delivery = Pronto para produção (Gatilho Manual). Deployment = Vai direto para produção (Gatilho Automático).",
      "cascasDeBanana": {
        "A": "Confusão comum de mercado.",
        "E": "Funciona para qualquer software.",
        "D": "Ambos EXIGEM automação pesada de testes.",
        "B": "Deployment é mais rápido pois não espera a decisão humana."
      },
      "dicaDeOuro": "Empresas como Netflix e Amazon fazem Continuous Deployment milhares de vezes por dia."
    }
  },
  {
    "id": "q_sw_4214",
    "discipline": "DevOps",
    "topic": "Monitoramento e Observabilidade",
    "statement": "Qual a diferença principal entre Monitoramento e Observabilidade em ambientes DevOps?",
    "options": {
      "A": "Monitoramento é para servidores, Observabilidade é para usuários.",
      "B": "Monitoramento te diz QUE algo está errado (baseado em métricas conhecidas); Observabilidade te ajuda a entender POR QUE algo está errado (através de logs, traces e métricas).",
      "C": "Observabilidade é apenas um nome novo e chique para o log do sistema.",
      "D": "Monitoramento exige o uso de câmeras de segurança no data center.",
      "E": "Sistemas Cloud-Native não precisam de monitoramento."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 3,
    "resolution": {
      "papoReto": "Monitoramento é o painel do carro: a luz do óleo acendeu (alerta). Observabilidade é ter telemetria completa pra saber se a luz acendeu por causa de um vazamento, da bomba ou do sensor sujo, mesmo que você nunca tenha visto esse problema antes.",
      "puloDoGato": "Monitoramento = Saber que falhou. Observabilidade = Entender a causa raiz (Logs + Metrics + Traces).",
      "cascasDeBanana": {
        "A": "Ambos cobrem todo o sistema.",
        "B": "",
        "C": "Logs são apenas um dos pilares da observabilidade.",
        "D": "Vigilância física.",
        "E": "Eles precisam mais ainda devido à complexidade distribuída."
      },
      "dicaDeOuro": "Os três pilares da observabilidade são: Logs, Métricas e Distributed Tracing (Rastreamento Distribuído)."
    }
  },
  {
    "id": "q_sw_4300",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Java - Spring Boot",
    "statement": "O Spring Boot é famoso por sua filosofia de 'Convention over Configuration' (Convenção sobre Configuração). Qual componente é responsável por configurar automaticamente o ambiente com base nas dependências encontradas no classpath?",
    "options": {
      "A": "Maven/Gradle.",
      "B": "Auto-configuration (@EnableAutoConfiguration).",
      "C": "Spring MVC.",
      "D": "Spring Security.",
      "E": "Spring Data JPA."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Antigamente, configurar um projeto Java era um inferno de arquivos XML. O Spring Boot mudou isso: se ele vê que você colocou a biblioteca do banco MySQL no projeto, ele já configura o banco sozinho pra você. É a 'mágica' da auto-configuração.",
      "puloDoGato": "Spring Boot = Auto-configuration + Embedded Server (Tomcat).",
      "cascasDeBanana": {
        "C": "Cuida apenas da parte web/REST.",
        "D": "Cuida apenas de autenticação e autorização.",
        "E": "Cuida apenas da persistência de dados.",
        "A": "São gerenciadores de dependência, não fazem parte do código do Spring."
      },
      "dicaDeOuro": "Use o 'Spring Initializr' para começar qualquer projeto Spring Boot de forma rápida."
    }
  },
  {
    "id": "q_sw_4301",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Python - Gestão de Memória",
    "statement": "Em Python, como funciona o mecanismo principal de gerenciamento de memória e coleta de lixo (Garbage Collection)?",
    "options": {
      "A": "O gerenciamento de memória é feito inteiramente pelo sistema operacional Linux.",
      "B": "Python utiliza primariamente a Contagem de Referências (Reference Counting) e um coletor cíclico para lidar com referências circulares.",
      "C": "A memória nunca é liberada enquanto o script estiver rodando.",
      "D": "O programador deve liberar a memória manualmente usando o comando `free()`.",
      "E": "Python utiliza o mesmo Garbage Collector do Java (JVM)."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Python é 'preguiçoso' e inteligente. Ele conta quantas pessoas estão usando um objeto. Se a contagem chegar a zero, ele apaga o objeto da memória na hora. Para casos onde um objeto aponta pro outro e vice-versa (referência circular), ele tem um coletor especial que roda de tempos em tempos.",
      "puloDoGato": "Python Memory = Reference Counting + Cyclic Garbage Collector.",
      "cascasDeBanana": {
        "A": "Isso é C/C++ (`malloc`/`free`). Python é memória gerenciada.",
        "B": "",
        "C": "Isso causaria 'Memory Leak' constante.",
        "D": "São implementações diferentes (PVM vs JVM).",
        "E": "O SO gerencia a RAM bruta, mas a lógica de quais objetos apagar é da linguagem."
      },
      "dicaDeOuro": "O comando `sys.getrefcount(obj)` permite ver quantas referências um objeto possui no momento."
    }
  },
  {
    "id": "q_sw_4302",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Node.js - Event Loop",
    "statement": "O Node.js é conhecido por ser 'Single-threaded' e 'Non-blocking I/O'. Qual o componente do Node.js responsável por gerenciar as operações assíncronas e delegar tarefas pesadas de I/O para o sistema operacional?",
    "options": {
      "A": "V8 Engine.",
      "B": "NPM.",
      "C": "Libuv (Event Loop).",
      "D": "CommonJS.",
      "E": "Express.js."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Node é como um garçom (Single-thread) que anota o pedido e corre pra cozinha. Ele não fica parado esperando a comida ficar pronta. Quem gerencia essa espera e avisa o garçom quando a comida chegou é a Libuv (o Event Loop). É isso que permite ao Node aguentar milhares de conexões simultâneas.",
      "puloDoGato": "Node.js = V8 (Executa JS) + Libuv (Gerencia Event Loop/Assincronismo).",
      "cascasDeBanana": {
        "A": "O V8 apenas interpreta e executa o código JavaScript.",
        "B": "Gerenciador de pacotes.",
        "E": "Framework web para Node.",
        "D": "Padrão de módulos antigo do Node."
      },
      "dicaDeOuro": "Nunca 'bloqueie' o Event Loop com cálculos matemáticos pesados ou loops infinitos, senão o Node para de responder a todos os outros usuários."
    }
  },
  {
    "id": "q_sw_4303",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Injeção de Dependência",
    "statement": "Qual o principal benefício de utilizar o padrão de Injeção de Dependência (DI) em frameworks como Spring ou NestJS?",
    "options": {
      "A": "Facilitar a testabilidade e o baixo acoplamento, permitindo que as dependências de uma classe sejam fornecidas externamente em vez de serem instanciadas por ela mesma.",
      "B": "Aumentar o acoplamento entre as classes para tornar o código mais rígido.",
      "C": "Reduzir o tamanho do arquivo binário final.",
      "D": "Substituir a necessidade de escrever testes unitários.",
      "E": "Impedir o uso de interfaces."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Sem DI, a classe A cria a classe B dentro dela (`new B()`). Se você quiser testar a A sem a B, você não consegue. Com DI, você diz: 'Classe A, toma aqui uma instância de B'. Na hora do teste, você pode mandar um 'B de mentirinha' (Mock) e testar a classe A isolada.",
      "puloDoGato": "DI = Inversão de Controle (IoC) + Testabilidade + Flexibilidade.",
      "cascasDeBanana": {
        "B": "O objetivo é justamente o contrário: BAIXO acoplamento.",
        "C": "Não interfere significativamente no tamanho do código.",
        "E": "Pelo contrário, DI funciona muito melhor com interfaces.",
        "D": "DI é o que TORNA possível bons testes unitários."
      },
      "dicaDeOuro": "No Spring, a anotação `@Autowired` é a forma mais comum de realizar a injeção de dependência."
    }
  },
  {
    "id": "q_sw_4304",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Python - Decoradores",
    "statement": "Em Python, o que é um 'Decorador' (Decorator)?",
    "options": {
      "A": "Uma função que envolve outra função para modificar ou estender o seu comportamento sem alterar o seu código fonte original.",
      "B": "Um tema visual para o editor de código.",
      "C": "Um erro de sintaxe que acontece quando se usa muitas aspas.",
      "D": "Uma ferramenta de design de banco de dados.",
      "E": "Um tipo de dado usado para armazenar cores em hexadecimal."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Decorador é como uma 'capinha' para a sua função. Você coloca o `@meu_decorador` em cima de uma função e ele pode rodar um código antes e depois dela. Muito usado para fazer logs, medir tempo de execução ou verificar se o usuário está logado.",
      "puloDoGato": "Decorator = Função que recebe função e retorna função (Wrapper).",
      "cascasDeBanana": {
        "B": "Confusão com 'decoração' de UI.",
        "E": "Nada a ver.",
        "C": "Sintaxe válida e poderosa.",
        "D": "Assunto de programação funcional/OO."
      },
      "dicaDeOuro": "Os decoradores seguem o padrão de projeto 'Decorator' da GoF (Gang of Four)."
    }
  },
  {
    "id": "q_sw_4305",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Java - Streams API",
    "statement": "A Streams API, introduzida no Java 8, permite processar coleções de dados de forma funcional. Qual a diferença entre uma operação 'Intermediária' e uma 'Terminal' em uma Stream?",
    "options": {
      "A": "Operações intermediárias apagam os dados da coleção original.",
      "B": "Não há diferença, todas as operações executam imediatamente.",
      "C": "Operações terminais podem ser chamadas várias vezes na mesma stream.",
      "D": "Operações terminais servem apenas para imprimir dados no console.",
      "E": "Operações intermediárias retornam uma nova Stream e não executam o processamento até que uma operação terminal seja chamada (Lazy Evaluation)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Imagine uma esteira de fábrica. As intermediárias (`filter`, `map`) são as máquinas que preparam o produto, mas a esteira só liga quando você aperta o botão de 'Embalar' (operação terminal como `collect` ou `forEach`). Se você não chamar a terminal, nada acontece.",
      "puloDoGato": "Stream = Intermediárias (Lazy/Retornam Stream) + Terminal (Eager/Encerra a Stream).",
      "cascasDeBanana": {
        "C": "Uma stream só pode ter UMA operação terminal.",
        "A": "Streams não alteram a fonte de dados original.",
        "B": "Java Streams são famosas pela execução preguiçosa (Lazy).",
        "D": "Podem retornar listas, mapas, valores únicos, etc."
      },
      "dicaDeOuro": "O uso de `parallelStream()` permite processar os dados usando múltiplos núcleos da CPU de forma quase automática."
    }
  },
  {
    "id": "q_sw_4306",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Microserviços - API Gateway",
    "statement": "Em uma arquitetura de microserviços, qual a função de um 'API Gateway'?",
    "options": {
      "A": "Atuar como um ponto de entrada único para todas as requisições externas, realizando roteamento, autenticação, monitoramento e limitação de taxa (rate limiting).",
      "B": "Gerenciar o Wi-Fi dos usuários da empresa.",
      "C": "Traduzir o código Java para Python em tempo real.",
      "D": "Compilar o código fonte do backend.",
      "E": "Substituir o banco de dados de todos os serviços."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Gateway é a 'recepção' do prédio. O cliente não precisa saber onde fica cada microserviço. Ele manda tudo pro Gateway, e o Gateway sabe que `/vendas` vai pro serviço A e `/clientes` vai pro serviço B. Ele também barra quem não tem crachá (autenticação).",
      "puloDoGato": "API Gateway = Entrada Única + Segurança + Roteamento.",
      "cascasDeBanana": {
        "E": "Não lida com persistência de dados.",
        "D": "Isso é papel do CI/CD.",
        "B": "Infraestrutura de rede física.",
        "C": "Impossível."
      },
      "dicaDeOuro": "Ferramentas como Kong, AWS API Gateway e Spring Cloud Gateway são muito populares."
    }
  },
  {
    "id": "q_sw_4307",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Autenticação - JWT",
    "statement": "O JWT (JSON Web Token) é um padrão para troca segura de informações. Quais são as três partes que compõem a estrutura de um token JWT?",
    "options": {
      "A": "Username, Password e Domain.",
      "B": "Request, Response e Error.",
      "C": "Header, Payload e Signature.",
      "D": "Key, Secret e IV.",
      "E": "ID, Value e Timestamp."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "JWT é o 'passe' do usuário. 1. Header (Diz o tipo de token e o algoritmo), 2. Payload (Os dados do usuário, como nome e cargo), 3. Signature (A assinatura que garante que ninguém alterou o token). Tudo isso é codificado em Base64 e separado por pontos.",
      "puloDoGato": "JWT = Header.Payload.Signature.",
      "cascasDeBanana": {
        "A": "Esses são dados de login, não a estrutura do token.",
        "E": "Termos genéricos.",
        "D": "Termos de criptografia, mas não a estrutura oficial do JWT.",
        "B": "Fluxo HTTP."
      },
      "dicaDeOuro": "Atenção: O Payload do JWT NÃO é criptografado por padrão, apenas assinado. Nunca coloque senhas ou dados sensíveis dentro dele!"
    }
  },
  {
    "id": "q_sw_4308",
    "discipline": "Frontend Moderno",
    "topic": "React - Virtual DOM",
    "statement": "Como o React utiliza o conceito de 'Virtual DOM' para otimizar a performance de renderização no navegador?",
    "options": {
      "A": "Ele desabilita o CSS para que a página carregue mais rápido.",
      "B": "Ele apaga e reconstrói toda a página HTML a cada clique do usuário.",
      "C": "Ele envia o processamento da interface para o servidor (SSR).",
      "D": "Ele mantém uma cópia leve do DOM em memória, calcula as diferenças (diffing) entre o estado anterior e o atual, e atualiza no DOM real apenas o que mudou.",
      "E": "Ele utiliza o banco de dados SQL diretamente no browser."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Mexer no DOM real do navegador é 'caro' e lento. O React faz o trabalho 'sujo' na memória (Virtual DOM) e só vai no navegador pra mudar o que é estritamente necessário. Se você mudou só uma letra num parágrafo, ele não redesenha a tela inteira, só aquela letra.",
      "puloDoGato": "Virtual DOM = Cópia em memória + Algoritmo de Diffing + Atualização pontual.",
      "cascasDeBanana": {
        "B": "Isso é o que o React evita (re-renderização total desnecessária).",
        "C": "SSR existe (Next.js), mas não é o conceito de Virtual DOM.",
        "E": "Bancos no browser são IndexedDB/LocalStorage, sem relação direta com VDOM.",
        "A": "Absurdo."
      },
      "dicaDeOuro": "O algoritmo que faz essa comparação de forma eficiente chama-se Reconciliation."
    }
  },
  {
    "id": "q_sw_4309",
    "discipline": "Frontend Moderno",
    "topic": "React Hooks - useEffect",
    "statement": "Para que serve o Hook `useEffect` no React?",
    "options": {
      "A": "Para estilizar componentes usando CSS-in-JS.",
      "B": "Para lidar com 'efeitos colaterais', como chamadas de API, assinaturas de eventos ou manipulação direta do DOM após a renderização do componente.",
      "C": "Para substituir o uso de Redux em todos os casos.",
      "D": "Para criar novas rotas na aplicação.",
      "E": "Para deletar componentes do servidor."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O `useEffect` é o 'e depois?'. Depois que o componente apareceu na tela, você quer buscar os dados no banco? Usa o `useEffect`. Quer começar um cronômetro? Usa o `useEffect`. Ele substitui os antigos métodos de ciclo de vida como `componentDidMount`.",
      "puloDoGato": "useEffect = Lógica fora do fluxo de renderização (Side Effects).",
      "cascasDeBanana": {
        "A": "Isso é papel do React Router.",
        "B": "",
        "C": "Isso seria Styled Components ou CSS puro.",
        "D": "Redux é para estado global complexo; `useEffect` é para ações.",
        "E": "React roda no cliente, não deleta nada do servidor diretamente."
      },
      "dicaDeOuro": "Atenção ao 'array de dependências' `[]`. Se você esquecer ele, o efeito pode rodar infinitamente e travar o navegador!"
    }
  },
  {
    "id": "q_sw_4310",
    "discipline": "Frontend Moderno",
    "topic": "Single Page Applications (SPA)",
    "statement": "Qual a principal característica de uma Single Page Application (SPA) em termos de navegação?",
    "options": {
      "A": "O site não funciona em dispositivos móveis.",
      "B": "O código fonte é escondido do usuário final.",
      "C": "A página é recarregada inteira a cada clique em um link.",
      "D": "O sistema só pode ter uma única tela para o usuário.",
      "E": "Apenas os dados e partes da interface são atualizados dinamicamente sem que o navegador recarregue a página inteira (F5)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em uma SPA, a 'mágica' é que você sente que está num app de celular. Você clica nas abas e o conteúdo muda instantaneamente. O navegador nunca dá aquele 'pisco' de recarregar tudo. É tudo via JavaScript.",
      "puloDoGato": "SPA = Carregamento único inicial + Troca de dados via AJAX/Fetch.",
      "cascasDeBanana": {
        "C": "Isso são os sites tradicionais (Multi Page Applications).",
        "D": "Pode ter milhares de 'telas' lógicas, mas tecnicamente é um arquivo HTML só.",
        "B": "O código JS de uma SPA é sempre visível no navegador (pode ser ofuscado, mas está lá).",
        "A": "SPAs são ótimas para mobile (PWA)."
      },
      "dicaDeOuro": "Frameworks como React, Vue e Angular são os reis das SPAs."
    }
  },
  {
    "id": "q_sw_4311",
    "discipline": "Frontend Moderno",
    "topic": "Gerenciamento de Estado - Redux",
    "statement": "O Redux utiliza o conceito de 'Single Source of Truth' (Fonte Única de Verdade). Isso significa que:",
    "options": {
      "A": "A senha do usuário é armazenada em texto claro no navegador.",
      "B": "O servidor é a única fonte de dados, o frontend não armazena nada.",
      "C": "Cada componente deve ter seu próprio banco de dados privado.",
      "D": "O código deve ser escrito por apenas um desenvolvedor.",
      "E": "Todo o estado da aplicação é armazenado em uma única árvore de objetos (Store) centralizada."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "No Redux, para não ficar uma bagunça de um componente passando dado pro outro (Prop Drilling), você cria um 'cofre' central (a Store). Se qualquer parte do app mudar o dado lá, todo mundo que está olhando pro cofre fica sabendo na hora.",
      "puloDoGato": "Redux Store = Estado Global Centralizado e Previsível.",
      "cascasDeBanana": {
        "C": "Isso dificultaria o compartilhamento de dados.",
        "D": "Termo de gestão, não técnico.",
        "B": "O estado no Redux fica na memória do navegador.",
        "A": "Péssima prática de segurança."
      },
      "dicaDeOuro": "As mudanças no Redux só podem ser feitas através de 'Actions' e processadas por 'Reducers', garantindo que o estado não mude 'do nada'."
    }
  },
  {
    "id": "q_sw_4312",
    "discipline": "Frontend Moderno",
    "topic": "TypeScript no Frontend",
    "statement": "Qual a principal vantagem de utilizar TypeScript em vez de JavaScript puro no desenvolvimento de grandes aplicações frontend?",
    "options": {
      "A": "O TypeScript adiciona tipagem estática opcional, permitindo detectar erros de tipo ainda durante o desenvolvimento (antes de rodar o código).",
      "B": "O TypeScript transforma automaticamente o site em um aplicativo iOS.",
      "C": "O TypeScript é a única linguagem aceita pelo Google Chrome.",
      "D": "O TypeScript roda muito mais rápido no navegador.",
      "E": "O TypeScript elimina a necessidade de usar CSS."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O JS é 'terra de ninguém': você pode tentar somar um número com um texto e ele não reclama, mas o seu app quebra na mão do cliente. O TS é o 'corretor ortográfico' do código. Ele avisa: 'Ei, você disse que isso era um número, não pode passar um texto aqui!'.",
      "puloDoGato": "TypeScript = JavaScript + Tipagem (Segurança e Autocompletar).",
      "cascasDeBanana": {
        "D": "O TS é transpilado para JS para rodar; a velocidade é a mesma.",
        "E": "CSS continua sendo necessário.",
        "C": "Navegadores rodam JS. O TS deve ser 'traduzido' para JS antes.",
        "B": "Não é um framework mobile."
      },
      "dicaDeOuro": "O uso de TypeScript melhora drasticamente a experiência do desenvolvedor (DX) com um autocompletar muito mais inteligente."
    }
  },
  {
    "id": "q_sw_4313",
    "discipline": "Frontend Moderno",
    "topic": "Componentes - Props vs State",
    "statement": "No React, qual a diferença básica entre `Props` e `State`?",
    "options": {
      "A": "State é armazenado no banco de dados, Props são armazenadas em cookies.",
      "B": "Props são usadas para funções, State é usado para variáveis de texto.",
      "C": "Não há diferença, são apenas nomes diferentes para variáveis.",
      "D": "Props são mutáveis pelo próprio componente, State é imutável.",
      "E": "Props são passadas de fora (pai para filho) e são imutáveis para quem as recebe; State é o dado interno e mutável gerenciado pelo próprio componente."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Props são como 'argumentos de uma função' (vêm de fora). State é como as 'variáveis locais' (estão dentro). Se você quer que o componente mude quando o USUÁRIO clica em algo, você usa o State. Se você quer mandar um nome para o componente exibir, você usa Props.",
      "puloDoGato": "Props = Vêm do Pai (Leitura). State = Dono do Componente (Escrita/Mudança).",
      "cascasDeBanana": {
        "D": "Invertido.",
        "B": "Ambos podem carregar qualquer tipo de dado JS.",
        "C": "Diferença fundamental no ciclo de vida do React.",
        "A": "Ambos vivem na memória RAM do navegador."
      },
      "dicaDeOuro": "Sempre que o State ou as Props de um componente mudam, o React re-renderiza o componente automaticamente."
    }
  },
  {
    "id": "q_sw_4314",
    "discipline": "Frontend Moderno",
    "topic": "CSS - Responsive Design",
    "statement": "O que são 'Media Queries' no contexto de desenvolvimento frontend?",
    "options": {
      "A": "Scripts que detectam a localização do usuário.",
      "B": "Consultas SQL feitas diretamente no CSS.",
      "C": "Uma forma de compactar o código JavaScript.",
      "D": "Regras de CSS que permitem aplicar estilos diferentes baseados em características do dispositivo, como a largura da tela (viewport).",
      "E": "Vídeos que rodam automaticamente no fundo do site."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "É o que faz o site ser 'Responsivo'. Você diz: 'Se a tela tiver menos de 600px (celular), coloque o menu lá embaixo e aumente a letra'. É a base do Mobile-First.",
      "puloDoGato": "Media Queries = Estilos Condicionais por Tamanho de Tela.",
      "cascasDeBanana": {
        "B": "CSS não faz consultas SQL.",
        "E": "Isso são tags `<video>` ou background-video.",
        "A": "Isso é Geolocation API (JS).",
        "C": "Isso seria Minificação."
      },
      "dicaDeOuro": "O uso de unidades flexíveis como `rem`, `em` e `%` junto com Media Queries é a melhor prática para layouts modernos."
    }
  },
  {
    "id": "q_sw_4400",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Propriedades ACID",
    "statement": "O conceito de 'Atomicidade' nas propriedades ACID de uma transação de banco de dados garante que:",
    "options": {
      "A": "O banco de dados deve estar sempre disponível para leitura.",
      "B": "Os dados devem ser replicados em pelo menos três servidores diferentes.",
      "C": "Apenas um usuário por vez pode realizar consultas no banco.",
      "D": "Ou todas as operações da transação são confirmadas (commit), ou nenhuma delas é aplicada (rollback), tratando a transação como uma unidade indivisível.",
      "E": "A transação deve ser executada o mais rápido possível."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Atomicidade vem de 'átomo' (indivisível). Imagine transferir dinheiro: 1. Tira da sua conta, 2. Coloca na conta do amigo. Se a luz cair no meio, o banco não pode deixar o dinheiro 'sumir'. Ou faz os dois passos, ou desfaz tudo. É o 'Tudo ou Nada'.",
      "puloDoGato": "Atomicidade = Tudo ou Nada (All or nothing).",
      "cascasDeBanana": {
        "E": "Performance não é garantida pelo ACID.",
        "A": "Isso seria Disponibilidade.",
        "B": "Isso é característica de bancos distribuídos.",
        "C": "Isso seria Isolamento absoluto (Serializável), mas o ACID permite concorrência controlada."
      },
      "dicaDeOuro": "As outras letras do ACID são: Consistência, Isolamento e Durabilidade."
    }
  },
  {
    "id": "q_sw_4401",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Normalização - 1ª Forma Normal (1FN)",
    "statement": "Para que uma tabela esteja na Primeira Forma Normal (1FN), qual condição fundamental deve ser atendida?",
    "options": {
      "A": "A tabela deve ter pelo menos 10 colunas.",
      "B": "Não deve haver chaves estrangeiras na tabela.",
      "C": "Todas as colunas devem ser do tipo texto.",
      "D": "A tabela não deve conter atributos multivalorados ou compostos; todos os campos devem conter apenas valores atômicos.",
      "E": "Não deve haver dependências parciais da chave primária."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "1FN é a 'faxina básica'. Você não pode ter uma coluna 'Telefones' com 3 números separados por vírgula dentro. Cada quadradinho da tabela só pode ter UM valor. Se o cara tem 3 telefones, ou você cria 3 linhas ou cria uma tabela só de telefones.",
      "puloDoGato": "1FN = Sem grupos repetidos + Valores Atômicos.",
      "cascasDeBanana": {
        "E": "Isso é requisito para a 2ª Forma Normal (2FN).",
        "A": "O número de colunas é irrelevante para a normalização.",
        "C": "Tipos de dados podem ser variados (Data, Número, etc).",
        "B": "Chaves estrangeiras são vitais para o modelo relacional."
      },
      "dicaDeOuro": "A normalização serve para evitar a redundância de dados e anomalias de atualização."
    }
  },
  {
    "id": "q_sw_4402",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "SQL - JOINs",
    "statement": "Em uma consulta SQL, qual tipo de JOIN retorna todos os registros da tabela à esquerda e os registros correspondentes da tabela à direita (retornando NULL onde não houver correspondência)?",
    "options": {
      "A": "NATURAL JOIN.",
      "B": "RIGHT JOIN.",
      "C": "INNER JOIN.",
      "D": "CROSS JOIN.",
      "E": "LEFT JOIN (ou LEFT OUTER JOIN)."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O LEFT JOIN é o 'prioridade pra esquerda'. Imagine uma lista de Clientes e uma lista de Pedidos. Se você fizer LEFT JOIN Clientes com Pedidos, você vai ver TODOS os clientes, mesmo aqueles que nunca compraram nada (nesses casos, os dados do pedido virão vazios/NULL).",
      "puloDoGato": "LEFT JOIN = Tudo da Esquerda + O que bater da Direita.",
      "cascasDeBanana": {
        "C": "INNER JOIN só traz quem tem par (se o cliente não comprou, ele some da lista).",
        "B": "RIGHT JOIN daria prioridade aos Pedidos.",
        "D": "CROSS JOIN multiplica tudo por tudo (Produto Cartesiano).",
        "A": "NATURAL JOIN faz o join automático baseado em nomes de colunas iguais (perigoso)."
      },
      "dicaDeOuro": "Use o `LEFT JOIN` sempre que quiser gerar relatórios que incluam itens que 'não possuem' registros relacionados."
    }
  },
  {
    "id": "q_sw_4403",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Índices - Performance",
    "statement": "Qual a principal vantagem e a principal desvantagem de criar muitos índices em uma tabela de banco de dados?",
    "options": {
      "A": "Vantagem: Ocupa menos espaço em disco; Desvantagem: Consultas ficam mais lentas.",
      "B": "Vantagem: Aumenta a velocidade de consultas (SELECT); Desvantagem: Reduz a velocidade de escritas (INSERT/UPDATE/DELETE) e aumenta o uso de disco.",
      "C": "Não há desvantagens em criar índices.",
      "D": "Vantagem: Melhora a segurança; Desvantagem: O banco fica apenas leitura.",
      "E": "Vantagem: Permite guardar imagens; Desvantagem: O banco exige internet mais rápida."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Índice é como o índice remissivo de um livro. Ajuda você a achar a página (o dado) muito mais rápido. Mas, toda vez que você escreve uma página nova no livro (INSERT), você tem que parar e atualizar o índice também. Se tiver 50 índices, o banco vai demorar muito pra salvar um dado novo.",
      "puloDoGato": "Índice = Busca Rápida + Escrita Lenta.",
      "cascasDeBanana": {
        "A": "Invertido. Índice ocupa MAIS espaço.",
        "B": "",
        "C": "Segurança e Read-only não têm relação direta com índices.",
        "D": "Assuntos desconexos.",
        "E": "O excesso de índices pode 'matar' a performance de gravação do sistema."
      },
      "dicaDeOuro": "Crie índices apenas nas colunas que são usadas com frequência em cláusulas `WHERE` ou `JOIN`."
    }
  },
  {
    "id": "q_sw_4404",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Chaves - Primária vs Estrangeira",
    "statement": "Sobre chaves em bancos de dados relacionais, é correto afirmar que:",
    "options": {
      "A": "Uma tabela pode ter múltiplas chaves primárias.",
      "B": "A chave primária (PK) permite valores nulos (NULL).",
      "C": "Chaves primárias só podem ser do tipo numérico.",
      "D": "A chave estrangeira deve ter sempre o mesmo nome que a chave primária da tabela de origem.",
      "E": "A chave estrangeira (FK) é utilizada para estabelecer e manter o relacionamento entre os dados de duas tabelas, garantindo a integridade referencial."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A Chave Primária é o CPF do registro: único e obrigatório. A Chave Estrangeira é o 'apontador': ela diz que 'Este pedido pertence ao cliente 10'. A integridade referencial impede que você apague o cliente 10 se ele ainda tiver pedidos pendentes.",
      "puloDoGato": "PK = Identificador Único. FK = Vínculo entre tabelas.",
      "cascasDeBanana": {
        "A": "Uma tabela tem apenas UMA chave primária (que pode ser composta por mais de uma coluna, mas ainda é UMA chave).",
        "B": "PK NUNCA aceita NULL.",
        "D": "Pode ter nomes diferentes (ex: `id_cliente` na PK e `cliente_id` na FK).",
        "C": "Podem ser UUIDs, Textos, etc."
      },
      "dicaDeOuro": "Utilize chaves artificiais (Surrogate Keys) como IDs numéricos sequenciais para facilitar a performance dos joins."
    }
  },
  {
    "id": "q_sw_4405",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Visões (Views)",
    "statement": "Qual a finalidade de uma 'View' em um banco de dados SQL?",
    "options": {
      "A": "Acelerar a velocidade física de leitura do disco rígido.",
      "B": "Permitir a edição de fotos dentro do banco de dados.",
      "C": "Criptografar as comunicações de rede.",
      "D": "Atuar como uma tabela virtual baseada no resultado de uma consulta SELECT, permitindo simplificar consultas complexas e restringir o acesso a colunas sensíveis.",
      "E": "Armazenar uma cópia física dos dados para backup."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A View é uma 'janela'. Ela não guarda dados próprios. Ela é apenas um SELECT 'salvo' no banco. Se você tem um SELECT gigante com 5 joins, você cria uma View `v_vendas_detalhadas` e pronto, agora é só fazer `SELECT * FROM v_vendas_detalhadas`. Também serve pra esconder o salário dos funcionários se você der acesso só à view e não à tabela real.",
      "puloDoGato": "View = Tabela Virtual / Atalho para Consulta Complexa.",
      "cascasDeBanana": {
        "E": "Isso seria uma Materialized View (View Materializada), mas a view comum não guarda cópia física.",
        "A": "View não altera o hardware.",
        "C": "Segurança de rede é via SSL/TLS.",
        "B": "Absurdo."
      },
      "dicaDeOuro": "Views podem ser usadas como camada de abstração: se você mudar o nome das tabelas reais, você só atualiza a View e o seu código continua funcionando."
    }
  },
  {
    "id": "q_sw_4406",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "DCL - Comandos de Controle",
    "statement": "No SQL, os comandos GRANT e REVOKE pertencem a qual sublinguagem e para que servem?",
    "options": {
      "A": "DML (Data Manipulation Language) - Para inserir dados.",
      "B": "DDL (Data Definition Language) - Para criar tabelas.",
      "C": "DQL (Data Query Language) - Para buscar dados.",
      "D": "DCL (Data Control Language) - Para gerenciar permissões de acesso aos usuários.",
      "E": "TCL (Transaction Control Language) - Para gerenciar transações."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "GRANT dá permissão ('Eu te dou acesso'). REVOKE tira permissão ('Eu pego de volta'). Como eles controlam quem manda no quê, eles são da família de Controle (Data Control Language).",
      "puloDoGato": "GRANT = Dar acesso. REVOKE = Retirar acesso. DCL = Controle.",
      "cascasDeBanana": {
        "A": "DML = INSERT, UPDATE, DELETE.",
        "B": "DDL = CREATE, ALTER, DROP.",
        "C": "DQL = SELECT.",
        "E": "TCL = COMMIT, ROLLBACK."
      },
      "dicaDeOuro": "Em concursos, decorar essas siglas (DDL, DML, DCL, DQL, TCL) é garantia de acertar pelo menos uma questão."
    }
  },
  {
    "id": "q_sw_4407",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Stored Procedures e Triggers",
    "statement": "Qual a principal diferença entre uma Stored Procedure e uma Trigger?",
    "options": {
      "A": "Stored Procedures são automáticas, Triggers devem ser chamadas manualmente.",
      "B": "Procedures só funcionam no Oracle, Triggers só no MySQL.",
      "C": "Não há diferença, são dois nomes para a mesma coisa.",
      "D": "Stored Procedures devem ser invocadas explicitamente pela aplicação ou usuário; Triggers são executadas automaticamente pelo banco em resposta a eventos (INSERT, UPDATE, DELETE).",
      "E": "Triggers são escritas em Java, Procedures em SQL."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Procedure é uma 'função' que você chama quando quer. Trigger é uma 'armadilha' (gatilho). Você deixa ela armada na tabela e, se alguém apagar uma linha, a Trigger dispara sozinha e faz alguma coisa (tipo salvar um log de quem apagou).",
      "puloDoGato": "Procedure = Chamada Manual. Trigger = Disparo Automático por Evento.",
      "cascasDeBanana": {
        "A": "Invertido.",
        "E": "Ambas costumam ser escritas na linguagem procedural do banco (PL/SQL, T-SQL, etc).",
        "B": "Praticamente todos os bancos modernos suportam ambos.",
        "C": "São conceitos diferentes de execução."
      },
      "dicaDeOuro": "Evite usar excesso de Triggers complexas, pois elas podem tornar o banco imprevisível e difícil de debugar."
    }
  },
  {
    "id": "q_final_fix_7197",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel?",
    "options": {
      "A": "Funciona exclusivamente sem internet.",
      "B": "Gera apenas aplicações web.",
      "C": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7198",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'?",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um banco de dados local.",
      "C": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "D": "Um botão na tela.",
      "E": "Uma requisição HTTP."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7199",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 2)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Gera apenas aplicações web.",
      "E": "Não suporta acesso a câmeras."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7200",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 3)",
    "options": {
      "A": "Um banco de dados local.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Um processo que roda em segundo plano sem interface.",
      "D": "Uma requisição HTTP.",
      "E": "Um botão na tela."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7201",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 4)",
    "options": {
      "A": "Não suporta acesso a câmeras.",
      "B": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Gera apenas aplicações web.",
      "E": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7202",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 5)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um botão na tela.",
      "C": "Um banco de dados local.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7203",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 6)",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "C": "Não suporta acesso a câmeras.",
      "D": "Gera apenas aplicações web.",
      "E": "Funciona exclusivamente sem internet."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7204",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 7)",
    "options": {
      "A": "Um banco de dados local.",
      "B": "Uma requisição HTTP.",
      "C": "Um botão na tela.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7205",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 8)",
    "options": {
      "A": "Funciona exclusivamente sem internet.",
      "B": "Não suporta acesso a câmeras.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Gera apenas aplicações web.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7206",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 9)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um banco de dados local.",
      "C": "Um processo que roda em segundo plano sem interface.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um botão na tela."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7207",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 10)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Gera apenas aplicações web.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Funciona exclusivamente sem internet.",
      "E": "Não suporta acesso a câmeras."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7208",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 11)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um banco de dados local.",
      "C": "Um botão na tela.",
      "D": "Uma requisição HTTP.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7209",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel?",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Não suporta acesso a câmeras.",
      "C": "Gera apenas aplicações web.",
      "D": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "E": "Funciona exclusivamente sem internet."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7210",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'?",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um botão na tela.",
      "C": "Uma requisição HTTP.",
      "D": "Um banco de dados local.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7211",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 2)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Não suporta acesso a câmeras.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Funciona exclusivamente sem internet.",
      "E": "Gera apenas aplicações web."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7212",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 3)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Uma requisição HTTP.",
      "C": "Um botão na tela.",
      "D": "Um banco de dados local.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7213",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 4)",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "E": "Não suporta acesso a câmeras."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7214",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 5)",
    "options": {
      "A": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "B": "Uma requisição HTTP.",
      "C": "Um botão na tela.",
      "D": "Um banco de dados local.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7215",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 6)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Não suporta acesso a câmeras.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Gera apenas aplicações web.",
      "E": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7216",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 7)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um processo que roda em segundo plano sem interface.",
      "C": "Um banco de dados local.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um botão na tela."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7217",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 8)",
    "options": {
      "A": "Não suporta acesso a câmeras.",
      "B": "Gera apenas aplicações web.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7218",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 9)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Uma requisição HTTP.",
      "C": "Um banco de dados local.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um botão na tela."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7219",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 10)",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Gera apenas aplicações web."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7220",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 11)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um botão na tela.",
      "C": "Uma requisição HTTP.",
      "D": "Um banco de dados local.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7221",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 12)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Gera apenas aplicações web."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7222",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 13)",
    "options": {
      "A": "Um botão na tela.",
      "B": "Um banco de dados local.",
      "C": "Uma requisição HTTP.",
      "D": "Um processo que roda em segundo plano sem interface.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7223",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 14)",
    "options": {
      "A": "Não suporta acesso a câmeras.",
      "B": "Gera apenas aplicações web.",
      "C": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "D": "Funciona exclusivamente sem internet.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7224",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 15)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um botão na tela.",
      "C": "Uma requisição HTTP.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Um banco de dados local."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7225",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 16)",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "C": "Não suporta acesso a câmeras.",
      "D": "Funciona exclusivamente sem internet.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7226",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 17)",
    "options": {
      "A": "Um botão na tela.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Uma requisição HTTP.",
      "D": "Um banco de dados local.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7227",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 18)",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Gera apenas aplicações web.",
      "C": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Funciona exclusivamente sem internet."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7228",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V7",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 19)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Um botão na tela.",
      "D": "Uma requisição HTTP.",
      "E": "Um banco de dados local."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7229",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel?",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7230",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'?",
    "options": {
      "A": "Um botão na tela.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Uma requisição HTTP.",
      "D": "Um processo que roda em segundo plano sem interface.",
      "E": "Um banco de dados local."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7231",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 2)",
    "options": {
      "A": "Não suporta acesso a câmeras.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Gera apenas aplicações web.",
      "D": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7232",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 3)",
    "options": {
      "A": "Um banco de dados local.",
      "B": "Uma requisição HTTP.",
      "C": "Um botão na tela.",
      "D": "Um processo que roda em segundo plano sem interface.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7233",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 4)",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Não suporta acesso a câmeras.",
      "D": "Gera apenas aplicações web.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7234",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V2",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 5)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Um banco de dados local.",
      "D": "Um botão na tela.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7235",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 6)",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "C": "Funciona exclusivamente sem internet.",
      "D": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "E": "Não suporta acesso a câmeras."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7236",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 7)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Um processo que roda em segundo plano sem interface.",
      "D": "Um botão na tela.",
      "E": "Um banco de dados local."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7237",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 8)",
    "options": {
      "A": "Não suporta acesso a câmeras.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Gera apenas aplicações web.",
      "D": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7238",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 9)",
    "options": {
      "A": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "B": "Um processo que roda em segundo plano sem interface.",
      "C": "Um botão na tela.",
      "D": "Um banco de dados local.",
      "E": "Uma requisição HTTP."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7239",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 10)",
    "options": {
      "A": "Funciona exclusivamente sem internet.",
      "B": "Não suporta acesso a câmeras.",
      "C": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "D": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "E": "Gera apenas aplicações web."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7240",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V4",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 11)",
    "options": {
      "A": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "B": "Um processo que roda em segundo plano sem interface.",
      "C": "Um botão na tela.",
      "D": "Uma requisição HTTP.",
      "E": "Um banco de dados local."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7241",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 12)",
    "options": {
      "A": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Não suporta acesso a câmeras.",
      "D": "Gera apenas aplicações web.",
      "E": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7242",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 13)",
    "options": {
      "A": "Um botão na tela.",
      "B": "Um banco de dados local.",
      "C": "Um processo que roda em segundo plano sem interface.",
      "D": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "E": "Uma requisição HTTP."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7243",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 14)",
    "options": {
      "A": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Gera apenas aplicações web.",
      "D": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "E": "Não suporta acesso a câmeras."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7244",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 15)",
    "options": {
      "A": "Um processo que roda em segundo plano sem interface.",
      "B": "Um botão na tela.",
      "C": "Um banco de dados local.",
      "D": "Uma requisição HTTP.",
      "E": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7245",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 16)",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Funciona exclusivamente sem internet.",
      "C": "Não suporta acesso a câmeras.",
      "D": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "E": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7246",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V6",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 17)",
    "options": {
      "A": "Uma requisição HTTP.",
      "B": "Um botão na tela.",
      "C": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "D": "Um banco de dados local.",
      "E": "Um processo que roda em segundo plano sem interface."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7247",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual a vantagem do uso de Flutter para desenvolvimento móvel? (Caso prático 18)",
    "options": {
      "A": "Gera apenas aplicações web.",
      "B": "Exige compilação nativa separada em Swift e Kotlin por equipes diferentes.",
      "C": "Permite compilar aplicativos nativos para iOS e Android a partir de um único código-fonte usando a linguagem Dart.",
      "D": "Não suporta acesso a câmeras.",
      "E": "Funciona exclusivamente sem internet."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "A promessa do Flutter é o 'Write once, run anywhere', criando interfaces nativas de alta performance.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7248",
    "discipline": "Desenvolvimento Móvel",
    "topic": "Revisão e Práticas V7",
    "statement": "Em desenvolvimento Android nativo, o que é uma 'Activity'? (Caso prático 19)",
    "options": {
      "A": "Um banco de dados local.",
      "B": "Um componente de aplicativo que fornece uma tela com a qual os usuários podem interagir.",
      "C": "Um processo que roda em segundo plano sem interface.",
      "D": "Uma requisição HTTP.",
      "E": "Um botão na tela."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Toda tela do seu app Android (Login, Feed, etc) é geralmente representada por uma Activity ou um Fragment contido nela.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7249",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)?",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7250",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 1)",
    "options": {
      "A": "Desenvolvimento sem servidores.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7251",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 2)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7252",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 3)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7253",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 4)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7254",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 5)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7255",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 6)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7256",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 7)",
    "options": {
      "A": "Desenvolvimento sem servidores.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7257",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 8)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7258",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 9)",
    "options": {
      "A": "Desenvolvimento sem servidores.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7259",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 10)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7260",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 11)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7261",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)?",
    "options": {
      "A": "Desenvolvimento sem servidores.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7262",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 1)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7263",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 2)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7264",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 3)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7265",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 4)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7266",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 5)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7267",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 6)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7268",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 7)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7269",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 8)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7270",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 9)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7271",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 10)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7272",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 11)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7273",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 12)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Fornecimento de software pronto para uso.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7274",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 13)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7275",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 14)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7276",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 15)",
    "options": {
      "A": "Desenvolvimento sem servidores.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7277",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 16)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7278",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 17)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7279",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 18)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7280",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 19)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7281",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)?",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7282",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 1)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7283",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 2)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7284",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 3)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7285",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 4)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7286",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 5)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7287",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 6)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7288",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 7)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7289",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 8)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7290",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 9)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7291",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 10)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7292",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 11)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7293",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 12)",
    "options": {
      "A": "Nuvem exclusivamente privada.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Hospedagem de e-mails corporativos.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7294",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 13)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7295",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 14)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Desenvolvimento sem servidores.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7296",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 15)",
    "options": {
      "A": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "B": "Hospedagem de e-mails corporativos.",
      "C": "Desenvolvimento sem servidores.",
      "D": "Nuvem exclusivamente privada.",
      "E": "Fornecimento de software pronto para uso."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7297",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 16)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Nuvem exclusivamente privada.",
      "C": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "D": "Fornecimento de software pronto para uso.",
      "E": "Desenvolvimento sem servidores."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7298",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 17)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Nuvem exclusivamente privada.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Hospedagem de e-mails corporativos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7299",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 18)",
    "options": {
      "A": "Fornecimento de software pronto para uso.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Hospedagem de e-mails corporativos.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7300",
    "discipline": "Cloud Computing",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza o modelo de nuvem IaaS (Infrastructure as a Service)? (Caso prático 19)",
    "options": {
      "A": "Hospedagem de e-mails corporativos.",
      "B": "Provedor gerencia apenas servidores físicos, armazenamento e rede; o cliente gerencia o SO e aplicativos.",
      "C": "Fornecimento de software pronto para uso.",
      "D": "Desenvolvimento sem servidores.",
      "E": "Nuvem exclusivamente privada."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Na IaaS (ex: AWS EC2), você aluga o 'computador cru'. Você tem que instalar o Linux/Windows e configurar tudo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7301",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)?",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Acelerar a velocidade do roteador de internet.",
      "D": "Compilar código HTML.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7302",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 1)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Criar chaves de criptografia.",
      "D": "Desenhar telas de interface.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7303",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 2)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Criar chaves de criptografia.",
      "D": "Compilar código HTML.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7304",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 3)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Criar chaves de criptografia.",
      "E": "Compilar código HTML."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7305",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 4)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Compilar código HTML."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7306",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 5)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7307",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 6)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Criar chaves de criptografia.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7308",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 7)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Criar chaves de criptografia.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7309",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 8)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7310",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 9)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7311",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 10)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Desenhar telas de interface.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7312",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 11)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Criar chaves de criptografia.",
      "E": "Compilar código HTML."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7313",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)?",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Compilar código HTML.",
      "D": "Desenhar telas de interface.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7314",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 1)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Criar chaves de criptografia.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7315",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 2)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Criar chaves de criptografia.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Compilar código HTML."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7316",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 3)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Compilar código HTML.",
      "C": "Acelerar a velocidade do roteador de internet.",
      "D": "Desenhar telas de interface.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7317",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 4)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Criar chaves de criptografia.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Desenhar telas de interface.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7318",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 5)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Compilar código HTML.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7319",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 6)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Compilar código HTML."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7320",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 7)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7321",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 8)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Criar chaves de criptografia.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7322",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 9)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Compilar código HTML.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7323",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 10)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7324",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 11)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Desenhar telas de interface.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7325",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 12)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7326",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 13)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7327",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 14)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Compilar código HTML.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7328",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 15)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Compilar código HTML.",
      "C": "Criar chaves de criptografia.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7329",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 16)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Criar chaves de criptografia.",
      "C": "Compilar código HTML.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7330",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 17)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Compilar código HTML.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7331",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 18)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Desenhar telas de interface.",
      "C": "Criar chaves de criptografia.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7332",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 19)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Criar chaves de criptografia.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7333",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)?",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Desenhar telas de interface.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Compilar código HTML."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7334",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 1)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Desenhar telas de interface.",
      "C": "Acelerar a velocidade do roteador de internet.",
      "D": "Criar chaves de criptografia.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7335",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 2)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Desenhar telas de interface.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7336",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 3)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Criar chaves de criptografia.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7337",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 4)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Desenhar telas de interface.",
      "C": "Acelerar a velocidade do roteador de internet.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Compilar código HTML."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7338",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 5)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Criar chaves de criptografia.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7339",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 6)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Criar chaves de criptografia.",
      "D": "Compilar código HTML.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7340",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 7)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Desenhar telas de interface.",
      "C": "Compilar código HTML.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7341",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 8)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7342",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 9)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Criar chaves de criptografia.",
      "C": "Desenhar telas de interface.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7343",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 10)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Compilar código HTML.",
      "C": "Criar chaves de criptografia.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7344",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 11)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Compilar código HTML.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7345",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 12)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Desenhar telas de interface.",
      "C": "Compilar código HTML.",
      "D": "Criar chaves de criptografia.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7346",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 13)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Criar chaves de criptografia.",
      "D": "Desenhar telas de interface.",
      "E": "Compilar código HTML."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7347",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 14)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Criar chaves de criptografia.",
      "D": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "E": "Desenhar telas de interface."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7348",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 15)",
    "options": {
      "A": "Acelerar a velocidade do roteador de internet.",
      "B": "Compilar código HTML.",
      "C": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "D": "Desenhar telas de interface.",
      "E": "Criar chaves de criptografia."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7349",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 16)",
    "options": {
      "A": "Criar chaves de criptografia.",
      "B": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "C": "Desenhar telas de interface.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Compilar código HTML."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7350",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 17)",
    "options": {
      "A": "Compilar código HTML.",
      "B": "Acelerar a velocidade do roteador de internet.",
      "C": "Desenhar telas de interface.",
      "D": "Criar chaves de criptografia.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7351",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 18)",
    "options": {
      "A": "Desenhar telas de interface.",
      "B": "Criar chaves de criptografia.",
      "C": "Compilar código HTML.",
      "D": "Acelerar a velocidade do roteador de internet.",
      "E": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7352",
    "discipline": "Linguagens e Frameworks Backend",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual o propósito de um ORM (Object-Relational Mapping)? (Caso prático 19)",
    "options": {
      "A": "Mapear tabelas de um banco de dados relacional para classes e objetos na linguagem de programação, facilitando a manipulação dos dados.",
      "B": "Desenhar telas de interface.",
      "C": "Criar chaves de criptografia.",
      "D": "Compilar código HTML.",
      "E": "Acelerar a velocidade do roteador de internet."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O ORM (como o Hibernate ou o Prisma) evita que você precise escrever queries SQL puras o tempo todo.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7353",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'?",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7354",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 1)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7355",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 2)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave criptografada.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7356",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 3)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7357",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 4)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7358",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 5)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7359",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 6)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7360",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 7)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7361",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 8)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma chave criptografada.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7362",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 9)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7363",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 10)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7364",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 11)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave criptografada.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7365",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'?",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7366",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 1)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7367",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 2)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma tabela com duas chaves estrangeiras iguais.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7368",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 3)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7369",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 4)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma tabela com duas chaves estrangeiras iguais.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7370",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 5)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7371",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 6)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7372",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 7)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7373",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 8)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma tabela com duas chaves estrangeiras iguais.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7374",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 9)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7375",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 10)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7376",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 11)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma chave criptografada.",
      "C": "Uma tabela com duas chaves estrangeiras iguais.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7377",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 12)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7378",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 13)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7379",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 14)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave criptografada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7380",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 15)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7381",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 16)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave criptografada.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7382",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 17)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7383",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 18)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave criptografada.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7384",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 19)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7385",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'?",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7386",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 1)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma chave criptografada.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7387",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 2)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7388",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 3)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7389",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 4)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7390",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 5)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7391",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 6)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7392",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 7)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7393",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 8)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave criptografada.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7394",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 9)",
    "options": {
      "A": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "B": "Uma chave criptografada.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7395",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 10)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7396",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 11)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma chave formada por letras e números.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7397",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 12)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "C": "Uma tabela com duas chaves estrangeiras iguais.",
      "D": "Uma chave que não pode ser apagada.",
      "E": "Uma chave formada por letras e números."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7398",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 13)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave que não pode ser apagada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7399",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 14)",
    "options": {
      "A": "Uma chave que não pode ser apagada.",
      "B": "Uma tabela com duas chaves estrangeiras iguais.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma chave formada por letras e números.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7400",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 15)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave criptografada.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7401",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 16)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma tabela com duas chaves estrangeiras iguais."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7402",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 17)",
    "options": {
      "A": "Uma chave criptografada.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7403",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 18)",
    "options": {
      "A": "Uma tabela com duas chaves estrangeiras iguais.",
      "B": "Uma chave formada por letras e números.",
      "C": "Uma chave que não pode ser apagada.",
      "D": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "E": "Uma chave criptografada."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7404",
    "discipline": "Bancos de Dados Relacionais",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é uma 'Chave Primária Composta'? (Caso prático 19)",
    "options": {
      "A": "Uma chave formada por letras e números.",
      "B": "Uma chave criptografada.",
      "C": "Uma chave primária constituída por mais de uma coluna para garantir a unicidade do registro.",
      "D": "Uma tabela com duas chaves estrangeiras iguais.",
      "E": "Uma chave que não pode ser apagada."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Em tabelas associativas (ex: 'Aluno-Disciplina'), a junção do ID do aluno e o ID da disciplina forma a chave composta.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7405",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente?",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Documentos XML gigantes.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7406",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 1)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Tabelas interligadas.",
      "C": "Grafos complexos.",
      "D": "Documentos XML gigantes.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7407",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 2)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Tabelas interligadas.",
      "C": "Grafos complexos.",
      "D": "Documentos XML gigantes.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7408",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 3)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Documentos XML gigantes.",
      "D": "Arquivos de vídeo.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7409",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 4)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Tabelas interligadas.",
      "C": "Arquivos de vídeo.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7410",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 5)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Arquivos de vídeo.",
      "C": "Documentos XML gigantes.",
      "D": "Grafos complexos.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7411",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 6)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Documentos XML gigantes.",
      "D": "Arquivos de vídeo.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7412",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 7)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Arquivos de vídeo.",
      "D": "Tabelas interligadas.",
      "E": "Grafos complexos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7413",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 8)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Tabelas interligadas.",
      "C": "Documentos XML gigantes.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7414",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 9)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Tabelas interligadas.",
      "D": "Arquivos de vídeo.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7415",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 10)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Tabelas interligadas.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Documentos XML gigantes.",
      "E": "Grafos complexos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7416",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 11)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Grafos complexos.",
      "D": "Documentos XML gigantes.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7417",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 12)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Tabelas interligadas.",
      "C": "Grafos complexos.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7418",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente?",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Documentos XML gigantes.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7419",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 1)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Grafos complexos.",
      "C": "Documentos XML gigantes.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7420",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 2)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Arquivos de vídeo.",
      "C": "Documentos XML gigantes.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7421",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 3)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Tabelas interligadas.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Grafos complexos.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7422",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 4)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Documentos XML gigantes.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7423",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 5)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Tabelas interligadas.",
      "C": "Arquivos de vídeo.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7424",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 6)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Documentos XML gigantes.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7425",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 7)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Arquivos de vídeo.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Documentos XML gigantes.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7426",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 8)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Documentos XML gigantes.",
      "D": "Tabelas interligadas.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7427",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 9)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Arquivos de vídeo.",
      "C": "Tabelas interligadas.",
      "D": "Documentos XML gigantes.",
      "E": "Grafos complexos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7428",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 10)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Documentos XML gigantes.",
      "C": "Arquivos de vídeo.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7429",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 11)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Documentos XML gigantes.",
      "C": "Tabelas interligadas.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7430",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 12)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Grafos complexos.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7431",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 13)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Tabelas interligadas.",
      "D": "Grafos complexos.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7432",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 14)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Documentos XML gigantes.",
      "C": "Arquivos de vídeo.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7433",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 15)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Documentos XML gigantes.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Grafos complexos.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7434",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 16)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Documentos XML gigantes.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Tabelas interligadas.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7435",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 17)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Grafos complexos.",
      "C": "Arquivos de vídeo.",
      "D": "Documentos XML gigantes.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7436",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 18)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Tabelas interligadas.",
      "C": "Documentos XML gigantes.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7437",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 19)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Tabelas interligadas.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7438",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente?",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Grafos complexos.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7439",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 1)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7440",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V1",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 2)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Documentos XML gigantes.",
      "C": "Tabelas interligadas.",
      "D": "Arquivos de vídeo.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7441",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 3)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Documentos XML gigantes.",
      "C": "Arquivos de vídeo.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7442",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 4)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Grafos complexos.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7443",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V2",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 5)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Documentos XML gigantes.",
      "C": "Arquivos de vídeo.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7444",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 6)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Arquivos de vídeo.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Tabelas interligadas.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7445",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 7)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Tabelas interligadas.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Arquivos de vídeo.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7446",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V3",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 8)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Documentos XML gigantes.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Grafos complexos.",
      "E": "Arquivos de vídeo."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7447",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 9)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Documentos XML gigantes.",
      "C": "Arquivos de vídeo.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7448",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 10)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Arquivos de vídeo.",
      "C": "Tabelas interligadas.",
      "D": "Pares de Chave-Valor mantidos em memória.",
      "E": "Grafos complexos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7449",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V4",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 11)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Pares de Chave-Valor mantidos em memória.",
      "C": "Documentos XML gigantes.",
      "D": "Grafos complexos.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7450",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 12)",
    "options": {
      "A": "Tabelas interligadas.",
      "B": "Grafos complexos.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Arquivos de vídeo.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7451",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 13)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Tabelas interligadas.",
      "C": "Arquivos de vídeo.",
      "D": "Documentos XML gigantes.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7452",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V5",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 14)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Grafos complexos.",
      "C": "Arquivos de vídeo.",
      "D": "Tabelas interligadas.",
      "E": "Documentos XML gigantes."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7453",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 15)",
    "options": {
      "A": "Pares de Chave-Valor mantidos em memória.",
      "B": "Documentos XML gigantes.",
      "C": "Tabelas interligadas.",
      "D": "Arquivos de vídeo.",
      "E": "Grafos complexos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7454",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 16)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Tabelas interligadas.",
      "C": "Grafos complexos.",
      "D": "Documentos XML gigantes.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7455",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V6",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 17)",
    "options": {
      "A": "Grafos complexos.",
      "B": "Arquivos de vídeo.",
      "C": "Pares de Chave-Valor mantidos em memória.",
      "D": "Documentos XML gigantes.",
      "E": "Tabelas interligadas."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7456",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 18)",
    "options": {
      "A": "Documentos XML gigantes.",
      "B": "Grafos complexos.",
      "C": "Tabelas interligadas.",
      "D": "Arquivos de vídeo.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7457",
    "discipline": "Bancos de Dados NoSQL",
    "topic": "Revisão e Práticas V7",
    "statement": "Qual estrutura de dados um banco como o Redis utiliza primordialmente? (Caso prático 19)",
    "options": {
      "A": "Arquivos de vídeo.",
      "B": "Grafos complexos.",
      "C": "Documentos XML gigantes.",
      "D": "Tabelas interligadas.",
      "E": "Pares de Chave-Valor mantidos em memória."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "O Redis é o rei dos bancos Chave-Valor, usado intensamente para cache e mensageria devido à sua velocidade absurda.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7458",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'?",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Um vírus de computador.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7459",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 1)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Um vírus de computador."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7460",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 2)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Desligar os servidores à noite.",
      "E": "Um vírus de computador."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7461",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 3)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7462",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 4)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Um vírus de computador.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7463",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 5)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Um vírus de computador.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7464",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 6)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7465",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 7)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Um vírus de computador.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7466",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 8)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7467",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 9)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Um vírus de computador.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7468",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 10)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Desligar os servidores à noite.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7469",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 11)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Um vírus de computador.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Desligar os servidores à noite.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7470",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 12)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7471",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'?",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Desligar os servidores à noite.",
      "E": "Um vírus de computador."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7472",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 1)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7473",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 2)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Um vírus de computador.",
      "C": "Desligar os servidores à noite.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7474",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 3)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Desligar os servidores à noite.",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7475",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 4)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Um vírus de computador.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7476",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 5)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Um vírus de computador.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7477",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 6)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Um vírus de computador.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7478",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 7)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7479",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 8)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7480",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 9)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Um vírus de computador.",
      "C": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7481",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 10)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Desligar os servidores à noite.",
      "C": "Um vírus de computador.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7482",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 11)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Desligar os servidores à noite.",
      "E": "Um vírus de computador."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7483",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 12)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Um vírus de computador.",
      "C": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7484",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 13)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Desligar os servidores à noite.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Um vírus de computador."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7485",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 14)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7486",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 15)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Desligar os servidores à noite.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Um vírus de computador.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7487",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 16)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Desligar os servidores à noite.",
      "C": "Um vírus de computador.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7488",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 17)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7489",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 18)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7490",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 19)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Um vírus de computador.",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7491",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'?",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7492",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 1)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Desligar os servidores à noite.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Um vírus de computador."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7493",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 2)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Desligar os servidores à noite.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7494",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 3)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7495",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 4)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Desligar os servidores à noite.",
      "C": "Um vírus de computador.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7496",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 5)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Desligar os servidores à noite.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7497",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 6)",
    "options": {
      "A": "Técnica de mudar a cor da interface de verde para azul.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Desligar os servidores à noite.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Um vírus de computador."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7498",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 7)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Um vírus de computador.",
      "C": "Desligar os servidores à noite.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7499",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 8)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Desligar os servidores à noite.",
      "E": "Um vírus de computador."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7500",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 9)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Recrutamento de desenvolvedores júniores (verdes).",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Um vírus de computador."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7501",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 10)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Desligar os servidores à noite.",
      "C": "Um vírus de computador.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7502",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 11)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Um vírus de computador.",
      "E": "Recrutamento de desenvolvedores júniores (verdes)."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7503",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 12)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7504",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 13)",
    "options": {
      "A": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "B": "Desligar os servidores à noite.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7505",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 14)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Um vírus de computador.",
      "C": "Desligar os servidores à noite.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7506",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 15)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7507",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 16)",
    "options": {
      "A": "Recrutamento de desenvolvedores júniores (verdes).",
      "B": "Técnica de mudar a cor da interface de verde para azul.",
      "C": "Desligar os servidores à noite.",
      "D": "Um vírus de computador.",
      "E": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7508",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 17)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "D": "Técnica de mudar a cor da interface de verde para azul.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7509",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 18)",
    "options": {
      "A": "Um vírus de computador.",
      "B": "Recrutamento de desenvolvedores júniores (verdes).",
      "C": "Técnica de mudar a cor da interface de verde para azul.",
      "D": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "E": "Desligar os servidores à noite."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7510",
    "discipline": "DevOps",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é o 'Blue-Green Deployment'? (Caso prático 19)",
    "options": {
      "A": "Desligar os servidores à noite.",
      "B": "Estratégia de lançamento que reduz o tempo de inatividade executando dois ambientes idênticos de produção; apenas um atende ao tráfego de usuários a qualquer momento.",
      "C": "Um vírus de computador.",
      "D": "Recrutamento de desenvolvedores júniores (verdes).",
      "E": "Técnica de mudar a cor da interface de verde para azul."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o ambiente Verde (novo) falhar, você só muda a chave do roteador de volta pro Azul (antigo) instantaneamente.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7511",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend?",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para compilar código Java.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7512",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 1)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para compilar código Java.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7513",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 2)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7514",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 3)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para desenhar logotipos.",
      "C": "Para criar o banco de dados.",
      "D": "Para compilar código Java.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7515",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 4)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para compilar código Java.",
      "D": "Para criar o banco de dados.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7516",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 5)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para desenhar logotipos.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para compilar código Java."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7517",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 6)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para desenhar logotipos.",
      "D": "Para compilar código Java.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7518",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 7)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7519",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 8)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para desenhar logotipos.",
      "D": "Para compilar código Java.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7520",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 9)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para criar o banco de dados.",
      "D": "Para compilar código Java.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7521",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 10)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para compilar código Java.",
      "C": "Para criar o banco de dados.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7522",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 11)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para criar o banco de dados.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7523",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 12)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para criar o banco de dados.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7524",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend?",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para criar o banco de dados.",
      "D": "Para desenhar logotipos.",
      "E": "Para compilar código Java."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7525",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 1)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para compilar código Java.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7526",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 2)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para criar o banco de dados.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7527",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 3)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para compilar código Java.",
      "D": "Para criar o banco de dados.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7528",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 4)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para compilar código Java.",
      "C": "Para criar o banco de dados.",
      "D": "Para desenhar logotipos.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7529",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 5)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para criar o banco de dados.",
      "E": "Para compilar código Java."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7530",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 6)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7531",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 7)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para desenhar logotipos.",
      "C": "Para criar o banco de dados.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para compilar código Java."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7532",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 8)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para compilar código Java.",
      "C": "Para desenhar logotipos.",
      "D": "Para criar o banco de dados.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7533",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 9)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para criar o banco de dados.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para compilar código Java.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7534",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 10)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para criar o banco de dados.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para desenhar logotipos.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7535",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 11)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para criar o banco de dados.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para desenhar logotipos.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7536",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 12)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para compilar código Java.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7537",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 13)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para desenhar logotipos.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para compilar código Java."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7538",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 14)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para compilar código Java.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para desenhar logotipos.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7539",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 15)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para criar o banco de dados.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para compilar código Java.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7540",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 16)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para criar o banco de dados.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7541",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 17)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para criar o banco de dados.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para compilar código Java.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7542",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V7",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 18)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para desenhar logotipos.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7543",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V7",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 19)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para compilar código Java.",
      "C": "Para criar o banco de dados.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7544",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend?",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para criar o banco de dados.",
      "D": "Para desenhar logotipos.",
      "E": "Para compilar código Java."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7545",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 1)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para criar o banco de dados.",
      "C": "Para desenhar logotipos.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para compilar código Java."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7546",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V1",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 2)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para desenhar logotipos.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7547",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 3)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para criar o banco de dados.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para compilar código Java.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7548",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 4)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para criar o banco de dados.",
      "D": "Para compilar código Java.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7549",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V2",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 5)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para criar o banco de dados.",
      "E": "Para compilar código Java."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7550",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 6)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para desenhar logotipos.",
      "D": "Para criar o banco de dados.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7551",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 7)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7552",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V3",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 8)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para compilar código Java.",
      "D": "Para criar o banco de dados.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7553",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 9)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para criar o banco de dados.",
      "C": "Para compilar código Java.",
      "D": "Para desenhar logotipos.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7554",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 10)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para criar o banco de dados.",
      "D": "Para desenhar logotipos.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7555",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V4",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 11)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para criar o banco de dados.",
      "C": "Para gerenciar servidores físicos.",
      "D": "Para compilar código Java.",
      "E": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7556",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 12)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "D": "Para criar o banco de dados.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7557",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 13)",
    "options": {
      "A": "Para criar o banco de dados.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para compilar código Java.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7558",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V5",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 14)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para compilar código Java.",
      "C": "Para criar o banco de dados.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7559",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 15)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para gerenciar servidores físicos.",
      "C": "Para compilar código Java.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para criar o banco de dados."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7560",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 16)",
    "options": {
      "A": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "B": "Para desenhar logotipos.",
      "C": "Para criar o banco de dados.",
      "D": "Para compilar código Java.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7561",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V6",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 17)",
    "options": {
      "A": "Para compilar código Java.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para criar o banco de dados.",
      "D": "Para gerenciar servidores físicos.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7562",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V7",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 18)",
    "options": {
      "A": "Para gerenciar servidores físicos.",
      "B": "Para compilar código Java.",
      "C": "Para criar o banco de dados.",
      "D": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "E": "Para desenhar logotipos."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7563",
    "discipline": "Frontend Moderno",
    "topic": "Revisão e Práticas V7",
    "statement": "Para que serve o Webpack no ecossistema frontend? (Caso prático 19)",
    "options": {
      "A": "Para desenhar logotipos.",
      "B": "Para empacotar (bundle) módulos JavaScript, arquivos CSS e imagens em arquivos estáticos otimizados para o navegador.",
      "C": "Para compilar código Java.",
      "D": "Para criar o banco de dados.",
      "E": "Para gerenciar servidores físicos."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Navegadores não entendem muito bem milhares de arquivos JS separados. O Webpack junta e minifica tudo para a página carregar rápido.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7672",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'?",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7673",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 1)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7674",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 2)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7675",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 3)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "O número de cores usadas na interface.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7676",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 4)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7677",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 5)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7678",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 6)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O número de cores usadas na interface.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7679",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 7)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7680",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 8)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7681",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 9)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7682",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 10)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O número de cores usadas na interface.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7683",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 11)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "O número de cores usadas na interface.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7684",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 12)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O número de cores usadas na interface.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7685",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 13)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "O número de cores usadas na interface.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7686",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 14)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7687",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 15)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7688",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 16)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "O número de cores usadas na interface.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7689",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 17)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "O número de cores usadas na interface.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7690",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'?",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7691",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 1)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7692",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 2)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tempo que o código leva para compilar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7693",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 3)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7694",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 4)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7695",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 5)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tempo que o código leva para compilar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7696",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 6)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tempo que o código leva para compilar.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7697",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 7)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7698",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 8)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O número de cores usadas na interface.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7699",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 9)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O tempo que o código leva para compilar.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "O número de cores usadas na interface.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7700",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 10)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7701",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 11)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O número de cores usadas na interface.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7702",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 12)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tempo que o código leva para compilar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7703",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 13)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7704",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 14)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7705",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 15)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O número de cores usadas na interface.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tempo que o código leva para compilar.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7706",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 16)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7707",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 17)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7708",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 18)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O número de cores usadas na interface.",
      "D": "O tempo que o código leva para compilar.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7709",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 19)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7710",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'?",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7711",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 1)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A quantidade de programadores na equipe.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7712",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 2)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O número de cores usadas na interface.",
      "D": "O tempo que o código leva para compilar.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7713",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 3)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O número de cores usadas na interface.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7714",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 4)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "O número de cores usadas na interface.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7715",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 5)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O número de cores usadas na interface.",
      "D": "O tempo que o código leva para compilar.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7716",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 6)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A quantidade de programadores na equipe.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7717",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 7)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "A quantidade de programadores na equipe.",
      "C": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "D": "O número de cores usadas na interface.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7718",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 8)",
    "options": {
      "A": "O tamanho do arquivo em bytes.",
      "B": "O número de cores usadas na interface.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7719",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 9)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O número de cores usadas na interface.",
      "D": "O tamanho do arquivo em bytes.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7720",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 10)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7721",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 11)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O número de cores usadas na interface.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tempo que o código leva para compilar.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7722",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 12)",
    "options": {
      "A": "O tempo que o código leva para compilar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O número de cores usadas na interface.",
      "E": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7723",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 13)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tempo que o código leva para compilar."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7724",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 14)",
    "options": {
      "A": "A quantidade de programadores na equipe.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "O tempo que o código leva para compilar.",
      "D": "O número de cores usadas na interface.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7725",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 15)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A quantidade de programadores na equipe.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7726",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 16)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tempo que o código leva para compilar.",
      "E": "O tamanho do arquivo em bytes."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7727",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 17)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "O tempo que o código leva para compilar.",
      "D": "A quantidade de programadores na equipe.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7728",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 18)",
    "options": {
      "A": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "B": "O tamanho do arquivo em bytes.",
      "C": "A quantidade de programadores na equipe.",
      "D": "O tempo que o código leva para compilar.",
      "E": "O número de cores usadas na interface."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7729",
    "discipline": "Métricas de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que mede a métrica de 'Complexidade Ciclomática'? (Caso prático 19)",
    "options": {
      "A": "O número de cores usadas na interface.",
      "B": "O tempo que o código leva para compilar.",
      "C": "O tamanho do arquivo em bytes.",
      "D": "A complexidade lógica de um programa, contando o número de caminhos independentes que o fluxo de execução pode tomar.",
      "E": "A quantidade de programadores na equipe."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Se o seu código tem muitos 'IFs', 'ELSEs' e 'SWITCHs', a complexidade ciclomática sobe. Quanto maior ela for, mais difícil é testar e manter o código.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7730",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software?",
    "options": {
      "A": "Mudar as cores do site.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7731",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 1)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Mudar as cores do site.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7732",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 2)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7733",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 3)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar as cores do site.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7734",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 4)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7735",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 5)",
    "options": {
      "A": "Mudar as cores do site.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7736",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 6)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7737",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 7)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7738",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 8)",
    "options": {
      "A": "Mudar as cores do site.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7739",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 9)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar as cores do site.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar o banco de dados de Oracle para MySQL.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7740",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 10)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar as cores do site.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7741",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 11)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7742",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 12)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7743",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 13)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Mudar as cores do site.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7744",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 14)",
    "options": {
      "A": "Mudar as cores do site.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7745",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 15)",
    "options": {
      "A": "Mudar as cores do site.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7746",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 16)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Mudar as cores do site.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7747",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 17)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7748",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 18)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Mudar as cores do site.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7749",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software?",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7750",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 1)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar as cores do site.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7751",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 2)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7752",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 3)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7753",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 4)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar as cores do site.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7754",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 5)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7755",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 6)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7756",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 7)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7757",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 8)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7758",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 9)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7759",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 10)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar o banco de dados de Oracle para MySQL.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7760",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 11)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7761",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 12)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7762",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 13)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7763",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 14)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Mudar as cores do site.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7764",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 15)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7765",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 16)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7766",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 17)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7767",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 18)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Mudar as cores do site.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7768",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 19)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7769",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software?",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Mudar as cores do site.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7770",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 1)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7771",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V1",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 2)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Mudar as cores do site.",
      "D": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7772",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 3)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7773",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 4)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7774",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V2",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 5)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Mudar o banco de dados de Oracle para MySQL.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7775",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 6)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Mudar as cores do site.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7776",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 7)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7777",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V3",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 8)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Adicionar uma nova funcionalidade solicitada pelo cliente."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7778",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 9)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Corrigir um bug relatado por um usuário.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar o banco de dados de Oracle para MySQL.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7779",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 10)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7780",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V4",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 11)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7781",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 12)",
    "options": {
      "A": "Corrigir um bug relatado por um usuário.",
      "B": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "C": "Mudar o banco de dados de Oracle para MySQL.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7782",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 13)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar o banco de dados de Oracle para MySQL.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7783",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V5",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 14)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Mudar as cores do site."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7784",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 15)",
    "options": {
      "A": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "B": "Mudar as cores do site.",
      "C": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7785",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 16)",
    "options": {
      "A": "Mudar o banco de dados de Oracle para MySQL.",
      "B": "Mudar as cores do site.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7786",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V6",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 17)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Mudar as cores do site.",
      "E": "Corrigir um bug relatado por um usuário."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7787",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 18)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar o banco de dados de Oracle para MySQL.",
      "C": "Corrigir um bug relatado por um usuário.",
      "D": "Mudar as cores do site.",
      "E": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7788",
    "discipline": "Manutenção de Software",
    "topic": "Revisão e Práticas V7",
    "statement": "O que caracteriza a Manutenção Preventiva em software? (Caso prático 19)",
    "options": {
      "A": "Adicionar uma nova funcionalidade solicitada pelo cliente.",
      "B": "Mudar as cores do site.",
      "C": "Fazer alterações no software para evitar que falhas latentes se tornem erros operacionais no futuro.",
      "D": "Corrigir um bug relatado por um usuário.",
      "E": "Mudar o banco de dados de Oracle para MySQL."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Refatorar um código confuso antes que ele cause um problema na produção é um exemplo clássico de manutenção preventiva.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7789",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)?",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7790",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 1)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7791",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 2)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7792",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 3)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um erro de compilação fatal.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7793",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 4)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um erro de compilação fatal.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7794",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 5)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Um erro de compilação fatal.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7795",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 6)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7796",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 7)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um erro de compilação fatal.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7797",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 8)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um erro de compilação fatal.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7798",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 9)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7799",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 10)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um erro de compilação fatal.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7800",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 11)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7801",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 12)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Um erro de compilação fatal.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7802",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 13)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Um erro de compilação fatal.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7803",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 14)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7804",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 15)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7805",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 16)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7806",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 17)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7807",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 18)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um erro de compilação fatal.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Engenharia de Software"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7808",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)?",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Um erro de compilação fatal.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Quando o programador esquece de escovar os dentes.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7809",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 1)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um erro de compilação fatal.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7810",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 2)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7811",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 3)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7812",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 4)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um erro de compilação fatal.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7813",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 5)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7814",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 6)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Um erro de compilação fatal.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7815",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 7)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Um erro de compilação fatal.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7816",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 8)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um erro de compilação fatal.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7817",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 9)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7818",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 10)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7819",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 11)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Um erro de compilação fatal.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "D",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7820",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 12)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um erro de compilação fatal.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7821",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 13)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um erro de compilação fatal.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7822",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 14)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7823",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 15)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Quando o programador esquece de escovar os dentes.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "C",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7824",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 16)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um erro de compilação fatal.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7825",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 17)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um erro de compilação fatal.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7826",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 18)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um erro de compilação fatal.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "A",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7827",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 19)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Uma funcionalidade perfeita.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "B",
    "cargo": [
      "Analista de Sistemas - Processos de Negócio"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7828",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)?",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7829",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 1)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7830",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V1",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 2)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7831",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 3)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7832",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 4)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um erro de compilação fatal.",
      "E": "Um vírus de computador escondido no código."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7833",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V2",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 5)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um erro de compilação fatal.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7834",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 6)",
    "options": {
      "A": "Quando o programador esquece de escovar os dentes.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um erro de compilação fatal.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7835",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 7)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Um erro de compilação fatal.",
      "D": "Quando o programador esquece de escovar os dentes.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7836",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V3",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 8)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um erro de compilação fatal.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7837",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 9)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "B",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7838",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 10)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7839",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V4",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 11)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um erro de compilação fatal.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7840",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 12)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7841",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 13)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Um erro de compilação fatal.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7842",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V5",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 14)",
    "options": {
      "A": "Um vírus de computador escondido no código.",
      "B": "Um erro de compilação fatal.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Uma funcionalidade perfeita.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7843",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 15)",
    "options": {
      "A": "Um erro de compilação fatal.",
      "B": "Uma funcionalidade perfeita.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Quando o programador esquece de escovar os dentes."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7844",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 16)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um erro de compilação fatal.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração."
    },
    "correctOption": "E",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7845",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V6",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 17)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Um vírus de computador escondido no código.",
      "C": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "D": "Quando o programador esquece de escovar os dentes.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "C",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7846",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 18)",
    "options": {
      "A": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "B": "Um erro de compilação fatal.",
      "C": "Quando o programador esquece de escovar os dentes.",
      "D": "Um vírus de computador escondido no código.",
      "E": "Uma funcionalidade perfeita."
    },
    "correctOption": "A",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  },
  {
    "id": "q_final_fix_7847",
    "discipline": "Refatoração de Código",
    "topic": "Revisão e Práticas V7",
    "statement": "O que é um 'Code Smell' (Mau Cheiro no Código)? (Caso prático 19)",
    "options": {
      "A": "Uma funcionalidade perfeita.",
      "B": "Quando o programador esquece de escovar os dentes.",
      "C": "Um vírus de computador escondido no código.",
      "D": "Um indício na estrutura do código que pode indicar um problema mais profundo, sugerindo a necessidade de refatoração.",
      "E": "Um erro de compilação fatal."
    },
    "correctOption": "D",
    "cargo": [
      "Ciência de Dados"
    ],
    "block": 1,
    "resolution": {
      "papoReto": "Exemplos: Métodos gigantes, classes que fazem mil coisas, código duplicado. O código 'fede' a problemas futuros, mesmo que esteja funcionando hoje.",
      "puloDoGato": "Conceito mandatório para provas de TI.",
      "cascasDeBanana": {},
      "dicaDeOuro": "Atenção aos jargões técnicos da área."
    }
  }
];
