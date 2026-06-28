import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseClient";

export async function uploadScreenshot(file: File): Promise<string> {
  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(storage, `bet-slips/${fileName}`);

  await uploadBytes(storageRef, file);

  return getDownloadURL(storageRef);
}