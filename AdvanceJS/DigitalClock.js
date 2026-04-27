function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zero
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  const time = `${hours}:${minutes}:${seconds}`;
  document.getElementById("clock").innerText = time;
}

// Update every second
setInterval(updateClock, 1000);

// Run immediately
updateClock();