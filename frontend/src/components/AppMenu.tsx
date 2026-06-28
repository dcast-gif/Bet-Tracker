"use client";

type AppMenuProps = {
  currentView: string;
  onChangeView: (view: string) => void;
};

export default function AppMenu({
  currentView,
  onChangeView,
}: AppMenuProps) {
  const items = [
    { id: "home", label: "🏠 Home" },
    { id: "engine-lab", label: "🧪 Engine Lab" },
  ];

  return (
    <nav
      style={{
        margin: "20px 0",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => onChangeView(item.id)}
          style={{
            padding: "10px 14px",
            borderRadius: "999px",
            border: "1px solid #334155",
            background:
              currentView === item.id ? "#22c55e" : "#111827",
            color:
              currentView === item.id ? "#ffffff" : "#cbd5e1",
            cursor: "pointer",
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}