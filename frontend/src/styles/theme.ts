const darkTheme = {
  background: "#06140F",
  surface: "#0B1F17",
  surfaceElevated: "#10281F",
  border: "#23483A",

  textPrimary: "#F8FAFC",
  textSecondary: "#A7B8AE",
  textMuted: "#6F8277",

  accent: "#22C55E",
  accentSoft: "#163A2A",

  warning: "#FACC15",
  danger: "#EF4444",
  info: "#38BDF8",
};

const lightTheme = {
  background: "#F5F8F6",
  surface: "#FFFFFF",
  surfaceElevated: "#FFFFFF",
  border: "#D9E6DE",

  textPrimary: "#0B1F17",
  textSecondary: "#456355",
  textMuted: "#7A9185",

  accent: "#18864A",
  accentSoft: "#DDF5E6",

  warning: "#D4AF37",
  danger: "#DC2626",
  info: "#0284C7",
};

export const colors =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: light)").matches
    ? lightTheme
    : darkTheme;

export const spacing = {
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  xxl: "32px",
};

export const radius = {
  sm: "8px",
  md: "12px",
  lg: "18px",
  pill: "999px",
};

export const shadows = {
  soft: "0 10px 30px rgba(0,0,0,0.18)",
};