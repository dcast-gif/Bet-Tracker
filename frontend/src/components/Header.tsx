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
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "1.8rem",
          }}
        >
          ⚽ {title}
        </h1>

        <p
          style={{
            margin: "6px 0 0",
            color: "#94a3b8",
            fontSize: "0.85rem",
          }}
        >
          Engine Lab Release
        </p>
      </div>

      <span
        style={{
          color: "#94a3b8",
          fontSize: "0.9rem",
        }}
      >
        v0.2.0
      </span>
    </header>
  );
}