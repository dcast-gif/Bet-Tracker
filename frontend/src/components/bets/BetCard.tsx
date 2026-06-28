import { colors, radius, shadows } from "../../styles/theme";

type BetCardProps = {
  title: string;
  subtitle: string;
  progress: string;
  completed: number;
  total: number;
  minute?: string;
  status: "live" | "upcoming" | "won" | "lost";
};

export default function BetCard({
  title,
  subtitle,
  progress,
  completed,
  total,
  minute,
  status,
}: BetCardProps) {
  const colour = {
    live: colors.accent,
    upcoming: colors.info,
    won: "#D4AF37",
    lost: colors.danger,
  }[status];

  return (
    <div
      style={{
        background: colors.surfaceElevated,
        border: `1px solid ${colors.border}`,
        borderRadius: radius.lg,
        padding: "18px",
        marginBottom: "18px",
        boxShadow: shadows.soft,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
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
            color: colour,
            fontWeight: 700,
            fontSize: "0.75rem",
            textTransform: "uppercase",
          }}
        >
          {status}
        </span>
      </div>

      <div
        style={{
          color: colors.textSecondary,
          marginBottom: "14px",
        }}
      >
        {subtitle}
      </div>

      <div
        style={{
          height: "8px",
          borderRadius: radius.pill,
          overflow: "hidden",
          background: colors.surface,
          marginBottom: "12px",
        }}
      >
        <div
          style={{
            width: progress,
            height: "100%",
            background: colour,
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
        <span>
          {completed} / {total} Complete
        </span>

        {minute && <span>{minute}</span>}
      </div>
    </div>
  );
}