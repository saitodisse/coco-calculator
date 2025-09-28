/**
 * Referências gerais para os cálculos da calculadora de recicláveis
 * Baseado nas especificações do projeto e fatores de conversão documentados
 */

import { METRIC_METADATA } from "@/lib/metric-metadata";
import {
	Material,
	Unidade,
	ReferenciasPorMetrica,
	FonteReferencia,
} from "@/lib/types";

// Helper function to deduplicate references
const getUniqueFontes = (
	...fontesArrays: (FonteReferencia[] | undefined)[]
): FonteReferencia[] => {
	const uniqueFontes = new Map<string, FonteReferencia>();
	for (const fontes of fontesArrays) {
		if (fontes) {
			for (const fonte of fontes) {
				if (fonte.url && !uniqueFontes.has(fonte.url)) {
					uniqueFontes.set(fonte.url, fonte);
				} else if (!fonte.url && !uniqueFontes.has(fonte.citação)) {
					// Fallback to citation if URL is not available for uniqueness
					uniqueFontes.set(fonte.citação, fonte);
				}
			}
		}
	}
	return Array.from(uniqueFontes.values());
};

export const referenciasPorMetrica: ReferenciasPorMetrica = {
	// 1. Material Virgem Economizado
	[METRIC_METADATA.virginMaterialSaved_t.key]: {
		sobreFontes:
			"A substituição de matéria-prima virgem é calculada com base no rendimento de cada processo de reciclagem. Fatores como degradação de material, contaminação e perdas de processo são considerados para determinar o quanto de material reciclado efetivamente substitui a produção de novo material.",
		unidade_saida: Unidade.T,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Rendimento médio de 85% na reciclagem de papel: cada 1 kg coletado substitui ~0,85 kg de polpa virgem (0,00085 t/kg).",
				formula: ({ input_kg }) => input_kg * 0.00085,
			},
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Substituição massa-a-massa: 1 kg de alumínio reciclado substitui 1 kg virgem (1 t/t).",
				formula: ({ input_kg }) => input_kg / 1000,
			},
			[Material.PLATICO]: {
				descricaoFormula:
					"Fator de substituição conservador (downcycling e perdas): ~0,90 t de resina virgem evitada por t reciclada (0,0009 t/kg).",
				formula: ({ input_kg }) => input_kg * 0.0009,
			},
			[Material.VIDRO]: {
				descricaoFormula:
					"Substituição direta de matérias-primas por cullet: ~1,0–1,2 kg de matéria virgem evitada por kg de vidro reciclado ⇒ 0,0012 t/kg (conservador).",
				formula: ({ input_kg }) => input_kg * 0.0012,
			},
		},
		fontes: getUniqueFontes(
			[
				{
					nome: "TAPPI (Recovered Paper Yield)",
					citação:
						"Estimativas de rendimento e perdas no processo de reciclagem de papel com dados de fábrica e laboratório.",
					url: "https://www.tappi.org/content/events/07recycle/papers/dejong.pdf",
				},
				{
					nome: "Paper360 — Recycling at Paper Mills",
					citação:
						"Discussão das perdas e da degradação de fibras ao longo de ciclos de reciclagem.",
					url: "https://paper360.tappi.org/2021/03/15/recycling-at-paper-mills/",
				},
			],
			[
				{
					nome: "Aluminum Association — Recycling",
					citação:
						"Reciclabilidade do alumínio e equivalência massa-a-massa.",
					url: "https://www.aluminum.org/Recycling",
				},
			],
			[
				{
					nome: "CORE — Processabilidade de PET reciclado",
					citação:
						"Degradação térmica/mecânica e perdas de propriedades no PET reciclado.",
					url: "https://core.ac.uk/download/pdf/322932866.pdf",
				},
			],
			[
				{
					nome: "GPI — Glass Recycling Facts & Benefits",
					citação:
						"Economias de 1.300 lb areia, 410 lb barrilha e 380 lb calcário por t curta de cullet.",
					url: "https://www.gpi.org/facts-about-glass-recycling",
				},
			]
		),
	},

	// 2. Energia Economizada
	[METRIC_METADATA.energySaved_kWh.key]: {
		sobreFontes:
			"A economia de energia é um dos benefícios mais significativos da reciclagem, especialmente para o alumínio. Os valores são baseados em comparações de ciclo de vida (ACV) entre a produção de material virgem e o reprocessamento de material reciclado.",
		unidade_saida: Unidade.KWH,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Média consolidada de 3,44 kWh/kg, obtida a partir de valores reportados entre 2,5 e 4,1 MWh/t.",
				formula: ({ input_kg }) => input_kg * 3.44,
				equivalencias: {
					[METRIC_METADATA.equiv_home_energy_days.key]: {
						formula: ({ input_kg }) => input_kg * 0.688,
						fontes: [
							{
								nome: "Constellation — Average home power usage",
								citação:
									"Consumo médio diário de uma residência (~30 kWh/dia) usado para equivalência.",
								url: "https://www.constellation.com/energy-101/energy-education/average-home-power-usage.html",
							},
						],
					},
				},
			},
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Economia absoluta média de 14 kWh/kg, refletindo uma economia de ~95% em relação à produção primária.",
				formula: ({ input_kg }) => input_kg * 14.0,
				equivalencias: {
					[METRIC_METADATA.equiv_ev_km.key]: {
						formula: ({ input_kg }) => input_kg * 82.35,
						fontes: [
							{
								nome: "EPA / EIA — Consumo médio EV",
								citação:
									"Ordens de grandeza de consumo específico de EV (kWh/100 km).",
								url: "https://www.eia.gov/todayinenergy/detail.php?id=56780",
							},
						],
					},
				},
			},
			[Material.PLATICO]: {
				descricaoFormula:
					"Fator consolidado para plásticos (ordem de grandeza PET): 5.774 kWh/t.",
				formula: ({ input_kg }) => input_kg * 0.005774,
				equivalencias: {},
			},
			[Material.VIDRO]: {
				descricaoFormula:
					"Economia conservadora de ~30% sobre 4.830 kWh/t (virgem) ⇒ 1.449 kWh/t.",
				formula: ({ input_kg }) => input_kg * 1.449,
				equivalencias: {
					[METRIC_METADATA.equiv_phone_charges.key]: {
						formula: ({ input_kg }) => input_kg * 97,
						fontes: [
							{
								nome: "EnergySage — Watts de um carregador",
								citação:
									"Estimativa de Wh por carga completa de smartphone (10–20 Wh).",
								url: "https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/",
							},
						],
					},
				},
			},
		},
		fontes: getUniqueFontes(
			[
				{
					nome: "WWF Brasil — Benefícios da coleta seletiva",
					citação:
						"Faixas de consumo/ economia de energia para papel reciclado vs. virgem.",
					url: "https://www.wwf.org.br/?14001/",
				},
			],
			[
				{
					nome: "Aluminum Association — Recycling",
					citação:
						"Contexto setorial de energia e reciclagem para alumínio, com ~95% de economia.",
					url: "https://www.aluminum.org/Recycling",
				},
			],
			[
				{
					nome: "Plastics For Change — Recycled Plastic",
					citação:
						"5.774 kWh de energia economizados por tonelada de plástico reciclado.",
					url: "https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable",
				},
			],
			[
				{
					nome: "Lactec — Reciclagem de resíduos de vidro (dissertação)",
					citação:
						"Consumos de 4,83 vs. 4,19 MWh/t e discussão de economias.",
					url: "https://mestrado.lactec.com.br/wp-content/uploads/2021/09/040_PT.pdf",
				},
			]
		),
	},

	// 3. Redução de GEE
	[METRIC_METADATA.ghgReduction_tCO2e.key]: {
		sobreFontes:
			"A redução de GEE (Gases de Efeito Estufa) é calculada com base em modelos de Análise de Ciclo de Vida (ACV), como o WARM da EPA, que consideram as emissões evitadas em toda a cadeia produtiva.",
		unidade_saida: Unidade.TCO2E,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Fator conservador de 0,292 tCO2e/t, baseado em modelos ACV (WARM/EPA).",
				formula: ({ input_kg }) => input_kg * 0.000292,
				equivalencias: {
					[METRIC_METADATA.equiv_gas_car_km.key]: {
						formula: ({ input_kg }) => input_kg * 2.43,
						fontes: [
							{
								nome: "EPA — Passenger Vehicle Emissions",
								citação:
									"Fator médio de emissões por km para conversão de CO2e em quilômetros evitados.",
								url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
							},
						],
					},
				},
			},
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Redução líquida de 9,183 kg CO2e/kg, alinhada a fatores de ACV setoriais.",
				formula: ({ input_kg }) => input_kg * 0.009183,
				equivalencias: {
					[METRIC_METADATA.equiv_gas_car_km.key]: {
						formula: ({ input_kg }) => input_kg * 76.5,
						fontes: [
							{
								nome: "EPA — Passenger Vehicle Emissions",
								citação: "Fator médio de emissões por km.",
								url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
							},
						],
					},
				},
			},
			[Material.PLATICO]: {
				descricaoFormula:
					"Redução líquida típica para plásticos (ordem de grandeza ACV): 1,5 kg CO2e/kg ⇒ 0,0015 tCO2e/kg.",
				formula: ({ input_kg }) => input_kg * 0.0015,
				equivalencias: {
					[METRIC_METADATA.equiv_gas_car_km.key]: {
						formula: ({ input_kg }) => input_kg * 12.5,
						fontes: [
							{
								nome: "EPA — Passenger Vehicle Emissions",
								citação:
									"Fator médio para conversão de CO2e em km equivalentes.",
								url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
							},
						],
					},
				},
			},
			[Material.VIDRO]: {
				descricaoFormula:
					"Redução líquida conservadora: 0,121 kg CO2e/kg (0,000121 t/kg), refletindo menor queima de combustível e emissões de processo evitadas.",
				formula: ({ input_kg }) => input_kg * 0.000121,
				equivalencias: {
					[METRIC_METADATA.equiv_gas_car_km.key]: {
						formula: ({ input_kg }) => input_kg * 1.0,
						fontes: [
							{
								nome: "EPA — Passenger Vehicle Emissions",
								citação: "Fator médio de emissões por km.",
								url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
							},
						],
					},
				},
			},
		},
		fontes: getUniqueFontes(
			[
				{
					nome: "EPA — WARM (Paper Products)",
					citação:
						"Fatores de emissão e metodologia para produtos de papel no WARM.",
					url: "https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Paper_Products.pdf",
				},
			],
			[
				{
					nome: "ResearchGate — Aluminum recycling benefits",
					citação:
						"Comparação primário vs. reciclado para energia e GEE (ordem de grandeza).",
					url: "https://www.researchgate.net/publication/290929754_Aluminum_recycling_Economic_and_environmental_benefits",
				},
			],
			[
				{
					nome: "EPA — WARM (Plastics)",
					citação:
						"Fatores de GEE por resina e gestão de fim de vida (v15/v16).",
					url: "https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Plastics.pdf",
				},
			],
			[
				{
					nome: "GPI — Facts & Benefits",
					citação:
						"~1 t de CO2 para cada 6 t de vidro reciclado (≈0,167 t/t).",
					url: "https://www.gpi.org/facts-about-glass-recycling",
				},
			]
		),
	},

	// 4. Água Economizada
	[METRIC_METADATA.waterSaved_kl.key]: {
		sobreFontes:
			"A economia de água é calculada comparando o consumo de água do processo de produção com material virgem versus o processo de reciclagem. Processos industriais modernos são considerados para uma estimativa mais precisa.",
		unidade_saida: Unidade.KL,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Comparação contemporânea: ~25 m³/t (celulose virgem moderna) vs. ~2 m³/t (reciclado) ⇒ 23 kL/t (0,023 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.023,
				equivalencias: {
					[METRIC_METADATA.equiv_showers.key]: {
						formula: ({ input_kg }) => input_kg * 0.255,
						fontes: [
							{
								nome: "WasteTrade — Water and recycling",
								citação:
									"Ordens de grandeza de consumo de água e economias na reciclagem.",
								url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
							},
						],
					},
				},
			},
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Economia estimada de água doce no ciclo primário evitado: 3,99 kL/t (0,00399 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.00399,
			},
			[Material.PLATICO]: {
				descricaoFormula:
					"Economia de processo estimada para reciclagem de plásticos: ~5,7 kL/t (0,0057 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.0057,
			},
			[Material.VIDRO]: {
				descricaoFormula:
					"Economia de água na manufatura (resfriamento/ lavagens): ~1,3 kL/t (0,0013 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.0013,
			},
		},
		fontes: getUniqueFontes(
			[
				{
					nome: "Tratamento de Água — Setor de celulose no Brasil",
					citação:
						"Modernização reduziu consumo de 180–200 m³/t para ~25 m³/t nas fábricas de celulose.",
					url: "https://tratamentodeagua.com.br/industria-brasileira-de-papel-e-celulose-avanca-na-reducao-consumo-de-agua/",
				},
			],
			[
				{
					nome: "WasteTrade — Conserves Water",
					citação:
						"Estimativas de economia hídrica em reciclagem de metais (ordem de grandeza).",
					url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
				},
			],
			[
				{
					nome: "NSG Group — Water",
					citação: "Consumo de água em vidro float (~2,6 m³/t).",
					url: "https://www.nsg.com/en/sustainability/environment/natural-capital/water",
				},
			]
		),
	},

	// 5. Bauxita Economizada
	[METRIC_METADATA.bauxiteSaved_t.key]: {
		sobreFontes:
			"A economia de bauxita é diretamente ligada à reciclagem de alumínio, pois a bauxita é o minério primário do qual o alumínio é produzido. A relação de conversão considera a quantidade de minério necessária para produzir uma tonelada de alumínio primário.",
		unidade_saida: Unidade.T,
		dadosPorMaterial: {
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Relação típica de cadeia: ~4 t de bauxita evitadas por 1 t de alumínio reciclado ⇒ 0,004 t/kg.",
				formula: ({ input_kg }) => input_kg * 0.004,
			},
		},
		fontes: [
			{
				nome: "Alupro — Environmental benefits",
				citação:
					"1 t de alumínio ⇒ ~4 t de bauxita economizadas (ordem de grandeza).",
				url: "https://alupro.org.uk/industry/local-authorities/environmental-benefits/",
			},
		],
	},

	// 6. Petróleo Economizado
	[METRIC_METADATA.oilSaved_barrels.key]: {
		sobreFontes:
			"A economia de petróleo é calculada com base na energia evitada e na substituição de matéria-prima fóssil (especialmente para plásticos). Os fatores de conversão são baseados em equivalências energéticas e de massa.",
		unidade_saida: Unidade.BARRIS,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Média de 7,5 barris/t (0,0075 barris/kg), a partir de estimativas de 2,5; 9,05 e 11 barris por tonelada.",
				formula: ({ input_kg }) => input_kg * 0.0075,
			},
			[Material.ALUMINIO]: {
				descricaoFormula:
					"Equivalência setorial frequentemente citada: ~40 barris de petróleo por tonelada de alumínio reciclado (0,04 barris/kg).",
				formula: ({ input_kg }) => input_kg * 0.04,
			},
			[Material.PLATICO]: {
				descricaoFormula:
					"Substituição direta de matéria-prima fóssil (feedstock): ~16,3 barris/t de plástico (0,0163 barris/kg).",
				formula: ({ input_kg }) => input_kg * 0.0163,
			},
		},
		fontes: getUniqueFontes(
			[
				{
					nome: "Cuyahoga Recycles — Environment & Recycling Facts",
					citação:
						"Fatos ambientais comuns sobre reciclagem e recursos poupados.",
					url: "https://cuyahogarecycles.org/environment_recycling_facts/",
				},
			],
			[
				{
					nome: "Aluminum Association — Recycling",
					citação:
						"Benefícios energéticos e de recursos associados ao alumínio reciclado.",
					url: "https://www.aluminum.org/Recycling",
				},
			],
			[
				{
					nome: "Plastics For Change — Recycled Plastic",
					citação:
						"16,3 barris de petróleo economizados por tonelada de plástico reciclado.",
					url: "https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable",
				},
			]
		),
	},

	// 7. Areia Economizada
	[METRIC_METADATA.sandSaved_t.key]: {
		sobreFontes:
			"A economia de areia está diretamente associada à reciclagem de vidro. O vidro é produzido a partir de areia (dióxido de silício), e o uso de cacos de vidro (cullet) substitui diretamente a necessidade de extração de areia.",
		unidade_saida: Unidade.T,
		dadosPorMaterial: {
			[Material.VIDRO]: {
				descricaoFormula:
					"Economia direta de areia a partir da substituição por cullet: ~0,65 t areia/t vidro; valor agregado conservador de 0,0012 t/kg para simplificação.",
				formula: ({ input_kg }) => input_kg * 0.0012,
			},
		},
		fontes: [
			{
				nome: "GPI — Glass Recycling Facts & Benefits",
				citação:
					"~650 kg de areia poupados por t métrica de vidro reciclado.",
				url: "https://www.gpi.org/facts-about-glass-recycling",
			},
		],
	},

	// 8. Árvores Preservadas
	[METRIC_METADATA.treesSaved_units.key]: {
		sobreFontes:
			"O número de árvores preservadas é uma métrica de equivalência comum para a reciclagem de papel. É baseada na quantidade de madeira (e, por conversão, árvores de tamanho médio) necessária para produzir uma tonelada de papel virgem.",
		unidade_saida: Unidade.UN,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Valor padrão amplamente citado: ~17 árvores poupadas por tonelada (0,017 árvore/kg).",
				formula: ({ input_kg }) => input_kg * 0.017,
			},
		},
		fontes: [
			{
				nome: "MAPFRE — Reciclar papel salva árvores",
				citação: "Regra prática: ~20 árvores por tonelada de papel.",
				url: "https://www.mapfre.com/pt-br/actualidade/sustentabilidade/reciclar-papel-salva-arvores/",
			},
		],
	},

	// 9. Área Florestal Preservada
	[METRIC_METADATA.forestAreaSaved_ha_year.key]: {
		sobreFontes:
			"Esta métrica converte a quantidade de papel reciclado em uma área de floresta plantada (geralmente eucalipto) que não precisou ser colhida, com base na produtividade média por hectare por ano.",
		unidade_saida: Unidade.HA_ANO,
		dadosPorMaterial: {
			[Material.PAPEL]: {
				descricaoFormula:
					"Conversão por produtividade: ~38 m³/ha·ano de eucalipto e ~2,5 m³/t de celulose ⇒ ~15,2 t/ha·ano ⇒ 0,0658 ha·ano/t (0,000066 ha·ano/kg).",
				formula: ({ input_kg }) => input_kg * 0.000066,
			},
		},
		fontes: [
			{
				nome: "Relatório Ibá — Produtividade florestal",
				citação:
					"Produtividade média de eucalipto ~38 m³/ha·ano no Brasil.",
				url: "https://twosides.org.br/wp-content/uploads/sites/15/2023/02/relatorio-anual-iba2022-compactado.pdf",
			},
		],
	},
};
