import { useState } from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import GalleryWheel from '@/components/GalleryWheel';
import InfoPanel from '@/components/InfoPanel';
import InstagramPanel from '@/components/InstagramPanel';
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
    elements: ['Arcane'],
    price: '295'
  },
  {
    id: 1,
    title: '𝒦𝒶𝒾𝓈𝑒𝓇',
    description: 'Class: Greatsword\nElement: Imperial Martial\nAlignment: Lawful Evil',
    image: '/images/Kaiser.png',
    elements: ['Martial'],
    price: '295'
  },
  {
    id: 2,
    title: '𝐹𝑒𝓃𝓇𝒾𝓇',
    description: 'Class: Demigod, Staff\nElements: Divine, Nature\nAlignment: True Neutral',
    image: '/images/Fenrir.png',
    elements: ['Nature'],
    price: '435'
  },
  {
    id: 3,
    title: '𝒢𝓇𝑒𝑒𝒹',
    description: 'Class: Greataxe\nElement: Duelist Martial, Mechanical\nAlignment: Neutral Evil',
    image: '/images/Greed2.png',
    elements: ['Mechanical'],
    price: '345'
  },
  {
    id: 4,
    title: '𝐵𝓁𝑜𝑜𝒹𝓂𝑜𝑜𝓃',
    description: 'Class: Greatsword\nElement: Psionic, Vampiric\nAlignment: Neutral Evil',
    image: '/images/Bloodmoon.png',
    elements: ['Psionic'],
    price: '240'
  },
  {
    id: 5,
    title: '𝐸𝒹𝑒𝓃',
    description: 'Class: Bow, Demigod\nElement: Nature\nAlignment: Neutral Good',
    image: '/images/Eden.png',
    elements: ['Nature'],
    price: '445'
  },
  {
    id: 6,
    title: '𝒲𝓇𝒶𝓉𝒽', 
    description: 'Class: Runeblade\nElement: Void, Frost\nAlignment: Chaotic Evil',
    image: '/images/Wrath.png',
    elements: ['Void'],
    price: '450'
  },
  {
    id: 7,
    title: '𝐿𝓊𝓈𝓉',
    description: 'Class: Spellblade\nElements: Fire\nAlignment: Chaotic Neutral',
    image: '/images/Duo2.png',
    elements: ['Fire'],
    price: '155'
  },
  {
    id: 8,
    title: '𝐹𝓇𝑜𝓈𝓉𝒷𝒾𝓉𝑒',
    description: 'Class: Runeblade\nElement: Necro + Frost\nAlignment: Chaotic Evil + Chaotic Neutral',
    image: '/images/Frostbite.png',
    elements: ['Frost'],
    price: '255'
  },
  {
    id: 9,
    title: '𝐸𝓂𝑒𝓇𝒶𝓁𝒹 𝐹𝒶𝓃𝑔',
    description: 'Class: Greatsword\nElement: Draconic\nAlignment: Chaotic Good',
    image: '/images/Emerald.png',
    elements: ['Draconic'],
    price: '245'
  },
  {
    id: 10,
    title: '𝐸𝓃𝓋𝓎',
    description: 'Class: Runeblade\nElement: Necro + Frost\nAlignment: Chaotic Evil + Chaotic Neutral',
    image: '/images/Envy.png',
    elements: ['Frost'],
    price: '345'
  },
  {
    id: 11,
    title: '𝒫𝓇𝒾𝒹𝑒',
    description: 'Class: Trident-Spear\nElement: Duelist Martial\nAlignment: Chaotic Neutral',
    image: '/images/Pride.png',
    elements: ['Martial'],
    price: '345'
  },
  {
    id: 46,
    title: '𝒮𝑜𝓁𝒶𝓇 𝐿𝒶𝓃𝒸𝑒',
    description: 'Class: Greatsword\nElement: Radiant\nAlignment: Lawful Good',
    image: '/images/Solar.png',
    images: [
    ],
    elements: ['Radiant'],
    price: '190'
  },
  {
    id: 47,
    title: '𝒪𝒶𝓉𝒽𝒷𝓁𝒶𝒹𝑒',
    description: 'Class: Shield + Oathblade\nElement: Radiant\nAlignment: Lawful Good',
    image: '/images/Divine.png',
    elements: ['Radiant'],
    price: '165'
  },
  {
    id: 48,
    title: ' 𝒲𝒽𝒾𝓉𝑒 𝐿𝒾𝑔𝒽𝓉𝓃𝒾𝓃𝑔',
    description: 'Class: Axe\nElement: Lightning\nAlignment: Lawful Good',
    image: '/images/WhiteLightning.png', 
    elements: ['Lightning'],
    price: '175'
  },
  {
    id: 49,
    title: '𝐵𝓁𝑜𝑜𝓂𝓈𝒸𝓎𝓉𝒽𝑒',
    description: 'Class: Scythe\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Scythe2.png',
    elements: ['Necro'],
    price: '195'
  },
  {
    id: 50,
    title: '𝒫𝒽𝑜𝑒𝓃𝒾𝓍',
    description: 'Class: Crossbow\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Phoenix.png',
    elements: ['Fire'],
    price: '125'
  },
  {
    id: 51,
    title: '𝒮𝓅𝑒𝒸𝓉𝓇𝑒',
    description: 'Class: Spellblade\nElement: Arcane\nAlignment: Neutral Good',
    image: '/images/Spectre.png',
    elements: ['Arcane'],
    price: '135'
  },
  {
    id: 52,
    title: '𝐸𝓋𝑒𝓃𝓉 𝐻𝑜𝓇𝒾𝓏𝑜𝓃 + 𝒯𝑒𝓂𝓅𝑜𝓇𝒶𝓁 𝑅𝑒𝒶𝓋𝑒𝓇',
    description: 'Class: Twin-Blades\nElements: Void + Psionic\nAlignment: Chaotic Good + Chaotic Evil',
    image: '/images/Reavers.png',
    elements: ['Psionic'],
    price: '325'
  },
  {
    id: 53,
    title: '𝑀𝒶𝑒𝓁𝓈𝓉𝓇𝑜𝓂',
    description: 'Class: War Hammer, Maul\nElement: Lightning, Thunder\nAlignment: Chaotic Neutral',
    image: '/images/Maelstrom.png',
    elements: ['Lightning'],
    price: '295'
  },
];

// KNIVES 
const INNER_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 28,
    title: '𝐸𝓇𝑒𝒷𝓊𝓈',
    description: 'Class: Cleaver\nElement: Void\nAlignment: True Neutral',
    image: '/images/Erebus.png',
    elements: ['Void'],
    price: '1250'
  },
  {
    id: 29,
    title: 'Full Set',
    description: 'Tier 1 + Tier 2 Set',
    image: '/images/lot.png',
    price: '595'
  },
  {
    id: 30,
    title: '𝒢𝓇𝑜𝓋𝑒 𝒲𝒶𝓇𝒹𝑒𝓃',
    description: 'Class: Blade\nElement: Nature, Divine\nAlignment: Lawful Good',
    image: '/images/GroveWarden.png',
    elements: ['Nature'],
    price: '995'
  },
  {
    id: 31,
    title: '𝒟𝓎𝓃𝒶𝓈𝓉𝓎',
    description: 'Class: Katana\nElement: Imperial Martial\nAlignment: Lawful Neutral',
    image: '/images/Dynasty.png',
    elements: ['Martial'],
    price: '385'
  },
  {
    id: 32,
    title: '𝒮𝓅𝒾𝓃𝒶𝓁 𝒯𝒶𝓇',
    description: 'Class: Blade\nElement: Necro, Frost\nAlignment: Chaotic Evil',
    image: '/images/SpinalTap2.png',
    elements: ['Frost'],
    price: '500'
  },
  {
    id: 33,
    title: '𝒯𝓇𝒾𝒷𝑒𝓁𝑒𝓈𝓈',
    description: 'Class: Knife\nElement: Fire\nAlignment: Neutral Good',
    image: '/images/Tribeless.png',
    elements: ['Fire'],
    price: 'Set by Gabriel'
  },
];

const MIDDLE_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 34,
    title: '𝒯𝒾𝒶𝓂𝒶𝓉',
    description: 'Class: Ancient Wyrm\nElement: Draconic, Fire, Magma\nAlignment: Lawful Evil',
    image: '/images/Tiamat.png',
    elements: ['Draconic'],
    price: '875'
  },
  {
    id: 35,
    title: '𝐸𝓈𝒸𝒽𝒶𝓉𝑜𝓃',
    description: 'Class: Deity\nElement: Divine, Wind\nAlignment: True Neutral.',
    image: '/images/DivineWind.png',
    elements: ['Divine'],
    price: 'Set by Brendan & Shannon'
  },
  {
    id: 36,
    title: '𝒮𝒶ṃ𝓈ā𝓇𝒶',
    description: 'Class: Deity\nElement: Divine, Nature\nAlignment: Neutral Good',  
    image: '/images/Samsara.png',
    elements: ['Nature'],
    price: '395'
  },
  {
    id: 37,
    title: '𝒟𝓇𝒶𝒸𝑜𝓁𝒾𝒸𝒽',
    description: 'Class: Undead Wyrm\nElement: Draconic, Necro\nAlignment: Chaotic Evil',
    image: '/images/Dracolich2.png',
    elements: ['Draconic'],
    price: '395'
  },
  {
    id: 38,
    title: '𝑀𝑜𝓃𝒶𝓇𝒸𝒽',
    description: 'Class: Amulet\nElement: Nature\nAlignment: Lawful Good',
    image: '/images/Dreamweaver.png',
    elements: ['Nature'],
    price: '285'
  },
  {
    id: 39,
    title: '𝒜𝓊𝓉𝑜𝓂𝒶𝓉𝒶',
    description: 'Class: Amulet\nElement: Mechanical\nAlignment: Lawful Neutral',
    image: '/images/Automata.png',
    elements: ['Mechanical'],
    price: '275'
  },
  {
    id: 40,
    title: '𝒜𝒷𝒶𝒹𝒹𝑜𝓃',
    description: 'Class: Amulet\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Abaddon.png',
    elements: ['Necro'],
    price: '395'
  },
  {
    id: 41,
    title: '𝒜𝑒𝑔𝒾𝓈',
    description: 'Class: Amulet\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Aegis.png',
    elements: ['Fire'],
    price: '265'
  },
  {
    id: 42,
    title: '𝒫𝓇𝒾𝓂𝒶𝓁',
    description: 'Class: Pendant\nElement: Nature\nAlignment: True Neutral',
    image: '/images/Tiger.png',
    elements: ['Nature'],
    price: '165'
  },
  {
    id: 43,
    title: '𝒵𝑒𝓅𝒽𝓎𝓇',
    description: 'Class: Greatsword\nElement: Wind\nAlignment: Neutral Good',
    image: '/images/Ash.png',
    elements: ['Wind'],
    price: '165'
  },
  {
    id: 44,
    title: '𝐻𝓎𝓁𝒾𝒶𝓃 𝒮𝒽𝒾𝑒𝓁𝒹 + 𝑀𝒶𝓈𝓉𝑒𝓇 𝒮𝓌𝑜𝓇𝒹',
    description: 'Class: Pendant, Sword & Board\nElement: Zelda\nAlignment: Lawful Good',
    image: '/images/Zelda.png',
    elements: ['Nature'],
    price: '195'
  },
  {
    id: 45,
    title: '𝒜𝒷𝓎𝓈𝓈𝒶𝓁 𝐵𝑜𝓃𝑒𝓅𝓁𝒶𝓉𝑒',
    description: 'Class: Amulet/Shield\nElement: Necro\nAlignment: Neutral Evil',
    image: '/images/Abyssal.png',
    elements: ['Necro'],
    price: '145'
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
   <div className="block md:hidden mobile-gallery-container">
        <GalleryWheel 
          layers={galleryLayers}
          onSelectItem={(item) => handleSelectItem(item)}
        />
      </div>
      
      <InstagramPanel selectedItem={selectedItem} />
      
      <InfoPanel 
        item={selectedItem} 
        onClose={() => setSelectedItem(null)} 
      />
    </div>
  );
}
