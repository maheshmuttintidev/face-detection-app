"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { calculateAllFaceRects } from "../utils/faceBoxUtils";

type Props = {
  imageSrc: string;
};

export default function FaceOverlay({ imageSrc }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [faceRects, setFaceRects] = useState<any[]>([]);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  // Mock original image size and bounding boxes (simulate API result)
  const originalSize = { width: 2000, height: 1000 };
  const boundingBoxes = [
    [100, 200, 600, 800],
    [1400, 100, 1900, 600],
  ];

  useEffect(() => {
    if (!imgRef.current) return;

    const resizedW = imgRef.current.clientWidth;
    const resizedH = imgRef.current.clientHeight;
    setImgSize({ width: resizedW, height: resizedH });

    const result = calculateAllFaceRects(
      boundingBoxes,
      originalSize.width,
      originalSize.height,
      resizedW,
      resizedH
    );
    setFaceRects(result);
  }, [imageSrc]);

  return (
    <div className="relative">
      <Image
        ref={imgRef}
        src={imageSrc}
        alt="Uploaded"
        width={600}
        height={600}
        className="border rounded-md"
      />
      {faceRects.map((rect, index) => (
        <div
          key={index}
          className="absolute border-2 border-red-500"
          style={{
            left: rect.x,
            top: rect.y,
            width: rect.width,
            height: rect.height,
          }}
        />
      ))}
    </div>
  );
}
