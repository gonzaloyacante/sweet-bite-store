import { BaseService } from './base.service.js';
import boom from '@hapi/boom';

export class ProductsService extends BaseService {
  constructor() {
    super();
    this.products = [
      {
        id: 1,
        name: 'Torta de Chocolate',
        price: 2500,
        description: 'Deliciosa torta de chocolate con ganache',
        categoryId: 1,
        image: 'https://example.com/chocolate-cake.jpg'
      }
    ];
  }

  async findByCategory(categoryId) {
    const products = this.products.filter(item => item.categoryId === categoryId);
    if (!products.length) {
      throw boom.notFound('No hay productos en esta categoría');
    }
    return products;
  }
}
