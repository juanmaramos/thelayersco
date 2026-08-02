import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-medium tracking-normal whitespace-nowrap normal-case transition-colors focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive/10 text-destructive focus-visible:ring-destructive/20 [a]:hover:bg-destructive/20",
        outline: "border-border bg-background text-foreground [a]:hover:bg-muted",
        ghost: "border-transparent text-muted-foreground hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
        verified: "border-border bg-background text-success",
        review: "border-border bg-background text-foreground",
        pending: "border-border border-dashed bg-background text-muted-foreground",
        exception:
          "border-destructive/30 bg-destructive/5 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
