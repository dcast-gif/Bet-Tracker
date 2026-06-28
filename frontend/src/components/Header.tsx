import { colors } from "../styles/theme";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      style={{
        padding: "18px 24px",
        borderBottom: `1px solid ${colors.border}`,
        background: colors.background,
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1.6rem",
          color: colors.textPrimary,
        }}
      >
        {title}
      </h1>

      <p
        style={{
          margin: "6px 0 0",
          color: colors.textSecondary,
          fontSize: "0.85rem",
        }}
      >
        v0.3.1 · AI Parsing Release
      </p>
    </header>
  );
}