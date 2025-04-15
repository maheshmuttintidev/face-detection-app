'use client';

import FaceOverlay from "@/components/FaceOverlay";
import ImageUploader from "@/components/ImageUploader";
import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const [imageData, setImageData] = useState<string | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageData && overlayRef.current) {
      overlayRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [imageData]);

  return (
    <main className="flex flex-col items-center justify-center px-3">
      <ImageUploader onUpload={setImageData} />
      {imageData && (
        <div ref={overlayRef}>
          <FaceOverlay imageSrc={imageData} />
        </div>
      )}
    </main>
  );
}
