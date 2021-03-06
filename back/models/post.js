module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Post",
    {
      //MySQL에는 users 테이블 생성
      //id가 기본적으로 들어있다.
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      //RetweetId
    },
    {
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci", //이모티콘 저장
    }
  );
  Post.associate = (db) => {
    db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" }); //post.addHashtags
    db.Post.hasMany(db.Comment); //post.addComments
    db.Post.hasMany(db.Image); //post.addImages
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" }); //post.addlikers , post.removelikers
    //나중에 as에 따라서 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 된다.
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //리트윗 게시글 //post.addRetweet
  };
  return Post;
};
