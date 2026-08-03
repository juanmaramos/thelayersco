"use client"

import { useId, useState } from "react"
import {
  IconCheck,
  IconFileSpreadsheet,
  IconFileText,
  IconFolder,
  IconLoader2,
  IconMessage,
  IconMicrophone,
  IconPresentation,
  IconSettings,
  IconSparkles,
} from "@tabler/icons-react"

import {
  ClaudeMark,
  GeminiMark,
  OpenAIMark,
} from "@/components/site/platform-logo-strip"
import { cn } from "@/lib/utils"

type PlatformId = "codex" | "claude" | "gemini"

const platforms = [
  { id: "codex", label: "Codex", mark: <OpenAIMark /> },
  { id: "claude", label: "Claude", mark: <ClaudeMark /> },
  { id: "gemini", label: "Gemini", mark: <GeminiMark /> },
] as const satisfies ReadonlyArray<{
  id: PlatformId
  label: string
  mark: React.ReactNode
}>

const workflowSteps = [
  "Read approved sources",
  "Run calculations and checks",
  "Draft client report",
  "Build review presentation",
] as const

const reviewStep = "Prepare expert review"

const outputs = [
  { name: "Analysis.xlsx", icon: IconFileSpreadsheet },
  { name: "Client report.docx", icon: IconFileText },
  { name: "Review deck.pptx", icon: IconPresentation },
] as const

function CodexFrame() {
  return (
    <article
      aria-label="Illustrative Codex plugin run"
      className="platform-native-frame platform-native-codex"
    >
      <header className="codex-titlebar">
        <div aria-hidden="true" className="platform-window-dots">
          <span />
          <span />
          <span />
        </div>
        <p>Client delivery pack</p>
        <span className="platform-title-action">Open in</span>
      </header>

      <div className="codex-layout">
        <aside aria-label="Illustrative Codex navigation" className="codex-sidebar">
          <div className="platform-product-name">
            <OpenAIMark />
            <span>Codex</span>
          </div>
          <nav className="platform-side-nav" aria-label="Codex preview navigation">
            <span><IconMessage aria-hidden="true" /> <b>New chat</b></span>
            <span className="is-active"><IconSparkles aria-hidden="true" /> <b>Plugins</b></span>
            <span><IconFolder aria-hidden="true" /> <b>Projects</b></span>
          </nav>
          <div className="codex-project-list">
            <p>DELIVERY</p>
            <span>Client pack</span>
            <span>Evaluation set</span>
          </div>
        </aside>

        <section className="codex-conversation" aria-labelledby="codex-run-title">
          <div className="platform-run-heading">
            <p>Plugin running</p>
            <h3 id="codex-run-title">Prepare client delivery pack</h3>
          </div>
          <div className="codex-prompt">
            Use the approved workbook, methodology, and slide template. Run the
            checks, prepare the report and deck, and stop uncertain work for
            review.
          </div>
          <p className="codex-tool-status">
            <IconSparkles aria-hidden="true" /> Loaded client-delivery-pack and
            3 tools
          </p>
          <ol className="codex-run-list">
            {workflowSteps.map((step) => (
              <li key={step}>
                <span className="is-complete">
                  <IconCheck aria-label="Complete" />
                </span>
                <div>
                  <b>{step}</b>
                </div>
              </li>
            ))}
            <li>
              <span className="is-running">
                <IconLoader2 aria-label="In progress" />
              </span>
              <div>
                <b>{reviewStep}</b>
                <p>Three exceptions remain with the delivery lead.</p>
              </div>
            </li>
          </ol>
        </section>

        <aside className="codex-environment" aria-label="Illustrative Codex environment">
          <div className="platform-aside-heading">
            <p>Environment</p>
            <span>+</span>
          </div>
          <div className="codex-environment-row">
            <b>Run</b>
            <span className="status-positive">4 complete</span>
          </div>
          <div className="codex-environment-row">
            <b>Review</b>
            <span className="status-review">3 items</span>
          </div>
          <div className="codex-files">
            <p>OUTPUTS</p>
            {outputs.map((output) => {
              const OutputIcon = output.icon
              return (
                <span key={output.name}>
                  <OutputIcon aria-hidden="true" /> {output.name}
                </span>
              )
            })}
          </div>
        </aside>
      </div>
    </article>
  )
}

function ClaudeFrame() {
  return (
    <article
      aria-label="Illustrative Claude skill run"
      className="platform-native-frame platform-native-claude"
    >
      <header className="claude-titlebar">
        <div aria-hidden="true" className="platform-window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="claude-mode-switch" aria-label="Illustrative Claude mode">
          <span>Chat</span>
          <span className="is-active">Cowork</span>
          <span>Code</span>
        </div>
        <span className="platform-title-action">Workspace</span>
      </header>

      <div className="claude-layout">
        <aside className="claude-rail" aria-label="Illustrative Claude navigation">
          <ClaudeMark />
          <IconMessage aria-hidden="true" />
          <IconFolder aria-hidden="true" />
          <IconSettings aria-hidden="true" />
        </aside>

        <section className="claude-conversation" aria-labelledby="claude-run-title">
          <p className="claude-thread-name">Prepare client delivery pack</p>
          <div className="claude-assistant-copy">
            <p>
              The analysis, report, and review deck are ready. I found three
              exceptions that need the delivery lead’s judgment.
            </p>
            <button type="button">Loaded tools <span>›</span></button>
          </div>
          <div className="claude-method-card">
            <p><b>Method</b> Approved delivery methodology v2.0</p>
            <p><b>Outputs</b> Analysis, client report, and review deck</p>
            <p><b>Human control</b> Exceptions and final approval</p>
          </div>
          <div className="claude-writing-state" role="status">
            <ClaudeMark />
            <div>
              <b>Preparing expert review</b>
              <p>Attaching evidence to three exceptions…</p>
            </div>
          </div>
        </section>

        <aside className="claude-context" aria-label="Illustrative Claude progress and context">
          <section>
            <div className="platform-aside-heading">
              <p>Progress</p>
              <span>⌄</span>
            </div>
            <ol className="claude-progress-list">
              {workflowSteps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                  <IconCheck aria-label="Complete" />
                </li>
              ))}
              <li className="is-active">
                <span>5</span>
                <p>{reviewStep}</p>
                <IconLoader2 aria-label="In progress" />
              </li>
            </ol>
          </section>
          <section className="claude-context-card">
            <div className="platform-aside-heading"><p>Context</p><span>⌄</span></div>
            <p className="claude-context-label">SKILL</p>
            <b>client-delivery-pack</b>
            <p className="claude-context-label">FILES</p>
            <span>Methodology · Workbook · Template</span>
          </section>
        </aside>
      </div>
    </article>
  )
}

function GeminiFrame() {
  return (
    <article
      aria-label="Illustrative Gemini task run"
      className="platform-native-frame platform-native-gemini"
    >
      <div className="gemini-layout">
        <aside className="gemini-sidebar" aria-label="Illustrative Gemini task list">
          <div className="platform-product-name">
            <GeminiMark />
            <span>Gemini</span>
          </div>
          <button type="button" className="gemini-create-task">
            <span aria-hidden="true">+</span>
            <b>Create a task</b>
          </button>
          <p className="gemini-list-label">All tasks</p>
          <div className="gemini-task-list">
            <article className="is-active">
              <b>Client delivery pack</b>
              <p>Preparing the review package.</p>
            </article>
            <article>
              <b>Monthly reporting</b>
              <p>Reconciled source data.</p>
            </article>
            <article>
              <b>Evidence review</b>
              <p>Flagged missing citations.</p>
            </article>
          </div>
        </aside>

        <section className="gemini-result" aria-labelledby="gemini-run-title">
          <header>
            <p id="gemini-run-title">Client delivery pack</p>
            <span>Review required</span>
          </header>
          <div className="gemini-result-body">
            <p className="gemini-activity">Reviewing approved workbook and methodology &nbsp;›</p>
            <h3>Client delivery pack ready for review</h3>
            <p>
              I have validated the approved sources and completed the analysis.
              The report and presentation are ready for final review.
            </p>
            <div className="gemini-document">
              <h4>Created files</h4>
              <ul>
                {outputs.map((output) => {
                  const OutputIcon = output.icon
                  return (
                    <li key={output.name}>
                      <OutputIcon aria-hidden="true" />
                      <span><b>{output.name}</b><small>Generated from the approved template</small></span>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="gemini-review-note">
              <IconSparkles aria-hidden="true" />
              <p><b>Expert review required</b><span>Three exceptions remain with the delivery lead.</span></p>
            </div>
            <div aria-label="Illustrative Gemini prompt bar" className="gemini-composer">
              <span aria-hidden="true">+</span>
              <p>What should we do next?</p>
              <IconMicrophone aria-hidden="true" />
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

function PlatformFrame({ platform }: { platform: PlatformId }) {
  if (platform === "claude") return <ClaudeFrame />
  if (platform === "gemini") return <GeminiFrame />
  return <CodexFrame />
}

export function PlatformWorkflowDemo() {
  const tabListId = useId()
  const [platform, setPlatform] = useState<PlatformId>("codex")

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-line-strong py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[50ch] text-sm leading-6 text-muted-foreground">
          Choose a platform to see how the same workflow fits its native work
          pattern.
        </p>
        <div
          aria-label="Choose an illustrative AI platform"
          className="flex w-full border border-line-strong bg-background sm:w-auto"
          id={tabListId}
          role="tablist"
        >
          {platforms.map((item) => {
            const isSelected = platform === item.id

            return (
              <button
                aria-controls={`${tabListId}-${item.id}-panel`}
                aria-selected={isSelected}
                className={cn(
                  "flex min-h-11 min-w-0 flex-1 items-center justify-center gap-2 border-r px-3 text-xs font-semibold transition-colors duration-[var(--duration-state)] last:border-r-0 sm:min-w-28",
                  isSelected
                    ? "bg-ink text-on-ink"
                    : "bg-background text-muted-foreground hover:text-foreground"
                )}
                id={`${tabListId}-${item.id}-tab`}
                key={item.id}
                onClick={() => setPlatform(item.id)}
                role="tab"
                type="button"
              >
                {item.mark}
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="scroll-mt-28" id="platform-preview">
        <div
          aria-labelledby={`${tabListId}-${platform}-tab`}
          className="mt-6"
          id={`${tabListId}-${platform}-panel`}
          role="tabpanel"
        >
          <PlatformFrame platform={platform} />
        </div>
        <p className="mt-3 font-mono text-[0.625rem] leading-5 tracking-[0.06em] text-muted-foreground uppercase">
          Illustrative interfaces · product names and marks belong to their owners
        </p>
      </div>
    </div>
  )
}
