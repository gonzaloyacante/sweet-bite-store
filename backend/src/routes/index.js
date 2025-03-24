import express from 'express';

// import { authRouter } from './v1/auth.router.js';
import { categoriesRouter } from './v1/categories.router.js';
import { productsRouter } from './v1/products.router.js';
// import { usersRouter } from './v1/users.router.js';

export function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  //   router.use('/users', usersRouter);
  //   router.use('/auth', authRouter);
}
