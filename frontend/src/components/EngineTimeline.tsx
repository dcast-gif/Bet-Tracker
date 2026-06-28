type TimelineEvent = {
  id: string;
  time: string;
  title: string;
  description: string;
};

type EngineTimelineProps = {
  events: TimelineEvent[];
};

export default function EngineTimeline({
  events,
}: EngineTimelineProps) {
  return (
    <section
      style={{
        marginTop: "24px",
        padding: "18px",
        borderRadius: "10px",
        background: "#0f172a",
        border: "1px solid #334155",
      }}
    >
      <h4>Engine Timeline</h4>

      {events.length === 0 && (
        <p style={{ color: "#94a3b8" }}>
          Waiting for first event...
        </p>
      )}

      {events.map((event) => (
        <div
          key={event.id}
          style={{
            padding: "12px 0",
            borderBottom: "1px solid #1e293b",
          }}
        >
          <strong>{event.time}</strong>

          <div>{event.title}</div>

          <div
            style={{
              color: "#94a3b8",
              fontSize: "0.9rem",
            }}
          >
            {event.description}
          </div>
        </div>
      ))}
    </section>
  );
}