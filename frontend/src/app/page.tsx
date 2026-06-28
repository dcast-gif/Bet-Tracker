"use client";

import { useState } from "react";
import Header from "../components/Header";
import UploadBox from "../components/UploadBox";
import ActiveBets from "../components/ActiveBets";
import AppMenu from "../components/AppMenu";
import DeveloperPage from "../components/DeveloperPage";

export default function Home() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <Header title="Bet Tracker" />

      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <AppMenu
          currentView={currentView}
          onChangeView={setCurrentView}
        />

        {currentView === "home" && (
          <>
            <h2>Welcome</h2>

            <p>
              Upload your betting slip and Bet Tracker will monitor every
              selection live, sending notifications as your bets progress.
            </p>

            <UploadBox />

            <ActiveBets />
          </>
        )}

        {currentView === "engine-lab" && <DeveloperPage />}
      </main>
    </>
  );
}