import { useMemo } from "react";
import { calculateSavings } from "@/lib/calculator";
import type { RecyclingInput, EnvironmentalSavings } from "@/lib/types";
import { useQueryStates, parseAsInteger } from "nuqs";

const initialInputs: RecyclingInput = {
	paperInKg: 0,
	plasticInKg: 0,
	glassInKg: 0,
	aluminumInKg: 0,
};

const parsers = {
	paperInKg: parseAsInteger.withDefault(initialInputs.paperInKg),
	plasticInKg: parseAsInteger.withDefault(initialInputs.plasticInKg),
	glassInKg: parseAsInteger.withDefault(initialInputs.glassInKg),
	aluminumInKg: parseAsInteger.withDefault(initialInputs.aluminumInKg),
};

export function useRecyclingCalculator() {
	const [inputs, setInputs] = useQueryStates(parsers);

	const savings: EnvironmentalSavings = useMemo(() => {
		return calculateSavings(inputs);
	}, [inputs]);

	const updateInput = (field: keyof RecyclingInput, value: number) => {
		setInputs({
			...inputs,
			[field]: Math.max(0, value),
		});
	};

	const resetInputs = () => {
		setInputs(initialInputs);
	};

	return {
		inputs,
		savings,
		updateInput,
		resetInputs,
	};
}
