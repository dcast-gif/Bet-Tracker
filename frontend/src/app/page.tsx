import Header from "../components/Header";
import UploadBox from "../components/UploadBox";
import ActiveBets from "../components/ActiveBets";
import NotificationTester from "../components/NotificationTester";

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

        <UploadBox />

        <NotificationTester />

        <ActiveBets />
      </main>
    </>
  );
}