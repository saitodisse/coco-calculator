import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { EnvironmentalSavings, FonteReferencia } from "@/lib/types";

interface ReferencesSectionProps {
	savings: EnvironmentalSavings;
}

export function ReferencesSection({ savings }: ReferencesSectionProps) {
	// Coletar todas as referências únicas de todas as métricas
	const allReferences = new Map<string, FonteReferencia>();

	// Função para adicionar referências de uma métrica
	const addReferences = (references?: FonteReferencia[]) => {
		if (references) {
			references.forEach((ref) => {
				if (!allReferences.has(ref.url)) {
					allReferences.set(ref.url, ref);
				}
			});
		}
	};

	// Coletar referências de todas as métricas primárias
	addReferences(savings.virginMaterialSaved_t.references);
	addReferences(savings.energySaved_kWh.references);
	addReferences(savings.ghgReduction_tCO2e.references);
	addReferences(savings.waterSaved_kl.references);
	addReferences(savings.bauxiteSaved_t.references);
	addReferences(savings.oilSaved_barrels.references);
	addReferences(savings.sandSaved_t.references);
	addReferences(savings.treesSaved_units.references);
	addReferences(savings.forestAreaSaved_ha_year.references);

	const references = Array.from(allReferences.values());

	if (references.length === 0) {
		return null;
	}

	return (
		<Card id="referencias" className="w-full">
			<CardHeader>
				<CardTitle className="text-xl font-semibold">
					Referências e Fontes
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<p className="text-sm text-muted-foreground">
						Os cálculos desta calculadora são baseados em estudos
						científicos e dados de organizações reconhecidas. Abaixo
						estão as fontes utilizadas para cada métrica calculada:
					</p>
					<div className="space-y-3">
						{references.map((ref, index) => (
							<div
								key={index}
								className="border-l-2 border-primary/20 pl-4"
							>
								<div className="space-y-1">
									<div className="text-sm font-medium">
										{ref.nome}
									</div>
									<div className="text-sm text-muted-foreground">
										{ref.citação}
									</div>
									{ref.url && ref.url !== "#" && (
										<a
											href={ref.url}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1 text-sm text-primary transition-colors hover:text-primary/80"
										>
											Ver fonte
											<ExternalLink className="h-3 w-3" />
										</a>
									)}
								</div>
							</div>
						))}
					</div>
					<div className="border-t pt-4 text-xs text-muted-foreground">
						<p>
							<strong>Nota:</strong> Os valores calculados são
							aproximados e baseados em médias de estudos de ciclo
							de vida. Os resultados podem variar conforme a
							região, processo de reciclagem e outros fatores
							específicos.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
