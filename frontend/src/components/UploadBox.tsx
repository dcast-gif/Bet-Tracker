export default function UploadBox() {
  return (
    <section
      style={{
        marginTop: "30px",
        padding: "30px",
        border: "2px dashed #475569",
        borderRadius: "14px",
        textAlign: "center",
        background: "#111827",
      }}
    >
      <h3>Upload Betting Slip</h3>

      <p style={{ color: "#cbd5e1" }}>
        Screenshot upload will be added here.
      </p>

      <button
        type="button"
        style={{
          marginTop: "15px",
          padding: "12px 18px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Choose Screenshot
      </button>
    </section>
  );
}