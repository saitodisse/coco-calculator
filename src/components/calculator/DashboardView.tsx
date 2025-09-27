import type { EnvironmentalSavings } from "@/lib/types";

interface DashboardViewProps {
	savings: EnvironmentalSavings;
}

export function DashboardView({ savings }: DashboardViewProps) {
	return (
		<div className="space-y-6">
			<h2 className="text-center text-2xl font-bold">Dashboard View</h2>
			<p className="text-center text-muted-foreground">Coming soon...</p>
		</div>
	);
}
