import { CalculatorPage } from "./pages/CalculatorPage";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<div className="min-h-screen bg-background">
				<CalculatorPage />
			</div>
		</ThemeProvider>
	);
}

export default App;
