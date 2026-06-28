import { supabase } from "./supabaseClient";

const BUCKET_NAME = "bet-slips";

export async function uploadToSupabaseStorage(file: File): Promise<string> {
  const fileExtension = file.name.split(".").pop() ?? "png";
  const fileName = `${crypto.randomUUID()}.${fileExtension}`;
  const filePath = `uploads/${fileName}`;

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(filePath, file);

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(filePath);

  return data.publicUrl;
}
