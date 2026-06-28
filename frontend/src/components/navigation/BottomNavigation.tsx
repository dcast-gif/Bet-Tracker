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
        minHeight: "74px",
        paddingBottom: "env(safe-area-inset-bottom)",
        background: colors.surface,
        borderTop: `1px solid ${colors.border}`,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: shadows.soft,
        backdropFilter: "blur(20px)",
      }}
    >
      <NavItem
        label="Home"
        active={active === "home"}
        onClick={onHome}
      >
        <HomeIcon active={active === "home"} />
      </NavItem>

      <button
        type="button"
        onClick={onAdd}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: `4px solid ${colors.surface}`,
          background: colors.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(-18px)",
          boxShadow: shadows.soft,
          cursor: "pointer",
        }}
      >
        <AddIcon active />
      </button>

      <NavItem
        label="Engine"
        active={active === "settings"}
        onClick={onSettings}
      >
        <SettingsIcon active={active === "settings"} />
      </NavItem>
    </nav>
  );
}

function NavItem({
  children,
  label,
  active,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        background: "transparent",
        border: "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
        color: active ? colors.accent : colors.textMuted,
        cursor: "pointer",
        minWidth: "64px",
      }}
    >
      {children}

      <span
        style={{
          fontSize: "0.72rem",
          fontWeight: active ? 700 : 500,
        }}
      >
        {label}
      </span>
    </button>
  );
}