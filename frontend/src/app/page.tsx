"use client";

import { useState } from "react";
import Header from "../components/Header";
import BottomNavigation from "../components/navigation/BottomNavigation";
import BetTabs from "../components/bets/BetTabs";
import BetList from "../components/bets/BetList";
import UploadBox from "../components/UploadBox";
import DeveloperPage from "../components/DeveloperPage";
import { colors } from "../styles/theme";

type View = "home" | "upload" | "engine";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [tab, setTab] = useState<
    "current" | "upcoming" | "past"
  >("current");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: colors.background,
        color: colors.textPrimary,
      }}
    >
      <Header title="Bet Tracker" />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          paddingTop: "18px",
          paddingBottom: "calc(110px + env(safe-area-inset-bottom))",
        }}
      >
        {view === "home" && (
          <>
            <h2
              style={{
                margin: "0 0 14px",
                fontSize: "1.8rem",
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              My Bets
            </h2>

            <BetTabs
              active={tab}
              onChange={setTab}
            />

            <BetList />
          </>
        )}

        {view === "upload" && <UploadBox />}

        {view === "engine" && <DeveloperPage />}
      </main>

      <BottomNavigation
        active="home"
        onHome={() => setView("home")}
        onAdd={() => setView("upload")}
        onSettings={() => setView("engine")}
      />
    </div>
  );
}