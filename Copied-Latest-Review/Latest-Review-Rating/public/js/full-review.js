//   Full Review Data Source
const review = {
  1: {
    title: "A Stunning Galaxy Reborn — A far far away galaxy at Its Best",
    gameTitle: "Star Wars: The Old Republic",
    author: "GamerPro123",
    date: "2025-10-15",
    rating: 5,
    image: "/img/swtor.png",
    content: [
      `Amazing game! Best RPG I've played in years. I did deal with a game progressing bug pre 1.22 patch for PS5. But given how good the game is I'm definitely willing to let it slide. The side stuff can start feeling a bit samey after a while, so I strongly advise doing a handful at a time integrated with a decent amount of story.`,

      `The game play dynamics are brilliant. Having the options to be like a Jedi, go in swinging around your machete or simply blazing your gun. All these, while also incorporating things like face combat with lightsabers is a very nice touch and keeps the game pretty interesting in that regard. Basically it's a way to go through someone's memory, while being able to stop, play rewind, fast forward. As well as focus on various visual and audio aspects. This is to help you find clues to aid with missions in the game, but you can also do it for leisure at various missions.`,

      `The Characters and Character Interactions. It's clear that you can build some pretty solid character relationships depending on how you interact.`,
    ],
  },

  2: {
    title:
      "What a galaxy of Star Wars!! I've been waiting for this so long, my childhood memories!!",
    gameTitle: "Star Wars: The Old Republic",
    author: "ShadowKnight",
    date: "2025-10-10",
    rating: 5,
    image: "/img/swtor.png",
    content: [
      `Great gameplay with a huge memories of Star Wars fans.`,

      `It pushes your character into preferred status after you subscribe for a month and the subscription expires. This gives some marginal benefits over purely being F2P, but are restricted on the speed of XP gain, unlocks for higher quality gear, and the speed you unlock speeder piloting (to name a few). But a lot of the unlocks you can permanently unlock through the cartel market (the in game store that takes real world money). The nice thing as a sub is the game will give you some cartel coins (the in game currency you purchase with real world money) that you could use for some unlocks.`,

      `I recommend trying the game on F2P, and then after a couple of dozen levels, if you decide you like the game, drop the $15 for a one month subscription to unlock everything and get preferred status on your account forever.`,
    ],
  },

  3: {
    title: "Immersive Storytelling and Style Beyond Compare",
    gameTitle: "Star Wars: The Old Republic",
    author: "MagicUser",
    date: "2025-10-05",
    rating: 5,
    image: "/img/swtor.png",
    content: [
      `The graphics and story are pretty incredible, honestly my friend! But it is not satisfying me for all! SWTOR has some amazing storylines. Much of the early game questing/grinding has been streamlined, but you can still play through the original class stories as they were at release. Each original story is divided into 3 chapters (+ a prelude), which spans levels 1 to 50+.`,

      `Sith Warrior is definitely one of the better class stories to play through. It's not the most original plot, but the dialogue and general badassery hard carries it. It's a fun ride from start to finish. Bounty Hunter had one of the best Ch1 storylines from what I recall, but it falls off rather hard in Ch2 before it picks up again later in Ch3. Still worth a playthrough imo, but Sith Warrior may be a better starting point.`,

      `Also, don't sleep on the Imperial Agent - it's widely viewed as the best class story in the game.`,
    ],
  },
};

// Generate star icons based on rating
function generateStars(rating) {
  let html = "";
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    html += `<i class="bi bi-star-fill"></i>`;
  }

  html += `<span>(${rating.toFixed(1)})</span>`;
  return html;
}

// Render a selected review
function renderReview(data) {
  document.getElementById("review-title").textContent = data.title;
  document.getElementById("game-title").textContent = data.gameTitle;
  document.getElementById("review-author").textContent = data.author;
  document.getElementById("review-date").textContent = data.date;
  document.getElementById("review-image").src = data.image;

  // Stars
  document.getElementById("review-stars").innerHTML = generateStars(
    data.rating
  );

  // Content paragraphs
  const contentBox = document.getElementById("review-content");
  contentBox.innerHTML = ""; // clear previous
  data.content.forEach((p) => {
    contentBox.innerHTML += `<p>${p}</p>`;
  });
}

//   Main Loader Logic
(function loadReview() {
  const pathParts = window.location.pathname.split("/");
  const id = pathParts[pathParts.length - 1];

  const data = review[id];

  if (!data) {
    // If no data, show error message
    document.getElementById("review-title").textContent = "Review Not Found";
    document.getElementById("review-content").innerHTML = `
            <p>The review you're trying to access does not exist.</p>
        `;
    return;
  }

  // Render the correct review
  renderReview(data);
})();