import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        garamond: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        ink: "hsl(var(--ink))",
        cream: "hsl(var(--cream))",
        "cream-deep": "hsl(var(--cream-deep))",
        blush: "hsl(var(--blush))",
        sand: "hsl(var(--sand))",
        amber: {
          DEFAULT: "hsl(var(--amber))",
          100: "hsl(var(--amber-100))",
          200: "hsl(var(--amber-200))",
          400: "hsl(var(--amber-400))",
          500: "hsl(var(--amber-500))",
        },
        sage: {
          DEFAULT: "hsl(var(--sage))",
          100: "hsl(var(--sage-100))",
          200: "hsl(var(--sage-200))",
          400: "hsl(var(--sage-400))",
          500: "hsl(var(--sage-500))",
          soft: "hsl(var(--sage-soft))",
        },
        "sage-soft": "hsl(var(--sage-soft))",
        jade: "hsl(var(--jade))",
        "jade-deep": "hsl(var(--jade-deep))",
        forest: "hsl(var(--forest))",
        "forest-deep": "hsl(var(--forest-deep))",
        lime: "hsl(var(--lime))",
        gold: "hsl(var(--gold))",
        sidebar: {
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
          primary: "hsl(var(--primary))",
          "primary-foreground": "hsl(var(--primary-foreground))",
          accent: "hsl(var(--accent))",
          "accent-foreground": "hsl(var(--accent-foreground))",
          border: "hsl(var(--border))",
          ring: "hsl(var(--ring))",
        },
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-soft": "var(--gradient-soft)",
        "gradient-warm": "var(--gradient-warm)",
        "gradient-sage": "var(--gradient-sage)",
        "gradient-cta": "var(--gradient-cta)",
        "gradient-amber": "var(--gradient-amber)",
        "gradient-dark": "var(--gradient-dark)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        elegant: "var(--shadow-elegant)",
        cta: "var(--shadow-cta)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 8px)",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
