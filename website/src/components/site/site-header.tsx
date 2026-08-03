"use client"

import { useCallback, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
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
  { label: "Workflow Launch", href: "/workflow-launch" },
  { label: "What we build", href: "/#deliverable" },
  { label: "Workflow examples", href: "/#patterns" },
  { label: "How we work", href: "/#approach" },
]

type SiteHeaderProps = {
  brandHref?: string
  companyName: string
  navItems?: ReadonlyArray<{ label: string; href: string }>
  ctaLabel?: string
  ctaHref?: string
}

export function SiteHeader({
  brandHref = "/",
  companyName,
  navItems = defaultNavItems,
  ctaLabel = "Discuss your workflow",
  ctaHref = "#discuss",
}: SiteHeaderProps) {
  const pathname = usePathname()
  const [activeAnchorHref, setActiveAnchorHref] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateScrolledState = () => setIsScrolled(window.scrollY > 8)
    updateScrolledState()
    window.addEventListener("scroll", updateScrolledState, { passive: true })

    return () => window.removeEventListener("scroll", updateScrolledState)
  }, [])

  useEffect(() => {
    if (pathname !== "/") {
      return
    }

    const anchorItems = navItems.flatMap((item) => {
      const [itemPath, sectionId] = item.href.split("#")

      if (itemPath !== "/" || !sectionId) {
        return []
      }

      const section = document.getElementById(sectionId)
      return section ? [{ href: item.href, section }] : []
    })

    if (anchorItems.length === 0) {
      return
    }

    let frameId: number | null = null

    const updateActiveAnchor = () => {
      frameId = null
      const documentScrollPadding = Number.parseFloat(
        window.getComputedStyle(document.documentElement).scrollPaddingTop
      )
      const sectionScrollMargin = Number.parseFloat(
        window.getComputedStyle(anchorItems[0].section).scrollMarginTop
      )
      const activeLine = documentScrollPadding + sectionScrollMargin + 1
      const activeItem = anchorItems.find(({ section }) => {
        const bounds = section.getBoundingClientRect()
        return bounds.top <= activeLine && bounds.bottom > activeLine
      })
      const nextHref = activeItem?.href ?? null

      setActiveAnchorHref((currentHref) =>
        currentHref === nextHref ? currentHref : nextHref
      )
    }

    const requestUpdate = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(updateActiveAnchor)
      }
    }

    requestUpdate()
    window.addEventListener("hashchange", requestUpdate)
    window.addEventListener("resize", requestUpdate)
    window.addEventListener("scroll", requestUpdate, { passive: true })

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener("hashchange", requestUpdate)
      window.removeEventListener("resize", requestUpdate)
      window.removeEventListener("scroll", requestUpdate)
    }
  }, [navItems, pathname])

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
              {navItems.map((item) => {
                const isAnchor = item.href.includes("#")
                const isCurrent = isAnchor
                  ? pathname === "/" && item.href === activeAnchorHref
                  : item.href === pathname

                return (
                  <li key={item.href}>
                    <a
                      aria-current={
                        isCurrent ? (isAnchor ? "location" : "page") : undefined
                      }
                      className={cn(
                        "relative flex min-h-11 min-w-11 items-center justify-center px-1 text-sm font-medium text-muted-foreground transition-colors duration-[var(--duration-state)] after:absolute after:inset-x-1 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-foreground after:transition-transform after:duration-[var(--duration-state)] hover:text-foreground",
                        isCurrent && "text-foreground after:scale-x-100"
                      )}
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
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
            <SheetHeader className="p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
            </SheetHeader>
            <nav aria-label="Mobile navigation" className="px-8 pt-16 pb-8">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isAnchor = item.href.includes("#")
                  const isCurrent = isAnchor
                    ? pathname === "/" && item.href === activeAnchorHref
                    : item.href === pathname

                  return (
                    <li key={item.href}>
                      <a
                        aria-current={
                          isCurrent ? (isAnchor ? "location" : "page") : undefined
                        }
                        className={cn(
                          "relative flex min-h-12 items-center border-b pl-4 text-base font-medium before:absolute before:left-0 before:h-5 before:w-0.5 before:bg-transparent",
                          isCurrent && "text-signal-strong before:bg-signal-strong"
                        )}
                        href={item.href}
                        onClick={closeNavigation}
                      >
                        {item.label}
                      </a>
                    </li>
                  )
                })}
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
