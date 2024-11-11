// ข้อความการทำนายสำหรับแต่ละใบ
const cardMessages = [
  "ช่วงนี้ระวังเรื่องการสื่อสารกับคนรอบข้าง",
  "การเงินมีแววได้โชคจากคนไกล้ตัว",
  "ระวังทะเลาะเบาะแว้งกับคนไกล้ตัว",
  "ระวังอุบัติเหตุเล็กน้อย",
  "ความรักได้คนดีๆเข้ามาแต่เราอาจไม่อบอุ่น",
  "มีโอกาสพบเจอกับคนที่เรารู้สึกอบอุ่นด้วยสบายใจ",
  "มีคนเอ็นดูได้พบกับคนที่เทคแคร์",
  "จะเจอคนที่มีทัศนคติแบบเดียวกันชอบอะไรเหมือนกัน",
  "ระวังคนเจ้าชู้จะเข้ามาทำให้รู้สึกหวั่นไหว",
  "จะได้พูดคุยกับคนคนหนึ่งที่อยู่ดีๆเข้าหาคุยกันถูกคอ"
];

// สร้างการ์ดแต่ละใบ
function createCard(index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <div class="front">${cardMessages[index]}</div>
    <div class="back">การ์ดที่ ${index + 1}</div>
  `;

  // เมื่อคลิกที่การ์ด จะสุ่มข้อความและแสดงใน popup
  card.onclick = function() {
    showPopup(cardMessages[index]);
  };

  return card;
}

// เพิ่มการ์ดทั้งหมดลงใน cardsContainer
function loadCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = ''; // ลบการ์ดเก่าก่อน

  for (let i = 0; i < 10; i++) {
    const card = createCard(i);
    cardsContainer.appendChild(card);
  }
}

// ฟังก์ชันสุ่มการ์ด
function shuffleCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  const cards = Array.from(cardsContainer.getElementsByClassName('card'));

  // สลับตำแหน่งการ์ด
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    cards[i].style.order = j;
  }

  // รีเซ็ทการ์ดทั้งหมดให้กลับไปคว่ำ
  cards.forEach(card => {
    card.classList.remove('open');
  });
}

// แสดง popup เมื่อคลิกที่การ์ด
function showPopup(message) {
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");

  popupMessage.textContent = message; // ตั้งข้อความใน popup
  popup.style.display = 'flex'; // แสดง popup
}

// ปิด popup
document.getElementById("popupClose").onclick = function() {
  const popup = document.getElementById("popup");
  popup.style.display = 'none'; // ซ่อน popup
}

// เรียกใช้งานเมื่อโหลดหน้าเว็บ
loadCards();

// กดปุ่มเพื่อสุ่มการ์ดใหม่
document.getElementById("shuffleButton").onclick = shuffleCards;
