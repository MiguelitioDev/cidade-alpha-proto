export type DevelopmentCategory = 'all' | 'alphaville' | 'terras' | '450' | '330' | '275';

export type DevelopmentStatus = '100% Sold' | 'New Launch' | 'Last Units' | 'Resale Available';

export interface Development {
  id: string;
  name: string;
  category: 'alphaville' | 'terras';
  lotSize: number; // 275, 330, 450
  lotsCount: number;
  clubArea: number; // m²
  greenArea: number; // m²
  totalArea: number; // m²
  status: DevelopmentStatus;
  statusBadge: string;
  statusColor: 'sold' | 'launch' | 'last-units' | 'resale';
  priceRange: string;
  description: string;
  highlight: string;
  features: string[];
  image: string;
  facingLagoon?: boolean;
}

export interface CommercialVocation {
  title: string;
  description: string;
  icon: string;
}

export interface CommuteDestination {
  id: string;
  name: string;
  timeMin: number;
  distance: string;
  category: string;
  icon: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'documentacao' | 'construcao' | 'custos' | 'infraestrutura';
  highlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  residential: string;
  residentSince: string;
  content: string;
  appreciationNote: string;
  avatar: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  interest: 'residential' | 'commercial' | 'investment';
  lotSizePreference?: string;
  message?: string;
}
