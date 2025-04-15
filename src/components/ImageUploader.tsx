'use client';

type Props = {
  onUpload: (imageUrl: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      onUpload(url);
    }
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleFileChange}
      className="mb-4"
    />
  );
}
