"use client";

import { colors, radius, shadows } from "../../styles/theme";
import HomeIcon from "./HomeIcon";
import AddIcon from "./AddIcon";
import SettingsIcon from "./SettingsIcon";

type BottomNavigationProps = {
  active: "home" | "settings";
  onHome?: () => void;
  onAdd?: () => void;
  onSettings?: () => void;
};

export default function BottomNavigation({
  active,
  onHome,
  onAdd,
  onSettings,
}: BottomNavigationProps) {
  return (
    <nav
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        height: "78px",
        background: colors.surface,
        borderTop: `1px solid ${colors.border}`,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: shadows.soft,
      }}
    >
      <button type="button" onClick={onHome} style={buttonStyle}>
        <HomeIcon active={active === "home"} />
      </button>

      <button
        type="button"
        onClick={onAdd}
        style={{
          width: "58px",
          height: "58px",
          borderRadius: "50%",
          border: `3px solid ${colors.surface}`,
          background: colors.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(-18px)",
          boxShadow: "0 10px 24px rgba(0,0,0,0.28)",
          cursor: "pointer",
        }}
      >
        <AddIcon active />
      </button>

      <button type="button" onClick={onSettings} style={buttonStyle}>
        <SettingsIcon active={active === "settings"} />
      </button>
    </nav>
  );
}

const buttonStyle: React.CSSProperties = {
  background: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  width: "54px",
  height: "54px",
  borderRadius: radius.pill,
};