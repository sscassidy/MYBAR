import type { Config } from "tailwindcss";

// Theme-ready design tokens shared across the app. Neutral palette only —
// swap the CSS variables in globals.css for a brand theme later without
// touching component code.
export default {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--color-background) / <alpha-value>)",
        foreground: "hsl(var(--color-foreground) / <alpha-value>)",
        surface: "hsl(var(--color-surface) / <alpha-value>)",
        "surface-muted": "hsl(var(--color-surface-muted) / <alpha-value>)",
        border: "hsl(var(--color-border) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        "primary-foreground": "hsl(var(--color-primary-foreground) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--color-muted-foreground) / <alpha-value>)",
        danger: "hsl(var(--color-danger) / <alpha-value>)",
        "danger-foreground": "hsl(var(--color-danger-foreground) / <alpha-value>)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Inter",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
