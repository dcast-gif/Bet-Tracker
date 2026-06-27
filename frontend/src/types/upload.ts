export interface UploadedScreenshot {
  id: string;

  fileName: string;

  uploadedAt: string;

  status: "pending" | "processing" | "completed" | "failed";

  imageUrl?: string;
}