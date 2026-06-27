"use client";

import { useState } from "react";

export default function UploadBox() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function handleRemoveImage() {
    setPreviewUrl(null);
    setFileName(null);
  }

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
        Choose a screenshot from your phone or computer.
      </p>

      <input
        id="bet-slip-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <label
        htmlFor="bet-slip-upload"
        style={{
          display: "inline-block",
          marginTop: "15px",
          padding: "12px 18px",
          borderRadius: "8px",
          border: "none",
          fontWeight: "bold",
          background: "#f8fafc",
          color: "#0f172a",
          cursor: "pointer",
        }}
      >
        Choose Screenshot
      </label>

      {previewUrl && (
        <div style={{ marginTop: "25px" }}>
          <p style={{ color: "#94a3b8" }}>{fileName}</p>

          <img
            src={previewUrl}
            alt="Uploaded betting slip preview"
            style={{
              maxWidth: "100%",
              borderRadius: "12px",
              border: "1px solid #334155",
              marginTop: "12px",
            }}
          />

          <br />

          <button
            type="button"
            onClick={handleRemoveImage}
            style={{
              marginTop: "15px",
              padding: "10px 14px",
              borderRadius: "8px",
              border: "1px solid #475569",
              background: "transparent",
              color: "#e2e8f0",
            }}
          >
            Remove Screenshot
          </button>
        </div>
      )}
    </section>
  );
}