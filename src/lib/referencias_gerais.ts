/**
 * Referências gerais para os cálculos da calculadora de recicláveis
 * Baseado nas especificações do projeto e fatores de conversão documentados
 */

import { METRIC_METADATA } from "@/lib/metric-metadata";
import { FonteReferencia, Material, Unidade } from "@/lib/types";

// Tipos para as fontes de referência
export interface DadosMetrica {
	descricaoFormula: string;
	formula: ({ input_kg }: { input_kg: number }) => number;
	unidade_entrada: Unidade;
	unidade_saida: Unidade;
	sobreFontes: string;
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
			// Material Virgem Economizado
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				// Descrição da fórmula para ser exibida na UI
				descricaoFormula:
					"Rendimento médio de 85% na reciclagem de papel: cada 1 kg coletado substitui ~0,85 kg de polpa virgem (0,00085 t/kg).",

				// A fórmula em si
				formula: ({ input_kg }) => input_kg * 0.00085,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,

				// Um resumo sobre a base de dados para a UI
				sobreFontes:
					"Estudos técnicos e relatos industriais mostram perdas por degradação de fibra, remoção de finos e contaminantes. A literatura relata rendimentos entre ~70% e ~95% por ciclo; adota-se 85% como média conservadora e defensável.",

				// A lista detalhada de fontes
				fontes: [
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
					{
						nome: "RECYPULPE — Projeto de demonstração",
						citação:
							"Resíduos do desagregador (pulper) e perdas associadas ao processo de reciclagem de papel.",
						url: "https://webgate.ec.europa.eu/life/publicWebsite/project/LIFE97-ENV-F-000170/demonstration-project-for-the-recycling-of-pulp-waste-from-the-paper-recycling-industry-recypulpe",
					},
				],
			},
			// Energia Economizada
			[METRIC_METADATA.energySaved_kWh.key]: {
				descricaoFormula:
					"Média consolidada de economia de energia para papel reciclado: 3,44 kWh/kg (3.440 kWh/t), obtida a partir de valores reportados entre 2,5 e 4,1 MWh/t.",
				formula: ({ input_kg }) => input_kg * 3.44,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				sobreFontes:
					"Diferentes estudos e comunicados (WWF, EPA/indústria) variam entre ~2,5 e ~4,1 MWh por tonelada. A adoção de 3,44 MWh/t é um valor médio robusto e alinhado à literatura.",
				fontes: [
					{
						nome: "WWF Brasil — Benefícios da coleta seletiva",
						citação:
							"Faixas de consumo/ economia de energia para papel reciclado vs. virgem.",
						url: "https://www.wwf.org.br/?14001/",
					},
					{
						nome: "Recycling Today — How Much Energy is Saved by Recycling Paper?",
						citação:
							"Valores de economia reportados para a indústria de papel (até ~4.1 MWh/t).",
						url: "https://www.recyclingtoday.org/blogs/news/how-much-energy-is-saved-by-recycling-paper",
					},
					{
						nome: "Scarcelli — As Vantagens de Reciclar Papel",
						citação:
							"Referências consolidadas de economia de energia por tonelada de papel reciclado.",
						url: "https://scarcelli.com.br/as-vantagens-de-reciclar-e-reutilizar-o-papel/",
					},
				],
			},
			// Redução de Gases de Efeito Estufa
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				descricaoFormula:
					"Fator conservador de redução líquida de GEE para reciclagem de papel: 0,292 tCO2e/t (0,000292 t/kg). Baseado em fatores de ACV (WARM/EPA) e literatura técnica.",
				formula: ({ input_kg }) => input_kg * 0.000292,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"Modelos de ACV como o WARM da EPA consolidam emissões evitadas considerando ciclo de vida completo. A literatura indica valores entre ~0,26 e ~0,35 tCO2e/t; aqui adota-se um valor conservador.",
				fontes: [
					{
						nome: "EPA — WARM (Paper Products)",
						citação:
							"Fatores de emissão e metodologia para produtos de papel no WARM.",
						url: "https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Paper_Products.pdf",
					},
					{
						nome: "EPA — Basic information about WARM",
						citação:
							"Visão geral dos fatores e versões do modelo WARM.",
						url: "https://www.epa.gov/waste-reduction-model/basic-information-about-waste-reduction-model",
					},
					{
						nome: "EPA — WARM Background (v16)",
						citação:
							"Documentação técnica dos fatores e fronteiras do sistema (v16).",
						url: "https://www.epa.gov/system/files/documents/2023-12/warm_background_v16_dec.pdf",
					},
				],
			},
			// Água Economizada
			[METRIC_METADATA.waterSaved_kl.key]: {
				descricaoFormula:
					"Comparação contemporânea: ~25 m³/t (celulose virgem moderna) vs. ~2 m³/t (reciclado) ⇒ 23 kL/t (0,023 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.023,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				sobreFontes:
					"Dados industriais recentes mostram grande redução de consumo hídrico na produção de celulose virgem. A economia líquida comparando processos modernos é de ~23 kL/t.",
				fontes: [
					{
						nome: "Tratamento de Água — Setor de celulose no Brasil",
						citação:
							"Modernização reduziu consumo de 180–200 m³/t para ~25 m³/t nas fábricas de celulose.",
						url: "https://tratamentodeagua.com.br/industria-brasileira-de-papel-e-celulose-avanca-na-reducao-consumo-de-agua/",
					},
					{
						nome: "ABCustos — Fabricação de papel reciclado",
						citação:
							"Discussão de consumos e impactos do processo de papel reciclado.",
						url: "https://revista.abcustos.org.br/abcustos/article/download/28/630/2867",
					},
				],
			},
			// Petróleo Economizado
			[METRIC_METADATA.oilSaved_barrels.key]: {
				descricaoFormula:
					"Média de 7,5 barris/t (0,0075 barris/kg), a partir de estimativas de 2,5; 9,05 e 11 barris por tonelada.",
				formula: ({ input_kg }) => input_kg * 0.0075,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				sobreFontes:
					"Literatura pública e comunicados institucionais reportam ampla faixa para papel. A média pondera valores genéricos não específicos de tipo de papel.",
				fontes: [
					{
						nome: "Cuyahoga Recycles — Environment & Recycling Facts",
						citação:
							"Fatos ambientais comuns sobre reciclagem e recursos poupados.",
						url: "https://cuyahogarecycles.org/environment_recycling_facts/",
					},
					{
						nome: "Holmes County — Why Recycle?",
						citação:
							"Estimativas de galões de petróleo evitados por tonelada de papel.",
						url: "https://holmescountyrecycling.com/why-recycle/",
					},
					{
						nome: "Scarcelli — As Vantagens de Reciclar Papel",
						citação:
							"Referências usuais de petróleo economizado por tonelada.",
						url: "https://scarcelli.com.br/as-vantagens-de-reciclar-e-reutilizar-o-papel/",
					},
				],
			},
			// Árvores Preservadas
			[METRIC_METADATA.treesSaved_units.key]: {
				descricaoFormula:
					"Valor padrão amplamente citado: ~17 árvores poupadas por tonelada (0,017 árvore/kg).",
				formula: ({ input_kg }) => input_kg * 0.017,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				sobreFontes:
					"Diferentes fontes (campanhas, órgãos públicos e estudos) convergem para ~17–20 árvores/t como referência de comunicação ao público.",
				fontes: [
					{
						nome: "MAPFRE — Reciclar papel salva árvores",
						citação:
							"Regra prática: ~20 árvores por tonelada de papel.",
						url: "https://www.mapfre.com/pt-br/actualidade/sustentabilidade/reciclar-papel-salva-arvores/",
					},
					{
						nome: "Cuyahoga Recycles — Environment & Recycling Facts",
						citação:
							"Valores de referência de árvores poupadas por tonelada.",
						url: "https://cuyahogarecycles.org/environment_recycling_facts/",
					},
					{
						nome: "WR Sustentabilidade — Por que reciclar?",
						citação:
							"Faixas reportadas de árvores poupadas por tonelada.",
						url: "https://www.wrsustentabilidade.com.br/por-que-reciclar",
					},
				],
			},
			// Área Florestal Preservada
			[METRIC_METADATA.forestAreaSaved_ha_year.key]: {
				descricaoFormula:
					"Conversão por produtividade: ~38 m³/ha·ano de eucalipto e ~2,5 m³/t de celulose ⇒ ~15,2 t/ha·ano ⇒ 0,0658 ha·ano/t (0,000066 ha·ano/kg).",
				formula: ({ input_kg }) => input_kg * 0.000066,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN, // ha.ano is not a unit yet
				sobreFontes:
					"Baseado em produtividade florestal média (Ibá) e fator de conversão de madeira para celulose. Valor arredondado para implementação prática.",
				fontes: [
					{
						nome: "Relatório Ibá — Produtividade florestal",
						citação:
							"Produtividade média de eucalipto ~38 m³/ha·ano no Brasil.",
						url: "https://twosides.org.br/wp-content/uploads/sites/15/2023/02/relatorio-anual-iba2022-compactado.pdf",
					},
					{
						nome: "Embrapa — Densidade de plantio de eucalipto",
						citação:
							"Dados silviculturais de densidade e crescimento (contexto do cálculo).",
						url: "https://www.alice.cnptia.embrapa.br/alice/bitstream/doc/1150345/1/Crescimento-forma-eucalipto-2022.pdf",
					},
				],
			},
		},
	},
	aluminio: {
		resumo: "A reciclagem de alumínio economiza grandes quantidades de energia e minério de bauxita.",
		dados: {
			// Material Virgem Economizado
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				descricaoFormula:
					"Substituição massa-a-massa: 1 kg de alumínio reciclado substitui 1 kg virgem (1 t/t).",
				formula: ({ input_kg }) => input_kg / 1000,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"O alumínio pode ser reciclado indefinidamente sem perda de propriedades, permitindo substituição direta de massa entre reciclado e primário.",
				fontes: [
					{
						nome: "Aluminum Association — Recycling",
						citação:
							"Reciclabilidade do alumínio e equivalência massa-a-massa.",
						url: "https://www.aluminum.org/Recycling",
					},
				],
			},
			// Energia Economizada
			[METRIC_METADATA.energySaved_kWh.key]: {
				descricaoFormula:
					"Economia absoluta média: 14 kWh/kg (14.000 kWh/t) ao reciclar alumínio vs. produzir primário.",
				formula: ({ input_kg }) => input_kg * 14.0,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				sobreFontes:
					"Há consenso de ~95% de economia energética. Fontes reportam 14.000–16.850 kWh/t; adota-se 14.000 kWh/t como valor padrão robusto.",
				fontes: [
					{
						nome: "WWF / EPA / indústria — economia de ~95%",
						citação:
							"Síntese de valores absolutos e percentuais para reciclagem de alumínio.",
						url: "https://westcoastclimateforum.com/content/us-epas-warm-tool",
					},
					{
						nome: "Aluminum Association — Recycling",
						citação: "Contexto setorial de energia e reciclagem.",
						url: "https://www.aluminum.org/Recycling",
					},
				],
			},
			// Redução de Gases de Efeito Estufa
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				descricaoFormula:
					"Redução líquida estimada de GEE: 9,183 kg CO2e/kg (0,009183 tCO2e/kg), alinhada a fatores de ACV setoriais.",
				formula: ({ input_kg }) => input_kg * 0.009183,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"A drástica redução de energia na reciclagem reduz emissões associadas à geração elétrica e ao processo primário. Valores próximos a 9–12 kg CO2e/kg são reportados.",
				fontes: [
					{
						nome: "ResearchGate — Aluminum recycling benefits",
						citação:
							"Comparação primário vs. reciclado para energia e GEE (ordem de grandeza).",
						url: "https://www.researchgate.net/publication/290929754_Aluminum_recycling_Economic_and_environmental_benefits",
					},
					{
						nome: "Alupro — Environmental benefits",
						citação:
							"9 t CO2e evitadas por tonelada (ordem de grandeza).",
						url: "https://alupro.org.uk/industry/local-authorities/environmental-benefits/",
					},
				],
			},
			// Água Economizada
			[METRIC_METADATA.waterSaved_kl.key]: {
				descricaoFormula:
					"Economia estimada de água doce no ciclo primário evitado: 3,99 kL/t (0,00399 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.00399,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				sobreFontes:
					"Soma de consumos no processo Bayer e de fundição para alumínio primário, com ~95% de economia aplicada ao optar pela reciclagem.",
				fontes: [
					{
						nome: "WasteTrade — Conserves Water",
						citação:
							"Estimativas de economia hídrica em reciclagem de metais (ordem de grandeza).",
						url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
					},
					{
						nome: "TMS Scrap Metals — Water conservation in metal recycling",
						citação:
							"Contexto sobre uso de água em reciclagem de metais.",
						url: "https://www.tmscrapmetals.com/why-water-conservation-in-metal-recycling-is-critical-for-the-planet/",
					},
				],
			},
			// Petróleo Economizado
			[METRIC_METADATA.oilSaved_barrels.key]: {
				descricaoFormula:
					"Equivalência setorial frequentemente citada: ~40 barris de petróleo por tonelada de alumínio reciclado (0,04 barris/kg).",
				formula: ({ input_kg }) => input_kg * 0.04,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				sobreFontes:
					"Valor recorrente em materiais de comunicação técnica e institucional, alinhado à grande economia energética do alumínio reciclado.",
				fontes: [
					{
						nome: "Aluminum Association — Recycling",
						citação:
							"Benefícios energéticos e de recursos associados ao alumínio reciclado.",
						url: "https://www.aluminum.org/Recycling",
					},
					{
						nome: "EPA — Recycling Basics and Benefits",
						citação:
							"Contexto geral de benefícios de reciclagem (energia/recursos).",
						url: "https://www.epa.gov/recycle/recycling-basics-and-benefits",
					},
				],
			},
			// Bauxita Economizada
			[METRIC_METADATA.bauxiteSaved_t.key]: {
				descricaoFormula:
					"Relação típica de cadeia: ~4 t de bauxita evitadas por 1 t de alumínio reciclado ⇒ 0,004 t/kg.",
				formula: ({ input_kg }) => input_kg * 0.004,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"A literatura e associações (Alupro e outras) citam 1:4 como relação amplamente aceita entre alumínio e bauxita.",
				fontes: [
					{
						nome: "Alupro — Environmental benefits",
						citação:
							"1 t de alumínio ⇒ ~4 t de bauxita economizadas (ordem de grandeza).",
						url: "https://alupro.org.uk/industry/local-authorities/environmental-benefits/",
					},
					{
						nome: "ABAL — Cadeia primária",
						citação:
							"Contexto brasileiro da cadeia de alumínio e minérios associados.",
						url: "http://abal.org.br/aluminio/cadeia-primaria/",
					},
				],
			},
		},
	},
	plastico: {
		resumo: "A reciclagem de plástico economiza principalmente petróleo e energia.",
		dados: {
			// Material Virgem Economizado
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				descricaoFormula:
					"Fator de substituição conservador (downcycling e perdas): ~0,90 t de resina virgem evitada por t reciclada (0,0009 t/kg).",
				formula: ({ input_kg }) => input_kg * 0.0009,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"A reciclagem mecânica causa degradação de polímero e perdas no processo, impedindo substituição 1:1. Estudos técnicos recomendam fatores <100%.",
				fontes: [
					{
						nome: "CORE — Processabilidade de PET reciclado",
						citação:
							"Degradação térmica/mecânica e perdas de propriedades no PET reciclado.",
						url: "https://core.ac.uk/download/pdf/322932866.pdf",
					},
					{
						nome: "Mundo do Plástico — Resina virgem x reciclada",
						citação:
							"Limitações de uso e downcycling em polímeros comuns.",
						url: "https://mundodoplastico.plasticobrasil.com.br/artigos/resina-virgem-x-resina-reciclada-como-escolher/",
					},
				],
			},
			// Energia Economizada
			[METRIC_METADATA.energySaved_kWh.key]: {
				descricaoFormula:
					"Fator absoluto consolidado para plásticos (ordem de grandeza PET): 5.774 kWh/t ⇒ 0,005774 kWh/kg.",
				formula: ({ input_kg }) => input_kg * 0.005774,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				sobreFontes:
					"Diversas fontes citam economia absoluta por tonelada de plástico; utiliza-se 5.774 kWh/t, frequentemente referenciado para PET e reciclagem mecânica.",
				fontes: [
					{
						nome: "Plastics For Change — Recycled Plastic",
						citação:
							"5.774 kWh de energia economizados por tonelada de plástico reciclado.",
						url: "https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable",
					},
					{
						nome: "EPA — Environmental Factoids",
						citação:
							"Fatos ambientais sobre economias de energia na reciclagem de plásticos.",
						url: "https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html",
					},
				],
			},
			// Redução de Gases de Efeito Estufa
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				descricaoFormula:
					"Redução líquida típica para plásticos (ordem de grandeza ACV): 1,5 kg CO2e/kg ⇒ 0,0015 tCO2e/kg.",
				formula: ({ input_kg }) => input_kg * 0.0015,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"Modelos de ACV e relatórios consolidados indicam reduções líquidas na faixa de ~1–1,5 kg CO2e/kg para plásticos comuns, variando por resina e matriz energética.",
				fontes: [
					{
						nome: "EPA — WARM (Plastics)",
						citação:
							"Fatores de GEE por resina e gestão de fim de vida (v15/v16).",
						url: "https://archive.epa.gov/epawaste/conserve/tools/warm/pdfs/Plastics.pdf",
					},
				],
			},
			// Água Economizada
			[METRIC_METADATA.waterSaved_kl.key]: {
				descricaoFormula:
					"Economia de processo estimada para reciclagem de plásticos: ~5,7 kL/t (0,0057 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.0057,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				sobreFontes:
					"Valores absolutos reportados para lavagem/reprocesso de flocos em reciclagem mecânica (ordem de grandeza), preferíveis para comunicação transparente de processo.",
				fontes: [
					{
						nome: "WasteTrade — Conserves Water",
						citação:
							"Economia de água de ~5,7 m³/t para reciclagem de plástico.",
						url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
					},
				],
			},
			// Petróleo Economizado
			[METRIC_METADATA.oilSaved_barrels.key]: {
				descricaoFormula:
					"Substituição direta de matéria-prima fóssil (feedstock): ~16,3 barris/t de plástico (0,0163 barris/kg).",
				formula: ({ input_kg }) => input_kg * 0.0163,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.UN,
				sobreFontes:
					"Fator frequentemente citado em materiais de referência pública e técnica para reciclagem de plásticos, especialmente PET.",
				fontes: [
					{
						nome: "Plastics For Change — Recycled Plastic",
						citação:
							"16,3 barris de petróleo economizados por tonelada de plástico reciclado.",
						url: "https://www.plasticsforchange.org/blog/why-is-recycled-plastic-sustainable",
					},
					{
						nome: "Less Is More — Why Recycle?",
						citação:
							"Referência pública com fatores de petróleo economizado.",
						url: "https://lessismore.org/materials/28-why-recycle/",
					},
				],
			},
		},
	},
	vidro: {
		resumo: "A reciclagem de vidro economiza areia e energia.",
		dados: {
			// Material Virgem Economizado
			[METRIC_METADATA.virginMaterialSaved_t.key]: {
				descricaoFormula:
					"Substituição direta de matérias-primas por cullet: ~1,0–1,2 kg de matéria virgem evitada por kg de vidro reciclado ⇒ 0,0012 t/kg (conservador).",
				formula: ({ input_kg }) => input_kg * 0.0012,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"O uso de cullet substitui areia, barrilha e calcário. Dados setoriais (GPI) mostram >1 t de insumos poupados por t de cullet.",
				fontes: [
					{
						nome: "GPI — Glass Recycling Facts & Benefits",
						citação:
							"Economias de 1.300 lb areia, 410 lb barrilha e 380 lb calcário por t curta de cullet.",
						url: "https://www.gpi.org/facts-about-glass-recycling",
					},
				],
			},
			// Energia Economizada
			[METRIC_METADATA.energySaved_kWh.key]: {
				descricaoFormula:
					"Economia absoluta conservadora aplicando ~30% sobre 4.830 kWh/t (virgem) ⇒ 1.449 kWh/t ⇒ 1,449 kWh/kg.",
				formula: ({ input_kg }) => input_kg * 1.449,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KWH,
				sobreFontes:
					"Estudos de ACV e comunicados setoriais variam de ~13% a ~70% de economia. Adota-se 30% sobre linha de base de 4.830 kWh/t (estudo brasileiro).",
				fontes: [
					{
						nome: "Lactec — Reciclagem de resíduos de vidro (dissertação)",
						citação:
							"Consumos de 4,83 vs. 4,19 MWh/t e discussão de economias.",
						url: "https://mestrado.lactec.com.br/wp-content/uploads/2021/09/040_PT.pdf",
					},
					{
						nome: "GreenMatch — Glass vs Aluminium",
						citação:
							"Faixas percentuais de economia de energia reportadas para vidro.",
						url: "https://www.greenmatch.co.uk/glass-vs-aluminium",
					},
				],
			},
			// Redução de Gases de Efeito Estufa
			[METRIC_METADATA.ghgReduction_tCO2e.key]: {
				descricaoFormula:
					"Redução líquida conservadora: 0,121 kg CO2e/kg (0,000121 t/kg), refletindo menor queima de combustível e emissões de processo evitadas.",
				formula: ({ input_kg }) => input_kg * 0.000121,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"Associações e estudos indicam reduções na faixa de 0,167–0,25 t CO2e/t; adota-se valor conservador compatível com a literatura internacional.",
				fontes: [
					{
						nome: "GPI — Facts & Benefits",
						citação:
							"~1 t de CO2 para cada 6 t de vidro reciclado (≈0,167 t/t).",
						url: "https://www.gpi.org/facts-about-glass-recycling",
					},
					{
						nome: "Abividro (via Observatório 3º Setor)",
						citação:
							"100 mil t CO2 evitadas para 400 mil t de vidro (0,25 t/t).",
						url: "https://observatorio3setor.org.br/vidro-reciclado-no-brasil-reduz-em-ate-100-mil-toneladas-as-emissoes-de-co2/",
					},
				],
			},
			// Água Economizada
			[METRIC_METADATA.waterSaved_kl.key]: {
				descricaoFormula:
					"Economia de água na manufatura (resfriamento/ lavagens): ~1,3 kL/t (0,0013 kL/kg).",
				formula: ({ input_kg }) => input_kg * 0.0013,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KL,
				sobreFontes:
					"Consumo típico ~2,6 m³/t para vidro float; economia de ~50% com uso de cullet, alinhando ao valor absoluto de 1,3 m³/t.",
				fontes: [
					{
						nome: "NSG Group — Water",
						citação: "Consumo de água em vidro float (~2,6 m³/t).",
						url: "https://www.nsg.com/en/sustainability/environment/natural-capital/water",
					},
					{
						nome: "WasteTrade — Conserves Water",
						citação:
							"Economia de até 50% de água com uso de cullet (≈1,3 m³/t).",
						url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
					},
				],
			},
			// Areia Economizada
			[METRIC_METADATA.sandSaved_t.key]: {
				descricaoFormula:
					"Economia direta de areia a partir da substituição por cullet: ~0,65 t areia/t vidro; valor agregado conservador de 0,0012 t/kg para simplificação.",
				formula: ({ input_kg }) => input_kg * 0.0012,
				unidade_entrada: Unidade.KG,
				unidade_saida: Unidade.KG,
				sobreFontes:
					"Dados do GPI quantificam insumos poupados por tonelada de cullet; a areia é o principal componente substituído.",
				fontes: [
					{
						nome: "GPI — Glass Recycling Facts & Benefits",
						citação:
							"~650 kg de areia poupados por t métrica de vidro reciclado.",
						url: "https://www.gpi.org/facts-about-glass-recycling",
					},
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
		// Energia para uma casa (dias)
		[METRIC_METADATA.equiv_home_energy_days.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 0.688,
			fontes: [
				{
					nome: "Constellation — Average home power usage",
					citação:
						"Consumo médio diário de uma residência (~30 kWh/dia) usado para equivalência.",
					url: "https://www.constellation.com/energy-101/energy-education/average-home-power-usage.html",
				},
				{
					nome: "EPA — Energy Factoids",
					citação:
						"Fatos e ordens de grandeza de consumo/ economia de energia.",
					url: "https://archive.epa.gov/epawaste/conserve/smm/wastewise/web/html/factoid.html",
				},
			],
		},
		// Banhos de 10 minutos (un.)
		[METRIC_METADATA.equiv_showers.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 0.255,
			fontes: [
				{
					nome: "WasteTrade — Water and recycling",
					citação:
						"Ordens de grandeza de consumo de água e economias na reciclagem.",
					url: "https://www.wastetrade.com/resources/environmental/how-effective-recycling-conserves-water-and-reduces-waste/",
				},
			],
		},
		// Km de carro a gasolina evitados (km)
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 2.43,
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
	aluminio: {
		// Km em carro elétrico (km)
		[METRIC_METADATA.equiv_ev_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 82.35,
			fontes: [
				{
					nome: "EPA / EIA — Consumo médio EV",
					citação:
						"Ordens de grandeza de consumo específico de EV (kWh/100 km).",
					url: "https://www.eia.gov/todayinenergy/detail.php?id=56780",
				},
			],
		},
		// Km de carro a gasolina evitados (km)
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 76.5,
			fontes: [
				{
					nome: "EPA — Passenger Vehicle Emissions",
					citação: "Fator médio de emissões por km.",
					url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
				},
			],
		},
	},
	plastico: {
		// Km de carro a gasolina evitados (km)
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 12.5,
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
	vidro: {
		// Cargas de bateria de celular (un.)
		[METRIC_METADATA.equiv_phone_charges.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 97,
			fontes: [
				{
					nome: "EnergySage — Watts de um carregador",
					citação:
						"Estimativa de Wh por carga completa de smartphone (10–20 Wh).",
					url: "https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/",
				},
			],
		},
		// Km de carro a gasolina evitados (km)
		[METRIC_METADATA.equiv_gas_car_km.key]: {
			formula: ({ input_kg }: { input_kg: number }) => input_kg * 1.0,
			fontes: [
				{
					nome: "EPA — Passenger Vehicle Emissions",
					citação: "Fator médio de emissões por km.",
					url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
				},
			],
		},
	},
};

// Os tipos já estão exportados acima nas declarações das interfaces
