"use client";

import { colors, radius } from "../../styles/theme";

type BetTab = "current" | "upcoming" | "past";

type BetTabsProps = {
  active: BetTab;
  onChange: (tab: BetTab) => void;
};

export default function BetTabs({ active, onChange }: BetTabsProps) {
  const tabs: BetTab[] = ["current", "upcoming", "past"];

  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        marginBottom: "24px",
        padding: "5px",
        borderRadius: radius.pill,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        boxShadow: "var(--shadow-soft)",
      }}
    >
      {tabs.map((tab) => {
        const selected = active === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: radius.pill,
              border: "none",
              background: selected ? colors.accentSoft : "transparent",
              color: selected ? colors.accent : colors.textSecondary,
              fontWeight: selected ? 800 : 700,
              textTransform: "capitalize",
              cursor: "pointer",
            }}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}