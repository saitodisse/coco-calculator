import type { EnvironmentalSavings } from "@/lib/types";
import { MetricCard } from "./MetricCard";
import { getPrimaryMetrics, getEquivalentMetrics } from "@/lib/metric-metadata";

interface DashboardViewProps {
	savings: EnvironmentalSavings;
}

export function DashboardView({ savings }: DashboardViewProps) {
	const primaryMetrics = getPrimaryMetrics();
	const equivalentMetrics = getEquivalentMetrics();

	return (
		<div className="space-y-8">
			{/* Seção de Métricas Primárias */}
			<div>
				<h2 className="mb-4 text-center text-2xl font-bold">
					Impactos Ambientais Primários
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{Object.entries(primaryMetrics).map(([key, metadata]) => (
						<MetricCard
							key={key}
							metric={
								savings[key as keyof typeof savings] as {
									label: string;
									total: number;
									unit: string;
									sources: any[];
									metadata?: any;
									references?: any[];
								}
							}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
