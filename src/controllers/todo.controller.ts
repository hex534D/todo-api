import crypto from 'crypto';

import {
  createTodoService,
  deleteTodoService,
  getAllTodosService,
  getTodoByIdService,
  toggleTodoStatusService,
  updateTodoService,
} from '../models/todosModel';
import { asyncHandler } from '../utils/asyncHandler';
import { success } from '../utils/response-handler';

const getAllTodos = asyncHandler(async (req: any, res: any) => {
  const todos = await getAllTodosService();
  res
    .status(200)
    .json(success(200, 'Fetching all todos successful', { todos }));
});

const getTodoById = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const todo = await getTodoByIdService(id);

  return res
    .status(200)
    .json(success(200, `Todo successfully fetched.`, { todo }));
});

const createTodo = asyncHandler(async (req: any, res: any) => {
  const { name } = req.body;
  const id = crypto.randomUUID();
  const { rows } = await createTodoService(name, id);

  res
    .status(200)
    .json(success(200, `Todo successfully created.`, { todo: rows[0] }));
});

const updateTodo = asyncHandler(async (req: any, res: any) => {
  const { name, id } = req.body;
  const { rows } = await updateTodoService(name, id);

  res
    .status(200)
    .json(success(200, `Todo successfully updated.`, { todo: rows[0] }));
});

const deleteTodo = asyncHandler(async (req: any, res: any) => {
  const { id } = req.params;
  const { rowCount } = await deleteTodoService(id);

  res
    .status(200)
    .json(
      success(
        200,
        rowCount ? 'Todo successfully deleted.' : 'Todo not found.',
        []
      )
    );
});

const toggleTodoStatus = asyncHandler(async (req: any, res: any) => {
  const { id, completed } = req.body;
  const { rows } = await toggleTodoStatusService(completed, id);

  res
    .status(200)
    .json(success(200, `Todo status updated successfully.`, { todo: rows[0] }));
});

export {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
  toggleTodoStatus,
};
