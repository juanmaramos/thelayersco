"use client"

import {
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react"
import { IconArrowNarrowRight } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Spinner } from "@/components/ui/spinner"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { trackLandingEvent } from "@/lib/analytics"
import {
  CAPACITY_RETURN_SCENARIOS,
  calculateWorkflowOpportunity,
  type CapacityReturnPercent,
  DEFAULT_CAPACITY_RETURN_PERCENT,
  getCapacityReturnScenario,
  HOURS_PER_WORKWEEK,
  isCapacityReturnPercent,
  WORKING_WEEKS_PER_YEAR,
} from "@/lib/workflow-opportunity"

const currencies = ["USD", "EUR", "GBP"] as const

type Currency = (typeof currencies)[number]

function numberFromInput(value: string) {
  if (value === "") {
    return 0
  }

  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : 0
}

type WorkflowOpportunityCalculatorProps = {
  emailEndpoint: string | null
}

export function WorkflowOpportunityCalculator({
  emailEndpoint,
}: WorkflowOpportunityCalculatorProps) {
  const peopleId = useId()
  const hoursId = useId()
  const costId = useId()
  const emailPanelId = useId()
  const estimateNameId = useId()
  const estimateEmailId = useId()
  const estimateConsentId = useId()
  const started = useRef(false)
  const [currency, setCurrency] = useState<Currency>("USD")
  const [people, setPeople] = useState(12)
  const [hoursPerPersonPerWeek, setHoursPerPersonPerWeek] = useState(15)
  const [annualEmploymentCost, setAnnualEmploymentCost] = useState(80_000)
  const [capacityReturnPercent, setCapacityReturnPercent] =
    useState<CapacityReturnPercent>(DEFAULT_CAPACITY_RETURN_PERCENT)
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [emailConsent, setEmailConsent] = useState(true)
  const [emailStatus, setEmailStatus] = useState<string | null>(null)
  const [isEmailSending, setIsEmailSending] = useState(false)
  const [emailSent, setEmailSent] = useState(false)

  const markStarted = useCallback(() => {
    if (started.current) {
      return
    }

    started.current = true
    trackLandingEvent("calculator_start")
  }, [])

  const result = useMemo(
    () =>
      calculateWorkflowOpportunity({
        people,
        hoursPerPersonPerWeek,
        annualEmploymentCost,
        capacityReturnPercent,
      }),
    [annualEmploymentCost, capacityReturnPercent, hoursPerPersonPerWeek, people]
  )
  const selectedScenario = getCapacityReturnScenario(capacityReturnPercent)

  const currencyFormatter = useMemo(
    () =>
      new Intl.NumberFormat("en", {
        currency,
        maximumFractionDigits: 0,
        style: "currency",
      }),
    [currency]
  )
  const wholeNumberFormatter = useMemo(
    () => new Intl.NumberFormat("en", { maximumFractionDigits: 0 }),
    []
  )
  const handleCurrencyChange = useCallback(
    (values: string[]) => {
      const nextCurrency = values[0]

      if (currencies.includes(nextCurrency as Currency)) {
        markStarted()
        setCurrency(nextCurrency as Currency)
      }
    },
    [markStarted]
  )

  const handlePeopleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      markStarted()
      setPeople(numberFromInput(event.target.value))
    },
    [markStarted]
  )

  const handleHoursChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      markStarted()
      setHoursPerPersonPerWeek(numberFromInput(event.target.value))
    },
    [markStarted]
  )

  const handleCostChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      markStarted()
      setAnnualEmploymentCost(numberFromInput(event.target.value))
    },
    [markStarted]
  )

  const handleCapacityReturnChange = useCallback(
    (values: string[]) => {
      const nextPercent = Number(values[0])

      if (isCapacityReturnPercent(nextPercent)) {
        markStarted()
        setCapacityReturnPercent(nextPercent)
      }
    },
    [markStarted]
  )

  const handleEmailReveal = useCallback(() => {
    setShowEmailForm(true)
    trackLandingEvent("cta_click", { location: "calculator_email_reveal" })
  }, [])

  const handleEmailConsentChange = useCallback((checked: boolean) => {
    setEmailConsent(checked)
    setEmailStatus(null)
  }, [])

  const handleEmailSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!emailConsent) {
        return
      }

      if (!emailEndpoint) {
        setEmailStatus(
          "Email delivery is not connected in this preview, so nothing was sent."
        )
        trackLandingEvent("submit_failure", { reason: "not_configured" })
        return
      }

      const formData = new FormData(event.currentTarget)
      setIsEmailSending(true)
      setEmailStatus(null)

      try {
        const response = await fetch(emailEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: String(formData.get("name") ?? ""),
            email: String(formData.get("email") ?? ""),
            website: String(formData.get("website") ?? ""),
            consent: emailConsent,
            currency,
            people,
            hoursPerPersonPerWeek,
            annualEmploymentCost,
            capacityReturnPercent,
          }),
        })

        if (!response.ok) {
          throw new Error("Submission failed")
        }

        setEmailSent(true)
        setEmailStatus("Sent. Check your inbox for the estimate.")
        trackLandingEvent("submit_success", { source: "calculator" })
      } catch {
        setEmailStatus("We couldn’t send the estimate. Check the email and try again.")
        trackLandingEvent("submit_failure", { reason: "request_failed" })
      } finally {
        setIsEmailSending(false)
      }
    },
    [
      annualEmploymentCost,
      capacityReturnPercent,
      currency,
      emailConsent,
      emailEndpoint,
      hoursPerPersonPerWeek,
      people,
    ]
  )

  return (
    <div className="grid md:grid-cols-12">
      <div className="border-b border-line-strong bg-background p-6 text-foreground sm:p-9 md:col-span-5 md:border-r md:border-b-0 lg:p-12">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="operational-label text-signal-strong">Current workflow</p>
            <h3 className="mt-4 max-w-[18ch] text-2xl leading-8 font-semibold tracking-[-0.03em]">
              Use the work as it runs today.
            </h3>
          </div>
          <span className="font-mono text-[0.6875rem] leading-5 tracking-[0.05em] text-muted-foreground uppercase">
            Live estimate
          </span>
        </div>

        <FieldGroup className="mt-10 gap-7">
          <FieldSet>
            <FieldLegend variant="label">Currency</FieldLegend>
            <ToggleGroup
              aria-label="Currency"
              className="w-full"
              onValueChange={handleCurrencyChange}
              spacing={0}
              value={[currency]}
              variant="outline"
            >
              {currencies.map((option) => (
                <ToggleGroupItem className="flex-1" key={option} value={option}>
                  {option}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </FieldSet>

          <Field>
            <FieldLabel htmlFor={peopleId}>People doing this work</FieldLabel>
            <Input
              id={peopleId}
              max={500}
              min={1}
              onChange={handlePeopleChange}
              type="number"
              value={people}
            />
            <FieldDescription>
              Count regular contributors, not occasional approvers.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor={hoursId}>Hours per person each week</FieldLabel>
            <Input
              id={hoursId}
              max={40}
              min={0.5}
              onChange={handleHoursChange}
              step={0.5}
              type="number"
              value={hoursPerPersonPerWeek}
            />
            <FieldDescription>
              Use an average across the people counted above.
            </FieldDescription>
          </Field>

          <Field>
            <FieldLabel htmlFor={costId}>
              Annual employment cost per person ({currency})
            </FieldLabel>
            <Input
              id={costId}
              max={1_000_000}
              min={0}
              onChange={handleCostChange}
              step={5_000}
              type="number"
              value={annualEmploymentCost}
            />
            <FieldDescription>
              Salary plus employer taxes and benefits. A blended estimate is fine.
            </FieldDescription>
          </Field>

          <FieldSet>
            <FieldLegend variant="label">Capacity return assumption</FieldLegend>
            <ToggleGroup
              aria-label="Capacity return assumption"
              className="w-full"
              onValueChange={handleCapacityReturnChange}
              spacing={1}
              value={[String(capacityReturnPercent)]}
              variant="outline"
            >
              {CAPACITY_RETURN_SCENARIOS.map((scenario) => (
                <ToggleGroupItem
                  className="h-auto min-w-0 flex-1 flex-col gap-0.5 px-1.5 py-2 text-[0.6875rem] tracking-[0.04em]"
                  key={scenario.percent}
                  value={String(scenario.percent)}
                >
                  <span>{scenario.label}</span>
                  <span className="font-mono text-[0.6875rem] tracking-normal">
                    {scenario.percent}%
                  </span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
            <FieldDescription>
              How much repeat effort the redesigned workflow could return.
            </FieldDescription>
          </FieldSet>
        </FieldGroup>
      </div>

      <div className="flex flex-col justify-between bg-signal-strong p-6 text-on-ink sm:p-9 md:col-span-7 lg:p-12">
        <div>
          <p className="operational-label text-on-ink">Working estimate</p>
          <p className="mt-8 text-sm leading-6 text-on-ink">
            Estimated annual capacity value
          </p>
          <output className="mt-2 block font-editorial text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.88] tracking-[-0.055em]">
            {currencyFormatter.format(result.returnedCapacityValue)}
          </output>
          <p className="mt-7 max-w-[38ch] text-lg leading-8 text-on-ink">
            {wholeNumberFormatter.format(result.returnedHours)} hours could move from repeat handling to higher-value work each year.
          </p>

          <dl className="mt-10 grid border-t border-l border-white/40 sm:grid-cols-3">
            <div className="border-r border-b border-white/40 p-5">
              <dt className="text-xs leading-5 text-on-ink">Current workflow value</dt>
              <dd className="mt-3 text-xl font-semibold">
                {currencyFormatter.format(result.currentAnnualEffortValue)}
              </dd>
            </div>
            <div className="border-r border-b border-white/40 p-5">
              <dt className="text-xs leading-5 text-on-ink">Hours returned</dt>
              <dd className="mt-3 text-xl font-semibold">
                {wholeNumberFormatter.format(result.returnedHours)}
              </dd>
            </div>
            <div className="border-r border-b border-white/40 p-5">
              <dt className="text-xs leading-5 text-on-ink">Working weeks returned</dt>
              <dd className="mt-3 text-xl font-semibold">
                {wholeNumberFormatter.format(result.returnedHours / HOURS_PER_WORKWEEK)}
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-14">
          <Separator className="bg-white/40" />
          <p className="mt-7 max-w-[48ch] text-sm leading-6 text-on-ink">
            This estimates capacity, not guaranteed cash or headcount savings. It excludes implementation and model costs.
          </p>
          <p className="mt-3 max-w-[54ch] text-xs leading-5 text-on-ink">
            This uses the {selectedScenario.label.toLowerCase()} assumption: {capacityReturnPercent}% of repeat effort returned for a suitable workflow redesigned end to end. The real number is validated against your work.
          </p>
          <p className="mt-3 font-mono text-[0.6875rem] leading-5 tracking-[0.04em] text-on-ink uppercase">
            Method: {people} people × {hoursPerPersonPerWeek}/{HOURS_PER_WORKWEEK} of a workweek × {currencyFormatter.format(annualEmploymentCost)} annual cost × {capacityReturnPercent}% · Hours use {WORKING_WEEKS_PER_YEAR} working weeks
          </p>
          {showEmailForm ? (
            <form
              className="mt-8 border-t border-white/40 pt-8"
              id={emailPanelId}
              onSubmit={handleEmailSubmit}
            >
              <input
                aria-hidden="true"
                autoComplete="off"
                className="hidden"
                name="website"
                tabIndex={-1}
                type="text"
              />
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h4 className="text-xl font-semibold tracking-[-0.025em]">
                    Send a copy to your inbox.
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-on-ink">
                    We&apos;ll include your inputs, result, and calculation method.
                  </p>
                </div>
                <span className="font-mono text-[0.6875rem] tracking-[0.04em] text-on-ink uppercase">
                  No paywall
                </span>
              </div>

              <FieldGroup className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field>
                  <FieldLabel className="text-on-ink" htmlFor={estimateNameId}>
                    Name <span className="font-normal">(optional)</span>
                  </FieldLabel>
                  <Input
                    autoComplete="name"
                    className="border-white/50 bg-background text-foreground"
                    id={estimateNameId}
                    name="name"
                  />
                </Field>
                <Field>
                  <FieldLabel className="text-on-ink" htmlFor={estimateEmailId}>
                    Work email
                  </FieldLabel>
                  <Input
                    autoComplete="email"
                    className="border-white/50 bg-background text-foreground"
                    id={estimateEmailId}
                    inputMode="email"
                    name="email"
                    required
                    type="email"
                  />
                </Field>
              </FieldGroup>

              <Field className="mt-6" orientation="horizontal">
                <Checkbox
                  checked={emailConsent}
                  className="border-white/60 data-checked:border-on-ink data-checked:bg-on-ink data-checked:text-signal-strong"
                  id={estimateConsentId}
                  onCheckedChange={handleEmailConsentChange}
                />
                <FieldLabel
                  className="max-w-[58ch] text-sm leading-6 text-on-ink"
                  htmlFor={estimateConsentId}
                >
                  Email my estimate and occasional workflow insights. Unsubscribe anytime.
                </FieldLabel>
              </Field>

              <p className="mt-4 max-w-[58ch] text-xs leading-5 text-on-ink">
                We use these details to send the estimate and record your email
                preference. See our {" "}
                <a
                  className="font-semibold underline underline-offset-4"
                  href="/privacy"
                >
                  Privacy Notice
                </a>
                .
              </p>

              {emailStatus ? (
                <p
                  className="mt-5 text-sm leading-6 text-on-ink"
                  role={emailSent ? "status" : "alert"}
                >
                  {emailStatus}
                </p>
              ) : null}

              <Button
                className="mt-7 w-full sm:w-fit"
                disabled={!emailConsent || isEmailSending || emailSent}
                size="cta"
                type="submit"
                variant="inverse"
              >
                {isEmailSending ? (
                  <>
                    <Spinner data-icon="inline-start" />
                    Sending…
                  </>
                ) : emailSent ? (
                  "Estimate sent"
                ) : (
                  <>
                    Email my estimate
                    <IconArrowNarrowRight data-icon="inline-end" />
                  </>
                )}
              </Button>
            </form>
          ) : (
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-[34ch] text-sm leading-6 text-on-ink">
                Keep the inputs, result, and calculation method for your review.
              </p>
              <Button
                aria-controls={emailPanelId}
                aria-expanded={false}
                onClick={handleEmailReveal}
                size="cta"
                type="button"
                variant="inverse"
              >
                Email me these results
                <IconArrowNarrowRight data-icon="inline-end" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
