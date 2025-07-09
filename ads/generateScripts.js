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

    const labelWrapper = document.createElement('div');
labelWrapper.style.position = 'absolute';
labelWrapper.style.top = '5px';
labelWrapper.style.right = '5px';
labelWrapper.style.display = 'flex';
labelWrapper.style.alignItems = 'center';
labelWrapper.style.gap = '4px';
labelWrapper.style.zIndex = '10';

// Info button wrapper
const infoWrapper = document.createElement('div');
infoWrapper.style.background = 'white';
infoWrapper.style.width = '15px';
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
closeWrapper.style.display = 'flex';
closeWrapper.style.alignItems = 'center';
closeWrapper.style.justifyContent = 'center';
closeWrapper.style.cursor = 'pointer';
closeWrapper.style.boxSizing = 'border-box';

const closeBtn = document.createElement('div');
closeBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="14" height="14"><path fill="#00aecd" stroke="#00aecd" stroke-width="1.25" d="M3.25 3.25l8.5 8.5m0-8.5l-8.5 8.5"/></svg>';

closeWrapper.appendChild(closeBtn);
const adLabel = document.createElement('span');
adLabel.textContent = 'Ads by Google';
adLabel.style.cssText = 'font-size:12px; color:#333; display:none; background:white';
infoWrapper.addEventListener('mouseenter', () => adLabel.style.display = 'inline');
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

    labelWrapper.appendChild(adLabel);
labelWrapper.appendChild(infoWrapper);
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
      whyBtn.href = 'https://adssettings.google.com/whythisad?source=display&reasons=ASp5-QBiEQRYmrCoOc5EnylgqpkOwA-7iaHC3031tUVW0hf41wXvsPTcXswCMzo0q-fehjQmQOtvtOGyjUOwuM5mqXqvKKEud8GIIRna-dc3ewD8xKO10JYc1SB4t_ax9Y5YZdTDbq4lZ887Bx0I3XBHMGWbEtNiI9sBhKRzrqBW6hlZZBfGi19wphFebyEWjfahRXCA-T8QmUtxy5B81B50b3Jr107ZsAFLhBHqrWrUT8o-xOFZCOeWCjYQ0jZr3RCsNexZjSjKULc-Ey6uT6vJzsekGczEviuJtuGCyJm5SacbMrWRxTKVRyqUkKRVMdUkSiSe_TGLjTXNvVnQajtySqf-WRIhkRD4FRRuji6VQpbFbgRUef-5_94xlw9zMixDWMp_iBk_bZt00dh0B7xbqGReQF8OgAlAUrn7u2-bBAtv5fpcvOJY-HyelGYyFErVUn8CNtp_MFIPvXyjTKkdLX5T-zBh0zSL6fbdcMYSC6qb9J-59Wa4sha_rhOKM7MHLuTRe9a-UFea3EOuGx8GHWKI7H80Lfkqh8h6IsVIKlDN2c-jgRtvXZKQu_WrSRpORk1CtTIFABv7y-ZPn5Di-BMuRjqy2dyEf7fOXeQ3-t0waPQSEceOd_o3WGMxjIl53xMJ994cNdtgUw3i3vMrdoaSuIShs9nZoRsm8JDZK4yCvRvU5nuVLeEcKHvoj2GH5nYq9vPjdH9siuvq5IjA09hKQkCjImhoAEDED345xL5yrQDlUGvjnj86lfohZA8nyRS9S5DyQaYGrXoFZOBqrntbH7tmqdlTGFnckCUFpfmSuReTEzW5T5iaRKlSOqweDQeXQhq30WgAqKwoNGTDnWeUWDUhOCHMrwbQzOEWK4ZiGMShiFd2HcOtYB5EiY1w6BQXnv5dZ6UC5_evhhiJm01y8j4PbKAK66JGKAFEOzcdBMDrGwUHBqs_fIeILXYFenxJ90dxTH0-eadystjPmaV0VTIHH8wHYAuJUzH7pFw0j012BmP7lx4N4O2laBDuWHcBql3UIiGvjqOyZvsM6oWXU3LSq11M_ZJpqpn5ZpRnXPTNtQGbsF7G5ljpNWYuNzqTla5Z7TOcS8gleh-Coaz5ecJjsu7LpVY5KlzVNhNj2XOnL3T1Ly8qCx-R9bYVrdt45Y9oCEYs3soYHAwDgWpd2NXi8IURj1mC00N3POMRcQ3m8Mx4Lm38fopMnJsLz8cppz0MnvsgkSGiWinJP6_YjZdaxrGnTDy6xAwT59WnRwRWpRUtuH_4XVdVZ7tx7q3WUj_NblGcI4bpDO828mDt7yigk2onYlHy7zev7UUf-nVlOai-O_H3dUj8NlcTw_OjK5tbMuuI11_d7V4FBVNGswsTSPbotL2hjnlB3b7FigFHWivNJ7ihP3YMwv3rbS27_kbsFkvzmL3ZM0MCcsVPHyVscx7FcJNrEPlK9ACbikI4SgyIKQlhPGothk8zmCfG99YmTwm-Hcg0DHAcncgGc0mQKUYQzrE&opi=122715837';
      whyBtn.target = '_blank';
      whyBtn.textContent = 'Why this ad?';
      whyBtn.style.cssText = 'margin:5px; padding:8px 9.6px; border:1px solid #ccc; border-radius:4px; background:#fff; color: #9e9ea6; cursor:pointer; font-weight:500;';
      whyBtn.onmouseenter = () => whyBtn.style.background = '#f1f1f1';
      whyBtn.onmouseleave = () => whyBtn.style.background = 'white';

      // Send feedback button
      const sendFbBtn = document.createElement('button');
      sendFbBtn.textContent = 'Send feedback';
      sendFbBtn.style.cssText = 'padding:8px 9.6px; border:none; border-radius:4px; background:#4285f5; color:white; cursor:pointer; font-weight:500;';
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
        optBtn.style.cssText = 'margin:4px; padding:6px 10px; border:1px solid #ccc; border-radius:4px; background:white; cursor:pointer; font-size:14px; color:#4285f4';
        optBtn.onmouseenter = () => btn.style.background = '#f1f1f1';
        optBtn.onmouseleave = () => btn.style.background = 'white';

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
