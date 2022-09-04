// Modules & Globals
require("dotenv").config();
const PORT = process.env.PORT;
const express = require("express");
const methodOverride = require("method-override");
const app = express();

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Controllers & Routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.status(404).render("error404");
});

app.listen(PORT, console.log(`App is listening on http://localhost:${PORT}`));
