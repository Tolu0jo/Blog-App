import { db } from "../config/db";
import { DataTypes } from "sequelize";

const Users = db.define('User', {
  userId:{
    type : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img:{
    type: DataTypes.STRING,
  }
});
export default Users;