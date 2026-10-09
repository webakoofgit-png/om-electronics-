# ElectricFault — Premium Electrical Services Website

Modern, multipage React frontend for ElectricFault electrical services business.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4
- React Router 7
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home |
| `/services` | Services overview (search + category filter) |
| `/services/:slug` | Individual service detail |
| `/products` | Products with home-delivery priority & WhatsApp order |
| `/about` | About Us |
| `/contact` | Contact + enquiry form (with priority selection) |
| `/faq` | FAQs (accordion + categories) |
| `/privacy-policy` | Privacy Policy template |
| `/terms` | Terms & Conditions template |

## Key Features

- **Priority selection**: Enquiry form and product orders support timelines — Within 24 hours (Urgent), Within 3 days, Within a week, Within a month.
- **WhatsApp redirect**: Product cards open a pre-filled WhatsApp message for ordering (update `WHATSAPP_NUMBER` in `src/data/products.ts`).
- **Reusable components**: Header, Footer, Buttons, Service cards, FAQ accordion, Enquiry form, CTA, Breadcrumbs, etc.
- **Centralised data**: Services, FAQs, testimonials, products in `src/data/`.
- **Responsive**: Mobile-first with hamburger menu.
- **Accessibility**: Semantic HTML, reduced-motion support, focus states.
- **Demo form**: Enquiry form validates client-side and shows an honest “not sent” confirmation.

## Customisation

1. Replace phone/WhatsApp numbers in Header, Footer, Contact, and `src/data/products.ts`.
2. Update service/product content in `src/data/`.
3. Replace placeholder testimonials with real reviews.
4. Review Privacy Policy and Terms with legal counsel.
5. Swap Unsplash images with real project photos when available.

## Design Tokens

- Primary navy: `#142B3B`
- Electric blue: `#2563EB`
- Warm white: `#FAFAF7`
- Light grey: `#F0F3F5`
- Charcoal: `#202A32`
- Accent amber: `#F5B544`
- Font: Manrope
