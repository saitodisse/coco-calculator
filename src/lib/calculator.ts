import type {
	RecyclingInput,
	EnvironmentalSavings,
	ChartableMetric,
	MetricSource,
} from "./types";

/**
 * Core calculation function for recycling environmental savings.
 * Implements all calculation factors from the specification.
 */
export function calculateSavings(input: RecyclingInput): EnvironmentalSavings {
	// Initialize all material contributions in the order expected by tests
	const materials = [
		{ name: "Papel" as const, weight: input.paperInKg },
		{ name: "Alumínio" as const, weight: input.aluminumInKg },
		{ name: "Plástico" as const, weight: input.plasticInKg },
		{ name: "Vidro" as const, weight: input.glassInKg },
	];

	// Calculate individual material contributions for each metric
	const virginMaterialContributions = materials.map((m) => ({
		material: m.name,
		value: calculateVirginMaterialSaved(m.weight, m.name),
	}));

	const energyContributions = materials.map((m) => ({
		material: m.name,
		value: calculateEnergySaved(m.weight, m.name),
	}));

	const ghgContributions = materials.map((m) => ({
		material: m.name,
		value: calculateGHGReduction(m.weight, m.name),
	}));

	const waterContributions = materials.map((m) => ({
		material: m.name,
		value: calculateWaterSaved(m.weight, m.name),
	}));

	const bauxiteContributions = materials.map((m) => ({
		material: m.name,
		value: calculateBauxiteSaved(m.weight, m.name),
	}));

	const oilContributions = materials.map((m) => ({
		material: m.name,
		value: calculateOilSaved(m.weight, m.name),
	}));

	const sandContributions = materials.map((m) => ({
		material: m.name,
		value: calculateSandSaved(m.weight, m.name),
	}));

	const treesContributions = materials.map((m) => ({
		material: m.name,
		value: calculateTreesSaved(m.weight, m.name),
	}));

	const forestAreaContributions = materials.map((m) => ({
		material: m.name,
		value: calculateForestAreaSaved(m.weight, m.name),
	}));

	// Calculate totals and percentages for each metric
	const virginMaterialTotal = virginMaterialContributions.reduce(
		(sum, c) => sum + c.value,
		0
	);
	const energyTotal = energyContributions.reduce(
		(sum, c) => sum + c.value,
		0
	);
	const ghgTotal = ghgContributions.reduce((sum, c) => sum + c.value, 0);
	const waterTotal = waterContributions.reduce((sum, c) => sum + c.value, 0);
	const bauxiteTotal = bauxiteContributions.reduce(
		(sum, c) => sum + c.value,
		0
	);
	const oilTotal = oilContributions.reduce((sum, c) => sum + c.value, 0);
	const sandTotal = sandContributions.reduce((sum, c) => sum + c.value, 0);
	const treesTotal = treesContributions.reduce((sum, c) => sum + c.value, 0);
	const forestAreaTotal = forestAreaContributions.reduce(
		(sum, c) => sum + c.value,
		0
	);

	// Create chartable metrics with sources
	const createChartableMetric = (
		label: string,
		unit: string,
		total: number,
		contributions: Array<{ material: string; value: number }>
	): ChartableMetric => {
		const sources: MetricSource[] = contributions.map((c) => ({
			material: c.material as MetricSource["material"],
			value: c.value,
			percentage: total > 0 ? (c.value / total) * 100 : 0,
		}));

		return {
			label,
			total,
			unit,
			sources,
		};
	};

	// Calculate equivalent metrics
	const equiv_home_energy_days = calculateEquivalentHomeEnergyDays(input);
	const equiv_ev_km = calculateEquivalentEVKm(input);
	const equiv_phone_charges = calculateEquivalentPhoneCharges(input);
	const equiv_showers = calculateEquivalentShowers(input);
	const equiv_gas_car_km = calculateEquivalentGasCarKm(input);

	return {
		// Primary Metrics (Chartable)
		virginMaterialSaved_t: createChartableMetric(
			"Substituição de Matéria Virgem",
			"t",
			virginMaterialTotal,
			virginMaterialContributions
		),
		energySaved_kWh: createChartableMetric(
			"Substituição Energética",
			"kWh",
			energyTotal,
			energyContributions
		),
		ghgReduction_tCO2e: createChartableMetric(
			"Redução de GEE",
			"tCO2e",
			ghgTotal,
			ghgContributions
		),
		waterSaved_kl: createChartableMetric(
			"Economia de Água",
			"kl",
			waterTotal,
			waterContributions
		),
		bauxiteSaved_t: createChartableMetric(
			"Economia de Bauxita",
			"t",
			bauxiteTotal,
			bauxiteContributions
		),
		oilSaved_barrels: createChartableMetric(
			"Economia de Petróleo",
			"barris",
			oilTotal,
			oilContributions
		),
		sandSaved_t: createChartableMetric(
			"Economia de Areia",
			"t",
			sandTotal,
			sandContributions
		),
		treesSaved_units: createChartableMetric(
			"Economia de Árvores",
			"un.",
			treesTotal,
			treesContributions
		),
		forestAreaSaved_ha_year: createChartableMetric(
			"Área de Monocultura Poupada",
			"ha.ano",
			forestAreaTotal,
			forestAreaContributions
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

// Individual calculation functions for each material and metric

function calculateVirginMaterialSaved(
	weightKg: number,
	material: string
): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.00085;
		case "Alumínio":
			return weightKg / 1000; // 1kg = 0.001t
		case "Plástico":
			return weightKg * 0.0009;
		case "Vidro":
			return weightKg * 0.0012;
		default:
			return 0;
	}
}

function calculateEnergySaved(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 3.44;
		case "Alumínio":
			return weightKg * 14.0;
		case "Plástico":
			return weightKg * 0.005774;
		case "Vidro":
			return weightKg * 1.449;
		default:
			return 0;
	}
}

function calculateGHGReduction(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.000292;
		case "Alumínio":
			return weightKg * 0.009183;
		case "Plástico":
			return weightKg * 0.0015;
		case "Vidro":
			return weightKg * 0.000121;
		default:
			return 0;
	}
}

function calculateWaterSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.023;
		case "Alumínio":
			return weightKg * 0.00399;
		case "Plástico":
			return weightKg * 0.0057;
		case "Vidro":
			return weightKg * 0.0013;
		default:
			return 0;
	}
}

function calculateBauxiteSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Alumínio":
			return weightKg * 0.004;
		default:
			return 0;
	}
}

function calculateOilSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.0075;
		case "Alumínio":
			return weightKg * 0.04;
		case "Plástico":
			return weightKg * 0.0163;
		default:
			return 0;
	}
}

function calculateSandSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Vidro":
			return weightKg * 0.0012;
		default:
			return 0;
	}
}

function calculateTreesSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.017;
		default:
			return 0;
	}
}

function calculateForestAreaSaved(weightKg: number, material: string): number {
	switch (material) {
		case "Papel":
			return weightKg * 0.000066;
		default:
			return 0;
	}
}

// Equivalent metrics calculation functions

function calculateEquivalentHomeEnergyDays(input: RecyclingInput): number {
	const paperDays = input.paperInKg * 0.688;
	const aluminumDays = input.aluminumInKg * 0.0; // No specific factor for aluminum
	const plasticDays = input.plasticInKg * 0.0; // No specific factor for plastic
	const glassDays = input.glassInKg * 0.0; // No specific factor for glass

	return paperDays + aluminumDays + plasticDays + glassDays;
}

function calculateEquivalentEVKm(input: RecyclingInput): number {
	const paperKm = input.paperInKg * 0.0; // No specific factor for paper
	const aluminumKm = input.aluminumInKg * 82.35;
	const plasticKm = input.plasticInKg * 0.0; // No specific factor for plastic
	const glassKm = input.glassInKg * 0.0; // No specific factor for glass

	return paperKm + aluminumKm + plasticKm + glassKm;
}

function calculateEquivalentPhoneCharges(input: RecyclingInput): number {
	const paperCharges = input.paperInKg * 0.0; // No specific factor for paper
	const aluminumCharges = input.aluminumInKg * 0.0; // No specific factor for aluminum
	const plasticCharges = input.plasticInKg * 0.0; // No specific factor for plastic
	const glassCharges = input.glassInKg * 97;

	return paperCharges + aluminumCharges + plasticCharges + glassCharges;
}

function calculateEquivalentShowers(input: RecyclingInput): number {
	const paperShowers = input.paperInKg * 0.255;
	const aluminumShowers = input.aluminumInKg * 0.0; // No specific factor for aluminum
	const plasticShowers = input.plasticInKg * 0.0; // No specific factor for plastic
	const glassShowers = input.glassInKg * 0.0; // No specific factor for glass

	return paperShowers + aluminumShowers + plasticShowers + glassShowers;
}

function calculateEquivalentGasCarKm(input: RecyclingInput): number {
	const paperKm = input.paperInKg * 2.43;
	const aluminumKm = input.aluminumInKg * 76.5;
	const plasticKm = input.plasticInKg * 0.0; // No specific factor for plastic
	const glassKm = input.glassInKg * 1.0;

	return paperKm + aluminumKm + plasticKm + glassKm;
}
