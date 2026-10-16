import type { Product } from '../types';

// Model compatibility and genuine/OEM availability are confirmed with the customer
// before ordering. These are enquiry categories, not claims of live inventory.
export const products: Product[] = [
  { id: 'televisions', name: 'Televisions', price: 0, category: 'TVs', description: 'Ask about TV models and current availability. Share your preferred screen size, brand and budget for options.', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&q=85', inStock: false },
  { id: 'tv-led-panel', name: 'LED / LCD TV Display Panel', price: 0, category: 'TV Components', description: 'Replacement display panels. Share the TV brand, model number and panel label so compatibility can be checked.', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&q=85', inStock: false },
  { id: 'tv-main-board', name: 'TV Main Board', price: 0, category: 'TV Components', description: 'Main boards for compatible LED and Smart TV models. Exact part number and availability confirmed on enquiry.', image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=700&q=85', inStock: false },
  { id: 'tv-power-board', name: 'TV Power Supply Board', price: 0, category: 'TV Components', description: 'Power supply board enquiries matched by the printed board number and TV model.', image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=700&q=85', inStock: false },
  { id: 'tv-tcon', name: 'T-Con Board', price: 0, category: 'TV Components', description: 'Timing controller board enquiries. Send a clear photo of the part label for a compatibility check.', image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=700&q=85', inStock: false },
  { id: 'tv-backlight', name: 'LED Backlight Strips', price: 0, category: 'TV Parts', description: 'Replacement backlight strip enquiries matched to the TV model and strip code.', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&q=85', inStock: false },
  { id: 'tv-remote', name: 'TV Remote Control', price: 0, category: 'TV Accessories', description: 'Replacement and compatible remote enquiries. Share the TV brand and model to find a suitable match.', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=85', inStock: false },
  { id: 'tv-speakers', name: 'TV Speaker Pair', price: 0, category: 'TV Parts', description: 'Internal speaker replacement enquiries matched using the TV model and speaker part code.', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&q=85', inStock: false },
  { id: 'tv-cables', name: 'TV Cables & Connectors', price: 0, category: 'TV Accessories', description: 'Ask about compatible TV power, signal and connection cables for your setup.', image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=700&q=85', inStock: false },
];

export const deliveryPriorities = [
  { id: 'urgent', label: 'As soon as available', description: 'Ask about current availability' },
  { id: '3days', label: 'Within 3 days', description: 'Subject to part availability' },
  { id: 'week', label: 'Within a week', description: 'Subject to part availability' },
  { id: 'month', label: 'Flexible timing', description: 'For non-urgent enquiries' },
];

export const WHATSAPP_NUMBER = '919309517545';
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export function buildProductWhatsAppLink(product: Product, priority?: string): string {
  const priorityLine = priority
    ? `\nTiming preference: ${deliveryPriorities.find((p) => p.id === priority)?.label || priority}`
    : '';
  const message = encodeURIComponent(
    `Hello Rurdra Electronics,\n\nI am enquiring about:\n*${product.name}*\nTV brand/model: [please add model number]\nPart number/photo: [please attach if available]${priorityLine}\n\nPlease confirm compatibility, genuine/OEM availability and price before I order.`
  );
  return `${WHATSAPP_BASE}?text=${message}`;
}
