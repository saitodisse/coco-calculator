# Calculadora de Recicláveis (CoCo)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFC928)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Um sistema web simples para calcular o impacto positivo da reciclagem de materiais pós-consumo como Papel, Plástico, Vidro e Alumínio. Esta ferramenta ajuda a visualizar as economias em recursos naturais, energia e a redução na emissão de gases de efeito estufa.

## ✨ Features

- **Cálculo em Tempo Real**: Veja 21 métricas ambientais e econômicas serem atualizadas instantaneamente enquanto você digita.
- **Múltiplos Materiais**: Insira o peso em quilogramas para Papel, Plástico, Vidro e Alumínio.
- **Visualização de Dados**: Gráficos de barras interativos para as métricas primárias, detalhando a contribuição de cada material.
- **Modos de Visualização**: Alterne entre diferentes modos de exibição dos resultados: Dashboard, Cards e Tabela.
- **Persistência de Dados**: O estado da calculadora é salvo na URL, permitindo que você compartilhe seus resultados facilmente.
- **Tema**: Suporte para temas Claro (Light), Escuro (Dark) e de Sistema.

## 🚀 Começando

Para rodar o projeto localmente, siga estes passos:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/coco-calculator.git
    cd coco-calculator
    ```

2.  **Instale as dependências:**
    O projeto utiliza `pnpm` como gerenciador de pacotes.

    ```bash
    pnpm install
    ```

3.  **Inicie o servidor de desenvolvimento:**

    ```bash
    pnpm run dev
    ```

4.  Abra [http://localhost:5173](http://localhost:5173) (ou a porta indicada no seu terminal) no seu navegador para ver a aplicação.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: [React](https://react.dev/) (com [Vite](https://vitejs.dev/))
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI**: [shadcn/ui](https://ui.shadcn.com/)
- **Gráficos**: [Recharts](https://recharts.org/)
- **Gerenciamento de Estado na URL**: [nuqs](https://nuqs.47ng.com/)
- **Testes**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/)

## 📂 Estrutura do Projeto

A estrutura do código fonte está organizada da seguinte forma, seguindo uma abordagem de arquitetura orientada a especificações e testes:

```
/
├── specs/                  # Documentos de especificação, plano e design
├── src/
│   ├── components/         # Componentes UI (shadcn, específicos da calculadora, gráficos)
│   ├── hooks/              # Hooks React customizados (ex: useRecyclingCalculator)
│   ├── lib/                # Lógica principal (calculator.ts, types.ts)
│   ├── pages/              # Páginas da aplicação
│   └── ...
└── tests/
    ├── contract/           # Testes de contrato para a lógica principal
    ├── integration/        # Testes de integração para páginas e componentes
    └── unit/               # Testes unitários para funções e módulos individuais
```

## 🤝 Contribuindo

Contribuições são muito bem-vindas! Se você tem ideias para melhorias ou encontrou algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

1.  Faça um Fork do projeto
2.  Crie sua Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Faça o Commit de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Faça o Push para a Branch (`git push origin feature/AmazingFeature`)
5.  Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
