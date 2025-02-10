import { getEnvVar } from '../utils/getEnvVar.js';
import {
  getTaskById,
  createTask,
  patchTask,
  deleteTask,
} from '../services/task.js';
import createHttpError from 'http-errors';

export const getTaskByIdController = async (req, res, next) => {
  const { taskId } = req.params;
  try {
    const task = await getTaskById(taskId);
    res.json({
      status: 200,
      message: `Successfully found task with id ${taskId}!`,
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

export const createTaskController = async (req, res) => {
  const { taskId } = req.params;
  const task = await createTask({
    ...req.body,
    taskId,
    columnName: req.body.columnName || 'ToDo',
  });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a task!',
    data: task,
  });
};

export const patchTaskController = async (req, res, next) => {
  const { taskId } = req.params;
  const result = await patchTask(taskId, req.body);
  res.json({
    status: 200,
    message: `Successfully patched a task!`,
    data: result,
  });
};

export const deleteContactController = async (req, res, next) => {
  const { taskId } = req.params;
  const task = await deleteTask(taskId);
  if (!task) {
    next(createHttpError(404, 'Task not found'));
    return;
  }
  res.status(204).send();
};
