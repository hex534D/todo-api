import { Pool } from 'pg';
import logger from '../logging/logger';

const pool = new Pool({
  host: process.env.HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  port: +process.env.POSTGRES_PORT!,
});

pool.on('connect', () => {
  logger.info(
    `Connection pool established with DB: ${process.env.POSTGRES_DATABASE}`
  );
});

pool.on('error', () => logger.error('Error in connecting to DB'));

export default pool;
