import { uploadToSupabaseStorage } from "./supabaseStorage";

export async function uploadScreenshot(file: File): Promise<string> {
  return uploadToSupabaseStorage(file);
}
