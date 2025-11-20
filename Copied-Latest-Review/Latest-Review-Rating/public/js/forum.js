// public/js/forum.js
document.addEventListener("DOMContentLoaded", () => {
  // Search
  document.getElementById("searchBar")?.addEventListener("input", (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll(".thread-card").forEach((card) => {
      card.style.display = card.textContent.toLowerCase().includes(q)
        ? ""
        : "none";
    });
  });

  // Like button (frontend only)
  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      if (this.classList.contains("liked")) return;
      const countEl = this.querySelector(".like-count");
      const icon = this.querySelector("i");
      let count = parseInt(countEl.textContent);
      countEl.textContent = count + 1;
      this.classList.add("liked");
      icon.classList.replace("bi-hand-thumbs-up", "bi-hand-thumbs-up-fill");
    });
  });
});
