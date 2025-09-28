import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
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

	const handleSliderChange =
		(field: keyof RecyclingInput) => (value: number[]) => {
			onInputChange(field, value[0]);
		};

	return (
		<Card className="mx-auto w-full">
			<CardHeader>
				<CardTitle className="text-center text-2xl font-bold">
					Calculadora de Recicláveis
				</CardTitle>
				<p className="text-center text-muted-foreground">
					Digite a quantidade (em kg) de cada material reciclado
				</p>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
					<div className="space-y-2">
						<div className="flex items-center justify-between gap-2 text-lg">
							<Label htmlFor="paper_input">
								Papel e Papelão (kg)
							</Label>
							<div className="flex items-center gap-2">
								<span>
									{Intl.NumberFormat("pt-BR").format(
										inputs.paperInKg || 0
									)}{" "}
									kg
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Slider
								id="paper_slider"
								data-testid="paper_slider"
								min={0}
								max={100000}
								step={100}
								value={[inputs.paperInKg || 0]}
								onValueChange={handleSliderChange("paperInKg")}
								className="w-full"
								aria-label="Papel e Papelão (kg)"
							/>
							<Input
								id="paper_input"
								data-testid="paper_input"
								className="min-w-22 w-24"
								type="number"
								min="0"
								step="1"
								value={inputs.paperInKg || ""}
								onChange={handleInputChange("paperInKg")}
								placeholder="0"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between gap-2 text-lg">
							<Label htmlFor="aluminum_input">
								Alumínio (kg)
							</Label>
							<div className="flex items-center gap-2">
								<span>
									{Intl.NumberFormat("pt-BR").format(
										inputs.aluminumInKg || 0
									)}{" "}
									kg
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Slider
								id="aluminum_slider"
								data-testid="aluminum_slider"
								min={0}
								max={100000}
								step={100}
								value={[inputs.aluminumInKg || 0]}
								onValueChange={handleSliderChange(
									"aluminumInKg"
								)}
								className="w-full"
								aria-label="Alumínio (kg)"
							/>
							<Input
								id="aluminum_input"
								data-testid="aluminum_input"
								className="min-w-22 w-24"
								type="number"
								min="0"
								step="1"
								value={inputs.aluminumInKg || ""}
								onChange={handleInputChange("aluminumInKg")}
								placeholder="0"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between gap-2 text-lg">
							<Label htmlFor="plastic_input">Plástico (kg)</Label>
							<div className="flex items-center gap-2">
								<span>
									{Intl.NumberFormat("pt-BR").format(
										inputs.plasticInKg || 0
									)}{" "}
									kg
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Slider
								id="plastic_slider"
								data-testid="plastic_slider"
								min={0}
								max={100000}
								step={100}
								value={[inputs.plasticInKg || 0]}
								onValueChange={handleSliderChange(
									"plasticInKg"
								)}
								className="w-full"
								aria-label="Plástico (kg)"
							/>
							<Input
								id="plastic_input"
								data-testid="plastic_input"
								className="min-w-22 w-24"
								type="number"
								min="0"
								step="1"
								value={inputs.plasticInKg || ""}
								onChange={handleInputChange("plasticInKg")}
								placeholder="0"
							/>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex items-center justify-between gap-2 text-lg">
							<Label htmlFor="glass_input">Vidro (kg)</Label>
							<div className="flex items-center gap-2">
								<span>
									{Intl.NumberFormat("pt-BR").format(
										inputs.glassInKg || 0
									)}{" "}
									kg
								</span>
							</div>
						</div>
						<div className="flex items-center gap-2">
							<Slider
								id="glass_slider"
								data-testid="glass_slider"
								min={0}
								max={100000}
								step={100}
								value={[inputs.glassInKg || 0]}
								onValueChange={handleSliderChange("glassInKg")}
								className="w-full"
								aria-label="Vidro (kg)"
							/>
							<Input
								id="glass_input"
								data-testid="glass_input"
								className="min-w-22 w-24"
								type="number"
								min="0"
								step="1"
								value={inputs.glassInKg || ""}
								onChange={handleInputChange("glassInKg")}
								placeholder="0"
							/>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
