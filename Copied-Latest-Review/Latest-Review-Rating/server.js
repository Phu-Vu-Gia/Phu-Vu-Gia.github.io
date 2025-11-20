require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3000;
const expressLayouts = require("express-ejs-layouts");

const indexRoute = require("./routes/index");
const shopRoute = require("./routes/shopping-cart/shop");
const cartRoute = require("./routes/shopping-cart/cart");
const checkoutRoute = require("./routes/shopping-cart/checkout");
const orderConfirmationRoute = require("./routes/shopping-cart/order-confirmation");
const orderRoute = require("./routes/shopping-cart/orders");
const categoriesRoute = require("./routes/shopping-cart/categories");

// Serve Static Files
app.use(express.static("public"));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// View Templating
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/main");

// For sign-in and sign-up pages
app.get("/signin", (req, res) => {
  res.render("Sign-in_Register/signin", { title: 'Sign In', layout: './layouts/login_signup_main.ejs' });
});
app.get("/signup", (req, res) => {
  res.render("Sign-in_Register/signup", { title: 'Sign Up', layout: './layouts/login_signup_main.ejs' });
});
app.get("/signup_security", (req, res) => {
  res.render("Sign-in_Register/signup_security", { title: 'Security Question', layout: './layouts/login_signup_main.ejs' });
});
app.get("/retrieval-check", (req, res) => {
  res.render("Sign-in_Register/retrieval-check", { title: 'Reset Password', layout: './layouts/login_signup_main.ejs' });
});
app.get("/reset-pass", (req, res) => {
  res.render("Sign-in_Register/reset-pass", { title: 'Reset Password', layout: './layouts/login_signup_main.ejs' });
});

// For user profile related pages
app.get("/my-profile", (req, res) => {
  res.render("User-Profile/my-profile", { title: 'Profile' });
});

app.get("/edit-profile", (req, res) => {
  res.render("User-Profile/my-profile-edit", { title: 'Profile' });
});

app.get("/my-games", (req, res) => {
  res.render("User-Profile/my-games", { title: 'My Games' });
});

app.get("/security-settings", (req, res) => {
  res.render("User-Profile/security-settings", { title: 'Security' });
});

app.get("/edit-security-settings", (req, res) => {
  res.render("User-Profile/security-settings-edit", { title: 'Security' });
});

// Home Page
app.use("/", indexRoute);

// Shopping Cart Module
app.use("/shop", shopRoute);
app.use("/cart", cartRoute);
app.use("/checkout", checkoutRoute);
app.use("/order-confirmation", orderConfirmationRoute);
app.use("/orders", orderRoute);
app.use("/categories", categoriesRoute);

// Blog Module
app.get("/blog", (req, res) => {
  res.render("blog/blog", { title: 'Blog' });
});

// Blog detail route (static for now; slug ignored)
app.get("/blog/:slug", (req, res) => {
  res.render("blog/blog-detail", { title: 'Blog' });
});

// Review & Rating Module
// Customer review list (list of reviews)
app.get("/reviews", (req, res) => {
  res.render("review/customerReview", { title: 'Customer Reviews' });
});

// Page: Full review
app.get("/reviews/:id", (req, res) => {
  const id = req.params.id;
  res.render("review/full-review", { id, title: 'Full Review' });
});

// Discussion Forum Module
const forumRoute = require("./routes/Forum");
app.use("/forum", forumRoute);

// ---------- Data File ----------
const DATA_FILE = path.join(__dirname, "data", "threads.json");

// Create data folder + file if not exists
if (!fs.existsSync(path.dirname(DATA_FILE))) {
  fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
}
if (!fs.existsSync(DATA_FILE)) {
  const dummyThreads = [
    {
      id: 1,
      title: "Best Graphics Settings for Cyberpunk 2077?",
      author: "JohnDoe",
      content:
          "Hey everyone! I'm running an RTX 3070 and i7-12700K. What are the best settings for 1440p with ray tracing? I keep getting frame drops in Night City...",
      replies: 12,
      likes: 6,
      liked: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "Anyone playing the new Elden Ring DLC?",
      author: "GamerAlex",
      content:
          "Just started Shadow of the Erdtree. The new boss is insane! Anyone found the secret area yet? No spoilers please!",
      replies: 8,
      likes: 1,
      liked: false,
      createdAt: new Date(),
    },
  ];
  fs.writeFileSync(DATA_FILE, JSON.stringify(dummyThreads, null, 2));
}

// Sitemap
app.get("/sitemap", (req, res) => {
  res.render("sitemap", { title: 'Sitemap' });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
