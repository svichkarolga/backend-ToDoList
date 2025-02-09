import Joi from 'joi';

export const taskSchema = Joi.object({
  task: Joi.string().max(25),
  description: Joi.string().max(50),
});
