import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#0071e3] text-white hover:bg-[#0077ED] active:bg-[#006EDB]",
        secondary: "bg-[#e8e8ed] text-[#1d1d1f] hover:bg-[#e2e2e7]",
        outline: "border-2 border-[#0071e3] text-[#0071e3] bg-transparent hover:bg-[#0071e3] hover:text-white",
        ghost: "text-[#06c] hover:text-[#0077ED] hover:bg-[#f5f5f7]",
        dark: "bg-[#1d1d1f] text-white hover:bg-[#2d2d2f]",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-12 px-8 py-3 text-base",
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
