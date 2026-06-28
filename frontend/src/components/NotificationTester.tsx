"use client";

export default function NotificationTester() {
  async function requestPermission() {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }

    const permission = await Notification.requestPermission();

    alert(`Notification permission: ${permission}`);
  }

  function sendTestNotification() {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications.");
      return;
    }

    if (Notification.permission !== "granted") {
      alert("Please enable notifications first.");
      return;
    }

    new Notification("🎯 Bet Tracker", {
      body: "Test notification working.",
    });
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
      <h3>Notifications</h3>

      <p style={{ color: "#94a3b8" }}>
        Enable notifications so Bet Tracker can alert you when a tracked bet
        meaningfully progresses.
      </p>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <button type="button" onClick={requestPermission}>
          Enable Notifications
        </button>

        <button type="button" onClick={sendTestNotification}>
          Send Test Notification
        </button>
      </div>
    </section>
  );
}