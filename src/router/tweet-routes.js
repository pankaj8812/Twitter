const express = require("express");
const { tweetController, likeController, userController } = require("../controller");

const router = express.Router();


router.post("/", tweetController.creatTweet);
router.get("/", tweetController.getAllTweet);
router.get("/:id", tweetController.getTweet);
router.patch("/:id", tweetController.updateTweet);
router.delete("/:id", tweetController.deleteTweet);

//

router.post("/like", likeController.toggleLike);

router.post("/signin", userController.signIn);
router.post("/signup", userController.signUp);

module.exports = router;