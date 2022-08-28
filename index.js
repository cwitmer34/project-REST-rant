require("dotenv").config();

const PORT = process.env.PORT;

const express = require("express");
const app = express();

app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(PORT, console.log(`App is listening on ${PORT}`));
