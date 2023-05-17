"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const typeorm_1 = require("typeorm");
const subscriber_1 = require("./subscriber");
const entitty_1 = require("./entitty");
let connection;
async function connectToDatabase() {
    if (!connection) {
        connection = await (0, typeorm_1.createConnection)({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '12345678',
            database: 'Blog-app',
            synchronize: true,
            logging: true,
            entities: [
                entitty_1.User // Provide the absolute path to the User entity
            ],
            subscribers: [
                subscriber_1.UserSubscriber, // Import the UserSubscriber from the subscriber file
            ],
        });
        console.log('Connected to MySQL database');
    }
    return connection;
}
exports.connectToDatabase = connectToDatabase;
//await connectToDatabase();
