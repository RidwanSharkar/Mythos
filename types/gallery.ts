export type ElementType = 'Void' | 'Divine' | 'Mechanical' | 'Psionic' | 'Arcane' | 
                         'Draconic' | 'Lightning' | 'Necro' | 'Frost' | 'Martial' | 
                         'Nature' | 'Radiant' | 'Fire' | 'Wind';

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  images?: string[];
  elements?: ElementType[];
}

export const ELEMENT_COLORS: Record<ElementType, string> = {
  'Void': '#B186FF',      // Lighter Purple
  'Divine': '#B7FF00',    // Bright Yellow
  'Mechanical': '#FF8000', // Bronze
  'Psionic': '#FF69B4',   // Purple-Pink
  'Arcane': '#FF1493',    // Pink
  'Draconic': '#DC143C',  // Crimson
  'Lightning': '#ADD8E6', // Light Blue
  'Necro': '#90EE90',     // Light Green
  'Frost': '#87CEFA',     // Ice Blue
  'Martial': '#4169E1',   // Royal Blue
  'Nature': '#32CD32',    // Green
  'Radiant': '#FFD700',   // Light Gold
  'Fire': '#FF3D28',      // Pure Red
  'Wind': '#E8E8E8',      // Bright Whispy Silver
};
