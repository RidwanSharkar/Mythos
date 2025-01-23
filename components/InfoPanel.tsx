import { GalleryItem } from '@/types/gallery';
import Image from 'next/image';
import { useState } from 'react';

interface InfoPanelProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function InfoPanel({ item, onClose }: InfoPanelProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const handleNextImage = () => {
    if (item?.images) {
      setCurrentImageIndex((prev) => 
        prev === item.images!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (item?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? item.images!.length - 1 : prev - 1
      );
    }
  };

  return (
    <div
      className="fixed top-0 bottom-0 w-[400px] bg-background/80 backdrop-blur-sm shadow-lg p-5 transition-[right] duration-500 ease-in-out"
      style={{
        right: item ? '0px' : '-400px',
      }}
    >
      {item && (
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-foreground/10 rounded-full"
            >
              ✕
            </button>
          </div>
          
          <div className="relative w-full h-[360px] mb-4">
            {/* Main Image Display */}
            <div className="relative w-full h-full">
              <Image
                src={item.images?.[currentImageIndex] || item.image}
                alt={item.title}
                fill
                className="object-cover rounded-lg"
              />
              
              {/* Navigation Arrows */}
              {item.images && item.images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          {item.images && item.images.length > 1 && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {item.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden ${
                    currentImageIndex === index ? 'ring-2 ring-foreground' : ''
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${item.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
          
          <p className="mb-4 flex-grow whitespace-pre-line">
            {item.description.split('\n').map((line, index) => {
              const [label, value] = line.split(': ');
              return (
                <span key={index} className="block mb-2">
                  <strong>{label}</strong>: {value}
                </span>
              );
            })}
          </p>
        </div>
      )}
    </div>
  );
}
