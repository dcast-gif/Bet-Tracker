"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Condition } from "../types/condition";
import { buildNotification } from "../engine/buildNotification";
import { createStatisticsSnapshot } from "../engine/createStatisticsSnapshot";
import { processSnapshot } from "../engine/processSnapshot";
import { createProgressMessage } from "../engine/createProgressMessage";
import EngineTimeline from "./EngineTimeline";

type Stats = {
  goals: number;
  corners: number;
  yellowCards: number;
  redCards: number;
};

type TimelineEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
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
  const previousGoalsRef = useRef(0);

  const [minute, setMinute] = useState(0);
  const [events, setEvents] = useState<TimelineEvent[]>([]);

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

  const condition = {
    ...testCondition,
    currentValue: previousGoalsRef.current,
  };

  const result = processSnapshot(snapshot, [condition])[0];

  const progressMessage = createProgressMessage(condition, result, "Goals");

  function addTimelineEvent(title: string, description: string) {
    setEvents((currentEvents) => [
      {
        id: crypto.randomUUID(),
        time: `${minute}'`,
        title,
        description,
      },
      ...currentEvents,
    ]);
  }

  function updateStat(
    stat: keyof Stats,
    change: number,
    label: string
  ) {
    setMinute((currentMinute) => currentMinute + 1);

    setStats((currentStats) => ({
      ...currentStats,
      [stat]: Math.max(0, currentStats[stat] + change),
    }));

    addTimelineEvent(
      change > 0 ? `${label} Added` : `${label} Removed`,
      `${label} changed by ${change > 0 ? "+" : ""}${change}`
    );
  }

  useEffect(() => {
    if (result.currentValue === previousGoalsRef.current) return;

    const notification = buildNotification(condition, result, "Goals");

    if (notification) {
      addTimelineEvent(
        "Notification Generated",
        `${notification.title}: ${notification.message}`
      );

      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(notification.title, {
          body: notification.message,
        });
      }
    }

    previousGoalsRef.current = result.currentValue;
  }, [result.currentValue]);

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
        onDecrease={() => updateStat("goals", -1, "Goal")}
        onIncrease={() => updateStat("goals", 1, "Goal")}
      />

      <StatControl
        label="Corners"
        value={stats.corners}
        onDecrease={() => updateStat("corners", -1, "Corner")}
        onIncrease={() => updateStat("corners", 1, "Corner")}
      />

      <StatControl
        label="Yellow Cards"
        value={stats.yellowCards}
        onDecrease={() => updateStat("yellowCards", -1, "Yellow Card")}
        onIncrease={() => updateStat("yellowCards", 1, "Yellow Card")}
      />

      <StatControl
        label="Red Cards"
        value={stats.redCards}
        onDecrease={() => updateStat("redCards", -1, "Red Card")}
        onIncrease={() => updateStat("redCards", 1, "Red Card")}
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

      <EngineTimeline events={events} />
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