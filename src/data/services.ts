import type { Service } from '../types';

export const services: Service[] = [
  {
    id: '1',
    slug: 'home-electrical-repair',
    title: 'Home Electrical Repair',
    shortDescription: 'Fast, safe repairs for switches, sockets, wiring faults and power issues in residential properties.',
    description: 'Our home electrical repair service covers everything from minor switch and socket fixes to diagnosing complex wiring faults. We prioritise safety and lasting solutions so your home stays powered reliably.',
    problem: 'Flickering lights, dead sockets, tripped breakers, or burning smells often indicate underlying electrical issues that need professional attention.',
    scope: [
      'Switch and socket replacement',
      'Wiring fault diagnosis and repair',
      'MCB and DB board troubleshooting',
      'Lighting circuit repairs',
      'Earthing checks and improvements',
    ],
    benefits: [
      'Safety-first approach on every job',
      'Clear explanation of the issue and solution',
      'Quality materials used where needed',
      'Minimal disruption to your routine',
    ],
    process: [
      'Share the issue via form or call',
      'Technician assesses on site',
      'Transparent quote before work begins',
      'Repair completed and tested',
    ],
    faqs: [
      {
        question: 'How quickly can you attend a home repair?',
        answer: 'We offer priority slots including within 24 hours for urgent cases, subject to availability in your area.',
      },
      {
        question: 'Do you provide a warranty on repairs?',
        answer: 'Workmanship is covered for a reasonable period. Specific warranty details are shared after the service.',
      },
    ],
    relatedSlugs: ['electrical-inspection', 'wiring-installation', 'switchboard-upgrade'],
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
    category: 'Repair',
  },
  {
    id: '2',
    slug: 'electrical-inspection',
    title: 'Electrical Safety Inspection',
    shortDescription: 'Thorough inspection of your electrical system to identify risks and ensure compliance with safety standards.',
    description: 'A professional electrical safety inspection helps detect hidden faults, overloaded circuits, and outdated wiring before they become hazards. Ideal for older properties, rental homes, or before major renovations.',
    problem: 'Many electrical hazards are not visible. Periodic inspections catch problems early and give peace of mind.',
    scope: [
      'Visual and functional checks of wiring and points',
      'Load assessment on circuits',
      'Earthing and bonding verification',
      'DB board and protection device review',
      'Written summary of findings and recommendations',
    ],
    benefits: [
      'Identify risks before incidents occur',
      'Support for insurance or rental compliance',
      'Clear prioritised action list',
      'Independent professional assessment',
    ],
    process: [
      'Book an inspection slot',
      'On-site systematic check',
      'Discussion of findings',
      'Receive report with recommendations',
    ],
    faqs: [
      {
        question: 'How long does an inspection take?',
        answer: 'Typically 1â€“2 hours depending on property size and system complexity.',
      },
      {
        question: 'Is the inspection mandatory?',
        answer: 'Not always, but strongly recommended for older homes and before buying or renting a property.',
      },
    ],
    relatedSlugs: ['home-electrical-repair', 'switchboard-upgrade', 'wiring-installation'],
    icon: 'ClipboardCheck',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    category: 'Inspection',
  },
  {
    id: '3',
    slug: 'wiring-installation',
    title: 'Wiring & Rewiring',
    shortDescription: 'New wiring installations and complete rewiring for homes, shops and small commercial spaces.',
    description: 'Whether you are building new, renovating, or replacing old aluminium or damaged wiring, we provide neat, code-compliant wiring solutions that support modern loads safely.',
    problem: 'Outdated or damaged wiring increases fire risk and cannot reliably support todayâ€™s appliances and electronics.',
    scope: [
      'Point-to-point new wiring',
      'Partial or full house rewiring',
      'Concealed and surface conduit options',
      'Dedicated circuits for ACs, geysers, kitchens',
      'Proper earthing and neutral systems',
    ],
    benefits: [
      'Future-ready capacity for appliances',
      'Reduced risk of overheating and faults',
      'Clean, organised installation',
      'Support for modern protection devices',
    ],
    process: [
      'Site survey and load assessment',
      'Detailed proposal and timeline',
      'Installation with minimal mess',
      'Testing and handover',
    ],
    faqs: [
      {
        question: 'Do you handle both residential and commercial wiring?',
        answer: 'Yes, we handle homes, shops, offices and small commercial premises.',
      },
      {
        question: 'Can work be done room by room?',
        answer: 'Yes, phased rewiring is possible to keep parts of the property usable.',
      },
    ],
    relatedSlugs: ['switchboard-upgrade', 'home-electrical-repair', 'lighting-installation'],
    icon: 'Cable',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    category: 'Installation',
  },
  {
    id: '4',
    slug: 'switchboard-upgrade',
    title: 'Switchboard & DB Upgrade',
    shortDescription: 'Modern distribution boards with proper MCBs, RCCBs and labelling for safer power distribution.',
    description: 'Upgrading your distribution board improves safety, makes fault isolation easier, and prepares your electrical system for higher loads and future expansions.',
    problem: 'Old fuse boxes and poorly labelled boards make troubleshooting difficult and leave the system under-protected.',
    scope: [
      'Replacement of old fuse / MCB boards',
      'Installation of RCCB / ELCB protection',
      'Proper circuit segregation and labelling',
      'Surge protection options where suitable',
      'Load balancing recommendations',
    ],
    benefits: [
      'Better protection against shocks and fires',
      'Easier identification of tripped circuits',
      'Room for future circuits',
      'Professional, neat finish',
    ],
    process: [
      'Assessment of existing board and load',
      'Selection of suitable board and devices',
      'Installation with power-off planning',
      'Testing and demonstration',
    ],
    faqs: [
      {
        question: 'Will the power be off during the upgrade?',
        answer: 'Yes, a planned outage is required. We schedule it at a convenient time and keep it as short as practical.',
      },
      {
        question: 'Do you supply the board and MCBs?',
        answer: 'We can supply quality components or work with materials you provide, as preferred.',
      },
    ],
    relatedSlugs: ['electrical-inspection', 'wiring-installation', 'home-electrical-repair'],
    icon: 'PanelTop',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80',
    category: 'Upgrade',
  },
  {
    id: '5',
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    shortDescription: 'Indoor and outdoor lighting design and installation including LED, decorative and functional fixtures.',
    description: 'From practical room lighting to accent and outdoor security lights, we install fixtures correctly so they perform well and last longer.',
    problem: 'Poor lighting affects comfort, productivity and safety. Incorrect installation can also cause early failures.',
    scope: [
      'Ceiling, wall and pendant light fitting',
      'LED panel and downlight installation',
      'Outdoor and security lighting',
      'Fan and light combination points',
      'Basic dimmer and smart-ready points',
    ],
    benefits: [
      'Correct positioning and mounting',
      'Safe electrical connections',
      'Advice on efficient LED options',
      'Clean finish with minimal marks',
    ],
    process: [
      'Discuss requirements and locations',
      'Confirm fixtures and wiring needs',
      'Install and test',
      'Adjust and handover',
    ],
    faqs: [
      {
        question: 'Do you supply the lights?',
        answer: 'We can source quality lights or install fixtures you already have.',
      },
      {
        question: 'Can you help with lighting layout suggestions?',
        answer: 'Yes, we provide practical suggestions based on room use and existing wiring.',
      },
    ],
    relatedSlugs: ['wiring-installation', 'home-electrical-repair', 'appliance-installation'],
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80',
    category: 'Installation',
  },
  {
    id: '6',
    slug: 'appliance-installation',
    title: 'Appliance Installation',
    shortDescription: 'Safe installation of ACs, geysers, water heaters, exhaust fans and other fixed electrical appliances.',
    description: 'Correct electrical connections and mounting are essential for appliance performance and safety. We handle the electrical side of common household and light commercial appliances.',
    problem: 'Incorrect wiring or inadequate protection for heavy appliances can lead to trips, damage or hazards.',
    scope: [
      'AC and stabiliser point preparation',
      'Geyser and water heater connections',
      'Exhaust and chimney point installation',
      'Dedicated points for heavy appliances',
      'Earthing verification for metal bodies',
    ],
    benefits: [
      'Proper load and protection consideration',
      'Secure mounting and connections',
      'Reduced risk of appliance damage',
      'Clear guidance on usage',
    ],
    process: [
      'Confirm appliance specifications',
      'Prepare point and protection if needed',
      'Install and test safely',
      'Demonstrate and advice',
    ],
    faqs: [
      {
        question: 'Do you install the appliance itself or only the electrical point?',
        answer: 'We focus on the electrical connection and related points. Full mechanical installation may be coordinated depending on the appliance.',
      },
      {
        question: 'Can you add a dedicated MCB for an AC?',
        answer: 'Yes, dedicated circuits and MCBs for ACs and similar loads are commonly arranged.',
      },
    ],
    relatedSlugs: ['wiring-installation', 'switchboard-upgrade', 'home-electrical-repair'],
    icon: 'Plug',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80',
    category: 'Installation',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getRelatedServices = (slugs: string[]): Service[] =>
  services.filter((s) => slugs.includes(s.slug));
