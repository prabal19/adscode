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
    let originalAdClone = null; // To store original ad node
let backState = null;       // To track where we are for back navigation

    const adContainer = document.currentScript.parentElement;

    const wrapper = document.createElement('div');
    wrapper.style.width = '${adStyle.width}';
    wrapper.style.maxWidth = '${adStyle.maxWidth}';
    wrapper.style.height = '${adStyle.height}';
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

// Info button wrapper
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
infoBtn.onclick = function() {
  window.open('https://adssettings.google.com/whythisad?source=display&reasons=ASp5-QBiEQRYmrCoOc5EnylgqpkOwA-7iaHC3031tUVW0hf41wXvsPTcXswCMzo0q-fehjQmQOtvtOGyjUOwuM5mqXqvKKEud8GIIRna-dc3ewD8xKO10JYc1SB4t_ax9Y5YZdTDbq4lZ887Bx0I3XBHMGWbEtNiI9sBhKRzrqBW6hlZZBfGi19wphFebyEWjfahRXCA-T8QmUtxy5B81B50b3Jr107ZsAFLhBHqrWrUT8o-xOFZCOeWCjYQ0jZr3RCsNexZjSjKULc-Ey6uT6vJzsekGczEviuJtuGCyJm5SacbMrWRxTKVRyqUkKRVMdUkSiSe_TGLjTXNvVnQajtySqf-WRIhkRD4FRRuji6VQpbFbgRUef-5_94xlw9zMixDWMp_iBk_bZt00dh0B7xbqGReQF8OgAlAUrn7u2-bBAtv5fpcvOJY-HyelGYyFErVUn8CNtp_MFIPvXyjTKkdLX5T-zBh0zSL6fbdcMYSC6qb9J-59Wa4sha_rhOKM7MHLuTRe9a-UFea3EOuGx8GHWKI7H80Lfkqh8h6IsVIKlDN2c-jgRtvXZKQu_WrSRpORk1CtTIFABv7y-ZPn5Di-BMuRjqy2dyEf7fOXeQ3-t0waPQSEceOd_o3WGMxjIl53xMJ994cNdtgUw3i3vMrdoaSuIShs9nZoRsm8JDZK4yCvRvU5nuVLeEcKHvoj2GH5nYq9vPjdH9siuvq5IjA09hKQkCjImhoAEDED345xL5yrQDlUGvjnj86lfohZA8nyRS9S5DyQaYGrXoFZOBqrntbH7tmqdlTGFnckCUFpfmSuReTEzW5T5iaRKlSOqweDQeXQhq30WgAqKwoNGTDnWeUWDUhOCHMrwbQzOEWK4ZiGMShiFd2HcOtYB5EiY1w6BQXnv5dZ6UC5_evhhiJm01y8j4PbKAK66JGKAFEOzcdBMDrGwUHBqs_fIeILXYFenxJ90dxTH0-eadystjPmaV0VTIHH8wHYAuJUzH7pFw0j012BmP7lx4N4O2laBDuWHcBql3UIiGvjqOyZvsM6oWXU3LSq11M_ZJpqpn5ZpRnXPTNtQGbsF7G5ljpNWYuNzqTla5Z7TOcS8gleh-Coaz5ecJjsu7LpVY5KlzVNhNj2XOnL3T1Ly8qCx-R9bYVrdt45Y9oCEYs3soYHAwDgWpd2NXi8IURj1mC00N3POMRcQ3m8Mx4Lm38fopMnJsLz8cppz0MnvsgkSGiWinJP6_YjZdaxrGnTDy6xAwT59WnRwRWpRUtuH_4XVdVZ7tx7q3WUj_NblGcI4bpDO828mDt7yigk2onYlHy7zev7UUf-nVlOai-O_H3dUj8NlcTw_OjK5tbMuuI11_d7V4FBVNGswsTSPbotL2hjnlB3b7FigFHWivNJ7ihP3YMwv3rbS27_kbsFkvzmL3ZM0MCcsVPHyVscx7FcJNrEPlK9ACbikI4SgyIKQlhPGothk8zmCfG99YmTwm-Hcg0DHAcncgGc0mQKUYQzrE&opi=122715837', '_blank');
};

infoWrapper.appendChild(infoBtn);

// Close button wrapper
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
const adLabel = document.createElement('div');
adLabel.textContent = 'Ads by Google';
adLabel.style.cssText = 'font-size:10px; color:#333; display:none; background:white; width:74px;height:15px; line-height:15px; padding:0 4px; border-bottom-left-radius:4px; white-space:nowrap; box-sizing:border-box;font-weight:500;';

infoWrapper.addEventListener('mouseenter', () => adLabel.style.display = 'inline-block');
infoWrapper.addEventListener('mouseleave', () => adLabel.style.display = 'none');

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

    infoContainer.appendChild(adLabel);     // label on left
    infoContainer.appendChild(infoWrapper); 
    labelWrapper.appendChild(infoContainer);
    labelWrapper.appendChild(closeWrapper);

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
      feedbackUI.style.borderRadius = '0px';
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
      whyBtn.href = 'https://adssettings.google.com/whythisad?source=display&reasons=ASp5-QBiEQRYmrCoOc5EnylgqpkOwA-7iaHC3031tUVW0hf41wXvsPTcXswCMzo0q-fehjQmQOtvtOGyjUOwuM5mqXqvKKEud8GIIRna-dc3ewD8xKO10JYc1SB4t_ax9Y5YZdTDbq4lZ887Bx0I3XBHMGWbEtNiI9sBhKRzrqBW6hlZZBfGi19wphFebyEWjfahRXCA-T8QmUtxy5B81B50b3Jr107ZsAFLhBHqrWrUT8o-xOFZCOeWCjYQ0jZr3RCsNexZjSjKULc-Ey6uT6vJzsekGczEviuJtuGCyJm5SacbMrWRxTKVRyqUkKRVMdUkSiSe_TGLjTXNvVnQajtySqf-WRIhkRD4FRRuji6VQpbFbgRUef-5_94xlw9zMixDWMp_iBk_bZt00dh0B7xbqGReQF8OgAlAUrn7u2-bBAtv5fpcvOJY-HyelGYyFErVUn8CNtp_MFIPvXyjTKkdLX5T-zBh0zSL6fbdcMYSC6qb9J-59Wa4sha_rhOKM7MHLuTRe9a-UFea3EOuGx8GHWKI7H80Lfkqh8h6IsVIKlDN2c-jgRtvXZKQu_WrSRpORk1CtTIFABv7y-ZPn5Di-BMuRjqy2dyEf7fOXeQ3-t0waPQSEceOd_o3WGMxjIl53xMJ994cNdtgUw3i3vMrdoaSuIShs9nZoRsm8JDZK4yCvRvU5nuVLeEcKHvoj2GH5nYq9vPjdH9siuvq5IjA09hKQkCjImhoAEDED345xL5yrQDlUGvjnj86lfohZA8nyRS9S5DyQaYGrXoFZOBqrntbH7tmqdlTGFnckCUFpfmSuReTEzW5T5iaRKlSOqweDQeXQhq30WgAqKwoNGTDnWeUWDUhOCHMrwbQzOEWK4ZiGMShiFd2HcOtYB5EiY1w6BQXnv5dZ6UC5_evhhiJm01y8j4PbKAK66JGKAFEOzcdBMDrGwUHBqs_fIeILXYFenxJ90dxTH0-eadystjPmaV0VTIHH8wHYAuJUzH7pFw0j012BmP7lx4N4O2laBDuWHcBql3UIiGvjqOyZvsM6oWXU3LSq11M_ZJpqpn5ZpRnXPTNtQGbsF7G5ljpNWYuNzqTla5Z7TOcS8gleh-Coaz5ecJjsu7LpVY5KlzVNhNj2XOnL3T1Ly8qCx-R9bYVrdt45Y9oCEYs3soYHAwDgWpd2NXi8IURj1mC00N3POMRcQ3m8Mx4Lm38fopMnJsLz8cppz0MnvsgkSGiWinJP6_YjZdaxrGnTDy6xAwT59WnRwRWpRUtuH_4XVdVZ7tx7q3WUj_NblGcI4bpDO828mDt7yigk2onYlHy7zev7UUf-nVlOai-O_H3dUj8NlcTw_OjK5tbMuuI11_d7V4FBVNGswsTSPbotL2hjnlB3b7FigFHWivNJ7ihP3YMwv3rbS27_kbsFkvzmL3ZM0MCcsVPHyVscx7FcJNrEPlK9ACbikI4SgyIKQlhPGothk8zmCfG99YmTwm-Hcg0DHAcncgGc0mQKUYQzrE&opi=122715837';
      whyBtn.target = '_blank';
      whyBtn.style.cssText = 'display:inline-flex; gap:4px; white-space:no-wrap; padding:8px 9.6px; text-decoration:none; border:1px solid #ccc; align-item:center; border-radius:2px; background:#fff; color: #9e9ea6; cursor:pointer; font-weight:500;box-shadow:0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26)';


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

      // Send feedback button
      const sendFbBtn = document.createElement('button');
      sendFbBtn.textContent = 'Send feedback';
      sendFbBtn.style.cssText = 'display:inline:block;font-size:16px;padding:8px 9.6px; border:none; border-radius:2px; box-shadow:0 0 2px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.26); background:#4285f5; color:white; cursor:pointer; font-weight:500;';
      sendFbBtn.onmouseenter = () => sendFbBtn.style.background = '#1669c1';
      sendFbBtn.onmouseleave = () => sendFbBtn.style.background = '#1a73e8';

      
      buttonsDiv.appendChild(sendFbBtn);
      buttonsDiv.appendChild(whyBtn);

      const attributionWrapper = document.createElement('div');
attributionWrapper.style.cssText = 'display:inline-block; line-height:1.28em; font-size:1.2em; color:#777; font-family:arial,sans-serif;';

const backButtonWrapper = document.createElement('div');
backButtonWrapper.style.cssText = 'top:4px;left:4px;display:inline-block;position:absolute;color:black;font-size:15px;line-height:15px;opacity:0.5;height:15px;width:15px;user-select:none;cursor:pointer;z-index:2;';
backButtonWrapper.setAttribute('id', 'menu-dismiss');

// SVG Arrow Icon
const backSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
backSVG.setAttribute('viewBox', '0 0 24 24');
backSVG.style.cssText = 'width:100%;height:100%;';
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('class', 'native-arrow');
path.setAttribute('d', 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z');
backSVG.appendChild(path);
backButtonWrapper.appendChild(backSVG);
feedbackUI.appendChild(backButtonWrapper);


backButtonWrapper.onclick = () => {
  if (backState === 'feedback-options') {
    // Go back to main feedback screen
    optionsDiv.style.display = 'none';
    buttonsDiv.style.display = 'flex';
    attributionWrapper.style.display = 'inline-block';
    backState = 'main';
  } else if (backState === 'main') {
    // Restore the original ad
    if (originalAdClone) {
      const newAd = originalAdClone.cloneNode(true); // Safe restoration
      wrapper.replaceWith(newAd);

      // Hide back button (not needed on ad screen)
      const backBtn = document.getElementById('menu-dismiss');
      if (backBtn) backBtn.style.display = 'none';

      backState = null;
    }
  }
};




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

// Append wherever needed
feedbackUI.appendChild(attributionWrapper);

      feedbackUI.appendChild(buttonsDiv);

      // Feedback options container (hidden initially)
      const optionsDiv = document.createElement('div');
      optionsDiv.style.marginTop = '12px';
      optionsDiv.style.display = 'none';
      optionsDiv.style.flexWrap = 'wrap';
      optionsDiv.style.justifyContent = 'center';
      optionsDiv.style.gap = '8px';
      optionsDiv.style.maxWidth = '100%';


    const options = [
      'Ad was inappropriate',
      'Seen this ad multiple times',
      'Ad covered content',
      'Not interested in this ad'
    ];


      options.forEach(optionText => {
        const optBtn = document.createElement('button');
        optBtn.textContent = optionText;
        optBtn.style.cssText = 'flex: 1 1 auto;width: 90px;height:50px; padding: 1px 5px ;text-align:center; line-height:14px;border: 1px solid #ccc;border-radius: 2px;background: white;color: #4285f4;font-size: 12px;font-weight: 500;cursor: pointer;box-shadow: 0 1px 3px rgba(0,0,0,0.1);transition: box-shadow 0.2s ease, background 0.2s ease;white-space: normal;';
        optBtn.onmouseenter = () => {
          optBtn.style.boxShadow = '0 2px 6px rgba(0,0,0,0.2)';
          optBtn.style.background = '#f8f9fa';
        };
        optBtn.onmouseleave = () => {
          optBtn.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
          optBtn.style.background = 'white';
        };

        optBtn.onclick = () => {
          feedbackUI.innerHTML = '<div style="font-size:14px; padding: 12px;">Thanks. Feedback improves Google Ads!</div>';
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
        attributionWrapper.style.display = 'none';
        backState = 'feedback-options';
      };  
      return feedbackUI;
    }
closeBtn.onclick = () => {
  const width = wrapper.offsetWidth;
  const height = wrapper.offsetHeight;

  // Store the original ad as a clone (deep copy)
  originalAdClone = wrapper.cloneNode(true);

  // Clear wrapper and insert feedback UI
  wrapper.innerHTML = '';
  wrapper.appendChild(createFeedbackUI(width, height));

  // Set backState to 'main' since we're now on main feedback screen
  backState = 'main';
};
  })();
  `;
}
