"use client";

import { useEffect, useState } from "react";

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

  const progress = Math.min(stats.goals, 3);

  function updateStat(stat: keyof Stats, change: number) {
    setStats((current) => ({
      ...current,
      [stat]: Math.max(0, current[stat] + change),
    }));
  }

  useEffect(() => {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;

    if (stats.goals === 0) return;

    if (stats.goals >= 3) {
      new Notification("✅ Selection Complete", {
        body: "Over 2.5 Goals\n3 / 3 Goals",
      });
    } else {
      new Notification("⚽ Goal", {
        body: `Over 2.5 Goals\n${progress} / 3 Goals`,
      });
    }
  }, [stats.goals]);

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
        Simulate a live football match.
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

      <div
        style={{
          marginTop: "24px",
          padding: "18px",
          borderRadius: "10px",
          background: "#0f172a",
          border: "1px solid #334155",
        }}
      >
        <h4>Tracked Market</h4>

        <p>Over 2.5 Goals</p>

        <h2>{progress} / 3 Goals</h2>

        <progress
          value={progress}
          max={3}
          style={{
            width: "100%",
            height: "18px",
          }}
        />
      </div>
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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <strong>{label}</strong>

      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <button onClick={onDecrease}>−</button>

        <span>{value}</span>

        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}