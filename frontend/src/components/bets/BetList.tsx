import BetCard from "./BetCard";

export default function BetList() {
  return (
    <>
      <BetCard
        title="SBK Bet Builder"
        subtitle="Liverpool vs Arsenal"
        progress="40%"
        completed={2}
        total={5}
        minute="78'"
        status="live"
      />

      <BetCard
        title="Weekend Acca"
        subtitle="Spain vs Uruguay"
        progress="0%"
        completed={0}
        total={6}
        minute="19:45"
        status="upcoming"
      />

      <BetCard
        title="Friday Night Bet"
        subtitle="France vs Germany"
        progress="100%"
        completed={5}
        total={5}
        status="won"
      />
    </>
  );
}