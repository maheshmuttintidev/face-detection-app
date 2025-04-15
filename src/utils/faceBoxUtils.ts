export type BoundingBoxType = [number, number, number, number];

export type FaceRectType = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export function calculateImageSize(
  originalWidth: number,
  originalHeight: number,
  screenWidth: number
) {
  const ratio = originalWidth / originalHeight;
  const width = originalWidth > screenWidth ? screenWidth : originalWidth;
  const height = width / ratio;

  return {
    width,
    height,
    originalWidth,
    originalHeight,
  };
}

export function calculateFaceRectInsideImage(
  boundingBox: BoundingBoxType,
  imageSize: {
    width: number;
    height: number;
    originalWidth: number;
    originalHeight: number;
  }
): FaceRectType {
  const wRatio = imageSize.originalWidth / imageSize.width;
  const hRatio = imageSize.originalHeight / imageSize.height;

  const faceX = boundingBox[0] / wRatio;
  const faceY = boundingBox[1] / hRatio;

  const faceWidth = boundingBox[2] / wRatio - faceX;
  const faceHeight = boundingBox[3] / hRatio - faceY;

  return {
    x: faceX,
    y: faceY,
    width: Math.ceil(faceWidth),
    height: Math.ceil(faceHeight),
  };
}

export function calculateAllFaceRects(
  boundingBoxes: BoundingBoxType[],
  originalWidth: number,
  originalHeight: number,
  resizedWidth: number,
  resizedHeight: number
): FaceRectType[] {
  const imageSize = {
    width: resizedWidth,
    height: resizedHeight,
    originalWidth,
    originalHeight,
  };

  return boundingBoxes.map((box) =>
    calculateFaceRectInsideImage(box, imageSize)
  );
}
