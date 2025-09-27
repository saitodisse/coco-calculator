# Phase 0 Research: Calculadora de Recicláveis

## 1. Charting Library for shadcn/ui and React

### Decision

We will use **Recharts** as the primary charting library for this project.

### Rationale

- **React-First Approach**: Recharts is built with React components, making integration seamless and idiomatic. It follows a declarative approach, which aligns perfectly with React's programming model.
- **Strong Community and Documentation**: It is a widely-used library with extensive documentation, many examples, and strong community support, which reduces development risk.
- **Compatibility with shadcn/ui**: While shadcn/ui is component-based and unstyled, Recharts is a full SVG-based library. There are no direct conflicts. We can easily wrap Recharts components within shadcn/ui components (like `Card`) and style them with Tailwind CSS to match the application's design system.
- **Feature Set**: Recharts provides all the necessary components out-of-the-box to create the required stacked bar charts, including `Bar`, `XAxis`, `YAxis`, `Tooltip`, and `ResponsiveContainer`.

### Alternatives Considered

- **nivo**: Another powerful D3-based charting library for React. While excellent, it has a slightly steeper learning curve for the specific charts we need. Recharts offers a more direct path for creating standard bar charts.
- **Chart.js**: A popular, flexible library. However, its imperative, canvas-based nature can sometimes feel less "React-native" compared to Recharts' component-based SVG approach.

## 2. Best Practices for shadcn/ui with Vite and React

### Decision

We will follow the official shadcn/ui installation guide for Vite + React and leverage Tailwind CSS for all styling.

### Rationale

- **Official Guidance**: The official documentation provides the most reliable and up-to-date setup process.
- **Component-Based Styling**: We will create custom components in our `src/components/calculator` directory that compose UI elements from `shadcn/ui`. This promotes reusability and a clean separation of concerns.
- **Theming**: We will use the `theme.ts` file provided by shadcn/ui to configure our application's color palette and design tokens, ensuring visual consistency.

### Alternatives Considered

- **Manual Component Building**: Building all UI components from scratch would be time-consuming and unnecessary given the high quality of shadcn/ui.

## 3. Real-time Calculation Patterns in React

### Decision

We will manage all calculator state and logic within a custom React hook (`useRecyclingCalculator`).

### Rationale

- **State Encapsulation**: A custom hook encapsulates the complex state logic (user inputs, calculated results) and the calculation functions, keeping the UI components clean and focused on rendering.
- **Performance**: The hook will use `React.useMemo` to memoize the calculation results. This ensures that the expensive calculation functions are only re-run when the input values actually change, preventing unnecessary re-renders and ensuring a smooth user experience.
- **Testability**: The core logic is isolated in a pure JavaScript function within the hook, making it easy to unit-test with `Vitest` without needing to render any UI components.

### Alternatives Considered

- **State in Component**: Managing state directly within the `CalculatorPage.tsx` component would lead to a large, difficult-to-maintain component and would mix UI and business logic.
- **Global State Manager (e.g., Redux, Zustand)**: For an application of this scale (a single page), a global state manager would be overkill and add unnecessary complexity. A custom hook provides the right level of abstraction.
