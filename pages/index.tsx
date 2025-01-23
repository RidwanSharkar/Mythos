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
    title: 'Destiny',
    description: 'Class: Spellblade\nElement: Divine\nAlignment: Neutral Good',
    image: '/images/Destiny.png',
  },
  {
    id: 1,
    title: 'Kaiser',
    description: 'Class: Greatsword\nElement: Imperial Martial\nAlignment: Lawful Evil',
    image: '/images/Kaiser.png',
  },
  {
    id: 2,
    title: 'Fenrir',
    description: 'Class: Demigod, Staff\nElements: Divine, Nature\nAlignment: True Neutral',
    image: '/images/Fenrir.png',
  },
  {
    id: 3,
    title: 'Greed',
    description: 'Class: Greataxe\nElement: Imperial Martial, Mechanical\nAlignment: Neutral Evil',
    image: '/images/Greed2.png',
  },
  {
    id: 4,
    title: 'Bloodmoon',
    description: 'Class: Greatsword\nElement: Vampiric\nAlignment: Neutral Evil',
    image: '/images/Bloodmoon.png',
  },
  {
    id: 5,
    title: 'Eden',
    description: 'Class: Bow, Demigod\nElement: Nature\nAlignment: Neutral Good',
    image: '/images/Eden.png',
  },
  {
    id: 6,
    title: 'Wrath',
    description: 'Class: Runeblade\nElement: Chaos\nAlignment: Chaotic Evil',
    image: '/images/Wrath.png',
  },
  {
    id: 7,
    title: 'Gluttony & Lust',
    description: 'Class: Runeblade\nElements: Draconic, Necro\nAlignment: Neutral Evil',
    image: '/images/Duo2.png',
  },
  {
    id: 8,
    title: 'Empyrean',
    description: 'Class: Greatsword\nElement: Imperial Martial\nAlignment: Lawful Good',
    image: '/images/Empyrean.png',
  },
  {
    id: 9,
    title: 'Emerald',
    description: 'Class: Greatsword\nElement: Draconic\nAlignment: Chaotic Good',
    image: '/images/Emerald.png',
  },
  {
    id: 10,
    title: 'Envy',
    description: 'Class: Runeblade\nElement: Frost, Necro\nAlignment: Chaotic Evil',
    image: '/images/EnvyFrostbite.png',
  },
  {
    id: 11,
    title: 'Pride',
    description: 'Class: Trident-Spear\nElement: Imperial Martial\nAlignment: Lawful Good',
    image: '/images/Pride.png',
  },
  {
    id: 46,
    title: 'Solar',
    description: 'Class: Greatsword\nElement: Radiant, Nature\nAlignment: Lawful/Neutral Good',
    image: '/images/Duo1.png',
    images: [
      '/images/Ash.png',
      '/images/Solar.png',
    ],
  },
  {
    id: 47,
    title: 'Divine',
    description: 'Class: Shield\nElement: Holy\nAlignment: Lawful Good',
    image: '/images/Divine.png',
  },
  {
    id: 48,
    title: 'White Lightning',
    description: 'Class: Axe\nElement: Lightning, Imperial Martial\nAlignment: Lawful Good',
    image: '/images/WhiteLightning.png',
  },
  {
    id: 49,
    title: 'Dragonbone Scythe',
    description: 'Class: Scythe\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Scythe2.png',
  },
  {
    id: 50,
    title: 'Phoenix Crossbow',
    description: 'Class: Crossbow\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Phoenix.png',
  },
  {
    id: 51,
    title: 'Phantom',
    description: 'Class: Spellblade\nElement: Arcane\nAlignment: Neutral Good',
    image: '/images/Spectre.png',
  },
  {
    id: 52,
    title: 'Event Horizon',
    description: 'Class: Twin-Blades\nElements: Cosmic, Temporal\nAlignment: Chaotic Good',
    image: '/images/Reavers.png',
  },
  {
    id: 53,
    title: 'Maelstrom',
    description: 'Class: War Hammer\nElement: Lightning\nAlignment: Chaotic Good',
    image: '/images/Maelstrom.png',
  },
];

// KNIVES 
const INNER_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 28,
    title: 'Erebus',
    description: 'Class: Blade\nElement: Cosmic/Void\nAlignment: True Neutral',
    image: '/images/Erebus.png',
  },
  {
    id: 29,
    title: 'Leviathan',
    description: 'Class: Blade\nElement: Draconic/Fire\nAlignment: Neutral Evil',
    image: '/images/Leviathan.png',
  },
  {
    id: 30,
    title: 'Grove Warden',
    description: 'Class: Blade\nElement: Nature/Divine\nAlignment: Lawful Good',
    image: '/images/GroveWarden.png',
  },
  {
    id: 31,
    title: 'Dynasty',
    description: 'Class: Blade\nElement: Imperial Martial\nAlignment: Lawful Neutral',
    image: '/images/Dynasty.png',
  },
  {
    id: 32,
    title: 'Spinal Tap',
    description: 'Class: Blade\nElement: Necro\nAlignment: Chaotic Evil',
    image: '/images/SpinalTap2.png',
  },
  {
    id: 33,
    title: 'Tribeless',
    description: 'Class: Blade\nElement: Fire\nAlignment: Neutral Good',
    image: '/images/Tribeless.png',
  },
];

const MIDDLE_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 34,
    title: 'Tiamat',
    description: 'Class: Ancient Wyrm\nElement: Draconic, Fire, Magma\nAlignment: Lawful Evil',
    image: '/images/Tiamat.png',
  },
  {
    id: 35,
    title: 'Eschaton',
    description: 'Class: Deity\nElement: Divine, Air\nAlignment: True Neutral.',
    image: '/images/DivineWind.png',
  },
  {
    id: 36,
    title: 'Samsara',
    description: 'Class: Deity\nElement: Divine, Nature\nAlignment: Neutral Good',
    image: '/images/Samsara.png',
  },
  {
    id: 37,
    title: 'Dracolich',
    description: 'Class: Undead Wyrm\nElement: Draconic, Necro\nAlignment: Chaotic Evil',
    image: '/images/Dracolich2.png',
  },
  {
    id: 38,
    title: 'Monarch',
    description: 'Class: Amulet\nElement: Nature\nAlignment: Lawful Good',
    image: '/images/Dreamweaver.png',
  },
  {
    id: 39,
    title: 'Automata',
    description: 'Class: Amulet\nElement: Mechanical\nAlignment: Lawful Neutral',
    image: '/images/Automata.png',
  },
  {
    id: 40,
    title: 'Abaddon',
    description: 'Class: Amulet\nElement: Necro\nAlignment: Lawful Evil',
    image: '/images/Abaddon.png',
  },
  {
    id: 41,
    title: 'Aegis',
    description: 'Class: Amulet\nElement: Fire\nAlignment: Chaotic Good',
    image: '/images/Aegis.png',
  },
  {
    id: 42,
    title: 'Tiger',
    description: 'Class: Amulet\nElement: Nature\nAlignment: True Neutral',
    image: '/images/Tiger.png',
  },
  {
    id: 43,
    title: 'Heartmind',
    description: 'Class: Amulet\nElement: Psionic\nAlignment: Chaotic Neutral',
    image: '/images/Heartmind.png',
  },
  {
    id: 44,
    title: 'Zelda',
    description: 'Class: Amulet\nElement: Martial\nAlignment: Chaotic Neutral',
    image: '/images/Zelda.png',
  },
  {
    id: 45,
    title: 'Abyssal',
    description: 'Class: Shield\nElement: Necro\nAlignment: Neutral Evil',
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
      
      <div className="relative z-10 scale-[0.7250] origin-center w-full h-full"> {/* SCALE */}
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
  );
}
