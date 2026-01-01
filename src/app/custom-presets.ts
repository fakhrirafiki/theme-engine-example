import { type TweakCNThemePreset } from "@fakhrirafiki/theme-engine";

// Custom theme presets (example)
export const customPresets = {
  "my-brand-1": {
    label: "My Brand 1 (Default)",
    styles: {
      light: {
        spacing: "0.27rem",
        radius: "1.4rem",

        background: "#F9FAFB",
        foreground: "#0A0F2D",

        card: "#ffffff", //  beda tipis dari putih
        "card-foreground": "#0A0F2D",

        popover: "#ffffff",
        "popover-foreground": "#0A0F2D",

        //  Primary  sedikit lebih cerah, tidak mirip Fazz
        primary: "#0E52E8",
        "primary-hover": "#0C47D1",
        "primary-active": "#0A3EB5",
        "primary-foreground": "#ffffff",

        secondary: "#E5E7EB",
        "secondary-foreground": "#0A0F2D",

        muted: "#F5F7FA",
        "muted-foreground": "#6A7A95",

        //  Accent  airy, friendly, beda brand tone
        accent: "#EAF2FF",
        "accent-foreground": "#0E52E8",

        destructive: "#E11D48",
        "destructive-foreground": "#ffffff",

        //  Soft neutral border (premium, tidak keras)
        border: "#E4E7EB",
        input: "#E4E7EB",
        ring: "#0E52E8",

        "text-foreground": "#0A0F2D",
        "text-muted-foreground": "#6A7A95",
        "text-primary-foreground": "#0E52E8",

        //  Status colors (lebih enterprise, kurang saturated)
        "accent-success": "#23C07A",
        "accent-success-foreground": "#0A0F2D",

        "accent-info": "#2EA8F5",
        "accent-info-foreground": "#0A0F2D",

        "accent-warning": "#F5B85C",
        "accent-warning-foreground": "#0A0F2D",

        "accent-danger": "#E85B5B",
        "accent-danger-foreground": "#ffffff",

        "font-sans": "Plus Jakarta Sans, sans-serif",
        "font-serif": "Lora, serif",
        "font-mono": "Geist Mono, monospace",

        "accent-brand": "#F97316", // Coral orange
        "accent-brand-foreground": "#FFFFFF",

        "accent-feature": "#FB923C", // Lighter orange
        "accent-feature-foreground": "#0F172A",

        "accent-highlight": "#E879F9", // fun pink-violet accent
        "accent-highlight-foreground": "#0F172A",
      },

      dark: {
        spacing: "0.27rem",
        radius: "1.4rem",

        //  Background baru  lebih deep, beda tone dari Fazz
        background: "#0D1320",
        foreground: "#F9FAFB",

        //  Card lebih naik 34 luminance step dari bg
        card: "#131C2D",
        "card-foreground": "#F9FAFB",

        popover: "#131C2D",
        "popover-foreground": "#F9FAFB",

        //  Primary  sama seperti light (consistency)
        primary: "#0E52E8",
        "primary-hover": "#0C47D1",
        "primary-active": "#0A3EB5",
        "primary-foreground": "#F9FAFB",

        secondary: "#162235",
        "secondary-foreground": "#F9FAFB",

        muted: "#1A2A40",
        "muted-foreground": "#A0AEC0",

        //  Accent  cool navy, tidak terlalu biru
        accent: "#15263E",
        "accent-foreground": "#F9FAFB",

        destructive: "#F87171",
        "destructive-foreground": "#0F1525",

        //  Border dark  lebih terlihat sedikit dari versi lama
        border: "#1A2A40",
        input: "#1E3A66",
        ring: "#0E52E8",

        "text-foreground": "#F9FAFB",
        "text-muted-foreground": "#A5B4CF",
        "text-primary-foreground": "#58AEFF",

        //  Status colors  tone lebih soft & tidak memecah UI
        "accent-success": "#1FA45C",
        "accent-success-foreground": "#0F1525",

        "accent-info": "#248BD6",
        "accent-info-foreground": "#0F1525",

        "accent-warning": "#D8A833",
        "accent-warning-foreground": "#0F1525",

        "accent-danger": "#E85B5B",
        "accent-danger-foreground": "#0F1525",

        "font-sans": "Plus Jakarta Sans, sans-serif",
        "font-serif": "Lora, serif",
        "font-mono": "Geist Mono, monospace",

        "accent-brand": "#FB923C", // warm orange coral (brand)
        "accent-brand-foreground": "#0F172A",

        "accent-feature": "#F472B6", // playful pink for feature highlight
        "accent-feature-foreground": "#0F172A",

        "accent-highlight": "#A78BFA", // lavender for accents
        "accent-highlight-foreground": "#0F172A",
      },
    },
  },

  "my-brand-2": {
    label: "My Brand 2",
    styles: {
      light: {
        radius: "0.5rem",
        spacing: "0.25rem",

        background: "#F9FAFB",
        foreground: "#111113",

        card: "#ffffff",
        "card-foreground": "#111113",

        popover: "#ffffff",
        "popover-foreground": "#111113",

        primary: "#e64780",
        "primary-foreground": "#ffffff",

        secondary: "#f3f3f4",
        "secondary-foreground": "#111113",

        muted: "#f6f6f7",
        "muted-foreground": "#6b6b70",

        accent: "#f3f3f4",
        "accent-foreground": "#111113",

        destructive: "#d92d2d",
        "destructive-foreground": "#ffffff",

        border: "#e4e4e7",
        input: "#e1e1e4",
        ring: "#e64780",

        "chart-1": "#e64780",
        "chart-2": "#8dd646",
        "chart-3": "#f98a37",
        "chart-4": "#a58bfa",
        "chart-5": "#26c1b2",

        sidebar: "#ffffff",
        "sidebar-foreground": "#111113",
        "sidebar-primary": "#e64780",
        "sidebar-primary-foreground": "#ffffff",
        "sidebar-accent": "#f3f3f4",
        "sidebar-accent-foreground": "#111113",
        "sidebar-border": "#e4e4e7",
        "sidebar-ring": "#e64780",

        "font-sans": "Poppins, sans-serif",
        "font-serif": "serif",
        "font-mono": "monospace",

        "accent-info": "#3B82F6",
        "accent-info-foreground": "#FFFFFF",

        "accent-success": "#22C55E",
        "accent-success-foreground": "#FFFFFF",

        "accent-warning": "#F59E0B",
        "accent-warning-foreground": "#FFFFFF",

        "accent-danger": "#EF4444",
        "accent-danger-foreground": "#FFFFFF",

        "accent-brand": "#F97316", // Coral orange
        "accent-brand-foreground": "#FFFFFF",

        "accent-feature": "#FB923C", // Lighter orange
        "accent-feature-foreground": "#0F172A",

        "accent-highlight": "#E879F9", // fun pink-violet accent
        "accent-highlight-foreground": "#0F172A",
      },

      dark: {
        // spacing: '0.27rem',
        // radius: '1.4rem',

        radius: "0.5rem",
        spacing: "0.25rem",

        background: "#0d0f12", //  FIX: tidak lagi coklat
        foreground: "#e4e4e7",

        card: "#121418", //   cool slate
        "card-foreground": "#e4e4e7",

        popover: "#121418",
        "popover-foreground": "#e4e4e7",

        primary: "#e64780", // tetap karena sudah fresh
        "primary-foreground": "#ffffff",

        secondary: "#1a1c20",
        "secondary-foreground": "#e4e4e7",

        muted: "#1a1c20",
        "muted-foreground": "#8e8e94",

        accent: "#1a1c20",
        "accent-foreground": "#f4f4f5",

        destructive: "#b91c1c",
        "destructive-foreground": "#ffffff",

        border: "#26282c",
        input: "#1c1e22",
        ring: "#e64780",

        "chart-1": "#e64780",
        "chart-2": "#8dd646",
        "chart-3": "#f98a37",
        "chart-4": "#a58bfa",
        "chart-5": "#26c1b2",

        sidebar: "#0d0f12",
        "sidebar-foreground": "#e4e4e7",
        "sidebar-primary": "#e64780",
        "sidebar-primary-foreground": "#ffffff",
        "sidebar-accent": "#1a1c20",
        "sidebar-accent-foreground": "#f4f4f5",
        "sidebar-border": "#26282c",
        "sidebar-ring": "#e64780",

        "font-sans": "Poppins, sans-serif",
        "font-serif": "serif",
        "font-mono": "monospace",

        "accent-info": "#38BDF8", // bright sky blue
        "accent-info-foreground": "#0F172A",

        "accent-success": "#4ADE80", // fresh green
        "accent-success-foreground": "#0F172A",

        "accent-warning": "#FBBF24", // amber gold
        "accent-warning-foreground": "#0F172A",

        "accent-danger": "#F87171", // vivid red
        "accent-danger-foreground": "#0F172A",

        "accent-brand": "#FB923C", // warm orange coral (brand)
        "accent-brand-foreground": "#0F172A",

        "accent-feature": "#F472B6", // playful pink for feature highlight
        "accent-feature-foreground": "#0F172A",

        "accent-highlight": "#A78BFA", // lavender for accents
        "accent-highlight-foreground": "#0F172A",
      },
    },
  },
} satisfies Record<string, TweakCNThemePreset>;
