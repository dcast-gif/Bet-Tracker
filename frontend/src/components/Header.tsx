type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <header
      style={{
        padding: "20px 40px",
        borderBottom: "1px solid #334155",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#111827",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "1.8rem",
        }}
      >
        ⚽ {title}
      </h1>

      <span
        style={{
          color: "#94a3b8",
          fontSize: "0.9rem",
        }}
      >
        Version 0.1
      </span>
    </header>
  );
}