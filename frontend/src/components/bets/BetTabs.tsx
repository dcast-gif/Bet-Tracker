"use client";

type BetTab = "current" | "upcoming" | "past";

type BetTabsProps = {
  active: BetTab;
  onChange: (tab: BetTab) => void;
};

export default function BetTabs({
  active,
  onChange,
}: BetTabsProps) {
  const tabs: BetTab[] = ["current", "upcoming", "past"];

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        marginBottom: "24px",
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
              padding: "12px",
              borderRadius: "999px",
              border: selected
                ? "1px solid #22C55E"
                : "1px solid #23483A",
              background: selected
                ? "#123D2A"
                : "#0B1F17",
              color: selected
                ? "#22C55E"
                : "#A7B8AE",
              fontWeight: 600,
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