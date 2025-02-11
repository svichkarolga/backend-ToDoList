import { Router } from 'express';
import {
  getAllTasksController,
  getTaskByIdController,
  createTaskController,
  patchTaskController,
  deleteContactController,
} from '../controllers/task.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { taskSchema } from '../validation/task.js';

const router = Router();

router.get('/', ctrlWrapper(getAllTasksController));
router.get('/:taskId', ctrlWrapper(getTaskByIdController));
router.post('/', validateBody(taskSchema), ctrlWrapper(createTaskController));
router.patch(
  '/:taskId',
  validateBody(taskSchema),
  ctrlWrapper(patchTaskController),
);
router.delete('/:taskId', ctrlWrapper(deleteContactController));

export default router;
