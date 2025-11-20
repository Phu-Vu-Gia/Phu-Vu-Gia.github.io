// Customer Review Data
const reviews = [
  {
    id: 1,
    title: "A Stunning Galaxy Reborn — A far far away galaxy at Its Best",
    user: "GamerPro123",
    date: "2025-10-15",
    img: "/img/swtor.png",
    stars: 5,
  },

  {
    id: 2,
    title: "What a galaxy of Star Wars!! I've been waiting for this so long, my childhood memories!!",
    user: "ShadowKnight",
    date: "2025-10-10",
    img: "/img/swtor.png",
    stars: 5,
  },

  {
    id: 3,
    title: "Immersive Storytelling and Style Beyond Compare",
    user: "MagicUser",
    date: "2025-10-05",
    img: "/img/swtor.png",
    stars: 5,
  },
];

// Generate Bootstrap Star Icons
function generateStars(count) {
  let starsHTML = "";
  for (let i = 0; i < count; i++) {
    starsHTML += `<i class="bi bi-star-fill"></i>`;
  }
  return starsHTML;
}

// Function to Render Review Cards
function loadReviews() {
  const container = document.querySelector(".reviews-container");
  if (!container) return;

  reviews.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("customer-review-card");

    card.innerHTML = `
            <img src="${r.img}" alt="Review image">
            
            <div class="review-content">
                <a href="/reviews/${r.id}">
                    <h3>${r.title}</h3>
                </a>

                <div class="review-meta">
                    <span class="meta-item"><i class="bi bi-person"></i> ${
                      r.user
                    }</span>
                    
                    <span class="meta-item"><i class="bi bi-calendar4"></i> ${
                      r.date
                    }</span>
                </div>
            </div>

            <div class="stars">${generateStars(r.stars)}</div>
        `;

    container.appendChild(card);
  });
}

// Load reviews when page loads
document.addEventListener("DOMContentLoaded", loadReviews);