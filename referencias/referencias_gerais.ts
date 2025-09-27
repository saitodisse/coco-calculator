/**
 * Referências gerais para os cálculos da calculadora de recicláveis
 * Baseado nas especificações do projeto e fatores de conversão documentados
 */

import { METRIC_METADATA } from "@/lib/metric-metadata";
import { FonteReferencia, Material, Unidade } from "@/lib/types";

// Tipos para as fontes de referência
export interface DadosMetrica {
	formula: ({ input_kg }: { input_kg: number }) => number;
	unidade_entrada: Unidade;
	unidade_saida: Unidade;
	fontes: FonteReferencia[];
}

export interface ResumoMaterial {
	resumo: string;
	dados: Partial<Record<string, DadosMetrica>>;
}

export type ReferenciasGerais = Partial<Record<Material, ResumoMaterial>>;

/**
 * Referências gerais com dados de exemplo para cada material
 * Inclui fórmulas de cálculo e fontes de referência
 */
export const referenciasGerais: ReferenciasGerais = {
	papel: {
		resumo: "A análise revela economias significativas em energia (3,44 kWh/kg), água (0,023 kl/kg) e recursos florestais (0,017 árvores/kg). Notavelmente, a substituição de matéria-prima virgem não é de 1:1, sendo estabelecido um fator de rendimento de 85% para refletir as perdas no processo.",
		dados: {
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				formula: ({ input_kg }) => input_kg * 0.00085,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{
						nome: "EPA - Paper Recycling Facts",
						citação:
							"EPA (2021). Paper Recycling Facts. https://www.epa.gov/recycle/paper-recycling-facts",
						url: "https://www.epa.gov/recycle/paper-recycling-facts",
					},
				],
			},
			[METRIC_METADATA.energySaved_kWh.key]: {
				formula: ({ input_kg }) => input_kg * 3.44,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				fontes: [
					{
						nome: "Placeholder Source",
						citação:
							"Placeholder citation for paper energy savings.",
						url: "#",
					},
				],
			},
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				formula: ({ input_kg }) => input_kg * 0.000292,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{
						nome: "Placeholder Source",
						citação:
							"Placeholder citation for paper GHG reduction.",
						url: "#",
					},
				],
			},
			[METRIC_METADATA.waterSaved_kl.key]: {
				formula: ({ input_kg }) => input_kg * 0.023,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				fontes: [
					{
						nome: "Placeholder Source",
						citação:
							"Placeholder citation for paper water savings.",
						url: "#",
					},
				],
			},
			[METRIC_METADATA.oilSaved_barrels.key]: {
				formula: ({ input_kg }) => input_kg * 0.0075,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				fontes: [
					{
						nome: "Placeholder Source",
						citação: "Placeholder citation for paper oil savings.",
						url: "#",
					},
				],
			},
			[METRIC_METADATA.treesSaved_units.key]: {
				formula: ({ input_kg }) => input_kg * 0.017,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				fontes: [
					{
						nome: "Placeholder Source",
						citação: "Placeholder citation for paper trees saved.",
						url: "#",
					},
				],
			},
			[METRIC_METADATA.forestAreaSaved_ha_year.key]: {
				formula: ({ input_kg }) => input_kg * 0.000066,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN, // ha.ano is not a unit yet
				fontes: [
					{
						nome: "Placeholder Source",
						citação:
							"Placeholder citation for paper forest area saved.",
						url: "#",
					},
				],
			},
		},
	},
	aluminio: {
		resumo: "A reciclagem de alumínio economiza grandes quantidades de energia e minério de bauxita.",
		dados: {
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				formula: ({ input_kg }) => input_kg / 1000,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.energySaved_kWh.key]: {
				formula: ({ input_kg }) => input_kg * 14.0,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				formula: ({ input_kg }) => input_kg * 0.009183,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.waterSaved_kl.key]: {
				formula: ({ input_kg }) => input_kg * 0.00399,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.oilSaved_barrels.key]: {
				formula: ({ input_kg }) => input_kg * 0.04,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.bauxiteSaved_t.key]: {
				formula: ({ input_kg }) => input_kg * 0.004,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
		},
	},
	plastico: {
		resumo: "A reciclagem de plástico economiza principalmente petróleo e energia.",
		dados: {
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				formula: ({ input_kg }) => input_kg * 0.0009,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.energySaved_kWh.key]: {
				formula: ({ input_kg }) => input_kg * 0.005774,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				formula: ({ input_kg }) => input_kg * 0.0015,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.waterSaved_kl.key]: {
				formula: ({ input_kg }) => input_kg * 0.0057,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.oilSaved_barrels.key]: {
				formula: ({ input_kg }) => input_kg * 0.0163,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
		},
	},
	vidro: {
		resumo: "A reciclagem de vidro economiza areia e energia.",
		dados: {
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				formula: ({ input_kg }) => input_kg * 0.0012,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.energySaved_kWh.key]: {
				formula: ({ input_kg }) => input_kg * 1.449,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				formula: ({ input_kg }) => input_kg * 0.000121,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.waterSaved_kl.key]: {
				formula: ({ input_kg }) => input_kg * 0.0013,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
			[METRIC_METADATA.sandSaved_t.key]: {
				formula: ({ input_kg }) => input_kg * 0.0012,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				fontes: [
					{ nome: "Placeholder", citação: "Placeholder", url: "#" },
				],
			},
		},
	},
};

/**
 * Métricas de equivalência criativas para tornar os resultados mais compreensíveis
 */
export const metricasEquivalencia = {
	papel: {
		[METRIC_METADATA.equiv_home_energy_days.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 0.688,
			fontes: [
				{
					nome: "Brazilian Energy Balance - Residential Consumption",
					citação: "EPE (2023). Brazilian Energy Balance.",
					url: "https://www.epe.gov.br/pt/publicacoes-dados-abertos/publicacoes/balanco-energetico-nacional-ben",
				},
			],
		},
		[METRIC_METADATA.equiv_showers.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 0.255,
			fontes: [
				{
					nome: "Brazilian Water Usage Statistics - Shower Consumption",
					citação: "SNIRH (2023). Water Usage Statistics.",
					url: "https://www.snirh.gov.br/",
				},
			],
		},
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 2.43,
			fontes: [
				{
					nome: "Brazilian Vehicle Emissions - Gasoline Cars",
					citação: "INMETRO (2023). Vehicle Consumption.",
					url: "https://www.gov.br/inmetro/pt-br/assuntos/veiculos/consumo-veicular",
				},
			],
		},
	},
	aluminio: {
		[METRIC_METADATA.equiv_ev_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 82.35,
			fontes: [
				{
					nome: "Brazilian Electric Vehicle Efficiency Standards",
					citação: "ANFAVEA (2023). Electric Vehicles.",
					url: "https://www.gov.br/anfavea/pt-br/assuntos/veiculos-eletricos",
				},
			],
		},
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 76.5,
			fontes: [
				{
					nome: "Brazilian Vehicle Emissions - Gasoline Cars",
					citação: "INMETRO (2023). Vehicle Consumption.",
					url: "https://www.gov.br/inmetro/pt-br/assuntos/veiculos/consumo-veicular",
				},
			],
		},
	},
	plastico: {
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 12.5,
			fontes: [
				{
					nome: "Brazilian Vehicle Emissions - Gasoline Cars",
					citação: "INMETRO (2023). Vehicle Consumption.",
					url: "https://www.gov.br/inmetro/pt-br/assuntos/veiculos/consumo-veicular",
				},
			],
		},
	},
	vidro: {
		[METRIC_METADATA.equiv_phone_charges.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 97,
			fontes: [
				{
					nome: "Brazilian Smartphone Energy Consumption Study",
					citação: "ANEEL (2023). Consumer Information.",
					url: "https://www.aneel.gov.br/consumidores",
				},
			],
		},
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 1.0,
			fontes: [
				{
					nome: "Brazilian Vehicle Emissions - Gasoline Cars",
					citação: "INMETRO (2023). Vehicle Consumption.",
					url: "https://www.gov.br/inmetro/pt-br/assuntos/veiculos/consumo-veicular",
				},
			],
		},
	},
};

// Os tipos já estão exportados acima nas declarações das interfaces
