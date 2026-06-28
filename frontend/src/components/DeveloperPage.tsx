import EngineLab from "./EngineLab";
import NotificationTester from "./NotificationTester";

export default function DeveloperPage() {
  return (
    <>
      <h2>🧪 Engine Lab</h2>

      <p style={{ color: "#94a3b8" }}>
        Test match stats, progress logic, and notifications without waiting for
        live games.
      </p>

      <NotificationTester />

      <EngineLab />
    </>
  );
}