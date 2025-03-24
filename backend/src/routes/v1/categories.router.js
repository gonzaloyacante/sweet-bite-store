import express from 'express';
import { CategoriesService } from '../../services/categories.service.js';
import { validatorHandler } from '../../middlewares/validator.handler.js';
import { createCategorySchema, updateCategorySchema, getCategorySchema } from '../../schemas/category.schema.js';

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.findAll();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(parseInt(id));
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

export { router as categoriesRouter };
