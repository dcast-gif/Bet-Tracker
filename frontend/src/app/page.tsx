export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        background: "#0f172a",
        color: "white",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "700px",
          padding: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          ⚽ Bet Tracker
        </h1>

        <p
          style={{
            fontSize: "1.2rem",
            color: "#cbd5e1",
          }}
        >
          Upload betting slips and receive live progress notifications while
          your bets are in play.
        </p>

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #334155",
            borderRadius: "10px",
          }}
        >
          <h2>Coming Soon</h2>

          <p>📸 Screenshot Upload</p>
          <p>🤖 AI Bet Detection</p>
          <p>⚽ Live Match Tracking</p>
          <p>🔔 Push Notifications</p>
        </div>
      </div>
    </main>
  );
}