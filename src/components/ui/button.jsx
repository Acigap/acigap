import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--primary-blue)] text-[var(--neutral-1)] hover:bg-[var(--primary-blue-hover)] active:bg-[var(--primary-blue-active)]",
        secondary: "bg-[var(--neutral-2)] text-[var(--neutral-10)] hover:bg-[var(--neutral-3)]",
        outline: "border-2 border-[var(--primary-blue)] text-[var(--primary-blue)] bg-transparent hover:bg-[var(--primary-blue)] hover:text-[var(--neutral-1)]",
        ghost: "text-[var(--primary-blue)] hover:text-[var(--primary-blue-hover)] hover:bg-[var(--neutral-2)]",
        destructive: "bg-[var(--error)] text-[var(--neutral-1)] hover:opacity-90",
        success: "bg-[var(--success)] text-[var(--neutral-1)] hover:opacity-90",
        warning: "bg-[var(--warning)] text-[var(--neutral-10)] hover:opacity-90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
