# Tarefas: Calculadora de Recicláveis

**Entrada**: Documentos de design de `/home/saito/_git/coco-calculator/specs/001-calculadora-de-recicláveis/`
**Pré-requisitos**: plan.md, research.md, data-model.md, contracts/

## Fase 3.1: Configuração do Projeto

- [x] **T001**: Inicializar um novo projeto Vite + React + TypeScript na raiz do repositório.
- [x] **T002**: Instalar dependências primárias: `npm install recharts lucide-react clsx tailwind-merge`.
- [x] **T003**: Inicializar shadcn/ui no projeto: `npx shadcn-ui@latest init`.
- [x] **T004**: Adicionar componentes shadcn/ui necessários: `npx shadcn-ui@latest add card input label`.
- [x] **T005**: [P] Configurar Vitest e React Testing Library para testes unitários e de integração.
- [x] **T006**: [P] Criar a estrutura de diretórios descrita em `plan.md` (ex: `src/components/calculator`, `src/lib`, `src/hooks`, etc.).

## Fase 3.2: TDD - Lógica Principal e Tipos

**CRÍTICO: Estes testes DEVEM ser escritos e DEVEM FALHAR antes de qualquer implementação.**

- [x] **T007**: [P] Criar arquivo de teste de contrato `tests/contract/calculator.test.ts` para validar a assinatura da função `calculateSavings` e as estruturas de dados definidas em `contracts/calculator.d.ts`.
- [x] **T008**: [P] Criar arquivo de teste unitário `tests/unit/calculator.test.ts` com casos de teste para cada fator de cálculo com base em `spec.md`. Garantir que ele teste entradas de material zero, único e múltiplo.

## Fase 3.3: Implementação Principal

- [x] **T009**: Criar `src/lib/types.ts` e definir as interfaces TypeScript (`RecyclingInput`, `EnvironmentalSavings`, etc.) com base em `contracts/calculator.d.ts`.
- [x] **T010**: Criar a função de cálculo principal em `src/lib/calculator.ts`. Implementar o stub da função `calculateSavings` para satisfazer os testes de contrato (T007), mas falhar nos testes unitários (T008).
- [x] **T011**: Implementar a lógica de cálculo completa em `src/lib/calculator.ts` para fazer todos os testes unitários em `tests/unit/calculator.test.ts` passarem.

## Fase 3.4: TDD - Componentes de UI

**CRÍTICO: Estes testes DEVEM ser escritos e DEVEM FALHAR antes de qualquer implementação.**

- [x] **T012**: [P] Criar teste de integração `tests/integration/CalculatorPage.test.tsx` para a página principal.
    - Cenário de Teste 1: Verificar se a inserção de um valor em um campo de entrada atualiza os resultados corretamente.
    - Cenário de Teste 2: Verificar se os dados persistem após uma recarga de página simulada (mockando o localStorage).
    - Cenário de Teste 3: Verificar se os gráficos são renderizados com os dados corretos quando várias entradas são fornecidas.

## Fase 3.5: Implementação da UI

- [x] **T013**: [P] Criar o componente de formulário de entrada em `src/components/calculator/InputForm.tsx` usando os componentes `Card`, `Input` e `Label` do shadcn/ui.
- [x] **T014**: [P] Criar um componente genérico `MetricCard.tsx` em `src/components/calculator/` para exibir uma única métrica de resultado.
- [x] **T015**: [P] Criar um componente `ResultsDisplay.tsx` em `src/components/calculator/` que mapeia os dados calculados e renderiza uma grade de componentes `MetricCard`.
- [x] **T016**: [P] Criar o componente de gráfico de barras empilhadas `src/components/charts/MetricChart.tsx` usando Recharts, que aceita um objeto `ChartableMetric` como prop.
- [x] **T017**: Criar o hook personalizado `src/hooks/useRecyclingCalculator.ts` para gerenciar o estado, lidar com a entrada do usuário e chamar a função `calculateSavings` (usando `useMemo` para desempenho).
- [x] **T018**: Montar a página principal em `src/pages/CalculatorPage.tsx`, integrando os componentes `InputForm`, `ResultsDisplay`, `MetricChart` e o hook `useRecyclingCalculator`.
- [x] **T019**: Implementar a lógica do `localStorage` dentro do hook `useRecyclingCalculator` para salvar e carregar as entradas do usuário.

## Fase 3.6: Polimento e Validação

- [x] **T020**: [P] Adicionar testes unitários para componentes de UI individuais para garantir que eles renderizem corretamente com base nas props.
- [x] **T021**: [P] Estilizar a aplicação usando Tailwind CSS para garantir um layout limpo e responsivo.
- [x] **T022**: Executar todos os cenários de `quickstart.md` manualmente para validar a aplicação final.

## Fase 3.7: Novas Features (Pós-MVP)

- [x] **T023**: Adicionar componentes shadcn/ui para novas features: `npx shadcn@latest add toggle-group toggle table dropdown-menu button`.
- [x] **T024**: Instalar a dependência `nuqs` para gerenciamento de estado na URL: `npm install nuqs`.
- [x] **T025**: Implementar funcionalidade de modo escuro (dark mode).
    - [x] **T025.1**: Criar o `ThemeProvider` em `src/components/theme-provider.tsx`.
    - [x] **T025.2**: Envolver a aplicação com o `ThemeProvider` em `src/App.tsx`.
    - [x] **T025.3**: Criar o componente `ModeToggle` em `src/components/mode-toggle.tsx`.
    - [x] **T025.4**: Adicionar o `ModeToggle` ao cabeçalho da `CalculatorPage`.
- [x] **T026**: Refatorar o gerenciamento de estado para usar `nuqs`.
    - [x] **T026.1**: Atualizar o hook `useRecyclingCalculator` para usar `useQueryStates` para as entradas do formulário.
    - [x] **T026.2**: Remover completamente o uso de `localStorage` do hook.
    - [x] **T026.3**: Remover o estado de carregamento (`isLoaded`) da `CalculatorPage`.
- [x] **T027**: Implementar modos de visualização de resultados.
    - [x] **T027.1**: Adicionar um seletor de modo de visualização (`ToggleGroup`) na `CalculatorPage`.
    - [x] **T027.2**: Armazenar o modo de visualização selecionado na URL usando `nuqs`.
    - [x] **T027.3**: Refatorar a visualização de cards existente para um componente `CardsView.tsx`.
    - [x] **T027.4**: Criar um novo componente `TableView.tsx` para exibir os resultados em uma tabela.
    - [x] **T027.5**: Criar um componente placeholder `DashboardView.tsx`.
    - [x] **T027.6**: Renderizar condicionalmente a visualização apropriada na `CalculatorPage`.
- [x] **T028**: Atualizar a documentação (`spec.md`, `plan.md`, `tasks.md`) para refletir todas as novas features e mudanças.

## Fase 3.8: Documentação

- [x] **T029**: Pesquisar e preencher as fontes de referência para os fatores de cálculo na seção `Fontes de Referência` do arquivo `specs/001-calculadora-de-recicláveis/spec.md`.
    - [x] **T029.1**: Encontrar e documentar a fonte para os fatores de Papel e Papelão.
    - [x] **T029.2**: Encontrar e documentar a fonte para os fatores de Alumínio.
    - [x] **T029.3**: Encontrar e documentar a fonte para os fatores de Plástico.
    - [x] **T029.4**: Encontrar e documentar a fonte para os fatores de Vidro.
    - [x] **T029.5**: Encontrar e documentar a fonte para os fatores de Equivalência Criativa.
    - [x] **T029.6**: Encontrar e documentar a fonte para os fatores de Valor Econômico Equivalente.

## Fase 3.9: Refatoração de Tipos e Referências

- [x] **T030**: Refatorar tipos para centralizar enums em `src/lib/types.ts`.
    - [x] **T030.1**: Mover enum `Material` para `src/lib/types.ts`.
    - [x] **T030.2**: Mover enums `Unidade` e `UnidadeSaida` para `src/lib/types.ts` e consolidar em um único enum `Unidade`.
    - [x] **T030.3**: Adicionar interface `FonteReferencia` em `src/lib/types.ts`.
    - [x] **T030.4**: Atualizar interface `ChartableMetric` para incluir propriedades `metadata` e `references`.
- [x] **T031**: Refatorar sistema de referências para integrar nas métricas.
    - [x] **T031.1**: Atualizar `referencias/referencias_gerais.ts` para usar enums centralizados.
    - [x] **T031.2**: Modificar `src/lib/calculator.ts` para incluir referências nas métricas calculadas.
    - [x] **T031.3**: Atualizar `src/lib/metric-metadata.ts` para incluir chave única em cada metadado.
- [x] **T032**: Corrigir componentes para trabalhar com nova estrutura.
    - [x] **T032.1**: Atualizar `src/components/calculator/DashboardView.tsx` para passar propriedades completas para `MetricCard`.
    - [x] **T032.2**: Adicionar verificação de segurança em `src/components/calculator/MetricCard.tsx` para `sources`.
    - [x] **T032.3**: Atualizar `src/components/charts/MetricChart.tsx` para usar enum `Material` centralizado.
- [x] **T033**: Corrigir testes para usar nova estrutura de tipos.
    - [x] **T033.1**: Atualizar importações em `tests/contract/calculator.test.ts` para usar `Material` como enum.
    - [x] **T033.2**: Verificar e corrigir todos os testes para usar nova estrutura.

## Fase 3.10: Funcionalidades de Referências

- [x] **T034**: Criar componente `ReferencesSection.tsx` para exibir todas as referências únicas.
    - [x] **T034.1**: Implementar coleta de referências de todas as métricas calculadas.
    - [x] **T034.2**: Implementar deduplicação de referências por URL.
    - [x] **T034.3**: Criar interface de exibição com nome, citação e link da fonte.
    - [x] **T034.4**: Adicionar ID "referencias" para navegação.
- [x] **T035**: Atualizar `MetricCard.tsx` para incluir links de referência.
    - [x] **T035.1**: Adicionar botão "Referências" quando há fontes disponíveis.
    - [x] **T035.2**: Implementar scroll suave para seção de referências.
    - [x] **T035.3**: Adicionar ícone de link externo.
- [x] **T036**: Integrar seção de referências na `CalculatorPage.tsx`.
    - [x] **T036.1**: Adicionar componente `ReferencesSection` ao final da página.
    - [x] **T036.2**: Posicionar após as visualizações e antes do footer.
- [x] **T037**: Testar funcionalidades de referências.
    - [x] **T037.1**: Verificar se links de referência funcionam corretamente.
    - [x] **T037.2**: Verificar se scroll suave funciona.
    - [x] **T037.3**: Verificar se referências são exibidas corretamente.
    - [x] **T037.4**: Verificar se links externos abrem em nova aba.

## Fase 3.11: Refatorar Referências para Popover

- [x] **T038**: Adicionar o componente `Popover` do shadcn/ui: `npx shadcn@latest add popover`.
- [x] **T039**: Atualizar `MetricCard.tsx` para usar o componente `Popover` em vez do link de scroll.
    - [x] **T039.1**: O gatilho do popover será o link "Referências".
    - [x] **T039.2**: O conteúdo do popover deve ser estilizado e exibir `descricaoFormula`, `sobreFontes` e a lista de `fontes` da métrica.
- [x] **T040**: Remover o componente `ReferencesSection.tsx` do projeto.
- [x] **T041**: Remover a integração do `ReferencesSection` da `CalculatorPage.tsx`.
- [x] **T042**: Atualizar os testes de integração para verificar se o popover abre e exibe o conteúdo correto.

## Fase 3.12: Refatoração da Estrutura de Dados de Referências

- [x] **T043**: Atualizar `src/lib/types.ts` para a nova estrutura de dados de referências.
    - [x] **T043.1**: Adicionar `DefinicaoMetrica`, `DadosMetricaPorMaterial`, `DadosMetricaEquivalencia`.
    - [x] **T043.2**: Adicionar `sobreFontes` a `ChartableMetric` e `descricaoFormula` a `MetricSource`.
- [x] **T044**: Refatorar `src/lib/referencias_gerais.ts` para a nova estrutura `Métrica -> Material`.
    - [x] **T044.1**: Inverter a estrutura de dados principal.
    - [x] **T044.2**: Aninhar métricas de equivalência dentro das métricas primárias.
- [x] **T045**: Atualizar `src/lib/calculator.ts` para consumir a nova estrutura de dados.
    - [x] **T045.1**: Adaptar a lógica de cálculo para `referenciasPorMetrica`.
    - [x] **T045.2**: Preencher os novos campos `sobreFontes` e `descricaoFormula` no objeto de retorno.
- [x] **T046**: Atualizar `src/components/calculator/MetricCard.tsx` para exibir os novos dados.
    - [x] **T046.1**: Renderizar `sobreFontes` no popover de informações.
    - [x] **T046.2**: Renderizar `descricaoFormula` para cada material no popover.

## Dependências

- **T001-T006** (Configuração) devem ser concluídas antes de todas as outras tarefas.
- **T007-T008** (Testes da Lógica Principal) devem ser concluídos antes de **T009-T011**.
- **T011** (Implementação da Lógica Principal) deve ser concluída antes de **T017**.
- **T012** (Testes de UI) deve ser concluído antes de **T013-T019**.
- **T013-T016** podem ser feitos em paralelo.
- **T017** e **T018** são sequenciais e dependem da conclusão dos componentes de UI.
- **T023-T028** são um novo conjunto de features e podem ser trabalhados após a conclusão do MVP inicial.
- **T029** é uma tarefa de documentação e pode ser trabalhada independentemente das novas features de UI.
- **T030-T033** (Refatoração de Tipos e Referências) são tarefas de melhoria arquitetural que podem ser executadas em paralelo após a conclusão do MVP.
- **T034-T037** (Funcionalidades de Referências) são tarefas de melhoria de UX que podem ser executadas após a conclusão do MVP e da refatoração de tipos.
- **T038-T042** (Refatoração para Popover) devem ser executadas após a conclusão da Fase 3.10.
- **T043-T046** (Refatoração da Estrutura de Dados) devem ser executadas após a Fase 3.11.

## Exemplo Paralelo

```
# As seguintes tarefas de configuração e criação de testes podem ser executadas em paralelo:
Tarefa: "T005 Configurar Vitest e React Testing Library"
Tarefa: "T006 Criar a estrutura de diretórios"
Tarefa: "T007 Criar arquivo de teste de contrato para calculator.ts"
Tarefa: "T008 Criar arquivo de teste unitário para calculator.ts"
Tarefa: "T012 Criar teste de integração para CalculatorPage.tsx"
```
