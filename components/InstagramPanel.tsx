import { useState, useEffect } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { GalleryItem } from '@/types/gallery';

interface InstagramPanelProps {
  selectedItem: GalleryItem | null;
}

export default function InstagramPanel({ selectedItem }: InstagramPanelProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [instagramUrl, setInstagramUrl] = useState<string | null>(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Update Instagram URL when selectedItem changes
  useEffect(() => {
    if (selectedItem) {
      // Map item IDs directly to Instagram URLs
      const instagramUrls: Record<number, string> = {
        0: 'https://www.instagram.com/p/C7jlkgzg-b-/',  // Destiny
        1: 'https://www.instagram.com/p/C2SfKibLZru/',  // Kaiser
        2: 'https://www.instagram.com/p/CI7fszljdOB/',  // Fenrir
        3: 'https://www.instagram.com/p/CHgATb4DCQg/',  // Greed
        4: 'https://www.instagram.com/p/CLXGKGUDzdM/',  // Bloodmoon
        5: 'https://www.instagram.com/p/CIZ9lYvj7lz/',  // Eden
        6: 'https://www.instagram.com/p/CVS_1MHDFQv/',  // Wrath
        7: 'https://www.instagram.com/p/CNIZNPujzZi/',  // Lust
        8: 'https://www.instagram.com/p/CI3clqYjG8c/', // Empyrean
        9: 'https://www.instagram.com/p/CJeOkvDDolJ/', // Emerald Fang
        11: 'https://www.instagram.com/p/CIQrI-yjcX-/', // Pride
        46: 'https://www.instagram.com/p/CMzr_wUj0tl/', // Solar Lance
        10: 'https://www.instagram.com/p/CNIZNPujzZi/',  // Envy
        47: 'https://www.instagram.com/p/BdgLJ1sH41B/', // Oath
        48: 'https://www.instagram.com/p/Bcf0WwgHbkr/', // White Lightning
        49: 'https://www.instagram.com/p/BZ2ApRWnYjB/', // Scythe
        50: 'https://www.instagram.com/p/BXWKhK2l2-T/', // Phoeenix
        51: 'https://www.instagram.com/p/CINEqAgjY9C/', // Phoeenix
        52: 'https://www.instagram.com/p/CNIZNPujzZi/',  // Reavers
        53: 'https://www.instagram.com/p/Bj-8quahGCx/', // Maelstrom
        28: 'https://www.instagram.com/p/C9P5jNRA_nR/', // Erebus
        29: 'https://www.instagram.com/p/CONzKIXDkug/', // Frostbite
        30: 'https://www.instagram.com/p/CqLYWcAjIr7/', // Grove Warden
        31: 'https://www.instagram.com/p/CivBplpDPh0/', // Dynasty
        32: 'https://www.instagram.com/p/CcQWSvFjwAi/', // Spinal Tap
        33: 'https://www.instagram.com/p/C9P5jNRA_nR/', // Frostbite
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

      setInstagramUrl(instagramUrls[selectedItem.id] || null);
    } else {
      setInstagramUrl(null);
    }
  }, [selectedItem]);
  
  // If no URL is available, don't render the panel
  if (!instagramUrl) return null;

  const PanelContent = () => (
    <div className="h-full flex flex-col">
      <div className="instagram-embed-container">
        <InstagramEmbed 
          url={instagramUrl}
          width={450}
          captioned={false}
          key={instagramUrl} // Force re-render when URL changes
        />
      </div>
    </div>
  );

  return isMobile ? (
    <div className="mobile-info-panel" style={{ left: 0, right: 'auto' }}>
      <div className="mobile-body-container">
        <PanelContent />
      </div>
    </div>
  ) : (
    <div
      className="fixed top-0 bottom-0 w-[400px] bg-background/80 backdrop-blur-sm shadow-lg p-5"
      style={{ left: '0px' }}
    >
      <PanelContent />
    </div>
  );
}