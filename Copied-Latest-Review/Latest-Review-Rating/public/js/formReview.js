document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("reviewOverlay");
  const openBtn = document.getElementById("openReviewButton");
  const close_btn = document.querySelector(".close-btn");
  const closeFooterBtn = document.querySelector(".btn-close");

  if (!overlay || !openBtn || !close_btn || !closeFooterBtn) {
    return;
  }

  // Open the form
  openBtn.addEventListener("click", () => {
    overlay.classList.add("show");
  });

  // Close button
  close_btn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // Close with the button "Close" in the footer
  closeFooterBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
  });

  // Also closed by clicking outside the form
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.classList.remove("show");
    }
  });

  // Rating menu dropdown
  const ratingSelect = document.getElementById("ratingSelect");
  const ratingTrigger = ratingSelect.querySelector(".rating-select-trigger");
  const ratingMenu = ratingSelect.querySelector(".rating-select-menu");
  const ratingHiddenInput = document.getElementById("review-rating");
  const ratingText = document.getElementById("ratingText");

  // Open or close the menu when click on "trigger"
  ratingTrigger.addEventListener("click", function (e) {
    e.stopPropagation();
    ratingSelect.classList.toggle("open");
  });

  // Choose 1-star rating
  ratingMenu.addEventListener("click", function (e) {
    const item = e.target.closest("li");
    if (!item) return;

    const value = item.dataset.value;

    ratingHiddenInput.value = value;
    ratingText.textContent = item.textContent;
    ratingSelect.classList.remove("open");
  });

  // Menu closed if user clicks outside
  document.addEventListener("click", function () {
    ratingSelect.classList.remove("open");
  });
});