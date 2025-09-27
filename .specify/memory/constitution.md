<!--
RELATÓRIO DE IMPACTO DA SINCRONIZAÇÃO
Mudança de versão: N/A → 1.0.0
Princípios modificados: N/A (criação inicial)
Seções adicionadas: Fluxo de Trabalho de Desenvolvimento, Portões de Qualidade
Seções removidas: N/A
Templates que requerem atualização:
  ✅ .specify/templates/plan-template.md (referência de versão atualizada, nome do agente atualizado)
  ✅ .specify/memory/constitution.md (este arquivo)
TODOs de acompanhamento: Nenhum
-->

# Constituição do Coco Calculator

## Princípios Fundamentais

### I. Desenvolvimento Orientado a Features (Feature-First)

Toda feature DEVE seguir o fluxo de trabalho do framework specify: /specify → /plan → /tasks → /implement. As features começam como especificações, progridem através do planejamento e geração de tarefas, e então para a implementação. Todas as features devem ser autocontidas, testáveis independentemente e documentadas com um propósito claro.

### II. Desenvolvimento Orientado a Testes (TDD - INEGOCIÁVEL)

TDD é obrigatório: Testes escritos → Aprovados pelo usuário → Testes falham → Então implementar. O ciclo Vermelho-Verde-Refatorar é estritamente aplicado. Testes de contrato devem ser escritos antes de qualquer implementação começar. Testes de integração são necessários para todos os cenários de usuário.

### III. Arquitetura Orientada à Especificação

Todas as features DEVEM começar com um documento de especificação completo. As especificações focam no QUE os usuários precisam e PORQUÊ, evitando detalhes de COMO implementar. Todo requisito deve ser testável e inequívoco. As especificações servem como a única fonte da verdade para o escopo da feature.

### IV. Implementação Baseada em Tarefas

A implementação segue listas de tarefas geradas com dependências claras e oportunidades de execução paralela. As tarefas são categorizadas por fase: Configuração → Testes → Modelos → Serviços → Endpoints → Polimento. Cada tarefa especifica os caminhos exatos dos arquivos e a ordem de execução.

### V. Conformidade com a Constituição

Todo o trabalho de desenvolvimento DEVE passar pelas verificações da constituição antes de prosseguir. A complexidade deve ser justificada com uma fundamentação documentada. A constituição se sobrepõe a todas as outras práticas e requer procedimentos formais de emenda para alterações.

## Fluxo de Trabalho de Desenvolvimento

### Processo de Desenvolvimento de Features

1.  **Especificação**: Criar especificação da feature usando o comando /specify
2.  **Planejamento**: Gerar plano de implementação usando o comando /plan
3.  **Geração de Tarefas**: Criar lista de tarefas usando o comando /tasks
4.  **Implementação**: Executar tarefas seguindo os princípios de TDD
5.  **Validação**: Rodar testes, executar cenários de início rápido, validação de desempenho

### Portões de Qualidade

- Verificação Inicial da Constituição: Deve passar antes da pesquisa da Fase 0
- Verificação da Constituição Pós-Design: Deve passar antes da implementação
- Todos os marcadores PRECISA DE ESCLARECIMENTO devem ser resolvidos
- Desvios de complexidade devem ser documentados com justificativa

## Governança

Esta constituição se sobrepõe a todas as outras práticas de desenvolvimento. Todos os PRs e revisões devem verificar a conformidade com os princípios constitucionais. A complexidade deve ser justificada com uma fundamentação documentada. Use os arquivos de orientação específicos do agente gerados para orientação de desenvolvimento em tempo de execução.

**Procedimento de Emenda**: Alterações a esta constituição requerem documentação do impacto, aprovação dos mantenedores do projeto e plano de migração para templates e processos dependentes.

**Versão**: 1.0.0 | **Ratificado em**: 2025-01-27 | **Última Emenda**: 2025-01-27
