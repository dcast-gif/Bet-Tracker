import { ParsedBetSlip } from "../types/parsedBetSlip";

type ParsedBetSlipPreviewProps = {
  betSlip: ParsedBetSlip;
};

export default function ParsedBetSlipPreview({
  betSlip,
}: ParsedBetSlipPreviewProps) {
  return (
    <section
      style={{
        marginTop: "20px",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #334155",
      }}
    >
      <h3>AI Parser Preview</h3>

      <p style={{ color: "#94a3b8" }}>
        Bookmaker: {betSlip.bookmaker}
      </p>

      <p style={{ color: "#94a3b8" }}>
        Confidence: {betSlip.confidence}
      </p>

      {betSlip.selections.length === 0 ? (
        <p style={{ color: "#facc15" }}>
          No selections parsed yet. AI parsing will be connected next.
        </p>
      ) : (
        <ul>
          {betSlip.selections.map((selection) => (
            <li key={selection.id}>
              <strong>{selection.selection}</strong> — {selection.market} —{" "}
              {selection.match}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
