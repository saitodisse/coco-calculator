# Tasks: Calculadora de Recicláveis

**Input**: Design documents from `/home/saito/_git/coco-calculator/specs/001-calculadora-de-recicláveis/`
**Prerequisites**: plan.md, research.md, data-model.md, contracts/

## Phase 3.1: Project Setup

- [ ] **T001**: Initialize a new Vite + React + TypeScript project in the repository root.
- [ ] **T002**: Install primary dependencies: `npm install recharts lucide-react clsx tailwind-merge`.
- [ ] **T003**: Initialize shadcn/ui in the project: `npx shadcn-ui@latest init`.
- [ ] **T004**: Add required shadcn/ui components: `npx shadcn-ui@latest add card input label`.
- [ ] **T005**: [P] Configure Vitest and React Testing Library for unit and integration tests.
- [ ] **T006**: [P] Create the directory structure outlined in `plan.md` (e.g., `src/components/calculator`, `src/lib`, `src/hooks`, etc.).

## Phase 3.2: TDD - Core Logic & Types

**CRITICAL: These tests MUST be written and MUST FAIL before any implementation.**

- [ ] **T007**: [P] Create contract test file `tests/contract/calculator.test.ts` to validate the `calculateSavings` function signature and data structures defined in `contracts/calculator.d.ts`.
- [ ] **T008**: [P] Create unit test file `tests/unit/calculator.test.ts` with test cases for each calculation factor based on `spec.md`. Ensure it tests zero, single, and multiple material inputs.

## Phase 3.3: Core Implementation

- [ ] **T009**: Create `src/lib/types.ts` and define the TypeScript interfaces (`RecyclingInput`, `EnvironmentalSavings`, etc.) based on `contracts/calculator.d.ts`.
- [ ] **T010**: Create the core calculation function in `src/lib/calculator.ts`. Implement the `calculateSavings` function stub to satisfy the contract tests (T007) but fail the unit tests (T008).
- [ ] **T011**: Implement the full calculation logic in `src/lib/calculator.ts` to make all unit tests in `tests/unit/calculator.test.ts` pass.

## Phase 3.4: TDD - UI Components

**CRITICAL: These tests MUST be written and MUST FAIL before any implementation.**

- [ ] **T012**: [P] Create integration test `tests/integration/CalculatorPage.test.tsx` for the main page.
  - Test Scenario 1: Verify that entering a value in one input field updates the results correctly.
  - Test Scenario 2: Verify that data persists after a simulated page reload (mocking localStorage).
  - Test Scenario 3: Verify that charts render with the correct data when multiple inputs are provided.

## Phase 3.5: UI Implementation

- [ ] **T013**: [P] Create the input form component in `src/components/calculator/InputForm.tsx` using shadcn/ui `Card`, `Input`, and `Label` components.
- [ ] **T014**: [P] Create a generic `MetricCard.tsx` component in `src/components/calculator/` to display a single result metric.
- [ ] **T015**: [P] Create a `ResultsDisplay.tsx` component in `src/components/calculator/` that maps over the calculated data and renders a grid of `MetricCard` components.
- [ ] **T016**: [P] Create the stacked bar chart component `src/components/charts/MetricChart.tsx` using Recharts, which accepts a `ChartableMetric` object as a prop.
- [ ] **T017**: Create the custom hook `src/hooks/useRecyclingCalculator.ts` to manage state, handle user input, and call the `calculateSavings` function (using `useMemo` for performance).
- [ ] **T018**: Assemble the main page in `src/pages/CalculatorPage.tsx`, integrating the `InputForm`, `ResultsDisplay`, `MetricChart` components, and the `useRecyclingCalculator` hook.
- [ ] **T019**: Implement the `localStorage` logic within the `useRecyclingCalculator` hook to save and load user inputs.

## Phase 3.6: Polish & Validation

- [ ] **T020**: [P] Add unit tests for individual UI components to ensure they render correctly based on props.
- [ ] **T021**: [P] Style the application using Tailwind CSS to ensure a clean and responsive layout.
- [ ] **T022**: Run all scenarios from `quickstart.md` manually to validate the final application.

## Dependencies

- **T001-T006** (Setup) must be completed before all other tasks.
- **T007-T008** (Core Logic Tests) must be completed before **T009-T011**.
- **T011** (Core Logic Implementation) must be completed before **T017**.
- **T012** (UI Tests) must be completed before **T013-T019**.
- **T013-T016** can be done in parallel.
- **T017** and **T018** are sequential and depend on the completion of UI components.

## Parallel Example

```
# The following setup and test creation tasks can be run in parallel:
Task: "T005 Configure Vitest and React Testing Library"
Task: "T006 Create the directory structure"
Task: "T007 Create contract test file for calculator.ts"
Task: "T008 Create unit test file for calculator.ts"
Task: "T012 Create integration test for CalculatorPage.tsx"
```
