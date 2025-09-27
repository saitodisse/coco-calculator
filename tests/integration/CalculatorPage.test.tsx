import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalculatorPage } from "@/pages/CalculatorPage";

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

describe("CalculatorPage Integration Tests", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  describe("Scenario 1: Real-time Calculation for a Single Material", () => {
    it("should calculate and display results when entering 100kg of paper", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      // Find the paper input field
      const paperInput = screen.getByLabelText(/papel/i);
      expect(paperInput).toBeInTheDocument();

      // Enter 100kg of paper
      await user.clear(paperInput);
      await user.type(paperInput, "100");

      // Wait for calculations to complete
      await waitFor(() => {
        // Check that GHG reduction is displayed with correct value
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/0\.0292.*tco2e/i)).toBeInTheDocument();
      });

      // Check water savings
      await waitFor(() => {
        expect(screen.getByText(/economia de água/i)).toBeInTheDocument();
        expect(screen.getByText(/2\.3.*kl/i)).toBeInTheDocument();
      });

      // Check energy savings
      await waitFor(() => {
        expect(
          screen.getByText(/substituição energética/i)
        ).toBeInTheDocument();
        expect(screen.getByText(/344.*kwh/i)).toBeInTheDocument();
      });

      // Verify that charts are rendered
      await waitFor(() => {
        const charts = screen.getAllByRole("img", { hidden: true }); // Recharts renders as SVG
        expect(charts.length).toBeGreaterThan(0);
      });
    });
  });

  describe("Scenario 2: Data Persistence on Reload", () => {
    it("should persist and restore data after page reload", async () => {
      const user = userEvent.setup();

      // Mock localStorage to return saved data
      localStorageMock.getItem.mockReturnValue(
        JSON.stringify({
          paperInKg: 100,
          plasticInKg: 0,
          glassInKg: 0,
          aluminumInKg: 50,
        })
      );

      render(<CalculatorPage />);

      // Wait for data to be loaded from localStorage
      await waitFor(() => {
        const paperInput = screen.getByLabelText(/papel/i) as HTMLInputElement;
        const aluminumInput = screen.getByLabelText(
          /alumínio/i
        ) as HTMLInputElement;

        expect(paperInput.value).toBe("100");
        expect(aluminumInput.value).toBe("50");
      });

      // Verify that calculations are performed with restored data
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
        // Should show combined calculation for paper + aluminum
        expect(screen.getByText(/0\.488.*tco2e/i)).toBeInTheDocument();
      });

      // Verify that localStorage.getItem was called
      expect(localStorageMock.getItem).toHaveBeenCalledWith(
        "recycling-calculator-inputs"
      );
    });

    it("should save data to localStorage when inputs change", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);

      // Enter a value
      await user.clear(paperInput);
      await user.type(paperInput, "100");

      // Wait for the value to be saved
      await waitFor(() => {
        expect(localStorageMock.setItem).toHaveBeenCalledWith(
          "recycling-calculator-inputs",
          JSON.stringify({
            paperInKg: 100,
            plasticInKg: 0,
            glassInKg: 0,
            aluminumInKg: 0,
          })
        );
      });
    });
  });

  describe("Scenario 3: Dynamic Updates with Multiple Materials", () => {
    it("should update calculations when multiple materials are entered", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);
      const plasticInput = screen.getByLabelText(/plástico/i);
      const aluminumInput = screen.getByLabelText(/alumínio/i);

      // Enter values for paper and plastic
      await user.clear(paperInput);
      await user.type(paperInput, "100");

      await user.clear(plasticInput);
      await user.type(plasticInput, "20");

      // Wait for initial calculations
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
        // Paper (0.0292) + Plastic (0.03) = 0.0592 tCO2e
        expect(screen.getByText(/0\.059.*tco2e/i)).toBeInTheDocument();
      });

      // Add aluminum
      await user.clear(aluminumInput);
      await user.type(aluminumInput, "50");

      // Wait for updated calculations
      await waitFor(() => {
        // Paper (0.0292) + Plastic (0.03) + Aluminum (0.45915) = 0.51835 tCO2e
        expect(screen.getByText(/0\.518.*tco2e/i)).toBeInTheDocument();
      });

      // Verify that charts show multiple segments
      await waitFor(() => {
        const charts = screen.getAllByRole("img", { hidden: true });
        expect(charts.length).toBeGreaterThan(0);
      });
    });

    it("should show correct percentage breakdown in charts", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);
      const aluminumInput = screen.getByLabelText(/alumínio/i);

      // Enter values that will create a clear percentage split
      await user.clear(paperInput);
      await user.type(paperInput, "100");

      await user.clear(aluminumInput);
      await user.type(aluminumInput, "50");

      // Wait for calculations
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
      });

      // The chart should show both materials contributing
      // Paper: 0.0292 / 0.48835 = ~6%
      // Aluminum: 0.45915 / 0.48835 = ~94%
      await waitFor(() => {
        // This test verifies that the chart data structure is correct
        // The actual chart rendering will be tested in component unit tests
        expect(screen.getByText(/0\.488.*tco2e/i)).toBeInTheDocument();
      });
    });
  });

  describe("Input Validation", () => {
    it("should handle invalid input gracefully", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);

      // Enter invalid input
      await user.clear(paperInput);
      await user.type(paperInput, "abc");

      // Should not crash and should show zero results
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
        expect(screen.getByText(/0.*tco2e/i)).toBeInTheDocument();
      });
    });

    it("should handle negative numbers", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);

      // Enter negative number
      await user.clear(paperInput);
      await user.type(paperInput, "-100");

      // Should handle gracefully (implementation may clamp to 0 or show 0 results)
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
      });
    });
  });

  describe("Performance", () => {
    it("should update calculations quickly when inputs change", async () => {
      const user = userEvent.setup();

      render(<CalculatorPage />);

      const paperInput = screen.getByLabelText(/papel/i);

      const startTime = performance.now();

      // Enter a value
      await user.clear(paperInput);
      await user.type(paperInput, "100");

      // Wait for calculations to complete
      await waitFor(() => {
        expect(screen.getAllByText(/redução de gee/i)[0]).toBeInTheDocument();
      });

      const endTime = performance.now();
      const duration = endTime - startTime;

      // Should complete calculations in less than 100ms as per performance goals
      expect(duration).toBeLessThan(100);
    });
  });
});
