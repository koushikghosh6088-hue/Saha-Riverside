
export interface EventPackage {
    name: string;
    description: string;
    features: string[];
}

export interface AddonService {
    name: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface GalleryImage {
    id: number;
    category: 'food' | 'vibe' | 'owner' | 'street' | 'video';
    src: string;
    alt: string;
    isVideo?: boolean;
}

export interface Testimonial {
    quote: string;
    name: string;
    event: string;
    avatarUrl: string;
}

export interface Feature {
    title: string;
    highlight: string;
    description: string;
    imageUrl: string;
}

// FIX: Added missing ServicePackage interface used in components/Services.tsx
export interface ServicePackage {
    name: string;
    description: string;
    features: string[];
}