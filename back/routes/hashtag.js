const express = require("express");
const { Op } = require("sequelize");
const { Post, Hashtag, Image, Comment, User } = require("../models");
const router = express.Router();

router.get("/:tag", async (req, res, next) => {
  // GET /hashtag/노드
  try {
    const where = {};
    if (parseInt(req.query.lastId, 10)) {
      //초기 로딩이 아닐 때
      where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }; //lastId보다 작은 id 10개만 가져오기
    }
    const posts = await Post.findAll({
      where,
      limit: 10,
      order: [["createdAt", "DESC"]], //최신게시글부터 가져온다(20,19,.....1)
      include: [
        {
          model: Hashtag,
          where: { name: decodeURIComponent(req.params.tag) },
        },
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
            },
          ],
        },
        {
          model: User, //좋아요 누른 사람
          through: "Like",
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
