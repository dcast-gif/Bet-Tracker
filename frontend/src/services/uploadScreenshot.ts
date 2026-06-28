import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebaseClient";

export async function uploadScreenshot(file: File): Promise<string> {
  const fileName = `${Date.now()}-${file.name}`;

  const storageRef = ref(storage, `bet-slips/${fileName}`);

  const uploadTask = uploadBytes(storageRef, file);

  const timeout = new Promise<never>((_, reject) => {
    setTimeout(() => {
      reject(new Error("Upload timed out"));
    }, 20000);
  });

  await Promise.race([uploadTask, timeout]);

  return getDownloadURL(storageRef);
}