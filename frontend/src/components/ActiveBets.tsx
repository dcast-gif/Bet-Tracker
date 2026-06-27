import BetCard from "./BetCard";
import { sampleBets } from "../data/sampleBets";

export default function ActiveBets() {
  return (
    <section
      style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        border: "1px solid #334155",
        background: "#111827",
      }}
    >
      <h3>Active Bets</h3>

      <div
        style={{
          display: "grid",
          gap: "16px",
          marginTop: "18px",
        }}
      >
        {sampleBets.map((bet) => (
          <BetCard
            key={bet.id}
            sport={bet.sport}
            eventName={bet.eventName}
            marketName={bet.marketName}
            status={bet.status}
            progressText={bet.progressText}
          />
        ))}
      </div>
    </section>
  );
}