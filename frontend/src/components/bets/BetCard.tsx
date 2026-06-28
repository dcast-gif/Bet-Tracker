type BetCardProps = {
  title: string;
  subtitle: string;
  progress: string;
  minute?: string;
  status: "live" | "upcoming" | "won" | "lost";
};

export default function BetCard({
  title,
  subtitle,
  progress,
  minute,
  status,
}: BetCardProps) {
  const colours = {
    live: "#22C55E",
    upcoming: "#38BDF8",
    won: "#D4AF37",
    lost: "#EF4444",
  };

  return (
    <div
      style={{
        background: "#10281F",
        border: "1px solid #23483A",
        borderRadius: "16px",
        padding: "18px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong>{title}</strong>

        <span
          style={{
            color: colours[status],
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "0.75rem",
          }}
        >
          {status}
        </span>
      </div>

      <p
        style={{
          color: "#A7B8AE",
          marginTop: "8px",
          marginBottom: "10px",
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          height: "8px",
          borderRadius: "999px",
          background: "#0B1F17",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <div
          style={{
            width: progress,
            height: "100%",
            background: colours[status],
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#A7B8AE",
          fontSize: "0.85rem",
        }}
      >
        <span>{progress} Complete</span>

        {minute && <span>{minute}</span>}
      </div>
    </div>
  );
}