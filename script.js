// Small interactive details for Chinni's love-letter website.
document.querySelectorAll('.reason').forEach((button) => {
  button.addEventListener('click', () => {
    const isOpen = button.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
    const sign = button.querySelector('b');
    if (sign) sign.textContent = isOpen ? '−' : '+';
  });
});

function makeHeart(x, y) {
  const heart = document.createElement('span');
  heart.className = 'heart-pop';
  heart.textContent = ['♡', '♥', '✿'][Math.floor(Math.random() * 3)];
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.color = ['#b86f70', '#965658', '#c59b83'][Math.floor(Math.random() * 3)];
  document.body.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}

document.querySelectorAll('.button').forEach((button) => {
  if (button.id === 'yes-button') return;
  button.addEventListener('click', (event) => {
    const rect = button.getBoundingClientRect();
    makeHeart(rect.left + rect.width / 2, rect.top + rect.height / 2);
  });
});

const yesButton = document.getElementById('yes-button');
if (yesButton) {
  yesButton.addEventListener('click', () => {
    const message = document.getElementById('answer-message');
    message.textContent = 'Yayyy! You’re stuck with me, Akhiluuuuuuu. Love you loads! ♡';
    for (let i = 0; i < 22; i++) {
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight * (0.35 + Math.random() * 0.5);
      setTimeout(() => makeHeart(x, y), i * 45);
    }
    yesButton.textContent = 'Forever & always ♡';
    yesButton.disabled = true;
  });
}

// Make photo placeholders easy to identify when replacing them with your own pictures.
document.querySelectorAll('.photo-placeholder').forEach((placeholder) => {
  placeholder.setAttribute('role', 'img');
  placeholder.setAttribute('aria-label', placeholder.innerText.replace(/\s+/g, ' ').trim());
});
