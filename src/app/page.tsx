"use client";

import FaceOverlay from "@/components/FaceOverlay";
import ImageUploader from "@/components/ImageUploader";
import { useState } from "react";

export default function HomePage() {
  const [imageData, setImageData] = useState<string | null>(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Face Detection Overlay</h1>
      <ImageUploader onUpload={setImageData} />
      {imageData && <FaceOverlay imageSrc={imageData} />}
    </main>
  );
}
