import { BaseService } from './base.service.js';

export class CategoriesService extends BaseService {
  constructor() {
    super();
    this.categories = [
      {
        id: 1,
        name: 'Tortas',
        description: 'Tortas para toda ocasión'
      },
      {
        id: 2,
        name: 'Cupcakes',
        description: 'Pequeños placeres dulces'
      },
      {
        id: 3,
        name: 'Pasteles especiales',
        description: 'Para eventos y celebraciones'
      }
    ];
  }
}
