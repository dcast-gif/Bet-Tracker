type BetCardProps = {
  sport: string;
  eventName: string;
  marketName: string;
  status: "not_started" | "live" | "won" | "lost";
  progressText: string;
};

export default function BetCard({
  sport,
  eventName,
  marketName,
  status,
  progressText,
}: BetCardProps) {
  return (
    <article
      style={{
        padding: "18px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#0f172a",
      }}
    >
      <p
        style={{
          margin: "0 0 8px",
          color: "#94a3b8",
          fontSize: "0.85rem",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
        }}
      >
        {sport}
      </p>

      <h4 style={{ margin: "0 0 8px", fontSize: "1.1rem" }}>
        {eventName}
      </h4>

      <p style={{ margin: "0 0 12px", color: "#cbd5e1" }}>
        {marketName}
      </p>

      <p style={{ margin: "0 0 8px", color: "#e2e8f0" }}>
        {progressText}
      </p>

      <span
        style={{
          display: "inline-block",
          marginTop: "6px",
          padding: "5px 9px",
          borderRadius: "999px",
          background: "#1e293b",
          color: "#cbd5e1",
          fontSize: "0.8rem",
        }}
      >
        {status.replace("_", " ")}
      </span>
    </article>
  );
}