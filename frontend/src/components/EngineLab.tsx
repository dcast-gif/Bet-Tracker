"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Condition } from "../types/condition";
import { buildNotification } from "../engine/buildNotification";
import { createStatisticsSnapshot } from "../engine/createStatisticsSnapshot";
import { processSnapshot } from "../engine/processSnapshot";
import { createProgressMessage } from "../engine/createProgressMessage";
import EngineTimeline from "./EngineTimeline";

type MarketId =
  | "over_2_5_goals"
  | "over_10_5_corners"
  | "home_over_1_5_goals"
  | "away_over_1_5_goals";

type Stats = {
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

const marketOptions: {
  id: MarketId;
  label: string;
  condition: Condition;
  unit: string;
}[] = [
  {
    id: "over_2_5_goals",
    label: "Over 2.5 Goals",
    unit: "Goals",
    condition: {
      id: "over-2-5-goals",
      statistic: "goals",
      operator: "greater_than_or_equal",
      targetValue: 3,
      currentValue: 0,
      satisfied: false,
    },
  },
  {
    id: "over_10_5_corners",
    label: "Over 10.5 Corners",
    unit: "Corners",
    condition: {
      id: "over-10-5-corners",
      statistic: "corners",
      operator: "greater_than_or_equal",
      targetValue: 11,
      currentValue: 0,
      satisfied: false,
    },
  },
  {
    id: "home_over_1_5_goals",
    label: "Home Team Over 1.5 Goals",
    unit: "Home Goals",
    condition: {
      id: "home-over-1-5-goals",
      statistic: "home_goals",
      operator: "greater_than_or_equal",
      targetValue: 2,
      currentValue: 0,
      satisfied: false,
    },
  },
  {
    id: "away_over_1_5_goals",
    label: "Away Team Over 1.5 Goals",
    unit: "Away Goals",
    condition: {
      id: "away-over-1-5-goals",
      statistic: "away_goals",
      operator: "greater_than_or_equal",
      targetValue: 2,
      currentValue: 0,
      satisfied: false,
    },
  },
];

export default function EngineLab() {
  const previousValueRef = useRef(0);

  const [selectedMarketId, setSelectedMarketId] =
    useState<MarketId>("over_2_5_goals");

  const [minute, setMinute] = useState(0);
  const [events, setEvents] = useState<TimelineEvent[]>([]);

  const [stats, setStats] = useState<Stats>({
    homeGoals: 0,
    awayGoals: 0,
    homeCorners: 0,
    awayCorners: 0,
    homeYellowCards: 0,
    awayYellowCards: 0,
    homeRedCards: 0,
    awayRedCards: 0,
  });

  const selectedMarket =
    marketOptions.find((market) => market.id === selectedMarketId) ??
    marketOptions[0];

  const totalGoals = stats.homeGoals + stats.awayGoals;
  const totalCorners = stats.homeCorners + stats.awayCorners;

  const snapshot = useMemo(
    () =>
      createStatisticsSnapshot("engine-lab-match", {
        goals: totalGoals,
        home_goals: stats.homeGoals,
        away_goals: stats.awayGoals,
        corners: totalCorners,
        home_corners: stats.homeCorners,
        away_corners: stats.awayCorners,
        yellow_cards: stats.homeYellowCards + stats.awayYellowCards,
        red_cards: stats.homeRedCards + stats.awayRedCards,
      }),
    [stats, totalGoals, totalCorners]
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
    const nextMinute = minute + 1;
    setMinute(nextMinute);

    setStats((currentStats) => {
      const nextValue = Math.max(0, currentStats[stat] + change);

      return {
        ...currentStats,
        [stat]: nextValue,
      };
    });

    setEvents((currentEvents) => [
      {
        id: crypto.randomUUID(),
        time: `${nextMinute}'`,
        title: change > 0 ? `${label} Added` : `${label} Removed`,
        description: `${label} changed by ${change > 0 ? "+" : ""}${change}`,
      },
      ...currentEvents,
    ]);
  }

  function resetLab() {
    previousValueRef.current = 0;
    setMinute(0);
    setEvents([]);
    setStats({
      homeGoals: 0,
      awayGoals: 0,
      homeCorners: 0,
      awayCorners: 0,
      homeYellowCards: 0,
      awayYellowCards: 0,
      homeRedCards: 0,
      awayRedCards: 0,
    });
  }

  function handleMarketChange(event: React.ChangeEvent<HTMLSelectElement>) {
    previousValueRef.current = 0;
    setEvents([]);
    setSelectedMarketId(event.target.value as MarketId);
  }

  useEffect(() => {
    if (result.currentValue === previousValueRef.current) return;

    const notification = buildNotification(
      condition,
      result,
      selectedMarket.unit
    );

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

    previousValueRef.current = result.currentValue;
  }, [result.currentValue, selectedMarket.unit]);

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

      <button
        type="button"
        onClick={resetLab}
        style={{ marginBottom: "16px" }}
      >
        Reset Engine Lab
      </button>

      <div
        style={{
          marginBottom: "20px",
          padding: "16px",
          borderRadius: "10px",
          border: "1px solid #334155",
          background: "#0f172a",
        }}
      >
        <label htmlFor="market-select">
          <strong>Tracked Market</strong>
        </label>

        <select
          id="market-select"
          value={selectedMarketId}
          onChange={handleMarketChange}
          style={{
            display: "block",
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          {marketOptions.map((market) => (
            <option key={market.id} value={market.id}>
              {market.label}
            </option>
          ))}
        </select>
      </div>

      <h4>Match Controls</h4>

      <StatControl
        label="Home Goals"
        value={stats.homeGoals}
        onDecrease={() => updateStat("homeGoals", -1, "Home Goal")}
        onIncrease={() => updateStat("homeGoals", 1, "Home Goal")}
      />

      <StatControl
        label="Away Goals"
        value={stats.awayGoals}
        onDecrease={() => updateStat("awayGoals", -1, "Away Goal")}
        onIncrease={() => updateStat("awayGoals", 1, "Away Goal")}
      />

      <StatControl
        label="Home Corners"
        value={stats.homeCorners}
        onDecrease={() => updateStat("homeCorners", -1, "Home Corner")}
        onIncrease={() => updateStat("homeCorners", 1, "Home Corner")}
      />

      <StatControl
        label="Away Corners"
        value={stats.awayCorners}
        onDecrease={() => updateStat("awayCorners", -1, "Away Corner")}
        onIncrease={() => updateStat("awayCorners", 1, "Away Corner")}
      />

      <StatControl
        label="Home Yellow Cards"
        value={stats.homeYellowCards}
        onDecrease={() =>
          updateStat("homeYellowCards", -1, "Home Yellow Card")
        }
        onIncrease={() =>
          updateStat("homeYellowCards", 1, "Home Yellow Card")
        }
      />

      <StatControl
        label="Away Yellow Cards"
        value={stats.awayYellowCards}
        onDecrease={() =>
          updateStat("awayYellowCards", -1, "Away Yellow Card")
        }
        onIncrease={() =>
          updateStat("awayYellowCards", 1, "Away Yellow Card")
        }
      />

      <StatControl
        label="Home Red Cards"
        value={stats.homeRedCards}
        onDecrease={() => updateStat("homeRedCards", -1, "Home Red Card")}
        onIncrease={() => updateStat("homeRedCards", 1, "Home Red Card")}
      />

      <StatControl
        label="Away Red Cards"
        value={stats.awayRedCards}
        onDecrease={() => updateStat("awayRedCards", -1, "Away Red Card")}
        onIncrease={() => updateStat("awayRedCards", 1, "Away Red Card")}
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
        <h4>Progress Engine Output</h4>

        <p>{selectedMarket.label}</p>

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