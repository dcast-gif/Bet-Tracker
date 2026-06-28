import NotificationTester from "./NotificationTester";
import SimulationTester from "./SimulationTester";

export default function DeveloperPage() {
  return (
    <>
      <h2>🧪 Developer Mode</h2>

      <p
        style={{
          color: "#94a3b8",
        }}
      >
        Internal tools for testing the Progress Engine.
      </p>

      <NotificationTester />

      <SimulationTester />
    </>
  );
}