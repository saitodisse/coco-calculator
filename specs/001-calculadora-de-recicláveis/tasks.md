# Tarefas: Calculadora de Recicláveis

**Entrada**: Documentos de design de `/home/saito/_git/coco-calculator/specs/001-calculadora-de-recicláveis/`
**Pré-requisitos**: plan.md, research.md, data-model.md, contracts/

## Fase 3.1: Configuração do Projeto

- [ ] **T001**: Inicializar um novo projeto Vite + React + TypeScript na raiz do repositório.
- [ ] **T002**: Instalar dependências primárias: `npm install recharts lucide-react clsx tailwind-merge`.
- [ ] **T003**: Inicializar shadcn/ui no projeto: `npx shadcn-ui@latest init`.
- [ ] **T004**: Adicionar componentes shadcn/ui necessários: `npx shadcn-ui@latest add card input label`.
- [ ] **T005**: [P] Configurar Vitest e React Testing Library para testes unitários e de integração.
- [ ] **T006**: [P] Criar a estrutura de diretórios descrita em `plan.md` (ex: `src/components/calculator`, `src/lib`, `src/hooks`, etc.).

## Fase 3.2: TDD - Lógica Principal e Tipos

**CRÍTICO: Estes testes DEVEM ser escritos e DEVEM FALHAR antes de qualquer implementação.**

- [ ] **T007**: [P] Criar arquivo de teste de contrato `tests/contract/calculator.test.ts` para validar a assinatura da função `calculateSavings` e as estruturas de dados definidas em `contracts/calculator.d.ts`.
- [ ] **T008**: [P] Criar arquivo de teste unitário `tests/unit/calculator.test.ts` com casos de teste para cada fator de cálculo com base em `spec.md`. Garantir que ele teste entradas de material zero, único e múltiplo.

## Fase 3.3: Implementação Principal

- [ ] **T009**: Criar `src/lib/types.ts` e definir as interfaces TypeScript (`RecyclingInput`, `EnvironmentalSavings`, etc.) com base em `contracts/calculator.d.ts`.
- [ ] **T010**: Criar a função de cálculo principal em `src/lib/calculator.ts`. Implementar o stub da função `calculateSavings` para satisfazer os testes de contrato (T007), mas falhar nos testes unitários (T008).
- [ ] **T011**: Implementar a lógica de cálculo completa em `src/lib/calculator.ts` para fazer todos os testes unitários em `tests/unit/calculator.test.ts` passarem.

## Fase 3.4: TDD - Componentes de UI

**CRÍTICO: Estes testes DEVEM ser escritos e DEVEM FALHAR antes de qualquer implementação.**

- [ ] **T012**: [P] Criar teste de integração `tests/integration/CalculatorPage.test.tsx` para a página principal.
  - Cenário de Teste 1: Verificar se a inserção de um valor em um campo de entrada atualiza os resultados corretamente.
  - Cenário de Teste 2: Verificar se os dados persistem após uma recarga de página simulada (mockando o localStorage).
  - Cenário de Teste 3: Verificar se os gráficos são renderizados com os dados corretos quando várias entradas são fornecidas.

## Fase 3.5: Implementação da UI

- [ ] **T013**: [P] Criar o componente de formulário de entrada em `src/components/calculator/InputForm.tsx` usando os componentes `Card`, `Input` e `Label` do shadcn/ui.
- [ ] **T014**: [P] Criar um componente genérico `MetricCard.tsx` em `src/components/calculator/` para exibir uma única métrica de resultado.
- [ ] **T015**: [P] Criar um componente `ResultsDisplay.tsx` em `src/components/calculator/` que mapeia os dados calculados e renderiza uma grade de componentes `MetricCard`.
- [ ] **T016**: [P] Criar o componente de gráfico de barras empilhadas `src/components/charts/MetricChart.tsx` usando Recharts, que aceita um objeto `ChartableMetric` como prop.
- [ ] **T017**: Criar o hook personalizado `src/hooks/useRecyclingCalculator.ts` para gerenciar o estado, lidar com a entrada do usuário e chamar a função `calculateSavings` (usando `useMemo` para desempenho).
- [ ] **T018**: Montar a página principal em `src/pages/CalculatorPage.tsx`, integrando os componentes `InputForm`, `ResultsDisplay`, `MetricChart` e o hook `useRecyclingCalculator`.
- [ ] **T019**: Implementar a lógica do `localStorage` dentro do hook `useRecyclingCalculator` para salvar e carregar as entradas do usuário.

## Fase 3.6: Polimento e Validação

- [ ] **T020**: [P] Adicionar testes unitários para componentes de UI individuais para garantir que eles renderizem corretamente com base nas props.
- [ ] **T021**: [P] Estilizar a aplicação usando Tailwind CSS para garantir um layout limpo e responsivo.
- [ ] **T022**: Executar todos os cenários de `quickstart.md` manualmente para validar a aplicação final.

## Dependências

- **T001-T006** (Configuração) devem ser concluídas antes de todas as outras tarefas.
- **T007-T008** (Testes da Lógica Principal) devem ser concluídos antes de **T009-T011**.
- **T011** (Implementação da Lógica Principal) deve ser concluída antes de **T017**.
- **T012** (Testes de UI) deve ser concluído antes de **T013-T019**.
- **T013-T016** podem ser feitos em paralelo.
- **T017** e **T018** são sequenciais e dependem da conclusão dos componentes de UI.

## Exemplo Paralelo

```
# As seguintes tarefas de configuração e criação de testes podem ser executadas em paralelo:
Tarefa: "T005 Configurar Vitest e React Testing Library"
Tarefa: "T006 Criar a estrutura de diretórios"
Tarefa: "T007 Criar arquivo de teste de contrato para calculator.ts"
Tarefa: "T008 Criar arquivo de teste unitário para calculator.ts"
Tarefa: "T012 Criar teste de integração para CalculatorPage.tsx"
```
