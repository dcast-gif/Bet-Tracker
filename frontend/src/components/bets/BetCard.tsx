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
        cursor: "pointer",
        transition: "0.2s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div>
          <strong
            style={{
              color: colors.textPrimary,
              fontSize: "1.05rem",
            }}
          >
            {title}
          </strong>

          <div
            style={{
              color: colors.textSecondary,
              marginTop: "6px",
            }}
          >
            {subtitle}
          </div>
        </div>

        <span
          style={{
            padding: "5px 10px",
            borderRadius: radius.pill,
            background: `${colour}20`,
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
          marginTop: "18px",
          height: "8px",
          borderRadius: radius.pill,
          background: colors.surface,
          overflow: "hidden",
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
          alignItems: "center",
          marginTop: "14px",
          color: colors.textSecondary,
          fontSize: "0.85rem",
        }}
      >
        <span>
          <strong
            style={{
              color: colors.textPrimary,
            }}
          >
            {completed}
          </strong>{" "}
          / {total} selections
        </span>

        {minute && (
          <strong
            style={{
              color: colors.textPrimary,
            }}
          >
            {minute}
          </strong>
        )}
      </div>
    </div>
  );
}