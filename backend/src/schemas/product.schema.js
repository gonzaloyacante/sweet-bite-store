import Joi from 'joi';

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);
const price = Joi.number().min(0);
const description = Joi.string().min(10);
const categoryId = Joi.number().integer();
const image = Joi.string().uri();

export const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  categoryId: categoryId.required(),
  image: image.required()
});

export const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  categoryId: categoryId,
  image: image
});

export const getProductSchema = Joi.object({
  id: id.required()
});
