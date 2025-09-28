import { InputForm } from "@/components/calculator/InputForm";
import { MetricChart } from "@/components/charts/MetricChart";
import { useRecyclingCalculator } from "@/hooks/useRecyclingCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { LayoutDashboard, CreditCard, Table } from "lucide-react";
import { useQueryState, parseAsStringLiteral } from "nuqs";
import type { ViewMode } from "@/lib/types";
import { CardsView } from "@/components/calculator/CardsView";
import { DashboardView } from "@/components/calculator/DashboardView";
import { TableView } from "@/components/calculator/TableView";

const viewModes = ["dashboard", "cards", "table"] as const;

export function CalculatorPage() {
	const { inputs, savings, updateInput } = useRecyclingCalculator();
	const [viewMode, setViewMode] = useQueryState(
		"view",
		parseAsStringLiteral(viewModes).withDefault("dashboard")
	);

	return (
		<div className="min-h-screen bg-background">
			<div className="container mx-auto space-y-8 px-4 py-8">
				{/* Header */}
				<header className="flex items-center justify-between">
					<div />
					<div className="flex items-center gap-4">
						<ToggleGroup
							type="single"
							value={viewMode}
							onValueChange={(value) => {
								if (value) setViewMode(value as ViewMode);
							}}
							aria-label="View mode"
						>
							<ToggleGroupItem
								value="dashboard"
								aria-label="Dashboard view"
							>
								<LayoutDashboard className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem
								value="cards"
								aria-label="Cards view"
							>
								<CreditCard className="h-4 w-4" />
							</ToggleGroupItem>
							<ToggleGroupItem
								value="table"
								aria-label="Table view"
							>
								<Table className="h-4 w-4" />
							</ToggleGroupItem>
						</ToggleGroup>
						<ModeToggle />
					</div>
				</header>

				{/* Input Form */}
				<InputForm inputs={inputs} onInputChange={updateInput} />

				{viewMode === "table" && <TableView savings={savings} />}

				{viewMode === "cards" && <CardsView savings={savings} />}

				{viewMode === "dashboard" && (
					<DashboardView savings={savings} />
				)}

				{/* Footer */}
				<div className="border-t pt-8 text-center text-sm text-muted-foreground">
					<p>
						Dados baseados em estudos de ciclo de vida e fatores de
						conversão ambientais.
						<br />
						Os valores são aproximados e podem variar conforme a
						região e o processo de reciclagem.
					</p>
					<p>
						Este site é um projeto open source e está disponível no{" "}
						<a
							href="https://github.com/saitodisse/coco-calculator"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary"
						>
							GitHub
						</a>
						.
					</p>
					<p>
						Feito por{" "}
						<a
							href="https://github.com/saitodisse"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary"
						>
							Julio M Saito
						</a>{" "}
						para{" "}
						<a
							href="https://www.instagram.com/cocoecia_reciclagem"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-primary"
						>
							COCO & CIA | COOPERATIVA
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
