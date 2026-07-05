import { DataSource } from 'typeorm';
import { Order } from './orders/entities/order.entity';
import { Product } from './products/entities/product.entity';
import { User } from './auth/entities/user.entity';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'your_new_password',
  database: process.env.DB_DATABASE || 'postgres',
  entities: [Order, Product, User],
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
  migrationsTableName: 'typeorm_migrations',
  synchronize: false, // MUST BE FALSE when using migrations
  logging: true,
});
