(function () {
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
    'square-ad': 'square',
  };

  // Track status to avoid repeat rendering/removal
  let lastStatus = null;

  // Load ad script for a given type
  function loadAdScript(type, containerId) {
    const el = document.getElementById(containerId);
    if (!el) return;

    const existingScript = el.querySelector(`script[data-type="${type}"]`);
    if (existingScript) return; // Prevent double loading

    const script = document.createElement('script');
    script.src = `https://adscode.onrender.com/ads/${type}.js`;
    script.async = true;
    script.setAttribute('data-type', type);
    el.appendChild(script);
  }

  // Detect ad blocker and handle rendering/removal
  function checkAdBlocker() {
    const bait = document.createElement('div');
    bait.className = 'adsbox ad-banner sponsored ad-container ad-slot google-ad';
    bait.id = 'ad_test_banner';
    bait.style.cssText = `
      width: 1px;
      height: 1px;
      position: absolute;
      left: -9999px;
      top: -9999px;
      z-index: -1;
      background: url("https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKDT-_rLZBABGA");
    `;

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

      if (lastStatus === isBlocked) return;
      lastStatus = isBlocked;

      console.warn('Ad Blocker is ' + (isBlocked ? 'ON' : 'OFF'));

      Object.entries(containers).forEach(([id, type]) => {
        const adContainer = document.getElementById(id);
        if (!adContainer) return;

        if (isBlocked) {
          adContainer.innerHTML = ''; // Cleanly remove ad
        } else {
          if (adContainer.innerHTML.trim() === '') {
            // Fresh render
            const wrapper = document.createElement('div');
            wrapper.className = 'ad-wrapper';
            adContainer.appendChild(wrapper);

            // Load ad script for the first time
            loadAdScript(type, id);

            // If script is already loaded, render ad immediately
            if (typeof renderAd === 'function') {
              renderAd(wrapper); // Global from each ad script
            }
          }
        }
      });
    }, 300);
  }

  // Initial detection and loading
  checkAdBlocker();

  // Periodic check for toggling ad blocker
  setInterval(checkAdBlocker, 2000);
})();
