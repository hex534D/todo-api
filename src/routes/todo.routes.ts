import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  toggleTodoStatus,
  updateTodo,
} from '../controllers/todo.controller';

const router = Router();

router.route('/').get(getAllTodos);
router.route('/:id').get(getTodoById);
router.route('/').post(createTodo);
router.route('/').put(updateTodo);
router.route('/:id').delete(deleteTodo);
router.route('/').patch(toggleTodoStatus);

export default router;
