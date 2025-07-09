import { ads, adStyles } from './adsdata.js';

export function generateAdScript(type) {
  const adList = ads[type];
  const adStyle = adStyles[type];

  if (!adList || adList.length === 0) {
    return `console.warn("No ads found for type: ${type}")`;
  }

  const ad = adList[Math.floor(Math.random() * adList.length)];

  return `
    (function () {
      const adContainer = document.currentScript.parentElement;

      const wrapper = document.createElement('div');
      wrapper.style.maxWidth = '${adStyle.maxWidth}';
      wrapper.style.margin = '${adStyle.margin}';
      wrapper.style.padding = '${adStyle.padding}';
      wrapper.style.border = '1px solid #ccc';
      wrapper.style.borderRadius = '8px';
      wrapper.style.overflow = 'hidden';
      wrapper.style.position = 'relative';
      wrapper.style.fontFamily = 'Arial, sans-serif';
      wrapper.style.background = '#fff';

      const infoBtn = document.createElement('a');
      infoBtn.href = 'https://adssettings.google.com/whythisad';
      infoBtn.target = '_blank';
      infoBtn.textContent = 'ℹ️';
      infoBtn.style.cssText = 'position:absolute;top:5px;right:30px;text-decoration:none;font-size:16px;cursor:pointer;z-index:10';

      const closeBtn = document.createElement('span');
      closeBtn.textContent = '×';
      closeBtn.style.cssText = 'position:absolute;top:5px;right:5px;font-size:20px;cursor:pointer;color:#000;z-index:10';

      const img = document.createElement('img');
      img.src = '${ad.image}';
      img.alt = '${ad.title}';
      img.style.cssText = 'width:100%;display:block;border-bottom:1px solid #ccc';

      const content = document.createElement('div');
      content.style.padding = '12px';

      const title = document.createElement('div');
      title.textContent = '${ad.title}';
      title.style.cssText = 'font-weight:bold;margin-bottom:4px;font-size:16px';

      const desc = document.createElement('div');
      desc.textContent = '${ad.description}';
      desc.style.cssText = 'font-size:14px;color:#555';

      content.appendChild(title);
      content.appendChild(desc);

      const adLink = document.createElement('a');
      adLink.href = '${ad.link}';
      adLink.target = '_blank';
      adLink.style.textDecoration = 'none';
      adLink.appendChild(img);
      adLink.appendChild(content);

      wrapper.appendChild(infoBtn);
      wrapper.appendChild(closeBtn);
      wrapper.appendChild(adLink);
      adContainer.appendChild(wrapper);

      closeBtn.addEventListener('click', () => {
        wrapper.innerHTML = '';

        const feedbackUI = document.createElement('div');
        feedbackUI.style.cssText = 'padding:12px;text-align:center;font-size:14px';

        const whyBtn = document.createElement('a');
        whyBtn.href = 'https://adssettings.google.com/whythisad';
        whyBtn.target = '_blank';
        whyBtn.textContent = 'Why this ad?';
        whyBtn.style.cssText = 'margin:5px;padding:6px 10px;border:1px solid #ccc;border-radius:4px;text-decoration:none;display:inline-block';

        const feedbackBtn = document.createElement('button');
        feedbackBtn.textContent = 'Send feedback';
        feedbackBtn.style.cssText = 'margin:5px;padding:6px 10px;border:1px solid #ccc;border-radius:4px;background:#eee;cursor:pointer';

        feedbackUI.appendChild(whyBtn);
        feedbackUI.appendChild(feedbackBtn);
        wrapper.appendChild(feedbackUI);

        feedbackBtn.addEventListener('click', () => {
          feedbackUI.innerHTML = '';
          const options = [
            'Ad was inappropriate',
            'Not interested in this ad',
            'Ad covered content',
            'Seen this ad multiple times'
          ];
          options.forEach(opt => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            btn.style.cssText = 'margin:4px;padding:6px 10px;border:1px solid #ccc;border-radius:4px;background:#f7f7f7;cursor:pointer';
            btn.onclick = () => {
              wrapper.innerHTML = '<div style="padding:12px;text-align:center;font-size:14px;">Thanks for your feedback!</div>';
            };
            feedbackUI.appendChild(btn);
          });
          wrapper.appendChild(feedbackUI);
        });
      });
    })();
  `;
}
