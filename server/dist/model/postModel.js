"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
const userModel_1 = __importDefault(require("./userModel"));
const Posts = db_1.db.define('Post', {
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Desc: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    img: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cat: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
userModel_1.default.hasMany(Posts, { foreignKey: 'userId', });
Posts.belongsTo(userModel_1.default, { foreignKey: 'userId', });
exports.default = Posts;
