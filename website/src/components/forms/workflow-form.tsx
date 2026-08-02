"use client"

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import { TrackedAnchor } from "@/components/site/tracked-anchor"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { trackLandingEvent } from "@/lib/analytics"
import {
  normalizeWorkflowForm,
  validateWorkflowForm,
  type PracticeInterest,
  type WorkflowFormErrors,
  type WorkflowFormValues,
} from "@/lib/workflow-form"

const initialValues: WorkflowFormValues = {
  email: "",
  workflow: "",
  organization: "",
  role: "",
  practiceInterest: "general",
}

type WorkflowFormProps = {
  contactEmail: string | null
  formEndpoint: string | null
  schedulingUrl: string | null
}

export function WorkflowForm({
  contactEmail,
  formEndpoint,
  schedulingUrl,
}: WorkflowFormProps) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<WorkflowFormErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const hasStarted = useRef(false)
  const statusId = useId()
  const emailId = useId()
  const emailErrorId = `${emailId}-error`
  const workflowId = useId()
  const workflowDescriptionId = `${workflowId}-description`
  const workflowErrorId = `${workflowId}-error`

  useEffect(() => {
    const updatePracticeInterest = (event: Event) => {
      const customEvent = event as CustomEvent<PracticeInterest>
      setValues((current) => ({
        ...current,
        practiceInterest: customEvent.detail,
      }))
    }

    window.addEventListener("layers:practice-interest", updatePracticeInterest)

    return () =>
      window.removeEventListener(
        "layers:practice-interest",
        updatePracticeInterest
      )
  }, [])

  const handleFormFocus = useCallback(() => {
    if (!hasStarted.current) {
      hasStarted.current = true
      trackLandingEvent("form_start")
    }
  }, [])

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = event.target.name as keyof WorkflowFormValues
      const nextValue = event.target.value

      setValues((current) => ({ ...current, [field]: nextValue }))
      setErrors((current) => ({ ...current, [field]: undefined }))
      setSubmitError(null)
    },
    []
  )

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const nextErrors = validateWorkflowForm(values)

      if (Object.keys(nextErrors).length > 0) {
        setErrors(nextErrors)
        trackLandingEvent("validation_error", {
          count: Object.keys(nextErrors).length,
        })
        const firstInvalidField = Object.keys(nextErrors)[0]
        const firstInvalidId =
          firstInvalidField === "email" ? emailId : workflowId
        document.getElementById(firstInvalidId)?.focus()
        return
      }

      if (!formEndpoint) {
        setSubmitError(
          "This preview form is not connected, so nothing was sent."
        )
        trackLandingEvent("submit_failure", { reason: "not_configured" })
        return
      }

      setIsSubmitting(true)
      setSubmitError(null)

      try {
        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(normalizeWorkflowForm(values)),
        })

        if (!response.ok) {
          throw new Error("Submission failed")
        }

        setIsComplete(true)
        trackLandingEvent("submit_success", {
          practiceInterest: values.practiceInterest,
        })
      } catch {
        setSubmitError(
          "We couldn’t send your details. Check them and try again."
        )
        trackLandingEvent("submit_failure", { reason: "request_failed" })
      } finally {
        setIsSubmitting(false)
      }
    },
    [emailId, formEndpoint, values, workflowId]
  )

  if (isComplete) {
    return (
      <div
        aria-live="polite"
        className="flex min-h-[28rem] flex-col items-start justify-center gap-6 p-6 sm:p-10"
        role="status"
      >
        <p className="max-w-[52ch] text-xl leading-8 font-semibold">
          Thanks. We received your workflow. {schedulingUrl
            ? "Choose a time and we’ll review the details before we meet."
            : "We’ll review the details and get back to you."}
        </p>
        {schedulingUrl ? (
          <TrackedAnchor
            className={buttonVariants({ variant: "outline", size: "cta" })}
            eventName="scheduling_click"
            href={schedulingUrl}
          >
            Schedule a conversation
            <IconArrowNarrowRight data-icon="inline-end" />
          </TrackedAnchor>
        ) : null}
      </div>
    )
  }

  return (
    <form
      aria-describedby={!formEndpoint ? statusId : undefined}
      className="flex flex-col gap-7 p-6 sm:p-9 lg:p-12"
      noValidate
      onFocus={handleFormFocus}
      onSubmit={handleSubmit}
    >
      <input
        name="practiceInterest"
        type="hidden"
        value={values.practiceInterest}
      />

      {!formEndpoint ? (
        <p
          className="border border-dashed border-line-strong bg-surface-muted p-4 text-sm leading-6 text-muted-foreground"
          id={statusId}
        >
          Preview only: this form is not connected yet, so it cannot send your
          details.
          {contactEmail ? (
            <>
              {" "}You can instead email{" "}
              <a className="font-semibold underline underline-offset-4" href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
              .
            </>
          ) : null}
        </p>
      ) : null}

      <FieldGroup className="grid gap-6 sm:grid-cols-2">
        <Field className="sm:col-span-2" data-invalid={Boolean(errors.email) || undefined}>
          <FieldLabel htmlFor={emailId}>Work email</FieldLabel>
          <Input
            aria-describedby={errors.email ? emailErrorId : undefined}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
            id={emailId}
            inputMode="email"
            name="email"
            onChange={handleInputChange}
            required
            type="email"
            value={values.email}
          />
          <FieldError id={emailErrorId}>{errors.email}</FieldError>
        </Field>

        <Field className="sm:col-span-2" data-invalid={Boolean(errors.workflow) || undefined}>
          <FieldLabel htmlFor={workflowId}>Workflow</FieldLabel>
          <FieldDescription id={workflowDescriptionId}>
            Where does the work repeat, and what takes expert time? Tell us what
            a good output looks like.
          </FieldDescription>
          <Textarea
            aria-describedby={
              errors.workflow
                ? `${workflowDescriptionId} ${workflowErrorId}`
                : workflowDescriptionId
            }
            aria-invalid={Boolean(errors.workflow)}
            id={workflowId}
            name="workflow"
            onChange={handleInputChange}
            required
            value={values.workflow}
          />
          <FieldError id={workflowErrorId}>{errors.workflow}</FieldError>
        </Field>

        <Field>
          <FieldLabel htmlFor="organization">Organization <span className="font-normal text-muted-foreground">(optional)</span></FieldLabel>
          <Input
            autoComplete="organization"
            id="organization"
            name="organization"
            onChange={handleInputChange}
            value={values.organization}
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="role">Role <span className="font-normal text-muted-foreground">(optional)</span></FieldLabel>
          <Input
            autoComplete="organization-title"
            id="role"
            name="role"
            onChange={handleInputChange}
            value={values.role}
          />
        </Field>
      </FieldGroup>

      {submitError ? (
        <p className="text-sm leading-6 text-destructive" role="alert">
          {submitError}
        </p>
      ) : null}

      <Button
        className="w-full sm:w-fit"
        disabled={isSubmitting}
        size="cta"
        type="submit"
      >
        {isSubmitting ? (
          <>
            <Spinner data-icon="inline-start" />
            Sending…
          </>
        ) : (
          <>
            Discuss this workflow
            <IconArrowNarrowRight data-icon="inline-end" />
          </>
        )}
      </Button>
    </form>
  )
}
