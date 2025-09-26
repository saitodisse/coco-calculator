<!--
SYNC IMPACT REPORT
Version change: N/A → 1.0.0
Modified principles: N/A (initial creation)
Added sections: Development Workflow, Quality Gates
Removed sections: N/A
Templates requiring updates:
  ✅ .specify/templates/plan-template.md (version reference updated, agent name updated)
  ✅ .specify/memory/constitution.md (this file)
Follow-up TODOs: None
-->

# Coco Calculator Constitution

## Core Principles

### I. Feature-First Development

Every feature MUST follow the specify framework workflow: /specify → /plan → /tasks → /implement. Features start as specifications, progress through planning and task generation, then implementation. All features must be self-contained, independently testable, and documented with clear purpose.

### II. Test-Driven Development (NON-NEGOTIABLE)

TDD is mandatory: Tests written → User approved → Tests fail → Then implement. Red-Green-Refactor cycle strictly enforced. Contract tests must be written before any implementation begins. Integration tests required for all user scenarios.

### III. Specification-Driven Architecture

All features MUST begin with a complete specification document. Specifications focus on WHAT users need and WHY, avoiding HOW implementation details. Every requirement must be testable and unambiguous. Specifications serve as the single source of truth for feature scope.

### IV. Task-Based Implementation

Implementation follows generated task lists with clear dependencies and parallel execution opportunities. Tasks are categorized by phase: Setup → Tests → Models → Services → Endpoints → Polish. Each task specifies exact file paths and execution order.

### V. Constitution Compliance

All development work MUST pass constitution checks before proceeding. Complexity must be justified with documented rationale. The constitution supersedes all other practices and requires formal amendment procedures for changes.

## Development Workflow

### Feature Development Process

1. **Specification**: Create feature spec using /specify command
2. **Planning**: Generate implementation plan using /plan command
3. **Task Generation**: Create task list using /tasks command
4. **Implementation**: Execute tasks following TDD principles
5. **Validation**: Run tests, execute quickstart scenarios, performance validation

### Quality Gates

- Initial Constitution Check: Must pass before Phase 0 research
- Post-Design Constitution Check: Must pass before implementation
- All NEEDS CLARIFICATION markers must be resolved
- Complexity deviations must be documented with justification

## Governance

This constitution supersedes all other development practices. All PRs and reviews must verify compliance with constitutional principles. Complexity must be justified with documented rationale. Use the generated agent-specific guidance files for runtime development guidance.

**Amendment Procedure**: Changes to this constitution require documentation of impact, approval from project maintainers, and migration plan for dependent templates and processes.

**Version**: 1.0.0 | **Ratified**: 2025-01-27 | **Last Amended**: 2025-01-27
