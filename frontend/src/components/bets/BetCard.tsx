import { colors, radius, shadows } from "../../styles/theme";

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
    live: colors.accent,
    upcoming: colors.info,
    won: "#D4AF37",
    lost: colors.danger,
  };

  return (
    <div
      style={{
        background: colors.surfaceElevated,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.lg,
        padding: "18px",
        marginBottom: "18px",
        boxShadow: shadows.soft,
        transition: "0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong
          style={{
            color: colors.textPrimary,
            fontSize: "1rem",
          }}
        >
          {title}
        </strong>

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
          color: colors.textSecondary,
          marginTop: "8px",
          marginBottom: "14px",
        }}
      >
        {subtitle}
      </p>

      <div
        style={{
          height: "8px",
          borderRadius: radius.pill,
          background: colors.surface,
          overflow: "hidden",
          marginBottom: "12px",
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
          color: colors.textSecondary,
          fontSize: "0.85rem",
        }}
      >
        <span>{progress} Complete</span>

        {minute && <span>{minute}</span>}
      </div>
    </div>
  );
}