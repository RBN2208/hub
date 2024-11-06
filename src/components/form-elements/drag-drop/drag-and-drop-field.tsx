import React, { useRef, useState } from 'react';

interface DragAndDropProps {
  onFilesSelected: (files: File[]) => void;
}

export function DragAndDrop({ onFilesSelected }: React.FC<DragAndDropProps>) {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);

  const previewImageRef = useRef<HTMLInputElement>(null);

  const triggerUpload = () => {
    previewImageRef.current?.click();
  }

  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);

    const files = Array.from(event.dataTransfer.files);
    const jpgFiles = files.filter((file) => {
      if (file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png') {
        return file
      }
    });

    console.log(jpgFiles)

    // Vorschau erstellen
    const previews = jpgFiles.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
    // Rückgabe der Dateien
    onFilesSelected(jpgFiles);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerUpload}
      style={{
        border: dragging ? '2px dashed #4a90e2' : '2px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        color: '#555',
        cursor: 'pointer',
        backgroundColor: dragging ? '#f0f8ff' : '#f9f9f9'
      }}
    >
      <p>Ziehe deine JPG-Dateien hierhin oder klicke, um sie auszuwählen</p>
      <input
        ref={previewImageRef}
        type="file"
        accept="image/jpeg, image/png"
        multiple
        style={{ display: 'none' }}
        onChange={(e) => {
          const files = Array.from(e.target.files || []);
          const jpgFiles = files.filter(
            (file) => file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/png'
          );

          const previews = jpgFiles.map((file) => URL.createObjectURL(file));
          setPreviewImages(previews);

          onFilesSelected(jpgFiles);
        }}
      />
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {previewImages.map((src, index) => (
          <img key={index} src={src} alt="preview" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        ))}
      </div>
    </div>
  );
};
