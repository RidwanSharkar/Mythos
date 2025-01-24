import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import GalleryWheel from '@/components/GalleryWheel';
import InfoPanel from '@/components/InfoPanel';
import { GalleryItem } from '@/types/gallery';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 0,
    title: '𝒟𝑒𝓈𝓉𝒾𝓃𝓎',
    description: 'Class: Spellblade\nElement: Arcane\nAlignment: Neutral Good',
    image: '/images/Destiny.png',
  },
  {
    id: 1,
    title: '𝒦𝒶𝒾𝓈𝑒𝓇',
    description: 'Class: Greatsword\nElement: Imperial Martial\nAlignment: Lawful Evil',
    image: '/images/Kaiser.png',
  },
  {
    id: 2,
    title: '𝐹𝑒𝓃𝓇𝒾𝓇',
    description: 'Class: Demigod, Staff\nElements: Divine, Nature\nAlignment: True Neutral',
    image: '/images/Fenrir.png',
  },
  {
    id: 3,
    title: '𝒢𝓇𝑒𝑒𝒹',
    description: 'Class: Greataxe\nElement: Duelist Martial, Mechanical\nAlignment: Neutral Evil',
    image: '/images/Greed2.png',
  },
  {
    id: 4,
    title: '𝐵𝓁𝑜𝑜𝒹𝓂𝑜𝑜𝓃',
    description: 'Class: Greatsword\nElement: Psionic, Vampiric\nAlignment: Neutral Evil',
    image: '/images/Bloodmoon.png',
  },
  {
    id: 5,
    title: '𝐸𝒹𝑒𝓃',
    description: 'Class: Bow, Demigod\nElement: Nature\nAlignment: Neutral Good',
    image: '/images/Eden.png',
  },
  {
    id: 6,
    title: '𝒲𝓇𝒶𝓉𝒽',
    description: 'Class: Runeblade\nElement: Void, Frost\nAlignment: Chaotic Evil',
    image: '/images/Wrath.png',
  },
  {
    id: 7,
    title: '𝒢𝓁𝓊𝓉𝓉𝑜𝓃𝓎 & 𝐿𝓊𝓈𝓉',
    description: 'Class: Runeblade + Spellblade\nElements: Necro + Fire\nAlignment: Neutral Evil + Chaotic Neutral',
    image: '/images/Duo2.png',
  },
  {
    id: 8,
    title: '𝐸𝓂𝓅𝓎𝓇𝑒𝒶𝓃',
    description: 'Class: Greatsword\nElement: Imperial Martial\nAlignment: Lawful Good',
    image: '/images/Empyrean.png',
  },
  {
    id: 9,
    title: '𝐸𝓂𝑒𝓇𝒶𝓁𝒹 𝐹𝒶𝓃𝑔',
    description: 'Class: Greatsword\nElement: Draconic\nAlignment: Chaotic Good',
    image: '/images/Emerald.png',
  },
  {
    id: 10,
    title: '𝐸𝓃𝓋𝓎 + 𝐹𝓇𝑜𝓈𝓉𝒷𝒾𝓉𝑒',
    description: 'Class: Runeblade\nElement: Necro + Frost\nAlignment: Chaotic Evil + Chaotic Neutral',
    image: '/images/EnvyFrostbite.png',
  },
  {
    id: 11,
    title: '𝒫𝓇𝒾𝒹𝑒',
    description: 'Class: Trident-Spear\nElement: Duelist Martial\nAlignment: Chaotic Neutral',
    image: '/images/Pride.png',
  },
  {
    id: 46,
    title: '𝒮𝑜𝓁𝒶𝓇 𝐿𝒶𝓃𝒸𝑒 + 𝒵𝑒𝓅𝒽𝓎𝓇',
    description: 'Class: Greatsword\nElement: Radiant + Wind\nAlignment: Lawful Good + Neutral Good',
    image: '/images/Duo1.png',
    images: [
      '/images/Ash.png',
      '/images/Solar.png',
    ],
  },
  {
    id: 47,
    title: '𝒪𝒶𝓉𝒽𝒷𝓁𝒶𝒹𝑒',
    description: 'Class: Shield + Oathblade\nElement: Radiant\nAlignment: Lawful Good',
    image: '/images/Divine.png',
  },
  {
    id: 48,
    title: ' 𝒲𝒽𝒾𝓉𝑒 𝐿𝒾𝑔𝒽𝓉𝓃𝒾𝓃𝑔',
    description: 'Class: Axe\nElement: Lightning\nAlignment: Lawful Good',
    image: '/images/WhiteLightning.png', 
  },
  {
    id: 49,
    title: '𝐵𝓁𝑜𝑜𝓂𝓈𝒸𝓎𝓉𝒽𝑒',
    description: 'Class: Scythe\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Scythe2.png',
  },
  {
    id: 50,
    title: '𝒫𝒽𝑜𝑒𝓃𝒾𝓍',
    description: 'Class: Crossbow\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Phoenix.png',
  },
  {
    id: 51,
    title: '𝒮𝓅𝑒𝒸𝓉𝓇𝑒',
    description: 'Class: Spellblade\nElement: Arcane\nAlignment: Neutral Good',
    image: '/images/Spectre.png',
  },
  {
    id: 52,
    title: '𝐸𝓋𝑒𝓃𝓉 𝐻𝑜𝓇𝒾𝓏𝑜𝓃 + 𝒯𝑒𝓂𝓅𝑜𝓇𝒶𝓁 𝑅𝑒𝒶𝓋𝑒𝓇',
    description: 'Class: Twin-Blades\nElements: Void + Psionic\nAlignment: Chaotic Good + Chaotic Evil',
    image: '/images/Reavers.png',
  },
  {
    id: 53,
    title: '𝑀𝒶𝑒𝓁𝓈𝓉𝓇𝑜𝓂',
    description: 'Class: War Hammer, Maul\nElement: Lightning, Thunder\nAlignment: Chaotic Neutral',
    image: '/images/Maelstrom.png',
  },
];

// KNIVES 
const INNER_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 28,
    title: '𝐸𝓇𝑒𝒷𝓊𝓈',
    description: 'Class: Cleaver\nElement: Void\nAlignment: True Neutral',
    image: '/images/Erebus.png',
  },
  {
    id: 29,
    title: '𝐿𝑒𝓋𝒾𝒶𝓉𝒽𝒶𝓃',
    description: 'Class: Guandao\nElement: Draconic, Fire\nA lignment: Neutral Evil',
    image: '/images/Leviathan.png',
  },
  {
    id: 30,
    title: '𝒢𝓇𝑜𝓋𝑒 𝒲𝒶𝓇𝒹𝑒𝓃',
    description: 'Class: Blade\nElement: Nature, Divine\nAlignment: Lawful Good',
    image: '/images/GroveWarden.png',
  },
  {
    id: 31,
    title: '𝒟𝓎𝓃𝒶𝓈𝓉𝓎',
    description: 'Class: Katana\nElement: Imperial Martial\nAlignment: Lawful Neutral',
    image: '/images/Dynasty.png',
  },
  {
    id: 32,
    title: '𝒮𝓅𝒾𝓃𝒶𝓁 𝒯𝒶𝓅',
    description: 'Class: Blade\nElement: Necro, Frost\nAlignment: Chaotic Evil',
    image: '/images/SpinalTap2.png',
  },
  {
    id: 33,
    title: '𝒯𝓇𝒾𝒷𝑒𝓁𝑒𝓈𝓈',
    description: 'Class: Knife\nElement: Fire\nAlignment: Neutral Good',
    image: '/images/Tribeless.png',
  },
];

const MIDDLE_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 34,
    title: '𝒯𝒾𝒶𝓂𝒶𝓉',
    description: 'Class: Ancient Wyrm\nElement: Draconic, Fire, Magma\nAlignment: Lawful Evil',
    image: '/images/Tiamat.png',
  },
  {
    id: 35,
    title: '𝐸𝓈𝒸𝒽𝒶𝓉𝑜𝓃',
    description: 'Class: Deity\nElement: Divine, Wind\nAlignment: True Neutral.',
    image: '/images/DivineWind.png',
  },
  {
    id: 36,
    title: '𝒮𝒶ṃ𝓈ā𝓇𝒶',
    description: 'Class: Deity\nElement: Divine, Nature\nAlignment: Neutral Good',
    image: '/images/Samsara.png',
  },
  {
    id: 37,
    title: '𝒟𝓇𝒶𝒸𝑜𝓁𝒾𝒸𝒽',
    description: 'Class: Undead Wyrm\nElement: Draconic, Necro\nAlignment: Chaotic Evil',
    image: '/images/Dracolich2.png',
  },
  {
    id: 38,
    title: '𝑀𝑜𝓃𝒶𝓇𝒸𝒽',
    description: 'Class: Amulet\nElement: Nature\nAlignment: Lawful Good',
    image: '/images/Dreamweaver.png',
  },
  {
    id: 39,
    title: '𝒜𝓊𝓉𝑜𝓂𝒶𝓉𝒶',
    description: 'Class: Amulet\nElement: Mechanical\nAlignment: Lawful Neutral',
    image: '/images/Automata.png',
  },
  {
    id: 40,
    title: '𝒜𝒷𝒶𝒹𝒹𝑜𝓃',
    description: 'Class: Amulet\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Abaddon.png',
  },
  {
    id: 41,
    title: '𝒜𝑒𝑔𝒾𝓈',
    description: 'Class: Amulet\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Aegis.png',
  },
  {
    id: 42,
    title: '𝒫𝓇𝒾𝓂𝒶𝓁',
    description: 'Class: Pendant\nElement: Nature\nAlignment: True Neutral',
    image: '/images/Tiger.png',
  },
  {
    id: 43,
    title: '𝐻𝑒𝒶𝓇𝓉𝓂𝒾𝓃𝒹',
    description: 'Class: Pendant\nElement: Psionic\nAlignment: Chaotic Neutral',
    image: '/images/Heartmind.png',
  },
  {
    id: 44,
    title: '𝐻𝓎𝓁𝒾𝒶𝓃 𝒮𝒽𝒾𝑒𝓁𝒹 + 𝑀𝒶𝓈𝓉𝑒𝓇 𝒮𝓌𝑜𝓇𝒹',
    description: 'Class: Pendant, Sword & Board\nElement: Zelda\nAlignment: Lawful Good',
    image: '/images/Zelda.png',
  },
  {
    id: 45,
    title: '𝒜𝒷𝓎𝓈𝓈𝒶𝓁 𝐵𝑜𝓃𝑒𝓅𝓁𝒶𝓉𝑒',
    description: 'Class: Amulet/Shield\nElement: Necro\nAlignment: Neutral Evil',
    image: '/images/Abyssal.png',
  },
];

const galleryLayers = [
  {
    items: INNER_GALLERY_ITEMS,
    radius: 140,
  },
  {
    items: MIDDLE_GALLERY_ITEMS,
    radius: 280,
  },
  {
    items: GALLERY_ITEMS,
    radius: 420,
  },
];

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handleSelectItem = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} h-screen relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Desktop layout */}
      <div className="hidden md:block relative z-10 scale-[0.65] origin-center w-full h-full">
        <GalleryWheel 
          layers={galleryLayers}
          onSelectItem={(item) => handleSelectItem(item)}
        />
      </div>

      {/* Mobile layout */}
      <div className="block md:hidden mobile-scroll-container">
        <div className="mobile-gallery-container">
          <GalleryWheel 
            layers={galleryLayers}
            onSelectItem={(item) => handleSelectItem(item)}
          />
        </div>
        
        <InfoPanel 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      </div>
    </div>
  );
}
