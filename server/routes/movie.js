const router = require("express").Router()
const MovieController = require("../controllers/Movie")

router.post("/addmovie", MovieController.addMovie)
router.delete("/:id", MovieController.deleteMovie)
router.get("/:id", MovieController.getMovie)
router.get("/", MovieController.getAllMovie)



module.exports = router