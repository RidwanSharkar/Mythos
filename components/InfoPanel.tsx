import { GalleryItem } from '@/types/gallery';
import Image from 'next/image';
import { useState, useEffect, JSX } from 'react';

interface InfoPanelProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export default function InfoPanel({ item, onClose }: InfoPanelProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Instagram URLs mapping -> seperate file dis shite later
  const instagramUrls: Record<number, string> = {
    0: 'https://www.instagram.com/p/C7jlkgzg-b-/',  // Destiny
    1: 'https://www.instagram.com/p/C2SfKibLZru/',  // Kaiser
    2: 'https://www.instagram.com/p/CI7fszljdOB/',  // Fenrir
    3: 'https://www.instagram.com/p/CHgATb4DCQg/',  // Greed
    4: 'https://www.instagram.com/p/CLXGKGUDzdM/',  // Bloodmoon
    5: 'https://www.instagram.com/p/CIZ9lYvj7lz/',  // Eden
    6: 'https://www.instagram.com/p/CVS_1MHDFQv/',  // Wrath
    7: 'https://www.instagram.com/p/Bgo8IiMgl02/',  // Gluttony
    8: 'https://www.instagram.com/p/CONzKIXDkug/', // Frostbite
    9: 'https://www.instagram.com/p/CJeOkvDDolJ/', // Emerald Fang
    11: 'https://www.instagram.com/p/CIQrI-yjcX-/', // Pride
    46: 'https://www.instagram.com/p/CMzr_wUj0tl/', // Solar Lance
    10: 'https://www.instagram.com/p/CNIZNPujzZi/',  // Envy
    47: 'https://www.instagram.com/p/BdgLJ1sH41B/', // Oath
    48: 'https://www.instagram.com/p/Bcf0WwgHbkr/', // White Lightning
    49: 'https://www.instagram.com/p/BZ2ApRWnYjB/', // Scythe
    50: 'https://www.instagram.com/p/BXWKhK2l2-T/', // Phoeenix
    51: 'https://www.instagram.com/p/CINEqAgjY9C/', // Spectre
    52: 'https://www.instagram.com/p/CNIZNPujzZi/',  // Reavers
    53: 'https://www.instagram.com/p/Bj-8quahGCx/', // Maelstrom
    28: 'https://www.instagram.com/p/CI3clqYjG8c/', // Empyrean
    29: 'https://www.instagram.com/p/DQ7Rk8Mkpup/', // Spinal Tap III
    30: 'https://www.instagram.com/p/CqLYWcAjIr7/', // Grove Warden
    31: 'https://www.instagram.com/p/CivBplpDPh0/', // Dynasty
    32: 'https://www.instagram.com/p/C9P5jNRA_nR/', // Erebus
    33: 'https://www.instagram.com/p/CK4K591D25e/', // Tribeless
    34: 'https://www.instagram.com/p/CJthsNfjhrc/', // Tiamat
    35: 'https://www.instagram.com/p/CLpG3uFjaj7/', // Divine Wind
    36: 'https://www.instagram.com/p/COdQeRDjIQ4/', // Samsara
    37: 'https://www.instagram.com/p/CPg5QkKDbha/', // Dracolich
    38: 'https://www.instagram.com/p/C8cQwlWAwXh/', // Monarch
    39: 'https://www.instagram.com/p/CqIrxGgtEws/', // Automata
    40: 'https://www.instagram.com/p/C7hJFlsA07a/', // Abaddon 
    41: 'https://www.instagram.com/p/CqVo8xBOG5U/', // Aegis
    42: 'https://www.instagram.com/p/CPqgrewji9p/', // Tiger
    43: 'https://www.instagram.com/p/CKHRQpYjISF/', // Zephyr
    44: 'https://www.instagram.com/p/C7zKOm8AlgX/', // Hylian Shield + Master Sword
    45: 'https://www.instagram.com/p/BnrPliZlMZj/', // Abyssal Boneplate
  };

  const handleImageClick = () => {
    if (isMobile && item && instagramUrls[item.id]) {
      window.open(instagramUrls[item.id], '_blank');
    }
  };

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

  const PanelContent = () => (
    <div className="h-full flex flex-col">
      {isMobile ? (
        // Mobile Layout - Title at bottom
        <>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-foreground/10 rounded-full absolute top-2 right-2 z-10"
            style={{ top: 'env(safe-area-inset-top, 8px)' }}
          >
            ✕
          </button>

          <div className="image-container">
            <div 
              className="relative w-full h-full"
              onClick={handleImageClick}
              style={{ cursor: isMobile ? 'pointer' : 'default' }}
            >
              <Image
                src={item?.images?.[currentImageIndex] || item?.image || ''}
                alt={item?.title || ''}
                fill
                className="object-contain rounded-lg"
              />
              
              {item?.images && item.images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70">←</button>
                  <button onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70">→</button>
                </>
              )}
            </div>
          </div>

          <div className="text-container">
            {/* Mobile Layout: 2x2 grid */}
            {(() => {
              const rows: JSX.Element[][] = [[], []];
              
              item?.description.split('\n').forEach((line, index) => {
                const [label, value] = line.split(': ');
                
                if (label === 'Class') {
                  rows[0].push(
                    <span key={`${index}-class`} className="grid-item text-xs" title={`${label}: ${value}`}>
                      <strong className="mr-1">{label}:</strong>{value}
                    </span>
                  );
                } else if (label === 'Alignment') {
                  rows[0].push(
                    <span key={`${index}-alignment`} className="grid-item text-xs" title={value}>
                      {value}
                    </span>
                  );
                } else if (label === 'Element' || label === 'Elements') {
                  rows[1].push(
                    <span key={`${index}-element`} className="grid-item text-xs" title={`${label}: ${value}`}>
                      <strong className="mr-1">{label}:</strong>{value}
                    </span>
                  );
                }
              });

              if (item?.price) {
                rows[1].push(
                  <span key="price" className="grid-item text-xs" title={`Price: ${isNaN(parseInt(item.price)) ? item.price : `$${parseInt(item.price).toLocaleString()}`}`}>
                    <strong className="mr-1">Price:</strong>
                    {isNaN(parseInt(item.price)) 
                      ? item.price 
                      : `$${parseInt(item.price).toLocaleString()}`
                    }
                  </span>
                );
              }

              return rows.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="grid-row">
                  {row}
                </div>
              ));
            })()}

            <h2 className="text-sm font-bold mt-1" style={{ paddingBottom: 'env(safe-area-inset-bottom, 4px)' }} title={item?.title}>
              {item?.title}
            </h2>
          </div>
        </>
      ) : (
        // Desktop Layout - Title at top
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{item?.title}</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-foreground/10 rounded-full"
            >
              ✕
            </button>
          </div>

          <div className="relative w-full h-[360px] mb-4">
            <div className="relative w-full h-full">
              <Image
                src={item?.images?.[currentImageIndex] || item?.image || ''}
                alt={item?.title || ''}
                fill
                className="object-cover rounded-lg"
              />
              
              {item?.images && item.images.length > 1 && (
                <>
                  <button onClick={handlePrevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70">←</button>
                  <button onClick={handleNextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/70">→</button>
                </>
              )}
            </div>
          </div>

          <p className="mb-4 flex-grow whitespace-pre-line">
            {item?.description.split('\n').map((line, index) => {
              const [label, value] = line.split(': ');
              return (
                <span key={index} className="block mb-2">
                  <strong>{label}</strong>: {value}
                </span>
              );
            })}
            
            {item?.price && (
              <span className="block mb-2">
                <strong>Price</strong>: {
                  isNaN(parseInt(item.price)) 
                    ? item.price 
                    : `$${parseInt(item.price).toLocaleString()}`
                }
              </span>
            )}
          </p>
        </>
      )}

      {item?.images && item.images.length > 1 && (
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
    </div>
  );

  if (!item) return null;

  return isMobile ? (
    <div className="mobile-info-panel">
      <div className="mobile-body-container">
        <PanelContent />
      </div>
    </div>
  ) : (
    <div
      className="fixed top-0 bottom-0 w-[400px] bg-background/80 backdrop-blur-sm shadow-lg p-5 transition-[right] duration-500 ease-in-out"
      style={{
        right: item ? '0px' : '-400px',
      }}
    >
      <PanelContent />
    </div>
  );
}
