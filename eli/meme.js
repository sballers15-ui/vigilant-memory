// Meme interactivity: reveals a playful 'clickbait' message
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('revealBtn');
  const reveal = document.getElementById('reveal');
  const headline = document.querySelector('.headline');

  const reveals = [
    "He dunked on three courts in one night! 🏀",
    "He signed autographs while juggling a basketball and a smoothie! 😂",
    "Turns out he's been secretly coaching neighborhood kids — legend.",
    "No clickbait: he passed the ball. The end. (But the dunk was unreal.)"
  ];

  let idx = 0;
  btn.addEventListener('click', () => {
    const text = reveals[idx % reveals.length];
    idx += 1;
    reveal.textContent = text;
    reveal.classList.add('visible');
    headline.classList.add('popped');
    btn.textContent = 'Hide Reveal';

    setTimeout(() => headline.classList.remove('popped'), 300);
  });

  // allow hiding by clicking the reveal itself
  reveal.addEventListener('click', () => {
    if (reveal.classList.contains('visible')) {
      reveal.classList.remove('visible');
      btn.textContent = 'Click to Reveal';
    }
  });
});
