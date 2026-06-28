"use client";

import { useState } from "react";

type Stats = {
  goals: number;
  corners: number;
  yellowCards: number;
  redCards: number;
};

export default function EngineLab() {
  const [stats, setStats] = useState<Stats>({
    goals: 0,
    corners: 0,
    yellowCards: 0,
    redCards: 0,
  });

  function updateStat(stat: keyof Stats, change: number) {
    setStats((currentStats) => ({
      ...currentStats,
      [stat]: Math.max(0, currentStats[stat] + change),
    }));
  }

  return (
    <section
      style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#111827",
      }}
    >
      <h3>Engine Lab</h3>

      <p style={{ color: "#94a3b8" }}>
        Manually change match stats to test progress updates.
      </p>

      <StatControl
        label="Goals"
        value={stats.goals}
        onDecrease={() => updateStat("goals", -1)}
        onIncrease={() => updateStat("goals", 1)}
      />

      <StatControl
        label="Corners"
        value={stats.corners}
        onDecrease={() => updateStat("corners", -1)}
        onIncrease={() => updateStat("corners", 1)}
      />

      <StatControl
        label="Yellow Cards"
        value={stats.yellowCards}
        onDecrease={() => updateStat("yellowCards", -1)}
        onIncrease={() => updateStat("yellowCards", 1)}
      />

      <StatControl
        label="Red Cards"
        value={stats.redCards}
        onDecrease={() => updateStat("redCards", -1)}
        onIncrease={() => updateStat("redCards", 1)}
      />
    </section>
  );
}

type StatControlProps = {
  label: string;
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

function StatControl({
  label,
  value,
  onDecrease,
  onIncrease,
}: StatControlProps) {
  return (
    <div
      style={{
        marginTop: "16px",
        padding: "16px",
        borderRadius: "10px",
        border: "1px solid #334155",
        background: "#0f172a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <strong>{label}</strong>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button type="button" onClick={onDecrease}>
          -
        </button>

        <span>{value}</span>

        <button type="button" onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  );
}