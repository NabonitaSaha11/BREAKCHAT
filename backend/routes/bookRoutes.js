//gets book only when logged in 

const express = require("express");
const { getBooks, addBook } = require("../controllers/bookController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


router.get("/", protect, getBooks);
router.post("/", protect, addBook);

module.exports = router;
