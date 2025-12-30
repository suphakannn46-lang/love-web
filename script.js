let step = 0;

function changeText() {
  const text = document.getElementById("text");
  const music = document.getElementById("music");

  if (step === 0) {
    text.innerText = "ตั้งแต่มีเธอ โลกเราก็น่ารักขึ้น 💕";
    music.play();
  } 
  else if (step === 1) {
    text.innerText = "ขอบคุณที่อยู่ข้าง ๆ กันนะ 🥺";
  } 
  else {
    text.innerText = "รักเธอที่สุดเลย ❤️";
  }

  step++;
}

// ===== slider รูปคู่ =====
document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const total = images.length;
  const width = 280;

  setInterval(() => {
    index++;
    if (index >= total) index = 0;
    slides.style.transform = `translateX(${-width * index}px)`;
  }, 2500);
});
