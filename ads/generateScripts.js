import { ads, adStyles } from './adsdata.js';

export function generateAdScript(type) {
  const adList = ads[type];
  const style = adStyles[type];

  if (!adList || adList.length === 0) return '// No ads found';

  const getAdHTML = (ad) => `
    <div style="
      max-width: ${style.maxWidth};
      width: 100%;
      margin: ${style.margin};
      padding: ${style.padding};
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      background-color: #fff;
      font-family: sans-serif;
      box-sizing: border-box;
    ">
      <a href="${ad.link}" target="_blank" style="text-decoration: none; color: inherit;">
        <img 
          src="${ad.image}" 
          alt="${ad.title}" 
          style="
            width: 100%;
            height: auto;
            max-height: 180px;
            display: block;
            object-fit: cover;
            border-radius: 6px 6px 0 0;
          "
        />
        <div style="padding: 10px 14px;">
          <h4 style="margin: 0 0 6px; font-size: 16px; font-weight: 600; line-height: 1.4;">${ad.title}</h4>
          <p style="margin: 0; font-size: 14px; color: #444; line-height: 1.5;">${ad.description}</p>
        </div>
      </a>
    </div>
  `;

  if (type === 'below') {
    const allAdsHTML = adList.map(getAdHTML).join('\n');

    return `
      (function() {
        const container = document.currentScript.parentElement;
        if (!container) return;
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.padding = "10px";
        container.style.boxSizing = "border-box";
        container.innerHTML = \`${allAdsHTML}\`;
      })();
    `;
  } else {
    const selectedAd = adList[Math.floor(Math.random() * adList.length)];
    const singleAdHTML = getAdHTML(selectedAd);

    return `
      (function() {
        const container = document.currentScript.parentElement;
        if (!container) return;
        container.style.display = "flex";
        container.style.justifyContent = "${style.layout === 'right' ? 'flex-end' : 'center'}";
        container.style.padding = "10px";
        container.style.boxSizing = "border-box";
        container.innerHTML = \`${singleAdHTML}\`;
      })();
    `;
  }
}
