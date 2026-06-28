import { ParsedBetSlip } from "../types/parsedBetSlip";

type ParsedBetSlipPreviewProps = {
  betSlip: ParsedBetSlip;
};

export default function ParsedBetSlipPreview({
  betSlip,
}: ParsedBetSlipPreviewProps) {
  function handleConfirm() {
    alert(
      `Bet slip confirmed with ${betSlip.selections.length} selections. Tracking connection comes next.`
    );
  }

  return (
    <section
      style={{
        marginTop: "24px",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#0f172a",
      }}
    >
      <h3>🤖 AI Parser</h3>

      <div style={{ marginTop: "16px", marginBottom: "20px", textAlign: "left" }}>
        <p><strong>Bookmaker:</strong> {betSlip.bookmaker}</p>
        <p><strong>Confidence:</strong> {betSlip.confidence}</p>
        <p><strong>Selections Found:</strong> {betSlip.selections.length}</p>
      </div>

      {betSlip.selections.map((selection) => (
        <div
          key={selection.id}
          style={{
            marginBottom: "16px",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #334155",
            background: "#111827",
            textAlign: "left",
          }}
        >
          <strong>{selection.match}</strong>
          <p style={{ marginTop: "8px", marginBottom: "4px" }}>{selection.market}</p>
          <p style={{ color: "#38bdf8", margin: 0 }}>{selection.selection}</p>
        </div>
      ))}

      <button
        type="button"
        onClick={handleConfirm}
        style={{
          marginTop: "12px",
          padding: "12px 18px",
          borderRadius: "10px",
          background: "#22c55e",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          fontWeight: 700,
        }}
      >
        Confirm Bet Slip
      </button>
    </section>
  );
}
