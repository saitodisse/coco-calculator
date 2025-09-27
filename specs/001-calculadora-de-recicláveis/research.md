# Pesquisa da Fase 0: Calculadora de Recicláveis

## 1. Biblioteca de Gráficos para shadcn/ui e React

### Decisão

Usaremos **Recharts** como a principal biblioteca de gráficos para este projeto.

### Justificativa

- **Abordagem React-First**: O Recharts é construído com componentes React, tornando a integração perfeita e idiomática. Ele segue uma abordagem declarativa, que se alinha perfeitamente com o modelo de programação do React.
- **Comunidade Forte e Documentação**: É uma biblioteca amplamente utilizada com documentação extensa, muitos exemplos e forte apoio da comunidade, o que reduz o risco de desenvolvimento.
- **Compatibilidade com shadcn/ui**: Enquanto o shadcn/ui é baseado em componentes e não estilizado, o Recharts é uma biblioteca completa baseada em SVG. Não há conflitos diretos. Podemos facilmente envolver componentes Recharts dentro de componentes shadcn/ui (como `Card`) e estilizá-los com Tailwind CSS para combinar com o sistema de design da aplicação.
- **Conjunto de Features**: O Recharts fornece todos os componentes necessários prontos para uso para criar os gráficos de barras empilhadas necessários, incluindo `Bar`, `XAxis`, `YAxis`, `Tooltip` e `ResponsiveContainer`.

### Alternativas Consideradas

- **nivo**: Outra poderosa biblioteca de gráficos baseada em D3 para React. Embora excelente, tem uma curva de aprendizado um pouco mais íngreme para os gráficos específicos que precisamos. O Recharts oferece um caminho mais direto para a criação de gráficos de barras padrão.
- **Chart.js**: Uma biblioteca popular e flexível. No entanto, sua natureza imperativa e baseada em canvas às vezes pode parecer menos "nativa do React" em comparação com a abordagem baseada em componentes SVG do Recharts.

## 2. Melhores Práticas para shadcn/ui com Vite e React

### Decisão

Seguiremos o guia de instalação oficial do shadcn/ui para Vite + React e utilizaremos o Tailwind CSS para toda a estilização.

### Justificativa

- **Orientação Oficial**: A documentação oficial fornece o processo de configuração mais confiável e atualizado.
- **Estilização Baseada em Componentes**: Criaremos componentes personalizados em nosso diretório `src/components/calculator` que compõem elementos de UI do `shadcn/ui`. Isso promove a reutilização e uma separação limpa de responsabilidades.
- **Tematização**: Usaremos o arquivo `theme.ts` fornecido pelo shadcn/ui para configurar a paleta de cores e os tokens de design da nossa aplicação, garantindo consistência visual.

### Alternativas Consideradas

- **Construção Manual de Componentes**: Construir todos os componentes de UI do zero seria demorado e desnecessário, dada a alta qualidade do shadcn/ui.

## 3. Padrões de Cálculo em Tempo Real no React

### Decisão

Gerenciaremos todo o estado e a lógica da calculadora dentro de um hook React personalizado (`useRecyclingCalculator`).

### Justificativa

- **Encapsulamento de Estado**: Um hook personalizado encapsula a lógica de estado complexa (entradas do usuário, resultados calculados) e as funções de cálculo, mantendo os componentes da UI limpos e focados na renderização.
- **Desempenho**: O hook usará `React.useMemo` para memorizar os resultados do cálculo. Isso garante que as funções de cálculo dispendiosas sejam executadas novamente apenas quando os valores de entrada realmente mudam, evitando re-renderizações desnecessárias e garantindo uma experiência de usuário suave.
- **Testabilidade**: A lógica principal é isolada em uma função JavaScript pura dentro do hook, tornando-a fácil de testar unitariamente com `Vitest` sem a necessidade de renderizar nenhum componente de UI.

### Alternativas Consideradas

- **Estado no Componente**: Gerenciar o estado diretamente dentro do componente `CalculatorPage.tsx` levaria a um componente grande e difícil de manter, e misturaria a lógica de UI com a de negócios.
- **Gerenciador de Estado Global (ex: Redux, Zustand)**: Para uma aplicação desta escala (uma única página), um gerenciador de estado global seria um exagero e adicionaria complexidade desnecessária. Um hook personalizado fornece o nível certo de abstração.
