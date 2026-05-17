![header](https://capsule-render.vercel.app/api?type=waving&color=0:0d1421,50:00d4aa,100:0d1421&height=140&section=header&text=Smart%20Parking%20Dashboard&fontSize=28&fontColor=ffffff&fontAlignY=55&animation=fadeIn)

<div align="center">

*A real-time parking lot availability dashboard with live sensor simulation.*

[![HTML](https://img.shields.io/badge/HTML-0d1421?style=for-the-badge&logo=html5&logoColor=e34f26)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-0d1421?style=for-the-badge&logo=css3&logoColor=1572b6)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-0d1421?style=for-the-badge&logo=javascript&logoColor=f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## what it does

A browser-based dashboard that simulates a smart parking lot management system. It shows real-time slot availability across two zones, lets you toggle slots manually, navigate to the nearest free slot, and tracks user visits with a discount reward system.

Built as a frontend prototype — designed to later connect to real IoT sensors (e.g. Arduino + IR sensors).

---

## features

- 🟢 **Live slot grid** — Zone A & Zone B with colour-coded free/occupied status
- 👆 **Click to toggle** — manually mark any slot as free or occupied
- 📊 **Stats bar** — live count of free slots, occupied slots, and availability %
- 📍 **Smart navigation** — finds and highlights the nearest available slot
- 🔄 **Auto-simulation** — mimics IoT sensor updates every 3 seconds (toggle on/off)
- 🎯 **User score system** — tracks visits and unlocks progressive discounts
- 🪵 **Activity log** — timestamped feed of every slot change and system event

---

## tech stack

| Layer | Tech |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 (custom properties, animations, grid layout) |
| Logic | Vanilla JavaScript |
| Fonts | Space Mono · DM Sans (Google Fonts) |

---

## run locally

No dependencies, no build step — just open the file:

```bash
# clone the repo
git clone https://github.com/ahsunavinod-021/smart-parking-dashboard.git

# open in browser
open index.html
```

Or just double-click `index.html` in your file explorer.

---

## how it works

Slot data is stored as a simple array per zone (`0 = free, 1 = occupied`). The simulation runs a `setInterval` every 3 seconds that randomly flips slot states — mimicking what a real IR sensor feed would push to the frontend.

```js
// sensor simulation (replace with real Arduino data later)
setInterval(() => {
  zones.zoneA = zones.zoneA.map(() => Math.random() > 0.5 ? 1 : 0);
  zones.zoneB = zones.zoneB.map(() => Math.random() > 0.5 ? 1 : 0);
  renderZones();
}, 3000);
```

The navigation logic scans zones in order and returns the first free slot found.

---

## roadmap

- [ ] Connect to Arduino via Serial API or WebSockets
- [ ] Add slot reservation with timer
- [ ] Multi-floor support
- [ ] Backend integration for persistent user scores

---

## why i built this

Parking management is a real problem on campuses and in urban areas. This project explores how a simple frontend interface could sit on top of IoT sensor data to give drivers instant visibility into slot availability — no app download required.

---

![footer](https://capsule-render.vercel.app/api?type=waving&color=0:0d1421,50:00d4aa,100:0d1421&height=80&section=footer&animation=fadeIn)
