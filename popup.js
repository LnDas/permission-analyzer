document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('log-list');
  const exportBtn = document.getElementById('export');
  const clearBtn = document.getElementById('clear');

  const renderLogs = () => {
    list.innerHTML = '';
    chrome.storage.local.get({ logs: [] }, ({ logs }) => {
      logs.forEach(log => {
        const li = document.createElement('li');
        li.textContent = log;
        list.appendChild(li);
      });
    });
  };

  renderLogs();

  exportBtn.onclick = () => {
    chrome.storage.local.get({ logs: [] }, ({ logs }) => {
      const markdown = logs.map(log => `- ${log}`).join('\n');
      const blob = new Blob([markdown], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'permission-logs.md';
      a.click();
      URL.revokeObjectURL(url);
    });
  };

  clearBtn.onclick = () => {
    chrome.storage.local.set({ logs: [] }, renderLogs);
  };
});
