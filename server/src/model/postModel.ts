import { db } from "../config/db";
import { DataTypes } from "sequelize";
import Users from "./userModel";

const Posts = db.define("Post", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
    // defaultValue: 'null',
  },
  userId: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: Users,
      key: 'userId',
    }
  },
  cat: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.hasMany(Posts, {  as: 'Post', foreignKey: "userId" });
Posts.belongsTo(Users, {  as: 'User', foreignKey: "userId" });
export default Posts;
