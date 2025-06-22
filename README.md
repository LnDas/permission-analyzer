# Permission Analyzer

## Why I Built This

As a developer advocating for user privacy and digital transparency, I created **Permission Analyzer**, a lightweight **Chrome permission logger**, to provide a transparent view of browser permissions in real time. In an age where **camera, mic, or location access** often happens silently, this browser privacy tool helps users stay informed about what websites are requesting — without compromising their privacy.

Built with simplicity, performance, and security in mind, this extension reflects my ongoing commitment to **open-source tools** that prioritize user trust and control.

---

## Privacy & Security

This extension prioritizes privacy:

- No external requests  
- No analytics  
- No tracking  
- All data stays in your browser (via `chrome.storage.local`)  
- The source code is 100% open source and auditable  
- You're in full control  

---

## 📦 About the Extension

**Permission Analyzer** is a privacy-focused **browser extension** that logs when websites access sensitive browser permissions like:

- Location  
- Microphone  
- Camera  
- Clipboard Read  
- Notifications  

Each permission access is logged with a timestamp and stored only on your device.  
You can easily export your logs as a **Markdown file** for records, audits, or reporting.

It’s an ideal tool to **track camera and mic access in Chrome**, and monitor how often sites interact with sensitive browser capabilities.

---

## 💡 What Makes It Different

Unlike traditional permission managers or privacy blockers, **Permission Analyzer** is designed to give you visibility — not just control. Here's how it's different:

- **Logs real-time permission access events** like camera, mic, location, etc.  
- **Timestamped history** lets you track when a website accessed sensitive permissions  
-  **Works entirely offline** — no cloud, no data sync, no external requests  
-  **Markdown export** for easy documentation, reporting, or analysis  
-  Built with **vanilla JavaScript** — no frameworks or trackers  
-  Open-source, lightweight, and transparent — fully auditable on GitHub

Most other tools block or manage permissions, but few (if any) give you a complete log of how and when your browser permissions are used.  
**Permission Analyzer fills that gap** — making it a unique browser privacy tool.

---
## ⚙️ How It Works

- When a website requests a permission, the extension checks its status using Chrome’s **Permissions API**.
- If access is **granted** or **denied** (not just prompted), it logs the permission name and timestamp.
- Logs are shown in a simple popup UI.
- You can export logs to Markdown with one click.

This extension is especially useful to **log site permission usage** over time, something most extensions don’t offer.

---

## 📁 Installation (Manual)

1. Download or clone this repository  
   ```bash
   git clone https://github.com/LnDas/permission-analyzer.git
2. Go to `chrome://extensions/`

3. Enable Developer mode

4. Click Load unpacked and select the extension folder

5. Done! ✅

---

## 📄 License
This project is open-source under the [MIT License](LICENSE)

---

## 🤝 Contributions
Contributions are welcome!
Whether it's a bug fix, feature request, or documentation improvement — feel free to open an issue or pull request.
