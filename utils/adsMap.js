// adsMap.js
import { fullAds, sidebarAds, belowAds, squareAds } from './adsdata.js';

const allAds = [...fullAds, ...sidebarAds, ...belowAds, ...squareAds];

export const adsById = allAds.reduce((map, ad) => {
  map[ad.id] = ad;
  return map;
}, {});
