import { describe, it, expect } from "vitest";
import { calculateSavings } from "@/lib/calculator";
import type { RecyclingInput } from "@/lib/types";

describe("Calculator Unit Tests", () => {
	describe("Zero input handling", () => {
		it("should handle all zero inputs", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 0,
				glassInKg: 0,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// All totals should be 0
			expect(result.ghgReduction_tCO2e.total).toBe(0);
			expect(result.waterSaved_kl.total).toBe(0);
			expect(result.energySaved_kWh.total).toBe(0);
			expect(result.virginMaterialSaved_t.total).toBe(0);
			expect(result.bauxiteSaved_t.total).toBe(0);
			expect(result.oilSaved_barrels.total).toBe(0);
			expect(result.sandSaved_t.total).toBe(0);
			expect(result.treesSaved_units.total).toBe(0);
			expect(result.forestAreaSaved_ha_year.total).toBe(0);

			// All equivalent metrics should be 0
			expect(result.equiv_home_energy_days).toBe(0);
			expect(result.equiv_ev_km).toBe(0);
			expect(result.equiv_phone_charges).toBe(0);
			expect(result.equiv_showers).toBe(0);
			expect(result.equiv_gas_car_km).toBe(0);
		});
	});

	describe("Single material calculations", () => {
		it("should calculate correctly for 100kg of paper", () => {
			const input: RecyclingInput = {
				paperInKg: 100,
				plasticInKg: 0,
				glassInKg: 0,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// GHG Reduction: 100kg * 0.000292 = 0.0292 tCO2e
			expect(result.ghgReduction_tCO2e.total).toBeCloseTo(0.0292, 4);
			expect(result.ghgReduction_tCO2e.sources[0].value).toBeCloseTo(
				0.0292,
				4
			);
			expect(result.ghgReduction_tCO2e.sources[0].percentage).toBe(100);

			// Water Saved: 100kg * 0.023 = 2.3 kl
			expect(result.waterSaved_kl.total).toBeCloseTo(2.3, 1);
			expect(result.waterSaved_kl.sources[0].value).toBeCloseTo(2.3, 1);

			// Energy Saved: 100kg * 3.44 = 344 kWh
			expect(result.energySaved_kWh.total).toBeCloseTo(344, 0);
			expect(result.energySaved_kWh.sources[0].value).toBeCloseTo(344, 0);

			// Virgin Material: 100kg * 0.00085 = 0.085 t
			expect(result.virginMaterialSaved_t.total).toBeCloseTo(0.085, 3);

			// Trees Saved: 100kg * 0.017 = 1.7 trees
			expect(result.treesSaved_units.total).toBeCloseTo(1.7, 1);

			// Forest Area: 100kg * 0.000066 = 0.0066 ha.ano
			expect(result.forestAreaSaved_ha_year.total).toBeCloseTo(0.0066, 4);

			// Oil Saved: 100kg * 0.0075 = 0.75 barris
			expect(result.oilSaved_barrels.total).toBeCloseTo(0.75, 2);
		});

		it("should calculate correctly for 50kg of aluminum", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 0,
				glassInKg: 0,
				aluminumInKg: 50,
			};

			const result = calculateSavings(input);

			// GHG Reduction: 50kg * 0.009183 = 0.45915 tCO2e
			expect(result.ghgReduction_tCO2e.total).toBeCloseTo(0.45915, 5);
			expect(result.ghgReduction_tCO2e.sources[1].value).toBeCloseTo(
				0.45915,
				5
			);
			expect(result.ghgReduction_tCO2e.sources[1].percentage).toBe(100);

			// Water Saved: 50kg * 0.00399 = 0.1995 kl
			expect(result.waterSaved_kl.total).toBeCloseTo(0.1995, 4);

			// Energy Saved: 50kg * 14.0 = 700 kWh
			expect(result.energySaved_kWh.total).toBeCloseTo(700, 0);

			// Virgin Material: 50kg / 1000 = 0.05 t
			expect(result.virginMaterialSaved_t.total).toBeCloseTo(0.05, 2);

			// Bauxite Saved: 50kg * 0.004 = 0.2 t
			expect(result.bauxiteSaved_t.total).toBeCloseTo(0.2, 1);

			// Oil Saved: 50kg * 0.04 = 2 barris
			expect(result.oilSaved_barrels.total).toBeCloseTo(2, 0);
		});

		it("should calculate correctly for 20kg of plastic", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 20,
				glassInKg: 0,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// GHG Reduction: 20kg * 0.0015 = 0.03 tCO2e
			expect(result.ghgReduction_tCO2e.total).toBeCloseTo(0.03, 2);
			expect(result.ghgReduction_tCO2e.sources[2].value).toBeCloseTo(
				0.03,
				2
			);

			// Water Saved: 20kg * 0.0057 = 0.114 kl
			expect(result.waterSaved_kl.total).toBeCloseTo(0.114, 3);

			// Energy Saved: 20kg * 0.005774 = 0.11548 kWh
			expect(result.energySaved_kWh.total).toBeCloseTo(0.11548, 5);

			// Virgin Material: 20kg * 0.0009 = 0.018 t
			expect(result.virginMaterialSaved_t.total).toBeCloseTo(0.018, 3);

			// Oil Saved: 20kg * 0.0163 = 0.326 barris
			expect(result.oilSaved_barrels.total).toBeCloseTo(0.326, 3);
		});

		it("should calculate correctly for 30kg of glass", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 0,
				glassInKg: 30,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// GHG Reduction: 30kg * 0.000121 = 0.00363 tCO2e
			expect(result.ghgReduction_tCO2e.total).toBeCloseTo(0.00363, 5);
			expect(result.ghgReduction_tCO2e.sources[3].value).toBeCloseTo(
				0.00363,
				5
			);

			// Water Saved: 30kg * 0.0013 = 0.039 kl
			expect(result.waterSaved_kl.total).toBeCloseTo(0.039, 3);

			// Energy Saved: 30kg * 1.449 = 43.47 kWh
			expect(result.energySaved_kWh.total).toBeCloseTo(43.47, 2);

			// Virgin Material: 30kg * 0.0012 = 0.036 t
			expect(result.virginMaterialSaved_t.total).toBeCloseTo(0.036, 3);

			// Sand Saved: 30kg * 0.0012 = 0.036 t
			expect(result.sandSaved_t.total).toBeCloseTo(0.036, 3);
		});
	});

	describe("Multiple material calculations", () => {
		it("should calculate correctly for mixed materials", () => {
			const input: RecyclingInput = {
				paperInKg: 100,
				plasticInKg: 20,
				glassInKg: 0,
				aluminumInKg: 50,
			};

			const result = calculateSavings(input);

			// GHG Reduction total: 0.0292 + 0.03 + 0.45915 = 0.51835 tCO2e
			expect(result.ghgReduction_tCO2e.total).toBeCloseTo(0.51835, 5);

			// Check individual contributions
			expect(result.ghgReduction_tCO2e.sources[0].value).toBeCloseTo(
				0.0292,
				4
			); // Paper
			expect(result.ghgReduction_tCO2e.sources[1].value).toBeCloseTo(
				0.45915,
				5
			); // Aluminum
			expect(result.ghgReduction_tCO2e.sources[2].value).toBeCloseTo(
				0.03,
				2
			); // Plastic
			expect(result.ghgReduction_tCO2e.sources[3].value).toBe(0); // Glass

			// Check percentages sum to 100%
			const totalPercentage = result.ghgReduction_tCO2e.sources.reduce(
				(sum, source) => sum + source.percentage,
				0
			);
			expect(totalPercentage).toBeCloseTo(100, 1);

			// Water Saved total: 2.3 + 0.114 + 0.1995 = 2.6135 kl
			expect(result.waterSaved_kl.total).toBeCloseTo(2.6135, 4);

			// Energy Saved total: 344 + 0.11548 + 700 = 1044.11548 kWh
			expect(result.energySaved_kWh.total).toBeCloseTo(1044.11548, 5);
		});
	});

	describe("Equivalent metrics calculations", () => {
		it("should calculate equivalent metrics correctly", () => {
			const input: RecyclingInput = {
				paperInKg: 100,
				plasticInKg: 0,
				glassInKg: 0,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// Home energy days: 100kg * 0.688 = 68.8 days
			expect(result.equiv_home_energy_days).toBeCloseTo(68.8, 1);

			// Showers: 100kg * 0.255 = 25.5 showers
			expect(result.equiv_showers).toBeCloseTo(25.5, 1);

			// Gas car km: 100kg * 2.43 = 243 km
			expect(result.equiv_gas_car_km).toBeCloseTo(243, 0);
		});

		it("should calculate aluminum equivalent metrics correctly", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 0,
				glassInKg: 0,
				aluminumInKg: 50,
			};

			const result = calculateSavings(input);

			// EV km: 50kg * 82.35 = 4117.5 km
			expect(result.equiv_ev_km).toBeCloseTo(4117.5, 1);

			// Gas car km: 50kg * 76.5 = 3825 km
			expect(result.equiv_gas_car_km).toBeCloseTo(3825, 0);
		});

		it("should calculate glass equivalent metrics correctly", () => {
			const input: RecyclingInput = {
				paperInKg: 0,
				plasticInKg: 0,
				glassInKg: 30,
				aluminumInKg: 0,
			};

			const result = calculateSavings(input);

			// Phone charges: 30kg * 97 = 2910 charges
			expect(result.equiv_phone_charges).toBeCloseTo(2910, 0);

			// Gas car km: 30kg * 1.0 = 30 km
			expect(result.equiv_gas_car_km).toBeCloseTo(30, 0);
		});
	});
});
