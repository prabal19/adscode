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
    wrapper.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';

    // === Ad Label Wrapper ===
    const labelWrapper = document.createElement('div');
    labelWrapper.style.cssText = 'position:absolute; top:5px; right:5px; display:flex; align-items:center; gap:5px; background:white; padding:2px 6px; border-radius:4px; z-index:10;';

    // === Ads by Google Label (initially hidden) ===
    const adLabel = document.createElement('span');
    adLabel.textContent = 'Ads by Google';
    adLabel.style.cssText = 'font-size:12px; color:#333; display:none;';

    // === Info Button SVG ===
    const infoBtn = document.createElement('span');
    infoBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path fill="#1a73e8" d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"></path></svg>';
    infoBtn.style.cssText = 'cursor:pointer; background:white; padding:2px; border-radius:4px;';
    infoBtn.title = 'Why this ad?';
    infoBtn.onclick = () => window.open('https://adssettings.google.com/whythisad', '_blank');

    // Show label on hover
    infoBtn.addEventListener('mouseenter', () => adLabel.style.display = 'inline');
    infoBtn.addEventListener('mouseleave', () => adLabel.style.display = 'none');

    // === Close Button SVG ===
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path stroke="#1a73e8" stroke-width="1.5" fill="none" d="M3.25 3.25l8.5 8.5m0-8.5l-8.5 8.5"></path></svg>';
    closeBtn.style.cssText = 'cursor:pointer; background:white; padding:2px; border-radius:4px;';

    // Image
    const img = document.createElement('img');
    img.src = '${ad.image}';
    img.alt = '${ad.title}';
    img.style.cssText = 'width:100%;display:block;border-bottom:1px solid #ccc;';

    // Content
    const content = document.createElement('div');
    content.style.padding = '12px';

    const title = document.createElement('div');
    title.textContent = '${ad.title}';
    title.style.cssText = 'font-weight:bold;margin-bottom:4px;font-size:16px;';

    const desc = document.createElement('div');
    desc.textContent = '${ad.description}';
    desc.style.cssText = 'font-size:14px;color:#555;';

    content.appendChild(title);
    content.appendChild(desc);

    // Link wrapper
    const adLink = document.createElement('a');
    adLink.href = '${ad.link}';
    adLink.target = '_blank';
    adLink.style.textDecoration = 'none';
    adLink.style.color = 'inherit';
    adLink.appendChild(img);
    adLink.appendChild(content);

    labelWrapper.appendChild(adLabel);
    labelWrapper.appendChild(infoBtn);
    labelWrapper.appendChild(closeBtn);

    // Now append everything to the ad wrapper
    wrapper.appendChild(labelWrapper);
    wrapper.appendChild(adLink);
    adContainer.appendChild(wrapper);
    
    // Feedback UI (hidden initially)
    function createFeedbackUI(width, height) {
      const feedbackUI = document.createElement('div');
      feedbackUI.style.width = width + 'px';
      feedbackUI.style.height = height + 'px';
      feedbackUI.style.border = '1px solid #ccc';
      feedbackUI.style.borderRadius = '8px';
      feedbackUI.style.background = '#f8f9fa';
      feedbackUI.style.display = 'flex';
      feedbackUI.style.flexDirection = 'column';
      feedbackUI.style.justifyContent = 'center';
      feedbackUI.style.alignItems = 'center';
      feedbackUI.style.fontFamily = 'Arial, sans-serif';
      feedbackUI.style.fontSize = '14px';
      feedbackUI.style.color = '#333';
      feedbackUI.style.padding = '12px';
      feedbackUI.style.boxSizing = 'border-box';
      feedbackUI.style.textAlign = 'center';

      // Buttons container
      const buttonsDiv = document.createElement('div');
      buttonsDiv.style.marginTop = '8px';
      buttonsDiv.style.display = 'flex';
      buttonsDiv.style.gap = '8px';
      buttonsDiv.style.flexWrap = 'wrap';
      buttonsDiv.style.justifyContent = 'center';

      // Why this ad? link
      const whyBtn = document.createElement('a');
      whyBtn.href = 'https://adssettings.google.com/whythisad';
      whyBtn.target = '_blank';
      whyBtn.textContent = 'Why this ad?';
      sendFbBtn.onmouseenter = () => sendFbBtn.style.background = '#1669c1';
      sendFbBtn.onmouseleave = () => sendFbBtn.style.background = '#1a73e8';

      // Send feedback button
      const sendFbBtn = document.createElement('button');
      sendFbBtn.textContent = 'Send feedback';
      sendFbBtn.style.cssText = 'padding:6px 12px; border:none; border-radius:4px; background:#1a73e8; color:white; cursor:pointer; font-weight:500;';
      sendFbBtn.onmouseenter = () => sendFbBtn.style.background = '#1669c1';
      sendFbBtn.onmouseleave = () => sendFbBtn.style.background = '#1a73e8';

      buttonsDiv.appendChild(whyBtn);
      buttonsDiv.appendChild(sendFbBtn);

      feedbackUI.appendChild(document.createTextNode('Ad served by Google'));
      feedbackUI.appendChild(buttonsDiv);

      // Feedback options container (hidden initially)
      const optionsDiv = document.createElement('div');
      optionsDiv.style.marginTop = '12px';
      optionsDiv.style.display = 'none';
      optionsDiv.style.flexDirection = 'column';
      optionsDiv.style.gap = '8px';

      const options = [
        'Ad was inappropriate',
        'Not interested in this ad',
        'Ad covered content',
        'Seen this ad multiple times'
      ];

      options.forEach(optionText => {
        const optBtn = document.createElement('button');
        optBtn.textContent = optionText;
        optbtn.style.cssText = 'margin:4px; padding:6px 10px; border:1px solid #ccc; border-radius:4px; background:white; cursor:pointer; font-size:14px;';
        optbtn.onmouseenter = () => btn.style.background = '#f1f1f1';
        optbtn.onmouseleave = () => btn.style.background = 'white';

        optBtn.onclick = () => {
          feedbackUI.innerHTML = '<div style="font-size:14px; padding: 12px;">Thanks for your feedback!</div>';
          setTimeout(() => {
            adContainer.innerHTML = '';
          }, 2000);
        };
        optionsDiv.appendChild(optBtn);
      });

      feedbackUI.appendChild(optionsDiv);

      sendFbBtn.onclick = () => {
        buttonsDiv.style.display = 'none';
        optionsDiv.style.display = 'flex';
      };

      return feedbackUI;
    }

    closeBtn.onclick = () => {
      const width = wrapper.offsetWidth;
      const height = wrapper.offsetHeight;
      wrapper.innerHTML = '';
      wrapper.appendChild(createFeedbackUI(width, height));
    };
  })();
  `;
}
