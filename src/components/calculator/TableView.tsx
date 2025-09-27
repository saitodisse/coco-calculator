import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import type { EnvironmentalSavings } from "@/lib/types";

interface TableViewProps {
	savings: EnvironmentalSavings;
}

export function TableView({ savings }: TableViewProps) {
	// Extract chartable metrics
	const chartableMetrics = [
		savings.virginMaterialSaved_t,
		savings.energySaved_kWh,
		savings.ghgReduction_tCO2e,
		savings.waterSaved_kl,
		savings.bauxiteSaved_t,
		savings.oilSaved_barrels,
		savings.sandSaved_t,
		savings.treesSaved_units,
		savings.forestAreaSaved_ha_year,
	];

	// Extract equivalent metrics
	const equivalentMetrics = [
		{
			label: "Energia para uma casa",
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

	return (
		<div className="space-y-6">
			<h2 className="text-center text-2xl font-bold">
				Tabela de Resultados
			</h2>

			{/* Environmental Metrics Table */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Métrica Ambiental</TableHead>
							<TableHead className="text-right">
								Economia Total
							</TableHead>
							<TableHead className="text-right">
								Unidade
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{chartableMetrics.map((metric) => (
							<TableRow key={metric.label}>
								<TableCell className="font-medium">
									{metric.label}
								</TableCell>
								<TableCell className="text-right">
									{metric.total.toFixed(3)}
								</TableCell>
								<TableCell className="text-right">
									{metric.unit}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			{/* Equivalent Metrics Table */}
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Equivalência Prática</TableHead>
							<TableHead className="text-right">Valor</TableHead>
							<TableHead className="text-right">
								Unidade
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{equivalentMetrics.map((metric) => (
							<TableRow key={metric.label}>
								<TableCell className="font-medium">
									{metric.label}
								</TableCell>
								<TableCell className="text-right">
									{typeof metric.value === "number"
										? metric.value.toFixed(0)
										: "0"}
								</TableCell>
								<TableCell className="text-right">
									{metric.unit}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
