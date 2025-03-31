import dotenv from 'dotenv';
dotenv.config();

import './db/connection';
import { app } from './app';
import logger from './logging/logger';
import createTodoTable from './data/createTables';

const PORT = process.env.PORT || 8001;

// create tables if any
createTodoTable();

app.listen(PORT, async () => {
  logger.info(`Server is running on port ${PORT}...`);
});
