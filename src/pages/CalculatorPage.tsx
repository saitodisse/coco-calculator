import { InputForm } from "@/components/calculator/InputForm";
import { ResultsDisplay } from "@/components/calculator/ResultsDisplay";
import { MetricChart } from "@/components/charts/MetricChart";
import { useRecyclingCalculator } from "@/hooks/useRecyclingCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function CalculatorPage() {
  const { inputs, savings, updateInput, isLoaded } = useRecyclingCalculator();

  // Show loading state while data is being loaded from localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando calculadora...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">
            Calculadora de Recicláveis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra o impacto ambiental positivo da reciclagem dos seus
            materiais
          </p>
        </div>

        {/* Input Form */}
        <InputForm inputs={inputs} onInputChange={updateInput} />

        {/* Results */}
        <ResultsDisplay savings={savings} />

        {/* Charts Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">
            Visualização dos Resultados
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* GHG Reduction Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {savings.ghgReduction_tCO2e.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MetricChart metric={savings.ghgReduction_tCO2e} />
              </CardContent>
            </Card>

            {/* Water Savings Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {savings.waterSaved_kl.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MetricChart metric={savings.waterSaved_kl} />
              </CardContent>
            </Card>

            {/* Energy Savings Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {savings.energySaved_kWh.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MetricChart metric={savings.energySaved_kWh} />
              </CardContent>
            </Card>

            {/* Virgin Material Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  {savings.virginMaterialSaved_t.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MetricChart metric={savings.virginMaterialSaved_t} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>
            Dados baseados em estudos de ciclo de vida e fatores de conversão
            ambientais.
            <br />
            Os valores são aproximados e podem variar conforme a região e o
            processo de reciclagem.
          </p>
        </div>
      </div>
    </div>
  );
}
