const indexRouter = require("./routes/indexRouter");

const asyncHandler = require("express-async-handler");

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

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`App is now running on http://localhost:${PORT}`); });