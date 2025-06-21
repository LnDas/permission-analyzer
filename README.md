## Why I Built This

As a developer advocating for user privacy and digital transparency, I created **Permission Analyzer** to provide a transparent view of browser permissions in real time. In an age where data access often happens silently, this tool helps users stay informed about what websites are requesting—without compromising their privacy. Built with simplicity, performance, and security in mind, this extension reflects my ongoing commitment to open-source solutions that prioritize user trust and control.

## Privacy & Security

This extension prioritizes privacy:

- No external requests
- No analytics
- No tracking
- All data stays in your browser (via `chrome.storage.local`)

The source code is 100% open source and auditable. You're in full control.

---

## 📦 About the Extension

**Permission Analyzer** is a privacy-focused Chrome extension that logs when websites access sensitive browser permissions like:

-  Location
-  Microphone
-  Camera
-  Clipboard Read
-  Notifications

Each permission access is logged with a timestamp and stored **only on your device**. You can easily export your logs as a Markdown file for records, analysis, or reporting.

---

## ⚙️ How It Works

1. When a website requests a permission, the extension checks its status.
2. If access is **granted** or **denied** (not just "prompted"), it logs the permission name and timestamp.
3. Logs are shown in a simple popup UI.
4. You can export logs to Markdown with one click.

---

## 📁 Installation (Manual)

1. Download or clone this repository
2. Go to `chrome://extensions/`
3. Enable **Developer mode**
4. Click **Load unpacked** and select the extension folder
5. Done! 🎉

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).

---

## 🤝 Contributions

Contributions are welcome! Whether it's a bug fix, feature request, or documentation improvement — feel free to open an issue or pull request.
