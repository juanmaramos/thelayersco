"use client"

import { useCallback, useEffect, useState } from "react"
import { IconMenu2 } from "@tabler/icons-react"

import { LayersMark } from "@/components/site/layers-mark"
import { TrackedAnchor } from "@/components/site/tracked-anchor"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const defaultNavItems = [
  { label: "Workflows", href: "#workflows" },
  { label: "Evidence", href: "#control" },
  { label: "Practices", href: "#practices" },
  { label: "Method", href: "#method" },
  { label: "FAQ", href: "#faq" },
]

type SiteHeaderProps = {
  brandHref?: string
  companyName: string
  navItems?: ReadonlyArray<{ label: string; href: string }>
  ctaLabel?: string
  ctaHref?: string
}

export function SiteHeader({
  brandHref = "#top",
  companyName,
  navItems = defaultNavItems,
  ctaLabel = "Discuss a workflow",
  ctaHref = "#discuss",
}: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 8)
    updateScrolledState()
    window.addEventListener("scroll", updateScrolledState, { passive: true })

    return () => window.removeEventListener("scroll", updateScrolledState)
  }, [])

  const handleOpenChange = useCallback((open: boolean) => {
    setIsOpen(open)
  }, [])

  const closeNavigation = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 h-[4.5rem] border-b bg-background transition-colors duration-[var(--duration-state)]",
        isScrolled ? "border-border" : "border-transparent"
      )}
    >
      <div className="section-shell flex h-full items-center justify-between gap-6">
        <a
          className="flex min-h-11 items-center gap-2.5 text-[1.375rem] leading-none font-semibold tracking-[-0.035em]"
          href={brandHref}
        >
          <LayersMark className="size-8 shrink-0" variant="positive" />
          <span>{companyName}</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="flex min-h-11 min-w-11 items-center justify-center px-1 text-sm font-medium text-muted-foreground transition-colors duration-[var(--duration-state)] hover:text-foreground"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <TrackedAnchor
            className={buttonVariants({ size: "cta" })}
            eventName="cta_click"
            eventProperties={{ location: "header" }}
            href={ctaHref}
          >
            {ctaLabel}
          </TrackedAnchor>
        </div>

        <Sheet open={isOpen} onOpenChange={handleOpenChange}>
          <SheetTrigger
            render={
              <Button
                aria-label="Open navigation"
                className="md:hidden"
                size="icon-lg"
                variant="ghost"
              />
            }
          >
            <IconMenu2 className="size-5" />
          </SheetTrigger>
          <SheetContent className="w-[min(88vw,24rem)]" side="right">
            <SheetHeader>
              <SheetTitle>{companyName}</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="px-8 py-4">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      className="flex min-h-12 items-center border-b text-base font-medium"
                      href={item.href}
                      onClick={closeNavigation}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <TrackedAnchor
                className={cn(
                  buttonVariants({ size: "cta" }),
                  "mt-8 w-full"
                )}
                eventName="cta_click"
                eventProperties={{ location: "mobile_navigation" }}
                href={ctaHref}
                onClick={closeNavigation}
              >
                {ctaLabel}
              </TrackedAnchor>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
