import { colors } from "../styles/theme";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      style={{
        height: "45px",
        padding: "0 18px",
        borderBottom: `1px solid ${colors.border}`,
        background: colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1rem",
          color: colors.textPrimary,
          fontWeight: 700,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h1>

      <span
        style={{
          color: colors.textMuted,
          fontSize: "0.75rem",
          fontWeight: 600,
        }}
      >
        v0.3.1
      </span>
    </header>
  );
}