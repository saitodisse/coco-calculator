import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { ChartableMetric } from "@/lib/types";

interface MetricCardProps {
	metric: ChartableMetric;
}

export function MetricCard({ metric }: MetricCardProps) {
	const formatValue = (value: number, unit: string): string => {
		if (value === 0) return "0";

		if (value < 0.001) {
			return `${value.toExponential(2)} ${unit}`;
		} else if (value < 1) {
			return `${value.toFixed(3)} ${unit}`;
		} else if (value < 10) {
			return `${value.toFixed(2)} ${unit}`;
		} else if (value < 100) {
			return `${value.toFixed(1)} ${unit}`;
		} else {
			return `${Math.round(value)} ${unit}`;
		}
	};

	const scrollToReferences = () => {
		const referencesSection = document.getElementById("referencias");
		if (referencesSection) {
			referencesSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<Card className="w-full">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-lg font-semibold">
						{metric.label}
					</CardTitle>
					{metric.references && metric.references.length > 0 && (
						<button
							onClick={scrollToReferences}
							className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
							title="Ver referências"
						>
							Referências
							<ExternalLink className="h-3 w-3" />
						</button>
					)}
				</div>
			</CardHeader>
			<CardContent>
				<div className="space-y-3">
					<div className="text-2xl font-bold text-primary">
						{formatValue(metric.total, metric.unit)}
					</div>

					{metric.total > 0 && (
						<div className="space-y-1">
							<div className="text-sm font-medium text-muted-foreground">
								Contribuição por material:
							</div>
							<div className="space-y-1">
								{metric.sources
									?.filter((source) => source.value > 0)
									.map((source) => (
										<div
											key={source.material}
											className="flex justify-between text-sm"
										>
											<span className="text-muted-foreground">
												{source.material}:
											</span>
											<span className="font-medium">
												{formatValue(
													source.value,
													metric.unit
												)}{" "}
												({source.percentage.toFixed(1)}
												%)
											</span>
										</div>
									))}
							</div>
						</div>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
