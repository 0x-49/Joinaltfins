import { useTheme } from "@/components/theme-provider"
import { Sun, Moon, Monitor } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
        title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      >
        {theme === "light" ? (
          <Sun className="h-5 w-5 text-primary" />
        ) : theme === "dark" ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Monitor className="h-5 w-5 text-primary" />
        )}
      </button>
    </div>
  )
}