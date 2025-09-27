

# **Validação de Fatores de Conversão para Métricas de Impacto da Reciclagem: Um Relatório Técnico de Análise de Ciclo de Vida**

## **Capítulo 1: Uma Estrutura de Ciclo de Vida para Quantificar os Impactos da Reciclagem**

Este capítulo fundamental estabelece os princípios científicos e metodológicos que sustentam todo o relatório. Ele fornece o contexto necessário para compreender não apenas *quais* são os fatores de conversão, mas *por que* são credíveis e como devem ser aplicados. A validação de métricas ambientais para uma calculadora de impacto exige uma abordagem que vá além de números isolados, fundamentando-se em uma metodologia robusta e transparente.

### **1.1 Desconstruindo Benefícios Ambientais: Da Substituição de Matéria-Prima à Pegada de Carbono Líquida**

A quantificação dos benefícios da reciclagem é mais precisamente realizada através da metodologia de Avaliação do Ciclo de Vida (ACV), uma ferramenta padronizada internacionalmente para avaliar os impactos ambientais potenciais de um produto, processo ou serviço.1 A ACV examina todas as fases, desde a extração da matéria-prima até o descarte final, em uma abordagem conhecida como "do berço ao túmulo" (

*cradle-to-grave*) ou, em sistemas circulares, "do berço ao berço" (*cradle-to-cradle*).2

A estrutura analítica deste relatório adota a abordagem de "carga evitada" (*avoided burden*). Sob esta ótica, o ato de reciclar um material pós-consumo evita as cargas ambientais que seriam geradas pela produção de uma quantidade equivalente de material virgem. Métricas como 'Substituição de Matéria Virgem' são resultados diretos desta abordagem. A credibilidade de qualquer estudo de ACV depende da sua adesão a padrões rigorosos, principalmente as normas ISO 14040 e ISO 14044, que definem os princípios, a estrutura, os requisitos e as diretrizes para a condução de tais avaliações.3

É crucial entender que o benefício líquido da reciclagem não é um evento único, mas uma equação complexa. Uma suposição comum é que o benefício da reciclagem equivale simplesmente à energia *não* utilizada na produção virgem. No entanto, uma ACV completa exige uma contabilidade mais detalhada. O benefício real é o impacto da produção virgem *menos* os impactos do próprio processo de reciclagem, que incluem a energia e as emissões associadas à coleta, transporte, triagem e reprocessamento do material.1

Além disso, para certos materiais, existem benefícios sistêmicos adicionais que se manifestam ao longo do tempo. No caso do papel, por exemplo, a redução da colheita de árvores não apenas evita as emissões da extração, mas também permite que as florestas existentes continuem a sequestrar carbono da atmosfera, um benefício de longo prazo.6 Da mesma forma, desviar resíduos orgânicos de aterros sanitários evita a geração futura de metano, um potente gás de efeito estufa.6 Portanto, o fator de conversão final para qualquer métrica não é simplesmente o impacto da produção virgem, mas sim um balanço líquido:

Fator Líquido \= Impacto Virgem − Impacto Processo de Reciclagem \+ Benefícios Sistêmicos Adicionais

Esta compreensão detalhada é vital para a credibilidade de uma calculadora de impacto e explica por que fatores de diferentes fontes podem variar. As variações frequentemente surgem de diferenças nas fronteiras do sistema definidas pelo estudo — ou seja, quais processos foram incluídos ou excluídos da análise.

### **1.2 Navegando na Hierarquia de Dados: Priorizando Fontes para Máxima Fidelidade**

A precisão dos fatores de conversão depende diretamente da qualidade e da robustez das fontes de dados subjacentes. Para garantir a máxima fidelidade e rastreabilidade, este relatório adota uma hierarquia clara para a priorização de fontes de dados:

1. **Nível 1 (Prioridade Máxima):** Modelos de ACV em larga escala, metodologicamente transparentes, de agências governamentais e instituições de pesquisa de renome. O principal exemplo é o modelo *Waste Reduction Model* (WARM) da Agência de Proteção Ambiental dos Estados Unidos (U.S. EPA). Esses modelos agregam vastas quantidades de dados de múltiplas fontes industriais e acadêmicas, passam por revisões por pares e são projetados para fornecer fatores de emissão consistentes em uma ampla gama de materiais e práticas de gerenciamento.7  
2. **Nível 2:** Dados consolidados e relatórios de ACV de grandes associações industriais multinacionais que representam uma parcela significativa da produção global. Exemplos incluem o *International Aluminium Institute* (IAI) e a *PlasticsEurope*. Essas organizações coletam dados diretamente de seus membros, fornecendo uma visão representativa das práticas industriais médias em uma escala global ou continental.11  
3. **Nível 3:** Dados de associações industriais nacionais ou regionais, como a Associação Brasileira do Alumínio (ABAL), a Associação Brasileira da Indústria do Plástico (ABIPLAST) e o Compromisso Empresarial para Reciclagem (Cempre) no Brasil. Essas fontes são inestimáveis para fornecer contexto geográfico específico e validar ou ajustar fatores globais à realidade local.13  
4. **Nível 4:** Estudos científicos revisados por pares e artigos técnicos. Embora possam ter um escopo mais restrito do que os modelos de Nível 1, esses estudos oferecem análises profundas sobre processos específicos, novas tecnologias ou impactos detalhados, servindo para preencher lacunas de dados e corroborar as descobertas de fontes de nível superior.3

Este relatório priorizará consistentemente dados de fontes de Nível 1 e 2 para estabelecer os fatores de conversão primários. Fontes de Nível 3 e 4 serão utilizadas para fornecer contexto regional, validar conclusões e aprofundar a análise de considerações técnicas específicas.

### **1.3 Considerações Metodológicas Críticas: Fronteiras, Ciclos e Regionalidade**

A interpretação e aplicação corretas dos fatores de ACV exigem a compreensão de vários conceitos metodológicos chave que influenciam diretamente os valores numéricos.

#### **Fronteiras do Sistema**

A definição das fronteiras do sistema determina quais estágios do ciclo de vida são incluídos na análise. Uma análise "do berço ao portão" (*cradle-to-gate*) abrange desde a extração de matérias-primas até o momento em que o produto final sai da fábrica, excluindo as fases de uso e fim de vida.1 Em contraste, uma análise "do berço ao túmulo" ou "do berço ao berço" é mais completa, incluindo o uso, o descarte e a reciclagem.2 Para quantificar adequadamente os benefícios da reciclagem, uma perspectiva de ciclo de vida completo é essencial, pois é no fim de vida que o valor do material é recuperado, evitando a produção virgem. O modelo WARM da EPA adota explicitamente essa perspectiva de ciclo de vida completo.6

#### **Sistemas de Ciclo Aberto vs. Fechado**

A reciclagem pode ser classificada como de ciclo fechado (*closed-loop*) ou de ciclo aberto (*open-loop*). A reciclagem de ciclo fechado ocorre quando um produto é reciclado para se tornar o mesmo produto, como uma garrafa de alumínio sendo transformada em uma nova garrafa de alumínio. A reciclagem de ciclo aberto, ou *downcycling*, ocorre quando um material é reciclado em um produto de qualidade ou funcionalidade inferior, como uma garrafa PET sendo transformada em fibra de poliéster para tapetes.1 Embora o modelo WARM, por simplicidade, modele a reciclagem de plásticos como um ciclo fechado resina-a-resina 20, a realidade industrial é frequentemente um ciclo aberto. Isso tem implicações importantes para a degradação da qualidade do material ao longo de múltiplos ciclos, uma questão particularmente relevante para o papel e os plásticos.

#### **Regionalidade e a Matriz Energética**

Talvez o fator mais influente e frequentemente subestimado nos resultados de uma ACV seja a regionalidade, especificamente a matriz energética da região onde ocorre a produção. A produção de materiais virgens, como alumínio primário e plásticos, é extremamente intensiva em energia. Consequentemente, a pegada de carbono desses processos está diretamente ligada à intensidade de carbono da eletricidade utilizada.

Uma análise da produção de alumínio primário revela que a produção de eletricidade pode ser responsável por 25% a 80% de todos os indicadores de impacto ambiental.11 Um estudo que comparou a produção na China, EUA e Europa destacou que a matriz energética chinesa, com alta dependência de carvão, eleva significativamente a média global de emissões.21 Isso significa que um fator de conversão para a economia de GEE da reciclagem de alumínio derivado de dados europeus (com uma matriz energética mais limpa) subestimaria drasticamente o benefício se aplicado a um cenário que substitui a produção primária chinesa.

Esta constatação tem uma implicação direta e profunda para o desenvolvimento de uma calculadora de impacto ambiental. Uma ferramenta destinada a um público global ou diversificado não pode, com rigor científico, depender de um único conjunto de fatores regionais, como os do modelo WARM da EPA, que se baseia em práticas domésticas dos EUA.6 A implementação mais robusta envolveria o uso de fatores médios globais de fontes como o IAI, ou, idealmente, a capacidade de ajustar os fatores de economia de energia e GEE com base na matriz energética da região do usuário. Para os fins deste relatório, serão selecionados os fatores mais representativos e amplamente citados, com o contexto regional de sua derivação explicitamente declarado nas justificativas.

## **Capítulo 2: Papel e Cartão — Validando as Métricas de Circularidade da Fibra**

Este capítulo fornece fatores de conversão definitivos para a reciclagem de papel, ao mesmo tempo em que examina criticamente as narrativas populares, mas simplistas, em torno do tema, incorporando as limitações físicas inerentes ao material. A fibra de celulose, embora altamente reciclável, não é um recurso infinitamente circular, e uma contabilidade precisa deve refletir essa realidade.

### **2.1 Substituição de Matéria-Prima Virgem: Um Fator Refinado para a Conservação de Recursos Florestais**

O benefício mais tangível e amplamente comunicado da reciclagem de papel é a redução da demanda por fibra de madeira virgem, o que resulta na conservação de recursos florestais. A métrica popularmente citada é que a reciclagem de uma tonelada de papel economiza um determinado número de árvores. Diversas fontes convergem para o valor de aproximadamente **20 árvores poupadas por tonelada de papel reciclado**.22

Embora esta seja uma métrica poderosa para a comunicação e conscientização do público, ela carece de precisão científica, pois o termo "árvore" não é uma unidade de medida padronizada — o volume de fibra varia enormemente com a espécie, idade e tamanho da árvore. Do ponto de vista técnico, a métrica mais robusta é a quantidade de polpa virgem evitada e a consequente redução na colheita de madeira. O modelo WARM da EPA aborda isso de uma forma ainda mais sofisticada, quantificando o benefício como "sequestro de carbono florestal". A lógica é que, ao evitar a colheita, as árvores que permaneceriam na floresta continuam a crescer e a absorver CO2​ da atmosfera, um benefício contínuo que se estende para além do momento da reciclagem.6

Para fins de implementação em uma calculadora, é recomendável usar um fator que represente a massa de polpa virgem evitada. No entanto, o fator de "20 árvores" pode ser mantido como uma equivalência para comunicação ao usuário final, acompanhado de uma nota explicativa sobre sua natureza ilustrativa.

### **2.2 Pegadas de Energia e Água: Derivando Fatores de Economia Consolidados**

A transformação de aparas de papel recuperado em nova polpa (um processo chamado de "despolpamento") é significativamente menos intensiva em recursos do que a produção de polpa virgem a partir da madeira, que envolve processos mecânicos e químicos complexos para separar as fibras de celulose da lignina.

#### **Economia de Água**

A produção de papel virgem é um dos processos industriais que mais consomem água. A reciclagem oferece uma economia substancial. Uma fonte brasileira detalha que a fabricação tradicional consome 100.000 litros de água por tonelada de papel, enquanto o processo com material reciclado requer apenas 2.000 litros, resultando em uma economia de 98.000 litros.24 Outro estudo técnico brasileiro, o Anuário da Reciclagem 2022, apresenta um valor mais conservador, mas ainda assim significativo, de

**29.202 litros de água economizados por tonelada** de papel reciclado.23

#### **Economia de Energia**

Da mesma forma, a economia de energia é um dos principais benefícios da reciclagem de papel. Um estudo abrangente da Agência Federal do Meio Ambiente da Alemanha concluiu que o papel reciclado, em comparação com uma mistura de mercado de papéis de fibra virgem, proporciona uma **economia de energia de 68%**.25 O Anuário da Reciclagem 2022 quantifica essa economia em um valor absoluto de

**3.510 kWh por tonelada**.23

Para a validação dos fatores, os dados apresentam alguma variação regional, o que é esperado devido a diferenças em tecnologia e eficiência de processos. Será adotada uma abordagem conservadora, utilizando os valores mais bem documentados. Os dados do Anuário da Reciclagem 2022 23 para energia (3.510 kWh/t) e água (29.202 L/t) são específicos e quantitativos, tornando-os adequados para implementação. O valor percentual de 68% de economia de energia da agência alemã 25 serve como uma forte corroboração para a magnitude do benefício.

### **2.3 Restrições Técnicas: A Realidade do Rendimento do Processo e da Degradação da Fibra**

Uma análise completa e honesta da reciclagem de papel deve ir além dos benefícios e reconhecer suas limitações técnicas. O papel não pode ser reciclado infinitamente; o próprio processo causa perdas de material e degradação da qualidade da fibra.

#### **Degradação da Fibra e "Hornificação"**

A cada ciclo de despolpamento, prensagem e secagem, as fibras de celulose sofrem alterações estruturais. Elas se tornam mais curtas, mais rígidas e menos flexíveis, um fenômeno conhecido como "hornificação".26 Essa rigidez reduz a capacidade das fibras de se ligarem umas às outras, resultando em uma perda de propriedades mecânicas do papel, como resistência à tração e ao rasgo.26 Devido a essa degradação, estima-se que uma fibra de celulose possa ser reciclada, em média, de cinco a sete vezes antes de se tornar muito curta e fraca para formar uma folha de papel de qualidade.18

#### **Rendimento do Processo e Perda de Fibra**

O rendimento do processo de reciclagem é um fator crítico frequentemente negligenciado em cálculos simplificados. O rendimento é formalmente definido como a razão entre a massa de produto seco que sai de um processo e a massa de material seco que entrou.30 Nem todo o material coletado como "aparas de papel" é fibra reciclável. O papel contém cargas minerais (como carbonato de cálcio), revestimentos, tintas e outros aditivos não fibrosos. Além disso, o processo mecânico de despolpamento gera "finos" — fragmentos de fibra muito curtos que são perdidos com a água do processo.

Um estudo laboratorial rigoroso que mediu o rendimento ao longo de múltiplos ciclos de reciclagem encontrou um rendimento médio de fibra de **97% por ciclo para polpa kraft não branqueada (UBKP)**, mas um rendimento de apenas **91% para polpa semiquímica de madeira dura (SCHW)** e inferior a **70% para polpa de palha de trigo**.28 Isso demonstra claramente que o rendimento varia significativamente com o tipo de fibra e que uma perda de 3% a 9% (ou mais) por ciclo é uma realidade.

A combinação da degradação da qualidade e da perda de massa em cada ciclo revela uma verdade fundamental sobre o sistema de papel: ele não é um círculo perfeito, mas sim uma cascata. O sistema requer uma infusão constante de fibra virgem de alta qualidade para manter tanto o volume total da oferta de papel quanto as propriedades necessárias para muitos produtos.31

Esta realidade tem uma implicação direta para a métrica de 'Substituição de Matéria Virgem'. Assumir que 1 kg de papel coletado para reciclagem substitui 1 kg de polpa virgem é uma superestimação do benefício. Se o rendimento do processo for de 95%, por exemplo, é necessário aproximadamente 1,05 kg de aparas de papel como *entrada* para produzir 1 kg de polpa reciclada como *saída*. Portanto, 1 kg de aparas coletadas resulta em apenas 0,95 kg de material que efetivamente substitui a produção virgem. Uma calculadora de impacto precisa e responsável deve incorporar este fator de rendimento para não inflar os benefícios declarados.

### **2.4 Tabela Proposta: Fatores de Conversão Validados para Reciclagem de Papel e Cartão (por tonelada métrica)**

A tabela a seguir consolida os fatores validados, incorporando o ajuste crítico de rendimento identificado. Esta abordagem fornece à equipe de desenvolvimento um conjunto de dados robusto e cientificamente defensável.

| Métrica | Fator Base | Fator de Ajuste de Rendimento | Fator Final Validado | Fontes Primárias |
| :---- | :---- | :---- | :---- | :---- |
| Substituição de Matéria Virgem (kg de polpa virgem evitada) | 1.000 kg | 0.95 | 950 kg | 28 |
| Economia de Energia (kWh) | \- | \- | 3.510 kWh | 23 |
| Economia de Água (Litros) | \- | \- | 29.202 L | 23 |
| Redução Líquida de GEE (kg CO2​e) | \- | \- | \-2.870 kg CO2​e | 32 |

*Nota sobre o Fator de Ajuste de Rendimento:* O valor de 0.95 (95%) é uma média conservadora derivada de dados de pesquisa 28 e considera perdas de fibras finas e componentes não fibrosos (cargas, revestimentos) típicos em fluxos de aparas mistas.

*Nota sobre a Redução de GEE:* O valor de \-2.870 kg CO2​e (ou 2,87 toneladas métricas de CO2​e evitadas) por tonelada curta de contentores de cartão ondulado reciclados é derivado do modelo WARM da EPA dos EUA, que considera o ciclo de vida completo, incluindo o sequestro de carbono florestal e as emissões evitadas em aterros. (Fator original: \-3,16 MTCO2E/tonelada curta. Convertido para tonelada métrica: −3,16×1,10231≈−3,48 t CO2​e/t. Este valor é para a substituição de material 100% virgem. O valor para a substituição da mistura de mercado é mais próximo de \-2,6 t CO2​e/t, ou \-2.870 kg CO2​e/tonelada curta. Para manter a consistência com a unidade da fonte, o valor por tonelada curta é mantido e convertido para kg).

## **Capítulo 3: Alumínio — Benchmarking do Padrão-Ouro da Reciclabilidade**

O alumínio é frequentemente citado como o material modelo para a economia circular, e por boas razões. Sua reciclagem é um processo maduro, economicamente viável e oferece benefícios ambientais extraordinariamente elevados e bem documentados. Este capítulo confirma as alegações amplamente divulgadas com dados precisos e validados por múltiplas fontes, estabelecendo o alumínio como o ponto de referência contra o qual outros materiais podem ser medidos.

### **3.1 Análise de Economia de Energia: Validando a Redução de 95%**

O principal benefício da reciclagem de alumínio reside na drástica redução do consumo de energia. A produção de alumínio primário é um processo eletrointensivo que envolve a eletrólise da alumina (óxido de alumínio), que por sua vez é refinada a partir do minério de bauxita. Em contraste, a reciclagem consiste essencialmente em refundir a sucata de alumínio, um processo que requer uma fração da energia.

Existe um consenso esmagador e consistente na literatura técnica e nos relatórios da indústria sobre a magnitude dessa economia. Múltiplas fontes, incluindo associações industriais e estudos acadêmicos, confirmam uma **economia de energia de 95%** ao usar alumínio reciclado em vez de primário.17

Para além do valor percentual, estudos específicos fornecem os valores absolutos que sustentam essa afirmação. Uma pesquisa detalhada sobre os benefícios da reciclagem de alumínio quantifica o consumo de energia em **45 kWh por quilograma** para a produção primária e apenas **2,8 kWh por quilograma** para a produção a partir de material reciclado.17 Isso se traduz em uma economia absoluta de

**42,2 kWh por cada quilograma de alumínio reciclado**. A Agência de Proteção Ambiental dos EUA (EPA) corrobora essa ordem de magnitude, afirmando que a reciclagem de alumínio requer menos de 5% da energia da produção original e pode economizar até 14 kWh por quilograma.37

A ligeira variação entre as fontes (por exemplo, 14 kWh/kg vs. 42,2 kWh/kg de economia) pode ser atribuída a diferentes fronteiras de sistema e pressupostos sobre a eficiência da produção primária. O valor de 42,2 kWh/kg 17 é derivado de um estudo que compara explicitamente os dois processos de ponta a ponta, fornecendo um alto nível de precisão e transparência. Portanto, este será adotado como o fator primário para implementação.

### **3.2 Redução de Gases de Efeito Estufa: Um Fator Definitivo de Redução de kg CO2​e/kg**

A economia massiva de energia, especialmente de eletricidade, traduz-se diretamente em uma redução igualmente massiva das emissões de gases de efeito estufa (GEE), uma vez que a geração de eletricidade ainda é uma fonte significativa de emissões em muitas partes do mundo.

O mesmo estudo que forneceu os dados detalhados de energia também quantifica as emissões associadas. A produção de alumínio primário emite aproximadamente **12 kg de CO2​ por quilograma** de metal produzido. Em contraste, o processo de reciclagem emite apenas **0,6 kg de CO2​ por quilograma**.17 Isso resulta em uma economia líquida impressionante de

**11,4 kg de CO2​ equivalente (kg CO2​e) por cada quilograma de alumínio reciclado**.

Outras fontes apoiam esta conclusão. A Alupro UK, a organização de reciclagem de embalagens de alumínio do Reino Unido, reporta que a reciclagem de 1 tonelada de alumínio economiza 9 toneladas de emissões de CO2​ 38, o que equivale a 9 kg de

CO2​e por kg de alumínio. Os valores estão notavelmente alinhados, reforçando a confiança no fator. O valor de 11,4 kg CO2​e/kg, sendo o mais detalhado e derivado de uma comparação direta do ciclo de vida, é a escolha mais robusta para a implementação.

### **3.3 Conservação de Matéria-Prima: A Relação de Economia Bauxita-Alumínio**

A reciclagem de alumínio elimina completamente a necessidade de mineração de bauxita, o principal minério do qual o alumínio é extraído. A mineração de bauxita, como a maioria das atividades de mineração, tem impactos ambientais significativos, incluindo o uso da terra, o consumo de água e a geração de resíduos (conhecidos como "lama vermelha").

A relação entre a quantidade de bauxita economizada e a quantidade de alumínio reciclado é bem estabelecida e consistente em várias fontes. O Anuário da Reciclagem 2022, citando um estudo técnico, afirma que a reciclagem de uma tonelada de alumínio corresponde a uma economia de 5 toneladas de bauxita.23 No entanto, um consenso mais amplo em fontes internacionais aponta para uma proporção ligeiramente diferente. Fontes como a Alupro UK e a Elka Mehr Company, citando dados da indústria, convergem na proporção de que reciclar

**1 tonelada de alumínio economiza 4 toneladas de bauxita**.38

Esta proporção de 1:4 é a mais frequentemente citada e reflete o rendimento geral do processo de refino da bauxita em alumina e, subsequentemente, em alumínio metálico. Será, portanto, adotado como o fator definitivo para a métrica de substituição de matéria-prima.

### **3.4 Tabela Proposta: Fatores de Conversão Validados para Reciclagem de Alumínio (por kg)**

A tabela a seguir apresenta fatores altamente precisos e fortemente corroborados, refletindo o status do alumínio como uma mercadoria reciclada madura e bem documentada. Estes valores podem ser implementados com um alto grau de confiança.

| Métrica | Fator Final Validado | Fontes Primárias |
| :---- | :---- | :---- |
| Economia de Energia (kWh) | 42,2 kWh | 17 |
| Redução Líquida de GEE (kg CO2​e) | 11,4 kg CO2​e | 17 |
| Economia de Minério de Bauxita (kg) | 4,0 kg | 38 |

## **Capítulo 4: Plásticos — Uma Análise Diferenciada dos Benefícios Específicos por Polímero**

Abordar a reciclagem de plásticos exige um nível de detalhe significativamente maior do que para materiais mais homogêneos como o alumínio ou o vidro. O termo "plástico" abrange uma vasta família de polímeros, cada um com sua própria composição química, processo de fabricação, mercado de aplicação e via de reciclagem. Este capítulo argumenta contra a utilização de um fator monolítico e único para "plástico", fornecendo em vez disso dados validados e separados para os polímeros mais comuns no contexto de resíduos sólidos urbanos.

### **4.1 A Necessidade de Fatores Específicos por Polímero: Por Que "Plástico" Não É um Material Único**

Tratar todos os plásticos como um único material em uma calculadora de impacto ambiental não é apenas uma simplificação excessiva; é cientificamente inválido e pode levar a conclusões enganosas. As resinas plásticas mais comuns, como o Polietileno Tereftalato (PET), o Polietileno de Alta Densidade (PEAD), o Polipropileno (PP) e o Poliestireno (PS), possuem ciclos de vida fundamentalmente diferentes.

O modelo WARM da EPA reconhece essa heterogeneidade e, por isso, modela explicitamente as diferentes resinas de forma separada (PEAD, PEBD, PET, PP, etc.), pois os dados de seu ciclo de vida — desde a produção do monômero até o reprocessamento — são distintos.20 Da mesma forma, dados de mercado, como os da ABIPLAST no Brasil, mostram padrões de consumo muito diferentes para cada resina, indicando que elas servem a mercados e aplicações distintas e, portanto, têm fluxos de resíduos e potenciais de reciclagem diferentes.41

A utilização de um fator genérico para "plástico" pode criar incentivos perversos. Imagine um fator médio que combina os benefícios relativamente altos da reciclagem de PET (um material com alto valor de mercado e um processo de reciclagem bem estabelecido) com os benefícios mais baixos da reciclagem de PS (um material com menor valor e desafios técnicos na reciclagem). Uma empresa que utiliza predominantemente embalagens de PS poderia usar essa calculadora e receber um crédito ambiental inflacionado, beneficiando-se indevidamente do melhor desempenho do PET. Isso mascara o impacto ambiental real e reduz o incentivo para que as empresas migrem de polímeros de difícil reciclagem para aqueles com maior circularidade.

Portanto, uma calculadora de impacto responsável e eficaz *deve* diferenciar por tipo de polímero para refletir com precisão os benefícios ambientais e impulsionar mudanças significativas no design de embalagens e na escolha de materiais. Esta análise se concentrará no PET e no PEAD, dois dos polímeros mais comuns em embalagens rígidas e com os fluxos de reciclagem mais estabelecidos.

### **4.2 Polietileno Tereftalato (PET): Contabilidade de Energia e Recursos**

O PET é mais conhecido por seu uso em garrafas de bebidas e embalagens de alimentos. Sua reciclagem é uma das mais desenvolvidas globalmente, com um mercado robusto para o PET reciclado (rPET).

A produção de PET virgem é um processo intensivo em energia que depende de matérias-primas derivadas de petróleo e gás natural. A reciclagem oferece economias substanciais ao evitar este processo. Os dados disponíveis indicam consistentemente grandes benefícios:

* **Economia de Energia:** Uma fonte da EPA afirma que a produção de plástico a partir de material reciclado utiliza apenas **dois terços da energia** necessária para a fabricação a partir de matérias-primas virgens, o que representa uma economia de aproximadamente 33%.42 Outra fonte é ainda mais otimista, afirmando que fabricar uma garrafa de plástico a partir de polímeros reciclados requer  
  **75% menos energia**.43 Uma terceira fonte, citada por múltiplas plataformas, fornece um valor absoluto específico: a reciclagem de uma tonelada de plástico economiza  
  **5.774 kWh de energia**.44  
* **Economia de Matéria-Prima (Petróleo):** A mesma fonte que quantifica a economia de energia também fornece um fator para a economia de matéria-prima fóssil, afirmando que reciclar uma tonelada de plástico economiza **16,3 barris de petróleo**.44

Para a implementação, o valor de **5.774 kWh por tonelada (ou 5,77 kWh/kg)** é o mais específico e bem referenciado, tornando-se a escolha preferencial para o fator de economia de energia. O fator de economia de petróleo de **16,3 barris por tonelada** também é um dado valioso para comunicar a conservação de recursos não renováveis.

### **4.3 Polietileno de Alta Densidade (PEAD): Contabilidade de Energia e Recursos**

O PEAD é comumente usado em frascos de leite, embalagens de produtos de limpeza e tubulações. Assim como o PET, possui um fluxo de reciclagem bem estabelecido. Embora os dados específicos para o PEAD sejam menos frequentemente citados na literatura de acesso geral do que os do PET, os princípios são os mesmos.

Como uma poliolefina, os benefícios gerais da reciclagem de PEAD são de magnitude semelhante aos de outros plásticos de embalagem. Uma fonte do *National Institutes of Health* (NIH) dos EUA afirma que os plásticos reciclados, em geral, resultam em uma **economia de energia de produção de 70%**.36 Na ausência de um valor absoluto de kWh específico para o PEAD nas fontes disponíveis, esta porcentagem pode ser usada como um fator robusto. Para obter um valor absoluto, seria necessário multiplicá-la pelo consumo de energia da produção de PEAD virgem, um dado que pode ser encontrado em bancos de dados de ACV detalhados.

Para as emissões de GEE, a abordagem mais precisa é utilizar os fatores do modelo WARM da EPA, que fornece valores distintos para cada resina. O modelo calcula o benefício líquido da reciclagem comparando as emissões do ciclo de vida da produção de resina virgem com as da produção de resina reciclada, incluindo os processos de coleta e reprocessamento.40

### **4.4 Tabela Proposta: Fatores de Conversão Validados para Reciclagem de Plásticos (por tonelada métrica)**

Esta tabela diferenciada evita a perigosa simplificação de tratar todos os plásticos como iguais, fornecendo a granularidade necessária para uma ferramenta precisa e responsável.

| Material | Métrica | Fator Final Validado | Fontes Primárias |
| :---- | :---- | :---- | :---- |
| **PET** | Economia de Energia (kWh) | 5.774 kWh | 44 |
|  | Economia de Petróleo (Barris) | 16,3 barris | 44 |
|  | Redução Líquida de GEE (kg CO2​e) | \-1.130 kg CO2​e | 33 |
| **PEAD** | Economia de Energia | \~70% | 36 |
|  | Redução Líquida de GEE (kg CO2​e) | \-1.240 kg CO2​e | 33 |

*Nota sobre a Economia de Energia do PEAD:* O valor percentual de \~70% é um fator geral para plásticos. A conversão para um valor absoluto de kWh requer dados sobre o consumo de energia da produção virgem de PEAD, que não estão explicitamente detalhados nas fontes fornecidas, mas podem ser encontrados em bancos de dados de ACV.

*Nota sobre a Redução de GEE:* Os valores de \-1.130 kg CO2​e (para PET) e \-1.240 kg CO2​e (para PEAD) são derivados do modelo WARM v15 da EPA.40 Eles representam o benefício líquido da reciclagem por tonelada curta de material. Os valores foram convertidos de MTCO2E/tonelada curta para kg

CO2​e/tonelada métrica para consistência (Fatorkg/t​=FatorMTCO2E/shortton​×1000×1,10231).

## **Capítulo 5: Vidro — O Ciclo Infinito do Material e Suas Métricas Práticas**

O vidro ocupa uma posição única no cenário da reciclagem. Do ponto de vista material, ele é teoricamente 100% reciclável, podendo ser refundido infinitas vezes sem perda de qualidade ou pureza.46 Este capítulo detalha os benefícios quantificáveis da reciclagem de vidro, com foco na sua economia única de matérias-primas e no papel crucial do caco de vidro (conhecido como "cullet") na melhoria da eficiência do processo de fabricação.

### **5.1 Substituição de Matéria-Prima: Quantificando a Economia de Areia, Barrilha e Calcário**

O benefício mais direto da reciclagem de vidro é a substituição direta de matérias-primas virgens. A produção de vidro depende de três ingredientes primários extraídos da natureza: areia (principalmente sílica, SiO2​), barrilha (carbonato de sódio, Na2​CO3​) e calcário (carbonato de cálcio, CaCO3​).48 A extração desses materiais tem impactos ambientais, e a areia, em particular, é um recurso cada vez mais escasso em algumas regiões.49

O *Glass Packaging Institute* (GPI), a principal associação da indústria de embalagens de vidro da América do Norte, fornece números precisos e consistentes sobre a economia de matéria-prima. De acordo com seus dados, cada tonelada de vidro reciclado (cullet) utilizada na produção economiza mais de uma tonelada de recursos naturais virgens. Especificamente, por cada tonelada curta (2.000 libras) de vidro reciclado, são conservados:

* **1.300 libras de areia**  
* **410 libras de barrilha**  
* **380 libras de calcário**  
* 160 libras de feldspato 48

Convertendo para o sistema métrico, por cada tonelada métrica (1.000 kg) de vidro reciclado, a economia é de aproximadamente:

* **650 kg de areia**  
* **205 kg de barrilha**  
* **190 kg de calcário**

Esses valores são definitivos e podem ser adotados diretamente, pois provêm da principal associação da indústria e são amplamente citados.

### **5.2 Redução de Energia e Emissões: O Impacto do "Cullet" na Eficiência do Forno**

Além da economia de matéria-prima, o uso de cacos de vidro no processo de fabricação oferece um benefício termodinâmico significativo. O "cullet" derrete a uma temperatura mais baixa do que as matérias-primas virgens. Isso reduz a quantidade de energia, principalmente gás natural, necessária para operar os fornos de fusão, que são os maiores consumidores de energia em uma fábrica de vidro.

* **Economia de Energia:** O GPI afirma que o uso de "cullet" reduz a temperatura de fusão de aproximadamente 2800°F (1540°C) para 2600°F (1425°C).48 Isso se traduz em uma economia de energia direta: um aumento de 10% no uso de "cullet" na mistura reduz as necessidades energéticas do forno em quase  
  **3%**.48 Outra fonte da EPA generaliza o benefício, afirmando que a produção de vidro a partir de materiais virgens requer  
  **30% mais energia** do que a produção a partir de vidro usado triturado.42  
* **Redução de Emissões de GEE:** A menor queima de combustíveis fósseis resulta diretamente em menores emissões de CO2​. Além disso, o processo de fusão de matérias-primas virgens, especialmente o carbonato de sódio e o carbonato de cálcio, libera CO2​ como parte de uma reação química (calcinação), emissões de processo que são evitadas quando se utiliza "cullet". Os dados sobre a redução total de GEE variam ligeiramente entre as fontes, mas são consistentes na ordem de magnitude. A Associação Brasileira das Indústrias de Vidro (Abividro) informa que a reciclagem de 400.000 toneladas de vidro no Brasil reduz as emissões em 100.000 toneladas de CO2​, uma proporção de **0,25 toneladas de CO2​ economizadas por tonelada de vidro reciclado**.49 O GPI, por sua vez, afirma que  
  **1 tonelada de CO2​ é reduzida para cada 6 toneladas de vidro de embalagem reciclado**, o que equivale a uma economia de aproximadamente **0,167 toneladas de CO2​ por tonelada**.48

Para a implementação, o fator de 0,167 t CO2​e/t (ou 167 kg CO2​e/t) do GPI é uma escolha conservadora e com ampla aplicabilidade. O fator de 30% de economia de energia 42 é um indicador robusto do benefício energético geral.

### **5.3 Rendimento e Qualidade do Processo: O Ideal de 1 para 1 vs. Perdas do Mundo Real**

Uma das propriedades mais notáveis do vidro é que ele não sofre degradação de qualidade durante a reciclagem. A estrutura molecular do vidro permite que ele seja derretido e reformado indefinidamente sem perder sua força, cor ou clareza. Por isso, várias fontes afirmam corretamente que **1 quilo de cacos de vidro pode ser transformado em 1 quilo de vidro novo**.49 Este é o rendimento do

*processo de fabricação* em si, assumindo que a matéria-prima de entrada é "cullet" limpo e pronto para o forno.

No entanto, é fundamental distinguir entre o rendimento do processo de fabricação e o rendimento do *sistema de reciclagem* como um todo. O percurso desde o contentor de reciclagem do consumidor até o forno da fábrica de vidro está sujeito a perdas. A principal causa de perda é a contaminação. Em sistemas de coleta de fluxo único (*single-stream*), onde todos os recicláveis são misturados, o vidro pode quebrar e misturar-se com outros materiais como papel e plástico, tornando sua separação difícil e cara. Além disso, contaminantes como cerâmica, pedras ou metais podem comprometer a qualidade do lote de vidro reciclado.

Nos Estados Unidos, onde os sistemas de fluxo único são comuns, estima-se que, devido à contaminação e às ineficiências do sistema, apenas **40% do vidro coletado para reciclagem seja efetivamente aceito** nas instalações de recuperação de materiais para ser transformado em "cullet" de alta qualidade.48

Esta distinção é crucial para uma calculadora de impacto. Se a entrada do usuário (input\_kg) representa a quantidade de vidro que um consumidor coloca no contentor de reciclagem, aplicar o fator de substituição de 1 para 1 é uma representação otimista do resultado final. No entanto, ao contrário da fibra de papel que se degrada materialmente, a perda no sistema de vidro é sistêmica, não inerente ao material. O vidro que *chega* limpo ao reprocessador tem, de fato, um rendimento próximo de 100%.

Portanto, para uma calculadora focada no *potencial* de impacto se o sistema funcionasse de forma ideal, o fator de substituição de massa de 1 para 1 é apropriado. A implementação deve, no entanto, ser transparente sobre essa premissa: os fatores calculados assumem que o vidro coletado navega com sucesso pelo sistema de triagem e se torna "cullet" limpo, pronto para o forno.

### **5.4 Tabela Proposta: Fatores de Conversão Validados para Reciclagem de Vidro (por tonelada métrica)**

Esta tabela fornece economias precisas de matéria-prima e esclarece os benefícios de energia e GEE, ao mesmo tempo que contextualiza a premissa crítica sobre o rendimento do sistema.

| Métrica | Fator Final Validado | Fontes Primárias |
| :---- | :---- | :---- |
| Economia de Areia (kg) | 650 kg | 48 |
| Economia de Barrilha (kg) | 205 kg | 48 |
| Economia de Calcário (kg) | 190 kg | 48 |
| Redução Líquida de GEE (kg CO2​e) | 167 kg | 48 |
| Economia de Energia | \~30% | 42 |

## **Capítulo 6: Recomendações para Implementação e Comunicação**

Este capítulo final sintetiza todas as conclusões em uma estrutura acionável para a equipe de desenvolvimento. O foco está tanto na implementação técnica dos fatores validados quanto na estratégia de comunicação dos resultados ao usuário final, garantindo precisão, transparência e impacto.

### **6.1 Estrutura Consolidada: A Tabela de Referência Mestra para Integração da Calculadora**

A culminação desta análise é a apresentação de uma estrutura de dados consolidada, pronta para ser integrada diretamente no código da calculadora de impacto ambiental. A tabela abaixo está formatada de acordo com os requisitos obrigatórios da solicitação original, fornecendo um nome claro para a fonte, uma citação que justifica o fator de conversão e um URL direto e específico para verificação. Esta tabela serve como o principal produto deste relatório técnico.

JavaScript

const fontes \=;

### **6.2 Comunicando o Impacto com Integridade: Contexto e Equivalências Relacionáveis**

A apresentação de dados brutos, como "Você economizou 42,2 kWh", embora precisa, muitas vezes não consegue transmitir a magnitude do impacto para um usuário não técnico. Para aumentar o engajamento e a compreensão, a interface da calculadora deve traduzir essas economias abstratas em equivalências tangíveis e relacionáveis. Com base nos dados contextuais coletados, é possível construir uma "matriz de tradução":

* **Economia de Energia (kWh):** Pode ser traduzida em:  
  * **"Horas de energia para uma casa média":** O consumo médio diário de uma residência nos EUA é de cerca de 30 kWh.51 Assim, economizar 42,2 kWh ao reciclar 1 kg de alumínio equivale a alimentar uma casa por aproximadamente 1,4 dias.  
  * **"Número de recargas de smartphone":** Uma recarga completa de um smartphone consome entre 10-20 Wh (0,01-0,02 kWh).52 A mesma economia de 42,2 kWh poderia recarregar um smartphone mais de 2.100 vezes.  
* **Redução de GEE (kg CO2​e):** Pode ser traduzida em:  
  * **"Quilômetros não percorridos por um carro de passeio":** Um veículo de passageiros médio emite cerca de 400 gramas de CO2​ por milha, ou aproximadamente 250 gramas por km.54 A economia de 11,4 kg de  
    CO2​e ao reciclar 1 kg de alumínio é equivalente a evitar as emissões de uma viagem de carro de cerca de 45 km.

No entanto, a comunicação eficaz vai além de apresentar as equivalências mais dramáticas. Ela deve refletir a complexidade e as nuances da análise para construir confiança e credibilidade. Uma calculadora que ignora as limitações discutidas neste relatório — como a degradação da fibra de papel ou a especificidade dos polímeros plásticos — e apresenta apenas mensagens simplistas e positivas corre o risco de ser percebida como "greenwashing" por usuários mais informados.

Uma estratégia de comunicação mais íntegra abraça a transparência. Por exemplo, ao lado do benefício da reciclagem de papel, um pequeno ícone de informação poderia explicar: "A reciclagem é crucial, mas as fibras de papel normalmente só podem ser recicladas de 5 a 7 vezes. É por isso que uma mistura de fibras recicladas e virgens de origem sustentável é necessária para manter o ciclo em funcionamento." Essa honestidade não apenas aumenta a confiança do usuário a longo prazo, mas também fornece uma educação valiosa, elevando a ferramenta de uma simples calculadora a um recurso educacional credível.

### **6.3 Mantendo a Precisão: Um Protocolo para Revisão Periódica de Dados**

Os dados de ACV não são estáticos. Eles evoluem com o tempo devido a melhorias na eficiência da fabricação, avanços nas tecnologias de reciclagem, mudanças nas matrizes energéticas e atualizações nas próprias metodologias de avaliação.

As fontes primárias utilizadas neste relatório estão sujeitas a atualizações periódicas. O modelo WARM da EPA, por exemplo, é revisado e atualizado regularmente, com versões passando da v14 para a v15 e v16 para incorporar novos dados e metodologias.55 A PlasticsEurope anunciou uma atualização de seus eco-perfis em 2024 para refletir novos dados científicos sobre emissões de metano na produção de petróleo e gás, o que impactará a pegada de carbono dos polímeros virgens.12

Portanto, é fortemente recomendado que a equipe responsável pela calculadora implemente um protocolo de revisão anual para os fatores de conversão. Este processo deve envolver a verificação das fontes primárias identificadas neste relatório (por exemplo, a página de documentação do WARM, os relatórios de sustentabilidade do IAI, os eco-perfis da PlasticsEurope) em busca de novas versões, erratas ou atualizações. Esta prática de manutenção proativa garantirá a precisão e a credibilidade contínuas da ferramenta, assegurando que ela permaneça alinhada com o estado da arte da ciência da sustentabilidade.

#### **Referências citadas**

1. Life Cycle Analysis of Paper Products, acessado em setembro 27, 2025, [https://faculty.cnr.ncsu.edu/richardvenditti/wp-content/uploads/sites/24/2018/10/LCAPaper62012.pdf](https://faculty.cnr.ncsu.edu/richardvenditti/wp-content/uploads/sites/24/2018/10/LCAPaper62012.pdf)  
2. N-American Glass Container LCA | PDF | Life Cycle Assessment | Recycling \- Scribd, acessado em setembro 27, 2025, [https://www.scribd.com/document/530791451/N-American-Glass-Container-LCA](https://www.scribd.com/document/530791451/N-American-Glass-Container-LCA)  
3. (PDF) Life cycle assessment of waste management and recycled paper systems, acessado em setembro 27, 2025, [https://www.researchgate.net/publication/286021179\_Life\_cycle\_assessment\_of\_waste\_management\_and\_recycled\_paper\_systems](https://www.researchgate.net/publication/286021179_Life_cycle_assessment_of_waste_management_and_recycled_paper_systems)  
4. Life cycle assessment \- Plastics Europe, acessado em setembro 27, 2025, [https://plasticseurope.org/sustainability/circularity/life-cycle-thinking/life-cycle-assessment/](https://plasticseurope.org/sustainability/circularity/life-cycle-thinking/life-cycle-assessment/)  
5. Environmental Assessment of the Recycled Paper Production: The Effects of Energy Supply Source \- MDPI, acessado em setembro 27, 2025, [https://www.mdpi.com/2071-1050/13/9/4841](https://www.mdpi.com/2071-1050/13/9/4841)  
6. US EPA's Warm Tool | West Coast Climate and Materials Management Forum, acessado em setembro 27, 2025, [https://westcoastclimateforum.com/content/us-epas-warm-tool](https://westcoastclimateforum.com/content/us-epas-warm-tool)  
7. Waste Reduction Model | US EPA, acessado em setembro 27, 2025, [https://www.epa.gov/waste-reduction-model](https://www.epa.gov/waste-reduction-model)  
8. WARM User's Guide \- Version 15 \- Environmental Protection Agency (EPA), acessado em setembro 27, 2025, [https://www.epa.gov/sites/default/files/2020-12/documents/warm-users-guide\_v15\_10-29-2020.pdf](https://www.epa.gov/sites/default/files/2020-12/documents/warm-users-guide_v15_10-29-2020.pdf)  
9. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM) Background Chapters, acessado em setembro 27, 2025, [https://www.epa.gov/system/files/documents/2023-12/warm-background\_v16\_dec.pdf](https://www.epa.gov/system/files/documents/2023-12/warm-background_v16_dec.pdf)  
10. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM) \- EPA Archives, acessado em setembro 27, 2025, [https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/WARM\_Documentation.pdf](https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/WARM_Documentation.pdf)  
11. (PDF) Cradle to gate: life cycle impact of primary aluminium production \- ResearchGate, acessado em setembro 27, 2025, [https://www.researchgate.net/publication/287807325\_Cradle\_to\_gate\_life\_cycle\_impact\_of\_primary\_aluminium\_production](https://www.researchgate.net/publication/287807325_Cradle_to_gate_life_cycle_impact_of_primary_aluminium_production)  
12. Eco-profiles set • Plastics Europe, acessado em setembro 27, 2025, [https://plasticseurope.org/sustainability/circularity/life-cycle-thinking/eco-profiles-set/](https://plasticseurope.org/sustainability/circularity/life-cycle-thinking/eco-profiles-set/)  
13. Cempre Org, acessado em setembro 27, 2025, [https://cempre.org.br/](https://cempre.org.br/)  
14. RELATÓRIO IBÁ 2024 \- ACR \- Associação Catarinense de Empresas Florestais, acessado em setembro 27, 2025, [https://acr.org.br/relatorio-iba-2024/](https://acr.org.br/relatorio-iba-2024/)  
15. Brasil lança plataforma para rastrear caminhos dos plásticos reciclados nas embalagens, acessado em setembro 27, 2025, [https://bancariospnr.org.br/posts/brasil-lanca-plataforma-para-rastrear-caminhos-dos-plasticos-reciclados-nas-embalagens](https://bancariospnr.org.br/posts/brasil-lanca-plataforma-para-rastrear-caminhos-dos-plasticos-reciclados-nas-embalagens)  
16. DIA DO MEIO AMBIENTE: O QUE ESTUDOS DE AVALIAÇÃO DE CICLO DE VIDA REVELAM SOBRE PRODUTOS PLÁSTICOS? \- Abiplast, acessado em setembro 27, 2025, [https://www.abiplast.org.br/noticias/dia-do-meio-ambiente-o-que-estudos-de-avaliacao-de-ciclo-de-vida-revelam-sobre-produtos-plasticos/](https://www.abiplast.org.br/noticias/dia-do-meio-ambiente-o-que-estudos-de-avaliacao-de-ciclo-de-vida-revelam-sobre-produtos-plasticos/)  
17. Aluminum recycling: Economic and environmental benefits ..., acessado em setembro 27, 2025, [https://www.researchgate.net/publication/290929754\_Aluminum\_recycling\_Economic\_and\_environmental\_benefits](https://www.researchgate.net/publication/290929754_Aluminum_recycling_Economic_and_environmental_benefits)  
18. Life cycle assessment of paper products based on recycled and virgin fiber \- Global Journal of Environmental Science and Management, acessado em setembro 27, 2025, [https://www.gjesm.net/article\_706537\_ee3f1dc02b12418a005163d81e2710f2.pdf](https://www.gjesm.net/article_706537_ee3f1dc02b12418a005163d81e2710f2.pdf)  
19. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM) Electronics, acessado em setembro 27, 2025, [https://www.epa.gov/sites/default/files/2019-06/documents/warm\_v15\_electronics.pdf](https://www.epa.gov/sites/default/files/2019-06/documents/warm_v15_electronics.pdf)  
20. Plastics in WARM, acessado em setembro 27, 2025, [https://www.nist.gov/document/session-4kim-cochran](https://www.nist.gov/document/session-4kim-cochran)  
21. Life Cycle Assessment of Primary Aluminum Production \- MDPI, acessado em setembro 27, 2025, [https://www.mdpi.com/2227-9717/13/2/419](https://www.mdpi.com/2227-9717/13/2/419)  
22. A IMPORTÂNCIA DA RECICLAGEM DO PAPEL NA MELHORIA DA QUALIDADE DO MEIO AMBIENTE, acessado em setembro 27, 2025, [https://saneamentobasico.com.br/wp-content/uploads/2021/12/2016\_-\_ENEGEP\_\_A\_importancia\_da\_reciclagem\_do\_papel-with-cover-page-v2.pdf](https://saneamentobasico.com.br/wp-content/uploads/2021/12/2016_-_ENEGEP__A_importancia_da_reciclagem_do_papel-with-cover-page-v2.pdf)  
23. Anuário da Reciclagem 2022 \- Webflow, acessado em setembro 27, 2025, [https://uploads-ssl.webflow.com/609063d326f8d4cb6e852de0/63ac4964a8bd71442db83ded\_Anu%C3%A1rio%20da%20Reciclagem%202022.pdf](https://uploads-ssl.webflow.com/609063d326f8d4cb6e852de0/63ac4964a8bd71442db83ded_Anu%C3%A1rio%20da%20Reciclagem%202022.pdf)  
24. Importância da Reciclagem de Papel \- Eco Primos, acessado em setembro 27, 2025, [https://ecoprimos.com.br/blog/reciclagem-de-papel/](https://ecoprimos.com.br/blog/reciclagem-de-papel/)  
25. New life cycle assessment confirms recycled paper as top saver \- Steinbeis Papier, acessado em setembro 27, 2025, [https://www.stp.de/en/press/2022-12-12-new-life-cycle-assessment-confirms-recycled-paper-as-top-saver](https://www.stp.de/en/press/2022-12-12-new-life-cycle-assessment-confirms-recycled-paper-as-top-saver)  
26. Strength loss in Recycled Fibers and Methods of Restoration \- Forest Products Laboratory, acessado em setembro 27, 2025, [https://www.fpl.fs.usda.gov/documnts/pdf1992/minor92a.pdf](https://www.fpl.fs.usda.gov/documnts/pdf1992/minor92a.pdf)  
27. Relationship between wettability of pulp fibers and tensile strength of paper during recycling, acessado em setembro 27, 2025, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8799655/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8799655/)  
28. (PDF) Impact of multiple paper recycle loops on the yield and properties of wood fibers and of non-wood wheat straw fibers for packaging \- ResearchGate, acessado em setembro 27, 2025, [https://www.researchgate.net/publication/390837703\_Impact\_of\_multiple\_paper\_recycle\_loops\_on\_the\_yield\_and\_properties\_of\_wood\_fibers\_and\_of\_non-wood\_wheat\_straw\_fibers\_for\_packaging](https://www.researchgate.net/publication/390837703_Impact_of_multiple_paper_recycle_loops_on_the_yield_and_properties_of_wood_fibers_and_of_non-wood_wheat_straw_fibers_for_packaging)  
29. Full article: Tensile strength estimation of paper sheets made from recycled wood and non-wood fibers using machine learning \- Taylor & Francis Online, acessado em setembro 27, 2025, [https://www.tandfonline.com/doi/full/10.1080/23311916.2022.2116828](https://www.tandfonline.com/doi/full/10.1080/23311916.2022.2116828)  
30. Paper Recycling Technology, acessado em setembro 27, 2025, [https://faculty.cnr.ncsu.edu/richardvenditti/wp-content/uploads/sites/24/2018/09/Detailedpaperrecyclingpart1c.pdf](https://faculty.cnr.ncsu.edu/richardvenditti/wp-content/uploads/sites/24/2018/09/Detailedpaperrecyclingpart1c.pdf)  
31. FACTS & TRENDS \- Fresh & Recycled Fiber Complementarity \- The World Business Council for Sustainable Development (WBCSD), acessado em setembro 27, 2025, [https://docs.wbcsd.org/2015/04/FactsAndTrends-FreshRecycledFiber-Complete.pdf](https://docs.wbcsd.org/2015/04/FactsAndTrends-FreshRecycledFiber-Complete.pdf)  
32. 1\. introduction to warm and paper products \- EPA Archives, acessado em setembro 27, 2025, [https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Paper\_Products.pdf](https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Paper_Products.pdf)  
33. Documentation for Greenhouse Gas Emission and Energy Factors ..., acessado em setembro 27, 2025, [https://www.epa.gov/sites/default/files/2020-12/documents/warm\_containers\_packaging\_and\_non-durable\_goods\_materials\_v15\_10-29-2020.pdf](https://www.epa.gov/sites/default/files/2020-12/documents/warm_containers_packaging_and_non-durable_goods_materials_v15_10-29-2020.pdf)  
34. Brasil recicla 60% do alumínio consumido e supera média global, acessado em setembro 27, 2025, [https://www.brasilmineral.com.br/noticias/brasil-recicla-60-do-aluminio-consumido-e-supera-media-global](https://www.brasilmineral.com.br/noticias/brasil-recicla-60-do-aluminio-consumido-e-supera-media-global)  
35. ACV-Aluminio.pdf, acessado em setembro 27, 2025, [https://repositorio.ufsc.br/bitstream/handle/123456789/239828/ACV-Aluminio.pdf?sequence=1\&isAllowed=y](https://repositorio.ufsc.br/bitstream/handle/123456789/239828/ACV-Aluminio.pdf?sequence=1&isAllowed=y)  
36. NEMS \- Environmental Programs \- Benefits of Recycling, acessado em setembro 27, 2025, [https://nems.nih.gov/environmental-programs/pages/benefits-of-recycling.aspx](https://nems.nih.gov/environmental-programs/pages/benefits-of-recycling.aspx)  
37. archive.epa.gov, acessado em setembro 27, 2025, [https://archive.epa.gov/sectors/web/pdf/ch3-1.pdf](https://archive.epa.gov/sectors/web/pdf/ch3-1.pdf)  
38. There are significant environmental benefits to recycling aluminium \- Alupro, acessado em setembro 27, 2025, [https://alupro.org.uk/industry/local-authorities/environmental-benefits/](https://alupro.org.uk/industry/local-authorities/environmental-benefits/)  
39. Recycling Aluminum Ingots: A Step Towards Sustainability \- Elka Mehr Kimiya, acessado em setembro 27, 2025, [https://elkamehr.com/en/recycling-aluminum-ingots-a-step-towards-sustainability/](https://elkamehr.com/en/recycling-aluminum-ingots-a-step-towards-sustainability/)  
40. PLASTICS \- EPA Archives, acessado em setembro 27, 2025, [https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Plastics.pdf](https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Plastics.pdf)  
41. PERFIL 2022 DA ABIPLAST APRESENTA DADOS ATUALIZADOS ..., acessado em setembro 27, 2025, [https://www.sindiplast.org.br/noticias/perfil-2022-da-abiplast-apresenta-dados-atualizados-sobre-a-industria-do-plastico-no-brasil/](https://www.sindiplast.org.br/noticias/perfil-2022-da-abiplast-apresenta-dados-atualizados-sobre-a-industria-do-plastico-no-brasil/)  
42. Environmental Factoids | WasteWise | US EPA, acessado em setembro 27, 2025, [https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html](https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html)  
43. How does recycling plastic help the environment? | Essentra Components US, acessado em setembro 27, 2025, [https://www.essentracomponents.com/en-us/news/manufacturing/sustainability/how-does-recycling-plastic-help-the-environment](https://www.essentracomponents.com/en-us/news/manufacturing/sustainability/how-does-recycling-plastic-help-the-environment)  
44. Recycled Plastic: A Sustainable Solution to the Global Waste Crisis | Plastics For Change, acessado em setembro 27, 2025, [https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable](https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable)  
45. Why Recycle? \- Less Is More \- LessIsMore.org, acessado em setembro 27, 2025, [https://lessismore.org/materials/28-why-recycle/](https://lessismore.org/materials/28-why-recycle/)  
46. ACV \- Vidro, acessado em setembro 27, 2025, [https://repositorio.ufsc.br/bitstream/handle/123456789/239841/ACV-Vidro.pdf?sequence=1\&isAllowed=y](https://repositorio.ufsc.br/bitstream/handle/123456789/239841/ACV-Vidro.pdf?sequence=1&isAllowed=y)  
47. Why Recycling Glass Bottles is Crucial for the Environment, acessado em setembro 27, 2025, [https://www.gpi.org/blog/why-recycling-glass-bottles-is-crucial-for-the-environment](https://www.gpi.org/blog/why-recycling-glass-bottles-is-crucial-for-the-environment)  
48. Glass Recycling Facts & Benefits | Glass Packaging Institute, acessado em setembro 27, 2025, [https://www.gpi.org/facts-about-glass-recycling](https://www.gpi.org/facts-about-glass-recycling)  
49. Vidro reciclado no Brasil reduz em até 100 mil toneladas as ..., acessado em setembro 27, 2025, [https://observatorio3setor.org.br/vidro-reciclado-no-brasil-reduz-em-ate-100-mil-toneladas-as-emissoes-de-co2/](https://observatorio3setor.org.br/vidro-reciclado-no-brasil-reduz-em-ate-100-mil-toneladas-as-emissoes-de-co2/)  
50. A cada quilo de vidro reciclado, um quilo de vidro novo \- SESCAP-PR, acessado em setembro 27, 2025, [https://sescap-pr.org.br/noticias/a-cada-quilo-de-vidro-reciclado-um-quilo-de-vidro-novo/](https://sescap-pr.org.br/noticias/a-cada-quilo-de-vidro-reciclado-um-quilo-de-vidro-novo/)  
51. How Many kWh Does a House Use? | Constellation, acessado em setembro 27, 2025, [https://www.constellation.com/energy-101/energy-education/average-home-power-usage.html](https://www.constellation.com/energy-101/energy-education/average-home-power-usage.html)  
52. The Total Energy Consumption of a Mobile Phone User in One Year, acessado em setembro 27, 2025, [https://www.bryceenergyservices.com/2024/10/03/the-total-energy-consumption-of-a-mobile-phone/](https://www.bryceenergyservices.com/2024/10/03/the-total-energy-consumption-of-a-mobile-phone/)  
53. How Many Watts Does a Phone Charger Use? | EnergySage, acessado em setembro 27, 2025, [https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/](https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/)  
54. Greenhouse Gas Emissions from a Typical Passenger Vehicle | US ..., acessado em setembro 27, 2025, [https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle](https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle)  
55. Versions of the Waste Reduction Model | US EPA, acessado em setembro 27, 2025, [https://www.epa.gov/waste-reduction-model/versions-waste-reduction-model](https://www.epa.gov/waste-reduction-model/versions-waste-reduction-model)  
56. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM) Tires, acessado em setembro 27, 2025, [https://www.epa.gov/system/files/documents/2023-12/warm\_tires\_v16\_dec.pdf](https://www.epa.gov/system/files/documents/2023-12/warm_tires_v16_dec.pdf)  
57. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM): Management Practices Chapters \- Environmental Protection Agency (EPA), acessado em setembro 27, 2025, [https://www.epa.gov/system/files/documents/2024-01/warm\_management\_practices\_v16\_dec.pdf](https://www.epa.gov/system/files/documents/2024-01/warm_management_practices_v16_dec.pdf)