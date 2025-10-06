export const theme = {
  colors: {
    primary: "hsl(207 90% 54%)",
    secondary: "hsl(210 40% 96%)",
    accent: "hsl(24 95% 53%)",
    text: "hsl(222 47% 11%)",
  },
  radius: "0.75rem",
  font: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    glow: "var(--shadow-glow)",
  },
  transition: "var(--transition-smooth)",
};

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1";
