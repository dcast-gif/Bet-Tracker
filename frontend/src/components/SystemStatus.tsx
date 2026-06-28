"use client";

export default function SystemStatus() {
  const notificationSupport =
    typeof window !== "undefined" && "Notification" in window;

  const notificationPermission =
    typeof window !== "undefined" && notificationSupport
      ? Notification.permission
      : "unsupported";

  return (
    <section
      style={{
        marginTop: "30px",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#111827",
      }}
    >
      <h3>System Status</h3>

      <p>Notifications Supported: {notificationSupport ? "Yes" : "No"}</p>

      <p>Notification Permission: {notificationPermission}</p>
    </section>
  );
}