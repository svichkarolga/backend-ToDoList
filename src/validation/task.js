import Joi from 'joi';

export const taskSchema = Joi.object({
  task: Joi.string().max(25).required(),
  description: Joi.string().max(50),
  columnName: Joi.string().valid('ToDo', 'In Progress', 'Done').default('ToDo'),
});
