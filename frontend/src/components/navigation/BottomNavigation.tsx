"use client";

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
        height: "76px",
        background: "#0B1F17",
        borderTop: "1px solid #23483A",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <button
        type="button"
        onClick={onHome}
        style={buttonStyle}
      >
        <HomeIcon active={active === "home"} />
      </button>

      <button
        type="button"
        onClick={onAdd}
        style={{
          width: "62px",
          height: "62px",
          borderRadius: "50%",
          border: "none",
          background: "#22C55E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "translateY(-18px)",
          boxShadow: "0 8px 24px rgba(34,197,94,0.35)",
          cursor: "pointer",
        }}
      >
        <AddIcon active />
      </button>

      <button
        type="button"
        onClick={onSettings}
        style={buttonStyle}
      >
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
};