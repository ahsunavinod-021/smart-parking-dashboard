<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Smart Parking Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <h1>🚗 Smart Parking Availability</h1>

  <!-- ZONE A -->
  <div class="zone">
    <h2>Zone A</h2>
    <div class="slots" id="zoneA"></div>
  </div>

  <!-- ZONE B -->
  <div class="zone">
    <h2>Zone B</h2>
    <div class="slots" id="zoneB"></div>
  </div>

  <!-- USER SCORE -->
  <div class="score">
    <h2>🎯 User Score</h2>
    <p>Visits: <span id="points">0</span></p>
    <p>Discount: <span id="discount">0%</span></p>
    <button onclick="addVisit()">Simulate Visit</button>
  </div>

  <!-- NAVIGATION -->
  <button class="nav-btn" onclick="navigate()">📍 Navigate to Slot</button>

  <script src="script.js"></script>
</body>
</html>
