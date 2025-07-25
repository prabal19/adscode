(function () {
  // Map container IDs to ad script types
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
    'square-ad': 'square',
  };

  const AD_SERVER = "https://adscode-z00q.onrender.com/ads";

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

  // === Check if server is responding for a given ad script type ===
  function checkServerResponse(type) {
    return fetch(`${AD_SERVER}/${type}.js`, { method: 'HEAD' })
      .then(response => response.ok)
      .catch(() => false);
  }

  // === Load a single ad script after 2s delay if server is OK ===
  function injectAdScript(id, type) {
    const container = document.getElementById(id);
    if (!container) return;

    checkServerResponse(type).then(ok => {
      if (ok) {
        setTimeout(() => {
          const script = document.createElement('script');
          script.src = `${AD_SERVER}/${type}.js`;
          script.async = true;
          container.style.display = 'block';
          container.appendChild(script);
          console.log(`[AdLoader] Injected ${type}.js`);
        }, 2000);
      } else {
        container.innerHTML = '';
        container.style.display = 'none';
        console.warn(`[AdLoader] Skipped ${type}.js — server not responding`);
      }
    });
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
        injectAdScript(id, type);
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
