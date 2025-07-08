(function () {
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
  };

  Object.entries(containers).forEach(([id, type]) => {
    const container = document.getElementById(id);
    if (container) {
      const script = document.createElement('script');
      script.src = `https://adscode.onrender.com/ads/${type}.js`;
      script.async = true;

      // Append script with onload hook to attach UI
      script.onload = () => {
        setTimeout(() => {
          enhanceAd(container);
        }, 100); // wait briefly to ensure ad content is rendered
      };

      container.appendChild(script);
    }
  });

  function enhanceAd(container) {
    const adBox = container.querySelector('.ad-box'); // Assuming ad HTML uses .ad-box

    if (!adBox) return;

    adBox.style.position = 'relative';

    const infoBtn = document.createElement('button');
    infoBtn.innerHTML = 'ℹ️';
    infoBtn.title = 'Why this ad?';
    infoBtn.style.position = 'absolute';
    infoBtn.style.top = '8px';
    infoBtn.style.right = '32px';
    infoBtn.style.background = 'transparent';
    infoBtn.style.border = 'none';
    infoBtn.style.cursor = 'pointer';
    infoBtn.onclick = () => {
      window.open('https://adssettings.google.com/whythisad', '_blank');
    };

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.title = 'Close ad';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '8px';
    closeBtn.style.right = '8px';
    closeBtn.style.background = 'transparent';
    closeBtn.style.border = 'none';
    closeBtn.style.cursor = 'pointer';
    closeBtn.onclick = () => showFeedbackUI(container, adBox);

    adBox.appendChild(infoBtn);
    adBox.appendChild(closeBtn);
  }

  function showFeedbackUI(container, adBox) {
    adBox.remove(); // remove the ad

    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'feedback-ui';
    feedbackDiv.style.padding = '12px';
    feedbackDiv.style.border = '1px solid #ccc';
    feedbackDiv.style.fontFamily = 'Arial, sans-serif';
    feedbackDiv.style.maxWidth = '400px';
    feedbackDiv.style.margin = '0 auto';
    feedbackDiv.style.background = '#f9f9f9';

    const msg = document.createElement('p');
    msg.textContent = 'Ad served by Your Network';
    msg.style.fontWeight = 'bold';

    const btnWhy = document.createElement('button');
    btnWhy.textContent = 'Why this ad?';
    btnWhy.style.marginRight = '10px';
    btnWhy.onclick = () => {
      window.open('https://adssettings.google.com/whythisad', '_blank');
    };

    const btnFeedback = document.createElement('button');
    btnFeedback.textContent = 'Send feedback';
    btnFeedback.onclick = () => showFeedbackOptions(feedbackDiv, container);

    feedbackDiv.appendChild(msg);
    feedbackDiv.appendChild(btnWhy);
    feedbackDiv.appendChild(btnFeedback);

    container.innerHTML = '';
    container.appendChild(feedbackDiv);
  }

  function showFeedbackOptions(feedbackDiv, container) {
    feedbackDiv.innerHTML = ''; // clear old content

    const options = [
      'Ad was inappropriate',
      'Not interested in this ad',
      'Ad covered content',
      'Seen this ad multiple times',
    ];

    options.forEach((text) => {
      const btn = document.createElement('button');
      btn.textContent = text;
      btn.style.display = 'block';
      btn.style.margin = '6px 0';
      btn.onclick = () => {
        showThankYou(container);
      };
      feedbackDiv.appendChild(btn);
    });
  }

  function showThankYou(container) {
    container.innerHTML = '';
    const thankYou = document.createElement('p');
    thankYou.textContent = 'Thanks for your feedback.';
    thankYou.style.padding = '12px';
    thankYou.style.fontWeight = 'bold';
    thankYou.style.fontFamily = 'Arial, sans-serif';
    container.appendChild(thankYou);
  }
})();
