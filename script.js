// ===============================
// SLOT DATA (0 = FREE, 1 = OCCUPIED)
// ===============================
let zones = {
  zoneA: [0, 0, 0, 0],
  zoneB: [0, 0, 0, 0]
};

let visits = 0;

// ===============================
// RENDER SLOTS
// ===============================
function renderZones() {
  Object.keys(zones).forEach(zoneId => {
    const container = document.getElementById(zoneId);
    container.innerHTML = "";

    zones[zoneId].forEach((status, index) => {
      const slot = document.createElement("div");
      slot.classList.add("slot");
      slot.classList.add(status === 1 ? "occupied" : "free");
      slot.innerText = `Slot ${index + 1}`;
      container.appendChild(slot);
    });
  });
}

// ===============================
// USER SCORE SYSTEM
// ===============================
function addVisit() {
  visits++;
  document.getElementById("points").innerText = visits;
  document.getElementById("discount").innerText =
    Math.min(Math.floor(visits / 10) * 10, 100) + "%";
}

// ===============================
// INTERNAL PARKING NAVIGATION
// ===============================
function navigate() {
  let found = false;

  Object.keys(zones).forEach(zone => {
    zones[zone].forEach((slot, index) => {
      if (slot === 0 && !found) {
        alert(`Navigate to ${zone.toUpperCase()} - Slot ${index + 1}`);
        found = true;
      }
    });
  });

  if (!found) {
    alert("Parking Full ❌");
  }
}

// ===============================
// DEMO SENSOR SIMULATION
// (Replace this with Arduino data later)
// ===============================
setInterval(() => {
  zones.zoneA = zones.zoneA.map(() => Math.random() > 0.5 ? 1 : 0);
  zones.zoneB = zones.zoneB.map(() => Math.random() > 0.5 ? 1 : 0);
  renderZones();
}, 3000);

// Initial Load
renderZones();
