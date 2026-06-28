"use client";

import { useState } from "react";
import Header from "../components/Header";
import BottomNavigation from "../components/navigation/BottomNavigation";
import BetTabs from "../components/bets/BetTabs";
import BetList from "../components/bets/BetList";
import UploadBox from "../components/UploadBox";
import DeveloperPage from "../components/DeveloperPage";

type View = "home" | "upload" | "engine";

export default function Home() {
  const [view, setView] = useState<View>("home");
  const [tab, setTab] = useState<
    "current" | "upcoming" | "past"
  >("current");

  return (
    <>
      <Header title="Bet Tracker" />

      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "24px",
          paddingBottom: "110px",
        }}
      >
        {view === "home" && (
          <>
            <h2>My Bets</h2>

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
    </>
  );
}