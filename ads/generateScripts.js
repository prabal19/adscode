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

    // Info button with your SVG icon
    const infoBtn = document.createElement('a');
    infoBtn.href = 'https://adssettings.google.com/whythisad';
    infoBtn.target = '_blank';
    infoBtn.title = 'Why this ad?';
    infoBtn.innerHTML = \`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="16" height="16" fill="black">
        <path d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"></path>
      </svg>\`;
    infoBtn.style.cssText = 'position:absolute;top:8px;right:40px;cursor:pointer;z-index:10;';

    // Close button with your SVG icon
    const closeBtn = document.createElement('button');
    closeBtn.type = 'button';
    closeBtn.title = 'Close ad';
    closeBtn.innerHTML = \`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="16" height="16" stroke="black" stroke-width="1.5" stroke-linecap="round">
        <path d="M3.25 3.25l8.5 8.5m0-8.5l-8.5 8.5"></path>
      </svg>\`;
    closeBtn.style.cssText = 'position:absolute;top:8px;right:8px;border:none;background:none;cursor:pointer;z-index:10;padding:0;';

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

    // Append all
    wrapper.appendChild(infoBtn);
    wrapper.appendChild(closeBtn);
    wrapper.appendChild(adLink);
    adContainer.appendChild(wrapper);

    // Feedback UI (hidden initially)
    function createFeedbackUI(width, height) {
      const feedbackUI = document.createElement('div');
      feedbackUI.style.width = width + 'px';
      feedbackUI.style.height = height + 'px';
      feedbackUI.style.border = '1px solid #ccc';
      feedbackUI.style.borderRadius = '8px';
      feedbackUI.style.background = '#fff';
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
      whyBtn.style.cssText = 'padding:6px 12px; border:1px solid #ccc; border-radius:4px; text-decoration:none; color:#444; cursor:pointer; background:#f9f9f9;';

      // Send feedback button
      const sendFbBtn = document.createElement('button');
      sendFbBtn.textContent = 'Send feedback';
      sendFbBtn.style.cssText = 'padding:6px 12px; border:1px solid #ccc; border-radius:4px; background:#f9f9f9; cursor:pointer;';

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
        optBtn.style.cssText = 'padding:6px 12px; border:1px solid #ccc; border-radius:4px; background:#f7f7f7; cursor:pointer;';
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
