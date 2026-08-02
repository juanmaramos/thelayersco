export type PracticeInterest =
  | "general"
  | "people-workforce"
  | "professional-services"

export type WorkflowFormValues = {
  email: string
  workflow: string
  organization: string
  role: string
  practiceInterest: PracticeInterest
}

export type WorkflowFormErrors = Partial<
  Record<"email" | "workflow", string>
>

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateWorkflowForm(
  values: WorkflowFormValues
): WorkflowFormErrors {
  const errors: WorkflowFormErrors = {}

  if (!values.email.trim()) {
    errors.email = "Enter your work email."
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid work email."
  }

  if (!values.workflow.trim()) {
    errors.workflow = "Describe the workflow you want to discuss."
  }

  return errors
}

export function normalizeWorkflowForm(values: WorkflowFormValues) {
  return {
    ...values,
    email: values.email.trim(),
    workflow: values.workflow.trim(),
    organization: values.organization.trim(),
    role: values.role.trim(),
  }
}
