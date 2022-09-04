const router = require("express").Router();
const places = require("../models/places");

// NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// Get place id
router.get("/:id", (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)) {
    res.render("error404");
  } else if (!places[id]) {
    res.render("error404");
  } else {
    res.render("places/show", { place: places[id] });
  }
});

// Post /places
router.post("/", (req, res) => {
  if (req.body.image === "") {
    // Default image if none is provided
    req.body.image = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

// Get /places
router.get("/", (req, res) => {
  res.render("places/index", { places });
});

module.exports = router;
