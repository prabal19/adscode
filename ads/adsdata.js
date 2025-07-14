// ads/adsdata.js
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const adStyles = {
  full: {
    maxWidth: '700px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  sidebar: {
    maxWidth: '160px',
    maxHeight: '600px',
    layout: 'right',
    margin: '12px 0',
    padding: '0',
  },
  below: {
    maxWidth: '700px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  square: {
    maxWidth: '300px',
    maxHeight: '250px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
};



export const fullAds = [
  {
    id: 'fujitsu_full',
    image: `${BASE_URL}/ads/fujitsu_full.png`,
    title: 'Smarter Optical Networks',
    description: 'Explore Fujitsu’s 800G innovation transforming network performance globally.',
    link: '/pcs/click?ad=fujitsu_full',
  },
  {
    id: 'indeed_full',
    image: `${BASE_URL}/ads/indeed_full.png`,
    title: 'Hire Faster with Indeed',
    description: 'Sponsored job posts help you attract the right talent quickly.',
    link: '/pcs/click?ad=indeed_full',
  },
  {
    id: 'maps_full',
    image: `${BASE_URL}/ads/maps_full.png`,
    title: 'Google Maps Platform India',
    description: 'Power your business with real-time location data using Google Maps APIs.',
    link: '/pcs/click?ad=maps_full',
  },
  {
    id: 'semrush_full',
    image: `${BASE_URL}/ads/semrush_full.png`,
    title: 'All-in-One Marketing Toolkit',
    description: 'SEO, PPC, and competitive research tools in one platform.',
    link: '/pcs/click?ad=semrush_full',
  },
  {
    id: 'siemens_full',
    image: `${BASE_URL}/ads/siemens_full.png`,
    title: 'Adaptive Production by Siemens',
    description: 'Discover digital solutions for smarter factories and efficiency.',
    link: '/pcs/click?ad=siemens_full',
  },
  {
    id: 'aws_full',
    image: `${BASE_URL}/ads/aws_full.png`,
    title: 'AWS for GenAI Startups',
    description: 'Join AWS programs for startups building with generative AI.',
    link: '/pcs/click?ad=aws_full',
  },
  {
    id: 'youtube_full',
    image: `${BASE_URL}/ads/youtube_full.png`,
    title: 'Watch the Oscars on YouTube TV',
    description: 'Stream the Oscars live and more with unlimited DVR space.',
    link: '/pcs/click?ad=youtube_full',
  },
];

export const sidebarAds = [
  {
    id: 'adobe_side',
    image: `${BASE_URL}/ads/adobe_side.png`,
    title: 'Adobe Creative Cloud',
    description: 'Get powerful tools like Photoshop and Illustrator in one plan.',
    link: '/pcs/click?ad=adobe_side',
  },
  {
    id: 'fiverr_side',
    image: `${BASE_URL}/ads/fiverr_side.png`,
    title: 'Hire Freelancers on Fiverr',
    description: 'Find top-rated talent for design, writing, tech & more.',
    link: '/pcs/click?ad=fiverr_side',
  },
  {
    id: 'indeed_side',
    image: `${BASE_URL}/ads/indeed_side.png`,
    title: 'Reach More Job Seekers',
    description: 'Promote your job posts with Indeed sponsored listings.',
    link: '/pcs/click?ad=indeed_side',
  },
  {
    id: 'youtube_side',
    image: `${BASE_URL}/ads/youtube_side.png`,
    title: 'YouTube TV - No Cable Box',
    description: 'Stream live TV and sports on all your devices, anywhere.',
    link: '/pcs/click?ad=youtube_side',
  },
];

export const squareAds = [
  {
    id: 'adobe_square',
    image: `${BASE_URL}/ads/adobe_square.png`,
    title: 'Creative Cloud by Adobe',
    description: 'Design, edit, and create with the best tools in the industry.',
    link: '/pcs/click?ad=adobe_square',
  },
  {
    id: 'aws_square',
    image: `${BASE_URL}/ads/aws_square.png`,
    title: 'AWS GenAI for Startups',
    description: 'Build and scale faster with AWS tools and funding support.',
    link: '/pcs/click?ad=aws_square',
  },
  {
    id: 'semrush_square',
    image: `${BASE_URL}/ads/semrush_square.png`,
    title: 'Traffic Analytics by Semrush',
    description: 'Understand your competitors’ strategies and get ahead.',
    link: '/pcs/click?ad=semrush_square',
  },
  {
    id: 'workspace_square',
    image: `${BASE_URL}/ads/workspace_square.png`,
    title: 'Google Workspace for Business',
    description: 'Secure business email and collaboration tools for your team.',
    link: '/pcs/click?ad=workspace_square',
  },
];

export const belowAds = [
  ...fullAds,
  {
    id: 'maps_full2',
    image: `${BASE_URL}/ads/maps_full2.png`,
    title: 'Advanced Mapping Tools',
    description: 'Unlock powerful location solutions for enterprise and startups.',
    link: '/pcs/click?ad=maps_full2',
  },
];


export const ads = {
  full: fullAds,
  sidebar: sidebarAds,
  below: belowAds,
  square: squareAds,
};
