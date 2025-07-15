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
  let backState = null;

  const adContainer = document.currentScript.parentElement;

  const wrapper = document.createElement('div');
  if (${!!adStyle.width}) wrapper.style.width = '${adStyle.width}';
  wrapper.style.maxWidth = '${adStyle.maxWidth}';
  if (${!!adStyle.height}) wrapper.style.height = '${adStyle.height}';
  wrapper.style.maxHeight = '${adStyle.maxHeight}';
  wrapper.style.margin = '${adStyle.margin}';
  wrapper.style.padding = '${adStyle.padding}';
  wrapper.style.border = '1px solid #ccc';
  wrapper.style.borderRadius = '0px';
  wrapper.style.overflow = 'hidden';
  wrapper.style.position = 'relative';
  wrapper.style.fontFamily = 'Arial, sans-serif';
  wrapper.style.background = '#fff';
  wrapper.style.boxSizing = 'border-box';

  adContainer.appendChild(wrapper);

  function renderAd(wrapper) {
    wrapper.innerHTML = '';

    const labelWrapper = document.createElement('div');
    labelWrapper.style.position = 'absolute';
    labelWrapper.style.top = '0px';
    labelWrapper.style.right = '0px';
    labelWrapper.style.display = 'flex';
    labelWrapper.style.alignItems = 'center';
    labelWrapper.style.gap = '1px';
    labelWrapper.style.zIndex = '10';

    const infoContainer = document.createElement('div');
    infoContainer.style.display = 'flex';
    infoContainer.style.alignItems = 'center';
    infoContainer.style.position = 'relative';
    infoContainer.style.height = '15px';

    const infoWrapper = document.createElement('div');
    infoWrapper.style.background = 'white';
    infoWrapper.style.paddingTop = '2px';
    infoWrapper.style.width = 'auto';
    infoWrapper.style.height = '15px';
    infoWrapper.style.display = 'flex';
    infoWrapper.style.alignItems = 'center';
    infoWrapper.style.justifyContent = 'center';
    infoWrapper.style.cursor = 'pointer';
    infoWrapper.style.boxSizing = 'border-box';

    const infoBtn = document.createElement('div');
    infoBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path fill="#00aecd" d="M7.5 1.5a6 6 0 100 12 6 6 0 100-12m0 1a5 5 0 110 10 5 5 0 110-10zM6.625 11h1.75V6.5h-1.75zM7.5 3.75a1 1 0 100 2 1 1 0 100-2z"/></svg>';
    infoBtn.title = 'Why this ad?';
    infoBtn.onclick = () => {
      window.open('https://adssettings.google.com/whythisad?source=display&reasons=ASp5-QBiEQRYmrCoOc5EnylgqpkOwA-7iaHC3031tUVW0hf41wXvsPTcXswCMzo0q-fehjQmQOtvtOGyjUOwuM5mqXqvKKEud8GIIRna-dc3ewD8xKO10JYc1SB4t_ax9Y5YZdTDbq4lZ887Bx0I3XBHMGWbEtNiI9sBhKRzrqBW6hlZZBfGi19wphFebyEWjfahRXCA-T8QmUtxy5B81B50b3Jr107ZsAFLhBHqrWrUT8o-xOFZCOeWCjYQ0jZr3RCsNexZjSjKULc-Ey6uT6vJzsekGczEviuJtuGCyJm5SacbMrWRxTKVRyqUkKRVMdUkSiSe_TGLjTXNvVnQajtySqf-WRIhkRD4FRRuji6VQpbFbgRUef-5_94xlw9zMixDWMp_iBk_bZt00dh0B7xbqGReQF8OgAlAUrn7u2-bBAtv5fpcvOJY-HyelGYyFErVUn8CNtp_MFIPvXyjTKkdLX5T-zBh0zSL6fbdcMYSC6qb9J-59Wa4sha_rhOKM7MHLuTRe9a-UFea3EOuGx8GHWKI7H80Lfkqh8h6IsVIKlDN2c-jgRtvXZKQu_WrSRpORk1CtTIFABv7y-ZPn5Di-BMuRjqy2dyEf7fOXeQ3-t0waPQSEceOd_o3WGMxjIl53xMJ994cNdtgUw3i3vMrdoaSuIShs9nZoRsm8JDZK4yCvRvU5nuVLeEcKHvoj2GH5nYq9vPjdH9siuvq5IjA09hKQkCjImhoAEDED345xL5yrQDlUGvjnj86lfohZA8nyRS9S5DyQaYGrXoFZOBqrntbH7tmqdlTGFnckCUFpfmSuReTEzW5T5iaRKlSOqweDQeXQhq30WgAqKwoNGTDnWeUWDUhOCHMrwbQzOEWK4ZiGMShiFd2HcOtYB5EiY1w6BQXnv5dZ6UC5_evhhiJm01y8j4PbKAK66JGKAFEOzcdBMDrGwUHBqs_fIeILXYFenxJ90dxTH0-eadystjPmaV0VTIHH8wHYAuJUzH7pFw0j012BmP7lx4N4O2laBDuWHcBql3UIiGvjqOyZvsM6oWXU3LSq11M_ZJpqpn5ZpRnXPTNtQGbsF7G5ljpNWYuNzqTla5Z7TOcS8gleh-Coaz5ecJjsu7LpVY5KlzVNhNj2XOnL3T1Ly8qCx-R9bYVrdt45Y9oCEYs3soYHAwDgWpd2NXi8IURj1mC00N3POMRcQ3m8Mx4Lm38fopMnJsLz8cppz0MnvsgkSGiWinJP6_YjZdaxrGnTDy6xAwT59WnRwRWpRUtuH_4XVdVZ7tx7q3WUj_NblGcI4bpDO828mDt7yigk2onYlHy7zev7UUf-nVlOai-O_H3dUj8NlcTw_OjK5tbMuuI11_d7V4FBVNGswsTSPbotL2hjnlB3b7FigFHWivNJ7ihP3YMwv3rbS27_kbsFkvzmL3ZM0MCcsVPHyVscx7FcJNrEPlK9ACbikI4SgyIKQlhPGothk8zmCfG99YmTwm-Hcg0DHAcncgGc0mQKUYQzrE&opi=122715837', '_blank');
    };
    infoWrapper.appendChild(infoBtn);

    const adLabel = document.createElement('div');
    adLabel.textContent = 'Ads by Google';
    adLabel.style.cssText = 'font-size:10px; color:#333; display:none; background:white; width:74px;height:15px; line-height:15px; padding:0 4px; border-bottom-left-radius:4px; white-space:nowrap; box-sizing:border-box;font-weight:500;';
    infoWrapper.addEventListener('mouseenter', () => adLabel.style.display = 'inline-block');
    infoWrapper.addEventListener('mouseleave', () => adLabel.style.display = 'none');

    const closeWrapper = document.createElement('div');
    closeWrapper.style.background = 'white';
    closeWrapper.style.width = '15px';
    closeWrapper.style.height = '15px';
    closeWrapper.style.paddingTop = '2px';
    closeWrapper.style.display = 'flex';
    closeWrapper.style.alignItems = 'center';
    closeWrapper.style.justifyContent = 'center';
    closeWrapper.style.cursor = 'pointer';
    closeWrapper.style.boxSizing = 'border-box';

    const closeBtn = document.createElement('div');
    closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path fill="#00aecd" stroke="#00aecd" stroke-width="1.25" d="M3.25 3.25l8.5 8.5m0-8.5l-8.5 8.5"/></svg>';
    closeWrapper.appendChild(closeBtn);

    infoContainer.appendChild(adLabel);
    infoContainer.appendChild(infoWrapper);
    labelWrapper.appendChild(infoContainer);
    labelWrapper.appendChild(closeWrapper);

    const img = document.createElement('img');
    img.src = '${ad.image}';
    img.alt = '${ad.title}';
    img.style.cssText = 'width: 100%; height: 100%; object-fit: cover; display: block; border-bottom: 1px solid #ccc; max-width: 100%; max-height: 100%;';

    // const content = document.createElement('div');
    // content.style.padding = '12px';

    // const title = document.createElement('div');
    // title.textContent = '${ad.title}';
    // title.style.cssText = 'font-weight:bold;margin-bottom:4px;font-size:16px;';

    // const desc = document.createElement('div');
    // desc.textContent = '${ad.description}';
    // desc.style.cssText = 'font-size:14px;color:#555;';

    // content.appendChild(title);
    // content.appendChild(desc);

    const adLink = document.createElement('a');
    adLink.href = '${ad.link}';
    adLink.target = '_blank';
    adLink.style.textDecoration = 'none';
    adLink.style.color = 'inherit';
    adLink.appendChild(img);
    // adLink.appendChild(content);

    wrapper.appendChild(labelWrapper);
    wrapper.appendChild(adLink);

    // Feedback logic
    closeBtn.onclick = () => {
      const width = wrapper.offsetWidth;
      const height = wrapper.offsetHeight;
      wrapper.innerHTML = '';
      wrapper.appendChild(createFeedbackUI(width, height));
      backState = 'main';
    };
  }

  function createFeedbackUI(width, height) {
    const feedbackUI = document.createElement('div');
    feedbackUI.style.cssText = \`
      width: \${width}px;
      height: \${height}px;
      border: 1px solid #ccc;
      border-radius: 0px;
      background: #f8f9fa;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: Arial, sans-serif;
      font-size: 14px;
      color: #333;
      padding: 12px;
      box-sizing: border-box;
      text-align: center;
      position: relative;
    \`;

    const backBtn = document.createElement('div');
    backBtn.id = 'menu-dismiss';
    backBtn.style.cssText = 'top:4px;left:4px;display:inline-block;position:absolute;color:black;font-size:15px;line-height:15px;opacity:0.5;height:15px;width:15px;user-select:none;cursor:pointer;';
    backBtn.innerHTML = '<svg viewBox="0 0 24 24" style="width:100%;height:100%;"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>';
    backBtn.onclick = () => {
      if (backState === 'feedback-options') {
        buttonsDiv.style.display = 'flex';
        optionsDiv.style.display = 'none';
        attributionWrapper.style.display = 'inline-block';
        backState = 'main';
      } else if (backState === 'main') {
        renderAd(wrapper);
        backState = null;
      }
    };

    const buttonsDiv = document.createElement('div');
    buttonsDiv.style.cssText = 'margin-top:8px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;';

    const sendFbBtn = document.createElement('button');
    sendFbBtn.textContent = 'Send feedback';
    sendFbBtn.style.cssText = 'display:inline:block;font-size:16px;padding:8px 9.6px;border:none;border-radius:2px;background:#4285f5;color:white;cursor:pointer;font-weight:500;';
    sendFbBtn.onmouseenter = () => sendFbBtn.style.background = '#1669c1';
    sendFbBtn.onmouseleave = () => sendFbBtn.style.background = '#1a73e8';

    const whyBtn = document.createElement('a');
    whyBtn.href = 'https://adssettings.google.com/whythisad?source=display&reasons=ASp5-QBiEQRYmrCoOc5EnylgqpkOwA-7iaHC3031tUVW0hf41wXvsPTcXswCMzo0q-fehjQmQOtvtOGyjUOwuM5mqXqvKKEud8GIIRna-dc3ewD8xKO10JYc1SB4t_ax9Y5YZdTDbq4lZ887Bx0I3XBHMGWbEtNiI9sBhKRzrqBW6hlZZBfGi19wphFebyEWjfahRXCA-T8QmUtxy5B81B50b3Jr107ZsAFLhBHqrWrUT8o-xOFZCOeWCjYQ0jZr3RCsNexZjSjKULc-Ey6uT6vJzsekGczEviuJtuGCyJm5SacbMrWRxTKVRyqUkKRVMdUkSiSe_TGLjTXNvVnQajtySqf-WRIhkRD4FRRuji6VQpbFbgRUef-5_94xlw9zMixDWMp_iBk_bZt00dh0B7xbqGReQF8OgAlAUrn7u2-bBAtv5fpcvOJY-HyelGYyFErVUn8CNtp_MFIPvXyjTKkdLX5T-zBh0zSL6fbdcMYSC6qb9J-59Wa4sha_rhOKM7MHLuTRe9a-UFea3EOuGx8GHWKI7H80Lfkqh8h6IsVIKlDN2c-jgRtvXZKQu_WrSRpORk1CtTIFABv7y-ZPn5Di-BMuRjqy2dyEf7fOXeQ3-t0waPQSEceOd_o3WGMxjIl53xMJ994cNdtgUw3i3vMrdoaSuIShs9nZoRsm8JDZK4yCvRvU5nuVLeEcKHvoj2GH5nYq9vPjdH9siuvq5IjA09hKQkCjImhoAEDED345xL5yrQDlUGvjnj86lfohZA8nyRS9S5DyQaYGrXoFZOBqrntbH7tmqdlTGFnckCUFpfmSuReTEzW5T5iaRKlSOqweDQeXQhq30WgAqKwoNGTDnWeUWDUhOCHMrwbQzOEWK4ZiGMShiFd2HcOtYB5EiY1w6BQXnv5dZ6UC5_evhhiJm01y8j4PbKAK66JGKAFEOzcdBMDrGwUHBqs_fIeILXYFenxJ90dxTH0-eadystjPmaV0VTIHH8wHYAuJUzH7pFw0j012BmP7lx4N4O2laBDuWHcBql3UIiGvjqOyZvsM6oWXU3LSq11M_ZJpqpn5ZpRnXPTNtQGbsF7G5ljpNWYuNzqTla5Z7TOcS8gleh-Coaz5ecJjsu7LpVY5KlzVNhNj2XOnL3T1Ly8qCx-R9bYVrdt45Y9oCEYs3soYHAwDgWpd2NXi8IURj1mC00N3POMRcQ3m8Mx4Lm38fopMnJsLz8cppz0MnvsgkSGiWinJP6_YjZdaxrGnTDy6xAwT59WnRwRWpRUtuH_4XVdVZ7tx7q3WUj_NblGcI4bpDO828mDt7yigk2onYlHy7zev7UUf-nVlOai-O_H3dUj8NlcTw_OjK5tbMuuI11_d7V4FBVNGswsTSPbotL2hjnlB3b7FigFHWivNJ7ihP3YMwv3rbS27_kbsFkvzmL3ZM0MCcsVPHyVscx7FcJNrEPlK9ACbikI4SgyIKQlhPGothk8zmCfG99YmTwm-Hcg0DHAcncgGc0mQKUYQzrE&opi=122715837';
    whyBtn.target = '_blank';
      whyBtn.style.cssText = 'display:inline-flex; gap:4px; white-space:no-wrap; padding:8px 9.6px; text-decoration:none; border:1px solid #ccc; align-items:center; border-radius:2px; background:#fff; color: #9e9ea6; cursor:pointer; font-weight:500;box-shadow:0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26)'; 

      const iconImg = document.createElement('img');
      iconImg.src = 'https://googleads.g.doubleclick.net/pagead/images/abg/iconx2-000000.png';
      iconImg.alt = 'i';
      iconImg.style.cssText = 'width: 1em; height: 1em;position: relative;display: block;opacity: 0.4;';

      const labelSpan = document.createElement('span');
      labelSpan.textContent = 'Why this ad?';
      whyBtn.appendChild(labelSpan);
      whyBtn.appendChild(iconImg);

      whyBtn.onmouseenter = () => whyBtn.style.background = '#f1f1f1';
      whyBtn.onmouseleave = () => whyBtn.style.background = 'white';

    const optionsDiv = document.createElement('div');
    optionsDiv.style.cssText = 'margin-top:12px;display:none;flex-wrap:wrap;justify-content:center;gap:8px;maxWidth:100%;';

    ['Ad was inappropriate', 'Seen this ad multiple times', 'Ad covered content', 'Not interested in this ad'].forEach(text => {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.cssText = 'width:90px;height:50px;border:1px solid #ccc;border-radius:2px;background:white;color:#4285f4;font-size:12px;font-weight:500;cursor:pointer;padding:1px 5px;textAlign:center;lineHeight:14px;whiteSpace:normal;flex:1 1 auto;box-shadow: 0 1px 3px rgba(0,0,0,0.1);transition: box-shadow 0.2s ease, background 0.2s ease;';
btn.onmouseenter = () => {
  btn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
  btn.style.background = '#f8f9fa';
};
btn.onmouseleave = () => {
  btn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  btn.style.background = 'white';
};

      btn.onclick = () => {
        feedbackUI.innerHTML = '<div style="font-size:14px;padding:12px;">Thanks. Feedback improves Google Ads!</div>';
        setTimeout(() => adContainer.innerHTML = '', 2000);
      };
      optionsDiv.appendChild(btn);
    });

    const attributionWrapper = document.createElement('div');
attributionWrapper.style.cssText = 'display:inline-block; line-height:1.28em; font-size:1.2em; color:#777; font-family:arial,sans-serif;';


      // Text part
      const textSpan = document.createElement('span');
      textSpan.textContent = 'Ad served by';
      textSpan.style.cssText = 'display:inline-block; vertical-align:middle;';

      // Google logo
      const logoImg = document.createElement('img');
      logoImg.src = 'https://www.gstatic.com/images/branding/googlelogo/2x/googlelogo_dark_color_84x28dp.png';
      logoImg.alt = 'Google';
      logoImg.style.cssText = 'margin: 0 0 -0.34em 4px;height: 1.25em;display: inline-block;width: auto; min-width: 3.75em; opacity: 0.4;vertical-align: middle;';

      // Combine them
      attributionWrapper.appendChild(textSpan);
      attributionWrapper.appendChild(logoImg);

    sendFbBtn.onclick = () => {
      buttonsDiv.style.display = 'none';
      optionsDiv.style.display = 'flex';
      attributionWrapper.style.display = 'none';
      backState = 'feedback-options';
    };

    buttonsDiv.appendChild(sendFbBtn);
    buttonsDiv.appendChild(whyBtn);

    feedbackUI.appendChild(backBtn);
    feedbackUI.appendChild(attributionWrapper);
    feedbackUI.appendChild(buttonsDiv);
    feedbackUI.appendChild(optionsDiv);
    return feedbackUI;
  }

  function checkAdBlocker() {
  const bait = document.createElement('div');
  bait.className = 'adsbox ad-banner sponsored ad-container ad-slot google-ad';
  bait.id = 'ad_test_banner';
  bait.style.cssText = 'width: 1px;height: 1px;position: absolute;left: -9999px;top: -9999px;z-index: -1;background: url("https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKDT-_rLZBABGA");
  ';
  document.body.appendChild(bait);

  setTimeout(() => {
    const style = window.getComputedStyle(bait);
    const isBlocked =
      !bait ||
      bait.offsetParent === null ||
      style.display === 'none' ||
      style.visibility === 'hidden' ||
      bait.clientHeight === 0 ||
      bait.clientWidth === 0;

    document.body.removeChild(bait);

    const adContainer = document.currentScript?.parentElement;
    if (!adContainer) return;

    if (isBlocked) {
      console.warn('Ad Blocker is ON — Ads removed');
      adContainer.innerHTML = ''; // ✅ Remove entire ad content cleanly
    } else {
      console.warn('Ad Blocker is OFF — Rendering ad');
      adContainer.innerHTML = ''; // Clear any stale or hidden ads
      const wrapper = document.createElement('div');
      wrapper.className = 'ad-wrapper';
      adContainer.appendChild(wrapper);
      renderAd(wrapper); // ✅ Always render fresh ad
    }
  }, 300);
}
// Run immediately
checkAdBlocker();

// Optional: recheck every few seconds (helps if user toggles ad blocker)
setInterval(checkAdBlocker, 3000);

})();
`;
}

