import boom from "@hapi/boom";

export class BaseService {
  constructor() {
    this.data = [];
  }

  async findAll() {
    return this.data;
  }

  async findOne(id) {
    const item = this.data.find((item) => item.id === id);
    if (!item) {
      throw boom.notFound("Item no encontrado");
    }
    return item;
  }

  async create(data) {
    const newItem = {
      id: this.data.length + 1,
      ...data,
    };
    this.data.push(newItem);
    return newItem;
  }

  async update(id, changes) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound("Item no encontrado");
    }
    const item = this.data[index];
    this.data[index] = {
      ...item,
      ...changes,
    };
    return this.data[index];
  }

  async delete(id) {
    const index = this.data.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound("Item no encontrado");
    }
    this.data.splice(index, 1);
    return { id };
  }
}
