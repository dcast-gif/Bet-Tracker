"use client";

import { useState } from "react";
import { uploadScreenshot } from "../services/uploadScreenshot";

export default function UploadBox() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "previewing" | "uploading" | "uploaded" | "error"
  >("idle");

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setStatus("previewing");
    setDownloadUrl(null);

    const localPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(localPreviewUrl);

    try {
      setStatus("uploading");

      const uploadedUrl = await uploadScreenshot(file);

      setDownloadUrl(uploadedUrl);
      setStatus("uploaded");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <section
      style={{
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
        border: "2px dashed #475569",
        textAlign: "center",
      }}
    >
      <h3>Upload Betting Slip</h3>

      <p style={{ color: "#94a3b8" }}>
        Choose a screenshot from your phone or computer.
      </p>

      <input
        id="screenshot-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <label
        htmlFor="screenshot-upload"
        style={{
          display: "inline-block",
          marginTop: "16px",
          padding: "12px 20px",
          borderRadius: "10px",
          background: "#f8fafc",
          color: "#0f172a",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        Choose Screenshot
      </label>

      {previewUrl && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={previewUrl}
            alt="Betting slip preview"
            style={{
              maxWidth: "100%",
              borderRadius: "10px",
              border: "1px solid #334155",
            }}
          />
        </div>
      )}

      {status === "uploading" && <p>Uploading...</p>}

      {status === "uploaded" && (
        <p style={{ color: "#22c55e" }}>Upload complete ✅</p>
      )}

      {status === "error" && (
        <p style={{ color: "#ef4444" }}>
          Upload failed. Check Firebase Storage settings.
        </p>
      )}

      {downloadUrl && (
        <p
          style={{
            color: "#94a3b8",
            wordBreak: "break-all",
            fontSize: "0.8rem",
          }}
        >
          Firebase URL: {downloadUrl}
        </p>
      )}
    </section>
  );
}