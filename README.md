![header](https://capsule-render.vercel.app/api?type=slice&color=0:1a0a00,50:ff6b35,100:1a0a00&height=160&text=Smart%20Parking%20Dashboard&fontSize=26&fontColor=ffffff&fontAlignY=70&animation=fadeIn&rotate=0)

<div align="center">

**a real-time parking lot dashboard · built for the browser · ready for IoT**

<br/>

![HTML](https://img.shields.io/badge/HTML5-ff6b35?style=flat-square&logoColor=white&logo=html5)
![CSS](https://img.shields.io/badge/CSS3-ff6b35?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ff6b35?style=flat-square&logo=javascript&logoColor=white)

</div>

<br/>

> 🅿️ *Parking management is a real problem on campuses. This dashboard gives drivers instant visibility into slot availability — no app download required.*

<br/>

### 🔶 &nbsp;what it does

A browser-based dashboard simulating a smart parking lot. Shows live slot availability across two zones, lets you toggle slots manually, navigate to the nearest free spot, and rewards frequent visitors with discounts.

Designed as a frontend prototype — built to eventually sit on top of real IoT sensor data from Arduino + IR sensors.

<br/>

### 🔶 &nbsp;features

| | |
|---|---|
| 🟢 Live slot grid | Zone A & Zone B with colour-coded free/occupied status |
| 👆 Click to toggle | Manually mark any slot as free or occupied |
| 📊 Stats bar | Real-time free count, occupied count & availability % |
| 📍 Smart navigation | Finds and highlights the nearest free slot instantly |
| 🔄 Auto-simulation | Mimics IoT sensor updates every 3s (toggle on/off) |
| 🎯 Reward system | Tracks visits and unlocks progressive discounts |
| 🪵 Activity log | Timestamped feed of every slot change and system event |

<br/>

### 🔶 &nbsp;run it locally

No install. No build step. Just:

```bash
git clone https://github.com/ahsunavinod-021/smart-parking-dashboard.git
```

Then double-click `index.html` — opens straight in your browser.

<br/>

### 🔶 &nbsp;how the simulation works

Slot states are stored as arrays (`0 = free, 1 = occupied`). A `setInterval` flips them randomly every 3 seconds — mimicking a live sensor feed:

```js
setInterval(() => {
  zones.zoneA = zones.zoneA.map(() => Math.random() > 0.5 ? 1 : 0);
  zones.zoneB = zones.zoneB.map(() => Math.random() > 0.5 ? 1 : 0);
  renderZones();
}, 3000);
```

Replace this block with real Arduino/WebSocket data to go fully live.

<br/>

### 🔶 &nbsp;what's next

- [ ] Arduino integration via Serial API or WebSockets
- [ ] Slot reservation with countdown timer
- [ ] Multi-floor / multi-zone support
- [ ] Backend for persistent user scores

<br/>

![footer](https://capsule-render.vercel.app/api?type=slice&color=0:1a0a00,50:ff6b35,100:1a0a00&height=100&section=footer&animation=fadeIn)
