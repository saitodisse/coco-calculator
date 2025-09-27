# Modelo de Dados: Calculadora de Recicláveis

Este documento descreve as estruturas de dados usadas na aplicação da calculadora de reciclagem. Estes modelos representam a entrada do usuário e a saída estruturada dos cálculos de economia ambiental.

## 1. RecyclingInput

Representa os valores de entrada brutos inseridos pelo usuário.

- **Tipo**: `object`
- **Descrição**: Contém o peso em quilogramas para cada tipo de material reciclável.

### Atributos

| Atributo       | Tipo     | Descrição                      | Restrições |
| :------------- | :------- | :----------------------------- | :--------- |
| `paperInKg`    | `number` | O peso de papel/papelão em kg. | `> 0`      |
| `plasticInKg`  | `number` | O peso de plástico em kg.      | `> 0`      |
| `glassInKg`    | `number` | O peso de vidro em kg.         | `> 0`      |
| `aluminumInKg` | `number` | O peso de alumínio em kg.      | `> 0`      |

### Exemplo

```json
{
	"paperInKg": 100,
	"plasticInKg": 20,
	"glassInKg": 0,
	"aluminumInKg": 50
}
```

## 2. EnvironmentalSavings

Representa os resultados completos e calculados. Este objeto é estruturado para suportar diretamente a UI, incluindo os gráficos de barras empilhadas. Cada métrica primária é um objeto contendo um valor total e um detalhamento por material.

- **Tipo**: `object`
- **Descrição**: Um objeto aninhado onde cada chave representa uma métrica calculada.

### Estrutura Principal

| Chave                        | Tipo     | Descrição                                                         |
| :--------------------------- | :------- | :---------------------------------------------------------------- |
| `[nomeDaMetrica]`            | `object` | Um objeto representando uma única métrica calculada.              |
| `[nomeDaMetricaEquivalente]` | `number` | Um valor numérico direto para métricas equivalentes mais simples. |

### Estrutura para uma Métrica Graficável

Cada objeto de métrica primária segue esta estrutura:

| Atributo  | Tipo     | Descrição                                                              |
| :-------- | :------- | :--------------------------------------------------------------------- |
| `label`   | `string` | Um rótulo legível por humanos para a métrica (ex: "Redução de GEE").   |
| `total`   | `number` | O valor total calculado para a métrica.                                |
| `unit`    | `string` | A unidade de medida (ex: "tCO2e", "kWh", "kl").                        |
| `sources` | `array`  | Um array de objetos, cada um detalhando a contribuição de um material. |

#### Estrutura do Objeto do Array `sources`

| Atributo     | Tipo     | Descrição                                          |
| :----------- | :------- | :------------------------------------------------- |
| `material`   | `string` | O nome do material (ex: "Papel", "Alumínio").      |
| `value`      | `number` | O valor calculado para aquele material específico. |
| `percentage` | `number` | A contribuição percentual para o `total`.          |

#### Propriedades Adicionais da Métrica

| Atributo     | Tipo                | Descrição                                                      |
| :----------- | :------------------ | :------------------------------------------------------------- |
| `metadata`   | `MetricMetadata`    | Metadados da métrica (nome, descrição, categoria, chave única) |
| `references` | `FonteReferencia[]` | Array de fontes de referência para a métrica                   |

#### Estrutura do Objeto `FonteReferencia`

| Atributo  | Tipo     | Descrição                                      |
| :-------- | :------- | :--------------------------------------------- |
| `nome`    | `string` | Nome da fonte ou organização responsável       |
| `citação` | `string` | Formato de citação acadêmica da fonte          |
| `url`     | `string` | Link para a fonte original (quando disponível) |

### Exemplo

```json
{
	"ghgReduction_tCO2e": {
		"label": "Redução de GEE",
		"total": 0.519,
		"unit": "tCO2e",
		"sources": [
			{ "material": "Papel", "value": 0.0292, "percentage": 5.6 },
			{ "material": "Alumínio", "value": 0.4591, "percentage": 88.5 },
			{ "material": "Plástico", "value": 0.03, "percentage": 5.8 },
			{ "material": "Vidro", "value": 0, "percentage": 0 }
		],
		"metadata": {
			"key": "ghgReduction_tCO2e",
			"name": "Redução de Gases de Efeito Estufa",
			"description": "Redução de emissões de gases de efeito estufa através da reciclagem",
			"unit": "tCO2e",
			"category": "primary"
		},
		"references": [
			{
				"nome": "EPA - Environmental Protection Agency",
				"citação": "EPA (2023). Waste Reduction Model (WARM). U.S. Environmental Protection Agency.",
				"url": "https://www.epa.gov/warm"
			}
		]
	},
	"waterSaved_kl": {
		"label": "Economia de Água",
		"total": 2.599,
		"unit": "kl",
		"sources": [
			{ "material": "Papel", "value": 2.3, "percentage": 88.5 },
			{ "material": "Alumínio", "value": 0.199, "percentage": 7.7 },
			{ "material": "Plástico", "value": 0.1, "percentage": 3.8 },
			{ "material": "Vidro", "value": 0, "percentage": 0 }
		],
		"metadata": {
			"key": "waterSaved_kl",
			"name": "Economia de Água",
			"description": "Quantidade de água economizada através da reciclagem",
			"unit": "kl",
			"category": "primary"
		},
		"references": [
			{
				"nome": "Water Footprint Network",
				"citação": "Hoekstra, A.Y. et al. (2011). The Water Footprint Assessment Manual. Water Footprint Network.",
				"url": "https://waterfootprint.org"
			}
		]
	},
	"equiv_home_energy_days": 68.8
}
```
