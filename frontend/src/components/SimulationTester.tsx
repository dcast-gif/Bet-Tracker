"use client";

import { useState } from "react";

const steps = [
  {
    minute: 0,
    title: "Kick off",
    goals: 0,
    message: "0 / 3 Goals",
  },
  {
    minute: 18,
    title: "⚽ Goal",
    goals: 1,
    message: "1 / 3 Goals",
  },
  {
    minute: 54,
    title: "⚽ Goal",
    goals: 2,
    message: "2 / 3 Goals",
  },
  {
    minute: 77,
    title: "✅ Selection Complete",
    goals: 3,
    message: "3 / 3 Goals",
  },
];

export default function SimulationTester() {
  const [stepIndex, setStepIndex] = useState(0);

  const currentStep = steps[stepIndex];

  function sendNotification(title: string, message: string) {
    if (!("Notification" in window)) {
      alert("Notifications are not supported.");
      return;
    }

    if (Notification.permission !== "granted") {
      alert("Please enable notifications first.");
      return;
    }

    new Notification(title, {
      body: message,
    });
  }

  function handleNextEvent() {
    const nextIndex = stepIndex + 1;

    if (nextIndex >= steps.length) {
      alert("Simulation complete.");
      return;
    }

    const nextStep = steps[nextIndex];

    setStepIndex(nextIndex);

    sendNotification(nextStep.title, nextStep.message);
  }

  function handleReset() {
    setStepIndex(0);
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
      <h3>Simulation</h3>

      <p style={{ color: "#94a3b8" }}>Football - Over 2.5 Goals</p>

      <div
        style={{
          marginTop: "15px",
          padding: "18px",
          borderRadius: "12px",
          background: "#0f172a",
          border: "1px solid #334155",
        }}
      >
        <p>Minute: {currentStep.minute}</p>

        <h4>{currentStep.title}</h4>

        <p>{currentStep.message}</p>
      </div>

      <div style={{ marginTop: "18px", display: "flex", gap: "12px" }}>
        <button type="button" onClick={handleNextEvent}>
          Next Event
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}