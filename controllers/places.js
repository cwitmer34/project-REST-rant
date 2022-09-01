const router = require("express").Router();

// NEW
router.get("/new", (req, res) => {
  res.render("places/new");
});

// Get place id
router.get("/:id", (req, res) => {
  res.send("Hello");
});

// Post /places
router.post("/", (req, res) => {
  console.log(req.body);
  res.send("POST /places");
});

// Get /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/thai.jpg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/cafe.jpeg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;
