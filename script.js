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

/* ===== slider รูปคู่ (เวอร์ชัน responsive) ===== */
document.addEventListener("DOMContentLoaded", () => {
  let index = 0;
  const slides = document.querySelector(".slides");
  const images = document.querySelectorAll(".slides img");
  const slider = document.querySelector(".slider");

  if (!slides || images.length === 0) return;

  setInterval(() => {
    index++;
    if (index >= images.length) index = 0;

    const sliderWidth = slider.offsetWidth;
    slides.style.transform = `translateX(${-sliderWidth * index}px)`;
  }, 2500);
});
