const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let index = 0;

const slider = document.getElementById("slider");

function showImage() {
  slider.src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// Auto-slide every 3 seconds
setInterval(next, 3000);