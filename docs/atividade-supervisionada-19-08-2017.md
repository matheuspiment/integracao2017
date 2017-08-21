# Áreas de Conhecimento da Engenharia de Software
#### Segundo [SWEBOK](https://www.computer.org/web/swebok/v3)

## 1. Requisitos de Software

<em>“Os requisitos expressam a necessidade e restrições colocadas sobre o produto de software que contribuem para a solução de algum problema do mundo real. Esta área envolve elicitação, análise, especificação e validação dos requisitos de software. “ (SWEBOK).</em>  
Área responsável pelo levantamento das necessidades que serão implementadas no software/sistema, bem como delimitar o escopo do mesmo. Tem como objetivo produzir um documento técnico de entendimento de todas as partes interessadas, contudo compreende o problema, incluído assim um conjunto de atividades/funções que o sistema deverá atender, o impacto no negócio, aspectos de usabilidade, funcionalidade e de interação para atender os clientes finais.

## 2. Design de Software
<em>“[...] envolve definição da arquitetura, componentes, interfaces e outras características de um sistema ou componente. Visualizado como um processo, esta área é uma etapa do ciclo de vida da Engenharia de Software, onde os requisitos são analisados para produzir uma descrição da arquitetura do software. “ (SWEBOK).</em>  
Área responsável pelo desenvolvimento do projeto arquitetural, onde é desenvolvido um modelo conceitual, composto de módulos e dependências, o projeto de interface com a definição das interfaces de comunicação entre os módulos e o projeto detalhado com a definição final dos módulos e sua tradução para pseudocódigos quando necessário para a sua construção. Neste momento é essencial analisar a solução para definir uma arquitetura que possa atender os requisitos não funcional/qualidade, para assim garantir a evolução do sistema.

## 3. Construção de Software
<em>“Refere-se a implementação do software, verificação, testes de unidade, testes de integração e debugging. Esta área está envolvida com todas as áreas de conhecimento, porém, está fortemente ligada às áreas de Design e Teste de Software, pois o processo de construção abrange significativamente estas duas áreas. ” (SWEBOK).</em>  
Área responsável pela implementação em si do sistema em uma linguagem computacional, buscando minimizar a complexidade e antecipar mudanças, basicamente o desenvolvimento do design especificado na etapa anterior. 

## 4. Teste de Software 
<em>“Teste de software é uma atividade executada para avaliar a qualidade do produto, buscando identificar os defeitos e problemas existentes. ” (SWEBOK).</em>  
Área que busca a entrega de um produto com qualidade para isso verificar se através de teste se os requisitos do sistema estão sendo compreendido/atendido pela solução desenvolvida, emprega-se diversas técnicas de testes que são definidas através de critérios e estratégicos para garantir um nível aceitável de qualidade para o usuário final.  A realização de teste busca basicamente a verificação de presença de erros e o comportamento adequado dos diferentes módulos interagindo quando operado em conjunto.

## 5. Manutenção de Software
<em>“Os esforços de desenvolvimento de software resultam na entrega de um produto de software que satisfaça os requisitos dos usuários. Consequentemente, o produto do software deve mudar ou evoluir. Uma vez em operação, os defeitos são descobertos, os ambientes operacionais mudam.” (SWEBOK).</em>  
Temdo como objetivo garantir a "vida" do software a manutenção de software recebido bastante atenção, uma vez que contruir/desenvolver pensando em manutenibilidade tem se mostrado mais vantajoso. Essa área de conhecimento busca empregar processos, técnicas e esforços, que, deste o desenvolvimento, agregem um bom nível de mautenibilidade ao projeto, e assim se torne viável manter o mesmo.

## 6. Gerência de Configuração de Software
<em>“O gerenciamento de configuração de software (SCM) é um processo de suporte no ciclo de vida de software que beneficia as atividades de gerenciamento de projetos, desenvolvimento e manutenção, atividades de garantia de qualidade, bem como clientes e usuários do produto final.” (SWEBOK).</em>  
Sabemos que software é a combinação de diversos artefatos (código, documentação, itens de configuração). Gerenciar esses artefatos é uma tarefa essencial para o sucesso e evolução do projeto. Identificar, controlar e auditar os itens de configuração são alguns exemplos de processos primordiais, uma vez que evitam que o projeto se torne um "cãos" com artefados "não indexados" e "sem propósito", além de possibilitar o acompanhamento da evolução dos mesmos por meio de auditoria.

## 7. Gerência da Engenharia de Software
<em>“O gerenciamento de engenharia de software pode ser definido como a aplicação de atividades de gerenciamento para garantir que os produtos de software e os serviços de engenharia de software sejam entregues de forma eficiente, efetiva e em benefício das partes interessadas.” (SWEBOK).</em>   
Os principais tópicos abordados nessa área são: planejamento, aprovação, avaliação e medição do projeto/software. É uma área integradora que está envolvida na "consução" do projeto de software tendo como base as demais áreas de conhecimento.

## 8. Processo de Engenharia de Software
<em>“Um processo de engenharia consiste em um conjunto de atividades inter-relacionadas que transformam um ou mais insumos em resultados ao mesmo tempo em que consomem recursos para realizar a transformação.” (SWEBOK).</em>   
Conduzir um projeto de desenvolvimento/construção, não apenas de software, exije um processo, mesmo que empírico. Essa área de conhecimento trata da definição e medição desses processos e suas atividades dentro do ciclo de vida. Esses processos visam "padronizar" a execução de determinadas atividades bem como a forma/conteúdo de seus produtos, permitindo que os mesmos sejam medidos e que a partir disso evoluam, seja por meio da correção dos problemas percebidos ou pela difusão do conhecimento.  

## 9. Modelos e Métodos de Engenharia de Software
<em>“Os modelos e métodos de engenharia de software impõem estrutura na engenharia de software com o objetivo de tornar essa atividade sistemática, repetível e, finalmente, mais orientada para o sucesso.” (SWEBOK).</em>  
Logo este capítulo trata de como fazer a modelagem e escolher um método que melhor se adequa ao software a ser construído e especificado. Apresentando princípios de modelagem e práticas gerais, tipos de modelos e submodelos comumente encontrados,  análise de modelos e métodos comumente utilizados, quais suas características.

## 10.
<em>“A qualidade do software pode se referir: às características desejáveis dos produtos de software, na medida em que um produto de software específico possui essas características, e aos processos, ferramentas e técnicas utilizadas para atingir essas características.” (SWEBOK)</em>  
Este capítulo apresenta as definições de qualidades e software e dentre elas a mais considerada atualmente, na qual fala que e qualidade do software se evidencia na capacidade que um software tem de atender as necessidades/requisitos explícitos e implícitos de seus usuários e stakeholders. E também orienta sobre fazer para que seja possível construir um produto de software que atinja a qualidade pretendida e como manter esse software.

## 11. Prática Profissional de Engenharia de Software 
<em>“A área de conhecimento da Prática Profissional de Engenharia de Software está preocupada com os conhecimentos, habilidades e atitudes que os engenheiros de software devem possuir para praticar engenharia de software de forma profissional, responsável e ética. Devido às aplicações generalizadas de produtos de software em questões sociais e pessoais.” (SWEBOK)</em>  
.

## 12.

## 13 Fundamentos da Computação
<em>"O escopo de conhecimento dos fundamentos da computação é uma área que engloba o desenvolvimento e o ambiente operacional no qual software executa e evolui. Visto que nenhum Software existe no vácuo ou existe sem um computador" (SWEBOK).</em>    
Fundamentos da Computação é dividido em 17 tópicos que são: técnicas de resolução de problemas, abstração, fundamentos de programação, noções básicas de linguagem de programação, ferramentas de depuração e técnicas, estrutura e representação de dados, algoritmos e complexidade, conceito básico de um sistema, organização computacional, princípios básicos do compilador, noções básicas de sistemas operacionais, banco de dados e gerenciamento de dados(básico), conceitos básicos de comunicação de rede, computação Paralela e Distribuída, fatores humanos básicos do usuário ,desenvolvimento básico dos fatores humanos, desenvolvimento seguro de software e manutenção.

## 14 Fundamentos Matemáticos
<em>"Os profissionais de software vivem com programas. Em um Linguagem muito simples, pode-se programar apenas para
Algo que se entende, sem ambiguidade. Nesse contexto, A lógico dos fundamentos matemáticos ajuda engenheiros de software
Compreender esta lógica, que por sua vez é traduzida no código de linguagem de programação." (SWEBOK).</em>  
Nesse tópico do Guia SWEBOK é abordado técnicas básicas para identificar um conjunto de regras para o raciocínio no contexto do sistema em estudo. Qualquer coisa que se possa deduzir seguindo essas regras são uma certeza absoluta dentro do contexto desse sistema. Sendo assim, nesse tópico é definido e discutido técnicas que podem representar e levar adiante o raciocínio e julgamento de um engenheiro de software de forma precisa(matemática). 
## 15 Fundamentos da Engenharia
<em>"Este tópico descreve algumas habilidades e técnicas fundamentais de engenharia que são úteis para um engenheiro de software. O foco é ser um tópico que sustenta/completa outros, minimizando duplicação de assuntos abrangidos em outros lugares no documento"(SWEBOK).</em>  
Essa área de conhecimento está preocupado com os fundamentos de engenharia que aplica-se a engenharia de software. Os principais  tópicos desta área são: métodos empíricos e técnicas experimentais, análise estatística, medição,design de engenharia, modelagem, prototipagem e simulação,padrões e análise de causa raiz.
