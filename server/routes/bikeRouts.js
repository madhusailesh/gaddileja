const router = require("express").Router();

const auth = require("../middleware/auth");

const { addBike, getBikes } = require("../controllers/bikeController");

router.post("/", auth, addBike);

router.get("/", getBikes);

module.exports = router;
