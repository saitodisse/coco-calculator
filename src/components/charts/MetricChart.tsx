import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Cell,
} from "recharts";
import type { ChartableMetric } from "@/lib/types";
import { Material } from "@/lib/types";

interface MetricChartProps {
	metric: ChartableMetric;
}

const COLORS = {
	[Material.PAPEL]: "#10b981", // emerald-500
	[Material.ALUMINIO]: "#3b82f6", // blue-500
	[Material.PLATICO]: "#f59e0b", // amber-500
	[Material.VIDRO]: "#8b5cf6", // violet-500
};

export function MetricChart({ metric }: MetricChartProps) {
	// Transform the data for Recharts
	const chartData = metric.sources.map((source) => ({
		material: source.material,
		value: source.value,
		percentage: source.percentage,
		fill: COLORS[source.material],
	}));

	const formatValue = (value: number): string => {
		if (value === 0) return "0";

		if (value < 0.001) {
			return value.toExponential(2);
		} else if (value < 1) {
			return value.toFixed(3);
		} else if (value < 10) {
			return value.toFixed(2);
		} else if (value < 100) {
			return value.toFixed(1);
		} else {
			return Math.round(value).toString();
		}
	};

	const CustomTooltip = ({ active, payload, label }: any) => {
		if (active && payload && payload.length) {
			const data = payload[0].payload;
			return (
				<div className="rounded-lg border border-border bg-background p-3 shadow-lg">
					<p className="font-medium">{`${label}: ${formatValue(data.value)} ${
						metric.unit
					}`}</p>
					<p className="text-sm text-muted-foreground">
						{`${data.percentage.toFixed(1)}% do total`}
					</p>
				</div>
			);
		}
		return null;
	};

	// Don't render chart if no data
	if (metric.total === 0) {
		return (
			<div className="flex h-64 w-full items-center justify-center rounded-lg bg-muted/20">
				<p className="text-muted-foreground">Nenhum dado para exibir</p>
			</div>
		);
	}

	return (
		<div className="h-64 w-full">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					data={chartData}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}
				>
					<CartesianGrid
						strokeDasharray="3 3"
						className="opacity-30"
					/>
					<XAxis
						dataKey="material"
						tick={{ fontSize: 12 }}
						className="text-muted-foreground"
					/>
					<YAxis
						tick={{ fontSize: 12 }}
						className="text-muted-foreground"
						tickFormatter={formatValue}
					/>
					<Tooltip content={<CustomTooltip />} />
					<Bar dataKey="value" radius={[4, 4, 0, 0]}>
						{chartData.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.fill} />
						))}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
