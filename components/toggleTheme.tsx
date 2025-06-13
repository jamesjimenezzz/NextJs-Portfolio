"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Always show light mode icon during initial mount
  if (!mounted || !resolvedTheme) {
    return (
      <Button 
        className="cursor-pointer transition-all duration-300" 
        variant="outline" 
        size="icon"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300" />
      </Button>
    )
  }

  return (
    <Button 
      className="cursor-pointer transition-all duration-300" 
      variant="outline" 
      size="icon" 
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all duration-300" />
      )}
    </Button>
  )
}
