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
/* รูป ส.ค.ส. */
.card-photo {
  width: 100%;
  max-width: 280px;
  border-radius: 20px;
  margin: 15px auto;
  display: block;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

/* Slider */
.slider {
  width: 280px;
  overflow: hidden;
  margin: 20px auto;
  border-radius: 20px;
}

.slides {
  display: flex;
  transition: transform 0.6s ease;
}

.slides img {
  width: 280px;
  height: 360px;
  object-fit: cover;
  border-radius: 20px;
}
