const LAB_DATA = {
  cards: [
    {
      icon: "✦",
      title: "Models",
      description: "Language model experiments, fine-tunes, and small research ideas."
    },
    {
      icon: "☾",
      title: "Research",
      description: "Notes, tests, and explorations around AI, ML, and useful systems."
    },
    {
      icon: "⬡",
      title: "Tools",
      description: "Small utilities and web projects built to make ideas easier to try."
    }
  ],
  stars: 90
};

function createStars() {
  const sky = document.getElementById("night-sky");

  for (let i = 0; i < LAB_DATA.stars; i++) {
    const star = document.createElement("span");
    star.className = "star";

    // a little depth: ~1 in 10 stars is bigger, ~1 in 14 is brand-tinted
    if (Math.random() < 0.1) star.classList.add("big");
    else if (Math.random() < 0.07) star.classList.add("tint");

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 3}s`;
    star.style.animationDuration = `${2 + Math.random() * 4}s`;
    sky.appendChild(star);
  }
}

function renderCards() {
  const grid = document.getElementById("work");
  grid.innerHTML = LAB_DATA.cards.map(card => `
    <article class="card">
      <div class="card-icon">${card.icon}</div>
      <h3>${card.title}</h3>
      <p>${card.description}</p>
    </article>
  `).join("");
}

createStars();
renderCards();
