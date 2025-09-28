import type {
	RecyclingInput,
	EnvironmentalSavings,
	ChartableMetric,
	MetricSource,
	FonteReferencia,
} from "./types";
import { Material } from "./types";
import {
	referenciasGerais,
	metricasEquivalencia,
} from "./referencias_gerais";
import { METRIC_METADATA } from "./metric-metadata";

/**
 * Calculates the value for a given metric, material, and weight.
 * It uses the central `referenciasGerais` object as the source of truth for formulas.
 * @param weightKg The weight of the material in kilograms.
 * @param material The material type.
 * @param metricKey The key of the metric to calculate.
 * @returns The calculated value, or 0 if no formula is found.
 */
function getMetricValue(
	weightKg: number,
	material: Material,
	metricKey: string
): number {
	const formula = referenciasGerais[material]?.dados?.[metricKey]?.formula;
	return formula ? formula({ input_kg: weightKg }) : 0;
}

/**
 * Calculates the total value for an equivalent metric based on user input.
 * It uses the `metricasEquivalencia` object for calculation formulas.
 * @param input The user's recycling input.
 * @param metricKey The key of the equivalent metric to calculate.
 * @returns The total calculated value for the equivalent metric.
 */
function getEquivalentMetricValue(
	input: RecyclingInput,
	metricKey: string
): number {
	let total = 0;
	if (input.paperInKg > 0) {
		const formula =
			metricasEquivalencia.papel?.[
				metricKey as keyof typeof metricasEquivalencia.papel
			]?.formula;
		if (formula) total += formula({ input_kg: input.paperInKg });
	}
	if (input.aluminumInKg > 0) {
		const formula =
			metricasEquivalencia.aluminio?.[
				metricKey as keyof typeof metricasEquivalencia.aluminio
			]?.formula;
		if (formula) total += formula({ input_kg: input.aluminumInKg });
	}
	if (input.plasticInKg > 0) {
		const formula =
			metricasEquivalencia.plastico?.[
				metricKey as keyof typeof metricasEquivalencia.plastico
			]?.formula;
		if (formula) total += formula({ input_kg: input.plasticInKg });
	}
	if (input.glassInKg > 0) {
		const formula =
			metricasEquivalencia.vidro?.[
				metricKey as keyof typeof metricasEquivalencia.vidro
			]?.formula;
		if (formula) total += formula({ input_kg: input.glassInKg });
	}
	return total;
}

/**
 * Core calculation function for recycling environmental savings.
 * Implements all calculation factors from the specification.
 */
export function calculateSavings(input: RecyclingInput): EnvironmentalSavings {
	// Initialize all material contributions in the order expected by tests
	const materials = [
		{ name: Material.PAPEL, weight: input.paperInKg },
		{ name: Material.ALUMINIO, weight: input.aluminumInKg },
		{ name: Material.PLATICO, weight: input.plasticInKg },
		{ name: Material.VIDRO, weight: input.glassInKg },
	];

	const primaryMetricsKeys = Object.values(METRIC_METADATA).filter(
		(m) => m.category === "primary"
	);

	const contributions: Record<
		string,
		Array<{ material: Material; value: number }>
	> = {};
	const totals: Record<string, number> = {};

	for (const metric of primaryMetricsKeys) {
		const metricKey = metric.key;
		contributions[metricKey] = materials.map((m) => ({
			material: m.name,
			value: getMetricValue(m.weight, m.name, metricKey),
		}));
		totals[metricKey] = contributions[metricKey].reduce(
			(sum, c) => sum + c.value,
			0
		);
	}

	// Create chartable metrics with sources
	const createChartableMetric = (
		metricKey: string,
		total: number,
		metricContributions: Array<{ material: string; value: number }>
	): ChartableMetric => {
		const metadata = METRIC_METADATA[metricKey];
		const sources: MetricSource[] = metricContributions.map((c) => ({
			material: c.material as MetricSource["material"],
			value: c.value,
			percentage: total > 0 ? (c.value / total) * 100 : 0,
		}));

		const references: FonteReferencia[] = [];
		const referenceUrls = new Set<string>();

		for (const contribution of metricContributions) {
			if (contribution.value > 0) {
				const fontes =
					referenciasGerais[contribution.material as Material]
						?.dados?.[metricKey]?.fontes;
				if (fontes) {
					for (const fonte of fontes) {
						if (!referenceUrls.has(fonte.url)) {
							references.push(fonte);
							referenceUrls.add(fonte.url);
						}
					}
				}
			}
		}

		return {
			label: metadata?.name || metricKey,
			total,
			unit: metadata?.unit || "",
			sources,
			metadata,
			references,
		};
	};

	// Calculate equivalent metrics
	const equiv_home_energy_days = getEquivalentMetricValue(
		input,
		METRIC_METADATA.equiv_home_energy_days.key
	);
	const equiv_ev_km = getEquivalentMetricValue(
		input,
		METRIC_METADATA.equiv_ev_km.key
	);
	const equiv_phone_charges = getEquivalentMetricValue(
		input,
		METRIC_METADATA.equiv_phone_charges.key
	);
	const equiv_showers = getEquivalentMetricValue(
		input,
		METRIC_METADATA.equiv_showers.key
	);
	const equiv_gas_car_km = getEquivalentMetricValue(
		input,
		METRIC_METADATA.equiv_gas_car_km.key
	);

	return {
		// Primary Metrics (Chartable)
		virginMaterialSaved_t: createChartableMetric(
			METRIC_METADATA.virginMaterialSaved_t.key,
			totals[METRIC_METADATA.virginMaterialSaved_t.key],
			contributions[METRIC_METADATA.virginMaterialSaved_t.key]
		),
		energySaved_kWh: createChartableMetric(
			METRIC_METADATA.energySaved_kWh.key,
			totals[METRIC_METADATA.energySaved_kWh.key],
			contributions[METRIC_METADATA.energySaved_kWh.key]
		),
		ghgReduction_tCO2e: createChartableMetric(
			METRIC_METADATA.ghgReduction_tCO2e.key,
			totals[METRIC_METADATA.ghgReduction_tCO2e.key],
			contributions[METRIC_METADATA.ghgReduction_tCO2e.key]
		),
		waterSaved_kl: createChartableMetric(
			METRIC_METADATA.waterSaved_kl.key,
			totals[METRIC_METADATA.waterSaved_kl.key],
			contributions[METRIC_METADATA.waterSaved_kl.key]
		),
		bauxiteSaved_t: createChartableMetric(
			METRIC_METADATA.bauxiteSaved_t.key,
			totals[METRIC_METADATA.bauxiteSaved_t.key],
			contributions[METRIC_METADATA.bauxiteSaved_t.key]
		),
		oilSaved_barrels: createChartableMetric(
			METRIC_METADATA.oilSaved_barrels.key,
			totals[METRIC_METADATA.oilSaved_barrels.key],
			contributions[METRIC_METADATA.oilSaved_barrels.key]
		),
		sandSaved_t: createChartableMetric(
			METRIC_METADATA.sandSaved_t.key,
			totals[METRIC_METADATA.sandSaved_t.key],
			contributions[METRIC_METADATA.sandSaved_t.key]
		),
		treesSaved_units: createChartableMetric(
			METRIC_METADATA.treesSaved_units.key,
			totals[METRIC_METADATA.treesSaved_units.key],
			contributions[METRIC_METADATA.treesSaved_units.key]
		),
		forestAreaSaved_ha_year: createChartableMetric(
			METRIC_METADATA.forestAreaSaved_ha_year.key,
			totals[METRIC_METADATA.forestAreaSaved_ha_year.key],
			contributions[METRIC_METADATA.forestAreaSaved_ha_year.key]
		),

		// Equivalent Metrics (Direct Values)
		equiv_home_energy_days,
		equiv_ev_km,
		equiv_phone_charges,
		equiv_showers,
		equiv_gas_car_km,

		// Financial Metrics (placeholders for now)
		energySavings_BRL: 0,
		carbonCredits_BRL: 0,
		waterSavings_BRL: 0,
		bauxiteSavings_BRL: 0,
		oilSavings_BRL: 0,
		sandSavings_BRL: 0,
		landfillCostSavings_BRL: 0,
	};
}
