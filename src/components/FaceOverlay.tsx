/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useEffect, useRef, useState } from "react";
import { calculateAllFaceRects, FaceRectType } from "../utils/faceBoxUtils";

type Props = {
  imageSrc: string;
};

export default function FaceOverlay({ imageSrc }: Props) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [faceRects, setFaceRects] = useState<FaceRectType[]>([]);
  // const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

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
    // setImgSize({ width: resizedW, height: resizedH });

    const result = calculateAllFaceRects(
      // @ts-expect-error
      boundingBoxes,
      originalSize.width,
      originalSize.height,
      resizedW,
      resizedH
    );
    setFaceRects(result);
  }, [imageSrc]);

  return (
    <div className="relative mt-4 mb-8 w-full">
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Uploaded"
        width={300}
        className="border h-auto rounded-md"
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
