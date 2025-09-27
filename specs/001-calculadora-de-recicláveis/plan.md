# Plano de Implementação: Calculadora de Recicláveis

**Branch**: `001-calculadora-de-recicláveis` | **Data**: 2025-09-27 | **Spec**: [./spec.md](./spec.md)
**Entrada**: Especificação da feature de `/home/saito/_git/coco-calculator/specs/001-calculadora-de-recicláveis/spec.md`

## Fluxo de Execução (escopo do comando /plan)

```
1. Carregar especificação da feature do caminho de Entrada
   → Se não encontrada: ERRO "Nenhuma especificação de feature em {caminho}"
2. Preencher Contexto Técnico (verificar por PRECISA DE ESCLARECIMENTO)
   → Detectar Tipo de Projeto da estrutura do sistema de arquivos ou contexto (web=frontend+backend, mobile=app+api)
   → Definir Decisão de Estrutura com base no tipo de projeto
3. Preencher a seção de Verificação da Constituição com base no conteúdo do documento de constituição.
4. Avaliar a seção de Verificação da Constituição abaixo
   → Se existirem violações: Documentar no Rastreamento de Complexidade
   → Se nenhuma justificativa for possível: ERRO "Simplifique a abordagem primeiro"
   → Atualizar Rastreamento de Progresso: Verificação Inicial da Constituição
5. Executar Fase 0 → research.md
   → Se PRECISA DE ESCLARECIMENTO permanecer: ERRO "Resolva as incógnitas"
6. Executar Fase 1 → contracts, data-model.md, quickstart.md, arquivo de template específico do agente (ex: `CURSOR.md` para Cursor, `.github/copilot-instructions.md` para GitHub Copilot, `GEMINI.md` para Gemini CLI, `QWEN.md` para Qwen Code ou `AGENTS.md` para opencode).
7. Reavaliar a seção de Verificação da Constituição
   → Se novas violações: Refatorar o design, retornar à Fase 1
   → Atualizar Rastreamento de Progresso: Verificação da Constituição Pós-Design
8. Planejar Fase 2 → Descrever a abordagem de geração de tarefas (NÃO criar tasks.md)
9. PARAR - Pronto para o comando /tasks
```

**IMPORTANTE**: O comando /plan PARA no passo 7. As Fases 2-4 são executadas por outros comandos:

- Fase 2: O comando /tasks cria tasks.md
- Fase 3-4: Execução da implementação (manual ou via ferramentas)

## Resumo

Este plano descreve a implementação de uma calculadora de reciclagem simples baseada na web. O sistema receberá entradas do usuário para pesos de diferentes materiais (Papel, Plástico, Vidro, Alumínio) e calculará 21 métricas de impacto ambiental e econômico em tempo real. A abordagem técnica envolve a construção de uma aplicação de página única usando Vite, React e shadcn/ui para a biblioteca de componentes e gráficos. A aplicação será puramente do lado do cliente, usando parâmetros de URL para persistência de dados através da biblioteca `nuqs`. A aplicação também incluirá um seletor de tema (dark mode) e múltiplos modos de visualização dos resultados (dashboard, cards, tabela).

## Contexto Técnico

**Linguagem/Versão**: TypeScript (via Vite)
**Dependências Primárias**: Vite, React, shadcn/ui, recharts (para gráficos), nuqs
**Armazenamento**: Parâmetros de URL (via `nuqs`)
**Testes**: Vitest, React Testing Library
**Plataforma Alvo**: Navegador Web
**Tipo de Projeto**: Projeto único (apenas frontend)
**Metas de Desempenho**: Atualizações de cálculo em tempo real (<100ms)
**Restrições**: Puramente do lado do cliente, sem backend.
**Escala/Escopo**: Aplicação de página única com uma visão interativa principal.

## Verificação da Constituição

_GATE: Deve passar antes da pesquisa da Fase 0. Re-verificar após o design da Fase 1._

- **Desenvolvimento Orientado a Features**: PASSA. A feature segue o fluxo de trabalho especificar → planejar.
- **Desenvolvimento Orientado a Testes**: PASSA. O plano irá gerar testes de contrato e integração antes da implementação.
- **Arquitetura Orientada à Especificação**: PASSA. Um `spec.md` completo existe e é a fonte da verdade.
- **Implementação Baseada em Tarefas**: PASSA. O processo irá gerar um arquivo `tasks.md` para guiar a implementação.
- **Conformidade com a Constituição**: PASSA. O plano adere a todos os princípios constitucionais.

## Estrutura do Projeto

### Documentação (esta feature)

```
specs/001-calculadora-de-recicláveis/
├── plan.md              # Este arquivo (saída do comando /plan)
├── research.md          # Saída da Fase 0 (comando /plan)
├── data-model.md        # Saída da Fase 1 (comando /plan)
├── quickstart.md        # Saída da Fase 1 (comando /plan)
├── contracts/           # Saída da Fase 1 (comando /plan)
└── tasks.md             # Saída da Fase 2 (comando /tasks - NÃO criado por /plan)
```

### Código Fonte (raiz do repositório)

```
src/
├── components/
│   ├── ui/                # Componentes shadcn/ui
│   ├── calculator/        # Componentes específicos da calculadora
│   └── charts/            # Componentes de gráficos
├── lib/
│   ├── calculator.ts      # Lógica de cálculo principal
│   ├── types.ts           # Tipos e interfaces TypeScript (centralizados)
│   ├── metric-metadata.ts # Metadados das métricas
│   └── utils.ts           # Utilitários
├── hooks/
│   └── useRecyclingCalculator.ts # Hook para estado e cálculos
├── pages/
│   └── CalculatorPage.tsx # Componente da página principal
├── App.tsx
└── main.tsx

referencias/
└── referencias_gerais.ts  # Fórmulas e referências centralizadas

tests/
├── contract/
├── integration/
└── unit/
```

**Decisão de Estrutura**: Uma estrutura de projeto único é apropriada, pois esta é uma aplicação puramente de frontend. O código fonte será organizado por feature e função dentro do diretório `src/`.

## Fase 0: Esboço e Pesquisa

1.  **Extrair incógnitas do Contexto Técnico** acima:
    - Pesquisar melhores práticas para usar shadcn/ui com Vite e React.
    - Pesquisar a melhor biblioteca de gráficos compatível com shadcn/ui (recharts é um candidato principal).
    - Pesquisar padrões para lidar com cálculos complexos e em tempo real no React.

2.  **Gerar e despachar agentes de pesquisa**:

    ```
    Para cada incógnita no Contexto Técnico:
      Tarefa: "Pesquisar {incógnita} para o contexto {feature}"
    Para cada escolha de tecnologia:
      Tarefa: "Encontrar melhores práticas para {tecnologia} no domínio {domínio}"
    ```

3.  **Consolidar descobertas** em `research.md` usando o formato:
    - Decisão: [o que foi escolhido]
    - Justificativa: [por que foi escolhido]
    - Alternativas consideradas: [o que mais foi avaliado]

**Saída**: research.md com todos os PRECISA DE ESCLARECIMENTO resolvidos

## Fase 1: Design e Contratos

_Pré-requisitos: research.md completo_

1.  **Extrair entidades da especificação da feature** → `data-model.md`:
    - Nome da entidade, campos, relacionamentos
    - Regras de validação dos requisitos
    - Transições de estado, se aplicável

2.  **Gerar contratos de API** a partir dos requisitos funcionais:
    - Como esta é uma aplicação apenas do lado do cliente, nenhum contrato de API é necessário. Este passo se concentrará em definir o contrato para o módulo principal `calculator.ts`.

3.  **Gerar testes de contrato** a partir dos contratos:
    - Um arquivo de teste para o módulo `calculator.ts`.
    - Afirmar esquemas de entrada/saída e a correção do cálculo.
    - Os testes devem falhar (ainda não há implementação).

4.  **Extrair cenários de teste** das histórias de usuário:
    - Cada história → cenário de teste de integração para o componente principal `CalculatorPage.tsx`.
    - Teste de início rápido = passos de validação da história.

5.  **Atualizar arquivo do agente incrementalmente** (operação O(1)):
    - Rodar `.specify/scripts/bash/update-agent-context.sh cursor`
      **IMPORTANTE**: Execute-o exatamente como especificado acima. Não adicione ou remova nenhum argumento.
    - Se existir: Adicionar apenas NOVAS tecnologias do plano atual
    - Preservar adições manuais entre marcadores
    - Atualizar alterações recentes (manter as últimas 3)
    - Manter abaixo de 150 linhas for eficiência de tokens
    - Saída para a raiz do repositório

**Saída**: data-model.md, /contracts/\*, testes falhando, quickstart.md, arquivo específico do agente

## Fase 2: Abordagem de Planejamento de Tarefas

_Esta seção descreve o que o comando /tasks fará - NÃO execute durante /plan_

**Estratégia de Geração de Tarefas**:

- Carregar `.specify/templates/tasks-template.md` como base
- Gerar tarefas a partir dos documentos de design da Fase 1 (contratos, modelo de dados, início rápido)
- Cada contrato → tarefa de teste de contrato [P]
- Cada entidade → tarefa de criação de modelo [P]
- Cada história de usuário → tarefa de teste de integração
- Tarefas de implementação para fazer os testes passarem

**Estratégia de Ordenação**:

- Ordem TDD: Testes antes da implementação
- Ordem de dependência: Modelos antes de serviços antes da UI
- Marcar [P] para execução paralela (arquivos independentes)

**Saída Estimada**: 25-30 tarefas numeradas e ordenadas em tasks.md

**IMPORTANTE**: Esta fase é executada pelo comando /tasks, NÃO por /plan

## Fase 3+: Implementação Futura

_Estas fases estão além do escopo do comando /plan_

**Fase 3**: Execução de tarefas (comando /tasks cria tasks.md)
**Fase 4**: Implementação (executar tasks.md seguindo os princípios constitucionais)
**Fase 5**: Validação (rodar testes, executar quickstart.md, validação de desempenho)

## Rastreamento de Complexidade

_Preencher SOMENTE se a Verificação da Constituição tiver violações que devem ser justificadas_

| Violação | Por que é necessário | Alternativa mais simples rejeitada porque |
| -------- | -------------------- | ----------------------------------------- |
| N/A      | N/A                  | N/A                                       |

## Rastreamento de Progresso

_Esta lista de verificação é atualizada durante o fluxo de execução_

**Status da Fase**:

- [x] Fase 0: Pesquisa completa (comando /plan)
- [x] Fase 1: Design completo (comando /plan)
- [x] Fase 2: Planejamento de tarefas completo (comando /plan - descrever apenas a abordagem)
- [x] Fase 3: Tarefas geradas (comando /tasks)
- [x] Fase 4: Implementação completa
- [x] Fase 5: Validação aprovada
- [x] Fase 6: Refatoração de tipos e referências completa

**Status do Portão**:

- [x] Verificação Inicial da Constituição: PASSA
- [x] Verificação da Constituição Pós-Design: PASSA
- [x] Todos os PRECISA DE ESCLARECIMENTO resolvidos
- [x] Desvios de complexidade documentados

---

_Baseado na Constituição v1.0.0 - Ver `/memory/constitution.md`_
