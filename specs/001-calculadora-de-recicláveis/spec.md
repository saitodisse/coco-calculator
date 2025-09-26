# Feature Specification: Calculadora de Recicláveis

**Feature Branch**: `001-calculadora-de-recicláveis`
**Created**: 2025-09-26
**Status**: Draft
**Input**: User description: "calculadora de recicláveis

Sistema web simples para calcular o quanto que a reciclagem de materiais como: Papel, Plastico, Vidro e Metal podem economizar em:

Substituição de Materia Virgem (t)
Substituição Energética (kWh)
Valor Equivalente à Economia de Energia (R$)
 Redução de Gás de Efeito Estufa (tCO2e)
 Valor Equivalente aos Créditos de Carbono (R$)
Economia de Água (kl)
Valor Equivalente à Economia de Água (R$)
 Área de monocultura de árvores poupada (ha.ano)
 Economia de Bauxita (t)
 Valor Equivalente à Economia de Bauxita (R$)
Economia de petróleo (barris)
Valor Equivalente à Economia de Petróleo (R$)
 Economia de areia (t)
 Valor Equivalente à Economia de Areia (R$)
Economia de árvores (un.)
Valor Economia de Custo de Aterramento (R$)

Ao inserir os dados o sistema automaticamente já vai mostrar o resultado. Os dados de entrada serão salvos no localstorage mesmo. É para ser muito simples.

Este instrumento foi desenvolvido para ajudar empresas a avaliar os benefícios em termos de gases de efeito estufa (GEE), energia, etc, ao aumentar o uso de insumos reciclados pós-consumo
As quantidade de entrada devem ser em quilos."

---

## ⚡ Quick Guidelines

- ✅ Focus on WHAT users need and WHY
- ❌ Avoid HOW to implement (no tech stack, APIs, code structure)
- 👥 Written for business stakeholders, not developers

### Section Requirements

- **Mandatory sections**: Must be completed for every feature
- **Optional sections**: Include only when relevant to the feature
- When a section doesn't apply, remove it entirely (don't leave as "N/A")

---

## User Scenarios & Testing _(mandatory)_

### Primary User Story

As a user, I want to enter the weight of different recyclable materials (Paper, Plastic, Glass, Metal) in kilograms, so that I can immediately see the positive environmental and economic impact of my recycling efforts.

### Acceptance Scenarios

1. **Given** the calculator page is open, **When** I enter "100" into the "Paper" input field, **Then** the system instantly calculates and displays all 16 savings metrics based on 100kg of recycled paper.
2. **Given** I have entered values for several materials, **When** I close and reopen the browser tab, **Then** the input fields retain my previously entered values.
3. **Given** some input fields are already filled, **When** I update the value in the "Metal" field, **Then** all displayed metrics update immediately to reflect the new total calculation.

### Edge Cases

- How does the system handle non-numeric input?
- How does the system handle negative numbers in the input fields?
- Is there an upper limit for the weight that can be entered?

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: The system MUST provide separate input fields for 'Papel', 'Plástico', 'Vidro', and 'Metal'.
- **FR-002**: All inputs MUST accept numeric values representing kilograms.
- **FR-003**: The system MUST calculate and display the following 16 metrics in real-time as the user types:
  1.  Substituição de Materia Virgem (t)
  2.  Substituição Energética (kWh)
  3.  Valor Equivalente à Economia de Energia (R$)
  4.  Redução de Gás de Efeito Estufa (tCO2e)
  5.  Valor Equivalente aos Créditos de Carbono (R$)
  6.  Economia de Água (kl)
  7.  Valor Equivalente à Economia de Água (R$)
  8.  Área de monocultura de árvores poupada (ha.ano)
  9.  Economia de Bauxita (t)
  10. Valor Equivalente à Economia de Bauxita (R$)
  11. Economia de petróleo (barris)
  12. Valor Equivalente à Economia de Petróleo (R$)
  13. Economia de areia (t)
  14. Valor Equivalente à Economia de Areia (R$)
  15. Economia de árvores (un.)
  16. Valor Economia de Custo de Aterramento (R$)
- **FR-004**: The system MUST save the values entered by the user to the browser's `localStorage`.
- **FR-005**: The system MUST automatically load the saved values from `localStorage` into the input fields when the page is loaded.
- **FR-006**: The system must use specific conversion factors for calculations. **[NEEDS CLARIFICATION: What are the exact calculation formulas and conversion factors for each of the 16 output metrics, broken down by each of the 4 input materials (Paper, Plastic, Glass, Metal)?]**
- **FR-007**: The system MUST prevent or handle non-positive (zero or negative) and non-numeric inputs gracefully.

### Key Entities _(include if feature involves data)_

- **RecyclingInput**: Represents the user's raw input.
  - Attributes: `paperInKg`, `plasticInKg`, `glassInKg`, `metalInKg`.
- **EnvironmentalSavings**: Represents the calculated results.
  - Attributes: `virginMaterialSaved_t`, `energySaved_kWh`, `energySavings_BRL`, `ghgReduction_tCO2e`, `carbonCredits_BRL`, `waterSaved_kl`, `waterSavings_BRL`, `forestAreaSaved_ha_year`, `bauxiteSaved_t`, `bauxiteSavings_BRL`, `oilSaved_barrels`, `oilSavings_BRL`, `sandSaved_t`, `sandSavings_BRL`, `treesSaved_units`, `landfillCostSavings_BRL`.

---

## Review & Acceptance Checklist

_GATE: Automated checks run during main() execution_

### Content Quality

- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness

- [ ] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified

---
