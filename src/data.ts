/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PortfolioItem, ServiceItem, ReviewItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'media-walls',
    title: 'Custom Media Walls',
    tagline: 'The Ultimate Focal Point of Luxury',
    description: 'Bespoke television panel systems boasting backlit Italian marble, integrated floating storage, subtle acoustic fluted woodwork, and layered perimeter ambient LED illumination. Crafted specifically for premium visual presence.',
    features: [
      'Backlit translucent marble & onyx slabs',
      'Charcoal-fluted design backing slats',
      'Integrated floating console cabinetry',
      'Concealed multi-channel cabling paths',
      'Dual custom LED mood highlight zones'
    ],
    iconName: 'Layout',
    typicalCost: '₹35,000 - ₹1,20,000+'
  },
  {
    id: 'pvc-ceiling-work',
    title: 'PVC Ceilings & Paneling',
    tagline: 'Modern Geometric Overheads & Protection',
    description: 'Transform damp ceilings and plain overheads with premium PVC false ceiling systems. Featuring beautiful dark wood laminates, recessed spotlights, golden glowing laser-cut panels, and flawless geometric layouts.',
    features: [
      '100% Waterproof and termite-proof',
      'Warm indirect LED cove lighting',
      'Premium laminates in wood grain, ivory, and charcoal',
      'Hidden moisture-barrier installations',
      'Architectural geometric trim boards'
    ],
    iconName: 'Layers',
    typicalCost: '₹18,000 - ₹75,000'
  },
  {
    id: 'balcony-landscape',
    title: 'Balcony Transformations',
    tagline: 'A Cozy Escape in Your Own Home',
    description: 'Convert plain balconies, patios, or terraces into refreshing botanical gardens. We use premium non-shredding artificial turf, custom vertical plant ladders, and custom warm under-wall downlighting.',
    features: [
      'High-density, highly plush artificial grass turf',
      'Sturdy vertical planter racks and lattices',
      'Durable weatherproof timber accents',
      'Elegant, cozy watering accessories',
      'Warm architectural LED step highlights'
    ],
    iconName: 'Leaf',
    typicalCost: '₹12,000 - ₹55,000'
  },
  {
    id: 'wallpapers-moldings',
    title: 'Designer Wallpapers & Wainscoting',
    tagline: 'Classical Wall Moldings & Modern Patterns',
    description: 'Evoke a sense of European heritage with sophisticated crown molding, wainscoting frames, and designer textured wallpaper panel inserts. Adds dramatic depth, scale, and texture to plain rooms.',
    features: [
      'Classic French wainscoting designs',
      'Imported heavy-embossed textured wallpapers',
      'Precision miter-cut polyurethane frames',
      'Rich contrast slate-grey flat painting',
      'Seamless wallpaper alignment and fixing'
    ],
    iconName: 'Sparkles',
    typicalCost: '₹15,000 - ₹60,000'
  },
  {
    id: 'bespoke-partitions',
    title: 'Backlit Arched Partitions',
    tagline: 'Bespoke Architectural Focal Structures',
    description: 'Custom-designed dividers with backlit panels, arched fluting, and premium colorful marble translucent acrylic sheets. Perfect for creating unique partition areas with signature lounge vibes.',
    features: [
      'Luminous mint-blue and gold marble acrylics',
      'Symmetric wood fluting and arches',
      'Integrated soft double-backlight system',
      'Premium wood-enclosed supportive pillars',
      'Modern gold trim details'
    ],
    iconName: 'Compass',
    typicalCost: '₹40,000 - ₹1,50,000'
  },
  {
    id: 'budget-makeovers',
    title: 'Budget-Friendly Room Makeovers',
    tagline: 'Complete Refresh Staged to Your Budget',
    description: 'Complete stylistic transformations focusing on maximum visual impact per rupee. Ideal for rental apartments, guest rooms, or secondary sitting areas with smart, honest material selections.',
    features: [
      'Optimal material blending (PVC + paint highlights)',
      'High impact TV wall layouts with smart spend',
      'Damp-proofing combined with wall accent paneling',
      'Quick 24-48 hour installation timelines',
      'No hidden charges on site'
    ],
    iconName: 'Home',
    typicalCost: '₹25,000 - ₹95,000'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Minimalist TV Media Wall Suite',
    category: 'media-wall',
    categoryLabel: 'Media Wall',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHwktQcK85gbIrOKphZl7DQaeYhnUUWjp2i0khwQKYX3uXSeJz-nhVt0wZ0WY-57oV16uy58FsusedYf4eQtFheYYnrk-AuqtI7O4yg0bZy80hgScejV0r1t_Noy2eqwM8eZLu3=w2048-h2048-k-no#.jpg',
    alt: 'Stunning luxury television media wall with backlit white Calacatta marble slab, vertical fluted wood slates, customized base cabinetry, and glowing showcase panels.',
    description: 'A striking master media wall blending a backlit slab of snow-white marble, wood fluting, floating glass drawers, and custom shelving decorated with dual-intensity warm LED illumination.',
    materials: ['Backlit Carrara Marble Substrate', 'Warm Walnut Fluting', 'Ivory Acrylic Drawer Accents', 'Integrated smart LED control'],
    duration: '3 Days',
    highlights: ['Zero visible wire installation', 'Multi-level dimmable LED glow', 'Durable high-gloss surface coatings']
  },
  {
    id: '2',
    title: 'Elegant Chandelier Drop Ceiling',
    category: 'ceiling',
    categoryLabel: 'PVC Ceiling',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGjTMxG0tOU4oWaZ_-qnfU8sDlShZGvOlw8cPB0lTzjOCL49YrDfzpBqZSw241jwSlPuso8zXb5GFwzJoBzQCR88ENATP4tdaxZ0ZkrvTCQsWCfbMWOmBCsWlGmubSexC2ndMj_=w2048-h2048-k-no#.jpg',
    alt: 'Modern central wooden laminate drop ceiling featuring backlit LED panels, dual ceiling fans, and an elegant circular ring wave pendant light.',
    description: 'A gorgeous multi-tiered ceiling featuring deep wood grain composite columns, architectural glowing borders, built-in recessed downlights, and a gorgeous modern floating ring wave chandelier.',
    materials: ['Anti-fading PVC Composite Boarding', 'Treated teak wood accents', 'Smart circular wave pendant', 'Warm profile LEDs'],
    duration: '2 Days',
    highlights: ['Includes dual fan mount reinforcements', 'Acoustic resonance dampening', 'Easy-clean dust repellent panels']
  },
  {
    id: '3',
    title: 'Lush Rooftop Garden & Pathway',
    category: 'balcony-outdoor',
    categoryLabel: 'Balcony & Outdoor',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHfL6w0Dex3VQ0gmwe_kRjPSLmq3WzafAUfHr9CgwOiXWunj_ClwPKPHr2bT-ZtD8qnV49ishgMgnCC0IM73VjuvJC4ulJSVoXU7-YqWdcj5MKeaEUvEHrGtJPhzVpK-cN5Xu8Quycw3nW3=w2048-h2048-k-no#.jpg',
    alt: 'Lush green grass lawn path with rectangular step-stones, clean white planter borders containing ornamental palm trees and mood LED lighting.',
    description: 'A luxurious rooftop oasis featuring long linear step paths embedded in plush, high-density green grass, walled off with continuous concrete step planters, customized palm layout, and warm under-cove safety wash lights.',
    materials: ['Plush 45mm Virgin UV-Resistant Grass', 'Weatherproof concrete compound walls', 'Warm white IP67 outdoor LEDs', 'Selected micro-pave gravel framing'],
    duration: '5 Days',
    highlights: ['Perfect storm water drainage layout', 'UV fade-proof guarantees', 'Low-maintenance structural planter setup']
  },
  {
    id: '4',
    title: 'Backlit Arched Mint Partition',
    category: 'wall-accent',
    categoryLabel: 'Wall Accent',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEKVMUyGjP4q4pX_KfmvHsa7P-7dvQZt5ShPlCvqhMwz-Hjf1k6KbIeee_SYAc20vBYMzlIOyK7Eku3ocX2_dXBr6NqN9Pw2csUNwBFGPu-3x-u_UK58oCNXRxjeA02lCE2UQt5jyH4u0c=w2048-h2048-k-no#.jpg',
    alt: 'Bespoke backlit wooden wall installation incorporating a glowing fluted column arch and a giant double arch embedding a brilliant mint-blue marble acrylic sheet.',
    description: 'An artistic focal partition combining classic half-arched vertical wood flutes and a massive nested double arch housing a beautifully illuminated slice of mint-green marble pattern.',
    materials: ['Translucent Mint Marble-Acrylic Plate', 'Teak wood arch frames', 'Warm LED backlight striping', 'Premium gold accent trims'],
    duration: '4 Days',
    highlights: ['Double layered accent backlight', 'High-accuracy CNC wood carving', 'Luxurious gloss finish protection']
  },
  {
    id: '5',
    title: 'Warm Lattice Coffered PVC Ceiling',
    category: 'ceiling',
    categoryLabel: 'PVC Ceiling',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAEB7Q9_BPvkkqlRjpgY8HMqvzteZzIq_aNoG0ywiznOzJpYWqbvQs9vJWAH58h_YfJKWSpQ3DOZD5t3fMsTGQX9YLu2HA69sRI_Jod5LzR1z8rx29k-l-_fqTHOJyyNJFhqCFow7cqnkRs=w2048-h2048-k-no#.jpg',
    alt: 'Luxury wood-plank style drop ceiling panels with symmetrical perimeter downlights, gold-accented filigree ceiling medallion, and dark accent timber beams.',
    description: 'A magnificent wooden false ceiling setup showcasing dark wood highlight beams, a circular master ceiling medallion backlit by bright glowing gold lattices, and perimeter warm white spot highlights.',
    materials: ['Teak Wood PVC Laminate Planking', 'Laser-cut Golden Medallion filigree', 'High efficiency COB LED spotlights'],
    duration: '2 Days',
    highlights: ['Damp-proof underlay shield', 'Perfect symmetrical alignment', 'Integrated fan-box concealment']
  },
  {
    id: '6',
    title: 'Cozy Botanical Balcony Oasis',
    category: 'balcony-outdoor',
    categoryLabel: 'Balcony & Outdoor',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAENFoPuL2HRROxyPrLf5ZrP0IVk9SKosq4TsKDBOZEWvkuneD_EsSFW5SHk5GONnDrZMjUGAQWdJ8d0HIWgKI5-rvX6VA49mrVYA6oe2FDGcmnWnOjYX-JSleap-8DiPwr-94rVuw=w2048-h2048-k-no#.jpg',
    alt: 'Charming small balcony makeover with lush artificial grass carpet, wooden plant ladder shelf, green monsteras, and pink blossoms.',
    description: 'A cozy balcony conversion designed to maximize botanical comfort in compact flats. Includes beautiful artificial turf, vertical plant stands in warm cedar, and cascading monstera foliage.',
    materials: ['Plush 35mm artificial grass', 'Solid pine multi-tier ladder rack', 'Galvanized steel vintage water can', 'Selected seasonal floral arrays'],
    duration: '1 Day',
    highlights: ['Quick 1-day transformation', 'Weather-proof pot arrangements', 'Optimized easy-clean layout']
  },
  {
    id: '7',
    title: 'Wainscoted Wallpaper Feature Wall',
    category: 'wall-accent',
    categoryLabel: 'Wall Accent',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFwznvDh4B-SKwZAhAaX_BoemqZKsApZNx-odCpVGUhT4VKjra1O_ToeCRChx00i6w0BLjnLxn4KdO88jmgc7_OY8U0okgaGkPUaj-dGy6HPF2wwJrtANugOkzyBPcpL7cQe3r1=w2048-h2048-k-no#.jpg',
    alt: 'Elegant grey drywall moldings wrapping rhythmic golden wallpaper panel frames, crowned with a recessed double layered warm lighting cove.',
    description: 'A classic Euro-contemporary living room feature wall combining charcoal grey polyurethane moldings, glistening gold geometric wavy wallpaper inserts, and dual-tier recessed cove lights.',
    materials: ['Slight-gloss polyurethane wall trim', 'Embossed golden wavy wallpaper', 'Ultra-flat slate wall paint', 'High intensity profile cove LEDs'],
    duration: '2 Days',
    highlights: ['Precision 45-degree miter joints', 'Zero air-bubble wallpaper setting', 'Sleek power-conduit framing']
  },
  {
    id: '8',
    title: 'Modern Moss & Stone Checker Wall',
    category: 'wall-accent',
    categoryLabel: 'Wall Accent',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAFV_z5A3Mi_3vAAdF5cmfMylaAxBCr8RPjOTRqtJWuxOsOCpGBqGjVS19FGy5NmPnTDoUQEJ2ClM35452cL4ToEzOz6S2u_qP-XiXAebw11xEvORQ29W12RI9qAqxYCsCWwIxlN=w2048-h2048-k-no#.jpg',
    alt: 'Contemporary feature wall panels consisting of alternating concrete textured stone blocks and green artificial moss panels illuminated by warm downlights.',
    description: 'An organic-modern accent paneling consisting of alternating squares of rough volcanic concrete stone texturing and rich green moss grass layers, individually lit by warm spotlights.',
    materials: ['Artificial slow-compressed moss grass sheets', 'Composite slate textured stone sheets', 'Warm metallic cylinder spots', 'Clean cedar wood divider framework'],
    duration: '3 Days',
    highlights: ['Unique sensory tactile design', 'Eco-inspired modern look', 'Easy-maintenance synthetic organic panels']
  },
  {
    id: '9',
    title: 'Luxury Master Bedroom Suite',
    category: 'bedroom-interior',
    categoryLabel: 'Bedroom',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGkh28rTAtMgxzYhBYoutlkFcVgei44_lSB0VCbD5T3JQxw9yk1vF_oudn_7T_EHgvVJNzYP_jrw6Mby4jgnqvkLSONRSJQX5NRhnyN45wHDk637STIdWCV-BbekuYrDlRfZS9NVUNch4yg=w2048-h2048-k-no#.jpg',
    alt: 'Luxury master bedroom suite with glowing wave motif back-wall accent lighting, matching customized pink bedding, floating vanity, and sliding ivory wardrobe.',
    description: 'A complete premium bedroom layout introducing beautiful undulating glowing backdrops on the headboard wall, high-end sliding ivory lacquered wardrobes with thin dark accents, and an integrated dressing vanity mirror with custom backlight.',
    materials: ['Custom bent MDF headboard panel', 'Lacquered glass sliding doors', 'Warm white LED backdrop lines', 'Premium wood laminate floorings'],
    duration: '6 Days',
    highlights: ['Continuous fluid wave lighting', 'Soft-close wardrobe tracks', 'Seamless vanity-mirror backing']
  },
  {
    id: '10',
    title: 'Elite Showcase Lounge Room',
    category: 'wall-accent',
    categoryLabel: 'Lounge Office',
    imageSrc: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAGgtWbg3vejsCznvR4JT-RzBK7M-mSF2ic9SkgGEktcL1e3MWxrEGJNCo7SYNt6QHQFUUKB_fTwG1aSZtMMddgix4_bzzoJzESUM2KKJxptUQBj3wxF7Nm0x1SPln3VrvLVt0rOCvobio8=w2048-h2048-k-no#.jpg',
    alt: 'Sophisticated commercial showcase room with designer warm fluted pillars, luxury custom leather lounge chairs, and dynamic accent coves.',
    description: 'An elite hospitality lounge layout presenting a dynamic sequence of vertical wooden screens, dual golden glowing rings, and warm ambient backlighting designed for deep client satisfaction.',
    materials: ['Symmetric cedar wood fluting', 'Top-grain leather comfort seating', 'Luminous golden ring fixtures', 'Warm ambient backdrop lines'],
    duration: '5 Days',
    highlights: ['Perfect symmetrical space dividing', 'Intimate premium corporate seating', 'Eco-friendly natural timber frames']
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'review-1',
    author: 'Suku Phull',
    location: 'Jalandhar Cantt',
    rating: 5,
    text: 'The media wall created by British Interiors has completely transformed my apartment. What was once a plain wall is now a refined focal point of our main living room. The marble backing looks absolutely magnificent under the warm backlight. Their dealing skills and professional design guidance were outstanding!',
    date: 'March 2026',
    avatarColor: 'bg-emerald-500'
  },
  {
    id: 'review-2',
    author: 'Pallvi Takiar',
    location: 'Model Town, Jalandhar',
    rating: 5,
    text: 'A special Thanks to British interiors for giving me a budget friendly such amazing wonderful majestic view to my small balcony area. The high-density artificial grass they laid has survived heavy rains and remains completely fresh and plush. They turned a dull concrete corner into my absolute favorite coffee retreat in the house.',
    date: 'April 2026',
    avatarColor: 'bg-amber-500'
  },
  {
    id: 'review-3',
    author: 'Sukhbir Singh',
    location: 'Dashmesh Nagar, Jalandhar',
    rating: 5,
    text: 'Really good service this company, Appreciate. Smart Rates this showroom nd Company owner very genuine person. We changed our home ceilings to modern PVC planks with warm lights and golden medallions. The complete work was finished in exactly 2 days as promised, with absolute honesty and no hidden costs. Truly reliable people!',
    date: 'January 2026',
    avatarColor: 'bg-blue-500'
  },
  {
    id: 'review-4',
    author: 'Harpreet Sodhi',
    location: 'Sarabha Nagar, Jalandhar',
    rating: 5,
    text: 'Simply outstanding work! We hired them for a master bedroom makeover with customized backlighting and a sliding glass wardrobe. The finish is extremely neat and luxurious. They are very skilled, very honest, and provide the best layout pricing in Punjab.',
    date: 'May 2026',
    avatarColor: 'bg-purple-500'
  }
];
