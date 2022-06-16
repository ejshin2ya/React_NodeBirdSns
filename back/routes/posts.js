const express = require("express");
const { Post, User, Image, Comment } = require("../models");
const router = express.Router();
router.get("/", async (req, res, next) => {
  //GET /posts
  try {
    const posts = await Post.findAll({
      // where:{id:lastId},
      limit: 10,
      // offset:100, //101~110
      order: [
        ["createdAt", "DESC"],
        [Comment, "createdAt", "DESC"],
      ], //최신게시글부터 가져온다(20,19,.....1)
      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
              order: [["createdAt", "DESC"]],
            },
          ],
        },
        {
          model: User, //좋아요 누른 사람
          as: "Likers",
          attributes: ["id"],
        },
        {
          model: Post,
          as: "Retweet",
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
            {
              model: Image,
            },
          ],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
