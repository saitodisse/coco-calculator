// specs/001-calculadora-de-recicláveis/contracts/calculator.d.ts

/**
 * Represents the raw input values for the recycling calculation.
 * All values are in kilograms.
 */
export interface RecyclingInput {
  paperInKg: number;
  plasticInKg: number;
  glassInKg: number;
  aluminumInKg: number;
}

/**
 * Represents the contribution of a single material to a total metric.
 */
export interface MetricSource {
  material: "Papel" | "Plástico" | "Vidro" | "Alumínio";
  value: number;
  percentage: number;
}

/**
 * Represents a chartable environmental metric, including its total value
 * and a breakdown of contributions by material.
 */
export interface ChartableMetric {
  label: string;
  total: number;
  unit: string;
  sources: MetricSource[];
}

/**
 * Represents the full, calculated environmental savings.
 * This is the structured output designed to be consumed by the UI.
 */
export interface EnvironmentalSavings {
  // Primary Metrics (Chartable)
  virginMaterialSaved_t: ChartableMetric;
  energySaved_kWh: ChartableMetric;
  ghgReduction_tCO2e: ChartableMetric;
  waterSaved_kl: ChartableMetric;
  bauxiteSaved_t: ChartableMetric;
  oilSaved_barrels: ChartableMetric;
  sandSaved_t: ChartableMetric;
  treesSaved_units: ChartableMetric;
  forestAreaSaved_ha_year: ChartableMetric;

  // Equivalent Metrics (Direct Values)
  equiv_home_energy_days: number;
  equiv_ev_km: number;
  equiv_phone_charges: number;
  equiv_showers: number;
  equiv_gas_car_km: number;

  // Financial Metrics (Not yet implemented in spec, placeholders for now)
  energySavings_BRL: number;
  carbonCredits_BRL: number;
  waterSavings_BRL: number;
  bauxiteSavings_BRL: number;
  oilSavings_BRL: number;
  sandSavings_BRL: number;
  landfillCostSavings_BRL: number;
}

/**
 * Defines the contract for the core calculation function.
 * It takes the user's raw input and returns the full, structured
 * environmental savings report.
 */
export type CalculateSavings = (input: RecyclingInput) => EnvironmentalSavings;
