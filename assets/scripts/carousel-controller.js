document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".s-card");
  const buttons = document.querySelectorAll(".s-controller__button");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove a classe ativa de todos os botões
      buttons.forEach(btn => btn.classList.remove("s-controller__button--active"));
      // Adiciona a classe ativa ao botão clicado
      button.classList.add("s-controller__button--active");

      // Move a posição das cartas
      cards.forEach((card, i) => {
        if (i === index) {
          card.style.transform = "translateX(0) scale(1.1)";
          card.style.zIndex = 2;
        } else if (i < index) {
          card.style.transform = "translateX(-120%) scale(0.9)";
          card.style.zIndex = 1;
        } else {
          card.style.transform = "translateX(120%) scale(0.9)";
          card.style.zIndex = 1;
        }
      });
    });
  });

  // Inicializa o carrossel na primeira carta
  buttons[0].click();
});
