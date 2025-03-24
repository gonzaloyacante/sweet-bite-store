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
        description: 'Deliciosa torta de chocolate con ganache y decoración de frutos rojos',
        categoryId: 1,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587'
      },
      {
        id: 2,
        name: 'Cheesecake Frutos Rojos',
        price: 2800,
        description: 'Cheesecake New York style con cobertura de frutos rojos frescos',
        categoryId: 1,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad'
      },
      {
        id: 3,
        name: 'Cupcakes Vainilla',
        price: 800,
        description: 'Cupcakes de vainilla con frosting de buttercream',
        categoryId: 2,
        image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce'
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
