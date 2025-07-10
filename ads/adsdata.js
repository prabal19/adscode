// ads/adsdata.js
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const adStyles = {
  full: {
    maxWidth: '730px',
    maxheight: '90px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  sidebar: {
    maxWidth: '160px',
    maxheight: '600px',
    layout: 'right',
    margin: '12px 0',
    padding: '0',
  },
  below: {
    maxWidth: '600px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
    square: { 
    maxwidth: '300px',
    maxheight: '250px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
};


export const fullAds = [
  {
    id: 'ad1',
    image: `${BASE_URL}/ads/full1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/creativecloud.html',
  },
  {
    id: 'ad2',
    image: `${BASE_URL}/ads/full2.jpeg`,
    title: 'Top 10 Affordable Insurance Plans',
    description: 'Compare and choose the best affordable insurance for your family.',
    link: 'https://example.com/insurance-plans',
  },
];

export const sidebarAds = [
  {
    id: 'ad3',
    image: `${BASE_URL}/ads/side1.jpeg`,
    title: 'Crunch Into Happiness with Lay’s',
    description: 'From Classic to Masala Magic – taste the joy in every bite of Lay’s chips.',
    link: 'https://www.lays.com/',
  },
  {
    id: 'ad4',
    image: `${BASE_URL}/ads/side2.jpeg`,
    title: 'Smart Investing for New Yorkers',
    description: 'Grow your money with local investment insights.',
    link: 'https://example.com/ny-investing',
  },
];
export const squareAds = [
    {
    id: 'ad5',
    image: `${BASE_URL}/ads/square1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/creativecloud.html',
  },
]

export const belowAds = [...fullAds, ...sidebarAds,...squareAds];

export const ads = {
  full: fullAds,
  sidebar: sidebarAds,
  below: belowAds,
};
