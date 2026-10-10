import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'MCB 16A Single Pole',
    price: 180,
    category: 'Protection',
    description: 'Standard single pole miniature circuit breaker for residential circuits.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p2',
    name: 'RCCB 40A 30mA',
    price: 950,
    category: 'Protection',
    description: 'Residual current circuit breaker for shock protection.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p3',
    name: 'Modular Switch 6A',
    price: 45,
    category: 'Switches',
    description: 'Premium modular switch plate compatible designs.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p4',
    name: 'LED Panel Light 18W',
    price: 320,
    category: 'Lighting',
    description: 'Energy efficient square LED panel for false ceiling.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p5',
    name: 'Copper Wire 1.5 sq mm (90m)',
    price: 1850,
    category: 'Wiring',
    description: 'ISI marked copper conductor for lighting circuits.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p6',
    name: 'Distribution Board 8 Way',
    price: 1200,
    category: 'Boards',
    description: 'Surface/flush type DB with neutral and earth links.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    inStock: true,
  },
];

export const deliveryPriorities = [
  { id: 'urgent', label: 'Within 24 hours (Urgent)', description: 'Priority delivery where available' },
  { id: '3days', label: 'Within 3 days', description: 'Standard express option' },
  { id: 'week', label: 'Within a week', description: 'Regular delivery window' },
  { id: 'month', label: 'Within a month', description: 'Flexible non-urgent delivery' },
];

export const WHATSAPP_NUMBER = '918975187479'; // Om Electronics Business WhatsApp
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildProductWhatsAppLink(product: Product, priority?: string): string {
  const priorityText = priority
    ? deliveryPriorities.find((p) => p.id === priority)?.label || priority
    : 'Standard';
  const message = encodeURIComponent(
    `Hello ElectricFault,\n\nI would like to order:\n*${product.name}*\nPrice: ₹${product.price}\nDelivery priority: ${priorityText}\n\nPlease confirm availability and delivery details.`
  );
  return `${WHATSAPP_BASE}?text=${message}`;
}
