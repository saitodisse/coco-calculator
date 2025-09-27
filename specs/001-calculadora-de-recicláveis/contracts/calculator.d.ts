// specs/001-calculadora-de-recicláveis/contracts/calculator.d.ts

/**
 * Representa os valores de entrada brutos para o cálculo de reciclagem.
 * Todos os valores estão em quilogramas.
 */
export interface RecyclingInput {
  paperInKg: number;
  plasticInKg: number;
  glassInKg: number;
  aluminumInKg: number;
}

/**
 * Representa a contribuição de um único material para uma métrica total.
 */
export interface MetricSource {
  material: "Papel" | "Plástico" | "Vidro" | "Alumínio";
  value: number;
  percentage: number;
}

/**
 * Representa uma métrica ambiental que pode ser exibida em gráfico, incluindo seu valor total
 * e uma análise das contribuições por material.
 */
export interface ChartableMetric {
  label: string;
  total: number;
  unit: string;
  sources: MetricSource[];
}

/**
 * Representa a economia ambiental completa e calculada.
 * Esta é a saída estruturada projetada para ser consumida pela UI.
 */
export interface EnvironmentalSavings {
  // Métricas Primárias (Graficáveis)
  virginMaterialSaved_t: ChartableMetric;
  energySaved_kWh: ChartableMetric;
  ghgReduction_tCO2e: ChartableMetric;
  waterSaved_kl: ChartableMetric;
  bauxiteSaved_t: ChartableMetric;
  oilSaved_barrels: ChartableMetric;
  sandSaved_t: ChartableMetric;
  treesSaved_units: ChartableMetric;
  forestAreaSaved_ha_year: ChartableMetric;

  // Métricas Equivalentes (Valores Diretos)
  equiv_home_energy_days: number;
  equiv_ev_km: number;
  equiv_phone_charges: number;
  equiv_showers: number;
  equiv_gas_car_km: number;

  // Métricas Financeiras (Ainda não implementadas na especificação, placeholders por enquanto)
  energySavings_BRL: number;
  carbonCredits_BRL: number;
  waterSavings_BRL: number;
  bauxiteSavings_BRL: number;
  oilSavings_BRL: number;
  sandSavings_BRL: number;
  landfillCostSavings_BRL: number;
}

/**
 * Define o contrato para a função de cálculo principal.
 * Recebe a entrada bruta do usuário e retorna o relatório completo e estruturado
 * de economia ambiental.
 */
export type CalculateSavings = (input: RecyclingInput) => EnvironmentalSavings;
