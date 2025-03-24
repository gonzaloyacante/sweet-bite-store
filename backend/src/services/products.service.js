import boom from '@hapi/boom';

import { BaseService } from './base.service.js';

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
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      },
      {
        id: 2,
        name: 'Cheesecake Frutos Rojos',
        price: 2800,
        description: 'Cheesecake New York style con cobertura de frutos rojos frescos',
        categoryId: 1,
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad',
      },
      {
        id: 3,
        name: 'Cupcakes Vainilla',
        price: 800,
        description: 'Cupcakes de vainilla con frosting de buttercream',
        categoryId: 2,
        image: 'https://images.unsplash.com/photo-1587668178277-295251f900ce',
      },
      {
        id: 4,
        name: 'Torta Red Velvet',
        price: 3000,
        description: 'Clásica torta Red Velvet con frosting de queso crema',
        categoryId: 1,
        image: 'https://images.unsplash.com/photo-1586788680399-2055a72e7839',
      },
      {
        id: 5,
        name: 'Macarons Surtidos',
        price: 1500,
        description: 'Box de 6 macarons en sabores variados',
        categoryId: 3,
        image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43',
      },
    ];
  }

  async findAll() {
    return this.products;
  }

  async findByCategory(categoryId) {
    const products = this.products.filter((item) => item.categoryId === categoryId);
    if (!products.length) {
      throw boom.notFound('No hay productos en esta categoría');
    }
    return products;
  }
}
