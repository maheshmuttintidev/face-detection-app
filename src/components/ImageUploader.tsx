/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef, useState } from 'react';

type Props = {
  onUpload: (imageUrl: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full mx-auto">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-dashed border-gray-400'
        } rounded-md p-6 text-center cursor-pointer transition-all`}
      >
        <p className="text-gray-600 text-sm mb-2">
          Drag & drop an image or click to upload
        </p>
        <p className="text-gray-400 text-xs">JPG, PNG, or WebP files only</p>
        <div className="mt-4">
          <img
            src="/placeholder.png"
            alt="placeholder"
            className="mx-auto w-24 h-24 object-cover opacity-40 rounded-md"
          />
        </div>
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
