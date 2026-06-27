export default function ActiveBets() {
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
      <h3>Active Bets</h3>

      <p style={{ color: "#94a3b8" }}>
        You don't have any active bets yet.
      </p>

      <p style={{ color: "#64748b", fontSize: "0.9rem" }}>
        Upload a betting slip to start tracking.
      </p>
    </section>
  );
}