import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricChart } from "@/components/charts/MetricChart";
import type { EnvironmentalSavings } from "@/lib/types";

interface CardsViewProps {
	savings: EnvironmentalSavings;
}

export function CardsView({ savings }: CardsViewProps) {
	return (
		<div className="space-y-6">
			<h2 className="text-center text-2xl font-bold">
				Visualização dos Resultados
			</h2>

			<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
				{/* GHG Reduction Chart */}
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">
							{savings.ghgReduction_tCO2e.label}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<MetricChart metric={savings.ghgReduction_tCO2e} />
					</CardContent>
				</Card>

				{/* Water Savings Chart */}
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">
							{savings.waterSaved_kl.label}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<MetricChart metric={savings.waterSaved_kl} />
					</CardContent>
				</Card>

				{/* Energy Savings Chart */}
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">
							{savings.energySaved_kWh.label}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<MetricChart metric={savings.energySaved_kWh} />
					</CardContent>
				</Card>

				{/* Virgin Material Chart */}
				<Card>
					<CardHeader>
						<CardTitle className="text-lg">
							{savings.virginMaterialSaved_t.label}
						</CardTitle>
					</CardHeader>
					<CardContent>
						<MetricChart metric={savings.virginMaterialSaved_t} />
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
