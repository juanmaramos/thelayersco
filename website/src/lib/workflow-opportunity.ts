export const WORKING_WEEKS_PER_YEAR = 46
export const HOURS_PER_WORKWEEK = 40
export const CAPACITY_RETURN_SCENARIOS = [
  { label: "Conservative", percent: 35 },
  { label: "Expected", percent: 50 },
  { label: "Optimistic", percent: 65 },
] as const

export type CapacityReturnPercent =
  (typeof CAPACITY_RETURN_SCENARIOS)[number]["percent"]

export const DEFAULT_CAPACITY_RETURN_PERCENT: CapacityReturnPercent = 50

export type WorkflowOpportunityInput = {
  people: number
  hoursPerPersonPerWeek: number
  annualEmploymentCost: number
  capacityReturnPercent: CapacityReturnPercent
}

export type WorkflowOpportunity = {
  annualWorkflowHours: number
  currentAnnualEffortValue: number
  returnedHours: number
  returnedCapacityValue: number
  returnedFteEquivalent: number
  returnedShare: number
}

function bounded(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) {
    return min
  }

  return Math.min(Math.max(value, min), max)
}

export function isCapacityReturnPercent(
  value: number
): value is CapacityReturnPercent {
  return CAPACITY_RETURN_SCENARIOS.some(
    (scenario) => scenario.percent === value
  )
}

export function getCapacityReturnScenario(percent: CapacityReturnPercent) {
  return (
    CAPACITY_RETURN_SCENARIOS.find(
      (scenario) => scenario.percent === percent
    ) ?? CAPACITY_RETURN_SCENARIOS[1]
  )
}

export function calculateWorkflowOpportunity(
  input: WorkflowOpportunityInput
): WorkflowOpportunity {
  const people = bounded(input.people, 0, 500)
  const hoursPerPersonPerWeek = bounded(input.hoursPerPersonPerWeek, 0, 40)
  const annualEmploymentCost = bounded(input.annualEmploymentCost, 0, 1_000_000)

  const annualWorkflowHours =
    people * hoursPerPersonPerWeek * WORKING_WEEKS_PER_YEAR
  const loadedHourlyCost =
    annualEmploymentCost / (WORKING_WEEKS_PER_YEAR * HOURS_PER_WORKWEEK)
  const currentAnnualEffortValue = annualWorkflowHours * loadedHourlyCost
  const returnedShare =
    annualWorkflowHours > 0 ? input.capacityReturnPercent / 100 : 0
  const returnedHours = annualWorkflowHours * returnedShare

  return {
    annualWorkflowHours,
    currentAnnualEffortValue,
    returnedHours,
    returnedCapacityValue: returnedHours * loadedHourlyCost,
    returnedFteEquivalent:
      returnedHours / (WORKING_WEEKS_PER_YEAR * HOURS_PER_WORKWEEK),
    returnedShare,
  }
}
