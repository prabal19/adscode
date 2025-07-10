// ads/adsdata.js
import dotenv from 'dotenv';
dotenv.config();

export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const adStyles = {
  full: {
    width: '700px',
    maxWidth: '700px',
    height: '90px',
    maxHeight: '90px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  sidebar: {
    width: '160px',
    maxWidth: '160px',
    height: '600px',
    maxHeight: '600px',
    layout: 'right',
    margin: '12px 0',
    padding: '0',
  },
  below: {
    width: '700px',
    maxWidth: '700px',
    height: '90px',
    maxHeight: '90px',
    layout: 'center',
    margin: '12px auto',
    padding: '0',
  },
  square: {
    width: '300px',
    maxWidth: '300px',
    height: '250px',
    maxHeight: '250px',
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
    title: 'Service Now plans',
    description: 'Streamlining processes with embedded AI',
    link: 'https://servicenow.com/',
  },
];

export const sidebarAds = [
  {
    id: 'ad3',
    image: `${BASE_URL}/ads/side1.jpeg`,
    title: 'Make it with Creative Cloud',
    description: 'Apps for photography, design, video, and web from US$9.99/mo.',
    link: 'https://www.adobe.com/creativecloud.html',
  },
  {
    id: 'ad4',
    image: `${BASE_URL}/ads/side2.jpeg`,
    title: 'Smart Investing with ICICI Lombard',
    description: 'Grow your money with local investment insights.',
    link: 'https://www.icicilombard.com/',
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
      {
    id: 'ad6',
    image: `${BASE_URL}/ads/square2.jpeg`,
    title: 'Hisense TV',
    description: 'TVs with Dolby Vision HDR and 4K UHD',
    link: 'https://www.amazon.in/dp/B0F4X6CM36/?aref=%5B%5BCS_MADS_TOKEN%5D%5D&aaxitk=5355da6c92bd6fbbc4f447e1075bedd6&ref=AAP_%7BCREATIVE_ID%7D&tag=ss-us-20&th=1',
  },
]

export const belowAds = [...fullAds];

export const ads = {
  full: fullAds,
  sidebar: sidebarAds,
  below: belowAds,
  square: squareAds,
};
