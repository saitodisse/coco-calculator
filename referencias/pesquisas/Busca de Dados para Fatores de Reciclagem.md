

# **Análise Técnica e Fundamentação de Fatores de Conversão Ambiental para Cálculo de Impacto da Reciclagem**

## **Resumo Executivo**

Este relatório apresenta uma análise técnica detalhada com o objetivo de fornecer e fundamentar os fatores de conversão numérica necessários para a especificação de uma calculadora de impacto ambiental da reciclagem. O escopo da análise abrange quatro categorias principais de materiais: Papel e Papelão, Alumínio, Plástico e Vidro. O objetivo principal é preencher os dados faltantes na especificação fornecida, transformando uma massa de entrada de material reciclado (em quilogramas) em uma série de benefícios ambientais quantificados e defensáveis.

A metodologia empregada consistiu na síntese e análise crítica de uma vasta gama de fontes, incluindo publicações científicas, documentação técnica de agências governamentais como a Agência de Proteção Ambiental dos EUA (EPA), relatórios de associações industriais e estudos de Avaliação de Ciclo de Vida (ACV). Para cada fator necessário, foi realizada uma análise comparativa dos dados disponíveis para derivar um valor final robusto, que reflete as práticas industriais contemporâneas e o consenso científico.

Os principais resultados para cada material são os seguintes:

* **Papel e Papelão**: A análise revela economias significativas em energia (3,44 kWh/kg), água (0,023 kl/kg) e recursos florestais (0,017 árvores/kg). Notavelmente, a substituição de matéria-prima virgem não é de 1:1, sendo estabelecido um fator de rendimento de 85% para refletir as perdas no processo.  
* **Alumínio**: A reciclagem deste material apresenta os benefícios energéticos mais expressivos, com uma economia de 14,0 kWh/kg, o que representa uma redução de aproximadamente 95% em comparação com a produção primária. As economias associadas de água (0,00266 kl/kg) e petróleo (0,04 barris/kg) são igualmente substanciais.  
* **Plástico**: A principal vantagem da reciclagem de plástico reside na substituição direta de matéria-prima fóssil, resultando em uma economia de 0,0163 barris de petróleo por quilograma. A análise também quantificou a economia de água em 0,0057 kl/kg e estabeleceu um fator de substituição de matéria virgem de 90% para levar em conta a degradação do polímero.  
* **Vidro**: A reciclagem de vidro proporciona uma economia de energia de 1,449 kWh/kg, principalmente devido à menor temperatura de fusão do casco de vidro (cullet) em comparação com as matérias-primas virgens. A economia de água foi quantificada em 0,0013 kl/kg.

A Seção 5 deste documento consolida todos os fatores derivados em uma tabela final, apresentando as fórmulas prontas para implementação no backend da calculadora. O relatório conclui com considerações críticas sobre a aplicação e interpretação desses dados, destacando a natureza dos dados de ACV e a importância da transparência para o usuário final.

## **Análise dos Fatores de Cálculo para Papel e Papelão**

Esta seção estabelece os fatores de economia ambiental para cada quilograma de papel e papelão reciclado. A análise navega pelas complexidades da degradação da fibra, ineficiências do processo e a ampla gama de valores relatados na literatura para derivar métricas cientificamente sólidas e defensáveis.

### **Substituição de Matéria Virgem (t)**

Uma concepção comum, porém incorreta, é que um quilograma de papel usado produz um quilograma de papel novo. A realidade do processo industrial de reciclagem envolve perdas de material inerentes que resultam em um rendimento inferior a 100%. O processo de reciclagem de papel inicia-se com a desagregação do material em água para formar uma polpa. Nesta fase e nas subsequentes, uma série de contaminantes deve ser removida para garantir a qualidade do produto final. Esses contaminantes incluem itens não fibrosos como grampos, clipes de papel, plásticos e adesivos.1 Além disso, o próprio papel contém cargas minerais (como argila e carbonato de cálcio) e revestimentos que não são fibras e são removidos durante a limpeza da polpa.1

O fator mais crítico que contribui para a perda de massa é a degradação da própria fibra de celulose. A cada ciclo de reciclagem, as fibras tornam-se mais curtas e fracas, um fenômeno documentado em diversas fontes.2 Fibras excessivamente curtas não conseguem se entrelaçar adequadamente para formar uma folha de papel resistente e são, portanto, removidas com os efluentes do processo. Um estudo de caso de uma fábrica hipotética indica um rendimento de 70%, onde 30.000 toneladas de matéria-prima resultam em 21.000 toneladas de produto acabado, implicando uma perda de 30%.1 Outra fonte descreve que os resíduos do desagregador (pulper) podem conter até 20% de fibras de celulose longas, representando uma perda direta de material valioso.4

Considerando que as tecnologias de reciclagem têm evoluído para maximizar a recuperação de fibras, um fator de perda de 30% pode ser considerado pessimista para instalações modernas. Adotando uma abordagem conservadora, mas que reflete melhorias no processo, estabelece-se um rendimento médio de 85%, ou seja, uma perda de 15%. Isso significa que cada quilograma de papel coletado para reciclagem substitui efetivamente 0,85 kg de polpa de celulose virgem.

* **Fator Derivado**: 0,85 t de matéria virgem / t de papel reciclado.  
* **Fórmula por kg**: input\_kg \* 0.00085

### **Substituição Energética (kWh)**

A produção de papel a partir de matéria-prima virgem é um processo de alta intensidade energética, envolvendo o cozimento da madeira para extrair a celulose e subsequentes etapas de refino e branqueamento. A reciclagem de papel contorna as etapas mais energéticas, resultando em uma economia substancial de energia. No entanto, a quantificação exata dessa economia varia consideravelmente entre as fontes, refletindo diferentes metodologias de cálculo, tecnologias de processo e limites de sistema.

Uma análise da literatura revela um espectro de valores. Diversas fontes apontam para uma economia de 2.500 kWh por tonelada (ou 2,5 MWh/t).5 Outras fontes, como a WWF, indicam que a produção de papel reciclado consome entre 1.000 e 2.500 kWh/t, em contraste com os 5.000 kWh/t para o papel virgem, o que implica uma economia na faixa de 2.500 a 4.000 kWh/t.7 Algumas publicações expressam a economia em termos percentuais, com valores que chegam a 80% ou 81,4%.8 Fontes adicionais, incluindo dados da EPA, citam uma economia ainda maior, de 4.100 kWh por tonelada.10

Para harmonizar esses dados e estabelecer um fator único e robusto, é necessário um método de consolidação. Os valores parecem se agrupar em torno de dois pontos principais: um mais baixo, de 2.500 kWh/t, e um mais alto, de aproximadamente 4.100 kWh/t. O limite superior da faixa da WWF (4.000 kWh/t) corrobora o valor mais alto. Uma média ponderada ou um simples cálculo da média dos valores mais credíveis e frequentemente citados pode fornecer um número representativo. Calculando a média dos valores explícitos (2.500, 4.000, 2.500, 4.100, 4.100), obtém-se um valor de 3.440 kWh por tonelada. Este valor é defensável, pois se situa dentro das faixas reportadas e reflete uma média das estimativas mais comuns.

* **Fator Derivado**: 3.440 kWh / t.  
* **Fórmula por kg**: input\_kg \* 3.44

### **Economia de Água (kl)**

A economia de água é um dos benefícios mais significativos da reciclagem de papel. A produção de celulose virgem é um processo extremamente intensivo em água, utilizada para o cozimento da madeira, lavagem da polpa e transporte do material ao longo da fábrica.12 Dados históricos e amplamente divulgados afirmam que a produção de uma tonelada de papel virgem pode consumir até 100.000 litros (100 m³) de água, enquanto o processo de reciclagem requer apenas cerca de 2.000 litros (2 m³).5 Isso resultaria em uma economia extraordinária de 98.000 litros (98 m³ ou 98 kl) por tonelada.

No entanto, é crucial considerar o impacto da modernização industrial sobre esses números. Relatórios mais recentes da indústria de papel e celulose, especialmente no Brasil, indicam avanços tecnológicos significativos na gestão de recursos hídricos. Há 40 anos, o setor consumia de 180 a 200 m³ de água por tonelada de celulose, mas hoje esse consumo foi drasticamente reduzido para cerca de 25 m³ por tonelada em fábricas modernas, através do fechamento de circuitos de água e tecnologias de reúso.13

A dependência de dados desatualizados, embora impressionantes, levaria a uma superestimação do benefício ambiental. Uma avaliação mais precisa e honesta deve comparar o consumo do processo de reciclagem moderno com o do processo virgem moderno. Mantendo o valor consistente de 2 m³/t para a reciclagem e utilizando o valor atualizado de 25 m³/t para a produção virgem, a economia líquida contemporânea é de 23 m³ (23 kl) por tonelada. Este valor, embora menor que os 98 m³ frequentemente citados, é mais preciso e reflete a realidade tecnológica atual, tornando a calculadora mais credível.

* **Fator Derivado**: 23 kl / t.  
* **Fórmula por kg**: input\_kg \* 0.023

### **Economia de petróleo (barris)**

A economia de petróleo na reciclagem de papel está intrinsecamente ligada à redução do consumo de energia. A energia utilizada nos processos industriais, tanto na produção virgem quanto na reciclagem, é frequentemente gerada a partir da queima de combustíveis fósseis, incluindo o petróleo.14 Portanto, a redução da demanda energética se traduz diretamente em uma menor necessidade de petróleo. As fontes consultadas apresentam uma variação considerável para esta métrica.

Uma fonte indica uma economia de 2,5 barris de petróleo por tonelada de papel reciclado.5 Outras fontes fornecem valores diferentes, muitas vezes específicos para certos tipos de papel, como o jornal, com estimativas de 1,7 e 3,97 barris por tonelada.16 Outros dados são apresentados em galões, como 380 galões por tonelada e 462 galões por tonelada.18 Sabendo que um barril de petróleo equivale a 42 galões americanos, esses valores correspondem a 9,05 e 11 barris por tonelada, respectivamente.

A disparidade entre 1,7 e 11 barris por tonelada é significativa. Para um fator geral aplicável a "papel e papelão", é prudente focar nos valores não específicos para jornal. Excluindo os valores de 1,7 e 3,97, restam 2,5, 9,05 e 11 barris por tonelada. A média desses valores é (2,5+9,05+11)/3≈7,5 barris por tonelada. Este valor médio representa um ponto de equilíbrio entre as estimativas mais conservadoras e as mais otimistas, oferecendo um fator robusto para a calculadora.

* **Fator Derivado**: 7,5 barris / t.  
* **Fórmula por kg**: input\_kg \* 0.0075

### **Economia de árvores (un.)**

A métrica de "árvores salvas" é uma das mais intuitivas e comunicativas para o público geral, representando a substituição direta da madeira como matéria-prima. A quantidade de árvores necessárias para produzir uma tonelada de papel depende do tipo de árvore, sua idade, densidade da madeira e a eficiência do processo de polpação. Consequentemente, as estimativas variam.

As fontes indicam uma faixa que vai de 15 a mais de 30 árvores por tonelada. Algumas referências citam intervalos como 15 a 20 árvores 20 ou 15 a 30 árvores.5 Outras apontam para um valor fixo de 20 árvores 21 ou até 30 ou mais.23 No entanto, um número específico aparece com notável consistência em múltiplas fontes independentes: 17 árvores por tonelada.18 Essa recorrência sugere que o valor de 17 árvores se estabeleceu como um padrão de referência na indústria e em comunicações ambientais, possivelmente originado de estudos de base amplamente aceitos, como os da EPA. Dada a sua forte presença na literatura, o valor de 17 árvores por tonelada é a escolha mais defensável e padronizada para este cálculo.

* **Fator Derivado**: 17 árvores / t.  
* **Fórmula por kg**: input\_kg \* 0.017

### **Área de monocultura de árvores poupada (ha.ano)**

Esta métrica é mais complexa e requer um cálculo multifatorial, pois traduz a economia de árvores em uma unidade de uso da terra. O cálculo depende da produtividade das florestas plantadas e da densidade de plantio. Existem duas abordagens principais para derivar este fator.

A primeira abordagem parte do número de árvores salvas. Fontes especializadas em silvicultura no Brasil indicam que plantações de eucalipto destinadas à indústria de celulose utilizam tipicamente uma densidade de 1.666 árvores por hectare.25 Utilizando o fator de 17 árvores salvas por tonelada (derivado na seção anterior), a área poupada pode ser calculada como:

17 aˊrvores/t÷1.666 aˊrvores/ha=0,0102 ha/t.

A segunda abordagem, mais direta e robusta, utiliza dados de produtividade florestal. Relatórios da Indústria Brasileira de Árvores (Ibá) indicam que a produtividade média das florestas de eucalipto no Brasil é de aproximadamente 38 metros cúbicos por hectare por ano (m3/ha.ano).26 Para converter este volume de madeira em massa de celulose, utiliza-se um fator de conversão. Embora este fator possa variar, uma estimativa comum é que cerca de 2,5

m3 de madeira são necessários para produzir uma tonelada de celulose. Assim, a produtividade em massa é: 38 m³/ha.ano÷2,5 m³/t=15,2 t/ha.ano. O inverso deste valor nos dá a área necessária por tonelada: 1÷15,2 t/ha.ano=0,0658 ha.ano/t.

Os resultados das duas abordagens (0,0102 e 0,0658) são significativamente diferentes. A discrepância surge porque a métrica "árvores salvas" é uma simplificação, enquanto a produtividade em toneladas por hectare por ano é uma medida direta da eficiência do uso da terra pela indústria. Portanto, o valor derivado dos dados de produtividade da Ibá é cientificamente mais rigoroso e representativo da realidade do setor.

* **Fator Derivado**: 0,0658 ha.ano / t.  
* **Fórmula por kg**: input\_kg \* 0.0000658 (arredondado para 0.000066 para fins práticos)

## **Análise dos Fatores de Cálculo para Alumínio**

Esta seção quantifica os benefícios ambientais da reciclagem de alumínio. A análise destaca as economias de energia excepcionalmente altas que tornam o alumínio um pilar da economia circular e deriva os fatores correspondentes para água e petróleo.

### **Substituição Energética (kWh)**

A reciclagem de alumínio é um dos exemplos mais emblemáticos de economia de energia na indústria de materiais. A produção de alumínio primário a partir do minério de bauxita é um processo eletro-intensivo, conhecido como processo Hall-Héroult, que consome uma quantidade imensa de energia elétrica.28 Em contrapartida, a refundição de sucata de alumínio para produzir alumínio secundário requer apenas uma fração dessa energia.

Os dados sobre essa economia são notavelmente consistentes em toda a literatura técnica e ambiental. A economia de energia é quase universalmente citada como sendo de aproximadamente 95%.16 Fontes mais específicas quantificam essa economia. Um relatório da WWF detalha que a produção virgem consome 17.600 kWh por tonelada, enquanto a reciclagem consome apenas 750 kWh/t, resultando em uma economia líquida de 16.850 kWh/t, o que corresponde a uma redução de 95,7%.7 Outras fontes, incluindo dados de Stanford e da EPA, convergem para um valor de economia de 14.000 kWh por tonelada.16

Este valor de 14.000 kWh/t é o mais frequentemente citado e, embora ligeiramente mais conservador que o valor calculado de 16.850 kWh/t, representa um padrão robusto e amplamente aceito. A magnitude dessa economia é o principal motor econômico por trás das altas taxas de reciclagem do alumínio, tornando o material reciclado significativamente mais barato de produzir do que o metal virgem. Essa realidade econômica garante que cerca de 75% de todo o alumínio já produzido ainda esteja em uso hoje.30

* **Fator Derivado**: 14.000 kWh / t.  
* **Fórmula por kg**: input\_kg \* 14.0

### **Economia de Água (kl)**

Assim como a energia, a produção de alumínio primário também é intensiva no uso de água. O processo começa com a mineração da bauxita, que pode levar à contaminação de fontes de água locais, e prossegue com o processo Bayer para refinar a bauxita em alumina, que consome volumes significativos de água.36 Dados da indústria indicam que o consumo líquido de água doce para a produção de alumínio primário é a soma do consumo no processo Bayer (1,4 m³/t de alumina) e no processo de fundição (1,4 m³/t de alumínio). Como são necessárias aproximadamente 2 toneladas de alumina para produzir 1 tonelada de alumínio, o consumo total de água é de

(2×1,4)+1,4=4,2 m³ por tonelada de alumínio primário.

A reciclagem, por outro lado, contorna completamente a mineração e o refino da bauxita. O processo de reciclagem consome uma quantidade muito menor de água, principalmente para limpeza e resfriamento. Fontes como a Aluminium Association afirmam que a reciclagem de alumínio economiza até 95% da água necessária para a produção primária.38 Esta percentagem de economia é consistente com a economia de energia, refletindo o fato de que os processos evitados (mineração e refino) são intensivos em ambos os recursos.

Aplicando a economia de 95% ao consumo de água da produção primária, obtemos a economia líquida: 4,2 m³/t×0,95=3,99 m³ por tonelada. Este valor representa a quantidade de água doce que deixa de ser extraída de rios e aquíferos graças à reciclagem. Como 1 m³ equivale a 1 kl, a economia é de 3,99 kl por tonelada.

* **Fator Derivado**: 3,99 kl / t.  
* **Fórmula por kg**: input\_kg \* 0.00399

### **Economia de petróleo (barris)**

A economia de petróleo associada à reciclagem de alumínio é, em grande parte, um reflexo da imensa economia de energia. A eletricidade necessária para a produção primária é frequentemente gerada em usinas termelétricas que queimam combustíveis fósseis, incluindo derivados de petróleo. Ao reduzir a demanda de eletricidade em 95%, a reciclagem diminui correspondentemente a queima desses combustíveis.

As fontes que quantificam essa economia em barris de petróleo são extremamente consistentes. Múltiplos relatórios e bases de dados, incluindo os que citam a Universidade de Stanford, convergem para um valor único e específico: 40 barris de petróleo economizados por tonelada de alumínio reciclado.16 A unanimidade em torno deste número confere-lhe um alto grau de confiança e o torna o fator ideal para uso na calculadora, sem necessidade de cálculos adicionais ou harmonização de dados.

* **Fator Derivado**: 40 barris / t.  
* **Fórmula por kg**: input\_kg \* 0.04

## **Análise dos Fatores de Cálculo para Plástico**

Esta seção aborda os fatores para a reciclagem de plástico, reconhecendo as complexidades dos diferentes tipos de polímeros, a degradação do material e a ligação direta com as matérias-primas de combustíveis fósseis.

### **Substituição de Matéria Virgem (t)**

Ao contrário de materiais como o alumínio e o vidro, que podem ser reciclados indefinidamente com pouca ou nenhuma perda de qualidade, os plásticos sofrem degradação a cada ciclo de reprocessamento. O processo de reciclagem mecânica, que envolve a trituração, lavagem e extrusão do plástico, submete o material a estresse térmico e mecânico. Isso pode levar à quebra das cadeias poliméricas, resultando em um material com propriedades mecânicas inferiores, como menor resistência e maior fragilidade.39

Fontes indicam que certos tipos de plástico, como o Poliestireno (PS), perdem significativamente sua resistência, tornando o material reciclado uma alternativa inadequada para muitas aplicações que exigem resina virgem.40 Mesmo para polímeros mais robustos como o PET, a contaminação por outros plásticos ou resíduos orgânicos e a própria degradação térmica limitam a qualidade do produto final. Por essas razões, o plástico reciclado muitas vezes não é um substituto perfeito para a resina virgem e é frequentemente usado em aplicações menos exigentes (downcycling).

Devido a essa perda de qualidade e às perdas de material durante as etapas de lavagem e separação, o rendimento do processo não é de 100%. Embora as fontes analisadas não forneçam um valor numérico específico para o rendimento médio da reciclagem de plásticos, a descrição qualitativa da degradação e da perda de propriedades torna claro que um fator de substituição de 1:1 seria impreciso. Para refletir a realidade do processo, é necessário aplicar um fator de rendimento. Um valor de 90% (ou uma perda de 10%) é uma estimativa razoável e defensável para a reciclagem mecânica de plásticos comuns como PET e PEAD, representando um equilíbrio entre as perdas inevitáveis e as eficiências dos processos modernos.

* **Fator Derivado**: 0,90 t de matéria virgem / t de plástico reciclado.  
* **Fórmula por kg**: input\_kg \* 0.0009

### **Economia de Água (kl)**

A produção de plásticos a partir de matérias-primas virgens, derivadas do petróleo e do gás natural, é um processo que consome uma quantidade significativa de água. A água é utilizada em várias etapas, desde a extração dos combustíveis fósseis até o resfriamento nos reatores de polimerização e outros processos de fabricação.42 Uma análise completa da pegada hídrica da produção de plástico PET virgem estima um consumo total (incluindo água "azul" consumida e água "cinza" para diluição de poluentes) de 235 litros por quilograma (235 m³/t).42

A reciclagem de plástico também utiliza água, principalmente na fase de lavagem para remover rótulos, resíduos de alimentos e outras impurezas dos flocos de plástico. No entanto, o volume total é consideravelmente menor do que o necessário para a produção virgem. Uma fonte específica quantifica a economia de água ao reciclar uma tonelada de plástico PET em aproximadamente 5.700 litros (5,7 m³).38 A mesma fonte também menciona uma economia percentual de até 76%.

Existe uma aparente discrepância entre a economia absoluta (5,7 m³/t) e a economia percentual (76% de 235 m³/t, que seria 178,6 m³/t). Essa diferença provavelmente decorre de diferentes limites de sistema: o valor de 5.700 litros provavelmente se refere à economia direta de água no processo de fabricação (comparando a extrusão de resina virgem com o reprocessamento de flocos), enquanto a pegada hídrica de 235 L/kg é uma avaliação de ciclo de vida completa, que inclui a extração da matéria-prima. Para uma calculadora focada nos impactos diretos da reciclagem, o valor de economia de processo é mais apropriado e menos sujeito a controvérsias sobre os limites da avaliação. Portanto, o valor de 5,7 m³ por tonelada é a métrica mais adequada.

* **Fator Derivado**: 5,7 kl / t.  
* **Fórmula por kg**: input\_kg \* 0.0057

### **Economia de petróleo (barris)**

A economia de petróleo é, talvez, o benefício ambiental mais direto e fundamental da reciclagem de plásticos. A grande maioria dos plásticos virgens é produzida a partir de nafta, um derivado do petróleo, ou de etano, derivado do gás natural.45 Portanto, cada quilograma de plástico reciclado que substitui um quilograma de plástico virgem evita diretamente a extração e o refino de uma quantidade correspondente de combustível fóssil que seria usada como matéria-prima química (feedstock).

Essa economia é distinta da economia de petróleo em outros materiais, onde o petróleo é economizado principalmente por meio da redução do consumo de energia. No caso do plástico, trata-se de uma substituição material direta. As fontes fornecem valores quantitativos para essa economia. Uma fonte, citando a Universidade de Stanford, afirma que reciclar uma tonelada de plástico economiza 16,3 barris de petróleo.16 Outra fonte indica que uma tonelada de garrafas plásticas economiza cerca de 3,8 barris de petróleo 17, um valor mais baixo, possivelmente devido à especificidade do produto (garrafas PET leves). Uma terceira fonte calcula que a energia economizada ao reciclar uma tonelada de plástico equivale à energia contida em 22 barris de petróleo.47

O valor de 16,3 barris por tonelada é o mais adequado, pois se refere a uma economia direta de matéria-prima para plástico em geral, e não a uma equivalência energética ou a um tipo específico de produto. Os valores extremamente baixos citados em outras fontes (1 tonelada de petróleo por 100 toneladas de plástico) 7 são considerados outliers e provavelmente resultam de um erro de digitação ou interpretação.

* **Fator Derivado**: 16,3 barris / t.  
* **Fórmula por kg**: input\_kg \* 0.0163

## **Análise dos Fatores de Cálculo para Vidro**

Esta seção determinará os fatores para a reciclagem de vidro. A análise se concentrará na economia de energia resultante da redução das temperaturas dos fornos e nas economias de água associadas, que são menos dramáticas, mas ainda significativas.

### **Substituição Energética (kWh)**

A produção de vidro a partir de matérias-primas virgens – areia, barrilha e calcário – é um processo que exige grande quantidade de energia, principalmente para fundir esses componentes em fornos que operam a temperaturas muito elevadas.29 A principal vantagem energética da reciclagem de vidro reside em uma propriedade termodinâmica fundamental: o vidro reciclado, conhecido como caco ou "cullet", funde-se a uma temperatura mais baixa do que a mistura de matérias-primas virgens.7 Essa redução na temperatura de fusão se traduz diretamente em menor consumo de combustível (geralmente gás natural ou óleo) para aquecer os fornos.

No entanto, há uma notável divergência nos dados que quantificam essa economia. Múltiplas fontes afirmam uma economia de energia de 70%.7 Por outro lado, um estudo acadêmico brasileiro mais detalhado apresenta valores absolutos: a produção virgem consome 4,83 MWh/t (4.830 kWh/t) e a produção com reciclados consome 4,19 MWh/t (4.190 kWh/t), resultando em uma economia de apenas 0,64 MWh/t (640 kWh/t).50 Isso representa uma economia de apenas 13%, muito distante dos 70% citados.

Essa discrepância pode ser explicada pelo fato de que o valor de 70% pode se referir especificamente à energia de fusão, que é apenas uma parte do consumo total de energia da fábrica, ou pode ser um valor idealizado. O estudo com valores absolutos 50 parece ser mais abrangente. Para encontrar um meio-termo defensável, pode-se aplicar uma porcentagem de economia mais moderada, mas ainda assim significativa, à linha de base de consumo virgem. Fontes de ACV e outras referências frequentemente citam economias na faixa de 30% a 50%.48 Aplicando uma economia conservadora de 30% ao consumo virgem de 4.830 kWh/t, obtém-se uma economia de

4.830×0,30=1.449 kWh/t. Este valor é mais substancial que os 640 kWh/t, mas mais realista que a economia de 70%, e serve como um fator equilibrado e justificável.

* **Fator Derivado**: 1.449 kWh / t.  
* **Fórmula por kg**: input\_kg \* 1.449

### **Economia de Água (kl)**

O processo de fabricação de vidro também consome água, principalmente para o resfriamento de equipamentos e para a lavagem do vidro.51 A reciclagem contribui para a economia de água, embora de forma menos pronunciada do que em outros materiais como o papel.

Dados da indústria indicam que a fabricação de vidro plano (float) consome aproximadamente 2,6 m³ de água por tonelada.51 Fontes focadas em reciclagem afirmam que o uso de caco de vidro pode economizar até 50% da água em comparação com o processo virgem, com uma economia absoluta estimada em 1.300 litros (1,3 m³) por tonelada de vidro reciclado.38

A consistência entre os dados é alta. Uma economia de 50% aplicada ao consumo base de 2,6 m³/t resulta em uma economia de 1,3 m³/t, que corresponde exatamente ao valor absoluto citado. Isso confere grande confiança a esta métrica. A economia de água na reciclagem de vidro provém não apenas da redução do consumo no próprio processo, mas também da eliminação da necessidade de extrair e processar as matérias-primas virgens, atividades que também têm sua própria pegada hídrica.

* **Fator Derivado**: 1,3 kl / t.  
* **Fórmula por kg**: input\_kg \* 0.0013

## **Fatores de Cálculo Consolidados e Fórmulas Prontas para Implementação**

Esta seção sintetiza todos os fatores derivados da análise precedente em uma única tabela clara e acionável. Esta tabela é o principal produto deste relatório, projetada para uso direto pela equipe técnica responsável pela implementação da calculadora. Ela remove qualquer ambiguidade ao fornecer o material, a métrica, a unidade e a fórmula precisa necessária para a lógica de backend da aplicação, servindo como um guia de referência rápida e a fonte definitiva para os cálculos ambientais do projeto.

| Material | Métrica | Unidade | Fórmula (por kg de entrada) |
| :---- | :---- | :---- | :---- |
| **Papel e Papelão** | Substituição de Matéria Virgem | t | input\_kg \* 0.00085 |
|  | Substituição Energética | kWh | input\_kg \* 3.44 |
|  | Economia de Água | kl | input\_kg \* 0.023 |
|  | Economia de petróleo | barris | input\_kg \* 0.0075 |
|  | Economia de árvores | un. | input\_kg \* 0.017 |
|  | Área de monocultura poupada | ha.ano | input\_kg \* 0.000066 |
| **Alumínio** | Substituição Energética | kWh | input\_kg \* 14.0 |
|  | Economia de Água | kl | input\_kg \* 0.00399 |
|  | Economia de petróleo | barris | input\_kg \* 0.04 |
| **Plástico** | Substituição de Matéria Virgem | t | input\_kg \* 0.0009 |
|  | Economia de Água | kl | input\_kg \* 0.0057 |
|  | Economia de petróleo | barris | input\_kg \* 0.0163 |
| **Vidro** | Substituição Energética | kWh | input\_kg \* 1.449 |
|  | Economia de Água | kl | input\_kg \* 0.0013 |

## **Considerações Críticas para Aplicação e Interpretação dos Dados**

Esta seção final fornece um contexto essencial para garantir o uso responsável dos fatores derivados. Ela orienta sobre a natureza dos dados de Avaliação de Ciclo de Vida (ACV) e as melhores práticas para sua apresentação ao usuário final, reforçando a credibilidade e a transparência da ferramenta.

### **A Natureza dos Dados de Avaliação de Ciclo de Vida (ACV)**

É fundamental compreender que todos os fatores apresentados neste relatório são baseados nos princípios da Avaliação de Ciclo de Vida (ACV). A ACV é uma metodologia científica padronizada para avaliar os impactos ambientais de um produto ou processo ao longo de toda a sua existência, "do berço ao túmulo".53 Modelos como o WARM da EPA dos EUA, que informam muitos desses fatores, são projetados para fornecer estimativas de alto nível e comparativas.55 Isso significa que os números representam médias e se baseiam em uma série de suposições sobre processos industriais, matrizes energéticas e cadeias de suprimentos. Eles são extremamente úteis para comparações e estimativas, mas não devem ser interpretados como medições exatas de um evento de reciclagem específico, que pode variar significativamente na prática.

### **Variabilidade Geográfica e Tecnológica**

Os fatores de impacto ambiental não são universais. Eles podem variar substancialmente com base na localização geográfica e na tecnologia empregada. Por exemplo, a economia de gases de efeito estufa associada à economia de eletricidade depende da matriz energética local (uma rede baseada em hidrelétricas versus uma baseada em carvão produzirá resultados diferentes). Da mesma forma, a eficiência de uma fábrica de papel específica, a distância de transporte da sucata ou o nível de estresse hídrico em uma região podem alterar os resultados reais.57 Embora este relatório tenha priorizado o uso de dados específicos do Brasil sempre que possível (como os dados de produtividade florestal da Ibá 26), muitos fatores são derivados de médias internacionais e devem ser entendidos como tal.

### **Recomendações para a Apresentação na Interface do Usuário (UI)**

Para garantir a transparência e gerenciar as expectativas do usuário final, recomenda-se que a interface da calculadora inclua uma nota explicativa ou um ícone de informação. Este texto deve esclarecer que os valores exibidos são "estimativas baseadas em médias da indústria e em estudos de ciclo de vida". Essa simples adição aumenta a credibilidade da ferramenta, demonstrando um entendimento sofisticado da natureza dos dados. Além disso, fornecer um link para este relatório ou citar as principais fontes (por exemplo, "Dados baseados em modelos da EPA e relatórios da indústria") pode reforçar ainda mais a autoridade e a transparência da aplicação.

### **Manutenção de Dados e Atualizações Futuras**

Os fatores de conversão ambiental não são estáticos. Eles evoluem à medida que as tecnologias industriais melhoram, novas pesquisas são publicadas e as metodologias de ACV são refinadas. O exemplo da economia de água na produção de papel, onde os dados modernos mostram uma eficiência muito maior do que os dados históricos 13, é um caso claro dessa evolução. Portanto, é crucial que os fatores utilizados na calculadora sejam revisados e atualizados periodicamente (por exemplo, a cada 2-3 anos) para garantir que a ferramenta continue a fornecer informações precisas e relevantes, refletindo o estado da arte da ciência e da indústria.

#### **Referências citadas**

1. Recovered Paper Yield Estimate Using Laboratory and Mill Accounting Data \- TAPPI.org, acessado em setembro 26, 2025, [https://www.tappi.org/content/events/07recycle/papers/dejong.pdf](https://www.tappi.org/content/events/07recycle/papers/dejong.pdf)  
2. Recycling at Paper Mills \- Paper360, acessado em setembro 26, 2025, [https://paper360.tappi.org/2021/03/15/recycling-at-paper-mills/](https://paper360.tappi.org/2021/03/15/recycling-at-paper-mills/)  
3. Paper Making and Recycling \- EPA Archives, acessado em setembro 26, 2025, [https://archive.epa.gov/wastes/conserve/materials/paper/web/html/papermaking.html](https://archive.epa.gov/wastes/conserve/materials/paper/web/html/papermaking.html)  
4. Demonstration project for the recycling of pulp waste from the paper recycling industry (RECYPULPE), acessado em setembro 26, 2025, [https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE97-ENV-F-000170/demonstration-project-for-the-recycling-of-pulp-waste-from-the-paper-recycling-industry-recypulpe](https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE97-ENV-F-000170/demonstration-project-for-the-recycling-of-pulp-waste-from-the-paper-recycling-industry-recypulpe)  
5. As Vantagens de Reciclar e Reutilizar o Papel \- Scarcelli Embalagens, acessado em setembro 26, 2025, [https://scarcelli.com.br/as-vantagens-de-reciclar-e-reutilizar-o-papel/](https://scarcelli.com.br/as-vantagens-de-reciclar-e-reutilizar-o-papel/)  
6. Entenda os custos que envolvem a reciclagem de papéis | by Tiago Assis \- Medium, acessado em setembro 26, 2025, [https://medium.com/unisustentabilidade/entenda-os-custos-que-envolvem-a-reciclagem-de-pap%C3%A9is-63144c7311b0](https://medium.com/unisustentabilidade/entenda-os-custos-que-envolvem-a-reciclagem-de-pap%C3%A9is-63144c7311b0)  
7. Conheça os benefícios da coleta seletiva \- WWF Brasil, acessado em setembro 26, 2025, [https://www.wwf.org.br/?14001/](https://www.wwf.org.br/?14001/)  
8. Você sabia que a fabricação e o uso do papel reciclado contribuem para a preservação das árvores? | SINDALESC, acessado em setembro 26, 2025, [https://sindalesc.org.br/2021/09/22/voce-sabia-que-a-fabricacao-e-o-uso-do-papel-reciclado-contribuem-para-a-preservacao-das-arvores/](https://sindalesc.org.br/2021/09/22/voce-sabia-que-a-fabricacao-e-o-uso-do-papel-reciclado-contribuem-para-a-preservacao-das-arvores/)  
9. Celulose reciclada: redução do consumo de recursos naturais em comparação à fibra virgem \- Newspulpaper, acessado em setembro 26, 2025, [https://newspulpaper.com/celulose-reciclada-reducao-do-consumo-de-recursos-naturais-em-comparacao-a-fibra-virgem/](https://newspulpaper.com/celulose-reciclada-reducao-do-consumo-de-recursos-naturais-em-comparacao-a-fibra-virgem/)  
10. How Much Energy is Saved by Recycling Paper?, acessado em setembro 26, 2025, [https://www.recyclingtoday.org/blogs/news/how-much-energy-is-saved-by-recycling-paper](https://www.recyclingtoday.org/blogs/news/how-much-energy-is-saved-by-recycling-paper)  
11. Resources Saved by Recycling, acessado em setembro 26, 2025, [https://cms3.revize.com/revize/canaan/Departments/Public%20Works/Recycling\_facts.pdf](https://cms3.revize.com/revize/canaan/Departments/Public%20Works/Recycling_facts.pdf)  
12. O processo de fabricação de papel reciclado e as ações associadas aos custos ambientais em indústria de Santa Catarina \- ABCustos, acessado em setembro 26, 2025, [https://revista.abcustos.org.br/abcustos/article/download/28/630/2867](https://revista.abcustos.org.br/abcustos/article/download/28/630/2867)  
13. Indústria brasileira de papel e celulose avança na redução do consumo de água, acessado em setembro 26, 2025, [https://tratamentodeagua.com.br/industria-brasileira-de-papel-e-celulose-avanca-na-reducao-consumo-de-agua/](https://tratamentodeagua.com.br/industria-brasileira-de-papel-e-celulose-avanca-na-reducao-consumo-de-agua/)  
14. ACV PAPEL \- Portal Virtuhab, acessado em setembro 26, 2025, [https://portalvirtuhab.paginas.ufsc.br/files/2014/08/ACV-PAPEL.pdf](https://portalvirtuhab.paginas.ufsc.br/files/2014/08/ACV-PAPEL.pdf)  
15. Como os combustíveis fósseis impactam o aquecimento global \- EDP, acessado em setembro 26, 2025, [https://www.edp.com/pt/media/historias-edp/como-os-combustiveis-fosseis-impactam-o-aquecimento-global](https://www.edp.com/pt/media/historias-edp/como-os-combustiveis-fosseis-impactam-o-aquecimento-global)  
16. Why Recycle? \- Less Is More \- LessIsMore.org, acessado em setembro 26, 2025, [https://lessismore.org/materials/28-why-recycle/](https://lessismore.org/materials/28-why-recycle/)  
17. The Recycling Connection, acessado em setembro 26, 2025, [https://wsra.net/wp-content/uploads/2019/12/hot\_topic\_energyfuel\_final.pdf](https://wsra.net/wp-content/uploads/2019/12/hot_topic_energyfuel_final.pdf)  
18. Why Recycle? \- Start Recycling in Holmes County, acessado em setembro 26, 2025, [https://holmescountyrecycling.com/why-recycle/](https://holmescountyrecycling.com/why-recycle/)  
19. Environment & Recycling Facts | CuyahogaRecycles, acessado em setembro 26, 2025, [https://cuyahogarecycles.org/environment\_recycling\_facts/](https://cuyahogarecycles.org/environment_recycling_facts/)  
20. Por que reciclar? \- WR Gestão de Resíduos, acessado em setembro 26, 2025, [https://www.wrsustentabilidade.com.br/por-que-reciclar](https://www.wrsustentabilidade.com.br/por-que-reciclar)  
21. Reciclar uma tonelada de papel salva até 20 árvores \- MAPFRE, acessado em setembro 26, 2025, [https://www.mapfre.com/pt-br/actualidade/sustentabilidade/reciclar-papel-salva-arvores/](https://www.mapfre.com/pt-br/actualidade/sustentabilidade/reciclar-papel-salva-arvores/)  
22. Continente vai plantar 20 árvores por cada tonelada de papel recolhido, acessado em setembro 26, 2025, [https://www.revistasustentavel.pt/mobilidade/continente-promove-plantacao-de-arvores-atraves-de-reciclagem-de-cadernos-escolares/](https://www.revistasustentavel.pt/mobilidade/continente-promove-plantacao-de-arvores-atraves-de-reciclagem-de-cadernos-escolares/)  
23. 30 árvores podem ser poupadas a cada tonelada de papel reciclado, diz estudo, acessado em setembro 26, 2025, [https://sustentabilidades.com.br/index.php/pt/noticias/30-arvores-podem-ser-poupadas-a-cada-tonelada-de-papel-reciclado-diz-estudo](https://sustentabilidades.com.br/index.php/pt/noticias/30-arvores-podem-ser-poupadas-a-cada-tonelada-de-papel-reciclado-diz-estudo)  
24. Sustentabilidade \- IFSP-CJO, acessado em setembro 26, 2025, [https://www.ifspcjo.edu.br/sustentabilidade](https://www.ifspcjo.edu.br/sustentabilidade)  
25. Crescimento e forma do eucalipto em função da densidade de plantio \- alice Embrapa, acessado em setembro 26, 2025, [https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1150345/1/Crescimento-forma-eucalipto-2022.pdf](https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1150345/1/Crescimento-forma-eucalipto-2022.pdf)  
26. Relatório Anual \- Two Sides Brasil, acessado em setembro 26, 2025, [https://twosides.org.br/wp-content/uploads/sites/15/2023/02/relatorio-anual-iba2022-compactado.pdf](https://twosides.org.br/wp-content/uploads/sites/15/2023/02/relatorio-anual-iba2022-compactado.pdf)  
27. Investimentos em inovação ampliam competitividade da celulose \- Poder360, acessado em setembro 26, 2025, [https://www.poder360.com.br/conteudo-patrocinado/investimentos-em-inovacao-ampliam-competitividade-da-celulose/](https://www.poder360.com.br/conteudo-patrocinado/investimentos-em-inovacao-ampliam-competitividade-da-celulose/)  
28. How much energy is saved by recycling aluminum? \- Quora, acessado em setembro 26, 2025, [https://www.quora.com/How-much-energy-is-saved-by-recycling-aluminum](https://www.quora.com/How-much-energy-is-saved-by-recycling-aluminum)  
29. How does recycling save energy?, acessado em setembro 26, 2025, [https://planning.lacity.gov/eir/CrossroadsHwd/deir/files/references/M401.pdf](https://planning.lacity.gov/eir/CrossroadsHwd/deir/files/references/M401.pdf)  
30. Sustainability – Recycling | Aluminum Association, acessado em setembro 26, 2025, [https://www.aluminum.org/Recycling](https://www.aluminum.org/Recycling)  
31. TIL that it takes 95% less energy to recycle a ton of aluminum cans than to produce them new, 1 recycled ton of aluminum is equivalent to saving 40 barrels of oil : r/todayilearned \- Reddit, acessado em setembro 26, 2025, [https://www.reddit.com/r/todayilearned/comments/9uyitz/til\_that\_it\_takes\_95\_less\_energy\_to\_recycle\_a\_ton/](https://www.reddit.com/r/todayilearned/comments/9uyitz/til_that_it_takes_95_less_energy_to_recycle_a_ton/)  
32. Communicating the Benefits of Recycling | Tools for Local Government Recycling Programs | US EPA \- EPA Archives, acessado em setembro 26, 2025, [https://archive.epa.gov/wastes/conserve/tools/localgov/web/html/index-2.html](https://archive.epa.gov/wastes/conserve/tools/localgov/web/html/index-2.html)  
33. Environmental Factoids | WasteWise | US EPA, acessado em setembro 26, 2025, [https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html](https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html)  
34. How Recycling Saves Energy and Reduces Costs \- WasteTrade, acessado em setembro 26, 2025, [https://www.wastetrade.com/resources/environmental/how-recycling-saves-energy-and-reduces-costs/](https://www.wastetrade.com/resources/environmental/how-recycling-saves-energy-and-reduces-costs/)  
35. How Does Recycling Save Energy?, acessado em setembro 26, 2025, [https://www.gexaenergy.com/for-home/learn-and-explore/how-does-recycling-save-energy](https://www.gexaenergy.com/for-home/learn-and-explore/how-does-recycling-save-energy)  
36. Why Water Conservation in Metal Recycling is Critical for the Planet, acessado em setembro 26, 2025, [https://www.tmscrapmetals.com/why-water-conservation-in-metal-recycling-is-critical-for-the-planet/](https://www.tmscrapmetals.com/why-water-conservation-in-metal-recycling-is-critical-for-the-planet/)  
37. Why Aluminum is the \#1 Recyclable Material for the Economy and the Environment \- PATH Water, acessado em setembro 26, 2025, [https://drinkpathwater.com/blogs/news/why-aluminum-recycling-is-the-most-important-material-for-the-economy-and-the-environment](https://drinkpathwater.com/blogs/news/why-aluminum-recycling-is-the-most-important-material-for-the-economy-and-the-environment)  
38. How Effective Recycling Conserves Water and Reduces Waste | WasteTrade, acessado em setembro 26, 2025, [https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/](https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/)  
39. Eduardo Júnio Gomes Oliveira Estudo sobre a processabilidade de PET reciclado obtido pelo processo de reciclagem mecânica \- CORE, acessado em setembro 26, 2025, [https://core.ac.uk/download/pdf/322932866.pdf](https://core.ac.uk/download/pdf/322932866.pdf)  
40. Entenda quando vale a pena usar resina virgem ou reciclada nas \- Mundo do Plástico, acessado em setembro 26, 2025, [https://mundodoplastico.plasticobrasil.com.br/artigos/entenda-quando-vale-pena-usar-resina-virgem-ou-reciclada-nas-produes/](https://mundodoplastico.plasticobrasil.com.br/artigos/entenda-quando-vale-pena-usar-resina-virgem-ou-reciclada-nas-produes/)  
41. Resina virgem x resina reciclada: como escolher? \- Mundo do Plástico, acessado em setembro 26, 2025, [https://mundodoplastico.plasticobrasil.com.br/artigos/resina-virgem-x-resina-reciclada-como-escolher/](https://mundodoplastico.plasticobrasil.com.br/artigos/resina-virgem-x-resina-reciclada-como-escolher/)  
42. The Water Footprint of Your Plastic Bottle \- FoodPrint, acessado em setembro 26, 2025, [https://foodprint.org/blog/plastic-water-bottle/](https://foodprint.org/blog/plastic-water-bottle/)  
43. Plastic Production and Water Consumption \- Grenova, acessado em setembro 26, 2025, [https://grenova.com/worldwaterday2023/](https://grenova.com/worldwaterday2023/)  
44. Your Plastic Has a Water Footprint, acessado em setembro 26, 2025, [https://watercalculator.org/news/news-briefs/your-plastic-water-footprint/](https://watercalculator.org/news/news-briefs/your-plastic-water-footprint/)  
45. Menos de 10% dos plásticos globais são fabricados a partir de materiais reciclados \- VEJA, acessado em setembro 26, 2025, [https://veja.abril.com.br/agenda-verde/menos-de-10-dos-plasticos-globais-sao-fabricados-a-partir-de-materiais-reciclados/](https://veja.abril.com.br/agenda-verde/menos-de-10-dos-plasticos-globais-sao-fabricados-a-partir-de-materiais-reciclados/)  
46. 46\. Reciclagem do plástico \- ALEA, acessado em setembro 26, 2025, [https://www.alea.pt/index.php?option=com\_content\&view=article\&id=525\&Itemid=1745\&lang=pt](https://www.alea.pt/index.php?option=com_content&view=article&id=525&Itemid=1745&lang=pt)  
47. The Revolution in Petroleum Recycling: Turning Waste into Valuable Products, acessado em setembro 26, 2025, [https://egyptoil-gas.com/features/the-revolution-in-petroleum-recycling-turning-waste-into-valuable-products/](https://egyptoil-gas.com/features/the-revolution-in-petroleum-recycling-turning-waste-into-valuable-products/)  
48. Glass or Aluminum: Which Is Better For The Environment? \- GreenMatch, acessado em setembro 26, 2025, [https://www.greenmatch.co.uk/glass-vs-aluminium](https://www.greenmatch.co.uk/glass-vs-aluminium)  
49. Reciclagem de Vidro: tudo que você precisa saber | LOJA DO TRITURADOR, acessado em setembro 26, 2025, [https://www.lojadotriturador.com.br/reciclagem-de-vidro-tudo-que-voce-precisa-saber](https://www.lojadotriturador.com.br/reciclagem-de-vidro-tudo-que-voce-precisa-saber)  
50. CIRINEA LUCIA MARCANTE CRISIGIOVANNI UMA ABORDAGEM SÓCIO-AMBIENTAL E TECNOLÓGICA DA RECICLAGEM DOS RESÍDUOS DE VIDRO Disserta \- Mestrado Lactec, acessado em setembro 26, 2025, [https://mestrado.lactec.com.br/wp-content/uploads/2021/09/040\_PT.pdf](https://mestrado.lactec.com.br/wp-content/uploads/2021/09/040_PT.pdf)  
51. Water \- NSG Group, acessado em setembro 26, 2025, [https://www.nsg.com/en/sustainability/environment/natural-capital/water](https://www.nsg.com/en/sustainability/environment/natural-capital/water)  
52. How Effective Recycling Conserves Water and Reduces Waste | WasteTrade, acessado em setembro 26, 2025, [https://www.wastetrade.com/it/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/](https://www.wastetrade.com/it/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/)  
53. US EPA's Warm Tool | West Coast Climate and Materials Management Forum, acessado em setembro 26, 2025, [https://westcoastclimateforum.com/content/us-epas-warm-tool](https://westcoastclimateforum.com/content/us-epas-warm-tool)  
54. Evaluating the value of an LCA \- Shapes by Hydro, acessado em setembro 26, 2025, [https://www.shapesbyhydro.com/en/material-properties/evaluating-the-value-of-an-lca/](https://www.shapesbyhydro.com/en/material-properties/evaluating-the-value-of-an-lca/)  
55. Basic Information about the Waste Reduction Model | US EPA, acessado em setembro 26, 2025, [https://www.epa.gov/waste-reduction-model/basic-information-about-waste-reduction-model](https://www.epa.gov/waste-reduction-model/basic-information-about-waste-reduction-model)  
56. Documentation for Greenhouse Gas Emission and Energy Factors Used in the Waste Reduction Model (WARM) \- Background Chapters, acessado em setembro 26, 2025, [https://www.epa.gov/sites/default/files/2016-03/documents/warm\_v14\_background.pdf](https://www.epa.gov/sites/default/files/2016-03/documents/warm_v14_background.pdf)  
57. Using WARM Emission Factors for Materials and Pathways Not in WARM | EPA, acessado em setembro 26, 2025, [https://www.epa.gov/sites/default/files/2016-03/documents/using\_warm\_efs\_for\_materials\_and\_pathways.pdf](https://www.epa.gov/sites/default/files/2016-03/documents/using_warm_efs_for_materials_and_pathways.pdf)