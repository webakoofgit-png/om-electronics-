import type { Product } from '../types';

export const products: Product[] = [
  // Protection
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
    id: 'p13',
    name: 'Isolator 63A Double Pole',
    price: 450,
    category: 'Protection',
    description: 'Main switch isolator for complete circuit disconnection.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    inStock: true,
  },

  // Switches & Sockets
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
    id: 'p7',
    name: 'Modular Socket 16A',
    price: 110,
    category: 'Switches',
    description: 'Heavy duty 16A socket for appliances like ACs and Geysers.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p8',
    name: 'Fan Regulator 2 Module',
    price: 280,
    category: 'Switches',
    description: 'Step type electronic fan regulator.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80',
    inStock: true,
  },

  // Lighting
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
    id: 'p9',
    name: 'LED Bulb 9W (Pack of 4)',
    price: 350,
    category: 'Lighting',
    description: 'Bright white 9W LED bulbs with high lumen output.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p10',
    name: 'LED Tube Light 20W',
    price: 220,
    category: 'Lighting',
    description: 'Sleek batten LED tube light for uniform illumination.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p17',
    name: 'Outdoor Flood Light 50W',
    price: 850,
    category: 'Lighting',
    description: 'Waterproof IP65 flood light for outdoor security.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80',
    inStock: true,
  },

  // Wiring
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
    id: 'p11',
    name: 'Copper Wire 2.5 sq mm (90m)',
    price: 2900,
    category: 'Wiring',
    description: 'Heavy duty wire for power sockets and appliances.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p12',
    name: 'CAT6 Ethernet Cable (305m)',
    price: 3200,
    category: 'Wiring',
    description: 'High speed networking cable roll.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    inStock: true,
  },

  // Boards & Accessories
  {
    id: 'p6',
    name: 'Distribution Board 8 Way',
    price: 1200,
    category: 'Boards',
    description: 'Surface/flush type DB with neutral and earth links.',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p14',
    name: 'Extension Board 4 Socket',
    price: 450,
    category: 'Accessories',
    description: 'Surge protected extension board with heavy duty cord.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p15',
    name: 'PVC Insulation Tape (Pack of 6)',
    price: 120,
    category: 'Accessories',
    description: 'Fire retardant electrical insulation tape.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
    inStock: true,
  },

  // Tools
  {
    id: 'p16',
    name: 'Digital Multimeter',
    price: 650,
    category: 'Tools',
    description: 'Professional grade multimeter for voltage and current testing.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80',
    inStock: true,
  },
  {
    id: 'p18',
    name: 'Wire Stripper & Cutter',
    price: 250,
    category: 'Tools',
    description: 'Ergonomic tool for clean wire stripping.',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80',
    inStock: true,
  }
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
    `Hello Om Electronics,\n\nI would like to order:\n*${product.name}*\nPrice: ₹${product.price}\nDelivery priority: ${priorityText}\n\nPlease confirm availability and delivery details.`
  );
  return `${WHATSAPP_BASE}?text=${message}`;
}
