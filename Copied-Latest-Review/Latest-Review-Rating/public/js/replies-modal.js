// public/js/replies-modal.js
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("repliesOverlay");
  const closeBtn = document.getElementById("closeModal");
  const postBtn = document.getElementById("postReply");
  const replyInput = document.getElementById("replyInput");
  const repliesList = document.getElementById("repliesList");

  let currentThread = null;
  let repliesState = {
    1: [
      { author: "Alex", content: "Great settings!", avatar: "alex" },
      { author: "Sam", content: "RTX 3070 here.", avatar: "sam" },
    ],
  };

  document.querySelectorAll(".replies.clickable").forEach((el) => {
    el.addEventListener("click", () => {
      const threadId = el.dataset.threadId;
      const card = el.closest(".thread-card");
      currentThread = {
        id: threadId,
        title: card.querySelector(".thread-title").textContent,
        author: card.querySelector(".author").textContent.replace("By ", ""),
        content: card.querySelector(".thread-content").textContent,
        avatar: card.querySelector(".thread-avatar").src,
      };

      renderModal();
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
    replyInput.value = "";
  };
  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener(
    "click",
    (e) => e.target === overlay && closeModal()
  );

  postBtn.addEventListener("click", () => {
    const text = replyInput.value.trim();
    if (!text || !currentThread) return;

    const newReply = { author: "You", content: text, avatar: "you" };
    if (!repliesState[currentThread.id]) repliesState[currentThread.id] = [];
    repliesState[currentThread.id].push(newReply);

    addReplyToList(newReply);
    replyInput.value = "";

    const countEl = document.querySelector(
      `.replies[data-thread-id="${currentThread.id}"]`
    );
    const count = repliesState[currentThread.id].length;
    countEl.textContent = `${count} ${count === 1 ? "Reply" : "Replies"}`;
  });

  function renderModal() {
    document.getElementById("modalAvatar").src = currentThread.avatar;
    document.getElementById("modalTitle").textContent = currentThread.title;
    document.getElementById(
      "modalAuthor"
    ).textContent = `By ${currentThread.author}`;
    document.getElementById("modalContent").textContent = currentThread.content;

    repliesList.innerHTML = "";
    (repliesState[currentThread.id] || []).forEach(addReplyToList);
  }

  function addReplyToList(reply) {
    const div = document.createElement("div");
    div.className = "reply-item";
    div.innerHTML = `
      <img src="https://i.pravatar.cc/44?u=${reply.avatar}" class="reply-avatar">
      <div class="reply-content">
        <div class="reply-author">${reply.author}</div>
        <p class="reply-text">${reply.content}</p>
      </div>
    `;
    repliesList.appendChild(div);
  }
});
