const express = require("express")
const router = express.Router()
const BookController = require("../controllers/BookController")

router.get("/", BookController.showBooks)
router.get("/create", BookController.createBook)
router.post("/create", BookController.createBookPost)

module.exports = router