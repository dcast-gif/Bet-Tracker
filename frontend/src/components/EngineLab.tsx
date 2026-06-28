"use client";

import { useEffect, useMemo, useState } from "react";
import { Condition } from "../types/condition";
import { buildNotification } from "../engine/buildNotification";
import { createStatisticsSnapshot } from "../engine/createStatisticsSnapshot";
import { processSnapshot } from "../engine/processSnapshot";
import { createProgressMessage } from "../engine/createProgressMessage";

type Stats = {
  goals: number;
  corners: number;
  yellowCards: number;
  redCards: number;
};

const testCondition: Condition = {
  id: "over-2-5-goals",
  statistic: "goals",
  operator: "greater_than_or_equal",
  targetValue: 3,
  currentValue: 0,
  satisfied: false,
};

export default function EngineLab() {
  const [stats, setStats] = useState<Stats>({
    goals: 0,
    corners: 0,
    yellowCards: 0,
    redCards: 0,
  });

  const snapshot = useMemo(
    () =>
      createStatisticsSnapshot("engine-lab-match", {
        goals: stats.goals,
        corners: stats.corners,
        yellow_cards: stats.yellowCards,
        red_cards: stats.redCards,
      }),
    [stats]
  );

  const result = processSnapshot(snapshot, [
    {
      ...testCondition,
      currentValue: 0,
    },
  ])[0];

  const progressMessage = createProgressMessage(
    testCondition,
    result,
    "Goals"
  );

  function updateStat(stat: keyof Stats, change: number) {
    setStats((current) => ({
      ...current,
      [stat]: Math.max(0, current[stat] + change),
    }));
  }

  useEffect(() => {
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;
    if (!result.notificationRequired) return;
    if (result.currentValue === 0) return;

    const notification = buildNotification(testCondition, result, "Goals");

    if (!notification) return;

    new Notification(notification.title, {
      body: notification.message,
    });
  }, [result.currentValue, result.notificationRequired]);

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
        Simulate live stats and let the Progress Engine calculate the result.
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

        <h2>{progressMessage}</h2>

        <progress
          value={result.progressPercentage}
          max={100}
          style={{
            width: "100%",
            height: "18px",
          }}
        />

        <p style={{ color: "#94a3b8" }}>
          Engine calculated: {result.progressPercentage}%
        </p>
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
        <button type="button" onClick={onDecrease}>
          −
        </button>

        <span>{value}</span>

        <button type="button" onClick={onIncrease}>
          +
        </button>
      </div>
    </div>
  );
}