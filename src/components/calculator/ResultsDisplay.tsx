import { MetricCard } from "./MetricCard";
import type { EnvironmentalSavings } from "@/lib/types";

interface ResultsDisplayProps {
	savings: EnvironmentalSavings;
}

export function ResultsDisplay({ savings }: ResultsDisplayProps) {
	const chartableMetrics = [
		{
			key: "ghgReduction_tCO2e" as const,
			metric: savings.ghgReduction_tCO2e,
		},
		{ key: "waterSaved_kl" as const, metric: savings.waterSaved_kl },
		{ key: "energySaved_kWh" as const, metric: savings.energySaved_kWh },
		{
			key: "virginMaterialSaved_t" as const,
			metric: savings.virginMaterialSaved_t,
		},
		{ key: "bauxiteSaved_t" as const, metric: savings.bauxiteSaved_t },
		{ key: "oilSaved_barrels" as const, metric: savings.oilSaved_barrels },
		{ key: "sandSaved_t" as const, metric: savings.sandSaved_t },
		{ key: "treesSaved_units" as const, metric: savings.treesSaved_units },
		{
			key: "forestAreaSaved_ha_year" as const,
			metric: savings.forestAreaSaved_ha_year,
		},
	];

	const equivalentMetrics = [
		{
			label: "Energia para uma casa (dias)",
			value: savings.equiv_home_energy_days,
			unit: "dias",
		},
		{
			label: "Km de carro elétrico",
			value: savings.equiv_ev_km,
			unit: "km",
		},
		{
			label: "Carregamentos de celular",
			value: savings.equiv_phone_charges,
			unit: "carregamentos",
		},
		{
			label: "Banhos de 10 minutos",
			value: savings.equiv_showers,
			unit: "banhos",
		},
		{
			label: "Km de carro a gasolina evitados",
			value: savings.equiv_gas_car_km,
			unit: "km",
		},
	];

	const formatEquivalentValue = (value: number, unit: string): string => {
		if (value === 0) return "0";

		if (value < 1) {
			return `${value.toFixed(2)} ${unit}`;
		} else if (value < 10) {
			return `${value.toFixed(1)} ${unit}`;
		} else {
			return `${Math.round(value)} ${unit}`;
		}
	};

	return (
		<div className="space-y-8">
			{/* Primary Metrics */}
			<div>
				<h2 className="mb-6 text-center text-2xl font-bold">
					Impacto Ambiental Calculado
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{chartableMetrics.map(({ key, metric }) => (
						<MetricCard key={key} metric={metric} />
					))}
				</div>
			</div>

			{/* Equivalent Metrics */}
			<div>
				<h2 className="mb-6 text-center text-2xl font-bold">
					Equivalências Práticas
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{equivalentMetrics.map(({ label, value, unit }) => (
						<div key={label} className="rounded-lg bg-muted/50 p-4">
							<div className="mb-1 text-sm font-medium text-muted-foreground">
								{label}
							</div>
							<div className="text-xl font-bold text-primary">
								{formatEquivalentValue(value, unit)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
