import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ExternalLink, Info } from "lucide-react";
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

	const hasReferences = metric.references && metric.references.length > 0;
	const hasMetadata = metric.metadata;

	return (
		<Card className="w-full">
			<CardHeader className="pb-3">
				<div className="flex items-center justify-between">
					<CardTitle className="text-lg font-semibold">
						{metric.label}
					</CardTitle>
					{(hasReferences || hasMetadata) && (
						<Popover>
							<PopoverTrigger asChild>
								<button
									className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-primary"
									title="Ver informações e referências"
								>
									<Info className="h-3 w-3" />
									Info
								</button>
							</PopoverTrigger>
							<PopoverContent className="w-80" align="end">
								<div className="space-y-3">
									{hasMetadata && (
										<div>
											<h4 className="text-sm font-medium">
												{metric.metadata?.name}
											</h4>
											<p className="mt-1 text-xs text-muted-foreground">
												{metric.metadata?.description}
											</p>
										</div>
									)}
									{hasReferences && (
										<div>
											<h5 className="mb-2 text-xs font-medium">
												Fontes de Referência:
											</h5>
											<div className="space-y-2">
												{metric.references?.map(
													(ref, index) => (
														<div
															key={index}
															className="border-l-2 border-primary/20 pl-3"
														>
															<div className="text-xs font-medium">
																{ref.nome}
															</div>
															<div className="text-xs text-muted-foreground">
																{ref.citação}
															</div>
															{ref.url &&
																ref.url !==
																	"#" && (
																	<a
																		href={
																			ref.url
																		}
																		target="_blank"
																		rel="noopener noreferrer"
																		className="mt-1 inline-flex items-center gap-1 text-xs text-primary transition-colors hover:text-primary/80"
																	>
																		Ver
																		fonte
																		<ExternalLink className="h-2 w-2" />
																	</a>
																)}
														</div>
													)
												)}
											</div>
										</div>
									)}
								</div>
							</PopoverContent>
						</Popover>
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
