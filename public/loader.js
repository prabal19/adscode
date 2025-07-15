(function () {
  // Map container IDs to ad script types
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
    'square-ad': 'square',
  };

  // === Ad Blocker Detection using image ===
  function checkAdBlocker(callback) {
    const baitImg = document.createElement('img');
    baitImg.src = "https://pagead2.googlesyndication.com/pagead/imgad?id=CICAgKDT-_rLZBABGA";
    baitImg.style.cssText = 'position:absolute; left:-9999px; top:-9999px; width:1px; height:1px;';
    
    baitImg.onload = () => {
      window.adBlockerStatus = false;
      console.warn("Ad Blocker is OFF");
      callback(false);
    };
    
    baitImg.onerror = () => {
      window.adBlockerStatus = true;
      console.warn("Ad Blocker is ON");
      callback(true);
    };
    
    document.body.appendChild(baitImg);
  }

  // === Main logic that runs only after ad blocker status is known ===
  function initAdScripts(isBlocked) {
    Object.entries(containers).forEach(([id, type]) => {
      const container = document.getElementById(id);

      if (!container) return;

      if (isBlocked) {
        container.innerHTML = '';
        container.style.display = 'none';
      } else {
        container.style.display = 'block';
        const script = document.createElement('script');
        script.src = `https://adscode.onrender.com/ads/${type}.js`;
        script.async = true;
        container.appendChild(script);
      }
    });
  }

  // === Kick off
  window.addEventListener('DOMContentLoaded', () => {
    checkAdBlocker((isBlocked) => {
      initAdScripts(isBlocked);
    });
  });
})();
