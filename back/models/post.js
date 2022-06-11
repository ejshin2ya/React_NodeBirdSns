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
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag);
    db.Post.hasMany(db.Comment);
    db.Post.hasMany(db.Image);
    db.Post.belongsToMany(db.User, { through: "Like", as: "Likers" });
    //나중에 as에 따라서 post.getLikers처럼 게시글 좋아요 누른 사람을 가져오게 된다.
    db.Post.belongsTo(db.Post, { as: "Retweet" }); //리트윗 게시글
  };
  return Post;
};
