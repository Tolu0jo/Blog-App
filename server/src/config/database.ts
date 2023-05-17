import { createConnection, Connection } from 'typeorm';
import { resolve } from 'path';
import { UserSubscriber } from './subscriber';
import { User } from './entitty';
import { CreateUsersTable } from './migration';


let connection: Connection;

export async function connectToDatabase(): Promise<Connection> {
  if (!connection) {
    connection = await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'Blog-app',
      synchronize: true,
      logging: true,
      entities: [
         User// Provide the absolute path to the User entity
      ],
      
      subscribers: [
        UserSubscriber, // Import the UserSubscriber from the subscriber file
      ],
    });

    console.log('Connected to MySQL database');
  }

  return connection;
}
//await connectToDatabase();