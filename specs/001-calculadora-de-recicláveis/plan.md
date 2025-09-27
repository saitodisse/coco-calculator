# Implementation Plan: Calculadora de Recicláveis

**Branch**: `001-calculadora-de-recicláveis` | **Date**: 2025-09-27 | **Spec**: [./spec.md](./spec.md)
**Input**: Feature specification from `/home/saito/_git/coco-calculator/specs/001-calculadora-de-recicláveis/spec.md`

## Execution Flow (/plan command scope)

```
1. Load feature spec from Input path
   → If not found: ERROR "No feature spec at {path}"
2. Fill Technical Context (scan for NEEDS CLARIFICATION)
   → Detect Project Type from file system structure or context (web=frontend+backend, mobile=app+api)
   → Set Structure Decision based on project type
3. Fill the Constitution Check section based on the content of the constitution document.
4. Evaluate Constitution Check section below
   → If violations exist: Document in Complexity Tracking
   → If no justification possible: ERROR "Simplify approach first"
   → Update Progress Tracking: Initial Constitution Check
5. Execute Phase 0 → research.md
   → If NEEDS CLARIFICATION remain: ERROR "Resolve unknowns"
6. Execute Phase 1 → contracts, data-model.md, quickstart.md, agent-specific template file (e.g., `CURSOR.md` for Cursor, `.github/copilot-instructions.md` for GitHub Copilot, `GEMINI.md` for Gemini CLI, `QWEN.md` for Qwen Code or `AGENTS.md` for opencode).
7. Re-evaluate Constitution Check section
   → If new violations: Refactor design, return to Phase 1
   → Update Progress Tracking: Post-Design Constitution Check
8. Plan Phase 2 → Describe task generation approach (DO NOT create tasks.md)
9. STOP - Ready for /tasks command
```

**IMPORTANT**: The /plan command STOPS at step 7. Phases 2-4 are executed by other commands:

- Phase 2: /tasks command creates tasks.md
- Phase 3-4: Implementation execution (manual or via tools)

## Summary

This plan outlines the implementation of a simple web-based recycling calculator. The system will take user inputs for weights of different materials (Paper, Plastic, Glass, Aluminum) and calculate 21 environmental and economic impact metrics in real-time. The technical approach involves building a single-page application using Vite, React, and shadcn/ui for the component library and charting. The application will be purely client-side, using `localStorage` for data persistence.

## Technical Context

**Language/Version**: TypeScript (via Vite)
**Primary Dependencies**: Vite, React, shadcn/ui, recharts (for charting)
**Storage**: Browser `localStorage`
**Testing**: Vitest, React Testing Library
**Target Platform**: Web Browser
**Project Type**: Single project (frontend only)
**Performance Goals**: Real-time calculation updates (<100ms)
**Constraints**: Purely client-side, no backend.
**Scale/Scope**: Single-page application with one primary interactive view.

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **Feature-First Development**: PASS. The feature follows the specify → plan workflow.
- **Test-Driven Development**: PASS. The plan will generate contract and integration tests before implementation.
- **Specification-Driven Architecture**: PASS. A complete `spec.md` exists and is the source of truth.
- **Task-Based Implementation**: PASS. The process will generate a `tasks.md` file to guide implementation.
- **Constitution Compliance**: PASS. The plan adheres to all constitutional principles.

## Project Structure

### Documentation (this feature)

```
specs/001-calculadora-de-recicláveis/
├── plan.md              # This file (/plan command output)
├── research.md          # Phase 0 output (/plan command)
├── data-model.md        # Phase 1 output (/plan command)
├── quickstart.md        # Phase 1 output (/plan command)
├── contracts/           # Phase 1 output (/plan command)
└── tasks.md             # Phase 2 output (/tasks command - NOT created by /plan)
```

### Source Code (repository root)

```
src/
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── calculator/        # Calculator specific components
│   └── charts/            # Chart components
├── lib/
│   ├── calculator.ts      # Core calculation logic
│   └── types.ts           # TypeScript types and interfaces
├── hooks/
│   └── useRecyclingCalculator.ts # Hook for state and calculations
├── pages/
│   └── CalculatorPage.tsx # Main page component
└── App.tsx
└── main.tsx

tests/
├── contract/
├── integration/
└── unit/
```

**Structure Decision**: A single project structure is appropriate as this is a purely frontend application. The source code will be organized by feature and function within the `src/` directory.

## Phase 0: Outline & Research

1. **Extract unknowns from Technical Context** above:

   - Research best practices for using shadcn/ui with Vite and React.
   - Research the best charting library compatible with shadcn/ui (recharts is a primary candidate).
   - Research patterns for handling complex, real-time calculations in React.

2. **Generate and dispatch research agents**:

   ```
   For each unknown in Technical Context:
     Task: "Research {unknown} for {feature context}"
   For each technology choice:
     Task: "Find best practices for {tech} in {domain}"
   ```

3. **Consolidate findings** in `research.md` using format:
   - Decision: [what was chosen]
   - Rationale: [why chosen]
   - Alternatives considered: [what else evaluated]

**Output**: research.md with all NEEDS CLARIFICATION resolved

## Phase 1: Design & Contracts

_Prerequisites: research.md complete_

1. **Extract entities from feature spec** → `data-model.md`:

   - Entity name, fields, relationships
   - Validation rules from requirements
   - State transitions if applicable

2. **Generate API contracts** from functional requirements:

   - As this is a client-side only application, no API contracts are needed. This step will focus on defining the contract for the core `calculator.ts` module.

3. **Generate contract tests** from contracts:

   - One test file for the `calculator.ts` module.
   - Assert input/output schemas and calculation correctness.
   - Tests must fail (no implementation yet).

4. **Extract test scenarios** from user stories:

   - Each story → integration test scenario for the main `CalculatorPage.tsx` component.
   - Quickstart test = story validation steps.

5. **Update agent file incrementally** (O(1) operation):
   - Run `.specify/scripts/bash/update-agent-context.sh cursor`
     **IMPORTANT**: Execute it exactly as specified above. Do not add or remove any arguments.
   - If exists: Add only NEW tech from current plan
   - Preserve manual additions between markers
   - Update recent changes (keep last 3)
   - Keep under 150 lines for token efficiency
   - Output to repository root

**Output**: data-model.md, /contracts/\*, failing tests, quickstart.md, agent-specific file

## Phase 2: Task Planning Approach

_This section describes what the /tasks command will do - DO NOT execute during /plan_

**Task Generation Strategy**:

- Load `.specify/templates/tasks-template.md` as base
- Generate tasks from Phase 1 design docs (contracts, data model, quickstart)
- Each contract → contract test task [P]
- Each entity → model creation task [P]
- Each user story → integration test task
- Implementation tasks to make tests pass

**Ordering Strategy**:

- TDD order: Tests before implementation
- Dependency order: Models before services before UI
- Mark [P] for parallel execution (independent files)

**Estimated Output**: 25-30 numbered, ordered tasks in tasks.md

**IMPORTANT**: This phase is executed by the /tasks command, NOT by /plan

## Phase 3+: Future Implementation

_These phases are beyond the scope of the /plan command_

**Phase 3**: Task execution (/tasks command creates tasks.md)  
**Phase 4**: Implementation (execute tasks.md following constitutional principles)  
**Phase 5**: Validation (run tests, execute quickstart.md, performance validation)

## Complexity Tracking

_Fill ONLY if Constitution Check has violations that must be justified_

| Violation | Why Needed | Simpler Alternative Rejected Because |
| --------- | ---------- | ------------------------------------ |
| N/A       | N/A        | N/A                                  |

## Progress Tracking

_This checklist is updated during execution flow_

**Phase Status**:

- [ ] Phase 0: Research complete (/plan command)
- [ ] Phase 1: Design complete (/plan command)
- [ ] Phase 2: Task planning complete (/plan command - describe approach only)
- [ ] Phase 3: Tasks generated (/tasks command)
- [ ] Phase 4: Implementation complete
- [ ] Phase 5: Validation passed

**Gate Status**:

- [x] Initial Constitution Check: PASS
- [ ] Post-Design Constitution Check: PASS
- [x] All NEEDS CLARIFICATION resolved
- [ ] Complexity deviations documented

---

_Based on Constitution v1.0.0 - See `/memory/constitution.md`_
