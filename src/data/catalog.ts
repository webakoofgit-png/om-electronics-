export type CatalogProduct = {
  id: number;
  name: string;
  image: string;
  category: string;
  code: string;
  make: string;
  short: string;
  price: number;
  deal: boolean;
  feature: boolean;
  newArrival: boolean;
  today: boolean;
  love: boolean;
};

export type CatalogCategory = {
  id: number;
  name: string;
  count: number;
  image: string;
};

export const PHONE_DISPLAY = "+91 89751 87479";
export const PHONE_TEL = "+918975187479";
export const WHATSAPP_NUMBER = "918975187479";

export const deliveryPriorities = [
  { id: "urgent", label: "Within 24 hours (Urgent)" },
  { id: "3days", label: "Within 3 days" },
  { id: "week", label: "Within a week" },
  { id: "month", label: "Within a month" },
] as const;

export function whatsappOrderLink(name: string, price: number, priority: string) {
  const label = deliveryPriorities.find((p) => p.id === priority)?.label || priority;
  const text = `Hello Rurdra Electronics,\n\nI want to order:\n${name}\nPrice: Rs. ${price}\nHome delivery priority: ${label}\n\nPlease confirm availability and delivery.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text.replace("\\n","\n"))}`;
}

export const categories: CatalogCategory[] = [
  {
    "id": 11,
    "name": "DOMESTIC USE",
    "count": 4,
    "image": "https://omelectronics.in/CatImg/9.png"
  },
  {
    "id": 10,
    "name": "FAN",
    "count": 9,
    "image": ""
  },
  {
    "id": 9,
    "name": "LED LIGHTNING",
    "count": 1,
    "image": "https://omelectronics.in/CatImg/RAYNA.jpg"
  },
  {
    "id": 8,
    "name": "INDUSTRIAL PARTS",
    "count": 5,
    "image": "https://omelectronics.in/CatImg/Categories 253px   252px (252 x 252 px).jpg"
  },
  {
    "id": 7,
    "name": "REPAIRING PARTS",
    "count": 76,
    "image": "https://omelectronics.in/CatImg/Product Images  - 600px   800px  (600 x 800 px).jpg"
  },
  {
    "id": 6,
    "name": "LED Bulb & Tube",
    "count": 13,
    "image": "https://omelectronics.in/CatImg/Untitled design.jpg"
  },
  {
    "id": 5,
    "name": "Wire & Cable",
    "count": 4,
    "image": "https://omelectronics.in/CatImg/Untitled design (1).jpg"
  },
  {
    "id": 4,
    "name": "Switch & Accessories",
    "count": 2,
    "image": "https://omelectronics.in/CatImg/Switch and Accessories.jpg"
  },
  {
    "id": 3,
    "name": "Gyser",
    "count": 0,
    "image": "https://omelectronics.in/CatImg/21NWs5AjHDL.jpg"
  },
  {
    "id": 2,
    "name": "Electronics",
    "count": 17,
    "image": "https://omelectronics.in/CatImg/3-phase-simple-llc-3-500x500.jpg"
  }
];

export const catalog: CatalogProduct[] = [
  {
    "id": 11420,
    "name": "(18650 Heavy) 3.7V Rechargeable Battery",
    "image": "https://omelectronics.in/PartImg/03082026092746_17.webp",
    "category": "REPAIRING PARTS",
    "code": "3.7v",
    "make": "CHINA",
    "short": "Ready-to-use 18650 heavy 3.7V rechargeable trimmer battery with soldered wires. Easy DIY installation at home without any technician. High power & long life. (Min. order: 1 pc)",
    "price": 171.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14522,
    "name": "(18650 Regular) 3.7V Rechargeable Battery",
    "image": "https://omelectronics.in/PartImg/03082026092701_21.webp",
    "category": "REPAIRING PARTS",
    "code": ".3.7",
    "make": "CHINA",
    "short": "Ready-to-use 18650 regular 3.7V rechargeable trimmer battery with pre-soldered wires. Easy DIY installation at home with no technician needed. (Min. order: 1 pc)",
    "price": 91.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 13493,
    "name": "1.2V AA Battery Rechargeable",
    "image": "https://omelectronics.in/PartImg/03082026093210_1.webp",
    "category": "REPAIRING PARTS",
    "code": ".1.2V",
    "make": "Eveready",
    "short": "Ready-to-use 1.2V AA rechargeable trimmer battery with pre-soldered wires. Easy DIY installation at home with no technician needed. (Min. order: 1 pc)",
    "price": 121.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 13492,
    "name": "1.2V AAA Battery Rechargeable",
    "image": "https://omelectronics.in/PartImg/03082026093442_2.webp",
    "category": "REPAIRING PARTS",
    "code": ".1.2V",
    "make": "Eveready",
    "short": "Ready-to-use 1.2V AAA rechargeable trimmer battery with pre-soldered wires. Easy DIY installation at home with no technician needed. (Min. order: 1 pc)",
    "price": 121.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 1863,
    "name": "12w LED Bulb",
    "image": "https://omelectronics.in/PartImg/05092026025012_IMG_9018.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".12WLB",
    "make": "VETO",
    "short": "",
    "price": 122.31,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 233,
    "name": "15w LED Bulb",
    "image": "https://omelectronics.in/PartImg/05092026030243_IMG_8995.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".15WLB",
    "make": "VETO",
    "short": "",
    "price": 135.0,
    "deal": true,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 13,
    "name": "18w LED Bulb",
    "image": "https://omelectronics.in/PartImg/05092026030132_IMG_8988.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".18WLB",
    "make": "VETO",
    "short": "",
    "price": 173.57,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14532,
    "name": "2.4V AA Battery Rechargeable Combo",
    "image": "https://omelectronics.in/PartImg/03082026091939_8.webp",
    "category": "REPAIRING PARTS",
    "code": "2.4v",
    "make": "Eveready",
    "short": "Ready-to-use 2.4V AA rechargeable trimmer battery combo with soldered wires. Easy DIY installation at home\u2014no technician needed. Great for hair trimmers. (Min. order: 1 pc)",
    "price": 260.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14531,
    "name": "2.4V AAA Battery Rechargeable Combo",
    "image": "https://omelectronics.in/PartImg/03082026092037_3.webp",
    "category": "REPAIRING PARTS",
    "code": ".2.4v",
    "make": "Eveready",
    "short": "Ready-to-use 2.4V AAA rechargeable trimmer battery combo with soldered wires. Easy DIY installation at home\u2014no technician needed. Ideal for compact trimmers. (Min. order: 1 pc)",
    "price": 260.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 221,
    "name": "2.50MFD CAPACITORS",
    "image": "https://omelectronics.in/PartImg/03082026100702_14.webp",
    "category": "FAN",
    "code": ".ca",
    "make": "Concap",
    "short": "High-performance 2.5 MFD oil capacitor for ceiling fans. Restores fan speed, runs quietly, and ensures long life. Comes with flexible connection wires. (Min. order: 3 pcs)",
    "price": 100.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 341,
    "name": "22W LED T5",
    "image": "https://omelectronics.in/PartImg/author-2.jpg",
    "category": "Other",
    "code": ".T522",
    "make": "FYBROS",
    "short": "",
    "price": 105.51,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 551,
    "name": "22w LED T5 Aston",
    "image": "https://omelectronics.in/PartImg/author-5.jpg",
    "category": "Other",
    "code": ".T522",
    "make": "Western",
    "short": "",
    "price": 130.22,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 238,
    "name": "23W LED LAMP",
    "image": "https://omelectronics.in/PartImg/05092026025110_IMG_8985.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".23WLB",
    "make": "VETO",
    "short": "",
    "price": 172.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": true
  },
  {
    "id": 10377,
    "name": "2PIN Top (With  Safety Grip)",
    "image": "https://omelectronics.in/PartImg/02082026015146_9.webp",
    "category": "DOMESTIC USE",
    "code": ".2p",
    "make": "UDAY",
    "short": "Durable 2 pin plug with a built-in wire safety guard. Prevents wire damage if pulled and detaches safely from sockets. Perfect for home appliances. (Minimum order: 3 pieces)",
    "price": 31.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 224,
    "name": "3.15MFD CAPACITORS",
    "image": "https://omelectronics.in/PartImg/02082026084009_16.webp",
    "category": "FAN",
    "code": ".ca",
    "make": "Concap",
    "short": "Operation Mode manual Current Rating 6 Amps Operating Voltage 240 Volts Contact Type Normally Open Connector Type Plug In About this item Material: Polycarbonate,, Color: White Item Dimension: 60mm x 50mm x 20mm Warranty",
    "price": 45.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14507,
    "name": "30W LED BULB",
    "image": "https://omelectronics.in/PartImg/05092026030722_IMG_9015.jpeg",
    "category": "LED Bulb & Tube",
    "code": "30WLB",
    "make": "VETO",
    "short": "",
    "price": 251.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 454,
    "name": "30W LED NEO PLUS",
    "image": "https://omelectronics.in/PartImg/05092026030830_IMG_8987.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".30wl",
    "make": "Surya",
    "short": "",
    "price": 350.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14508,
    "name": "40W LED Bulb",
    "image": "https://omelectronics.in/PartImg/40W.jpeg",
    "category": "LED Bulb & Tube",
    "code": "40WLB",
    "make": "VETO",
    "short": "",
    "price": 333.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 646,
    "name": "50W FLOOD LIGHT AURA",
    "image": "",
    "category": "Other",
    "code": ".FL",
    "make": "Western",
    "short": "",
    "price": 837.37,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14509,
    "name": "50W LED Bulb",
    "image": "https://omelectronics.in/PartImg/50W.jpeg",
    "category": "LED Bulb & Tube",
    "code": "50WLB",
    "make": "VETO",
    "short": "",
    "price": 433.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": true,
    "love": false
  },
  {
    "id": 9270,
    "name": "5W LED Bulb",
    "image": "https://omelectronics.in/PartImg/05092026030644_IMG_9015.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".5LB",
    "make": "VETO",
    "short": "",
    "price": 51.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 11424,
    "name": "7W LED Bulb",
    "image": "https://omelectronics.in/PartImg/50W.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".7LB",
    "make": "VETO",
    "short": "This is testing",
    "price": 51.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 2930,
    "name": "9W Emergency LED BULB",
    "image": "https://omelectronics.in/PartImg/05092026030528_IMG_9013.jpeg",
    "category": "LED Bulb & Tube",
    "code": ".9elb",
    "make": "VETO",
    "short": "",
    "price": 261.07,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 13454,
    "name": "Bondtite (Feviquick)",
    "image": "",
    "category": "Other",
    "code": ".BT",
    "make": "BONDTITE",
    "short": "",
    "price": 5.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 169,
    "name": "Capacitor 2.5MFD  Paper Wound",
    "image": "https://omelectronics.in/PartImg/03082026094840_15.webp",
    "category": "FAN",
    "code": ".ca",
    "make": "Concap",
    "short": "Durable 2.5 MFD paper wound capacitor for ceiling fans. Restores slow fan speed, ensures stable power, and runs quietly. Comes with lead wires. (Min. order: 3 pcs)",
    "price": 32.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 1911,
    "name": "Capacitor 2.5MFD Paper Wound",
    "image": "https://omelectronics.in/PartImg/03082026095035_13.webp",
    "category": "FAN",
    "code": ".c2.5",
    "make": "Havells",
    "short": "Original Havells 2.5 MFD paper wound capacitor for ceiling fans. Restores slow fan speed, ensures quiet motor running, and offers long-lasting performance. (Min. order: 3 pcs)",
    "price": 51.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 11419,
    "name": "Ceiling Fan AIRFLORA (1200 Brown )",
    "image": "",
    "category": "Other",
    "code": ".cf48",
    "make": "ORPAT",
    "short": "",
    "price": 1531.25,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 1791,
    "name": "Exhaust Fan 6''",
    "image": "",
    "category": "Other",
    "code": ".ef6",
    "make": "vinny",
    "short": "",
    "price": 979.4,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 3946,
    "name": "KNOB ( Palag Type Reguletor NOB )",
    "image": "https://omelectronics.in/PartImg/fan regulator knob.jpg",
    "category": "REPAIRING PARTS",
    "code": ".rnob",
    "make": "PVC",
    "short": "Fan Speed Controller Dimmer / Regulator Knob",
    "price": 10.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 10396,
    "name": "LED PLC 36w",
    "image": "",
    "category": "Other",
    "code": ".lp36",
    "make": "Renesola",
    "short": "",
    "price": 0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14526,
    "name": "Male Female With Safety Grip",
    "image": "https://omelectronics.in/PartImg/03082026105753_male01.webp",
    "category": "DOMESTIC USE",
    "code": ".MFSG",
    "make": "UDAY",
    "short": "Durable male female 2 pin plug set with internal wire safety guard. Prevents loose connections and wire damage. Great for home extension cords. (Min. order: 3 pcs)",
    "price": 61.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 3930,
    "name": "Modular Reguletor 2M 100W",
    "image": "https://omelectronics.in/PartImg/03082026094132_12.webp",
    "category": "FAN",
    "code": ".MR2m",
    "make": "KS",
    "short": "High-quality 2M 100W modular fan regulator for smooth speed control. Modern snap-in design fits all standard modular switchboards. Easy to install. (Min. order: 1 pc)",
    "price": 121.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 14521,
    "name": "Mosquito Racket Battery Replacement \u2013 4V 400mAh | Repair Your Racket, Don't Throw It Away",
    "image": "https://omelectronics.in/PartImg/03082026091238_19.webp",
    "category": "REPAIRING PARTS",
    "code": ".4vmb",
    "make": "CHINA",
    "short": "Rechargeable mosquito racket battery with pre-attached wires. Easy DIY installation at home without any professional help. Works for household swatters. (Min. order: 1 pc)",
    "price": 61.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 4010,
    "name": "Mosquito Racket Battery Replacement \u2013 4V 500mAh | Repair Your Racket, Don't Throw It Away",
    "image": "https://omelectronics.in/PartImg/03082026091543_18.webp",
    "category": "REPAIRING PARTS",
    "code": ".4vmb0.5",
    "make": "CHINA",
    "short": "Rechargeable mosquito racket battery with pre-attached wires. Easy DIY installation at home without any professional help. Works for household swatters. (Min. order: 1 pc)",
    "price": 71.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 653,
    "name": "Oil Capacitor 2.5MFD",
    "image": "https://omelectronics.in/PartImg/03082026094528_14.webp",
    "category": "FAN",
    "code": ".OC2.5",
    "make": "Concap",
    "short": "High-performance 2.5 MFD oil capacitor for ceiling fans. Restores fan speed, runs quietly, and ensures long life. Comes with flexible connection wires. (Min. order: 3 pcs)",
    "price": 41.0,
    "deal": true,
    "feature": true,
    "newArrival": true,
    "today": true,
    "love": true
  },
  {
    "id": 676,
    "name": "OIL Capacitor 3.15MFD",
    "image": "https://omelectronics.in/PartImg/03082026094651_16.webp",
    "category": "FAN",
    "code": "OC3.15",
    "make": "Concap",
    "short": "High-performance 3.15 MFD oil capacitor for ceiling fans. Restores fan speed, reduces motor hum, and ensures long life. Comes with flexible wires. (Min. order: 3 pcs)",
    "price": 42.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 4062,
    "name": "Portable Water Geyser ( 1 Liter )",
    "image": "https://omelectronics.in/PartImg/1ltr.jpeg",
    "category": "Other",
    "code": ".pwg",
    "make": "Indian",
    "short": "( 1 YEAR WARRANTY )1. \ud835\udc08\ud835\udc27\ud835\udc2c\ud835\udc2d\ud835\udc1a\ud835\udc27\ud835\udc2d \ud835\udc16\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b \ud835\udc07\ud835\udc1e\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b 2. \ud835\udc02\ud835\udc28\ud835\udc26\ud835\udc29\ud835\udc1a\ud835\udc1c\ud835\udc2d & \ud835\udc15\ud835\udc1e\ud835\udc2b\ud835\udc2c\ud835\udc1a\ud835\udc2d\ud835\udc22\ud835\udc25\ud835\udc1e 3. \ud835\udc03\ud835\udc2e\ud835\udc2b\ud835\udc1a\ud835\udc1b\ud835\udc25\ud835\udc1e & \ud835\udc12\ud835\udc1a\ud835\udc1f\ud835\udc1e \ud835\udc03\ud835\udc1e\ud835\udc2c\ud835\udc22\ud835\udc20\ud835\udc27 4. \ud835\udc04\ud835\udc27\ud835\udc1e\ud835\udc2b\ud835\udc20\ud835\udc32-\ud835\udc12\ud835\udc1a\ud835\udc2f\ud835\udc22\ud835\udc27\ud835\udc20 \ud835\udc0f\ud835\udc1e\ud835\udc2b\ud835\udc1f\ud835\udc28\ud835\udc2b\ud835\udc26\ud835\udc1a\ud835\udc27\ud835\udc1c\ud835\udc1e 5. \ud835\udc08\ud835\udc27\ud835\udc2d\ud835\udc1e\ud835\udc25\ud835\udc25\ud835\udc22\ud835\udc20\ud835\udc1e\ud835\udc27\ud835\udc2d \ud835\udc00\ud835\udc2e\ud835\udc2d\ud835\udc28 \ud835\udc02\ud835\udc2e\ud835\udc2d-\ud835\udc0e\ud835\udc1f\ud835\udc1f Portable Instant Water Heater/Geyser for Kitchen, Bathroom, Office, Rest",
    "price": 855.5,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 11398,
    "name": "Portable Water Geyser ( 1 Liter with MCB )",
    "image": "https://omelectronics.in/PartImg/1ltr mcb singal.jpeg",
    "category": "Other",
    "code": ".pwg",
    "make": "Indian",
    "short": "( 1 YEAR WARRANTY )1. \ud835\udc08\ud835\udc27\ud835\udc2c\ud835\udc2d\ud835\udc1a\ud835\udc27\ud835\udc2d \ud835\udc16\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b \ud835\udc07\ud835\udc1e\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b 2. \ud835\udc02\ud835\udc28\ud835\udc26\ud835\udc29\ud835\udc1a\ud835\udc1c\ud835\udc2d & \ud835\udc15\ud835\udc1e\ud835\udc2b\ud835\udc2c\ud835\udc1a\ud835\udc2d\ud835\udc22\ud835\udc25\ud835\udc1e 3. \ud835\udc03\ud835\udc2e\ud835\udc2b\ud835\udc1a\ud835\udc1b\ud835\udc25\ud835\udc1e & \ud835\udc12\ud835\udc1a\ud835\udc1f\ud835\udc1e \ud835\udc03\ud835\udc1e\ud835\udc2c\ud835\udc22\ud835\udc20\ud835\udc27 4. \ud835\udc04\ud835\udc27\ud835\udc1e\ud835\udc2b\ud835\udc20\ud835\udc32-\ud835\udc12\ud835\udc1a\ud835\udc2f\ud835\udc22\ud835\udc27\ud835\udc20 \ud835\udc0f\ud835\udc1e\ud835\udc2b\ud835\udc1f\ud835\udc28\ud835\udc2b\ud835\udc26\ud835\udc1a\ud835\udc27\ud835\udc1c\ud835\udc1e 5. \ud835\udc08\ud835\udc27\ud835\udc2d\ud835\udc1e\ud835\udc25\ud835\udc25\ud835\udc22\ud835\udc20\ud835\udc1e\ud835\udc27\ud835\udc2d \ud835\udc00\ud835\udc2e\ud835\udc2d\ud835\udc28 \ud835\udc02\ud835\udc2e\ud835\udc2d-\ud835\udc0e\ud835\udc1f\ud835\udc1f Portable Instant Water Heater/Geyser for Kitchen, Bathroom, Office, Rest",
    "price": 1034.54,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 11399,
    "name": "Portable Water Geyser ( 2 Liter with MCB )",
    "image": "https://omelectronics.in/PartImg/2 liter.jpeg",
    "category": "Other",
    "code": ".pwg",
    "make": "Indian",
    "short": "( 1 YEAR WARRANTY )1. \ud835\udc08\ud835\udc27\ud835\udc2c\ud835\udc2d\ud835\udc1a\ud835\udc27\ud835\udc2d \ud835\udc16\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b \ud835\udc07\ud835\udc1e\ud835\udc1a\ud835\udc2d\ud835\udc1e\ud835\udc2b 2. \ud835\udc02\ud835\udc28\ud835\udc26\ud835\udc29\ud835\udc1a\ud835\udc1c\ud835\udc2d & \ud835\udc15\ud835\udc1e\ud835\udc2b\ud835\udc2c\ud835\udc1a\ud835\udc2d\ud835\udc22\ud835\udc25\ud835\udc1e 3. \ud835\udc03\ud835\udc2e\ud835\udc2b\ud835\udc1a\ud835\udc1b\ud835\udc25\ud835\udc1e & \ud835\udc12\ud835\udc1a\ud835\udc1f\ud835\udc1e \ud835\udc03\ud835\udc1e\ud835\udc2c\ud835\udc22\ud835\udc20\ud835\udc27 4. \ud835\udc04\ud835\udc27\ud835\udc1e\ud835\udc2b\ud835\udc20\ud835\udc32-\ud835\udc12\ud835\udc1a\ud835\udc2f\ud835\udc22\ud835\udc27\ud835\udc20 \ud835\udc0f\ud835\udc1e\ud835\udc2b\ud835\udc1f\ud835\udc28\ud835\udc2b\ud835\udc26\ud835\udc1a\ud835\udc27\ud835\udc1c\ud835\udc1e 5. \ud835\udc08\ud835\udc27\ud835\udc2d\ud835\udc1e\ud835\udc25\ud835\udc25\ud835\udc22\ud835\udc20\ud835\udc1e\ud835\udc27\ud835\udc2d \ud835\udc00\ud835\udc2e\ud835\udc2d\ud835\udc28 \ud835\udc02\ud835\udc2e\ud835\udc2d-\ud835\udc0e\ud835\udc1f\ud835\udc1f Portable Instant Water Heater/Geyser for Kitchen, Bathroom, Office, Rest",
    "price": 1253.63,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 13494,
    "name": "Rechargeable Battery  3.7V AA",
    "image": "https://omelectronics.in/PartImg/03082026092908_20.webp",
    "category": "REPAIRING PARTS",
    "code": ".RB3.7",
    "make": "CHINA",
    "short": "Ready-to-use 3.7V AA rechargeable trimmer battery with pre-soldered wires. Easy DIY installation at home with no technician needed. (Min. order: 1 pc)",
    "price": 161.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 542,
    "name": "Regulator Screw Type (sada 100w)",
    "image": "https://omelectronics.in/PartImg/03082026093735_11.webp",
    "category": "FAN",
    "code": ".RST",
    "make": "KS",
    "short": "Durable 100W screw-type fan regulator for smooth fan speed control. Perfect fit for traditional switchboards requiring screw fitting. High quality. (Min. order: 1 pc)",
    "price": 121.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14527,
    "name": "Voltage Converter 1000W ( 220v to 110Vac )",
    "image": "https://omelectronics.in/PartImg/03082026095740_5.webp",
    "category": "Electronics",
    "code": ".VC1000",
    "make": "KULDIP",
    "short": "Heavy-duty 1000W step-down voltage converter (220V to 110VAC). Safely powers imported industrial machinery and equipment. Durable gold aluminum body. (Min. order: 1 pc)",
    "price": 411.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14528,
    "name": "Voltage Converter 1600W ( 220v to 110Vac )",
    "image": "https://omelectronics.in/PartImg/03082026110637_4.webp",
    "category": "Electronics",
    "code": ".VC1600",
    "make": "KULDIP",
    "short": "Heavy-duty 1600W step-down voltage converter (220V to 110VAC). Safely powers high-capacity imported machinery and equipment. Durable gold aluminum body. (Min. order: 1 pc)",
    "price": 411.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14529,
    "name": "Voltage Converter 2000W ( 220v to 110Vac )",
    "image": "https://omelectronics.in/PartImg/03082026095933_6.webp",
    "category": "Electronics",
    "code": ".VC2000",
    "make": "KULDIP",
    "short": "Heavy-duty 2000W step-down voltage converter (220V to 110VAC). Safely powers high-capacity imported industrial machinery and tools. Durable gold body. (Min. order: 1 pc)",
    "price": 581.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  },
  {
    "id": 14530,
    "name": "Voltage Converter 2500w ( 220v to 110Vac )",
    "image": "https://omelectronics.in/PartImg/03082026100026_7.webp",
    "category": "Electronics",
    "code": ".VC2500",
    "make": "KULDIP",
    "short": "Heavy-duty 2500W step-down voltage converter (220V to 110VAC). Safely powers high-capacity imported industrial machinery and heavy tools. Durable gold body. (Min. order: 1 pc)",
    "price": 521.0,
    "deal": false,
    "feature": false,
    "newArrival": false,
    "today": false,
    "love": false
  }
];

export function productById(id: number) {
  return catalog.find((p) => p.id === id);
}
