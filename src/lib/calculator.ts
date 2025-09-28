import type {
	RecyclingInput,
	EnvironmentalSavings,
	ChartableMetric,
	MetricSource,
} from "./types";
import { Material } from "./types";
import { referenciasPorMetrica } from "./referencias_gerais";
import { METRIC_METADATA } from "./metric-metadata";

/**
 * Calculates the value for a given metric, material, and weight.
 * It uses the central `referenciasPorMetrica` object as the source of truth for formulas.
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
	const formula =
		referenciasPorMetrica[metricKey]?.dadosPorMaterial?.[material]?.formula;
	return formula ? formula({ input_kg: weightKg }) : 0;
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
	const equivalentTotals: Record<string, number> = {};

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

	// Calculate equivalent metrics
	for (const m of materials) {
		if (m.weight > 0) {
			for (const metricKey in referenciasPorMetrica) {
				const metricDef = referenciasPorMetrica[metricKey];
				const materialData = metricDef?.dadosPorMaterial?.[m.name];
				if (materialData?.equivalencias) {
					for (const equivKey in materialData.equivalencias) {
						if (!equivalentTotals[equivKey]) {
							equivalentTotals[equivKey] = 0;
						}
						const formula =
							materialData.equivalencias[equivKey]?.formula;
						if (formula) {
							equivalentTotals[equivKey] += formula({
								input_kg: m.weight,
							});
						}
					}
				}
			}
		}
	}

	// Create chartable metrics with sources
	const createChartableMetric = (
		metricKey: string,
		total: number,
		metricContributions: Array<{ material: string; value: number }>
	): ChartableMetric => {
		const metadata = METRIC_METADATA[metricKey];
		const metricDef = referenciasPorMetrica[metricKey];

		const sources: MetricSource[] = metricContributions.map((c) => {
			const material = c.material as Material;
			const descricaoFormula =
				metricDef?.dadosPorMaterial?.[material]?.descricaoFormula;
			return {
				material,
				value: c.value,
				percentage: total > 0 ? (c.value / total) * 100 : 0,
				descricaoFormula,
			};
		});

		const references = metricDef?.fontes || [];
		const sobreFontes = metricDef?.sobreFontes;

		return {
			label: metadata?.name || metricKey,
			total,
			unit: metadata?.unit || "",
			sources,
			metadata,
			references,
			sobreFontes,
		};
	};

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
		equiv_home_energy_days:
			equivalentTotals[METRIC_METADATA.equiv_home_energy_days.key] || 0,
		equiv_ev_km: equivalentTotals[METRIC_METADATA.equiv_ev_km.key] || 0,
		equiv_phone_charges:
			equivalentTotals[METRIC_METADATA.equiv_phone_charges.key] || 0,
		equiv_showers: equivalentTotals[METRIC_METADATA.equiv_showers.key] || 0,
		equiv_gas_car_km:
			equivalentTotals[METRIC_METADATA.equiv_gas_car_km.key] || 0,

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
