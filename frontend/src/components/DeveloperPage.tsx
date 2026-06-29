import EngineLab from "./EngineLab";
import NotificationTester from "./NotificationTester";


export default function DeveloperPage() {
  return (
<section className="engine-lab-page">
      <h2
        style={{
          margin: "0 0 14px",
          fontSize: "1.8rem",
          fontWeight: 800,
          letterSpacing: "-0.03em",
        }}
      >
        🧪 Engine Lab
      </h2>

      <p
        style={{
          margin: "0 0 24px",
          color: "var(--color-text-secondary)",
          fontSize: "1rem",
          lineHeight: 1.5,
        }}
      >
        Test match stats, progress logic, and notifications without waiting for
        live games.
      </p>

      <NotificationTester />

      <EngineLab />
    </section>
  );
}