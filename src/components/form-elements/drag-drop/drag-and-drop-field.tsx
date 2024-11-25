import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Logger } from '../../../lib/utils';

interface DragAndDropProps {
  onFilesSelected: (files: File[]) => void;
  imagesFromUploadState: string[] | [];
}

export function DragAndDrop({ onFilesSelected, imagesFromUploadState }: DragAndDropProps) {
  const [previewImages, setPreviewImages] = useState<string[]>(imagesFromUploadState);
  const [dragging, setDragging] = useState(false);

  const previewImageRef = useRef<HTMLInputElement>(null);

  const triggerUpload = () => {
    previewImageRef.current?.click();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const filterAndCreatePreviews = (files: File[]): { jpgFiles: File[]; previews: string[] } => {
    const jpgFiles = files.filter((file) =>
      ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)
    );

    const previews = jpgFiles.map((file) => URL.createObjectURL(file));
    Logger.log('Files filtered for JPG/PNG -> ', jpgFiles);
    Logger.log('Image Previews -> ', previews);
    return { jpgFiles, previews };
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragging(false);

    const files = Array.from(event.dataTransfer.files);
    Logger.log('Files dropped -> ', files);
    const { jpgFiles, previews } = filterAndCreatePreviews(files);

    setPreviewImages(previews);
    onFilesSelected(jpgFiles);
  };

  const manualUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const { jpgFiles, previews } = filterAndCreatePreviews(files);

    setPreviewImages(previews);
    onFilesSelected(jpgFiles);
  };

  useEffect(() => {
    setPreviewImages(imagesFromUploadState);
  }, [imagesFromUploadState]);

  return (
    <DragWindow
      $dragging={dragging}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={triggerUpload}
      onKeyUp={(e) => e.key === 'Enter' && triggerUpload()}
      tabIndex={0}
      role="button"
    >
      <p>Bilder hier ablegen oder anklicken, um diese hochzuladen</p>
      <input
        ref={previewImageRef}
        type="file"
        accept="image/jpeg, image/png"
        multiple
        style={{ display: 'none' }}
        onChange={manualUpload}
      />
      <PreviewImageWrapper>
        {previewImages &&
          previewImages.map((src, index) => (
            <PreviewImage key={index} src={src} alt="preview" />
          ))}
      </PreviewImageWrapper>
    </DragWindow>
  );
}

const PreviewImageWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const PreviewImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const DragWindow = styled.div<{ $dragging: boolean }>`
  background-color: ${({ $dragging }) => ($dragging ? '#f0f8ff' : '#f9f9f9')};
  border: ${({ $dragging }) => ($dragging ? '2px dashed #4a90e2' : '1px dashed #000')};
  padding: 20px;
  text-align: center;
  color: #000;
  cursor: pointer;
`;
