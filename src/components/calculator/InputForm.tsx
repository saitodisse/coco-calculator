import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { RecyclingInput } from "@/lib/types";

interface InputFormProps {
	inputs: RecyclingInput;
	onInputChange: (field: keyof RecyclingInput, value: number) => void;
}

export function InputForm({ inputs, onInputChange }: InputFormProps) {
	const handleInputChange =
		(field: keyof RecyclingInput) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = parseFloat(event.target.value) || 0;
			onInputChange(field, value);
		};

	return (
		<Card className="mx-auto w-full max-w-2xl">
			<CardHeader>
				<CardTitle className="text-center text-2xl font-bold">
					Calculadora de Recicláveis
				</CardTitle>
				<p className="text-center text-muted-foreground">
					Digite a quantidade (em kg) de cada material reciclado
				</p>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div className="space-y-2">
						<Label htmlFor="paper">Papel e Papelão (kg)</Label>
						<Input
							id="paper"
							type="number"
							min="0"
							step="0.1"
							value={inputs.paperInKg || ""}
							onChange={handleInputChange("paperInKg")}
							placeholder="0"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="aluminum">Alumínio (kg)</Label>
						<Input
							id="aluminum"
							type="number"
							min="0"
							step="0.1"
							value={inputs.aluminumInKg || ""}
							onChange={handleInputChange("aluminumInKg")}
							placeholder="0"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="plastic">Plástico (kg)</Label>
						<Input
							id="plastic"
							type="number"
							min="0"
							step="0.1"
							value={inputs.plasticInKg || ""}
							onChange={handleInputChange("plasticInKg")}
							placeholder="0"
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="glass">Vidro (kg)</Label>
						<Input
							id="glass"
							type="number"
							min="0"
							step="0.1"
							value={inputs.glassInKg || ""}
							onChange={handleInputChange("glassInKg")}
							placeholder="0"
						/>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
