export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  scope: string[];
  benefits: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
  icon: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'repairs' | 'installations' | 'safety' | 'scheduling';
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  inStock: boolean;
}
