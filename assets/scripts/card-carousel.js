document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.s-card');
  const buttons = document.querySelectorAll('.s-controller__button');

  function updateCarousel(activeIndex) {
    cards.forEach((card, index) => {
      card.classList.remove('s-card--active', 's-card--left', 's-card--right');

      if (index === activeIndex) {
        card.classList.add('s-card--active');
      } else if (index < activeIndex) {
        card.classList.add('s-card--left');
      } else {
        card.classList.add('s-card--right');
      }
    });

    buttons.forEach((btn, idx) => {
      btn.classList.toggle('s-controller__button--active', idx === activeIndex);
    });
  }

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => updateCarousel(i));
  });

  // Inicializa mostrando a segunda carta
  updateCarousel(1);
});
