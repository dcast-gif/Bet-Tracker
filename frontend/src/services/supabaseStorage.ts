import { supabase } from "./supabaseClient";

const BUCKET_NAME = "bet-slips";

export async function uploadToSupabaseStorage(
  file: File
): Promise<string> {
  const extension = file.name.split(".").pop() ?? "png";
  const fileName = `${crypto.randomUUID()}.${extension}`;
  const filePath = `uploads/${fileName}`;

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
      contentType: file.type || "image/png",
    });

  if (error) {
    throw new Error(
      `Supabase upload error: ${error.message}`
    );
  }

  if (!data?.path) {
    throw new Error("Supabase upload error: no file path returned");
  }

  const publicUrlResult = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(data.path);

  if (!publicUrlResult.data.publicUrl) {
    throw new Error("Supabase upload error: no public URL returned");
  }

  return publicUrlResult.data.publicUrl;
}
