import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const description = Joi.string().min(10);

export const createCategorySchema = Joi.object({
  name: name.required(),
  description: description.required()
});

export const updateCategorySchema = Joi.object({
  name: name,
  description: description
});

export const getCategorySchema = Joi.object({
  id: id.required()
});
