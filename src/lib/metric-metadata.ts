/**
 * Metadados das métricas ambientais
 * Contém nomes e descrições para cada métrica calculada
 */

export interface MetricMetadata {
	/** Chave única da métrica para identificação */
	key: string;
	/** Nome amigável da métrica para exibição */
	name: string;
	/** Descrição detalhada do que a métrica representa */
	description: string;
	/** Unidade de medida da métrica */
	unit: string;
	/** Categoria da métrica para organização */
	category: "primary" | "equivalent" | "financial";
	/** Se a métrica é equivalente (comparação com atividades cotidianas) */
	isEquivalent?: boolean;
}

/**
 * Mapeamento de metadados para todas as métricas ambientais
 */
export const METRIC_METADATA: Record<string, MetricMetadata> = {
	// Métricas Primárias (Chartable)
	virginMaterialSaved_t: {
		key: "virginMaterialSaved_t",
		name: "Material Virgem Economizado",
		description:
			"Quantidade de matéria-prima virgem que foi evitada através da reciclagem",
		unit: "t",
		category: "primary",
	},
	energySaved_kWh: {
		key: "energySaved_kWh",
		name: "Energia Economizada",
		description:
			"Energia elétrica poupada no processo de produção devido à reciclagem",
		unit: "kWh",
		category: "primary",
	},
	ghgReduction_tCO2e: {
		key: "ghgReduction_tCO2e",
		name: "Redução de Gases de Efeito Estufa",
		description:
			"Redução de emissões de gases de efeito estufa em equivalente de CO2",
		unit: "tCO2e",
		category: "primary",
	},
	waterSaved_kl: {
		key: "waterSaved_kl",
		name: "Água Economizada",
		description:
			"Volume de água poupada no processo de produção através da reciclagem",
		unit: "kl",
		category: "primary",
	},
	bauxiteSaved_t: {
		key: "bauxiteSaved_t",
		name: "Bauxita Economizada",
		description:
			"Quantidade de bauxita (minério de alumínio) que foi preservada",
		unit: "t",
		category: "primary",
	},
	oilSaved_barrels: {
		key: "oilSaved_barrels",
		name: "Petróleo Economizado",
		description:
			"Quantidade de petróleo que foi preservada através da reciclagem",
		unit: "barris",
		category: "primary",
	},
	sandSaved_t: {
		key: "sandSaved_t",
		name: "Areia Economizada",
		description:
			"Quantidade de areia que foi preservada através da reciclagem",
		unit: "t",
		category: "primary",
	},
	treesSaved_units: {
		key: "treesSaved_units",
		name: "Árvores Preservadas",
		description:
			"Número de árvores que foram preservadas através da reciclagem",
		unit: "unidades",
		category: "primary",
	},
	forestAreaSaved_ha_year: {
		key: "forestAreaSaved_ha_year",
		name: "Área Florestal Preservada",
		description:
			"Área de floresta que foi preservada anualmente através da reciclagem",
		unit: "ha/ano",
		category: "primary",
	},

	// Métricas de Equivalência (Equivalent)
	equiv_home_energy_days: {
		key: "equiv_home_energy_days",
		name: "Dias de Energia Residencial",
		description:
			"Quantos dias uma casa poderia ser abastecida com a energia economizada",
		unit: "dias",
		category: "equivalent",
		isEquivalent: true,
	},
	equiv_ev_km: {
		key: "equiv_ev_km",
		name: "Quilômetros em Carro Elétrico",
		description:
			"Distância que um carro elétrico poderia percorrer com a energia economizada",
		unit: "km",
		category: "equivalent",
		isEquivalent: true,
	},
	equiv_phone_charges: {
		key: "equiv_phone_charges",
		name: "Cargas de Celular",
		description:
			"Quantas vezes um celular poderia ser carregado com a energia economizada",
		unit: "cargas",
		category: "equivalent",
		isEquivalent: true,
	},
	equiv_showers: {
		key: "equiv_showers",
		name: "Banhos de 10 Minutos",
		description:
			"Quantos banhos de 10 minutos seriam possíveis com a água economizada",
		unit: "banhos",
		category: "equivalent",
		isEquivalent: true,
	},
	equiv_gas_car_km: {
		key: "equiv_gas_car_km",
		name: "Km de Carro a Gasolina Evitados",
		description:
			"Distância equivalente de emissões evitadas comparada a um carro a gasolina",
		unit: "km",
		category: "equivalent",
		isEquivalent: true,
	},

	// Métricas Financeiras (Financial)
	energySavings_BRL: {
		key: "energySavings_BRL",
		name: "Economia de Energia (R$)",
		description: "Valor monetário da energia economizada",
		unit: "R$",
		category: "financial",
	},
	carbonCredits_BRL: {
		key: "carbonCredits_BRL",
		name: "Créditos de Carbono (R$)",
		description: "Valor dos créditos de carbono baseado na redução de GEE",
		unit: "R$",
		category: "financial",
	},
	waterSavings_BRL: {
		key: "waterSavings_BRL",
		name: "Economia de Água (R$)",
		description: "Valor monetário da água economizada",
		unit: "R$",
		category: "financial",
	},
	bauxiteSavings_BRL: {
		key: "bauxiteSavings_BRL",
		name: "Economia de Bauxita (R$)",
		description: "Valor monetário da bauxita economizada",
		unit: "R$",
		category: "financial",
	},
	oilSavings_BRL: {
		key: "oilSavings_BRL",
		name: "Economia de Petróleo (R$)",
		description: "Valor monetário do petróleo economizado",
		unit: "R$",
		category: "financial",
	},
	sandSavings_BRL: {
		key: "sandSavings_BRL",
		name: "Economia de Areia (R$)",
		description: "Valor monetário da areia economizada",
		unit: "R$",
		category: "financial",
	},
	landfillCostSavings_BRL: {
		key: "landfillCostSavings_BRL",
		name: "Economia de Custos de Aterro (R$)",
		description: "Custos evitados com aterramento de resíduos",
		unit: "R$",
		category: "financial",
	},
};

/**
 * Função utilitária para obter metadados de uma métrica
 */
export function getMetricMetadata(
	metricKey: string
): MetricMetadata | undefined {
	return METRIC_METADATA[metricKey];
}

/**
 * Função para obter todas as métricas de uma categoria específica
 */
export function getMetricsByCategory(
	category: MetricMetadata["category"]
): Record<string, MetricMetadata> {
	return Object.fromEntries(
		Object.entries(METRIC_METADATA).filter(
			([_, metadata]) => metadata.category === category
		)
	);
}

/**
 * Função para obter métricas primárias (chartable)
 */
export function getPrimaryMetrics(): Record<string, MetricMetadata> {
	return getMetricsByCategory("primary");
}

/**
 * Função para obter métricas de equivalência
 */
export function getEquivalentMetrics(): Record<string, MetricMetadata> {
	return getMetricsByCategory("equivalent");
}

/**
 * Função para obter métricas financeiras
 */
export function getFinancialMetrics(): Record<string, MetricMetadata> {
	return getMetricsByCategory("financial");
}
