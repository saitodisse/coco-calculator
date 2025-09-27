# Data Model: Calculadora de Recicláveis

This document outlines the data structures used in the recycling calculator application. These models represent the user's input and the structured output of the environmental savings calculations.

## 1. RecyclingInput

Represents the raw input values entered by the user.

- **Type**: `object`
- **Description**: Contains the weight in kilograms for each type of recyclable material.

### Attributes

| Attribute      | Type     | Description                          | Constraints |
| :------------- | :------- | :----------------------------------- | :---------- |
| `paperInKg`    | `number` | The weight of paper/cardboard in kg. | `> 0`       |
| `plasticInKg`  | `number` | The weight of plastic in kg.         | `> 0`       |
| `glassInKg`    | `number` | The weight of glass in kg.           | `> 0`       |
| `aluminumInKg` | `number` | The weight of aluminum in kg.        | `> 0`       |

### Example

```json
{
  "paperInKg": 100,
  "plasticInKg": 20,
  "glassInKg": 0,
  "aluminumInKg": 50
}
```

## 2. EnvironmentalSavings

Represents the full, calculated results. This object is structured to directly support the UI, including the stacked bar charts. Each primary metric is an object containing a total value and a detailed breakdown by material.

- **Type**: `object`
- **Description**: A nested object where each key represents a calculated metric.

### Main Structure

| Key                      | Type     | Description                                              |
| :----------------------- | :------- | :------------------------------------------------------- |
| `[metricName]`           | `object` | An object representing a single calculated metric.       |
| `[equivalentMetricName]` | `number` | A direct numerical value for simpler equivalent metrics. |

### Structure for a Chartable Metric

Each primary metric object follows this structure:

| Attribute | Type     | Description                                                     |
| :-------- | :------- | :-------------------------------------------------------------- |
| `label`   | `string` | A human-readable label for the metric (e.g., "Redução de GEE"). |
| `total`   | `number` | The total calculated value for the metric.                      |
| `unit`    | `string` | The unit of measurement (e.g., "tCO2e", "kWh", "kl").           |
| `sources` | `array`  | An array of objects, each detailing a material's contribution.  |

#### `sources` Array Object Structure

| Attribute    | Type     | Description                                           |
| :----------- | :------- | :---------------------------------------------------- |
| `material`   | `string` | The name of the material (e.g., "Papel", "Alumínio"). |
| `value`      | `number` | The calculated value for that specific material.      |
| `percentage` | `number` | The percentage contribution to the `total`.           |

### Example

```json
{
  "ghgReduction_tCO2e": {
    "label": "Redução de GEE",
    "total": 0.519,
    "unit": "tCO2e",
    "sources": [
      { "material": "Papel", "value": 0.0292, "percentage": 5.6 },
      { "material": "Alumínio", "value": 0.4591, "percentage": 88.5 },
      { "material": "Plástico", "value": 0.03, "percentage": 5.8 },
      { "material": "Vidro", "value": 0, "percentage": 0 }
    ]
  },
  "waterSaved_kl": {
    "label": "Economia de Água",
    "total": 2.599,
    "unit": "kl",
    "sources": [
      { "material": "Papel", "value": 2.3, "percentage": 88.5 },
      { "material": "Alumínio", "value": 0.199, "percentage": 7.7 },
      { "material": "Plástico", "value": 0.1, "percentage": 3.8 },
      { "material": "Vidro", "value": 0, "percentage": 0 }
    ]
  },
  "equiv_home_energy_days": 68.8
}
```
