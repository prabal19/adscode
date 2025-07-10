(function () {
  const containers = {
    'full-ad': 'full',
    'sidebar-ad': 'sidebar',
    'below-ad': 'below',
    'square-ad': 'square',
  };

  Object.entries(containers).forEach(([id, type]) => {
    const el = document.getElementById(id);
    if (el) {
      const script = document.createElement('script');
      script.src = `https://adscode.onrender.com/ads/${type}.js`;
      script.async = true;
      el.appendChild(script);
    }
  });
})();
