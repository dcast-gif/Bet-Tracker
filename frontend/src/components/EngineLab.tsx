"use client";

import { useMemo, useRef, useState } from "react";
import { Condition } from "../types/condition";
import { buildNotification } from "../engine/buildNotification";
import { createProgressMessage } from "../engine/createProgressMessage";
import { createStatisticsSnapshot } from "../engine/createStatisticsSnapshot";
import { processSnapshot } from "../engine/processSnapshot";
import { DEFAULT_MARKETS } from "../engine/defaultMarkets";
import EngineTimeline from "./EngineTimeline";

type MarketKey = keyof typeof DEFAULT_MARKETS;

type MatchStats = {
  homeGoals: number;
  awayGoals: number;
  homeCorners: number;
  awayCorners: number;
  homeYellowCards: number;
  awayYellowCards: number;
  homeRedCards: number;
  awayRedCards: number;
};

type TimelineEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
};

const initialStats: MatchStats = {
  homeGoals: 0,
  awayGoals: 0,
  homeCorners: 0,
  awayCorners: 0,
  homeYellowCards: 0,
  awayYellowCards: 0,
  homeRedCards: 0,
  awayRedCards: 0,
};

export default function EngineLab() {
  const previousValueRef = useRef(0);

  const [minute, setMinute] = useState(0);
  const [stats, setStats] = useState<MatchStats>(initialStats);
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [selectedMarketKey, setSelectedMarketKey] =
    useState<MarketKey>("over25Goals");

  const selectedMarket = DEFAULT_MARKETS[selectedMarketKey];

  const snapshot = useMemo(
    () =>
      createStatisticsSnapshot("engine-lab-match", {
        goals: stats.homeGoals + stats.awayGoals,
        home_goals: stats.homeGoals,
        away_goals: stats.awayGoals,
        corners: stats.homeCorners + stats.awayCorners,
        home_corners: stats.homeCorners,
        away_corners: stats.awayCorners,
        yellow_cards: stats.homeYellowCards + stats.awayYellowCards,
        red_cards: stats.homeRedCards + stats.awayRedCards,
      }),
    [stats]
  );

  const condition: Condition = {
    ...selectedMarket.condition,
    currentValue: previousValueRef.current,
  };

  const result = processSnapshot(snapshot, [condition])[0];

  const progressMessage = createProgressMessage(
    condition,
    result,
    selectedMarket.unit
  );

  function addTimelineEvent(
    nextMinute: number,
    title: string,
    description: string
  ) {
    setEvents((currentEvents) => [
      {
        id: crypto.randomUUID(),
        time: `${nextMinute}'`,
        title,
        description,
      },
      ...currentEvents,
    ]);
  }

  function updateStat(
    stat: keyof MatchStats,
    change: number,
    label: string
  ) {
    const nextMinute = minute + 1;
    const previousTrackedValue = result.currentValue;

    setMinute(nextMinute);

    const nextStats = {
      ...stats,
      [stat]: Math.max(0, stats[stat] + change),
    };

    setStats(nextStats);

    addTimelineEvent(
      nextMinute,
      change > 0 ? `${label} Added` : `${label} Removed`,
      `${label} changed by ${change > 0 ? "+" : ""}${change}`
    );

    const nextSnapshot = createStatisticsSnapshot("engine-lab-match", {
      goals: nextStats.homeGoals + nextStats.awayGoals,
      home_goals: nextStats.homeGoals,
      away_goals: nextStats.awayGoals,
      corners: nextStats.homeCorners + nextStats.awayCorners,
      home_corners: nextStats.homeCorners,
      away_corners: nextStats.awayCorners,
      yellow_cards: nextStats.homeYellowCards + nextStats.awayYellowCards,
      red_cards: nextStats.homeRedCards + nextStats.awayRedCards,
    });

    const nextCondition: Condition = {
      ...selectedMarket.condition,
      currentValue: previousTrackedValue,
    };

    const nextResult = processSnapshot(nextSnapshot, [nextCondition])[0];

    const notification = buildNotification(
      nextCondition,
      nextResult,
      selectedMarket.unit
    );

    if (notification && nextResult.notificationRequired) {
      addTimelineEvent(
        nextMinute,
        "Notification Generated",
        `${notification.title}: ${notification.message}`
      );

      if ("Notification" in window && Notification.permission === "granted") {
        new Notification(notification.title, {
          body: notification.message,
        });
      }
    }

    previousValueRef.current = nextResult.currentValue;
  }

  function resetLab() {
    previousValueRef.current = 0;
    setMinute(0);
    setStats(initialStats);
    setEvents([]);
  }

  function changeMarket(event: React.ChangeEvent<HTMLSelectElement>) {
    previousValueRef.current = 0;
    setSelectedMarketKey(event.target.value as MarketKey);
    setEvents([]);
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
        Test live match stats, progress calculations, and notifications.
      </p>

      <button type="button" onClick={resetLab}>
        Reset Engine Lab
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "10px",
          background: "#0f172a",
          border: "1px solid #334155",
        }}
      >
        <h4>Current Match</h4>

        <h2>
          Liverpool {stats.homeGoals} - {stats.awayGoals} Arsenal
        </h2>

        <p>
          Corners: {stats.homeCorners} - {stats.awayCorners}
        </p>

        <p>
          Yellow Cards: {stats.homeYellowCards} - {stats.awayYellowCards}
        </p>

        <p>
          Red Cards: {stats.homeRedCards} - {stats.awayRedCards}
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "10px",
          background: "#0f172a",
          border: "1px solid #334155",
        }}
      >
        <label htmlFor="market-select">
          <strong>Tracked Market</strong>
        </label>

        <select
          id="market-select"
          value={selectedMarketKey}
          onChange={changeMarket}
          style={{
            display: "block",
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {Object.entries(DEFAULT_MARKETS).map(([key, market]) => (
            <option key={key} value={key}>
              {market.label}
            </option>
          ))}
        </select>

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

      <h4 style={{ marginTop: "24px" }}>Match Controls</h4>

      <StatControl label="Home Goal" value={stats.homeGoals} onDecrease={() => updateStat("homeGoals", -1, "Home Goal")} onIncrease={() => updateStat("homeGoals", 1, "Home Goal")} />
      <StatControl label="Away Goal" value={stats.awayGoals} onDecrease={() => updateStat("awayGoals", -1, "Away Goal")} onIncrease={() => updateStat("awayGoals", 1, "Away Goal")} />
      <StatControl label="Home Corner" value={stats.homeCorners} onDecrease={() => updateStat("homeCorners", -1, "Home Corner")} onIncrease={() => updateStat("homeCorners", 1, "Home Corner")} />
      <StatControl label="Away Corner" value={stats.awayCorners} onDecrease={() => updateStat("awayCorners", -1, "Away Corner")} onIncrease={() => updateStat("awayCorners", 1, "Away Corner")} />
      <StatControl label="Home Yellow Card" value={stats.homeYellowCards} onDecrease={() => updateStat("homeYellowCards", -1, "Home Yellow Card")} onIncrease={() => updateStat("homeYellowCards", 1, "Home Yellow Card")} />
      <StatControl label="Away Yellow Card" value={stats.awayYellowCards} onDecrease={() => updateStat("awayYellowCards", -1, "Away Yellow Card")} onIncrease={() => updateStat("awayYellowCards", 1, "Away Yellow Card")} />
      <StatControl label="Home Red Card" value={stats.homeRedCards} onDecrease={() => updateStat("homeRedCards", -1, "Home Red Card")} onIncrease={() => updateStat("homeRedCards", 1, "Home Red Card")} />
      <StatControl label="Away Red Card" value={stats.awayRedCards} onDecrease={() => updateStat("awayRedCards", -1, "Away Red Card")} onIncrease={() => updateStat("awayRedCards", 1, "Away Red Card")} />

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
        marginTop: "14px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "12px",
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