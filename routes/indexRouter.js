const { Router } = require("express");

const indexRouter = Router();

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

indexRouter.get("/new", (req, res) => res.render("form"));
indexRouter.post("/new", (req, res) => {
    messages.push({ text: req.body.message, user: req.body.user, added: new Date() });
    res.redirect("/");
});

indexRouter.get("/", (req, res) => res.render("index", { title: "Mini Messageboard", messages: messages }));

indexRouter.get("*", (req, res) => res.status(404).send("Page not found!"));

module.exports = indexRouter;