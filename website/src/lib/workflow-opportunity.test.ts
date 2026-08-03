import { describe, expect, it } from "vitest"

import { calculateWorkflowOpportunity } from "./workflow-opportunity"

describe("calculateWorkflowOpportunity", () => {
  it("turns a workflow baseline into an annual capacity estimate", () => {
    const result = calculateWorkflowOpportunity({
      people: 6,
      hoursPerPersonPerWeek: 10,
      annualEmploymentCost: 100_000,
      capacityReturnPercent: 50,
    })

    expect(result.annualWorkflowHours).toBe(2_760)
    expect(result.currentAnnualEffortValue).toBe(150_000)
    expect(result.returnedHours).toBe(1_380)
    expect(result.returnedCapacityValue).toBe(75_000)
    expect(result.returnedFteEquivalent).toBe(0.75)
    expect(result.returnedShare).toBe(0.5)
  })

  it("bounds out-of-range inputs before calculating", () => {
    const result = calculateWorkflowOpportunity({
      people: 1_000,
      hoursPerPersonPerWeek: 80,
      annualEmploymentCost: 2_000_000,
      capacityReturnPercent: 50,
    })

    expect(result.annualWorkflowHours).toBe(920_000)
    expect(result.currentAnnualEffortValue).toBe(500_000_000)
    expect(result.returnedHours).toBe(460_000)
    expect(result.returnedCapacityValue).toBe(250_000_000)
  })

  it("returns a neutral result for missing numeric data", () => {
    const result = calculateWorkflowOpportunity({
      people: Number.NaN,
      hoursPerPersonPerWeek: Number.NaN,
      annualEmploymentCost: Number.NaN,
      capacityReturnPercent: 50,
    })

    expect(result).toEqual({
      annualWorkflowHours: 0,
      currentAnnualEffortValue: 0,
      returnedHours: 0,
      returnedCapacityValue: 0,
      returnedFteEquivalent: 0,
      returnedShare: 0,
    })
  })

  it("changes the result with the selected capacity assumption", () => {
    const conservative = calculateWorkflowOpportunity({
      people: 6,
      hoursPerPersonPerWeek: 10,
      annualEmploymentCost: 100_000,
      capacityReturnPercent: 35,
    })
    const optimistic = calculateWorkflowOpportunity({
      people: 6,
      hoursPerPersonPerWeek: 10,
      annualEmploymentCost: 100_000,
      capacityReturnPercent: 65,
    })

    expect(conservative.returnedCapacityValue).toBeCloseTo(52_500)
    expect(conservative.returnedShare).toBe(0.35)
    expect(optimistic.returnedCapacityValue).toBeCloseTo(97_500)
    expect(optimistic.returnedShare).toBe(0.65)
  })
})
