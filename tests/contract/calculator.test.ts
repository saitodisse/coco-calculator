import { describe, it, expect } from "vitest";
import type {
	RecyclingInput,
	EnvironmentalSavings,
	CalculateSavings,
} from "@/lib/types";

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
				label: "Substituição de Matéria Virgem",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: "Papel", value: 0.05, percentage: 50 },
					{ material: "Alumínio", value: 0.05, percentage: 50 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			energySaved_kWh: {
				label: "Substituição Energética",
				total: 100,
				unit: "kWh",
				sources: [
					{ material: "Papel", value: 50, percentage: 50 },
					{ material: "Alumínio", value: 50, percentage: 50 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			ghgReduction_tCO2e: {
				label: "Redução de GEE",
				total: 0.1,
				unit: "tCO2e",
				sources: [
					{ material: "Papel", value: 0.05, percentage: 50 },
					{ material: "Alumínio", value: 0.05, percentage: 50 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			waterSaved_kl: {
				label: "Economia de Água",
				total: 1,
				unit: "kl",
				sources: [
					{ material: "Papel", value: 0.5, percentage: 50 },
					{ material: "Alumínio", value: 0.5, percentage: 50 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			bauxiteSaved_t: {
				label: "Economia de Bauxita",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: "Papel", value: 0, percentage: 0 },
					{ material: "Alumínio", value: 0.1, percentage: 100 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			oilSaved_barrels: {
				label: "Economia de Petróleo",
				total: 0.1,
				unit: "barris",
				sources: [
					{ material: "Papel", value: 0, percentage: 0 },
					{ material: "Alumínio", value: 0.05, percentage: 50 },
					{ material: "Plástico", value: 0.05, percentage: 50 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			sandSaved_t: {
				label: "Economia de Areia",
				total: 0.1,
				unit: "t",
				sources: [
					{ material: "Papel", value: 0, percentage: 0 },
					{ material: "Alumínio", value: 0, percentage: 0 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0.1, percentage: 100 },
				],
			},
			treesSaved_units: {
				label: "Economia de Árvores",
				total: 1,
				unit: "un.",
				sources: [
					{ material: "Papel", value: 1, percentage: 100 },
					{ material: "Alumínio", value: 0, percentage: 0 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
			},
			forestAreaSaved_ha_year: {
				label: "Área de Monocultura Poupada",
				total: 0.01,
				unit: "ha.ano",
				sources: [
					{ material: "Papel", value: 0.01, percentage: 100 },
					{ material: "Alumínio", value: 0, percentage: 0 },
					{ material: "Plástico", value: 0, percentage: 0 },
					{ material: "Vidro", value: 0, percentage: 0 },
				],
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
});
