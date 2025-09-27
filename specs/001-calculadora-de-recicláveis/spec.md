# Especificação de Feature: Calculadora de Recicláveis

**Branch da Feature**: `001-calculadora-de-recicláveis`
**Criado em**: 2025-09-26
**Status**: Rascunho
**Entrada**: Descrição do usuário: "calculadora de recicláveis

Sistema web simples para calcular o quanto que a reciclagem de materiais (pós-consumo) como: Papel, Plastico, Vidro e Alumínio podem economizar em:

Substituição de Materia Virgem (t)
Substituição Energética (kWh)
Valor Equivalente à Economia de Energia (R$)
 Redução de Gás de Efeito Estufa (tCO2e)
 Valor Equivalente aos Créditos de Carbono (R$)
Economia de Água (kl)
Valor Equivalente à Economia de Água (R$)
 Área de monocultura de árvores poupada (ha.ano)
 Economia de Bauxita (t)
 Valor Equivalente à Economia de Bauxita (R$)
Economia de petróleo (barris)
Valor Equivalente à Economia de Petróleo (R$)
 Economia de areia (t)
 Valor Equivalente à Economia de Areia (R$)
Economia de árvores (un.)
Valor Economia de Custo de Aterramento (R$)

Ao inserir os dados o sistema automaticamente já vai mostrar o resultado. Os dados de entrada serão salvos no localstorage mesmo. É para ser muito simples.

Este instrumento foi desenvolvido para ajudar empresas a avaliar os benefícios em termos de gases de efeito estufa (GEE), energia, etc, ao aumentar o uso de insumos reciclados pós-consumo
As quantidade de entrada devem ser em quilos."

---

## ⚡ Diretrizes Rápidas

- ✅ Foco no **QUE** os usuários precisam e **PORQUÊ**
- ❌ Evitar o **COMO** implementar (sem pilha de tecnologia, APIs, estrutura de código)
- 👥 Escrito para stakeholders de negócio, não para desenvolvedores

### Requisitos da Seção

- **Seções obrigatórias**: Devem ser completadas para cada feature
- **Seções opcionais**: Incluir apenas quando relevante para a feature
- Quando uma seção não se aplica, remova-a completamente (não deixe como "N/A")

---

## Cenários de Usuário & Testes _(obrigatório)_

### História de Usuário Principal

Como um usuário, eu quero inserir o peso de diferentes materiais recicláveis (Papel, Plástico, Vidro, Alumínio) em quilogramas, para que eu possa ver imediatamente o impacto ambiental e econômico positivo dos meus esforços de reciclagem.

### Cenários de Aceitação

1.  **Dado** que a página da calculadora está aberta, **Quando** eu insiro "100" no campo de entrada "Papel", **Então** o sistema calcula e exibe instantaneamente todas as 21 métricas de economia com base em 100kg de papel reciclado.
2.  **Dado** que eu inseri valores para vários materiais, **Quando** eu fecho e reabro a aba do navegador, **Então** os campos de entrada mantêm os valores que eu inseri anteriormente.
3.  **Dado** que alguns campos de entrada já estão preenchidos, **Quando** eu atualizo o valor no campo "Alumínio", **Então** todas as métricas exibidas são atualizadas imediatamente para refletir o novo cálculo total.

### Casos Extremos

- Como o sistema lida com entradas não numéricas?
- Como o sistema lida com números negativos nos campos de entrada?
- Existe um limite superior para o peso que pode ser inserido?

## Requisitos _(obrigatório)_

### Requisitos Funcionais

- **RF-001**: O sistema DEVE fornecer campos de entrada separados para 'Papel', 'Plástico', 'Vidro' e 'Alumínio'.
- **RF-002**: Todas as entradas DEVEM aceitar valores numéricos representando quilogramas.
- **RF-003**: O sistema DEVE calcular e exibir as seguintes 21 métricas em tempo real à medida que o usuário digita:
  1.  Substituição de Materia Virgem (t)
  2.  Substituição Energética (kWh)
  3.  Valor Equivalente à Economia de Energia (R$)
  4.  Redução de Gás de Efeito Estufa (tCO2e)
  5.  Valor Equivalente aos Créditos de Carbono (R$)
  6.  Economia de Água (kl)
  7.  Valor Equivalente à Economia de Água (R$)
  8.  Área de monocultura de árvores poupada (ha.ano)
  9.  Economia de Bauxita (t)
  10. Valor Equivalente à Economia de Bauxita (R$)
  11. Economia de petróleo (barris)
  12. Valor Equivalente à Economia de Petróleo (R$)
  13. Economia de areia (t)
  14. Valor Equivalente à Economia de Areia (R$)
  15. Economia de árvores (un.)
  16. Valor Economia de Custo de Aterramento (R$)
  17. **(Equivalente)** Energia para uma casa por X dias
  18. **(Equivalente)** Quilômetros em um carro elétrico
  19. **(Equivalente)** Cargas de bateria de celular
  20. **(Equivalente)** Banhos de 10 minutos
  21. **(Equivalente)** Quilômetros de carro a gasolina evitados
- **RF-004**: O sistema DEVE salvar os valores inseridos pelo usuário no `localStorage` do navegador.
- **RF-005**: O sistema DEVE carregar automaticamente os valores salvos do `localStorage` nos campos de entrada quando a página for carregada.
- **RF-006**: O sistema DEVE usar os fatores de conversão específicos para os cálculos, conforme detalhado abaixo.
- **RF-007**: O sistema DEVE prevenir ou lidar com entradas não positivas (zero ou negativas) e não numéricas de forma elegante.
- **RF-008**: O sistema DEVE exibir um gráfico de barras empilhadas para cada métrica ambiental primária.
  - Cada segmento da barra DEVE representar a contribuição de um material específico (Papel, Alumínio, Plástico, Vidro) para o total.
  - O gráfico DEVE ser atualizado em tempo real à medida que o usuário insere ou altera os valores de entrada.
  - O valor total da métrica DEVE ser exibido claramente ao lado do gráfico.
  - _(Recomendado)_ O gráfico DEVERIA ser interativo, mostrando uma dica de ferramenta com o valor específico do material e a contribuição percentual ao passar o mouse.

### Fatores de Cálculo

#### Papel e Papelão (por kg)

Com base nas informações fornecidas, os cálculos para cada quilograma de papel/papelão são os seguintes. As métricas não listadas são consideradas não quantificáveis a partir dos dados de origem e devem exibir 0 ou N/A.

- **Substituição de Materia Virgem (t)**: `input_kg * 0.00085`
- **Substituição Energética (kWh)**: `input_kg * 3.44`
- **Redução de Gás de Efeito Estufa (tCO2e)**: `input_kg * 0.000292`
- **Valor Equivalente aos Créditos de Carbono (R$)**: Este valor é um intervalo.
  - _Cenário Baixo_: `(Redução de Gás de Efeito Estufa in tCO2e) * 26.00`
  - _Cenário Alto_: `(Redução de Gás de Efeito Estufa in tCO2e) * 78.00`
  - A UI deve exibir este intervalo, ex: "R$ X - R$ Y".
- **Economia de Água (kl)**: `input_kg * 0.023`
- **Economia de petróleo (barris)**: `input_kg * 0.0075`
- **Economia de árvores (un.)**: `input_kg * 0.017`
- **Área de monocultura de árvores poupada (ha.ano)**: `input_kg * 0.000066`
- **Economia de Bauxita (t)**: 0
- **Economia de areia (t)**: 0

#### Alumínio (por kg)

Com base nas informações fornecidas para o alumínio. As métricas não listadas são consideradas não quantificáveis e devem exibir 0 ou N/A.

- **Substituição de Materia Virgem (t)**: `input_kg / 1000` (Alumínio)
- **Substituição Energética (kWh)**: `input_kg * 14.0`
- **Redução de Gás de Efeito Estufa (tCO2e)**: `input_kg * 0.009183`
- **Valor Equivalente aos Créditos de Carbono (R$)**: Este valor é um intervalo.
  - _Cenário Baixo_: `(Redução de Gás de Efeito Estufa in tCO2e) * 26.00`
  - _Cenário Alto_: `(Redução de Gás de Efeito Estufa in tCO2e) * 78.00`
  - A UI deve exibir este intervalo, ex: "R$ X - R$ Y".
- **Economia de Água (kl)**: `input_kg * 0.00399`
- **Economia de petróleo (barris)**: `input_kg * 0.04`
- **Economia de Bauxita (t)**: `input_kg * 0.004`
- **Área de monocultura de árvores poupada (ha.ano)**: 0
- **Economia de areia (t)**: 0
- **Economia de árvores (un.)**: 0

#### Plástico (por kg)

Com base nas informações fornecidas para plásticos. As métricas não listadas são consideradas não quantificáveis e devem exibir 0 ou N/A.

- **Substituição de Materia Virgem (t)**: `input_kg * 0.0009`
- **Substituição Energética (kWh)**: `input_kg * 0.005774`
- **Redução de Gás de Efeito Estufa (tCO2e)**: `input_kg * 0.0015`
- **Valor Equivalente aos Créditos de Carbono (R$)**: Este valor é um intervalo.
  - _Cenário Baixo_: `(Redução de Gás de Efeito Estufa in tCO2e) * 26.00`
  - _Cenário Alto_: `(Redução de Gás de Efeito Estufa in tCO2e) * 78.00`
  - A UI deve exibir este intervalo, ex: "R$ X - R$ Y".
- **Economia de Água (kl)**: `input_kg * 0.0057`
- **Economia de petróleo (barris)**: `input_kg * 0.0163`
- **Área de monocultura de árvores poupada (ha.ano)**: 0
- **Economia de Bauxita (t)**: 0
- **Economia de areia (t)**: 0
- **Economia de árvores (un.)**: 0

#### Vidro (por kg)

Com base nas informações fornecidas para o vidro. As métricas não listadas são consideradas não quantificáveis e devem exibir 0 ou N/A.

- **Substituição de Materia Virgem (t)**: `input_kg * 0.0012`
- **Substituição Energética (kWh)**: `input_kg * 1.449`
- **Redução de Gás de Efeito Estufa (tCO2e)**: `input_kg * 0.000121`
- **Valor Equivalente aos Créditos de Carbono (R$)**: Este valor é um intervalo.
  - _Cenário Baixo_: `(Redução de Gás de Efeito Estufa in tCO2e) * 26.00`
  - _Cenário Alto_: `(Redução de Gás de Efeito Estufa in tCO2e) * 78.00`
  - A UI deve exibir este intervalo, ex: "R$ X - R$ Y".
- **Economia de Água (kl)**: `input_kg * 0.0013`
- **Economia de petróleo (barris)**: 0
- **Economia de areia (t)**: `input_kg * 0.0012`
- **Área de monocultura de árvores poupada (ha.ano)**: 0
- **Economia de Bauxita (t)**: 0
- **Economia de árvores (un.)**: 0

### Fatores de Cálculo Criativos (Métricas de Equivalência)

Esta seção detalha os cálculos para converter as métricas de impacto primário em equivalentes do dia a dia, tornando os resultados mais compreensíveis e impactantes para o usuário.

#### Métricas por Material (por kg)

- **Papel e Papelão**:
  - **Energia para uma casa (dias)**: `input_kg * 0.688` (Base: 5 kWh/dia por residência)
  - **Banhos de 10 minutos (un.)**: `input_kg * 0.255` (Base: 90 litros/banho)
  - **Km de carro a gasolina evitados (km)**: `input_kg * 2.43` (Base: 0.12 kgCO2e/km)
- **Alumínio**:
  - **Km em carro elétrico (km)**: `input_kg * 82.35` (Base: 0.17 kWh/km)
  - **Km de carro a gasolina evitados (km)**: `input_kg * 76.5` (Base: 0.12 kgCO2e/km)
- **Plástico**:
  - **Km de carro a gasolina evitados (km)**: `input_kg * 12.5` (Base: 0.12 kgCO2e/km)
- **Vidro**:
  - **Cargas de bateria de celular (un.)**: `input_kg * 97` (Base: 0.015 kWh/carga)
  - **Km de carro a gasolina evitados (km)**: `input_kg * 1.0` (Base: 0.12 kgCO2e/km)

### Entidades Chave _(incluir se a feature envolver dados)_

- **EntradaReciclagem**: Representa a entrada bruta do usuário.
  - Atributos: `papelEmKg`, `plasticoEmKg`, `vidroEmKg`, `aluminioEmKg`.
- **EconomiasAmbientais**: Representa os resultados calculados. Cada métrica dentro desta entidade será um objeto estruturado para suportar a criação de gráficos, contendo o valor total e uma discriminação por material.

#### Estrutura de Dados para Gráficos

Cada métrica calculada seguirá a estrutura JSON abaixo. Esta estrutura é projetada para fornecer todos os dados necessários para renderizar um gráfico de barras empilhadas e seus elementos interativos para cada métrica ambiental primária.

```json
{
  "reducaoGEE_tCO2e": {
    "label": "Redução de GEE",
    "total": 0.519,
    "unidade": "tCO2e",
    "fontes": [
      { "material": "Papel", "valor": 0.0292, "percentual": 5.6 },
      { "material": "Alumínio", "valor": 0.4591, "percentual": 88.5 },
      { "material": "Plástico", "valor": 0.03, "percentual": 5.8 },
      { "material": "Vidro", "valor": 0, "percentual": 0 }
    ]
  },
  "aguaEconomizada_kl": {
    "label": "Economia de Água",
    "total": 2.599,
    "unidade": "kl",
    "fontes": [
      { "material": "Papel", "valor": 2.3, "percentual": 88.5 },
      { "material": "Alumínio", "valor": 0.199, "percentual": 7.7 },
      { "material": "Plástico", "valor": 0.1, "percentual": 3.8 },
      { "material": "Vidro", "valor": 0, "percentual": 0 }
    ]
  }
}
```

---

## Checklist de Revisão e Aceitação

_GATE: Verificações automatizadas executadas durante a execução do main()_

### Qualidade do Conteúdo

- [x] Sem detalhes de implementação (linguagens, frameworks, APIs)
- [x] Focado no valor para o usuário e nas necessidades de negócio
- [x] Escrito para stakeholders não técnicos
- [x] Todas as seções obrigatórias preenchidas

### Completude dos Requisitos

- [x] Nenhum marcador [PRECISA DE ESCLARECIMENTO] permanece
- [x] Requisitos são testáveis e inequívocos
- [x] Critérios de sucesso são mensuráveis
- [x] Escopo está claramente delimitado
- [x] Dependências e premissas identificadas
