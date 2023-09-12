const express = require("express");
const { tweetController } = require("../controller");

const router = express.Router();


router.post("/", tweetController.creatTweet);
router.get("/", tweetController.getAllTweet);
router.get("/:id", tweetController.getTweet);
router.patch("/:id", tweetController.updateTweet);
router.delete("/:id", tweetController.deleteTweet);

module.exports = router;