const card = document.getElementById("card");
const cardInner = document.getElementById("card-inner");

let startX = 0;
let isDragging = false;
let wasDragged = false;

// Desktop Click
card.addEventListener("click", () => {
  if (!wasDragged) {
    card.classList.toggle("flipped");
  }
  wasDragged = false;
});

// Mouse Drag
card.addEventListener("mousedown", (e) => {
  startX = e.clientX;
  isDragging = true;
});

card.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  let diff = e.clientX - startX;
  if (Math.abs(diff) > 50) {
    card.classList.toggle("flipped");
    isDragging = false;
    wasDragged = true;
  }
});

card.addEventListener("mouseup", () => {
  isDragging = false;
});

// Touch Swipe
card.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

card.addEventListener("touchmove", (e) => {
  const moveX = e.touches[0].clientX;
  const diff = moveX - startX;
  if (Math.abs(diff) > 50) {
    card.classList.toggle("flipped");
    startX = moveX;
  }
});
