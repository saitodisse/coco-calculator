import { InputForm } from "@/components/calculator/InputForm";
import { ResultsDisplay } from "@/components/calculator/ResultsDisplay";
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
				<div className="space-y-2 text-center">
					<h1 className="text-4xl font-bold tracking-tight">
						Calculadora de Recicláveis
					</h1>
					<p className="mx-auto max-w-2xl text-xl text-muted-foreground">
						Descubra o impacto ambiental positivo da reciclagem dos
						seus materiais
					</p>
				</div>

				{/* Input Form */}
				<InputForm inputs={inputs} onInputChange={updateInput} />

				{/* Results */}
				<ResultsDisplay savings={savings} />

				{/* Views Section */}
				{viewMode === "dashboard" && (
					<DashboardView savings={savings} />
				)}
				{viewMode === "cards" && <CardsView savings={savings} />}
				{viewMode === "table" && <TableView savings={savings} />}

				{/* Footer */}
				<div className="border-t pt-8 text-center text-sm text-muted-foreground">
					<p>
						Dados baseados em estudos de ciclo de vida e fatores de
						conversão ambientais.
						<br />
						Os valores são aproximados e podem variar conforme a
						região e o processo de reciclagem.
					</p>
				</div>
			</div>
		</div>
	);
}
