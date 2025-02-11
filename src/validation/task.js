import Joi from 'joi';

export const taskSchema = Joi.object({
  title: Joi.string().max(25),
  description: Joi.string().max(50),
  columnName: Joi.string().valid('ToDo', 'In Progress', 'Done').default('ToDo'),
});
