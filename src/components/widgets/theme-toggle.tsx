"use client"
import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "~/components/ui/button"
import Icon from "src/components/backend/icon"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Icon name="sun" className="block dark:hidden" />
      <Icon name="moon" className="hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
