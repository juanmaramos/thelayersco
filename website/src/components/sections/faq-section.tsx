import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What makes a workflow a good starting point?",
    answer:
      "A strong candidate repeats, has a clear owner and measurable burden, uses representative data, requires substantial preparation or review, and produces an output that can be evaluated. The first conversation may narrow or reject a workflow that is not ready.",
  },
  {
    question: "How is this different from buying another AI tool?",
    answer:
      "The unit of work is a complete operating workflow, not a software feature. The engagement combines operating diagnosis, workflow redesign, product definition, implementation, integration, evaluation, and adoption around one defined result.",
  },
  {
    question: "What data or system access is needed?",
    answer:
      "That depends on the workflow. Validation begins with representative material and an explicit view of the systems, documents, permissions, and integration constraints needed to test the proposed route. Access should remain limited to what the agreed work requires.",
  },
  {
    question: "Where does human judgment remain?",
    answer:
      "Material, sensitive, uncertain, or exceptional decisions remain with accountable human reviewers. AI may support preparation, classification, analysis, or first-pass production only where the workflow evidence supports it.",
  },
  {
    question: "What does an engagement produce?",
    answer:
      "The work progresses through a current-state baseline, a representative evaluation, and—only when the evidence supports it—a working production workflow with required integrations, controls, and operating ownership.",
  },
  {
    question: "How is success measured?",
    answer:
      "The workflow owner and implementation team agree the baseline and evaluation before production. The relevant measure depends on the process and may concern time, expert effort, quality, cycle time, or another operating result that can be observed without inventing a universal target.",
  },
]

export function FaqSection() {
  return (
    <section className="section-anchor bg-canvas" id="faq">
      <div className="section-shell grid gap-12 py-20 sm:py-24 md:grid-cols-12 md:gap-6 lg:py-28">
        <div className="flex flex-col gap-6 md:col-span-5 md:pr-8">
          <p className="operational-label text-signal-strong">FAQ</p>
          <h2 className="max-w-[13ch] text-[clamp(2.75rem,4.2vw,4rem)] leading-[0.96] font-semibold tracking-[-0.05em]">
            Questions that determine fit.
          </h2>
        </div>

        <div className="border-t border-line-strong md:col-span-7">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
