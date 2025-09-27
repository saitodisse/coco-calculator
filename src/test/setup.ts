import "@testing-library/jest-dom";
import { createAdapter } from "nuqs/adapters/react";

// Mock ResizeObserver for Recharts
global.ResizeObserver = class ResizeObserver {
	observe() {}
	unobserve() {}
	disconnect() {}
};

// Setup nuqs adapter for testing
const adapter = createAdapter({
	parse: (search) => {
		const params = new URLSearchParams(search);
		const result: Record<string, string> = {};
		for (const [key, value] of params.entries()) {
			result[key] = value;
		}
		return result;
	},
	stringify: (params) => {
		const searchParams = new URLSearchParams();
		for (const [key, value] of Object.entries(params)) {
			if (value !== null && value !== undefined) {
				searchParams.set(key, value);
			}
		}
		return searchParams.toString();
	},
	window: {
		location: {
			search: "",
		},
		history: {
			pushState: () => {},
			replaceState: () => {},
		},
		addEventListener: () => {},
		removeEventListener: () => {},
	},
});

// Set the adapter globally for tests
(global as any).__NUQS_ADAPTER__ = adapter;
