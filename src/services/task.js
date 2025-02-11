import { TaskCollection } from '../db/models/task.js';

export const getAllTasks = async () => {
  const task = await TaskCollection.find();
  return task;
};

export const getTaskById = async (taskId) => {
  const task = await TaskCollection.findOne({ _id: taskId });
  return task;
};

export const createTask = async (payload) => {
  const task = await TaskCollection.create(payload);
  return task;
};

export const patchTask = async (taskId, payload, options = {}) => {
  const rawResult = await TaskCollection.findByIdAndUpdate(
    { _id: taskId },
    payload,
    {
      new: true,
      includeResultMetadata: true,
      ...options,
    },
  );
  if (!rawResult) return null;
  return {
    task: rawResult.value,
  };
};

export const deleteTask = async (taskId) => {
  const task = await TaskCollection.findOneAndDelete({
    _id: taskId,
  });
  return task;
};
