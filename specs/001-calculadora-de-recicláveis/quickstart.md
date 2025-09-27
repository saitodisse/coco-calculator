# Início Rápido: Calculadora de Recicláveis

Este documento fornece um conjunto de cenários de aceitação para validar rapidamente a funcionalidade principal da aplicação Calculadora de Recicláveis.

## Pré-requisitos

- A aplicação está rodando em um ambiente de desenvolvimento (`npm run dev`).
- O usuário abriu a aplicação em um navegador web.

## Cenário 1: Cálculo em Tempo Real para um Único Material

1.  **Dado** que a página da calculadora está aberta.
2.  **Quando** o usuário insere "100" no campo de entrada "Papel".
3.  **Então** o sistema deve calcular e exibir instantaneamente todas as 21 métricas de economia.
4.  **E** os gráficos de barras empilhadas para cada métrica primária devem ser atualizados, mostrando um único segmento de barra correspondente à contribuição de 100kg de papel.
5.  **E** o valor total exibido para cada gráfico deve corresponder ao valor calculado para 100kg de papel.

### Valores Esperados (para 100kg de Papel)

- **Redução de GEE**: 0.0292 tCO2e
- **Economia de Água**: 2.3 kl
- **Substituição Energética**: 344 kWh
- _(...e assim por diante para todas as outras métricas)_

## Cenário 2: Persistência de Dados ao Recarregar

1.  **Dado** que o usuário inseriu "100" para "Papel" e "50" para "Alumínio".
2.  **Quando** o usuário fecha e reabre a aba do navegador.
3.  **Então** os campos de entrada para "Papel" e "Alumínio" devem manter os valores "100" e "50", respectivamente.
4.  **E** todas as métricas e gráficos calculados devem ser exibidos corretamente com base nos valores restaurados.

## Cenário 3: Atualizações Dinâmicas com Múltiplos Materiais

1.  **Dado** que os campos de entrada já estão preenchidos com "100" para "Papel" e "20" para "Plástico".
2.  **Quando** o usuário atualiza o valor no campo "Alumínio" para "50".
3.  **Então** todas as métricas e gráficos exibidos devem ser atualizados imediatamente para refletir o novo cálculo total com base nos três materiais.
4.  **E** o gráfico "Redução de GEE" deve mostrar três segmentos coloridos representando Papel, Plástico e Alumínio.
5.  **E** o total para "Redução de GEE" deve ser a soma das contribuições de todos os três materiais (aprox. 0.0292 + 0.03 + 0.4591 = 0.5183 tCO2e).
