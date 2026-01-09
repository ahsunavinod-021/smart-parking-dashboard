// Simulated sensor data
// 0 = available, 1 = occupied
let zoneA = [1, 0, 1, 0];
let zoneB = [0, 0, 1, 1];

let visits = 0;

function createSlots(zoneId, data, zoneName) {
  const zoneDiv = document.getElementById(zoneId);
  zoneDiv.innerHTML = "";

  data.forEach((slot, index) => {
    const div = document.createElement("div");
    div.className = "slot " + (slot ? "occupied" : "available");
    div.innerText = "Slot " + (index + 1);

    if (slot === 0) {
      div.onclick = () => showNavigation(zoneName, index + 1);
    }

    zoneDiv.appendChild(div);
  });
}
function showNavigation(zone, slot) {
  alert(
    "Navigate to:\n" +
    "Zone: " + zone + "\n" +
    "Slot: " + slot + "\n\n" +
    "Directions:\n" +
    "→ Enter parking\n" +
    "→ Turn left\n" +
    "→ Go straight to " + zone +
    "\n→ Slot " + slot
  );
}

  data.forEach((slot, index) => {
    const div = document.createElement("div");
    div.className = "slot " + (slot ? "occupied" : "available");
    div.innerText = "Slot " + (index + 1);
    zoneDiv.appendChild(div);
  });
}

function updateScore() {
  visits++;
  document.getElementById("points").innerText = visits;
  document.getElementById("discount").innerText =
    Math.floor(visits / 10) * 10 + "%";
}

// Navigation (Google Maps)
function navigate() {
  window.open("https://www.google.com/maps?q=parking+near+me");
}

// Initial load
createSlots("zoneA", zoneA,"A");
createSlots("zoneB", zoneB,"B");

// Simulate visit
updateScore();
