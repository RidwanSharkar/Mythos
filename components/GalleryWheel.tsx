import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { GalleryItem } from '@/types/gallery';

interface GalleryLayer {
  items: GalleryItem[];
  radius: number;
}

interface GalleryWheelProps {
  layers: GalleryLayer[];
  onSelectItem: (item: GalleryItem) => void;
}

export default function GalleryWheel({ layers, onSelectItem }: GalleryWheelProps) {
  const layerContainerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[][]>(layers.map(() => []));
  const [layerRotations, setLayerRotations] = useState<number[]>(layers.map(() => 0));
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [, setSelectedItemPosition] = useState<{ x: number; y: number } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleItemClick = (item: GalleryItem, itemIndex: number, layerIndex: number) => {
    setSelectedItemId(item.id);
    
    const radius = layers[layerIndex].radius;
    
    setTimeout(() => {
      if (isMobile) {
        setSelectedItemPosition({
          x: window.innerWidth / 2,
          y: window.innerHeight * 0.15 + (radius * 0.3),
        });
      } else {
        setSelectedItemPosition({
          x: 600,
          y: 600 - radius
        });
      }
    }, 500);
    
    const anglePerItem = 360 / layers[layerIndex].items.length;
    const targetRotation = 270 - (itemIndex * anglePerItem);
    
    const newRotations = [...layerRotations];
    newRotations[layerIndex] = targetRotation;
    setLayerRotations(newRotations);

    gsap.to(layerContainerRefs.current[layerIndex], {
      duration: 1,
      rotation: targetRotation,
      transformOrigin: '50% 50%',
      ease: 'power3.out',
    });

    itemRefs.current[layerIndex].forEach((itemRef) => {
      if (itemRef) {
        gsap.to(itemRef, {
          duration: 1,
          rotation: -targetRotation,
          ease: 'power3.out',
        });
      }
    });

    onSelectItem(item);
  };

  return (
    <div className="relative w-[1200px] h-[1200px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="absolute inset-0">
        {layers.map((layer, layerIndex) => (
          <div
            key={layerIndex}
            ref={(el) => { layerContainerRefs.current[layerIndex] = el; }}
            className="absolute inset-0 [transform-style:preserve-3d]"
            style={{ 
              transformOrigin: 'center center',
              transform: `rotate(${layerRotations[layerIndex]}deg)`,
              pointerEvents: 'none',
            }}
          >
            {layer.items.map((item, i) => {
              const angle = (360 / layer.items.length) * i;
              const rad = (angle * Math.PI) / 180;
              const x = layer.radius * Math.cos(rad);
              const y = layer.radius * Math.sin(rad);
              const isSelected = selectedItemId === item.id;

              return (
                <div
                  key={item.id}
                  ref={(el) => { 
                    if (!itemRefs.current[layerIndex]) itemRefs.current[layerIndex] = [];
                    itemRefs.current[layerIndex][i] = el; 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleItemClick(item, i, layerIndex);
                  }}
                  className={`absolute w-[120px] h-[120px] rounded-full cursor-pointer 
                           border-2 border-[#FFD700] shadow-lg overflow-hidden 
                           hover:scale-110 transition-transform bg-black/50
                           ${isSelected ? 'selected-item' : ''}`}
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(${x}px, ${y}px) 
                               translate(-50%, -50%) 
                               rotate(${-angle}deg)
                               rotate(${-layerRotations[layerIndex]}deg)`,
                    transformOrigin: '50% 50%',
                    pointerEvents: 'auto',
                    zIndex: layerIndex * 10,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover pointer-events-none scale-105"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
