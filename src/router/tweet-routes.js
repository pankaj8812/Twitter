const express = require("express");
const { tweetController, likeController, userController, commentController } = require("../controller");

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


//comments

router.post("/comment", commentController.createComment);
//id = tweetId
router.get("/comment/:id", commentController.getAllComment);
// id = commentId
router.get("/comment/one/:id", commentController.getComment);
router.patch("/comment/:id", commentController.updateComment);
router.delete("/comment/:id", commentController.deleteComment);

module.exports = router;