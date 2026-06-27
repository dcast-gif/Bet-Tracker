import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header title="Bet Tracker" />

      <main
        style={{
          maxWidth: "900px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h2>Welcome</h2>

        <p>
          Upload your betting slip and Bet Tracker will monitor every selection
          live, sending notifications as your bets progress.
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "25px",
            border: "1px solid #334155",
            borderRadius: "12px",
          }}
        >
          <h3>Coming Soon</h3>

          <ul>
            <li>📸 Screenshot Upload</li>
            <li>🤖 AI Bet Recognition</li>
            <li>⚽ Live Match Tracking</li>
            <li>📈 Bet Progress</li>
            <li>🔔 Push Notifications</li>
          </ul>
        </div>
      </main>
    </>
  );
}