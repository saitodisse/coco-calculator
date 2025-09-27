# Quickstart: Calculadora de Recicláveis

This document provides a set of acceptance scenarios to quickly validate the core functionality of the Recycling Calculator application.

## Prerequisites

- The application is running in a development environment (`npm run dev`).
- The user has opened the application in a web browser.

## Scenario 1: Real-time Calculation for a Single Material

1.  **Given** the calculator page is open.
2.  **When** the user enters "100" into the "Papel" input field.
3.  **Then** the system must instantly calculate and display all 21 savings metrics.
4.  **And** the stacked bar charts for each primary metric must update, showing a single bar segment corresponding to the contribution of 100kg of paper.
5.  **And** the total value displayed for each chart must match the value calculated for 100kg of paper.

### Expected Values (for 100kg Paper)

- **Redução de GEE**: 0.0292 tCO2e
- **Economia de Água**: 2.3 kl
- **Substituição Energética**: 344 kWh
- _(...and so on for all other metrics)_

## Scenario 2: Data Persistence on Reload

1.  **Given** the user has entered "100" for "Papel" and "50" for "Alumínio".
2.  **When** the user closes and reopens the browser tab.
3.  **Then** the input fields for "Papel" and "Alumínio" must retain the values "100" and "50" respectively.
4.  **And** all calculated metrics and charts must be displayed correctly based on the restored values.

## Scenario 3: Dynamic Updates with Multiple Materials

1.  **Given** the input fields are already filled with "100" for "Papel" and "20" for "Plástico".
2.  **When** the user updates the value in the "Alumínio" field to "50".
3.  **Then** all displayed metrics and charts must update immediately to reflect the new total calculation based on all three materials.
4.  **And** the "Redução de GEE" chart should show three colored segments representing Paper, Plastic, and Aluminum.
5.  **And** the total for "Redução de GEE" should be the sum of the contributions from all three materials (approx. 0.0292 + 0.03 + 0.4591 = 0.5183 tCO2e).
