# Six Motion Micro-interactions

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/six-motion-microinteractions/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A responsive, interactive recreation of the six UI motion concepts in the uploaded ~51.5-second video.

## Video concepts and visible specifications

1. **Bottom sheet — “Follow, then snap.”** Ride chooser (Comfort $14, XL $21); snaps to 146px with 7px overshoot.
2. **Tooltip — “Grow from the arrow.”** Tooltip scales 50% → 100%, originating from its arrow.
3. **Typing dots — “Wave, don't blink.”** Three dots, 100ms apart.
4. **Toast — “Slide in, stack up.”** New toast slides 64px; previous toast scales to 92%.
5. **File drop — “Lift, then land.”** File lifts to 110%, lands at 55%.
6. **Payment — “Burst on the win.”** 18 confetti pieces, peak at 460ms.

## Included interactions

- Select a ride or drag the bottom-sheet handle to expand/collapse.
- Click the information icon to reveal the tooltip.
- Typing indicator animates continuously; Replay typing refreshes it.
- Save triggers the toast confirmation.
- Drag the demo file into the drop area, or click to select a local file.
- Pay triggers a simulated success state and 18-piece confetti burst.

## Run locally

No dependencies or build step required:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Files

- `index.html` — all six demo sections
- `styles.css` — responsive UI and motion styling
- `app.js` — interactions and animation triggers

## Accuracy note

The video demonstrates UI motion concepts and numeric specifications, not original source code. This is a runnable implementation recreated from the visible screens and labels, not the original creator's HTML/CSS/JavaScript. Payment is a local animation only; no transaction is made. The file-drop demo shows the selected filename locally and does not upload it to a server.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
