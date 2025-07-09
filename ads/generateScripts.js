// ads/generateScript.js
import { ads, adStyles } from './adsdata.js';

export function generateAdScript(type) {
  const adList = ads[type];
  if (!adList || adList.length === 0) {
    return `console.warn("No ads available for type: ${type}");`;
  }

  const ad = adList[Math.floor(Math.random() * adList.length)];
  const style = adStyles[type];

  const escape = (str) => str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

  return `
    (function () {
      const adContainer = document.currentScript.parentElement;
      if (!adContainer) return;

      const adWrapper = document.createElement('div');
      adWrapper.style.maxWidth = "${style.maxWidth}";
      adWrapper.style.margin = "${style.margin}";
      adWrapper.style.padding = "${style.padding}";
      adWrapper.style.position = "relative";
      adWrapper.style.border = "1px solid #ddd";
      adWrapper.style.borderRadius = "8px";
      adWrapper.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
      adWrapper.style.overflow = "hidden";
      adWrapper.style.fontFamily = "Arial, sans-serif";
      adWrapper.style.background = "#fff";

      const adHTML = \`
        <div style="position: relative;">
          <a href="\${escape(ad.link)}" target="_blank" style="text-decoration: none; color: inherit;">
            <img src="\${escape(ad.image)}" alt="Ad" style="width: 100%; display: block; border-bottom: 1px solid #eee;">
            <div style="padding: 10px;">
              <h4 style="margin: 0 0 5px; font-size: 16px;">\${escape(ad.title)}</h4>
              <p style="margin: 0; font-size: 14px; color: #555;">\${escape(ad.description)}</p>
            </div>
          </a>
          <div class="ad-buttons" style="position: absolute; top: 8px; right: 8px; display: flex; gap: 6px; z-index: 10;">
            <a href="https://adssettings.google.com/whythisad" target="_blank" style="text-decoration: none;">
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"/>
              </svg>
            </a>
            <button id="dismiss-btn" style="background: none; border: none; cursor: pointer; padding: 0;">
              <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" stroke-width="1.5" d="M3.25 3.25l8.5 8.5m0-8.5l-8.5 8.5"/>
              </svg>
            </button>
          </div>
        </div>
      \`;

      adWrapper.innerHTML = adHTML;
      adContainer.appendChild(adWrapper);

      // Add Dismiss/Feedback logic
      const dismissBtn = adWrapper.querySelector('#dismiss-btn');
      dismissBtn?.addEventListener('click', () => {
        const feedbackUI = document.createElement('div');
        feedbackUI.style.width = adWrapper.offsetWidth + "px";
        feedbackUI.style.height = adWrapper.offsetHeight + "px";
        feedbackUI.style.display = "flex";
        feedbackUI.style.flexDirection = "column";
        feedbackUI.style.alignItems = "center";
        feedbackUI.style.justifyContent = "center";
        feedbackUI.style.border = "1px solid #ddd";
        feedbackUI.style.borderRadius = "8px";
        feedbackUI.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.1)";
        feedbackUI.style.background = "#fff";
        feedbackUI.innerHTML = \`
          <div style="text-align: center;">
            <p style="font-size: 14px; color: #444; margin: 0 0 12px;">Ad served by <strong>Google</strong></p>
            <div style="display: flex; gap: 10px; justify-content: center;">
              <button id="feedback-btn" style="background-color: #1a73e8; color: white; border: none; padding: 6px 12px; border-radius: 4px; cursor: pointer;">Send feedback</button>
              <a href="https://adssettings.google.com/whythisad" target="_blank" style="padding: 6px 12px; border: 1px solid #ccc; border-radius: 4px; text-decoration: none; color: #444;">Why this ad? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path fill="currentColor" d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"></path></svg></a>
            </div>
          </div>
        \`;

        adWrapper.innerHTML = '';
        adWrapper.appendChild(feedbackUI);

        feedbackUI.querySelector('#feedback-btn').addEventListener('click', () => {
          const options = [
            'Ad was inappropriate',
            'Not interested in this ad',
            'Ad covered content',
            'Seen this ad multiple times',
          ];

          feedbackUI.innerHTML = '<p style="margin-bottom: 10px; font-weight: 500;">Why did you dismiss this ad?</p>';
          options.forEach(option => {
            const btn = document.createElement('button');
            btn.textContent = option;
            btn.style.margin = "4px";
            btn.style.padding = "6px 10px";
            btn.style.border = "1px solid #ccc";
            btn.style.borderRadius = "4px";
            btn.style.background = "#f9f9f9";
            btn.style.cursor = "pointer";
            feedbackUI.appendChild(btn);

            btn.addEventListener('click', () => {
              feedbackUI.innerHTML = '<p style="font-size: 14px; color: #444;">Thanks for your feedback</p>';
              setTimeout(() => adWrapper.remove(), 1500);
            });
          });
        });
      });
    })();
  `;
}
