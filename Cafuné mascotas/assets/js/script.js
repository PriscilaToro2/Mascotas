// Interacción con las cards de mascotas
const petCards = document.querySelectorAll(".pet-card");

petCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});

