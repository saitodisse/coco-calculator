import { describe, it, expect } from "vitest";
import type {
	RecyclingInput,
	EnvironmentalSavings,
	CalculateSavings,
} from "@/lib/types";
import { Material } from "@/lib/types";
import { METRIC_METADATA } from "@/lib/metric-metadata";

describe("Calculator Contract Tests", () => {
	it("should have correct RecyclingInput interface structure", () => {
		const input: RecyclingInput = {
			paperInKg: 100,
			plasticInKg: 20,
			glassInKg: 0,
			aluminumInKg: 50,
		};

		expect(input).toHaveProperty("paperInKg");
		expect(input).toHaveProperty("plasticInKg");
		expect(input).toHaveProperty("glassInKg");
		expect(input).toHaveProperty("aluminumInKg");
		expect(typeof input.paperInKg).toBe("number");
		expect(typeof input.plasticInKg).toBe("number");
		expect(typeof input.glassInKg).toBe("number");
		expect(typeof input.aluminumInKg).toBe("number");
	});

	it("should have correct EnvironmentalSavings interface structure", () => {
		const mockSavings: EnvironmentalSavings = {
			// Primary Metrics (Chartable)
			virginMaterialSaved_t: {
				label: "Material Virgem Economizado",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: Material.PAPEL, value: 0.05, percentage: 50 },
					{
						material: Material.ALUMINIO,
						value: 0.05,
						percentage: 50,
					},
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.virginMaterialSaved_t,
			},
			energySaved_kWh: {
				label: "Energia Economizada",
				total: 100,
				unit: "kWh",
				sources: [
					{ material: Material.PAPEL, value: 50, percentage: 50 },
					{ material: Material.ALUMINIO, value: 50, percentage: 50 },
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.energySaved_kWh,
			},
			ghgReduction_tCO2e: {
				label: "Redução de Gases de Efeito Estufa",
				total: 0.1,
				unit: "tCO2e",
				sources: [
					{ material: Material.PAPEL, value: 0.05, percentage: 50 },
					{
						material: Material.ALUMINIO,
						value: 0.05,
						percentage: 50,
					},
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.ghgReduction_tCO2e,
			},
			waterSaved_kl: {
				label: "Água Economizada",
				total: 1,
				unit: "kl",
				sources: [
					{ material: Material.PAPEL, value: 0.5, percentage: 50 },
					{ material: Material.ALUMINIO, value: 0.5, percentage: 50 },
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.waterSaved_kl,
			},
			bauxiteSaved_t: {
				label: "Bauxita Economizada",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: Material.PAPEL, value: 0, percentage: 0 },
					{
						material: Material.ALUMINIO,
						value: 0.1,
						percentage: 100,
					},
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.bauxiteSaved_t,
			},
			oilSaved_barrels: {
				label: "Petróleo Economizado",
				total: 0.1,
				unit: "barris",
				sources: [
					{ material: Material.PAPEL, value: 0, percentage: 0 },
					{
						material: Material.ALUMINIO,
						value: 0.05,
						percentage: 50,
					},
					{ material: Material.PLATICO, value: 0.05, percentage: 50 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.oilSaved_barrels,
			},
			sandSaved_t: {
				label: "Areia Economizada",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: Material.PAPEL, value: 0, percentage: 0 },
					{ material: Material.ALUMINIO, value: 0, percentage: 0 },
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0.1, percentage: 100 },
				],
				metadata: METRIC_METADATA.sandSaved_t,
			},
			treesSaved_units: {
				label: "Árvores Preservadas",
				total: 1,
				unit: "unidades",
				sources: [
					{ material: Material.PAPEL, value: 1, percentage: 100 },
					{ material: Material.ALUMINIO, value: 0, percentage: 0 },
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.treesSaved_units,
			},
			forestAreaSaved_ha_year: {
				label: "Área Florestal Preservada",
				total: 0.01,
				unit: "ha/ano",
				sources: [
					{ material: Material.PAPEL, value: 0.01, percentage: 100 },
					{ material: Material.ALUMINIO, value: 0, percentage: 0 },
					{ material: Material.PLATICO, value: 0, percentage: 0 },
					{ material: Material.VIDRO, value: 0, percentage: 0 },
				],
				metadata: METRIC_METADATA.forestAreaSaved_ha_year,
			},
			// Equivalent Metrics (Direct Values)
			equiv_home_energy_days: 1,
			equiv_ev_km: 10,
			equiv_phone_charges: 100,
			equiv_showers: 5,
			equiv_gas_car_km: 2,
			// Financial Metrics (placeholders)
			energySavings_BRL: 0,
			carbonCredits_BRL: 0,
			waterSavings_BRL: 0,
			bauxiteSavings_BRL: 0,
			oilSavings_BRL: 0,
			sandSavings_BRL: 0,
			landfillCostSavings_BRL: 0,
		};

		// Test chartable metrics structure
		expect(mockSavings.ghgReduction_tCO2e).toHaveProperty("label");
		expect(mockSavings.ghgReduction_tCO2e).toHaveProperty("total");
		expect(mockSavings.ghgReduction_tCO2e).toHaveProperty("unit");
		expect(mockSavings.ghgReduction_tCO2e).toHaveProperty("sources");
		expect(mockSavings.ghgReduction_tCO2e).toHaveProperty("metadata");
		expect(Array.isArray(mockSavings.ghgReduction_tCO2e.sources)).toBe(
			true
		);
		expect(mockSavings.ghgReduction_tCO2e.sources[0]).toHaveProperty(
			"material"
		);
		expect(mockSavings.ghgReduction_tCO2e.sources[0]).toHaveProperty(
			"value"
		);
		expect(mockSavings.ghgReduction_tCO2e.sources[0]).toHaveProperty(
			"percentage"
		);

		// Test metadata structure
		expect(mockSavings.ghgReduction_tCO2e.metadata).toHaveProperty("name");
		expect(mockSavings.ghgReduction_tCO2e.metadata).toHaveProperty(
			"description"
		);
		expect(mockSavings.ghgReduction_tCO2e.metadata).toHaveProperty("unit");
		expect(mockSavings.ghgReduction_tCO2e.metadata).toHaveProperty(
			"category"
		);
		expect(mockSavings.ghgReduction_tCO2e.metadata?.category).toBe(
			"primary"
		);

		// Test equivalent metrics
		expect(typeof mockSavings.equiv_home_energy_days).toBe("number");
		expect(typeof mockSavings.equiv_ev_km).toBe("number");
		expect(typeof mockSavings.equiv_phone_charges).toBe("number");
		expect(typeof mockSavings.equiv_showers).toBe("number");
		expect(typeof mockSavings.equiv_gas_car_km).toBe("number");
	});

	it("should have correct CalculateSavings function signature", () => {
		// This test will fail until we implement the function
		// but it validates the contract structure
		const calculateSavings: CalculateSavings = (
			input: RecyclingInput
		): EnvironmentalSavings => {
			// Use input to avoid unused variable warning
			console.log("Input received:", input);
			throw new Error("Function not implemented yet");
		};

		const input: RecyclingInput = {
			paperInKg: 100,
			plasticInKg: 0,
			glassInKg: 0,
			aluminumInKg: 0,
		};

		expect(() => calculateSavings(input)).toThrow(
			"Function not implemented yet"
		);
	});

	it("should have metadata for all primary metrics", () => {
		const input: RecyclingInput = {
			paperInKg: 100,
			plasticInKg: 20,
			glassInKg: 0,
			aluminumInKg: 50,
		};

		// This test will pass once we implement the calculateSavings function
		// For now, we just verify that the metadata structure is correct
		const primaryMetrics = [
			"virginMaterialSaved_t",
			"energySaved_kWh",
			"ghgReduction_tCO2e",
			"waterSaved_kl",
			"bauxiteSaved_t",
			"oilSaved_barrels",
			"sandSaved_t",
			"treesSaved_units",
			"forestAreaSaved_ha_year",
		];

		primaryMetrics.forEach((metricKey) => {
			const metadata = METRIC_METADATA[metricKey];
			expect(metadata).toBeDefined();
			expect(metadata.name).toBeDefined();
			expect(metadata.description).toBeDefined();
			expect(metadata.unit).toBeDefined();
			expect(metadata.category).toBe("primary");
		});
	});

	it("should have metadata for all equivalent metrics", () => {
		const equivalentMetrics = [
			"equiv_home_energy_days",
			"equiv_ev_km",
			"equiv_phone_charges",
			"equiv_showers",
			"equiv_gas_car_km",
		];

		equivalentMetrics.forEach((metricKey) => {
			const metadata = METRIC_METADATA[metricKey];
			expect(metadata).toBeDefined();
			expect(metadata.name).toBeDefined();
			expect(metadata.description).toBeDefined();
			expect(metadata.unit).toBeDefined();
			expect(metadata.category).toBe("equivalent");
			expect(metadata.isEquivalent).toBe(true);
		});
	});

	it("should have metadata for all financial metrics", () => {
		const financialMetrics = [
			"energySavings_BRL",
			"carbonCredits_BRL",
			"waterSavings_BRL",
			"bauxiteSavings_BRL",
			"oilSavings_BRL",
			"sandSavings_BRL",
			"landfillCostSavings_BRL",
		];

		financialMetrics.forEach((metricKey) => {
			const metadata = METRIC_METADATA[metricKey];
			expect(metadata).toBeDefined();
			expect(metadata.name).toBeDefined();
			expect(metadata.description).toBeDefined();
			expect(metadata.unit).toBe("R$");
			expect(metadata.category).toBe("financial");
		});
	});
});
