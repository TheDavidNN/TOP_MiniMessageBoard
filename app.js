// Express
const express = require("express");
const app = express();

// EJS
const path = require("node:path");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


app.get("/new", (req, res) => res.render("form"));
app.get("/", (req, res) => res.render("index", {title: "Mini Messageboard", messages: messages}));
app.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect("/");
});


const PORT = 3000;
app.listen(PORT, () => { console.log(`App is now running on http://localhost:${PORT}`); });