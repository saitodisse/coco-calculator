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
	const savingsArray = Object.values(savings);

	return (
		<div className="space-y-6">
			<h2 className="text-center text-2xl font-bold">
				Tabela de Resultados
			</h2>
			<div className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Métrica Ambiental</TableHead>
							<TableHead className="text-right">
								Economia
							</TableHead>
							<TableHead>Equivalente</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{savingsArray.map((metric) => (
							<TableRow key={metric.label}>
								<TableCell className="font-medium">
									{metric.label}
								</TableCell>
								<TableCell className="text-right">
									{metric.value.toFixed(2)} {metric.unit}
								</TableCell>
								<TableCell>{metric.equivalent}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
