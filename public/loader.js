(function () {
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
  };

  const feedbackOptions = [
    'Ad was inappropriate',
    'Not interested in this ad',
    'Ad covered content',
    'Seen this ad multiple times',
  ];

  function createAdUI(type, ad) {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.border = '1px solid #ccc';
    container.style.padding = '10px';
    container.style.margin = '10px auto';
    container.style.maxWidth = type === 'sidebar' ? '320px' : '600px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.background = '#fff';

    // Info + Close Buttons Container
    const btnContainer = document.createElement('div');
    btnContainer.style.position = 'absolute';
    btnContainer.style.top = '6px';
    btnContainer.style.right = '6px';
    btnContainer.style.zIndex = '10';
    btnContainer.style.display = 'flex';
    btnContainer.style.gap = '4px';

    // Info button
    const infoBtn = document.createElement('button');
    infoBtn.innerHTML = 'ℹ️';
    infoBtn.style.border = 'none';
    infoBtn.style.background = 'transparent';
    infoBtn.style.cursor = 'pointer';
    infoBtn.title = 'Why this ad?';
    infoBtn.onclick = () => {
      window.open('https://adssettings.google.com/whythisad', '_blank');
    };

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✖️';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'transparent';
    closeBtn.style.cursor = 'pointer';
    closeBtn.title = 'Close ad';

    btnContainer.appendChild(infoBtn);
    btnContainer.appendChild(closeBtn);
    container.appendChild(btnContainer);

    // Ad image
    const img = document.createElement('img');
    img.src = ad.image;
    img.alt = ad.title;
    img.style.width = '100%';
    img.style.borderRadius = '4px';
    container.appendChild(img);

    // Ad title
    const title = document.createElement('h4');
    title.textContent = ad.title;
    container.appendChild(title);

    // Ad description
    const desc = document.createElement('p');
    desc.textContent = ad.description;
    container.appendChild(desc);

    // CTA
    const link = document.createElement('a');
    link.href = ad.link;
    link.target = '_blank';
    link.textContent = 'Learn more';
    link.style.color = '#1a73e8';
    container.appendChild(link);

    // Feedback UI
    const feedbackUI = document.createElement('div');
    feedbackUI.style.display = 'none';
    feedbackUI.style.marginTop = '10px';
    feedbackUI.style.borderTop = '1px solid #ddd';
    feedbackUI.style.paddingTop = '8px';

    const feedbackText = document.createElement('p');
    feedbackText.textContent = 'Ad served by Flytant';
    feedbackText.style.fontSize = '12px';
    feedbackText.style.marginBottom = '8px';
    feedbackUI.appendChild(feedbackText);

    const whyBtn = document.createElement('button');
    whyBtn.textContent = 'Why this ad?';
    whyBtn.onclick = () => window.open('https://adssettings.google.com/whythisad', '_blank');
    whyBtn.style.marginRight = '10px';

    const feedbackBtn = document.createElement('button');
    feedbackBtn.textContent = 'Send feedback';
    feedbackBtn.onclick = () => {
      feedbackOptions.forEach(option => {
        const optBtn = document.createElement('button');
        optBtn.textContent = option;
        optBtn.style.display = 'block';
        optBtn.style.marginTop = '6px';
        optBtn.onclick = () => {
          feedbackUI.innerHTML = '<p style="font-size: 14px;">Thanks for your feedback!</p>';
          setTimeout(() => {
            container.remove(); // hide ad
          }, 1500);
        };
        feedbackUI.appendChild(optBtn);
      });
    };

    feedbackUI.appendChild(whyBtn);
    feedbackUI.appendChild(feedbackBtn);
    container.appendChild(feedbackUI);

    // Show feedback on close
    closeBtn.onclick = () => {
      feedbackUI.style.display = 'block';
    };

    return container;
  }

  function loadScript(url, onLoad) {
    const s = document.createElement('script');
    s.src = url;
    s.async = true;
    s.onload = onLoad;
    document.body.appendChild(s);
  }

  Object.entries(containers).forEach(([id, type]) => {
    const el = document.getElementById(id);
    if (el) {
      loadScript(`https://adscode.onrender.com/ads/${type}.js`, () => {
        const adsArray = window[`${type}Ads`] || [];
        if (adsArray.length > 0) {
          const ad = adsArray[Math.floor(Math.random() * adsArray.length)];
          const adEl = createAdUI(type, ad);
          el.innerHTML = '';
          el.appendChild(adEl);
        }
      });
    }
  });
})();
