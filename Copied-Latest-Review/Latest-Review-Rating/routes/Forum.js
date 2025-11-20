// routes/Forum.js
const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../data/threads.json");

// Load threads
let threads = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));

// Save threads
const saveThreads = () => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(threads, null, 2));
};

// GET: Forum
router.get("/", (req, res) => {
  res.render("forum/index", {
    layout: "./layouts/main",
    threads,
  });
});

// POST: Create
router.post("/create", (req, res) => {
  const { title, author, content } = req.body;
  const newThread = {
    id: threads.length > 0 ? Math.max(...threads.map((t) => t.id)) + 1 : 1,
    title,
    author,
    content,
    replies: 0,
    likes: 0,
    liked: false,
    createdAt: new Date(),
  };
  threads.push(newThread);
  saveThreads();
  res.redirect("/forum");
});

// POST: Like (ONE TIME ONLY)
router.post("/like/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const thread = threads.find((t) => t.id === id);
  if (thread && !thread.liked) {
    thread.likes += 1;
    thread.liked = true;
    saveThreads();
    res.json({ likes: thread.likes });
  } else {
    res.json({ likes: thread?.likes || 0 });
  }
});

// DELETE: Remove
router.delete("/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  threads = threads.filter((t) => t.id !== id);
  saveThreads();
  res.json({ success: true });
});

module.exports = router;
