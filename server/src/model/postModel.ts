import { db } from "../config/db";
import { DataTypes } from "sequelize";
import Users from "./userModel";

const Posts= db.define('Post', {
    id:{
        type : DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      title:{
          type: DataTypes.STRING,
          allowNull: false,  
      },
      Desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      img:{
          type: DataTypes.STRING,
        allowNull: false,
      },
     userId:{
        type: DataTypes.STRING,
        allowNull: false,
     },
     cat:{
      type: DataTypes.STRING,
      allowNull: false,
     }
    });
    
    Users.hasMany(Posts, {foreignKey: 'userId', });
    Posts.belongsTo(Users, {foreignKey: 'userId', });
    export default Posts
