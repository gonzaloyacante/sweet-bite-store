import express from 'express';

import { validatorHandler } from '../../middlewares/validator.handler.js';
import {
  createProductSchema,
  getProductSchema,
  // updateProductSchema,
} from '../../schemas/product.schema.js';
import { ProductsService } from '../../services/products.service.js';

const router = express.Router();
const service = new ProductsService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/category/:categoryId', async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const products = await service.findByCategory(parseInt(categoryId));
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', validatorHandler(getProductSchema, 'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(parseInt(id));
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.post('/', validatorHandler(createProductSchema, 'body'), async (req, res, next) => {
  try {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
});

export { router as productsRouter };
