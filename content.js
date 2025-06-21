(async () => {
  const logPermission = async (name) => {
    try {
      const status = await navigator.permissions.query({ name });
      if (status.state !== 'prompt') {
        const timestamp = new Date().toLocaleString();
        const url = location.origin;
        const log = `[${timestamp}] ${url}\n- ${name}: ${status.state}`;
        chrome.storage.local.get({ logs: [] }, ({ logs }) => {
          logs.push(log);
          chrome.storage.local.set({ logs });
        });
      }
    } catch {}
  };

  const permissions = [
    'geolocation',
    'notifications',
    'camera',
    'microphone',
    'clipboard-read'
  ];

  permissions.forEach(logPermission);
})();
