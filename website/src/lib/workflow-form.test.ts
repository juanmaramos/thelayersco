import { describe, expect, it } from "vitest"

import {
  normalizeWorkflowForm,
  validateWorkflowForm,
  type WorkflowFormValues,
} from "./workflow-form"

const validValues: WorkflowFormValues = {
  email: "ada@example.com",
  workflow: "Prepare governed client deliverables.",
  organization: "Analytical Engines",
  role: "Operations lead",
  practiceInterest: "professional-services",
}

describe("validateWorkflowForm", () => {
  it("accepts required workflow details", () => {
    expect(validateWorkflowForm(validValues)).toEqual({})
  })

  it("allows optional organization and role fields to remain blank", () => {
    expect(
      validateWorkflowForm({
        ...validValues,
        organization: "",
        role: "",
      })
    ).toEqual({})
  })

  it("returns errors for required blank fields", () => {
    expect(
      validateWorkflowForm({
        ...validValues,
        email: " ",
        workflow: " ",
      })
    ).toEqual({
      email: "Enter your work email.",
      workflow: "Describe the workflow you want to discuss.",
    })
  })

  it("rejects an invalid email address", () => {
    expect(
      validateWorkflowForm({ ...validValues, email: "not-an-email" })
    ).toEqual({ email: "Enter a valid work email." })
  })
})

describe("normalizeWorkflowForm", () => {
  it("trims text while preserving the selected practice", () => {
    expect(
      normalizeWorkflowForm({
        ...validValues,
        email: " ada@example.com  ",
        workflow: "  Prepare governed client deliverables.  ",
        organization: " Analytical Engines ",
        role: " Operations lead ",
      })
    ).toEqual(validValues)
  })
})
