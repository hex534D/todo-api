import pool from '../db/connection';
import logger from '../logging/logger';

const createTodoTable = async () => {
  const todoTableQuery = `
    CREATE TABLE IF NOT EXISTS todos (
      id VARCHAR(40) PRIMARY KEY,
      name VARCHAR(75) NOT NULL,
      completed BOOL DEFAULT false,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  try {
    pool.query(todoTableQuery);
    logger.info("Todo table is created if it doesn't exists");
  } catch (err) {
    logger.error('Error in creating a todo table');
  }
};

export default createTodoTable;
