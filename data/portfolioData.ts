import { VideoWork, GraphicWork } from '../types/portfolio';

export const VIDEO_WORKS: VideoWork[] = [
  {
    id: 'yt-quiet-grit-cant-figure-out',
    title: 'Why People Can’t Stop Thinking About Those They Can’t Figure Out! | Robert Greene',
    clientOrChannel: 'Quiet Grit',
    category: 'youtube',
    categoryLabel: 'YouTube Video',
    duration: '08:42',
    aspectRatio: '16:9',
    thumbnailUrl: '/src/assets/images/yt_quiet_grit_cant_figure_out.jpg',
    videoUrl: 'https://youtu.be/FhXn_iBVZLQ',
    youtubeId: 'FhXn_iBVZLQ',
    description: 'Psychological video essay edited with paced narrative hooks, dialogue enhancement, and atmospheric sound design.',
    editingHighlights: [
      'Paced narrative hooks',
      'Atmospheric multi-layered sound design',
      'Kinetic text emphasis'
    ],
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'yt-quiet-grit-never-waste-pain',
    title: 'Why Powerful People Never Waste Their Pain! | Robert Greene',
    clientOrChannel: 'Quiet Grit',
    category: 'youtube',
    categoryLabel: 'YouTube Video',
    duration: '09:15',
    aspectRatio: '16:9',
    thumbnailUrl: '/src/assets/images/yt_quiet_grit_never_waste_pain.jpg',
    videoUrl: 'https://youtu.be/mza1qOfBBgo',
    youtubeId: 'mza1qOfBBgo',
    description: 'Cinematic storytelling cut balancing dramatic music builds, archival visuals, and speech cadence.',
    editingHighlights: [
      'Dramatic music builds and audio ducking',
      'Match-cut archival b-roll',
      'Clean color grading'
    ],
    software: ['Premiere Pro', 'DaVinci Resolve']
  },
  {
    id: 'yt-zkc-audi-r8',
    title: 'RARE Audi R8 Location in GTA 5 Story Mode (Obey 9F) - 100% SPAWN',
    clientOrChannel: 'zkc plays',
    category: 'youtube',
    categoryLabel: 'YouTube Video',
    duration: '05:38',
    aspectRatio: '16:9',
    thumbnailUrl: '/src/assets/images/yt_zkc_plays_audi_r8.jpg',
    videoUrl: 'https://youtu.be/4ykRpuyFc7s',
    youtubeId: '4ykRpuyFc7s',
    description: 'Fast-paced gaming guide cut with audio transients, zooms, and high-energy tutorial pacing.',
    editingHighlights: [
      'Dynamic punch-ins and zooms',
      'Sound effect hits on key reveals',
      'High-energy walkthrough pacing'
    ],
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'yt-short-clothing-ad-1',
    title: 'Ads for clothing company',
    clientOrChannel: 'Melos Crafts',
    category: 'reels_tiktok',
    categoryLabel: 'Reels / TikTok',
    duration: '00:44',
    aspectRatio: '9:16',
    thumbnailUrl: '/src/assets/images/yt_shorts_habesha_dress.jpg',
    videoUrl: 'https://youtube.com/shorts/qrYigRwjD9g?feature=share',
    youtubeId: 'qrYigRwjD9g',
    description: 'Traditional Habesha scarves and gemstone jewelry commercial edit with rhythmic music sync and on-screen typography.',
    editingHighlights: [
      'Rhythmic audio-to-cut synchronization',
      'Vibrant fabric and jewelry color grading',
      'Kinetic callout subtitles'
    ],
    software: ['Premiere Pro', 'After Effects']
  },
  {
    id: 'yt-short-clothing-ad-2',
    title: 'Ads for clothing company',
    clientOrChannel: 'Melos Crafts',
    category: 'reels_tiktok',
    categoryLabel: 'Reels / TikTok',
    duration: '00:41',
    aspectRatio: '9:16',
    thumbnailUrl: '/src/assets/images/yt_shorts_tote_bag.jpg',
    videoUrl: 'https://youtube.com/shorts/6MEyBKNMVLU?feature=share',
    youtubeId: '6MEyBKNMVLU',
    description: 'Commercial video cut for handcrafted tote bags with lifestyle storytelling, dialogue pacing, and branded end-tag CTA.',
    editingHighlights: [
      'Dialogue pacing and narrative timing',
      'Handcrafted product detail inserts',
      'Brand end-card animation'
    ],
    software: ['Premiere Pro', 'After Effects']
  }
];

export const GRAPHIC_WORKS: GraphicWork[] = [
  {
    id: 'graphic-company-profile-melazal',
    title: 'Company Profile Full Design',
    client: 'MELAZAL Manufacturing Industry PLC',
    category: 'posters',
    categoryLabel: 'Company Profile',
    year: '2025/26',
    imageUrl: 'https://res.cloudinary.com/rqcidcaq/image/upload/v1791360235/Melazal.png',
    description: 'Comprehensive corporate company profile booklet layout (2025/26 G.C) for MELAZAL Manufacturing Industry PLC, highlighting electrical breakers, transformers, cables, core engineering, and assembly workflows.',
    specifications: 'A4 Landscape Brochure Spread',
    tools: ['InDesign', 'Illustrator', 'Photoshop']
  },
  {
    id: 'graphic-health-center-social-media',
    title: 'Social Media Post for Health Center',
    client: 'Fiker Abirak Medical Center',
    category: 'social_media',
    categoryLabel: 'Social Media Design',
    year: '2024',
    imageUrl: 'https://res.cloudinary.com/rqcidcaq/image/upload/v1791359497/fkr_graphics_dr_marta.png',
    description: 'Children Care Specialist creative for pediatrician Dr. Martha G/Tinsae at Fiker Abirak Medical Center, with clean medical branding, custom callouts, and phone contact lines.',
    specifications: '1080 x 1080 px (Social Media Post)',
    tools: ['Photoshop', 'Illustrator']
  },
  {
    id: 'graphic-holiday-poster-eid',
    title: 'Holiday Poster',
    client: 'Eid Celebration Campaign',
    category: 'posters',
    categoryLabel: 'Holiday Poster',
    year: '2024',
    imageUrl: 'https://res.cloudinary.com/rqcidcaq/image/upload/v1791359676/Eid_graphics.png',
    description: 'Festive holiday poster design celebrating Eid with cultural motifs, elegant typography, and rich visual presentation.',
    specifications: 'Digital & Print Poster',
    tools: ['Illustrator', 'Photoshop']
  },
  {
    id: 'graphic-product-photography-ad',
    title: 'Social Media Post for Product Photography',
    client: 'Studio Commercial Photography',
    category: 'social_media',
    categoryLabel: 'Product Photography',
    year: '2024',
    imageUrl: 'https://res.cloudinary.com/rqcidcaq/image/upload/v1791359937/Thumbnail_6.png',
    description: 'Studio commercial product photography post featuring cactus composition with bilingual Amharic headline (ጥራት ያለው የምርት ፎቶግራፊ!), English sub-headline, and social media icons.',
    specifications: '1080 x 1350 px (Social Media Display)',
    tools: ['Photoshop', 'Lightroom']
  }
];

export const EDITOR_INFO = {
  name: 'Selehadin Kedir',
  title: 'Video Editor & Graphic Designer',
  email: 'Saladinkedir3@gmail.com',
  phone: '+251922977418',
  address: 'Addis Ababa, ETHIOPIA',
  availability: 'Available worldwide (Remote)',
  tools: [
    'Premiere Pro',
    'DaVinci Resolve',
    'After Effects',
    'Photoshop',
    'Illustrator',
    'InDesign'
  ]
};
