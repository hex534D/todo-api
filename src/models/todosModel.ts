import pool from '../db/connection';

const getAllTodosService = async () => {
  const todos = await pool.query('SELECT * FROM todos');
  return todos.rows;
};

const getTodoByIdService = async (id: number) => {
  const todo = await pool.query('SELECT * FROM todos where id=$1 ', [id]);
  return todo.rows[0];
};

const createTodoService = async (name: string, id: string) => {
  const todo = await pool.query(
    'INSERT INTO todos (id, name) VALUES($1, $2) RETURNING *',
    [id, name]
  );
  return todo;
};

const updateTodoService = async (name: string, id: number) => {
  const todo = await pool.query(
    'UPDATE todos SET name=$1 WHERE id=$2 RETURNING *',
    [name, id]
  );
  return todo;
};

const deleteTodoService = async (id: number) => {
  const todo = await pool.query('DELETE FROM todos WHERE id=$1', [id]);
  return todo;
};

const toggleTodoStatusService = async (completed: boolean, id: number) => {
  const todo = await pool.query(
    'UPDATE todos SET completed = NOT completed WHERE id=$1 RETURNING *',
    [id]
  );
  return todo;
};

export {
  getAllTodosService,
  getTodoByIdService,
  createTodoService,
  updateTodoService,
  deleteTodoService,
  toggleTodoStatusService,
};
