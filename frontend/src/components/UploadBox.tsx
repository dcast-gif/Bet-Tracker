"use client";

import { useState } from "react";
import { uploadScreenshot } from "../services/uploadScreenshot";
import { parseBetSlip } from "../engine/parseBetSlip";
import ParsedBetSlipPreview from "./ParsedBetSlipPreview";
import { ParsedBetSlip } from "../types/parsedBetSlip";

export default function UploadBox() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [parsedBetSlip, setParsedBetSlip] =
    useState<ParsedBetSlip | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [status, setStatus] = useState<
    | "idle"
    | "previewing"
    | "uploading"
    | "parsing"
    | "uploaded"
    | "error"
  >("idle");

  async function handleFileChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    setStatus("previewing");
    setDownloadUrl(null);
    setParsedBetSlip(null);
    setErrorMessage(null);

    const localPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(localPreviewUrl);

    try {
      setStatus("uploading");

      const uploadedUrl = await uploadScreenshot(file);

      setDownloadUrl(uploadedUrl);

      setStatus("parsing");

      const parsed = await parseBetSlip(uploadedUrl);

      setParsedBetSlip(parsed);

      setStatus("uploaded");
    } catch (error) {
      console.error(error);

      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Unknown upload error");
      }

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

      {status === "uploading" && <p>Uploading to Supabase...</p>}

      {status === "parsing" && (
        <p style={{ color: "#38bdf8" }}>
          AI is analysing your betting slip...
        </p>
      )}

      {status === "uploaded" && (
        <p style={{ color: "#22c55e" }}>
          Upload complete ✅ AI parsing complete.
        </p>
      )}

      {status === "error" && (
        <div style={{ color: "#ef4444" }}>
          <p>Upload failed.</p>
          <p>{errorMessage}</p>
        </div>
      )}

      {downloadUrl && (
        <p
          style={{
            color: "#94a3b8",
            wordBreak: "break-all",
            fontSize: "0.8rem",
          }}
        >
          Supabase URL: {downloadUrl}
        </p>
      )}

      {parsedBetSlip && (
        <ParsedBetSlipPreview betSlip={parsedBetSlip} />
      )}
    </section>
  );
}
