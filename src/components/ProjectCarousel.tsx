'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageModal from './ImageModal';

interface ProjectCarouselProps {
  beforeImage: string;
  afterImage: string;
}

export default function ProjectCarousel({ beforeImage, afterImage }: ProjectCarouselProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
          {/* Before Image */}
          <div 
            className="relative h-full w-1/2 float-left cursor-pointer"
            onClick={() => openModal(beforeImage, "Before")}
          >
            <Image
              src={beforeImage}
              alt="Before"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              Before
            </div>
          </div>
          {/* After Image */}
          <div 
            className="relative h-full w-1/2 float-right cursor-pointer"
            onClick={() => openModal(afterImage, "After")}
          >
            <Image
              src={afterImage}
              alt="After"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              After
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </>
  );
} 