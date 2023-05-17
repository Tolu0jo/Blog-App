"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const sequelize_1 = require("sequelize");
// Create a Sequelize instance and specify the database connection details
// const sequelize = new Sequelize(
//   'Blog-app', 'root', '12345678', {
//   host: 'localhost',
//   dialect: 'mysql',
// });
// sequelize.sync()
//   .then(() => {
//     console.log('Models synchronized with the database.');
//   })
//   .catch((error) => {
//     console.error('Unable to synchronize models with the database:', error);
//   });
exports.db = new sequelize_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    port: 3306,
    database: "Blog",
    username: "root",
    password: "12345678"
});
