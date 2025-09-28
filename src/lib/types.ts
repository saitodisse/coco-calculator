import { MetricMetadata } from "./metric-metadata";

export enum Material {
	PAPEL = "papel",
	ALUMINIO = "aluminio",
	PLATICO = "plastico",
	VIDRO = "vidro",
}

export enum Unidade {
	KG = "kg",
	KWH = "kWh",
	KL = "kl",
	UN = "un.",
	T = "t",
	TCO2E = "tCO2e",
	BARRIS = "barris",
	HA_ANO = "ha/ano",
	DIAS = "dias",
	KM = "km",
	CARGAS = "cargas",
	BANHOS = "banhos",
	BRL = "R$",
}

/**
 * Represents a reference source for a calculation or metric.
 */
export interface FonteReferencia {
	nome: string;
	citação: string;
	url: string;
}

// Novo tipo para os dados de uma métrica de equivalência
export interface DadosMetricaEquivalencia {
	formula: ({ input_kg }: { input_kg: number }) => number;
	fontes: FonteReferencia[];
}

// Representa os dados de cálculo para UM material DENTRO de uma métrica principal
export interface DadosMetricaPorMaterial {
	descricaoFormula: string;
	formula: ({ input_kg }: { input_kg: number }) => number;
	// As equivalências agora ficam aninhadas aqui
	equivalencias?: Partial<Record<string, DadosMetricaEquivalencia>>;
}

// A definição completa de uma métrica primária
export interface DefinicaoMetrica {
	/** Descrição geral sobre as fontes e a metodologia da métrica */
	sobreFontes: string;
	unidade_saida: Unidade;
	/** Um record contendo os dados de cálculo para cada material aplicável */
	dadosPorMaterial: Partial<Record<Material, DadosMetricaPorMaterial>>;
	/** A lista de fontes gerais para a métrica, se houver */
	fontes?: FonteReferencia[];
}

// O tipo do nosso objeto principal refatorado
export type ReferenciasPorMetrica = Partial<Record<string, DefinicaoMetrica>>;

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
	material: Material;
	value: number;
	percentage: number;
	descricaoFormula?: string;
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
	/** Metadados da métrica (nome, descrição, categoria) */
	metadata?: MetricMetadata;
	/** Fontes de referência para a métrica */
	references?: FonteReferencia[];
	/** Descrição geral sobre as fontes e a metodologia da métrica */
	sobreFontes?: string;
}

/**
 * Represents a metric with complete metadata information
 */
export interface MetricWithMetadata {
	/** Chave única da métrica */
	key: string;
	/** Valor da métrica */
	value: number;
	/** Metadados completos da métrica */
	metadata: MetricMetadata;
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

export type ViewMode = "dashboard" | "table" | "cards";
