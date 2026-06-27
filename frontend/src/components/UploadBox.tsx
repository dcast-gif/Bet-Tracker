"use client";

import { useRef, useState } from "react";

export default function UploadBox() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setPreviewUrl(URL.createObjectURL(file));
  }

  function handleRemoveImage() {
    setSelectedFile(null);
    setPreviewUrl(null);
    setFileName(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  function handleUpload() {
    if (!selectedFile) {
      alert("Please choose a screenshot first.");
      return;
    }

    alert(`Ready to upload:\n${selectedFile.name}`);

    // Firebase upload will be added here in the next sprint.
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
        ref={inputRef}
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
            alt="Betting slip preview"
            style={{
              width: "100%",
              maxHeight: "500px",
              objectFit: "contain",
              borderRadius: "12px",
              border: "1px solid #334155",
              marginTop: "12px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "20px",
            }}
          >
            <button
              type="button"
              onClick={handleUpload}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                background: "#22c55e",
                color: "white",
                border: "none",
              }}
            >
              Upload
            </button>

            <button
              type="button"
              onClick={handleRemoveImage}
              style={{
                padding: "10px 18px",
                borderRadius: "8px",
                background: "#ef4444",
                color: "white",
                border: "none",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </section>
  );
}